--构建dotnet菜单条(很高级,可以引入自定义钩子控件)
fn BuildMenuStrip Items:#() Images:#() Clicks:#() ToolTipText:#() subItem:#() subImages:#() subClicks:#() left:-8 BackColor:BackColor ForeColor:ForeColor ShowCheckMargin:false ShowImageMargin:false ShowItemToolTips:true = --!为标题,-为分隔符,其他均直接创建,subitem的首部应为数字,数字是父项目的索引.注意,
(
	local CMS = dotNetObject "ContextMenuStrip",sepcount = 0
	for i = 1 to Items.count do --菜单项
	(
		if classOf Items[i] == dotNetObject then CMS.items.add Items[i] --钩子控件
		else
		(
			local iname = Items[i],item
			case of
			(
				(iname == "-") : ( --分隔符
					index = CMS.items.add(dotNetObject "ToolStripSeparator")
					item = CMS.items.item[index]
					item.name = ("sep" + (sepcount += 1) as string)
					item.Margin = (dotnetObject "Padding" 0 0 0 0)
				)
				(iname[1] == "!") : ( --粗标题
					iname = (substituteString iname "!" "")
					index = CMS.items.add (dotNetObject "ToolStripLabel" iname)
					item = CMS.items.item[index]
					item.name = iname
					item.font = dotNetObject "System.Drawing.Font" CMS.items.item[index].font (dotNetClass "System.Drawing.FontStyle").bold
					item.Margin = (dotnetObject "Padding" left 3 0 -1) --默认(dotnetObject "Padding" 0 1 0 2) 左 上 右 下
				)
				default : (
					index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
					item = CMS.items.item[index]
					item.name = iname
					if try(ToolTipText[i].count>0)catch(false) do item.ToolTipText = ToolTipText[i]
				)
			)
			
			img = try(Images[i])catch(0) --添加图像
			if img as string == "dotNetObject:System.Drawing.Bitmap" do item.image = img
			
			func = try(Clicks[i])catch(0) --添加点击事件
			if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
			
			dotNet.setLifetimeControl item #dotnet
		)
	)
	for i = 1 to subItem.count do --子菜单项,首位是菜单项的编号
	(
		local iname = subItem[i],index = ""
		for j = 1 to iname.count do if (findString "1234567890" iname[1] != undefined) then (index += iname[1];iname[1] = "") else exit
		index = index as integer - 1
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
	
	--这事先在主函数指定好了
-- 	print BackColor
	CMS.BackColor = BackColor
	CMS.ForeColor = ForeColor
		
	CMS.ShowCheckMargin = ShowCheckMargin
	CMS.ShowImageMargin = ShowImageMargin

	dotNet.setLifetimeControl CMS #dotnet
	return CMS
)
-- (BuildMenuStrip Items:#("1","2","!3") ToolTipText:#("1","2","3")).show()
-- if classof MouseMove == MAXScriptFunction do dotNet.addEventHandler CMS "MouseMove" MouseMove
-- if Closing != unsupplied do dotNet.addEventHandler CMS "Closing" Closing
-- if onOpening != unsupplied do dotNet.addEventHandler CMS "Opening" onOpening
-- if onOpened != unsupplied do dotNet.addEventHandler CMS "Opened" onOpened


--帧菜单,放在时间块的 K 按钮上
items_keys = #(
	"设置Euler旋转控制",
	"设置TCB旋转控制",
	"-",
	"设置变换帧",
	"清除变换帧", --默认清理全部,按住shift则只清理范围外的,按住alt则只清理范围内的,按住ctrl保留首尾.
	"-",
	"设置位置帧",
	"设置旋转帧",
	"设置缩放帧",
	"-",
	"清除位置帧",
	"清除旋转帧",
	"清除缩放帧",
	"-",
	"塌陷为PRS控制器",
	"塌陷到默认控制器",
	"-",
	"塌陷到顶点动画",
	"生成动画代理" --创建一组和原物体结构尽量相同的辅助物体,符合的框架大小,并且带有原版逐帧动画.
)
clicks_keys = #(
	fn to_euler = (),
	fn to_euler = (),
	0,
	fn create_trans_key = (),
	fn clear_transform = (),
	0,
	fn create_pos_key = (),
	fn create_rot_key = (),
	fn create_scl_key = (),
	0,
	fn clear_pos_key = (),
	fn clear_rot_key = (),
	fn clear_scl_key = (),
	0,
	fn collapse_ctrl = (),
	fn collapse_ctrl_ani = (),
	0,
	fn collapse_mesh_ani = (),
	fn build_helper_ani = ()
)
ToolTips_keys = #(
	"将旋转控制器设置为 Euler旋转控制.",
	"将旋转控制器设置为 TCB旋转控制.",
	"-",
	"在当前时间 创建变换帧.",
	"默认清理全部,按住shift则只清理范围外的,按住alt则只清理范围内的,按住ctrl清理首尾.",
	"-",
	"在当前时间 创建位置帧.",
	"在当前时间 创建旋转帧.",
	"在当前时间 创建缩放帧.",
	"-",
	"默认清除全部,按住shift只清理范围外的,按住alt只清理范围内的,按住ctrl清理首尾.",
	"默认清除全部,按住shift只清理范围外的,按住alt只清理范围内的,按住ctrl清理首尾.",
	"默认清除全部,按住shift只清理范围外的,按住alt只清理范围内的,按住ctrl清理首尾.",
	"-",
	"塌陷动画控制为PRS控制器,不塌陷原动画.",
	"塌陷动画控制为PRS控制器,并塌陷原动画.",
	"-",
	"塌陷动画为顶点动画.",
	"按照已有动画生成动画代理物体." --创建一组和原物体结构尽量相同的辅助物体,符合的框架大小,并且带有原版逐帧动画.
)
btn_set_key.ContextMenuStrip = BuildMenuStrip Items:items_keys Clicks:clicks_keys ToolTipText:ToolTips_keys BackColor:BackColor ForeColor:ForeColor


