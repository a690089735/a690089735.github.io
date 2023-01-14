
gizmo_use = tmGizmos.useGizmo
worldAxis_show = maxOps.showWorldAxis
viewcube_vis = ViewCubeOps.Visibility
viewbutton_vis = ViewportButtonMgr.EnableButtons

not_maximize = false
-- safeFrames_use = displaySafeFrames

fn hideParts =
(--应当在隐藏前记录信息,在之后恢复
	max showaxisicon --切换坐标轴显示,这个可能没有手动设置的方法,所以这样应该算是安全的
	gizmo_use = tmGizmos.useGizmo --保险起见,先关闭gizmo大块显示,这里记录之前状态
	worldAxis_show = maxOps.showWorldAxis
	viewcube_vis = ViewCubeOps.Visibility
	viewbutton_vis = ViewportButtonMgr.EnableButtons
	
	tmGizmos.useGizmo = false --保险起见,先关闭gizmo大块显示
	maxOps.showWorldAxis = false
	ViewCubeOps.Visibility = false --设置视图方块显示
	ViewportButtonMgr.EnableButtons = false --设置视口按钮显示
)
hideParts()
fn unhideParts =
(
	max showaxisicon --切换坐标轴显示,这个可能没有手动设置的方法,所以这样应该算是安全的(只要配套出现两次,就是规则的,但是可能开关已经被关闭了一次,则录屏会有轴线)
	tmGizmos.useGizmo = gizmo_use
	maxOps.showWorldAxis = worldAxis_show
	ViewCubeOps.Visibility = viewcube_vis --设置视图方块显示
	ViewportButtonMgr.EnableButtons = viewbutton_vis  --设置视口按钮显示
)
unhideParts()

fn pinViewport size:[640,480] =
(
	not_maximize = viewport.NumViews>1
	if not_maximize do max tool maximize
	NitrousGraphicsManager.PinViewPanelSize size[1] size[2]
	NitrousGraphicsManager.ChangeCursorOnMouseMove = false
-- 	safeFrames_use = displaySafeFrames
-- 	displaySafeFrames = false
-- 	disableSceneRedraw()
	forceCompleteRedraw doDisabled:true
)
pinViewport size:[640,480]
fn unpinViewport remaximize:false =
(
	if remaximize do max tool maximize
	NitrousGraphicsManager.UnpinViewPanelSize()
	NitrousGraphicsManager.ChangeCursorOnMouseMove = true
-- 	displaySafeFrames = safeFrames_use
	enableSceneRedraw() --保险起见而保留
	forceCompleteRedraw doDisabled:true
)
unpinViewport remaximize:not_maximize

fn grapViewport show:false = --如果show,则显示bitmap后再返回,
(
	forceCompleteRedraw doDisabled:true
	local vshot = viewport.getViewportDib() --可以捕获景深效果运动模糊等,并且可选captureAlpha:<bool> gammaCorrect:<bool>  
	if show do display vshot
	vshot
)
grapViewport show:true
-- getViewFOV()  --获取视口FOV