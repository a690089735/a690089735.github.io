extends CharacterBody3D
#@onready var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")
#@onready var max_physics_steps_per_frame = ProjectSettings.get_setting("physics/common/max_physics_steps_per_frame")

const SPEED :int = 10
const verify_time_max :int = 3

var verify_time :int = 0

var pre_direction: Vector2 = Vector2()
var direction: Vector2 = Vector2()
var new_angle: float = 0
	
func _input(event):
	verify_time = 0
	direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down").normalized()
	new_angle = direction.angle()
	
func _physics_process(delta):
	velocity.x = 0
	velocity.z = 0
	
	if direction:
		if direction == pre_direction:
			verify_time += 1
		else:
			pre_direction = direction
		if verify_time >= verify_time_max:
			rotation.y = new_angle
			velocity.x = direction.x * delta * SPEED
			velocity.z = direction.y * delta * SPEED
			move_and_slide()
		
		
	
	
