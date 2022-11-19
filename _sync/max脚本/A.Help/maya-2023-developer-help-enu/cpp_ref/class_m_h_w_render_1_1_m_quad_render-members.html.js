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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_quad_render-members.html\', tocPrefix);\n\
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
<div class=\"title\">MQuadRender Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a96ff176e8a42eff41b1bc450696c1f41\">blendStateOverride</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a5097b7718f03890d556dccc30e5fbf74\">clearOperation</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a7d38ad251a84583ab135d7a6f365c613\">depthStencilStateOverride</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#abaf708f655730bd4d48fb04bca669616\">enableSRGBWrite</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#adb246de1640ed55f1739862dcb6560e5\">getInputTarget</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#aa47def779dda9e46974e39fe89ce7e59\">getInputTargetDescription</a>(const MString &amp;name, MRenderTargetDescription &amp;description)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#ad36d418f125906ffee11d91c7b8000da\">inputTargets</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cfa71d1119c3750e066780fe327f468c1a0\">kClear</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cfa72c00acc2d437de3607ac695de25f4cb\">kHUDRender</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cfaaafa2d763dec5421e308178c63ec262f\">kPresentTarget</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cfac22eb7dbd853aa61897f86f850e80a90\">kQuadRender</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cfa824334a8646b9ddb89490398005e5099\">kSceneRender</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cfaf5fc3ee9a162e96b3cf1efe57eea4030\">kUserDefined</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a6aec65d0f813d123fe1610fb992a8963\">mClearOperation</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a186d657a8873bbd4e87f10cb8401119d\">mName</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a0854dcda45fe1e51a1897bc82cb963fb\">mOperationType</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a0fc83ca2e65e5a66b96c94489eeac690\">MQuadRender</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a332564cb855fb9499e215427c75cc9cf\">MRenderOperation</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a30105b5c681f56bf252f746d4da4a4cf\">MRenderOperationType</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#ac556578d6219804b38b9387f8c344ef7\">name</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#ad9319fa2c04392febf70e00478e896f2\">operationType</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#af35cebbda47e399fc9590ac22c8583d9\">outputTargets</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#aa9cbcfe5f279a9ba0ec730079d9058f8\">rasterizerStateOverride</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a785c02771ba01a1da060c7fa4b5b03af\">renameOutputTarget</a>(const MString &amp;name, const MString &amp;newName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a46e435a8099cf62da3e2efc815032d2b\">shader</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a6e61af973ca8990c8c1a389f60a31798\">targetOverrideList</a>(unsigned int &amp;listSize)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a81e0450eebf8c3882754248f39af0062\">viewportRectangleOverride</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a79c58e8264a55a4e519b3d80e68583ea\">writableTargets</a>(unsigned int &amp;count)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MRenderOperation</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#ae85271dc1990d0d51335972d39483fc8\">~MQuadRender</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html\">MQuadRender</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";