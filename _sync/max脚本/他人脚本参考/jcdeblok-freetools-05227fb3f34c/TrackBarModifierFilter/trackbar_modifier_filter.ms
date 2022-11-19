global mf_LB_HWND 
global mf_StackItems =#()
global mf_StackSelection=#()
global mf_tbar= maxops.trackbar;
global mf_filterIndex;
global mf_StackSelCache=#();
global mf_StackItemCount;

hwnd =  (windows.getChildHWND #max "CommandPanelWindow")[1]
mf_LB_HWND = for c in windows.getChildrenHWND hwnd   where  c[4] == "ListBox" do exit with c[1]
 
--thanks DenisT for the c# part! 

global ListBoxAssembly
fn CreateListBoxAssembly forceRecompile:on =
(
	if forceRecompile or not iskindof ::ListBoxAssembly dotnetobject or (::ListBoxAssembly.GetType()).name != "Assembly" do
	(
		source = ""
		source += "using System;\n"
		source += "using System.Text;\n"
		source += "using System.Runtime.InteropServices;\n"
		source += "public class ListBoxOps\n"
		source += "{\n"
		source += " [DllImport(\"user32.dll\")]\n"
		source += " public static extern int SendMessage(IntPtr window, int message, int wParam, IntPtr lParam);\n"
		source += " [DllImport(\"user32.dll\")]\n"
		source += " public static extern int SendMessage(IntPtr hWnd, int wMsg, int wParam, StringBuilder lParam);\n"
		source += " private const int LB_GETTEXT = 0x0189;\n"
		source += " private const int LB_GETTEXTLEN = 0x018A;\n"
		source += " public int GetTextLength(IntPtr hWnd, int item)\n"
		source += " {\n"
		source += " return (SendMessage(hWnd, LB_GETTEXTLEN, item, IntPtr.Zero));\n"
		source += " }\n"
		source += " public string GetText(IntPtr hWnd, int item)\n"
		source += " {\n"
		source += " int len = GetTextLength(hWnd, item);\n"
		source += " StringBuilder text = new StringBuilder(len+1);\n"
		source += " SendMessage(hWnd, LB_GETTEXT, item, text);\n"
		source += " return text.ToString();\n"
		source += " }\n"
		source += "}\n"

		csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
		compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"

		compilerParams.ReferencedAssemblies.Add("System.dll");

		compilerParams.GenerateInMemory = true
		compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
		 
		ListBoxAssembly = compilerResults.CompiledAssembly
		ListBoxAssembly.CreateInstance "ListBoxOps"
	)
)

global ListBoxOps = CreateListBoxAssembly forceRecompile:on


fn testCallbackFilterFunction theAnimatable theParent theSubAnimIndex theGrandParent theNode=
(
	out=false
		
	if (superClassof theAnimatable == FloatController AND mf_StackItems.count > 0 ) then	
	(
		for sel in mf_StackSelection do
		(
			a= mf_StackItems[sel+1]
			b= theGrandParent
			deps=refs.dependents b	
			if (( a==b  or  (findItem deps a)>0) and (isvalidnode a == false) ) then  ( out=true )  
			if ( sel+1 == mf_StackItems.count AND  (theGrandParent as string == a) ) then  ( out=true )  
		)	
	)
	out
)


mf_filterIndex = mf_tbar.registerFilter testCallbackFilterFunction callbackAdditionFunction "ModFilter" 8 active:false stopTraversal:false
 

try(
	stackUpdate.Stop();
	stackUpdate.Dispose();
) catch ()
	
stackUpdate = dotNetObject "System.Windows.Forms.Timer"

fn checkStack =
(
	if ((mf_tbar.isFilterActive mf_filterIndex) AND getCommandPanelTaskMode()==#modify 	) do
	(
		mf_StackItemCount= windows.SendMessage mf_LB_HWND 0x18B 0 0
		mf_StackItems=#();
		curmod=1
		obj=selection[1]
		
		if (obj!=undefined) do
		(
			for i=1 to mf_StackItemCount-1 do
			(
				item = (ListBoxOps.GetText (dotnetobject "System.IntPtr" mf_LB_HWND) (i-1))
				ind=curmod+1
				if (ind> obj.modifiers.count) do ( ind=obj.modifiers.count)
				if (obj.modifiers[ind].name == item AND i!=1 ) do (	  curmod += 1	)   		
				append mf_StackItems (obj.modifiers[curmod])	 	 
			)
		)

		append mf_StackItems (ListBoxOps.GetText (dotnetobject "System.IntPtr" mf_LB_HWND) (mf_StackItemCount-1))
			
		mf_StackSelection = for i=0 to (mf_StackItems.count-1) where (windows.SendMessage  mf_LB_HWND  0x187 i 0) == 1 collect (i)

		if ((mf_StackSelCache as string) != (mf_StackSelection as string)) then
		(
			mf_StackSelCache=deepcopy mf_StackSelection
			if (mf_tbar.isFilterActive mf_filterIndex) do ( mf_tbar.setFilterActive mf_filterIndex true);
		)
	)
	 
)

dotnet.addEventHandler stackUpdate "tick" checkStack
stackUpdate.interval = 250
stackUpdate.start()

 