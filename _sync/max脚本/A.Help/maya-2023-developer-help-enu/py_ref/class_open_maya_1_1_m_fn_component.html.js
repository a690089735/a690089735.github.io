var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMaya.MFnComponent Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_fn_component.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMaya.MFnComponent Class Reference</h1>\n\
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
<div class=\"title\">OpenMaya.MFnComponent Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Shapes/Components.html\">Shapes &gt; Components</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Porting-Selection-from-Viewport.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Porting Selection from Viewport 1 to 2</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Polygon-API/polyModifierCmd-example.html\">Polygon API &gt; polyModifierCmd example</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_fn_component.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_fn_component.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_fn_component.html#properties\">Properties</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MFnComponent:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_fn_component.png\" usemap=\"#OpenMaya.MFnComponent_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MFnComponent_map\" name=\"OpenMaya.MFnComponent_map\">\n\
<area href=\"class_open_maya_1_1_m_fn_base.html\" alt=\"OpenMaya.MFnBase\" shape=\"rect\" coords=\"262,56,514,80\">\n\
<area href=\"class_open_maya_1_1_m_fn_double_indexed_component.html\" alt=\"OpenMaya.MFnDoubleIndexedComponent\" shape=\"rect\" coords=\"0,168,252,192\">\n\
<area href=\"class_open_maya_1_1_m_fn_single_indexed_component.html\" alt=\"OpenMaya.MFnSingleIndexedComponent\" shape=\"rect\" coords=\"262,168,514,192\">\n\
<area href=\"class_open_maya_1_1_m_fn_triple_indexed_component.html\" alt=\"OpenMaya.MFnTripleIndexedComponent\" shape=\"rect\" coords=\"524,168,776,192\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a5676c4f68871a32b99bdafe1498ab097\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#a5676c4f68871a32b99bdafe1498ab097\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a5676c4f68871a32b99bdafe1498ab097\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a28fb282f8c666be939697a945a2398a0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#a28fb282f8c666be939697a945a2398a0\">isEqual</a> ()</td></tr>\n\
<tr class=\"separator:a28fb282f8c666be939697a945a2398a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a804142344340a6306f3deddbd51b1c59\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#a804142344340a6306f3deddbd51b1c59\">weight</a> ()</td></tr>\n\
<tr class=\"separator:a804142344340a6306f3deddbd51b1c59\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_open_maya_1_1_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_open_maya_1_1_m_fn_base\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">OpenMaya.MFnBase</a></td></tr>\n\
<tr class=\"memitem:aa697f80265a5af3e131282ff458418a0 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#aa697f80265a5af3e131282ff458418a0\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:aa697f80265a5af3e131282ff458418a0 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a79ca8b86b89ddce2e4c0b67101cdc9d7 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a79ca8b86b89ddce2e4c0b67101cdc9d7\">hasObj</a> ()</td></tr>\n\
<tr class=\"separator:a79ca8b86b89ddce2e4c0b67101cdc9d7 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ada417d6cc86134609917ea4671c02596 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#ada417d6cc86134609917ea4671c02596\">object</a> ()</td></tr>\n\
<tr class=\"separator:ada417d6cc86134609917ea4671c02596 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af1795cba5c81a4ee10680210b71630c6 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#af1795cba5c81a4ee10680210b71630c6\">setObject</a> ()</td></tr>\n\
<tr class=\"separator:af1795cba5c81a4ee10680210b71630c6 inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a051592969dc5f1c426f18558794fd54f inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a051592969dc5f1c426f18558794fd54f\">type</a> ()</td></tr>\n\
<tr class=\"separator:a051592969dc5f1c426f18558794fd54f inherit pub_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ab593eac0848c356151ada456691f9052\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#ab593eac0848c356151ada456691f9052\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:ab593eac0848c356151ada456691f9052\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_open_maya_1_1_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_open_maya_1_1_m_fn_base\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">OpenMaya.MFnBase</a></td></tr>\n\
<tr class=\"memitem:a382532ce654fc5dd3dd1f3dd337407f1 inherit pub_static_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a382532ce654fc5dd3dd1f3dd337407f1\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:a382532ce654fc5dd3dd1f3dd337407f1 inherit pub_static_methods_class_open_maya_1_1_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"properties\"></a>\n\
Properties</h2></td></tr>\n\
<tr class=\"memitem:ad86afc9c9780c4200d9d083613cdd0e4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#ad86afc9c9780c4200d9d083613cdd0e4\">componentType</a></td></tr>\n\
<tr class=\"separator:ad86afc9c9780c4200d9d083613cdd0e4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afe73ea7345b6f227faa5de659eaf6f51\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#afe73ea7345b6f227faa5de659eaf6f51\">elementCount</a></td></tr>\n\
<tr class=\"separator:afe73ea7345b6f227faa5de659eaf6f51\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae6b2be21846bd98cd49da8d1a0937b89\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#ae6b2be21846bd98cd49da8d1a0937b89\">hasWeights</a></td></tr>\n\
<tr class=\"separator:ae6b2be21846bd98cd49da8d1a0937b89\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaec219602adb0871090d9ec28f10b8b4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#aaec219602adb0871090d9ec28f10b8b4\">isComplete</a></td></tr>\n\
<tr class=\"separator:aaec219602adb0871090d9ec28f10b8b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a535fc90b33efe8c085b8edae28fa6507\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#a535fc90b33efe8c085b8edae28fa6507\">isEmpty</a></td></tr>\n\
<tr class=\"separator:a535fc90b33efe8c085b8edae28fa6507\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">This is the base class for all function sets which deal with\n\
component objects.\n\
\n\
__init__()\n\
Initializes a new, empty MFnComponent object\n\
__init__(MObject component)\n\
Initializes a new MFnComponent function set, attached to the specified component.\n\
\n\
Method resolution order:\n\
-   MFnComponent\n\
-   MFnBase\n\
-   builtins.object</pre><hr>\n\
 <h2>Base Class</h2>\n\
