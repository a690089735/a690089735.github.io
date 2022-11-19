var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: Member List</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_px_geometry_iterator-members.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMaya.MPxGeometryIterator Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a698f90d05106822c3cb7cfcff577671f\">__init__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a4b53d6c3f72c206ef8514a886482b397\">__iter__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#adcecd1a42806f11b780e378884ab04af\">__new__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#aefa4cfa179a19143822d613e54d19916\">__next__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a1c402535b650ba770c8d885e30854dfe\">component</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a1bea0452562a673b17621df7851a19fc\">currentPoint</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a4aec62fa47c43389be8ce47e12eed3a8\">geometry</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#acbdcfe985a4c652c09a83facca3ec6c6\">hasNormals</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a08e59acf6efe538afaa048e71314c226\">hasPoints</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a384efd0caa488d19cf50a67ac065a006\">index</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a2391a8a4f2ec1b9a841a6b02928ec4c5\">indexUnsimplified</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a74dd75dfc2cedfbe501578ee158fc379\">isDone</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a4d48a9ded0d01e3dcfd2451619238a98\">iteratorCount</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#ad281777d03a04ca90836257103014c0a\">maxPoints</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#ac808384600efb2072ac4993606312818\">next</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a7cdb99bd0841743032ea56e2897e1733\">point</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a06a167efdd57b479ed61f6292e6e7131\">reset</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#af17f7d44cb9f331d75f24e450a60e23d\">setObject</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a61e1ba39c59204e685b675abef526633\">setPoint</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a7f4800e3a34156de46fbd76d2f9617b1\">setPointGetNext</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html\">OpenMaya.MPxGeometryIterator</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";