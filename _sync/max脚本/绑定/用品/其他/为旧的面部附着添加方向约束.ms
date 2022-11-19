-- Adou
-- fn setRotconstraint = 
-- undo on(
-- 	errorobjs = #()
-- 	for obj in (selection as array) do
-- 	try(
-- 		refobj = getnodebyname (substituteString obj.name "Src_" "Src_Prt_")
-- 		srcobj = getnodebyname (substituteString refobj.name "Prt_Ref" "Prt_Src")
-- 		
-- 		refobj.rotation.controller =  Orientation_Constraint()
-- 		refobj.rotation.controller.appendtarget srcobj 50.0
-- 		select #(refobj,srcobj)
-- 	)catch(append errorobjs obj)
-- 	if errorobjs.count > 0 do select errorobjs
-- )

-- setRotconstraint()

-- JWY
-- XRK
fn setRotconstraint = 
undo on(
	errorobjs = #()
	for obj in (selection as array) do
	try(
		refobj = getnodebyname (substituteString obj.name "_Ref" "_Prt_Ref")
		srcobj = getnodebyname (substituteString refobj.name "_Prt_Ref" "_Prt_Src")
		
		refobj.rotation.controller =  Orientation_Constraint()
		refobj.rotation.controller.appendtarget srcobj 50.0
-- 		select #(refobj,srcobj)
	)catch(append errorobjs obj)
	clearSelection()
	if errorobjs.count > 0 do select errorobjs
)

setRotconstraint()