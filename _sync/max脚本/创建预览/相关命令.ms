max showaxisicon --切换坐标轴显示
ViewCubeOps.Visibility=true --设置视图方块显示
ViewportButtonMgr.EnableButtons = true --设置视口按钮显示

NitrousGraphicsManager.IsEnabled() --是否启用了Nitrous
-- NitrousGraphicsManager.ChangeCursorOnMouseMove = true --是否在鼠标移动时改变光标状态
-- setWaitCursor() --配合上一个,显示等待光标
NitrousGraphicsManager.ProgressiveRendering() --触发渐进式渲染
NitrousGraphicsManager.IsProgressiveRenderingFinished() --返回渐进式渲染状态


NitrousGraphicsManager.PinViewPanelSize 6400 4800 --高版本可用 目前>=2020可用,看判断是>2013都可以(包括最新版补丁),实测2014没问题
NitrousGraphicsManager.UnpinViewPanelSize()
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
)
function RestoreViewpanelSize=
(
	if( MaxVersionMajor >= 15900 ) then
		Nitrousgraphicsmanager.unPinViewPanelSize()
	else
		PPHelper.User32Dll.SetWindowSize (PPHelper.GetViewPanelHandle()) oldViewPanelRect.Width oldViewPanelRect.Height

	-- required to "hook" back the viewpanel into Max's client region with the correct size
	PPHelper.User32Dll.RedrawWindow ( windows.getMAXHWND() )
)

disableSceneRedraw()
-- modpanel.setPinStack false --设置修改面板固定状态,不知道有啥用
forceCompleteRedraw doDisabled:true 
-- completeRedraw()      
-- forceCompleteRedraw [ doDisabled:<boolean> ]   
enableSceneRedraw()

maxversion()


gbl= (dotNetClass "Autodesk.Max.GlobalInterface").Instance
gbl.COREInterface.IsViewportMaxed --或者 viewport.NumViews>1
max tool maximize



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