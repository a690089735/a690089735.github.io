var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Member List</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_scene_composite_notification-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>ufe: Member List</h1>\n\
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
<div class=\"title\">Ufe::SceneCompositeNotification Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a6cb15b0fb1f84b4516dc2ebc0a81e482\">appendObjectAdd</a>(const SceneItem::Ptr &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a9955011896321d8f6f25fbd03c9eeae1\">appendObjectDelete</a>(const Path &amp;path)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ac6350334b609beabba21bd45cb59e82f\">appendObjectDestroyed</a>(const Path &amp;path)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a66ffc0a7d4773096736060da2b0bf715\">appendObjectPathAdd</a>(const SceneItem::Ptr &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ae76bc281d885bf61544e198b7413bd0b\">appendObjectPathRemove</a>(const Path &amp;path)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a63926c5f5a22bacf8b2a535b0de2b327\">appendObjectPostDelete</a>(const SceneItem::Ptr &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#aef9dab122d90372b1258c942707b27a8\">appendObjectPreDelete</a>(const SceneItem::Ptr &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a8d76a4d27f8797559ac687576bcc5b6b\">appendObjectRename</a>(const SceneItem::Ptr &amp;item, const Path &amp;previousPath)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a0c1fb29c56f31a3f09c60a1616736ca7\">appendObjectReparent</a>(const SceneItem::Ptr &amp;item, const Path &amp;previousPath)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a10664f7d156015e90274bb13f7ad24f2\">appendSubtreeInvalidate</a>(const SceneItem::Ptr &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a2e6d570a8e1edf51fbaae73e592d55de\">begin</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a1261b46d640f953f970be2e1542a73b4\">begin</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a75dbb5d18c4019b22adc639fe19e1834\">cbegin</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ac20a3120ee311bcad945d833259e4fab\">cend</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ad64c5332e0af6ed5025717659cef9e2d\">changedPath</a>() const override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a3b66c38090afc80e90052f011b850547\">empty</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#aac5792f8c2d9acbb3e4265386fff91ed\">end</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ae6e685b677d4522028286745fe7aec20\">end</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#adb243623536ca37be26403320a854a84\">fOps</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"><span class=\"mlabel\">private</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a39d4807b6e56cd5ff7c72eda0f4cc3c1\">Notification</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a61e6b6e3ee750f8b26f3b9fb531b74a2\">Notification</a>(const Notification &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a2f0d5e2b716aa7afa193cc07db15b711\">Ops</a> typedef</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a49bca1bf1c3bb1150d794fa28a6e7d64\">opsList</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a4b447f1584600657c5b6523cdfd18319\">OpType</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a12bf871cc9b857d8ea1ebf1fafd36f8f\">SceneChanged</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html\">Ufe::SceneChanged</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#abb9f312bf935d1841bc4aa56dfde2de2\">SceneChanged</a>(const SceneChanged &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html\">Ufe::SceneChanged</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ab5e5c626cd67d6f47f2972f85ef3d29d\">SceneCompositeNotification</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ac73e8d38f88c5c0515b64706e98af169\">SceneCompositeNotification</a>(const SceneCompositeNotification &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#a36b560c9ebfcf89129fef5cb8b6ddfa5\">size</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a527f8a0c7522efe7199c889a7de63615\">~Notification</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html#a2fd186a6bce79bc7dee8f1c9056a565e\">~SceneChanged</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_changed.html\">Ufe::SceneChanged</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html#ac997da7844ea67bb4dc55660f0f40103\">~SceneCompositeNotification</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_composite_notification.html\">Ufe::SceneCompositeNotification</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";