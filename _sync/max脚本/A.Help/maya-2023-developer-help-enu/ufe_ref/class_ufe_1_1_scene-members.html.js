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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_scene-members.html\', tocPrefix);\n\
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
<div class=\"title\">Ufe::Scene Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a6521c5bb3cebc710e7a90b64b1fa5580\">addObserver</a>(const Observer::Ptr &amp;obs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#aa4042fd79d0d3082d9e5080f27c7f991\">beginNotificationGuard</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#ae45231ee4275f8d659c04848ad6e2acf\">endNotificationGuard</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#aa45d27e7d5db1fc8bca965f355c7e213\">fCompositeNotification</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">private</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#accd941b3531fbf8509620c3913e4822c\">hasObserver</a>(const Observer::Ptr &amp;obs) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a24f0c85b30b20dd920ac25b22aa8568e\">inCompositeNotification</a>() const override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a9ce94d76ba9a32fd6a6830a0357e117f\">initializeInstance</a>(const Ptr &amp;instance)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#ada6895a8fbae1d4a103d19d97e0f35fa\">instance</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a8f5c865714049adab9e31cfa329267ce\">nbObservers</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a75ef84009f7b3e01d206609d8f5da8b4\">notify</a>(const Notification &amp;notification) override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#ac02d357950bcc4c1df6a65f5b4ad784b\">operator=</a>(const Scene &amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a0a5c3198cf798977837d45bb15e94672\">Ufe::Subject::operator=</a>(const Subject &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#ac83b8b0ac6a8b95908b01b2a611eecbc\">Ufe::Subject::operator=</a>(Subject &amp;&amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#abb070bbf26a59b73a727a18a31638bfd\">postNotifyObjectAdd</a>(const ObjectAdd &amp;notification)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a71baa3724fa7c09de655701139a41573\">postNotifyObjectDelete</a>(const ObjectDelete &amp;notification)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a0daeed44082ac89c65b5d20fdd1b1eb6\">postNotifyObjectPathChange</a>(const ObjectPathChange &amp;notification)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a07b7565d7bad6f0c7ba63083b4609aeb\">postNotifySceneCompositeChange</a>(const SceneCompositeNotification &amp;notification)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a6f9ccb53dfe0320fb7d720dfa2dbf05a\">postNotifySubtreeInvalidate</a>(const SubtreeInvalidate &amp;notification)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a294c538bce10aeba16d5aa2e4a65a4c9\">Ptr</a> typedef</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a053bf728faf06989ae99928e88ac3fcc\">removeObserver</a>(const Observer::Ptr &amp;obs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a18f112c3af6bc3cc9cd774f30a6a57d1\">Scene</a>(const Scene &amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a4efdc8ece0938744b86c898a75317eba\">Scene</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a809091ed20476d9e122d638899714c87\">Subject</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a86cd301c4f83b0be3e58fbb8bab3f8dd\">Subject</a>(const Subject &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#adbb9ed3ac351bfd36b9d2882ca893480\">Subject</a>(Subject &amp;&amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html#a770b081f8bf7378080abe86ac70fa424\">~Scene</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\">Ufe::Scene</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html#a7178be33cbf253b646420c9b30a6f430\">~Subject</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_subject.html\">Ufe::Subject</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";