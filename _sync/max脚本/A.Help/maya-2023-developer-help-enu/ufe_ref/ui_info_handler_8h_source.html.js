var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/uiInfoHandler.h Source File</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'ui_info_handler_8h_source.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/uiInfoHandler.h Source File</h1>\n\
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
<div class=\"title\">uiInfoHandler.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/ui_info_handler_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/include/uiInfoHandler.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"preprocessor\">#ifndef _uiInfoHandler</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"preprocessor\">#define _uiInfoHandler</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;</div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">// Copyright 2020 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div><div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html\">common/ufeExport.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;</div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/types_8h.html\">types.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;</div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\">#include &lt;string&gt;</span></div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;</div><div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a> {</div><div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div><div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div><div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">   28</a></span>&#160;<span class=\"keyword\">struct </span><a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">CellInfo</a> {</div><div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;</div><div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">CellInfo</a>() = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">CellInfo</a>(</div><div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a>&amp; argFontName,</div><div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;        <span class=\"keywordtype\">double</span>             argFontPointSize,</div><div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;        <span class=\"keywordtype\">bool</span>               argFontBold,</div><div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;        <span class=\"keywordtype\">bool</span>               argFontItalics,</div><div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;        <span class=\"keywordtype\">bool</span>               argFontStrikeout,</div><div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_typed_color3.html\">Color3f</a>&amp;     argTextFgColor,</div><div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_typed_color3.html\">Color3f</a>&amp;     argTextBgColor</div><div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;    );</div><div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">CellInfo</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">CellInfo</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;</div><div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a7a0f11ef551f384d0b5f7f53423f702b\">   43</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a7a0f11ef551f384d0b5f7f53423f702b\">fontName</a>;</div><div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;</div><div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a2fc1656abddc8dcaa4ff00cb2d1d8d08\">   46</a></span>&#160;    <span class=\"keywordtype\">double</span> fontPointSize{-1.0};</div><div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;</div><div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#adf036a27d49b67fe0131ea0d7d0bc3cf\">   49</a></span>&#160;    <span class=\"keywordtype\">bool</span> fontBold{<span class=\"keyword\">false</span>};</div><div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div><div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#aece496915f5da0277cc7b03651f577f6\">   52</a></span>&#160;    <span class=\"keywordtype\">bool</span> fontItalics{<span class=\"keyword\">false</span>};</div><div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;</div><div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a38f22372176c95a833adec01bd554071\">   55</a></span>&#160;    <span class=\"keywordtype\">bool</span> fontStrikeout{<span class=\"keyword\">false</span>};</div><div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div><div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a3aaf376c5e10e7d9bf2fdaa523d6f346\">   58</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_typed_color3.html\">Color3f</a> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a3aaf376c5e10e7d9bf2fdaa523d6f346\">textFgColor</a>;</div><div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;</div><div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a424f1776aab8fe54c684d401d89da8c7\">   61</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_typed_color3.html\">Color3f</a> <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a424f1776aab8fe54c684d401d89da8c7\">textBgColor</a>;</div><div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;};</div><div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;</div><div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">   69</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">UIInfoHandler</a></div><div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;{</div><div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ac03cbce9442185b214b77cd9566dc363\">   72</a></span>&#160;    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;UIInfoHandler&gt; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ac03cbce9442185b214b77cd9566dc363\">Ptr</a>;</div><div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;</div><div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12af0960b35adbe25625ac33ef5582d1317\">   74</a></span>&#160;    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12\">Quadrant</a> {None, UpperLeft, <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12af0960b35adbe25625ac33ef5582d1317\">UpperRight</a>, LowerLeft, LowerRight};</div><div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;</div><div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html\">   76</a></span>&#160;    <span class=\"keyword\">struct </span><a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html\">Icon</a> {</div><div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a977962190851b3c17074531af20c8ac7\">   77</a></span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a977962190851b3c17074531af20c8ac7\">Icon</a>() {}</div><div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a6d33d003f1ee03a57178d07f54972db7\">   78</a></span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a6d33d003f1ee03a57178d07f54972db7\">Icon</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a>&amp; baseIconArg)</div><div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;            : baseIcon(baseIconArg) {}</div><div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#aa69fc9d2edb22e3c6b8a34dae49046df\">   80</a></span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#aa69fc9d2edb22e3c6b8a34dae49046df\">Icon</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a>&amp; baseIconArg, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a>&amp; badgeIconArg, <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12\">Quadrant</a> posArg)</div><div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;            : baseIcon(baseIconArg), badgeIcon(badgeIconArg), pos(posArg) {}</div><div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;</div><div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a45e6e23a997261e0a86d63e35cb8f5d3\">   83</a></span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a> baseIcon; <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a> badgeIcon; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12\">Quadrant</a> pos{None};</div><div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;    };</div><div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;</div><div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ptr</a> uiInfoHandler(<a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a> rt);</div><div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;</div><div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">UIInfoHandler</a>() = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">UIInfoHandler</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">UIInfoHandler</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;    <span class=\"keyword\">virtual</span> ~<a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">UIInfoHandler</a>() = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;</div><div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> treeViewCellInfo(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&amp; item, <a class=\"code\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">CellInfo</a>&amp; info) <span class=\"keyword\">const</span> = 0;</div><div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;</div><div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;    <span class=\"keyword\">virtual</span> Icon treeViewIcon(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&amp; item) <span class=\"keyword\">const</span>;</div><div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;</div><div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a> treeViewTooltip(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&amp; item) <span class=\"keyword\">const</span>;</div><div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;</div><div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\">  124</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a> getLongRunTimeLabel() <span class=\"keyword\">const</span> = 0;</div><div class=\"line\"><a name=\"l00125\"></a><span class=\"lineno\">  125</span>&#160;};</div><div class=\"line\"><a name=\"l00126\"></a><span class=\"lineno\">  126</span>&#160;</div><div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\">  127</span>&#160;}</div><div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;</div><div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;<span class=\"preprocessor\">#endif // _uiInfoHandler</span></div><div class=\"ttc\" id=\"class_ufe_1_1_u_i_info_handler_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00069\">uiInfoHandler.h:69</a></div></div>\n\
<div class=\"ttc\" id=\"types_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/types_8h.html\">types.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_u_i_info_handler_html_ac03cbce9442185b214b77cd9566dc363\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ac03cbce9442185b214b77cd9566dc363\">Ufe::UIInfoHandler::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; UIInfoHandler &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00072\">uiInfoHandler.h:72</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_u_i_info_handler_html_a3055c2964b9f1acc2b28fd311ba37d12af0960b35adbe25625ac33ef5582d1317\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12af0960b35adbe25625ac33ef5582d1317\">Ufe::UIInfoHandler::UpperRight</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00074\">uiInfoHandler.h:74</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_path_string_html_a0855049ed2caf0bad44650c2770cc82b\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">Ufe::PathString::string</a></div><div class=\"ttdeci\">std::string string(const Path &amp;path)</div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html\">ufeExport.h</a></div><div class=\"ttdoc\">Definition of macros for symbol visibility. </div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_global_selection_html_abcb6bd477b0d44a6ebf8b5f1e3573268\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ufe::GlobalSelection::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; ObservableSelection &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/global_selection_8h_source.html#l00035\">globalSelection.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_cell_info_html_a424f1776aab8fe54c684d401d89da8c7\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a424f1776aab8fe54c684d401d89da8c7\">Ufe::CellInfo::textBgColor</a></div><div class=\"ttdeci\">Color3f textBgColor</div><div class=\"ttdoc\">Text background color. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00061\">uiInfoHandler.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_typed_color3_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_typed_color3.html\">Ufe::TypedColor3&lt; float &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_u_i_info_handler_1_1_icon_html_a977962190851b3c17074531af20c8ac7\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a977962190851b3c17074531af20c8ac7\">Ufe::UIInfoHandler::Icon::Icon</a></div><div class=\"ttdeci\">Icon()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00077\">uiInfoHandler.h:77</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_html_ae2a11f66a975e1ca1ec00fb7fcbf6252\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Ufe::Rtid</a></div><div class=\"ttdeci\">uint32_t Rtid</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/rtid_8h_source.html#l00026\">rtid.h:26</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_u_i_info_handler_1_1_icon_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html\">Ufe::UIInfoHandler::Icon</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00076\">uiInfoHandler.h:76</a></div></div>\n\
<div class=\"ttc\" id=\"scene_item_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_8h_html_ace10975c3aafd47ddd2e6da6a4ba3dc4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a></div><div class=\"ttdeci\">#define UFE_NS_DEF</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_8h_source.html#l00035\">ufe.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_cell_info_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html\">Ufe::CellInfo</a></div><div class=\"ttdoc\">Structure for information to draw a text cell. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00028\">uiInfoHandler.h:28</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_u_i_info_handler_1_1_icon_html_aa69fc9d2edb22e3c6b8a34dae49046df\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#aa69fc9d2edb22e3c6b8a34dae49046df\">Ufe::UIInfoHandler::Icon::Icon</a></div><div class=\"ttdeci\">Icon(const std::string &amp;baseIconArg, const std::string &amp;badgeIconArg, Quadrant posArg)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00080\">uiInfoHandler.h:80</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_cell_info_html_a7a0f11ef551f384d0b5f7f53423f702b\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a7a0f11ef551f384d0b5f7f53423f702b\">Ufe::CellInfo::fontName</a></div><div class=\"ttdeci\">std::string fontName</div><div class=\"ttdoc\">Font family name. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00043\">uiInfoHandler.h:43</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_scene_item_html_ab24173dfba9e2c86e98079dd39808862\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">Ufe::SceneItem::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; SceneItem &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_item_8h_source.html#l00040\">sceneItem.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_u_i_info_handler_html_a3055c2964b9f1acc2b28fd311ba37d12\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12\">Ufe::UIInfoHandler::Quadrant</a></div><div class=\"ttdeci\">Quadrant</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00074\">uiInfoHandler.h:74</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_cell_info_html_a3aaf376c5e10e7d9bf2fdaa523d6f346\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_cell_info.html#a3aaf376c5e10e7d9bf2fdaa523d6f346\">Ufe::CellInfo::textFgColor</a></div><div class=\"ttdeci\">Color3f textFgColor</div><div class=\"ttdoc\">Text foreground color. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00058\">uiInfoHandler.h:58</a></div></div>\n\
<div class=\"ttc\" id=\"struct_ufe_1_1_u_i_info_handler_1_1_icon_html_a6d33d003f1ee03a57178d07f54972db7\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/struct_ufe_1_1_u_i_info_handler_1_1_icon.html#a6d33d003f1ee03a57178d07f54972db7\">Ufe::UIInfoHandler::Icon::Icon</a></div><div class=\"ttdeci\">Icon(const std::string &amp;baseIconArg)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ui_info_handler_8h_source.html#l00078\">uiInfoHandler.h:78</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html_a5a95fd8c6f99bb054cdf4bf206406055\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"ttdeci\">#define UFE_SDK_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00036\">ufeExport.h:36</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";