var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/pathSegment.h Source File</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'path_segment_8h_source.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/pathSegment.h Source File</h1>\n\
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
<div class=\"title\">pathSegment.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/path_segment_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/include/pathSegment.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"preprocessor\">#ifndef _ufePathSegment</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"preprocessor\">#define _ufePathSegment</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// Copyright 2018 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;</div><div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div><div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/rtid_8h.html\">rtid.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/path_component_8h.html\">pathComponent.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;</div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#include &lt;string&gt;</span></div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#include &lt;vector&gt;</span></div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;</div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a> {</div><div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;    <span class=\"keyword\">class </span>Path;</div><div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div><div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">   35</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a></div><div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;{</div><div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;</div><div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">   39</a></span>&#160;    <span class=\"keyword\">typedef</span> std::vector&lt;PathComponent&gt; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>;</div><div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;</div><div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>(</div><div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a>&amp; segment,</div><div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>               runTimeId,</div><div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;        <span class=\"keywordtype\">char</span>               separator</div><div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;    );</div><div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;</div><div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>(</div><div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>&amp; components,</div><div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>              runTimeId,</div><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;        <span class=\"keywordtype\">char</span>              separator</div><div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;    );</div><div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;</div><div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>(</div><div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>&amp;&amp; components,</div><div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>              runTimeId,</div><div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;        <span class=\"keywordtype\">char</span>              separator</div><div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;    ) noexcept; </div><div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;</div><div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>(</div><div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_component.html\">PathComponent</a>&amp; component,</div><div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>                 runTimeId,</div><div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;        <span class=\"keywordtype\">char</span>                 separator</div><div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;    );</div><div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;</div><div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;</div><div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;</div><div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>(<a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp;&amp;) noexcept;</div><div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;</div><div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp; operator=(<a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp;&amp; rhs) noexcept;</div><div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;</div><div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a> runTimeId() const;</div><div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;</div><div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;    <span class=\"keywordtype\">char</span> separator() const;</div><div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;</div><div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;    const <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>&amp; components() const;</div><div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;</div><div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a> pop() const;</div><div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;</div><div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a> popHead() const;</div><div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;</div><div class=\"line\"><a name=\"l00125\"></a><span class=\"lineno\">  125</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a> head(<span class=\"keywordtype\">int</span> nbComponents) const;</div><div class=\"line\"><a name=\"l00126\"></a><span class=\"lineno\">  126</span>&#160;</div><div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    <span class=\"keywordtype\">bool</span> operator==(const <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp; rhs) const;</div><div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;    <span class=\"keywordtype\">bool</span> operator!=(const <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp; rhs) const;</div><div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;</div><div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;    <span class=\"comment\">// Container of components interface.</span></div><div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;<span class=\"comment\"></span>    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::size_type      size() const;</div><div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;    <span class=\"keywordtype\">bool</span>                       empty() const;</div><div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;    </div><div class=\"line\"><a name=\"l00140\"></a><span class=\"lineno\">  140</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::const_iterator cbegin() const;</div><div class=\"line\"><a name=\"l00142\"></a><span class=\"lineno\">  142</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::const_iterator begin() const;</div><div class=\"line\"><a name=\"l00143\"></a><span class=\"lineno\">  143</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::const_iterator cend() const;</div><div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\">  144</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::const_iterator end() const;</div><div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::iterator       begin();</div><div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a>::iterator       end();</div><div class=\"line\"><a name=\"l00148\"></a><span class=\"lineno\">  148</span>&#160;</div><div class=\"line\"><a name=\"l00150\"></a><span class=\"lineno\">  150</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/namespacestd.html\">std</a>::<span class=\"keywordtype\">string</span> <span class=\"keywordtype\">string</span>() const;</div><div class=\"line\"><a name=\"l00151\"></a><span class=\"lineno\">  151</span>&#160;</div><div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;private:</div><div class=\"line\"><a name=\"l00153\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a4ff77a81222bf2a03dfc09e31b35faa8\">  153</a></span>&#160;    friend <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>;</div><div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#ab7f9307096817de28f73c46b399628a3\">  154</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Components</a> fComponents;</div><div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#afc63a2ec98997feae2292e39d44443c2\">  155</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>       fRunTimeId;</div><div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#aff6a7cb69f9bebed70c00a318adcf8d4\">  156</a></span>&#160;    <span class=\"keywordtype\">char</span>       fSeparator;</div><div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;};</div><div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;</div><div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;}</div><div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;</div><div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;<span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _ufePathSegment */</span><span class=\"preprocessor\"></span></div><div class=\"ttc\" id=\"class_ufe_1_1_path_segment_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">Ufe::PathSegment</a></div><div class=\"ttdoc\">A segment of a path within a single runtime. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_segment_8h_source.html#l00035\">pathSegment.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"rtid_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/rtid_8h.html\">rtid.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_path_string_html_a0855049ed2caf0bad44650c2770cc82b\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">Ufe::PathString::string</a></div><div class=\"ttdeci\">std::string string(const Path &amp;path)</div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_path_component_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_path_component.html\">Ufe::PathComponent</a></div><div class=\"ttdoc\">Constant string representation with fixed space and O(1) comparison. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_component_8h_source.html#l00033\">pathComponent.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"namespacestd_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespacestd.html\">std</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_8h_source.html#l00197\">path.h:197</a></div></div>\n\
<div class=\"ttc\" id=\"path_component_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/path_component_8h.html\">pathComponent.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_path_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Ufe::Path</a></div><div class=\"ttdoc\">Identify an object or 3D path in the scene. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_8h_source.html#l00037\">path.h:37</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_html_ae2a11f66a975e1ca1ec00fb7fcbf6252\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Ufe::Rtid</a></div><div class=\"ttdeci\">uint32_t Rtid</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/rtid_8h_source.html#l00026\">rtid.h:26</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_path_segment_html_a08d04c11abd91f3085417c5e543c6980\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html#a08d04c11abd91f3085417c5e543c6980\">Ufe::PathSegment::Components</a></div><div class=\"ttdeci\">std::vector&lt; PathComponent &gt; Components</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_segment_8h_source.html#l00039\">pathSegment.h:39</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_8h_html_ace10975c3aafd47ddd2e6da6a4ba3dc4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a></div><div class=\"ttdeci\">#define UFE_NS_DEF</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_8h_source.html#l00035\">ufe.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html_a5a95fd8c6f99bb054cdf4bf206406055\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"ttdeci\">#define UFE_SDK_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00036\">ufeExport.h:36</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";