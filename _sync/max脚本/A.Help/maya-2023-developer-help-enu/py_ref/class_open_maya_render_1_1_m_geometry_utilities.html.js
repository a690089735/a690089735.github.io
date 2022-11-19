var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMayaRender.MGeometryUtilities Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_geometry_utilities.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>Python API 2.0 Reference: OpenMayaRender.MGeometryUtilities Class Reference</h1>\n\
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
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">OpenMayaRender.MGeometryUtilities Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Handling-custom-renderables-for.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Handling custom renderables for object overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_geometry_utilities.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_render_1_1_m_geometry_utilities.html#pub-static-attribs\">Static Public Attributes</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MGeometryUtilities:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_geometry_utilities.png\" usemap=\"#OpenMayaRender.MGeometryUtilities_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MGeometryUtilities_map\" name=\"OpenMayaRender.MGeometryUtilities_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a177ca525e74655c5d3e301849a1a9516\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a177ca525e74655c5d3e301849a1a9516\">acquireReferenceGeometry</a> ()</td></tr>\n\
<tr class=\"separator:a177ca525e74655c5d3e301849a1a9516\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a69e3c934b7c97435c303c608f592eba8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a69e3c934b7c97435c303c608f592eba8\">displayStatus</a> ()</td></tr>\n\
<tr class=\"separator:a69e3c934b7c97435c303c608f592eba8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a70db48253cd9537d53f45eb491f07731\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a70db48253cd9537d53f45eb491f07731\">releaseReferenceGeometry</a> ()</td></tr>\n\
<tr class=\"separator:a70db48253cd9537d53f45eb491f07731\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4ab2eef7f034435bfec001c32f86bc7a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a4ab2eef7f034435bfec001c32f86bc7a\">wireframeColor</a> ()</td></tr>\n\
<tr class=\"separator:a4ab2eef7f034435bfec001c32f86bc7a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a3fe4888e6253c907fccb3425651c5f6f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3fe4888e6253c907fccb3425651c5f6f\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kActive</b> = 0</td></tr>\n\
<tr class=\"separator:a3fe4888e6253c907fccb3425651c5f6f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab098620e9b49a79b19162238838c2e17\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ab098620e9b49a79b19162238838c2e17\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kActiveAffected</b> = 10</td></tr>\n\
<tr class=\"separator:ab098620e9b49a79b19162238838c2e17\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a85ed7b7bac63830ee7b8cc451e1986bb\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a85ed7b7bac63830ee7b8cc451e1986bb\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kActiveComponent</b> = 7</td></tr>\n\
<tr class=\"separator:a85ed7b7bac63830ee7b8cc451e1986bb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a201b738e0595088ab891eafdc1f865a5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a201b738e0595088ab891eafdc1f865a5\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kActiveTemplate</b> = 6</td></tr>\n\
<tr class=\"separator:a201b738e0595088ab891eafdc1f865a5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa9be237a121c744ea9d8beb03833c918\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa9be237a121c744ea9d8beb03833c918\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDefaultCube</b> = 2</td></tr>\n\
<tr class=\"separator:aa9be237a121c744ea9d8beb03833c918\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8272b49d80e03cbcac84a53ae63a16cf\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8272b49d80e03cbcac84a53ae63a16cf\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDefaultPlane</b> = 1</td></tr>\n\
<tr class=\"separator:a8272b49d80e03cbcac84a53ae63a16cf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0eb4afe7e57fbafd3e9eb94681a6cb50\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0eb4afe7e57fbafd3e9eb94681a6cb50\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDefaultSphere</b> = 0</td></tr>\n\
<tr class=\"separator:a0eb4afe7e57fbafd3e9eb94681a6cb50\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a25a76ecd4239050f40f7268671bc53b9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a25a76ecd4239050f40f7268671bc53b9\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDormant</b> = 2</td></tr>\n\
<tr class=\"separator:a25a76ecd4239050f40f7268671bc53b9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8f059c4b6faafb5208713cd582b84efa\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8f059c4b6faafb5208713cd582b84efa\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kHilite</b> = 4</td></tr>\n\
<tr class=\"separator:a8f059c4b6faafb5208713cd582b84efa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8476c924fd32ae1dd17b6adf4afccec9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8476c924fd32ae1dd17b6adf4afccec9\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kIntermediateObject</b> = 9</td></tr>\n\
<tr class=\"separator:a8476c924fd32ae1dd17b6adf4afccec9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aab89786b58def92489db1cb2eee4079a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aab89786b58def92489db1cb2eee4079a\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kInvisible</b> = 3</td></tr>\n\
<tr class=\"separator:aab89786b58def92489db1cb2eee4079a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5fc495d5d3375191b47f9cc84f0a97b9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5fc495d5d3375191b47f9cc84f0a97b9\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kLead</b> = 8</td></tr>\n\
<tr class=\"separator:a5fc495d5d3375191b47f9cc84f0a97b9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad64e998728458f5adb7caefc84442c25\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad64e998728458f5adb7caefc84442c25\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kLive</b> = 1</td></tr>\n\
<tr class=\"separator:ad64e998728458f5adb7caefc84442c25\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a26359882e1b18d105c2a375d9bb1265f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a26359882e1b18d105c2a375d9bb1265f\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kNoStatus</b> = 11</td></tr>\n\
<tr class=\"separator:a26359882e1b18d105c2a375d9bb1265f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a738145e7acf8bc84edf00bd2999dfc43\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a738145e7acf8bc84edf00bd2999dfc43\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kTemplate</b> = 5</td></tr>\n\
<tr class=\"separator:a738145e7acf8bc84edf00bd2999dfc43\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Utilities for Viewport 2.0</pre> </div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a177ca525e74655c5d3e301849a1a9516\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MGeometryUtilities.acquireReferenceGeometry </td>\n\
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
<pre class=\"fragment\">acquireReferenceGeometry(shape, requirements) -&gt; MGeometry\n\
\n\
Acquire reference geometry with required buffers.\n\
\n\
The user is responsible for releasing the geometry when it is no longer needed, by calling MGeometryUtilities::releaseReferenceGeometry().\n\
\n\
\n\
* shape (int) - The shape of the requested geometry.\n\
* requirements (MGeometryRequirements) - The list of required index and vertex buffers.\n\
\n\
Valid geometry shapes:\n\
  kDefaultSphere   Sphere with radius 1, centered at 0,0,0.\n\
  kDefaultPlane    Plane with width and height of 1, centered at 0,0,0. Assuming Y-Up orientation: width = x-axis, and height = y-axis.\n\
  kDefaultCube     Cube with width, height and depth of 1, centered at 0,0,0.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a69e3c934b7c97435c303c608f592eba8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MGeometryUtilities.displayStatus </td>\n\
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
<pre class=\"fragment\">displayStatus(path) -&gt; DisplayStatus\n\
\n\
Returns the display status of the given DAG path. Note that the last selected object will have status kLead\n\
instead of kActive and if only one object is selected the status will be kLead.\n\
\n\
* path (MDagPath) - The DAG path to get.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a70db48253cd9537d53f45eb491f07731\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MGeometryUtilities.releaseReferenceGeometry </td>\n\
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
<pre class=\"fragment\">releaseReferenceGeometry(geometry) -&gt; None\n\
\n\
Release a generated reference geometry.\n\
\n\
* geometry (MGeometry) - The geometry to delete.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4ab2eef7f034435bfec001c32f86bc7a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MGeometryUtilities.wireframeColor </td>\n\
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
<pre class=\"fragment\">wireframeColor(path) -&gt; MColor\n\
\n\
Returns the wireframe color used in Viewport 2.0 for the given DAG path.\n\
\n\
* path (MDagPath) - The DAG path to get wireframe color.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";