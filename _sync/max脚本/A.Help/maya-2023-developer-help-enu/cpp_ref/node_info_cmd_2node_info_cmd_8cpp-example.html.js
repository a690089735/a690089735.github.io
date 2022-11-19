var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: nodeInfoCmd/nodeInfoCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'node_info_cmd_2node_info_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: nodeInfoCmd/nodeInfoCmd.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<div class=\"title\">nodeInfoCmd/nodeInfoCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;nodeInfo&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates how to query a dependency node for its type</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and for the plugs connected to it. It iterates over the selected items</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and prints the following for each item:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - the dependency node type of the currently selected item</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - the number of plugs connected to the node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - the name/attribute information for each connected plug</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - the node type(s) that each connected plug is a destination of</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use the plug-in:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) Select some objects.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Execute &quot;nodeInfo&quot; in the command window.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The node information will be printed in the window from which you have started Maya. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResourceId.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kQuietFlag      &quot;-q&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kQuietFlagLong  &quot;-quiet&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// String resource constants and registration</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rPluginId  &quot;nodeInfoCmd&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rConnFound MStringResourceId(rPluginId, &quot;rConnFound&quot;, \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                    &quot;Number of connections found: ^1s&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rPlugInfo  MStringResourceId(rPluginId, &quot;rPlugInfo&quot;, \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                    &quot;  Plug Info: &quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rPlugDestOf MStringResourceId(rPluginId, &quot;rPlugDestOf&quot;,\\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                    &quot;    This plug is a dest of: &quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> registerMStringResources()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>(rConnFound);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>(rPlugInfo);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>(rPlugDestOf);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keyword\">class </span>nodeInfo : <span class=\"keyword\">public</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    nodeInfo();</div>\n\
<div class=\"line\">                ~nodeInfo() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>  newSyntax();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            printType( <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; node, <span class=\"keyword\">const</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; prefix );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         parseArgs( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            quiet;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">nodeInfo::nodeInfo()</div>\n\
<div class=\"line\">    : quiet (false)</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">nodeInfo::~nodeInfo() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* nodeInfo::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> nodeInfo;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> nodeInfo::newSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> syntax;</div>\n\
<div class=\"line\">     syntax.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kQuietFlag, kQuietFlagLong);</div>\n\
<div class=\"line\">     <span class=\"keywordflow\">return</span> syntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> nodeInfo::parseArgs( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         stat;</div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>    argData(syntax(), args);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (argData.isFlagSet(kQuietFlag))</div>\n\
<div class=\"line\">        quiet = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> nodeInfo::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method performs the action of the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method iterates over all selected items and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     prints out connected plug and dependency node type</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     information.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;           <span class=\"comment\">// Status code</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> dependNode;     <span class=\"comment\">// Selected dependency node</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = parseArgs ( args );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a selection list iterator</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> slist;</div>\n\
<div class=\"line\">    <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( slist );</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( slist, <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a94dd08feda7b2cf0ff8262312c4fcc09\">MFn::kInvalid</a>,&amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate over all selected dependency nodes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; !iter.isDone(); iter.next() ) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the selected dependency node</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        stat = iter.getDependNode( dependNode );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">            stat.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;getDependNode&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Create a function set for the dependency node</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnDependNode( dependNode );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Check the type of the dependency node</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> nodeName = fnDependNode.name();</div>\n\
<div class=\"line\">        nodeName += <span class=\"stringliteral\">&quot;: &quot;</span>;</div>\n\
<div class=\"line\">        printType( dependNode, nodeName );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get all connected plugs to this node</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> connectedPlugs;</div>\n\
<div class=\"line\">        stat = fnDependNode.getConnections( connectedPlugs );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> numberOfPlugs = connectedPlugs.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( !quiet )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msgFmt = <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(rConnFound, stat);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> arg;</div>\n\
<div class=\"line\">            arg.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#acee761fe098fc30a5ac1437e3aca5bc0\">set</a>(numberOfPlugs);</div>\n\
<div class=\"line\">            msg.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>(msgFmt, arg);</div>\n\
<div class=\"line\">            cerr &lt;&lt; msg &lt;&lt; endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Print out the dependency node name and attributes</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// for each plug</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pInfoMsg = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(rPlugInfo, stat);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">int</span> i=0; i&lt;numberOfPlugs; i++ ) </div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug = connectedPlugs[i];</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pinfo = plug.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a48239c20d47c65e16603fe70dba736bc\">info</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( !quiet )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                cerr &lt;&lt; pInfoMsg &lt;&lt; pinfo &lt;&lt; endl;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Now get the plugs that this plug is the</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// destination of and print the node type.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> array;</div>\n\
<div class=\"line\">            plug.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acf1340576a4a0a78a0045e67ee4155bf\">connectedTo</a>( array, <span class=\"keyword\">true</span>, <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> dInfoMsg = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(rPlugDestOf, stat);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> j=0; j&lt;array.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); j++ )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mnode = array[j].node();</div>\n\
<div class=\"line\">                printType( mnode, dInfoMsg );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> nodeInfo::printType( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; node, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; prefix )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method prints the type of the given node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     prefix is a string that gets printed before the type name.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !quiet)</div>\n\
<div class=\"line\">        cerr &lt;&lt; prefix &lt;&lt; node.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a3dad4d354c5b968cf4eccfffcdb824f4\">apiTypeStr</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the command we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerUIStrings(registerMStringResources, <span class=\"stringliteral\">&quot;nodeInfoCmdInitStrings&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerUIStrings&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;nodeInfo&quot;</span>,</div>\n\
<div class=\"line\">                                      nodeInfo::creator,</div>\n\
<div class=\"line\">                                      nodeInfo::newSyntax);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;nodeInfo&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";