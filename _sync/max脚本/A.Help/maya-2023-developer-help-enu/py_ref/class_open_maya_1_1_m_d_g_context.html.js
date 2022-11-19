var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMaya.MDGContext Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_d_g_context.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>Python API 2.0 Reference: OpenMaya.MDGContext Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMaya.MDGContext Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Maya-API-introduction/Deprecating-Maya-API.html\">Maya API Basics &gt; Handling Deprecated API Calls</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Appendices/Appendix-C-Frequently-asked.html\">Appendices &gt; Appendix C: Frequently asked questions</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_d_g_context.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_d_g_context.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_d_g_context.html#pub-static-attribs\">Static Public Attributes</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MDGContext:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_d_g_context.png\" usemap=\"#OpenMaya.MDGContext_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MDGContext_map\" name=\"OpenMaya.MDGContext_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a99d5f57d1adcddcaa7587d68f5a3eec2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a99d5f57d1adcddcaa7587d68f5a3eec2\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a99d5f57d1adcddcaa7587d68f5a3eec2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adcbb5d1c5d520d5caa2b172685164bc4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#adcbb5d1c5d520d5caa2b172685164bc4\">copy</a> ()</td></tr>\n\
<tr class=\"separator:adcbb5d1c5d520d5caa2b172685164bc4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a796d51cb23c0b787ae6bbe231c6ec5d7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a796d51cb23c0b787ae6bbe231c6ec5d7\">getTime</a> ()</td></tr>\n\
<tr class=\"separator:a796d51cb23c0b787ae6bbe231c6ec5d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b2a17a7ae259c4caaa6af8b0259e5a0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a0b2a17a7ae259c4caaa6af8b0259e5a0\">isCurrent</a> ()</td></tr>\n\
<tr class=\"separator:a0b2a17a7ae259c4caaa6af8b0259e5a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad11a0ee58d6804fa2173f7e5990a7c3f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#ad11a0ee58d6804fa2173f7e5990a7c3f\">isNormal</a> ()</td></tr>\n\
<tr class=\"separator:ad11a0ee58d6804fa2173f7e5990a7c3f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3dcdc521f9d31ee6c93eb9991e615549\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a3dcdc521f9d31ee6c93eb9991e615549\">makeCurrent</a> ()</td></tr>\n\
<tr class=\"separator:a3dcdc521f9d31ee6c93eb9991e615549\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aadb3cf61a557d2c38e00ae1efcda1d88\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#aadb3cf61a557d2c38e00ae1efcda1d88\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:aadb3cf61a557d2c38e00ae1efcda1d88\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6834aee4cb837cd1309a5def7615d83a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a6834aee4cb837cd1309a5def7615d83a\">current</a> ()</td></tr>\n\
<tr class=\"separator:a6834aee4cb837cd1309a5def7615d83a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a1cf5982404e36472f23ae5ea823642b2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a1cf5982404e36472f23ae5ea823642b2\">kNormal</a> = &lt;OpenMaya.MDGContextobject&gt;</td></tr>\n\
<tr class=\"separator:a1cf5982404e36472f23ae5ea823642b2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Dependency graph context.</pre><hr>\n\
 <h2>Constructors</h2>\n\
<table class=\"ruled\">\n\
<tr>\n\
<th style=\"font-size:12pt\">Signature</th><th style=\"font-size:12pt\">Parameters</th><th style=\"font-size:12pt\">Description </th></tr>\n\
<tr>\n\
<td>MDGContext() </td><td>&#160; </td><td><p class=\"starttd\">Default constructor. Returns a new <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html\">MDGContext</a> object using the default context. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>MDGContext(src) </td><td>src - <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html\">MDGContext</a> </td><td><p class=\"starttd\">Copy constructor. Returns a new <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html\">MDGContext</a> object with the same value as <b>src</b>. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>MDGContext(time) </td><td>time - <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_time.html\">MTime</a> </td><td><p class=\"starttd\">Returns a new <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html\">MDGContext</a> object which will evaluate at the given <b>time</b>. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
</table>\n\
<p>&#160;</p>\n\
<hr>\n\
 </div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a99d5f57d1adcddcaa7587d68f5a3eec2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.__init__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Initialize self.  See help(type(self)) for accurate signature.</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aadb3cf61a557d2c38e00ae1efcda1d88\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.__new__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Create and return a new object.  See help(type) for accurate signature.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adcbb5d1c5d520d5caa2b172685164bc4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.copy </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">copy(source) -&gt; self\n\
\n\
Copy data from source context.\n\
\n\
* source (MDGContext) - The source object to copy from</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6834aee4cb837cd1309a5def7615d83a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.current </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns the current context being used for evaluation.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a796d51cb23c0b787ae6bbe231c6ec5d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.getTime </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns the time at which this context is set to evaluate.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#a796d51cb23c0b787ae6bbe231c6ec5d7\">getTime()</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">&#160;  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_time.html\">MTime</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Returns the time at which this context is set to evaluate. If the context does not have a specific time (i.e. it\'s a &quot;normal&quot; context) then a ValueError will be raised.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0b2a17a7ae259c4caaa6af8b0259e5a0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.isCurrent </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns True if the context is currently being used for evaluation. Returns False if some other context is being used for evaluation.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad11a0ee58d6804fa2173f7e5990a7c3f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.isNormal </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns True if the context is set to evaluate normally. Returns False if the context is set to evaluate at a specific time.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html#ad11a0ee58d6804fa2173f7e5990a7c3f\">isNormal()</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">&#160;  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\">bool  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Returns True if the context is set to evaluate normally. Returns False if the context is set to evaluate at a specific time.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3dcdc521f9d31ee6c93eb9991e615549\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.makeCurrent </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Makes this context the new current one being used for evaluation. Returns the previous evaluation context.</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a1cf5982404e36472f23ae5ea823642b2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MDGContext.kNormal = &lt;OpenMaya.MDGContextobject&gt;</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Name:</b> </td><td valign=\"top\">kNormal  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Type:</b> </td><td valign=\"top\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_context.html\">MDGContext</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Default/normal context.  </td></tr>\n\
</table>\n\
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