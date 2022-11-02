extends Control


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
onready var files_list: PoolStringArray

# Called when the node enters the scene tree for the first time.
func _ready():
	get_tree().connect("files_dropped", self, "_on_files_dropped")#拖拽信号
	
	$line_upperbody/btn_browse.connect("pressed", self, "_on_body_browse")
	$line_head/btn_browse.connect("pressed", self, "_on_head_browse")
	
	$line_upperbody/btn_delete.connect("pressed", self, "_on_body_del")
	$line_head/btn_delete.connect("pressed", self, "_on_head_del")
	
	$Button.connect("pressed", self, "_on_execute")
	pass # Replace with function body.


func _on_files_dropped(files: PoolStringArray, _screen: int)-> void:
	files_list = files
	$Label.text = '{num}个文件将被复制到指定目录.'.format([['num',len(files_list)]])

func _on_execute()-> void:#按后缀名条件复制文件到指定目录,只有一条目录时全复制到指定目录.
	print('do')

func _on_body_browse()-> void:#浏览路径
	print(111)
func _on_head_browse()-> void:#清空文本框
	print(333)

func _on_body_del()-> void:
	print(222)
func _on_head_del()-> void:
	print(444)
