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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_g_p_u_deformer-members.html\', tocPrefix);\n\
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
<div class=\"title\">MPxGPUDeformer Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#af684dd523a1adfe5f06de3e513e8146a\">createOutputBuffer</a>(const MGPUDeformerBuffer &amp;inputBuffer)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a070259639bc552fd702c9e8e042f0331\">evaluate</a>(MDataBlock &amp;block, const MEvaluationNode &amp;evaluationNode, const MPlug &amp;outputPlug, unsigned int numElements, const MAutoCLMem, const MAutoCLEvent, MAutoCLMem, MAutoCLEvent &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a2192a4db310682f257be5779b741ab56\">evaluate</a>(MDataBlock &amp;block, const MEvaluationNode &amp;evaluationNode, const MPlug &amp;outputPlug, const MGPUDeformerData &amp;inputData, MGPUDeformerData &amp;outputData)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#ae9acc9c663a1902772bc1cdf996e2f11\">evaluate</a>(MDataBlock &amp;block, const MEvaluationNode &amp;evaluationNode, const MPlug &amp;outputPlug, const MPlugArray &amp;inputPlugs, const MGPUDeformerData &amp;inputData, MGPUDeformerData &amp;outputData)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a3eaede9f36e08ff2eb4cc508f06cf860\">getFixedSetupData</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#ae69d4b45caa48910b0d15b2241844257\">getIndexMapper</a>(MIndexMapper &amp;imap)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#ac0f0ead80f40b683cced1cc83dd4f2d5\">getSubsetState</a>(MDataBlock &amp;block, unsigned int multiIndex, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#abb7238dc52214c1b33a9c4000c1f237e\">hasAttributeBeenModified</a>(const MEvaluationNode &amp;evaluationNode, const MObject &amp;attribute)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a9af4d2c6b863b0e04ea2d75cfacabca3\">hasPlugBeenModified</a>(const MPlug &amp;plug)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a9091d275d1900303daf82441c345744d\">isBufferUpdateNeeded</a>(const MOpenCLBuffer &amp;buffer, const MEvaluationNode &amp;evaluationNode, const MObject &amp;attribute)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a9485d8be4a986ff8ff6cbdeead9dd044\">isFalloffWeightsDependantOnCurrentGeometry</a>(const MEvaluationNode &amp;evaluationNode, unsigned int multiIndex)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#aaedd3b924c00026868a70757701089c7\">isFalloffWeightsDirty</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#abdd7b10161b08897a80214a9e03cbc57\">MPxGPUDeformer</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a83364ffb9d4fc780e2d76106c90447dd\">sAffectedVerticesName</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a1f51d308fc70e4dd7d5abc9c815c6839\">sGeometryMatrixName</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#af362a572a46f60792145b204d00b550a\">sInverseGeometryMatrixName</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a3355163bdc23aa2119a8b321e8e91fe5\">sPositionsName</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a74a45d2648335936561898c390281a6a\">terminate</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#abbd20f3dfb42bbd2795777a0ab103f4b\">uploadFixedSetupData</a>(const MString &amp;name, MOpenCLBuffer &amp;buffer, cl_int &amp;errorCode, unsigned int *arrayLength)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a0cc8b4a4be9364b5c2c17806eea85f63\">~MPxGPUDeformer</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";