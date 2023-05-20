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

# 应用

selectedObjects = bpy.context.selected_objects
selectedTypes = [obj.type for obj in selectedObjects]
activeObject = bpy.context.active_object
# print(len(selectedObjects))
if len(selectedObjects) == 2 and activeObject.type == "ARMATURE" and "ARMATURE" in selectedTypes and "MESH" in selectedTypes:
    print("合适")
