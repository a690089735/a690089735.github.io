extends CharacterBody3D

const SPEED = 0.1

const number_verify = 3
var move_verify: int = number_verify
var rotate_verify: int = number_verify

var pre_direction:Vector2 = Vector2()
var direction:Vector2 = Vector2()

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

func _ready():
#	print(Input.use_accumulated_input)
#	Input.use_accumulated_input = false
	pass
	
func _input(event):
	direction = Input.get_vector("ui_left", "ui_right","ui_up", "ui_down",).normalized()
	if event.is_action_pressed("ui_up") || event.is_action_pressed("ui_down") || event.is_action_pressed("ui_left") || event.is_action_pressed("ui_right"):
		move_verify = number_verify
	if event.is_action_released("ui_up") || event.is_action_released("ui_down") || event.is_action_released("ui_left") || event.is_action_released("ui_right"):
		move_verify = 0
		
func _physics_process(delta):
	print(rotation.y)
	# 停止
	velocity.x = 0
	velocity.z = 0
#	print(direction)
	# 方向有值再继续
	if direction:
		# 验证方向是否稳定,dis的效果比==还好
		if direction.distance_to(pre_direction):
			print("align")
			pre_direction = direction
		else:
			move_verify += 1
			
		# 方向已经稳定
		if move_verify >= number_verify:
			
			# 验证朝向是否一致
			var new_angle = direction.angle()
			print(new_angle)
			print(rotation.y)
			print(rotation.y == new_angle)
			if rotation.y == new_angle:
				if rotate_verify > number_verify:
					print("move")
					velocity.x = direction.x * SPEED
					velocity.z = direction.y * SPEED
					move_and_slide()
				else:
					rotate_verify += 1
			else:
				print("set_angle")
				
				rotation.y = new_angle
				rotate_verify = 0 # 开启朝向等待
				
			print(rotation.y)
			print(new_angle)
#			print(rotation.y == new_angle)
			
		
	
	