--名称数据菜单,绑定在名称数据合集O按钮
items_names = #(
	"重命名集合",
	"清除所有集合"
)
clicks_names = #(
	fn rename_data_names = (),
	fn clear_data_names = ()
)
ToolTips_names = #(
	"重命名选中的数据集合.",
	"清除所有数据集合."
)
trans_btn_names_other.ContextMenuStrip = BuildMenuStrip Items:items_names Clicks:clicks_names ToolTipText:ToolTips_names BackColor:BackColor ForeColor:ForeColor


--变换数据菜单,绑定在名称数据合集O按钮
items_trans = #(
	"重命名集合",
	"清除所有集合"
)
clicks_trans = #(
	fn rename_data_trans = (),
	fn clear_data_trans = ()
)
ToolTips_trans = #(
	"重命名选中的数据集合.",
	"清除所有数据集合."
)
trans_btn_other.ContextMenuStrip = BuildMenuStrip Items:items_trans Clicks:clicks_trans ToolTipText:ToolTips_trans BackColor:BackColor ForeColor:ForeColor

--时间数据菜单,绑定在名称数据合集O按钮
items_times = #(
	"重命名集合",
	"清除所有集合"
)
clicks_times = #(
	fn rename_data_times = (),
	fn clear_data_times = ()
)
ToolTips_times = #(
	"重命名选中的数据集合.",
	"清除所有数据集合."
)
times_btn_other.ContextMenuStrip = BuildMenuStrip Items:items_times Clicks:clicks_times ToolTipText:ToolTips_times BackColor:BackColor ForeColor:ForeColor

-- 	test
-- 	for m in #(Menu_keys,Menu_names,Menu_trans,Menu_times) do m.show()


-- create_menus()
