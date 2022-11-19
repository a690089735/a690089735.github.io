state = true

form = dotnetobject "MaxCustomControls.Maxform"
cm = dotNetObject "ContextMenuStrip"
form.ContextMenuStrip = cm
form.Text = "Dynamic ContextMenu"
items = #("!Function", "-", "Checked Item", "Create Object", "Delete Object", "-", "Select", "^ToolStripPanel")
for i in items do
(
	local sepcount = 0
	case of
	(
		(i == "-") : (
			index = cm.items.add (dotNetObject "ToolStripSeparator")
			item = cm.items.item[index]
			item.name = ("sep" + (sepcount += 1) as string)
		)
		(i[1] == "!") : (
			n = (substituteString i "!" "")
			index = cm.items.add (dotNetObject "ToolStripLabel" n)
			item = cm.items.item[index]
			item.name = n
			item.font = dotNetObject "System.Drawing.Font" cm.items.item[index].font (dotNetClass "System.Drawing.FontStyle").bold
		)
		default : (
			index = cm.items.add(dotNetObject "ToolStripMenuItem" i)
			item = cm.items.item[index]
			item.name = i
		)
	)
)
dotnet.addEventHandler cm.items.item["Checked Item"] "Click" (fn 'tmp' = state = not state)
fn addObject s e = with undo "Create *Object*" on (box pos:(random [-100,-100,-100] [100,100,100]))
fn delObject s e = with undo "Delete *Object*" on (if objects.count > 0 do delete objects[objects.count])
dotnet.addEventHandler cm.items.item["Create Object"] "Click" addObject
dotnet.addEventHandler cm.items.item[4] "Click" delObject
--添加自定义控件
pn = dotnetobject "panel"
pn.Size = dotNetObject "System.Drawing.Size" 126 16
lb = dotnetobject "label"
lb.Size = dotNetObject "System.Drawing.Size" 26 16
lb.TextAlign = (dotnetclass "System.Drawing.ContentAlignment").MiddleRight
tb = dotnetobject "trackbar"
-- tb.text = "设置数值"
tb.TickStyle = tb.TickStyle.None
tb.autosize = false --关闭自动尺寸
tb.Minimum = 0
tb.Maximum = 100
tb.Size = dotNetObject "System.Drawing.Size" 100 16
dotnet.addEventHandler tb "Scroll" (fn 'tmp' s e = lb.text = s.value as string)
-- p = DotnetObject "System.Windows.Forms.Panel"
-- p.Controls.add tb
-- p.Size = dotNetObject "System.Drawing.Size" 100 16
pn.controls.add lb
pn.controls.add tb
tb.Location = dotNetObject "System.Drawing.Point" 26 0
customItem = DotnetObject "System.Windows.Forms.ToolStripControlHost" pn --p
customItem.Size = dotNetObject "System.Drawing.Size" 100 16
cm.items.add customItem
cm.items.add (dotNetObject "ToolStripMenuItem" "menu end item")

fn onOpening s e = 
(
	cm.items.item["Checked Item"].checked = state

	i = (s.items.Find "Delete Object" false)[1]
	i.enabled = (objects.count > 0)

	i = cm.items.item["Select"]--可以直接
	i.DropDownItems.clear()

	fn selObject s e = with undo "Select *Object*" on
	(
		select (maxops.getnodebyhandle (s.name as integer))
	) 

	if objects.count > 0 then 
	(
		for n in objects do
		(
			index = i.DropDownItems.add (dotNetObject "ToolStripMenuItem" n.name)
			item = i.DropDownItems.item[index]
			item.name = n.inode.handle as string
			dotnet.addEventHandler item "Click" selObject
		)
	)
	else 
	(
		index = i.DropDownItems.add (dotNetObject "ToolStripMenuItem" "No Objects")
		item = i.DropDownItems.item[index]
		item.enabled = off
	)
)
dotnet.addEventHandler cm "Opening" onOpening
form.showmodeless()


