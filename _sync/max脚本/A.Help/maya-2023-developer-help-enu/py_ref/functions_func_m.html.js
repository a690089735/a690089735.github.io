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
    py_ref_adsk_ref_toc.initNavTree(\'functions_func_m.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_m\"></a>- m -</h3><ul>\n\
<li>mainColor()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#a9bb988e1e154cc5b436ea9ec36c44bbd\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>makeCurrent()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a3dcdc521f9d31ee6c93eb9991e615549\">OpenMaya.MDGContext</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_container_node.html#a37c912fe9c78a3f772a3ec3935b3cca9\">OpenMaya.MFnContainerNode</a>\n\
</li>\n\
<li>makeFlagMultiUse()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ad72abeb07b65e58b6b00320171a532d9\">OpenMaya.MSyntax</a>\n\
</li>\n\
<li>makeFlagQueryWithFullArgs()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#af4b5049223515a8420fcc450fc637226\">OpenMaya.MSyntax</a>\n\
</li>\n\
<li>makeMultipleEndKnots()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html#a96adbd3f733c380e05330f29ea1d1de1\">OpenMaya.MFnNurbsCurve</a>\n\
</li>\n\
<li>makeNamepathAbsolute()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_namespace.html#ac3442c8b5575d4dd9b0ee5801b2d5f9f\">OpenMaya.MNamespace</a>\n\
</li>\n\
<li>makeObj()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_context_command.html#a9cb9e4307cb063b7bde39bd7bbc28c07\">OpenMayaUI.MPxContextCommand</a>\n\
</li>\n\
<li>manipToPlugConversion()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html#a0357de46e3f98616ba068d4c3a8bb3b9\">OpenMayaUI.MPxManipContainer</a>\n\
</li>\n\
<li>map()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a48ebccde7738ad2c3e1562ab4da88cbf\">OpenMayaRender.MIndexBuffer</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_vertex_buffer.html#a758bfa0d2a5f3d4d272f7b875f979831\">OpenMayaRender.MVertexBuffer</a>\n\
</li>\n\
<li>mask()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_clear_operation.html#adbf03ad1f7115685c392590043010fe7\">OpenMayaRender.MClearOperation</a>\n\
</li>\n\
<li>match()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#a4b19e0a2d39cfa53b384122dd2e20e9b\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>matchComponent()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#a927e6b6811e2bcaa7560e4789e022bc5\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>matchTransform()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_dag_path.html#ab2e403bca96b39766a63bccfd2ef616d\">OpenMaya.MDagPath</a>\n\
</li>\n\
<li>material()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a52a6706cd10ac4bb1feaf0947468b1f3\">OpenMayaUI.MPxSurfaceShapeUI</a>\n\
</li>\n\
<li>materialIsTextured()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_material.html#a28810df75cf66fc191877a3e51f1ce0c\">OpenMayaUI.MMaterial</a>\n\
</li>\n\
<li>materials()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#aefcd9f01835078b3d7e42ed08cab9e32\">OpenMayaUI.MPxSurfaceShapeUI</a>\n\
</li>\n\
<li>matrix()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_matrix_data.html#abd944f7231d79b652694d7b72f56ecbe\">OpenMaya.MFnMatrixData</a>\n\
</li>\n\
<li>maximumStride()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_varying_parameter.html#ad3858708c7d0f2a908cd41129f5c6b4d\">OpenMayaRender.MVaryingParameter</a>\n\
</li>\n\
<li>maxObjects()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a6f979ee670655eca860a76b1a758f1e1\">OpenMaya.MSyntax</a>\n\
</li>\n\
<li>maxTime()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html#abaacdce961576e5366be4a0cf1125bd7\">OpenMayaAnim.MAnimControl</a>\n\
</li>\n\
<li>mayaState()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_global.html#a78dd6b550aeb937750fd6a2a32a0d4ef\">OpenMaya.MGlobal</a>\n\
</li>\n\
<li>mayaVersion()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_global.html#aebff241cb4c67819156a26ffe9576974\">OpenMaya.MGlobal</a>\n\
</li>\n\
<li>merge()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_selection_list.html#a138c12937c0cb7d9f3a18547c3c99357\">OpenMaya.MSelectionList</a>\n\
</li>\n\
<li>mesh()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html#a246b98d8de1591a711a6ad319ec40995\">OpenMayaRender.MUIDrawManager</a>\n\
</li>\n\
<li>mesh2d()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html#abd18cea70fa3f68224e1aea84c1fb07c\">OpenMayaRender.MUIDrawManager</a>\n\
</li>\n\
<li>minimumBufferSize()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_extractor.html#a7ba48860b01cd6ead107deed072095b7\">OpenMayaRender.MGeometryExtractor</a>\n\
</li>\n\
<li>minObjects()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ae727f5912b908d9929a44cc5c605d97a\">OpenMaya.MSyntax</a>\n\
</li>\n\
<li>minTime()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html#a9f0d328c4d10b04c80f6f86b0d53b5a0\">OpenMayaAnim.MAnimControl</a>\n\
</li>\n\
<li>miscSelectionMask()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_global.html#a1f484e9ffda74146c485c0443d6bba14\">OpenMaya.MGlobal</a>\n\
</li>\n\
<li>modelViewMatrix()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#aaa563f0c24eee1d44b6602a94f0ec6a6\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>modifyVertexStream()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_vertex_buffer_mutator.html#a4582af950276eedeaefc07180081a5bf\">OpenMayaRender.MPxVertexBufferMutator</a>\n\
</li>\n\
<li>mouseButton()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_event.html#afa9c2967099e8dde34381ad9ef7d11db\">OpenMayaUI.MEvent</a>\n\
</li>\n\
<li>mouseDown()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#aceb002e2d9c161847a372a9de5135bf5\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>mousePosition()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#a67d52b2352ba8befe7ff496219f59ada\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>mouseRay()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#ab4380a75778cc00cb1cacfbfdda9faa9\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>mouseRayWorld()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#a5210bde2a12e9d735106c754d2a93645\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>mouseUp()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#a11904c4dd534f5e2fad7e9ebd21f4069\">OpenMayaUI.MPxManipulatorNode</a>\n\
</li>\n\
<li>moveNamespace()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_namespace.html#a65395b683086a52ae0078e44b6d232bb\">OpenMaya.MNamespace</a>\n\
</li>\n\
<li>multiPath()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#ad912b12415dd1a73dcc1018744ce755f\">OpenMayaUI.MDrawInfo</a>\n\
</li>\n\
<li>multipleDrawEnabled()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#ad9b50cfe96fe50a4790d880973b66066\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>multipleDrawPassCount()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#ae00be935dce408333455d41ecba04102\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>multiSampleCount()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_target_description.html#abfd7cea25cb4e7d309b5c4023e3a9ea3\">OpenMayaRender.MRenderTargetDescription</a>\n\
</li>\n\
<li>mutateIndexing()\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_index_buffer_mutator.html#aac12e7b5c922d502b8fe9ec89a21cf82\">OpenMayaRender.MPxIndexBufferMutator</a>\n\
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