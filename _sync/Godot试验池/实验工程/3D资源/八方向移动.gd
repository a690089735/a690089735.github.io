extends CharacterBody3D

const SPEED = 0.1
const JUMP_VELOCITY = 0.45

var input_dir:Vector2 = Vector2()
var pre_direction:Vector3 = Vector3()
var direction:Vector3 = Vector3()

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")


func choice_direction():
	pass
	
func calc_offset():
	pass

func _ready():
	print(Input.use_accumulated_input)
	Input.use_accumulated_input = false
	
func _input(event):

	direction = Vector3()
#	print(event)
	# 三个轴的朝向,如果想要朝角色的某个方向移动,就用 basis * direction
	# print(transform.basis)
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	input_dir = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
#	print(input_dir)
	# Handle Jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

#	var tmp_direction = Vector3(input_dir.x, 0, input_dir.y).normalized()
#	print(direction)
#	if tmp_direction.distance_to(pre_direction) > 0:
#		pre_direction = tmp_direction
#	else:
#		direction = tmp_direction

	direction = Vector3(input_dir.x, 0, input_dir.y).normalized()

#	print(rotation.y * 180 / PI)

#	pass
#
#func get_input():
#	var input_direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
#	velocity = Vector3(input_direction.x,0,input_direction.y) * SPEED
#	rotation.y = input_direction.angle()
	
func _physics_process(delta):
	# 添加重力.
	if not is_on_floor():
		velocity.y -= gravity * delta
#	print(direction.distance_to(pre_direction))

#	if direction:
#		rotation.y = Vector2(direction.x,direction.z).angle()
#		velocity.x = direction.x * SPEED
#		velocity.z = direction.z * SPEED
#	else:
#		velocity.x = move_toward(velocity.x, 0, SPEED)
#		velocity.z = move_toward(velocity.z, 0, SPEED)
		
	if direction.distance_to(pre_direction):
		if direction:
			rotation.y = Vector2(direction.x,direction.z).angle()
			velocity.x = direction.x * SPEED
			velocity.z = direction.z * SPEED
		else:
			velocity.x = move_toward(velocity.x, 0, SPEED)
			velocity.z = move_toward(velocity.z, 0, SPEED)
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)
		

#	get_input()
	
	move_and_slide()
	
