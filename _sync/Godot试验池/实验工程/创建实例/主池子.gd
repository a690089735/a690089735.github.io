extends Node2D


# Declare member variables here. Examples:
# var a = 2
# var b = "text"

@onready var component: PackedScene = preload("res://创建实例/组件测试.tscn")

# Called when the node enters the scene tree for the first time.
#func _ready():
#
#	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

func _input(event):
	var rect_size: Vector2 = get_viewport_rect().size
	if event is InputEventMouseButton and not event.is_pressed():
		var rel_mpos: Vector2 = get_local_mouse_position()
		if rel_mpos.x > 0 and rel_mpos.x < rect_size.x and rel_mpos.y > 0 and rel_mpos.y < rect_size.y:
#			print("click-",rel_mpos)
			var instance_block = component.instantiate()
			instance_block.position = rel_mpos
			add_child(instance_block)
			
