fn rename_dialog file dialog =
(
	local
	fl = filterString (filenameFromPath file) ".",
	oldname = fl[2],
	CMS = dotNetObject "ContextMenuStrip",
	pnl = dotnetobject "Panel",
	edt = dotnetobject "TextBox",
	btn = dotnetobject "Button",
	customItem = DotnetObject "System.Windows.Forms.ToolStripControlHost" pnl
	
	CMS.AutoSize = false
	CMS.Size = dotNetObject "System.Drawing.Size" 154 26
	CMS.ShowImageMargin = false
	CMS.Margin = (dotnetclass "System.Windows.Forms.Padding").Empty
	CMS.Padding = (dotnetclass "System.Windows.Forms.Padding").Empty
	
	pnl.Location = dotNetObject "System.Drawing.Point" 0 0
	pnl.Size = dotNetObject "System.Drawing.Size" 140 20
	pnl.controls.addrange #(edt,btn)
	
	edt.Location = dotNetObject "System.Drawing.Point" 0 2
	edt.AutoSize = false
	edt.Multiline = false
	edt.Size = dotNetObject "System.Drawing.Size" 100 16
	edt.text = oldname
	edt.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None
	edt.BackColor = PanelColor
	edt.ForeColor = ForeColor
-- 	edt.TextAlign = (dotNetClass "System.Windows.Forms.HorizontalAlignment").Left
-- 	edt.Top = 20
	edt.Margin = (dotnetclass "System.Windows.Forms.Padding").Empty
	edt.Padding = (dotnetclass "System.Windows.Forms.Padding").Empty
	fn dis_key = enableAccelerators = false
	dotNet.addEventHandler edt "GotFocus" dis_key
	dotNet.setLifetimeControl edt #dotnet
	
	btn.Size = dotNetObject "System.Drawing.Size" 40 20
	btn.Location = dotNetObject "System.Drawing.Point" 100 0
	btn.text = "确定"
	btn.Flatstyle = Flat
	btn.Flatappearance.borderSize = BorderSize
	btn.tag = #(edt,dialog.names_data_list[dialog.trans_ddl_names.selection])
	fn btn_click s e = print #(s.tag[1],s.tag[2])
	dotNet.addEventHandler btn "Click" btn_click
	dotNet.setLifetimeControl btn #dotnet
	
	customItem.autoSize = false
	customItem.Size = dotNetObject "System.Drawing.Size" 140 20
	customItem.Margin = (dotnetclass "System.Windows.Forms.Padding").Empty
	customItem.Padding = (dotnetclass "System.Windows.Forms.Padding").Empty
	
	CMS.BackColor = BackColor
	CMS.ForeColor = ForeColor

	CMS.items.add customItem

-- 	fn test s e =
-- 	(
-- 		print s.items.item[0].Control.Controls.item[0].height --在函数中获取组件
-- 	)
-- 	dotNet.addEventHandler CMS "Opened" test
	
-- 	fn enb_key = enableAccelerators = true
-- 	dotNet.addEventHandler CMS "Closing" enb_key
	dotNet.setLifetimeControl CMS #dotnet
	local sender =  dialog.edt_menu_displayer
	CMS.Show sender (-sender.width) (-sender.height)
	edt.Focus()
)

rcmenu menu_names_list
(
-- 	fn has_item = XAniTools_UI.trans_ddl_names.items.count > 0 -- define filter function
-- 	menuItem mi_r "Renderable" filter:has_item
	menuItem mi_rename "重命名集合"
	separator sep1
	menuItem mi_reload "重加载集合"
	menuItem mi_clear "清除所有集合"
	
	on mi_rename picked do
	(
		--在列表位置弹出一个工具窗口,菜单状态
		print "重命名"
		rename_dialog XAniTools_UI.names_data_list[XAniTools_UI.trans_ddl_names.selection] XAniTools_UI
	)
	on mi_reload picked do
	(
		print "reload"
		names_data_get XAniTools_UI
		names_data_display XAniTools_UI
		XAniTools_UI.trans_ddl_names.selection = XAniTools_UI.names_data_list.count
	)
	on mi_clear picked do
	(
		print "dele"
-- 		print  XAniTools_UI.names_data_list.count
		for i = XAniTools_UI.names_data_list.count to 1 by - 1 do names_data_delete XAniTools_UI i
		names_data_display XAniTools_UI
	)
	on menu_names_list open do
	(
		mi_clear.enabled = mi_rename.enabled = XAniTools_UI.trans_ddl_names.selection > 0
		XAniTools_UI.edt_menu_displayer = XAniTools_UI.trans_btn_names_other
	)
	
)