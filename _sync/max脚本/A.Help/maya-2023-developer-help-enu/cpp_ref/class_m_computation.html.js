var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MComputation Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_computation.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MComputation Class Reference</h1>\n\
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
<div class=\"title\">MComputation Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_computation.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_computation.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_computation-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Interupt monitor for long computations.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_computation.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MComputation.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a82e8b526d9018cafbd7dc01f2e82a1fc\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a82e8b526d9018cafbd7dc01f2e82a1fc\">MComputation</a> ()</td></tr>\n\
<tr class=\"memdesc:a82e8b526d9018cafbd7dc01f2e82a1fc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html\" title=\"Interupt monitor for long computations. \">MComputation</a>.  <a href=\"class_m_computation.html#a82e8b526d9018cafbd7dc01f2e82a1fc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a82e8b526d9018cafbd7dc01f2e82a1fc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a09e5c7232d2218ba2007f118fc7fc3e7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a09e5c7232d2218ba2007f118fc7fc3e7\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a09e5c7232d2218ba2007f118fc7fc3e7\">~MComputation</a> ()</td></tr>\n\
<tr class=\"memdesc:a09e5c7232d2218ba2007f118fc7fc3e7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:a09e5c7232d2218ba2007f118fc7fc3e7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a21a0632b8283a671cd8f90fd82a99843\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a21a0632b8283a671cd8f90fd82a99843\">beginComputation</a> (bool showProgressBar=false, bool isInterruptable=true, bool useWaitCursor=true)</td></tr>\n\
<tr class=\"memdesc:a21a0632b8283a671cd8f90fd82a99843\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Mark the beginning of a long computation.  <a href=\"class_m_computation.html#a21a0632b8283a671cd8f90fd82a99843\">More...</a><br></td></tr>\n\
<tr class=\"separator:a21a0632b8283a671cd8f90fd82a99843\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8479086bd947ca42cd41eedbc922138\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac8479086bd947ca42cd41eedbc922138\">isInterruptRequested</a> ()</td></tr>\n\
<tr class=\"memdesc:ac8479086bd947ca42cd41eedbc922138\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query whether a user-interrupt has occurred.  <a href=\"class_m_computation.html#ac8479086bd947ca42cd41eedbc922138\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac8479086bd947ca42cd41eedbc922138\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaebee347f2af2f3a35b2ca106e4590f7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#aaebee347f2af2f3a35b2ca106e4590f7\">endComputation</a> ()</td></tr>\n\
<tr class=\"memdesc:aaebee347f2af2f3a35b2ca106e4590f7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Mark the ending of a long computation.  <a href=\"class_m_computation.html#aaebee347f2af2f3a35b2ca106e4590f7\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaebee347f2af2f3a35b2ca106e4590f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a805e0e9c09dc3b1c487aa4478366af12\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a805e0e9c09dc3b1c487aa4478366af12\">setProgressRange</a> (const int minValue, const int maxValue)</td></tr>\n\
<tr class=\"memdesc:a805e0e9c09dc3b1c487aa4478366af12\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the range (minValue, maxValue) of the progress indicator.  <a href=\"class_m_computation.html#a805e0e9c09dc3b1c487aa4478366af12\">More...</a><br></td></tr>\n\
<tr class=\"separator:a805e0e9c09dc3b1c487aa4478366af12\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac645e1332afc72f16823f08d05b21569\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac645e1332afc72f16823f08d05b21569\">progressMin</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:ac645e1332afc72f16823f08d05b21569\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the minimum progress value.  <a href=\"class_m_computation.html#ac645e1332afc72f16823f08d05b21569\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac645e1332afc72f16823f08d05b21569\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2569e04a53e41afe95d0f344e71c31de\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a2569e04a53e41afe95d0f344e71c31de\">progressMax</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a2569e04a53e41afe95d0f344e71c31de\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the maximum progress value.  <a href=\"class_m_computation.html#a2569e04a53e41afe95d0f344e71c31de\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2569e04a53e41afe95d0f344e71c31de\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac2a2d2f07a4ee5c2be43aa080cdc721b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac2a2d2f07a4ee5c2be43aa080cdc721b\">setProgress</a> (const int amount)</td></tr>\n\
<tr class=\"memdesc:ac2a2d2f07a4ee5c2be43aa080cdc721b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the progress value.  <a href=\"class_m_computation.html#ac2a2d2f07a4ee5c2be43aa080cdc721b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac2a2d2f07a4ee5c2be43aa080cdc721b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a398811fc18c8a07c187efc4f886a921c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a398811fc18c8a07c187efc4f886a921c\">progress</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a398811fc18c8a07c187efc4f886a921c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the progress value.  <a href=\"class_m_computation.html#a398811fc18c8a07c187efc4f886a921c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a398811fc18c8a07c187efc4f886a921c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0dfa9e3f908cd18b6edfcd1f4dca0d07\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a0dfa9e3f908cd18b6edfcd1f4dca0d07\">setProgressStatus</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a0dfa9e3f908cd18b6edfcd1f4dca0d07\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the progress status string.  <a href=\"class_m_computation.html#a0dfa9e3f908cd18b6edfcd1f4dca0d07\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0dfa9e3f908cd18b6edfcd1f4dca0d07\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_computation.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Interupt monitor for long computations. </p>\n\
<p>An <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html\" title=\"Interupt monitor for long computations. \">MComputation</a> allows long computations to check for user interrupts. It is very simple to use. Create a new <em><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html\" title=\"Interupt monitor for long computations. \">MComputation</a></em> object and call the <em>beginComputation</em> method at the beginning of the computation and call the <em>endComputation</em> method when you finish. Then, during the computation, use the <em>isInterruptRequested</em> method to check if the user has requested that the computation terminate.</p>\n\
<p><b>Example:</b> (of a simple traversal)</p>\n\
<div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html\">MComputation</a> computation;</div>\n\
<div class=\"line\">computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#a21a0632b8283a671cd8f90fd82a99843\">beginComputation</a>();</div>\n\
<div class=\"line\"><span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i= 1; i&lt;1000; i++) {</div>\n\
<div class=\"line\">    Computation();  <span class=\"comment\">// Some expensive operation</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>  (computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac8479086bd947ca42cd41eedbc922138\">isInterruptRequested</a>()) <span class=\"keywordflow\">break</span> ;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#aaebee347f2af2f3a35b2ca106e4590f7\">endComputation</a>();</div>\n\
</div><!-- fragment --><p>An alternate form of computation with a progress indicator is supported. In this case, the <em>beginProgressiveComputation</em> method is called along with the progress methods.</p>\n\
<p><b>Example:</b> (of a simple progressive traversal)</p>\n\
<div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html\">MComputation</a> computation;</div>\n\
<div class=\"line\">computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#a21a0632b8283a671cd8f90fd82a99843\">beginComputation</a>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#a805e0e9c09dc3b1c487aa4478366af12\">setProgressRange</a>( 0, 100 );</div>\n\
<div class=\"line\"><span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i= 1; i&lt;1000; i++) {</div>\n\
<div class=\"line\">    Computation();  <span class=\"comment\">// Some expensive operation</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>  (computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac8479086bd947ca42cd41eedbc922138\">isInterruptRequested</a>()) <span class=\"keywordflow\">break</span> ;</div>\n\
<div class=\"line\">    computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac2a2d2f07a4ee5c2be43aa080cdc721b\">setProgress</a>( (<span class=\"keywordtype\">int</span>)(i/1000.0 * 100.0) );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">computation.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_computation.html#aaebee347f2af2f3a35b2ca106e4590f7\">endComputation</a>();</div>\n\
</div><!-- fragment --> <dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/_abc_bullet_2_abc_bullet_8cpp-example.html#_a51\">AbcBullet/AbcBullet.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_abc_export_2_abc_export_8cpp-example.html#_a53\">AbcExport/AbcExport.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/anim_info_cmd_2anim_info_cmd_8cpp-example.html#_a54\">animInfoCmd/animInfoCmd.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a82e8b526d9018cafbd7dc01f2e82a1fc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html\">MComputation</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html\" title=\"Interupt monitor for long computations. \">MComputation</a>. </p>\n\
<p>Instantiate an <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html\" title=\"Interupt monitor for long computations. \">MComputation</a> before entering a long computation that should be interruptible. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a21a0632b8283a671cd8f90fd82a99843\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void beginComputation </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>showProgressBar</em> = <code>false</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>isInterruptable</em> = <code>true</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>useWaitCursor</em> = <code>true</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Mark the beginning of a long computation. </p>\n\
<p>The application will begin looking for user interupts.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">showProgressBar</td><td>if true a progress bar is displayed </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">isInterruptable</td><td>ESC can be used in conjunction with the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#ac8479086bd947ca42cd41eedbc922138\" title=\"Query whether a user-interrupt has occurred. \">isInterruptRequested()</a> method to stop the computation. In this case <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_computation.html#a0dfa9e3f908cd18b6edfcd1f4dca0d07\" title=\"Sets the progress status string. \">setProgressStatus()</a> should not be called. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">useWaitCursor</td><td>if true, cursor goes busy during computation </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/_abc_bullet_2_abc_bullet_8cpp-example.html#a52\">AbcBullet/AbcBullet.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_abc_export_2_abc_export_8cpp-example.html#a54\">AbcExport/AbcExport.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/anim_info_cmd_2anim_info_cmd_8cpp-example.html#a55\">animInfoCmd/animInfoCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac8479086bd947ca42cd41eedbc922138\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool isInterruptRequested </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Query whether a user-interrupt has occurred. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if an interrupt has occurred </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/_abc_bullet_2_abc_bullet_8cpp-example.html#a56\">AbcBullet/AbcBullet.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_abc_export_2_abc_export_8cpp-example.html#a56\">AbcExport/AbcExport.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/anim_info_cmd_2anim_info_cmd_8cpp-example.html#a58\">animInfoCmd/animInfoCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaebee347f2af2f3a35b2ca106e4590f7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void endComputation </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Mark the ending of a long computation. </p>\n\
<p>The application will stop looking for user interupts. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/_abc_bullet_2_abc_bullet_8cpp-example.html#a60\">AbcBullet/AbcBullet.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_abc_export_2_abc_export_8cpp-example.html#a57\">AbcExport/AbcExport.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/anim_info_cmd_2anim_info_cmd_8cpp-example.html#a59\">animInfoCmd/animInfoCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a805e0e9c09dc3b1c487aa4478366af12\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setProgressRange </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const int&#160;</td>\n\
          <td class=\"paramname\"><em>minValue</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const int&#160;</td>\n\
          <td class=\"paramname\"><em>maxValue</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the range (minValue, maxValue) of the progress indicator. </p>\n\
<p>When the progress value is set to a value of minValue, the progress bar is displayed as empty. When the progress value is set to a value of maxValue, the progress bar is displayed as full. Intermediate progress values are displayed as intermediate positions of the progress bar.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">minValue</td><td>Minimum progress value </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">maxValue</td><td>Maximum progress value</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The range was set successfully. </li>\n\
<li><b>MS::kInvalidParameter</b> max is less than or equal to min. </li>\n\
<li><b>MS::kFailure</b> Progress has not been started or computation was not started with a progress bar. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/anim_info_cmd_2anim_info_cmd_8cpp-example.html#a56\">animInfoCmd/animInfoCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac645e1332afc72f16823f08d05b21569\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int progressMin </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the minimum progress value. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Minimum progress value. Returns -1 if query fails.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The method was successful. </li>\n\
<li><b>MS::kFailure</b> An object error has occurred or the computation was not started with a progress bar. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2569e04a53e41afe95d0f344e71c31de\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int progressMax </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the maximum progress value. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Maximum progress value. Returns -1 if query fails.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The method was successful. </li>\n\
<li><b>MS::kFailure</b> An object error has occurred or the computation was not started with a progress bar. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac2a2d2f07a4ee5c2be43aa080cdc721b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setProgress </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const int&#160;</td>\n\
          <td class=\"paramname\"><em>amount</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the progress value. </p>\n\
<p>Advancing the progress value updates the progress bar to show the new amount of progress.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">amount</td><td>New progress value</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Progress value set. </li>\n\
<li><b>MS::kFailure</b> Progress has not been started or computation was not started with progress bar. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example5\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example5-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example5-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/anim_info_cmd_2anim_info_cmd_8cpp-example.html#a57\">animInfoCmd/animInfoCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a398811fc18c8a07c187efc4f886a921c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int progress </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the progress value. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Progress value. Returns -1 if query fails.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The method was successful. </li>\n\
<li><b>MS::kFailure</b> An object error has occurred or the computation was not started with a progress bar. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0dfa9e3f908cd18b6edfcd1f4dca0d07\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setProgressStatus </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>progressString</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the progress status string. </p>\n\
<p>For example, you could use this to display the percentage of the computation which has been completed.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">progressString</td><td>New status string</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Progress status set. </li>\n\
<li><b>MS::kFailure</b> Progress has not been started or the computation was not started with a progress bar. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const char * className </td>\n\
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
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MComputation.h</li>\n\
<li>MComputation.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";