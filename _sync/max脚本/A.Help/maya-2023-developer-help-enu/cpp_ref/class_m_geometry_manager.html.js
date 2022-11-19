var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MGeometryManager Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_geometry_manager.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MGeometryManager Class Reference</h1>\n\
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
<div class=\"title\">MGeometryManager Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Geometric-Data-MGeometry-.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Geometric Data (MGeometry)</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_geometry_manager.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_geometry_manager.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_geometry_manager-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This class provides methods for managing MGeometry resources.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MGeometryManager.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a5f45789e2294fc128af5b04595d96505\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505\">GeometricShape</a> { <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505acb4a5f68a3b6cd8c05b1dc9c5a487c88\">kDefaultSphere</a> = 0, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505a184eac47c82e5c13dd2dd52420cbf89f\">kDefaultPlane</a>, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505a86db3fcd02f093aba91aa87457074701\">kDefaultCube</a>\n\
 }<tr class=\"memdesc:a5f45789e2294fc128af5b04595d96505\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default geometry shapes.  <a href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5f45789e2294fc128af5b04595d96505\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ab916afd241d4060ea579ddaee41e5862\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#ab916afd241d4060ea579ddaee41e5862\">getGeometry</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;shape, const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\">MGeometryRequirementsLegacy</a> &amp;requirements, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> *components=NULL)</td></tr>\n\
<tr class=\"memdesc:ab916afd241d4060ea579ddaee41e5862\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Access the Geometry cache for a shape.  <a href=\"class_m_geometry_manager.html#ab916afd241d4060ea579ddaee41e5862\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab916afd241d4060ea579ddaee41e5862\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acd13b8ee8e78f0238fb7968af1e35e80\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\">MGeometryList</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#acd13b8ee8e78f0238fb7968af1e35e80\">referenceDefaultGeometry</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505\">MGeometryManager::GeometricShape</a> geomShape, const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\">MGeometryRequirementsLegacy</a> &amp;requirements)</td></tr>\n\
<tr class=\"memdesc:acd13b8ee8e78f0238fb7968af1e35e80\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Obtain a reference to geometry for some \"default\" shapes maintained by the manager such that the geometry returned will match a set of geometric requirements (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\" title=\"MGeometryRequirementsLegacy stores the collection of MGeometryRequirementsData arrays which describe ...\">MGeometryRequirementsLegacy</a>).  <a href=\"class_m_geometry_manager.html#acd13b8ee8e78f0238fb7968af1e35e80\">More...</a><br></td></tr>\n\
<tr class=\"separator:acd13b8ee8e78f0238fb7968af1e35e80\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af5a7f7bce62d712ed57586e6cf9c43f0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#af5a7f7bce62d712ed57586e6cf9c43f0\">dereferenceDefaultGeometry</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\">MGeometryList</a> *data)</td></tr>\n\
<tr class=\"memdesc:af5a7f7bce62d712ed57586e6cf9c43f0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This is the companion method to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#acd13b8ee8e78f0238fb7968af1e35e80\" title=\"Obtain a reference to geometry for some &quot;default&quot; shapes maintained by the manager such that the geom...\">referenceDefaultGeometry()</a> and must always be called immediately after usage of data supplied by the reference call.  <a href=\"class_m_geometry_manager.html#af5a7f7bce62d712ed57586e6cf9c43f0\">More...</a><br></td></tr>\n\
<tr class=\"separator:af5a7f7bce62d712ed57586e6cf9c43f0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_geometry_manager.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>This class provides methods for managing MGeometry resources. </p>\n\
<p>It provides an interface for loading and using hardware textures. </p>\n\
</div><h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a5f45789e2294fc128af5b04595d96505\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">enum <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505\">GeometricShape</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Default geometry shapes. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5f45789e2294fc128af5b04595d96505acb4a5f68a3b6cd8c05b1dc9c5a487c88\"></a>kDefaultSphere&#160;</td><td class=\"fielddoc\">\n\
<p>Sphere with radius 1, centered at 0,0,0. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5f45789e2294fc128af5b04595d96505a184eac47c82e5c13dd2dd52420cbf89f\"></a>kDefaultPlane&#160;</td><td class=\"fielddoc\">\n\
<p>Plane with width and height of 1, centered at 0,0,0. </p>\n\
<p>Assuming \"Y-Up\" orientation: width = x-axis, and height = y-axis. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5f45789e2294fc128af5b04595d96505a86db3fcd02f093aba91aa87457074701\"></a>kDefaultCube&#160;</td><td class=\"fielddoc\">\n\
<p>Cube with width, height and depth of 1, centered at 0,0,0. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab916afd241d4060ea579ddaee41e5862\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> getGeometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>shape</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\">MGeometryRequirementsLegacy</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>requirements</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>components</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Access the Geometry cache for a shape. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">shape</td><td>the surface </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">requirements</td><td>the surface data you want in the cache. Attempting to access cache data not included in the requirements will fail. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">components</td><td>an optional component group, for accessing a sub-selection of faces (e.g. the faces assigned to a material)</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The cached geometry. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acd13b8ee8e78f0238fb7968af1e35e80\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\">MGeometryList</a> * referenceDefaultGeometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505\">MGeometryManager::GeometricShape</a>&#160;</td>\n\
          <td class=\"paramname\"><em>geomShape</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\">MGeometryRequirementsLegacy</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>requirements</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Obtain a reference to geometry for some \"default\" shapes maintained by the manager such that the geometry returned will match a set of geometric requirements (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\" title=\"MGeometryRequirementsLegacy stores the collection of MGeometryRequirementsData arrays which describe ...\">MGeometryRequirementsLegacy</a>). </p>\n\
<p>The actual form is a geometric iterator (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\" title=\"This class holds the set of data elements which represent a Maya surface. \">MGeometryList</a>), which can be used to iterate over the internal data kept (MGeometry).</p>\n\
<p>Note that all data is assumed to be \"read-only\", as <b>the data is not owned by the caller</b>. To maintain proper reference counting of internal data, the user <b>must</b> \"deference\" the data when no longer using it via the MGeometryManager::dereferenceGeometry() calls. It is recommended to immediately dereference the data after each use. There is negligable overhead to reference and dereference data in this manner.</p>\n\
<p>Available default shapes include:</p>\n\
<ul>\n\
<li><b>A polygonal sphere</b> : Sphere has radius of 1 and is centered at the origin (0,0,0) in object space. </li>\n\
<li><b>A polygonal cube</b> : Cube has dimensions of 1 and is centered at the origin (0,0,0) in object space. </li>\n\
<li><b>A polygonal plane</b> : Plane has dimensions of 1 is centered at the origin (0,0,0) in object space. Assuming \"Y-Up\" orientation, the width is the along the x-axis and the height is along the y-axis.</li>\n\
</ul>\n\
<p>The following is an example usage via a hardware shader plugin for swatch rendering:</p>\n\
<div class=\"fragment\"><div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up a NULL path</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> path;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the requirements from the hardware shader</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\">MGeometryRequirementsLegacy</a> requirements;</div>\n\
<div class=\"line\">    populateRequirements(path, requirements);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Ask for a default sphere</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505\">MGeometryManager::GeometricShape</a> shape = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#a5f45789e2294fc128af5b04595d96505acb4a5f68a3b6cd8c05b1dc9c5a487c88\">MGeometryManager::kDefaultSphere</a>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\">MGeometryList</a>* geomIter = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#acd13b8ee8e78f0238fb7968af1e35e80\">MGeometryManager::referenceDefaultGeometry</a>(shape, requirements);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(geomIter == NULL) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up where to draw to ....</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now draw using the geometry iterator returned.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( ; !geomIter-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#add4bf50abae421d88b5549de6c11fc75\">isDone</a>(); geomIter-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#a041249f802c5bf4c2deae666610e03c4\">next</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the current geometry</span></div>\n\
<div class=\"line\">        MGeometry&amp; geometry = geomIter-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#a2c08d17ca16945612458abffaa4e9744\">geometry</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#a726ca809ffd3d67ab4b8476646f26635a634ee767a8e90ff4d56e140459cca31f\">MGeometryList::kNone</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the current object to world matrix</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; mtm = geomIter-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#acd8c4aab0285c0e0077b1c12d8cfda9a\">objectToWorldMatrix</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        glMatrixMode(GL_MODELVIEW);</div>\n\
<div class=\"line\">        glLoadMatrixd(mtm[0]);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get some data tro draw</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> primitives = geometry.primitiveArray(0);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> pos = geometry.position();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> normal = geometry.normal();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (pos.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ac73113f892730ec6fce5da7e3273c9cd\">data</a>() != NULL &amp;&amp; primitives.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ad3b74abc0bab69f337c70783e73f5bef\">data</a>() != NULL)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Set up position and normals for drawing</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            glEnableClientState(GL_VERTEX_ARRAY);</div>\n\
<div class=\"line\">            glVertexPointer(3, GL_FLOAT, 0, (<span class=\"keywordtype\">float</span>*) pos.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ac73113f892730ec6fce5da7e3273c9cd\">data</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (normal.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ac73113f892730ec6fce5da7e3273c9cd\">data</a>()) {</div>\n\
<div class=\"line\">                glEnableClientState(GL_NORMAL_ARRAY);</div>\n\
<div class=\"line\">                glNormalPointer(GL_FLOAT, 0,  normal.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ac73113f892730ec6fce5da7e3273c9cd\">data</a>());</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Draw with the current indexing structure</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> primitives = geometry.primitiveArray(0);</div>\n\
<div class=\"line\">            glDrawElements(GL_TRIANGLES, primitives.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ac9580a2ec3ad9690d0fb0ea0b3179fec\">elementCount</a>(), GL_UNSIGNED_INT, primitives.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#ad3b74abc0bab69f337c70783e73f5bef\">data</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glDisableClientState(GL_VERTEX_ARRAY);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (normal.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ac73113f892730ec6fce5da7e3273c9cd\">data</a>())</div>\n\
<div class=\"line\">                glDisableClientState(GL_NORMAL_ARRAY);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now dereference the geometry iterator used.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#af5a7f7bce62d712ed57586e6cf9c43f0\">MGeometryManager::dereferenceDefaultGeometry</a>(geomIter);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">geomShape</td><td>Desired geometry shape. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">requirements</td><td>Geometry requirements (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_requirements_legacy.html\" title=\"MGeometryRequirementsLegacy stores the collection of MGeometryRequirementsData arrays which describe ...\">MGeometryRequirementsLegacy</a>).</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>\n\
<p class=\"startli\">A pointer to a geometry iterator (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\" title=\"This class holds the set of data elements which represent a Maya surface. \">MGeometryList</a>), which contains a reference to the geometric data (MGeometry). The MGeometry information which tries to match the requirements passed in. ( e.g. position, normal, texture coordinates, tangents, and binormals etc). It can be assumed that all data is floating point such that:</p>\n\
<ul>\n\
<li>\n\
Positions are 3 float (x,y,z) positions </li>\n\
<li>\n\
Normals are 3 float (x,y,z) vectors. </li>\n\
<li>\n\
Texture coordinates are 2 float (u,v) tuples. </li>\n\
<li>\n\
Tangents are 3 float (x,y,z) vectors. </li>\n\
<li>\n\
Binormals are 3 float (x,y,z) vectors. </li>\n\
</ul>\n\
</li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a158\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af5a7f7bce62d712ed57586e6cf9c43f0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> dereferenceDefaultGeometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\">MGeometryList</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>geomIterator</em></td><td>)</td>\n\
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
<p>This is the companion method to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#acd13b8ee8e78f0238fb7968af1e35e80\" title=\"Obtain a reference to geometry for some &quot;default&quot; shapes maintained by the manager such that the geom...\">referenceDefaultGeometry()</a> and must always be called immediately after usage of data supplied by the reference call. </p>\n\
<p>This call simply maintains proper internal state for any data used.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">geomIterator</td><td>The geometry iterator returned from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_manager.html#acd13b8ee8e78f0238fb7968af1e35e80\" title=\"Obtain a reference to geometry for some &quot;default&quot; shapes maintained by the manager such that the geom...\">referenceDefaultGeometry()</a>.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a> if successfull, otherwise <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MStatus::kFailure</a>. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a161\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
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
<li>MGeometryManager.h</li>\n\
<li>MGeometryManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";