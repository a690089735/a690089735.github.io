-- skinOps.loadEnvelope $.skin ""

-- skinOps.bakeSelectedVerts <Skin> 

-- skinOps.blendSelected <Skin> 

  GetNumberVertices
  
  
  selectMirrorBones
  
  
  
¹¤¾ßº¯Êý
  <void>skinUtils.ExtractSkinData <node>node 	 
Extracts the skin data from the specified node.

   

<void>skinUtils.ImportSkinData <node>targetNode <node>sourceNode   
Transfers the skin data from the specified source node to the specified target node.

   

<matrix3 by value>skinUtils.GetBoneBindTM <node>skinNode <node>boneNode 
Transfers the skin data from the specified source node to the specified target node.

   

<void>skinUtils.SetBoneBindTM <node>skinNode <node>boneNode <matrix3 by value>tm 
Sets the Bone bind transformation for the specified skin and bone nodes to the supplied matrix3 value.

   

<matrix3 by value>skinUtils.GetMeshBindTM <node>skinNode 
Returns the Mesh bind transformation of the specified skin node as a matrix3 value.

   

<void>skinUtils.SetMeshBindTM <node>skinNode <matrix3 by value>tm 
Sets the Mesh bind transformation for the specified skin node to the supplied matrix3 value.

   

<matrix3 by value>skinUtils.GetBoneStretchTM <node>skinNode <node>boneNode 
Returns the Bone bind transformation of the specified skin and bone nodes as a matrix3 value.

   

<void>skinUtils.SetBoneStretchTM <node>skinNode <node>boneNode <matrix3 by value>tm 
Sets the Bone stretch transformation for the specified skin and bone nodes to the supplied matrix3 value.

   

<void>skinUtils.GrowSelection <node>node 
Grows the existing selection.

   

<void>skinUtils.ShrinkSelection <node>node 
Shrinks the existing selection.

   

<void>skinUtils.LoopSelection <node>node 
Selects a loop based on the existing selection.

   

<void>skinUtils.RingSelection <node>node 
Selects a ring based on the existing selection.