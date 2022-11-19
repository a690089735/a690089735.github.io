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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_shared_ptr-members.html\', tocPrefix);\n\
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
<div class=\"title\">MSharedPtr&lt; T &gt; Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a2858a2761e214449f7bc8f03bcd2c412\">const_pointer_cast</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a5aa91d0ddc892f5862af0b44af95ab1f\">const_pointer_cast</a>(MSharedPtr&lt; U &gt; &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#af29f103f35779b78156c1d8360ca5836\">dynamic_pointer_cast</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a496ee4e43ff15c8f3af10009761852b8\">dynamic_pointer_cast</a>(MSharedPtr&lt; U &gt; &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a07f851191ad3a7c5c1598ef14f710f96\">get</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ac80990f055a39623e29922ee6e984338\">make</a>(Args &amp;&amp;..._args)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ae0873c651c01a67689d15952b4cf4488\">MSharedPtr</a>() noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a1590b0dc27368f13878bb782f753922f\">MSharedPtr</a>(std::nullptr_t _ptr) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ac02e228f00dfdb9ccbffae958947c633\">MSharedPtr</a>(U *_ptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">explicit</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ac06c759726ea2b7efa1dc3574c7e6512\">MSharedPtr</a>(U *_ptr, Deleter _d)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a59f62382e917caf9cdb210f9906ebbf5\">MSharedPtr</a>(std::nullptr_t _ptr, Deleter _d)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a68d2439e410ec8a0a7239ca143e70ff4\">MSharedPtr</a>(const MSharedPtr&lt; U &gt; &amp;_rhs, element_type *_ptr) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ad6b9372d77eb67e7e89676145ec1532c\">MSharedPtr</a>(const MSharedPtr &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a5753488936432b8a1321ade94085076a\">MSharedPtr</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a18dc8ee39085370fb8ece0dd9ce24a34\">MSharedPtr</a>(MSharedPtr &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a2900d7b00c8c7406c5b1a9a65f79fd0c\">MSharedPtr</a>(MSharedPtr&lt; U &gt; &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#aa385aa18f5e42db5a415c25a90f4193d\">operator bool</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">explicit</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a7e60e268de3e8555bbf5335380cb6d50\">operator!=</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) const  noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a26ea50699aceabfe8354e84e0d5ef5ca\">operator*</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ac0ddd007dfcfef3121f74d0665dfd0cd\">operator-&gt;</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a019752fe45d5b281607e9ed8822e9147\">operator&lt;</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) const  noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a95dba2450571cf33a3d9f471799a56da\">operator&lt;=</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) const  noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a97b852a4cf549fb5a302fe9f5e7cb01d\">operator=</a>(const MSharedPtr &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a8a485e3c3c2ce3b5e42dff4422784b7d\">operator=</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a697787d28f2b9af0a0e0d26d7af48a90\">operator=</a>(MSharedPtr &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a7b6332d823f43ea46d084cd4c0ec3a35\">operator=</a>(MSharedPtr&lt; U &gt; &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a17dad8efc47270b56e8777dff6ff96ca\">operator==</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) const  noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ad96781f7aa5bffe307f0ad227382e843\">operator&gt;</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) const  noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#ab1369d6a98adefb9e9f904e4627f7e4c\">operator&gt;=</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) const  noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a41f12ff90e1040f23c857fc412d1a870\">reinterpret_pointer_cast</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a0452484aa614ccb724dea14e21b9c0b1\">reinterpret_pointer_cast</a>(MSharedPtr&lt; U &gt; &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a20194325f0380eb3bbc6bc6c8b2697d9\">reset</a>() noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#af85d0957728ba2bb61cd9716bdfb6683\">reset</a>(U *_ptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#a4a0a0ce8bb5efd6f1efda8f1bb96b12a\">reset</a>(U *_ptr, Deleter _d)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#adb5099104f7c803b53b6de86353fa232\">static_pointer_cast</a>(const MSharedPtr&lt; U &gt; &amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html#abd5cad49d6d16f22be013532f9863be1\">static_pointer_cast</a>(MSharedPtr&lt; U &gt; &amp;&amp;_rhs) noexcept</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_shared_ptr.html\">MSharedPtr&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";