/* 函数式生成菜单 */
fn BuildMenuStrip Items:#() Images:#() Clicks:#() subItem:#() subImages:#() subClicks:#() ForeColor:(colorMan.getColor #windowText) BackColor:(colorMan.getColor #background) onOpening: = --!为标题,-为分隔符,其他均直接创建,subitem的首部应为数字,数字是父项目的索引.注意,
(
	local BackColor = (DotNetClass "System.Drawing.Color").fromARGB (BackColor[1]*255) (BackColor[2]*255) (BackColor[3]*255),
	ForeColor = (DotNetClass "System.Drawing.Color").fromARGB (ForeColor[1]*255) (ForeColor[2]*255) (ForeColor[3]*255)
	local CMS = dotNetObject "ContextMenuStrip",sepcount = 0
	for i = 1 to Items.count do --菜单项
	(
		local iname = Items[i],item
		case of
		(
			(iname == "-") : (
				index = CMS.items.add(dotNetObject "ToolStripSeparator")
				item = CMS.items.item[index]
				item.name = ("sep" + (sepcount += 1) as string)
				item.Margin = (dotnetObject "Padding" 15 0 15 0) --由此可见,左和右没有用.
			)
			(iname[1] == "!") : (
				iname = (substituteString iname "!" "")
				index = CMS.items.add (dotNetObject "ToolStripLabel" iname)
				item = CMS.items.item[index]
				item.name = iname
-- 				item.font = dotNetObject "System.Drawing.Font" CMS.items.item[index].font (dotNetClass "System.Drawing.FontStyle").bold
				item.font = dotnetobject "System.Drawing.Font" item.font.FontFamily (item.font.size+1) ((dotNetClass "System.Drawing.FontStyle").bold)
				item.Margin = (dotnetObject "Padding" -32 3 0 -1) --默认(dotnetObject "Padding" 0 1 0 2) 左 上 右 下
			)
			default : (
				index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
				item = CMS.items.item[index]
				item.name = iname
			)
		)
		
		img = try(Images[i])catch(0)
		if img as string == "dotNetObject:System.Drawing.Bitmap" do item.image = img
		
		func = try(Clicks[i])catch(0)
		if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
		
		dotNet.setLifetimeControl item #dotnet
	)
	for i = 1 to subItem.count do --下拉菜单项
	(
		local iname = subItem[i],index = ""
		for j = 1 to iname.count do if (findString "1234567890" iname[1] != undefined) then (index += iname[1];iname[1] = "") else exit
		index = index as integer
		prtItem = CMS.items.item[index] 
		if prtItem as string == "dotNetObject:System.Windows.Forms.ToolStripMenuItem" do
		(
			index = prtItem.DropDownItems.add(dotNetObject "ToolStripMenuItem" iname)
			item = prtItem.DropDownItems.item[index]
			item.name = iname
			prtItem.DropDown.BackColor = BackColor
			item.ForeColor = ForeColor
			
			img = try(subImages[i])catch(0)
			if img as string == "dotNetObject:System.Drawing.Bitmap" do item.image = img
				
			func = try(subClicks[i])catch(0)
			if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
				
			dotNet.setLifetimeControl item #dotnet
		)
	)
	if BackColor != undefined do CMS.BackColor = BackColor
	if ForeColor != undefined do CMS.ForeColor = ForeColor
	if classof onOpening == MAXScriptFunction do dotNet.addEventHandler CMS "Opening" onOpening
	dotNet.setLifetimeControl CMS #dotnet
	return CMS
)
-- Img1 = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAIFJREFUOE+1jgEOgCAMA3k6b9WHIGUCBTuCMTZptrHrQvhLyfGWUoxRGjtD1pJhGDtDfMkgG4yhWg947lEBemoBDnGPCtBTC3CIe1SAnlrAMxhDtQw6j+I5XHaLAwZQ8O0RGZBv4oAPb/6iL3KgzkNPTJ2zB/VHBO9wmcfK718VwgVmWyM92yEwWgAAAABJRU5ErkJggg=="
fn onOpening s e = 
(
	local ForeColor = (colorMan.getColor #windowText),BackColor = (colorMan.getColor #background)
	ForeColor = (DotNetClass "System.Drawing.Color").fromARGB (ForeColor[1]*255) (ForeColor[2]*255) (ForeColor[3]*255)
	BackColor = (DotNetClass "System.Drawing.Color").fromARGB (BackColor[1]*255) (BackColor[2]*255) (BackColor[3]*255)
	
	s.items.item["Checked Item"].checked = true
	s.items.item["Delete Object"].checked = true

	i = (s.items.Find "Delete Object" false)[1]
	i.enabled = (objects.count > 0)

	i = s.items.item["Select"]--可以直接
	i.DropDownItems.clear()
	i.DropDown.BackColor = BackColor
	
	fn selObject s e = with undo "Select *Object*" on
	(
		select (maxops.getnodebyhandle (s.name as integer))
	) 

	if objects.count > 0 then 
	(
		for n in objects do
		(
			index = i.DropDownItems.add (dotNetObject "ToolStripMenuItem" n.name)
			item = i.DropDownItems.item[index]
			item.ForeColor = ForeColor
			item.name = n.inode.handle as string
			dotnet.addEventHandler item "Click" selObject
		)
	)
	else 
	(
		index = i.DropDownItems.add (dotNetObject "ToolStripMenuItem" "No Objects")
		item = i.DropDownItems.item[index]
		item.enabled = off
	)
)
-- arg1 = #("!Function", "-", "Checked Item", "Create Object", "Delete Object", "-", "!Test1", "Select", "^ToolStripPanel", "-", "!test2", "-", "测试1", "测试2", "!test2", "-", "测试1", "测试2", "!test2", "-", "测试1", "测试2") --Items
-- arg2 = #(0,Img1,Img1) --Images
-- arg3 = #(0,0,(fn 't' = print 1)) --Clicks
-- arg4 = #("6test1","6test2") --subItem
-- arg5 = #() --subImages
-- arg6 = #((fn 't' = print 1),(fn 't' = print 2)) --subClicks
-- arg7 = onOpening --onOpening

-- form2 = dotnetobject "MaxCustomControls.Maxform"
-- form2.ContextMenuStrip = BuildMenuStrip Items:arg1 Images:arg2 Clicks:arg3 subItem:arg4 subImages:arg5 subClicks:arg6 onOpening:arg7
-- form2.text = "函数生成菜单"
-- form2.showmodeless()
	
-- temp.ShowImageMargin --当指定了图片后,自动为true
-- temp.ShowCheckMargin = true --当指定了图片后,自动为false
-- temp.items.item[2].checked = true
-- showproperties temp.items.item[0]
-- temp.items.item[0].Anchor.value__ - 1
-- 	temp.items.item[0].Margin.left
-- 	temp.items.item[0].Margin.Top
-- 	temp.items.item[0].Margin.Right
-- 	temp.items.item[0].Margin.Bottom
-- temp.BackColor = BackColor

-- fn buildButton BPos:[0,0] WH:[96,30] BText:"" BName:"" BImage:undefined  BackColor:undefined PrtForm:undefined ClickFn:#() MouseDownFn:#() MouseEnterFn:#() ContextMenu:undefined ContextMenuStrip:undefined =
-- (
-- 	Btn = dotNetObject "Button"
-- 	Btn.text = BText
-- 	Btn.name = BName
-- 	Btn.width=WH[1]
-- 	Btn.height=WH[2]
-- 	Btn.Location = dotNetObject "System.Drawing.Point" BPos[1] BPos[2]
-- 	Btn.BackColor = BackColor
-- 	
-- 	if BImage as string == "dotNetObject:System.Drawing.Bitmap" do 
-- 	(
-- 		Btn.image = BImage
-- 		Btn.TextImageRelation = ImageBeforeText
-- 		Btn.TextAlign = MiddleRight
-- 	)
-- 	
-- 	Btn.flatstyle = Btn.flatstyle.flat
-- 	Btn.flatappearance.borderSize = 0
-- 	
-- 	if PrtForm != undefined do PrtForm.controls.add Btn
-- 	if classof ClickFn == MAXScriptFunction do dotNet.addEventHandler Btn "Click" ClickFn
-- 	if classof MouseDownFn == MAXScriptFunction do dotNet.addEventHandler Btn "MouseDown" MouseDownFn
-- 	if classof MouseEnterFn == MAXScriptFunction do dotNet.addEventHandler Btn "MouseEnter" MouseEnterFn
-- 	Btn.ContextMenu = ContextMenu
-- 	Btn.ContextMenuStrip = ContextMenuStrip
-- )
-- buildButton BText:"测试按钮" PrtForm:form2