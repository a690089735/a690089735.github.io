var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Overview of the Viewport 2.0 API</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Overview of the Viewport 2.0 API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"overview-of-the-viewport-2.0-api\"></a></div>\n\
<p>Maya 2012 introduced a new set of API classes for defining custom drawing, shading and effects in both Viewport 2.0 and Hardware Renderer 2.0 (the new batch/render view version of Viewport 2.0).</p>\n\
<p>Maya’s Viewport 2.0 represents a brand-new rendering architecture in Maya that has been written from the ground up to deliver high-performance on large scenes on top of a programmable shader system offering high-quality per-pixel lighting and effects. This, unfortunately, makes it incompatible with many of the existing Maya API classes, due to their dependence on system memory geometry data, C++ driven rendering, and high state switching overheads. As a result, most existing plug-ins will need to be updated to support the new API classes in order to work correctly in Viewport 2.0.</p>\n\
<p>This section introduces the new classes and highlights the migration paths from the old API to the new one. In most cases, it should be possible to write plug-in nodes that simultaneously implement both the new and old APIs where required, thus maintaining a single plug-in that will work in both viewports while artists, tools and pipelines are migrated to Viewport 2.0.</p>\n\
<p>This discussion of the new API is broken down into the following subsections:</p>\n\
<ul>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Data-Classes.html\' title=\'\'>Data Classes</a> - the objects which describe and provide access to the geometry and shaders in the scene.</li>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Scene-Overrides.html\' title=\'\'>Scene Overrides</a> - the interfaces used to define custom drawing, shading and effects within the scene.</li>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Rendering-Overrides.html\' title=\'\'>Rendering Overrides</a> - the objects used to define custom rendering, multi-pass effects, and filtering.</li>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Framework-Classes.html\' title=\'\'>Framework Classes</a> - the objects that provide services and device state information to plug-ins.</li>\n\
</ul>\n\
<p>Following this, there are two subsections to help accelerate your transition to the new API:</p>\n\
<ul>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Transition-Guide.html\' title=\'\'>Transition Guide</a> - tips on moving from legacy interfaces to the new Viewport 2.0 API.</li>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Developer-Kit-Samples.html\' title=\'\'>Developer Kit Samples</a> - a brief overview of updated Developer Kit samples using the Viewport 2.0 API.</li>\n\
</ul>\n\
<p>All of the new classes reside in a new namespace within the Maya API called <span class=\'code\'>MHWRender</span> (all references to class names in this document assume the namespace). This makes it easy to locate all the classes related to viewport and batch hardware rendering and also makes it easy to differentiate them from the older hardware API classes which are not supported in Viewport 2.0 and Hardware Renderer 2.0.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";