var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MCacheSchemaAttributesIterator Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_cache_schema_attributes_iterator.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MCacheSchemaAttributesIterator Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MCacheSchemaAttributesIterator Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_cache_schema_attributes_iterator.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><b>Introduced in 2020.0</b>  \n\
 <a href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MCacheSchema.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad4b849904be4ebb2a0c3902045e91c2c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad4b849904be4ebb2a0c3902045e91c2c\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator.html#ad4b849904be4ebb2a0c3902045e91c2c\">MCacheSchemaAttributesIterator</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema.html\">MCacheSchema</a> *)</td></tr>\n\
<tr class=\"memdesc:ad4b849904be4ebb2a0c3902045e91c2c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Construct an attribute iterator at the begin of the schema. <br></td></tr>\n\
<tr class=\"separator:ad4b849904be4ebb2a0c3902045e91c2c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5861d7b000a4a48163434dcf6e2e091c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5861d7b000a4a48163434dcf6e2e091c\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator.html#a5861d7b000a4a48163434dcf6e2e091c\">MCacheSchemaAttributesIterator</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema.html\">MCacheSchema</a> *, <a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_cache_schema_attributes_iterator_sentinel.html\">Sentinel</a>)</td></tr>\n\
<tr class=\"memdesc:a5861d7b000a4a48163434dcf6e2e091c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Construct an attribute iterator at the end of the schema. <br></td></tr>\n\
<tr class=\"separator:a5861d7b000a4a48163434dcf6e2e091c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7a8a81f3f7bcfe96a22a86d26bb27481\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">reference</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator.html#a7a8a81f3f7bcfe96a22a86d26bb27481\">get</a> () const </td></tr>\n\
<tr class=\"memdesc:a7a8a81f3f7bcfe96a22a86d26bb27481\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the current element this iterator points to.  <a href=\"class_m_cache_schema_attributes_iterator.html#a7a8a81f3f7bcfe96a22a86d26bb27481\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7a8a81f3f7bcfe96a22a86d26bb27481\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6db83072bdb45ff66ab856903170c40d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6db83072bdb45ff66ab856903170c40d\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator.html#a6db83072bdb45ff66ab856903170c40d\">done</a> () const </td></tr>\n\
<tr class=\"memdesc:a6db83072bdb45ff66ab856903170c40d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Check if this iterator has reached the end of the range. <br></td></tr>\n\
<tr class=\"separator:a6db83072bdb45ff66ab856903170c40d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8903a4e9f3d5fb42d0faa9d53e21d85c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema_attributes_iterator.html#a8903a4e9f3d5fb42d0faa9d53e21d85c\">advance</a> ()</td></tr>\n\
<tr class=\"memdesc:a8903a4e9f3d5fb42d0faa9d53e21d85c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Advance this iterator to the next element.  <a href=\"class_m_cache_schema_attributes_iterator.html#a8903a4e9f3d5fb42d0faa9d53e21d85c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8903a4e9f3d5fb42d0faa9d53e21d85c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p><b>Introduced in 2020.0</b> </p>\n\
<dl class=\"changelog_2020_0\"><dt><b><a class=\"el\" href=\"#!/url=./cpp_ref/changelog_2020_0.html#_changelog_2020_0000003\">2020.0:</a></b></dt><dd>Introduced in this version. </dd></dl>\n\
<p>Iterator object of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_cache_schema.html\" title=\"Introduced in 2020.0 \">MCacheSchema</a></p>\n\
<p>Satisfy the concept of ForwardRange&lt;const MPlug&gt; </p>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a7a8a81f3f7bcfe96a22a86d26bb27481\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MCacheSchemaAttributesIterator::reference</a> get </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the current element this iterator points to. </p>\n\
<p>[[expect: !done()]] </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8903a4e9f3d5fb42d0faa9d53e21d85c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void advance </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Advance this iterator to the next element. </p>\n\
<p>[[expect: !done()]] </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MCacheSchema.h</li>\n\
<li>MCacheSchema.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";