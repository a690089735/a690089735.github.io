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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_attribute_generic-members.html\', tocPrefix);\n\
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
<div class=\"title\">Ufe::AttributeGeneric Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html#a9401eb6e03cf4b3c8f15df1d672efe3b\">Attribute</a>(const SceneItem::Ptr &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html#afbe1bd9d159ca93421363f60b7089311\">Attribute</a>(const Attribute &amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html#ab625a50e549e94e40a7f87fd8c2679f4\">Attribute</a>(Attribute &amp;&amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a9401eb6e03cf4b3c8f15df1d672efe3b\">Ufe::Attribute::Attribute</a>(const SceneItem::Ptr &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#afbe1bd9d159ca93421363f60b7089311\">Ufe::Attribute::Attribute</a>(const Attribute &amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#ab625a50e549e94e40a7f87fd8c2679f4\">Ufe::Attribute::Attribute</a>(Attribute &amp;&amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#abaff374cadeed0c9bcc8280864c41961\">clearMetadata</a>(const std::string &amp;key)=0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a1cca57e9f2668217d1fd44420b53c575\">documentation</a>() const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a9b7718dbb1030062058e55a2a5fecf49\">getMetadata</a>(const std::string &amp;key) const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#afbbeeab001042d74b776f4fe1a17ef9d\">hasMetadata</a>(const std::string &amp;key) const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#af16266d5e96ffd637ec20d82b7f7c9eb\">hasValue</a>() const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#ad236468416fb0cfb36b75d5a4cd2608a\">kBool</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a12cb009a7de986c27fb609d768a08a45\">kColorFloat3</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a34b38d1ea541cd9c43a794322ed88b84\">kDouble</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#aab65a76fcc97f442160157e8d4d8c7ee\">kDouble3</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#acf8e8a825d2d84e174a8bf0e28a26d5b\">kEnumString</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#adce63d674eaf9a8f6d6df7e9b3979841\">kFloat</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a0690cc71606b852e4e7932bf69819d9a\">kFloat3</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a2583e032d691b4a7ea0b950b0944a845\">kGeneric</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#ae50243d075badd05dc6ee6ecc12abcd5\">kInt</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#acf2a815f448ada8732f417a306ed99f5\">kInt3</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a83040b8ff62b37d7ecf6acc585528f91\">kInvalid</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a6af94cf84a798eda745fb088608bb3a6\">kLocked</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a21f3c7fc836d7c89ad7141cfd806de52\">kString</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a994c051d2924200f580098046f8c7a95\">name</a>() const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html#a2e39e4fbe75ff71d17428f90077e61de\">nativeType</a>() const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a9ec36379c5af501fc5e8b06e2dcee2ea\">operator=</a>(const Attribute &amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a7d24b5a6859e1bd38ecb32fbf67456ba\">operator=</a>(Attribute &amp;&amp;)=delete</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html#a797ca78d33a122ba4b5a445b71f889d8\">Ptr</a> typedef</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a3750389e2aa4ab443ccaa94d5db13c85\">sceneItem</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a3df3f6abc74475ed363a2118459492a5\">setMetadata</a>(const std::string &amp;key, const Value &amp;value)=0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a89015e65a66e453e2e54af32754b3b71\">setMetadataCmd</a>(const std::string &amp;key, const Value &amp;value)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#a5cfa97a1a212bb783a38ad2823e1bafc\">string</a>() const =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#aa2a78f8bad6f84c0817237e5f7f4ac09\">Type</a> typedef</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html#a5b0fa5eb4ea9b6391e56ed172771aa83\">type</a>() const final</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute_generic.html\">Ufe::AttributeGeneric</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html#acb16f98d7e114a8574c9128da8f4890e\">~Attribute</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_attribute.html\">Ufe::Attribute</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";