tool PointCreator
(
local p, createpoint
-- define a function to perform actual node creation. Setting coordsys to
-- ¡¯r;grid¡¯ in order for the alignment of the node¡¯s local Z axis to be
-- perpendicular to the construction grid
fn createpoint = in coordsys grid p=point pos:gridPoint
--
-- set up so that a node is created on a mouse button down, move node
-- drag, release node at mouse button up.
--
-- if clickno == 1, then we are at first mouse click, which is a mouse
-- button down. If clickno != 1, at following mouse button up.
on mousePoint clickno do
(
if clickno == 1
then createPoint()
-- if p == undefined, then clicked twice without mouse movement
-- (double clicked). No point object present, so just ignore this click.
else if p != undefined do (p.pos=worldPoint;p=undefined)
)
-- if p != undefined, we are moving a previously created node
-- if p == undefined, and left mouse button is down, create a node
on mouseMove clickno do
(
if p != undefined
then p.pos=worldPoint
else if lbutton do createPoint()
)
)
-- start the tool. No exit condition defined, so right-click to exit.
startTool PointCreator