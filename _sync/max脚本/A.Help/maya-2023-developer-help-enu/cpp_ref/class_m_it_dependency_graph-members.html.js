var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_it_dependency_graph-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">MItDependencyGraph Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#afcf16e7d555937370ddd89e13fe4cf66\">atNodeLevel</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a740ef650e9a948287baaa1e33727aac7\">currentDirection</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#abe65d962586d53d0b855b80e9ba8c330\">currentFilter</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#afc1c0d71245e763fc566fc1d67ab06ae\">currentItem</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#add5e63487c55dd7b1b3ca32105e739e6\">currentLevel</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a4dbc05115e3d4479e6ecbe737df298d3\">currentRelationship</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a98ba4ec5494e567f3dc10e9be5cdca7d\">currentTraversal</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a224b9163917ac32fc95a60d8c1eec3aa\">Direction</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#aff0176e978020befccc90dd150247836\">disablePruningOnFilter</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ae5d55ade68e533086fd2a6fdb6176b5b\">enablePruningOnFilter</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a63664411488b67b594cd2adc232018aa\">getNodePath</a>(MObjectArray &amp;path) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ac66c10e652cdd0cd374ffd1822af6de9\">getNodesVisited</a>(MObjectArray &amp;nodesVisted) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5b1e7e0ee1ec622324960cd60933a985\">getPlugPath</a>(MPlugArray &amp;path) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#afabbeb9de3f8a0b9d16657e412b5e652\">getPlugsVisited</a>(MPlugArray &amp;plugsVisted) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#abdf08b11f76fdfb234f0842852d038ce\">isDirectionDownStream</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ac0f0d6fc806b11d246e05cb94e886b38\">isDone</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#acb4899222f68886a99b71700c305767d\">isPruningOnFilter</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#aca42924e88ec324acb45f77afb726b93\">isTraversalDepthFirst</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#acf99a5f09c6cce25800aa259c8ba31b6\">isTraversingOverWorldSpaceDependents</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5d3b8e489d2892096e6d65b9d9b72b65a8ad4d0a286855b50181b12df48942291\">kBreadthFirst</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a9d625fe894d9313ec78df1d78553f32eadc0b8e1934751a398d75967f6a5a0753\">kConnectedTo</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a9d625fe894d9313ec78df1d78553f32eade4477b7232f0b96c0a6c5e5a58de620\">kDependsOn</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5d3b8e489d2892096e6d65b9d9b72b65a6e92a8757afce03be51397f0b518f4c5\">kDepthFirst</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a224b9163917ac32fc95a60d8c1eec3aaa1eaa6232753ec5bb4249cf82bc612992\">kDownstream</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a9d625fe894d9313ec78df1d78553f32ea3e91f300d87eda72464d94af629de95a\">kEvaluationGraph</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a221b779e6bb7b8d40677d7642bfefac5a328f00ae2a12674d627e8080cc5f80a4\">kNodeLevel</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a221b779e6bb7b8d40677d7642bfefac5a9aef5b9b278e06246201721babc2316c\">kPlugLevel</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a224b9163917ac32fc95a60d8c1eec3aaa8a1fab0ce1da9f8eb804389091ba08a9\">kUpstream</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a221b779e6bb7b8d40677d7642bfefac5\">Level</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ae42268b91ec63e0c5e4d94d4c2ef4ba4\">MItDependencyGraph</a>(MObject &amp;rootNode, MFn::Type filter=MFn::kInvalid, Direction direction=kDownstream, Traversal traversal=kDepthFirst, Level level=kNodeLevel, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a9e32be5412949138deb05b317e0df8c6\">MItDependencyGraph</a>(MPlug &amp;rootPlug, MFn::Type filter=MFn::kInvalid, Direction direction=kDownstream, Traversal traversal=kDepthFirst, Level level=kPlugLevel, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a76321ec45f9c082f7777b1c320746f88\">MItDependencyGraph</a>(MObject &amp;rootNode, MPlug &amp;rootPlug, MIteratorType &amp;infoObject, Direction direction=kDownstream, Traversal traversal=kDepthFirst, Level level=kNodeLevel, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#aac7972fc7bc4551f131a6d40c3214c85\">MItDependencyGraph</a>(MObject &amp;rootNode, MFn::Type filter, Direction direction, Traversal traversal, Level level, Relationship relationship, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ad0c747bff522dbd97a350019d52f3d98\">MItDependencyGraph</a>(MPlug &amp;rootPlug, MFn::Type filter, Direction direction, Traversal traversal, Level level, Relationship relationship, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a3c25e5b822882fc2a31af8bb844ba4aa\">MItDependencyGraph</a>(MObject &amp;rootNode, MPlug &amp;rootPlug, MIteratorType &amp;infoObject, Direction direction, Traversal traversal, Level level, Relationship relationship, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a73616f002814b8abe6d921db72d7a496\">next</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#abedf4e8331c332f74c1bacb4eebeec8a\">nodeDepth</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#afe05963c55634548927572b4f840d218\">previousPlug</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a007b98a707c775eca689e864d483bd22\">prune</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a9d625fe894d9313ec78df1d78553f32e\">Relationship</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ac734f26ff1c92ecec3572a31f5e4435c\">reset</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#acd3743b5b51a31fbe3b2525f24eb11ec\">resetFilter</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#aebe651320546c9d1abfcef4ab2c71063\">resetTo</a>(MObject &amp;rootNode, MFn::Type filter=MFn::kInvalid, Direction direction=kDownstream, Traversal traversal=kDepthFirst, Level level=kNodeLevel, Relationship relationship=kDependsOn)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ac8ed57a9a4b63d5aed1d38112705fd52\">resetTo</a>(MPlug &amp;rootPlug, MFn::Type filter=MFn::kInvalid, Direction direction=kDownstream, Traversal traversal=kDepthFirst, Level level=kPlugLevel, Relationship relationship=kDependsOn)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a220a1fa904f73dcf7a2d3415b3d2131b\">resetTo</a>(MObject *rootNode, MPlug *rootPlug, MIteratorType &amp;infoObject, Direction direction=kDownstream, Traversal traversal=kDepthFirst, Level level=kPlugLevel, Relationship relationship=kDependsOn)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a1dff9c3ffe180091de34de1491e08b8a\">rootNode</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#aa71436b25a84abb5904e3fc56f1228ee\">rootPlug</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5bb78e07352ccbcf62d8c06e3269bb5f\">setCurrentFilter</a>(MFn::Type filter=MFn::kInvalid)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a91f9d98dcf57cc97e3a3347a0cf1fedd\">setCurrentRelationship</a>(Relationship relationship)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a73c68d439bdd568457e2bc8a5ddeeac9\">setTraversalOverWorldSpaceDependents</a>(bool val)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a3795416d518956d58da30de2df5c329c\">thisNode</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a021ebdbef257c9f6a77e156a2cacff13\">thisNodeHasUnknownType</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ac768e843a4a7dcf223005cea90b0a3e3\">thisPlug</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a3e720118f34ab45e4914f591a388446e\">toggleDirection</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a42c0068cf843e33f0c50bb57be6a5978\">toggleLevel</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a9040269c44ba6b1184d4643cc64cc319\">toggleTraversal</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5d3b8e489d2892096e6d65b9d9b72b65\">Traversal</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a1f0841e6ffe48b55e2182b27c5f978ec\">~MItDependencyGraph</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";