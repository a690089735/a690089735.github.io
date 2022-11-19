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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_selection_list-members.html\', tocPrefix);\n\
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
<div class=\"title\">MSelectionList Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>(const MObject &amp;object, const bool mergeWithExisting=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a1f5d28c99a9cde9991314e6c943ed5f1\">add</a>(const MDagPath &amp;object, const MObject &amp;component=MObject::kNullObj, const bool mergeWithExisting=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ae803d854d28b033ee8bdf30056fe9ad2\">add</a>(const MString &amp;matchString, const bool searchChildNamespacesToo=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a5b89deb36895c9f72643789c5aedb12e\">add</a>(const MPlug &amp;plug, const bool mergeWithExisting=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a9ec811ffefa8ad806d818b77bc2d274c\">add</a>(const MUuid &amp;uuid, bool mergeWithExisting=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ad5522f028dde0080b753279426415a4a\">clear</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd\">getDagPath</a>(unsigned int index, MDagPath &amp;dagPath, MObject &amp;component=MObject::kNullObj) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(unsigned int index, MObject &amp;depNode) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a4cdb668fdd6feafe9b296a80cfca26f0\">getPlug</a>(unsigned int index, MPlug &amp;plug) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#aac30ff11519783d25c09671b7b13b9ff\">getPlug</a>(unsigned int index, bool convertComponents, MPlug &amp;plug) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#aaf17bbe390ab271a23cf4eca69e3f81e\">getSelectionStrings</a>(MStringArray &amp;array) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a76b6746bd5a8f26b409b315d15f6212e\">getSelectionStrings</a>(unsigned int index, MStringArray &amp;array) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a8ccfcfbdcebf501f9667ee617419892c\">hasItem</a>(const MObject &amp;item, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a04301bd17bbe534b8dc9223b6034b6ca\">hasItem</a>(const MDagPath &amp;item, const MObject &amp;component=MObject::kNullObj, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a9537e8b3a1e1b119dff39b1829ebb900\">hasItem</a>(const MPlug &amp;plug, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a425aec173c651f6ae8c71e8d13809e44\">hasItemPartly</a>(const MDagPath &amp;item, const MObject &amp;component, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ad44d2a948e6027c27702304431b14052\">intersect</a>(const MSelectionList &amp;other, bool expandToLeaves=false)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a8174b25717a6f860d40f2ca259442df5\">isEmpty</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a2c76c3f8b54a741ba9fdbfe6b5e0ee5cae05c98447368025f36e540e462724d18\">kMergeNormal</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a2c76c3f8b54a741ba9fdbfe6b5e0ee5ca7cb7dd787f22a4dab08af6fe7c408534\">kRemoveFromList</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a2c76c3f8b54a741ba9fdbfe6b5e0ee5ca3a0570bd44a3245270b3e7b94934f3f1\">kXORWithList</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a92c9d648de48c0e6535fc814d32bb72c\">merge</a>(const MSelectionList &amp;other, const MergeStrategy strategy=kMergeNormal)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ab9b2a0aafede71ba65ea8764c537954c\">merge</a>(const MDagPath &amp;object, const MObject &amp;component=MObject::kNullObj, const MergeStrategy strategy=kMergeNormal)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a2c76c3f8b54a741ba9fdbfe6b5e0ee5c\">MergeStrategy</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#aaaff82e4fe336f0f30e028e0ed58308b\">MSelectionList</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#aef9274c69441f6ed9d1b04320ff4a802\">MSelectionList</a>(const MSelectionList &amp;src)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#adb6d0cabad0cfece5772c18ff5bda3e8\">operator=</a>(const MSelectionList &amp;other)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#af05b9926a5e8e7b8e7a9e98a13c839b6\">remove</a>(unsigned int index)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a45e954a9ccdeffcdcf45b93415ea4691\">replace</a>(unsigned int index, const MObject &amp;item)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#aee800f13b85aae93a48bd0bb4b06fde7\">replace</a>(unsigned int index, const MDagPath &amp;item, const MObject &amp;component=MObject::kNullObj)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a5f91db371743baee3ae70fdc9fbcd2c0\">replace</a>(unsigned int index, const MPlug &amp;plug)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ab2d8735e2e26695b1878da72b8f86f4f\">toggle</a>(const MDagPath &amp;item, const MObject &amp;component=MObject::kNullObj)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a08cbb30b6db9df0b0ae61cba928ce91c\">~MSelectionList</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";