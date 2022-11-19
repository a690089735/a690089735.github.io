var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>ufe: Ufe::SceneItemOps Class Reference</title>\n\
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
    ufe_ref_adsk_ref_toc.initNavTree(\'class_ufe_1_1_scene_item_ops.html\', tocPrefix);\n\
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
            <h1>ufe: Ufe::SceneItemOps Class Reference</h1>\n\
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
<div class=\"title\">Ufe::SceneItemOps Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_ufe_1_1_scene_item_ops.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_ufe_1_1_scene_item_ops.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_ufe_1_1_scene_item_ops.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Abstract base class for scene item operations interface.  \n\
 <a href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;<a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_ops_8h_source.html\">sceneItemOps.h</a>&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ac4b665b887634848d3d3b77e99071b7b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">typedef std::shared_ptr&lt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\">SceneItemOps</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ac4b665b887634848d3d3b77e99071b7b\">Ptr</a></td></tr>\n\
<tr class=\"separator:ac4b665b887634848d3d3b77e99071b7b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:adfdca5d0e0bc8b96b55f6656cd19f7d1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#adfdca5d0e0bc8b96b55f6656cd19f7d1\">SceneItemOps</a> ()</td></tr>\n\
<tr class=\"memdesc:adfdca5d0e0bc8b96b55f6656cd19f7d1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_ufe_1_1_scene_item_ops.html#adfdca5d0e0bc8b96b55f6656cd19f7d1\">More...</a><br></td></tr>\n\
<tr class=\"separator:adfdca5d0e0bc8b96b55f6656cd19f7d1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa8015522e0c78d2e0565b7a69bb2ecbc\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#aa8015522e0c78d2e0565b7a69bb2ecbc\">SceneItemOps</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\">SceneItemOps</a> &amp;)=default</td></tr>\n\
<tr class=\"memdesc:aa8015522e0c78d2e0565b7a69bb2ecbc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default copy constructor.  <a href=\"class_ufe_1_1_scene_item_ops.html#aa8015522e0c78d2e0565b7a69bb2ecbc\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa8015522e0c78d2e0565b7a69bb2ecbc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acadab673f39bd40deed2fb63b10165c5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#acadab673f39bd40deed2fb63b10165c5\">~SceneItemOps</a> ()</td></tr>\n\
<tr class=\"memdesc:acadab673f39bd40deed2fb63b10165c5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor.  <a href=\"class_ufe_1_1_scene_item_ops.html#acadab673f39bd40deed2fb63b10165c5\">More...</a><br></td></tr>\n\
<tr class=\"separator:acadab673f39bd40deed2fb63b10165c5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af68c674fcb6ff8a9a57d1fe9c665c336\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#af68c674fcb6ff8a9a57d1fe9c665c336\">sceneItem</a> () const =0</td></tr>\n\
<tr class=\"memdesc:af68c674fcb6ff8a9a57d1fe9c665c336\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\" title=\"Singleton class to manage UFE scenes. \">Scene</a> item accessor.  <a href=\"class_ufe_1_1_scene_item_ops.html#af68c674fcb6ff8a9a57d1fe9c665c336\">More...</a><br></td></tr>\n\
<tr class=\"separator:af68c674fcb6ff8a9a57d1fe9c665c336\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aba826f60f00a6c2d0bbf210868505bae\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_undoable_command.html#a857ba92b016dbe49372e2693bb6e4eba\">UndoableCommand::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#aba826f60f00a6c2d0bbf210868505bae\">deleteItemCmd</a> ()=0</td></tr>\n\
<tr class=\"separator:aba826f60f00a6c2d0bbf210868505bae\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae7c3e01e1a5966f24057955a531609e3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ae7c3e01e1a5966f24057955a531609e3\">deleteItem</a> ()=0</td></tr>\n\
<tr class=\"separator:ae7c3e01e1a5966f24057955a531609e3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac796717d6d80adb81cfafaeb5ffaf45b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_duplicate.html\">Duplicate</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ac796717d6d80adb81cfafaeb5ffaf45b\">duplicateItemCmd</a> ()=0</td></tr>\n\
<tr class=\"separator:ac796717d6d80adb81cfafaeb5ffaf45b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a72ae4e2a50e792229b45ba5306acda1a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#a72ae4e2a50e792229b45ba5306acda1a\">duplicateItem</a> ()=0</td></tr>\n\
<tr class=\"separator:a72ae4e2a50e792229b45ba5306acda1a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a11ff2db0c12b5ba0636344b2c5bbadb9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_rename.html\">Rename</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#a11ff2db0c12b5ba0636344b2c5bbadb9\">renameItemCmd</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_component.html\">PathComponent</a> &amp;newName)=0</td></tr>\n\
<tr class=\"separator:a11ff2db0c12b5ba0636344b2c5bbadb9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad0ee28b29643e160eac1dcc58b14e1ad\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ad0ee28b29643e160eac1dcc58b14e1ad\">renameItem</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_component.html\">PathComponent</a> &amp;newName)=0</td></tr>\n\
<tr class=\"separator:ad0ee28b29643e160eac1dcc58b14e1ad\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a497d274fe09b7b42227d6beb5d38ddb7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ac4b665b887634848d3d3b77e99071b7b\">Ptr</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#a497d274fe09b7b42227d6beb5d38ddb7\">sceneItemOps</a> (const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;item)</td></tr>\n\
<tr class=\"separator:a497d274fe09b7b42227d6beb5d38ddb7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Abstract base class for scene item operations interface. </p>\n\
<p>This base class defines the interface that runtimes can implement to operate on a given selection item as a whole. These include operations like:</p><ul>\n\
<li>deleting an item</li>\n\
<li>renaming an item</li>\n\
<li>duplicating an item and its sub-hierarchy of items</li>\n\
</ul>\n\
<p>Each operation has two calls, one with undo capability, and one without. Providing undo capability typically involves code complexity, and using undo capability incurs runtime cost in processing and memory. Therefore, non- interactive use of this interface should use calls without undo capability.</p>\n\
<p>To avoid the memory-consuming \"one proxy object per scene object\" approach, <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\" title=\"Abstract base class for scene item operations interface. \">SceneItemOps</a> interface objects should be obtained and used within a local scope, and not stored. <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\" title=\"Abstract base class for scene item operations interface. \">SceneItemOps</a> interfaces should be considered stateless, and can be bound to new selection items. </p>\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_ops_8h_source.html#l00080\">80</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_ops_8h_source.html\">sceneItemOps.h</a>.</p>\n\
</div><h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a id=\"ac4b665b887634848d3d3b77e99071b7b\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#ac4b665b887634848d3d3b77e99071b7b\">&#9670;&nbsp;</a></span>Ptr</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">typedef std::shared_ptr&lt;<a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\">SceneItemOps</a>&gt; <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ac4b665b887634848d3d3b77e99071b7b\">Ufe::SceneItemOps::Ptr</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p class=\"definition\">Definition at line <a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_ops_8h_source.html#l00083\">83</a> of file <a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_ops_8h_source.html\">sceneItemOps.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a id=\"adfdca5d0e0bc8b96b55f6656cd19f7d1\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#adfdca5d0e0bc8b96b55f6656cd19f7d1\">&#9670;&nbsp;</a></span>SceneItemOps() <span class=\"overload\">[1/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::SceneItemOps::SceneItemOps </td>\n\
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
<a id=\"aa8015522e0c78d2e0565b7a69bb2ecbc\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#aa8015522e0c78d2e0565b7a69bb2ecbc\">&#9670;&nbsp;</a></span>SceneItemOps() <span class=\"overload\">[2/2]</span></h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">Ufe::SceneItemOps::SceneItemOps </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\">SceneItemOps</a> &amp;&#160;</td>\n\
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
<a id=\"acadab673f39bd40deed2fb63b10165c5\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#acadab673f39bd40deed2fb63b10165c5\">&#9670;&nbsp;</a></span>~SceneItemOps()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual Ufe::SceneItemOps::~SceneItemOps </td>\n\
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
<a id=\"ae7c3e01e1a5966f24057955a531609e3\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#ae7c3e01e1a5966f24057955a531609e3\">&#9670;&nbsp;</a></span>deleteItem()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual bool Ufe::SceneItemOps::deleteItem </td>\n\
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
<p>Remove the item from participation in the scene. </p><dl class=\"section return\"><dt>Returns</dt><dd>True for success. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"aba826f60f00a6c2d0bbf210868505bae\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#aba826f60f00a6c2d0bbf210868505bae\">&#9670;&nbsp;</a></span>deleteItemCmd()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_undoable_command.html#a857ba92b016dbe49372e2693bb6e4eba\">UndoableCommand::Ptr</a> Ufe::SceneItemOps::deleteItemCmd </td>\n\
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
<p>Remove the item from participation in the scene. </p><dl class=\"section return\"><dt>Returns</dt><dd>Pointer to an undoable command object whose undo method will restore the object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a72ae4e2a50e792229b45ba5306acda1a\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#a72ae4e2a50e792229b45ba5306acda1a\">&#9670;&nbsp;</a></span>duplicateItem()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> Ufe::SceneItemOps::duplicateItem </td>\n\
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
<p><a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_duplicate.html\" title=\"Result for undoable duplicate item. \">Duplicate</a> the item and all its descendants. </p><dl class=\"section return\"><dt>Returns</dt><dd>The root of the duplicate hierarchy, if successful, else a null pointer. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"ac796717d6d80adb81cfafaeb5ffaf45b\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#ac796717d6d80adb81cfafaeb5ffaf45b\">&#9670;&nbsp;</a></span>duplicateItemCmd()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_duplicate.html\">Duplicate</a> Ufe::SceneItemOps::duplicateItemCmd </td>\n\
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
<p><a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_duplicate.html\" title=\"Result for undoable duplicate item. \">Duplicate</a> the item and all its descendants. If duplication cannot be done, both the item and the undoable command will be null pointers. </p><dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_duplicate.html\" title=\"Result for undoable duplicate item. \">Duplicate</a> object containing the root of the duplicate hierarchy and a pointer to an undoable command whose undo removes the duplicated object(s). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"ad0ee28b29643e160eac1dcc58b14e1ad\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#ad0ee28b29643e160eac1dcc58b14e1ad\">&#9670;&nbsp;</a></span>renameItem()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> Ufe::SceneItemOps::renameItem </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_component.html\">PathComponent</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>newName</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p><a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_rename.html\" title=\"Result for undoable rename item. \">Rename</a> the scene item by changing the tail of its path. After the rename, this interface object will be updated to the new scene item. </p><dl class=\"section return\"><dt>Returns</dt><dd>The renamed item, if successful, else a null pointer. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a11ff2db0c12b5ba0636344b2c5bbadb9\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#a11ff2db0c12b5ba0636344b2c5bbadb9\">&#9670;&nbsp;</a></span>renameItemCmd()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_rename.html\">Rename</a> Ufe::SceneItemOps::renameItemCmd </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_path_component.html\">PathComponent</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>newName</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p><a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_rename.html\" title=\"Result for undoable rename item. \">Rename</a> the scene item by changing the tail of its path. After the rename, this interface object will be updated to the new scene item. </p><dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./ufe_ref/struct_ufe_1_1_rename.html\" title=\"Result for undoable rename item. \">Rename</a> object containing the renamed item and a pointer to an undoable command object whose undo method restores the original name. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a id=\"af68c674fcb6ff8a9a57d1fe9c665c336\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#af68c674fcb6ff8a9a57d1fe9c665c336\">&#9670;&nbsp;</a></span>sceneItem()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> Ufe::SceneItemOps::sceneItem </td>\n\
          <td>(</td>\n\
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
<p><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene.html\" title=\"Singleton class to manage UFE scenes. \">Scene</a> item accessor. </p>\n\
\n\
</div>\n\
</div>\n\
<a id=\"a497d274fe09b7b42227d6beb5d38ddb7\"></a>\n\
<h2 class=\"memtitle\"><span class=\"permalink\"><a href=\"class_ufe_1_1_scene_item_ops.html#a497d274fe09b7b42227d6beb5d38ddb7\">&#9670;&nbsp;</a></span>sceneItemOps()</h2>\n\
\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">static <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html#ac4b665b887634848d3d3b77e99071b7b\">Ptr</a> Ufe::SceneItemOps::sceneItemOps </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html#ab24173dfba9e2c86e98079dd39808862\">SceneItem::Ptr</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>item</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Convenience method that calls the sceneItemOps method on the <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\" title=\"Abstract base class for scene item operations interface. \">SceneItemOps</a> handler for the item. Returns a null pointer if the argument is null, or has an empty path. </p><dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">item</td><td><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a>\'s <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\" title=\"Abstract base class for scene item operations interface. \">SceneItemOps</a> to retrieve </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item_ops.html\" title=\"Abstract base class for scene item operations interface. \">SceneItemOps</a> of the given <a class=\"el\" href=\"#!/url=./ufe_ref/class_ufe_1_1_scene_item.html\" title=\"Universal Front End abstract scene item. \">SceneItem</a> </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>include/ufe/<a class=\"el\" href=\"#!/url=./ufe_ref/scene_item_ops_8h_source.html\">sceneItemOps.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";