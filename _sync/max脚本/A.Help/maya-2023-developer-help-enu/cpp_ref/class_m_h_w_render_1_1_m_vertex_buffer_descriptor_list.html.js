var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MVertexBufferDescriptorList Class Reference</title>\n\
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
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html\', tocPrefix);\n\
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
	  $(document).ready(cpp_ref_initializeToc);\n\
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
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: MVertexBufferDescriptorList Class Reference</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MVertexBufferDescriptorList Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Data-Classes.html\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Data Classes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Shader-Instances.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Shader Instances</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Geometry-Overrides.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Geometry Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Geometry-remapping-for-hardware.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Geometry remapping for hardware rendering</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Handling-custom-renderables-for.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Handling custom renderables for object overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>A list of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\" title=\"Describes properties of a vertex buffer. \">MVertexBufferDescriptor</a> objects.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MHWGeometry.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a85423795bb730a7b4baacbbff87fa92f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a85423795bb730a7b4baacbbff87fa92f\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a85423795bb730a7b4baacbbff87fa92f\">MVertexBufferDescriptorList</a> ()</td></tr>\n\
<tr class=\"memdesc:a85423795bb730a7b4baacbbff87fa92f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:a85423795bb730a7b4baacbbff87fa92f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac6b9555b62a351fa9f5fa2dcfb2d5a97\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac6b9555b62a351fa9f5fa2dcfb2d5a97\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#ac6b9555b62a351fa9f5fa2dcfb2d5a97\">~MVertexBufferDescriptorList</a> ()</td></tr>\n\
<tr class=\"memdesc:ac6b9555b62a351fa9f5fa2dcfb2d5a97\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:ac6b9555b62a351fa9f5fa2dcfb2d5a97\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a57b988236ee6a3a5e572d126d3fbccc1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">length</a> () const </td></tr>\n\
<tr class=\"memdesc:a57b988236ee6a3a5e572d126d3fbccc1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the number of descriptors in the list.  <a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a57b988236ee6a3a5e572d126d3fbccc1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab5970217cd80acac6aa900cc1daec6b8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#ab5970217cd80acac6aa900cc1daec6b8\">getDescriptor</a> (int index, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MVertexBufferDescriptor</a> &amp;desc) const </td></tr>\n\
<tr class=\"memdesc:ab5970217cd80acac6aa900cc1daec6b8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Gets the descriptor at the requested index and copies data into desc.  <a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#ab5970217cd80acac6aa900cc1daec6b8\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab5970217cd80acac6aa900cc1daec6b8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a15ee2483257013c2d74c36d7722ebc96\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a15ee2483257013c2d74c36d7722ebc96\">append</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MVertexBufferDescriptor</a> &amp;desc)</td></tr>\n\
<tr class=\"memdesc:a15ee2483257013c2d74c36d7722ebc96\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add a descriptor to the list.  <a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a15ee2483257013c2d74c36d7722ebc96\">More...</a><br></td></tr>\n\
<tr class=\"separator:a15ee2483257013c2d74c36d7722ebc96\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a55e7829fa8dd9554ef3cd1d99ad6b3e3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a55e7829fa8dd9554ef3cd1d99ad6b3e3\">removeAt</a> (int index)</td></tr>\n\
<tr class=\"memdesc:a55e7829fa8dd9554ef3cd1d99ad6b3e3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove a descriptor from the list and delete it.  <a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a55e7829fa8dd9554ef3cd1d99ad6b3e3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a55e7829fa8dd9554ef3cd1d99ad6b3e3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac8bb3912a3ce86b15842e79d0b421204\"></a>\n\
void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clears the list. <br></td></tr>\n\
<tr class=\"separator:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>A list of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\" title=\"Describes properties of a vertex buffer. \">MVertexBufferDescriptor</a> objects. </p>\n\
<p>A list of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\" title=\"Describes properties of a vertex buffer. \">MVertexBufferDescriptor</a> objects. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#_a165\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a446\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8h-example.html#_a39\">dx11Shader/dx11Shader.h</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__animated_material_2foot_print_node__geometry_override__animated_material_8cpp-example.html#_a82\">footPrintNode_AnimatedMaterial/footPrintNode_GeometryOverride_AnimatedMaterial.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__geometry_override_2foot_print_node__geometry_override_8cpp-example.html#_a71\">footPrintNode_GeometryOverride/footPrintNode_GeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_replicator_2geometry_replicator_8cpp-example.html#_a43\">geometryReplicator/geometryReplicator.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8h-example.html#_a13\">glslShader/GLSLShader.h</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#_a30\">rawfootPrintNode/rawfootPrintNode.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/tessellated_quad_2_tessellated_quad_geom_override_8cpp-example.html#_a54\">tessellatedQuad/TessellatedQuadGeomOverride.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a57b988236ee6a3a5e572d126d3fbccc1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int length </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the number of descriptors in the list. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The number of descriptors in the list </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a167\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__animated_material_2foot_print_node__geometry_override__animated_material_8cpp-example.html#a84\">footPrintNode_AnimatedMaterial/footPrintNode_GeometryOverride_AnimatedMaterial.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__geometry_override_2foot_print_node__geometry_override_8cpp-example.html#a73\">footPrintNode_GeometryOverride/footPrintNode_GeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_replicator_2geometry_replicator_8cpp-example.html#a45\">geometryReplicator/geometryReplicator.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a31\">rawfootPrintNode/rawfootPrintNode.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/tessellated_quad_2_tessellated_quad_geom_override_8cpp-example.html#a57\">tessellatedQuad/TessellatedQuadGeomOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab5970217cd80acac6aa900cc1daec6b8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool getDescriptor </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MVertexBufferDescriptor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>desc</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Gets the descriptor at the requested index and copies data into desc. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>The index of the descriptor to retrieve </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">desc</td><td>The descriptor to populate with the retrieved data</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True on success </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a168\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__animated_material_2foot_print_node__geometry_override__animated_material_8cpp-example.html#a86\">footPrintNode_AnimatedMaterial/footPrintNode_GeometryOverride_AnimatedMaterial.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__geometry_override_2foot_print_node__geometry_override_8cpp-example.html#a75\">footPrintNode_GeometryOverride/footPrintNode_GeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_replicator_2geometry_replicator_8cpp-example.html#a47\">geometryReplicator/geometryReplicator.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a33\">rawfootPrintNode/rawfootPrintNode.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/tessellated_quad_2_tessellated_quad_geom_override_8cpp-example.html#a58\">tessellatedQuad/TessellatedQuadGeomOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a15ee2483257013c2d74c36d7722ebc96\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool append </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MVertexBufferDescriptor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>desc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Add a descriptor to the list. </p>\n\
<p>Creates and stores a copy which is owned by the list.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">desc</td><td>The descriptor to add.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True on success </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a55e7829fa8dd9554ef3cd1d99ad6b3e3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool removeAt </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Remove a descriptor from the list and delete it. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>The index of the descriptor to remove</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True on success </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MHWGeometry.h</li>\n\
<li>MHWGeometry.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";