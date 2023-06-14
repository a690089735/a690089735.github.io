extends CharacterBody3D

const SPEED = 0.1
const JUMP_VELOCITY = 0.45

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

func choice_direction():
	pass

func _physics_process(delta):
	# 添加重力.
	if not is_on_floor():
		velocity.y -= gravity * delta

	# Handle Jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# 三个轴的朝向,如果想要朝角色的某个方向移动,就用 basis * direction
	# print(transform.basis)
	
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	var direction = Vector3(input_dir.x, 0, input_dir.y).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
		rotation.y = Vector2(direction.x,direction.z).angle()
		print(rotation.y * 180 / PI)
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)
	# wrapi()
	# stepify
	move_and_slide()
