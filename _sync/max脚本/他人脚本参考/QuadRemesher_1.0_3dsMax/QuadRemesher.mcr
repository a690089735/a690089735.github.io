-- Copyright (c) 2012-2019, EXOSIDE SARL
-- Author: Maxime Rouca

-- The Macro :
macroScript QuadRemesher
category:"Exoside"
tooltip:"Open QuadRemesher window..."
ButtonText:"QuadRemesh"
Icon:#("QuadRemesher",1)
(
	--format "UserScripts= %\n" (getDir #userScripts)
	fileIn ((getDir #userScripts)+"\\QuadRemesher\\QuadRemesher.ms")
)




