var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Skinning</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Skinning</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"skinning\"></a></div>\n\
<p>Skinning is the process of deforming a shape according to the transformation of joints or other influence objects. There are two types of skinning: smooth and rigid. Smooth skinning produces a skin that is smooth around joints as soon as it is bound and you can modify the weights to achieve more customized affects. Rigid skinning produces a skin that initially behaves as if it is parented to the attached joint. Either flexors can be added to produce smoothing around joints, or weights on the rigid jointCluster node can be modified for customized effects. The following table lists the differences between smooth skinning and rigid skinning.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.33333333333333%\" />\n\
<col width=\"33.33333333333333%\" />\n\
<col width=\"33.33333333333333%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Detail\n\
</th>\n\
<th class=\"table-heading\">\n\
Smooth Skinning\n\
</th>\n\
<th class=\"table-heading\">\n\
Rigid Skinning\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Node Type\n\
</td>\n\
<td class=\"table-body\">\n\
skinCluster\n\
</td>\n\
<td class=\"table-body\">\n\
jointCluster\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
API Type\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">MFn::kSkinCluster</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MFn::kJointCluster\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a7ed171bc0bc9f329160fbb2fda14769e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kJointCluster</a></span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
API function set\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MFnSkinCluster\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_skin_cluster.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSkinCluster</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MFnWeightGeometryFilter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_weight_geometry_filter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnWeightGeometryFilter</a></span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Influence objects\n\
</td>\n\
<td class=\"table-body\">\n\
Any type of transform\n\
</td>\n\
<td class=\"table-body\">\n\
Joints\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Number of deformers\n\
</td>\n\
<td class=\"table-body\">\n\
One per skin\n\
</td>\n\
<td class=\"table-body\">\n\
One per joint\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Number of weights\n\
</td>\n\
<td class=\"table-body\">\n\
Up to one per influence/per CV\n\
</td>\n\
<td class=\"table-body\">\n\
One per CV\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
MEL command to edit weights\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">skinPercent</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">Percent</span>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>The most significant difference is that rigid skinning produces a single jointCluster per joint. The jointCluster is then shared by all skins that are rigidly bound to the joint. Unlike rigid skinning, smooth skinning produces one skinCluster per skin, and all of the influences that affect that skin are connected to the skinCluster.</p>\n\
<p>Smooth skinning in general is easier and its algorithm is quicker to compute depending on the number of influences that are given weights.</p>\n\
<div class=\'section\'><a id=\"node-configuration-in-smooth-skinning\"></a><h2 id=\"node-configuration-in-smooth-skinning\">Node Configuration in Smooth Skinning</h2></div>\n\
<p>In smooth skinning, there is one skinCluster per skin. Unlike other deformers, you cannot modify the set membership of a skinCluster to add more skins. Each skin must have its own skinCluster. You can modify the set membership of a skinCluster by removing vertices, for example, if you want to skin only half of an object.</p>\n\
<p>In a skinCluster there can be any number of influence objects. The worldMatrix output of the influence objects are connected to the skinCluster&#39;s matrix attribute. The attribute logicalIndex of this connection is used by the skinCluster to correlate influences with their weights. The API method <span class=\'code\'>MFnSkinCluster::indexForInfluenceObject</span> enables you to query the skinCluster for determining the index of the associated influence object.</p>\n\
<p>The weights for the skinCluster are stored in the multi-multi attribute called weightList[].weights[]. The first index of the multi is the index of the vertex. The second is the index of the influence object. The weights are in general stored sparsely, so if you weigh a vertex by two of the 50 influence objects, only two elements exist in the weights array for that vertex. The exception is that if data exists in the data block and is later set to zero by some operation, the zero-valued data remains in the data block until the file is saved. When the file is saved, the file save code determines that the value zero is the default data, which does not need to be saved. The next time the file is read, only the non-zero valued elements will exist in the skinCluster.</p>\n\
<p>The transformation of the joints at the time of the bind is called the bindPose. The skinning algorithm uses this information to perform the deformation. The bindPose is stored in a node called the dagPose node. It is stored in detail by the skinning algorithm because the extra details are needed to help in restoring the bindPose.</p>\n\
<p>The dagPose node stores the worldMatrix for all of the influences at the time of the bind. It also stores the local matrix as a full transformation matrix (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_transformation_matrix.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTransformationMatrix</a></span>), and stores the parenting information. Only the worldMatrix is used by the skinning algorithm and is contained in the skinCluster node of the bindPreMatrix attribute. The bindPreMatrix is a multi-attribute that correlates its multi-index to the related influence object.</p>\n\
<p>For joints only, the bindMatrix is also stored in the bindPose attribute. The joint has some other bind-related attributes, but they are obsolete in Maya 4.0 and remain only for backward compatibility.</p>\n\
<p><strong>Algorithm</strong></p>\n\
<p>Each point P is assigned a set of weights {w1,w2,...,wn}. One weight for each of the <em>n</em> influence objects affecting the skin with the default weight value of zero. Typically, the following equation holds:</p>\n\
<p><em>w1 + w2 + ... + wn = 1.0</em></p>\n\
<p>If <em>Ti</em> is the current world transformation matrix of influence <em>i</em> and <em>Bi</em> is the world transformation matrix of the same influence at the time of the bind. If <em>W(p)</em> is the world position of <em>P</em> at the time of the bind, then <em>Li(p)</em> can be computed as the position of point <em>P</em> in the local coordinate system of influence <em>i</em> as shown in the following equation:</p>\n\
<p><em>Li(p) = Bi - 1 x W(p)</em></p>\n\
<p>You can then compute what the world position of the point will be if it is parented under transform <em>i</em> as shown in the following equation:</p>\n\
<p><em>Ni(p) = Ti x Li(p)</em></p>\n\
<p>You can multiply this world position by the corresponding weight for influence <em>i</em> and get <em>Mi(p)</em> as shown in the following equation:</p>\n\
<p><em>Mi(p) = wi x Ni(p)</em></p>\n\
<p>Now, add all the Mi(p) to get the deformed position of the point in world space as shown in the following equation:</p>\n\
<p><em>NewWorldPos(p) = M1(p) + M2(p) + ... + Mn(p)</em></p>\n\
<p>All the rotations happen at the joint/transform pivots and a linear interpolation is done using the weight to compute the final point positions.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";