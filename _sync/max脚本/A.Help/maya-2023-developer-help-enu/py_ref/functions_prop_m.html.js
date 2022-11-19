var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: Class Members - Properties</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'functions_prop_m.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: Class Members - Properties</h1>\n\
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
      <li><a href=\"#!/url=./py_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions_prop.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_l.html#index_l\"><span>l</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_prop_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop_z.html#index_z\"><span>z</span></a></li>\n\
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
<li>manipScale\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_manip3_d.html#a030675ef85e2e08253f091046fbe6b58\">OpenMayaUI.MFnManip3D</a>\n\
</li>\n\
<li>material\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_request.html#a7aedfaad44ad5977ac1eb6ec7736b2df\">OpenMayaUI.MDrawRequest</a>\n\
</li>\n\
<li>matrix\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_geometry_data.html#aab04047add6b8d6b1c3ffd6a3b712486\">OpenMaya.MFnGeometryData</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_data.html#ab2d2c416af8bc8f94bd10facbcb10f14\">OpenMaya.MPxGeometryData</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_request.html#a9945ac06ab7eb3c4b8d96c1c8b3a8954\">OpenMayaUI.MDrawRequest</a>\n\
</li>\n\
<li>max\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_bounding_box.html#a5b210c0e9f67214b2e2bee4fea98f514\">OpenMaya.MBoundingBox</a>\n\
</li>\n\
<li>maxAnisotropy\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sampler_state_desc.html#a3fd972031b29baaffb1505a48178a61c\">OpenMayaRender.MSamplerStateDesc</a>\n\
</li>\n\
<li>maxLOD\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sampler_state_desc.html#ad29f8396117a87ab24ce31e57d1d50ea\">OpenMayaRender.MSamplerStateDesc</a>\n\
</li>\n\
<li>maxPoints\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#ad281777d03a04ca90836257103014c0a\">OpenMaya.MPxGeometryIterator</a>\n\
</li>\n\
<li>maxStates\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_state_manip.html#a399748672ab820387186be4b506f7d12\">OpenMayaUI.MFnStateManip</a>\n\
</li>\n\
<li>mCameraPath\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#af7c084233e79ad3eac330dca2748783d\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mClearOperation\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a6897265858f3d1284f8566aaa68c5ac2\">OpenMayaRender.MQuadRender</a>\n\
, <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_scene_render.html#a4e61eb90c05cd84de51966fd90a72062\">OpenMayaRender.MSceneRender</a>\n\
</li>\n\
<li>mFarClippingPlane\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#ad3863934d858538cc9f3b673a7901a7c\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mHiddenCameraList\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#a53c77bb59c2b43cdeb744e5f6ce9595b\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>min\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_bounding_box.html#aba743152e842747a48b1682d95d91e4c\">OpenMaya.MBoundingBox</a>\n\
</li>\n\
<li>minLOD\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sampler_state_desc.html#a3d060917b502e32fc686997ea21b5959\">OpenMayaRender.MSamplerStateDesc</a>\n\
</li>\n\
<li>mipLODBias\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sampler_state_desc.html#a470d1d9fb3b695abaa2cde9ce8952907\">OpenMayaRender.MSamplerStateDesc</a>\n\
</li>\n\
<li>mNearClippingPlane\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#aa18740630ce1843284c068304e26e6de\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>modifiers\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_event.html#aa55bba527509652023da8814b183d124\">OpenMayaUI.MEvent</a>\n\
</li>\n\
<li>mProjectionMatrix\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#a9037bffd04f64a1041da919e816fd670\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>multiPath\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_request.html#abebdd48435dd7f618d8508c7a074bcf5\">OpenMayaUI.MDrawRequest</a>\n\
</li>\n\
<li>multiSampleEnable\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_rasterizer_state_desc.html#a82ab6c596ae295fa1bc6ba95f70acf38\">OpenMayaRender.MRasterizerStateDesc</a>\n\
</li>\n\
<li>multiSampleMask\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_blend_state_desc.html#a837bf5d80382c0cf6c5d8d31e1cab015\">OpenMayaRender.MBlendStateDesc</a>\n\
</li>\n\
<li>mUseFarClippingPlane\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#a31cfdaca976b69422a66cde8a0f9d0c0\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mUseHiddenCameraList\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#ae5d39b09cf6d58659c082cbeafce26f4\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mUseNearClippingPlane\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#aee807a04d5574aaceaa117921b415c48\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mUseProjectionMatrix\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#a3cc6fe58191243625757ecc764a76b0a\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mUseViewMatrix\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#a3d28045c872b5c847324d54c48a5f39d\">OpenMayaRender.MCameraOverride</a>\n\
</li>\n\
<li>mViewMatrix\n\
: <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_camera_override.html#abc04b034e36c1dc90c33416f77182b7a\">OpenMayaRender.MCameraOverride</a>\n\
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