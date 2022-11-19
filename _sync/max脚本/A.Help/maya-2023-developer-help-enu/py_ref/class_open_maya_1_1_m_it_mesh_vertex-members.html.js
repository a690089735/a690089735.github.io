var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: Member List</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_it_mesh_vertex-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Python API 2.0 Reference: Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMaya.MItMeshVertex Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#adfef1aa97eceb5116e8d025e20bd6b70\">__init__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#afd65200b58684d5c34c2fe6de47a3187\">__iter__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#aeaf26e94dd7a24f97dcbb2a0d6e9c544\">__new__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#af3ce73b5bffb969554289c78398f9e29\">__next__</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ab2f226b7689ec8a5248826d925c9f029\">connectedToEdge</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a06929a5a4246fe063a33b4710f77aac1\">connectedToFace</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a98bc6bb2c19885943217422a44e51721\">count</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ac15ae323bd86ef978d6f10ae4e1ba116\">currentItem</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a4d01fabec4710fb818401dc73d0a5a0b\">geomChanged</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#aee5efbdfd7c34bfbe77131bfc1ce688e\">getColor</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#aa92c49f64fee2187e9fad99c4b4295c0\">getColorIndices</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ac1462c627272a2b2c27f3b7d6d2b5dfe\">getColors</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a39b3aec4941f0867322c058b691589bb\">getConnectedEdges</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a1045e3c6a212082e1be30a2fc52e1f53\">getConnectedFaces</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a90935917bf0b262bcd5e9af96faea856\">getConnectedVertices</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a285bf7953c82d88ea398d85a4961577f\">getNormal</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#acb1b11a49ab9ccf226baddbb935ce81b\">getNormalIndices</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#af9e20956abc2ccbcf946845f9777ada1\">getNormals</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a325d629b4a1e64ffe56717c767ec3932\">getOppositeVertex</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a9b7a296ad43f608776894c0fc4039cf7\">getUV</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a6120e2a9e314d908c863e45234e51cd8\">getUVIndices</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ae0226bb34d5415bef064bd31b35283ad\">getUVs</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a25842337a6c8c2479a7f2992cc6ae6d4\">hasColor</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a070a19d7759706ecc0cdb4dede763645\">index</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#aba10e259228d217de7a9f98b6a0482e2\">isDone</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a06884d85fb1cc3d5ebf8cec4ae5861a9\">iter</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a601fffd28bcb35713c5c0141ea10e913\">iternext</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a558efb22bbdd44a87713c2bc3f1401b2\">next</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a72732faec40d16fd0d6de54558843fe3\">numConnectedEdges</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a567ee4896bc59d43f06ffaaec5ef2ff0\">numConnectedFaces</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a7c4c113fff0ef693a777da6e7785d38f\">numUVs</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a6137fabb121a793ab4bc9e6040651e19\">onBoundary</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#afaf34677254346c01cd396b3282f8a5b\">position</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a3e63d711a4fcf061906f8177ee382d09\">reset</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a0aa56b1d6a73632575d7bddb4141b4c7\">setIndex</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a63808cb451baccd9145938067eba1eae\">setPosition</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a757cc0b4ff182d92ce72e76157a516d3\">setUV</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ab350da369659082b7cf1cdd8e528107d\">setUVs</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ac3db512ab84b9ed38fb1c40d5a88fc5a\">translateBy</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ade875341b68a517e6314071cb1e98861\">updateSurface</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html\">OpenMaya.MItMeshVertex</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";