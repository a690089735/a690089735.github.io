var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/attributesHandler.h Source File</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'attributes_handler_8h_source.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/attributesHandler.h Source File</h1>\n\
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
<div class=\"title\">attributesHandler.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/attributes_handler_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/include/attributesHandler.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"preprocessor\">#ifndef _ufe_attributesHandler</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"preprocessor\">#define _ufe_attributesHandler</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;</div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// =======================================================================</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">// Copyright 2019 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// This computer source code and related instructions and comments are the</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// unpublished confidential  and proprietary information of Autodesk, Inc.</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// and are protected under applicable copyright and trade secret law. They </span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">// may not be disclosed to, copied  or used by any third party without the </span></div><div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">// prior written consent of Autodesk, Inc.</span></div><div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">// =======================================================================</span></div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;</div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html\">common/ufeExport.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/attributes_8h.html\">attributes.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;</div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\">#include &lt;memory&gt;</span></div><div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;</div><div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a> {</div><div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div><div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">   31</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">AttributesHandler</a></div><div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;{</div><div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html#aa0f620a5f68aac05a24e6be511b673b6\">   34</a></span>&#160;    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;AttributesHandler&gt; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html#aa0f620a5f68aac05a24e6be511b673b6\">Ptr</a>;</div><div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;</div><div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">AttributesHandler</a>();</div><div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">AttributesHandler</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">AttributesHandler</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;    <span class=\"keyword\">virtual</span> ~<a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">AttributesHandler</a>();</div><div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div><div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes.html#ac959a7436c99d17d23339b9864cde996\">Attributes::Ptr</a> attributes(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&amp; item) <span class=\"keyword\">const</span> = 0;</div><div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;};</div><div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;</div><div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;}</div><div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;</div><div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;<span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _ufe_attributesHandler */</span><span class=\"preprocessor\"></span></div><div class=\"ttc\" id=\"attributes_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/attributes_8h.html\">attributes.h</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html\">ufeExport.h</a></div><div class=\"ttdoc\">Definition of macros for symbol visibility. </div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_attributes_html_ac959a7436c99d17d23339b9864cde996\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes.html#ac959a7436c99d17d23339b9864cde996\">Ufe::Attributes::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; Attributes &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/attributes_8h_source.html#l00052\">attributes.h:52</a></div></div>\n\
<div class=\"ttc\" id=\"scene_item_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_8h_html_ace10975c3aafd47ddd2e6da6a4ba3dc4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a></div><div class=\"ttdeci\">#define UFE_NS_DEF</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_8h_source.html#l00035\">ufe.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_attributes_handler_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html\">Ufe::AttributesHandler</a></div><div class=\"ttdoc\">Factory base class for Attributes interface. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/attributes_handler_8h_source.html#l00031\">attributesHandler.h:31</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_scene_item_html_ab24173dfba9e2c86e98079dd39808862\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">Ufe::SceneItem::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; SceneItem &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_item_8h_source.html#l00040\">sceneItem.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_attributes_handler_html_aa0f620a5f68aac05a24e6be511b673b6\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_attributes_handler.html#aa0f620a5f68aac05a24e6be511b673b6\">Ufe::AttributesHandler::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; AttributesHandler &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/attributes_handler_8h_source.html#l00034\">attributesHandler.h:34</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html_a5a95fd8c6f99bb054cdf4bf206406055\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"ttdeci\">#define UFE_SDK_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00036\">ufeExport.h:36</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";