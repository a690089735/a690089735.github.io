extends CharacterBody3D

const SPEED = 0.1

const max_number_verify = 2
var number_verify: int = 0

var input_dir:Vector2 = Vector2()
var pre_direction:Vector3 = Vector3()
var direction:Vector3 = Vector3()

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

func _ready():
	print(Input.use_accumulated_input)
	Input.use_accumulated_input = false
	
func _input(event):
	number_verify = 0
	input_dir = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	direction = Vector3(input_dir.x, 0, input_dir.y).normalized()
	
	
func _physics_process(delta):
	if direction.distance_to(pre_direction): # 这个的效果比==还好
		pre_direction = direction
	else:
		number_verify += 1
		
	if number_verify >= max_number_verify:
		if direction:
			rotation.y = Vector2(direction.x,direction.z).angle()
			velocity.x = direction.x * SPEED
			velocity.z = direction.z * SPEED
		else:
			velocity.x = move_toward(velocity.x, 0, SPEED)
			velocity.z = move_toward(velocity.z, 0, SPEED)
		
	move_and_slide()
	
