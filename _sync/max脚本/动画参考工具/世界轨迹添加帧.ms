--或许可以作为层的实现.

-- mb=newTrackViewNode globalTracks "LineLayer" --#hidden --hidden不可见,可空
mb=newTrackViewNode videoPostTracks  "LineLayer" --#hidden --hidden不可见,可空
-- newTrackViewNode [ <maxtvnode> ] <name_string> [#hidden] --<maxtvnode>父节点 #hidden是否隐藏

addTrackViewController mb (bezier_float()) #frame

getpropnames mb
	
addNewKey mb.frame currentTime --or mb.val.controller
	
mb.val.keys --or mb.val.controller.keys

-- getpropnames trackViewNodes
-- while true do try(deleteTrackViewNode trackViewNodes.LineLayer)catch(exit)
-- while true do try(deleteTrackViewNode globalTracks globalTracks.LineLayer)catch(exit)
while true do try(deleteTrackViewNode videoPostTracks videoPostTracks.LineLayer)catch(exit)
-- deleteTrackViewNode [ <parent_maxtvnode> ] <maxtvnode>
	
-- 	setAppData--一个新的思路可能可以直接储存线列表