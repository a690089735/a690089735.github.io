fn createCusFolderBrower = (
	local compilerParams = dotNetObject "System.CodeDom.Compiler.CompilerParameters" #(
		getDir #maxRoot + "Autodesk.Max.dll",
		getDir #maxRoot + "ManagedServices.dll")
	compilerParams.GenerateInMemory = on

	local compilerResults = (dotNetObject "Microsoft.CSharp.CSharpCodeProvider").CompileAssemblyFromSource compilerParams #(
"
using System;
using Autodesk.Max;
using SDK = ManagedServices.AppSDK;

public class Dialogs {
	private static readonly IGlobal Global = Autodesk.Max.GlobalInterface.Instance;

	public static string BrowseForFolder(string title) {
		string folder = string.Empty;
		Global.COREInterface9.DoMaxBrowseForFolder(SDK.GetMaxHWND(), title, ref folder);

		return folder;
	}
}
"
	)
	compilerResults.CompiledAssembly.CreateInstance "Dialogs"
)

Dialogs = createCusFolderBrower()
showMethods Dialogs

Dialogs.BrowseForFolder "123"