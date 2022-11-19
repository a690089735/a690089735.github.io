var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::GlobalSelection Namespace Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'namespace_ufe_1_1_global_selection.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::GlobalSelection Namespace Reference</h1>\n\
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
<div class=\"title\">Ufe::GlobalSelection Namespace Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"namespace_ufe_1_1_global_selection.html#typedef-members\">Typedefs</a> &#124;\n\
<a href=\"namespace_ufe_1_1_global_selection.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"typedef-members\"></a>\n\
Typedefs</h2></td></tr>\n\
<tr class=\"memitem:abcb6bd477b0d44a6ebf8b5f1e3573268\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::shared_ptr&lt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_observable_selection.html\">ObservableSelection</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ptr</a></td></tr>\n\
<tr class=\"separator:abcb6bd477b0d44a6ebf8b5f1e3573268\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a634fa9d70d5cf0de940542075a4a4ecf\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#a634fa9d70d5cf0de940542075a4a4ecf\">initializeInstance</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ptr</a> &amp;globalSelection)</td></tr>\n\
<tr class=\"separator:a634fa9d70d5cf0de940542075a4a4ecf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8ea34c169f894842c436f10202a35729\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ptr</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#a8ea34c169f894842c436f10202a35729\">get</a> ()</td></tr>\n\
<tr class=\"separator:a8ea34c169f894842c436f10202a35729\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Typedef Documentation</h2>\n\
<a id=\"abcb6bd477b0d44a6ebf8b5f1e3573268\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">&#9670;&nbsp;</a></span>Ptr</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">typedef std::shared_ptr&lt;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_observable_selection.html\">ObservableSelection</a>&gt; <a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ufe::GlobalSelection::Ptr</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/global_selection_8h_source.html#l00035\">35</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/global_selection_8h_source.html\">globalSelection.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a id=\"a8ea34c169f894842c436f10202a35729\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"namespace_ufe_1_1_global_selection.html#a8ea34c169f894842c436f10202a35729\">&#9670;&nbsp;</a></span>get()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ptr</a>&amp; Ufe::GlobalSelection::get </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The global observable selection </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a634fa9d70d5cf0de940542075a4a4ecf\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"namespace_ufe_1_1_global_selection.html#a634fa9d70d5cf0de940542075a4a4ecf\">&#9670;&nbsp;</a></span>initializeInstance()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void Ufe::GlobalSelection::initializeInstance </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ptr</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>globalSelection</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Initialize the observable selection singleton. This selection is useful for applications where user operations are done on a single selection that is shared by all viewers and editors. Initializing the global selection should be done on startup, and for proper selection lifescope management should be cleared with a null pointer on exit. If the current global selection is non-null, the argument must be null, to prevent initializing the global selection more than once. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">globalSelection</td><td>The single global selection for the application. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"exception\"><dt>Exceptions</dt><dd>\n\
  <table class=\"exception\">\n\
    <tr><td class=\"paramname\">std::invalid_argument</td><td>if the argument and current global selection are both non-null. </td></tr>\n\
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