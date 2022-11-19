var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::SelectionCleared Class Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_selection_cleared.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::SelectionCleared Class Reference</h1>\n\
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
<div class=\"title\">Ufe::SelectionCleared Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_ufe_1_1_selection_cleared.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection.html\" title=\"Selection list for objects in the scene. \">Selection</a> cleared notification.  \n\
 <a href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;<a class=\"el\" href=\"#!/url=./ufe_ref/selection_notification_8h_source.html\">selectionNotification.h</a>&gt;</code></p>\n\
<div class=\"dynheader\">\n\
Inheritance diagram for Ufe::SelectionCleared:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/class_ufe_1_1_selection_cleared__inherit__graph.png\" border=\"0\" usemap=\"#_ufe_1_1_selection_cleared_inherit__map\" alt=\"Inheritance graph\"></div>\n\
<map name=\"_ufe_1_1_selection_cleared_inherit__map\" id=\"_ufe_1_1_selection_cleared_inherit__map\">\n\
<area shape=\"rect\" id=\"node2\" href=\"class_ufe_1_1_selection_changed.html\" title=\"Base class for all selection notifications. \" alt=\"\" coords=\"5,80,159,107\">\n\
<area shape=\"rect\" id=\"node3\" href=\"class_ufe_1_1_notification.html\" title=\"Base class for all notifications. \" alt=\"\" coords=\"24,5,140,32\">\n\
</map>\n\
<center><span class=\"legend\">[<a target=\"top\" href=\"#!/url=./ufe_ref/graph_legend.html\">legend</a>]</span></center></div>\n\
<div class=\"dynheader\">\n\
Collaboration diagram for Ufe::SelectionCleared:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/class_ufe_1_1_selection_cleared__coll__graph.png\" border=\"0\" usemap=\"#_ufe_1_1_selection_cleared_coll__map\" alt=\"Collaboration graph\"></div>\n\
<map name=\"_ufe_1_1_selection_cleared_coll__map\" id=\"_ufe_1_1_selection_cleared_coll__map\">\n\
<area shape=\"rect\" id=\"node2\" href=\"class_ufe_1_1_selection_changed.html\" title=\"Base class for all selection notifications. \" alt=\"\" coords=\"5,80,159,107\">\n\
<area shape=\"rect\" id=\"node3\" href=\"class_ufe_1_1_notification.html\" title=\"Base class for all notifications. \" alt=\"\" coords=\"24,5,140,32\">\n\
</map>\n\
<center><span class=\"legend\">[<a target=\"top\" href=\"#!/url=./ufe_ref/graph_legend.html\">legend</a>]</span></center></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a94f62ff8129d2d77796b2ce976d10cea\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared.html#a94f62ff8129d2d77796b2ce976d10cea\">SelectionCleared</a> ()</td></tr>\n\
<tr class=\"memdesc:a94f62ff8129d2d77796b2ce976d10cea\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_ufe_1_1_selection_cleared.html#a94f62ff8129d2d77796b2ce976d10cea\">More...</a><br></td></tr>\n\
<tr class=\"separator:a94f62ff8129d2d77796b2ce976d10cea\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad37534de3082e78d3328690f134c2447\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared.html#ad37534de3082e78d3328690f134c2447\">SelectionCleared</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared.html\">SelectionCleared</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:ad37534de3082e78d3328690f134c2447\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"class_ufe_1_1_selection_cleared.html#ad37534de3082e78d3328690f134c2447\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad37534de3082e78d3328690f134c2447\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4b5b0d7f1e3708f5c7a1642d8bf0b48c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared.html#a4b5b0d7f1e3708f5c7a1642d8bf0b48c\">~SelectionCleared</a> () override</td></tr>\n\
<tr class=\"memdesc:a4b5b0d7f1e3708f5c7a1642d8bf0b48c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_ufe_1_1_selection_cleared.html#a4b5b0d7f1e3708f5c7a1642d8bf0b48c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4b5b0d7f1e3708f5c7a1642d8bf0b48c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_ufe_1_1_selection_changed\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_ufe_1_1_selection_changed\')\"><img src=\"ufe_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html\">Ufe::SelectionChanged</a></td></tr>\n\
<tr class=\"memitem:a082edb42112d3b522c91b9d09d7fc956 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a082edb42112d3b522c91b9d09d7fc956\">SelectionChanged</a> ()</td></tr>\n\
<tr class=\"memdesc:a082edb42112d3b522c91b9d09d7fc956 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a082edb42112d3b522c91b9d09d7fc956\">More...</a><br></td></tr>\n\
<tr class=\"separator:a082edb42112d3b522c91b9d09d7fc956 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7507c015c28456b9df93ff799b3fc074 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a7507c015c28456b9df93ff799b3fc074\">SelectionChanged</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html\">SelectionChanged</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a7507c015c28456b9df93ff799b3fc074 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a7507c015c28456b9df93ff799b3fc074\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7507c015c28456b9df93ff799b3fc074 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a553e2cd91a704c7ea01c990ed038f5d0 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a553e2cd91a704c7ea01c990ed038f5d0\">~SelectionChanged</a> () override</td></tr>\n\
<tr class=\"memdesc:a553e2cd91a704c7ea01c990ed038f5d0 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a553e2cd91a704c7ea01c990ed038f5d0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a553e2cd91a704c7ea01c990ed038f5d0 inherit pub_methods_class_ufe_1_1_selection_changed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_ufe_1_1_notification\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_ufe_1_1_notification\')\"><img src=\"ufe_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td></tr>\n\
<tr class=\"memitem:a39d4807b6e56cd5ff7c72eda0f4cc3c1 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a39d4807b6e56cd5ff7c72eda0f4cc3c1\">Notification</a> ()</td></tr>\n\
<tr class=\"memdesc:a39d4807b6e56cd5ff7c72eda0f4cc3c1 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a39d4807b6e56cd5ff7c72eda0f4cc3c1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a39d4807b6e56cd5ff7c72eda0f4cc3c1 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61e6b6e3ee750f8b26f3b9fb531b74a2 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a61e6b6e3ee750f8b26f3b9fb531b74a2\">Notification</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Notification</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a61e6b6e3ee750f8b26f3b9fb531b74a2 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a61e6b6e3ee750f8b26f3b9fb531b74a2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a61e6b6e3ee750f8b26f3b9fb531b74a2 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a527f8a0c7522efe7199c889a7de63615 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a527f8a0c7522efe7199c889a7de63615\">~Notification</a> ()</td></tr>\n\
<tr class=\"memdesc:a527f8a0c7522efe7199c889a7de63615 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a527f8a0c7522efe7199c889a7de63615\">More...</a><br></td></tr>\n\
<tr class=\"separator:a527f8a0c7522efe7199c889a7de63615 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection.html\" title=\"Selection list for objects in the scene. \">Selection</a> cleared notification. </p>\n\
<p>This class notifies observers that the selection has been cleared. </p>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/selection_notification_8h_source.html#l00136\">136</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/selection_notification_8h_source.html\">selectionNotification.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a id=\"a94f62ff8129d2d77796b2ce976d10cea\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_selection_cleared.html#a94f62ff8129d2d77796b2ce976d10cea\">&#9670;&nbsp;</a></span>SelectionCleared() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::SelectionCleared::SelectionCleared </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"ad37534de3082e78d3328690f134c2447\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_selection_cleared.html#ad37534de3082e78d3328690f134c2447\">&#9670;&nbsp;</a></span>SelectionCleared() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::SelectionCleared::SelectionCleared </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_cleared.html\">SelectionCleared</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">default</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Default copy constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a4b5b0d7f1e3708f5c7a1642d8bf0b48c\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_selection_cleared.html#a4b5b0d7f1e3708f5c7a1642d8bf0b48c\">&#9670;&nbsp;</a></span>~SelectionCleared()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::SelectionCleared::~SelectionCleared </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">override</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>include/ufe/<a class=\"el\" href=\"#!/url=./ufe_ref/selection_notification_8h_source.html\">selectionNotification.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";