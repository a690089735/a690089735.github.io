var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: genericAttributeNode/genericAttributeNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'generic_attribute_node_2generic_attribute_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: genericAttributeNode/genericAttributeNode.cpp</h1>\n\
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
<div class=\"title\">genericAttributeNode/genericAttributeNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the dependency node &quot;genericAttributeNode&quot;. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates how to create a MPxNode that contains generic attributes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Several generic attributes are added to the node and the compute() method sets its result</span></div>\n\
<div class=\"line\"><span class=\"comment\">// based on a controlling type attribute. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnGenericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Node definition</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>genericAttributeNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        genericAttributeNode();</div>\n\
<div class=\"line\">                    ~genericAttributeNode() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>  addComplexFloatGenericAttribute( <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; attrObject, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *longName, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *shortName );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Numeric attribute</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      gInputInt;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Generic attribute that can be a float, 2float, 3float</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      gOutputFloat_2Float_3Float;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Type id</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Static initialization</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> genericAttributeNode::id( 0x81031 );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> genericAttributeNode::gInputInt;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> genericAttributeNode::gOutputFloat_2Float_3Float;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// No-op constructor and destructor</span></div>\n\
<div class=\"line\">genericAttributeNode::genericAttributeNode() {}</div>\n\
<div class=\"line\">genericAttributeNode::~genericAttributeNode() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Compute that will update the generic attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">// when requested.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> genericAttributeNode::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( plug == gOutputFloat_2Float_3Float )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// attribute affecting generic attribute case.  Based on the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// input attribute, we modify the output generic attribute</span></div>\n\
<div class=\"line\">        <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputDataInt = data.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( gInputInt );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> inputInt = inputDataInt.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a4c3fb2724eadb8e8a3cca8ff1af10dfd\">asInt</a>();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the output handle</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputData = data.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( plug );  </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> isGenericNumeric = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> isGenericNull = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Is the output handle generic data</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( outputData.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a7dd3e794706996c0c9aec07e1c044957\">isGeneric</a>( isGenericNumeric, isGenericNull ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Based on the inputHandle, update the generic</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// output handle</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( inputInt == 1 )</div>\n\
<div class=\"line\">                outputData.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa0c1c73d4565b920be8dfaf63dd86273\">setGenericBool</a>( <span class=\"keyword\">false</span>, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 2 )</div>\n\
<div class=\"line\">                outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa0c1c73d4565b920be8dfaf63dd86273\">setGenericBool</a>( <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 3 )</div>\n\
<div class=\"line\">                outputData.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a027fa087d8231a483c9b2185b4c44c79\">setGenericChar</a>( 127, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 4 )</div>\n\
<div class=\"line\">                outputData.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ab0560d6e6e04c91a0195d02fd9123cf7\">setGenericDouble</a>( 3.145, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 5 )</div>\n\
<div class=\"line\">                outputData.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#afae2adbfb78893e6cae1d4132d5a228a\">setGenericFloat</a>( (<span class=\"keywordtype\">float</span>)9.98, <span class=\"keyword\">true</span> );    </div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 6 )</div>\n\
<div class=\"line\">                outputData.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a97b77a2898132515289cf23c90b6fb67\">setGenericShort</a>( 3245, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 7 )</div>\n\
<div class=\"line\">                outputData.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a81003cc42dedeec794af08fa68c50735\">setGenericInt</a>( 32768, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 8 )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html\">MFnNumericData</a> numericData;</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj = numericData.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a82c1cfe8ea0f4ed6e13097715906d600\">create</a>( <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7af8f260603ef20b1e0c3d09de0e9c645c\">MFnNumericData::k2Float</a>, &amp;returnStatus );</div>\n\
<div class=\"line\">                <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( returnStatus );</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                returnStatus = numericData.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a5a8685975c5472876e8e3558911a7b7b\">setData</a>( (<span class=\"keywordtype\">float</span>)1.5, (<span class=\"keywordtype\">float</span>)6.7 );</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( returnStatus );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                outputData.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( obj );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 9 )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html\">MFnNumericData</a> numericData;</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj = numericData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a82c1cfe8ea0f4ed6e13097715906d600\">create</a>( <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a91f4ea6e351f41893ac43d373f9d647c\">MFnNumericData::k3Float</a>, &amp;returnStatus );</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( returnStatus );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                returnStatus = numericData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a5a8685975c5472876e8e3558911a7b7b\">setData</a>( (<span class=\"keywordtype\">float</span>)2.5, (<span class=\"keywordtype\">float</span>)8.7, (<span class=\"keywordtype\">float</span>)2.3345 );</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( returnStatus );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( obj );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( inputInt == 10 )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a81003cc42dedeec794af08fa68c50735\">setGenericInt</a>( 909, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            }                           </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Mark the data clean</span></div>\n\
<div class=\"line\">            outputData.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a7bdd61b8405188bb547fdba3fddace91\">setClean</a>();</div>\n\
<div class=\"line\">            data.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>( gOutputFloat_2Float_3Float );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Creator</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* genericAttributeNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> genericAttributeNode();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Adds a generic attribute that accepts a float, float2, float3</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> genericAttributeNode::addComplexFloatGenericAttribute( </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; attrObject,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *longName, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *shortName )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the generic attribute and set the 3 accepts types</span></div>\n\
<div class=\"line\">    <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html\">MFnGenericAttribute</a> gAttr; </div>\n\
<div class=\"line\">    attrObject = gAttr.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a94a6d5e93a85fb18bc7accc18ee0d9f6\">create</a>( longName, shortName ); </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = gAttr.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a750dc39c9309e49dbc5862399256dce6\">addNumericDataAccept</a>(<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = gAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a750dc39c9309e49dbc5862399256dce6\">addNumericDataAccept</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7af8f260603ef20b1e0c3d09de0e9c645c\">MFnNumericData::k2Float</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = gAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a750dc39c9309e49dbc5862399256dce6\">addNumericDataAccept</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a91f4ea6e351f41893ac43d373f9d647c\">MFnNumericData::k3Float</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    gAttr.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    gAttr.<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Add the attribute to the node</span></div>\n\
<div class=\"line\">    status = addAttribute( attrObject );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Create and add attributes</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> genericAttributeNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> nAttr;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// single float attribute affecting a generic attribute</span></div>\n\
<div class=\"line\">    gInputInt = nAttr.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;gInputInt&quot;</span>, <span class=\"stringliteral\">&quot;gii&quot;</span>,</div>\n\
<div class=\"line\">                   <a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9bb31be73c01d40428195449f62588ac\">MFnNumericData::kInt</a>, 0, &amp;status );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = addAttribute( gInputInt );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !addComplexFloatGenericAttribute( gOutputFloat_2Float_3Float,</div>\n\
<div class=\"line\">                     <span class=\"stringliteral\">&quot;gOutputFloat_2Float_3Float&quot;</span>, <span class=\"stringliteral\">&quot;gof2f3f&quot;</span> ) )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = attributeAffects( gInputInt, gOutputFloat_2Float_3Float );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;7.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;genericAttributeNode&quot;</span>, </div>\n\
<div class=\"line\">                                    genericAttributeNode::id, genericAttributeNode::creator,</div>\n\
<div class=\"line\">                                    genericAttributeNode::initialize );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerNode&quot;</span>);</div>\n\
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
<div class=\"line\">    status = plugin.deregisterNode( genericAttributeNode::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterNode&quot;</span>);</div>\n\
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