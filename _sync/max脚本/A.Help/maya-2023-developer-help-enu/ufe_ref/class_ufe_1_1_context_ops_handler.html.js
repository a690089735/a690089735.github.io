var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::ContextOpsHandler Class Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_context_ops_handler.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::ContextOpsHandler Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">Ufe::ContextOpsHandler Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_ufe_1_1_context_ops_handler.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_ufe_1_1_context_ops_handler.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Factory base class for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface.  \n\
 <a href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;<a class=\"el\" href=\"#!/url=./ufe_ref/context_ops_handler_8h_source.html\">contextOpsHandler.h</a>&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:acf5ee180cec41e59caa1348243f1fc38\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::shared_ptr&lt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html\">ContextOpsHandler</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#acf5ee180cec41e59caa1348243f1fc38\">Ptr</a></td></tr>\n\
<tr class=\"separator:acf5ee180cec41e59caa1348243f1fc38\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a93fcbd50d78baf2c18ae27905f26234b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#a93fcbd50d78baf2c18ae27905f26234b\">ContextOpsHandler</a> ()</td></tr>\n\
<tr class=\"memdesc:a93fcbd50d78baf2c18ae27905f26234b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_ufe_1_1_context_ops_handler.html#a93fcbd50d78baf2c18ae27905f26234b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a93fcbd50d78baf2c18ae27905f26234b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a98c83e16eb6365546365ce56e8e64079\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#a98c83e16eb6365546365ce56e8e64079\">ContextOpsHandler</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html\">ContextOpsHandler</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a98c83e16eb6365546365ce56e8e64079\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"class_ufe_1_1_context_ops_handler.html#a98c83e16eb6365546365ce56e8e64079\">More...</a><br></td></tr>\n\
<tr class=\"separator:a98c83e16eb6365546365ce56e8e64079\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aae8d3ef785eb182488e0137454bbdf37\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#aae8d3ef785eb182488e0137454bbdf37\">~ContextOpsHandler</a> ()</td></tr>\n\
<tr class=\"memdesc:aae8d3ef785eb182488e0137454bbdf37\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_ufe_1_1_context_ops_handler.html#aae8d3ef785eb182488e0137454bbdf37\">More...</a><br></td></tr>\n\
<tr class=\"separator:aae8d3ef785eb182488e0137454bbdf37\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a77771f337b1143c3f3d703254f70d21e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html#a24608f7af088f4b5e335f0f83474eb1d\">ContextOps::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#a77771f337b1143c3f3d703254f70d21e\">contextOps</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;item) const =0</td></tr>\n\
<tr class=\"separator:a77771f337b1143c3f3d703254f70d21e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Factory base class for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface. </p>\n\
<p>This base class defines an interface for factory objects that runtimes can implement to create a <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface object. </p>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/context_ops_handler_8h_source.html#l00024\">24</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/context_ops_handler_8h_source.html\">contextOpsHandler.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a id=\"acf5ee180cec41e59caa1348243f1fc38\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_context_ops_handler.html#acf5ee180cec41e59caa1348243f1fc38\">&#9670;&nbsp;</a></span>Ptr</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">typedef std::shared_ptr&lt;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html\">ContextOpsHandler</a>&gt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html#acf5ee180cec41e59caa1348243f1fc38\">Ufe::ContextOpsHandler::Ptr</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/context_ops_handler_8h_source.html#l00027\">27</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/context_ops_handler_8h_source.html\">contextOpsHandler.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a id=\"a93fcbd50d78baf2c18ae27905f26234b\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_context_ops_handler.html#a93fcbd50d78baf2c18ae27905f26234b\">&#9670;&nbsp;</a></span>ContextOpsHandler() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::ContextOpsHandler::ContextOpsHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a98c83e16eb6365546365ce56e8e64079\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_context_ops_handler.html#a98c83e16eb6365546365ce56e8e64079\">&#9670;&nbsp;</a></span>ContextOpsHandler() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::ContextOpsHandler::ContextOpsHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops_handler.html\">ContextOpsHandler</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">default</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Default copy constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"aae8d3ef785eb182488e0137454bbdf37\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_context_ops_handler.html#aae8d3ef785eb182488e0137454bbdf37\">&#9670;&nbsp;</a></span>~ContextOpsHandler()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual Ufe::ContextOpsHandler::~ContextOpsHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a id=\"a77771f337b1143c3f3d703254f70d21e\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_context_ops_handler.html#a77771f337b1143c3f3d703254f70d21e\">&#9670;&nbsp;</a></span>contextOps()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html#a24608f7af088f4b5e335f0f83474eb1d\">ContextOps::Ptr</a> Ufe::ContextOpsHandler::contextOps </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>item</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Creates a <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface on the given <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">item</td><td><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a> to use to retrieve its <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface of given <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>. Returns a null pointer if no <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_context_ops.html\" title=\"Abstract base class for context operations interface. \">ContextOps</a> interface can be created for the item. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>include/ufe/<a class=\"el\" href=\"#!/url=./ufe_ref/context_ops_handler_8h_source.html\">contextOpsHandler.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";