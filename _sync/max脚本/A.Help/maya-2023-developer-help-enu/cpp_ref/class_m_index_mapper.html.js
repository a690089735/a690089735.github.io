var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MIndexMapper Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_index_mapper.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MIndexMapper Class Reference</h1>\n\
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
<div class=\"title\">MIndexMapper Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/What-s-New-What-s-Changed-/2023-Whats-New-in-API.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s new in the Maya 2023 devkit</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_index_mapper.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_index_mapper.html#pub-static-attribs\">Static Public Attributes</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_index_mapper-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><b>Introduced in 2020.0</b>  \n\
 <a href=\"#!/url=./cpp_ref/class_m_index_mapper.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MIndexMapper.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ae3fe929d63ba34b0d7eb82ec1adf6160\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ae3fe929d63ba34b0d7eb82ec1adf6160\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#ae3fe929d63ba34b0d7eb82ec1adf6160\">MIndexMapper</a> ()</td></tr>\n\
<tr class=\"memdesc:ae3fe929d63ba34b0d7eb82ec1adf6160\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs a <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\" title=\"Introduced in 2020.0 \">MIndexMapper</a>. <br></td></tr>\n\
<tr class=\"separator:ae3fe929d63ba34b0d7eb82ec1adf6160\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a12417d38f5cabcbaf309d5e6fa14d5ce\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a12417d38f5cabcbaf309d5e6fa14d5ce\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#a12417d38f5cabcbaf309d5e6fa14d5ce\">~MIndexMapper</a> ()</td></tr>\n\
<tr class=\"memdesc:a12417d38f5cabcbaf309d5e6fa14d5ce\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a12417d38f5cabcbaf309d5e6fa14d5ce\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad96cfa11f932f00440fc5c3c6c3f2b6d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#ad96cfa11f932f00440fc5c3c6c3f2b6d\">MIndexMapper</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\">MIndexMapper</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:ad96cfa11f932f00440fc5c3c6c3f2b6d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs a <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\" title=\"Introduced in 2020.0 \">MIndexMapper</a>.  <a href=\"class_m_index_mapper.html#ad96cfa11f932f00440fc5c3c6c3f2b6d\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad96cfa11f932f00440fc5c3c6c3f2b6d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a028ea4b8a830f8ae5cfab9bc8ace5410\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">Index&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#a028ea4b8a830f8ae5cfab9bc8ace5410\">fullCount</a> () const </td></tr>\n\
<tr class=\"memdesc:a028ea4b8a830f8ae5cfab9bc8ace5410\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the total number of points of the geometry.  <a href=\"class_m_index_mapper.html#a028ea4b8a830f8ae5cfab9bc8ace5410\">More...</a><br></td></tr>\n\
<tr class=\"separator:a028ea4b8a830f8ae5cfab9bc8ace5410\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeb8175beaa44b2592e10c39d3e64ff54\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">Index&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#aeb8175beaa44b2592e10c39d3e64ff54\">affectCount</a> () const </td></tr>\n\
<tr class=\"memdesc:aeb8175beaa44b2592e10c39d3e64ff54\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the number of points in a subset of the geometry.  <a href=\"class_m_index_mapper.html#aeb8175beaa44b2592e10c39d3e64ff54\">More...</a><br></td></tr>\n\
<tr class=\"separator:aeb8175beaa44b2592e10c39d3e64ff54\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aab422618ea8b10d2a8960ff675aae4cb\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">Index&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#aab422618ea8b10d2a8960ff675aae4cb\">affectToFull</a> (Index aid) const </td></tr>\n\
<tr class=\"memdesc:aab422618ea8b10d2a8960ff675aae4cb\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method remaps the affect index of a subset to the full index of the geometry.  <a href=\"class_m_index_mapper.html#aab422618ea8b10d2a8960ff675aae4cb\">More...</a><br></td></tr>\n\
<tr class=\"separator:aab422618ea8b10d2a8960ff675aae4cb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a761d19a48ed020ca966998a26a8a3c11\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">Index&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#a761d19a48ed020ca966998a26a8a3c11\">fullToAffect</a> (Index vid) const </td></tr>\n\
<tr class=\"memdesc:a761d19a48ed020ca966998a26a8a3c11\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method remaps the full index of the geometry to the affect index of a subset.  <a href=\"class_m_index_mapper.html#a761d19a48ed020ca966998a26a8a3c11\">More...</a><br></td></tr>\n\
<tr class=\"separator:a761d19a48ed020ca966998a26a8a3c11\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a877dbb211dae5ec68fa6174eff45d959\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#a877dbb211dae5ec68fa6174eff45d959\">isIdentityMap</a> () const </td></tr>\n\
<tr class=\"memdesc:a877dbb211dae5ec68fa6174eff45d959\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method checks whether the index mapper is an identity map which means that the subset is equal to the full geometry.  <a href=\"class_m_index_mapper.html#a877dbb211dae5ec68fa6174eff45d959\">More...</a><br></td></tr>\n\
<tr class=\"separator:a877dbb211dae5ec68fa6174eff45d959\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61fea43b4d0f36246a50aff0fe4d9d10\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_uint_array.html\">MUintArray</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#a61fea43b4d0f36246a50aff0fe4d9d10\">affectMap</a> () const </td></tr>\n\
<tr class=\"memdesc:a61fea43b4d0f36246a50aff0fe4d9d10\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>Changed in 2023.0</b>  <a href=\"class_m_index_mapper.html#a61fea43b4d0f36246a50aff0fe4d9d10\">More...</a><br></td></tr>\n\
<tr class=\"separator:a61fea43b4d0f36246a50aff0fe4d9d10\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ad9f80bb353043984747206df32afc365\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static Index&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#ad9f80bb353043984747206df32afc365\">InvalidIndex</a> = std::numeric_limits&lt;unsigned int&gt;::max()</td></tr>\n\
<tr class=\"memdesc:ad9f80bb353043984747206df32afc365\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>Introduced in 2022.0</b>  <a href=\"class_m_index_mapper.html#ad9f80bb353043984747206df32afc365\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad9f80bb353043984747206df32afc365\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p><b>Introduced in 2020.0</b> </p>\n\
<dl class=\"changelog_2020_0\"><dt><b><a class=\"el\" href=\"#!/url=./cpp_ref/changelog_2020_0.html#_changelog_2020_0000027\">2020.0:</a></b></dt><dd>Introduced in this version. </dd></dl>\n\
<p>Index mapper containing indices of a subset of a geometry</p>\n\
<p>An <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\" title=\"Introduced in 2020.0 \">MIndexMapper</a> maps indices between the full set of a geometry and the subset of indices that is affected by a deformer. If a deformer affects f.e only 1000 verts of a total of 15000 verts then the affectMap will be of size 1000 and contain the indices into the full table of points. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/basic_morph_node_2basic_morph_node_8cpp-example.html#_a43\">basicMorphNode/basicMorphNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/example_falloff_2smooth_falloff_node_8cpp-example.html#_a23\">exampleFalloff/smoothFalloffNode.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/example_falloff_2smooth_falloff_node_8h-example.html#_a10\">exampleFalloff/smoothFalloffNode.h</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad96cfa11f932f00440fc5c3c6c3f2b6d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\">MIndexMapper</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\">MIndexMapper</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructs a <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\" title=\"Introduced in 2020.0 \">MIndexMapper</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html\" title=\"Introduced in 2020.0 \">MIndexMapper</a> to copy. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a028ea4b8a830f8ae5cfab9bc8ace5410\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MIndexMapper::Index fullCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the total number of points of the geometry. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the number of points of the geometry </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aeb8175beaa44b2592e10c39d3e64ff54\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MIndexMapper::Index affectCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the number of points in a subset of the geometry. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the number of points in the subset of a geometry </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/example_falloff_2smooth_falloff_node_8cpp-example.html#a25\">exampleFalloff/smoothFalloffNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aab422618ea8b10d2a8960ff675aae4cb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MIndexMapper::Index affectToFull </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">Index&#160;</td>\n\
          <td class=\"paramname\"><em>aid</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method remaps the affect index of a subset to the full index of the geometry. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">aid</td><td>the index into the affect list we want to remap </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the remapped index or UINT_MAX (invalid) if it does not exist </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a761d19a48ed020ca966998a26a8a3c11\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MIndexMapper::Index fullToAffect </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">Index&#160;</td>\n\
          <td class=\"paramname\"><em>vid</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method remaps the full index of the geometry to the affect index of a subset. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">vid</td><td>the index into the full list we want to remap </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the remapped index or UINT_MAX (invalid) if it does not exist </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/example_falloff_2smooth_falloff_node_8cpp-example.html#a27\">exampleFalloff/smoothFalloffNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a877dbb211dae5ec68fa6174eff45d959\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool isIdentityMap </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method checks whether the index mapper is an identity map which means that the subset is equal to the full geometry. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if it is an identity map </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a61fea43b4d0f36246a50aff0fe4d9d10\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_uint_array.html\">MUintArray</a> affectMap </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p><b>Changed in 2023.0</b> </p>\n\
<p>This method returns the array of indices which are contained in the subset.</p>\n\
<dl class=\"changelog_2023_0\"><dt><b><a class=\"el\" href=\"#!/url=./cpp_ref/changelog_2023_0.html#_changelog_2023_0000036\">2023.0:</a></b></dt><dd>return type changed </dd></dl>\n\
<p>The indices are indices into the full geometry and the length of the array is equal to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_index_mapper.html#aeb8175beaa44b2592e10c39d3e64ff54\" title=\"This method returns the number of points in a subset of the geometry. \">affectCount()</a></p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The array of indices in the subset </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"ad9f80bb353043984747206df32afc365\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MIndexMapper::Index InvalidIndex = std::numeric_limits&lt;unsigned int&gt;::max()</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p><b>Introduced in 2022.0</b> </p>\n\
<dl class=\"changelog_2022_0\"><dt><b><a class=\"el\" href=\"#!/url=./cpp_ref/changelog_2022_0.html#_changelog_2022_0000059\">2022.0:</a></b></dt><dd>Introduced in this version. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/example_falloff_2smooth_falloff_node_8cpp-example.html#a28\">exampleFalloff/smoothFalloffNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MIndexMapper.h</li>\n\
<li>MIndexMapper.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";