var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/subject.h File Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'subject_8h.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/subject.h File Reference</h1>\n\
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
<div class=\"title\">subject.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"subject_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"subject_8h.html#namespaces\">Namespaces</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/observer_8h_source.html\">observer.h</a>&quot;</code><br>\n\
<code>#include &lt;set&gt;</code><br>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
Include dependency graph for subject.h:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/subject_8h__incl.png\" border=\"0\" usemap=\"#include_2ufe_2subject_8h\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2subject_8h\" id=\"include_2ufe_2subject_8h\">\n\
<area shape=\"rect\" id=\"node2\" href=\"observer_8h.html\" title=\"observer.h\" alt=\"\" coords=\"100,80,184,107\">\n\
<area shape=\"rect\" id=\"node3\" href=\"ufe_export_8h.html\" title=\"Definition of macros for symbol visibility. \" alt=\"\" coords=\"5,155,148,181\">\n\
<area shape=\"rect\" id=\"node4\" href=\"ufe_8h.html\" title=\"../ufe.h\" alt=\"\" coords=\"45,229,109,256\">\n\
</map>\n\
</div>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
This graph shows which files directly or indirectly include this file:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/subject_8h__dep__incl.png\" border=\"0\" usemap=\"#include_2ufe_2subject_8hdep\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2subject_8hdep\" id=\"include_2ufe_2subject_8hdep\">\n\
<area shape=\"rect\" id=\"node2\" href=\"observable_selection_8h.html\" title=\"include/ufe/observableSelection.h\" alt=\"\" coords=\"5,80,220,107\">\n\
<area shape=\"rect\" id=\"node3\" href=\"scene_8h.html\" title=\"include/ufe/scene.h\" alt=\"\" coords=\"244,80,379,107\">\n\
</map>\n\
</div>\n\
</div>\n\
<p><a href=\"#!/url=./ufe_ref/subject_8h_source.html\">Go to the source code of this file.</a></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_observer.html\" title=\"Observer pattern Observer class. \">Observer</a> pattern <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\" title=\"Observer pattern Subject class. \">Subject</a> class.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification_guard.html\">Ufe::NotificationGuard</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\" title=\"Base class for all notifications. \">Notification</a> guard for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\" title=\"Observer pattern Subject class. \">Subject</a>.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification_guard.html#details\">More...</a><br></td></tr>\n\
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