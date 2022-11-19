var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMayaAnim Namespace Reference</title>\n\
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
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'namespace_open_maya_anim.html\', tocPrefix);\n\
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
	  $(document).ready(py_ref_initializeToc);\n\
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
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Python API 2.0 Reference: OpenMayaAnim Namespace Reference</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/namespaces.html\"><span>Packages</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"py_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"py_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Packages</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespacemembers.html\"><span>Package&#160;Functions</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMayaAnim Namespace Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"namespace_open_maya_anim.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"namespace_open_maya_anim.html#var-members\">Variables</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html\">MAnimControl</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_change.html\">MAnimCurveChange</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard.html\">MAnimCurveClipboard</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item.html\">MAnimCurveClipboardItem</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item_array.html\">MAnimCurveClipboardItemArray</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_message.html\">MAnimMessage</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_util.html\">MAnimUtil</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html\">MFnAnimCurve</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_geometry_filter.html\">MFnGeometryFilter</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html\">MFnSkinCluster</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"var-members\"></a>\n\
Variables</h2></td></tr>\n\
<tr class=\"memitem:ae5636e48474fad9effa0515126b0646e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ae5636e48474fad9effa0515126b0646e\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>__loader__</b> = &lt;_frozen_importlib_external.SourceFileLoaderobject&gt;</td></tr>\n\
<tr class=\"separator:ae5636e48474fad9effa0515126b0646e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac0cf5490821dfadb74eb25b56e56fcb3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac0cf5490821dfadb74eb25b56e56fcb3\"></a>\n\
tuple&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>__spec__</b> = ModuleSpec(name=\'maya.api.OpenMayaAnim\', loader=...\\Lib\\\\site-packages\\\\maya\\\\api\\\\OpenMayaAnim.py\')</td></tr>\n\
<tr class=\"separator:ac0cf5490821dfadb74eb25b56e56fcb3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4076a599d915d3797b37288096f0ddc0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4076a599d915d3797b37288096f0ddc0\"></a>\n\
string&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>key</b> = \'__file__\'</td></tr>\n\
<tr class=\"separator:a4076a599d915d3797b37288096f0ddc0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a16f8372dafe0a12b5d0231c8882a62d1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a16f8372dafe0a12b5d0231c8882a62d1\"></a>\n\
dictionary&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>ourdict</b> = {\'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html\">MAnimControl</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html\">OpenMayaAnim.MAnimControl</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_change.html\">MAnimCurveChange</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_change.html\">OpenMayaAnim.MAnimCurveChange</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard.html\">MAnimCurveClipboard</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard.html\">OpenMayaAnim.MAnimCurveClipboard</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item.html\">MAnimCurveClipboardItem</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item.html\">OpenMayaAnim.MAnimCurveClipboardItem</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item_array.html\">MAnimCurveClipboardItemArray</a>\': &lt;class \'OpenMaya.MAnimCurveClipboardItemArray\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_message.html\">MAnimMessage</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_message.html\">OpenMayaAnim.MAnimMessage</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_util.html\">MAnimUtil</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_util.html\">OpenMayaAnim.MAnimUtil</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html\">MFnAnimCurve</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html\">OpenMayaAnim.MFnAnimCurve</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_geometry_filter.html\">MFnGeometryFilter</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_geometry_filter.html\">OpenMayaAnim.MFnGeometryFilter</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html\">MFnSkinCluster</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html\">OpenMayaAnim.MFnSkinCluster</a>\'&gt;, ...}</td></tr>\n\
<tr class=\"separator:a16f8372dafe0a12b5d0231c8882a62d1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afba48b6a2222612f1cfc811d569de807\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"afba48b6a2222612f1cfc811d569de807\"></a>\n\
dictionary&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>py2dict</b> = {\'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html\">MAnimControl</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_control.html\">OpenMayaAnim.MAnimControl</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_change.html\">MAnimCurveChange</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_change.html\">OpenMayaAnim.MAnimCurveChange</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard.html\">MAnimCurveClipboard</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard.html\">OpenMayaAnim.MAnimCurveClipboard</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item.html\">MAnimCurveClipboardItem</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item.html\">OpenMayaAnim.MAnimCurveClipboardItem</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_clipboard_item_array.html\">MAnimCurveClipboardItemArray</a>\': &lt;class \'OpenMaya.MAnimCurveClipboardItemArray\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_message.html\">MAnimMessage</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_message.html\">OpenMayaAnim.MAnimMessage</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_util.html\">MAnimUtil</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_util.html\">OpenMayaAnim.MAnimUtil</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html\">MFnAnimCurve</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html\">OpenMayaAnim.MFnAnimCurve</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_geometry_filter.html\">MFnGeometryFilter</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_geometry_filter.html\">OpenMayaAnim.MFnGeometryFilter</a>\'&gt;, \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html\">MFnSkinCluster</a>\': &lt;class \'<a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html\">OpenMayaAnim.MFnSkinCluster</a>\'&gt;, ...}</td></tr>\n\
<tr class=\"separator:afba48b6a2222612f1cfc811d569de807\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>The <a class=\"el\" href=\"#!/url=./py_ref/namespace_open_maya_anim.html\">OpenMayaAnim</a> module contains classes relating to animation. </p>\n\
</div></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";