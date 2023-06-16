extends CharacterBody3D

const SPEED = 10

const max_number_verify = 3
var number_verify: int = 0

var direction:Vector2 = Vector2()

	
func _input(event):
	direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down").normalized()
	if event.is_action_released("ui_left") || event.is_action_released("ui_right") || event.is_action_released("ui_up") || event.is_action_released("ui_down"):
		number_verify = 0
	else:
		number_verify = max_number_verify
	
func _physics_process(delta):
	velocity.x = 0
	velocity.z = 0
	
	number_verify += 1
	if number_verify >= max_number_verify:
		if direction:
			rotation.y = direction.angle()
			velocity.x = direction.x * delta * SPEED
			velocity.z = direction.y * delta * SPEED
		
	move_and_slide()
	
