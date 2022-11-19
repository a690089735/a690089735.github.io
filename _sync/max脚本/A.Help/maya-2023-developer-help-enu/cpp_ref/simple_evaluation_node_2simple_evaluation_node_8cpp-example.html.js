var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: simpleEvaluationNode/simpleEvaluationNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'simple_evaluation_node_2simple_evaluation_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: simpleEvaluationNode/simpleEvaluationNode.cpp</h1>\n\
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
<div class=\"title\">simpleEvaluationNode/simpleEvaluationNode.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates how to use the MPxNode::preEvaluation() method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in conjunction with running Maya in Serial or Parallel evaluation mode.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// When Maya is running in Serial or Parallel evaluation mode additional</span></div>\n\
<div class=\"line\"><span class=\"comment\">// code in the preEvaluation() method handles special cases.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// In this example an optimization is being made for a heavy calculation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// as simulated with the doExpensiveCalculation() method below.  There is</span></div>\n\
<div class=\"line\"><span class=\"comment\">// a method variable cachedValueIsValid that controls if the cachedValue</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is up to date or needs to be computed.  The method setDependentsDirty()</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is used to control the cachedValueIsValid variable in the normal DG case.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// When Maya is switched to Serial or Parallel evaluation modes, an evaluation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// graph is built from the dirty state of the scene and dirty propagation is</span></div>\n\
<div class=\"line\"><span class=\"comment\">// turned off until it is required again.  This means that setDependentsDirty</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is no longer called when dirty propagation is off.  For the evaluation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// manager to handle this case, the preEvaluation() method is implemented</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to handle the normal context.  Depending on which plugs/attributes are </span></div>\n\
<div class=\"line\"><span class=\"comment\">// dirty we reset the cachedValueIsValid state forcing a compute of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// output when the evaluation manager invokes this call.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To run this example, execute the MEL code below.  If you are in normal DG</span></div>\n\
<div class=\"line\"><span class=\"comment\">// evaluation mode then clicking on the timeline will move the poly sphere.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Switch to Serial or Parallel evaluation modes and then click on the time</span></div>\n\
<div class=\"line\"><span class=\"comment\">// line.  You will notice that the sphere will not move.  This is because the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DO_PRE_EVAL is turned off by default.  Turn this define on and recompile</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and run the same test again to see the sphere moving in Serial or</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Parallel evaluation modes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\">    MEL:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    loadPlugin simpleEvaluationNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    file -f -new;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    createNode simpleEvaluationNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr time1.outTime simpleEvaluationNode1.inputTime;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    setAttr simpleEvaluationNode1.input .25;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    polySphere -ch on -o on -r 3.0;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr simpleEvaluationNode1.output pSphere1.translateX;</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnUnitAttribute.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MEvaluationNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MEvaluationManager.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>simpleEvaluationNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        simpleEvaluationNode();</div>\n\
<div class=\"line\">                    ~simpleEvaluationNode() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abd7d1dad4e4f0b922bf5ac4fc9c0230a\">setDependentsDirty</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a>&amp; plugArray) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ad40cff55ba4000788eda78c8b4258b3d\">preEvaluation</a>( <span class=\"keyword\">const</span>  <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html\">MDGContext</a>&amp; context, <span class=\"keyword\">const</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp; evaluationNode ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     input;         <span class=\"comment\">// The input value.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     aTimeInput;    <span class=\"comment\">// The time input</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     output;        <span class=\"comment\">// The output value.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> cachedValueIsValid;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> cachedValue;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> doExpensiveCalculation( <span class=\"keywordtype\">float</span> a, <span class=\"keywordtype\">float</span> b );</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Statics</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     simpleEvaluationNode::id( 0x0008002B );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     simpleEvaluationNode::input;        </div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     simpleEvaluationNode::aTimeInput;        </div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     simpleEvaluationNode::output;       </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Class implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">simpleEvaluationNode::simpleEvaluationNode()</div>\n\
<div class=\"line\">    : cachedValueIsValid( false )</div>\n\
<div class=\"line\">    , cachedValue( 0.0 )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">simpleEvaluationNode::~simpleEvaluationNode()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> simpleEvaluationNode::doExpensiveCalculation( <span class=\"keywordtype\">float</span> a, <span class=\"keywordtype\">float</span> b )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> a * b ;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> simpleEvaluationNode::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( plug == output )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = data.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( input, &amp;returnStatus );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( returnStatus != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cerr &lt;&lt; <span class=\"stringliteral\">&quot;ERROR getting data&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> returnStatus;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputTimeData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( aTimeInput, &amp;returnStatus );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( returnStatus != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cerr &lt;&lt; <span class=\"stringliteral\">&quot;ERROR getting data&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> returnStatus;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> outputValue;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( data.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a70e639ef09764e601a782b8e16ff6dc3\">context</a>().<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html#a761a03ae58bbf2942f90578a0e61ada7\">isNormal</a>() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Try to use the cached value, or compute it if it&#39;s not valid.</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( !cachedValueIsValid )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> time = inputTimeData.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aaa4774146bfa48e040aea132d03b900c\">asTime</a>();</div>\n\
<div class=\"line\">                cachedValue = doExpensiveCalculation( inputData.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>() , (float) time.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a324b14b7506c6e4f47912161956974ed\">value</a>() );</div>\n\
<div class=\"line\">                cachedValueIsValid = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            outputValue = cachedValue;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// In non-normal context, we do not have a cached value, so compute it every time.</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> time = inputTimeData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aaa4774146bfa48e040aea132d03b900c\">asTime</a>();</div>\n\
<div class=\"line\">            outputValue = doExpensiveCalculation( inputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>() , (float) time.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a324b14b7506c6e4f47912161956974ed\">value</a>() );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputHandle = data.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( simpleEvaluationNode::output );</div>\n\
<div class=\"line\">        outputHandle.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( outputValue );</div>\n\
<div class=\"line\">        data.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> simpleEvaluationNode::setDependentsDirty( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a>&amp; plugArray)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (plug == input || plug == aTimeInput )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_manager.html#aedb4df14a76f10672127a768071670f5\">MEvaluationManager::graphConstructionActive</a>())</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;Evaluation Graph is being constructed&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span>(<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_manager.html#a2f6f174196dcebf079651773e12a37ed\">MEvaluationManager::evaluationManagerActive</a>(<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html#a11a98edcfc027fb57d3a66fcfbc580a8\">MDGContext::current</a>()))</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;Evaluation Manager is active, but not in construction&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">        }  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cachedValueIsValid = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abd7d1dad4e4f0b922bf5ac4fc9c0230a\">MPxNode::setDependentsDirty</a>(plug, plugArray);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Turn this define on or off to see the evaluation work in Serial/Parallel modes</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DO_PRE_EVAL</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> simpleEvaluationNode::preEvaluation( <span class=\"keyword\">const</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html\">MDGContext</a>&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp; evaluationNode )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef DO_PRE_EVAL</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// We use cachedValueIsValid only for normal context</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( context.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html#a761a03ae58bbf2942f90578a0e61ada7\">isNormal</a>() ) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ( evaluationNode.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html#abc632b073f3b3abeb4ca052f20573dd6\">dirtyPlugExists</a>(input, &amp;status) &amp;&amp; status ) || </div>\n\
<div class=\"line\">            ( evaluationNode.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html#abc632b073f3b3abeb4ca052f20573dd6\">dirtyPlugExists</a>(aTimeInput, &amp;status) &amp;&amp; status ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cachedValueIsValid = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* simpleEvaluationNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> simpleEvaluationNode();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> simpleEvaluationNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> nAttr;</div>\n\
<div class=\"line\">    <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html\">MFnUnitAttribute</a>    uAttr;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    input = nAttr.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;input&quot;</span>, <span class=\"stringliteral\">&quot;in&quot;</span>, <a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>, 2.0 );</div>\n\
<div class=\"line\">    nAttr.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    aTimeInput = uAttr.<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a31f804de81a968aa11b510a6231e7874\">create</a>( <span class=\"stringliteral\">&quot;inputTime&quot;</span>, <span class=\"stringliteral\">&quot;itm&quot;</span>, <a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a1d1cfd8ffb84e947f82999c682b666a7a65c3a8bb75ba1a57e36c86855169752e\">MFnUnitAttribute::kTime</a>, 0.0 );</div>\n\
<div class=\"line\">    uAttr.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    uAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    uAttr.<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    uAttr.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    output = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;output&quot;</span>, <span class=\"stringliteral\">&quot;out&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>, 0.0 );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = addAttribute( input );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!status) { status.<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> status;}</div>\n\
<div class=\"line\">    status = addAttribute( aTimeInput );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!status) { status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> status;}</div>\n\
<div class=\"line\">    status = addAttribute( output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!status) { status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> status;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = attributeAffects( input, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!status) { status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> status;}</div>\n\
<div class=\"line\">    status = attributeAffects( aTimeInput, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!status) { status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> status;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Plug-in entry points</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;simpleEvaluationNode&quot;</span>, simpleEvaluationNode::id, simpleEvaluationNode::creator,</div>\n\
<div class=\"line\">                                  simpleEvaluationNode::initialize );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerNode&quot;</span>);</div>\n\
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
<div class=\"line\">    status = plugin.deregisterNode( simpleEvaluationNode::id );</div>\n\
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