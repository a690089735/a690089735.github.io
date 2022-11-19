form = dotnetobject "MaxCustomControls.Maxform"

lbx = dotnetobject "listbox"

lbx.SelectionMode = (dotNetClass "System.Windows.Forms.SelectionMode").MultiExtended
lbx.location=dotNetObject "System.Drawing.Point" 20 20
lbx.size = dotNetObject "System.Drawing.Size" 180 150

form.controls.add lbx

-- for i in 1 to 15 do lbx.items.add (i as string) --添加项目

-- showevents lbx


-- lbx_lib
fn lbxLoad s e =
(
	for o in objects do lbx.items.add o.name
)
dotNet.addEventHandler form "load" lbxLoad --初次加载,只能添加给form

fn SelectedChanged s e =
(
	--e 是空的
	for i = 0 to s.SelectedItems.count-1 do print s.SelectedItems.item[i]
	select(for i = 0 to s.items.count-1 where s.GetSelected(i) collect maxops.getnodebyhandle(i+2))
)
dotNet.addEventHandler lbx "SelectedValueChanged" SelectedChanged
-- dotNet.addEventHandler lbx "SelectedIndexChanged" (fn 'tmp' s e = print s.SelectedItems)--用上边的应该比较好

-- showproperties lbx

-- lbx.SelectedValue

-- OnSelectedValueChanged(EventArgs) --引发事件不好使

-- lbx.FindString "2" --查找第一个匹配的项,找不到会返回 -1

-- lbx.ClearSelected() --清理选择
-- for i = 1 to 4 do lbx.SetSelected i true --设置选择可以引发SelectedValueChanged事件
form.showmodeless()
