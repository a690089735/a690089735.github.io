"""
标准化2D骨架
变换
保持骨骼位置,但把骨架原点偏移到世界原点,应用旋转
所有骨骼位置z轴归0(用户可能需要调整Z轴来方便选择,但先统一归个0也是很好的)
所有骨骼Z轴对齐世界Z轴(尖轴y轴不变,按y轴和世界z算x轴,再按新的x轴和y轴算应该的z)
(bpy可以直接调整align_roll)
限制
不限制位置(可以设置root骨骼z轴动画来实现顺序动画,当然,也可以对模型加变形来调整顺序)
批量限制骨骼旋转,限制x和y轴旋转
批量限制骨骼缩放,限制z轴缩放
"""
import bpy
from _func import * #自定义依赖

def apply_armature_offset(armature):
        # 选择待处理骨架
        deselect_all()
        select_one(armature)

        # 选中物体应用变换
        bpy.ops.object.mode_set(mode='OBJECT')
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

        # 所有骨骼
        bpy.ops.object.mode_set(mode='EDIT')
        for bone in armature.data.edit_bones: #只有在EDIT模式才能获取到edit_bones
            # z位置归零
            bone.head[2] -= bone.head[2]
            bone.tail[2] -= bone.tail[2]
            # z轴对齐世界z轴方向
            bone.align_roll((0,0,1))
        
        # 退出编辑
        bpy.ops.object.mode_set(mode='OBJECT')

def apply_armature_limit(armature):
    #所有骨骼添加旋转约束和缩放约束,如果已有约束(同类型且特定名称则跳过)
    # [c for c in bone.constraints if c.type=='COPY_LOCATION']
    for bone in armature.pose.bones:
        #删除约束
        for constraint in bone.constraints:
            bone.constraints.remove(constraint)
        # 2D旋转
        rot_constraint = bone.constraints.new('LIMIT_ROTATION')
        rot_constraint.name = '2D_Rotation'
        rot_constraint.use_limit_x = True
        rot_constraint.use_limit_y = True
        rot_constraint.use_limit_z = False
        rot_constraint.euler_order = 'AUTO'
        rot_constraint.use_transform_limit = True
        rot_constraint.owner_space = 'WORLD'
        rot_constraint.influence = 1
        rot_constraint.show_expanded = False
        # 2D缩放
        scl_constraint = bone.constraints.new('LIMIT_SCALE')
        scl_constraint.name = '2D_Scale'
        scl_constraint.use_min_x = False
        scl_constraint.use_max_x = False
        scl_constraint.use_min_y = False
        scl_constraint.use_max_y = False
        scl_constraint.use_min_z = True
        scl_constraint.use_max_z = True
        scl_constraint.min_x = 1
        scl_constraint.max_x = 1
        scl_constraint.min_y = 1
        scl_constraint.max_y = 1
        scl_constraint.min_z = 1
        scl_constraint.max_z = 1
        scl_constraint.use_transform_limit = True
        scl_constraint.owner_space = 'WORLD'
        scl_constraint.influence = 1
        scl_constraint.show_expanded = False

def make_standard_armature(objects):
    active_object = bpy.context.view_layer.objects.active

    #批量处理选择中的骨架
    for armature in [obj for obj in objects if obj.type == 'ARMATURE']:
        apply_armature_offset(armature)
        apply_armature_limit(armature)

    # 恢复选择
    for obj in objects:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = active_object

make_standard_armature(bpy.context.selected_objects)