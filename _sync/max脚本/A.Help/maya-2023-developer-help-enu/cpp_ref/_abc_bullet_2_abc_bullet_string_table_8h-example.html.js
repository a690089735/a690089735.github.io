var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: AbcBullet/AbcBulletStringTable.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_bullet_2_abc_bullet_string_table_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: AbcBullet/AbcBulletStringTable.h</h1>\n\
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
<div class=\"title\">AbcBullet/AbcBulletStringTable.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Simple macro based string definition file. Not all string elements</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  have been moved over to this file. However, the eventual goal is</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  to have them here so that they are a bit easier to localize if</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  necessary.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef __ABCBULLET_STRING_TABLE_H</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define __ABCBULLET_STRING_TABLE_H</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResourceId.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Define plugin id</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kPluginId  &quot;AbcBullet&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ... Begin Error Strings</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kDagPathOrderMissingErr             MStringResourceId( kPluginId, &quot;kDagPathOrderMissingErr&quot;,            &quot;The Bullet Initial State &#39;^1s&#39; is out of sync with the Rigid Set &#39;^2s&#39; to which it belongs. Please use the &#39;Reset Initial State&#39; command to update the solve.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgFile             MStringResourceId( kPluginId, &quot;kInvalidArgFile&quot;,            &quot;File incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgFrameRange       MStringResourceId( kPluginId, &quot;kInvalidArgFrameRange&quot;,      &quot;Frame Range incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgStep             MStringResourceId( kPluginId, &quot;kInvalidArgStep&quot;,            &quot;Step incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgFrameRelativeSample          MStringResourceId( kPluginId, &quot;kInvalidArgFrameRelativeSample&quot;,             &quot;Frame Relative Sample incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgPythonPerframeCallback           MStringResourceId( kPluginId, &quot;kInvalidArgPythonPerframeCallback&quot;,          &quot;pythonPerFrameCallback incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgMelPostJobCallback           MStringResourceId( kPluginId, &quot;kInvalidArgMelPostJobCallback&quot;,          &quot;melPostJobCallback incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgAttrPrefix           MStringResourceId( kPluginId, &quot;kInvalidArgAttrPrefix&quot;,          &quot;attrPrefix incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgPythonPostJobCallback            MStringResourceId( kPluginId, &quot;kInvalidArgPythonPostJobCallback&quot;,           &quot;pythonPostJobCallback incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgAttr             MStringResourceId( kPluginId, &quot;kInvalidArgAttr&quot;,            &quot;attr incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidArgUserAttrPrefix           MStringResourceId( kPluginId, &quot;kInvalidArgUserAttrPrefix&quot;,          &quot;userAttrPrefix incorrectly specified.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kEmpty          MStringResourceId( kPluginId, &quot;kEmpty&quot;,             &quot;&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kEmpty          MStringResourceId( kPluginId, &quot;kEmpty&quot;,             &quot;&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kEmpty          MStringResourceId( kPluginId, &quot;kEmpty&quot;,             &quot;&quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ... End Error Strings</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // __ABCBULLET_STRING_TABLE_H</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";