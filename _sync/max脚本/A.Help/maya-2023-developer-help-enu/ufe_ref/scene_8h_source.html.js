var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/scene.h Source File</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'scene_8h_source.html\', tocPrefix);\n\
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
            <h1>ufe: include/ufe/scene.h Source File</h1>\n\
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
<div class=\"title\">scene.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/scene_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/include/scene.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"preprocessor\">#ifndef _scene</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"preprocessor\">#define _scene</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// Copyright 2018 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;</div><div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html\">common/ufeExport.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;</div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/subject_8h.html\">subject.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;</div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#include &lt;memory&gt;</span></div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;</div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a> {</div><div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;</div><div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"keyword\">class </span>ObjectAdd;</div><div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"keyword\">class </span>ObjectDelete;</div><div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"keyword\">class </span>ObjectPathChange;</div><div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">class </span>SubtreeInvalidate;</div><div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">class </span>Path;</div><div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"keyword\">class </span>SceneCompositeNotification;</div><div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;</div><div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;</div><div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">   42</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Subject</a></div><div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;{</div><div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;</div><div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a294c538bce10aeba16d5aa2e4a65a4c9\">   46</a></span>&#160;    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;Scene&gt; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a294c538bce10aeba16d5aa2e4a65a4c9\">Ptr</a>;</div><div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;</div><div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>&amp; instance();</div><div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div><div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#a634fa9d70d5cf0de940542075a4a4ecf\">initializeInstance</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a294c538bce10aeba16d5aa2e4a65a4c9\">Ptr</a>&amp; instance);</div><div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;</div><div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;    ~<a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>() <span class=\"keyword\">override</span>;</div><div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;</div><div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>&amp;) = <span class=\"keyword\">delete</span>;</div><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>&amp; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a0a5c3198cf798977837d45bb15e94672\">operator=</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>&amp;) = <span class=\"keyword\">delete</span>;</div><div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div><div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a209a853dde2b0da1f2cf91e69155edfb\">notify</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Notification</a>&amp; notification) <span class=\"keyword\">override</span>;</div><div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;</div><div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#af776a42c1957763a3d727771b90c6ae5\">inCompositeNotification</a>() <span class=\"keyword\">const override</span>;</div><div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div><div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;<span class=\"keyword\">protected</span>:</div><div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;</div><div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Scene</a>();</div><div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div><div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> postNotifyObjectAdd(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_add.html\">ObjectAdd</a>&amp; notification);</div><div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div><div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> postNotifyObjectDelete(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_delete.html\">ObjectDelete</a>&amp; notification);</div><div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;</div><div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> postNotifyObjectPathChange(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html\">ObjectPathChange</a>&amp; notification);</div><div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;</div><div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> postNotifySubtreeInvalidate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subtree_invalidate.html\">SubtreeInvalidate</a>&amp; notification);</div><div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;</div><div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> postNotifySceneCompositeChange(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">SceneCompositeNotification</a>&amp; notification);</div><div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;</div><div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a6515949cc83bc903d2f6ec74205177be\">beginNotificationGuard</a>() <span class=\"keyword\">override</span>;</div><div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a2ffa899b7be16a9e979701326aca9e9f\">endNotificationGuard</a>() <span class=\"keyword\">override</span>;</div><div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;</div><div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;<span class=\"keyword\">private</span>:</div><div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#aa45d27e7d5db1fc8bca965f355c7e213\">  118</a></span>&#160;    std::unique_ptr&lt;SceneCompositeNotification&gt; <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#aa45d27e7d5db1fc8bca965f355c7e213\">fCompositeNotification</a>;</div><div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;};</div><div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;</div><div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;}</div><div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div><div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;<span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _scene */</span><span class=\"preprocessor\"></span></div><div class=\"ttc\" id=\"class_ufe_1_1_object_add_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_add.html\">Ufe::ObjectAdd</a></div><div class=\"ttdoc\">Base class for object add scene notifications. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00047\">sceneNotification.h:47</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subject_html_a209a853dde2b0da1f2cf91e69155edfb\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a209a853dde2b0da1f2cf91e69155edfb\">Ufe::Subject::notify</a></div><div class=\"ttdeci\">virtual void notify(const Notification &amp;notification)</div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_scene_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></div><div class=\"ttdoc\">Singleton class to manage UFE scenes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_8h_source.html#l00042\">scene.h:42</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html\">ufeExport.h</a></div><div class=\"ttdoc\">Definition of macros for symbol visibility. </div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subject_html_af776a42c1957763a3d727771b90c6ae5\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#af776a42c1957763a3d727771b90c6ae5\">Ufe::Subject::inCompositeNotification</a></div><div class=\"ttdeci\">virtual bool inCompositeNotification() const</div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subject_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></div><div class=\"ttdoc\">Observer pattern Subject class. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/subject_8h_source.html#l00040\">subject.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_object_path_change_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html\">Ufe::ObjectPathChange</a></div><div class=\"ttdoc\">Base class for object path change scene notifications. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00170\">sceneNotification.h:170</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subtree_invalidate_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subtree_invalidate.html\">Ufe::SubtreeInvalidate</a></div><div class=\"ttdoc\">Subtree invalidate notification. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00338\">sceneNotification.h:338</a></div></div>\n\
<div class=\"ttc\" id=\"scene_item_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/scene_item_8h.html\">sceneItem.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subject_html_a0a5c3198cf798977837d45bb15e94672\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a0a5c3198cf798977837d45bb15e94672\">Ufe::Subject::operator=</a></div><div class=\"ttdeci\">Subject &amp; operator=(const Subject &amp;)</div><div class=\"ttdoc\">Assignment operator. Does nothing, as observers are not copied. </div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_scene_composite_notification_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></div><div class=\"ttdoc\">SceneChanged composite notification. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00369\">sceneNotification.h:369</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_8h_html_ace10975c3aafd47ddd2e6da6a4ba3dc4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a></div><div class=\"ttdeci\">#define UFE_NS_DEF</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_8h_source.html#l00035\">ufe.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_notification_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></div><div class=\"ttdoc\">Base class for all notifications. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/notification_8h_source.html#l00027\">notification.h:27</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_scene_html_a294c538bce10aeba16d5aa2e4a65a4c9\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a294c538bce10aeba16d5aa2e4a65a4c9\">Ufe::Scene::Ptr</a></div><div class=\"ttdeci\">std::shared_ptr&lt; Scene &gt; Ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_8h_source.html#l00046\">scene.h:46</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_global_selection_html_a634fa9d70d5cf0de940542075a4a4ecf\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_global_selection.html#a634fa9d70d5cf0de940542075a4a4ecf\">Ufe::GlobalSelection::initializeInstance</a></div><div class=\"ttdeci\">void initializeInstance(const Ptr &amp;globalSelection)</div></div>\n\
<div class=\"ttc\" id=\"subject_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/subject_8h.html\">subject.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subject_html_a6515949cc83bc903d2f6ec74205177be\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a6515949cc83bc903d2f6ec74205177be\">Ufe::Subject::beginNotificationGuard</a></div><div class=\"ttdeci\">virtual void beginNotificationGuard()</div><div class=\"ttdoc\">Notification guard interface. Implementation in this class is a no-op. </div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_scene_html_aa45d27e7d5db1fc8bca965f355c7e213\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#aa45d27e7d5db1fc8bca965f355c7e213\">Ufe::Scene::fCompositeNotification</a></div><div class=\"ttdeci\">std::unique_ptr&lt; SceneCompositeNotification &gt; fCompositeNotification</div><div class=\"ttdoc\">Composite notification, when within the scope of a guard. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_8h_source.html#l00118\">scene.h:118</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_object_delete_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_delete.html\">Ufe::ObjectDelete</a></div><div class=\"ttdoc\">Base class for object delete scene notifications. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00078\">sceneNotification.h:78</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_export_8h_html_a5a95fd8c6f99bb054cdf4bf206406055\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_export_8h.html#a5a95fd8c6f99bb054cdf4bf206406055\">UFE_SDK_DECL</a></div><div class=\"ttdeci\">#define UFE_SDK_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_export_8h_source.html#l00036\">ufeExport.h:36</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_subject_html_a2ffa899b7be16a9e979701326aca9e9f\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a2ffa899b7be16a9e979701326aca9e9f\">Ufe::Subject::endNotificationGuard</a></div><div class=\"ttdeci\">virtual void endNotificationGuard()</div><div class=\"ttdoc\">Notification guard interface. Implementation in this class is a no-op. </div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";