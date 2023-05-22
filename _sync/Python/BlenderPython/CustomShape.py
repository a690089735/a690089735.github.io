import bpy

# 测试

# # 获取当前场景和选中的物体
# scene = bpy.context.scene
# selected_objects = bpy.context.selected_objects

# print(selected_objects)

# active_object = bpy.context.active_object
# print(active_object.name)

# # 获取激活的骨骼
# # print(active_object.data.bones.active.name) # getActiveBone
# if active_object is not None and active_object.type == 'ARMATURE':
#     print(active_object.data.bones.active.name)

def genShapeFormMeshByBone(m,b):
    pass

# 应用

selectedObjects = bpy.context.selected_objects
# selectedTypes = [obj.type for obj in selectedObjects]
activeObject = bpy.context.active_object


# activeObject.data.bones.active.name
# print(len(selectedObjects))
# 注意,这个方案是绝对替换,也就是物体保持当前样子进行替换
# 条件:(活动物体)是骨架,刚好俩物体,第一个是网格,骨架里选中了一个骨骼
if activeObject.type == "ARMATURE" and len(selectedObjects) == 2 and selectedObjects[0].type == "MESH":
    selectedBones =  [bone for bone in activeObject.data.bones if bone.select]
    # 绝对替换模式,只能选择一个骨骼(其实也可以多个,但实在想不到有啥用处,后面可以考虑考虑)
    if len(selectedBones) == 1:
        # print("合适")
        meshData = genShapeFormMeshByBone(selectedObjects[0],selectedBones[0])
