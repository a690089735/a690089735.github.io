import bpy

def position_add(posa,posb):
    """
    以元组为向量进行相加
    """
    return (posa[0]+posb[0],posa[1]+posb[1],posa[2]+posb[2])

def create_plane(name='sprite_plane', origin=(0,0), size=(2,2), type=1):
    """
    name=物体名
    origin=原点,一般不改变
    type=屏幕坐标系类型,影响创建的象限 对应原点在0.左下角;1.左上角(默认;godot);2右上角;3右下角;
    """

    offset = [(0,0,0), (0,-size[1],0), (-size[0],-size[1],0), (-size[0],0,0)][type]

    vertices = [position_add((0,0,0),offset), position_add((0,size[0],0),offset), position_add((size[1],0,0),offset), position_add((size[1],size[0],0),offset)]
    faces = [(0,1,3,2)]
    sprite_mesh = bpy.data.meshes.new(name+'_mesh')
    sprite_mesh.from_pydata(vertices, [], faces)
    sprite_mesh.update(calc_edges=True)

    sprite_plane = bpy.data.objects.new(name, sprite_mesh)

    view_layer = bpy.context.view_layer
    view_layer.active_layer_collection.collection.objects.link(sprite_plane)

    #创建UV --https://b3d.interplanety.org/en/how-to-create-a-new-mesh-uv-with-the-blender-python-api/
    uv_coord = [(0, 0), (0, 1), (1, 1), (1, 0)]
    plane_uv = sprite_plane.data.uv_layers.new(name='Plane_UV')
    for loop in sprite_plane.data.loops:
        plane_uv.data[loop.index].uv = uv_coord[loop.index]

    #选择物体
    sprite_plane.select_set(True)    
    bpy.context.view_layer.objects.active = sprite_plane

    return sprite_plane

def assign_image(obj=bpy.context.active_object, image_file=r'C:\Users\Administrator\Desktop\giraffe.png'):#在构造时的获取仅在构造时获取,而不是在调用时运行一次
    """
    指定图像到物体
    1.新建材质
    2.连接图像和透明混合
    3.设置透明模式
    """
    #创建新材质(纯空)
    material = bpy.data.materials.new(name='Material')
    material.use_nodes = True
    # material.blend_method = 'HASHED' #近似alpha blend的效果,但没有排序问题,采样越高效果越好
    # material.shadow_method = 'HASHED'
    # material.blend_method = 'CLIP' #最便捷的预览方法,可以满足2D骨骼动画很多情况.但是无法显示半透明
    material.blend_method = 'BLEND' #最实用的预览方法,足够满足2D骨骼动画大多数情况.只是非常依赖排序(很难绘制交叉),但2D动画本身也非常依赖排序.
    material.shadow_method = 'HASHED' #设为CLIP时,或许可以切掉影子
    material.node_tree.links.clear()
    material.node_tree.nodes.clear()
    obj.data.materials.append(material) #需要找到一个获取指定物体的data的方法
    
    #添加节点
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    
    transparent = nodes.new(type="ShaderNodeBsdfTransparent")
    diffuse = nodes.new(type = 'ShaderNodeBsdfDiffuse')
    mix = nodes.new(type = 'ShaderNodeMixShader')

    output = nodes.new(type = 'ShaderNodeOutputMaterial')

    # links.new(diffuse.outputs['BSDF'], output.inputs['Surface'])
    links.new(diffuse.outputs[0], mix.inputs[2])
    links.new(transparent.outputs[0], mix.inputs[1])
    links.new(mix.outputs[0], output.inputs[0])

    img = bpy.data.images.load(image_file, check_existing=True)
    # width, height = img.size
    # print(width, height)
    tex = nodes.new(type="ShaderNodeTexImage")
    tex.image = img

    links.new(tex.outputs[0], diffuse.inputs[0])
    links.new(tex.outputs[1], mix.inputs[0])
    
    # bpy.ops.image.open(filepath="C:\\Users\\Administrator\\Desktop\\giraffe.png", directory="C:\\Users\\Administrator\\Desktop\\", files=[{"name":"giraffe.png", "name":"giraffe.png"}], relative_path=True, show_multiview=False)
    #print (dir(list))假设您想知道与列表类关联的所有方法只需键入以下内容
def create_skeleton_standard():
    armature = bpy.data.armatures.new("Armature")
    rig = bpy.data.objects.new("Armature", armature)
    view_layer = bpy.context.view_layer
    view_layer.active_layer_collection.collection.objects.link(rig)
    bpy.context.view_layer.objects.active = rig
    bpy.ops.object.editmode_toggle()
    bone = armature.edit_bones.new('root')
    bone.head = [0, 0, 0]
    bone.tail = [0, 1, 0]
    pass

def set_viewport():
    """
    设置活动视图轴为正Z,Y向上
    设置活动视图显示模式为渲染#对于HASHED,显示效果非常好,但现在不用HASHED了
    设置活动视图显示模式为材质#并且设置渲染过程是底色
    bpy.context.space_data.shading.render_pass = 'DIFFUSE_COLOR'
    #未来或许可以利用视口合成功能,更好的显示透明(添加diffusecolor渲染层)
    """
    # 设置所有3D视图方向,不知道啥意思,抄的先用着
    for area in bpy.context.screen.areas: #上下文中的所有屏幕
        if area.type == 'VIEW_3D': #所有3D视口
            override = bpy.context.copy()
            override['area'] = area
            bpy.ops.view3d.view_axis(override, type='TOP') #设置视图方向
    pass

create_plane(type=1)
assign_image(obj=bpy.context.active_object)
set_viewport()
create_skeleton_standard()
