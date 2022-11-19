
(
global form
try(form.close()) catch()
local sfIdx, clock
fn defColor r g b = ((dotNetClass "System.Drawing.Color").FromArgb r g b)		
fn defPoint x y = (dotNetObject "System.Drawing.Point" x y)	
fn defSize x y = (dotNetObject "System.Drawing.Size" x y)
fn defRect x y w h = (dotNetObject "System.Drawing.Rectangle" x y w h)
fn defForm dnForm w h x y =
(
	dnForm.ShowInTaskbar = false ; dnForm.Text = "Get pixel color" ; dnForm.ClientSize = defSize w h
	dnForm.StartPosition = dnForm.StartPosition.Manual ; dnForm.DesktopLocation = defPoint x y
	dnForm.FormBorderStyle = dnForm.FormBorderStyle.FixedSingle
	dnForm.MaximizeBox = dnForm.MinimizeBox = off
)
fn defDevXSpn dnSpn w h x y cutArrows:off =
(
	dnSpn.ClientSize = dotNetObject "System.Drawing.Size" w h
	dnSpn.Location = dotNetObject "System.Drawing.Point" x y
	dnSpn.backcolor = defColor 28 28 28 ; dnSpn.forecolor = defColor 180 180 180
	if cutArrows do dnSpn.Region = dotNetObject "System.Drawing.Region" (defRect 0 0 (w-20) h)
	dnSpn.BorderStyle = dnSpn.BorderStyle.NoBorder --Flat,HotFlat,NoBorder,Office2003,Simple,Style3D,UltraFlat
)
fn defSpinner dnSpn w h locX locY inc: dp: minV: maxV: val: cutArrows:off =
(
	dnSpn.ForeColor = defColor 180 180 180 ; dnSpn.BackColor = defColor 28 28 28
	dnSpn.Bounds = defRect locX locY w h
	if cutArrows do (dnSpn.Region = dotNetObject "System.Drawing.Region" (defRect 0 0 (w-20) h) ; dnSpn.AutoSize = true)
	dnSpn.DecimalPlaces = dp ; dnSpn.Minimum = minV ; dnSpn.Maximum = maxV ; dnSpn.Value = val
	dnSpn.BorderStyle = dnSpn.BorderStyle.none  ; dnSpn.Increment = inc
)
form = dotnetobject "MaxCustomControls.Maxform" ; defForm form 200 60 10 110
devXSpinner1 = dotNetObject "DevExpress.XtraEditors.SpinEdit" ; defDevXSpn devXSpinner1 100 16 5 5 cutArrows:on
devXSpinner2 = dotNetObject "DevExpress.XtraEditors.SpinEdit" ; defDevXSpn devXSpinner2 80 20 100 5
netSpinner1 = dotNetObject "NumericUpDown" ; defSpinner netSpinner1 100 14 5 30 inc:1 dp:3 minV:0 maxV:100 val:50 cutArrows:on
netSpinner2 = dotNetObject "NumericUpDown" ; defSpinner netSpinner2 80 20 100 30 inc:1 dp:2 minV:-50 maxV:10 val:-10
-----------------------------------------------------------------------------------------------------
form.Controls.AddRange #(devXSpinner1, devXSpinner2, netSpinner1, netSpinner2)
form.showmodeless() ; ok
)