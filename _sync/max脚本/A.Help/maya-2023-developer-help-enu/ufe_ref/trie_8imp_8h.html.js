var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/trie.imp.h File Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'trie_8imp_8h.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/trie.imp.h File Reference</h1>\n\
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
<div class=\"title\">trie.imp.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"trie_8imp_8h.html#namespaces\">Namespaces</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/trie_8h_source.html\">trie.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/ufe_assert_8h_source.html\">ufeAssert.h</a>&quot;</code><br>\n\
<code>#include &lt;numeric&gt;</code><br>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
Include dependency graph for trie.imp.h:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/trie_8imp_8h__incl.png\" border=\"0\" usemap=\"#include_2ufe_2trie_8imp_8h\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2trie_8imp_8h\" id=\"include_2ufe_2trie_8imp_8h\">\n\
<area shape=\"rect\" id=\"node2\" href=\"trie_8h.html\" title=\"trie.h\" alt=\"\" coords=\"199,80,251,107\">\n\
<area shape=\"rect\" id=\"node14\" href=\"ufe_assert_8h.html\" title=\"ufeAssert.h\" alt=\"\" coords=\"5,229,92,256\">\n\
<area shape=\"rect\" id=\"node3\" href=\"path_component_8h.html\" title=\"pathComponent.h\" alt=\"\" coords=\"242,304,365,331\">\n\
<area shape=\"rect\" id=\"node9\" href=\"path_8h.html\" title=\"path.h\" alt=\"\" coords=\"382,155,441,181\">\n\
<area shape=\"rect\" id=\"node4\" href=\"ufe_export_8h.html\" title=\"Definition of macros for symbol visibility. \" alt=\"\" coords=\"83,379,225,405\">\n\
<area shape=\"rect\" id=\"node5\" href=\"ufe_8h.html\" title=\"../ufe.h\" alt=\"\" coords=\"346,453,410,480\">\n\
<area shape=\"rect\" id=\"node10\" href=\"path_segment_8h.html\" title=\"pathSegment.h\" alt=\"\" coords=\"357,229,465,256\">\n\
<area shape=\"rect\" id=\"node11\" href=\"rtid_8h.html\" title=\"rtid.h\" alt=\"\" coords=\"541,304,593,331\">\n\
</map>\n\
</div>\n\
</div>\n\
<p><a href=\"#!/url=./ufe_ref/trie_8imp_8h_source.html\">Go to the source code of this file.</a></p>\n\
<table class=\"memberdecls\">\n\
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