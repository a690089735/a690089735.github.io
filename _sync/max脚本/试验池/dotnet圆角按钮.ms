function GetCusBtnClass = 
(
	dotnet.loadAssembly "System.Windows.Forms.dll"
	source = 
	"
	using System;
	using System.Windows.Forms;
	using System.Drawing;
	using System.Drawing.Drawing2D;
	
	
	class RoundedButton : Button
	{
		GraphicsPath GetRoundPath(RectangleF Rect, int radius)
		{
			float r2 = radius / 2f;
			GraphicsPath GraphPath = new GraphicsPath();
	
			GraphPath.AddArc(Rect.X, Rect.Y, radius, radius, 180, 90);
			GraphPath.AddLine(Rect.X + r2, Rect.Y, Rect.Width - r2, Rect.Y);
	
			GraphPath.AddArc(Rect.X + Rect.Width - radius, Rect.Y, radius, radius, 270, 90);
			GraphPath.AddLine(Rect.Width, Rect.Y + r2, Rect.Width, Rect.Height - r2);
	
			GraphPath.AddArc(Rect.X + Rect.Width - radius, Rect.Y + Rect.Height - radius, radius, radius, 0, 90);
			GraphPath.AddLine(Rect.Width - r2, Rect.Height, Rect.X + r2, Rect.Height);
			
			GraphPath.AddArc(Rect.X, Rect.Y + Rect.Height - radius, radius, radius, 90, 90);
			GraphPath.AddLine(Rect.X, Rect.Height - r2, Rect.X, Rect.Y + r2);
			
			GraphPath.CloseFigure();
			return GraphPath;
		}

		protected override void OnPaint(PaintEventArgs e)
		{
			base.OnPaint(e);
			RectangleF Rect = new RectangleF(0, 0, this.Width, this.Height);
			using (GraphicsPath GraphPath = GetRoundPath(Rect, 20))
			{
				this.Region = new Region(GraphPath);
				using (Pen pen = new Pen(Color.CadetBlue, 0f))
				{
					pen.Alignment = PenAlignment.Inset;
					e.Graphics.DrawPath(pen, GraphPath);
				}
			}
		}
	}
	"
	
	csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
	compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"
	compilerParams.ReferencedAssemblies.Add "System.Dll"
	compilerParams.ReferencedAssemblies.Add "System.Windows.Forms.dll" 
	compilerParams.ReferencedAssemblies.Add "System.Drawing.dll"
	compilerParams.GenerateInMemory = on
	compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
	compilerResults.CompiledAssembly.CreateInstance "RoundedButton"
)
cusbtn = GetCusBtnClass()

rollout testRollout "自定义控件测试" width:160 height:288
(
	dotNetControl pnl1 "panel" pos:[13,7] width:134 height:81 
	
	local 
		cusbtn1,
		BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
		BorderSize = 0,
		Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat
	
	on testRollout open do
	(
		cusbtn1 = GetCusBtnClass()
		pnl1.controls.add cusbtn1
		cusbtn1.location.x = 10;cusbtn1.location.y = 10
		cusbtn1.Flatstyle = Flat;
		cusbtn1.Flatappearance.borderSize = BorderSize
	)
 
)
createdialog testRollout
