var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMayaRender.MSubSceneContainerIterator Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_sub_scene_container_iterator.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMayaRender.MSubSceneContainerIterator Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaRender.MSubSceneContainerIterator Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_sub_scene_container_iterator.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_render_1_1_m_sub_scene_container_iterator.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MSubSceneContainerIterator:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.png\" usemap=\"#OpenMayaRender.MSubSceneContainerIterator_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MSubSceneContainerIterator_map\" name=\"OpenMayaRender.MSubSceneContainerIterator_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a9c1fae9649d20b68bad3d937643e3621\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#a9c1fae9649d20b68bad3d937643e3621\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a9c1fae9649d20b68bad3d937643e3621\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a052f1b2db6ea48c63de7cffe41b30084\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#a052f1b2db6ea48c63de7cffe41b30084\">destroy</a> ()</td></tr>\n\
<tr class=\"separator:a052f1b2db6ea48c63de7cffe41b30084\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1b2cc9fc25556cccc61e0cfbc461e9d2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#a1b2cc9fc25556cccc61e0cfbc461e9d2\">next</a> ()</td></tr>\n\
<tr class=\"separator:a1b2cc9fc25556cccc61e0cfbc461e9d2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af6db3fa9bfe29390c162811cb1cd26d5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#af6db3fa9bfe29390c162811cb1cd26d5\">reset</a> ()</td></tr>\n\
<tr class=\"separator:af6db3fa9bfe29390c162811cb1cd26d5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a2e7209a5daaa2c7228325f1488772ab4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#a2e7209a5daaa2c7228325f1488772ab4\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:a2e7209a5daaa2c7228325f1488772ab4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Iterator over render items of MSubSceneContainer object.</pre> </div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a9c1fae9649d20b68bad3d937643e3621\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MSubSceneContainerIterator.__init__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Initialize self.  See help(type(self)) for accurate signature.</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a2e7209a5daaa2c7228325f1488772ab4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MSubSceneContainerIterator.__new__ </td>\n\
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
<pre class=\"fragment\">Create and return a new object.  See help(type) for accurate signature.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a052f1b2db6ea48c63de7cffe41b30084\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MSubSceneContainerIterator.destroy </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">destroy() -&gt; self\n\
\n\
Call this method to delete the iterator. After calling, the iterator will be invalid.\n\
Users of MSubSceneContainer iterators are responsible for deleting the iterators after use.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1b2cc9fc25556cccc61e0cfbc461e9d2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MSubSceneContainerIterator.next </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">next() -&gt; MRenderItem\n\
\n\
Advance the iterator to the next render item in the associated MSubSceneContainer and return it.\n\
\n\
Returns the next render item in the container or None if no more items.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af6db3fa9bfe29390c162811cb1cd26d5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MSubSceneContainerIterator.reset </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">reset() -&gt; self\n\
\n\
Reset the iterator to the beginning of the associated MSubSceneContainer.\n\
The next call to the next() method will return the first render item in the container.</pre> \n\
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