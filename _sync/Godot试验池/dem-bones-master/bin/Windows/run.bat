rem Skinning decompsition to generate bone transformations and skinning weights from input meshes sequence 蒙皮分解，从输入网格序列生成骨转换和蒙皮权重
call "../bin/Windows/DemBones.exe" -i="Bone_Geom.fbx" -a="Bone_Anim.abc" -b=5 -o="Decomposition_05.fbx"
call "../bin/Windows/DemBones.exe" -i="Bone_Geom.fbx" -a="Bone_Anim.abc" -b=10 -o="Decomposition_10.fbx"
call "../bin/Windows/DemBones.exe" -i="Bone_Geom.fbx" -a="Bone_Anim.abc" -b=20 -o="Decomposition_20.fbx"

rem Joint grouping 好像是更新绑定姿态?
call "../bin/Windows/DemBones.exe" -i="Bone_Geom.fbx" -a="Bone_Anim.abc" -b=20 --bindUpdate=2 -o="Decomposition_20_grouped.fbx"

rem Solve skinning weights from input meshes sequence and input bone transformations 从输入网格序列和输入骨转换中求解蒙皮权值
call "../bin/Windows/DemBones.exe" -i="Bone_Trans.fbx" -a="Bone_Anim.abc" --nTransIters=0 -o="SolvedWeights.fbx"

rem Solve bone transformations from input meshes sequence and input skinning weights 从输入网格序列和输入蒙皮权重解决骨转换
call "../bin/Windows/DemBones.exe" -i="Bone_Skin.fbx" -a="Bone_Anim.abc" --nWeightsIters=0 -o="SolvedTransformations.fbx"

rem Optimize given bone transformations and skinning weights from input meshes sequence Optimize given bone transformations and skinning weights from input meshes sequence
call "../bin/Windows/DemBones.exe" -i="Bone_All.fbx" -a="Bone_Anim.abc" --bindUpdate=1 -o="Optimized.fbx"

rem Only solve helper bones using demLock attribute of the joints 只使用关节的demLock属性求解辅助骨
call "../bin/Windows/DemBones.exe" -i="Bone_Helpers.fbx" -a="Bone_Anim.abc" --bindUpdate=1 -o="SolvedHelpers.fbx"

rem Partially solve skinning weights using per-vertex color attribute of the mesh 利用网格的逐顶点颜色属性部分解决蒙皮权重
call "../bin/Windows/DemBones.exe" -i="Bone_PartiallySkinned.fbx" -a="Bone_Anim.abc" --nTransIters=0 -o="SolvedPartialWeights.fbx"
