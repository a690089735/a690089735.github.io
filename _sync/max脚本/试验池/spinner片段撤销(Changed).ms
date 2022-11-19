try(destroydialog MovinZ) catch()
rollout MovinZ "Move In Z" width:200 height:50
(
   spinner move_sp "Move Value: " type:#worldunits range:[-1e9,1e9,0] fieldwidth:68 align:#center offset:[0,15]
   
   local moving_value = 0
   on move_sp buttondown do 
   (
      moving_value = 0
   )
   on move_sp changed val do
   (
      if not thehold.holding() do thehold.Begin()
      in coordsys local move selection [0,0, val - moving_value] 
      moving_value = val
   )
   on move_sp entered arg can do 
   (
      if thehold.holding() do
      (
         if can then thehold.Cancel() 
         else thehold.Accept "MovinZ"
      )
      move_sp.value = moving_value = 0
   )
)
createdialog MovinZ