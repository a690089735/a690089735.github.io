
(
	-- be sure to be in the init scripts folder
	sysinfo.currentdir= getfilenamePath (getThisScriptFilename())
	"Initializing PowerPreview..."
)
(
	function InitPowerPreview=
	(
		try 
		( 
			MaxLocale=undefined
			ProjectSettings=undefined
			NitrousHandler=undefined
			PPPrefs=undefined
			PPHelper=undefined

			roMasterRollout=undefined
			DEBUG=undefined
			
			DestroyDialog PowerPreview.mainDialog 	
			PowerPreview=undefined
			
			callbacks.removeScripts id:#PPActiveViewportChanged
			
			gc lite:true
			
			--format "PowerPreview.Init(): cleanup\n"
			
		) catch()	

		global PowerPreview


	)
	InitPowerPreview()


struct NitrousViewportSettings
(				
	private
		--forward declaration
		function CopyFrom=(),
	
	public					
		-- properties and defaults
		ShowEdgedFacesEnabled=false,
		UseTextureEnabled=true,
		TransparencyEnabled=true,
		SelectedEdgedFacesEnabled=false,
		ShowSelectionBracketsEnabled=true,
		ShadeSelectedFacesEnabled=true,
		DisableViewport=false,
		ViewportClippingEnabled=false,
		UseEnvironmentBackgroundColorEnabled=false,
		UseViewportBackgroundEnabled=true,
		VisualStyleMode=#wireFrame,
		ShowHighlightEnabled=true,
		LightOption=#DefaultLight,
		DefaultLightMode=#TwoLights,
		ShadeSelectedObjectsEnabled=false,
		AutoDisplaySelectedLightEnabled=false,
		AmbientOcclusionEnabled=true,
		ShadowsEnabled=true,
		AmbientOcclusionRadius=30.0,
		AmbientOcclusionIntensity=10.0,
		ShadowIntensity=1.0,													
		DynamicReflectionEnabled=false,
		LightingAndShadowQualityMode=#1X,
		
		------------------- introduced in Max 2013 only ---------------------------
		ReflectionEnabled=true,				-- Max2013
		DefaultLightsFollowCamera=true,		-- Max2013
		UseSimplifiedSkyLight=false,		-- Max2013
		ProgressiveFadingFactor=32,			-- Max2013
		DOFEnabled=true,					-- Max2013
		BokehShape="",						-- Max2013
		UseSolidColor=true,					-- Max2013
		ProgressiveRenderingEnabled=false,	-- Max2013
		
		------------------- introduced in Max 2014 Beta? only ---------------------------
		WorldDebuggerEnabled=false,			-- Max2014 Beta
		
		
		
		function CopyFrom vs=
		(
			if( classof vs == classof this ) then 
			(
				local propValue=undefined

				-- create copy of another NitrousViewportSetting struct
				for propName in  GetPropNames vs do
				(
					propValue = GetProperty vs propName 
					if( classof propValue != MAXScriptFunction ) then
						setProperty this propName (getProperty vs propName)						
				)
				true
			)
			else if ( isKindOf vs IObject ) then
			(
				-- copy from an actual IObject:ViewportViewSettingImpl ( NitrousgraphicsManager.GetViewportSetting() output )
				--- ViewportSettingsImpl does'nt support GetPropNames, so we cycle throug our  instance's props 
				for propName in  GetPropNames this do
				(
					try	SetProperty this propName (getProperty vs propName)
					catch()
				)
				true
			)
			else false
		),

		function PasteTo vs=
		(
			if( classof vs == classof this ) then 
				vs.CopyFrom this
			else if ( isKindOf vs IObject ) then
			(
				for propName in GetPropNames this do
				(
					try	SetProperty vs propName (getProperty this propName)
					catch()
				)
				true
			)
			else false
		)
)

struct NitrousHandler
(
	private
		-- forward declarations...
		function Capture=(),

		MaxVersionMajor = (maxversion())[1],
		
		WinUserH = 
		(
			-- copied from <WinUser.h>  , details for BM_SETCHECK message --> http://msdn.microsoft.com/en-us/library/bb775989%28VS.85%29.aspx
			struct WinUserH	
			(
				BM_GETCHECK 	=0x00F0, BM_SETCHECK	=0x00F1, BM_GETSTATE=0x00F2, BM_SETSTATE	=0x00F3,
				BST_UNCHECKED   =0x0000, BST_CHECKED	=0x0001, BM_CLICK	=0x00F5, BST_INDETERMINATE	=0x0002, TCM_SETCURFOCUS=0x1330, -- commctrl.h
				WM_LBUTTONDOWN  =0x0201,
				WM_LBUTTONUP	=0x0202,

				WM_MOVE    = 0x0003, 	--LParma: lowword  x-pos , hiword y-pos
				WM_SIZE    = 0x0005,    --lParam:   low-order word = width , high-order word pecifies  new height of the client area.
				WM_CHAR 	= 0x0102,
				VK_RETURN 	= 0x000D
			)
			WinUserH()
		),	
		
		storedVPSettings,	
		nitrousEnabled=false,

		-- 保存VP配置对话框捕获的变量，因为我们不能在UICapture回调中传递参数
		vptConfigProgressiveFlag=false,
		vptConfigProcResolution=512,

		
		-- 构造函数——从当前选定的视口填充信息
		function OnCreate=
		(
			try
			(
				nitrousEnabled = nitrousgraphicsManager.IsEnabled()
							
				storedVPSettings=NitrousViewportSettings()
				Capture()
				ok
			)
			catch
			(
				format "NitrousHandler: Nitrous Maxscript interface access failed, disabling Nitrous features in PowerPreview...\n" 
				nitrousEnabled=false
			)
		),
		
		function CaptureVPTConfigProgressiveOption=
		(
			local notFound = true

			local tabIndex

			for hDlg in UIAccessor.GetPopupDialogs() while notFound do
			(
				-- let's hope VP dialog's title doesn't change
				if((UIAccessor.GetWindowText hDlg )==  MaxLocale.UIStrings.ViewportConfig[MaxLocale.LanguageIndex] ) then
				(
					-- get the Tab-Control handle
					tabNotFound=true
					for hChild in (UIAccessor.GetChildWindows hDlg) where ( UIAccessor.GetWindowClassName hChild == "SysTabControl32" ) while tabNotFound do
					(

						-- activate "Display Performance" Tab, Index of the Tab depends on Max version

						if( MaxVersionMajor >= 14000 ) then tabIndex = 3 --- 3ds Max 2012
						if( MaxVersionMajor >= 14900 ) then tabindex = 4 --- 3ds Max2013 beta and up

						UIAccessor.SendMessage hChild WinUserH.TCM_SETCURFOCUS tabIndex 0
						tabNotFound = false
					)


					-- first element of the returned array contains window handle, or undefined if no childwindow with the correct name
					cbProgressive = windows.getChildHWND hDlg MaxLocale.UIStrings.Progressive[MaxLocale.LanguageIndex]

					if ( cbProgressive != undefined ) then
					(
						try
						(
							-- okay now we got the Stats-Checkbox -> store the current CB state and set the requested state
							-- send windows message :    <bool>UIAccessor.SendMessage <HWND>hwndDlg <integer>MessageID <integer>wParam <integer>lParam

							if vptConfigProgressiveFlag then
									checkFlag = WinUserH.BST_CHECKED
							else
									checkFlag = WinUserH.BST_UNCHECKED

							currentState = case (windows.sendMessage cbProgressive[1] WinUserH.BM_GETCHECK 0 0) of (
											0: false
											1: true
											0: #indeterminate
										)

							-- only change the checkobox if we requested the opposite of the existing state ( prevents Nitrous reinitializations )
							if(  currentState != vptConfigProgressiveFlag ) then
							(
								UIAccessor.SendMessage cbProgressive[1] WinUserH.BM_SETCHECK checkFlag  0
								UIAccessor.SendMessageID hDlg #IDOK
							)
							else  UIAccessor.SendMessageID hDlg #IDCANCEL
							
							vptConfigProgressiveFlag=currentState
						)
						catch( format "Error: %\n" ( GetCurrentException()) )
					)
					else UIAccessor.SendMessageID hDlg #IDCANCEL
					notFound=false
				)
			)
			DialogMonitorOPS.Enabled = false
			DialogMonitorOPS.unRegisterNotification id:#ProgCatcher

			-- remove me the hooks
			success=NOT notFound
		),
		function CaptureVPTProceduralResolution=
		(
			local notFound=tabNotFound=edNotFound=true
			local tabIndex=3 --- 3ds Max 2012

			
			if( MaxVersionMajor >= 14900 ) then tabindex = 4 --- 3ds Max2013 beta and up
		
			for hDlg in UIAccessor.GetPopupDialogs() while notFound do
			(
				-- let's hope VP dialog's title doesn't change
				if((UIAccessor.GetWindowText hDlg )==  MaxLocale.UIStrings.ViewportConfig[MaxLocale.LanguageIndex] ) then
				(
					notFound=false
					-- get the Tab-Control handle

					for hChild in (UIAccessor.GetChildWindows hDlg) where ( UIAccessor.GetWindowClassName hChild == "SysTabControl32" ) while tabNotFound do
					(		
						tabNotFound = false

						UIAccessor.SendMessage hChild WinUserH.TCM_SETCURFOCUS tabIndex 0
						
						--- editcontol text is always "ProceduralMapsDisplayResolution" , independend of the Max localization !!!
						
						edCtrlParent = windows.getChildHWND hDlg "ProceduralMapsDisplayResolution"
						
						if( edCtrlParent != undefined ) then
						(
							--UIAccessor.SetWindowText edCtrlParent[1] ( vptConfigProcResolution as string + "\n" )
							for edCtrl  in (windows.GetChildrenHWND edCtrlParent[1]) where ( UIAccessor.GetWindowClassName edCtrl[1]== "Edit" ) while edNotFound do
							(
								edNotFound=false
								
								UIAccessor.SetWindowText  (edCtrl[1]) (vptConfigProcResolution as string)
								windows.sendMessage (edCtrl[1]) WinUserH.WM_CHAR WinUserH.VK_RETURN 0 -- press ENTER key								
								
								UIAccessor.SendMessageID hDlg #IDOK
							)
						)						
					)
					if( edNotFound== true ) then UIAccessor.SendMessageID hDlg #IDCANCEL
				)
			)
			DialogMonitorOPS.Enabled = false
			DialogMonitorOPS.unRegisterNotification id:#ProcResCatcher

			success=NOT edNotFound
		),		
					
	public
		shadowQualities=NitrousShadowQualities.GetNames(),
		visualStyles=NitrousVisualStyles.GetNames(),
		visualStyleActions=NitrousVisualStyles.GetActions(),

		-- cpature the current Nitrous viewport's  settings into the struct
		function Capture index:viewport.activeViewport=
		(
			if( nitrousEnabled ) then
			(
				-- create a COPY of the current nitrous settings struct -> MXS defaults to references !!
				
				-- NOTE: due to a bug in NitrousGraphicsManager's MXS exposure (up to Max 2014) the index is 0-base instead of 1
				-- we correct this by substracting 1 from the index before It's passed to the function 
				storedVPSettings.CopyFrom (NitrousGraphicsManager.GetViewportSetting (index-1))
				true
			)
			else false
		),		
		-- apply curent struct contents/settings to the current viewport
		function Apply index:viewport.activeViewport=
		(
			if( nitrousEnabled ) then
			(
				-- NOTE: due to a bug in NitrousGraphicsManager's MXS exposure (up to Max 2014) the index is 0-base instead of 1
				-- we correct this by substracting 1 from the index before It's passed to the function 
				storedVPSettings.PasteTo ( NitrousGraphicsManager.GetViewportSetting (index-1) )

				redrawViews()

				true
			)
			else false
		),
		function IsNitrousEnabled=
		(
			nitrousEnabled
		),			
		function GetActiveVP=
		(
			if( nitrousEnabled ) then
			(
				NitrousGraphicsManager.GetActiveViewportSetting()
			)
		),		
		function GetActiveVPCamera=
		(
			cam = getActiveCamera() 
			
			if( isKindOf cam camera == true ) then
				cam			
			else undefined
		),
		function ResetViewIterations=
		(
			if( nitrousEnabled ) then
			(
				
				-- simply toggle transparency option on and of, which causes Nitrous to restart progressive iterations from beginning
				(NitrousGraphicsmanager.GetActiveViewportSetting()).TransparencyEnabled = NOT (NitrousGraphicsmanager.GetActiveViewportSetting()).TransparencyEnabled
				(NitrousGraphicsmanager.GetActiveViewportSetting()).TransparencyEnabled = NOT (NitrousGraphicsmanager.GetActiveViewportSetting()).TransparencyEnabled
				ok
			)
			else false
		),
		
		function GetProgressive=
		(
			if( MaxVersionMajor >= 14900 ) then
			(
				(NitrousGraphicsmanager.GetActiveViewportSetting()).ProgressiveRenderingEnabled
			)
			else false -- we should use UIaccessor in that case, jsut to read the checbox state in the VP dialog
		),

		function SetProgressive flag=
		(			
			local checkFlag= WinUserH.BST_UNCHECKED
			local oldState=false
			
			-- only valid for Nitrous mode
			if( nitrousEnabled ) then
			(
				if( MaxVersionMajor >= 14900 ) then
				(
					-- Nitrous in Max 2013 implemented ProgressiveRenderingEnabled in ViewportViewSettingImpl
					oldState=(NitrousGraphicsmanager.GetActiveViewportSetting()).ProgressiveRenderingEnabled
					(NitrousGraphicsmanager.GetActiveViewportSetting()).ProgressiveRenderingEnabled=flag
				)
				else
				(
					-- open viewport config dialog and capture it
					-- installs VP Dialog Catcher and opens VP dialog

					DialogMonitorOPS.unRegisterNotification id:#ProgCatcher

					-- setProgressive reads the requested state from vptConfigProgressiveFlag (=bool)
					-- setProgressive WRITES the old progressive state prior switching to vptConfigProgressiveFlag (=bool)
					vptConfigProgressiveFlag=flag

					--- play save here

					try
					(
						DialogMonitorOPS.RegisterNotification NitrousHandler.CaptureVPTConfigProgressiveOption id:#ProgCatcher

						DialogMonitorOPS.Interactive=false
						DialogMonitorOPS.Enabled = true

						max vptconfig
					)
					catch
					(
						DialogMonitorOPS.Enabled = false
						DialogMonitorOPS.unRegisterNotification id:#ProgCatcher
					)
					DialogMonitorOPS.Enabled = false
					DialogMonitorOPS.unRegisterNotification id:#ProgCatcher
					oldState=vptConfigProgressiveFlag -- result of this function is the original progressive state, the capture routine writes this into vptConfigProgressiveFlag					
				)
			)
			oldState
		),

		function GetBGProgressive=
		(
			-- only valid for Nitrous mode
			if( nitrousEnabled ) then
			(
				-- Only in 3ds Max 2014+
				if( MaxVersionMajor >= 15900 ) then
					NitrousGRaphicsManager.BackgroundProgressiveRenderingEnabled
				else false
			)
			else false
		),

		function SetBGProgressive flag=
		(
			-- only valid for Nitrous mode
			if( nitrousEnabled ) then
			(
				-- Only in 3ds Max 2014+
				if( MaxVersionMajor >= 15900 ) then
					NitrousGraphicsManager.BackgroundProgressiveRenderingEnabled=flag
			)
		),
		
		function SetProceduralResolution res=
		(
			vptConfigProcResolution=res
			
			DialogMonitorOPS.unRegisterNotification id:#ProcResCatcher

			try
			(
				DialogMonitorOPS.RegisterNotification NitrousHandler.CaptureVPTProceduralResolution id:#ProcResCatcher

				DialogMonitorOPS.Interactive=false
				DialogMonitorOPS.Enabled = true

				max vptconfig
			)
			catch
			(
				DialogMonitorOPS.Enabled = false
				DialogMonitorOPS.unRegisterNotification id:#ProcResCatcher
			)
			DialogMonitorOPS.Enabled = false
			DialogMonitorOPS.unRegisterNotification id:#ProcResCatcher
			
		),		
		-- call the constructor
		created = OnCreate()
)
NitrousHandler=NitrousHandler()   -- this is a static struct
struct AppInfo
	(
		Version = "0.71a",
		VersionString = Version +" Beta 9 - PRERELEASE",

		Title = "PowerPreview",
		Credits ="?011-2017, Josef Wienerroither",
		DialogTitle = Title + " V"+VersionString,
		
		HomeURL="http://www.frogsinspace.at/?page_id=759",
		DownloadURL="http://www.frogsinspace.at/?download=PowerPreview%20(latest%20version)",
		UpdatecheckURL="http://www.frogsinspace.at/downloads/versioncheck.php?powerpreview"
	)
AppInfo=AppInfo()

struct PPHelper
(
	private 
		viewPanelhandle,
		viewPanelClass="ViewPanel",
	
	public -- member variables
		User32Dll,
	
		frmPreview,
		frmPicBox,
		playerProcess,
		clipPicConverter,
		--previewSnapShot=false,
	
	
	private --functions
		-- forward declarations
		function StopPlayer=(),
		function CreatePreviewWindow=(),
		function CSRuntimeCompile=(),
		function getFirstChildWHNDPerClass=(),
	
		-- C# Code for user32.dll access, gets in - memory compiled on the fly ;-)  ... thx to Denis Trofimov for original idea...		
		CSSourceUser32Dll=	
		(
			"using System.Drawing;\n" + \
			"using System.Runtime.InteropServices;\n" + \
			"public class User32Dll \n" + \
			"{\n" + \

			"	public struct RECT { public int Left; public int Top; public int Right; public int Bottom;  }\n"  + \    -- RECT is not known ? why
			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern int FindWindow(string className, string windowName);\n" + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern bool MoveWindow( int hWnd, int x, int y, int cx, int cy, bool repaint);\n" + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern  int SetParent( int hWndChild, int hWndParent);\n" + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern bool BlockInput(bool fBlockIt);\n" + \

			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern  bool ShowWindow( int hWndChild, int hWndParent);\n" + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern  bool UpdateWindow( int hWndChild);\n" + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	private static extern bool GetWindowRect( int hWnd, ref	RECT  rect );\n " + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	private static extern bool GetClientRect( int hWnd, ref RECT rect );\n " + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	private static extern bool SetWindowPos( int hWnd, int hWndAfter, int x, int y, int cx, int cy, uint flags);\n" + \
			"	[DllImport(\"user32.dll\")]\n" + \
			"	public static extern int SendMessage( int hWnd, uint Msg, long wParam,long lParam);\n" + \

			"	private const uint SWP_ASYNCWINDOWPOS=0x4000;\n" + \
			"	private const uint SWP_DEFERERASE=0x2000;\n" + \
			"	private const uint SWP_DRAWFRAME=0x0020;\n" + \
			"	private const uint SWP_FRAMECHANGED=0x0020;\n" + \
			"	private const uint SWP_HIDEWINDOW=0x0080;\n" + \
			"	private const uint SWP_NOACTIVATE = 0x0010;\n" + \
			"	private const uint SWP_NOCOPYBITS=0x0100;\n" + \
			"	private const uint SWP_NOMOVE=0x0002;\n" + \
			"	private const uint SWP_NOOWNERZORDER=0x0200;\n" + \
			"	private const uint SWP_NOREDRAW=0x0008;\n" + \
			"	private const uint SWP_NOREPOSITION=0x0200;\n" + \
			"	private const uint SWP_NOSENDCHANGING=0x0400;\n" + \
			"	private const uint SWP_NOSIZE=0x0001;\n" + \
			"	private const uint SWP_NOZORDER=0x0004;\n" + \
			"	private const uint SWP_SHOWWINDOW=0x0040;\n" + \
			"	private const int SW_HIDE=0x0000;\n" + \
			"	private const int SW_SHOW=0x0005;\n" + \
			"	private const int WM_SIZE=0x0005;\n" + \
			
			
			"	public Size GetWindowSize( int hWnd )\n" + \
			"	{\n" + \
			"		RECT winRect= new RECT();\n" + \
			" 		if( GetClientRect( hWnd , ref winRect ))\n" + \
			" 			return( new Size( winRect.Right-winRect.Left, winRect.Bottom-winRect.Top ) );\n" + \
			" 		else\n" + \
			"			return( new Size( -1, -1 ) );\n" + \
			"	}\n" + \
			"	public bool SetWindowSize( int hWnd, int width, int height )\n" + \
			"	{\n" + \
			" 		return( SetWindowPos( hWnd, 0 , 0, 0, width, height, SWP_NOMOVE | SWP_NOZORDER | SWP_FRAMECHANGED ));\n" + \
			"	}\n" + \
			"	public bool ShowWindow( int hWnd )\n" + \
			"	{\n" + \
			" 		return( ShowWindow( hWnd,SW_SHOW ));\n" + \
			"	}\n" + \
			"	public bool HideWindow( int hWnd )\n" + \
			"	{\n" + \
			" 		return( ShowWindow( hWnd,SW_HIDE ));\n" + \
			"	}\n" + \	
			"	public int RedrawWindow( int hWnd )\n" + \
			"	{\n" + \
			"		Size sz=GetWindowSize( hWnd );\n" + \
			" 		return(SendMessage( hWnd , WM_SIZE, 0, (sz.Height<<16) | sz.Width  ));\n" + \
			"	}\n" + \			
			
			"	public Rectangle GetClientRectangle( int hWnd )\n" + \
			"	{\n" + \
			"		RECT winRect= new RECT();\n" + \
			" 		if( GetClientRect( hWnd , ref winRect ))\n" + \
			" 			return( new Rectangle( winRect.Left, winRect.Top, winRect.Right-winRect.Left, winRect.Bottom-winRect.Top ) );\n" + \
			" 		else\n" + \
			"			return( new Rectangle( -1,-1,-1, -1 ) );\n" + \
			"	}\n" + \
			"	public Rectangle GetWindowRectangle( int hWnd )\n" + \
			"	{\n" + \
			"		RECT winRect= new RECT();\n" + \
			" 		if( GetWindowRect( hWnd , ref winRect ))\n" + \
			" 			return( new Rectangle( winRect.Left, winRect.Top, winRect.Right-winRect.Left, winRect.Bottom-winRect.Top ) );\n" + \
			" 		else\n" + \
			"			return( new Rectangle( -1,-1,-1, -1 ) );\n" + \
			"	}\n" + \
			"}\n"
		),
		
		on create do
		(			
			User32Dll=CSRuntimeCompile CSSourceUser32Dll "User32Dll"				
			viewPanelHandle=getFirstChildWHNDPerClass viewPanelClass
			playerProcess= dotNetObject "System.Diagnostics.Process"
		),			
		
		function CSRuntimeCompile src csClassName=
		(
			-- Compile on fly
			csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
			compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"
			compilerParams.GenerateInMemory = on

			-- System.Drawing reference seems to be not included by default
			compilerParams.ReferencedAssemblies.Add( "System.Drawing.dll" )
			compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(src)

			-- thx. goes to LoneRobot for the following snippet ;-)
			-- this is very useful to debug your source code and check for referencing errors
			if (compilerResults.Errors.Count > 0 ) then
			(
				errs = stringstream ""
				for i = 0 to (compilerResults.Errors.Count-1) do
				(
					err = compilerResults.Errors.Item[i]
					format "Error:% Line:% Column:% %\n" err.ErrorNumber err.Line err.Column err.ErrorText to:errs
				)
				MessageBox (errs as string) title: "Errors encountered while compiling inlined .NET code"
				return undefined
			)
			return( compilerResults.CompiledAssembly.CreateInstance csClassName)						
		),	
		
	public -- functions

		--returns handle(s) of Window(s) of class <classname>
		function GetFirstChildWHNDPerClass classname=
		(
			for winInfo in (windows.getChildrenHWND #max) do
			(
				-- ClassName is the 4th Array entry
				if( winInfo[4] == classname )  then
					return( winInfo[1] )
			)
			return( 0 )
		),
		-- repositions/resizes a valid WHND per Windows messages
		function SetWHNDPos hWin posX posY width height=
		(
			try
			(
				if( UIAccessor.IsWindow(hWin)) then
				(
				--	windows.sendMessage
				)
			)
			catch()
		),

		function WindowDebug w=
		(
			wClientRect = User32Dll.GetClientRectangle( w )
			wRect = User32Dll.GetWindowRectangle( w )
			wSize =  User32Dll.GetWindowSize( w )

			print "##### Window Debug Info #####"
			format "Handle: %\n"  w
			format "ClientRect: \t% / % / % / %\n" wClientRect.Left wClientRect.Top wClientRect.Right wClientRect.Bottom 
			format "WindowRect:\t% / % / % / %\n" wRect.Left wRect.Top wRect.Right wRect.Bottom
			format "Size: % / %\n" wRect.Width wRect.Height
			print "##############################################"

		),

		function StartPlayer fname=
		(
			--stop any possibly running mediaplayers
			StopPlayer()

			try
			(
				playerProcess.Start fname  "/play /loop" 
			)
			catch
				print ("PowerPreview: Auto Play failed. Reason: " + GetCurrentException() )
		),
		function StopPlayer=
		(
			 --print( "Player exited: " + playerProcess.hasExited as string )
			-- just a dummy currently
			/*
			-- Kill player if it cruns currently
			try
			(
				if( playerProcess.hasExited != true ) then
					playerProcess.Kill()
			)
			catch()

			*/
		),

		function ShowPreviewWindow=
		(
			if(  (frmPreview == undefined) or  frmPreview.isDisposed) then
			(
				frmPreview = undefined  -- allow .NET gc in case of isDiposed
				CreatePreviewWindow PowerPreview.currentProject.targetWidth PowerPreview.currentProject.targetHeight
			)

			if( NOT frmPreview.Visible ) then frmPreview.ShowModeless()
			return( frmPreview )
		),

		function HidePreviewWindow=
		(
			if( frmPreview != undefined ) then
				frmPreview.Hide()
		),

		function CreatePreviewWindow width height=
		(
			frmPreview = dotNetObject "MaxCustomControls.MaxForm"
			frmBorderStyleEnum = dotNetClass "System.Windows.Forms.FormBorderStyle"

			frmPreview.width =width
			frmPreview.height = height
			frmPreview.text= AppInfo.DialogTitle
			frmPreview.FormBorderStyle = frmBorderStyleEnum.FixedDialog


			frmPicBox = dotNetObject " System.Windows.Forms.PictureBox"

			--frmPicBox.SizeMode = PictureBoxSizeMode.StretchImage
			frmPreview.controls.add frmPicBox

			frmPreview.AutoSize= frmPicBox.AutoSize = true

			clipPicConverter = dotNetClass "System.Windows.Forms.Clipboard"
			previewControl = frmPicBox
		),

		function PreviewBitmap bm=
		(
			if( frmPicBox != undefined ) then
			(
				setClipboardBitmap bm
				frmPicBox.Image = clipPicConverter.GetImage()
			)
		),

		function GetDate=
		(
			now = getLocalTime()
			now[1] as string + (formattedprint now[2] format:"02d") + (formattedprint now[4] format:"02d")						
		),

		function GetTime=
		(
			now = getLocalTime()
			formattedprint now[5] format:"02d" +(formattedprint now[6] format:"02d") + (formattedprint now[7] format:"02d")
		),
		
		function GetTimeStamp=
		(
			now = getLocalTime()
			nowString = substring (now[1] as string) 3 2 +
				(formattedprint now[2] format:"02d") +
				---- (formattedprint now[3] format:"02d") +   --- no use for DAY OF WEEK !!!
				(formattedprint now[4] format:"02d") +
				(formattedprint now[5] format:"02d") +
				(formattedprint now[6] format:"02d")
				--- (formattedprint now[7] format:"02d")
				--- (formattedprint now[7] format:"03d") no need for milliseconds ?
			
			nowString
		),
		
		function ModifyPanelToObject obj=
		(
			if( obj != undefined ) then
			(
				setCommandPanelTaskMode #modify
				modpanel.setPinStack false
				select obj
				
				if( cui.commandPanelOpen==false) then
					cui.commandPanelOpen=true				
			)			
		),
		
		function _DEPRECATED_CheckNitrous=
		(
			--- save ( exceptionless ) checking for nitrous mode
			print "PPHelper.CheckNitrous(): !!! DEPRECATED FUNCTION CALL, USE NitrousHandler.IsNitrousEnabled() instead !!!"
			try
			(
				return (NitrousGraphicsManager.IsEnabled() )
			)
			catch
			(
				return( false )
			)

		),
		function GetViewpanelHandle=
		(
			viewPanelHandle			
		),
		function GetViewportName idx=
		(
			if( viewport.getCamera index:idx == undefined ) then
				 substring ((viewport.getType index:idx) as string) 6 -1  -- cuts the leading "view_" ...
			else
				 (viewport.getCamera index:idx).name
		),		
		
		function GetViewportNames=
		(
			vpNames =#()
			for idx = 1 to viewport.NumViews do
				append vpnames ( ( "#"+idx as string + ": " +  GetViewportName idx))

			vpNames
		),
		
		function SetShowWorldAxis flag=
		(
			DialogMonitorOPS.unRegisterNotification id:#WorldAxisCapture
			DialogMonitorOPS.enabled = off
			DialogMonitorOPS.enabled = on	
			--DialogMonitorOPS.RegisterNotification (if state then ShowWorldAxisStr.ShowWorldAxisOn else ShowWorldAxisStr.ShowWorldAxisOff) id:#ShowWorldAxis

			-- actionMan.executeAction 0 "40108" -- same as max file preferences
			
			max file preferences

			DialogMonitorOPS.unRegisterNotification id:#WorldAxisCapture
			DialogMonitorOPS.enabled = off
			
		),
		
		function CapturePrefsWindow=
		(
			/*
			struct ShowWorldAxisStr
			(
				fn setCheckBoxState hwnd state = 
				(	
					local BN_CLICKED =0
					local BM_SETCHECK = 241
					local WM_COMMAND = 273
					
					local parent = UIAccessor.getParentWindow hwnd
					local id = UIAccessor.getWindowResourceID hwnd
					
					windows.sendMessage hwnd BM_SETCHECK (if state then 1 else 0) 0
					windows.sendMessage parent WM_COMMAND ((bit.shift BN_CLICKED 16) + id) hwnd	
					ok
				),

				fn getButtonHwnd hnd =
				(
					for i in (windows.getChildrenHWND hnd) where matchPattern i[5] pattern:"Display World*" do return i[1]
					0
				),
				fn ChangeTab hnd =
				(
					TCM_SETCURFOCUS = 0x1330
					for kidHWND in (UIAccessor.GetChildWindows hnd) where ((UIAccessor.GetWindowClassName kidHWND) == "SysTabControl32") do
					(
						UIAccessor.SendMessage kidHWND TCM_SETCURFOCUS 2 0 
					)
				),	
				fn ShowWorldAxisOn = 
				(
					local hnd = dialogmonitorops.getwindowhandle()
					ShowWorldAxisStr.ChangeTab hnd
					ShowWorldAxisStr.setCheckBoxState (ShowWorldAxisStr.getButtonHwnd hnd) on
					uiaccessor.pressButtonByName hnd "OK"
					true
				),
				
				fn ShowWorldAxisOff = 
				(
					local hnd = dialogmonitorops.getwindowhandle()
					ShowWorldAxisStr.ChangeTab hnd
					ShowWorldAxisStr.setCheckBoxState (ShowWorldAxisStr.getButtonHwnd hnd) off
					uiaccessor.pressButtonByName hnd "OK"
					true
				),
				
				fn ShowWorldAxis state =
				(
						DialogMonitorOPS.unRegisterNotification id:#ShowWorldAxis
						DialogMonitorOPS.enabled = off
						DialogMonitorOPS.enabled = on	
						DialogMonitorOPS.RegisterNotification (if state then ShowWorldAxisStr.ShowWorldAxisOn else ShowWorldAxisStr.ShowWorldAxisOff) id:#ShowWorldAxis
						actionMan.executeAction 0 "40108" 
						DialogMonitorOPS.unRegisterNotification id:#ShowWorldAxis
						DialogMonitorOPS.enabled = off
				)
			)
			
			ShowWorldAxisStr.ShowWorldAxis on			
		*/	
		)
		
)
PPHelper=PPHelper()   -- this is a static struct
struct ProjectSettings
(
	private -- member variables
		storeableProperties=#(),
	
	public -- member variables
	
		projectFilename,
		targetFilename,
		snapShotFileName,
		
		beginFrame,
		endFrame,	
		autoPlay,

		stepDelay,

		targetWidth,
		targetHeight,
		targetScale,		

		lockResolution,
		useCameraAspect,

		iterationLimit,
		useIterationLimit,		
		
		livePreview,

		frameCreator,

		disableProgressive,
		useSystemGamma,
		-- unimplemented: useAutoShrink,
		-- unimplemented: useAutoGrow,
		
		-- Default project parameters
		Defaults=
		(
			struct Defaults
			(
				ProjectFilename=(getDir #plugcfg)+ "\\PowerPreview.ini",
				TargetFilename = (getDir #preview)+"\\PowerPreview.avi",
				SnapShotFilename= (getDir #preview)+"\\PPSnapshot.png",
				
				BeginFrame= animationRange.Start,
				EndFrame = animationRange.End,
				AutoPlay = true,		-- play in mediaplayer after the job is done

				StepDelay = 2000,
				
				TargetWidth=(getViewSize()).x,
				TargetHeight=(getViewSize()).y,			
				TargetScale = 1.00,

				LockResolution =false,   -- should we lock the resolution values  by default ?
				UseCameraAspect=true,
				
				IterationLimit = 1024,
				UseIterationLimit=false, -- proceed a frame after Iteration limit is reached
				
				LivePreview = true, -- show live updates of preview frames				

				FrameCreator = "Nitrous",

				DisableProgressive=false,				
				UseSystemGamma=true
				-- unimplemented: UseAutoShrink=true,  -- automatically shrink timebudget based on previous frames
				-- unimplemented: UseAutoGrow=true,  -- automatically expand timebudget based on previous frames															
			)
			Defaults()
		),
		
	private -- member functions
		-- forward declarations
		function Reset=(),
	
		on create do
		(
			Reset()
			
			storeableProperties = for p in GetPropnames this where ( classof (GetProperty this p) != MAXScriptFunction AND superclassof (GetProperty this p) != StructDef ) collect p
		),
				
	public -- member functions

		function Reset=
		(
			allProps = GetPropNames Defaults
			
			for p in allProps  where ( classof (getproperty this p ) != MaxscriptFunction ) do 
				SetProperty this p ( GetProperty Defaults p )				
		),			
			
		function Save=
		(
			print "dummy Save Project"
		),

		function Load=
		(
			print "dummy Load Project"
		),
		
		function SetResolution res=
		(
			if( classof res == Point2 AND NOT lockResolution ) then
			(
				if( useCameraAspect ) then
				(
					local aspect = renderWidth as float/renderHeight as float
					
					if( res.x/res.y >= aspect ) then
						res.x = res.y*aspect
					else
						res.y = res.x/aspect 
				)

				targetWidth  = res.x
				targetHeight = res.y

				--format "% / %\n" targetWidth  targetHeight
				true
			)
			else false
		)
)
struct PPPrefs
(
	public
		-- Limits for user adjustable parameters
		iterationLimits = #("8096","4096","2048","1024","512","256","128","64","32","16","8"),
		iterationMax = iterationLimits[1] as Integer,
		stepDelayGranularity= 50,
		stepDelayMax = 90000,
		targetWidthMax = 6400,
		targetHeightMax = 6400,
		targetWidthMin = 32,
		targetHeightMin = 24,
		targetScaleMin = 10,
		targetScaleMax=500
)
PPPrefs = PPPrefs() -- this is a static struct
if( Nitroushandler == undefined ) then
	filein "Lib/Nitrous.ms"

if( PPHelper == undefined ) then 
	filein "Helper.ms"

if( ProjectSettings == undefined ) then 
	filein "ProjectHandling.ms"


struct OptionStorage
(
	public
		progressiveRefinement,
		viewportSettings,
		nitrousSettings,
		viewportMaximized,
		viewPanelRect,
		viewCubeVisibility,
		timeSliderTime,
		productionRenderer,
	
	public
		function Store=
		(
			progressiveRefinement=NitrousHandler.GetProgressive()
			
			viewportMaximized = NOT( viewport.NumViews>1 )		
			
			viewPanelRect = PPHelper.User32Dll.GetWindowRectangle (PPHelper.GetViewpanelHandle())
			
			if( ViewCubeOps != undefined ) then
				viewCubeVisibility=ViewCubeOps.Visibility
			
			timeSliderTime=sliderTime
			productionRenderer=renderers.current
		),
		function Recall=
		(
			renderers.current=productionRenderer
			sliderTime=timeSliderTime
			
			if( viewCubeVisibility != undefined ) then
				ViewCubeOps.Visibility=viewCubeVisibility
			
			PPHelper.User32Dll.SetWindowSize (PPHelper.GetViewpanelHandle()) viewPanelRect.Width viewPanelRect.Height
			
			if(  (viewportMaximized AND ( viewport.NumViews>1 )) OR (NOT viewportMaximized AND ( viewport.NumViews<=1 ) ) ) then
				max tool maximize
			NitrousHandler.setProgressive progressiveRefinement
		)
)

struct GrabViewportEngine
(
	private -- member functions
		oldOptions=OptionStorage(),
		creatorFn=gw.getViewportDib,
	
	public -- member variables
		name="Grab Viewport (RGB)",
		nameShort="Nitrous",
		supportsAlpha=false,
		fixGamma=true,
		isBlocking=false,

	private
		on create do
		(
			if( NOT Nitroushandler.IsNitrousEnabled() ) then
				nameShort="Direct3D"
			
		),
		function setupFn project doCleanup:false=
		(
			if( NOT doCleanup ) then	 -- Initialize
			(
				print("Switched to Viewport Grabbing")
		
				-- activate Progressive Refinement - does internal Checknitrous() !!!
			
				oldOptions.Store()
				
				oldOptions.progressiveRefinement = NitrousHandler.setProgressive ( NOT project.disableProgressive )
				
				if( viewport.NumViews >1 ) then
					max tool maximize

				if( ViewCubeOps != undefined ) then
					ViewCubeOps.Visibility=false

				PPHelper.User32Dll.SetWindowSize (PPHelper.GetViewpanelHandle()) (project.targetWidth+4) (project.targetHeight+4) -- 4 is the extra border of the viewpanel

				-- force a complete redraw, as nitrous does'nt do it always, expecially when view was maximized before
				forceCompleteRedraw doDisabled:true

				-- try to fix various Nitrous related graphic glitches - eg.. dynamic reflections failing
				NitrousHandler.ResetViewIterations()
			)
			else	-- perform cleanup
			(
				print("ViewportGrabber CleanUp")

				oldOptions.Recall()
			)
		),		
	
	public -- member functions
		function Setup project doCleanup:false =( setupFn project doCleanUp:doCleanup ),
		function Call=( creatorFn() )	
)
GrabViewportEngine=GrabViewportEngine() -- this is a static struct


struct PowerPreview
(
	private -- member variables	
		FrameCreator=
		(
			struct FrameCreator
			(
				creatorFn=(),
				setupFn=(),
				name="",
				nameShort="",
				supportsAlpha=false,
				fixGamma=false,
				isBlocking=false,
				function Setup doCleanup:false =( setupFn doCleanUp:doCleanup ),
				function Call=( creatorFn() )
			)			
		),	
		
		--created,

		frameCreators=#(),		
		currentCreator,
		lastViewportSize=getviewsize(),
		
		internalMakePreviewShown=false,
		InternalMakePreviewIndex,
		
		inProgress=false,
		inProgressInternalMakePreview=false,				

/*		
		-- store UI colors for dotNet Controls
		backColor=(colorman.getcolor #background)*255,
		textColor=(colorman.getcolor #windowText )*255,
		dotBackColor=(dotNetClass "System.Drawing.Color").fromArgb backColor[1] backColor[2] backColor[3],
		dotTextColor=(dotNetClass "System.Drawing.Color").fromArgb textColor[1] textColor[2] textColor[3],	
*/
		iterationStepTimer = dotNetObject "System.Windows.Forms.Timer",
		frameStepTimer = dotNetObject "System.Windows.Forms.Timer",

	public -- member variables			
		currentProject,  -- recieves/store the current prefs/settings right before a PreviewCreation process gets startet		
		mainDialog,			

		MaxVersionMajor = (maxversion())[1],
		
		currentIteration = 0,
		currentOutputFrame=0,

		lastCycleTimeStamp=0.0,
		lastCycleDuration=0.0,


		iterationLimitHit=false,
		lastFrameTimeStamp=0.0,
		lastFrameStepReason="",

		targetBitmap,	
			
		stopPressed=false,
		snapShotMode=false,

		-- settle time  after next frame step occurs when iterations are met...
		iterationSettleTime = 2,

		oldSliderTime,
		oldViewportWasMaximized,
		oldViewPanelRect,
		oldRenderer=renderers.current,
		oldViewCubeVisibility=false,
		oldProgressive=false,
		oldBGProgressive=false,
		currentViewport=1,
		

	private -- member functions
		--forward declarations
		function SetViewpanelSize=(),
		function RestoreViewpanelSize=(),
		--function FrameStep=(),
		--function FrameStepIterated=(),
		--function GetBitmapRender=(),
		--function SetupViewportCreator=(),
		--function SetupQuickSilverCreator=(),
		--function SetupScanlineCreator=(),
		--function SetupMakePreviewCreator=(),
		--function OnIterationThresholdReached=(),
		function UpdateUI=(),
					
		function OnFrameStepTimerTick sender args=
		(
			-- returns TRUE when we are at the last frame, FALSE  otherwise
			-- does not run in a PowerPreview context so we have to use the senders Tag field to get the calling's instance			
			_this = sender.Tag.value
			-- check for the user's escape
			_this.stopPressed = keyboard.escPressed
			
			-- just in case our project settings changed during preview process, adust timer delay			
			sender.interval = _this.currentProject.stepDelay

			-- call current bitmap creator function and copy result to targetbitmap
			-- special treatment for Max2012 and  wrong gamma values when grabbing the viewport 
			
			local creator=_this.GetCurrentCreator()
			
			if( _this.MaxVersionMajor<14900 AND iDisplayGamma.colorCorrectionMode==#gamma AND creator.fixGamma==true ) then
			(
				--format "Applying Gamma Fix, display/target bitmap gamma: %/%\n" displayGamma _this.targetBitmap.gamma
				local oldDisplayGamma=displayGamma
				displayGamma=1
				redrawViews()
				copy ( creator.Call() )  _this.targetBitmap
				displayGamma=oldDisplayGamma
				redrawViews()
			)
			else copy ( creator.Call() )  _this.targetBitmap

			if( NOT _this.snapShotMode) then
				save _this.targetBitmap frame:(slidertime.frame as integer) 

			if( _this.iterationLimitHit ) then
			(
				_this.iterationLimitHit=false
				_this.lastFrameStepReason = " *** ITERATION LIMIT"
			)
			else _this.lastFrameStepReason = " --- TIME LIMIT"

			_this.mainDialog.SetStatusText ( ( timeStamp() - _this.lastFrameTimeStamp) as String + ", " + _this.lastFrameStepReason ) 

			_this.lastFrameTimeStamp = timeStamp()

			if( sliderTime >= _this.currentProject.endFrame OR _this.stopPressed OR _this.snapShotMode ) then
			(
				-- we are missing the LAST FRAME !
				_this.stopPreview()
				
				if( _this.snapShotMode ) then
					display _this.targetBitmap			
				else if(  _this.currentProject.autoPlay  == true ) then
						PPHelper.StartPlayer  _this.currentProject.targetFileName

				_this.snapShotMode = false

				return( true )
			)
			else
			(
				sliderTime +=1
				_this.currentOutputFrame +=1
				_this.currentIteration=0

				return( false )
			)
		),	
		function OnIterationStepTimerTick sender args=
		(
			-- does not run in a PowerPreview context so we have to use the senders Tag field to get the calling's instance		
			sender.stop()			
			sender.Tag.value.TriggerFrameStepTimer()
		),
		
		function OnIterationRedraw=
		(
			currentIteration +=1

			--format "Iteration/Limit: %/%\n" currentIteration currentProject.iterationLimit

			if(	currentIteration > currentProject.iterationLimit ) then
			(
				-- stop the time based progress
				frameStepTimer.stop()

				--roBaseOptions.IterationHitHighLight()
				currentIteration = 0
				lastCycleDuration=timestamp()-lastCycleTimeStamp
				lastCycleTimeStamp=timeStamp()

				iterationLimitHit=true
				--we must call framestep via timer - otherwise nitrous does'nt update the viewport
				iterationStepTimer.enabled=true
			)
		),		
		function OnSwitchViewport idx=	-- returns true if switch was successfull
		(
			-- simple check if we still have all startup detected viewports ( otherwise always switch to viewport 1 )
			try
			(
				if( viewport.NumViews < idx ) then idx = viewport.NumViews

				if( idx > 0 ) then
				(
					-- refresh the viewport dropdownlist on viewport/min/max toggles
					::roOutputOptions.ddViewport.Items = PPHelper.getViewportNames()
					
					vptype = viewport.getType  index:idx

					if( (vptype != undefined) AND (vptype != #view_none) AND (vptype != false) ) then
					(
						viewport.ActiveViewport = currentViewport= idx
						--- redundant ? if( currentViewport != viewport.ActiveViewport ) then viewport.ActiveViewport = currentViewport
					)
				

					if( NOT currentProject.lockResolution ) then 
						currentProject.SetResolution(getViewSize())

					if( NitrousHandler.IsNitrousEnabled() ) then
						::roNitrousOptions.ManipulateViewSettings ( NitrousHandler.GetActiveVP() )

							
					UpdateUI()
					true
				)
				else false
			)
			catch
			(
				-- simply catches errors when layout ( = num of  viewports) changes )
				format "PowerPreview.SwitchViewport: invalid viewport index: %\n" ( GetCurrentException() )
				false
			)
		),			
		function OnInternalMakePreviewDialogOpened=
		(

			for hDlg in UIAccessor.GetPopupDialogs() do
			(
				if((UIAccessor.GetWindowText hDlg )==  MaxLocale.UIStrings.MakePreview[MaxLocale.LanguageIndex] ) then
				(
					UIAccessor.SendMessageID hDlg #IDOK

					/*

					childControls =UIAccessor.GetChildWindows hDlg
					format "Number of ChildControls: %\n" (childControls.count)

					for hChild in childControls where ( true) while tabNotFound do
					(
						format "% \t| %\n" (UIAccessor.GetWindowResourceID hChild) (UIAccessor.GetWindowText hChild)
					)
					--UIAccessor.CloseDialog hDlg
					*/
				)
			)
			DialogMonitorOPS.Enabled = false
			DialogMonitorOPS.unRegisterNotification id:#MakePreviewCatcher
		),
	
		function SetupViewportCreator doCleanup:false=
		(
			if( NOT doCleanup ) then	 -- Initialize
			(
				print("Switched to Viewport Grabbing")
		
				-- activate Progressive Refinement - does internal Checknitrous() !!!
			
				oldProgressive = NitrousHandler.SetProgressive ( NOT currentProject.disableProgressive )
				oldBGProgressive = NitrousHandler.GetBGProgressive()
				
				-- enable BG refinement, has internal Max Version check
				NitrousHandler.SetBGProgressive true

				-- hide the damn viewcube
				-- check for existance if ViewCubeOps first, this fixes problems when people have the viewcube plugin completley removed ( autocam....)

				if( ViewCubeOps != undefined ) then
				(
					oldViewCubeVisibility=ViewCubeOps.Visibility
					ViewCubeOps.Visibility=false
				)
				
				if( viewport.NumViews >1 ) then
				(
					max tool maximize
					oldViewportWasMaximized = false
				)
				else oldViewportWasMaximized = true

				SetViewpanelSize (currentProject.targetWidth+4) (currentProject.targetHeight+4)

				-- force a complete redraw, as nitrous does'nt do it always, expecially when view was maximized before
				forceCompleteRedraw doDisabled:true

				-- try to fix various Nitrous related graphic glitches - eg.. dynamic reflections failing
				NitrousHandler.ResetViewIterations()
			)
			else	-- perform cleanup
			(
				print("ViewportGrabber CleanUp")

				RestoreViewpanelSize()

				if( not oldViewportWasMaximized) then
					max tool maximize

				-- restore original viewcube visibility
				if( ViewCubeOps != undefined ) then
					ViewCubeOps.Visibility=oldViewCubeVisibility			
					
				-- set BG refinement back to original, has internal Max Version check
				NitrousHandler.SetBGProgressive oldBGProgressive					
					
				--set progressive refinement back to the initial
				NitrousHandler.setProgressive oldProgressive

			)
		),		
		function SetupQuicksilverCreator doCleanup:false=
		(
			if( not doCleanup ) then      -- Initialize
			(
				print("Switched to Quicksilver Rendering")

				-- store old renderer
				oldRenderer = renderers.current

				-- set and configure quicksilver	renderer

				qs = Quicksilver_Hardware_Renderer()

				qs.TransparencyEnabled = true
				qs.ReflectionsEnabled = true
				qs.UseDefaultLights = false



				-- make quicksilver settings work with Max 2011 too...

				if( MaxVersionMajor < 14000 ) then
				(
					print "Compatibility for Max2011 triggered"
					qs.TransparencyMode = #Best
				)
				else
				(
					qs.RenderingMode = #Iterations
					qs.RenderingIterations  = currentProject.iterationLimit
				)
				renderers.current = qs

				PPHelper.showPreviewWindow()
				disableSceneRedraw()   -- for performance prevent viewport updating
			)
			else	--perform cleanup
			(
				enableSceneRedraw()
				PPHelper.hidePreviewWindow()

				-- restore old renderer
				renderers.current = oldRenderer
				print("Qicksilver CleanUp")
			)
		),
		function SetupScanlineCreator doCleanup:false=
		(
			if( not doCleanup ) then	 -- Initialize
			(
				print("Switched to Scanline Rendering")

				-- store old renderer
				oldRenderer = renderers.current

				-- set renderer to quicksilver
				renderers.current = Default_Scanline_Renderer()
				PPHelper.showPreviewWindow()
				disableSceneRedraw()   -- for performance prevent viewport updating
			)
			else		-- perform cleanup
			(
				enableSceneRedraw()

				-- restore old renderer
				renderers.current = oldRenderer
				print("Scanline CleanUp")
			)
		),
		function SetupMakePreviewCreator doCleanup:false=
		(
			if( not doCleanup ) then	 -- Initialize
			(
				print("Switched to 'Make Preview'")

				-- hide Viewcube manually: createPreview() does not hide the viewcube, while the button on the create preview dialog hides it !!!
				if( ViewCubeOps != undefined ) then
				(
					oldViewCubeVisibility=ViewCubeOps.Visibility
					ViewCubeOps.Visibility=false
				)

				if( MaxVersionMajor>=14900 ) then
				(
					-- in Max 2013 and above, activate Progressive Refinement - does internal Checknitrous() !!!
					-- older version do not generate progressively refined Output when using Make Preview...
					oldProgressive=NitrousHandler.setProgressive ( NOT currentProject.disableProgressive )
				)
			)
			else		-- perform cleanup
			(
				print("'Make Preview' CleanUp")
				if( ViewCubeOps != undefined ) then
					ViewCubeOps.Visibility=oldViewCubeVisibility

				if( MaxVersionMajor>=14900 ) then
				(
					--set progressive refinement back to the initial
					NitrousHandler.setProgressive oldProgressive
				)
			)
		),
		function RunInternalMakePreview showDialog:true=
		(
			wasProgressive=undefined
			
			if( MaxVersionMajor >= 14900 ) then
				wasProgressive = NitrousHandler.setProgressive ( NOT currentProject.disableProgressive )

			if( showDialog ) then
				max preview
			else
			(
				-- automatially close the preview settings dialog
				DialogMonitorOPS.unRegisterNotification id:#MakePreviewCatcher

				try
				(
					DialogMonitorOPS.RegisterNotification OnInternalMakePreviewDialogOpened id:#MakePreviewCatcher

					DialogMonitorOPS.Interactive=false
					DialogMonitorOPS.Enabled = true

					max preview
				)
				catch
				(
					DialogMonitorOPS.Enabled = false
					DialogMonitorOPS.unRegisterNotification id:#MakePreviewCatcher
				)
				DialogMonitorOPS.Enabled = false
				DialogMonitorOPS.unRegisterNotification id:#MakePreviewCatcher
			)				
			print "makepreview done"
			if( wasProgressive != undefined ) then NitrousHandler.setProgressive wasProgressive
		),
		-- generate current frames alpha bitmap only ... but how ?
		function GetAlpha=
		(
			--channels:#(#zDepth, #coverage, #objectID, #velocity)
			bm = render  progressbar:false useRadiosity:false renderfields:false renderatmosphericeffects:false

		),
		-- create current frame bitmap using renderer
		function GetBitmapRender=
		(
			bm=render outputwidth:currentProject.targetWidth outputheight:currentProject.targetHeight vfb:false useRadiosity:false renderfields:false renderatmosphericeffects:false 
			PPHelper.previewBitmap( bm)

			bm
		),
	
	public -- member functions
		-- forward declarations

		function StartPreview=(),
		function StopPreview=(),
		function StartSnapShot=(),
		function SwitchViewport=(),
		function GetFrameCreator=(),
			
		function OnCreate=
		(	
			iterationStepTimer.Interval = 25
			
			if( NitrousHandler.IsNitrousEnabled() ) then
				vpShortName = "Nitrous"
			
			else vpShortName = "Direct3D"

			-- add 'this' keyword to the function pointers, otherwise calling them will not work later on ( eg. inside from a rollout definition)
			append frameCreators ( frameCreator creatorFn:gw.getViewportDib	setupFn:this.SetupViewportCreator    name:"Grab Viewport (RGB)" nameShort:vpShortName supportsAlpha:false fixGamma:true isBlocking:false)
			
			/*
			append frameCreators ( frameCreator creatorFn:GrabViewportEngine.Call \
												setupFn:GrabViewportEngine.Setup \   
												name:GrabViewportEngine.name \
												nameShort:GrabViewportEngine.nameShort \
												supportsAlpha:GrabViewportEngine.supportsAlpha \
												fixGamma:GrabViewportEngine.fixGamma \
												isBlocking:GrabViewportEngine.isBlocking )
			*/
			--append frameCreators ( frameCreator creatorFn:this.GetBitmapRender  setupFn:this.SetupScanlineCreator 	 name:"Scanline (RGBA)" nameShort:"Scanline" supportsAlpha:true fixGamma:false isBlocking:true)
			--append frameCreators ( frameCreator creatorFn:this.GetBitmapRender  setupFn:this.SetupQuicksilverCreator name:"Quicksilver (RGBA)" nameShort:"Quicksilver" supportsAlpha:true fixGamma:false isBlocking:true)
			append frameCreators ( frameCreator creatorFn:undefined	setupFn:this.SetupMakePreviewCreator name:"'Make Preview' (RGBA)" nameShort:"MakePreview" supportsAlpha:true fixGamma:false isBlocking:true)
			
			currentProject=ProjectSettings()
			
			-- adjust projectproperties if nitrous is disabled
			if( NOT NitrousHandler.IsNitrousEnabled() ) then
			(
				currentProject.stepDelay = 1
				currentProject.disableProgressive=true
				currentProject.useIterationLimit=false
				currentProject.frameCreator="Direct3D"
			)
			
			currentCreator = GetFrameCreator(currentProject.frameCreator)
					
			-- assume this always comes at last 
			InternalMakePreviewIndex = frameCreators.count

			escapeEnable = true   -- allow ESC to stop exexcution

			-- check the Language and warn the user if needed...
			if( MaxLocale.LanguageIndex==0) then
			(
				MessageBox "Unkown 3ds Max Language detected.\n\"Progressive Refinement\" enabling will not work.\nPlease enable it manually before creating a preview!"
				MaxLocale.MaxLanguageIndex=1
			)

			-- add "this" to the dotNet Timer "Tag" property, otherwise the eventhandlers do not hav eaccess to the current struct ( Maxscript Bug)
			iterationStepTimer.Tag = frameStepTimer.Tag = dotnetMXSValue this

			--dotnet.removeEventHandler frameStepTimer "tick" PowerPreview.FrameStep
			--dotnet.addEventHandler frameStepTimer "tick" PowerPreview.FrameStep
			
			-- add Eventhandlers to timers			
			dotnet.removeEventHandler frameStepTimer "tick" OnFrameStepTimerTick
			dotnet.addEventHandler frameStepTimer "tick" OnFrameStepTimerTick
			
			dotnet.removeEventHandler iterationStepTimer "tick" OnIterationStepTimerTick
			dotnet.addEventHandler iterationStepTimer "tick" OnIterationStepTimerTick
						
							
			-- register Viewport selection/changed callback - this should come AT A LATER POINT 
			if( DEBUG != true ) then
			(	
				callbacks.removeScripts id:#PPActiveViewportChanged
				callbacks.addScript #viewportChange  "PowerPreview.OnActiveViewportChanged()"  id:#PPActiveViewportChanged				
			)
			ok
		),		
		
		function OnDestroy=
		(
			-- stop any preview currently in progress

			try
			(
				--remove viewport change callback
				callbacks.removeScripts id:#PPActiveViewportChanged
				
				-- timers might still be undefined, hence inside the try clause
				StopPreview()							
				
				--dotnet.removeEventHandler iterationStepTimer "tick" OnIterationThresholdReached
				dotnet.removeEventHandler frameStepTimer "tick" OnFrameStepTimerTick
				dotnet.removeEventHandler iterationStepTimer "elapsed" OnIterationStepTimerTick				

				DestroyDialog PowerPreview.mainDialog 
				MaxLocale=undefined
				ProjectSettings=undefined
				NitrousHandler=undefined
				PPPrefs=undefined
				PPHelper=undefined
				PowerPreview=undefined
				
				gc lite:true	
			) catch()
			
			enableSceneRedraw()	
		),			
		
		function OnCloseUI=
		(
			-- gets called when Master rollout is closing ( reieved on close event )
			PowerPreview.OnDestroy()				
		),
		function OnActiveViewportChanged forceRefresh:false=
		(
			---- check WHAT actually has changed
			try
			(
				if( viewport.activeViewport != currentViewport ) then
					OnSwitchViewport viewport.activeViewport
				
				if forceRefresh OR NOT currentProject.lockResolution AND  lastViewportSize != getViewSize() then
				(
					currentProject.SetResolution (getViewSize() * powerpreview.currentproject.targetscale)
					mainDialog.UpdateUI()			
					lastViewportSize=getViewSize()								
				)
			)
			catch ( format "PowerPreview.OnActiveViewportChanged(): %\n" ( GetCurrentException() ) )
		),						
		
		function ShowUI=
		(
			try(PPHelper.User32Dll.ShowWindow mainDialog.hwnd)
			catch()
			
		),
		function HideUI=
		(
			try(PPHelper.User32Dll.HideWindow maindialog.hwnd)
			catch()
		),
		function UpdateUI=
		(
			-- central Delegate for all prefs parameter  relatedUI updates
			-- calls into the Master rollout
			mainDialog.UpdateUI()
		),
		-- this  callback function DOES NOT run in the "PowerPreview" context !!!
		function ActivateIterationLimit flag=
		(
			if( flag==true ) then
			(
				unregisterRedrawViewsCallback PowerPreview.OnIterationRedraw
				registerRedrawViewsCallback PowerPreview.OnIterationRedraw
			)
			else unregisterRedrawViewsCallback PowerPreview.OnIterationRedraw
		),				

		function TriggerFrameStepTimer=
		(
			OnFrameStepTimerTick frameStepTimer 0

			--and restart the timebase step timer
			if(inProgress) then
				frameStepTimer.start()
		),
		
		function GetProjectOption propName=
		(
			local propValue
			try
			(
				propValue =  getProperty currentProject propName
				if( classof propValue == MAXScriptFunction ) then
				(
					propValue=undefined
					throw "invalid option"
				)
			)
			catch( format "SetProjectOption: unknown project option %\n" propName )
			propValue
		),
		function SetProjectOption propName propValue=
		(
			local oldValue
			if( hasProperty currentProject propName ) then
			(
				oldValue =  getProperty currentProject propName
				if( classof oldValue != MAXScriptFunction ) then
				(
					try
					(
						setProperty currentProject propName propvalue
						
					)
					catch( format "SetProjectOption: failed to set % to %:%\n" propName propValue ( GetCurrentException() ) )
				)
			)
			else format "SetProjectOption: unknown project option %\n" propName				
			oldValue
		),
		function GetFrameCreator name=
		(
			result = undefined
			name = toLower(name)


			for i=1 to frameCreators.count while result==undefined do
			(
				try
				(
					if( toLower frameCreators[i].nameShort  == name ) then
						result=frameCreators[i]
				
					print framecrators[i]
				)
				catch()
			)
			result
		),
		function SetCurrentCreator name=
		(
			local fc = GetFrameCreator name
			if( fc != undefined ) then
			(
				currentCreator=fc
				currentProject.frameCreator=fc.nameShort
				fc
			)
			fc
		),
		function GetCurrentCreator=
		(
			currentCreator
		),
		function SetCurrentCreatorindex idx=
		(
			if( idx >0 AND idx <= frameCreators.count ) then
			(
				SetCurrentCreator frameCreators[idx].nameShort
				currentCreator
			)
			else undefined
		),
		function GetCurrentCreatorIndex=
		(
			FindItem frameCreators currentCreator
		),		
		function GetCreatorNames short:false=
		(
			if( short == true ) then
				for i=1 to frameCreators.count collect frameCreators[i].nameShort
			else 
				for i=1 to frameCreators.count collect frameCreators[i].name
		),
		function GetInternalMakePreviewIndex=
		(
			InternalMakePreviewIndex
		),
		function GetPreviewInProgress=
		(
			inProgress
		),		
		
		function SetViewpanelSize w h=
		(
			if( MaxVersionMajor >= 15900 ) then
				Nitrousgraphicsmanager.PinViewPanelSize w h
			else
			(
				oldViewPanelRect = PPHelper.User32Dll.GetWindowRectangle (PPHelper.GetViewPanelHandle())
				PPHelper.User32Dll.SetWindowSize (PPHelper.GetViewPanelHandle()) (currentProject.targetWidth+4) (currentProject.targetHeight+4)
			)
			
			-- not required, just a performance hit 
			-- PPHelper.User32Dll.RedrawWindow ( windows.getMAXHWND() )
		),
		
		function RestoreViewpanelSize=
		(
			if( MaxVersionMajor >= 15900 ) then
				Nitrousgraphicsmanager.unPinViewPanelSize()
			else
				PPHelper.User32Dll.SetWindowSize (PPHelper.GetViewPanelHandle()) oldViewPanelRect.Width oldViewPanelRect.Height

			-- required to "hook" back the viewpanel into Max's client region with the correct size
			PPHelper.User32Dll.RedrawWindow ( windows.getMAXHWND() )
		),
		
		function SwitchViewport idx=
		(
			OnSwitchViewport idx
		),
		function StartSnapShot=
		(
			snapShotMode = true
			StartPreview targetFile:currentProject.snapShotFileName snapShotMode:snapShotMode
		),
		function StartPreview targetFile: showConfig:false snapShotMode:false=
		(
			if( targetFile == unsupplied ) then targetFile=currentProject.targetFileName
			
			if( inProgress == false  ) then
			(				
				inProgress = true
				-- lock Resolution to the current values
				currentProject.lockResolution = true
				
				if( MaxVersionMajor>=14900) then
					nitrousgraphicsmanager.ChangeCursorOnMouseMove=false				
				
				setWaitCursor()
				
				-- apply Display Filters and Overlay options
				::roFilterOptions.ApplyActiveSet()
				
				-- call current BitmapCreator's Setup function
				currentCreator.Setup doCleanUp:false
				
				if( GetCurrentCreatorIndex() == InternalMakePreviewIndex ) then
				(
					inProgress = inProgressInternalMakePreview = true

					HideUI()
					
					RunInternalMakePreview showDialog:(showConfig OR NOT internalMakePreviewShown ) 
					
					internalMakePreviewShown=true
					
					ShowUI()
					
					StopPreview()
				)
				else 	-- do it the PowerPreview way
				(
					--stop any possibly running mediaplayers to prevent a locked preview file
					--PPHelper.StopPlayer()

					oldSliderTime = sliderTime

					-- only change current frame if we are NOT in snapshot mode
					if( NOT snapShotMode ) then sliderTime = currentProject.beginFrame

					-- deselect any selected nodes
					-- clearselection() -- maybe unwanted ?
					max showaxisicon -- should toggle axis icon display

					stopPressed = false


										
					-- fetch current resolution					
					if( MaxVersionMajor >= 14000 ) then 
						targetBitmap = bitmap currentProject.targetWidth currentProject.targetHeight gamma:(1/displaygamma)
					else
						targetBitmap = bitmap currentProject.targetWidth currentProject.targetHeight
					
					targetBitmap.fileName = targetFile

					-- reset relevant counters
					currentOutputFrame=0

					mainDialog.SetRunButtonState true
			
					
					if( currentCreator.isBlocking OR currentProject.disableProgressive ) then
					(
						-- loop through our timeline ourselfs ( nonpreogressive display modes, Direct3D, etc.. )
						done = false

						while( not done AND not stopPressed ) do
							done=OnFrameStepTimerTick frameStepTimer 0 -- returns true at time end
					)
					else
					(
						
						-- adjust timer delay to current settings - this is live so the PowerPreview.currentProject variable is used
						frameStepTimer.interval = currentProject.stepDelay

						currentIteration = 0

						ActivateIterationLimit currentProject.useIterationLimit
						
						lastFrameTimeStamp = timeStamp()
						frameStepTimer.start()
					)
				)
			)
		),
		function StopPreview showResult:false=
		(
			setArrowCursor()

			if(MaxVersionMajor>=14900) then
				nitrousgraphicsmanager.ChangeCursorOnMouseMove=true
			
			frameStepTimer.stop()
			iterationStepTimer.stop()
			ActivateIterationLimit false		

			
			if( inProgress == true ) then
			(			
				mainDialog.SetRunButtonState false
				-- Restore the previous Display Category Filters
				::roFilterOptions.RecallFilterSet()					

				if( inProgressInternalMakePreview ) then
				(
					print "Stopping 'Make Preview'..."

					inProgressInternalMakePreview = false
					
					currentCreator.Setup DoCleanUp:true
					
				)
				else
				(
					print "Stopping preview..."
					--progressEnd()

					if( NOT snapShotMode ) then
					(
						close targetBitmap
						gc light:true
					)

					sliderTime = oldSliderTime

					max showaxisicon -- should toggle back on axis icon display
					
					-- call BitmapCreator's Setup function with cleanup flag

					currentCreator.Setup doCleanUp:true

					-- set back the lockResolution preferences to the UI button state
					currentProject.lockResolution = roOutputOptions.btLockResolution.checked
				)
			)
			if( showResult==true) then 
				PPHelper.StartPlayer currentProject.targetFileName
			
			inProgress=inProgressInternalMakePreview=false
		),				

		-- call the struct's constructor...
		created=OnCreate()
)
PowerPreview = PowerPreview() -- this is a static struct 

		
	
		
		on roNitrousOptions open do
		(
			
			ddVisualStyle.items  = NitrousHandler.visualStyles
			ddVisualStyle.height = ddVisualStyle.items.count*18 -- height after creation is measured in PIXELS !!		
			
			slShadowQuality.range = [1,NitrousHandler.shadowQualities.count,1]
			slShadowQuality.ticks = NitrousHandler.shadowQualities.count-1
				
			-- disable pre Max 2013 UI controls
			if( PowerPreview.MaxVersionMajor < 14900 ) then
			(
				spProgressiveFadingFactor.enabled=false
				cbReflections.enabled =false
				cbUseSimplifiedSkyLight.enabled=false
				cbDefaultLightsFollowCamera.enabled=false		
				spShadowMapSizeLimit.enabled =false
				--find cam groups group start and set every control from there to disabled in older Max Versions
				SetupDofUI enable:false
			)
			else
			(
				spShadowMapSizeLimit.value = nitrousgraphicsManager.shadowMapSizeLimit
				bokehButtonBitmap = bitmap bokehThumbSize.x bokehThumbSize.y
				
				--tmProgressiveBusyCheck.active = false
			)

			ManipulateViewSettings( NitrousHandler.GetActiveVP() )
			
		)


		
		on roOutputoptions open do
		(
					-- cache just for convenience	
			local cP = PowerPreview.currentProject
			
			cbAutoPlay.checked = cP.autoPlay 
			btLockResolution.checked = cP.lockResolution
			cbUseCameraAspect.checked = cP.useCameraAspect

			slTargetScale.range = [ PPPrefs.targetScaleMin, PPPrefs.targetScaleMax, cP.targetScale*100 ]
			slTargetScale.ticks = 25

			edTargetScale.text = slTargetScale.value as String

			edTargetToParse.text = cP.targetFileName 

			edTargetFile.text = cP.targetFilename

			
			ddViewport.items=PPHelper.GetViewportNames()
			ddViewport.selection = viewport.activeViewport
			
			spTargetWidth.range = [ PPPrefs.TargetWidthMin,PPPrefs.TargetWidthMax,cP.targetWidth] 
			spTargetHeight.range = [ PPPrefs.TargetHeightMin,PPPrefs.TargetHeightMax,cP.targetHeight] 
			-- not implemented
			--tokenCheckBoxes = #( cbAppendSceneName,cbAppendViewName,cbAppendDate,cbAppendTime,cbAppendFrameRange,cbAppendFrameRange)
			
			edTargetToParse.changed( edTargetToParse.text )		
		)
		



		



	)

)
