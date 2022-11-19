--ÐèÇó,Ñ¡Ôñskin¹Ç÷À
fn getSkinBoneBySelection = 
(
	skinmod = selection[1].skin
	return (for i = 1 to (skinOps.getnumberbones skinmod) collect getnodebyname(skinOps.getBoneName skinmod i 0))
)