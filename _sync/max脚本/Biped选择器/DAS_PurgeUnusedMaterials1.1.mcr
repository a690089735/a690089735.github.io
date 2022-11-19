macroScript DAS_PurgeUnusedMaterials 
category:"DAS Tools"
ButtonText:"Purge Mats"
tooltip:"DAS Purge Materials"
icon:#("DASToolbar",19)
(
/*
By David Sparks, Digital Animation Services, April 2015.
email: david@digitalanimation.net
USE AT YOUR OWN RISK. Author assumes no responsiblility.
This script deletes all unused materials from the Compact Editor Material Slots AND the Slate Material Editor Views
The Compact Editor Code is from the existing Macro found under the Compact Material Editor "Utilities" menu.
I have added the code to also purge the SME at the same time.
*/

--Updates & Bug Fixes:	
--February, 2016: fixed error if Script is run and Slate Material Edior has never been opened.

	on execute do
	(
		--1st delete nodes in the compact editor. Works even if SME is set as current editor.
		-- This is the default "Reset" Macro found in the Compact Editor's "Utilities" menu
		
		defaultMtlLibFile = MeditUtilities.getDefaultLibraryFile()
		if defaultMtlLibFile != undefined do
		(
			defaultMtlLib = loadTempMaterialLibrary defaultMtlLibFile
			global _meditMaterialsBeforeReset = #()
			for i in 1 to meditMaterials.count do
			(	
				append _meditMaterialsBeforeReset meditMaterials[i]
				if i <= defaultMtlLib.count then
					meditMaterials[i] = defaultMtlLib[i]
				else
					meditMaterials[i] = defaultMtlLib[defaultMtlLib.count]
			)
		)

		--2nd. Now delete all nodes in the Slate Editor Views
		(
			smenmvs = sme.GetNumViews() -- note: this value will = 0 if the SME has never been opened
			if smenmvs != 0 then -- protect against this possibility
			(				
				for i in 1 to smenmvs do
				(
					smevws = sme.getView i
					smevws.selectall()
					smevws.deleteSelection()
				)
			)
		)
	)
)