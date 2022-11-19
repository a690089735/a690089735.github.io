var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometric Consolidation</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Geometric Consolidation</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"geometric-consolidation\"></a></div>\n\
<p><strong>Geometric consolidation</strong> is part of the rendering framework intended to improve performance. One of its main purposes is to avoid what has been commonly called the <strong>small batch</strong> problem in hardware rendering. The issue is that there is a certain amount of overhead associated with each draw (per <em>render item</em>). If the amount of overhead is large relative to the amount of geometry drawn, then performance can degrade.</p>\n\
<p>A render item, or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>, is a renderable primitive, something that is actually rendered on a graphics card. For more information, see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Rendering-Framework.html\' title=\'\'>Rendering Framework</a> and <a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Data-Classes.html\' title=\'\'>Data Classes</a>.</p>\n\
<p>Consolidation, as the name implies, merges or “consolidates” render items with matching geometric properties and shading algorithm. Ideally the result is fewer renderable objects and reduced overhead cost. As an example, if one or more renderables want to draw unshaded line segments, and each only had a few segments, then they could be consolidated.</p>\n\
<p>Thus, Maya DAG objects and components don’t necessarily have a 1:1 translation into renderables.</p>\n\
<p>Revisiting the previous pipeline diagram, we now have something which appears as follows:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f475d.jpg\' title=\'\' /></div>\n\
<p>Figure 8: Example of two render items being merged into one after consolidation.</p>\n\
<p>After render items are determined, consolidation determines if they can be merged to produce new consolidated render items. These new items are then drawn as appropriate.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";