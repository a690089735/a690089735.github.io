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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_render_utilities-members.html\', tocPrefix);\n\
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
<div class=\"title\">MRenderUtilities Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a740208508edba7934a27816decbb9570\">acquireSwatchDrawContext</a>(const MRenderTarget *colorTarget=NULL, const MRenderTarget *depthTarget=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#ab9589288e0f14cffca1b6da7d262631d\">acquireUVTextureDrawContext</a>(const MRenderTarget *colorTarget=NULL, const MRenderTarget *depthTarget=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a737dde8474ab2cbc3ea2596026e4ef4b\">blitTargetToGL</a>(const MRenderTarget *target, const float region[2][2], bool unfiltered)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a7659377d100bff1d4b48427c270f1ebc\">blitTargetToImage</a>(const MRenderTarget *target, MImage &amp;image)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a733be04301829133a97609091820643a\">drawSimpleMesh</a>(MDrawContext &amp;context, const MVertexBuffer &amp;vertexBuffer, const MIndexBuffer &amp;indexBuffer, MGeometry::Primitive primitiveType, int start, int count)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#ad15b3d1fb21d3d61911ada0e2bc9b12bae33c6f2b55f5c895e9d88b72881608f2\">kAmbientLight</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#ad15b3d1fb21d3d61911ada0e2bc9b12ba39b4ee1e9e049492c0be9a11e455cc20\">kDefaultLights</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#af9563ae2bd890aa0fb7782f626e35bc7a61fa51d6fb6e2a237e932a3f89ddf1bd\">kOrthogonalCameraCloseUp</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#af9563ae2bd890aa0fb7782f626e35bc7af1d7ddf44ae079ba0232fe6e7dc292ad\">kOrthogonalCameraWithMargin</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#af9563ae2bd890aa0fb7782f626e35bc7a2cec741abb80798c163d0aea01676163\">kPerspectiveCamera</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#ad15b3d1fb21d3d61911ada0e2bc9b12bab22f7d3eb3e3131a6e8876dccaf3e934\">kSwatchLight</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#af9563ae2bd890aa0fb7782f626e35bc7\">MaterialViewerCamera</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#ad15b3d1fb21d3d61911ada0e2bc9b12b\">MaterialViewerLights</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a5222892109760efc845e37469b0f6cb4\">releaseDrawContext</a>(MDrawContext *context, bool releaseTargets=true)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a73c521cb743ed9cc5a595f29d7428e91\">renderMaterialViewerGeometry</a>(const MString &amp;shape, MObject shaderNode, MImage &amp;image, MaterialViewerCamera cameraMode=kPerspectiveCamera, MaterialViewerLights lightRig=kDefaultLights)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#acca1b80fae8742954c0939bce723c913\">swatchBackgroundColor</a>(float &amp;r, float &amp;g, float &amp;b, float &amp;a)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html\">MRenderUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";