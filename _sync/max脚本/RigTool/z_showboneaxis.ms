-- Show Bone Axis
-- 2013/03/26 by SaiZyca (saizycaopera@myopera.com)
--for 3dsmax 2012 (should work above 5 )
--This tool can toggle the display axis for your bone collection.
--main function is based on showBoneAxis by M. Breidt (martin@breidt.net)

-- Declare by M. Breidt:
-- This code is released under "Quote ware" license:
--      If you use this tool in a production environment with a group of more than two people,
--      or have used it in the past under such conditions, then you are obliged to tell 
--      me (martin@breidt.net) about it and allow me to list that project title and your 
--      company name as a reference on my website http://scripts.breidt.net
	
rollout ShowBoneAxis_Rollout "ShowBoneAxis" width:162 height:240
(
	local AxisSize = 1
	local collectionlist = #()
	
	fn drawBoneAxis = 
	(
		gw.setTransform (matrix3 1)
		
		for obj in collectionlist where obj.boneEnable do (
			local len = AxisSize
			
			local m = obj.transform
			local o = m.translation

			local dx = [len,0,0] * m
			local dy = [0,len,0] * m
			local dz = [0,0,len] * m

			gw.setColor #line red
			gw.Polyline #(o,dx) false
			
			gw.setColor #line green
			gw.Polyline #(o,dy) false
		
			gw.setColor #line blue
			gw.Polyline #(o,dz) false
		) -- end: for obj
		
		gw.enlargeUpdateRect #whole
		gw.updateScreen()
	) -- end: fn drawLocalAxis 

	listbox list_collection "Bone Collection" pos:[7,9] width:150 height:8
	button btn_collect "Collect Bone" pos:[7,148] width:150 height:27
	checkbutton ckb_show "Bone Axis Toggle" pos:[7,182] width:150 height:27
	spinner spn_size "" pos:[69,217] width:67 height:16 range:[0.1,300,1]
	label lbl1 "Axis Size:" pos:[8,218] width:61 height:17
	
	on spn_size changed val do
	(
	AxisSize = val	

		)
		
	
	on btn_collect pressed do
	(
		collectionlist = #()
		collectionlist =  (for i in selection where (i.boneenable == true) collect i)
		collectionlistname = (for i in collectionlist collect i.name)
		list_collection.items = collectionlistname		

		)
	
	on ckb_show changed state do 
	(
		if state == true then registerRedrawViewsCallback drawBoneAxis
		else unregisterRedrawViewsCallback drawBoneAxis
		max views redraw		

		)
	
	on ShowBoneAxis_Rollout close do
	(
	unregisterRedrawViewsCallback drawBoneAxis

		)
	
	
)

CreateDialog ShowBoneAxis_Rollout 164 250