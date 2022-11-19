--Toggles ProSequencer on/off

macroScript ProSequencer category:"JDBgraphics"  
(
	if (prosequencer==undefined) then
	(
		filein ((getdir #userScripts)+@"\ProSequencer\ProSequencer.ms")
	) else
	( 
		try ( 
			prosequencer.dispose()	
		) catch (
			prosequencer=undefined
		)
	)
)