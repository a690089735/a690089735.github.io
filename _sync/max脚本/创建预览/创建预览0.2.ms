rollout unnamedRollout "Untitled" width:304 height:80
(
	edittext 'edt1' "" pos:[64,10] width:144 height:16 align:#left
	dropdownList 'ddl1' "" pos:[215,7] width:80 height:22 items:#(".AVI", ".MP4", ".MOV", ".MKV", ".GIF", ".GIF0.5") align:#left --GIF1是抽取一半帧的精简模式
	button 'btn1' "保存到.." pos:[8,9] width:56 height:16 align:#left
	edittext 'edt2' "分段" pos:[8,32] width:288 height:16 align:#left
	button 'btn2' "创建预览" pos:[224,56] width:72 height:16 align:#left
	spinner 'spn1' "帧率" pos:[8,56] width:52 height:16 align:#left
-- 	include "create_Preview2.ms"
	include "create_Preview.ms"
	--添加一个缩放到某个尺寸的功能.

	on btn2 pressed do
	(
		clear_folder()
		datas = make_segment_data "100,0:完整预览" clamp:false
		txts = make_segment_txt datas imgs_folder:(data_folder+"temp_capture_bmps\\")
		capture_bmps imgs_folder:(data_folder+"temp_capture_bmps\\") range:datas[1]
		make_video datas:txts
	)
)
CreateDialog unnamedRollout