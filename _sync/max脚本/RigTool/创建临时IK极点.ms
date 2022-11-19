--根据选择的三个骨骼,建立一个IK目标

-- ap = $[1].transform.pos
-- bp = $[2].transform.pos
-- cp = $[3].transform.pos

-- ap = a.transform.pos --Bone1
-- bp = b.transform.pos --Bone2
-- cp = c.transform.pos --Bone3
-- point pos:(bp - ((ap + cp)/2 - bp)*2) dir:((ap + cp)/2 - bp)


--根据选择的两个骨骼,建立一个IK目标
-- ap = $[1].transform.pos
-- bp = $[2].transform.pos

-- tp = point pos:bp
-- ctrl = tp.rotation.controller = Orientation_Constraint()
-- ctrl.appendTarget $[1] 50.0
-- ctrl.appendTarget $[2] 50.0

-- pp = point transform:tp.transform

-- delete tp