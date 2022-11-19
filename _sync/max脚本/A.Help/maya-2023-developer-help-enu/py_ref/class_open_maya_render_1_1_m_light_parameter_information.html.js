var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMayaRender.MLightParameterInformation Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_light_parameter_information.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMayaRender.MLightParameterInformation Class Reference</h1>\n\
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
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Packages</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">OpenMayaRender.MLightParameterInformation Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Frame-and-draw-contexts.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Frame and draw contexts</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_light_parameter_information.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_render_1_1_m_light_parameter_information.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_render_1_1_m_light_parameter_information.html#pub-static-attribs\">Static Public Attributes</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MLightParameterInformation:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_light_parameter_information.png\" usemap=\"#OpenMayaRender.MLightParameterInformation_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MLightParameterInformation_map\" name=\"OpenMayaRender.MLightParameterInformation_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ae72e011ad5a687fb434ebe82140af171\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#ae72e011ad5a687fb434ebe82140af171\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:ae72e011ad5a687fb434ebe82140af171\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2884a2d0f64b91af8138282f50859f03\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a2884a2d0f64b91af8138282f50859f03\">arrayParameterCount</a> ()</td></tr>\n\
<tr class=\"separator:a2884a2d0f64b91af8138282f50859f03\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a92daa1e33d50a2f189b936506b101a80\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a92daa1e33d50a2f189b936506b101a80\">getParameter</a> ()</td></tr>\n\
<tr class=\"separator:a92daa1e33d50a2f189b936506b101a80\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0e2972fa6fb21ceb26ed100ef74f422c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a0e2972fa6fb21ceb26ed100ef74f422c\">getParameterTextureHandle</a> ()</td></tr>\n\
<tr class=\"separator:a0e2972fa6fb21ceb26ed100ef74f422c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acf676c34c8974f0eedb537caf13a7942\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#acf676c34c8974f0eedb537caf13a7942\">lightPath</a> ()</td></tr>\n\
<tr class=\"separator:acf676c34c8974f0eedb537caf13a7942\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a63dd6f13a8a137caf76fb00acd6f243b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a63dd6f13a8a137caf76fb00acd6f243b\">lightType</a> ()</td></tr>\n\
<tr class=\"separator:a63dd6f13a8a137caf76fb00acd6f243b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a928cc5b842d768bf29e143d0da984bd0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a928cc5b842d768bf29e143d0da984bd0\">parameterList</a> ()</td></tr>\n\
<tr class=\"separator:a928cc5b842d768bf29e143d0da984bd0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a37e610a034b122accc1007de99120ba2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a37e610a034b122accc1007de99120ba2\">parameterNames</a> ()</td></tr>\n\
<tr class=\"separator:a37e610a034b122accc1007de99120ba2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aace33851adf59b426c2587b762756770\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#aace33851adf59b426c2587b762756770\">parameterSemantic</a> ()</td></tr>\n\
<tr class=\"separator:aace33851adf59b426c2587b762756770\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9f7f8f3adbf3c9e500f858d6730338cb\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a9f7f8f3adbf3c9e500f858d6730338cb\">parameterType</a> ()</td></tr>\n\
<tr class=\"separator:a9f7f8f3adbf3c9e500f858d6730338cb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a85a8bc18f480ac617a052fa3766121b0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_light_parameter_information.html#a85a8bc18f480ac617a052fa3766121b0\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:a85a8bc18f480ac617a052fa3766121b0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:aaa3194eaf6d5449b216f34a4edd8b015\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aaa3194eaf6d5449b216f34a4edd8b015\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kBoolean</b> = 1</td></tr>\n\
<tr class=\"separator:aaa3194eaf6d5449b216f34a4edd8b015\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a332e2b4fb3a56e46fef785d260a42592\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a332e2b4fb3a56e46fef785d260a42592\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kColor</b> = 5</td></tr>\n\
<tr class=\"separator:a332e2b4fb3a56e46fef785d260a42592\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac6ce083ef2694f2fee493557d597627f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac6ce083ef2694f2fee493557d597627f\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kCosConeAngle</b> = 10</td></tr>\n\
<tr class=\"separator:ac6ce083ef2694f2fee493557d597627f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a913cff2ba60aa39d322d72c9d067a77d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a913cff2ba60aa39d322d72c9d067a77d\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDecayRate</b> = 8</td></tr>\n\
<tr class=\"separator:a913cff2ba60aa39d322d72c9d067a77d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add0041195c6c457c548e61c7e78d9c74\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"add0041195c6c457c548e61c7e78d9c74\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDepthRange</b> = 21</td></tr>\n\
<tr class=\"separator:add0041195c6c457c548e61c7e78d9c74\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a52a7811b32a68356eae52979adf9a525\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a52a7811b32a68356eae52979adf9a525\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDropoff</b> = 9</td></tr>\n\
<tr class=\"separator:a52a7811b32a68356eae52979adf9a525\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8fabe6353d0cef6e80e77073ad4cdf0b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8fabe6353d0cef6e80e77073ad4cdf0b\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kEmitsDiffuse</b> = 6</td></tr>\n\
<tr class=\"separator:a8fabe6353d0cef6e80e77073ad4cdf0b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aabceba6c1d4351bf2368d51f47d70fa7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aabceba6c1d4351bf2368d51f47d70fa7\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kEmitsSpecular</b> = 7</td></tr>\n\
<tr class=\"separator:aabceba6c1d4351bf2368d51f47d70fa7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a33e1860ef1e2c38b462caebba6b37c99\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a33e1860ef1e2c38b462caebba6b37c99\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kFloat</b> = 3</td></tr>\n\
<tr class=\"separator:a33e1860ef1e2c38b462caebba6b37c99\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af18a8efd21feed996fb7103cc9aa37f3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af18a8efd21feed996fb7103cc9aa37f3\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kFloat2</b> = 4</td></tr>\n\
<tr class=\"separator:af18a8efd21feed996fb7103cc9aa37f3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac236f6282835f4ae0c212468b96c46bc\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac236f6282835f4ae0c212468b96c46bc\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kFloat3</b> = 5</td></tr>\n\
<tr class=\"separator:ac236f6282835f4ae0c212468b96c46bc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7f49bbdba98a1893da5943a9f5de522f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7f49bbdba98a1893da5943a9f5de522f\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kFloat4</b> = 6</td></tr>\n\
<tr class=\"separator:a7f49bbdba98a1893da5943a9f5de522f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3c5905770d23313f310afba9f6f53e0a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3c5905770d23313f310afba9f6f53e0a\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kFloat4x4Col</b> = 8</td></tr>\n\
<tr class=\"separator:a3c5905770d23313f310afba9f6f53e0a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad92ebeff18af13692ae8b49f5800cbd8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad92ebeff18af13692ae8b49f5800cbd8\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kFloat4x4Row</b> = 7</td></tr>\n\
<tr class=\"separator:ad92ebeff18af13692ae8b49f5800cbd8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa4117e129d24906ae4c86e4bd0e9691a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa4117e129d24906ae4c86e4bd0e9691a\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kGlobalShadowOn</b> = 18</td></tr>\n\
<tr class=\"separator:aa4117e129d24906ae4c86e4bd0e9691a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a726b1fd014b6476cf028b2e45d094819\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a726b1fd014b6476cf028b2e45d094819\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kInteger</b> = 2</td></tr>\n\
<tr class=\"separator:a726b1fd014b6476cf028b2e45d094819\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa0eab832db8169edd085000cfb570d2a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa0eab832db8169edd085000cfb570d2a\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kIntensity</b> = 4</td></tr>\n\
<tr class=\"separator:aa0eab832db8169edd085000cfb570d2a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aea1c276ecaa44e2fa6e43a1c4f831861\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aea1c276ecaa44e2fa6e43a1c4f831861\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kInvalid</b> = 0</td></tr>\n\
<tr class=\"separator:aea1c276ecaa44e2fa6e43a1c4f831861\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8b5ecd873df88d2b25ba592e94350c3e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8b5ecd873df88d2b25ba592e94350c3e\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kIrradianceIn</b> = 11</td></tr>\n\
<tr class=\"separator:a8b5ecd873df88d2b25ba592e94350c3e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6a83cc7805b5c9d364388488dc2e76e6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6a83cc7805b5c9d364388488dc2e76e6\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kLightEnabled</b> = 1</td></tr>\n\
<tr class=\"separator:a6a83cc7805b5c9d364388488dc2e76e6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a55ee29784fffbcb5e08c100ebffce043\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a55ee29784fffbcb5e08c100ebffce043\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kNoSemantic</b> = 0</td></tr>\n\
<tr class=\"separator:a55ee29784fffbcb5e08c100ebffce043\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a65bfe7ef5e78d1b1854b4c805cbd735a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a65bfe7ef5e78d1b1854b4c805cbd735a\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kSampler</b> = 10</td></tr>\n\
<tr class=\"separator:a65bfe7ef5e78d1b1854b4c805cbd735a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a65f62f3defaf8e8b4c8dc5e57f84832c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a65f62f3defaf8e8b4c8dc5e57f84832c\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowBias</b> = 14</td></tr>\n\
<tr class=\"separator:a65f62f3defaf8e8b4c8dc5e57f84832c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0d62c32abe89b29bbaddc2b7aff7a5f7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0d62c32abe89b29bbaddc2b7aff7a5f7\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowColor</b> = 17</td></tr>\n\
<tr class=\"separator:a0d62c32abe89b29bbaddc2b7aff7a5f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5c0ce0e0501c14282b78022581773040\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5c0ce0e0501c14282b78022581773040\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowDirty</b> = 20</td></tr>\n\
<tr class=\"separator:a5c0ce0e0501c14282b78022581773040\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac0516e95d669537f4256f5c65f556291\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac0516e95d669537f4256f5c65f556291\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowMap</b> = 12</td></tr>\n\
<tr class=\"separator:ac0516e95d669537f4256f5c65f556291\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab3843f9b40676c92badecc4aa370e07f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ab3843f9b40676c92badecc4aa370e07f\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowMapSize</b> = 15</td></tr>\n\
<tr class=\"separator:ab3843f9b40676c92badecc4aa370e07f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2157c9b500c1ca1c4bf0f050e990617e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a2157c9b500c1ca1c4bf0f050e990617e\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowOn</b> = 19</td></tr>\n\
<tr class=\"separator:a2157c9b500c1ca1c4bf0f050e990617e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a59e7cd86e029f78d10f0499f1be2cb48\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a59e7cd86e029f78d10f0499f1be2cb48\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowSamp</b> = 13</td></tr>\n\
<tr class=\"separator:a59e7cd86e029f78d10f0499f1be2cb48\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5920d671be2c64ac86d1bef27a04a193\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5920d671be2c64ac86d1bef27a04a193\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kShadowViewProj</b> = 16</td></tr>\n\
<tr class=\"separator:a5920d671be2c64ac86d1bef27a04a193\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a98f31df29704d3ddf203b035e62ec134\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a98f31df29704d3ddf203b035e62ec134\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kStartShadowParameters</b> = 11</td></tr>\n\
<tr class=\"separator:a98f31df29704d3ddf203b035e62ec134\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8b07526278ca2246deb2b659777f0a01\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8b07526278ca2246deb2b659777f0a01\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kTexture2</b> = 9</td></tr>\n\
<tr class=\"separator:a8b07526278ca2246deb2b659777f0a01\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acc2ef52fee7c0ada06d8eb914a3e44be\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"acc2ef52fee7c0ada06d8eb914a3e44be\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kTextureCube</b> = 11</td></tr>\n\
<tr class=\"separator:acc2ef52fee7c0ada06d8eb914a3e44be\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8e45b3b9f30392706a621c20ec27f0be\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8e45b3b9f30392706a621c20ec27f0be\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kWorldDirection</b> = 3</td></tr>\n\
<tr class=\"separator:a8e45b3b9f30392706a621c20ec27f0be\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3e9fe678ca09e8ff95a087e4499a5eec\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3e9fe678ca09e8ff95a087e4499a5eec\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kWorldPosition</b> = 2</td></tr>\n\
<tr class=\"separator:a3e9fe678ca09e8ff95a087e4499a5eec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class for providing lighting information that may be used with Viewport 2.0.</pre> </div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ae72e011ad5a687fb434ebe82140af171\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.__init__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Initialize self.  See help(type(self)) for accurate signature.</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a85a8bc18f480ac617a052fa3766121b0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.__new__ </td>\n\
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
<pre class=\"fragment\">Create and return a new object.  See help(type) for accurate signature.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2884a2d0f64b91af8138282f50859f03\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.arrayParameterCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">arrayParameterCount(string) -&gt; int\n\
\n\
Return the array size of a parameter. If the parameter is not an array then a value of 0 is returned.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a92daa1e33d50a2f189b936506b101a80\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.getParameter </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getParameter(int) -&gt; MIntArraygetParameter(int) -&gt; MFloatArraygetParameter(int) -&gt; MMatrixgetParameter(int) -&gt; MSamplerStateDescgetParameter(int) -&gt; MTexturegetParameter(string) -&gt; MIntArraygetParameter(string) -&gt; MFloatArraygetParameter(string) -&gt; MMatrixgetParameter(string) -&gt; MSamplerStateDescgetParameter(string) -&gt; MTexture\n\
\n\
Get parameter value by name or by semantic.\n\
If more than one parameter matches the semantic, the value of the first matching parameter found will be returned.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0e2972fa6fb21ceb26ed100ef74f422c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.getParameterTextureHandle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getParameterTextureHandle(int) -&gt; longgetParameterTextureHandle(string) -&gt; long\n\
\n\
Get a resource handle for a texture parameter by name or by semantic.\n\
Returns a long containing a C++ \'void\' pointer which points to the resource handle.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acf676c34c8974f0eedb537caf13a7942\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.lightPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">lightPath() -&gt; MDagPath\n\
\n\
Returns the DagPath to the scene light. Will return an unitialized DagPath for default lights.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a63dd6f13a8a137caf76fb00acd6f243b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.lightType </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">lightType() -&gt; string\n\
\n\
Get the classification of the light node.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a928cc5b842d768bf29e143d0da984bd0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.parameterList </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">parameterList() -&gt; list of string\n\
\n\
Get the names of all light parameters that are accessible.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a37e610a034b122accc1007de99120ba2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.parameterNames </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">parameterNames(int) -&gt; list of string\n\
\n\
Get the name of all parameters on the light which are tagged with the stock semantic.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aace33851adf59b426c2587b762756770\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.parameterSemantic </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">parameterSemantic(string) -&gt; int\n\
\n\
Get the stock semantic for a named parameter:\n\
  MDrawContext.kNoSemantic       No semantic\n\
  MDrawContext.kLightEnabled     Light is enabled\n\
  MDrawContext.kWorldPosition    World space position\n\
  MDrawContext.kWorldDirection   World space direction\n\
  MDrawContext.kIntensity        Intensity\n\
  MDrawContext.kColor            Color\n\
  MDrawContext.kEmitsDiffuse     Emits diffuse lighting\n\
  MDrawContext.kEmitsSpecular    Emits specular lighting\n\
  MDrawContext.kDecayRate        Decay rate\n\
  MDrawContext.kDropoff          Dropoff\n\
  MDrawContext.kCosConeAngle     Cosine of the cone angle\n\
  MDrawContext.kIrradianceIn     Incoming irradiance\n\
  MDrawContext.kShadowMap        Shadow map\n\
  MDrawContext.kShadowSamp       Shadow map sampler\n\
  MDrawContext.kShadowBias       Shadow map bias\n\
  MDrawContext.kShadowMapSize    Shadow map size\n\
  MDrawContext.kShadowViewProj   Shadow map view projection matrix\n\
  MDrawContext.kShadowColor      Shadow color\n\
  MDrawContext.kGlobalShadowOn   Global toggle for whether shadows are enabled or not\n\
  MDrawContext.kShadowOn         Local toggle per light for whether shadows are enabled or not\n\
  MDrawContext.kShadowDirty      Indicates if the contents of the shadow map are out-of-date or uninitialized</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9f7f8f3adbf3c9e500f858d6730338cb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MLightParameterInformation.parameterType </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">parameterType(string) -&gt; int\n\
\n\
Get the type of the named parameter, returns kInvalid if parameter is not found.\n\
\n\
  MDrawContext.kInvalid        Invalid element type (default value)\n\
  MDrawContext.kBoolean        Boolean\n\
  MDrawContext.kInteger        Signed 32-bit integer\n\
  MDrawContext.kFloat          IEEE single precision floating point\n\
  MDrawContext.kFloat2         IEEE single precision floating point (x2)\n\
  MDrawContext.kFloat3         IEEE single precision floating point (x3)\n\
  MDrawContext.kFloat4         IEEE single precision floating point (x4)\n\
  MDrawContext.kFloat4x4Row    IEEE single precision floating point row-major matrix (4x4)\n\
  MDrawContext.kFloat4x4Col    IEEE single precision floating point column-major matrix (4x4)\n\
  MDrawContext.kTexture2       2D texture\n\
  MDrawContext.kSampler        Sampler</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";