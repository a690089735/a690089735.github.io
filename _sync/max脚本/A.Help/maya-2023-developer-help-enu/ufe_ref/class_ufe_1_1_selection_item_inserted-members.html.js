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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_selection_item_inserted-members.html\', tocPrefix);\n\
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
<div class=\"title\">Ufe::SelectionItemInserted Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#a706d719f5b1dab5d76d402a98699c8c1\">fItem</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"><span class=\"mlabel\">private</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#ae0066e44e699a8bffe8146ddd1c0b6db\">fPosition</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"><span class=\"mlabel\">private</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#a02be2d6a6c3c3353216b52467d8ba318\">item</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a39d4807b6e56cd5ff7c72eda0f4cc3c1\">Notification</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a61e6b6e3ee750f8b26f3b9fb531b74a2\">Notification</a>(const Notification &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#a3eac0c914ceb234559b0f4f673ad34de\">position</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a082edb42112d3b522c91b9d09d7fc956\">SelectionChanged</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html\">Ufe::SelectionChanged</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a7507c015c28456b9df93ff799b3fc074\">SelectionChanged</a>(const SelectionChanged &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html\">Ufe::SelectionChanged</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#accca4c65e1f1ab95302b698f60e8e6fa\">SelectionItemInserted</a>(const SceneItem::Ptr &amp;position, const SceneItem::Ptr &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#af5919e360b884e471ddb8c864d4ddf3f\">SelectionItemInserted</a>(const SelectionItemInserted &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html#a527f8a0c7522efe7199c889a7de63615\">~Notification</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_notification.html\">Ufe::Notification</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html#a553e2cd91a704c7ea01c990ed038f5d0\">~SelectionChanged</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_changed.html\">Ufe::SelectionChanged</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html#a5fa106c5120c6b904b4795686f45f9fd\">~SelectionItemInserted</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_selection_item_inserted.html\">Ufe::SelectionItemInserted</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";