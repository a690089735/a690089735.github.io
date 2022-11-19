rootscene

custattributes.getdef rootscene 1

custAttributes.count rootscene

fn clean_ca x =
(
-- first we count up and display
	z=1
	c=1  
	while z !=undefined do
	(
		z = custattributes.getdef x c
		if z != undefined then
		(
			format "% %\n" z.name (custattributes.getdefdata z)
			c=c+1
		)
	)
-- then we count down and delete the ones that are undefined 
	while (c!=0) do
	(
		z = custattributes.getdef x c
		if z != undefined then
		(
			if  (custattributes.getdefdata z)==undefined then
			(
				custAttributes.delete x z
			)
		)
		c=c-1
	)
)

clean_ca(rootscene)
clean_ca(meditmaterials)
clean_ca(rootscene.Anim_Layer_Control_Manager)


fn deleteCustAttributeInstances ca_class = 
(
	cas = getclassinstances ca_class
	deleted = [cas.count, 0]
	for ca in cas do
	(
		owner = custattributes.getowner ca
		if isvalidobj owner do
		(
			n = finditem owner.custattributes ca
			if (n > 0) do 
			(
				deleteitem owner.custattributes n
				deleted[2] += 1
			)
		)
	)
	deleted
)
deleteCustAttributeInstances SimpleFaceData
/************* using ********************** 
deleteCustAttributeInstances SimpleFaceData
******************************************/


cas = getclassinstances SimpleFaceData
custattributes.getowner cas[1]
(rootscene).custattributes[3].type--.numFaces.id.name


for i = custAttributes.count rootscene to 1 by -1 do custAttributes.delete rootscene i --无差别清理,但是清不掉simplefacedata
