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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_u_i_info_handler-members.html\', tocPrefix);\n\
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
<div class=\"title\">Ufe::UIInfoHandler Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a9020d030313b270668d0417ad0d221f2\">getLongRunTimeLabel</a>() const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12a9154905d08e3cc26f87af431f1adfb27\">LowerLeft</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12ad7737a6f6bbd3a8213ec4b5e530de48f\">LowerRight</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12a9ed3e77e833b9cbaad9af5d5e92799e9\">None</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ac03cbce9442185b214b77cd9566dc363\">Ptr</a> typedef</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12\">Quadrant</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#aab4621ad4a2f192229fe166c7ea83523\">treeViewCellInfo</a>(const SceneItem::Ptr &amp;item, CellInfo &amp;info) const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a73de25cc0a9cfb91c48bf4b09b198c4a\">treeViewIcon</a>(const SceneItem::Ptr &amp;item) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ab49ab756013a63db4e1ad0b02aaa32ee\">treeViewTooltip</a>(const SceneItem::Ptr &amp;item) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a0a213338c1b2f4dd445a1c615c25ba73\">UIInfoHandler</a>()=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a9e36f4c90cb0c40a951322101d0c4be6\">UIInfoHandler</a>(const UIInfoHandler &amp;)=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ae64754af41ef93e0aac4e1ef62c1af61\">uiInfoHandler</a>(Rtid rt)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12ad021ca864505b6718b11b388cae21e21\">UpperLeft</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#a3055c2964b9f1acc2b28fd311ba37d12af0960b35adbe25625ac33ef5582d1317\">UpperRight</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html#ae268187b5ec4507e8d06dc12229cbe76\">~UIInfoHandler</a>()=default</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_u_i_info_handler.html\">Ufe::UIInfoHandler</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";