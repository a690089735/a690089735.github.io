var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMayaRender.MRenderOverride Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_render_override.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMayaRender.MRenderOverride Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaRender.MRenderOverride Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Rendering-Overrides.html\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Rendering Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Transition-Guide.html\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Transition Guide</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Developer-Kit-Samples.html\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Developer Kit Samples</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Texture-creation-and-texture.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Texture creation and texture manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Frame-and-draw-contexts.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Frame and draw contexts</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Render-Loop-Overrides.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Render Loop Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/UI-draw-manager.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; UI draw manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Basic Viewport 2.0 pipeline sequencing</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Profile-Viewport-2-0-rendering.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Profile Viewport 2.0 rendering events</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Implement-an-MRenderOverride.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Implement an MRenderOverride</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Write-fragments-and-fragment.html\">Viewport 2.0 API &gt; Write script fragments and fragment graphs to control render passes in the viewport</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Write-fragments-and-fragment/Create-a-fragment-renderer-plug.html\">Viewport 2.0 API &gt; Write script fragments and fragment graphs to control render passes in the viewport &gt; Create a fragment renderer plug-in example</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_render_override.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_render_1_1_m_render_override.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MRenderOverride:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_render_override.png\" usemap=\"#OpenMayaRender.MRenderOverride_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MRenderOverride_map\" name=\"OpenMayaRender.MRenderOverride_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a8236aedce92d323b879c7435d3f1acb1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a8236aedce92d323b879c7435d3f1acb1\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a8236aedce92d323b879c7435d3f1acb1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7a17d6ceb19167f12fa0cede95a3039\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#ab7a17d6ceb19167f12fa0cede95a3039\">cleanup</a> ()</td></tr>\n\
<tr class=\"separator:ab7a17d6ceb19167f12fa0cede95a3039\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a426926618b1356903b105509f6b62890\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a426926618b1356903b105509f6b62890\">getFrameContext</a> ()</td></tr>\n\
<tr class=\"separator:a426926618b1356903b105509f6b62890\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a771acea12d94d64780f6a25d87e7786e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a771acea12d94d64780f6a25d87e7786e\">name</a> ()</td></tr>\n\
<tr class=\"separator:a771acea12d94d64780f6a25d87e7786e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa727aeb5624e4eb69ad659fc35d6be15\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#aa727aeb5624e4eb69ad659fc35d6be15\">nextRenderOperation</a> ()</td></tr>\n\
<tr class=\"separator:aa727aeb5624e4eb69ad659fc35d6be15\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6b2215a434690099f48de664e40dec48\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a6b2215a434690099f48de664e40dec48\">renderOperation</a> ()</td></tr>\n\
<tr class=\"separator:a6b2215a434690099f48de664e40dec48\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac9e5c4f627ca8d3895794f2f5d9e1581\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#ac9e5c4f627ca8d3895794f2f5d9e1581\">select</a> ()</td></tr>\n\
<tr class=\"separator:ac9e5c4f627ca8d3895794f2f5d9e1581\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aafa1bdf70c0e23993b38a51bc81d556b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#aafa1bdf70c0e23993b38a51bc81d556b\">setup</a> ()</td></tr>\n\
<tr class=\"separator:aafa1bdf70c0e23993b38a51bc81d556b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a20ef900cbdcb8453731e690be719bb07\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a20ef900cbdcb8453731e690be719bb07\">startOperationIterator</a> ()</td></tr>\n\
<tr class=\"separator:a20ef900cbdcb8453731e690be719bb07\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af5f12730e7fbf41a9f4353827216ad0c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#af5f12730e7fbf41a9f4353827216ad0c\">supportedDrawAPIs</a> ()</td></tr>\n\
<tr class=\"separator:af5f12730e7fbf41a9f4353827216ad0c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad38873fb6a62421f6561e38ae1e3679d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#ad38873fb6a62421f6561e38ae1e3679d\">uiName</a> ()</td></tr>\n\
<tr class=\"separator:ad38873fb6a62421f6561e38ae1e3679d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aca99e4d3a301f6845e74a9824facf215\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#aca99e4d3a301f6845e74a9824facf215\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:aca99e4d3a301f6845e74a9824facf215\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class which defines a 2d geometry quad render.</pre> </div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a8236aedce92d323b879c7435d3f1acb1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.__init__ </td>\n\
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
<a class=\"anchor\" id=\"aca99e4d3a301f6845e74a9824facf215\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.__new__ </td>\n\
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
<a class=\"anchor\" id=\"ab7a17d6ceb19167f12fa0cede95a3039\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.cleanup </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">cleanup() -&gt; self\n\
\n\
Perform any cleanup required following the execution of render operations.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a426926618b1356903b105509f6b62890\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.getFrameContext </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getFrameContext() -&gt; MFrameContext\n\
\n\
Return a frame context. The context is not available if called before setup() or after cleanup().\n\
The context should never be deleted by the plug-in as it is owned by the render override.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a771acea12d94d64780f6a25d87e7786e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.name </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">name() -&gt; string\n\
\n\
Returns the name of the override.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa727aeb5624e4eb69ad659fc35d6be15\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.nextRenderOperation </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">nextRenderOperation() -&gt; bool\n\
\n\
Iterate to the next operation. If there are no more operations then this method should return false.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6b2215a434690099f48de664e40dec48\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.renderOperation </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">renderOperation() -&gt; MRenderOperation\n\
\n\
Return the current operation being iterated over.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac9e5c4f627ca8d3895794f2f5d9e1581\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.select </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">select(frameContext, selectInfo, useDepth, selectionList, worldSpaceHitPts) -&gt; bool\n\
\n\
The method is called by Maya to override the default Viewport 2.0 selection. It returns false by default, meaning the default selection will be used. If an implementation returns true, selectionList and worldSpaceHitPts will be used to override the default selection.\n\
\n\
A complete implementation requires hit testing and selection interpretation. If an object is hit, the implementation should add its DAG path (and also its component when appropriate) to selectionList and add the world-space hit point between the selected item and selection ray to worldSpaceHitPts. The number of elements in selectionList and worldSpaceHitPts must be the same in any case, a selected item (typically a vertex component) and a hit point at the same array index will be associated.\n\
\n\
If the method is triggered for point snapping, the implementation needs to sort the hit points and return the one nearest to the cursor. The state of point snapping can be queried from selectInfo.\n\
\n\
When an implementation returns true to override the default behavior, the object-level selection override methods won\'t be triggered any more:\n\
\n\
* MPxGeometryOverride::refineSelectionPath * MPxSubSceneOverride::getInstancedSelectionPath * MPxDrawOverride::userSelect * MPxDrawOverride::refineSelectionPath \n\
\n\
* frameContext [IN] (MFrameContext) - The frame-level context information\n\
* selectInfo [IN] (MSelectionInfo) - The selection info\n\
* useDepth [IN] (bool) - Whether only the objects nearest to camera can be selected\n\
* selectionList [OUT] (MSelectionList) - List of items selected by this method\n\
* worldSpaceHitPts [OUT] (MPointArray) - List of hit points</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aafa1bdf70c0e23993b38a51bc81d556b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.setup </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">setup(destination) -&gt; self\n\
\n\
Perform any setup required before render operations are to be executed.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a20ef900cbdcb8453731e690be719bb07\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.startOperationIterator </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">startOperationIterator() -&gt; bool\n\
\n\
Query if there are any operations to iterate over.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af5f12730e7fbf41a9f4353827216ad0c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.supportedDrawAPIs </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">supportedDrawAPIs() -&gt; int\n\
\n\
Returns the draw APIs supported by this override.\n\
See MRenderer.drawAPI() description for the list of draw APIs.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad38873fb6a62421f6561e38ae1e3679d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMayaRender.MRenderOverride.uiName </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">uiName() -&gt; string\n\
\n\
Returns the user interface name for the override.</pre> \n\
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