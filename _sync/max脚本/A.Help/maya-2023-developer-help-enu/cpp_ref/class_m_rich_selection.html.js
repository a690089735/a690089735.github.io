var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MRichSelection Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_rich_selection.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: MRichSelection Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MRichSelection Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_rich_selection.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_rich_selection.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_rich_selection-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Selection list supporting soft selection and symmetry.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_rich_selection.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MRichSelection.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a230dfb97bac28f8bf9a19f22c4bc6f65\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a230dfb97bac28f8bf9a19f22c4bc6f65\">MRichSelection</a> ()</td></tr>\n\
<tr class=\"memdesc:a230dfb97bac28f8bf9a19f22c4bc6f65\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class constructor.  <a href=\"class_m_rich_selection.html#a230dfb97bac28f8bf9a19f22c4bc6f65\">More...</a><br></td></tr>\n\
<tr class=\"separator:a230dfb97bac28f8bf9a19f22c4bc6f65\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af2346558af1108cfd5828be76565a1a3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#af2346558af1108cfd5828be76565a1a3\">MRichSelection</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html\">MRichSelection</a> &amp;src)</td></tr>\n\
<tr class=\"memdesc:af2346558af1108cfd5828be76565a1a3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_rich_selection.html#af2346558af1108cfd5828be76565a1a3\">More...</a><br></td></tr>\n\
<tr class=\"separator:af2346558af1108cfd5828be76565a1a3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a944d249835a0707df231879fac25922b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a944d249835a0707df231879fac25922b\">~MRichSelection</a> ()</td></tr>\n\
<tr class=\"memdesc:a944d249835a0707df231879fac25922b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor.  <a href=\"class_m_rich_selection.html#a944d249835a0707df231879fac25922b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a944d249835a0707df231879fac25922b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff892b575c9b4fdd0e1d996d22a79452\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#aff892b575c9b4fdd0e1d996d22a79452\">getSelection</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;selection) const </td></tr>\n\
<tr class=\"memdesc:aff892b575c9b4fdd0e1d996d22a79452\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a copy of the non-symmetry component of the rich selection.  <a href=\"class_m_rich_selection.html#aff892b575c9b4fdd0e1d996d22a79452\">More...</a><br></td></tr>\n\
<tr class=\"separator:aff892b575c9b4fdd0e1d996d22a79452\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a85254191652865e4c7fe84df5a445eee\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a85254191652865e4c7fe84df5a445eee\">getSymmetry</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;symmetry) const </td></tr>\n\
<tr class=\"memdesc:a85254191652865e4c7fe84df5a445eee\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a copy of the symmetry component of the rich selection.  <a href=\"class_m_rich_selection.html#a85254191652865e4c7fe84df5a445eee\">More...</a><br></td></tr>\n\
<tr class=\"separator:a85254191652865e4c7fe84df5a445eee\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2c39fc639b2142a2c05bacf2bc62bb87\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a2c39fc639b2142a2c05bacf2bc62bb87\">getSymmetryMatrix</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;symmetryMatrix, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">MSpace::Space</a> &amp;space) const </td></tr>\n\
<tr class=\"memdesc:a2c39fc639b2142a2c05bacf2bc62bb87\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the raw symmetry matrix to use for the symmetric components of the rich selection.  <a href=\"class_m_rich_selection.html#a2c39fc639b2142a2c05bacf2bc62bb87\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2c39fc639b2142a2c05bacf2bc62bb87\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af8f065f2178d1aa04f24990fba5ba245\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#af8f065f2178d1aa04f24990fba5ba245\">getSymmetryMatrix</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">MSpace::Space</a> space, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;symmetryMatrix) const </td></tr>\n\
<tr class=\"memdesc:af8f065f2178d1aa04f24990fba5ba245\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the symmetry matrix to use for the symmetric component of the specified DAG object.  <a href=\"class_m_rich_selection.html#af8f065f2178d1aa04f24990fba5ba245\">More...</a><br></td></tr>\n\
<tr class=\"separator:af8f065f2178d1aa04f24990fba5ba245\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af44c283a0be022d73632cc52ea8872e4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#af44c283a0be022d73632cc52ea8872e4\">getSymmetryPlane</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">MSpace::Space</a> space, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_plane.html\">MPlane</a> &amp;plane) const </td></tr>\n\
<tr class=\"memdesc:af44c283a0be022d73632cc52ea8872e4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the plane of symmetry.  <a href=\"class_m_rich_selection.html#af44c283a0be022d73632cc52ea8872e4\">More...</a><br></td></tr>\n\
<tr class=\"separator:af44c283a0be022d73632cc52ea8872e4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad5522f028dde0080b753279426415a4a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#ad5522f028dde0080b753279426415a4a\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ad5522f028dde0080b753279426415a4a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method empties the rich selection.  <a href=\"class_m_rich_selection.html#ad5522f028dde0080b753279426415a4a\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad5522f028dde0080b753279426415a4a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a65170009a258b6ff2e15a32414357ab3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a65170009a258b6ff2e15a32414357ab3\">setSelection</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;selection)</td></tr>\n\
<tr class=\"memdesc:a65170009a258b6ff2e15a32414357ab3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the non-symmetry component of the rich selection.  <a href=\"class_m_rich_selection.html#a65170009a258b6ff2e15a32414357ab3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a65170009a258b6ff2e15a32414357ab3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_rich_selection.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Selection list supporting soft selection and symmetry. </p>\n\
<p>This class implements a selection list that support soft selection and symmetry.</p>\n\
<p>The rich selection is split into two halves: the \"normal\" side, and an optional symmetric component. Components on both sides can include weight data which is used to specify both the amount of influence and the proximity to the centre of symmetry.</p>\n\
<p>In addition to the selected objects, the rich selection also includes information about the axis of symmetry so that operations can determine how to process any symmetric selection (e.g. reflect transformations, etc). </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/list_rich_selection_cmd_2list_rich_selection_cmd_8cpp-example.html#_a18\">listRichSelectionCmd/listRichSelectionCmd.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/rich_move_cmd_2rich_move_cmd_8cpp-example.html#_a19\">richMoveCmd/richMoveCmd.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a230dfb97bac28f8bf9a19f22c4bc6f65\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html\">MRichSelection</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class constructor. </p>\n\
<p>Creates an empty rich selection. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af2346558af1108cfd5828be76565a1a3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html\">MRichSelection</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html\">MRichSelection</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>src</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<p>This constructor will copy the contents of the given selection list into the newly created selection list.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">src</td><td>the rich selection to be copied. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a944d249835a0707df231879fac25922b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">~<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html\">MRichSelection</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class destructor. </p>\n\
<p>Removes the selection list. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aff892b575c9b4fdd0e1d996d22a79452\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getSelection </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>selection</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a copy of the non-symmetry component of the rich selection. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">selection</td><td>Storage for the selection list</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Selection list was successfully returned </li>\n\
<li><b>MS::kFailure</b> Error getting the selection list </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/list_rich_selection_cmd_2list_rich_selection_cmd_8cpp-example.html#a20\">listRichSelectionCmd/listRichSelectionCmd.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/rich_move_cmd_2rich_move_cmd_8cpp-example.html#a21\">richMoveCmd/richMoveCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a85254191652865e4c7fe84df5a445eee\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getSymmetry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>symmetry</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a copy of the symmetry component of the rich selection. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">symmetry</td><td>Storage for the symmetric selection list</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Selection list was successfully returned </li>\n\
<li><b>MS::kFailure</b> Error getting the selection list </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/list_rich_selection_cmd_2list_rich_selection_cmd_8cpp-example.html#a22\">listRichSelectionCmd/listRichSelectionCmd.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/rich_move_cmd_2rich_move_cmd_8cpp-example.html#a40\">richMoveCmd/richMoveCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2c39fc639b2142a2c05bacf2bc62bb87\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getSymmetryMatrix </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>symmetryMatrix</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">MSpace::Space</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>space</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the raw symmetry matrix to use for the symmetric components of the rich selection. </p>\n\
<p>The caller is responsible for handling any necessary transformation space conversions when using this version of getSymmetryMatrix.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">symmetryMatrix</td><td>Storage for the symmetry matrix </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">space</td><td>The transformation space of the symmetryMatrix</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Symmetry matrix was successfully returned </li>\n\
<li><b>MS::kFailure</b> Error getting the symmetry matrix </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/rich_move_cmd_2rich_move_cmd_8cpp-example.html#a42\">richMoveCmd/richMoveCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af8f065f2178d1aa04f24990fba5ba245\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getSymmetryMatrix </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>path</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">MSpace::Space</a>&#160;</td>\n\
          <td class=\"paramname\"><em>space</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>symmetryMatrix</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the symmetry matrix to use for the symmetric component of the specified DAG object. </p>\n\
<p>This method handles any matrix space conversions for you.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">path</td><td>The DAG path the matrix should be calculated for </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">space</td><td>The space the matrix should be calculated in. Only kWorld and kObject are currently supported. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">symmetryMatrix</td><td>Storage for the symmetry matrix</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Symmetry matrix was successfully returned </li>\n\
<li><b>MS::kFailure</b> Error getting the symmetry matrix </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af44c283a0be022d73632cc52ea8872e4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getSymmetryPlane </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>path</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">MSpace::Space</a>&#160;</td>\n\
          <td class=\"paramname\"><em>space</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_plane.html\">MPlane</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>symmetryPlane</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the plane of symmetry. </p>\n\
<p>This can be used to enforce seam weights in tools that support symmetry. Note that the direction of the plane carries no significance (specifically, having a positive offset from the plane does not imply a point is part of the non-symmetric selection).</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">path</td><td>The DAG path the plane should be calculated for </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">space</td><td>The space the plane should be calculated in. Only kWorld and kObject are currently supported. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">symmetryPlane</td><td>Storage for the symmetry plane</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Symmetry plane was successfully returned </li>\n\
<li><b>MS::kFailure</b> Error getting the symmetry plane </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/rich_move_cmd_2rich_move_cmd_8cpp-example.html#a29\">richMoveCmd/richMoveCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad5522f028dde0080b753279426415a4a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> clear </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method empties the rich selection. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status flag</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The list was successfully reset. </li>\n\
<li><b>MS::kFailure</b> Error resetting list. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a65170009a258b6ff2e15a32414357ab3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setSelection </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>selection</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the non-symmetry component of the rich selection. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">selection</td><td>The selection list</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Selection list was successfully set </li>\n\
<li><b>MS::kFailure</b> Error setting the selection list </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MRichSelection.h</li>\n\
<li>MRichSelection.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";