-- special thanks to Joel Hewitt (a.k.a. Gravey) for circumcenter function
fn circumcenter p1 p2 p3 =
(
    BC = distance p2 p3
    CA = distance p3 p1
    AB = distance p1 p2

    baryCoords = [ (BC^2 * (CA^2 + AB^2 - BC^2)), (CA^2 * (AB^2 + BC^2 - CA^2)), (AB^2 * (BC^2 + CA^2 - AB^2)) ]
    triArea = baryCoords.x + baryCoords.y + baryCoords.z
    baryCoords /= triArea -- normalize the barycentric coordinates

    baryCoords.x * p1 + baryCoords.y * p2 + baryCoords.z * p3
)

struct pointData (id, pos)                            -- vertex number and position
struct pointPair (pointA, pointB, dist) -- 2 points and their distance from each other

allPoints = #()                                                    -- array for all object vertices
for i = 1 to $.numVerts do allPoints[i] = pointData id:i pos:(polyOp.getVert $ i)

-- find the two points that are furthest from each other
farPoints = pointPair dist:0
for i = 1 to allPoints.count do
(
    a = allPoints[i]
   
    for j = 1 to $.numVerts do
    (
        b = allPoints[j]
       
        if distance (a.pos) (b.pos) > farPoints.dist do
        (
            farPoints.pointA = a
            farPoints.pointB = b
            farPoints.dist = distance (a.pos) (b.pos)
        ) -- end if (distance (a.pos) (b.pos))
    ) -- end j loop
) -- end i loop

-- starting position and radius
sPos = ((farPoints.pointA.pos + farPoints.pointB.pos) / 2)
sRadius = ((distance farPoints.pointA.pos farPoints.pointB.pos) / 2)

theCenter = sPos
theRadius = sRadius

-- find vertices that fall outside the initial hypothetical sphere
outPoints = #()
fn getOutPoints =
(
    for i = 1 to allPoints.count do
    (
        if distance allPoints[i].pos theCenter > theRadius do append outPoints allPoints[i]
    )
)
getOutPoints()

--     For every set of 3 points,
--        if the distance between each of the 3 points is larger than the radial hypotenuse of theRadius,
--        find the circumcenter and radius for the 3 points.
--    If the radius of the 3 points is larger than the existing value of theRadius,
--        update the value of theRadius and theCenter
for i = 1 to outPoints.count do
(
    a = outPoints[i].pos

    for j = 1 to allPoints.count do
    (
        b = allPoints[j].pos
       
        if distance b a > (theRadius * sqrt 2) do
        (
            for k = 1 to allPoints.count do
            (
                c = allPoints[k].pos
               
                if distance c a > (theRadius * sqrt 2) and distance c b > (theRadius * sqrt 2) do
                (
                    circ = circumcenter a b c
                    r = distance circ a
                    if r > theRadius do
                    (
                        theRadius = r
                        theCenter = circ
                    ) -- end if (r > theRadius)
                ) -- end if (distance c)
            ) -- end k loop       
        ) -- end if (distance b)
    ) --end j loop
) -- end i loop


sphere pos:theCenter radius:theRadius