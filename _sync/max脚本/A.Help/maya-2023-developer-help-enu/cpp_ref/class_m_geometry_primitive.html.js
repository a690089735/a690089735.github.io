var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MGeometryPrimitive Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_geometry_primitive.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MGeometryPrimitive Class Reference</h1>\n\
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
<div class=\"title\">MGeometryPrimitive Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Geometric-Data-MGeometry-.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Geometric Data (MGeometry)</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_geometry_primitive.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_geometry_primitive.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_geometry_primitive.html#friends\">Friends</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_geometry_primitive-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"MGeometryPrimitive is a class describes the topology used for accessing MGeometryData. \">MGeometryPrimitive</a> is a class describes the topology used for accessing <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\" title=\"This class allows storage of arbitrary data which is formated to be specifically suitable for usage u...\">MGeometryData</a>.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MGeometryPrimitive.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ae182ab6bcd18c718e2eec923ff9dde20\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20\">DrawPrimitiveType</a> { <br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a4a5321fdd80243f824b66756ccb549f4\">kInvalidIndexType</a> = 0, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a57a311fc6dd7498f2339ab45af414377\">kPoints</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a9808e481c6346dfc333afb4c52890ac9\">kLines</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a505d8b3b6fdcadeb908f49f661e66957\">kLineStrip</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a77bbbae9232e672917b31ff19338862a\">kLineLoop</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20aa2c70dd76c8172a9298334473c914304\">kTriangles</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a6f6fdd3e537134843d971d56257d1bfc\">kTriangleStrip</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a532cdfa40aeed0b199f5e364e871cf89\">kTriangleFan</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20a43eddf4744999050792731235f2a11c8\">kQuads</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20aa0706e5cde92ef24fdc1b15bc193e374\">kQuadStrip</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20acc108ad225e1e4fbcdd2d42397895608\">kPolygon</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20ac859406249b9dc4d6d7c772a35e6442e\">kMaxDrawPrimitiveTypeIndex</a>\n\
<br>\n\
 }<tr class=\"memdesc:ae182ab6bcd18c718e2eec923ff9dde20\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Specifies the data primitive type constructed by the indexing array.  <a href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae182ab6bcd18c718e2eec923ff9dde20\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a74829ca6ce9179e5bc978750f1b611d3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#a74829ca6ce9179e5bc978750f1b611d3\">MGeometryPrimitive</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:a74829ca6ce9179e5bc978750f1b611d3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_geometry_primitive.html#a74829ca6ce9179e5bc978750f1b611d3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a74829ca6ce9179e5bc978750f1b611d3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8cb898e566fd5f980afe34d5e0a559fe\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#a8cb898e566fd5f980afe34d5e0a559fe\">~MGeometryPrimitive</a> ()</td></tr>\n\
<tr class=\"memdesc:a8cb898e566fd5f980afe34d5e0a559fe\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_m_geometry_primitive.html#a8cb898e566fd5f980afe34d5e0a559fe\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8cb898e566fd5f980afe34d5e0a559fe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9daf68d761d48b661dab360616d4ad84\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#a9daf68d761d48b661dab360616d4ad84\">uniqueID</a> () const </td></tr>\n\
<tr class=\"memdesc:a9daf68d761d48b661dab360616d4ad84\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the per session unique identifier.  <a href=\"class_m_geometry_primitive.html#a9daf68d761d48b661dab360616d4ad84\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9daf68d761d48b661dab360616d4ad84\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a81289ee7c426a9a90718b1e6538d0b1e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20\">DrawPrimitiveType</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#a81289ee7c426a9a90718b1e6538d0b1e\">drawPrimitiveType</a> () const </td></tr>\n\
<tr class=\"memdesc:a81289ee7c426a9a90718b1e6538d0b1e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the data type for the data.  <a href=\"class_m_geometry_primitive.html#a81289ee7c426a9a90718b1e6538d0b1e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a81289ee7c426a9a90718b1e6538d0b1e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac9580a2ec3ad9690d0fb0ea0b3179fec\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ac9580a2ec3ad9690d0fb0ea0b3179fec\">elementCount</a> () const </td></tr>\n\
<tr class=\"memdesc:ac9580a2ec3ad9690d0fb0ea0b3179fec\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return element count.  <a href=\"class_m_geometry_primitive.html#ac9580a2ec3ad9690d0fb0ea0b3179fec\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac9580a2ec3ad9690d0fb0ea0b3179fec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abe112368fa2f44533515ab803a11ab34\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#a16b11be27a8e9362dd122c4d879e01ae\">MGeometryData::ElementType</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#abe112368fa2f44533515ab803a11ab34\">dataType</a> () const </td></tr>\n\
<tr class=\"memdesc:abe112368fa2f44533515ab803a11ab34\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return element data type.  <a href=\"class_m_geometry_primitive.html#abe112368fa2f44533515ab803a11ab34\">More...</a><br></td></tr>\n\
<tr class=\"separator:abe112368fa2f44533515ab803a11ab34\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad3b74abc0bab69f337c70783e73f5bef\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const void *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ad3b74abc0bab69f337c70783e73f5bef\">data</a> () const </td></tr>\n\
<tr class=\"memdesc:ad3b74abc0bab69f337c70783e73f5bef\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Retrieve a pointer to the internal data.  <a href=\"class_m_geometry_primitive.html#ad3b74abc0bab69f337c70783e73f5bef\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad3b74abc0bab69f337c70783e73f5bef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a648f2b26ed32214b41787ca6cf9f6ba6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a648f2b26ed32214b41787ca6cf9f6ba6\"></a>\n\
class&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>MGeometryLegacy</b></td></tr>\n\
<tr class=\"separator:a648f2b26ed32214b41787ca6cf9f6ba6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa01eb6c3bd79f19e738ec582567c060b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa01eb6c3bd79f19e738ec582567c060b\"></a>\n\
class&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>MVaryingParameter</b></td></tr>\n\
<tr class=\"separator:aa01eb6c3bd79f19e738ec582567c060b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3782e75e2e98084b56c9bc3e06147925\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3782e75e2e98084b56c9bc3e06147925\"></a>\n\
class&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>MHardwareRenderer</b></td></tr>\n\
<tr class=\"separator:a3782e75e2e98084b56c9bc3e06147925\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"MGeometryPrimitive is a class describes the topology used for accessing MGeometryData. \">MGeometryPrimitive</a> is a class describes the topology used for accessing <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\" title=\"This class allows storage of arbitrary data which is formated to be specifically suitable for usage u...\">MGeometryData</a>. </p>\n\
<p>Topology is specified as a set of index values which references into data elements in an <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\" title=\"This class allows storage of arbitrary data which is formated to be specifically suitable for usage u...\">MGeometryData</a>. Index values can be assumed to be stored in contiguous memory.</p>\n\
<p>A \"draw primitive type\" indicates the format of the indexing as follows:</p>\n\
<ul>\n\
<li>kPoint : individual unconnected points. </li>\n\
<li>kLine : individual unconnected line segments. </li>\n\
<li>kLineStrip : connected line strip. </li>\n\
<li>kLineLoop : closed line loop. </li>\n\
<li>kTriangle : filled triangle. </li>\n\
<li>kTriangleStrip : filled triangle strip. </li>\n\
<li>kTriangleFan : filled triangle fan </li>\n\
<li>kQuad : filled quadrilateral (quad). </li>\n\
<li>kQuadStrip : filled quad strip. </li>\n\
<li>kPolygon : filled N-sided polygon</li>\n\
</ul>\n\
<p>Internal Maya data which is passed to the user via this class is always assumed to be non-modifiable. <b>If modified, stability cannot be ensured.</b> </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a232\">dx11Shader/dx11Shader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#_a108\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">enum <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20\">DrawPrimitiveType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Specifies the data primitive type constructed by the indexing array. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a4a5321fdd80243f824b66756ccb549f4\"></a>kInvalidIndexType&#160;</td><td class=\"fielddoc\">\n\
<p>Default value is not valid. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a57a311fc6dd7498f2339ab45af414377\"></a>kPoints&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_POINTS in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a9808e481c6346dfc333afb4c52890ac9\"></a>kLines&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_LINES in OpenGL (individual unconnected line segments) </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a505d8b3b6fdcadeb908f49f661e66957\"></a>kLineStrip&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_LINE_STRIP in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a77bbbae9232e672917b31ff19338862a\"></a>kLineLoop&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_LINE_LOOP in OpenGL (non-filled, connected line segments) </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20aa2c70dd76c8172a9298334473c914304\"></a>kTriangles&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_TRIANGLES In OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a6f6fdd3e537134843d971d56257d1bfc\"></a>kTriangleStrip&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_TRIANGLE_STRIP in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a532cdfa40aeed0b199f5e364e871cf89\"></a>kTriangleFan&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_TRIANGLE_FAN in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20a43eddf4744999050792731235f2a11c8\"></a>kQuads&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_QUADS in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20aa0706e5cde92ef24fdc1b15bc193e374\"></a>kQuadStrip&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_QUAD_STRIP in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20acc108ad225e1e4fbcdd2d42397895608\"></a>kPolygon&#160;</td><td class=\"fielddoc\">\n\
<p>Corresponds to GL_POLYGON in OpenGL. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ae182ab6bcd18c718e2eec923ff9dde20ac859406249b9dc4d6d7c772a35e6442e\"></a>kMaxDrawPrimitiveTypeIndex&#160;</td><td class=\"fielddoc\">\n\
<p>Number of primitive types. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a74829ca6ce9179e5bc978750f1b611d3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"MGeometryPrimitive is a class describes the topology used for accessing MGeometryData. \">MGeometryPrimitive</a> to copy.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>The internal data pointer is copied and its reference count incremented. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8cb898e566fd5f980afe34d5e0a559fe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">~<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Destructor. </p>\n\
<p>Class destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9daf68d761d48b661dab360616d4ad84\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int uniqueID </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the per session unique identifier. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Unique data identifier. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a81289ee7c426a9a90718b1e6538d0b1e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ae182ab6bcd18c718e2eec923ff9dde20\">MGeometryPrimitive::DrawPrimitiveType</a> drawPrimitiveType </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the data type for the data. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Geometry data type. MGeometryPrimitive::kInvalid on error. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a234\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac9580a2ec3ad9690d0fb0ea0b3179fec\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">unsigned int elementCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return element count. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Element count. 0 is returned on error. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a252\">dx11Shader/dx11Shader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a111\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abe112368fa2f44533515ab803a11ab34\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#a16b11be27a8e9362dd122c4d879e01ae\">MGeometryData::ElementType</a> dataType </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return element data type. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Element type. <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#a16b11be27a8e9362dd122c4d879e01aea6645af16edc35c125c859c167c37e96d\" title=\"Invalid element type (default value) \">MGeometryData::kInvalidElementType</a> is returned on error. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a245\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad3b74abc0bab69f337c70783e73f5bef\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const void * data </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Retrieve a pointer to the internal data. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Void pointer to the data. Pointer is NULL on error. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a253\">dx11Shader/dx11Shader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a112\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGeometryPrimitive.h</li>\n\
<li>MGeometryPrimitive.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";