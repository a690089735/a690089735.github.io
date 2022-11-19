(
	fn getWindowClass =
	(
		local source  = "using System;
"
		source += "using System.Runtime.InteropServices;
"
		source += "public class Window
"
		source += "{
"
		source += "	[DllImport(\"user32.dll\")]
"
		source += "	public static extern IntPtr GetForegroundWindow();
"
		source += "}
"

		local csharpProvider = dotNetObject "Microsoft.CSharp.CSharpCodeProvider"
		local compilerParams = dotNetObject "System.CodeDom.Compiler.CompilerParameters"
		compilerParams.GenerateInMemory = true
		compilerParams.ReferencedAssemblies.Add "System.dll"
		local compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
		compilerResults.CompiledAssembly.CreateInstance "Window"
	)
	if NOT isKindOf ::window dotNetObject do window = getWindowClass()
)

try destroyDialog ::focusTest catch()
rollout focusTest "Focus Test"
(
	local prevFocus = true, currFocus = true
	timer clock interval:100
	label lblFocus "IN FOCUS"

  	on clock tick do
  	(
		currFocus = focusTest.hwnd == (window.getForegroundWindow())
		if prevFocus != currFocus do lblFocus.text = if currFocus then "IN FOCUS" else "OUT OF FOCUS"
		prevFocus = currFocus
  	)
)
createDialog focusTest style:#()
--记得在按钮添加设置的值的提示