var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MBlendState Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_blend_state.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MBlendState Class Reference</h1>\n\
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
<div class=\"title\">MBlendState Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/State-and-State-Manager.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; State and State Manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Render-Loop-Overrides.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Render Loop Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state.html#pub-static-attribs\">Static Public Attributes</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Container class for an acquired GPU blend state.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MStateManager.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ad3316ff174eff6a45c45f0e90d84eabe\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabe\">BlendOperation</a> { <br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabea8d20f6cca2d49a8732f535cfe28812c8\">kAdd</a> = 0x1, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabeae1d92bfb6833e8b4a3c16049e764671f\">kSubtract</a> = 0x2, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabeac4021f31cf4df9f5f9f735f22588e0a8\">kReverseSubtract</a> = 0x3, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabeac07fcd1852bd444a4be09b8aba6b7874\">kMin</a> = 0x4, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabea11a8c07455b6c1d80c87e414be979962\">kMax</a> = 0x5\n\
<br>\n\
 }<tr class=\"memdesc:ad3316ff174eff6a45c45f0e90d84eabe\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Blend operations for hardware target blending.  <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabe\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad3316ff174eff6a45c45f0e90d84eabe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:acdb056fac09601eaa8b5f1b5df3ee4ea\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">BlendOption</a> { <br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaabdc6e852c17bbf4522c91b15eb87dc3b\">kZero</a> = 1, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa567435a26feac1c98cd5213345ec6681\">kOne</a> = 2, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaab3c18b865065b7d2550f580a87b1b258\">kSourceColor</a> = 3, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa2dc1161242f200fc39aa6dbc5c09e0b9\">kInvSourceColor</a> = 4, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa76de73d01667fca98bcd3754f1f92c00\">kSourceAlpha</a> = 5, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaaa58d506c01416594f41c42e255dec594\">kInvSourceAlpha</a> = 6, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaaba6f8d05b184d4b60599247848cfed75\">kSourceAlphaSat</a> = 11, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa7c68d88602054bf4267a8cd2faa458a3\">kDestinationColor</a> = 9, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa8dfde632e6b4206d14c3b479bf842697\">kInvDestinationColor</a> = 10, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa5e25d0cd17ce74907d880f9488e7a122\">kDestinationAlpha</a> = 7, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaaae14d2a59c526862c31df1b9fff218b2\">kInvDestinationAlpha</a> = 8, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa2d436f3c60a06a1627c5e1b99cb9ec15\">kBothSourceAlpha</a> = 12, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaa629fac796544f39211382341fa541e6a\">kBothInvSourceAlpha</a> = 13, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaaee9c8fe7a3fec45122adcbb7fc3c30cf\">kBlendFactor</a> = 14, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4eaab99bb638b4ecb0d525b2308c7758ba7b\">kInvBlendFactor</a> = 15\n\
<br>\n\
 }<tr class=\"memdesc:acdb056fac09601eaa8b5f1b5df3ee4ea\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Specifies what value to use as blend factor with an optional pre-operation.  <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">More...</a><br></td></tr>\n\
<tr class=\"separator:acdb056fac09601eaa8b5f1b5df3ee4ea\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:a508bf9ce7f09728669b77bdc572a2340\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340\">ChannelMask</a> { <br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340abd4ec2b2e754b4c1e2ed5bbe74c00fb1\">kNoChannels</a> = 0, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340a6923420859272caffdd23c9285741dee\">kRedChannel</a> = 0x1, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340afd202a37bca20e94fcce6d2eb514ef71\">kGreenChannel</a> = 0x2, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340a3413982bfa28274fd0153a37b7950aa3\">kBlueChannel</a> = 0x4, \n\
<br>\n\
&#160;&#160;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340a49d7d249c9c91e4ce0132bcffe5d73d9\">kAlphaChannel</a> = 0x8, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340a747f3dc8ce5b96ce763ae2890f555ba9\">kRGBChannels</a> = 0x7, \n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340ae071e81463337bd111c8cd13ed696616\">kRGBAChannels</a> = 0xf\n\
<br>\n\
 }<tr class=\"memdesc:a508bf9ce7f09728669b77bdc572a2340\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">A bitfield that indicates which color components(red, green, blue, alpha) are writable.  <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340\">More...</a><br></td></tr>\n\
<tr class=\"separator:a508bf9ce7f09728669b77bdc572a2340\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a28f065709f0b209f0d6d4c75f3cc4bde\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a28f065709f0b209f0d6d4c75f3cc4bde\">desc</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a28f065709f0b209f0d6d4c75f3cc4bde\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the blend state descriptor that was used to create the state object.  <a href=\"class_m_h_w_render_1_1_m_blend_state.html#a28f065709f0b209f0d6d4c75f3cc4bde\">More...</a><br></td></tr>\n\
<tr class=\"separator:a28f065709f0b209f0d6d4c75f3cc4bde\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad7bcab0d1707ef0da22fc72ada62c40e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad7bcab0d1707ef0da22fc72ada62c40e\">resourceHandle</a> () const </td></tr>\n\
<tr class=\"memdesc:ad7bcab0d1707ef0da22fc72ada62c40e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method allows access to the draw API dependent handle for a blend state.  <a href=\"class_m_h_w_render_1_1_m_blend_state.html#ad7bcab0d1707ef0da22fc72ada62c40e\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad7bcab0d1707ef0da22fc72ada62c40e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0e85eb424c27e0cd6823b4848a3394ec\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0e85eb424c27e0cd6823b4848a3394ec\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a0e85eb424c27e0cd6823b4848a3394ec\">~MBlendState</a> ()</td></tr>\n\
<tr class=\"memdesc:a0e85eb424c27e0cd6823b4848a3394ec\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a0e85eb424c27e0cd6823b4848a3394ec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_blend_state.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ab6b4785ac0e20c5947d74921bacc49b8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ab6b4785ac0e20c5947d74921bacc49b8\"></a>\n\
static const int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ab6b4785ac0e20c5947d74921bacc49b8\">kMaxTargets</a> = 8</td></tr>\n\
<tr class=\"memdesc:ab6b4785ac0e20c5947d74921bacc49b8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maximum number of simulatanious render targets. <br></td></tr>\n\
<tr class=\"separator:ab6b4785ac0e20c5947d74921bacc49b8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Container class for an acquired GPU blend state. </p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html\" title=\"Container class for an acquired GPU blend state. \">MBlendState</a> wraps an acquired composite GPU blend state. This blend state can be used to set the current GPU blend state using MStateManager::setBlendState(myBlendState).</p>\n\
<p>Instances of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html\" title=\"Container class for an acquired GPU blend state. \">MBlendState</a> cannot be created or modified by users. You can read the descriptor for an <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html\" title=\"Container class for an acquired GPU blend state. \">MBlendState</a> using <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a28f065709f0b209f0d6d4c75f3cc4bde\" title=\"Get the blend state descriptor that was used to create the state object. \">MBlendState::desc()</a>, but you cannot set or alter the descriptor directly.</p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html\" title=\"Container class for an acquired GPU blend state. \">MBlendState</a> can only be obtained via <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#aeb560f7829270f34ab413ad314314c8f\" title=\"Acquires an immutable unique blend state matching the blend state descriptor, and returns it in a dis...\">MStateManager::acquireBlendState()</a>. To use <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#aeb560f7829270f34ab413ad314314c8f\" title=\"Acquires an immutable unique blend state matching the blend state descriptor, and returns it in a dis...\">MStateManager::acquireBlendState()</a>, create and fill an <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\" title=\"Descriptor for a complete blend state. \">MBlendStateDesc</a> instance with the requested state and pass it to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#aeb560f7829270f34ab413ad314314c8f\" title=\"Acquires an immutable unique blend state matching the blend state descriptor, and returns it in a dis...\">MStateManager::acquireBlendState()</a> which will return the cached unique blend state of that description. If the unique blend state did not previously exist in the cache, it is created.</p>\n\
<p>The information included in the blend state includes alpha to coverage enable, independent blend enable, a global float4 blend factor, and an array of blending descriptors, one for each target.</p>\n\
<p>The advantages of using this class rather than setting blend states explicitly are:</p>\n\
<p>1. Since the states are cached internally, state setting is much faster than setting individual states. 2. Since state is set through the Maya viewport API, Maya can maintain accurate knowledge of the current GPU state, even in the presence of arbitrary plug-ins. This also speeds state setup by reducing redundant state setting and OGL queries. 3. The information is device aware, meaning that it will return the correct results based on the current active device. For example it will return the appropriate values for DirectX versus an OpenGL device. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8h-example.html#_a1\">cgFx/cgfxPassStateSetter.h</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_shader_node_8h-example.html#_a53\">cgFx/cgfxShaderNode.h</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#_a1\">gpuCache/gpuCacheDrawOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/hw_phong_shader_2hw_phong_shader_8cpp-example.html#_a116\">hwPhongShader/hwPhongShader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#_a26\">rawfootPrintNode/rawfootPrintNode.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"ad3316ff174eff6a45c45f0e90d84eabe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">enum <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabe\">BlendOperation</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Blend operations for hardware target blending. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad3316ff174eff6a45c45f0e90d84eabea8d20f6cca2d49a8732f535cfe28812c8\"></a>kAdd&#160;</td><td class=\"fielddoc\">\n\
<p>Add the source and destination together. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad3316ff174eff6a45c45f0e90d84eabeae1d92bfb6833e8b4a3c16049e764671f\"></a>kSubtract&#160;</td><td class=\"fielddoc\">\n\
<p>Destination minus source. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad3316ff174eff6a45c45f0e90d84eabeac4021f31cf4df9f5f9f735f22588e0a8\"></a>kReverseSubtract&#160;</td><td class=\"fielddoc\">\n\
<p>Source minus destination. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad3316ff174eff6a45c45f0e90d84eabeac07fcd1852bd444a4be09b8aba6b7874\"></a>kMin&#160;</td><td class=\"fielddoc\">\n\
<p>The minimum of the source and destination. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad3316ff174eff6a45c45f0e90d84eabea11a8c07455b6c1d80c87e414be979962\"></a>kMax&#160;</td><td class=\"fielddoc\">\n\
<p>The maximum of the source and destination. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4ea\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">enum <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">BlendOption</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Specifies what value to use as blend factor with an optional pre-operation. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaabdc6e852c17bbf4522c91b15eb87dc3b\"></a>kZero&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is 0. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa567435a26feac1c98cd5213345ec6681\"></a>kOne&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is 1. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaab3c18b865065b7d2550f580a87b1b258\"></a>kSourceColor&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is source color, src.rgb. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa2dc1161242f200fc39aa6dbc5c09e0b9\"></a>kInvSourceColor&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is the complement of the source color, (1 - src.rgb). </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa76de73d01667fca98bcd3754f1f92c00\"></a>kSourceAlpha&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is source alpha, src.a. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaaa58d506c01416594f41c42e255dec594\"></a>kInvSourceAlpha&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is the complement of the source alpha, (1 - src.a). </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaaba6f8d05b184d4b60599247848cfed75\"></a>kSourceAlphaSat&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is (f, f, f, 1); where f = saturate(src.a) between 0 and 1. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa7c68d88602054bf4267a8cd2faa458a3\"></a>kDestinationColor&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is destination color, dst.rgb. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa8dfde632e6b4206d14c3b479bf842697\"></a>kInvDestinationColor&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is the complement of the destination color, (1 - dst.rgb). </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa5e25d0cd17ce74907d880f9488e7a122\"></a>kDestinationAlpha&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is destination alpha, dst.a. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaaae14d2a59c526862c31df1b9fff218b2\"></a>kInvDestinationAlpha&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is the complement of the destination alpha, (1 - dst.a). </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa2d436f3c60a06a1627c5e1b99cb9ec15\"></a>kBothSourceAlpha&#160;</td><td class=\"fielddoc\">\n\
<p>Source blend factor is src.a, destination blend factor is (1- src.a). </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaa629fac796544f39211382341fa541e6a\"></a>kBothInvSourceAlpha&#160;</td><td class=\"fielddoc\">\n\
<p>Source blend factor is (1- src.a), destination blend factor is src.a. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaaee9c8fe7a3fec45122adcbb7fc3c30cf\"></a>kBlendFactor&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is the global blend factor specified by users. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acdb056fac09601eaa8b5f1b5df3ee4eaab99bb638b4ecb0d525b2308c7758ba7b\"></a>kInvBlendFactor&#160;</td><td class=\"fielddoc\">\n\
<p>Blend factor is the complement of the global blend factor, (1 - blendFactor.rgba). </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">enum <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340\">ChannelMask</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>A bitfield that indicates which color components(red, green, blue, alpha) are writable. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340abd4ec2b2e754b4c1e2ed5bbe74c00fb1\"></a>kNoChannels&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340a6923420859272caffdd23c9285741dee\"></a>kRedChannel&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340afd202a37bca20e94fcce6d2eb514ef71\"></a>kGreenChannel&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340a3413982bfa28274fd0153a37b7950aa3\"></a>kBlueChannel&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340a49d7d249c9c91e4ce0132bcffe5d73d9\"></a>kAlphaChannel&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340a747f3dc8ce5b96ce763ae2890f555ba9\"></a>kRGBChannels&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a508bf9ce7f09728669b77bdc572a2340ae071e81463337bd111c8cd13ed696616\"></a>kRGBAChannels&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
</table>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a55\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a28f065709f0b209f0d6d4c75f3cc4bde\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp; desc </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the blend state descriptor that was used to create the state object. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A reference to the blend state descriptor</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> operation failed </li>\n\
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
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad7bcab0d1707ef0da22fc72ada62c40e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void * resourceHandle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method allows access to the draw API dependent handle for a blend state. </p>\n\
<p>This handle is owned by the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html\" title=\"Container class for an acquired GPU blend state. \">MBlendState</a> and is provided to allow access to use as a read-only object.</p>\n\
<p><b>Modifications should never be performed on this handle.</b></p>\n\
<p>Any modifications may result in unpredictable stability as the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html\" title=\"Container class for an acquired GPU blend state. \">MBlendState</a> no longer has knowledge of it\'s contents.</p>\n\
<p>For OpenGL, such a handle does not exist and a NULL pointer will be returned.</p>\n\
<p>For DirectX 10 and higher, a pointer to a Direct3D state will be returned.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer (handle) to the state if successful, otherwise NULL. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStateManager.h</li>\n\
<li>MStateManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";