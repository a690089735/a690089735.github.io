
fn oh2b objs:(getcurrentselection()) rank:false align:false =
animate off(
	local
	count = objs.count,
	tb = undefined
	for i = 1 to objs.count do
	(
		local 
		o = objs[i],
		bb = nodeGetBoundingBox o o.transform,
		size = (bb[2]-bb[1]),
		n = if rank then objs[i+1] else o.children[1],
		ntb = if isvalidnode n then BoneSys.createBone o.transform.pos (if isvalidnode n then n.transform.pos else [size,0,0] * o.transform) o.dir else BoneSys.createBone o.transform.pos ([size[1],0,0]*o.transform) o.dir 
		
		ntb.width = size[3];ntb.height = size[2];
		ntb.Taper = ntb.sidefinssize = ntb.frontfinsize = ntb.backfinsize = 0
		ntb.backfin = ntb.frontfin = ntb.sidefins = off
		
		if align do ntb.transform = o.transform
		ntb.parent = tb
		tb = ntb
	)
)
oh2b rank:false align:true 