var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_mn_particle-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">MnParticle Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#aa88a2085fd86f5eeec9a68d712b9c6d3\">createNParticle</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a2dc5ba4270d8918e67f448dc4fb74fc6\">getBounce</a>(MFloatArray &amp;bounce) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#af1dc344d2ac64228ce1a9abd2ba8d7e3\">getFriction</a>(MFloatArray &amp;friction) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ab25ee10b71ad4f3a6d6619d9fbcba74f\">getInverseMass</a>(MFloatArray &amp;inverseMass) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a9f8eeb3facb92a44c666f6f25a3de3e6\">getNumVertices</a>(unsigned int &amp;numVerts) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ace208e6988792f3b6ea0263f208cb6ef\">getPositions</a>(MFloatPointArray &amp;positions) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ac0b78607580d75ffd903b5440a29dff4\">getThickness</a>(MFloatArray &amp;radius) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#aece587d064e23209c7d8af1b4fe8038c\">getVelocities</a>(MFloatPointArray &amp;velocities) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_object.html#acaa423d88f9fd206d778aa968828910d\">MnObject</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_object.html\">MnObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ac8f9a575455bbc4241d0e3d902846b2e\">MnParticle</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#acb456789de3d5f40a63fc3bf07c724c0\">setBounce</a>(float bounce)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#aa903bc1b15db6daf396b7d96d314d0e3\">setBounce</a>(float *bounce)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a9eff8428c99d8d50c0a5b0fe66674b85\">setCollide</a>(const bool b)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#acef2db70b12d415c452477be9d228882\">setDamping</a>(float damping)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#af79d915f8b39234c9e785b8bd29723c2\">setDamping</a>(float *damping)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a5ed68e806dc5387dc23a75d8dfe1c9a5\">setDisableGravity</a>(const bool b)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a15a779763bd5fd8317275ab086387e34\">setDragAndLift</a>(float drag, float lift)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a2e3f8b599ff27fcf2fe33e19c6bde20f\">setFriction</a>(float friction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a9edf4f2868f051d3cc50646ac8fcf057\">setFriction</a>(float *friction)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ab06b47528ab45d8ee12be0bbd2bb943b\">setIncompressibility</a>(float incompressibility)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a435d78ee367090d1a3102f92d8551acc\">setInverseMass</a>(float invMass)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#abc3b8b152d384f1d409eb6ef593454ad\">setInverseMass</a>(float *invMass)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#aea9f7c9980d1664a2182c11a36606d79\">setLiquidRadiusScale</a>(float liquidRadiusScale)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a5033538952dc77e41a9091cb1ec9121a\">setLiquidSimulation</a>(const bool b)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a1b2ed19e3f9a94556b7bd122450501dd\">setMaxIterations</a>(const int it)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#abd56da9060bdfb88f7fd04956bebca18\">setMaxSelfCollisionIterations</a>(const int it)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_object.html#a997e098269f54b0ca0e7e2137d4acbbf\">setNObject</a>(TnObject *nObj, bool own)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_object.html\">MnObject</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#aac523ce5ee6fc5b7135a7b59beea00ca\">setNParticle</a>(TnParticle *nObj, bool own)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a479e403786f75eb0c4f89dbe50b2db7c\">setPositions</a>(const MFloatPointArray &amp;positions, bool startFrame=true)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a96ac36d1ea025cead0f3683ff1624147\">setRestDensity</a>(float restDensity)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a82e6f3de6f458db39b4a595f1a00724d\">setSelfCollide</a>(const bool b)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a8d41206e50476a6283e1f5b6e8ff43da\">setSelfCollideWidth</a>(float width)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a3dda9f811210ea0ac3ce70bc18f0d2e7\">setSelfCollisionSoftness</a>(float softness)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#aab0f9a9ce2b763419e0950e89235d3fb\">setSurfaceTension</a>(float surfaceTension)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a9ea4120e78470b990304714785a82d22\">setSurfaceTension</a>(float *surfaceTension)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a0c40642d37f17b5ed9ed1db0d38f1d03\">setThickness</a>(float radius)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a3aa3f59f07365a801fad6c5b28523937\">setThickness</a>(float *radius)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ac86612bb1f52888a053ccbc2232d82dc\">setTopology</a>(const int numPoints)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#afdb452bcd76a141a60eace8369f178ee\">setVelocities</a>(const MFloatPointArray &amp;velocities)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ac62dc0600f735969c60b6e0db617a5aa\">setViscosity</a>(float viscosity)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#a5bce8ba24f2d86d67c4c87f390ee3312\">setViscosity</a>(float *viscosity)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_object.html#a9fd401dd4ea24b92d1a6845824552370\">~MnObject</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_object.html\">MnObject</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html#ac4e1840805f6aeccdcc0384f30a15896\">~MnParticle</a>() override</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_mn_particle.html\">MnParticle</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";