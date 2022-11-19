var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: Class Members - Functions</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'functions_func_n.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(py_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script>\n\
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Python API 2.0 Reference: Class Members - Functions</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Packages</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"py_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"py_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>All</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions_func.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_z.html#index_z\"><span>z</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_n\"></a>- n -</h3><ul>\n\
<li>name()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_attribute_pattern.html#a9b0a825d5c625fb78ee64b8960a48287\">OpenMaya.MAttributePattern</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#af48471fbe7f15f19c499b1fcc3295700\">OpenMaya.MFnDependencyNode</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin.html#a1c5c465c06e278c8c5b9a5c95610b71f\">OpenMaya.MFnPlugin</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#a7690c8e375e9e702c58c94ef09c40b5c\">OpenMaya.MPlug</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_data.html#a15d596bed3d658719baf2b602f877b14\">OpenMaya.MPxData</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_node.html#af35e9a723ae6ca48453e7dbe4d1029b8\">OpenMaya.MPxNode</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_h_u_d_render.html#ab93c2f5bc9267989646efeda728fc656\">OpenMayaRender.MHUDRender</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_item.html#ae87844972dcd7b93bf52cf2091f9fbdc\">OpenMayaRender.MRenderItem</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#aa72e8b9332e8afbdd56b107a10dd8df2\">OpenMayaRender.MRenderOperation</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a771acea12d94d64780f6a25d87e7786e\">OpenMayaRender.MRenderOverride</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_target_description.html#a4fdf0c6392c008ec3c68bbdaa280b1d4\">OpenMayaRender.MRenderTargetDescription</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_texture.html#a922cf7d0a4b67199f34fba31c7b6a066\">OpenMayaRender.MTexture</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_uniform_parameter.html#ac45fef3892d4b1220af579892798da4b\">OpenMayaRender.MUniformParameter</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_varying_parameter.html#a9113490e7e129dcd0998336f6ea0eeae\">OpenMayaRender.MVaryingParameter</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_panel_canvas_info.html#ae34974e395853990cdc1822e66d7387c\">OpenMayaUI.MPanelCanvasInfo</a>\n\
</li>\n\
<li>namespaceExists()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_namespace.html#a950a6b92f5ecd8e2b387750df3ff9c83\">OpenMaya.MNamespace</a>\n\
</li>\n\
<li>needEvaluateAllLights()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_renderer.html#a5c369da828f6c7d9eb4c09ee2e292ae4\">OpenMayaRender.MRenderer</a>\n\
</li>\n\
<li>negateIt()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_quaternion.html#a9f8cf19ca6db7212e8079620e8295be1\">OpenMaya.MQuaternion</a>\n\
</li>\n\
<li>newControlPointComponent()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#afe286fde4b1caaa9e66eaf20a84936e8\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>newManipulator()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html#a41f64158394158738c2a31f52275d91a\">OpenMayaUI.MPxManipContainer</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#a8f308fce01f2595ab8ef9500d40372ab\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>newPlugValue()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a480b1bf28cced737ac83a908585e631e\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueBool()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#ad77a8743e277abbcee8446c25c0a0628\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueChar()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#aa59099ea6b5f2389efa90a0e33aa39e5\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueDouble()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a676a6b91b7da82ec14a276c2b2ca6fa9\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueFloat()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#ab091f28302a105880518ae4ee4fa9af4\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueInt()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a722430c38053fbb27bb0cb5d077933ca\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueMAngle()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#aa6140f5fcc8bd6738f3f4fa58c95d1eb\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueMDistance()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#acc22bfa9c0b8bf437cad5fbe2439764b\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueMTime()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#ad4fbedf4fdb60dbb6815605e9b62bb19\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueShort()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a2aa47aa2b6a69f4cd6e70fc72d8e064a\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newPlugValueString()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#ad50f0cfe40881c514e76c3c7f0de495b\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>newToolCommand()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_context.html#a8e65ca6ff1d97d4b49ac94897462dc72\">OpenMayaUI.MPxContext</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_selection_context.html#a66aaf54884c1cb1a7298b1caebd2c142\">OpenMayaUI.MPxSelectionContext</a>\n\
</li>\n\
<li>next()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_array_data_handle.html#a56dd5903062b122ebbc28456e4c536c1\">OpenMaya.MArrayDataHandle</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_evaluation_node_iterator.html#a10e7373daa1baf87b5d91be402c3304b\">OpenMaya.MEvaluationNodeIterator</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_curve_c_v.html#a9d30213bcdc57544be26151eaea220a9\">OpenMaya.MItCurveCV</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_dag.html#a7e119c3d34279c19f6f26780981f39b9\">OpenMaya.MItDag</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_dependency_graph.html#a719acd3a680691cf8df481599adb242a\">OpenMaya.MItDependencyGraph</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_dependency_nodes.html#aa300a9fc45cbb4a414ebf91a0b13b50b\">OpenMaya.MItDependencyNodes</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_geometry.html#a0ece6fcd656681b2b8d2a19fd79fbab3\">OpenMaya.MItGeometry</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_edge.html#adaca350cae24fdfe4b43337d791e077d\">OpenMaya.MItMeshEdge</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html#a5ccf3301c2ee9dfd3cb0d58fa57dcb78\">OpenMaya.MItMeshFaceVertex</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#a9bc60c4093ba752a3f625a2ffecdff9f\">OpenMaya.MItMeshPolygon</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a558efb22bbdd44a87713c2bc3f1401b2\">OpenMaya.MItMeshVertex</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a0eaff1cda8d51a94aac10ce5d6eb213b\">OpenMaya.MItSelectionList</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_surface_c_v.html#ac84ce6f5a4e10b12b26720c164e1bed0\">OpenMaya.MItSurfaceCV</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#ac808384600efb2072ac4993606312818\">OpenMaya.MPxGeometryIterator</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#a1b2cc9fc25556cccc61e0cfbc461e9d2\">OpenMayaRender.MSubSceneContainerIterator</a>\n\
</li>\n\
<li>nextRenderOperation()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#aa727aeb5624e4eb69ad659fc35d6be15\">OpenMayaRender.MRenderOverride</a>\n\
</li>\n\
<li>nextRow()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_surface_c_v.html#ac7fabf67de92a259f97cb8362e78b698\">OpenMaya.MItSurfaceCV</a>\n\
</li>\n\
<li>node()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_dag_path.html#a34b606120f12457f3128057a7b4740e3\">OpenMaya.MDagPath</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#a5801b68c8d99cdc73d68947611862bb7\">OpenMaya.MPlug</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_swatch_render_base.html#ad8181c244da85c8bf4b6bbe66f5258f1\">OpenMayaRender.MSwatchRenderBase</a>\n\
</li>\n\
<li>nodeCallbacks()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#a256cc9181fe7c42d43962bf4f263cac2\">OpenMaya.MMessage</a>\n\
</li>\n\
<li>nodes()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_reference.html#a796d0ab534f7f2948e7c54f477c4601d\">OpenMaya.MFnReference</a>\n\
</li>\n\
<li>nonTexturedShaderInstance()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#a4a0a491142830a1b163d4928d5b1638b\">OpenMayaRender.MPxShaderOverride</a>\n\
</li>\n\
<li>normal()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_vector.html#a164284459b235a6359055cbec5e256b6\">OpenMaya.MFloatVector</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html#a214c81a745ee9c7b57d8219b95430ec2\">OpenMaya.MFnNurbsCurve</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#ac959bc197998dd2031760f9c11cf2f76\">OpenMaya.MFnNurbsSurface</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_geometry.html#a141384cd30d0aae2bb294ec8214db8cd\">OpenMaya.MItGeometry</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plane.html#ad9fc032fd9df311660ed1fae6114803e\">OpenMaya.MPlane</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_quaternion.html#a0d464e91ae2ab16bd3ae1502d2830bcc\">OpenMaya.MQuaternion</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_vector.html#a1c1a3c382185816a2891381c4ec6d144\">OpenMaya.MVector</a>\n\
</li>\n\
<li>normalId()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html#a6a746433a6c124adadca6fb98a318620\">OpenMaya.MItMeshFaceVertex</a>\n\
</li>\n\
<li>normalIndex()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#ad6cb8e76a020f9318fdfa74810ffabf7\">OpenMaya.MItMeshPolygon</a>\n\
</li>\n\
<li>normalize()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_vector.html#a6d0e07833d4d1ae66fd50fee16c99208\">OpenMaya.MFloatVector</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_vector.html#aa0a1085c16fd829e1d1e5e0a59e38594\">OpenMaya.MVector</a>\n\
</li>\n\
<li>normalizeIt()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_quaternion.html#a6793018341e24f0373119284e5d14694\">OpenMaya.MQuaternion</a>\n\
</li>\n\
<li>normalsPerVertex()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#a1f0c20a8e6cce74ac93ea2a92769b4ae\">OpenMayaUI.MPxHwShaderNode</a>\n\
</li>\n\
<li>numActiveColors()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#ad9084f48c2260523546401bef97d64ed\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>numberOf3dViews()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a53413bcc48145546de632818a9ff7a0d\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>numberOfActiveLights()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_context.html#aa33db2f3e017ef9e47bc7cd4840effbc\">OpenMayaRender.MDrawContext</a>\n\
</li>\n\
<li>numberOfFlagUses()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_arg_parser.html#a5bae27e5d2ce93fdc4aecc52ef292e73\">OpenMaya.MArgParser</a>\n\
</li>\n\
<li>numberOfRenderers()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_profile.html#ab630addba4ea5e52cd580875ca587d8c\">OpenMayaRender.MRenderProfile</a>\n\
</li>\n\
<li>numberOfShapesDirectlyBelow()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_dag_path.html#a921a80044bcb0ac4c3b7c4e3cd688936\">OpenMaya.MDagPath</a>\n\
</li>\n\
<li>numBoundaries()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#a08d17af2e473d38e321ebf90d39f327e\">OpenMaya.MFnNurbsSurface</a>\n\
</li>\n\
<li>numChildren()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_compound_attribute.html#af9729fadd27355396615f07701b6bbe6\">OpenMaya.MFnCompoundAttribute</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#a2a7e6d9bcbf2917136d7ac70355a91f9\">OpenMaya.MPlug</a>\n\
</li>\n\
<li>numColors()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#ae9202460ab4ba64ae0bcd561e02ec7e0\">OpenMaya.MFnMesh</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#afdf67014272c0d9b30fa89b3725ca07c\">OpenMaya.MItMeshPolygon</a>\n\
</li>\n\
<li>numColumns()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_uniform_parameter.html#aed15e49ec305648c63d6f95fb45fcbb2\">OpenMayaRender.MUniformParameter</a>\n\
</li>\n\
<li>numConnectedChildren()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#af6f583a578beae85a8f4d38be696aa44\">OpenMaya.MPlug</a>\n\
</li>\n\
<li>numConnectedEdges()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_edge.html#a9960d33421dc81ab918b18ee24546abd\">OpenMaya.MItMeshEdge</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#aad309f197e13b280e01f3df7da29b6f7\">OpenMaya.MItMeshPolygon</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a72732faec40d16fd0d6de54558843fe3\">OpenMaya.MItMeshVertex</a>\n\
</li>\n\
<li>numConnectedElements()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#a1920cbca85d481758e61acd65d41f63f\">OpenMaya.MPlug</a>\n\
</li>\n\
<li>numConnectedFaces()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_edge.html#ab533a8dbfa79491617a489c6b48a0fb7\">OpenMaya.MItMeshEdge</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#a3a8eb8c8e6e93d601ee8db0f36f7b976\">OpenMaya.MItMeshPolygon</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a567ee4896bc59d43f06ffaaec5ef2ff0\">OpenMaya.MItMeshVertex</a>\n\
</li>\n\
<li>numDormantColors()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a7638ffb80398e64295359294f9174ba2\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>numEdges()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#ae3392be7664c408d4b9cdffa23810997\">OpenMaya.MFnNurbsSurface</a>\n\
</li>\n\
<li>numElements()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#aff06d0ee02928886f0a3e4b9bdaccd71\">OpenMaya.MPlug</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_uniform_parameter.html#a84a931e437cd7989a98141ed2d9c38e2\">OpenMayaRender.MUniformParameter</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_varying_parameter.html#a20709f32e6fdce9192ff3a27a2c078b1\">OpenMayaRender.MVaryingParameter</a>\n\
</li>\n\
<li>numEntries()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ac0402eb2734084768465a283156d92e6\">OpenMaya.MRampAttribute</a>\n\
</li>\n\
<li>numericType()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_data_handle.html#a9a78b576fed51c40020ff73dd8c92e8c\">OpenMaya.MDataHandle</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html#a681da5ec659737d736c5c7353f7532a2\">OpenMaya.MFnNumericAttribute</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_numeric_data.html#ae747805392f46aba0a00477cccf922a5\">OpenMaya.MFnNumericData</a>\n\
</li>\n\
<li>numOutputConnections()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_geometry_filter.html#af9a401ea56a62aaf461f71396e633678\">OpenMayaAnim.MFnGeometryFilter</a>\n\
</li>\n\
<li>numRows()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_uniform_parameter.html#aa0836ae033db7c2112306e55530736a9\">OpenMayaRender.MUniformParameter</a>\n\
</li>\n\
<li>numTriangles()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#a3f03e60d9b58310a767137ea7db46d7d\">OpenMaya.MItMeshPolygon</a>\n\
</li>\n\
<li>numUserDefinedColors()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a8571861898d36e7cc4063032df81007b\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>numUVs()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#a496644b8583e41acf55f4332803f9618\">OpenMaya.MFnMesh</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a7c4c113fff0ef693a777da6e7785d38f\">OpenMaya.MItMeshVertex</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";