import bpy

def set_deform_option():
    for obj in bpy.context.selected_objects:
        # 检查传入的物体类型是否为骨架
        if obj.type == 'ARMATURE':
            armature = obj.data

            # 遍历所有骨骼
            for bone in armature.bones:
                # 检查骨骼名称是否以"DEF."开头
                if bone.name.startswith("DEF."):
                    bone.use_deform = True  # 开启 Deform 选项
                else:
                    bone.use_deform = False  # 关闭 Deform 选项

set_deform_option()