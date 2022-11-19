var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MFnKeyframeDeltaWeighted Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_fn_keyframe_delta_weighted.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MFnKeyframeDeltaWeighted Class Reference</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">MFnKeyframeDeltaWeighted Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a> &#124; <a class=\"el\" href=\"#!/url=./cpp_ref/group___m_fn.html\">FunctionSet classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_fn_keyframe_delta_weighted.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_fn_keyframe_delta_weighted.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Function set for changes in a key\'s weighted state.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MFnKeyframeDeltaWeighted.h&gt;</code></p>\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for MFnKeyframeDeltaWeighted:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_m_fn_keyframe_delta_weighted.png\" usemap=\"#MFnKeyframeDeltaWeighted_map\" alt=\"\">\n\
  <map id=\"MFnKeyframeDeltaWeighted_map\" name=\"MFnKeyframeDeltaWeighted_map\">\n\
<area href=\"class_m_fn_keyframe_delta.html\" title=\"Base function set for keyframe deltas. \" alt=\"MFnKeyframeDelta\" shape=\"rect\" coords=\"0,56,173,80\">\n\
<area href=\"class_m_fn_base.html\" title=\"Function Set Base Class. \" alt=\"MFnBase\" shape=\"rect\" coords=\"0,0,173,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:adc3250674414e8a0b2f4584959c6ec4c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#adc3250674414e8a0b2f4584959c6ec4c\">type</a> () const </td></tr>\n\
<tr class=\"memdesc:adc3250674414e8a0b2f4584959c6ec4c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Function set type.  <a href=\"class_m_fn_keyframe_delta_weighted.html#adc3250674414e8a0b2f4584959c6ec4c\">More...</a><br></td></tr>\n\
<tr class=\"separator:adc3250674414e8a0b2f4584959c6ec4c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a92cb0ccbc416e68ed4e7804bdf123455\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a92cb0ccbc416e68ed4e7804bdf123455\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#a92cb0ccbc416e68ed4e7804bdf123455\">~MFnKeyframeDeltaWeighted</a> ()</td></tr>\n\
<tr class=\"memdesc:a92cb0ccbc416e68ed4e7804bdf123455\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a92cb0ccbc416e68ed4e7804bdf123455\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a763ad8720c2adbeb502d7ae595535aef\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a763ad8720c2adbeb502d7ae595535aef\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#a763ad8720c2adbeb502d7ae595535aef\">MFnKeyframeDeltaWeighted</a> ()</td></tr>\n\
<tr class=\"memdesc:a763ad8720c2adbeb502d7ae595535aef\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:a763ad8720c2adbeb502d7ae595535aef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add58ce424bea427bc9c7cbed076c860b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#add58ce424bea427bc9c7cbed076c860b\">MFnKeyframeDeltaWeighted</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:add58ce424bea427bc9c7cbed076c860b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_keyframe_delta_weighted.html#add58ce424bea427bc9c7cbed076c860b\">More...</a><br></td></tr>\n\
<tr class=\"separator:add58ce424bea427bc9c7cbed076c860b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aed0ff5360ce246cbbdfc50dbd8834827\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#aed0ff5360ce246cbbdfc50dbd8834827\">wasWeighted</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:aed0ff5360ce246cbbdfc50dbd8834827\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns true if the key had weighted tangent, but it is not currently.  <a href=\"class_m_fn_keyframe_delta_weighted.html#aed0ff5360ce246cbbdfc50dbd8834827\">More...</a><br></td></tr>\n\
<tr class=\"separator:aed0ff5360ce246cbbdfc50dbd8834827\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a356e44f918c5953bb2bdbae0fbf93267\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#a356e44f918c5953bb2bdbae0fbf93267\">MFnKeyframeDeltaWeighted</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:a356e44f918c5953bb2bdbae0fbf93267\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a356e44f918c5953bb2bdbae0fbf93267\">More...</a><br></td></tr>\n\
<tr class=\"separator:a356e44f918c5953bb2bdbae0fbf93267\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_m_fn_keyframe_delta\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_m_fn_keyframe_delta\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html\">MFnKeyframeDelta</a></td></tr>\n\
<tr class=\"memitem:a770b20c7708e3f6f41103c2bb6b8e120 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a770b20c7708e3f6f41103c2bb6b8e120\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#a770b20c7708e3f6f41103c2bb6b8e120\">~MFnKeyframeDelta</a> ()</td></tr>\n\
<tr class=\"memdesc:a770b20c7708e3f6f41103c2bb6b8e120 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a770b20c7708e3f6f41103c2bb6b8e120 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa57f69cf2cc881f7b61ea71bd3969f65 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa57f69cf2cc881f7b61ea71bd3969f65\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#aa57f69cf2cc881f7b61ea71bd3969f65\">MFnKeyframeDelta</a> ()</td></tr>\n\
<tr class=\"memdesc:aa57f69cf2cc881f7b61ea71bd3969f65 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:aa57f69cf2cc881f7b61ea71bd3969f65 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad74e6a0a1f226ca77688490e0c268c05 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#ad74e6a0a1f226ca77688490e0c268c05\">MFnKeyframeDelta</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:ad74e6a0a1f226ca77688490e0c268c05 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_keyframe_delta_weighted.html#ad74e6a0a1f226ca77688490e0c268c05\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad74e6a0a1f226ca77688490e0c268c05 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abec402b50644b3bfb5e645afde14cfdf inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#abec402b50644b3bfb5e645afde14cfdf\">paramCurve</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:abec402b50644b3bfb5e645afde14cfdf inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the Animation Curve <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> that this key belongs to.  <a href=\"class_m_fn_keyframe_delta_weighted.html#abec402b50644b3bfb5e645afde14cfdf\">More...</a><br></td></tr>\n\
<tr class=\"separator:abec402b50644b3bfb5e645afde14cfdf inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad4603f139eeb92b9cdae368db5e01706 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#ad4603f139eeb92b9cdae368db5e01706\">keyIndex</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:ad4603f139eeb92b9cdae368db5e01706 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The index of this key on the animation curve.  <a href=\"class_m_fn_keyframe_delta_weighted.html#ad4603f139eeb92b9cdae368db5e01706\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad4603f139eeb92b9cdae368db5e01706 inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af8be6740d055df0ac7b7a449a2ae857a inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#af8be6740d055df0ac7b7a449a2ae857a\">MFnKeyframeDelta</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:af8be6740d055df0ac7b7a449a2ae857a inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_keyframe_delta_weighted.html#af8be6740d055df0ac7b7a449a2ae857a\">More...</a><br></td></tr>\n\
<tr class=\"separator:af8be6740d055df0ac7b7a449a2ae857a inherit pub_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_m_fn_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td></tr>\n\
<tr class=\"memitem:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5ba621af875a0d489e1031eddac02b82\">~MFnBase</a> ()</td></tr>\n\
<tr class=\"memdesc:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class Destructor.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a5ba621af875a0d489e1031eddac02b82\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">hasObj</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>) const </td></tr>\n\
<tr class=\"memdesc:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determines whether or not the Function Set is compatible with the specified Maya Object within the API RTTI system.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a28acbd3253b9c86a1e64b3457de9f4ea\">hasObj</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;) const </td></tr>\n\
<tr class=\"memdesc:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determines whether or not the Function Set is compatible with the specified Maya Object within the API RTTI system.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a28acbd3253b9c86a1e64b3457de9f4ea\">More...</a><br></td></tr>\n\
<tr class=\"separator:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7a8204dee26df7900252fd8294090865 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=nullptr) const </td></tr>\n\
<tr class=\"memdesc:a7a8204dee26df7900252fd8294090865 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> that is attached to the Function Set.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a7a8204dee26df7900252fd8294090865\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7a8204dee26df7900252fd8294090865 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>)</td></tr>\n\
<tr class=\"memdesc:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Attaches the Function Set to the specified Maya Object.  <a href=\"class_m_fn_keyframe_delta_weighted.html#ad09f5acece0f9926b3e0e55cff78c3be\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a4a6adbb56d6259860ec665ab5d86bdb5\">setObject</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a7a8204dee26df7900252fd8294090865\">object</a>)</td></tr>\n\
<tr class=\"memdesc:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a4a6adbb56d6259860ec665ab5d86bdb5\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a428d79a409e4896c1585d9667e58af0e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#a428d79a409e4896c1585d9667e58af0e\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a428d79a409e4896c1585d9667e58af0e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a428d79a409e4896c1585d9667e58af0e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a428d79a409e4896c1585d9667e58af0e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_m_fn_keyframe_delta\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_m_fn_keyframe_delta\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html\">MFnKeyframeDelta</a></td></tr>\n\
<tr class=\"memitem:a8d0c12dca7045e5aa238a2144e32ae04 inherit pub_static_methods_class_m_fn_keyframe_delta\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#a8d0c12dca7045e5aa238a2144e32ae04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a8d0c12dca7045e5aa238a2144e32ae04 inherit pub_static_methods_class_m_fn_keyframe_delta\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a8d0c12dca7045e5aa238a2144e32ae04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8d0c12dca7045e5aa238a2144e32ae04 inherit pub_static_methods_class_m_fn_keyframe_delta\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_m_fn_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_fn_keyframe_delta_weighted.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9b02bac5f351157c70dcafa8f72c95f2 inherit pub_static_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a9b02bac5f351157c70dcafa8f72c95f2\">typeString</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>)</td></tr>\n\
<tr class=\"memdesc:a9b02bac5f351157c70dcafa8f72c95f2 inherit pub_static_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>Introduced in 2020.0</b>  <a href=\"class_m_fn_keyframe_delta_weighted.html#a9b02bac5f351157c70dcafa8f72c95f2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9b02bac5f351157c70dcafa8f72c95f2 inherit pub_static_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a77821035309df17e3c856eedf7e57309 inherit pub_static_methods_class_m_fn_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a77821035309df17e3c856eedf7e57309\">isValid</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>)</td></tr>\n\
<tr class=\"memdesc:a77821035309df17e3c856eedf7e57309 inherit pub_static_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>Introduced in 2020.0</b>  <a href=\"class_m_fn_keyframe_delta_weighted.html#a77821035309df17e3c856eedf7e57309\">More...</a><br></td></tr>\n\
<tr class=\"separator:a77821035309df17e3c856eedf7e57309 inherit pub_static_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Function set for changes in a key\'s weighted state. </p>\n\
<p>Delta keyframe object for changes in weighted state of a key. </p>\n\
</div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"add58ce424bea427bc9c7cbed076c860b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html\">MFnKeyframeDeltaWeighted</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Class constructor that initializes the function set to the given <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> to attach the function set to </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>the return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> if the function set is successfully attached </li>\n\
<li><b>MS::kInvalidParameter</b> if the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> does not represent a valid Maya object or if the function set is not allowed to attach to this <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a356e44f918c5953bb2bdbae0fbf93267\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html\">MFnKeyframeDeltaWeighted</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Class constructor that initializes the function set to the given <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> to attach the function set to </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>the return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> if the function set is successfully attached </li>\n\
<li><b>MS::kInvalidParameter</b> if the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> does not represent a valid Maya object or if the function set is not allowed to attach to this <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"adc3250674414e8a0b2f4584959c6ec4c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a> type </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Function set type. </p>\n\
<p>Return the class type : <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a7e1685bedf04389d39c866245f6f659c\" title=\"&#160; \">MFn::kKeyframeDeltaWeighted</a>.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the class type. </dd></dl>\n\
\n\
<p>Reimplemented from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#adc3250674414e8a0b2f4584959c6ec4c\">MFnKeyframeDelta</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a428d79a409e4896c1585d9667e58af0e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN const char * className </td>\n\
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
\n\
<p>Returns the name of this class. </p>\n\
<p>Return the class name : \"MFnKeyframeDeltaWeighted\".</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aed0ff5360ce246cbbdfc50dbd8834827\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool wasWeighted </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns true if the key had weighted tangent, but it is not currently. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Return code.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true or false depending on the key\'s weight status.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The operation succeeded. </li>\n\
<li><b>MS::kFailure</b> An object error has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MFnKeyframeDeltaWeighted.h</li>\n\
<li>MFnKeyframeDeltaWeighted.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";