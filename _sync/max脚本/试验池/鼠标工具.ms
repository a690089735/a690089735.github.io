-- tool 
-- on mousePoint clickno do
-- if clickno == 1
-- then b = box pos:worldPoint
-- else #stop

-- tool foo
-- (
-- on freeMove do print "Free Moving"
-- on mousePoint clickno do format "Point: %\n" clickno
-- on mouseAbort clickno do format "Abort: %\n" clickno
-- on mouseMove clickno do format "Moving: %\n" clickno
-- on start do print "Starting"
-- on end do print "Ending"
-- )
-- startTool foo prompt:"Hello!"

tool three_lights
(
local key, fill, back, targ
on mousePoint click do coordsys grid
(
if click == 1 then -- create key, back & fill lights at mousedown
(
targ = targetobject pos:gridPoint
key = targetspot pos:gridPoint name:"key"target:targ
back = targetspot pos:gridPoint name:"back"target:targ
fill = targetspot pos:gridPoint name:"fill"target:targ
)
if click == 3 then #stop
)
on mouseMove click do
(
if click == 2 then -- drag out & round on x-y plane
(
coordsys grid key.pos = gridPoint
coordsys targ back.pos = - key.pos
local p = if shiftKey then 90 else -90
coordsys targ fill.pos = key.pos * ((eulerangles 0 0 p) as quat)
)
else if click == 3 then -- drag up to elevate lights
(
in coordsys targ
(
local Z = gridDist.z
key.pos.z = Z
back.pos.z = Z * 1.5
fill.pos.z = Z * 0.5
)
)
)
)
startTool three_lights