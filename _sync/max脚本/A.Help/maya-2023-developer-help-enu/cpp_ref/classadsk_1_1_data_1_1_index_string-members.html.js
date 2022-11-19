var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
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
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_index_string-members.html\', tocPrefix);\n\
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
	  $(document).ready(cpp_ref_initializeToc);\n\
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
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
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
<div class=\"title\">IndexString Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ab5b56a7e2515dc71bf1cdc2ba3f0a5b4\">asString</a>() const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a6116b98e720e29c87f1429a9894ca87c\">clone</a>() const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html\">CRTP_IndexType&lt; IndexString &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a6a6068bdfb4ac45e41da87744845d85d\">CRTP_IndexType&lt; IndexString &gt;</a> class</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">friend</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a71f59ca9454bdc942ea9eeeeaa665e0b\">Debug</a>(const IndexString *me, adsk::Debug::Print &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a759a4be85bdaf88f08f235ba5ad2bf70\">Debug</a>(const IndexString *me, adsk::Debug::Footprint &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a017b673598cf98da323123828a580828\">CRTP_IndexType&lt; IndexString &gt;::Debug</a>(const RefCounted *me, Debug::Print &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a9d1b2b85361a0ceb15861047253b31bc\">CRTP_IndexType&lt; IndexString &gt;::Debug</a>(const RefCounted *me, Debug::Footprint &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html#a1c91c6eea2f429ba733770d83182e97d\">CRTP_Debug&lt; IndexString, adsk::debug</a>(adsk::Debug::Print &amp;request) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html\">CRTP_Debug&lt; IndexString, adsk::Debug::Print &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html#a1c91c6eea2f429ba733770d83182e97d\">CRTP_Debug&lt; IndexString, adsk::Debug::Footprint &gt;::debug</a>(adsk::Debug::Footprint &amp;request) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html\">CRTP_Debug&lt; IndexString, adsk::Debug::Footprint &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ad489a502e57c7ce74ac083889b63001c\">denseSpaceBetween</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a0294c48099702e7db26c2aa4b77d322e\">indexString</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a8f181e8881d6d8c5be7436bdf2f3db9c\">IndexString</a>(const std::string &amp;stringIndex)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#aaeeda48cce005ca64584c79156c251cd\">IndexString</a>(const IndexString &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a7f0d10d8260961df57144b325fc65b59\">IndexString</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a5728e6fc25f1f5ba84329c301647f50b\">IndexType</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a9528a2d9f6428a81458e37f76b103fad\">IndexType</a>(const IndexType &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a06013a942d7abc4c27da4257b6d9438e\">myRegistration</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a951db9ffca1d19fccf8ed3dd88f86327\">myTypeName</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a37779217bca78a6cb3dac3f975d5c6d9\">operator!=</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ab3e28257b678c386e4e1eade14abee9f\">operator!=</a>(const IndexString &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a465565901999b17f1be2643707a2248a\">operator&lt;</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ac4b6a00e90df6d80624610f674d778cf\">operator&lt;</a>(const IndexString &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ade55896ef2a0dcf1e1d4b1777b6889f8\">operator&lt;=</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a4a32a29bba40f6d718cadd18a33a6d1d\">operator&lt;=</a>(const IndexString &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#aba1f4a326ae1a176b489cbbdbd184d24\">operator=</a>(const IndexString &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#aa96673344347aee9856d8564c0da6706\">operator=</a>(const std::string &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ae14db8587bbb41afed54f8adb8e6a5e7\">operator==</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#aafb6cf5f08fb761fc3c11af3744a45f2\">operator==</a>(const IndexString &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#ae6eae9f1a5a1c3e66062b36436a7e4d6\">operator&gt;</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#abdd39a0103ba0b96baf16f58032b68d0\">operator&gt;</a>(const IndexString &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a8b6ccdadabe47a1c80c965c070a77ee0\">operator&gt;=</a>(const IndexType &amp;rhs) const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a463445dad44e242f2e694d4d750be5d3\">operator&gt;=</a>(const IndexString &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#aebb1990f519367c00c1861b5b3b3e0a5\">RefCounted</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#af66f84bd2408304143da35229d0a7d3e\">RefCounted</a>(const RefCounted &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a9de765f69162bfb317593a8c0f6a7326\">supportsDenseMode</a>() const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a2f39014402a30600e0ef61723b0e751d\">typeName</a>() const  override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html\">CRTP_IndexType&lt; IndexString &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a2c1174c9d59b9e25545ca49180884772\">~IndexString</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a347fc7a1085d91147dbb0ddd3e0fd37d\">~IndexType</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#ae725be496ffd7a9d4bc812d5bb26d58f\">~RefCounted</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";