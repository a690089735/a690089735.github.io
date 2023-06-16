extends CharacterBody3D

const SPEED :float = 10
const verify_time_max :float = 2

var verify_time :float = 0

var direction: Vector2 = Vector2()
	
func _input(event):
	direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down").normalized()
	
func _physics_process(delta):
	velocity.x = 0
	velocity.z = 0
	
	var new_angle = direction.angle()
	if rotation.y == new_angle:
		if direction:
			velocity.x = direction.x * delta * SPEED
			velocity.z = direction.y * delta * SPEED
	else:
		rotation.y = new_angle
		
	move_and_slide()
	
