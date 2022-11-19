--需求:储存保留变量到场景,为项目层前缀
--打开时:读取变量,检查层
--按钮事件:管理层,按照命名规范的物体自动排列到层
--命名规则:
--$'*_UI_*'=滑块控制器 _UI_*_S 滑块 _UI_*_R 范围 _UI_*_V1 变量 _UI_*_T 提示图标 层:前缀+Ctrl+Sld
--$'*_Source'=源物体 层:前缀+Source+Obj
--$'*_Source'=源物体 层:前缀+Source+Obj


--上面复杂专一,下面简单易用,可扩展和复用
--或者:左边编辑框输入物体名来过滤,右边编辑框输入层名来添加


-- ca = attributes ResetUI--声明自定义属性
-- (
-- 	rollout ResetUIPanel "功能" width:160 height:64
-- 	(
-- 		button btn_ReSet "重置" pos:[32,16] width:96 height:32 toolTip:"变换到零"
-- 		label lbl1 "" pos:[32,50] width:98 height:13
-- 		
-- 		on btn_ReSet pressed do
-- 	(
-- 			for i in selection as array do 
-- 			if matchPattern i.name pattern:"*_Spring_*Spr*" then
-- 			(i.pos.controller.Position.controller[2].controller.value = [0,0,0])
-- 			else(
-- 			i.pos.controller[i.pos.controller.active].value = [0,0,0]
-- 			i.rotation.controller[i.rotation.controller.active].value = (quat 0 0 0 1)
-- 			)
-- 		)
-- 	)
-- )
-- <Interface>LayerManager.newLayer() 
-- 创建新图层并返回图层属性混合接口
-- <Interface>LayerManager.getLayerFromName <string>name
-- 将图层属性混合接口返回到具有给定名称的图层
-- <Interface>LayerManager.newLayerFromName <string>name 
-- 创建具有给定名称的新图层,并返回图层属性混合接口

-- <LayerProperties>.on : boolean : Read|Write 	 
-- 获取/设置图层的启用状态
-- <LayerProperties>.lock : boolean : Read|Write   
-- 获取/设置图层的锁定状态
-- <LayerProperties>.current : boolean : Read|Write 
-- 获取/设置图层是否为"当前"图层
-- <LayerProperties>.name : string : Read 
-- 获取图层的名称。要设置图层的名称,请使用 <LayerProperties> 。 setName() 方法在本页中进一步描述。这是必要的,因为MAXScript必须验证新的名称 - 图层名称必须是唯一的!
-- <boolean>setname <string>name 
-- 将图层的名称设置为给定的字符串。成功时 true 注意：图层名称必须是唯一的,这就是为什么使用方法来设置图层名称的原因

-- <boolean>nodes <&node array>layerNodes :layer.nodes &theNodes   theNodes
-- layerNodes is Out parameter 
-- 在成功时返回 True,并在"按引用 Out"参数中返回图层上所有节点的数组。

-- <void>addnode <node>node
-- 将给定的节点添加到图层。有关示例,请参阅页面底部。
-- <void>select <boolean>OnOff 
-- 如果布尔值传递为 true,则选择场景中图层上的所有对象。如果参数以 false 传递,则取消选择图层上的所有对象。


try(destroydialog LayerTool)catch()
rollout LayerTool "层管理工具" width:128 height:160
(
	button 'btn_add' "移动到对应层" pos:[16,80] width:96 height:32 align:#left

)

createdialog LayerTool pos:[60,350]

--