<p><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">MFnBase</a></p>\n\
<h2>Constructors</h2>\n\
<table class=\"ruled\">\n\
<tr>\n\
<th style=\"font-size:12pt\">Signature </th><th style=\"font-size:12pt\">Parameters </th><th style=\"font-size:12pt\">Description </th></tr>\n\
<tr>\n\
<td>MFnComponent() </td><td>&#160; </td><td><p class=\"starttd\">Default constructor. Returns a new, empty <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html\">MFnComponent</a> object. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>MFnComponent(component) </td><td>component - <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html\">MObject</a> </td><td><p class=\"starttd\">Returns a new <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html\">MFnComponent</a> function set, attached to the specified <b>component</b>. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
</table>\n\
<p>&#160;</p>\n\
<hr>\n\
 </div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a5676c4f68871a32b99bdafe1498ab097\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.__init__ </td>\n\
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
<a class=\"anchor\" id=\"ab593eac0848c356151ada456691f9052\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.__new__ </td>\n\
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
<a class=\"anchor\" id=\"a28fb282f8c666be939697a945a2398a0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.isEqual </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">isEqual(MObject other) -&gt; bool\n\
\n\
Returns True if other refers to the same component as the\n\
one to which the function set is currently attached.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\">isEqual(other)  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\"><span>other - <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html\">MObject</a><span style=\"display:inline-block\"></span></span>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\"><span>bool<span style=\"display:inline-block\"></span></span><br>\n\
  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Returns true if <b>other</b> refers to the same component as the one to which the function set is currently attached.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a804142344340a6306f3deddbd51b1c59\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.weight </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">weight(index) -&gt; MWeight\n\
\n\
Returns the weight associated with the specified element,\n\
where index can range from 0 to elementCount-1.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\">weight(index)  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\"><span>index - int<span style=\"display:inline-block\"></span></span>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\"><span><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_weight.html\">MWeight</a><span style=\"display:inline-block\"></span></span><br>\n\
  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Returns the weight associated with the specified element, where <b>index</b> can range from 0 to elementCount-1.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Property Documentation</h2>\n\
<a class=\"anchor\" id=\"ad86afc9c9780c4200d9d083613cdd0e4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.componentType</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Type of the component. (MFn Type constant)</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Name:</b> </td><td valign=\"top\">componentType  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Type:</b> </td><td valign=\"top\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn.html\">MFn</a> Type constant  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Access:</b> </td><td valign=\"top\">R  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Type of the component.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afe73ea7345b6f227faa5de659eaf6f51\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.elementCount</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Number of elements in the component.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Name:</b> </td><td valign=\"top\">elementCount  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Type:</b> </td><td valign=\"top\">int  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Access:</b> </td><td valign=\"top\">R  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Number of elements in the component.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae6b2be21846bd98cd49da8d1a0937b89\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.hasWeights</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> True if the component has weights associated with its elements.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Name:</b> </td><td valign=\"top\">hasWeights  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Type:</b> </td><td valign=\"top\">bool  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Access:</b> </td><td valign=\"top\">R  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">True if the component has weights associated with its elements.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaec219602adb0871090d9ec28f10b8b4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.isComplete</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Marking a component as complete means that it represents a full set\n\
 of indices from 0 to elementCount-1</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Name:</b> </td><td valign=\"top\">isComplete  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Type:</b> </td><td valign=\"top\">bool  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Access:</b> </td><td valign=\"top\">RW  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Marking a component as complete means that it represents a full set of indices from 0 to numElements()-1  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a535fc90b33efe8c085b8edae28fa6507\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MFnComponent.isEmpty</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> True if the component contains no elements.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Name:</b> </td><td valign=\"top\">isEmpty  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Type:</b> </td><td valign=\"top\">bool  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Access:</b> </td><td valign=\"top\">R  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">True if the component contains no elements.  </td></tr>\n\
</table>\n\
\n\
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