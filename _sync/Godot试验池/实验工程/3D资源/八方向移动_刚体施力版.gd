extends RigidBody3D

#@onready var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")
#@onready var max_physics_steps_per_frame = ProjectSettings.get_setting("physics/common/max_physics_steps_per_frame")

const SPEED :float = 10
const verify_time_max :int = 3
var verify_time :int = 0
var pre_direction: Vector2 = Vector2()

var direction: Vector2 = Vector2()
var new_angle: float = 0
	
func _input(event):
	verify_time = verify_time_max
	direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down").normalized()
	new_angle = direction.angle()
	if direction != pre_direction:
		verify_time = 0
		pre_direction = direction
	
func _physics_process(delta):
	linear_velocity = Vector3()
	
	if direction:
		if direction == pre_direction:
			verify_time += 1
		if verify_time >= verify_time_max:
			rotation.y = -new_angle
			apply_central_force(Vector3(direction.x,0,direction.y) * SPEED)



