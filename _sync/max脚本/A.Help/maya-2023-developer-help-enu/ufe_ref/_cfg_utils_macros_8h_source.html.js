var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/peptide/config/CfgUtilsMacros.h Source File</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'_cfg_utils_macros_8h_source.html\', tocPrefix);\n\
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
            <h1>ufe: include/peptide/config/CfgUtilsMacros.h Source File</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">CfgUtilsMacros.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/_cfg_utils_macros_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/gitmodules/peptide/src/config/CfgUtilsMacros.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">//-</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">// =============================================================================</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// Copyright 2019 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// =============================================================================</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">//+</span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;</div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;</div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\">#ifndef PEPTIDE_CPPUTILS_MACROS_H</span></div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#define PEPTIDE_CPPUTILS_MACROS_H</span></div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;</div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/_cfg_compiler_macros_8h.html\">CfgCompilerMacros.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;</div><div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;cassert&gt;</span></div><div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div><div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/_cfg_utils_macros_8h.html#a472eb4fd7d154feb5ab72b0d9a702cfb\">   27</a></span>&#160;<span class=\"preprocessor\">#define PEPTIDE_END_MACRO     static_assert(true, &quot;&quot;)</span></div><div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div><div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/_cfg_utils_macros_8h.html#a83a0c90562ee5e90d42a899d85f0c251\">   33</a></span>&#160;<span class=\"preprocessor\">#define PEPTIDE_IDENTITY(X) X</span></div><div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;</div><div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;<span class=\"preprocessor\">#if PEPTIDE_IS_CLANG || PEPTIDE_IS_GCC</span></div><div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;</div><div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;<span class=\"comment\">// NOLINT to silence up clang-tidy warning:</span></div><div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;<span class=\"comment\">// warning: found assert() that could be replaced by static_assert() [cert-dcl03-c]</span></div><div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;<span class=\"preprocessor\">#define PEPTIDE_UNREACHABLE(MSG)           \\</span></div><div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;<span class=\"preprocessor\">    assert(false &amp;&amp; MSG);     </span><span class=\"comment\">/* NOLINT */</span><span class=\"preprocessor\"> \\</span></div><div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;<span class=\"preprocessor\">    __builtin_unreachable()</span></div><div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;</div><div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;<span class=\"preprocessor\">#elif PEPTIDE_IS_MSC</span></div><div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div><div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;<span class=\"preprocessor\">#define PEPTIDE_UNREACHABLE(MSG) \\</span></div><div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;<span class=\"preprocessor\">    assert(false &amp;&amp; MSG);        \\</span></div><div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;<span class=\"preprocessor\">    __assume(false)</span></div><div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;</div><div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;<span class=\"preprocessor\">#else</span></div><div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;<span class=\"preprocessor\">#error &quot;PEPTIDE_UNREACHABLE(): Unsupported compiler!&quot;</span></div><div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/_cfg_utils_macros_8h.html#a4d3d22cdad14a621529f442cedc8c7df\">   63</a></span>&#160;<span class=\"preprocessor\">#define PEPTIDE_UNREACHABLE(MSG) assert(false &amp;&amp; MSG)</span></div><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;<span class=\"preprocessor\">#endif</span></div><div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div><div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;</div><div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;<span class=\"preprocessor\">#if PEPTIDE_IS_MSC</span></div><div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;<span class=\"preprocessor\">#define PEPTIDE_DEPRECATED(REASON)</span></div><div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;<span class=\"preprocessor\">#else</span></div><div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/_cfg_utils_macros_8h.html#a5b351c196fe85d6c27b26b58face07eb\">   98</a></span>&#160;<span class=\"preprocessor\">#define PEPTIDE_DEPRECATED(REASON) [[deprecated(REASON)]]</span></div><div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;<span class=\"preprocessor\">#endif</span></div><div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;</div><div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;<span class=\"preprocessor\">#endif</span></div><div class=\"ttc\" id=\"_cfg_compiler_macros_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/_cfg_compiler_macros_8h.html\">CfgCompilerMacros.h</a></div><div class=\"ttdoc\">Macro definition for identifying compilers and there capabilities. </div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";