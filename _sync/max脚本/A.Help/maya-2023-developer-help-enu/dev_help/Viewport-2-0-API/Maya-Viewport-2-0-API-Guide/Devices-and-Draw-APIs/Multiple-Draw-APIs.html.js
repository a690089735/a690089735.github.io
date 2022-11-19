var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Multiple Draw APIs</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Multiple Draw APIs</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"multiple-draw-apis\"></a></div>\n\
<p>The API is presented in a draw API agnostic for the most part. If a plug-in is writing for entry points which are draw API specific then it should return the API that it is being used for. The interface <span class=\'code\'>supportedDrawAPIs()</span> is provided for all relevant entry points.</p>\n\
<p>If the device API that is returned does not include the current device API on which Viewport 2.0 is running; for example, if VP2 is running on OpenGL Core Profile mode, but <span class=\'code\'>supportedDrawAPIs()</span> does not return <span class=\'code\'>MHWRender::kOpenGLCoreProfile</span>, then a warning similar to the following appears:</p>\n\
<p><span class=\'code\'>Error: line 0: Failed to create evaluator for &quot;drawdb/geometry/apiMesh&quot; classification because the current drawing API isn&#39;t supported.</span></p>\n\
<p>It is the responsibility of the plug-in to set up any dependent draw API libraries or interfaces. The SDK ships with specific versions of libraries for each supported draw API. Current dependent libraries are CgFx, DirectX11 and a pre-compiled DX11 effect runtime library. As the source code ships with the DirectX SDK, the pre-compiled DX11 effect library can be recompiled by plug-in writers and linked explicitly to their own plug-in. Current library versions are listed as part of the shipping resource notes.</p>\n\
<p>Some notable draw API caveats are listed below. These are restrictions are imposed by the draw API libraries rather than a restriction in the Maya API.</p>\n\
<ul>\n\
<li>When using the texture or target manager provided, not all formats are available for all draw APIs. Refer to externally published documentation provided with each API.</li>\n\
<li>Textures accessed from the texture manager use the upper-left corner as the origin. Shaders should be written with the appropriate texture coordinate to perform a vertical flip as necessary.</li>\n\
<li>Cube map texture face orientation is draw API specific.</li>\n\
<li>Stock shaders provided by the shader manager hide the details of differences between shading languages. When not using stock shaders, the plug-in writer will need to write code which is specific to that shading language. For example, handling differences in vector / matrix multiplication between Cg and HLSL.</li>\n\
<li>User-created shader fragments registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager</a></span> are not required to define implementations for both OpenGL (Cg) and DirectX (HLSL). However, if both implementations are defined, it is up to the author to handle any differences between the two (such as texture access or matrix math). In some cases, this may even require completely different fragments to be written, requiring the classes that use the fragments to choose the correct fragment for the currently active device.</li>\n\
<li>It is quite possible that some geometry requirements specified from an <span class=\'code\'>MPxShaderNode</span> are not fulfilled. In this case the plug-in will need to handle this situation. In particular, noting how DirectX is less tolerant to vertex stream mismatches than OpenGL.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";