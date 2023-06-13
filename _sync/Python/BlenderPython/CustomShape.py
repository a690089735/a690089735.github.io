import bpy
import mathutils

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


def clearTempData():
    # 删除未使用的物体
    for obj in bpy.data.objects:
        if obj.users == 0:
            bpy.data.objects.remove(obj)

    # 删除未使用的物体数据
    for mesh in bpy.data.meshes:
        if mesh.users == 0:
            bpy.data.meshes.remove(mesh)


def genShapeFormMeshByBone(boneObject: object, oldObject: object):
    originMatrix = oldObject.matrix_world
    boneMatrixInverted = (boneObject.id_data.matrix_world @ boneObject.matrix).inverted()

    oldMesh: bpy.types.Mesh = oldObject.data
    newMesh: bpy.types.Object = bpy.data.meshes.new("BoneShape")

    vertices = [boneMatrixInverted @ (originMatrix @ v.co) for v in oldMesh.vertices]
    edges = [e.vertices for e in oldMesh.edges]
    faces = [f.vertices for f in oldMesh.polygons]
    newMesh.from_pydata(vertices, edges, faces)
    # .new_from_object(mObj)
    newObject = bpy.data.objects.new("BoneShape", newMesh)
    return newObject


# 应用

selectedObjects = bpy.context.selected_objects
selectedMesh = [obj for obj in bpy.context.selected_objects if obj.type == "MESH"][0]
activeArmature = bpy.context.active_object

# activeObject.data.bones.active.name
# print(len(selectedObjects))
# 注意,这个方案是绝对替换,也就是物体保持当前样子进行替换
# 条件:(活动物体)是骨架,刚好俩物体,第一个是网格,骨架里选中了一个骨骼
if len(selectedObjects) == 2 and activeArmature.type == "ARMATURE" and selectedMesh.type == "MESH":
    # selectedBones = [bone for bone in activeObject.data.bones if bone.select]
    selectedPoseBone = bpy.context.active_pose_bone
    # 绝对替换模式,只能选择一个骨骼(其实也可以多个,但实在想不到有啥用处,后面可以考虑考虑)
    if selectedPoseBone.bone.select:
        # print("合适")
        objectData = genShapeFormMeshByBone(selectedPoseBone, selectedMesh)
        selectedPoseBone.custom_shape = objectData
        selectedPoseBone.use_custom_shape_bone_size = False
clearTempData()
