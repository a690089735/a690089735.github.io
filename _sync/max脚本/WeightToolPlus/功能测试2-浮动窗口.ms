try(destroyDialog listview_rollout) catch()

rollout listview_rollout "List View"
(
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y] --标题栏依赖
	local
	--标题栏功能
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Offset = [0,0],
	_Pin = false
	--标题栏
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20
	dotNetControl 'lbl_Tit' "Label" pos:[20,0] width:140 height:20 
	dotNetControl 'btn_Cls' "Button" pos:[160,0] width:20 height:20
	rollout FllowRollout "Untitled" width:16 height:16
	(
		button 'a' "button" width:16 height:16 pos:[0,0]
	)
	on listview_rollout moved e do
	(
		
		SetDialogPos FllowRollout (e + [-16,20])
-- 		print #(1,e)
	)
	on listview_rollout open do
	(
		try(destroyDialog FllowRollout)catch()
		createDialog FllowRollout style:#() pos:(GetDialogPos listview_rollout + [-16,20]) parent:listview_rollout.hwnd
	)
	--标题栏响应
	on lbl_Ico mouseDown do(_Pin = true;_Offset = (GetDialogPos listview_rollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do _Pin = false
	on lbl_Ico mouseMove do if _Pin do SetDialogPos listview_rollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do(_Pin = true;_Offset = (GetDialogPos listview_rollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos listview_rollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog listview_rollout
)
createDialog listview_rollout 340 200 style:#()

