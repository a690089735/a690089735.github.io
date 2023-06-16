extends CharacterBody3D

const SPEED :float = 10
const verify_time_max :float = 2

var verify_time :float = 0

var direction: Vector2 = Vector2()
var new_angle: float = 0
	
func _input(event):
	direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down").normalized()
	new_angle = direction.angle()
	
func _physics_process(delta):
	velocity.x = 0
	velocity.z = 0
	
	if direction:
		rotation.y = new_angle
		velocity.x = direction.x * delta * SPEED
		velocity.z = direction.y * delta * SPEED
		move_and_slide()
		
		
	
	
