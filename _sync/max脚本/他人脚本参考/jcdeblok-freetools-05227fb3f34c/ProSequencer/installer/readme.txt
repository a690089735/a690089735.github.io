Welcome to the readme of the ProSequencer script. The readme contains a list of the contents of the installer and some instructions on how to install the script.
You can install the mzp-file by dropping it onto any viewport, or by running it from the menu: MAXScript>>Run file...
If you want to check out the contents of the mzp-file yourself, you can unzip it just like a zip-file.

A message from the developer
	
	License: Freeware
	Support: Jonathan de Blok
	Contact: www.jdbgraphics.nl

name "ProSequencer"
description "Prosequencer is a camera/statesets sequencer"
version 1.991

The following files are copied to your system
	ProSequencer.ms >> $userScripts\ProSequencer\
	ProSequencer.mcr >> $userScripts\ProSequencer\
	lib\installed.ms >> $userScripts\ProSequencer\
	lib\deadline_preFrame.ms >> $userScripts\ProSequencer\
	lib\autoPass.ini >> $userScripts\ProSequencer\

If dropped on the viewport, the following scripts are executed
	ProSequencer.mcr
	ProSequencer.ms
	installed.ms
	deadline_preFrame.ms

If executed by the menu: MAXScript>>Run file... the following scripts are executed 
	ProSequencer.mcr
	ProSequencer.ms
	installed.ms
	deadline_preFrame.ms

