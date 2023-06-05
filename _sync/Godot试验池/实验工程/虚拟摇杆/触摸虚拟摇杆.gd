extends TouchScreenButton
@onready var root = get_tree().root
@onready var 虚拟摇杆 :Node2D= (preload("res://虚拟摇杆/虚拟摇杆.tscn")).instantiate()
@onready var 摇杆按钮 :Sprite2D= 虚拟摇杆.get_node("摇杆")
@onready var 摇杆基座 :Sprite2D= 虚拟摇杆.get_node("基座")

@onready var 角色 :Sprite2D = $"../Sprite2D"
const 移动速度 :int = 100

## Called when the node enters the scene tree for the first time.
#func _ready():
#	pass # Replace with function body.
#
#
## Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

#var isPressed :bool= false

#var pos : Vector2
var 偏移距离 :float
var 操作方向 :Vector2

func _重置虚拟摇杆():
	偏移距离 = 0
	操作方向 = Vector2(0,0)
	摇杆按钮.position = Vector2(0,0)
	摇杆基座.position = Vector2(0,0)
	pass
	
#var 虚拟摇杆实例
func _on_pressed():
#	print("pressed")
#	虚拟摇杆实例 = 虚拟摇杆.instantiate()
	虚拟摇杆.set_global_position(get_global_mouse_position())
	root.add_child(虚拟摇杆)
	pass # Replace with function body.


func _on_released():
#	print("released")
#	虚拟摇杆.queue_free()
	_重置虚拟摇杆()
	root.remove_child(虚拟摇杆)
	
	pass # Replace with function body.
	

func _unhandled_input(event):
#	注意:要把父control设置为Mouse = pass,这个_unhandled_input才能传递到触发器
#	print(is_instance_valid(虚拟摇杆))
#	print(get_global_mouse_position())
#	print(event.position)
#	pos = event.position
	if is_pressed() and event is InputEventScreenDrag:
#		print(event.position)
		摇杆按钮.set_global_position(event.position)
#		print(摇杆基座.position.distance_to(摇杆按钮.position) > 40,
#		摇杆按钮.position,
#		摇杆基座.position,
#		摇杆按钮.position - 摇杆基座.position,
#		(摇杆按钮.position - 摇杆基座.position).normalized() * 40)
		偏移距离 = 摇杆基座.position.distance_to(摇杆按钮.position)
		操作方向 = (摇杆按钮.position - 摇杆基座.position).normalized()
		if  偏移距离 > 40:
			摇杆基座.position += 操作方向 * (偏移距离 - 40)
		

func _process(delta):
	角色.global_position += 操作方向 * delta * 移动速度
	


func _on_control_item_rect_changed():
#	父节点更改矩形时的信号,用于动态改变布局
#	print("更改")
#	print($"..".size)
	var parent_size = $"..".size
	position = parent_size * Vector2(0.25,0.5)
	shape.size = parent_size * Vector2(0.5,1)
	pass # Replace with function body.
