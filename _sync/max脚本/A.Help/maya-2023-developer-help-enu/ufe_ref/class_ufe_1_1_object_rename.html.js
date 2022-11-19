var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::ObjectRename Class Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_object_rename.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::ObjectRename Class Reference</h1>\n\
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
<div class=\"title\">Ufe::ObjectRename Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_ufe_1_1_object_rename.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_ufe_1_1_object_rename.html#pri-attribs\">Private Attributes</a> &#124;\n\
<a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Object renamed scene notification.  \n\
 <a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;<a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html\">sceneNotification.h</a>&gt;</code></p>\n\
<div class=\"dynheader\">\n\
Inheritance diagram for Ufe::ObjectRename:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/class_ufe_1_1_object_rename__inherit__graph.png\" border=\"0\" usemap=\"#_ufe_1_1_object_rename_inherit__map\" alt=\"Inheritance graph\"></div>\n\
<map name=\"_ufe_1_1_object_rename_inherit__map\" id=\"_ufe_1_1_object_rename_inherit__map\">\n\
<area shape=\"rect\" id=\"node2\" href=\"class_ufe_1_1_object_path_change.html\" title=\"Base class for object path change scene notifications. \" alt=\"\" coords=\"5,155,163,181\">\n\
<area shape=\"rect\" id=\"node3\" href=\"class_ufe_1_1_scene_changed.html\" title=\"Base class for all scene notifications. \" alt=\"\" coords=\"16,80,152,107\">\n\
<area shape=\"rect\" id=\"node4\" href=\"class_ufe_1_1_notification.html\" title=\"Base class for all notifications. \" alt=\"\" coords=\"26,5,142,32\">\n\
</map>\n\
<center><span class=\"legend\">[<a target=\"top\" href=\"#!/url=./ufe_ref/graph_legend.html\">legend</a>]</span></center></div>\n\
<div class=\"dynheader\">\n\
Collaboration diagram for Ufe::ObjectRename:</div>\n\
<div class=\"dyncontent\">\n\
<div class=\"center\"><img src=\"ufe_ref/class_ufe_1_1_object_rename__coll__graph.png\" border=\"0\" usemap=\"#_ufe_1_1_object_rename_coll__map\" alt=\"Collaboration graph\"></div>\n\
<map name=\"_ufe_1_1_object_rename_coll__map\" id=\"_ufe_1_1_object_rename_coll__map\">\n\
<area shape=\"rect\" id=\"node2\" href=\"class_ufe_1_1_object_path_change.html\" title=\"Base class for object path change scene notifications. \" alt=\"\" coords=\"5,157,163,184\">\n\
<area shape=\"rect\" id=\"node3\" href=\"class_ufe_1_1_scene_changed.html\" title=\"Base class for all scene notifications. \" alt=\"\" coords=\"16,81,152,108\">\n\
<area shape=\"rect\" id=\"node4\" href=\"class_ufe_1_1_notification.html\" title=\"Base class for all notifications. \" alt=\"\" coords=\"26,5,142,32\">\n\
<area shape=\"rect\" id=\"node5\" href=\"class_ufe_1_1_path.html\" title=\"Identify an object or 3D path in the scene. \" alt=\"\" coords=\"187,157,264,184\">\n\
</map>\n\
<center><span class=\"legend\">[<a target=\"top\" href=\"#!/url=./ufe_ref/graph_legend.html\">legend</a>]</span></center></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a624ef049ea41371287e555dbb586e0fc\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#a624ef049ea41371287e555dbb586e0fc\">ObjectRename</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#a458bf65f7ce4c237a544187e6a2045ef\">item</a>, const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> &amp;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#aff050ece8abf8ca1c830233145f7a51d\">previousPath</a>)</td></tr>\n\
<tr class=\"memdesc:a624ef049ea41371287e555dbb586e0fc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_ufe_1_1_object_rename.html#a624ef049ea41371287e555dbb586e0fc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a624ef049ea41371287e555dbb586e0fc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab0575a65b2922ae30c3a037b2824dd5f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#ab0575a65b2922ae30c3a037b2824dd5f\">ObjectRename</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html\">ObjectRename</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:ab0575a65b2922ae30c3a037b2824dd5f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"class_ufe_1_1_object_rename.html#ab0575a65b2922ae30c3a037b2824dd5f\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab0575a65b2922ae30c3a037b2824dd5f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adc20f44517d98ccf68a87c01f8ff2da8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#adc20f44517d98ccf68a87c01f8ff2da8\">~ObjectRename</a> () override</td></tr>\n\
<tr class=\"memdesc:adc20f44517d98ccf68a87c01f8ff2da8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_ufe_1_1_object_rename.html#adc20f44517d98ccf68a87c01f8ff2da8\">More...</a><br></td></tr>\n\
<tr class=\"separator:adc20f44517d98ccf68a87c01f8ff2da8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a458bf65f7ce4c237a544187e6a2045ef\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#a458bf65f7ce4c237a544187e6a2045ef\">item</a> () const</td></tr>\n\
<tr class=\"separator:a458bf65f7ce4c237a544187e6a2045ef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff050ece8abf8ca1c830233145f7a51d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#aff050ece8abf8ca1c830233145f7a51d\">previousPath</a> () const</td></tr>\n\
<tr class=\"separator:aff050ece8abf8ca1c830233145f7a51d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9b59f6e4dcbeecc78f2e9ee0000d8d5f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#a9b59f6e4dcbeecc78f2e9ee0000d8d5f\">changedPath</a> () const override</td></tr>\n\
<tr class=\"separator:a9b59f6e4dcbeecc78f2e9ee0000d8d5f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_ufe_1_1_object_path_change\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_ufe_1_1_object_path_change\')\"><img src=\"ufe_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html\">Ufe::ObjectPathChange</a></td></tr>\n\
<tr class=\"memitem:a2ea124a7b86d010077d05e4ac99270d9 inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html#a2ea124a7b86d010077d05e4ac99270d9\">ObjectPathChange</a> ()</td></tr>\n\
<tr class=\"memdesc:a2ea124a7b86d010077d05e4ac99270d9 inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html#a2ea124a7b86d010077d05e4ac99270d9\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2ea124a7b86d010077d05e4ac99270d9 inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a31abf2d351f3ef55f0983e0a392bfc96 inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html#a31abf2d351f3ef55f0983e0a392bfc96\">ObjectPathChange</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html\">ObjectPathChange</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a31abf2d351f3ef55f0983e0a392bfc96 inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html#a31abf2d351f3ef55f0983e0a392bfc96\">More...</a><br></td></tr>\n\
<tr class=\"separator:a31abf2d351f3ef55f0983e0a392bfc96 inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2aa53744346f1f96a1b8ddf6e09de3bf inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html#a2aa53744346f1f96a1b8ddf6e09de3bf\">~ObjectPathChange</a> () override</td></tr>\n\
<tr class=\"memdesc:a2aa53744346f1f96a1b8ddf6e09de3bf inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_object_path_change.html#a2aa53744346f1f96a1b8ddf6e09de3bf\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2aa53744346f1f96a1b8ddf6e09de3bf inherit pub_methods_class_ufe_1_1_object_path_change\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_ufe_1_1_scene_changed\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_ufe_1_1_scene_changed\')\"><img src=\"ufe_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html\">Ufe::SceneChanged</a></td></tr>\n\
<tr class=\"memitem:a12bf871cc9b857d8ea1ebf1fafd36f8f inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a12bf871cc9b857d8ea1ebf1fafd36f8f\">SceneChanged</a> ()</td></tr>\n\
<tr class=\"memdesc:a12bf871cc9b857d8ea1ebf1fafd36f8f inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a12bf871cc9b857d8ea1ebf1fafd36f8f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a12bf871cc9b857d8ea1ebf1fafd36f8f inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abb9f312bf935d1841bc4aa56dfde2de2 inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#abb9f312bf935d1841bc4aa56dfde2de2\">SceneChanged</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html\">SceneChanged</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:abb9f312bf935d1841bc4aa56dfde2de2 inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#abb9f312bf935d1841bc4aa56dfde2de2\">More...</a><br></td></tr>\n\
<tr class=\"separator:abb9f312bf935d1841bc4aa56dfde2de2 inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2fd186a6bce79bc7dee8f1c9056a565e inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a2fd186a6bce79bc7dee8f1c9056a565e\">~SceneChanged</a> () override</td></tr>\n\
<tr class=\"memdesc:a2fd186a6bce79bc7dee8f1c9056a565e inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a2fd186a6bce79bc7dee8f1c9056a565e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2fd186a6bce79bc7dee8f1c9056a565e inherit pub_methods_class_ufe_1_1_scene_changed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_ufe_1_1_notification\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_ufe_1_1_notification\')\"><img src=\"ufe_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td></tr>\n\
<tr class=\"memitem:a39d4807b6e56cd5ff7c72eda0f4cc3c1 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a39d4807b6e56cd5ff7c72eda0f4cc3c1\">Notification</a> ()</td></tr>\n\
<tr class=\"memdesc:a39d4807b6e56cd5ff7c72eda0f4cc3c1 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a39d4807b6e56cd5ff7c72eda0f4cc3c1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a39d4807b6e56cd5ff7c72eda0f4cc3c1 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61e6b6e3ee750f8b26f3b9fb531b74a2 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a61e6b6e3ee750f8b26f3b9fb531b74a2\">Notification</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Notification</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a61e6b6e3ee750f8b26f3b9fb531b74a2 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a61e6b6e3ee750f8b26f3b9fb531b74a2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a61e6b6e3ee750f8b26f3b9fb531b74a2 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a527f8a0c7522efe7199c889a7de63615 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a527f8a0c7522efe7199c889a7de63615\">~Notification</a> ()</td></tr>\n\
<tr class=\"memdesc:a527f8a0c7522efe7199c889a7de63615 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a527f8a0c7522efe7199c889a7de63615\">More...</a><br></td></tr>\n\
<tr class=\"separator:a527f8a0c7522efe7199c889a7de63615 inherit pub_methods_class_ufe_1_1_notification\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pri-attribs\"></a>\n\
Private Attributes</h2></td></tr>\n\
<tr class=\"memitem:a1bf0fe3a7845e65d60ff43353052f34d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#a1bf0fe3a7845e65d60ff43353052f34d\">fItem</a></td></tr>\n\
<tr class=\"separator:a1bf0fe3a7845e65d60ff43353052f34d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3133cbb45c78c47aa6366d813fee24dd\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#a3133cbb45c78c47aa6366d813fee24dd\">fPreviousPath</a></td></tr>\n\
<tr class=\"separator:a3133cbb45c78c47aa6366d813fee24dd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Object renamed scene notification. </p>\n\
<p>A rename notification is a path change notification where only the tail component differs. Implicitly, all children of the renamed object have their paths changed; no notification is sent for this. </p>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00190\">190</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html\">sceneNotification.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a id=\"a624ef049ea41371287e555dbb586e0fc\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#a624ef049ea41371287e555dbb586e0fc\">&#9670;&nbsp;</a></span>ObjectRename() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::ObjectRename::ObjectRename </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>item</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>previousPath</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"ab0575a65b2922ae30c3a037b2824dd5f\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#ab0575a65b2922ae30c3a037b2824dd5f\">&#9670;&nbsp;</a></span>ObjectRename() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::ObjectRename::ObjectRename </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html\">ObjectRename</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">default</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Default copy constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"adc20f44517d98ccf68a87c01f8ff2da8\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#adc20f44517d98ccf68a87c01f8ff2da8\">&#9670;&nbsp;</a></span>~ObjectRename()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::ObjectRename::~ObjectRename </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">override</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a id=\"a9b59f6e4dcbeecc78f2e9ee0000d8d5f\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#a9b59f6e4dcbeecc78f2e9ee0000d8d5f\">&#9670;&nbsp;</a></span>changedPath()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> Ufe::ObjectRename::changedPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">override</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Calls <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_object_rename.html#aff050ece8abf8ca1c830233145f7a51d\">previousPath()</a>. </dd></dl>\n\
\n\
<p>Reimplemented from <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a8d479ef8ced5405c2249835d8b74ee38\">Ufe::SceneChanged</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a458bf65f7ce4c237a544187e6a2045ef\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#a458bf65f7ce4c237a544187e6a2045ef\">&#9670;&nbsp;</a></span>item()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> Ufe::ObjectRename::item </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Renamed <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"aff050ece8abf8ca1c830233145f7a51d\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#aff050ece8abf8ca1c830233145f7a51d\">&#9670;&nbsp;</a></span>previousPath()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> Ufe::ObjectRename::previousPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Previous path. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a id=\"a1bf0fe3a7845e65d60ff43353052f34d\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#a1bf0fe3a7845e65d60ff43353052f34d\">&#9670;&nbsp;</a></span>fItem</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> Ufe::ObjectRename::fItem</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">private</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00212\">212</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html\">sceneNotification.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a3133cbb45c78c47aa6366d813fee24dd\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_object_rename.html#a3133cbb45c78c47aa6366d813fee24dd\">&#9670;&nbsp;</a></span>fPreviousPath</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> Ufe::ObjectRename::fPreviousPath</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">private</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html#l00213\">213</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html\">sceneNotification.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>include/ufe/<a class=\"el\" href=\"#!/url=./ufe_ref/scene_notification_8h_source.html\">sceneNotification.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";