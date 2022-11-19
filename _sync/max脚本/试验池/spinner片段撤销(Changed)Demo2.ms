try(destroydialog MovinZ1) catch()
rollout MovinZ1 "Move In Z1" width:200 height:50
(
   spinner move_sp "Move Value: " type:#worldunits range:[-1e9,1e9,0] fieldwidth:68 align:#center offset:[0,15]

	fn test =
	(
		box()
	)
	
	on move_sp buttondown do 
	(
		print "down"
	)
	on move_sp changed val do
   (
		if not thehold.holding() do thehold.SuperBegin()
-- 		box()
	   test()
   )
	on move_sp entered arg can do 
	(
		if thehold.holding() do
		(
			if can then thehold.SuperCancel() 
			else thehold.SuperAccept "CreateBoxes"
		)
	)
)
createdialog MovinZ1



-- 由于以下,所以以上无效

/* How to Enable Undo and Redo
* The undo / redo system is managed by a global instance of the Hold class called theHold. To use the undo / redo system the developer must derive a class from RestoreObj and register an instance with the theHold using the method theHold::Put(). The class derived from RestoreObj saves the data needed to undo and redo the operation of the plug-in and to implement several methods required by 3ds Max.
* 
* Any operation that modifies the scene state should check to see if theHold is 'holding'. This means the 3ds Max undo system has had the Begin() method called. If theHold is not 'holding' and the code is UI code, the developer should call theHold. Begin(). This signals the start of a potential undo operation. Otherwise, non-UI code does not need to check to see if theHold is holding before calling theHold. Begin(). The hold system knows how to deal with nested Begin/Accept calls.
* 
* Methods exposed using the function publishing system should not call theHold. Begin(). Otherwise, if the caller has not called theHold. Begin(), each call to the method would create an undo entry, but other operations being done by the caller would not.
* 
* If theHold is holding, any operation that modifies the scene state must register a restore object with the system before it modifies the scene state.
* 
* Note that you should check to make sure you are holding before creating a RestoreObj and Putting it to the hold system. Otherwise, you may try to do a Put when not holding, causing a memory violation.
* 
* For the difference between a set of nested Begin/Accepts and a SuperBegin/Begin/Accept/SuperAccept consider the following pseudo-code examples:
* 
* Begin
*   Put( a )
*   Begin
*     Put( b )
*   Cancel
*   Put( c )
* Accept
* and
* 
* SuperBegin
*   Put ( a )
*   Begin
*     Put ( b )
*   Cancel
*   Put ( c )
* SuperAccept
* In the first example, the Cancel call deletes both RestoreObjs A and B. In the second, only RestoreObj B is deleted. The only time you need to use SuperBegin is when you have a multistage operation, and individual stages of the operation may be cancelled without cancelling the entire operation.*/
