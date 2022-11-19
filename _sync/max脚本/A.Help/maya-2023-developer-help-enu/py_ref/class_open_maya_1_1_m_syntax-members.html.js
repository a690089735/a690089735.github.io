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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_syntax-members.html\', tocPrefix);\n\
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
<div class=\"title\">OpenMaya.MSyntax Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#aa8d1289fae2b9a42de7c84c775a37a3a\">__init__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a174fd02f7a7dbb2e00bcc19f06b145dc\">__new__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ad9b8c499fe50944cb64d6e48d3fef504\">addArg</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a71360d659ff4cb19f3f1bdc1d577a422\">addFlag</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a4c3fd48367751d2c84795af7a1be6ff6\">enableEdit</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a8333cf61fa64b7c2fa414ef66c70a436\">enableQuery</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a731083a4e6b69614ab512465c1054f2f\">kAngle</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ad5d714995a783d57ed19ed70adba2aa2\">kBoolean</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a3cd25d36b97217d5b5fc98570e31db6d\">kDistance</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a9b557d97e6ea6e2e7a3757b810a4c627\">kDouble</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a26423a7644872c53108a17544294e781\">kInvalidArgType</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a1ddb557404fe50231e86e269648b3949\">kInvalidObjectFormat</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#afd69df81135154cecad71dbaafa7f757\">kLastArgType</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a774dd0e43206dad1c776837452f655e3\">kLastObjectFormat</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#aa4f99321033d277eea623bff927a3d52\">kLong</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a181ae2a2f0f2dab97e4e2e9efb6e38c0\">kNoArg</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a59378646e172f8143062c790e36dd2dc\">kNone</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ab4a38a15b1d713205fcd706fd7f82f7f\">kSelectionItem</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a626d0c4f4413e74f4e943c7c749618c0\">kSelectionList</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a8ec3853641ce4211a26aeb12bfbd5685\">kString</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a1be6f5dfa1dc790a9d043a16291257dd\">kStringObjects</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#aaa12218cea6ed9ffac99f8c7c871698f\">kTime</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a4943b0b526f4142edf2c1781d0d27edf\">kUnsigned</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ad72abeb07b65e58b6b00320171a532d9\">makeFlagMultiUse</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#af4b5049223515a8420fcc450fc637226\">makeFlagQueryWithFullArgs</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a6f979ee670655eca860a76b1a758f1e1\">maxObjects</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ae727f5912b908d9929a44cc5c605d97a\">minObjects</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#ae83c0ce97755aa9f32a4738de530ed20\">setMaxObjects</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a950eafed4a70be40eb9fe9cade85309a\">setMinObjects</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a239dd57014ecdf117ef768a9095b6a23\">setObjectType</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a2cfcbbac4f687fcd7a1b9a052a576313\">useSelectionAsDefault</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html\">OpenMaya.MSyntax</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";