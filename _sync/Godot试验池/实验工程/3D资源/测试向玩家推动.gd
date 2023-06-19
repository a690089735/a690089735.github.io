extends RigidBody3D

@onready var player = $"../RigidBody3D"

var SPEED = 0.1

func _physics_process(delta):
	linear_velocity = Vector3()
	
	var offset :Vector3 = (player.global_position - global_position).normalized()
	rotation.y = -(Vector2(offset.x,offset.z)).angle()
	linear_velocity.x = offset.x * SPEED
	linear_velocity.z = offset.z * SPEED
	
	apply_central_force(offset * SPEED)
