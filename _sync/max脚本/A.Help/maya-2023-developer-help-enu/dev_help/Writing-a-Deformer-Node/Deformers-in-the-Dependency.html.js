var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Deformers in the Dependency Graph</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Deformers in the Dependency Graph</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"deformers-in-the-dependency-graph\"></a></div>\n\
<p>Deformers are placed in the construction history of a shape that is being deformed. The following figure shows a typical dependency graph including the deformers.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/deformer_dg.png\' title=\'\' /></div>\n\
<p>The deformed shape node (pSphereShape) is shown on the right of the dependency graph. The intermediate object (pSphereShapeOrig) is shown on the left of the dependency graph. The intermediate object is at the head of each chain of deformers, but is not displayed until you disable its intermediateObject attribute. The intermediate object acts as storage for the original undeformed positions of the shape.</p>\n\
<p>In a typical deformer chain, shape data flows out of the intermediate object and then flows through each of the deformers. In this example, the deformers that are traversed are highlighted in yellow: tweak1, cluster1, and ffd1. Only a single shape flows through ffd1. However, most deformers can operate on any number of shapes because the input and output geometry attributes of the deformer base class are multis. The two exceptions to this rule are the skinClusters and wrap node, which can operate on only a single geometry. Additional geometries connected to the skinCluster and wrap node are ignored.</p>\n\
<p>The dotted lines in the dependency graph indicate that some auxiliary nodes are not displayed. In this example, the auxiliary nodes are the groupParts nodes, which are used to store component lists for the deformer sets.</p>\n\
<div class=\'section\'><a id=\"deformers-and-sets\"></a><h2 id=\"deformers-and-sets\">Deformers and Sets</h2></div>\n\
<p>Each deformer is associated with a single set. It only deforms the points that are included in the associated set. If you add points to a set using the sets command, the deformer is automatically associated with the construction history of the shape. Similarly, if you remove the points from a set, the deformer stops acting on the removed points. The set used by the deformer is a vertex-restricted set that can only contain vertices. The easiest way to find the associated set of a deformer is using the <span class=\'code\'>MFnGeometryFilter::deformerSet</span> method. The returned set can then be used for creating an MFnSet, which can be used to access the membership information. The following code snippet provides an example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MFnGeometryFilter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_geometry_filter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnGeometryFilter</a> fnDeformer(defObject);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> setObject = fnDeformer.deformerSet();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnSet\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_set.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSet</a> fnSet(setObject);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a> members;\n\
    fnSet.getMembers(members,false);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItSelectionList</a> itr( members );\n\
    for (; !itr.isDone(); itr.next()) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> path;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> components;\n\
        itr.getDagPath(path, components);\n\
        …\n\
    }\n\
</pre></div><div class=\'section\'><a id=\"groupparts-node-and-groupid-node\"></a><h2 id=\"groupparts-node-and-groupid-node\">GroupParts Node and GroupId Node</h2></div>\n\
<p>Most sets in Maya consist of only the objectSet node. However, the component sets in Maya are stored within the shape data rather than within the objectSet node. The set is connected to a groupId node for each shape, and a groupParts node for each shape with construction history. By default, Maya hides the groupParts and the groupId nodes in the hypergraph because they clutter the view. You can turn on the display of auxiliary nodes to view the groupParts and groupId nodes. The following figure shows a hypergraph view of the groupParts, groupId, and objectSet nodes for an ffd deformer. The tweak nodes are deleted from the shape&#39;s history to make the hypergraph less cluttered.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/deformer_grpnodes.png\' title=\'\' /></div>\n\
<p>The groupId node stores an ID that is unique in a scene for quickly determining the membership of the set within the shape&#39;s list of sets. The groupParts node stores the component sets for shapes with construction history. As the shape data flows through the history, it might change its numbering. Component lists are stored using the vertex index and some construction history nodes modify the vertex numbering, for example, polySplit and deleteComponent. The groupParts node is not affected by the vertex numbering changes because it is in the construction history. The groupPart node receives the shape data before the vertices are renumbered. This architecture is useful in certain poly-modeling operations. However, it can cause issues in the following scenarios:</p>\n\
<ul>\n\
<li>If you modify the construction history ahead of a groupParts node, your set might no longer contain reasonable indices.</li>\n\
<li>If you modify the topology after a groupParts node, it can become difficult to edit the earlier weights or other details in the dependency graph that rely on a different indexing scheme.</li>\n\
</ul>\n\
<p>For example, consider that you have created a 10 x 10 polyPlane with history. You have selected the upper vertices in the plane, and then created a cluster. The cluster acts on the selected vertices, which are contained in its set. Now, you select the history node for the plane and modify the plane&#39;s number of divisions from 10 x 10 to 9 x 10. The membership of the cluster is now different than what you had originally specified. The following figure illustrates this example. The membership of the cluster that is created on a 10 x 10 plane is shown on the left and after the history is modified to 9 x 10 is shown on the right.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/deformer_mem.png\' title=\'\' /></div>\n\
<p>If you have spent significant time weighting vertices, this can be very inconvenient. To prevent this, you can follow a workaround, such as exporting the weight map before changing the topology, and then importing the weight map.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";