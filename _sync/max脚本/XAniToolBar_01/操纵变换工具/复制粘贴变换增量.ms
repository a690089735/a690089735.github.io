oldt = $.transform
newt = $.transform

offsett = newt * inverse oldt

$.transform = offsett * $.transform


-- oldtList = #()
-- newtList = #()
-- offsettList = #()
-- fn copyt =
-- (
-- 	for o in getcurrentselection() collect o.transform
-- )
-- oldtList = copyt
-- newtList = copyt

-- offsettList = for i = 1 to oldtList.count collect newtList[i] * inverse oldtList[i]
-- fn pasetoffsett =
-- (
-- 	sel = getcurrentselection()
-- 	for i = 1 to offsettList.count where i <= sel.count do (o = sel[i];o.transform = offsett * o.transform)
-- )