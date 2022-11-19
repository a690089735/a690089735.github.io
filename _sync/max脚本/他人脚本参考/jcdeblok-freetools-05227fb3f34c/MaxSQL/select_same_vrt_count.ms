--select same vertex count as selected object
q=maxSQL()
q._select= Editable_mesh
q._from = objects
q._where =  (fn __ item = ( return try( item.numverts == $.numverts )catch (return false) ))
r=q._run()
select r