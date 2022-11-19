try(form.close()) catch()
form = dotnetobject "MaxCustomControls.Maxform"
form.Text = ".NET RichTextBox"
form.StartPosition = form.StartPosition.Manual
form.Location = dotnetobject "System.Drawing.Point" 600 300
form.Size = dotnetobject "System.Drawing.Size" 500 100

tb = dotnetobject "RichTextBox"
tb.Height = 50
tb.Dock = tb.Dock.Top

form.Controls.add tb 
form.showmodeless()

(	
	c = dotnetclass "System.Drawing.Color"
		
	fn printColored text tb colors:#(c.Red, c.Green) tokens:"	 " = 
	(
		tb.SuspendLayout()
		txt = filterstring text tokens splitEmptyTokens:on
		--tb.ForeColor = tb.ForeColor.Black
		tb.Text = text
		tb.SelectionStart = 0
		for k=0 to txt.count-1 do
		(
			s = txt[k+1].count
			tb.SelectionLength = s
			tb.selectionColor = colors[(mod k colors.count) + 1]
			tb.SelectionStart += s+1
		)
		tb.SelectionLength = 0
		tb.ResumeLayout()
	)

	printColored "Tris: 8945 | Length: 56,7 cm | Heigth: 192,4 cm | Width: 164,78 cm | UV verts: 6372" tb colors:#(c.Blue, c.Orange) tokens:":|"
)	