-- persistent global global_array = #() 
-- global_array[1] = b= box() 
-- global_array[2] = bm= bend() 
-- global_array[3] = sm= standard() 
-- global_array[4] = fog() 
-- global_array[5] = area() 
-- global_array[6] = bezier_float() 
-- global_array[7] = br= bricks() 
-- global_array[8] = lookat() 
-- global_array[9] = blur() 
-- global_array[10] = MapScaler() 
-- b.material=sm 
-- addmodifier b bm 
-- sm.diffusemap=br 
-- persistents.show() 
-- max hold 
-- max fetch
-- persistents.show()

-- sceneDataCADef =attributes sceneDataCADef version:1 attribID:#(0x61e9ff5f, 0x63784819) --genClassID returnValue:false用于生成ID
sceneDataCADef =attributes sceneDataCADef version:1 attribID:(genClassID returnValue:true) --genClassID returnValue:false用于生成ID
(
parameters main rollout:params
( note type:#string ui:et_note default:"")
rollout params "Scene Data Parameters"
( edittext et_note "Note: ")
)
 
thescene = (refs.dependents rootnode)[1]
rootNodeDataCA = undefined
if (custattributes.add rootnode sceneDataCADef) do
 rootNodeDataCA = rootnode.custAttributes[rootnode.custAttributes.count]
sceneDataCA = undefined
if (custattributes.add thescene sceneDataCADef) do
 sceneDataCA = thescene.custAttributes[thescene.custAttributes.count]
rootNodeDataCA.note
sceneDataCA.note
rootNodeDataCA.note = "rootnode2"
sceneDataCA.note = "thescene2"