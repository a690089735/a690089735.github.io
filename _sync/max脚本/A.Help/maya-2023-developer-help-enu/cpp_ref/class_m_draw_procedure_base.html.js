var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MDrawProcedureBase Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_draw_procedure_base.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MDrawProcedureBase Class Reference</h1>\n\
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
<div class=\"title\">MDrawProcedureBase Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span><div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_draw_procedure_base.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_draw_procedure_base-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This class provides an interface through which a plug-in can be writen to implement a class to provide custom hardware drawing effects.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MDrawProcedureBase.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6921c17d47d3c80ed08c1fd524c3d464\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#a6921c17d47d3c80ed08c1fd524c3d464\">MDrawProcedureBase</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#ac556578d6219804b38b9387f8c344ef7\">name</a>)</td></tr>\n\
<tr class=\"memdesc:a6921c17d47d3c80ed08c1fd524c3d464\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor for a draw procedure.  <a href=\"class_m_draw_procedure_base.html#a6921c17d47d3c80ed08c1fd524c3d464\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6921c17d47d3c80ed08c1fd524c3d464\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7407777f9664368f90dadb26e97fed97\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7407777f9664368f90dadb26e97fed97\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#a7407777f9664368f90dadb26e97fed97\">~MDrawProcedureBase</a> ()</td></tr>\n\
<tr class=\"memdesc:a7407777f9664368f90dadb26e97fed97\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor for a draw procedure. <br></td></tr>\n\
<tr class=\"separator:a7407777f9664368f90dadb26e97fed97\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a08352f58415d3126e26db4b540ee66ca\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#a08352f58415d3126e26db4b540ee66ca\">execute</a> ()=0</td></tr>\n\
<tr class=\"memdesc:a08352f58415d3126e26db4b540ee66ca\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method gets called by the renderer to execture the draw procedure.  <a href=\"class_m_draw_procedure_base.html#a08352f58415d3126e26db4b540ee66ca\">More...</a><br></td></tr>\n\
<tr class=\"separator:a08352f58415d3126e26db4b540ee66ca\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab831367dd84bbd579e02e55bacb21343\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#ab831367dd84bbd579e02e55bacb21343\">setEnabled</a> (bool value)</td></tr>\n\
<tr class=\"memdesc:ab831367dd84bbd579e02e55bacb21343\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method sets whether the draw procedure is enabled or not.  <a href=\"class_m_draw_procedure_base.html#ab831367dd84bbd579e02e55bacb21343\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab831367dd84bbd579e02e55bacb21343\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1d79980f25d38aba3d6777d0afe544f3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#a1d79980f25d38aba3d6777d0afe544f3\">enabled</a> () const </td></tr>\n\
<tr class=\"memdesc:a1d79980f25d38aba3d6777d0afe544f3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns whether the draw procedure is enabled or not.  <a href=\"class_m_draw_procedure_base.html#a1d79980f25d38aba3d6777d0afe544f3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1d79980f25d38aba3d6777d0afe544f3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaaf4534a5d68e40622237471746e2d00\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#aaaf4534a5d68e40622237471746e2d00\">setName</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#ac556578d6219804b38b9387f8c344ef7\">name</a>)</td></tr>\n\
<tr class=\"memdesc:aaaf4534a5d68e40622237471746e2d00\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method sets the name for the draw procedure.  <a href=\"class_m_draw_procedure_base.html#aaaf4534a5d68e40622237471746e2d00\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaaf4534a5d68e40622237471746e2d00\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac556578d6219804b38b9387f8c344ef7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac556578d6219804b38b9387f8c344ef7\"></a>\n\
const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#ac556578d6219804b38b9387f8c344ef7\">name</a> () const </td></tr>\n\
<tr class=\"memdesc:ac556578d6219804b38b9387f8c344ef7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the name of the draw procedure. <br></td></tr>\n\
<tr class=\"separator:ac556578d6219804b38b9387f8c344ef7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>This class provides an interface through which a plug-in can be writen to implement a class to provide custom hardware drawing effects. </p>\n\
<p>The derived class can be added, removed, or reordered in a list of draw procedures used by the hardware renderer. Please refer to documentation for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\" title=\"Static hardware renderer interface class. \">MHardwareRenderer</a> for more details.</p>\n\
<p>Each procedure has a user defined string name and can be enabled or disabled. Name, and enabling methods must be defined.</p>\n\
<p>All derived classes must over the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#a08352f58415d3126e26db4b540ee66ca\" title=\"This method gets called by the renderer to execture the draw procedure. \">execute()</a> method. This is the method that will be called by the hardware renderer to which the procedure is attached. The call will only be made if the procedure is enabled. </p>\n\
</div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a6921c17d47d3c80ed08c1fd524c3d464\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html\">MDrawProcedureBase</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor for a draw procedure. </p>\n\
<p>By default the procedure is disabled.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>name of the procedure. This is a required argument. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a08352f58415d3126e26db4b540ee66ca\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool execute </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method gets called by the renderer to execture the draw procedure. </p>\n\
<p>Derived class of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html\" title=\"This class provides an interface through which a plug-in can be writen to implement a class to provid...\">MDrawProcedureBase</a> must implement this method as it defined as a pure virtual method on this class. The implementation is free to perform any drawing functionality from within this method.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if execution was successful. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab831367dd84bbd579e02e55bacb21343\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void setEnabled </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>value</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method sets whether the draw procedure is enabled or not. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>Boolean value to set the enabling state. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1d79980f25d38aba3d6777d0afe544f3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool enabled </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns whether the draw procedure is enabled or not. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Boolean indicating enable state. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaaf4534a5d68e40622237471746e2d00\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void setName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method sets the name for the draw procedure. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>Name to set. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MDrawProcedureBase.h</li>\n\
<li>MDrawProcedureBase.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";