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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_fn_plugin-members.html\', tocPrefix);\n\
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
<div class=\"title\">MFnPlugin Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1e8fd75d2c69aa496f9461e611d3644e\">addMenuItem</a>(const MString &amp;menuItemName, const MString &amp;parentName, const MString &amp;commandName, const MString &amp;commandParams, bool needOptionBox=false, const MString *optBoxFunction=nullptr, MStatus *retStatus=nullptr, const MString *extraMenuItemParams=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ab799eae9a9ee781f01ccd4c81bb5bb0a\">addMenuItem</a>(const MString &amp;menuItemName, const MString &amp;menuItemLabel, const MString &amp;parentName, const MString &amp;commandName, const MString &amp;commandParams, bool needOptionBox=false, const MString *optBoxFunction=nullptr, MStatus *retStatus=nullptr, const MString *extraMenuItemParams=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2658b7bb10511a387a7a709d488a9394\">apiVersion</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a93c12a623e20e551464c513f4fef94a4\">deregisterAnimCurveInterpolator</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a35eed70ac4287b860f273f4ec852f577\">deregisterAttributePatternFactory</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#adc6605f36dd1adcc51a8cb31812ca3a7\">deregisterCacheFormat</a>(const MString &amp;cacheFormatName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a0c69705db22962ab108d82c8bee981e2\">deregisterCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a07448597cd3c08a252f77ce75b3d4a20\">deregisterConstraintCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a779875727a9bc55613448ef9066f84d3\">deregisterContextCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acea6edc83fd8b8d5812014089788cf86\">deregisterContextCommand</a>(const MString &amp;commandName, const MString &amp;toolCmdName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#afd43470ba68c93fddda2f9a56a9e1342\">deregisterControlCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ac8008b752e2cca31eda3a37b21e89f7c\">deregisterData</a>(const MTypeId &amp;typeId)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a8e965f06d7d272522f38e7e4e55f3a38\">deregisterDevice</a>(const MString &amp;deviceName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#adc8b144d663c2f39c480c1624ca87d49\">deregisterDisplayFilter</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2984d7a0b37437db99be7152fb1a2c6f\">deregisterDragAndDropBehavior</a>(const MString &amp;behaviorName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ae1c7d3f2825b696c3b2f70363504613e\">deregisterEvaluator</a>(const MString &amp;evaluatorName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ae48d7c489328f486325d76154ce5b64f\">deregisterFileTranslator</a>(const MString &amp;translatorName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a542f32c9301e217d881613205711e35d\">deregisterIkSolver</a>(const MString &amp;ikSolverName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa1ab04a6ac2926207b1378d1d9328aad\">deregisterImageFile</a>(const MString &amp;imageFormatName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ad1b7925413557277f8aa8c6c8f801654\">deregisterModelEditorCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ad79b620e76ce78e1f6b218cfe4d09b46\">deregisterNode</a>(const MTypeId &amp;typeId)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a12d8d4c30c5785569c1f83717af139af\">deregisterRenderer</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a70e0a7f814ec82ac5f3db488faa774ff\">deregisterRenderPassImpl</a>(const MString &amp;passImplId)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a3fbd77652221412a6b6cf1ff3eaa3120\">deregisterTopologyEvaluator</a>(const MString &amp;evaluatorName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acdd6fe12e7549bf47e3ec0b85d8893d1\">deregisterURIFileResolver</a>(const MString &amp;fileResolverName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1f13118b14a93b63516f7d2c126e8878\">findPlugin</a>(const MString &amp;pluginName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1d850de5a5c3c34feb947fb8709a1a3b\">getCallableInfo</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">hasObj</a>(MFn::Type) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a28acbd3253b9c86a1e64b3457de9f4ea\">hasObj</a>(const MObject &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa239f492444ffc7011a32f1167dc6b6f\">isNodeRegistered</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a77821035309df17e3c856eedf7e57309\">isValid</a>(MFn::Type)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1c4a285d41daeacc2f1614839e570b99\">kDefaultDataLocation</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ac506d68955cbdf8516bf218d5d0de374\">loadPath</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#adae23060a9566368fd42e00666b6e8c6\">matrixTypeIdFromXformId</a>(const MTypeId &amp;xformTypeId, MStatus *ReturnStatus=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a564085a2484453e0cee6e29167e715c5\">MFnPlugin</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ad9f89bb98199e899602b2dec457a96e4\">MFnPlugin</a>(MObject &amp;object, const char *vendor=&quot;Unknown&quot;, const char *version=&quot;Unknown&quot;, const char *requiredApiVersion=&quot;Any&quot;, MStatus *ReturnStatus=0L)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a3f74d32cfb3d4d52af80f8c1d066fdf5\">registerAnimCurveInterpolator</a>(const MString &amp;typeName, int typeId, MCreatorFunction creatorFunction, int flags=0)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aab1402617ee37990ca727be55ffb7570\">registerAttributePatternFactory</a>(const MString &amp;typeName, MCreatorFunction fnPtr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#add336a246723fc4c74889d82d490ae02\">registerBakeEngine</a>(const MString &amp;typeName, MBakeEngineCreatorFnPtr fnPtr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7d72b2cceaa75d61bc9cd39094e165c6\">registerCacheFormat</a>(const MString &amp;cacheFormatName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a66f0e341f74cba9d100ab8a45e71cc0b\">registerCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction, MCreateSyntaxFunction createSyntaxFunction=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a4fd1999ac645a9480d992d9ac2fa7b4d\">registerConstraintCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#abdb508384ccb7cc8a94c5edd43775120\">registerContextCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ab8c3f5441c1d41ba37b1aec184b2b91c\">registerContextCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction, const MString &amp;toolCmdName, MCreatorFunction toolCmdCreator, MCreateSyntaxFunction toolCmdSyntax=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a6ea84f75cdee799e552f2a54d406e313\">registerControlCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#add5fc5261bded2ade6ad7a333a85ce9c\">registerData</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MPxData::Type type=MPxData::kData)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#af066155d7a4c447d7a3975e9171046cc\">registerDevice</a>(const MString &amp;deviceName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acb7cf054c95bb6517d378a26a8d48956\">registerDisplayFilter</a>(const MString &amp;name, const MString &amp;label, const MString &amp;classification)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a226f3c8f1e9a3d35846d3a05046a228f\">registerDragAndDropBehavior</a>(const MString &amp;behaviorName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1863f5e6068a1383022ecb22de0b01e3\">registerEvaluator</a>(const MString &amp;evaluatorName, unsigned int uniquePriority, MCustomEvaluatorCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a75853187e8f4448abe55533f28a0557b\">registerEvaluator</a>(const MString &amp;evaluatorName, unsigned int uniquePriority, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a42343ff5f2786bf82e59b9174f3e5b3a\">registerFileTranslator</a>(const MString &amp;translatorName, const char *pixmapName, MCreatorFunction creatorFunction, const char *optionsScriptName=nullptr, const char *defaultOptionsString=nullptr, bool requiresFullMel=false, MString dataStorageLocation=MFnPlugin::kDefaultDataLocation)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acbc8675822a73ffb29800bffd28e182f\">registerIkSolver</a>(const MString &amp;ikSolverName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a3ac3f15d6d86e605805466db2485bc3a\">registerImageFile</a>(const MString &amp;imageFormatName, MCreatorFunction creatorFunction, const MStringArray &amp;imageFileExtensions, ImageFilePriority priority=kImageFilePriorityDefault)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a5f586337760f98939702403c29950aff\">registeringCallableScript</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2c75e8da3acd9eab0d9c23c39fbffc3d\">registerMaterialInfo</a>(const MString &amp;type, MMaterialInfoFactoryFnPtr fnPtr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a86848780a2f856ae00e00d5038fab202\">registerModelEditorCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction, MCreatorFunction paneCreatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aaae14c466b57bba85f52b96e2f73a9db\">registerNode</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MPxNode::Type type=MPxNode::kDependNode, const MString *classification=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aabf1010fb21c23a05871c1aad1485ee3\">registerRenderer</a>(const MString &amp;name, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a59f9f9ede6dd57a7722a9a0b08f39b04\">registerRenderPassImpl</a>(const MString &amp;passImplId, MRenderPassDef *passDef, MCreatorFunction creatorFunction, bool overload=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aeee33712baf3c4187b9fc979d7001c1a\">registerShape</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MCreatorFunction uiCreatorFunction, const MString *classification=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa34cd577cd4b2fcd886c91f36fee0f35\">registerTopologyEvaluator</a>(const MString &amp;evaluatorName, unsigned int uniquePriority, MTopologyEvaluatorCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a537a74d79d0bfb0d86fa652cbde86e10\">registerTopologyEvaluator</a>(const MString &amp;evaluatorName, unsigned int uniquePriority, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a63395111359893f8566598d6e6c9e813\">registerTransform</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MCreateXformMatrixFunction xformCreatorFunction, const MTypeId &amp;xformId, const MString *classification=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a11e63768f8bdb0cc6844b3236f766734\">registerTransform</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MCreatorFunction xformCreatorFunction, const MTypeId &amp;xformId, const MString *classification=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a925ca8d8c719beb3db0b1760191643f0\">registerUI</a>(PyObject *creationProc, PyObject *deletionProc, PyObject *creationBatchProc=nullptr, PyObject *deletionBatchProc=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7c72455a763ee8c34481f3fe786659ae\">registerUI</a>(const MString &amp;creationProc, const MString &amp;deletionProc, const MString &amp;creationBatchProc=&quot;&quot;, const MString &amp;deletionBatchProc=&quot;&quot;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a92e203dc380e1d56d08d2866dcbd697e\">registerUIStrings</a>(MInitializeFunction registerMStringResources, const MString &amp;pluginStringsProc)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1982d7b446cbe329aa4c0a20c35c194f\">registerURIFileResolver</a>(const MString &amp;fileResolverName, const MString &amp;uriScheme, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a85cfb623e852b8ff3bc062a10d61407d\">removeMenuItem</a>(MStringArray &amp;menuItemNames)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a04110ee0e12c7e95b4d95eb792f1aa72\">setCallableInfo</a>(MPluginCallableInfo *info)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a6c3ddfe13e2852d4fbd9f51f08832716\">setName</a>(const MString &amp;newName, bool allowRename=true)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>(MObject &amp;object)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a4a6adbb56d6259860ec665ab5d86bdb5\">setObject</a>(const MObject &amp;object)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a239948837628131c722f10f190abc253\">setRegisteringCallableScript</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#afa5a2f5859bf5ed4000eb0af4c5c52ed\">setVersion</a>(const MString &amp;newVersion)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acb573e97f60f216c98fd21ffc343a079\">type</a>() const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a9b02bac5f351157c70dcafa8f72c95f2\">typeString</a>(MFn::Type)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a5eb265538465a26fc6de363ea8ffaf3e\">unregisterBakeEngine</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7cdf6a6b5eae02f9b8415bc7b9a47033\">unregisterMaterialInfo</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a39b45b041872d748b2563da27b5fb13c\">vendor</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a44c6e3c84511e9572b873261c93c01e8\">version</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5ba621af875a0d489e1031eddac02b82\">~MFnBase</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ae3e0d0d596bcbff1303831889a7d9eec\">~MFnPlugin</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";