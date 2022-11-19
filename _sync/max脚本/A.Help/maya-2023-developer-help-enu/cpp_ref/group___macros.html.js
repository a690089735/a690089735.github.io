var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Macros</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'group___macros.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: Macros</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<div class=\"title\">Macros</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Maya-API-introduction/Wrappers.html\">Maya API Basics &gt; Wrappers</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Selecting-with-the-API/MSelectionList.html\">Selecting with the API &gt; MSelectionList</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Technical-Notes/Generic-Attributes.html\">Technical Notes &gt; Generic Attributes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Technical-Notes/Threading-and-Maya-API.html\">Technical Notes &gt; Threading and Maya API</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Appendices/Appendix-A-NURBS-Geometry.html\">Appendices &gt; Appendix A: NURBS Geometry</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"group___macros.html#define-members\">Macros</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:gaf3b44fe07495c3792b926494fca7b517\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>(_className,  _vendor,  _version)</td></tr>\n\
<tr class=\"memdesc:gaf3b44fe07495c3792b926494fca7b517\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This macro expands to all the code necessary to create a plug-in for a NON-undoable command, with the exception of the doIt() method.  <a href=\"group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">More...</a><br></td></tr>\n\
<tr class=\"separator:gaf3b44fe07495c3792b926494fca7b517\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ga305f156d5e80c4d9b9bf8606f5e6225c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___macros.html#ga305f156d5e80c4d9b9bf8606f5e6225c\">DeclareSingle</a>(_fnptr)</td></tr>\n\
<tr class=\"memdesc:ga305f156d5e80c4d9b9bf8606f5e6225c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The macro expands to all the code necessary to create a basic non-undoable command that calls \"functionPtr\" from its doIt method.  <a href=\"group___macros.html#ga305f156d5e80c4d9b9bf8606f5e6225c\">More...</a><br></td></tr>\n\
<tr class=\"separator:ga305f156d5e80c4d9b9bf8606f5e6225c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ga1c1d4871f9859a07b14c0218a3609fd9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___macros.html#ga1c1d4871f9859a07b14c0218a3609fd9\">CHECK_MSTATUS_AND_RETURN</a>(_status,  _retVal)</td></tr>\n\
<tr class=\"memdesc:ga1c1d4871f9859a07b14c0218a3609fd9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return if status is not <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a>.  <a href=\"group___macros.html#ga1c1d4871f9859a07b14c0218a3609fd9\">More...</a><br></td></tr>\n\
<tr class=\"separator:ga1c1d4871f9859a07b14c0218a3609fd9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ga2f3f1ac62ed663f5efd20ff99991335b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___macros.html#ga2f3f1ac62ed663f5efd20ff99991335b\">CHECK_MSTATUS_AND_RETURN_IT</a>(_status)</td></tr>\n\
<tr class=\"memdesc:ga2f3f1ac62ed663f5efd20ff99991335b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return if status is not <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a>.  <a href=\"group___macros.html#ga2f3f1ac62ed663f5efd20ff99991335b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ga2f3f1ac62ed663f5efd20ff99991335b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:gae3dc78724237805e00a767b587b7cf79\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(_status)</td></tr>\n\
<tr class=\"memdesc:gae3dc78724237805e00a767b587b7cf79\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Output an error message if status is not kSuccess.  <a href=\"group___macros.html#gae3dc78724237805e00a767b587b7cf79\">More...</a><br></td></tr>\n\
<tr class=\"separator:gae3dc78724237805e00a767b587b7cf79\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:gaa0b0d94fa789676e65aedd442b47440e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___macros.html#gaa0b0d94fa789676e65aedd442b47440e\">MFAIL</a>(_status)</td></tr>\n\
<tr class=\"memdesc:gaa0b0d94fa789676e65aedd442b47440e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">True if the status is not <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a>.  <a href=\"group___macros.html#gaa0b0d94fa789676e65aedd442b47440e\">More...</a><br></td></tr>\n\
<tr class=\"separator:gaa0b0d94fa789676e65aedd442b47440e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a class=\"anchor\" id=\"gaf3b44fe07495c3792b926494fca7b517\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define DeclareSimpleCommand</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_className, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_vendor, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_version&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This macro expands to all the code necessary to create a plug-in for a NON-undoable command, with the exception of the doIt() method. </p>\n\
<p>The doIt() method needs to be implemented separately:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;MStatus className::doIt( const MArgList&amp; )</div>\n\
</div><!-- fragment --><p>This macro cannot be used to create undoable commands or commands that uses flags or options.</p>\n\
<p>This macro takes as arguments the name of the class that will be derived from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_command.html\" title=\"Base class for user commands. \">MPxCommand</a>, the name of the organisation owning this code, and the version number of the plug-in.</p>\n\
<p>The macro will generate a class with the given classname that is derived from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_command.html\" title=\"Base class for user commands. \">MPxCommand</a>, as well as the following methods:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;void* className::creator()</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;MStatus initializePlugin( MObject )</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;MStatus uninitializePlugin( MObject )</div>\n\
</div><!-- fragment --><p>All methods inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_command.html\" title=\"Base class for user commands. \">MPxCommand</a> such as <code>setResult</code>, <code>displayWarning</code>, and <code>displayError</code> are available.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_className</td><td>Name of the class </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_vendor</td><td>Name of the organisation owning this command </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_version</td><td>Plug-in version number </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cv_expand_cmd_2cv_expand_cmd_8cpp-example.html#a0\">cvExpandCmd/cvExpandCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/find_file_textures_cmd_2find_file_textures_cmd_8cpp-example.html#a14\">findFileTexturesCmd/findFileTexturesCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/find_textures_per_polygon_cmd_2find_textures_per_polygon_cmd_8cpp-example.html#a9\">findTexturesPerPolygonCmd/findTexturesPerPolygonCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/get_attr_affects_cmd_2get_attr_affects_cmd_8cpp-example.html#a0\">getAttrAffectsCmd/getAttrAffectsCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/helix_cmd_2helix_cmd_8cpp-example.html#a0\">helixCmd/helixCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/hello_cmd_2hello_cmd_8cpp-example.html#a0\">helloCmd/helloCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/hello_world_cmd_2hello_world_cmd_8cpp-example.html#a0\">helloWorldCmd/helloWorldCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a0\">instancerListCmd/instancerListCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/list_light_links_cmd_2list_light_links_cmd_8cpp-example.html#a0\">listLightLinksCmd/listLightLinksCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/list_poly_holes_cmd_2list_poly_holes_cmd_8cpp-example.html#a0\">listPolyHolesCmd/listPolyHolesCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/threaded_bounding_box_2threaded_bounding_box_8cpp-example.html#a0\">threadedBoundingBox/threadedBoundingBox.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/threading_lock_tests_2threading_lock_tests_8cpp-example.html#a0\">threadingLockTests/threadingLockTests.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/thread_test_cmd_2thread_test_cmd_8cpp-example.html#a0\">threadTestCmd/threadTestCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/thread_test_with_locks_cmd_2thread_test_with_locks_cmd_8cpp-example.html#a0\">threadTestWithLocksCmd/threadTestWithLocksCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/view_capture_cmd_2view_capture_cmd_8cpp-example.html#a0\">viewCaptureCmd/viewCaptureCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/volume_light_cmd_2volume_light_cmd_8cpp-example.html#a0\">volumeLightCmd/volumeLightCmd.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/whatis_cmd_2whatis_cmd_8cpp-example.html#a0\">whatisCmd/whatisCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ga305f156d5e80c4d9b9bf8606f5e6225c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define DeclareSingle</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_fnptr</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The macro expands to all the code necessary to create a basic non-undoable command that calls \"functionPtr\" from its doIt method. </p>\n\
<p>One limitation of using this macro is that since \"functionPtr\" is not a member of the class derived from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_command.html\" title=\"Base class for user commands. \">MPxCommand</a>, it cannot call methods (like <code>setResult</code>) that are inherited from that class.</p>\n\
<p>This macro requires as argument a function with the prototype: </p><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;MStatus functionPtr ( const MArgList&amp; )</div>\n\
</div><!-- fragment --><p>The macro will generate a class called _DoItCmd which is derived from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_command.html\" title=\"Base class for user commands. \">MPxCommand</a>. It also generate the following methods:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;void* _DoItCmd::creator()</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;MStatus _DoItCmd::doIt( const MArgList&amp; args )</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;MStatus initializePlugin( MObject )</div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;MStatus uninitializePlugin( MObject )</div>\n\
</div><!-- fragment --><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_fnptr</td><td>Command function pointer </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ga1c1d4871f9859a07b14c0218a3609fd9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define CHECK_MSTATUS_AND_RETURN</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_status, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_retVal&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return if status is not <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a>. </p>\n\
<p>Output an error message and returns the value \'retVal\' if status is not kSuccess. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_status</td><td>The status code. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_retVal</td><td>Return value when status if not kSuccess. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/flip_u_v_cmd_2flip_u_v_cmd_8cpp-example.html#a5\">flipUVCmd/flipUVCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/hair_collision_solver_2hair_collision_solver_8cpp-example.html#a3\">hairCollisionSolver/hairCollisionSolver.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/render_view_interactive_render_cmd_2render_view_interactive_render_cmd_8cpp-example.html#a9\">renderViewInteractiveRenderCmd/renderViewInteractiveRenderCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/render_view_render_cmd_2render_view_render_cmd_8cpp-example.html#a7\">renderViewRenderCmd/renderViewRenderCmd.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/render_view_render_region_cmd_2render_view_render_region_cmd_8cpp-example.html#a7\">renderViewRenderRegionCmd/renderViewRenderRegionCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ga2f3f1ac62ed663f5efd20ff99991335b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define CHECK_MSTATUS_AND_RETURN_IT</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_status</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return if status is not <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a>. </p>\n\
<p>Output an error message and returns the status if it is not kSuccess. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_status</td><td>The status code. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/basic_morph_node_2basic_morph_node_8cpp-example.html#a17\">basicMorphNode/basicMorphNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/example_falloff_2smooth_falloff_node_8cpp-example.html#a11\">exampleFalloff/smoothFalloffNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/flip_u_v_cmd_2flip_u_v_cmd_8cpp-example.html#a9\">flipUVCmd/flipUVCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/flip_u_v_cmd_2flip_u_v_main_8cpp-example.html#a3\">flipUVCmd/flipUVMain.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/grab_u_v_main_8cpp-example.html#a60\">grabUVMain.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/motion_path_node_2motion_path_node_8cpp-example.html#a11\">motionPathNode/motionPathNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/node_icon_cmd_2node_icon_cmd_8cpp-example.html#a20\">nodeIconCmd/nodeIconCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/rich_selection_tool_2rich_selection_tool_8cpp-example.html#a17\">richSelectionTool/richSelectionTool.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2adsk_prepare_render_globals_8cpp-example.html#a10\">sceneAssembly/adskPrepareRenderGlobals.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2adsk_representation_cmd_8cpp-example.html#a13\">sceneAssembly/adskRepresentationCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2adsk_scene_metadata_cmd_8cpp-example.html#a13\">sceneAssembly/adskSceneMetadataCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8cpp-example.html#a8\">sceneAssembly/assemblyDefinition.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_reference_8cpp-example.html#a6\">sceneAssembly/assemblyReference.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/string_format_node_2string_format_node_8cpp-example.html#a38\">stringFormatNode/stringFormatNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"gae3dc78724237805e00a767b587b7cf79\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define CHECK_MSTATUS</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_status</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Output an error message if status is not kSuccess. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_status</td><td>The status code. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/affects_node_2affects_node_8cpp-example.html#a16\">affectsNode/affectsNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/anisotropic_shader_2anisotropic_shader_8cpp-example.html#a15\">anisotropicShader/anisotropicShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/api_directional_light_shape_2api_directional_light_shape_8cpp-example.html#a5\">apiDirectionalLightShape/apiDirectionalLightShape.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_creator_8cpp-example.html#a32\">apiMeshShape/apiMeshCreator.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/backfill_shader_2backfill_shader_8cpp-example.html#a12\">backfillShader/backfillShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/brick_shader_2brick_shader_8cpp-example.html#a14\">brickShader/brickShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/cell_shader_2cell_shader_8cpp-example.html#a11\">cellShader/cellShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2plugin_main_8cpp-example.html#a9\">cgFx/pluginMain.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/checker_shader_2checker_shader_8cpp-example.html#a14\">checkerShader/checkerShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/circle_node_2circle_node_8cpp-example.html#a10\">circleNode/circleNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/clearcoat_8cpp-example.html#a12\">clearcoat.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/compositing_shader_2compositing_shader_8cpp-example.html#a10\">compositingShader/compositingShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/contrast_shader_2contrast_shader_8cpp-example.html#a14\">contrastShader/contrastShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/dds_float_reader_8cpp-example.html#a24\">ddsFloatReader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/depth_shader_2depth_shader_8cpp-example.html#a14\">depthShader/depthShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/displacement_shader_2displacement_shader_8cpp-example.html#a10\">displacementShader/displacementShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_plugin_main_8cpp-example.html#a4\">dx11Shader/dx11ShaderPluginMain.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/file_texture_2file_texture_8cpp-example.html#a40\">fileTexture/fileTexture.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/flame_shader_2flame_shader_8cpp-example.html#a12\">flameShader/flameShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/game_input_device_2game_input_device_8cpp-example.html#a18\">gameInputDevice/gameInputDevice.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/gamma_shader_2gamma_shader_8cpp-example.html#a15\">gammaShader/gammaShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/generic_attribute_node_2generic_attribute_node_8cpp-example.html#a21\">genericAttributeNode/genericAttributeNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometrytools_8cpp-example.html#a21\">geometrytools.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geom_shader_2geom_shader_8cpp-example.html#a10\">geomShader/geomShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_main_maya_8cpp-example.html#a4\">glslShader/GLSLShaderMainMaya.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/hair_collision_solver_2hair_collision_solver_8cpp-example.html#a21\">hairCollisionSolver/hairCollisionSolver.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_plugin_main_8cpp-example.html#a8\">hlslShader/hlslPluginMain.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/interp_shader_2interp_shader_8cpp-example.html#a11\">interpShader/interpShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/lambert_shader_2lambert_shader_8cpp-example.html#a12\">lambertShader/lambertShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/lava_shader_2lava_shader_8cpp-example.html#a11\">lavaShader/lavaShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/light_shader_2light_shader_8cpp-example.html#a11\">lightShader/lightShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/mixture_shader_2mixture_shader_8cpp-example.html#a14\">mixtureShader/mixtureShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/multi_curve_node_2multi_curve_node_8cpp-example.html#a11\">multiCurveNode/multiCurveNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/noise_shader_2noise_shader_8cpp-example.html#a12\">noiseShader/noiseShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/onb_shader_2onb_shader_8cpp-example.html#a13\">onbShader/onbShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_open_e_x_r_8cpp-example.html#a20\">OpenEXR.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/phong_shader_2phong_shader_8cpp-example.html#a12\">phongShader/phongShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/point_on_mesh_info_2point_on_mesh_info_node_8cpp-example.html#a6\">pointOnMeshInfo/pointOnMeshInfoNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/progress_window_cmd_2progress_window_cmd_8cpp-example.html#a7\">progressWindowCmd/progressWindowCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a15\">renderAccessNode/renderAccessNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8cpp-example.html#a11\">sceneAssembly/assemblyDefinition.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_reference_8cpp-example.html#a10\">sceneAssembly/assemblyReference.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/simple_image_file_2simple_image_file_8cpp-example.html#a21\">simpleImageFile/simpleImageFile.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_8cpp-example.html#a12\">simpleNoiseShader/simpleNoiseShader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/string_format_node_2string_format_node_8cpp-example.html#a13\">stringFormatNode/stringFormatNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/tiff_float_reader_8cpp-example.html#a21\">tiffFloatReader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/topology_tracking_node_2topology_tracking_node_8cpp-example.html#a15\">topologyTrackingNode/topologyTrackingNode.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/volume_shader_2volume_shader_8cpp-example.html#a10\">volumeShader/volumeShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"gaa0b0d94fa789676e65aedd442b47440e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define MFAIL</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">_status</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>True if the status is not <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">_status</td><td>The status code. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
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