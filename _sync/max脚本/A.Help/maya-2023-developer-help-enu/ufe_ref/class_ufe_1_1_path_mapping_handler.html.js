var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::PathMappingHandler Class Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_path_mapping_handler.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::PathMappingHandler Class Reference</h1>\n\
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
<div class=\"title\">Ufe::PathMappingHandler Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_ufe_1_1_path_mapping_handler.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_ufe_1_1_path_mapping_handler.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" href=\"#!/url=./ufe_ref/path_mapping_handler_8h_source.html\">pathMappingHandler.h</a>&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a85082b4fd8b8adde46dfb3d4f44b9b4f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::shared_ptr&lt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html\">PathMappingHandler</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">Ptr</a></td></tr>\n\
<tr class=\"separator:a85082b4fd8b8adde46dfb3d4f44b9b4f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6b3d024d302e9899000e999eb0b6d778\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a6b3d024d302e9899000e999eb0b6d778\">PathMappingHandler</a> ()=default</td></tr>\n\
<tr class=\"memdesc:a6b3d024d302e9899000e999eb0b6d778\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_ufe_1_1_path_mapping_handler.html#a6b3d024d302e9899000e999eb0b6d778\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6b3d024d302e9899000e999eb0b6d778\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1972ee0b4fcdce90bfcc700804925209\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a1972ee0b4fcdce90bfcc700804925209\">PathMappingHandler</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html\">PathMappingHandler</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:a1972ee0b4fcdce90bfcc700804925209\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"class_ufe_1_1_path_mapping_handler.html#a1972ee0b4fcdce90bfcc700804925209\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1972ee0b4fcdce90bfcc700804925209\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a452ec81415d42a0e432f2e905a831219\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a452ec81415d42a0e432f2e905a831219\">~PathMappingHandler</a> ()=default</td></tr>\n\
<tr class=\"memdesc:a452ec81415d42a0e432f2e905a831219\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_ufe_1_1_path_mapping_handler.html#a452ec81415d42a0e432f2e905a831219\">More...</a><br></td></tr>\n\
<tr class=\"separator:a452ec81415d42a0e432f2e905a831219\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af22a265bb231886b3ef98b5e0a739ace\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#af22a265bb231886b3ef98b5e0a739ace\">toHost</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> &amp;) const =0</td></tr>\n\
<tr class=\"memdesc:af22a265bb231886b3ef98b5e0a739ace\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maps a runtime path into its host alias equivalent.  <a href=\"class_ufe_1_1_path_mapping_handler.html#af22a265bb231886b3ef98b5e0a739ace\">More...</a><br></td></tr>\n\
<tr class=\"separator:af22a265bb231886b3ef98b5e0a739ace\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5b90d044a9e7551168a598d3eaea86d5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a5b90d044a9e7551168a598d3eaea86d5\">fromHost</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> &amp;) const =0</td></tr>\n\
<tr class=\"memdesc:a5b90d044a9e7551168a598d3eaea86d5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maps a host alias of the path into its runtime equivalent.  <a href=\"class_ufe_1_1_path_mapping_handler.html#a5b90d044a9e7551168a598d3eaea86d5\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5b90d044a9e7551168a598d3eaea86d5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr><td colspan=\"2\"><div class=\"groupHeader\"></div></td></tr>\n\
<tr class=\"memitem:a1c588038a3bc806bc7f055de45c3b0c1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a1c588038a3bc806bc7f055de45c3b0c1\">pathMappingHandler</a> (<a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>)</td></tr>\n\
<tr class=\"separator:a1c588038a3bc806bc7f055de45c3b0c1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa796c13cab0d50da3eb8785f83b19c8f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#aa796c13cab0d50da3eb8785f83b19c8f\">pathMappingHandler</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;)</td></tr>\n\
<tr class=\"separator:aa796c13cab0d50da3eb8785f83b19c8f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>This base class defines an interface that runtimes can implement to provide a path mapping service. A runtime can have paths that are aliases to one another. This service allows conversion from the path to the aliased path and vice-versa. </p>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/path_mapping_handler_8h_source.html#l00026\">26</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/path_mapping_handler_8h_source.html\">pathMappingHandler.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a id=\"a85082b4fd8b8adde46dfb3d4f44b9b4f\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">&#9670;&nbsp;</a></span>Ptr</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">typedef std::shared_ptr&lt;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html\">PathMappingHandler</a>&gt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">Ufe::PathMappingHandler::Ptr</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/path_mapping_handler_8h_source.html#l00029\">29</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/path_mapping_handler_8h_source.html\">pathMappingHandler.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a id=\"a6b3d024d302e9899000e999eb0b6d778\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#a6b3d024d302e9899000e999eb0b6d778\">&#9670;&nbsp;</a></span>PathMappingHandler() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::PathMappingHandler::PathMappingHandler </td>\n\
          <td>(</td>\n\
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
<p>Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a1972ee0b4fcdce90bfcc700804925209\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#a1972ee0b4fcdce90bfcc700804925209\">&#9670;&nbsp;</a></span>PathMappingHandler() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::PathMappingHandler::PathMappingHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html\">PathMappingHandler</a> &amp;&#160;</td>\n\
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
<a id=\"a452ec81415d42a0e432f2e905a831219\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#a452ec81415d42a0e432f2e905a831219\">&#9670;&nbsp;</a></span>~PathMappingHandler()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual Ufe::PathMappingHandler::~PathMappingHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span><span class=\"mlabel\">default</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a id=\"a5b90d044a9e7551168a598d3eaea86d5\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#a5b90d044a9e7551168a598d3eaea86d5\">&#9670;&nbsp;</a></span>fromHost()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> Ufe::PathMappingHandler::fromHost </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Maps a host alias of the path into its runtime equivalent. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a1c588038a3bc806bc7f055de45c3b0c1\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#a1c588038a3bc806bc7f055de45c3b0c1\">&#9670;&nbsp;</a></span>pathMappingHandler() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">static <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">Ptr</a> Ufe::PathMappingHandler::pathMappingHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./ufe_ref/namespace_ufe.html#ae2a11f66a975e1ca1ec00fb7fcbf6252\">Rtid</a>&#160;</td>\n\
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
<p>Convenience method to retrieve the path mapping handler. The handler interface will remain valid as long as the given runtime remains set in the runtime manager. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"aa796c13cab0d50da3eb8785f83b19c8f\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#aa796c13cab0d50da3eb8785f83b19c8f\">&#9670;&nbsp;</a></span>pathMappingHandler() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">static <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_mapping_handler.html#a85082b4fd8b8adde46dfb3d4f44b9b4f\">Ptr</a> Ufe::PathMappingHandler::pathMappingHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;&#160;</td>\n\
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
<p>Convenience method to retrieve the path mapping handler. The handler interface will remain valid as long as the given runtime remains set in the runtime manager. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"af22a265bb231886b3ef98b5e0a739ace\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_path_mapping_handler.html#af22a265bb231886b3ef98b5e0a739ace\">&#9670;&nbsp;</a></span>toHost()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> Ufe::PathMappingHandler::toHost </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path.html\">Path</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Maps a runtime path into its host alias equivalent. </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>include/ufe/<a class=\"el\" href=\"#!/url=./ufe_ref/path_mapping_handler_8h_source.html\">pathMappingHandler.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";