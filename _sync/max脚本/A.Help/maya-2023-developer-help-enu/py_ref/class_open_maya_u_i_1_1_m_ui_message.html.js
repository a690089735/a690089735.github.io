var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMayaUI.MUiMessage Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_u_i_1_1_m_ui_message.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMayaUI.MUiMessage Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaUI.MUiMessage Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Effect-Overrides.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Effect Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_u_i_1_1_m_ui_message.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaUI.MUiMessage:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_u_i_1_1_m_ui_message.png\" usemap=\"#OpenMayaUI.MUiMessage_map\" alt=\"\">\n\
  <map id=\"OpenMayaUI.MUiMessage_map\" name=\"OpenMayaUI.MUiMessage_map\">\n\
<area href=\"class_open_maya_1_1_m_message.html\" alt=\"OpenMaya.MMessage\" shape=\"rect\" coords=\"0,56,163,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:abf0a8aaf3964ce2577f2c49590130f83\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#abf0a8aaf3964ce2577f2c49590130f83\">add3dViewDestroyMsgCallback</a> ()</td></tr>\n\
<tr class=\"separator:abf0a8aaf3964ce2577f2c49590130f83\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a235ecee59dceb88ced0bf88a2e83fc5e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#a235ecee59dceb88ced0bf88a2e83fc5e\">add3dViewPostRenderMsgCallback</a> ()</td></tr>\n\
<tr class=\"separator:a235ecee59dceb88ced0bf88a2e83fc5e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a654047cb56bb459cd8cb1b5ccab92b5f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#a654047cb56bb459cd8cb1b5ccab92b5f\">add3dViewPreRenderMsgCallback</a> ()</td></tr>\n\
<tr class=\"separator:a654047cb56bb459cd8cb1b5ccab92b5f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9266ff70e8c1a90576c7fa3703c84b37\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#a9266ff70e8c1a90576c7fa3703c84b37\">add3dViewRenderOverrideChangedCallback</a> ()</td></tr>\n\
<tr class=\"separator:a9266ff70e8c1a90576c7fa3703c84b37\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac6cdca0ab2d15f3f5c8b689c89578d39\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#ac6cdca0ab2d15f3f5c8b689c89578d39\">add3dViewRendererChangedCallback</a> ()</td></tr>\n\
<tr class=\"separator:ac6cdca0ab2d15f3f5c8b689c89578d39\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acdb9c5d292bfdc1d9f8c50094fb19d33\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#acdb9c5d292bfdc1d9f8c50094fb19d33\">addCameraChangedCallback</a> ()</td></tr>\n\
<tr class=\"separator:acdb9c5d292bfdc1d9f8c50094fb19d33\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b4cb79b66f9b3e0111af2f767b63cf4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_ui_message.html#a0b4cb79b66f9b3e0111af2f767b63cf4\">addUiDeletedCallback</a> ()</td></tr>\n\
<tr class=\"separator:a0b4cb79b66f9b3e0111af2f767b63cf4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
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
<div class=\"textblock\"><pre class=\"fragment\">Class used to register callbacks for UI related messages.\n\
\n\
Method resolution order:\n\
-   MUiMessage\n\
-   OpenMaya.MMessage\n\
-   builtins.object</pre> </div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"abf0a8aaf3964ce2577f2c49590130f83\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.add3dViewDestroyMsgCallback </td>\n\
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
<pre class=\"fragment\">add3dViewDestroyMsgCallback(panelName, function, clientData=None) -&gt; id\n\
\n\
        This method registers a callback for when a particular 3d view gets\n\
destroyed. The callback is called before the destruction of the view.\n\
\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered\n\
\n\
 * panelName (string) - Name of panel to which to attach the callback\n\
 * function - callable which will be passed a string indicating the name\n\
   of the panel that contain the 3d view and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a235ecee59dceb88ced0bf88a2e83fc5e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.add3dViewPostRenderMsgCallback </td>\n\
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
<pre class=\"fragment\">add3dViewPostRenderMsgCallback(panelName, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback for when the 3d view is\n\
about to display it\'s rendered contents to the viewport.\n\
It is called for every refresh of the view, after the scene is drawn,\n\
but before any 2d adornments are drawn.\n\
\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered.\n\
\n\
 * panelName (string) - Name of panel to which to attach the callback\n\
 * function - callable which will be passed a string indicating the name\n\
   of the panel that contain the 3d view and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a654047cb56bb459cd8cb1b5ccab92b5f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.add3dViewPreRenderMsgCallback </td>\n\
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
<pre class=\"fragment\">add3dViewPreRenderMsgCallback(panelName, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback for when a particular 3d view is\n\
about to render it\'s contents. It is called before the scene is drawn,\n\
but after the background has been drawn.\n\
\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered.\n\
\n\
 * panelName (string) - Name of panel to which to attach the callback\n\
 * function - callable which will be passed a string indicating the name\n\
   of the panel that contain the 3d view and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac6cdca0ab2d15f3f5c8b689c89578d39\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.add3dViewRendererChangedCallback </td>\n\
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
<pre class=\"fragment\">add3dViewRendererChangedCallback(panelName, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback for when the renderer for a particular 3d\n\
view changes.\n\
\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered.\n\
\n\
 * panelName (string) - Name of panel to which to attach the callback\n\
 * function - callable which will be passed 3 strings indicating: the name\n\
   of the panel that contain the 3d view, the name of the old renderer used\n\
   to draw the 3d view, the name of the new renderer used to draw the 3d view\n\
   , and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9266ff70e8c1a90576c7fa3703c84b37\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.add3dViewRenderOverrideChangedCallback </td>\n\
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
<pre class=\"fragment\">add3dViewRenderOverrideChangedCallback(panelName, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback for when the render override for a\n\
particular 3d view changes.\n\
\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered.\n\
\n\
 * panelName (string) - Name of panel to which to attach the callback\n\
 * function - callable which will be passed 3 strings indicating: the name of\n\
   the panel that contain the 3d view, the name of the old override used to draw\n\
   in the 3d view, the name of the new override used to draw in the 3d view\n\
   , and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acdb9c5d292bfdc1d9f8c50094fb19d33\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.addCameraChangedCallback </td>\n\
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
<pre class=\"fragment\">addCameraChangedCallback(panelName, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback for cameras being changed in\n\
3d views.  The callback is called when the camera changes for the\n\
given panel, not when attributes on the panel\'s camera change.\n\
\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered.\n\
\n\
 * panelName (string) - the name of panel to which to attach the\n\
   callback.\n\
 * function - callable which will be passed a string indicating the\n\
   name of the panel that had the camera change, a MObject containing\n\
   the current camera used by the panel and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0b4cb79b66f9b3e0111af2f767b63cf4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaUI.MUiMessage.addUiDeletedCallback </td>\n\
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
<pre class=\"fragment\">addUiDeletedCallback(uiName, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback for UI deleted messages.\n\
The callback function will be passed any client data that was\n\
provided when the callback was registered.\n\
\n\
 * uiName (string) - the name of the UI object to register the\n\
   callback for\n\
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