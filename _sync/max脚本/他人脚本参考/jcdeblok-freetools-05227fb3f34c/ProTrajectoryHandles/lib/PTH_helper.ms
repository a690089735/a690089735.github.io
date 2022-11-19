--This is part of ProTrajectory Handles script
--It's safe to modify the default helper looks in the 'on create' section
--Jonathan de Blok - www.jdbgraphics.nl

 
	plugin Helper PTH_helper name:"PTH_helper"  replaceui: false classId:#(8872500, 12324302) extends:Point 
	( 
		local parentID
		local parentHandleID
		local trg
		local vlen
		local lvlen
		local hind
		local sc = 1.0
		local ltvec = 1.0
		local pvlen = 1.0
		local ctrl
		local show_vel
		local type
		local hscale=1.0
		local lx=1
		local ly=1
		local lz=1
		local position2 = [0,0,0]
		local sanity=0
		local ktime =0
		local timehash=0
		local ch=0
		local stime = 0
		local etime = 0
		local tlen = 0
		local ktype = #custom			
		
		local	setBoxSize=(fn setBoxSize s = (
			this.point_helper.size=s
		)) 
		
		local	setColor=(fn setColor c = (
			this.wirecolor=c
		)) 
		
		on create do
		(	
			this.point_helper.size=1
			this.point_helper.centermarker = false
			this.point_helper.axistripod =false 
			this.point_helper.cross = false
			this.point_helper.box = true
			this.point_helper.constantscreensize = true
			this.point_helper.drawontop =true
		)
	)
 
 