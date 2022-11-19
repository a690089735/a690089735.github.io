var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: ik2Bsolver/AwVector.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'ik2_bsolver_2_aw_vector_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: ik2Bsolver/AwVector.cpp</h1>\n\
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
<div class=\"title\">ik2Bsolver/AwVector.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  CLASS:    AwVector</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  CLASS DESCRIPTION (AwVector)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  A vector is a mathematical entity used to express the notion of</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  direction and magnitude (not to be confused with a point that expresses</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  location).  The direction is defined by the line from the origin</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  to the vector&#39;s x, y, z coordinate.  Vectors can be used to represent</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  translations, in the way that quaternions are used to represent</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  rotations.  When vectors are used to represent a direction, multiplying</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  it by a transformation matrix results in the vector being properly</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  re-oriented by the transformation (eg. a pure translation doesn&#39;t affect</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  the direction something is pointing, so a vector remains unchanged under</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  a pure translation).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *****************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define  COMPILE_OUTSIDE_MAYA</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;AwMath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;AwPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;AwVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;AwMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;AwQuaternion.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Initialize constants</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> AwVector AwVector::zero;</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> AwVector AwVector::xAxis(1.0, 0.0, 0.0);</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> AwVector AwVector::yAxis(0.0, 1.0, 0.0);</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> AwVector AwVector::zAxis(0.0, 0.0, 1.0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector::AwVector(<span class=\"keyword\">const</span> AwPoint &amp;pt)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Convenience method to construct a vector from a point.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">:   x(pt.x), y(pt.y), z(pt.z)</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector AwVector::operator*(<span class=\"keyword\">const</span> AwMatrix &amp;right)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{ </div>\n\
<div class=\"line\">    AwVector tmp; </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> *a = (<span class=\"keywordtype\">double</span> *) (right.matrix);</div>\n\
<div class=\"line\">    tmp.x = x * *a     + y * *(a+4) + z * *(a+8);</div>\n\
<div class=\"line\">    tmp.y = x * *(a+1) + y * *(a+5) + z * *(a+9);</div>\n\
<div class=\"line\">    tmp.z = x * *(a+2) + y * *(a+6) + z * *(a+10);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> tmp; </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector&amp; AwVector::operator=(<span class=\"keyword\">const</span> AwMatrix &amp;tm)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Extract the translation components out of a 4X4 homogeneous</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      transformation matrix into this vector.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    x = tm(3, 0);</div>\n\
<div class=\"line\">    y = tm(3, 1);</div>\n\
<div class=\"line\">    z = tm(3, 2);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector &amp;AwVector::normalize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> n = norm();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (n &gt; kDoubleEpsilonSqr &amp;&amp; !::equivalent(n, 1.0, 2.0*kDoubleEpsilon)) {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> factor = 1.0 / sqrt(n);</div>\n\
<div class=\"line\">        x *= factor; y *= factor; z *= factor;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector AwVector::rotateBy(<span class=\"keyword\">const</span> AwQuaternion &amp;q) <span class=\"keyword\">const</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Returns the vector that represents the rotation of this</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      vector by the given quaternion.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Simply carry out the quaternion multiplications:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      result = q.conjugate() * (*this) * q</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> rw = - q.x * x - q.y * y - q.z * z;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> rx = q.w * x + q.y * z - q.z * y;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> ry = q.w * y + q.z * x - q.x * z;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> rz = q.w * z + q.x * y - q.y * x;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> AwVector(- rw * q.x +  rx * q.w - ry * q.z + rz * q.y,</div>\n\
<div class=\"line\">                    - rw * q.y +  ry * q.w - rz * q.x + rx * q.z,</div>\n\
<div class=\"line\">                    - rw * q.z +  rz * q.w - rx * q.y + ry * q.x);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> AwVector::isParallel(<span class=\"keyword\">const</span> AwVector &amp;otherVector, <span class=\"keywordtype\">double</span> tolerance) <span class=\"keyword\">const</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Returns TRUE if the vectors are parallel, that is, pointing in</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the same or opposite directions, but not necessarily of the same</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      magnitude.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    AwVector v1, v2;</div>\n\
<div class=\"line\">    v1 = this-&gt;normal();</div>\n\
<div class=\"line\">    v2 = otherVector.normal();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> dotPrd = v1.dotProduct(v2);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (::equivalent(fabs(dotPrd), (<span class=\"keywordtype\">double</span>) 1.0, tolerance));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector::Axis AwVector::dominantAxis() const</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Returns the axis along which this vector is dominant</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> xx, yy;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((xx = fabs(x)) &gt; (yy = fabs(y))) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (xx &gt; fabs(z)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> kXaxis;</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> kZaxis;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (yy &gt; fabs(z)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> kYaxis;</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> kZaxis;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">double</span> AwVector::angle(<span class=\"keyword\">const</span> AwVector &amp;vec)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{ </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> cosine = normal().dotProduct(vec.normal());</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> angle;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (cosine &gt;= 1.0)</div>\n\
<div class=\"line\">        angle = 0.0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (cosine &lt;= -1.0)</div>\n\
<div class=\"line\">        angle = kPi;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        angle = acos(cosine);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> angle;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AwVector::operator AwMatrix() const</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      This casts a AwVector to a translation Matrix.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    AwMatrix m;</div>\n\
<div class=\"line\">    m(3, 0) = x;</div>\n\
<div class=\"line\">    m(3, 1) = y;</div>\n\
<div class=\"line\">    m(3, 2) = z;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*friend*/</span> ostream &amp;operator&lt;&lt;(ostream &amp;os, <span class=\"keyword\">const</span> AwVector &amp;v)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Stream output.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    os &lt;&lt; <span class=\"stringliteral\">&quot;[&quot;</span> &lt;&lt; v.x &lt;&lt; <span class=\"stringliteral\">&quot;, &quot;</span> &lt;&lt; v.y &lt;&lt; <span class=\"stringliteral\">&quot;, &quot;</span> &lt;&lt; v.z &lt;&lt; <span class=\"stringliteral\">&quot;]&quot;</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> os;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";