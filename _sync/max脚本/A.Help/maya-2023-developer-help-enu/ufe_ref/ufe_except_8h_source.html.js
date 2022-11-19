var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: include/ufe/ufeExcept.h Source File</title>\n\
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
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"ufe_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"ufe_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"ufe_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(ufe_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'ufe_ref/\'; }\n\
function ufe_ref_initializeToc(forceTrigger) {\n\
    ufe_ref_adsk_ref_toc.initResizable();\n\
    ufe_ref_adsk_ref_toc.initNavTree(\'ufe_except_8h_source.html\', tocPrefix);\n\
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
	  $(document).ready(ufe_ref_initializeToc);\n\
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
        var width = ufe_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(document).ready(function() { yepnope.injectJs(\"./ufe_ref/menudata.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./ufe_ref/menu.js\"); });</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { ufe_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ufe: include/ufe/ufeExcept.h Source File</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.14 -->\n\
\n\
\n\
\n\
\n\
<div id=\"main-nav\"></div>\n\
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
<div class=\"title\">ufeExcept.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./ufe_ref/ufe_except_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"preprocessor\">#line 1 &quot;S:/jenkins/workspace/ufe-full-python3.9-windows/ufe/include/ufeExcept.h&quot;</span></div><div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"preprocessor\">#ifndef _ufeExcept</span></div><div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"preprocessor\">#define _ufeExcept</span></div><div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// Copyright 2018 Autodesk, Inc. All rights reserved.</span></div><div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div><div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div><div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div><div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// ===========================================================================</span></div><div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;</div><div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/rtid_8h.html\">rtid.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/path_8h.html\">path.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./ufe_ref/path_segment_8h.html\">pathSegment.h</a>&quot;</span></div><div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;</div><div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#include &lt;stdexcept&gt;</span></div><div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;</div><div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<a class=\"code\" href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a> {</div><div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;</div><div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"comment\">// This class is fully inline, as its base class is in the Standard Library.</span></div><div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"comment\">// On Windows, exporting a class from a DLL requires exporting all its bases.</span></div><div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"comment\">// This post</span></div><div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"comment\">// https://stackoverflow.com/questions/24511376/how-to-dllexport-a-class-derived-from-stdruntime-error</span></div><div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"comment\">// suggests that different Standard Library exception class implementations</span></div><div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"comment\">// have different export linkage characteristics, so we avoid these differences</span></div><div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"comment\">// with a fully inline implementation, which is therefore not exported.</span></div><div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"comment\">// This does cause clang to warn about the class having &quot;no out-of-line virtual</span></div><div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"comment\">// method definitions; its vtable will be emitted in every translation unit</span></div><div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"comment\">// [-Werror,-Wweak-vtables]&quot;.  As per</span></div><div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;<span class=\"comment\">// http://llvm.org/docs/CodingStandards.html#provide-a-virtual-method-anchor-for-classes-in-headers</span></div><div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"comment\">// this will cause the vtable and RTTI information to be emitted into every .o</span></div><div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"comment\">// (translation unit) that incluces this header, increasing .o size and link</span></div><div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;<span class=\"comment\">// time, so this header file should be included only as necessary.</span></div><div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;</div><div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;<span class=\"preprocessor\">#ifdef __clang__</span></div><div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"preprocessor\">#pragma clang diagnostic push</span></div><div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;<span class=\"preprocessor\">#pragma clang diagnostic ignored &quot;-Wweak-vtables&quot;</span></div><div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;<span class=\"preprocessor\">#endif</span></div><div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;</div><div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html\">   47</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html\">InvalidRunTimeName</a> : <span class=\"keyword\">public</span> std::runtime_error</div><div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;{</div><div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html#a69ab0dcf52cd821ef0aecca6d13e2498\">   50</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html#a69ab0dcf52cd821ef0aecca6d13e2498\">InvalidRunTimeName</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">std::string</a>&amp; rtName) :</div><div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespacestd.html\">std</a>::runtime_error(rtName) {}</div><div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html\">InvalidRunTimeName</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html\">InvalidRunTimeName</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html#a7c3250928f1b8a8766ebce7f1fe31bce\">   53</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html#a7c3250928f1b8a8766ebce7f1fe31bce\">~InvalidRunTimeName</a>()<span class=\"keyword\"> override </span>{}</div><div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;};</div><div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div><div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html\">   56</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html\">InvalidRunTimeId</a> : <span class=\"keyword\">public</span> std::out_of_range</div><div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;{</div><div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html#a79d080dcc880d5b96a98baa02bf16214\">   59</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html#a79d080dcc880d5b96a98baa02bf16214\">InvalidRunTimeId</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>&amp; rtId) :</div><div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespacestd.html\">std</a>::out_of_range(<a class=\"code\" href=\"#!/url=./ufe_ref/namespacestd.html\">std</a>::to_string(rtId)) {}</div><div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html\">InvalidRunTimeId</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html\">InvalidRunTimeId</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html#a6dae21a2fd4fea30f078058f204c94e6\">   62</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html#a6dae21a2fd4fea30f078058f204c94e6\">~InvalidRunTimeId</a>()<span class=\"keyword\"> override </span>{}</div><div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;};</div><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;</div><div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;<span class=\"comment\">// This class is fully inline.  See InvalidRunTimeId class description for</span></div><div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;<span class=\"comment\">// details.</span></div><div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;</div><div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html\">   70</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html\">InvalidOperationOnPath</a> : <span class=\"keyword\">public</span> std::out_of_range</div><div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;{</div><div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html#a9cd933f2a034d6d85fbc3d915e32c044\">   73</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html#a9cd933f2a034d6d85fbc3d915e32c044\">InvalidOperationOnPath</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>&amp; <a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a5d7966f2169231b7c351f5204ecbee96\">path</a>) :</div><div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespacestd.html\">std</a>::out_of_range(<a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a5d7966f2169231b7c351f5204ecbee96\">path</a>.<a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">string</a>()) {}</div><div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html\">InvalidOperationOnPath</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html\">InvalidOperationOnPath</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html#ad8b25d3011770b8ae4b03a9345dcff9b\">   76</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html#ad8b25d3011770b8ae4b03a9345dcff9b\">~InvalidOperationOnPath</a>()<span class=\"keyword\"> override </span>{}</div><div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;};</div><div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;</div><div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;<span class=\"comment\">//</span></div><div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;<span class=\"comment\">// This class is fully inline.  See InvalidRunTimeId class description for</span></div><div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;<span class=\"comment\">// details.</span></div><div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div><div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html\">   84</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html\">InvalidOperationOnPathSegment</a> : <span class=\"keyword\">public</span> std::out_of_range</div><div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;{</div><div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;<span class=\"keyword\">public</span>:</div><div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html#ace80864c8c5c9ccc3608ddbdaf4b4e2f\">   87</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html#ace80864c8c5c9ccc3608ddbdaf4b4e2f\">InvalidOperationOnPathSegment</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">PathSegment</a>&amp; pathSegment) :</div><div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;        <a class=\"code\" href=\"#!/url=./ufe_ref/namespacestd.html\">std</a>::out_of_range(pathSegment.<a class=\"code\" href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">string</a>()) {}</div><div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html\">InvalidOperationOnPathSegment</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html\">InvalidOperationOnPathSegment</a>&amp;) = <span class=\"keywordflow\">default</span>;</div><div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html#abdd017b50154824462e86613c8b777d5\">   90</a></span>&#160;    <a class=\"code\" href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html#abdd017b50154824462e86613c8b777d5\">~InvalidOperationOnPathSegment</a>()<span class=\"keyword\"> override </span>{}</div><div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;};</div><div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;</div><div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;<span class=\"preprocessor\">#ifdef __clang__</span></div><div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;<span class=\"preprocessor\">#pragma clang diagnostic pop</span></div><div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;<span class=\"preprocessor\">#endif</span></div><div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;</div><div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;}</div><div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;</div><div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;<span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _ufeExcept */</span><span class=\"preprocessor\"></span></div><div class=\"ttc\" id=\"class_ufe_1_1_invalid_operation_on_path_html_a9cd933f2a034d6d85fbc3d915e32c044\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html#a9cd933f2a034d6d85fbc3d915e32c044\">Ufe::InvalidOperationOnPath::InvalidOperationOnPath</a></div><div class=\"ttdeci\">InvalidOperationOnPath(const Path &amp;path)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00073\">ufeExcept.h:73</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_run_time_id_html_a6dae21a2fd4fea30f078058f204c94e6\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html#a6dae21a2fd4fea30f078058f204c94e6\">Ufe::InvalidRunTimeId::~InvalidRunTimeId</a></div><div class=\"ttdeci\">~InvalidRunTimeId() override</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00062\">ufeExcept.h:62</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_path_segment_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_path_segment.html\">Ufe::PathSegment</a></div><div class=\"ttdoc\">A segment of a path within a single runtime. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_segment_8h_source.html#l00035\">pathSegment.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_run_time_name_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html\">Ufe::InvalidRunTimeName</a></div><div class=\"ttdoc\">Exception class to signal unknown runtime ID. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00047\">ufeExcept.h:47</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_operation_on_path_segment_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html\">Ufe::InvalidOperationOnPathSegment</a></div><div class=\"ttdoc\">Exception class to signal an invalid path. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00084\">ufeExcept.h:84</a></div></div>\n\
<div class=\"ttc\" id=\"rtid_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/rtid_8h.html\">rtid.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_path_string_html_a0855049ed2caf0bad44650c2770cc82b\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a0855049ed2caf0bad44650c2770cc82b\">Ufe::PathString::string</a></div><div class=\"ttdeci\">std::string string(const Path &amp;path)</div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_run_time_id_html_a79d080dcc880d5b96a98baa02bf16214\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html#a79d080dcc880d5b96a98baa02bf16214\">Ufe::InvalidRunTimeId::InvalidRunTimeId</a></div><div class=\"ttdeci\">InvalidRunTimeId(const Rtid &amp;rtId)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00059\">ufeExcept.h:59</a></div></div>\n\
<div class=\"ttc\" id=\"namespacestd_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespacestd.html\">std</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_8h_source.html#l00197\">path.h:197</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_run_time_name_html_a69ab0dcf52cd821ef0aecca6d13e2498\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html#a69ab0dcf52cd821ef0aecca6d13e2498\">Ufe::InvalidRunTimeName::InvalidRunTimeName</a></div><div class=\"ttdeci\">InvalidRunTimeName(const std::string &amp;rtName)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00050\">ufeExcept.h:50</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_run_time_id_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_id.html\">Ufe::InvalidRunTimeId</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00056\">ufeExcept.h:56</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_path_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Ufe::Path</a></div><div class=\"ttdoc\">Identify an object or 3D path in the scene. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/path_8h_source.html#l00037\">path.h:37</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_html_ae2a11f66a975e1ca1ec00fb7fcbf6252\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Ufe::Rtid</a></div><div class=\"ttdeci\">uint32_t Rtid</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/rtid_8h_source.html#l00026\">rtid.h:26</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_operation_on_path_html_ad8b25d3011770b8ae4b03a9345dcff9b\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html#ad8b25d3011770b8ae4b03a9345dcff9b\">Ufe::InvalidOperationOnPath::~InvalidOperationOnPath</a></div><div class=\"ttdeci\">~InvalidOperationOnPath() override</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00076\">ufeExcept.h:76</a></div></div>\n\
<div class=\"ttc\" id=\"ufe_8h_html_ace10975c3aafd47ddd2e6da6a4ba3dc4\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/ufe_8h.html#ace10975c3aafd47ddd2e6da6a4ba3dc4\">UFE_NS_DEF</a></div><div class=\"ttdeci\">#define UFE_NS_DEF</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_8h_source.html#l00035\">ufe.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_operation_on_path_segment_html_ace80864c8c5c9ccc3608ddbdaf4b4e2f\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html#ace80864c8c5c9ccc3608ddbdaf4b4e2f\">Ufe::InvalidOperationOnPathSegment::InvalidOperationOnPathSegment</a></div><div class=\"ttdeci\">InvalidOperationOnPathSegment(const PathSegment &amp;pathSegment)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00087\">ufeExcept.h:87</a></div></div>\n\
<div class=\"ttc\" id=\"path_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/path_8h.html\">path.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_operation_on_path_segment_html_abdd017b50154824462e86613c8b777d5\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path_segment.html#abdd017b50154824462e86613c8b777d5\">Ufe::InvalidOperationOnPathSegment::~InvalidOperationOnPathSegment</a></div><div class=\"ttdeci\">~InvalidOperationOnPathSegment() override</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00090\">ufeExcept.h:90</a></div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_run_time_name_html_a7c3250928f1b8a8766ebce7f1fe31bce\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_run_time_name.html#a7c3250928f1b8a8766ebce7f1fe31bce\">Ufe::InvalidRunTimeName::~InvalidRunTimeName</a></div><div class=\"ttdeci\">~InvalidRunTimeName() override</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00053\">ufeExcept.h:53</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_ufe_1_1_path_string_html_a5d7966f2169231b7c351f5204ecbee96\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/namespace_ufe_1_1_path_string.html#a5d7966f2169231b7c351f5204ecbee96\">Ufe::PathString::path</a></div><div class=\"ttdeci\">Path path(const std::string &amp;pathString)</div></div>\n\
<div class=\"ttc\" id=\"class_ufe_1_1_invalid_operation_on_path_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/class_ufe_1_1_invalid_operation_on_path.html\">Ufe::InvalidOperationOnPath</a></div><div class=\"ttdoc\">Exception class to signal an invalid path. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./ufe_ref/ufe_except_8h_source.html#l00070\">ufeExcept.h:70</a></div></div>\n\
<div class=\"ttc\" id=\"path_segment_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./ufe_ref/path_segment_8h.html\">pathSegment.h</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";