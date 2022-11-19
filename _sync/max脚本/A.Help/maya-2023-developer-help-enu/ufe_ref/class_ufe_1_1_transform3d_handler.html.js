var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::Transform3dHandler Class Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_transform3d_handler.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::Transform3dHandler Class Reference</h1>\n\
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
<div class=\"title\">Ufe::Transform3dHandler Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_ufe_1_1_transform3d_handler.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_ufe_1_1_transform3d_handler.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Factory base class for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface.  \n\
 <a href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;<a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html\">transform3dHandler.h</a>&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:af30736d8d7cbf0ffcea6dd6349238eeb\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::shared_ptr&lt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html\">Transform3dHandler</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#af30736d8d7cbf0ffcea6dd6349238eeb\">Ptr</a></td></tr>\n\
<tr class=\"separator:af30736d8d7cbf0ffcea6dd6349238eeb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a3c98c39e6780f3635253fd72dbb2a940\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#a3c98c39e6780f3635253fd72dbb2a940\">Transform3dHandler</a> ()</td></tr>\n\
<tr class=\"memdesc:a3c98c39e6780f3635253fd72dbb2a940\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_ufe_1_1_transform3d_handler.html#a3c98c39e6780f3635253fd72dbb2a940\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3c98c39e6780f3635253fd72dbb2a940\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a05cc952635b5b9d2528f12309f5e1da3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#a05cc952635b5b9d2528f12309f5e1da3\">Transform3dHandler</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html\">Transform3dHandler</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a05cc952635b5b9d2528f12309f5e1da3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"class_ufe_1_1_transform3d_handler.html#a05cc952635b5b9d2528f12309f5e1da3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a05cc952635b5b9d2528f12309f5e1da3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acb3c9bfcc99c73015dcd09be74a7fdf6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#acb3c9bfcc99c73015dcd09be74a7fdf6\">~Transform3dHandler</a> ()</td></tr>\n\
<tr class=\"memdesc:acb3c9bfcc99c73015dcd09be74a7fdf6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_ufe_1_1_transform3d_handler.html#acb3c9bfcc99c73015dcd09be74a7fdf6\">More...</a><br></td></tr>\n\
<tr class=\"separator:acb3c9bfcc99c73015dcd09be74a7fdf6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a199c188e6b09b2a414fee1d506fac330\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a31a2459041c620c0aa6e614614da341b\">Transform3d::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#a199c188e6b09b2a414fee1d506fac330\">transform3d</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;item) const =0</td></tr>\n\
<tr class=\"separator:a199c188e6b09b2a414fee1d506fac330\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5f84396043147bf5ef8e9b64285df505\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a31a2459041c620c0aa6e614614da341b\">Transform3d::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#a5f84396043147bf5ef8e9b64285df505\">editTransform3d</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;item, const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_edit_transform3d_hint.html\">EditTransform3dHint</a> &amp;hint=<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_edit_transform3d_hint.html\">EditTransform3dHint</a>()) const</td></tr>\n\
<tr class=\"separator:a5f84396043147bf5ef8e9b64285df505\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Factory base class for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface. </p>\n\
<p>This base class defines an interface for factory objects that runtimes can implement to create a <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface object. </p>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html#l00026\">26</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html\">transform3dHandler.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a id=\"af30736d8d7cbf0ffcea6dd6349238eeb\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_transform3d_handler.html#af30736d8d7cbf0ffcea6dd6349238eeb\">&#9670;&nbsp;</a></span>Ptr</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">typedef std::shared_ptr&lt;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html\">Transform3dHandler</a>&gt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html#af30736d8d7cbf0ffcea6dd6349238eeb\">Ufe::Transform3dHandler::Ptr</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html#l00029\">29</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html\">transform3dHandler.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a id=\"a3c98c39e6780f3635253fd72dbb2a940\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_transform3d_handler.html#a3c98c39e6780f3635253fd72dbb2a940\">&#9670;&nbsp;</a></span>Transform3dHandler() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::Transform3dHandler::Transform3dHandler </td>\n\
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
<a id=\"a05cc952635b5b9d2528f12309f5e1da3\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_transform3d_handler.html#a05cc952635b5b9d2528f12309f5e1da3\">&#9670;&nbsp;</a></span>Transform3dHandler() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::Transform3dHandler::Transform3dHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d_handler.html\">Transform3dHandler</a> &amp;&#160;</td>\n\
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
<a id=\"acb3c9bfcc99c73015dcd09be74a7fdf6\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_transform3d_handler.html#acb3c9bfcc99c73015dcd09be74a7fdf6\">&#9670;&nbsp;</a></span>~Transform3dHandler()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual Ufe::Transform3dHandler::~Transform3dHandler </td>\n\
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
<a id=\"a5f84396043147bf5ef8e9b64285df505\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_transform3d_handler.html#a5f84396043147bf5ef8e9b64285df505\">&#9670;&nbsp;</a></span>editTransform3d()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a31a2459041c620c0aa6e614614da341b\">Transform3d::Ptr</a> Ufe::Transform3dHandler::editTransform3d </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>item</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_edit_transform3d_hint.html\">EditTransform3dHint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>hint</em> = <code><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_edit_transform3d_hint.html\">EditTransform3dHint</a>()</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Return an interface to be used to edit the 3D transformation of the object. By default, returns the normal <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface. The edit transform object may have a different local transformation and a different <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a21e079ee65b3a73357e5cdae58677c7f\">Ufe::Transform3d::segmentInclusiveMatrix()</a> and <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a8a8b8ac142b7410486860fab143d7b5f\">Ufe::Transform3d::segmentExclusiveMatrix()</a> than the normal <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface associated with a scene item. All changes made through the edit transform 3D object will be visible through the normal <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a925525b67a0431cac3ab90988cdb7ecb\">Ufe::Transform3d::transform3d()</a> interface. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">item</td><td><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a> to use to retrieve its <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface. </td></tr>\n\
    <tr><td class=\"paramname\">hint</td><td>Contextual information for <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface creation. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface of given <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>. Returns a null pointer if no <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface can be created for the item. </dd></dl>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html#l00059\">59</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html\">transform3dHandler.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a199c188e6b09b2a414fee1d506fac330\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_transform3d_handler.html#a199c188e6b09b2a414fee1d506fac330\">&#9670;&nbsp;</a></span>transform3d()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html#a31a2459041c620c0aa6e614614da341b\">Transform3d::Ptr</a> Ufe::Transform3dHandler::transform3d </td>\n\
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
<p>Creates a <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface on the given <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">item</td><td><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a> to use to retrieve its <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface of given <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>. Returns a null pointer if no <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_transform3d.html\" title=\"Abstract base class for 3D transform interface. \">Transform3d</a> interface can be created for the item. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>include/ufe/<a class=\"el\" href=\"#!/url=./ufe_ref/transform3d_handler_8h_source.html\">transform3dHandler.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";