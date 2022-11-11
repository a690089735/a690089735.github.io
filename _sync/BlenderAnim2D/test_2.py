import bpy

def create_collection(name:str):
    # https://devtalk.blender.org/t/how-to-create-collections/11144/2
    collection = bpy.data.collections.new(name+'_collection')
    bpy.context.scene.collection.children.link(collection)
    return collection

def delete_all():
    """
    清空场景
    """
    # 提示框 --https://blender.stackexchange.com/questions/73286/how-to-call-a-confirmation-dialog-box
    #提示框难用,我们做成检测按键,按下Ctrl则清空场景
    # https://b3d.interplanety.org/en/removing-collections-through-the-blender-python-api/
    # objs = bpy.data.objects
    # for obj in bpy.context.scene.objects:
    #     objs.remove(obj, do_unlink=True)
    for collection in bpy.data.collections: #这个循环因为带有删除,可能有风险,但是目前运行没问题
        for obj in collection.objects:
            bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(collection)


def create_sprite_skeleton_template(name:str, size, collection):
    armature = bpy.data.armatures.new(name+'_skeleton')
    rig = bpy.data.objects.new(name+'_armature', armature)
    # view_layer = bpy.context.view_layer
    # view_layer.active_layer_collection.collection.objects.link(rig)
    collection.objects.link(rig)
    bpy.context.view_layer.objects.active = rig
    bpy.ops.object.editmode_toggle()
    bone = armature.edit_bones.new('root')
    bone.head = [0, 0, 0]
    bone.tail = [0, ((size[0]**2+size[1]**2)**.5)*.5, 0]
    bpy.ops.object.editmode_toggle()

def position_add(posa,posb):
    """
    以元组或列表为向量进行相加
    """
    return (posa[0]+posb[0],posa[1]+posb[1],posa[2]+posb[2])

def create_sprite_plane(size,name:str, material, type, collection):
    #基本数据
    width,height = size[0],size[1]
    offset = [(0,0,0), (0,-height,0), (-width,-height,0), (-width,0,0)][type]

    # 创建平面
    vertices = [position_add((0,0,0),offset), position_add((width,0,0),offset), position_add((0,height,0),offset), position_add((width,height,0),offset)]
    faces = [(0,1,3,2)]
    sprite_mesh = bpy.data.meshes.new(name+'_mesh')
    sprite_mesh.from_pydata(vertices, [], faces)
    sprite_mesh.update(calc_edges=True)

    sprite_plane = bpy.data.objects.new(name+'_plane', sprite_mesh)

    # view_layer = bpy.context.view_layer
    # view_layer.active_layer_collection.collection.objects.link(sprite_plane)
    collection.objects.link(sprite_plane)

    #创建UV --https://b3d.interplanety.org/en/how-to-create-a-new-mesh-uv-with-the-blender-python-api/
    uv_coord = [(0, 0), (1, 0), (1, 1), (0, 1)]
    plane_uv = sprite_plane.data.uv_layers.new(name=name+'_UV')
    for loop in sprite_plane.data.loops:
        plane_uv.data[loop.index].uv = uv_coord[loop.index]

    # 指定材质
    sprite_plane.data.materials.append(material) #需要找到一个获取指定物体的data的方法

    #选择物体
    sprite_plane.select_set(True)
    bpy.context.view_layer.objects.active = sprite_plane
    
    return sprite_plane

def create_sprite_plane_by_image(image_file:str=r'C:\Users\Administrator\Desktop\giraffe.png', name:str='sprite', origin=(0,0), type=1):
    """
    image_file=图像文件路径
    name=物体名
    origin=原点,一般不改变
    type=屏幕坐标系类型,影响创建的象限 对应原点在0.左下角;1.左上角(默认;godot);2右上角;3右下角;

    根据图像实际尺寸创建平面,可以选择坐标系类型,创建后需要手动裁切.
    相对点位置取决于UV,godot多边形绝对点位置取决于原点,因此不要在物体模式修改.
    """

    # 获取基本信息
    img = bpy.data.images.load(image_file, check_existing=True)

    #创建新材质(纯空)
    material = bpy.data.materials.new(name=name+'_material')
    material.use_nodes = True
    material.blend_method = 'HASHED' #近似alpha blend的效果,但没有排序问题,采样越高效果越好,目前blender的一些预览模式不能完全支持blend,先用这个
    # material.blend_method = 'CLIP' #最便捷的预览方法,可以满足2D骨骼动画很多情况.但是无法显示半透明
    # material.blend_method = 'BLEND' #最实用的预览方法,足够满足2D骨骼动画大多数情况.只是非常依赖排序(很难绘制交叉),但2D动画本身也非常依赖排序.但目前的预览方式里,可能无法显示.
    material.shadow_method = 'HASHED' #设为CLIP时,或许可以切掉影子
    material.node_tree.links.clear()
    material.node_tree.nodes.clear()
    
    #添加节点和连线
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    
    transparent = nodes.new(type="ShaderNodeBsdfTransparent")
    diffuse = nodes.new(type = 'ShaderNodeBsdfDiffuse')
    mix = nodes.new(type = 'ShaderNodeMixShader')

    output = nodes.new(type = 'ShaderNodeOutputMaterial')

    links.new(diffuse.outputs[0], mix.inputs[2])
    links.new(transparent.outputs[0], mix.inputs[1])
    links.new(mix.outputs[0], output.inputs[0])

    tex = nodes.new(type="ShaderNodeTexImage")
    tex.image = img

    links.new(tex.outputs[0], diffuse.inputs[0])
    links.new(tex.outputs[1], mix.inputs[0])

    
    # 创建集合
    collection = create_collection(name)

    #创建一个模板骨骼
    create_sprite_skeleton_template(name,img.size,collection)

    return create_sprite_plane(img.size, name, material, type, collection)

delete_all()
create_sprite_plane_by_image()