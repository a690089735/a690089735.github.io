
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
	
struct MaxLocale
(
	private 
	-- Primary Language ID's in 3ds Max ( first element in the array returned by sysinfo.GetMaxLanguage() )
		-- C++ macro to pull primary language id :     #define PRIMARYLANGID(lgid)    ((WORD  )(lgid) & 0x3ff)
		-- Hex | Dec
		-- 0x04 | 04	CHS, Chinese, 		0x0804
		-- 0x09 | 09 	ENU, English US , 	0x0409
		-- 0x07 | 07	DEU, German,     	0x0407
		-- 0x0C | 12  	FRA, French, 		0x040C
		-- 0x11 | 17    	JPN, Japanese, 	0x0411
		-- 0x12 | 18	KOR, Korean, 		0x0412

		--	ENGLISH , GERMAN, FRENCH,  -- NOT implemented : CHINESE, JAPANESE, KOREAN
		LanguageIDs = #( 0x09,0x07,0x0C ), -- not implemented:  ....,0x04,0x11,0x12 )
		
	public
		LanguageIndex = findItem LanguageIDs ((sysinfo.GetMaxLanguage())[1]),

		UIStrings =
		(
			struct UIStrings
			(
				ViewportConfig 	= #("Viewport Configuration", "Ansichtsfenster konfigurieren", "Configuration fenêtre","CHINESE", "JAPANESE", "KOREAN" ),
				Progressive    	= #("Improve Quality Progressively", "Qualität schrittweise verbessern", "Améliorer la qualité progressivement","CHINESE", "JAPANESE", "KOREAN" ),
				MakePreview	   	= #("Make Preview", "Vorschau erstellen", "Créer aperçu", "????", "????-???", "?? ?? ???" ),
				WorldAxis	   	= #("Display World Axis", "Weltachse anzeigen", "Afficher axe univers","CHINESE", "JAPANESE", "KOREAN"  )				
			)
			UIStrings()
		)
)
MaxLocale=MaxLocale() -- this is a static struct

struct NitrousINIEntries
(
	private 
		-- forward declarations
		function Read=(),
	
	
		--created,
		INISection="Nitrous",
		MaxIniFileName = getMAXIniFile(),

		maxResolution=8192,
		
		function OnCreate=
		(
			Read()
			ok
		),
	
	public
		GFXTexSize,
		TextureSizeLimitEnabled,
		TextureSizeLimit,
		BGTextureSizeLimitEnabled,
		BGTextureSizeLimit,
		-- reads values from the ini file 						
		function Read=
		(
			try
			(
				GFXTexSize =  (getINISetting maxIniFileName INISection "GFXTexSize") as integer
				TextureSizeLimitEnabled =  getINISetting maxIniFileName INISection "ViewportTextureSizeLimitEnabled"
				TextureSizeLimit =  (getINISetting maxIniFileName INISection "ViewportTextureSizeLimit") as integer 
				BGTextureSizeLimitEnabled =  getINISetting maxIniFileName INISection "ViewportBackgroundTextureSizeLimitEnabled"
				BGTextureSizeLimit =  (getINISetting maxIniFileName INISection "ViewportBackgroundTextureSizeLimit") as integer

				if(GFXTexSize == 0) then  GFXTexSize=512
				
				if ( TextureSizeLimitEnabled == "1" ) then TextureSizeLimitEnabled = true else  TextureSizeLimitEnabled= false
				
				if( TextureSizeLimit == 0) then TextureSizeLimit=512
				
				if ( BGTextureSizeLimitEnabled == "1" ) then BGTextureSizeLimitEnabled = true else  BGTextureSizeLimitEnabled= false
				if( BGTextureSizeLimit == 0 ) then BGTextureSizeLimit=1024
				true
			)
			catch( false)
		),
		
		-- applies & writes values out directly to 3sdmax.ini - this prevents values getting lost because of Max crashin
		function Write=
		(
			try
			(
				setINISetting maxIniFileName INISection "GFXTexSize" (GFXTexSize as string)
				
				if ( TextureSizeLimitEnabled == true ) then boolValString = "1" else  boolValString="0"
				setINISetting maxIniFileName INISection "ViewportTextureSizeLimitEnabled" boolValString
				
				setINISetting maxIniFileName INISection "ViewportTextureSizeLimit" (TextureSizeLimit as string )
				
				if ( BGTextureSizeLimitEnabled == true ) then boolValString = "1" else  boolValString="0"
				setINISetting maxIniFileName INISection "ViewportBackgroundTextureSizeLimitEnabled" boolValString
				
				setINISetting maxIniFileName INISection "ViewportBackgroundTextureSizeLimit" (BGTextureSizeLimit as string)

				--- how to set "GFXTexSize" ?											
				nitrousgraphicsmanager.SetTextureSizeLimit TextureSizeLimit TextureSizeLimitEnabled
				nitrousgraphicsmanager.SetBackgroundTextureSizeLimit BGTextureSizeLimit BGTextureSizeLimitEnabled
				true
			)
			catch( false )
		),
		created=OnCreate()
)	
NitrousINIEntries=NitrousINIEntries() -- This is a static struct

struct NitrousShadowQualities
(
	private
		--created,
		Names=#( "HardShadows","SoftEdgedShadows","0.125X","0.25X","0.5X","1X","2X","4X","8X","16X"),
	
		function OnCreate=
		(
			ok
		),
		
	public
		
		function GetNames=
		(
			deepCopy Names
		),			
		created=OnCreate()
)
NitrousShadowQualities=NitrousShadowQualities()	-- This is a static struct


