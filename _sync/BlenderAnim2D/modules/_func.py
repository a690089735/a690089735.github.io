import bpy

def deselect_all():
    """
    清空选择
    """
    for obj in bpy.context.selected_objects:
        obj.select_set(False)
    bpy.context.view_layer.objects.active = None

def select_one(obj):
    """
    选择一个
    """
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj

def delete_all():
    """
    清空场景
    """
    for collection in bpy.data.collections: #这个循环因为带有删除,可能有风险,但是目前运行没问题
        for obj in collection.objects:
            bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(collection)

def position_add(posa,posb):
    """
    以元组或列表为向量进行相加
    """
    return (posa[0]+posb[0],posa[1]+posb[1],posa[2]+posb[2])