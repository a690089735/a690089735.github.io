function GetCusFnClass = 
(
	source = 
	"
	using System;
	using System.Runtime.InteropServices;
	
	public class CusFn
	{
		[DllImport(\"user32.dll\")]
		public static extern long GetWindowLong(IntPtr hWnd, int nIndex);
		[DllImport(\"user32.dll\")]
		public static extern long SetWindowLong(IntPtr hWnd, int nIndex, long dwNewLong);
		[DllImport(\"user32.dll\")]
		public static extern int SetLayeredWindowAttributes(IntPtr hwnd, int crKey, byte bAlpha, int dwFlags);

		public void SetOpacityByHandle(int hWnd, int val)
		{
			const int GWL_EXSTYLE = -20;
			const int WS_EX_TRANSPARENT = 0x20;
			const int WS_EX_LAYERED = 0x80000;
			const int LWA_ALPHA = 0x2;

			SetWindowLong((IntPtr)hWnd, GWL_EXSTYLE, GetWindowLong((IntPtr)hWnd, GWL_EXSTYLE) | WS_EX_LAYERED);
			SetLayeredWindowAttributes((IntPtr)hWnd, 0, (byte)val, LWA_ALPHA);
		}
	}
	"
	csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
	compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"
	compilerParams.GenerateInMemory = on
	compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
	compilerResults.CompiledAssembly.CreateInstance "CusFn"
)
--在重影3中应用