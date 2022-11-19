try(destroydialog unnamedRollout)catch()

rollout unnamedRollout "Untitled" width:128 height:216
(
	local custom_menu
	rollout custom_menu "Untitled" width:128 height:208
	(
		fn getWindowClass =
		(
			local source  = 
"
using System;
using System.Runtime.InteropServices;
public class Window
{
[DllImport(\"user32.dll\")]
public static extern IntPtr GetForegroundWindow();
}
"
			local csharpProvider = dotNetObject "Microsoft.CSharp.CSharpCodeProvider"
			local compilerParams = dotNetObject "System.CodeDom.Compiler.CompilerParameters"
			compilerParams.GenerateInMemory = true
			compilerParams.ReferencedAssemblies.Add "System.dll"
			local compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
			compilerResults.CompiledAssembly.CreateInstance "Window"
		)
		local window = getWindowClass()
		
		button btn1 "Button" pos:[8,8] width:96 height:24
		button btn2 "Button" pos:[8,40] width:96 height:24
		timer tmr1 "Timer" pos:[9,163] width:24 height:24 interval:200
		on tmr1 tick  do
		(
			if custom_menu.hwnd != window.getForegroundWindow() do destroydialog custom_menu
		)
		on btn1 pressed do destroydialog custom_menu
		on btn2 pressed do destroydialog custom_menu
	)
	
	
	
	button btn1 "ÓÒ¼ü²Ëµ¥" pos:[8,8] width:64 height:24
	
	on btn1 rightclick do
	(
		createdialog custom_menu style:#()
		
	)
)
createdialog unnamedRollout