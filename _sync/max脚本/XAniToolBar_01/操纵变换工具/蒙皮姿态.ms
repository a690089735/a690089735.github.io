-- poses = for s in getcurrentselection() collect #(s.name,s.skinPos,s.skinRot,s.skinScale,s.skinScaleOrient)

for p in poses do 
(
	nd = getnodebyname p[1]
	nd.skinPos = p[2]
	nd.skinRot = p[3]
	nd.skinScale = p[4]
	nd.skinScaleOrient = p[5]
)