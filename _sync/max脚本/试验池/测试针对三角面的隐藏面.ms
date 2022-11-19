-- m = snapshotasmesh $
-- result = mesh mesh:m
-- for i = 1 to m.numfaces do setEdgeVis m i 3 false
-- 	
-- update result


for i = 1 to $.numfaces do setEdgeVis $ i 3 false 
update $