function GetCusBtnClass = 
(
	dotnet.loadAssembly "System.Windows.Forms.dll"
	source = 
	"
	using System;
	using System.ComponentModel;
	using System.Windows.Forms;
	using System.Drawing;
	using System.Drawing.Drawing2D;
	
	public class RoundedButton : Button//Control//
	{
		private float exBorderSize = 0f;
		[DefaultValue(typeof(float), \"0\")]
		public float EXBorderSize
		{
			get { return exBorderSize; }
			set { exBorderSize = value; Invalidate(); }
		}

		private float exBorderRadius = 10f; //控制圆角大小
		[DefaultValue(typeof(float), \"10\")]
		public float EXBorderRadius
		{
			get { return exBorderRadius; }
			set { exBorderRadius = value; Invalidate(); }
		}

		private Color exBorderColor = Color.Transparent;
		[DefaultValue(typeof(Color), \"Transparent\")]
		public Color EXBorderColor
		{
			get { return exBorderColor; }
			set { exBorderColor = value; Invalidate(); }
		}

		private Color exButtonColor=Color.Lime;
		[DefaultValue(typeof(Color), \"Lime\")]
		public Color EXButtonColor
		{
			get { return exButtonColor; }
			set { exButtonColor = value; Invalidate(); }
		}

		private string exText=\"RoundButton\";
		[DefaultValue(typeof(string), \"RoundButton\")]
		public string EXText
		{
			get { return exText; }
			set { exText = value;Invalidate(); }
		}

		private Color exTextColor=Color.Black;
		[DefaultValue(typeof(Color), \"Black\")]
		public Color EXTextColor
		{
			get { return exTextColor; }
			set { exTextColor = value;Invalidate(); }
		}

		private Font exTextFont=new Font(\"微软雅黑\",12f, FontStyle.Regular);
		public Font EXTextFont
		{
			get { return exTextFont; }
			set { exTextFont = value; Invalidate(); }
		}

		public RoundedButton()
		{
			SetStyle(ControlStyles.SupportsTransparentBackColor, true);
			SetStyle(ControlStyles.OptimizedDoubleBuffer, true);
			SetStyle(ControlStyles.AllPaintingInWmPaint, true);
			SetStyle(ControlStyles.ResizeRedraw, true);
			SetStyle(ControlStyles.DoubleBuffer, true);
			SetStyle(ControlStyles.UserPaint, true);

			BackColor = Color.Transparent;
			Cursor = Cursors.Hand;
			DoubleBuffered = true;
			Size = new Size(210, 70);
		}

		private RectangleF GetRectangleF(RectangleF rectangleF, float borderSize)
		{
			float x = rectangleF.X + borderSize;
			float y = rectangleF.Y + borderSize;
			float w = rectangleF.Width - borderSize;
			float h = rectangleF.Height - borderSize;

			return new RectangleF(x, y, w, h);
		}

		private GraphicsPath GetGraphicsPath(RectangleF rectangleF, float borderRadius)
		{
			GraphicsPath path = new GraphicsPath();
			borderRadius = (borderRadius + 1f) * 2f;

			RectangleF topLeft = new RectangleF(rectangleF.X, rectangleF.Y, borderRadius, borderRadius);
			RectangleF topRight = new RectangleF(rectangleF.Width - borderRadius - 1f, rectangleF.Y, borderRadius, borderRadius);
			RectangleF bottomRight = new RectangleF(rectangleF.Width - borderRadius - 1f, rectangleF.Height - borderRadius - 1f, borderRadius, borderRadius);
			RectangleF bottomLeft = new RectangleF(rectangleF.X, rectangleF.Height - borderRadius - 1f, borderRadius, borderRadius);

			path.AddArc(topLeft, 180f, 90f);
			path.AddArc(topRight, 270f, 90f);
			path.AddArc(bottomRight, 0, 90f);
			path.AddArc(bottomLeft, 90f, 90f);

			path.CloseFigure();

			return path;
		}

		protected override void OnPaint(PaintEventArgs e)
		{
			base.OnPaint(e);
			e.Graphics.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

			//Region
			RectangleF rectangleF_Region = GetRectangleF(ClientRectangle, 0f);
			GraphicsPath path_Region = GetGraphicsPath(rectangleF_Region, exBorderRadius);
			Region = new Region(path_Region);

			//Border
			RectangleF rectangleF_Border = GetRectangleF(rectangleF_Region, 0f);//比Region小一圈
			GraphicsPath path_Border = GetGraphicsPath(rectangleF_Border, exBorderRadius);
			SolidBrush solidBrush_Border = new SolidBrush(exBorderColor);
			e.Graphics.FillPath(solidBrush_Border, path_Border);

			//Main
			RectangleF rectangleF_Main = GetRectangleF(rectangleF_Border, exBorderSize);
			GraphicsPath path_Main = GetGraphicsPath(rectangleF_Main, exBorderRadius);
			SolidBrush solidBrush_Main = new SolidBrush(exButtonColor);
			e.Graphics.FillPath(solidBrush_Main, path_Main);

			//Text
			SolidBrush solidBrush_Text = new SolidBrush(exTextColor);
			StringFormat exTextFormat = new StringFormat();
			exTextFormat.Alignment = StringAlignment.Center;
			exTextFormat.LineAlignment = StringAlignment.Center;
			e.Graphics.DrawString(exText, exTextFont, solidBrush_Text, rectangleF_Main, exTextFormat);
		}

		//protected override void OnMouseDown(MouseEventArgs e)
		//{
		//	base.OnMouseDown(e);
		//	if (e.Button== MouseButtons.Left)
		//	{
		//		EXBorderSize += 2f;
		//	}
		//}

		//protected override void OnMouseUp(MouseEventArgs e)
		//{
		//	base.OnMouseUp(e);
		//	if (e.Button == MouseButtons.Left)
		//	{
		//		EXBorderSize -= 2f;
		//	}
		//}
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


-- for i = 0 to cusbtn.Errors.count-1 do print(cusbtn.Errors.item[i].line as string + "行," + cusbtn.Errors.item[i].Column as string +  "列:\t" + cusbtn.Errors.item[i].ErrorText)
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
		cusbtn1.Width = 58;cusbtn1.height = 24
		cusbtn1.exBorderRadius = 5
		cusbtn1.Flatstyle = Flat;
		cusbtn1.Flatappearance.borderSize = BorderSize
		cusbtn1.Flatappearance.Bordersize = 0
	)
 
)
createdialog testRollout
