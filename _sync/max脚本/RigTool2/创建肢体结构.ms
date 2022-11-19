fn create_2seg_leg len:1 pos:[0,0,0] rot:(quat 0 0 0 1) parent:undefined wirecolor:orange name:"main" = 
(
	local
	psize = len*0.1,
	pos_list = #(  --p*len*rot+pos
		[0,0,1],
		[-0.020,0,0.575],
		[0.035,0,0.085],
		[-0.1,0,0.01],
		[-0.2,0,0],
		[0.1,0,0],
		[-0.05,-0.075,0],
		[-0.05,0.075,0]
	),
	nd = unsupplied,
	nd_list = for p in pos_list collect
	(
		nd = point size:psize pos:(p*len*rot+pos) wirecolor:wirecolor parent:nd centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:on--(p+pos)  constantscreensize:会导致z居中过远
		nd.showLinks = true
		--refBone.showLinksOnly = true
		nd
	)
	
	for i = 1 to 2 do nd_list[i].name = name+"_leg_"+i as string
	nd_list[3].name = name+"_foot"
	nd_list[4].name = name+"_toe"
	nd_list[5].name = name+"_sole"
	nd_list[6].name = name+"_heel"
	nd_list[7].name = name+"_string"-- 	cord strin--可表达为弦
	nd_list[8].name = name+"_arch"-- 	arch --可表达为弓
	nd_list[8].parent = nd_list[6]
	nd_list[7].box = nd_list[8].box = false
	
	nd_list
)
-- create_2seg_leg()

fn create_3seg_leg len:1 pos:[0,0,0] rot:(quat 0 0 0 1) parent:undefined wirecolor:orange name:"main" = 
(
	local
-- 	psize = len*0.1,
	pos_list = #(  --p*len*rot+pos
		[0,0,1],
		[0,-0.02,0.575],
		[0,0.075,0.25],
		[0,0.035,0.085],
		[0,-0.1,0.01],
		[0,-0.2,0],
		[0,0.1,0],
		[-0.075,-0.05,0],
		[0.075,-0.05,0]
	),
	nd = unsupplied,
	nd_list = for p in pos_list collect
	(
		nd = point size:10 pos:(p*len*rot+pos) wirecolor:wirecolor parent:nd centermarker:off axistripod:off cross:on Box:off constantscreensize:on drawontop:on--(p+pos)  constantscreensize:会导致z居中过远
		nd.showLinks = true
		--refBone.showLinksOnly = true
		nd
	)
	
	for i = 1 to 3 do nd_list[i].name = name+"_leg_"+i as string
	nd_list[4].name = name+"_foot"
	nd_list[5].name = name+"_toe"
	nd_list[6].name = name+"_sole"
	nd_list[7].name = name+"_heel"
	nd_list[8].name = name+"_arch"-- 	arch --可表达为弓
	nd_list[9].name = name+"_string"-- 	cord string--可表达为弦
	nd_list[9].parent = nd_list[7]
	
	nd_list
)
-- create_3seg_leg len:1
fn create_4seg_leg len:1 pos:[0,0,0] rot:(quat 0 0 0 1) parent:undefined wirecolor:orange name:"main" = 
(
	local
-- 	psize = len*0.1,
	pos_list = #(  --p*len*rot+pos
		[0,0,1],
		[0,-0.05,0.65],
		[0,0.075,0.35],
		[0,0,0.2],
		[0,0.025,0.085],
		[0,-0.1,0.01],
		[0,-0.2,0],
		[0,0.1,0],
		[-0.075,-0.05,0],
		[0.075,-0.05,0]
	),
	nd = unsupplied,
	nd_list = for p in pos_list collect
	(
		nd = point size:10 pos:(p*len*rot+pos) wirecolor:wirecolor parent:nd centermarker:off axistripod:off cross:on Box:off constantscreensize:on drawontop:on--(p+pos)  constantscreensize:会导致z居中过远
		nd.showLinks = true
		--refBone.showLinksOnly = true
		nd
	)
	
	for i = 1 to 4 do nd_list[i].name = name+"_leg_"+i as string
	nd_list[5].name = name+"_foot"
	nd_list[6].name = name+"_toe"
	nd_list[7].name = name+"_sole"
	nd_list[8].name = name+"_heel"
	nd_list[9].name = name+"_arch"-- 	arch --可表达为弓
	nd_list[10].name = name+"_string"-- 	cord string--可表达为弦
	nd_list[10].parent = nd_list[8]
	
	nd_list
)
-- create_4seg_leg len:1

-- fn create_3seg_leg pos:[0,0,1] dir:[0,1,0]parent:undefined wirecolor:orange name:"main" = 
-- (
-- 	local
-- 	len = pos[3],
-- 	rot = (quat (acos(dot dir [0,1,0])) (cross dir [0,1,0])),
-- 	bsize = len*0.1,
-- 	pos_list = #(  --p*len*rot+pos
-- 		[0,0,0],
-- 		[-0.020,0,-0.425],
-- 		[0.0789608,0,-0.74993],
-- 		[0.035,0,-0.915],
-- 		[-0.1,0,-0.99],
-- 		[-0.2,0,-1],
-- 		[0.1,0,-1],
-- 		[-0.05,-0.075,-1],
-- 		[-0.05,0.075,-1]
-- 	),
-- 	bn = undefined,
-- 	bn_list = for i = 1 to 8 collect
-- 	(
-- 		local
-- 		p1 = (pos_list[i]*len*rot+pos),p2 = (pos_list[i+1]*len*rot+pos)
-- 		nbn = BoneSys.createBone p1 p2 dir
-- 		nbn.parent = bn
-- 		bn = nbn
-- 	)
-- 	bn_list[9] = BoneSys.createBone (pos_list[9]*len*rot+pos) ([distance pos_list[9] pos_list[9] + bsize,0,0]*bn_list[8].transform) dir
-- 	bn_list[9].parent = bn_list[8]
-- 	bn_list.width = bn_list.height = bsize
-- 	for i = 1 to 3 do bn_list[i].name = name+"_leg_bn_"+i as string
-- 	bn_list[4].name = name+"_foot_bn"
-- 	bn_list[5].name = name+"_toe_bn"
-- 	bn_list[6].name = name+"_sole_bn"
-- 	bn_list[7].name = name+"_heel_bn"
-- 	bn_list[8].name = name+"_cord_bn"-- 	cord --可表达为弦
-- 	bn_list[9].name = name+"_arch_bn"-- 	arch --可表达为弓
-- 	bn_list[9].parent = bn_list[7]
-- 	
-- 	bn_list
-- )
-- create_3seg_leg()