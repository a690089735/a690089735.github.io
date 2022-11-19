--快速创建预览
-- for i = 1 to viewport.numViews do
-- (
-- 	viewport.activeViewport = 4
	filename = @"C:\Users\Administrator\Desktop\preview_"+i as string+@".avi"
	createPreview filename:filename percentSize:100 outputAVI:true fps:30 rndLevel:#smooth dspGeometry:true dspBones:false dspFrameNums:true dspParticles:false dspHelpers:false dspCameras:false dspLights:false dspShapes:false dspBkg:true
-- )
	

