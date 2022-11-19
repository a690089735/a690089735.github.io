var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: basicBlendShape/basicBlendShape.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'basic_blend_shape_2basic_blend_shape_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: basicBlendShape/basicBlendShape.cpp</h1>\n\
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
<div class=\"title\">basicBlendShape/basicBlendShape.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  File: basicBlendShape.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Rudimentary implementation of a blendshape.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Use this script to create a simple example.</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*      </span></div>\n\
<div class=\"line\"><span class=\"comment\">loadPlugin basicBlendShape;</span></div>\n\
<div class=\"line\"><span class=\"comment\">polyTorus -r 1 -sr 0.5 -tw 0 -sx 50 -sy 50 -ax 0 1 0 -cuv 1 -ch 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">polyTorus -r 1 -sr 0.5 -tw 0 -sx 50 -sy 50 -ax 0 1 0 -cuv 1 -ch 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">scale -r 0.5 1 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">makeIdentity -apply true -t 1 -r 1 -s 1 -n 0 -pn 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">select -r pTorus1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">deformer -type &quot;basicBlendShape&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">blendShape -edit -t pTorus1 0 pTorus2 1.0 basicBlendShape1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrixArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxBlendShape.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPointArrayData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnComponentListData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>basicBlendShape : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_blend_shape.html\">MPxBlendShape</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*   creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Deformation function</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_blend_shape.html#aaa69faef2630c77cc610658bc474c093\">deformData</a>(<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp;    block,</div>\n\
<div class=\"line\">                           <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> geomData,</div>\n\
<div class=\"line\">                           <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> groupId,</div>\n\
<div class=\"line\">                           <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; mat,</div>\n\
<div class=\"line\">                           <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> multiIndex) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> basicBlendShape::id( 0x00080031 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* basicBlendShape::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> basicBlendShape();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> basicBlendShape::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a></div>\n\
<div class=\"line\">basicBlendShape::deformData( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block,</div>\n\
<div class=\"line\">                      <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> geomData,</div>\n\
<div class=\"line\">                      <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> <span class=\"comment\">/*groupId*/</span>,</div>\n\
<div class=\"line\">                      <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; <span class=\"comment\">/*m*/</span>,</div>\n\
<div class=\"line\">                      <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> multiIndex)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Method: deform</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:   Deforms the point with a simple smooth skinning algorithm</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   block      : the datablock of the node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   geomData   : a handle to the geometry to be deformed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   groupId    : the group ID of the geometry to deform</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   m          : matrix to transform the point into world space</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   multiIndex : the index of the geometry that we are deforming</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get the weights</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> weightMH = block.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a6ba8ea2b4af93fabd2a7c846a1625587\">inputArrayValue</a>( weight );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numWeights = weightMH.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a5f3dd1d27853eccbbe78b6d4383ccb79\">elementCount</a>();</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html\">MFloatArray</a> weights;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w=0; w&lt;numWeights; ++w ) {</div>\n\
<div class=\"line\">        weights.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a6d61a0ea5cd7a087db5ee81a990d4307\">append</a>( weightMH.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a81d24dca6d647d8d0a8fe0ef2c63b170\">inputValue</a>().<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>() );</div>\n\
<div class=\"line\">        weightMH.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a73616f002814b8abe6d921db72d7a496\">next</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get the input targets</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// as a point array per weight</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> inputTargetMH = block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a6ba8ea2b4af93fabd2a7c846a1625587\">inputArrayValue</a>( inputTarget );</div>\n\
<div class=\"line\">    returnStatus = inputTargetMH.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a8d77f0fea87bb6854b60cd199bf26240\">jumpToElement</a>( multiIndex );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !returnStatus ) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> returnStatus;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputTargetH = inputTargetMH.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a81d24dca6d647d8d0a8fe0ef2c63b170\">inputValue</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> inputTargetGroupMH = inputTargetH.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a58951af761a410e17982060cae4fdf49\">child</a>( inputTargetGroup );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w=0; w&lt;numWeights; ++w ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// inputPointsTarget is computed on pull,</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// so can&#39;t just read it out of the datablock</span></div>\n\
<div class=\"line\">        <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug( thisMObject(), inputPointsTarget );</div>\n\
<div class=\"line\">        plug.selectAncestorLogicalIndex( multiIndex, inputTarget );</div>\n\
<div class=\"line\">        plug.selectAncestorLogicalIndex( w, inputTargetGroup );</div>\n\
<div class=\"line\">        <span class=\"comment\">// ignore deformer chains here and just take the first one</span></div>\n\
<div class=\"line\">        plug.selectAncestorLogicalIndex( 6000, inputTargetItem );</div>\n\
<div class=\"line\">        <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> pointArray = plug.asMObject();</div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> pts = <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_point_array_data.html\">MFnPointArrayData</a>( pointArray ).<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_point_array_data.html#aebd1369cbb11a182f91978a7e7392093\">array</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// get the component list</span></div>\n\
<div class=\"line\">        plug = plug.parent();</div>\n\
<div class=\"line\">        plug = plug.child( inputComponentsTarget );</div>\n\
<div class=\"line\">        <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_component_list_data.html\">MFnComponentListData</a> compList( plug.asMObject() );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( compList.length() == 0 ) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> comp = compList[0];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// iterate over the components</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> defWgt = weights[w];</div>\n\
<div class=\"line\">        inputTargetGroupMH.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a28412cfb4b329b4835dab46800c3dca1\">jumpToArrayElement</a>( w );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> targetWeightsMH = inputTargetGroupMH.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a81d24dca6d647d8d0a8fe0ef2c63b170\">inputValue</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a58951af761a410e17982060cae4fdf49\">child</a>( targetWeights );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> ptIndex = 0;</div>\n\
<div class=\"line\">        <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html\">MItGeometry</a> iter( geomData, comp, <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( ; !iter.isDone(); iter.next(), ++ptIndex ) {</div>\n\
<div class=\"line\">            <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pt = iter.position();</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> compIndex = iter.index();</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> wgt = defWgt;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( targetWeightsMH.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a8d77f0fea87bb6854b60cd199bf26240\">jumpToElement</a>( compIndex ) ) {</div>\n\
<div class=\"line\">                wgt *= targetWeightsMH.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a81d24dca6d647d8d0a8fe0ef2c63b170\">inputValue</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            pt += pts[ptIndex] * wgt;</div>\n\
<div class=\"line\">            iter.setPosition( pt );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> returnStatus;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// standard initialization procedures</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\">    result = plugin.registerNode(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;basicBlendShape&quot;</span> ,</div>\n\
<div class=\"line\">        basicBlendShape::id ,</div>\n\
<div class=\"line\">        &amp;basicBlendShape::creator ,</div>\n\
<div class=\"line\">        &amp;basicBlendShape::initialize ,</div>\n\
<div class=\"line\">        <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a3817a3a09ac342309f3c4262cece2795\">MPxNode::kBlendShape</a></div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    result = plugin.deregisterNode( basicBlendShape::id );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";