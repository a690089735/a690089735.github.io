var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Marking Menus</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Marking Menus</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"marking-menus\"></a></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShape</a></span> objects can have an associated marking menu. A MEL function that defines the marking menu for the node must be created with the following name: <span class=\'code\'>$nodeName + &quot;DagMenuProc&quot;</span>. An example is as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">global proc apiMeshDagMenuProc( string $parent, string $child )\n\
{\n\
    setParent -m $parent;\n\
    // Simple marking menu with 3 items at\n\
    // N north, W west and E east.\n\
    string $cmd = &quot;hide &quot; + $child;\n\
    menuItem -l &quot;Hide&quot; -rp &quot;N&quot; -c $cmd;\n\
    $cmd = &quot;boundingBoxDisplayCtrl(1,\\&quot;\\&quot;);&quot;;\n\
    menuItem -l &quot;Show bounding box&quot; -rp &quot;W&quot; -c $cmd;\n\
    $cmd = &quot;boundingBoxDisplayCtrl(0,\\&quot;\\&quot;);&quot;;\n\
    menuItem -l &quot;Hide bounding box&quot; -rp &quot;E&quot; -c $cmd;\n\
}\n\
\n\
</pre></div><p>Executing the MEL script above and then right-clicking on the custom surface shape node will invoke the marking menu.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";