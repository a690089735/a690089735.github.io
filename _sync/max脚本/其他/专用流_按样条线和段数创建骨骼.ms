fn CreateBoneBySpline spl seg =
(
	width = (CurveLength spl 1)/4.0/seg --骨骼宽度,每段线长除以4
	posList = for i in 0 to 1 by (1.0/seg) collect pathInterp spl 1 i --四段,5个位置,加上了末端
	boneList = for i = 1 to (poseList.count-1) collect BoneSys.createBone posList[i] posList[i+1] (posList[i]+posList[i+1])
	endPos = boneList[boneList.count].transform;endPos.translation = posList[posList.count]
	append boneList BoneSys.createBone posList[posList.count] ([width,0,0]*) (posList[i]+posList[i+1])
)
spl = selection[1]
seg = 5
