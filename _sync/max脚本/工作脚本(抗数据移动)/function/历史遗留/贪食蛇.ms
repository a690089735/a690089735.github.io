try(destroydialog Snake)catch()
rollout Snake "贪食蛇" width:112 height:92
(
	local V,Body,Snake = #(),x=13,y=9,end,B,bodycolor = (color 6 135 113),headcolor = (color 0 71 69),BColor = (color 225 198 87)
	local Map = #()
	local uV = [0,1,0],dV = [0,-1,0],lV = [-1,0,0],rV = [1,0,0]
	
/* 	声明UI */
	button btn1 "开始游戏" pos:[8,8] width:96 height:24
	button btn2 "结束游戏" pos:[8,40] width:96 height:24
	Timer tmr1 "Timer" pos:[8,64] width:24 height:24 interval:1000 active:false --最小250,1秒钟4下
	dotNetControl btn_Move "Button" text:"" pos:[100,100] width:14 height:26
	fn CreateB Snake = 
	(
		Cmap = copy Map #nomap
		for s in Snake do 
		(
			i = finditem Cmap s.pos
			if i > 0 do deleteitem Cmap i
		)
		B = instance Body wirecolor:BColor pos:Cmap[random 1 Cmap.count] name:(uniquename "block") showFrozenInGray:off
		setTransformLockFlags B #{1..9}
		freeze B
	)
	fn StartGame = --开始游戏
	(with redraw off(
		/* --重置场景,设置渲染宽度 */
		resetMaxFile #noprompt
		renderWidth = 630;renderheight = 444
		/* 重置变量 */
		for j = y to -y by -1 do for i = -x to x do (append Map [i,j,0])
		Body = box length:1 width:1 height:1 lengthsegs:1 widthsegs:1 heightsegs:1 mapcoords:off name:(uniquename "Snake") pos:[0,1000,0] showFrozenInGray:off
		freeze Body
		setTransformLockFlags body #{1..9} --锁定
		end = false --true为死亡
		/* --顶视图:创建摄像机,正交相机,距离固定,视角固定(焦距固定)(顶视图正好时XY) */
		viewport.activeviewport = 1
		Ca = Freecamera fov:9.659 targetDistance:160 nearclip:1 farclip:1000 nearrange:0 farrange:1000 mpassEnabled:off mpassRenderPerPass:off  orthoProjection:true pos:[0,0,100] isSelected:on name:"GamePool"
		setTransformLockFlags Ca #{1..9} --锁定
		freeze Ca
		viewport.setType #view_camera
/* 		--相机视图:视图最大化 */
		displaySafeFrames = true;viewport.setGridVisibility #all false;viewport.SetRenderLevel #flat;max tool maximize
/* 		--转到摄像机视口,显示模式Shaded */
		
/* 		--激活视口 */
		if (not (viewport.IsEnabled())) then max vpt disable
/* 		--禁用编辑 */
		clearselection()
/* 		--创建两个方块 */
		Snake = #(instance Body pos:[0,0,0] wirecolor:headcolor showFrozenInGray:off,instance Body pos:[-1,0,0] wirecolor:bodycolor showFrozenInGray:off)
		freeze Snake
		setTransformLockFlags Snake #{1..9}
		CreateB Snake --创建B块
/* 		--重置方向定义 */
		V = [1,0,0]
		)
		redrawViews() 
/* 		--启动timer */
		setfocus btn_Move
		tmr1.active=true
	)
	fn Snake_Move Snake V = --蛇移动
	(
		with redraw off
		(
			Next = Snake[1].pos + V --下一格位置
			for s in Snake do if Next == s.pos do end = true --判断下一位置会不会吃自己
			if abs(Next.x) > x or abs(Next.y) > y do end = true --判断下一位置是不是在边界外
			if distance B.pos Next < 0.5 do --判断吃子
			(
				b.pos = Snake[Snake.count].pos
				insertItem B Snake Snake.count --加入蛇尾巴
				CreateB Snake --新创建B块
				if tmr1.interval > 255 do tmr1.interval -= 10 --速度加快10毫秒,原为5毫秒
			)
-- 			Next = Snake[1].pos + V --(因为可能有吃子,所以重新加算)
			Snake[Snake.count].pos = Snake[1].pos + V ;insertItem Snake[Snake.count] Snake 1;deleteitem Snake Snake.count--移动,尾至头
			Snake.wirecolor = bodycolor;Snake[1].wirecolor = headcolor
			
			
		)
		setfocus btn_Move
		redrawViews() 
	)
	fn esc =
	(
		with undo off(
			tmr1.active=false
			resetMaxFile #noprompt
			redrawViews()
		)
	)
/* 	执行UI */

	on btn1 pressed do
		StartGame()
	on btn2 pressed  do
		esc()
	on tmr1 tick do
	(
		if end then
		(
			messageBox "GameOver!"
			esc()
		)
		else
			if Snake.count > 100 then messageBox "YouWin!"
				else Snake_Move Snake V
	)
	on btn_Move KeyDown arg do
	(
		local keyCode = arg.keyCode
		local virtKeys = DotNetClass "System.Windows.Forms.Keys"
		notV = Snake[2].pos - Snake[1].pos
		if (keyCode == virtKeys.W) or (keyCode == virtKeys.Up) do if notV != uV do if V == uV then Snake_Move Snake V else V = uV
		if (keyCode == virtKeys.S) or (keyCode == virtKeys.Down) do if notV != dV do if V == dV then Snake_Move Snake V else V = dV
		if (keyCode == virtKeys.A) or (keyCode == virtKeys.Left) do if notV != lV do if V == lV then Snake_Move Snake V else V = lV
		if (keyCode == virtKeys.D) or (keyCode == virtKeys.Right) do if notV != rV do if V == rV then Snake_Move Snake V else V = rV
	)
)
rcMenu MainMenu
(
	subMenu	"菜单"
	(
		menuItem MI_showTips "历史记录" enabled:true
	)
)
createdialog Snake menu:MainMenu