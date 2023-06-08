extends TouchScreenButton
@onready var root = get_tree().root
@onready var 虚拟摇杆: Node2D = (preload("res://虚拟摇杆/虚拟摇杆.tscn")).instantiate()
@onready var 摇杆按钮: Sprite2D = 虚拟摇杆.get_node("摇杆")
@onready var 摇杆基座: Sprite2D = 虚拟摇杆.get_node("基座")

@onready var 角色: Sprite2D = $"../Sprite2D"
@export var 移动速度: int = 270

var 距离限制: int = 40
var 偏移距离: float
var 操作方向: Vector2

func _process(delta):
#	角色控制功能
	角色.global_position += 操作方向 * delta * (偏移距离/距离限制) * 移动速度
	

func _重置虚拟摇杆():
	偏移距离 = 0
	操作方向 = Vector2(0,0)
	摇杆按钮.position = Vector2(0,0)
	摇杆基座.position = Vector2(0,0)
	pass
	
#var 虚拟摇杆实例
func _on_pressed():
	虚拟摇杆.set_global_position(get_global_mouse_position())
	root.add_child(虚拟摇杆)


func _on_released():
	_重置虚拟摇杆()
	root.remove_child(虚拟摇杆)
	

func _unhandled_input(event):
#	注意:要把父control设置为Mouse = pass,这个_unhandled_input才能传递到触发器
	if is_pressed() and event is InputEventScreenDrag:
#		print(event.position)
		摇杆按钮.set_global_position(event.position)
		偏移距离 = 摇杆基座.position.distance_to(摇杆按钮.position)
		操作方向 = (摇杆按钮.position - 摇杆基座.position).normalized()
		if  偏移距离 > 距离限制:
			摇杆基座.position += 操作方向 * (偏移距离 - 距离限制)
			偏移距离 = 距离限制
		

func _on_control_item_rect_changed():
#	父节点更改矩形时的信号,用于动态改变布局
	var parent_size = $"..".size
	position = parent_size * Vector2(0.25,0.5)
	shape.size = parent_size * Vector2(0.5,1)
