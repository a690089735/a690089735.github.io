var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/transform3dHandler.h File Reference</title>\n\
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
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"ufe_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"ufe_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"ufe_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(ufe_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'ufe_ref/\'; }\n\
function ufe_ref_initializeToc(forceTrigger) {\n\
    ufe_ref_adsk_ref_toc.initResizable();\n\
    ufe_ref_adsk_ref_toc.initNavTree(\'transform3d_handler_8h.html\', tocPrefix);\n\
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
	  $(document).ready(ufe_ref_initializeToc);\n\
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
        var width = ufe_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(document).ready(function() { yepnope.injectJs(\"./ufe_ref/menudata.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./ufe_ref/menu.js\"); });</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { ufe_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ufe: include/ufe/transform3dHandler.h File Reference</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.14 -->\n\
\n\
\n\
\n\
\n\
<div id=\"main-nav\"></div>\n\
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
<div class=\"title\">transform3dHandler.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"transform3d_handler_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"transform3d_handler_8h.html#namespaces\">Namespaces</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_8h_source.html\">transform3d.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_8h_source.html\">sceneItem.h</a>&quot;</code><br>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
Include dependency graph for transform3dHandler.h:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/transform3d_handler_8h__incl.png\" border=\"0\" usemap=\"#include_2ufe_2transform3d_handler_8h\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2transform3d_handler_8h\" id=\"include_2ufe_2transform3d_handler_8h\">\n\
<area shape=\"rect\" id=\"node2\" href=\"transform3d_8h.html\" title=\"transform3d.h\" alt=\"\" coords=\"705,80,807,107\">\n\
<area shape=\"rect\" id=\"node5\" href=\"scene_item_8h.html\" title=\"sceneItem.h\" alt=\"\" coords=\"328,453,421,480\">\n\
<area shape=\"rect\" id=\"node3\" href=\"ufe_export_8h.html\" title=\"Definition of macros for symbol visibility. \" alt=\"\" coords=\"1099,752,1242,779\">\n\
<area shape=\"rect\" id=\"node14\" href=\"observer_8h.html\" title=\"observer.h\" alt=\"\" coords=\"873,677,957,704\">\n\
<area shape=\"rect\" id=\"node15\" href=\"transform3d_undoable_commands_8h.html\" title=\"transform3dUndoableCommands.h\" alt=\"\" coords=\"720,155,941,181\">\n\
<area shape=\"rect\" id=\"node22\" href=\"types_8h.html\" title=\"types.h\" alt=\"\" coords=\"1387,155,1451,181\">\n\
<area shape=\"rect\" id=\"node4\" href=\"ufe_8h.html\" title=\"../ufe.h\" alt=\"\" coords=\"963,827,1027,853\">\n\
<area shape=\"rect\" id=\"node6\" href=\"path_8h.html\" title=\"path.h\" alt=\"\" coords=\"345,528,404,555\">\n\
<area shape=\"rect\" id=\"node7\" href=\"path_segment_8h.html\" title=\"pathSegment.h\" alt=\"\" coords=\"321,603,429,629\">\n\
<area shape=\"rect\" id=\"node8\" href=\"rtid_8h.html\" title=\"rtid.h\" alt=\"\" coords=\"41,677,93,704\">\n\
<area shape=\"rect\" id=\"node10\" href=\"path_component_8h.html\" title=\"pathComponent.h\" alt=\"\" coords=\"421,677,544,704\">\n\
<area shape=\"rect\" id=\"node16\" href=\"base_undoable_commands_8h.html\" title=\"baseUndoableCommands.h\" alt=\"\" coords=\"740,229,919,256\">\n\
<area shape=\"rect\" id=\"node17\" href=\"undoable_command_8h.html\" title=\"undoableCommand.h\" alt=\"\" coords=\"909,379,1051,405\">\n\
<area shape=\"rect\" id=\"node20\" href=\"hierarchy_8h.html\" title=\"hierarchy.h\" alt=\"\" coords=\"785,304,871,331\">\n\
<area shape=\"rect\" id=\"node21\" href=\"scene_item_list_8h.html\" title=\"sceneItemList.h\" alt=\"\" coords=\"771,379,885,405\">\n\
</map>\n\
</div>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
This graph shows which files directly or indirectly include this file:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/transform3d_handler_8h__dep__incl.png\" border=\"0\" usemap=\"#include_2ufe_2transform3d_handler_8hdep\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2transform3d_handler_8hdep\" id=\"include_2ufe_2transform3d_handler_8hdep\">\n\
<area shape=\"rect\" id=\"node2\" href=\"run_time_mgr_8h.html\" title=\"include/ufe/runTimeMgr.h\" alt=\"\" coords=\"28,80,199,107\">\n\
</map>\n\
</div>\n\
</div>\n\
<p><a href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html\">Go to the source code of this file.</a></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html\">Ufe::Transform3dHandler</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Factory base class for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespace_ufe\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe.html\">Ufe</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";