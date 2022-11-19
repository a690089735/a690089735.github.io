--progressStart "bt"
--progressStart "aa"


--progressEnd() 

UnregisterRedrawViewsCallback ViewportTextDisplay

fn  ViewportTextDisplay =
(
gw.setTransform (Matrix3 1)
for obj in objects where obj.isselected == true do
(
gw.text obj.pos (obj.name as string) color:Yellow
)
)
--gw.UpdateScreen()

RegisterRedrawViewsCallback ViewportTextDisplay

unregisterRedrawViewsCallback GW_displayObjectNames
fn GW_displayObjectNames =
(
  gw.setTransform (matrix3 1)
  for o in objects where not o.isHiddenInVpt do
    gw.text o.pos (o as string) color:yellow
  gw.enlargeUpdateRect #whole  
)
registerRedrawViewsCallback GW_displayObjectNames



objs = $GHOST:*_OBJ_* as array
objs = $box* as array
findItem objs $box001
findItem objs $1


unregisterRedrawViewsCallback GW_displayGHOSTNames
fn GW_displayGHOSTNames =
(
  gw.setTransform (matrix3 1)
  for o in $'GHOST2:*GHOST*f' as array where not o.isHiddenInVpt do
    gw.text o.center (filterString (o.name as string) "_")[2] color:o.wirecolor
--  gw.enlargeUpdateRect #whole 
)
registerRedrawViewsCallback GW_displayGHOSTNames