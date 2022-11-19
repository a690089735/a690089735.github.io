var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMaya.MPolyMessage Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_poly_message.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMaya.MPolyMessage Class Reference</h1>\n\
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
<div class=\"title\">OpenMaya.MPolyMessage Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_poly_message.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_1_1_m_poly_message-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MPolyMessage:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_poly_message.png\" usemap=\"#OpenMaya.MPolyMessage_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MPolyMessage_map\" name=\"OpenMaya.MPolyMessage_map\">\n\
<area href=\"class_open_maya_1_1_m_message.html\" alt=\"OpenMaya.MMessage\" shape=\"rect\" coords=\"0,56,166,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a7f1bd190e329cd5cfd0425e41e461f42\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_poly_message.html#a7f1bd190e329cd5cfd0425e41e461f42\">addPolyComponentIdChangedCallback</a> ()</td></tr>\n\
<tr class=\"separator:a7f1bd190e329cd5cfd0425e41e461f42\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a87c33b835156367aee35d22e1e3beab5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_poly_message.html#a87c33b835156367aee35d22e1e3beab5\">addPolyTopologyChangedCallback</a> ()</td></tr>\n\
<tr class=\"separator:a87c33b835156367aee35d22e1e3beab5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_open_maya_1_1_m_message\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_open_maya_1_1_m_message\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html\">OpenMaya.MMessage</a></td></tr>\n\
<tr class=\"memitem:ab740e0787118e291333d48bcd9a5f3ad inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#ab740e0787118e291333d48bcd9a5f3ad\">currentCallbackId</a> ()</td></tr>\n\
<tr class=\"separator:ab740e0787118e291333d48bcd9a5f3ad inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a256cc9181fe7c42d43962bf4f263cac2 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#a256cc9181fe7c42d43962bf4f263cac2\">nodeCallbacks</a> ()</td></tr>\n\
<tr class=\"separator:a256cc9181fe7c42d43962bf4f263cac2 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a455112627bc2e87864311b422052d8b5 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#a455112627bc2e87864311b422052d8b5\">removeCallback</a> ()</td></tr>\n\
<tr class=\"separator:a455112627bc2e87864311b422052d8b5 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7bfb50ac5103789febe385b2c14e369 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#ab7bfb50ac5103789febe385b2c14e369\">removeCallbacks</a> ()</td></tr>\n\
<tr class=\"separator:ab7bfb50ac5103789febe385b2c14e369 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_static_attribs_class_open_maya_1_1_m_message\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_attribs_class_open_maya_1_1_m_message\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Static Public Attributes inherited from <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html\">OpenMaya.MMessage</a></td></tr>\n\
<tr class=\"memitem:af55629450d35743eb5e1b1a927c7ef78 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af55629450d35743eb5e1b1a927c7ef78\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDefaultAction</b> = 0</td></tr>\n\
<tr class=\"separator:af55629450d35743eb5e1b1a927c7ef78 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0751e1e868eb02ccc70a59069cfe8148 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0751e1e868eb02ccc70a59069cfe8148\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDoAction</b> = 2</td></tr>\n\
<tr class=\"separator:a0751e1e868eb02ccc70a59069cfe8148 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a865256db9dce5a07f0c2f3679f7ccc1b inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a865256db9dce5a07f0c2f3679f7ccc1b\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kDoNotDoAction</b> = 1</td></tr>\n\
<tr class=\"separator:a865256db9dce5a07f0c2f3679f7ccc1b inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class used to register callbacks for poly related messages.\n\
\n\
Method resolution order:\n\
-   MPolyMessage\n\
-   MMessage\n\
-   builtins.object</pre> </div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a7f1bd190e329cd5cfd0425e41e461f42\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MPolyMessage.addPolyComponentIdChangedCallback </td>\n\
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
<pre class=\"fragment\">addPolyComponentIdChangedCallback(node, (wantVertIds, wantEdgeIds, wantFaceIds), function, clientData=None) -&gt; id\n\
\n\
This method registers a callback that should be called whenever a poly\n\
component id is modified.\n\
Currently, there are some cases where the component ids for a polygonal\n\
mesh can be modified without generating a callback or without generating a\n\
correct mapping.  These cases are outlined below.\n\
\n\
- Polygonal mesh has construction history enabled, and there is more than\n\
         one topology changing operation in the history.  In this case, the\n\
         callback is only called when the component ID mapping changes for the\n\
         most recent operation, and performs the mapping with respect to the\n\
         input and output meshes for this operation node.\n\
- Polygonal mesh has construction history enabled, and the most recent\n\
         topology changing operation is no longer the most recent operation.\n\
         In this case, no id remapping callbacks will be invoked when the\n\
         attributes on the operation node are changed in the history.\n\
- When undo is used to revert a topology changing operation, the callback\n\
         will not be invoked.  The MEventMessage class can be used to get\n\
         notification when undo is performed.\n\
\n\
\n\
Component id mapping should always work correctly when construction history\n\
is off.  It should also work correctly when construction history is on and\n\
only the most recent operation is permitted to be adjusted (eg. changing\n\
the distance parameter for a merge vertex node, when merge vertices was the\n\
most recent operation.)  In either case, undo will not produce a poly\n\
message callback.\n\
\n\
 * node (MObject) - the node the callback function should listen to\n\
 *(wantVertIds, wantEdgeIds, wantFaceIds) - tuple of 3 booleans specifying\n\
   what arrays should be provided to the callback function when it is\n\
   invoked: (vertex indices, edge indices, face indices).\n\
 * function - callable which will be passed a tuple and the clientData object.\n\
   The tuple will contain three MUintArrays which are, respectively, the vertex,\n\
   edge and face ids of the modified components. Only the arrays which were requested\n\
   when the callback was registered will contain data, the others will be empty.\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a87c33b835156367aee35d22e1e3beab5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MPolyMessage.addPolyTopologyChangedCallback </td>\n\
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
<pre class=\"fragment\">addPolyTopologyChangedCallback(node, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback that will be called when a node impacting\n\
the topology of a meshShape is modified. Because the callback is invoked\n\
before the mesh has evaluated, the new topology data cannot be\n\
queried at the time the callback is received. If you want to receive a\n\
callback at a time when the new mesh data can be queried, use the\n\
following technique:\n\
\n\
- Use this method to register a topology-changed callback.\n\
- In the topology-changed callback, add an MNodeMessage.addAttributeChangedCallback on the mesh shape.\n\
- In the attribute-changed callback, check the inputs for an MNodeMessage.kAttributeEval message received by the \"outMesh\" plug of the mesh.\n\
- Once you have received the eval message on that plug, the attribute-changed callback can be removed and the mesh topology can be queried.\n\
\n\
 * node (MObject) - the node the callback function should listen to\n\
 * function - callable which will be passed the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
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