import bpy

def extract_custom_shapes_from_armature(armature):
    # 存储新建物体的列表
    extracted_objects = []

    # 判断骨架是否处于姿态模式
    is_pose_mode = (armature.mode == 'POSE')

    # 切换到骨骼姿态模式
    if not is_pose_mode:
        bpy.context.view_layer.objects.active = armature
        bpy.ops.object.mode_set(mode='POSE')

    # 获取选择的姿态骨骼
    selected_pose_bones = [pb for pb in armature.pose.bones if pb.bone.select]

    # 遍历选择的姿态骨骼
    for pose_bone in selected_pose_bones:
        # 检查姿态骨骼是否有自定义形状
        if pose_bone.custom_shape:
            # 创建一个新的物体
            bpy.ops.object.mode_set(mode='OBJECT')
            new_object = pose_bone.custom_shape.copy()
            bpy.context.collection.objects.link(new_object)

            # 使用自定义形状作为物体的网格数据
            # new_object.data = pose_bone.custom_shape.copy()

            # 设置物体的变换矩阵为骨骼的世界矩阵
            new_object.matrix_world = pose_bone.matrix

            # 将新建物体添加到列表中
            extracted_objects.append(new_object)

    # 退出骨骼姿态模式
    if not is_pose_mode:
        bpy.ops.object.mode_set(mode='OBJECT')

    # 选择所有新建的物体
    bpy.ops.object.select_all(action='DESELECT')
    for obj in extracted_objects:
        obj.select_set(True)
    
    # 更新场景
    bpy.context.view_layer.update()

    return extracted_objects

# 获取当前选中的骨架对象
selected_armature = bpy.context.object

# 调用函数提取自定义形状
extracted_objects = extract_custom_shapes_from_armature(selected_armature)

# 打印提取的物体列表
for obj in extracted_objects:
    print(obj.name)