struct NitrousVisualStyles
(
	private 
		--created,
	
		Names=#( 	"Realistic","Shaded","Facets","ConsistentColors","Hiddenline","WireFrame","BoundingBox","Clay", 
					"Ink","ColorInk","Acrylic",	"Tech",	"Graphite","ColorPencil","Pastel"),
							
		NamesLower=#(),
					
		Actions=#(  #(-844228238,"1" ), #(0,"550"),#(0,"553"),#(0,"554"),#(0,"40834"),#(0,"551"),#(0,"556"),#(0,"616"), 
					#(0,"609"),#(0,"610"),#(0,"611"),#(0,"612"),#(0,"613"),#(0,"614"),#(0,"615") ),

		function OnCreate=
		(
			-- remove "Facets" and "Clay" mode for Max 2012 (introduced 2013
			if( (maxversion())[1] < 14900) then -- before Max 2013 (beta)
			(
				idx = findItem Names "Clay"
				if( idx > 0) then
				(
					deleteItem Names idx
					deleteItem Actions idx
				)
				idx = findItem Names "Facets"
				if( idx > 0) then
				(
					deleteItem Names idx
					deleteItem Actions idx
				)
			)		
			NamesLower= for i = 1 to Names.count collect  toLower Names[i] 
			ok				
		),
		
	public												
		function GetNames=
		(
			deepCopy Names
		),
		function GetActions=
		(
			deepCopy Actions
		),

		function GetAction n=
		(
			idx=case classOf n of 
			(
				string: finditem NamesLower (toLower n) 
				
				integer: if( n>0 AND n <= NamesLower.count) then n
				
				default: 0
			)
			if( idx > 0 ) then
				#((Actions[idx])[1],(Actions[idx])[2])
			else
				undefined					
		),				
		created=OnCreate()
)			
NitrousVisualStyles=NitrousVisualStyles()	-- This is a static struct

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

		-- holds variables for the VP config dialog capture, cause we can't pass paramters in UICapture callbacks
		vptConfigProgressiveFlag=false,
		vptConfigProcResolution=512,

		
		-- constructor - fills the info from the current selected viewport
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
		Credits ="©2011-2017, Josef Wienerroither",
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

	---------------------------------------------------------------------------
	--- User Interface Items / Rollouts
	--- at the beginning this time, to be able to create it in the Preview Constructor
	---------------------------------------------------------------------------

	rollout roAboutOptions "About"  rolledup:true
	(
		local updateCheckURI 
		local updateWebClient

		label laCopyright01 "PowerPreview Concept and Code" align:#center

		label laCopyright02 "" align:#center  height:16
		hyperlink urlPowerPreview "www.frogsinspace.at" height:16 align:#center
		button btUpdateCheck "Check for Updates"

		function OnVersionCheckCompleted evt=
		(
			if( updateWebClient != undefined ) then
			(
				dotnet.removeEventHandlers updateWebClient "DownloadStringCompleted"
				updateWebClient=undefined
			)

			if( NOT evt.Cancelled  ) then
			(
				if(evt.Error != undefined) then
					messageBox ("Update-Check failed because of the following Reason:\n" + evt.Error.Message) title:"PowerPreview: Update-Check failed"

				else
				(
					format "PowerPreview: New Version Check found V%\n" evt.Result

					if( evt.Result > AppInfo.Version ) then
					(
						dlgText = "Updated Version found: V"+ evt.Result+"\n( Installed Version: V" + AppInfo.Version +")\n\nDownload the new Version ?"
						if( queryBox dlgText title:"PowerPreview: New Update available" ) then
						(
							-- start the download
							shelllaunch AppInfo.DownloadURL ""
						)

					)
					else
					(
						dlgText ="Most recent Version already installed:\nV"+ AppInfo.Version
						messageBox dlgText title:"PowerPreview Update"
					)
				)
			)
			else print "canceled"
		)

		on roAboutOptions open do
		(
			urlPowerPreview.address = AppInfo.HomeURL 
			updateCheckURI = dotnetObject "System.Uri" AppInfo.UpdatecheckURL	

			laCopyright02.text = AppInfo.Credits			
		)
		
		on btUpdateCheck pressed do
		(
			if( updateWebClient == undefined ) then
			(
				updateWebClient = dotNetObject "System.Net.WebClient"

				try
				(
					dotnet.addEventHandler updateWebClient "DownloadStringCompleted" onVersionCheckCompleted
					latestVersion = updateWebClient.DownloadStringAsync updateCheckURI
				)
				catch
				(
					format "PowerPreview: Update-Check init failed with reason:\n%\n" (getCurrentException())
					updateWebClient = undefined
				)
			)
		)
	)

	rollout roNitrousOptions "Nitrous Render Options - ( Live )"
	(

		local liveNitrous
		local previousStyle=1   -- just to be able to reverse dropddownlist selections
		local bokehThumbSize= Point2 60 50
		local bokehThumbHashSize=24 -- if thumbhash grows beyond that it gets completley cleared
		local bokehButtonBitmap
		local iblSkyLightName="IBL_SkyLight_PowerPreview"
		
		local bokehImageStore= dotNetObject "System.Collections.Hashtable"
		local isDepthTracking=false

		label laVisualStyle "Rendering Style" align:#left offset:[0,4] across:4

		dropdownlist ddVisualStyle width:104 offset:[20,0]

		button btCopyStyle "Copy" width:48 offset:[28,0] align:#right
		
		button btPasteStyle "Paste" width:48 align:#right offset:[6,0]
		
		checkbutton cbNitrousTweaker "Nitrous Tweaker" across:3 align:#left width:90 offset:[0,0] 
		
		checkbutton cbProgressiveRendering "Progressive Display"  width:102  offset:[-5,0] align:#left

		spinner spProgressiveFadingFactor "Fading Factor" width:76 range:[0,256,32] type:#integer offset:[6,3] align:#right

			
		rollout roNitrousTweaker "Nitrous Viewport Texture Tweaker" width:260
		(
			local oldGFXTexSize, oldBGTextureSizeLimit, oldBGTextureSizeLimitEnabled, oldTextureSizeLimit, oldTextureSizeLimitEnabled
			local GFXTexSizeIsDirty=false
			
			local MemoryHeadText = "Nitrous Memory Usage: "
			
			Group "Resolution Limits"
			(
				spinner spTextureSizeLimit "Textures*" type:#integer range:[4,8192,512] align:#right fieldwidth:40 offset:[64,1] across:2
				checkbutton cbTextureSizeLimitEnable "Enable" align:#right height:18

				spinner spBGTextureSizeLimit "Background Textures" type:#integer range:[4,8192,1024] align:#right offset:[64,1] fieldwidth:40 across:2
				checkbutton cbBGTextureSizeLimitEnable "Enable" align:#right height:18

				spinner spGFXTexSize "Procedural Maps" type:#integer range:[128,4096,512] align:#right fieldwidth:40 across:2 offset:[64,1] enabled:true
				checkbutton cbDummy01 "Enable" align:#right height:18 visible:false				

				
				label laTextureSizeHint "*Applies to Shaded Material Display Mode only" offset:[0,4]
			)
			
			Group "Material Display Utilities"
			(
				label laSelectedTo "Selected Objects To..." align:#left across:2
				label laAllTo "All Objects To..." align:#left offset:[6,0]
				
				button btShadedSelected "Shaded" width:46 align:#left height:18 across:4
				button btShadedMapsSelected "Shade+Map" width:64 align:#left  height:18 offset:[-9,0]
				button btShadedAll "Shaded" width:46 align:#left   height:18 offset:[6,0]
				button btShadedMapsAll "Shade+Map" width:64 align:#left  height:18 offset:[-4,0]


				button btRealisticSelected "Realistic" width:46 align:#left  height:18  across:4  offset:[0,-2]				
				button btRealisticMapsSelected "Real+Map" align:#left  width:64 height:18 offset:[-9,-2]
				button btRealisticAll "Realistic" width:46 align:#left  height:18 offset:[6,-2]
				button btRealisticMapsAll "Real+Map" width:64 align:#left  height:18 offset:[-4,-2]


			)
			
			label laDummy01 "" height:0 offset:[0,-12] visible:false
			Group "" 
			(
				label laMemoryState "Nitrous Memory Usage: ( 3ds Max 2013+ only )" align:#center width:(roNitrousTweaker.width-16) style_sunkenedge:false offset:[2,-9] 
			)
			
			button btRevert "Revert" across:4 align:#right offset:[-6,0] width:54
			button btDefaults "Defaults" align:#right offset:[-6,0] width:54
			button btApply "Apply" align:#right width:49 offset:[8,0]
			button btExit "Exit" align:#right width:48  offset:[2,0]
			
			function GetNodeMaterials nodes:$objects=
			(
				for obj in nodes where (obj.material != undefined ) collect obj.material				
			)			
			
			function RefreshMemoryDisplay=
			(
				if( PowerPreview.MaxVersionMajor>=14900 ) then
					laMemoryState.text = MemoryHeadText + ( (nitrousgraphicsmanager.GetSystemMemoryUsed() as float)/1048576 ) as string + " MBytes"
			)
			
			function RefreshMapDisplay mats=
			(
				for mat in mats where mat.showInViewport == true do
				(
					mat.showinviewport=mapDisplay=false
					mat.showinviewport=mapDisplay=true
				)
			)
			
			function SetMaterialDisplay mats hwDisplay mapDisplay=
			(
				for mat in mats do 
				( 
					--format "HW:%\t\tM:%\t\tMat: %\n" hwDisplay mapDisplay mat 
					
					enableHardwareMaterial mat hwDisplay 
					
					if(hwDisplay==true) then 
						showHWTextureMap mat mapDisplay
					else
					(
						showTextureMap mat mapDisplay
						mat.showinviewport=mapDisplay -- enable mnap display accordingly
					)
				)
				redrawViews() --- required to generate mapping coordinates where not existant
			)
					
			function LoadValues=
			(
				oldGFXTexSize=spGFXTexSize.value= NitrousINIEntries.GFXTexSize
				oldTextureSizeLimit=spTextureSizeLimit.value=NitrousINIEntries.TextureSizeLimit
				oldTextureSizeLimitEnabled=cbTextureSizeLimitEnable.checked=NitrousINIEntries.TextureSizeLimitEnabled
				oldBGTextureSizeLimit=spBGTextureSizeLimit.value=NitrousINIEntries.BGTextureSizeLimit
				oldBGTextureSizeLimitEnabled=cbBGTextureSizeLimitEnable.checked=NitrousINIEntries.BGTextureSizeLimitEnabled							
			)
			
			function SaveValues=
			(
				NitrousINIEntries.GFXTexSize=spGFXTexSize.value
				NitrousINIEntries.TextureSizeLimit=spTextureSizeLimit.value
				NitrousINIEntries.TextureSizeLimitEnabled=cbTextureSizeLimitEnable.checked
				NitrousINIEntries.BGTextureSizeLimit=spBGTextureSizeLimit.value
				NitrousINIEntries.BGTextureSizeLimitEnabled=cbBGTextureSizeLimitEnable.checked							
			)
			
			on roNitrousTweaker open do
			(
				-- disable pre Max 2013 UI elements
				if( PowerPreview.MaxVersionMajor<14900 ) then
				(					
					laMemoryState.enabled=false
				)				
				
				LoadValues()
				RefreshMemoryDisplay()
			)
			
			on roNitrousTweaker close do
			(
				roNitrousOptions.cbNitrousTweaker.checked=false
			)
			
			on spGFXTexSize changed newVal do
			(
				GFXTexSizeIsDirty=true
			)
			
			on btRevert pressed do
			(
				spGFXTexSize.value=oldGFXTexSize
				spTextureSizeLimit.value=oldTextureSizeLimit
				cbTextureSizeLimitEnable.checked=oldTextureSizeLimitEnabled
				spBGTextureSizeLimit.value=oldBGTextureSizeLimit
				cbBGTextureSizeLimitEnable.checked=oldBGTextureSizeLimitEnabled
			)

			on btDefaults pressed do
			(
				spGFXTexSize.value=512
				spTextureSizeLimit.value=1024
				cbTextureSizeLimitEnable.checked=false
				spBGTextureSizeLimit.value=1024
				cbBGTextureSizeLimitEnable.checked=false
			)
			
			on btApply pressed do
			(
				SaveValues()
				NitrousINIEntries.Write()
				
				if( GFXTexSizeIsDirty==true ) then
				(
					GFXTexSizeIsDirty = false
					NitrousHandler.SetProceduralResolution( spGFXTexSize.value )
				)
				
				RefreshMapDisplay (GetNodeMaterials())
				RefreshMemoryDisplay()
			)
			
			on btExit pressed do
			(
				DestroyDialog roNitrousTweaker
			)
			
			on btShadedSelected  pressed do   	(  SetMaterialDisplay (GetNodeMaterials nodes:$selection ) false false )
			on btRealisticSelected pressed do 	(  SetMaterialDisplay (GetNodeMaterials nodes:$selection ) true  false )
			on btShadedAll pressed do		  	(  SetMaterialDisplay (GetNodeMaterials()) false false  )
			on btRealisticAll pressed do        (  SetMaterialDisplay (GetNodeMaterials()) true  false  )
			                                
			on btShadedMapsSelected pressed do      (  SetMaterialDisplay (GetNodeMaterials nodes:$selection )  false true ) 
			on btRealisticMapsSelected  pressed do  (  SetMaterialDisplay (GetNodeMaterials nodes:$selection )  true  true )
			on btShadedMapsAll pressed do       	(  SetMaterialDisplay (GetNodeMaterials())  false true )
			on btRealisticMapsAll pressed do        (  SetMaterialDisplay (GetNodeMaterials())  true  true )

		)
		-- timer tmProgressiveBusyCheck "testClock" interval:500 active:false
		-- label laProgressiveStateLabel "Rendering State" offset:[24,0] align:#right enabled:(PowerPreview.MaxVersionMajor >= 14900)
		-- label laProgressiveState "" width:80 height:18 offset:[10,-1] style_sunkenedge:true align:#right enabled:(PowerPreview.MaxVersionMajor >= 14900)


		--label laProgressiveFadingFactor "Fading Speed:" align:#left across:2
		--slider slProgressiveFadingFactor  ticks:0 offset:[-72,-2] align:#left
			
		Group "Features"
		(
			-- first line of checkboxes
			checkbox cbTextures "Textures" checked:true across:3
			checkbox cbTransparency "Transparency" checked:true offset:[-12,0]
			checkbox cbReflections "Env.Reflections" checked:true offset:[-14,0]

			-- second line of checkboxes
			checkbox cbEdgedFaces "Edged Faces" checked:false  across:3
			checkbox cbShadows "Shadows" checked:true offset:[-12,0]
			checkbox cbDynamicReflections "Dyn.Reflections" checked:true offset:[-14,0]


			-- thrid line of checkboxes
			checkbox cbHighLights "HighLights" checked:true across:3
			checkbox cbOcclusion "Amb. Occlusion" checked:true offset:[-12,0]
			checkbox cbBackground "Background" checked:false offset:[-14,0]
			button   btConfigureBG "Setup" height:20 width:40 align:#right offset:[4,-22]
		)

		Group "Light Settings"
		(
			radiobuttons rbLighting labels:#("Scene Lights", "1 Default Light","2 Default Lights")  columns:1 align:#left across:2

			checkbox cbUseSimplifiedSkyLight "Skylights as Ambient" offset:[-12,4] align:#left 		

			button   btConfigureSkylight "Setup" height:20 width:40 align:#right offset:[4,-48]		
			
			checkbox cbDefaultLightsFollowCamera "Default Lights Follow Camera" checked:true  align:#left offset:[140,3]

		)
		
		Group "Shadow / Ambient Occlusion Settings"
		(
			label laShadowQuality "Quality" align:#left offset:[0,8] across:3
			slider slShadowQuality align:#center offset:[-20,-4] width:180 type:#integer 
			edittext edShadowQuality text:"..." readonly:true width:90 height:22 offset:[0,5]  align:#right

			spinner spShadowIntensity "Shadow Intensity  " type:#float range:[0,2.00,1.00 ]  width:100 align:#left  across:2
						
			spinner spShadowMapSizeLimit "ShadowMap Size Limit" type:#integer range:[64,8192,512 ]  offset:[0,0] width:114 align:#right

		    spinner spOcclusionIntensity "Occlusion Intensity" type:#float range:[0.1,10,1 ] width:100 across:2 align:#left
			spinner spOcclusionRadius "Occlusion Radius" type:#float range:[0.1,10000,30 ]  width:100 align:#right

		)		
		
		Group "Viewport DOF / Bokeh ( Camera Viewports Only )"
		(
			
			checkbox cbDOF "Enable" checked:false across:3
			checkbox cbUseBokeh "Use Bokeh Shape" offset:[32,0]

			button btBokehImage "Set Shape"  width:60 height:50 align:#right offset:[4,-4]
			label laDummyLMB "LMB=Set, RMB=Clear"	align:#center offset:[36,-20]

			
			button btCameraSetup "Setup Camera" align:#left offset:[16-16,-24] tooltip:"Viewport DOF requires the following settings:\n* 'Multi-Pass Effect' enabled\n* 'Depth of Field (mental ray)' activated\n* 'f-Stop' value being set appropriately"
			
			--pickbutton pbFocusNode "Focal Depth from Node" align:#left
			
			
		)

		function LookUpBokehImage fileName=
		(			
			if( fileName != undefined AND fileName != "") then
			(
				-- looks up image , if not found try to load from disk
				dotnet_fname = bokehImageStore.Item[  fileName  ] 
				
				--format "First Image (%): %\n" fileName (bokehImageStore.Item[ fileName ])
				if( dotnet_fname != undefined ) then
				(
--					format "Bokeh shape found in hash '%'\n" fileName
					dotnet_fname.value
				)
				else
				(
					local newThumb = bitmap bokehThumbSize.x bokehThumbSize.y
					copy ( openBitMap fileName) newThumb
					
					if( newThumb !=undefined ) then
					( 
--						format "Bokeh shape NOT found -> loaded and inserted in hash '%'\n" fileName
						
						-- if our size is to large already, remove and free the first element from the hash
						if( bokehimageStore.Count >= bokehThumbHashSize ) then
						(
							bokehImageStore.Clear()
													
							gc light:true
						)
						
						bokehImageStore.Add fileName  (dotNetMXSValue newThumb )
						newThumb
					)
					else 
					(
--						format "Failed to load Bokeh image '%'\n" fileName
						undefined
					)
				)			
			)
			else undefined
			
		)
		
		function LoadBokehImage fileName=
		(
			if( fileName != undefined) then
			(
				local reallyLoad=true

				bi =  getBitmapInfo( fileName )

				if( (bi[3] > 1024 OR bi[4]> 1024) AND (  yesNoCancelBox "Really use this Hires Image?" title:"Bitmap Dimension Warning" !=  #yes )) then
						reallyLoad=false

				if(reallyLoad) then
					itBokehImage.bitmap = openBitMap fileName
			)
		)
				
		function SetupDofUI bokehFileName:"" enable:true=
		(
			if( cbUseBokeh.enabled != enable ) then
			(
				--find Dof/Bokeg group's groupstart and set every control from there to disabled
				dofStart = findItem (roNitrousOptions.controls) cbDof - 1
				
				for i = dofStart to roNitrousOptions.controls.count while NOT (Classof roNitrousOptions.controls[i] == GroupEndControl) do
				(
					roNitrousOptions.controls[i].enabled = enable
				)	
			)

			if( PowerPreview.MaxVersionMajor >14000 ) then
			(
				if( bokehFileName != "" AND bokehFileName != undefined ) then
				(
					copy (LookUpBokehImage bokehFileName) bokehButtonBitmap
					bokehButtonBitmap.filename = bokehFileName					
					btBokehImage.images=#( bokehButtonBitmap ,undefined, 1, 1, 1, 1, 1)						
					cbUseBokeh.checked = true
				)
				else
				(
					close bokehButtonBitmap
					bokehButtonBitmap.filename = ""
					btBokehImage.images = undefined
					cbUseBokeh.checked = false				
				)
			)
		)
		
		function UpdateUI vps=
		(

			try
			(
				--- Case confusion bug !!  -> "#Shaded" is reported as "#shaded" , "#Wireframe" as "#wireFrame"  , thus finditem fails !!!
				--- convert the incoming string before

				styleString = vps.VisualStyleMode as string

				if(styleString.count>0) then
				(
					-- BUG WORKARROUND: facets style is reported as numerical 2 !!! ( fixed in Max 2013 PU6 )
					if( stylestring=="2" ) then stylestring = "facets"
					
					styleString[1]= toUpper(styleString[1])
					

					previousStyle=ddVisualStyle.selection = FindItem (ddVisualStyle.items) styleString
				)

				rbLighting.state = case vps.lightoption of
				(
					#SceneLight: 1
					#DefaultLight:
						case vps.DefaultLightMode of
						(
							#OneLight: 2
							#TwoLight:3
							default:3
						)
					default: 0
				)

				cbTextures.checked 		= vps.UseTextureEnabled
				cbHighLights.checked 	= vps.ShowHighlightEnabled
				cbTransparency.checked	= vps.TransparencyEnabled
				cbEdgedFaces.checked	= vps.ShowEdgedFacesEnabled

				cbDynamicReflections.checked= vps.DynamicReflectionEnabled
				cbShadows.checked		= vps.ShadowsEnabled
				cbOcclusion.checked		= vps.AmbientOcclusionEnabled
				cbBackground.checked	= viewport.DispBkgImage OR vps.UseEnvironmentBackgroundColorEnabled -- does nothing in Max 2012: vps.UseViewportBackgroundEnabled OR


				-- Max 2013 or higher
				if( PowerPreview.MaxVersionMajor >= 14900 ) then
				(
					cbDefaultLightsFollowCamera.checked = vps.DefaultLightsFollowCamera
					cbReflections.checked = vps.ReflectionEnabled
				
					cbUseSimplifiedSkyLight.checked = vps.UseSimplifiedSkyLight

					cbProgressiveRendering.checked = vps.ProgressiveRenderingEnabled
					
					spProgressiveFadingFactor.value = vps.ProgressiveFadingFactor
					
					-- Viewport DOF stuff
					cbDOF.checked = vps.DOFEnabled

					cam = NitrousHandler.GetActiveVPCamera()
					
					if( cam != undefined ) then
					(
						SetupDofUI  bokehFileName:vps.BokehShape 
					)
					else
						SetupDofUI enable:false
						
				)

				try
				(
					slShadowQuality.value = findItem NitrousHandler.ShadowQualities (vps.LightingAndShadowQualityMode as string)
				)
				catch
				(
					slShadowQuality.value=1
				)
				edShadowQuality.text=NitrousHandler.shadowQualities[slShadowQuality.value]

				spShadowIntensity.value	= vps.ShadowIntensity
				spOcclusionIntensity.value= vps.AmbientOcclusionIntensity
				spOcclusionRadius.value	= vps.AmbientOcclusionRadius

				-- call UpdateUI in other rollouts which depend on the Nitrous viewport settings
				-- How to access this ?

			)
			catch
			(
				format "NitrousOptions.UpdateUI(): error in incoming settings parameter %\n" ( GetCurrentException() )
			)

		)
		
		function ManipulateViewSettings vps=
		(
			liveNitrous = vps

			UpdateUI liveNitrous
	
		)
		
		function CreateViewCamera superHidden:false=
		(

			--camera variable
			local c
			local wcol = (color 5 54 179)
			local targdist = getscreenscalefactor [0,0,0]
			-- get viewport tm
			local viewfov = getVIewFOV()
			local cXform =  Inverse(viewport.getTM())

			--disablesceneredraw() 
			-- perspective views
			if(viewport.Gettype() != #view_camera ) then
			(
				--if selection is not a camera, then create it for the user
				-- creates a camera, and assigns the current Vport Transforms
				c = Freecamera  targetDistance:targdist isSelected:on wirecolor:wcol name:"PPHelperCam"
				c.fov = viewfov
				c.orthoProjection = false 
				c.Transform = cXform 
				viewport.setcamera c
				c.type = #target
				c.target.wirecolor = wcol
				
				if( superHidden == true ) then
				(
					--this makes the node invisible in the selection dialogs
					setGroupMember c true
					setGroupMember (c.target) true

					
					
				)
			)
			else
			(

			)--end else

			-- clears the local variables
			c = undefined 
			viewfov = undefined
			cXform  = undefined

			--enablesceneredraw()
		)
	
		
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
		
		on roNitrousOptions close do
		(
			cbNitrousTweaker.Changed false  
		)

		/*
		on tmProgressiveBusyCheck tick do
		(
			-- this call causes the Nitrous rendering to be reset  -> thus this will not be used ...
			if( nitrousgraphicsmanager.IsProgressiveRenderingFinished() ) then
				laProgressiveState.text = " Idle"
			
			else
			(
				if laProgressiveState.text == " Idle" then laProgressiveState.text= " Refining"
				laProgressiveState.text=laProgressiveState.text+ "."
				if( laProgressiveState.text.count > 18 ) then
					laProgressiveState.text = " Refining"
			)
		)
		*/
		on ddVisualStyle selected newSelection do
		(
			-- BUG WARNING -- Nitrous Visual Style #BoundingBox is borked/does not work ...
			-- additionally you have to set the legacy #Box REnderLevel via viewport.SetRenderLevel #Box
			-- thus i implemented the actionman calls
			--liveNitrous.VisualStyleMode = NitrousHandler.VisualStyles[newSelection]

			styleAction = NitrousHandler.visualStyleActions[newSelection]

			if( styleAction[1] != undefined ) then
				actionman.executeAction styleAction[1] styleAction[2]
			else
				ddVisualStyle.selection= previousStyle

			previousStyle=ddVisualStyle.selection
		)
		
		on btCopyStyle pressed do
		(
			NitrousHandler.Capture()
			PowerPreview.SwitchViewport viewport.activeViewport	
		)

		on btPasteStyle pressed do
		(
			NitrousHandler.Apply()
			PowerPreview.SwitchViewport viewport.activeViewport	
		)

		
		on cbNitrousTweaker changed newState do
		(
			if( newState==true ) 
				then CreateDialog roNitrousTweaker style:#(#style_toolwindow,#style_sysmenu )
			else DestroyDialog roNitrousTweaker			
		)
		
		on cbProgressiveRendering changed newState do
		(
			NitrousHandler.ResetViewIterations()
			
			NitrousHandler.SetProgressive newstate
		)

		
		on spProgressiveFadingFactor changed newValue do
		(
			liveNitrous.ProgressiveFadingFactor= newValue
			
		)
		
		on rbLighting changed newState do
		(
			case newState of
			(
				1: liveNitrous.LightOption = #SceneLight
				2:
				(
					liveNitrous.DefaultLightMode=#OneLight
					liveNitrous.LightOption = #DefaultLight
				)
				3:
				(
					liveNitrous.DefaultLightMode =#TwoLights
					liveNitrous.LightOption = #DefaultLight
				)
				default: liveNitrous.LightOption = #SceneLight
			)
		)

		on cbUseSimplifiedSkyLight changed isChecked do
		(
			if( PowerPreview.MaxVersionMajor < 14900 ) then
				cbUseSimplifiedSkyLight.checked=false
			else
				liveNitrous.UseSimplifiedSkyLight = isChecked
			
			local sl = for l in $lights where classof l == SkyLight collect l
				
			if( sl.count == 0 ) then
			(
				if( queryBox "No Skylight found. Create one ?" title:"PowerPreview: Create Skylight" ) then
				(
					newSkyLight=skylight()					
					newSkyLight.name =iblSkyLightName
					
					PPHelper.ModifyPanelToObject newSkyLight
				)
			)
			sl=#()
		)
				
		on btConfigureSkylight pressed do
		(
			--local sl = for l in $lights where classof l == SkyLight collect l
			
			-- this triggers the Skylight creation check already existing  in the checkbutton handler
			cbUseSimplifiedSkyLight.changed ( cbUseSimplifiedSkyLight.checked )
			
			local foundSkyLight=$iblSkyLightName


			if( foundSkyLight == undefined ) then
			(
				local notFound = true
				
				for sl in $lights where  classof sl== SkyLight while notFound do
				(
					notFound = false				
					foundSkyLight = sl
				)
			)
			PPHelper.ModifyPanelToObject foundSkyLight
		)
		
		
		on cbDefaultLightsFollowCamera changed isChecked do
		(
			liveNitrous.DefaultLightsFollowCamera = isChecked
		)

		on cbTextures changed isChecked do
		(
			liveNitrous.UseTextureEnabled = isChecked
		)

		on cbHighLights changed isChecked do
		(
			liveNitrous.ShowHighlightEnabled = isChecked
		)

		on cbTransparency changed isChecked do
		(
			liveNitrous.TransparencyEnabled = isChecked
		)

		on cbEdgedFaces changed isChecked do
		(
			liveNitrous.ShowEdgedFacesEnabled = isChecked
		)
		on cbReflections changed isChecked do
		(
			liveNitrous.ReflectionEnabled = isChecked
		)

		on cbDynamicReflections changed isChecked do
		(
			liveNitrous.DynamicReflectionEnabled = isChecked
		)

		on cbShadows changed isChecked do
		(
			liveNitrous.ShadowsEnabled = isChecked
		)

		on cbOcclusion changed isChecked do
		(
			liveNitrous.AmbientOcclusionEnabled = isChecked
		)

		on cbBackground changed isChecked do
		(
			viewport.DispBkgImage =liveNitrous.UseViewportBackgroundEnabled=liveNitrous.UseEnvironmentBackgroundColorEnabled=isChecked
		)

		on btConfigureBG pressed do
		(
			max background display toggle
		)

		on slShadowQuality changed newVal do
		(
			edShadowQuality.text=NitrousHandler.ShadowQualities[slShadowQuality.value]
			liveNitrous.LightingAndShadowQualityMode =NitrousHandler.ShadowQualities[slShadowQuality.value] as Name
		)

		on spShadowIntensity changed newVal do
		(
			liveNitrous.ShadowIntensity=newVal
		)
		
		on spShadowMapSizeLimit changed newVal do
		(
			
			nitrousgraphicsManager.shadowMapSizeLimit = newVal
		)
		
		
		on spOcclusionIntensity changed newVal do
		(
			liveNitrous.AmbientOcclusionIntensity=newVal
		)

		on spOcclusionRadius changed newVal do
		(
			liveNitrous.AmbientOcclusionRadius=newVal
		)
		on cbDOF changed isChecked do
		(
			roNitrousOptions.liveNitrous.DOFEnabled = isChecked
		)

		on cbUseBokeh changed isChecked do
		(
			if( isChecked  ) then
			(
				if( bokehButtonBitmap.filename =="" ) then
					btBokehImage.pressed()
				
				-- rmove all  disabled prefixes - just in case								
				liveNitrous.BokehShape=bokehButtonBitmap.filename
			)
			else
			(
				cbUseBokeh.checked = false
				
				liveNitrous.BokehShape =""			
			)
		)

		on btBokehImage pressed do
		(	
			--images:#(openBitMap tmpBmpFile,undefined, 1, 1, 1, 1, 1)			
			--cbBokehImage.checked = false
			
			local tmpBmpFileName =getBitmapOpenFileName()
			local reallyLoad=true

			if( tmpBmpFileName != undefined ) then
			(
				bi =  getBitmapInfo( tmpBmpFileName )

				if( (bi[3] > 1024 OR bi[4]> 1024) AND (  yesNoCancelBox "Really use this Hires Image?" title:"Bitmap Dimension Warning" !=  #yes )) then
						reallyLoad=false

				if(reallyLoad) then
				(

					SetupDofUI bokehFileName:tmpBmpFileName
					liveNitrous.BokehShape=bokehButtonBitmap.filename
				)
			)
			else cbUseBokeh.checked=false
		)

		on btBokehImage rightclick do
		(

			SetupDofUI()			
			roNitrousOptions.liveNitrous.BokehShape=""
		)
		
		on btCameraSetup pressed do
		(					
			cam = NitrousHandler.GetActiveVPCamera()
			
			PPHelper.ModifyPanelToObject cam			
		)
			
		on pbFocusNode picked obj do
		(
			if( obj != undefined ) then
			(
				
				
				
				
			)
			
		)
		
		on btCreateAutoCam pressed do
		(
			CreateViewCamera superHidden:true
		)
	)

	rollOut roDirect3DOptions "Direct3D Render Options - ( Live )" rolledup:true
	(
		--label laNoOptions "Reserved for future use..." align:#center width:200 height:22 style_sunkenedge:true
		button btTest "Reserved for future use..." enabled:false
	)

	rollOut roScanlineOptions "Scanline Render Options"
	(
		button btTest "Scanline Button"
	)

	rollOut roMakePreviewOptions "'Make Preview' Render Options"
	(
		local qualityValues = #( 1,16,32,64,128,196,256,384,512,768,1024,1280,1792,2048 )

		button btMakePreviewDialog "Configure & Create"

		group "Quality"
		(
			slider slMakePreviewQuality width:270 align:#left across:2 ticks:(qualityValues.count-1) type:#integer range:[1,qualityValues.count,1]
			edittext edMakePreviewQuality  height:20 width:40 offset:[0,10] align:#right readonly:true text:(slMakePreviewQuality.value as String)
		)

		on roMakePreviewOptions open do
		(
			if( NitrousHandler.IsNitrousEnabled() AND PowerPreview.MaxVersionMajor >= 14900) then
			(
				currentPos = findItem qualityValues NitrousGraphicsManager.MakePreviewQuality
				if( currentPos==0 ) then currentPos=2   --default to quality 16

				slMakePreviewQuality.value = currentPos
				edMakePreviewQuality.text =  qualityValues[currentPos] as string
			)
			else
			(
				-- roMakePreviewOptions.controls[2] is the "Quality" Groups start control
				roMakePreviewOptions.controls[2].enabled = edMakePreviewQuality.enabled = slMakePreviewQuality.enabled = false
			)

		)

		on btMakePreviewDialog pressed do
		(
			PowerPreview.StartPreview showConfig:true
		)

		on slMakePreviewQuality changed newVal do
		(
			NitrousGraphicsManager.MakePreviewQuality = qualityValues[newVal]
			edMakePreviewQuality.text =  (qualityValues[newVal] as string)
		)
	)

	rollOut roQuickSilverOptions "QuickSilver Render Options"
	(
		button btTest "QuickSilver Button"
	)

	rollout roFilterOptions "Filter and Overlay Options" rolledup:true
	(
		local filterSetStore=#()

		checkbox cbGeometry "Geometry" checked:true across:4
		checkbox cbShapes "Shapes" checked:false
		checkbox cbLights "Lights" checked:false offset:[6,0]
		checkbox cbCameras "Cameras" checked:false

		checkbox cbHelpers "Helpers" checked:false  across:4
		checkbox cbSpacewarps "Spacewarps" checked:false
		checkbox cbParticles "Particles" checked:true offset:[6,0]
		checkbox cbBones "Bone Objects" checked:false


		groupbox gbdummy width:300 height:1
		label laDummy visible:false height:0
		checkbox cbGrid "Active Grid" checked:false across:4
		checkbox cbSafeFrames "Safe Frames" checked:false
		checkbox cbFrameNumbers "Frame #" checked:false enabled:false  offset:[6,0]
		checkbox cbViewName "View Name" checked:false visible:true

		function StoreFilterSet=
		(

			idx=1

			for theName in (getPropnames hideByCategory) do
			(
				filterSetStore[idx] = getProperty hideByCategory theName
				idx +=1
			)
			-- store the grid visiblity in the 11 position
			filterSetStore[idx]   = viewport.getGridVisibility viewport.activeViewport
			filterSetStore[idx+1] = displaySafeFrames
			filterSetStore[idx+2] = ViewportButtonMgr.EnableButtons
		)

		function RecallFilterSet=
		(
			local extraFilters=3  -- holds the number of "non" category related filter flags...

			if( filterSetStore.count == (getPropnames hideByCategory).count+extraFilters ) then
			(
				idx=1

				for theName in (getPropnames hideByCategory) do
				(
					try
					(
						setProperty hideByCategory theName filterSetStore[idx]
					)
					catch
					(
						-- just catch the function assignements #all, #none
					)
					idx +=1
				)

				--"non" category related filter flags
				viewport.setGridVisibility viewport.activeViewport filterSetStore[idx]
				displaySafeFrames 	= filterSetStore[idx+1]
				ViewportButtonMgr.EnableButtons=filterSetStore[idx+2]

			)
		)

		function ApplyActiveSet=
		(
			-- save the current filter
			StoreFilterSet()

			-- apply the active set ( in the GUI ) to the category filters
			hideByCategory.geometry = 	NOT	 cbGeometry.checked
			hideByCategory.shapes = 	NOT  cbShapes.checked
			hideByCategory.lights = 	NOT  cbLights.checked
			hideByCategory.cameras= 	NOT  cbCameras.checked
			hideByCategory.helpers= 	NOT  cbHelpers.checked
			hideByCategory.spacewarps= 	NOT  cbSpacewarps.checked
			hideByCategory.particles= 	NOT  cbParticles.checked
			hideByCategory.bones = 		NOT  cbBones.checked

			viewport.setGridVisibility viewport.activeViewport cbGrid.checked
			displaySafeFrames = cbSafeFrames.checked
			ViewportButtonMgr.EnableButtons = cbViewName.checked
		)


		on roFilterOptions open do
		(
			StoreFilterSet()
		)
	)

	rollout roOutputOptions "Output Options"
    (
		-- forward declarations
		--local function ParseNameString=(),
		
		local fileNameTokens= #( "%scene", "%view", "%date", "%time", "%begin", "%end")
		local tokenCheckBoxes = #()
		
		label laCreator "Use Viewport" across:3 offset:[0,4]	align:#left
		dropdownlist ddViewport align:#left offset:[-30,0] width:130 align:#left 
		checkbox cbAutoplay "Auto Play" align:#right  offset:[-24,4] height:16 across:2

		spinner spTargetWidth "Width"  height:28 width:90 offset:[0,4] align:#left across:4 type:#integer  
		spinner spTargetHeight "Height"  height:28 width:90 offset:[20,4] align:#left  type:#integer 
		checkbutton  btLockResolution "Lock"  width:20 height:18 offset:[28,3]  align:#left tooltip:"Lock Output Resolution" images:#("LockButton_i.bmp", "LockButton_a.bmp",1,1,1,1,1 )
		checkbox cbUseCameraAspect "Use Safe Frame"  align:#left  offset:[-20,4]

		--groupbox gpDummy01 width:300 height:1

		label laTargetScale "Scale (%)" across:3 align:#left  offset:[0,2]
		slider slTargetScale width:210 align:#left offset:[-32,-10] type:#integer orient:#horizontal
		edittext edTargetScale  height:20 width:35  align:#right readOnly:false
		
		editText edTargetToParse "Target Filename" width:280 height:22 across:2  labelOnTop:true readonly:true
		button btFileName "@" width:24 height:22 offset:[0,18] align:#right border:true images:#("bip_mixerio_i.bmp", undefined,4,1,2,1,2, true )

		editText edTargetFile  width:304 height:22 labelOnTop:true readonly:true style_sunkenedge:true
		--- FUTURE dotNetControl edTargetFile "textbox"  multiline:true ReadOnly:true backcolor:dotBackColor foreColor:dotTextColor width:304 height:48 labelOnTop:true 
			
		--label laDummy "" height:0
		label laAppend "Add:" align:#left  across:7  tooltip:"Enable various automatic Filename-Postfixes..." offset:[0,1] 
		checkbox cbAppendSceneName	"Scene"   offset:[-16,0] 
		checkbox cbAppendViewName	"View" offset:[-4,0] 
		checkbox cbAppendDate "Date" offset:[0,0] 
		checkbox cbAppendTime "Time" offset:[4,0] 
		checkbox cbAppendFrameRange "Frame Range" offset:[6,0]
		
		--button btTest "Parse"
		
		function ParseNameString fname=
		(
			local newString
			local now = getLocalTime()
			local fileNameExpands=#( getfilenamefile maxFileName, PPHelper.GetViewportName viewport.activeViewport, PPHelper.GetDate(), PPHelper.GetTime(), PowerPreview.currentProject.BeginFrame, PowerPreview.currentProject.EndFrame )

						
			newString=fname
			for i = 1 to fileNameTokens.count do
			(
				-- not implemented
				-- tokenCheckBoxes[i].checked =  ( findString newString fileNameTokens[i] != undefined )
				newString = substituteString  newString fileNameTokens[i] (fileNameExpands[i] as string)
			)
			newString
		)

		function AppendStringToFilename fname astr=
		(
			getFilenamePath fname + getFileNameFile fname + astr + getFileNameType fName
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
		
		on edTargetToParse changed newText do
		(
			PowerPreview.currentProject.targetFilename = ParseNameString newText
						
			edTargetFile.text = getFileNameFile PowerPreview.currentProject.targetFilename + getFileNameType PowerPreview.currentProject.targetFilename
		)

		on cbAppendSceneName changed isChecked do 
		(
			local astr = "_"+fileNameTokens[1] -- "%scene"
			
			if( isChecked == true ) then 
				edTargetToParse.text= AppendStringToFilename (edTargetToParse.text)  astr
			else
				edTargetToParse.text=substituteString (edTargetToParse.text) astr ""
			
			edTargetToParse.changed( edTargetToParse.text )
		)

		on cbAppendViewName changed isChecked do 
		(
			local astr = "_"+fileNameTokens[2] -- "%view"
			
			if( isChecked == true ) then 
				edTargetToParse.text= AppendStringToFilename (edTargetToParse.text)  astr
			else
				edTargetToParse.text=substituteString (edTargetToParse.text) astr ""
			
			edTargetToParse.changed( edTargetToParse.text )
		)

		on cbAppendDate changed isChecked do 
		(
			local astr = "_"+fileNameTokens[3] -- "%date"
			
			if( isChecked == true ) then 
				edTargetToParse.text= AppendStringToFilename (edTargetToParse.text)  astr
			else
				edTargetToParse.text=substituteString (edTargetToParse.text) astr ""
			
			edTargetToParse.changed( edTargetToParse.text )
		)

		on cbAppendTime changed isChecked do 
		(
			local astr = "_"+fileNameTokens[4] -- "%time"
			
			if( isChecked == true ) then 
				edTargetToParse.text= AppendStringToFilename (edTargetToParse.text)  astr
			else
				edTargetToParse.text=substituteString (edTargetToParse.text) astr ""
			
			edTargetToParse.changed( edTargetToParse.text )
		)
		
		on cbAppendFrameRange changed isChecked do 
		(
			local astr = "_"+fileNameTokens[5]+"_"+fileNameTokens[6] -- "%begin" + "%end" 
			
			if( isChecked == true ) then 
				edTargetToParse.text= AppendStringToFilename (edTargetToParse.text)  astr
			else
				edTargetToParse.text=substituteString (edTargetToParse.text) astr ""
			
			edTargetToParse.changed( edTargetToParse.text )
		)

		on ddViewport selected selIdx do
		(
			PowerPreview.SwitchViewport selIdx
		)

		on spTargetWidth changed newVal do
		(
			PowerPreview.currentProject.targetWidth = newVal
			
			if cbUseCameraAspect.checked==true then
				spTargetHeight.value = PowerPreview.currentProject.targetHeight = newVal * (renderHeight as float/renderWidth as float)
			
			PowerPreview.currentProject.SetResolution (Point2  PowerPreview.currentProject.targetWidth PowerPreview.currentProject.targetHeight)
		)

		on spTargetHeight changed newVal do
		(
			PowerPreview.currentProject.targetHeight = newVal
			
			if cbUseCameraAspect.checked==true then
				spTargetWidth.value = PowerPreview.currentProject.targetwidth = newVal * ( renderWidth as float/renderHeight as float )
			
			PowerPreview.currentProject.SetResolution (Point2  PowerPreview.currentProject.targetWidth PowerPreview.currentProject.targetHeight)
		)

		on btLockResolution changed isChecked do
		(
			PowerPreview.currentProject.lockResolution = isChecked

			slTargetScale.enabled = edTargetScale.enabled = NOT isChecked
		)

		on cbUseCameraAspect changed isChecked do
		(
			PowerPreview.currentProject.useCameraAspect = isChecked
			PowerPreview.currentProject.SetResolution (Point2  PowerPreview.currentProject.targetWidth PowerPreview.currentProject.targetHeight)
			roMasterRollout.UpdateUI()
		)

		on slTargetScale changed newVal do
		(
			PowerPreview.currentProject.targetScale = newVal as float/100
			edTargetScale.text = newVal as string 
			
			-- enforce UI and resolution calc refresh
			PowerPreview.OnActiveViewportChanged forceRefresh:true
		)

		on slTargetScale rightClick do 
		(
			slTargetScale.value=100
			slTargetScale.changed slTargetScale.value
		)
		
		on edTargetScale entered newVal do
		(
			
			newVal = newVal as Integer
			if( newVal != undefined ) then
			(
				if( newVal  >= PPPrefs.targetScaleMin AND  newVal  <= PPPrefs.targetScaleMax ) then
				(
					slTargetScale.value=newVal
					slTargetScale.changed slTargetScale.value
				)			
			)
			edTargetScale.text = slTargetScale.value as string
		)
		
		on btFileName pressed do
		(
			local newname = getBitmapSaveFileName caption:"Set Filename and Format" filename:edTargetToParse.text
			if(newname != undefined) then
			(
				edTargetToParse.text = newname
				edTargetToParse.changed( edTargetToParse.text )
			)
			cbAppendSceneName.checked=cbAppendViewName.checked=cbAppendDate.checked=cbAppendTime.checked=cbAppendFrameRange.checked=false
		)
	
		on cbAutoPlay changed isChecked do
			PowerPreview.currentProject.AutoPlay= isChecked
	)

	rollout roDebugOptions "Debug Options" rolledup:false
	(
		global debugRedrawIndex=0
		local debugForm

		checkbutton btProgressiveToggle "Progressive Toggle" align:#center across:2 
		
		checkbutton btDebugRedraws "Redraw Debug" 
		--checkbox cbDebugPrint "Debug" checked:DEBUG offset:[8,4] align:#right visible:DEBUG

		--button btVPSCapture "VP Capture"  height:25 width:90  across:2 align:#center visible:DEBUG
		--button btVPSRestore "VP Restore"  height:25 width:90 align:#center visible:DebugEnabled

--			checkbutton  btAutoShrink "Auto Shrink" checked:defaultUseAutoShrink width:80 height:20 align:#left across:2
--			checkbutton  btAutoGrow "Auto Grow" checked:defaultUseAutoGrow width:80 height:20 align:#right


		function OnDebugFormClosed evt=
		(
			print "Closing and purging..."
			debugForm = undefined
		)

		function OnDebugFormShown evt=
		(
			print "I'm showing !"
		)

		function OnDebugFromLostFocus evt=
		(
			cont = queryBox "Progressive Refinement only works when 3sd Max has Focus\nYes to continue, No to abort" title:"Continue Preview creation?" beep:true

			if( cont ) then
				debugForm.Focus()
			else
				PowerPreview.StopPreview()

			print "Hey ! Where is my Focus ?"
		)

		function GetDebugFormHandle=
		(
			if( debugForm != undefined ) then
				debugForm.Handle

			else 0
		)

		function DebugFormCreate=
		(
			if( debugForm == undefined ) then
			(
				debugForm = dotNetObject "MaxCustomControls.MaxForm"
				debugForm.topmost = true
				dotNet.addEventHandler debugForm "Shown" OnDebugFormShown
				dotNet.addEventHandler debugForm "LostFocus" OnDebugFromLostFocus
				dotNet.addEventHandler debugForm "Closed" OnDebugFormClosed
			)
			debugForm.Handle
		)

		function DebugFormOpen modal=
		(
			--Create a DotNet Form
			if( debugForm != undefined ) then
			(
				if ( modal == true ) then
					debugForm.ShowModal()
				else debugForm.Show()
			)
		)

		function DebugFormClose=
		(
			if( debugForm != undefined ) then
			(
				debugForm.Close()
				debugForm = undefined
			)
		)

		
		function OnDebugRedraw=
		(
			debugRedrawIndex=debugRedrawIndex+1
			
			format "DebugRedraw: #%, Done: %\n" debugRedrawIndex ( nitrousgraphicsManager.IsProgressiveRenderingFinished() )
			if( nitrousgraphicsManager.IsProgressiveRenderingFinished() ) then debugRedrawIndex=0
			
		)


		function OnDebugRedrawM2012=
		(
			debugRedrawIndex=debugRedrawIndex+1
			
			format "DebugRedraw: #%\n" debugRedrawIndex
		)

		
		on btProgressiveToggle changed isPressed do
		(
			NitrousHandler.ResetViewIterations()
			NitrousHandler.setProgressive isPressed
		)

		
		on btDebugRedraws changed isPressed do
		(
			unregisterRedrawViewsCallback OnDebugRedraw
			unregisterRedrawViewsCallback OnDebugRedrawM2012
			if( isPressed ) then
			(
				debugRedrawIndex=0
				
				if( PowerPreview.MaxVersionMajor < 149000) then				
					registerRedrawViewsCallback OnDebugRedrawM2012
				else
					registerRedrawViewsCallback OnDebugRedraw
			)
		)

		
		on cbDebugPrint changed isChecked do
		(
			debugPrint = isChecked
		)
	)

	rollOut roMasterRollout "PowerPreview" width:350 height:900
	(	
		local dialogHeightD3D=496
		local dialogHeightMin=204
		local dialogHeightDelta = 20;  -- version dependent dialog height difference for Max 2013+, currently not used

		
		local customDialogHeight

		local subRolloutDelta=dialogHeightMin+8
		local runButtonCaption="GO"
		local creatorRollouts=#()
		
		Group "Timebudget / Frame (secs)"
		(
			slider slDelay "" offset:[0,-4] width:190 height:20  across:2 type:#integer tooltip:"Max. Time to spend per Frame (Secs)"
			edittext edDelay  width:48 offset:[20,8] readOnly:false 

			checkbutton  btUseIterationLimit "Iteration Limit" offset:[0,0] width:76 height:22 align:#left across:4  tooltip:"Advance to next frame after iteration limit is reached"
			dropdownlist ddIterationLimit width:48  offset:[-1,1] align:#left  tooltip:"Iteration limit"
			checkbox cbDisableProgressive "Progressive Off" offset:[-28,5] align:#left   height:16 enabled:true tooltip:"Never enable Progressive Refinement"

			checkbutton btRun "GO" width:94 height:60 offset:[4,-36] align:#right

			label laCreator "Preview Method" across:3 offset:[0,8]	align:#left
			dropdownlist ddPreviewCreator align:#left offset:[-28,4] width:150
			button btSnapViewport "Snapshot" width:94 height:26 offset:[4,2] align:#right
		)

		Group "Preview Time Range"
		(
			checkbox cbActiveSegment "Active Timeline" checked:true across:4
			label laCustomSegment "Custom" align:#right offset:[-12,0] enabled:false
			spinner spBeginFrame "Start" align:#left  offset:[-8,0] width:92 type:#integer enabled:false 
			spinner spEndFrame "End"  align:#right  width:92 type:#integer enabled:false

		)

		label laFrameTime "Last Frame (ms)" offset:[0,5] align:#left across:3

		edittext edFrameTime width:185 align:#left offset:[-30,1] readOnly:true labelOnTop:false height:24
		checkbutton cbMinMaximize "Minimal UI" height:24 align:#right offset:[8,1]

		subRollout srOptionInterface height:450 width:344 offset:[-10,4]

		function SetRunButtonCaption caption: =
		(
			if( caption == unsupplied ) then
				btRun.text = runButtonCaption+" [" + (PowerPreview.GetCurrentCreator()).nameShort+"]"
			else
				btRun.text = caption
		)

		function SetRunButtonState pressed=
		(
			if( pressed ) then
			(
				SetRunButtonCaption caption:"Cancel (ESC)"
				btRun.checked=true
			)
			else
			(
				SetRunButtonCaption()
				btRun.checked=false
			)
		)

		function RebuildOptionInterface newCreatorIndex=
		(
			cbDisableProgressive.enabled=true

			if( NOT NitrousHandler.IsNitrousEnabled() ) then
			(
				slDelay.enabled =  false
				edDelay.enabled =  false
				btUseIterationLimit.enabled = false
				ddIterationLimit.enabled  = false
				cbDisableProgressive.checked= PowerPreview.currentProject.disableProgressive=true
				cbDisableProgressive.enabled=false

			)
			ddPreviewCreator.items = PowerPreview.GetCreatorNames()

			if( newCreatorIndex >0 AND newCreatorIndex <= ddPreviewCreator.items.count ) then
			(
				ddPreviewCreator.selection = newCreatorIndex
				
				-- remove all creator dependend rollouts
				for ro in srOptionInterface.rollouts do
					removeSubRollout srOptionInterface ro

				--print ( creatorRollouts  )
				for ro in creatorRollouts[ newCreatorIndex ] do
					addSubRollout srOptionInterface ro

				
				-- toggle various Max-internal Preview related UI options 
				cbActiveSegment.enabled= btSnapViewport.enabled = NOT ( newCreatorIndex == PowerPreview.GetInternalMakePreviewIndex() )
				
				if( Nitroushandler.IsNitrousEnabled() == true ) then
				(
					if( PowerPreview.MaxVersionMajor <14900 AND newCreatorIndex ==PowerPreview.GetInternalMakePreviewIndex() ) then
					(
						cbDisableProgressive.checked=true
						cbDisableProgressive.changed true
						cbDisableProgressive.enabled=false					
					)
					else
					(
						cbDisableProgressive.checked=false
						cbDisableProgressive.changed false
						cbDisableProgressive.enabled=true
					)
				)
			)
			SetRunButtonCaption()
		)

		function UpdateUI=
		(
			local cP=PowerPReview.currentProject
			
			-- fill UI elements with current prefs Values
			roOutputOptions.spTargetWidth.value = cP.targetWidth
			roOutputOptions.spTargetHeight.value = cP.targetHeight

			roOutputOptions.ddViewport.selection = PowerPreview.currentViewport

			spBeginFrame.value = cP.beginFrame
			spEndFrame.value = cP.endFrame

			slDelay.value =cP.stepDelay
			edDelay.text = formattedprint (cP.stepDelay/1000 as float) format:"2.2f"
			btUseIterationLimit.checked  = cP.useIterationLimit

			---print "UI Update"
		)

		function SetStatusText txt=
		(
			edFrameTime.text= txt
			--oldColor =btUseIterationLimit.highlightColor
			--btUseIterationLimit.highlightColor = color 200 100 0
			--btUseIterationLimit.highlightColor =oldColor
		)

		on roMasterRollout open do
		(

			--PowerPreview.TestInstancePrivate()
					
			
			local rolloutsDirect3D= #( roOutputOptions, roDirect3DOptions, roFilterOptions, roAboutOptions  )
			local rolloutsNitrous= #( roOutputOptions, roNitrousOptions, roFilterOptions, roAboutOptions  )
			local rolloutsQuicksilver= #( roOutputOptions, roQuickSilverOptions, roFilterOptions, roAboutOptions)
			local rolloutsScanline=  #( roOutputOptions, roScanlineOptions, roFilterOptions, roAboutOptions)
			-- WIP local rolloutsMakePreview= #( roOutputOptions, roMakePreviewOptions, roNitrousOptions, roAboutOptions   )
			-- WIP local rolloutsMakePreviewD3D= #( roOutputOptions, roMakePreviewOptions, roDirect3DOptions, roAboutOptions   )

			local rolloutsMakePreview= #( roMakePreviewOptions, roNitrousOptions, roAboutOptions   )
			local rolloutsMakePreviewD3D= #( roMakePreviewOptions, roDirect3DOptions, roAboutOptions   )

			/* complete set
			creatorRollouts = #( rolloutsNitrous, rolloutsQuicksilver, rolloutsScanline,rolloutsMakePreview )
			*/
			-- has to be adjusted when new creators are introduced
			-- adjust the rollout configs according to viewport tech and max version useed....
						
			creatorRollouts=#()
			
			crNames = PowerPreview.GetCreatorNames short:true
			
			for idx=1 to crNames.count do
			(
				case crNames[idx] of
				(
					"Nitrous":		append creatorRollouts rolloutsNitrous
					
					"Direct3D": 	append creatorRollouts rolloutsDirect3D
					
					"Scanline": 	append creatorRollouts rolloutsScanline
					
					"Quicksilver": 	append creatorRollouts rolloutsScanline
					
					"MakePreview":	if( Nitroushandler.IsNitrousEnabled() ) then append creatorRollouts rolloutsMakePreview
									else append creatorRollouts rolloutsMakePreviewD3D
					
					default:		format "PowerPreview: unknown FrameCreator : %\n" crName
				)
			)
			if( NOT Nitroushandler.IsNitrousEnabled() ) then 
				roMasterRollout.height=dialogHeightD3D

			local cP = PowerPreview.currentProject			
			
			slDelay.range=[ PPPrefs.stepDelayGranularity, PPPrefs.stepDelayMax , cP.stepDelay ] 
			slDelay.ticks=10
			edDelay.text=formattedprint (cP.stepDelay/1000 as float) format:"2.2f"
			
			btUseIterationLimit.checked=cP.Defaults.UseIterationLimit
			
			ddIterationLimit.items=PPPrefs.iterationLimits 
			ddIterationLimit.height=(PPPrefs.iterationLimits.count+1)*18 -- measured in pixel 
			ddIterationLimit.selection = findItem PPPrefs.iterationLimits ( cP.Defaults.IterationLimit as string)
			
			cbDisableProgressive.checked=cP.disableProgressive			
			
			spBeginFrame.range=[-100000,100000 ,cP.BeginFrame ] 
			spEndFrame.range= [-100000,100000 ,cP.EndFrame ]
			
			if( PowerPreview.MaxVersionMajor < 14900 ) then
			(
				idx = findItem rolloutsNitrous roNitrousCameraOptions
				if( idx >0 ) then
					deleteItem rolloutsNitrous idx

				idx = findItem rolloutsMakePreview roNitrousCameraOptions
				if( idx >0 ) then
					deleteItem rolloutsMakePreview idx
			)

			-- adjust rolloutheight depending on version - not needed any longer
			/*
			if( PowerPreview.MaxVersionMajor >= 14900 ) then
				roMasterRollout.height += DialogHeightDelta
			*/	
			srOptionInterface.height = roMasterRollout.height - SubRolloutDelta

			RebuildOptionInterface( PowerPreview.GetCurrentCreatorIndex() )

			if( DEBUG == true ) then
				addSubRollout srOptionInterface roDebugOptions			
						
		)

		on roMasterRollout close do
		(
			-- call PowerPreview's  Destructor
			try ( PowerPreview.OnCloseUI() ) 
			catch( format "MasterRollout.OnClose(): failed to signal PowerPreview, %\n" (GetCurrentException()) )
		)

		on roMasterRollout resized newSize do
		(
			if( newSize.y < dialogHeightMin ) then
				roMasterRollout.height = dialogHeightMin

			srOptionInterface.height = roMasterRollout.height - SubRolloutDelta
		)

		on btRun changed isPressed do
		(

			if isPressed then
			(
				if( cbActiveSegment.checked ) then
				(
					-- Update the time range just in case the scene animationrange  has changed

					PowerPreview.currentProject.beginFrame=animationRange.Start
					PowerPreview.currentProject.endFrame=animationRange.End
				)
				PowerPreview.StartPreview()
			)
			else	PowerPreview.StopPreview showResult:((NOT PowerPreview.snapShotMode) AND PowerPreview.currentProject.AutoPlay)
		)

		on btSnapViewport pressed do
		(
			if( NOT PowerPreview.GetPreviewInProgress() ) then
				PowerPreview.StartSnapShot()
		)
		
		on ddPreviewCreator selected newIndex do
		(					
			if( newIndex!= 0 AND PowerPreview.SetCurrentCreatorIndex newIndex != undefined ) then
				RebuildOptionInterface newIndex
		)

		on slDelay changed newValue do
		(
			tmpval = mod newValue PPPrefs.stepDelayGranularity
			newValue -= tmpval

			PowerPreview.SetProjectOption #StepDelay newValue
						
			edDelay.text = formattedprint (newValue/1000 as float) format:"2.2f"
		)

		on edDelay entered newValue do
		(
			newValue = newValue as float
			if( newValue != undefined ) then
			(
				newValue = newValue *1000
				if(  newValue  >= PPPrefs.stepDelayGranularity AND  newValue <= PPPrefs.stepDelayMax ) then
				(
					tmpval = mod newValue PPPrefs.stepDelayGranularity
					newValue -= tmpval

					slDelay.value = newValue
					
					PowerPreview.SetProjectOption #StepDelay newValue
				)
			)
			edDelay.text = (formattedprint (slDelay.value/1000 as float) format:"2.2f")
		)

		on btUseIterationLimit changed isChecked do
		(
			PowerPreview.currentProject.useIterationLimit = isChecked
			-- realtime update incase a preview is in progress
			if( PowerPreview.GetPreviewInProgress() == true ) then
				PowerPreview.ActivateIterationLimit isChecked
		)

		on ddIterationLimit selected selIdx do
		(
			PowerPreview.currentProject.iterationLimit = PPPrefs.iterationLimits[selIdx] as Integer
		)

		on cbDisableProgressive changed isChecked do
		(
			-- We should make this a live feature , no ?
			PowerPreview.currentProject.disableProgressive = isChecked
		)

		on cbLivePreview changed isChecked do
			PowerPreview.currentProject.livePreview= isChecked

		on cbActiveSegment changed isChecked do
		(
			laCustomSegment.enabled=spBeginFrame.enabled=spEndFrame.enabled= NOT isChecked

			if( isChecked ) then
			(
				PowerPreview.currentProject.beginFrame=animationRange.Start
				PowerPreview.currentProject.endFrame=animationRange.End
			)
			else
			(
				if( spBeginFrame.value < animationRange.Start ) then spBeginFrame.value=animationRange.Start
				if( spEndFrame.value > animationRange.End ) then spEndFrame.value=animationRange.End

				PowerPreview.currentProject.beginFrame=spBeginFrame.value
				PowerPreview.currentProject.endFrame=spEndFrame.value
			)
		)

		on 	spBeginFrame changed newVal do
		(
			if(newVal < PowerPreview.currentProject.endFrame AND newVal >=animationRange.Start ) then
				PowerPreview.currentProject.beginFrame=newVal
			else
				spBeginFrame.value=PowerPreview.currentProject.beginFrame
		)

		on 	spEndFrame changed newVal do
		(
			if(newVal > PowerPreview.currentProject.beginFrame AND newVal <=animationRange.End) then
				PowerPreview.currentProject.endFrame=newVal
			else
				spEndFrame.value=PowerPreview.currentProject.EndFrame
		)

		on cbMinMaximize changed newVal do
		(
			if( newVal ) then
			(
				customDialogHeight = roMasterRollout.height
				roMasterRollout.height =dialogHeightMin
			)
			else
				roMasterRollout.height = customDialogHeight
		)
	)

------------------------------------------------------------------------- END OF GUI DEFINTIONS ----------------------------------------------------------------------------------	
	
	
	-- important: link the main rollout to the global struct, to be able to close it from outside
	success=CreateDialog roMasterRollout  style:#(#style_resizing,#style_titlebar,#style_sysmenu,#style_minimizebox) lockWidth:true
	PowerPreview.mainDialog = roMasterRollout
	PowerPreview.mainDialog.title = AppInfo.DialogTitle

	if( success==true ) then
		format "'%' launched...\n" AppInfo.DialogTitle
	else format "'%' launch failed...\n" AppInfo.DialogTitle
)
