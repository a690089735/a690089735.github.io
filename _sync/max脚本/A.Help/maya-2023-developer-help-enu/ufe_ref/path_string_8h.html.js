var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/pathString.h File Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'path_string_8h.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/pathString.h File Reference</h1>\n\
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
<div class=\"title\">pathString.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"path_string_8h.html#namespaces\">Namespaces</a> &#124;\n\
<a href=\"path_string_8h.html#typedef-members\">Typedefs</a> &#124;\n\
<a href=\"path_string_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" href=\"#!/url=./ufe_ref/path_8h_source.html\">path.h</a>&quot;</code><br>\n\
<code>#include &lt;string&gt;</code><br>\n\
<code>#include &lt;functional&gt;</code><br>\n\
<code>#include &lt;list&gt;</code><br>\n\
</div><div class=\"textblock\"><div class=\"dynheader\">\n\
Include dependency graph for pathString.h:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/path_string_8h__incl.png\" border=\"0\" usemap=\"#include_2ufe_2path_string_8h\" alt=\"\"></div>\n\
<map name=\"include_2ufe_2path_string_8h\" id=\"include_2ufe_2path_string_8h\">\n\
<area shape=\"rect\" id=\"node2\" href=\"path_8h.html\" title=\"path.h\" alt=\"\" coords=\"225,80,283,107\">\n\
<area shape=\"rect\" id=\"node3\" href=\"path_segment_8h.html\" title=\"pathSegment.h\" alt=\"\" coords=\"200,155,308,181\">\n\
<area shape=\"rect\" id=\"node4\" href=\"rtid_8h.html\" title=\"rtid.h\" alt=\"\" coords=\"416,229,468,256\">\n\
<area shape=\"rect\" id=\"node7\" href=\"path_component_8h.html\" title=\"pathComponent.h\" alt=\"\" coords=\"165,229,287,256\">\n\
<area shape=\"rect\" id=\"node5\" href=\"ufe_8h.html\" title=\"ufe.h\" alt=\"\" coords=\"273,379,323,405\">\n\
<area shape=\"rect\" id=\"node8\" href=\"ufe_export_8h.html\" title=\"Definition of macros for symbol visibility. \" alt=\"\" coords=\"84,304,227,331\">\n\
</map>\n\
</div>\n\
</div>\n\
<p><a href=\"#!/url=./ufe_ref/path_string_8h_source.html\">Go to the source code of this file.</a></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespace_ufe\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe.html\">Ufe</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:namespace_path_string\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_path_string.html\">PathString</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:namespace_ufe_1_1_path_string\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html\">Ufe::PathString</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"typedef-members\"></a>\n\
Typedefs</h2></td></tr>\n\
<tr class=\"memitem:a936d6733f733a4fbb42d6771cf22fa1e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::function&lt; Path(const Path::Segments &amp;)&gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a936d6733f733a4fbb42d6771cf22fa1e\">Ufe::PathString::CreatePathFn</a></td></tr>\n\
<tr class=\"separator:a936d6733f733a4fbb42d6771cf22fa1e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aecd1aef06d5c54642cd9a164471333f1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::function&lt; Path(const std::string &amp;)&gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#aecd1aef06d5c54642cd9a164471333f1\">Ufe::PathString::CreateSingleSegmentPathFn</a></td></tr>\n\
<tr class=\"separator:aecd1aef06d5c54642cd9a164471333f1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad5afe31c444ac563f18cd4c2bbbc28c2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::function&lt; std::string(const Path &amp;)&gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#ad5afe31c444ac563f18cd4c2bbbc28c2\">Ufe::PathString::StringFn</a></td></tr>\n\
<tr class=\"separator:ad5afe31c444ac563f18cd4c2bbbc28c2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a5d7966f2169231b7c351f5204ecbee96\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">Path&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a5d7966f2169231b7c351f5204ecbee96\">Ufe::PathString::path</a> (const std::string &amp;pathString)</td></tr>\n\
<tr class=\"separator:a5d7966f2169231b7c351f5204ecbee96\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0855049ed2caf0bad44650c2770cc82b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">std::string&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">Ufe::PathString::string</a> (const Path &amp;path)</td></tr>\n\
<tr class=\"separator:a0855049ed2caf0bad44650c2770cc82b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2310d97d931fba7a09ac1ff840109313\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">std::string&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a2310d97d931fba7a09ac1ff840109313\">Ufe::PathString::pathSegmentSeparator</a> ()</td></tr>\n\
<tr class=\"separator:a2310d97d931fba7a09ac1ff840109313\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5ff1ef8a6cab1b4235e126d7d8d8e20e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a5ff1ef8a6cab1b4235e126d7d8d8e20e\">Ufe::PathString::setPathSegmentSeparator</a> (const std::string &amp;separator)</td></tr>\n\
<tr class=\"separator:a5ff1ef8a6cab1b4235e126d7d8d8e20e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a34490917c4b24d8b716247cb39ad3624\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">CreatePathFn&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a34490917c4b24d8b716247cb39ad3624\">Ufe::PathString::createPathFn</a> ()</td></tr>\n\
<tr class=\"separator:a34490917c4b24d8b716247cb39ad3624\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4616df926f39dc1cae35c11aade749f7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a4616df926f39dc1cae35c11aade749f7\">Ufe::PathString::setCreatePathFn</a> (const CreatePathFn &amp;fn)</td></tr>\n\
<tr class=\"separator:a4616df926f39dc1cae35c11aade749f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1740efbfff8cdf59b9c4a05dad256217\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">CreateSingleSegmentPathFn&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a1740efbfff8cdf59b9c4a05dad256217\">Ufe::PathString::createSingleSegmentPathFn</a> (const Rtid &amp;rtId)</td></tr>\n\
<tr class=\"separator:a1740efbfff8cdf59b9c4a05dad256217\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa93033af0100aa251de65f8d6bea9a93\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#aa93033af0100aa251de65f8d6bea9a93\">Ufe::PathString::setCreateSingleSegmentPathFn</a> (const Rtid &amp;rtId, const CreateSingleSegmentPathFn &amp;fn)</td></tr>\n\
<tr class=\"separator:aa93033af0100aa251de65f8d6bea9a93\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acaaa60f36b47f531f8071cd50b9d1aa3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">StringFn&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#acaaa60f36b47f531f8071cd50b9d1aa3\">Ufe::PathString::stringFn</a> ()</td></tr>\n\
<tr class=\"separator:acaaa60f36b47f531f8071cd50b9d1aa3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a76c4b0b2fbebaec9f6bae8a1c8579f3c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a76c4b0b2fbebaec9f6bae8a1c8579f3c\">Ufe::PathString::setStringFn</a> (const StringFn &amp;fn)</td></tr>\n\
<tr class=\"separator:a76c4b0b2fbebaec9f6bae8a1c8579f3c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a56bfa10c4ee2673e9ce3b1af6a22468c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a56bfa10c4ee2673e9ce3b1af6a22468c\">Ufe::PathString::registerPathComponentSeparator</a> (const Rtid &amp;rtId, char sep)</td></tr>\n\
<tr class=\"separator:a56bfa10c4ee2673e9ce3b1af6a22468c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3e1e0c9c86521a35e1a7482f21610dbb\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a3e1e0c9c86521a35e1a7482f21610dbb\">Ufe::PathString::unregisterPathComponentSeparator</a> (const Rtid &amp;rtId, char sep)</td></tr>\n\
<tr class=\"separator:a3e1e0c9c86521a35e1a7482f21610dbb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a17b112541187ab579ff3332b9c52f38f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">std::list&lt; <a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Ufe::Rtid</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a17b112541187ab579ff3332b9c52f38f\">Ufe::PathString::pathComponentSeparatorRunTimeIds</a> (char sep)</td></tr>\n\
<tr class=\"separator:a17b112541187ab579ff3332b9c52f38f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";