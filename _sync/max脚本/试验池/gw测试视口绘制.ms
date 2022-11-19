try(destroydialog gwTestRollout;unregisterRedrawViewsCallback redrawViewTest)catch()
-- unregisterRedrawViewsCallback redrawView
fn redrawViewTest =
(
--	不知道原因,用w绘制polygon可能绘制不出来,现在都用h绘制.
--	从提供的参数来看,使用polygon绘制可能会比line的性能差很多,可能要考虑改成在线上绘制矩形和在端点绘制圆
--	↑没办法,只能用polygon,其他的要么不能旋转,要么没法填充.GW支持渲染,Z轴是在渲染中有用的,,
	
-- 	只能用polyline方法,其他方法要么无法预测结果,要么自由度不够.
	
-- 	gw.setTransform (viewport.getTM())
	gw.setTransform (matrix3 1)
-- 	gw.setRndLimits (gw.getRndLimits() + #(#colorVerts))
	gw.setRndLimits #(#flat)
-- 	你好，
-- 很抱歉，使用 Nitrous 驱动程序 DirectX/OpengL 时，此 API 尚未完全完成，并且仍未完成。此问题已记录，我们将尽快解决。
-- 使用 Nitrous DirectX/OpenGL 时，此时此函数中的颜色将被忽略。
-- 旧版驱动程序之所以有效，是因为它们使用了另一部分代码。
-- 问候，
		gw.setColor #line (color 255 255 255)
	PolyVertices = #([190.5103,210.5673,30.64176],
	[250.5589,90.45902,40.24605],
	[240.8193,30.81571,10.91147],
	[200.1153,-10.82761,-30.64176],
	[100.1023,100.2807,-70.46471],
	[110.3504,190.7287,-10.91147])
	gw.Polyline PolyVertices false rgb:#(yellow, red, green, blue, white, black)
	
	for li in lines_buffer+#(points_buffer) do gw.wPolyline li false
	
-- 	gw.Polyline PolyVertices false rgb:#(yellow, red, green, blue, white, black)
	
	--画文本
	textpos = [10,10,10]
	gw.text textpos "text" color:red
	gw.hText textpos "htext" color:green --h按左下角0,0为原点绘制
	gw.wText textpos "wtext" color:blue --w按左上角0,0为远点绘制,但是有个问题是,文字仍然以左下角0,0绘制,所以会导致绘制的文字偏上.
	
	--画多边形
	--以下都不稳定,画出来不一定看得见就算了,建个point物体就会导致变色...
	--设置渲染模式试一试
-- 	gw.setRndLimits #(#flat,#polyEdges,#polyEdges,#allEdges,#colorVerts,#lighting )--拉鸡儿倒吧...根本没反应.只是设置成flat好像会提升性能.
-- 	PolyVertices = #([190.5103,210.5673,30.64176],
-- 	[250.5589,90.45902,40.24605],
-- 	[240.8193,30.81571,10.91147],
-- 	[200.1153,-10.82761,-30.64176],
-- 	[100.1023,100.2807,-70.46471],
-- 	[110.3504,190.7287,-10.91147])
	
-- 	gw.setColor #line red -- line drawing color 
-- 	gw.setColor #fill red-- polygon fill color 
-- 	gw.Polyline PolyVertices false rgb:#(yellow, red, green, blue, white, black)
-- 	gw.setColor #line green
-- 	gw.hPolyline PolyVertices false --rgb:
-- 	gw.setColor #line blue
-- 	gw.wPolyline PolyVertices false --rgb:
	
-- 	gw.Polygon PolyVertices (for i = 1 to PolyVertices.count collect red) (for i = 1 to PolyVertices.count collect [0.5,0.5,0.5])
-- 	gw.hPolygon PolyVertices (for i = 1 to PolyVertices.count collect green) (for i = 1 to PolyVertices.count collect [0.5,0.5,0.5])
-- 	gw.wPolygon PolyVertices (for i = 1 to PolyVertices.count collect blue) (for i = 1 to PolyVertices.count collect [0.5,0.5,0.5])
	
-- 	gw.setColor #line red -- line drawing color 
-- 	gw.setColor #fill red-- polygon fill color 
-- 	gw.Polygon #([200,100,16], [280,100,8], [250,200,4]) \
-- 	#(red, blue, green) \
-- 	#([0,0,0], [0,0,0], [0,0,0])
	
	--画三角形
