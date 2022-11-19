try(destroydialog MovinZ1) catch()
rollout MovinZ1 "Move In Z1" width:200 height:50
(
   spinner move_sp "Move Value: " type:#worldunits range:[-1e9,1e9,0] fieldwidth:68 align:#center offset:[0,15]

	fn test = (x =box();point())
   on move_sp buttondown do 
   (
      print "down"
   )
   on move_sp changed val do
   (
	if not thehold.holding() do thehold.Begin()
-- 	   box()
	   test()
   )
   on move_sp entered arg can do 
   (
      if thehold.holding() do
      (
         if can then thehold.Cancel() 
         else thehold.Accept "CreateBoxes"
      )
   )
)
createdialog MovinZ1