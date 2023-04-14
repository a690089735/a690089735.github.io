import bpy
import bmesh

mesh = bpy.context.active_object.data

def get_image_by_material(material):
    nodes = material.node_tree.nodes
    # 遍历每个节点
    for node in nodes:
        # 检查节点类型是否为Diffuse BSDF
        if node.type == 'BSDF_DIFFUSE':
            # 返回Diffuse BSDF节点上的颜色贴图
            return node.inputs['Color'].links[0].from_node.image

material = mesh.materials[0]  # 假设只有一个材质
image = get_image_by_material(material)

print(image)

bm = bmesh.new()
bm.from_mesh(mesh)