var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: listLightLinksCmd/listLightLinksCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'list_light_links_cmd_2list_light_links_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: listLightLinksCmd/listLightLinksCmd.cpp</h1>\n\
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
<div class=\"title\">listLightLinksCmd/listLightLinksCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;listLightLinks&quot;. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to use the MLightLinks class to query</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the light linking information in Maya. The command takes no arguments.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// If the currently selected object is a light, then the command will</span></div>\n\
<div class=\"line\"><span class=\"comment\">// select all objects illuminated by that light. If the currently</span></div>\n\
<div class=\"line\"><span class=\"comment\">// selected object is a piece of geometry, then the command will select</span></div>\n\
<div class=\"line\"><span class=\"comment\">// all the lights that illuminate that geometry. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MLightLinks.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/M3dView.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPathArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( listLightLinks, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;4.5&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listLightLinks::doIt( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Implements the MEL listLightLinks command.  After parsing the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      information stored in Maya&#39;s light linker nodes, it examines</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the first item on the selection list.  If the item is an object,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      then the command selects all lights that are linked to that object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      If the item is a light, then it will select all of the objects </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      that are linked to that light.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      args - The argument list that was passed to the command from MEL.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//             This command takes no arguments.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Return Value:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kSuccess - command succeeded</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kFailure - command failed (returning this value will cause the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     MEL script that is being run to terminate unless the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     error is caught using a &quot;catch&quot; statement).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = MS::kSuccess;</div>\n\
<div class=\"line\">    clearResult();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Parse the links on the current scene&#39;s light linker node(s).</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_light_links.html\">MLightLinks</a> lightLink;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> parseStatus;</div>\n\
<div class=\"line\">    parseStatus = lightLink.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_light_links.html#ad462aef552c2cd99562bce3ea9509ec8\">parseLinks</a>(<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !parseStatus )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        setResult( <span class=\"stringliteral\">&quot;Error parsing light links\\n&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the first object (or component) on the selection list.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> selectList;</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath;</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> component;</div>\n\
<div class=\"line\">    <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( selectList );</div>\n\
<div class=\"line\">    selectList.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd\">getDagPath</a>( 0, dagPath, component );</div>\n\
<div class=\"line\">    dagPath.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a658d9664035ff84ffefa217c0e45cc88\">extendToShape</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Selection list to store entities linked to the selected light or</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// object.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> newSelection;</div>\n\
<div class=\"line\">    newSelection.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ad5522f028dde0080b753279426415a4a\">clear</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Stores the command result.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> resultString[512];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If the object is a surface, we&#39;ll select all the lights linked to it.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If the object is a light, we&#39;ll select all the objects linked to it.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( dagPath.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a5901f0fa543d32fb13756c2d004f37ae\">hasFn</a>( <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a4b1026889ac8a8c906a6f3a53301bbbc\">MFn::kLight</a> ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Select objects linked to this light.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> objects;</div>\n\
<div class=\"line\">        objects.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ad5522f028dde0080b753279426415a4a\">clear</a>();</div>\n\
<div class=\"line\">        lightLink.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_light_links.html#a6085a5d4f6212ff6ecf5fbabb57f3f0b\">getLinkedObjects</a>( dagPath, objects );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        newSelection.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a92c9d648de48c0e6535fc814d32bb72c\">merge</a>( objects );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        sprintf( resultString, <span class=\"stringliteral\">&quot;Selecting objects linked to light %s&quot;</span>, </div>\n\
<div class=\"line\">                 dagPath.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>().<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Select lights linked to this object.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html\">MDagPathArray</a> lights;</div>\n\
<div class=\"line\">        lights.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html#ad5522f028dde0080b753279426415a4a\">clear</a>();</div>\n\
<div class=\"line\">        lightLink.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_light_links.html#ac45e6abf130642b7963f13d15989f965\">getLinkedLights</a>( dagPath, component, lights );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> j = 0; j &lt; lights.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); j++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path = lights[j];</div>\n\
<div class=\"line\">            newSelection.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>( path );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        sprintf( resultString, <span class=\"stringliteral\">&quot;Selecting lights linked to object %s&quot;</span>, </div>\n\
<div class=\"line\">                 dagPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    } </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Select the linked entities.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a33e6a7c8fa1c06fd64063bd08d4e4aef\">MGlobal::setActiveSelectionList</a>( newSelection );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    setResult( resultString );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";