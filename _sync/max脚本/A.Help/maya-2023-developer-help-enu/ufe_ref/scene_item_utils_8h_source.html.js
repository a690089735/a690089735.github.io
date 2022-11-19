var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/sceneItemUtils.h Source File</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'scene_item_utils_8h_source.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/sceneItemUtils.h Source File</h1>\n\
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
<div class=\"title\">sceneItemUtils.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/scene_item_utils_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/include/sceneItemUtils.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"preprocessor\">#ifndef _ufeSceneItemUtils</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"preprocessor\">#define _ufeSceneItemUtils</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// Copyright 2018 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;</div><div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/attributes_8h.html\">attributes.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;</div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a> {</div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;</div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;    uint64_t <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#acbe691c70b14da89f992d6ee6b3e85bf\">getRawAddress</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">SceneItem::Ptr</a>&amp; item);</div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;</div><div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">SceneItem::Ptr</a> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#a289e7f6a24080b8e02518d70d03272e1\">getSceneItemFromRaw</a>(uint64_t raw);</div><div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div><div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;    uint64_t <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#acbe691c70b14da89f992d6ee6b3e85bf\">getRawAddress</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Attributes::Ptr</a>&amp; item);</div><div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div><div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Attributes::Ptr</a> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#adb171b3b17e7411f3db1277f04c668f4\">getAttributesFromRaw</a>(uint64_t raw);</div><div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div><div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;}</div><div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div><div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _ufeSceneItemUtils */</span><span class=\"preprocessor\"></span></div><div class=\"ttc\" id=\"namespace_ufe_html_acbe691c70b14da89f992d6ee6b3e85bf\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe.html#acbe691c70b14da89f992d6ee6b3e85bf\">Ufe::getRawAddress</a></div><div class=\"ttdeci\">uint64_t getRawAddress(const Attributes::Ptr &amp;item)</div></div>\n\
<div class=\"ttc\" id=\"attributes_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/attributes_8h.html\">attributes.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_global_selection_html_abcb6bd477b0d44a6ebf8b5f1e3573268\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#abcb6bd477b0d44a6ebf8b5f1e3573268\">Ufe::GlobalSelection::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; ObservableSelection &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/global_selection_8h_source.html#l00035\">globalSelection.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"scene_item_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_8h_html_ace10975c3aafd47ddd2e6da6a4ba3dc4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a></div><div class=\"ttdeci\">#define UFE_NS_DEF</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_8h_source.html#l00035\">ufe.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_html_a289e7f6a24080b8e02518d70d03272e1\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe.html#a289e7f6a24080b8e02518d70d03272e1\">Ufe::getSceneItemFromRaw</a></div><div class=\"ttdeci\">SceneItem::Ptr getSceneItemFromRaw(uint64_t raw)</div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_html_adb171b3b17e7411f3db1277f04c668f4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe.html#adb171b3b17e7411f3db1277f04c668f4\">Ufe::getAttributesFromRaw</a></div><div class=\"ttdeci\">Attributes::Ptr getAttributesFromRaw(uint64_t raw)</div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html_a5a95fd8c6f99bb054cdf4bf206406055\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"ttdeci\">#define UFE_SDK_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00036\">ufeExport.h:36</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";