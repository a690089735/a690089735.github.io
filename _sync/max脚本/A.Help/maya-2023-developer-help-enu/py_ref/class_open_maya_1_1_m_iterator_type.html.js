var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: OpenMaya.MIteratorType Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_iterator_type.html\', tocPrefix);\n\
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
            <h1>Python API 2.0 Reference: OpenMaya.MIteratorType Class Reference</h1>\n\
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
<div class=\"title\">OpenMaya.MIteratorType Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/What-s-New-What-s-Changed-/2022-Whats-New-in-API.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in the Maya 2022 devkit</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_iterator_type.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_iterator_type.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_iterator_type.html#pub-static-attribs\">Static Public Attributes</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_iterator_type.html#properties\">Properties</a> &#124;\n\
<a href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MIteratorType:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_iterator_type.png\" usemap=\"#OpenMaya.MIteratorType_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MIteratorType_map\" name=\"OpenMaya.MIteratorType_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a2320beb5210d6a772d2ad99ad5e270b2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type.html#a2320beb5210d6a772d2ad99ad5e270b2\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a2320beb5210d6a772d2ad99ad5e270b2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:adcb11fb8aebb3faea87c74d051f47005\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type.html#adcb11fb8aebb3faea87c74d051f47005\">__new__</a> ()</td></tr>\n\
<tr class=\"separator:adcb11fb8aebb3faea87c74d051f47005\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ac5afcd51fcebe848bf17b545137f855f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac5afcd51fcebe848bf17b545137f855f\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kMDagPathObject</b> = 1</td></tr>\n\
<tr class=\"separator:ac5afcd51fcebe848bf17b545137f855f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9a7468fa50f16248c6b60a9a525f5036\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9a7468fa50f16248c6b60a9a525f5036\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kMObject</b> = 0</td></tr>\n\
<tr class=\"separator:a9a7468fa50f16248c6b60a9a525f5036\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8596394de6b04fb525f00454b4639124\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8596394de6b04fb525f00454b4639124\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>kMPlugObject</b> = 2</td></tr>\n\
<tr class=\"separator:a8596394de6b04fb525f00454b4639124\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"properties\"></a>\n\
Properties</h2></td></tr>\n\
<tr class=\"memitem:a497ed36a2086df7fe14e6e1649a1ca5f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type.html#a497ed36a2086df7fe14e6e1649a1ca5f\">filterList</a></td></tr>\n\
<tr class=\"separator:a497ed36a2086df7fe14e6e1649a1ca5f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7b52b6f78100b76e976c39f543a931f9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type.html#a7b52b6f78100b76e976c39f543a931f9\">filterListEnabled</a></td></tr>\n\
<tr class=\"separator:a7b52b6f78100b76e976c39f543a931f9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6d05843109c88a038fd787592cca6241\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type.html#a6d05843109c88a038fd787592cca6241\">filterType</a></td></tr>\n\
<tr class=\"separator:a6d05843109c88a038fd787592cca6241\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8d558fe84a36de2dc4d2c442761afa92\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_iterator_type.html#a8d558fe84a36de2dc4d2c442761afa92\">objectType</a></td></tr>\n\
<tr class=\"separator:a8d558fe84a36de2dc4d2c442761afa92\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">The MIteratorType class is used on iterators where more than one type\n\
of filters can be specified. It also provides functionalities to set and\n\
get the filter list or individual types of filter. This class should be\n\
used in conjunction with DAG/DG/DependencyNodes iterators for using filter\n\
list (list of MFn::Type objects) on them, thus enabling faster traversal\n\
thro\' iterators.\n\
\n\
Also, the class has functionalities for specifying the type of object the\n\
iterator will be reset to. This could be an MObject, an MPlug or an MDagPath.</pre> </div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a2320beb5210d6a772d2ad99ad5e270b2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MIteratorType.__init__ </td>\n\
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
<a class=\"anchor\" id=\"adcb11fb8aebb3faea87c74d051f47005\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MIteratorType.__new__ </td>\n\
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
<h2 class=\"groupheader\">Property Documentation</h2>\n\
<a class=\"anchor\" id=\"a497ed36a2086df7fe14e6e1649a1ca5f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MIteratorType.filterList</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Filter list (MIntArray containing MFn.Type).</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7b52b6f78100b76e976c39f543a931f9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MIteratorType.filterListEnabled</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Whether the we are using a single filter on the iterator or a filter list (Boolean).</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6d05843109c88a038fd787592cca6241\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MIteratorType.filterType</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Filter type (MFn.Type).</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8d558fe84a36de2dc4d2c442761afa92\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OpenMaya.MIteratorType.objectType</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Object type (MIteratorType.objFilterType).</pre> \n\
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