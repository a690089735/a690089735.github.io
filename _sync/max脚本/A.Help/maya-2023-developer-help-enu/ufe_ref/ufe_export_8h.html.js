var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/common/ufeExport.h File Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'ufe_export_8h.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/common/ufeExport.h File Reference</h1>\n\
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
<div class=\"title\">ufeExport.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"ufe_export_8h.html#define-members\">Macros</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Definition of macros for symbol visibility.  \n\
<a href=\"ufe_export_8h.html#details\">More...</a></p>\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/ufe_8h_source.html\">../ufe.h</a>&quot;</code><br>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
Include dependency graph for ufeExport.h:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/ufe_export_8h__incl.png\" border=\"0\" usemap=\"#include_2ufe_2common_2ufe_export_8h\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2common_2ufe_export_8h\" id=\"include_2ufe_2common_2ufe_export_8h\">\n\
<area shape=\"rect\" id=\"node2\" href=\"ufe_8h.html\" title=\"../ufe.h\" alt=\"\" coords=\"43,95,107,121\">\n\
</map>\n\
</div>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
This graph shows which files directly or indirectly include this file:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/ufe_export_8h__dep__incl.png\" border=\"0\" usemap=\"#include_2ufe_2common_2ufe_export_8hdep\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2common_2ufe_export_8hdep\" id=\"include_2ufe_2common_2ufe_export_8hdep\">\n\
<area shape=\"rect\" id=\"node2\" href=\"attribute_8h.html\" title=\"include/ufe/attribute.h\" alt=\"\" coords=\"777,475,927,502\">\n\
<area shape=\"rect\" id=\"node3\" href=\"attributes_8h.html\" title=\"include/ufe/attributes.h\" alt=\"\" coords=\"924,565,1079,591\">\n\
<area shape=\"rect\" id=\"node4\" href=\"attributes_handler_8h.html\" title=\"include/ufe/attributesHandler.h\" alt=\"\" coords=\"727,654,927,681\">\n\
<area shape=\"rect\" id=\"node7\" href=\"path_component_8h.html\" title=\"include/ufe/pathComponent.h\" alt=\"\" coords=\"2741,95,2931,121\">\n\
<area shape=\"rect\" id=\"node11\" href=\"undoable_command_8h.html\" title=\"include/ufe/undoableCommand.h\" alt=\"\" coords=\"3219,393,3429,420\">\n\
<area shape=\"rect\" id=\"node12\" href=\"base_undoable_commands_8h.html\" title=\"include/ufe/baseUndoable\\lCommands.h\" alt=\"\" coords=\"3555,557,3725,599\">\n\
<area shape=\"rect\" id=\"node13\" href=\"camera_undoable_commands_8h.html\" title=\"include/ufe/cameraUndoable\\lCommands.h\" alt=\"\" coords=\"3543,647,3729,688\">\n\
<area shape=\"rect\" id=\"node14\" href=\"camera_8h.html\" title=\"include/ufe/camera.h\" alt=\"\" coords=\"3553,736,3697,763\">\n\
<area shape=\"rect\" id=\"node16\" href=\"transform3d_undoable_commands_8h.html\" title=\"include/ufe/transform3dUndoable\\lCommands.h\" alt=\"\" coords=\"2793,647,3007,688\">\n\
<area shape=\"rect\" id=\"node17\" href=\"transform3d_8h.html\" title=\"include/ufe/transform3d.h\" alt=\"\" coords=\"1908,736,2079,763\">\n\
<area shape=\"rect\" id=\"node19\" href=\"hierarchy_8h.html\" title=\"include/ufe/hierarchy.h\" alt=\"\" coords=\"3133,475,3288,502\">\n\
<area shape=\"rect\" id=\"node21\" href=\"context_ops_8h.html\" title=\"include/ufe/contextOps.h\" alt=\"\" coords=\"3723,475,3888,502\">\n\
<area shape=\"rect\" id=\"node23\" href=\"object3d_8h.html\" title=\"include/ufe/object3d.h\" alt=\"\" coords=\"2326,475,2477,502\">\n\
<area shape=\"rect\" id=\"node25\" href=\"scene_item_ops_8h.html\" title=\"include/ufe/sceneItemOps.h\" alt=\"\" coords=\"3414,475,3597,502\">\n\
<area shape=\"rect\" id=\"node31\" href=\"path_mapping_handler_8h.html\" title=\"include/ufe/pathMappingHandler.h\" alt=\"\" coords=\"504,393,723,420\">\n\
<area shape=\"rect\" id=\"node32\" href=\"ui_info_handler_8h.html\" title=\"include/ufe/uiInfoHandler.h\" alt=\"\" coords=\"144,475,323,502\">\n\
<area shape=\"rect\" id=\"node33\" href=\"scene_8h.html\" title=\"include/ufe/scene.h\" alt=\"\" coords=\"2163,565,2298,591\">\n\
<area shape=\"rect\" id=\"node43\" href=\"observer_8h.html\" title=\"include/ufe/observer.h\" alt=\"\" coords=\"1040,393,1192,420\">\n\
<area shape=\"rect\" id=\"node45\" href=\"types_8h.html\" title=\"include/ufe/types.h\" alt=\"\" coords=\"195,393,327,420\">\n\
<area shape=\"rect\" id=\"node47\" href=\"value_8h.html\" title=\"include/ufe/value.h\" alt=\"\" coords=\"246,169,378,196\">\n\
<area shape=\"rect\" id=\"node48\" href=\"notification_8h.html\" title=\"include/ufe/notification.h\" alt=\"\" coords=\"1633,319,1796,345\">\n\
<area shape=\"rect\" id=\"node49\" href=\"global_selection_8h.html\" title=\"include/ufe/globalSelection.h\" alt=\"\" coords=\"4021,169,4208,196\">\n\
<area shape=\"rect\" id=\"node50\" href=\"log_8h.html\" title=\"include/ufe/log.h\" alt=\"\" coords=\"4385,95,4503,121\">\n\
<area shape=\"rect\" id=\"node51\" href=\"named_selection_8h.html\" title=\"include/ufe/namedSelection.h\" alt=\"\" coords=\"4527,95,4718,121\">\n\
<area shape=\"rect\" id=\"node52\" href=\"string_utils_8h.html\" title=\"include/ufe/stringUtils.h\" alt=\"\" coords=\"4742,95,4901,121\">\n\
<area shape=\"rect\" id=\"node53\" href=\"ufe_assert_8h.html\" title=\"include/ufe/ufeAssert.h\" alt=\"\" coords=\"3932,244,4087,271\">\n\
<area shape=\"rect\" id=\"node54\" href=\"version_info_8h.html\" title=\"include/ufe/versionInfo.h\" alt=\"\" coords=\"4925,95,5091,121\">\n\
<area shape=\"rect\" id=\"node6\" href=\"scene_item_utils_8h.html\" title=\"include/ufe/sceneItemUtils.h\" alt=\"\" coords=\"1897,654,2084,681\">\n\
<area shape=\"rect\" id=\"node5\" href=\"run_time_mgr_8h.html\" title=\"include/ufe/runTimeMgr.h\" alt=\"\" coords=\"2413,885,2584,912\">\n\
<area shape=\"rect\" id=\"node8\" href=\"path_segment_8h.html\" title=\"include/ufe/pathSegment.h\" alt=\"\" coords=\"2748,169,2924,196\">\n\
<area shape=\"rect\" id=\"node40\" href=\"trie_8h.html\" title=\"include/ufe/trie.h\" alt=\"\" coords=\"3885,319,4005,345\">\n\
<area shape=\"rect\" id=\"node9\" href=\"path_8h.html\" title=\"include/ufe/path.h\" alt=\"\" coords=\"2915,244,3042,271\">\n\
<area shape=\"rect\" id=\"node42\" href=\"ufe_except_8h.html\" title=\"include/ufe/ufeExcept.h\" alt=\"\" coords=\"2615,319,2772,345\">\n\
<area shape=\"rect\" id=\"node10\" href=\"scene_item_8h.html\" title=\"include/ufe/sceneItem.h\" alt=\"\" coords=\"2898,319,3059,345\">\n\
<area shape=\"rect\" id=\"node27\" href=\"selection_undoable_commands_8h.html\" title=\"include/ufe/selectionUndoable\\lCommands.h\" alt=\"\" coords=\"3963,468,4157,509\">\n\
<area shape=\"rect\" id=\"node37\" href=\"attributes_notification_8h.html\" title=\"include/ufe/attributesNotification.h\" alt=\"\" coords=\"797,393,1016,420\">\n\
<area shape=\"rect\" id=\"node38\" href=\"object3d_notification_8h.html\" title=\"include/ufe/object3dNotification.h\" alt=\"\" coords=\"1369,393,1583,420\">\n\
<area shape=\"rect\" id=\"node39\" href=\"path_string_8h.html\" title=\"include/ufe/pathString.h\" alt=\"\" coords=\"3083,319,3242,345\">\n\
<area shape=\"rect\" id=\"node15\" href=\"camera_handler_8h.html\" title=\"include/ufe/cameraHandler.h\" alt=\"\" coords=\"3411,811,3600,837\">\n\
<area shape=\"rect\" id=\"node18\" href=\"transform3d_handler_8h.html\" title=\"include/ufe/transform3dHandler.h\" alt=\"\" coords=\"2391,811,2607,837\">\n\
<area shape=\"rect\" id=\"node20\" href=\"hierarchy_handler_8h.html\" title=\"include/ufe/hierarchyHandler.h\" alt=\"\" coords=\"3083,565,3283,591\">\n\
<area shape=\"rect\" id=\"node22\" href=\"context_ops_handler_8h.html\" title=\"include/ufe/contextOpsHandler.h\" alt=\"\" coords=\"3820,565,4031,591\">\n\
<area shape=\"rect\" id=\"node24\" href=\"object3d_handler_8h.html\" title=\"include/ufe/object3dHandler.h\" alt=\"\" coords=\"2648,565,2843,591\">\n\
<area shape=\"rect\" id=\"node26\" href=\"scene_item_ops_handler_8h.html\" title=\"include/ufe/sceneItemOps\\lHandler.h\" alt=\"\" coords=\"3307,557,3479,599\">\n\
<area shape=\"rect\" id=\"node28\" href=\"camera_notification_8h.html\" title=\"include/ufe/cameraNotification.h\" alt=\"\" coords=\"2105,393,2313,420\">\n\
<area shape=\"rect\" id=\"node29\" href=\"selection_8h.html\" title=\"include/ufe/selection.h\" alt=\"\" coords=\"2603,475,2754,502\">\n\
<area shape=\"rect\" id=\"node34\" href=\"scene_notification_8h.html\" title=\"include/ufe/sceneNotification.h\" alt=\"\" coords=\"2338,393,2537,420\">\n\
<area shape=\"rect\" id=\"node35\" href=\"selection_notification_8h.html\" title=\"include/ufe/selectionNotification.h\" alt=\"\" coords=\"1607,393,1822,420\">\n\
<area shape=\"rect\" id=\"node36\" href=\"transform3d_notification_8h.html\" title=\"include/ufe/transform3dNotification.h\" alt=\"\" coords=\"1847,393,2081,420\">\n\
<area shape=\"rect\" id=\"node30\" href=\"observable_selection_8h.html\" title=\"include/ufe/observableSelection.h\" alt=\"\" coords=\"2334,565,2549,591\">\n\
<area shape=\"rect\" id=\"node41\" href=\"trie_8imp_8h.html\" title=\"include/ufe/trie.imp.h\" alt=\"\" coords=\"3910,393,4055,420\">\n\
<area shape=\"rect\" id=\"node44\" href=\"subject_8h.html\" title=\"include/ufe/subject.h\" alt=\"\" coords=\"2159,475,2302,502\">\n\
<area shape=\"rect\" id=\"node46\" href=\"debug_types_ostream_8h.html\" title=\"include/ufe/debugTypesOstream.h\" alt=\"\" coords=\"347,475,567,502\">\n\
</map>\n\
</div>\n\
</div>\n\
<p><a href=\"#!/url=./ufe_ref/ufe_export_8h_source.html\">Go to the source code of this file.</a></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:ad8f8f4efcccf3523b7a62039efd2c1fc\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#ad8f8f4efcccf3523b7a62039efd2c1fc\">UFE_EXPORT</a></td></tr>\n\
<tr class=\"separator:ad8f8f4efcccf3523b7a62039efd2c1fc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a66e7c20d7c47960270c0583d3c49eaf0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a66e7c20d7c47960270c0583d3c49eaf0\">UFE_IMPORT</a></td></tr>\n\
<tr class=\"separator:a66e7c20d7c47960270c0583d3c49eaf0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5a95fd8c6f99bb054cdf4bf206406055\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a>&#160;&#160;&#160;<a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a66e7c20d7c47960270c0583d3c49eaf0\">UFE_IMPORT</a></td></tr>\n\
<tr class=\"separator:a5a95fd8c6f99bb054cdf4bf206406055\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6c4ff23f08c5292c15aed0d1f76d5452\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a6c4ff23f08c5292c15aed0d1f76d5452\">UFE_EXTRA_DECL</a>&#160;&#160;&#160;<a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a66e7c20d7c47960270c0583d3c49eaf0\">UFE_IMPORT</a></td></tr>\n\
<tr class=\"separator:a6c4ff23f08c5292c15aed0d1f76d5452\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Definition of macros for symbol visibility. </p>\n\
\n\
<p class=\"definition\">Definition in file <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html\">ufeExport.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a id=\"ad8f8f4efcccf3523b7a62039efd2c1fc\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"ufe_export_8h.html#ad8f8f4efcccf3523b7a62039efd2c1fc\">&#9670;&nbsp;</a></span>UFE_EXPORT</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define UFE_EXPORT</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00027\">27</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html\">ufeExport.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a6c4ff23f08c5292c15aed0d1f76d5452\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"ufe_export_8h.html#a6c4ff23f08c5292c15aed0d1f76d5452\">&#9670;&nbsp;</a></span>UFE_EXTRA_DECL</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define UFE_EXTRA_DECL&#160;&#160;&#160;<a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a66e7c20d7c47960270c0583d3c49eaf0\">UFE_IMPORT</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00037\">37</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html\">ufeExport.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a66e7c20d7c47960270c0583d3c49eaf0\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"ufe_export_8h.html#a66e7c20d7c47960270c0583d3c49eaf0\">&#9670;&nbsp;</a></span>UFE_IMPORT</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define UFE_IMPORT</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00028\">28</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html\">ufeExport.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a5a95fd8c6f99bb054cdf4bf206406055\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">&#9670;&nbsp;</a></span>UFE_SDK_DECL</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">#define UFE_SDK_DECL&#160;&#160;&#160;<a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a66e7c20d7c47960270c0583d3c49eaf0\">UFE_IMPORT</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00036\">36</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/ufe_export_8h_source.html\">ufeExport.h</a>.</p>\n\
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