-- 	gw.startTriangles()
-- 	gw.triangle #([0,0,0], [50,0,0], [50,50,0]) #(red,red,red)
-- 	gw.triangle #([0,0,0], [50,50,0], [0,50,0]) #(green,green,green)
-- 	gw.endTriangles()
	
-- 	gw.triStrip #([200,10,16], [280,10,8], [250,20,4]) \
-- 	#(red, blue, green) \
-- 	#([1.0,.5,0], [0.5,0.5,0], [0,0,0.5])
-- 	gw.htriStrip #([200,10,16], [280,10,8], [250,20,4]) \
-- 	#(red, blue, green) \
-- 	#([1.0,.5,0], [0.5,0.5,0], [0,0,0.5])
-- 	gw.wtriStrip #([-200,-10,-16], [-280,-10,-8], [-250,-20,-4]) \
-- 	#(red, blue, green) \
-- 	#([1.0,.5,0], [0.5,0.5,0], [0,0,0.5])

	--画方块
	b = Box2 50 50 20 20 --或许可以搞成方形笔刷,要是能画圆就好了...
	--polyline支持世界变换,方块只支持屏幕变换
	gw.hRect b green
	gw.wRect b blue
		
	gw.enlargeUpdateRect #whole
	
	
	--画标记
-- 	#point #hollowBox #plusSign #asterisk #xMarker #bigBox #circle #triangle #diamond #smallHollowBox #smallCircle #smallTriangle #smallDiamond 
	mpos = [80,10,10]
	for t in #(#point, #hollowBox, #plusSign, #asterisk, #xMarker, #bigBox, #circle, #triangle, #diamond, #smallHollowBox, #smallCircle, #smallTriangle, #smallDiamond) do
	(
		mpos += [20,0,0]
		gw.Marker mpos t color:red
		gw.hMarker mpos t color:green
		gw.wMarker mpos t color:blue
	)
-- 	for t in #(#point, #bigBox, #circle) do --#diamond
-- 	(
-- 		gw.Marker mpos t color:red
-- 		gw.hMarker mpos t color:green
-- 		gw.wMarker mpos t color:blue
-- 	)
-- 	gw.updateScreen()

)
-- registerRedrawViewsCallback redrawView
rollout gwTestRollout "Untitled" width:160 height:256
(
	on gwTestRollout open do registerRedrawViewsCallback redrawViewTest
	on gwTestRollout close do unregisterRedrawViewsCallback redrawViewTest
)
createdialog gwTestRollout

--可以替换
-- setTransform = gw.setTransform
-- htransPoint = gw.htransPoint
-- htext = gw.htext
-- enlargeUpdateRect = gw.enlargeUpdateRect
-- updateScreen = gw.updateScreen


--旧笔记
-- 	gw.hRect <box2> <color> [ applyUIScaling:<true> ]	--绘制方块,本想直接用他,但是这玩意没有旋转啊..
-- 	Box2 <x_integer> <y_integer> <w_integer> <h_integer>
-- 	构建一个Box2，其左上角为[x,y]，宽度为w，高度为h。

-- 	Box2 <upperleft_point2> <lowerRight_point2>
-- 	从指定的对角构造一个Box2对象。.

-- 	gw.setColor #line (color 255 64 255) --这里设置一下,下面就不用提供点颜色的数组了.
-- 	gw.hpolyline #([0,0,0],[10,10,10]) false --[rgb:<color_array>] --false是指不闭合
		
	--gw.wTransPoint <point3>这个方法将point3坐标转换为“w”格式的设备坐标。返回值的每个组件都是整数格式，原点在左上角。
	--gw.hTransPoint <point3>这个方法将point3坐标转换为“h”格式的设备坐标。返回值的每个组件在图形驱动程序的本机设备坐标中是整数格式的。对于HEIDI和OpenGL，原点在左下方。对于Direct3D，原点在左上角。
		
-- 	gw.setColor #fill (color 255 64 255) --设置填充颜色,在2017中设置填充颜色无效
-- 	gw.hPolygon #([10,10,0], [50,50,0], [10,100,0]) #(red, blue, green) #([1.0,.5,0], [0.5,0.5,0], [0,0,0.5])