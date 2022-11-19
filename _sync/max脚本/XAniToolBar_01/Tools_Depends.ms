--对话框的方式重命名数据(只要求传入的文件和pos_obj(出现的位置只支持dotnet对象,所以这里取的是按钮),其他的部分自动处理)
fn rename_dialog file pos_obj =
(
	local
	fl = filterString (filenameFromPath file) ".",
	code = fl[fl.count],
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
	btn.tag = #(edt,names_data_list,trans_ddl_names.selection,CMS,code)
	fn btn_click s e =
	(
		local new_name = s.tag[1].text
		if new_name.count > 0 do --如果为空就什么也不做,默认名 new_name = s.tag[5](code)
		(
			local
			id = s.tag[3],
			oldfile = s.tag[2][id],
			fpath = getFilenamePath oldfile,
			fname = filenameFromPath oldfile,
			fsuffix = getFilenameType fname,
			fl = filterString fname ".",
			new_fname = if new_name == s.tag[5] then fpath + fl[1] + fsuffix else fpath + fl[1]+ "." + new_name + fsuffix --改成默认名的话就不要多的那个点点了
				
			renameFile oldfile new_fname
			names_data_list[id] = new_fname
			s.tag[2][id] = new_fname
			temp_ = trans_ddl_names.items --列表项目只有在重新指定时刷新,单改一项不刷新,需要这样倒腾一下.
			temp_[id] = fl[1]+ "." + new_name
			trans_ddl_names.items = temp_
		)
		s.tag[4].Close()
	)
	dotNet.addEventHandler btn "Click" btn_click
	dotNet.setLifetimeControl btn #dotnet
	
	customItem.autoSize = false
	customItem.Size = dotNetObject "System.Drawing.Size" 140 20
	customItem.Margin = (dotnetclass "System.Windows.Forms.Padding").Empty
	customItem.Padding = (dotnetclass "System.Windows.Forms.Padding").Empty
	
	CMS.BackColor = BackColor
	CMS.ForeColor = ForeColor

	CMS.items.add customItem

	dotNet.setLifetimeControl CMS #dotnet
	CMS.Show pos_obj (-pos_obj.width) (-pos_obj.height)
	edt.Focus()
)