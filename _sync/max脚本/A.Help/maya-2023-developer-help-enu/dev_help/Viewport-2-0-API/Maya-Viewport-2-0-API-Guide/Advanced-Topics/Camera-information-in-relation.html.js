var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Camera information in relation to DirectX and OpenGL draw APIs</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Camera information in relation to DirectX and OpenGL draw APIs</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"camera-information-in-relation-to-directx-and-opengl-draw-apis\"></a></div>\n\
<div class=\'section\'><a id=\"conventions\"></a><h2 id=\"conventions\">Conventions</h2></div>\n\
<p>DirectX and OpenGL have different camera conventions.</p>\n\
<ul>\n\
<li>DirectX uses a left-handed camera coordinate system, where the view direction points down the Z+ axis and the near and far clip planes are mapped to the [0,1] <em>normalized device coordinate</em> (NDC) range in the Z axis.</li>\n\
<li>OpenGL (and Maya) use a camera right-handed coordinate system. Additionally, the OpenGL view direction points down the Z- axis and the near and far clip planes map to the [-1,1] range in the Z axis.</li>\n\
</ul>\n\
<p>Viewport 2.0 remains consistent with the rest of Maya by using a right-handed coordinate system when setting the camera projection matrix. However, the near and far clip planes map to the [0,1] range in Z.</p>\n\
<p>Thus, when querying for:</p>\n\
<ul>\n\
<li>Depth range using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getDepthRange()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ae1bda403fc02486d936aadc56a90e395&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html#ab5cd0dfd14aff4cbcac0325b057aa6ab&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getDepthRange()</a></span>, the return value will be in the [0,1] range for DirectX and OpenGL.</li>\n\
<li>View direction using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::viewDirectionAlongNegZ()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#a6913c6eda7d76d313d3ea1a8fab5318d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html#afb045b9b8551ebaab27134c427bae96a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::viewDirectionAlongNegZ()</a></span>, the return value will always indicate that the view direction is along –Z for both OpenGL and DirectX.</li>\n\
</ul>\n\
<p>The world space camera vectors can be queried by passing the <span class=\'code\'>kViewDirection</span> (direction), <span class=\'code\'>kViewUp</span> (up), and <span class=\'code\'>kViewRight</span> (right) enums to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext::getTuple()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a3a2746b602eb8dd543fa0a74497614d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_frame_context.html#ad7f5d46968b6e18ac263ccdafca420eb&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext::getTuple()</a></span> method. These three vectors form the basis of a right-handed coordinate system.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> also provides access to the active camera. When querying its properties via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera</a></span> interface, the same consistent camera vector values can be queried. If object space vectors are returned, then the values will show a consistent right-handed coordinate system with a Z- view direction.</p>\n\
<p>Some useful methods that can be used for querying include:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::unnormalizedNearClippingPlane()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#a1329b457d65a26bac707a26908cbc5d4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera::unnormalizedNearClippingPlane()</a></span>. This returns values in object or world space, and not NDC.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::unnormalizedFarClippingPlane()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#af6f43d59313ce37fe5e8bf75f67d6374&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera::unnormalizedFarClippingPlane()</a></span>. This returns values in object or world space, and not NDC.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::eyePoint()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#a578aa1d086c52784f1c5e7b204f70a9d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html#a32d6b12eb276b7963842c9b68312ac97&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera::eyePoint()</a></span>. If querying world space coordinates, this is equivalent to querying <span class=\'code\'>kViewPosition</span>.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::viewDirection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#a8607e1142843f35474557b5daa9489de&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html#a4d31d6f0df3d37887d21064652da25ca&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera::viewDirection()</a></span>. If querying world space coordinates, this is equivalent to querying <span class=\'code\'>kViewDirection</span>.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::upDirection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#a02c40747377d923d863cc514ef0b4d3d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html#a67c510d04a08a079d452a72f2c3d1e8a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera::upDirection()</a></span>. If querying world space coordinates, this is equivalent to querying <span class=\'code\'>kViewUp</span>.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::rightDirection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#a12417c673de907852f1d2917106b6097&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html#a4bff8c57542b11eb8cf7c8d87f755fd4&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera::rightDirection()</a></span>. If querying world space coordinates, this is equivalent to querying <span class=\'code\'>kViewRight</span>.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"clipping-planes\"></a><h2 id=\"clipping-planes\">Clipping planes</h2></div>\n\
<p>With the Legacy Default Viewport (Viewport 1), it is possible to directly set supplemental clip planes in OpenGL when the active camera belongs to a camera set.</p>\n\
<p>With Viewport 2.0, it is not advisable to directly query the device, as fixed-function user clip planes may not be available for certain draw APIs. As such, the Viewport 1 behaviour is disabled by default for Viewport 2.0, though it can be accessed via an environment variable if needed when running OpenGL (ENABLE_DEFAULT_VIEWPORT_CAMERA_SETS).</p>\n\
<p>A draw API agnostic option to get world space clip planes is shown below. The camera is taken from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span>, but can be for any camera shape. Note the use of the <em>unnormalized</em> methods to query clip planes.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MDrawContext context;\n\
\n\
// Get the current camera from the context\n\
<a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera</a> activeCamera(context.getCurrentCameraPath());\n\
\n\
// Get relative near and far clip values with respect to the camera position\n\
// You should ignore any override values set when using a\n\
// camera set; therefore, do not use the nearClippingPlane() and farClippingPlane() \n\
// methods on MFnCamera.\n\
double nearD = activeCamera.unnormalizedNearClippingPlane();\n\
double farD = activeCamera.unnormalizedFarClippingPlane();\n\
\n\
// Get world space camera information\n\
<a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPoint</a> eyePoint = activeCamera.eyePoint(<a href=\"javascript:void(0)\" data-symbol=\"MSpace::kWorld\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSpace::kWorld</a>);\n\
<a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVector</a> viewDirection = activeCamera.viewDirection(<a href=\"javascript:void(0)\" data-symbol=\"MSpace::kWorld\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSpace::kWorld</a>); // Positive value\n\
\n\
double dist = eyePoint[0]*viewDirection[0] + \n\
              eyePoint[1]*viewDirection[1] + \n\
              eyePoint[2]*viewDirection[2]; \n\
\n\
// Compute near clip plane facing away from the camera direction (for OpenGL)\n\
double distNear = -1.0 * (dist + nearD); \n\
<a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVector</a> OpenGL_NearClipPlaneVector(     \n\
       viewDirection[0], viewDirection[1], viewDirection[2], distNear);\n\
\n\
// Compute far clip plane facing towards the camera direction (for OpenGL)\n\
double distFar = dist + farD;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVector</a> OpenGL_FarClipPlaneVector(\n\
       -viewDirection[0], -viewDirection[1], -viewDirection[2], distFar);\n\
</pre></div><p>The equivalent code if only using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> would be as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Query the camera coordinate system\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDoubleArray</a> vPos = context.getTuple(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext::kViewPosition\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#af164f32d9bda6829f1738ef3fb2c6670aba1d4dab9b951b21263efade0a8f6729&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext::kViewPosition</a>);\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDoubleArray</a> vDir = context.getTuple(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext::kViewDirection\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#af164f32d9bda6829f1738ef3fb2c6670a227b592bc3c59e5855866b1d9f8c997b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext::kViewDirection</a>);\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDoubleArray</a> vNear = context.getTuple(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext::kViewUnnormlizedNearClipValue\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#af164f32d9bda6829f1738ef3fb2c6670ab2b11196237108d7c893c6940cfe4b16&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext::kViewUnnormlizedNearClipValue</a>);\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDoubleArray</a> vFar = context.getTuple(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext::kViewUnnormalizedFarClipValue\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#af164f32d9bda6829f1738ef3fb2c6670a973730135c8d1f08c5de00aa2997e914&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext::kViewUnnormalizedFarClipValue</a>);\n\
\n\
// Compute the world space planes for the near and far clip planes\n\
// The near plane is pointing away from the camera and is thus pointing in the\n\
// negative direction, while the far plane is pointing towards the camera (positive \n\
// direction.\n\
double distW = vPos[0]*vDir[0] + \n\
               vPos[1]*vDir[1] + \n\
               vPos[2]*vDir[2]; \n\
\n\
// Near clip plane faces away from the camera\n\
double distNearW = -1.0 * (distW + vNear[0]); \n\
<a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVector</a> OpenGL_NearPlane(vDir[0], vDir[1], vDir[2], distNearW);\n\
\n\
// Far clip plane faces torwards the camera\n\
double distFarW = distW + vFar[0];\n\
<a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVector</a> OpenGL_NearPlane(-vDir[0], -vDir[1], -vDir[2], distFarW);   \n\
</pre></div><div class=\'section\'><a id=\"depth-priority\"></a><h2 id=\"depth-priority\">Depth Priority</h2></div>\n\
<p>Shaders may use depth priority to offset the geometric position along the view direction. Within the shader code, the computation is relative to the actual device’s depth range, and thus differ for OpenGL versus DirectX. Assuming a uniform parameter called <span class=\'code\'>depthPriority</span> has been set appropriately, the following sample code performs the offset in DirectX and OpenGL:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// DX range is [0,1] or 1 in size.\n\
float4 iPcPriority( float3 pm, float depthPriority, float4x4 worldViewProjectionC )\n\
{ \n\
    float4 P = mul( float4(pm,1), worldViewProjectionC ); \n\
    P.z -= P.w * depthPriority; \n\
    return P; \n\
}\n\
 \n\
// OpenGL range is [-1,1] or 2 in size\n\
vec4 iPcPriority( vec3 pm, float depthPriority, mat4 worldViewProjectionC )\n\
{\n\
    vec4 P = worldViewProjectionC * vec4(pm,1.0f);\n\
    P.z -= P.w * 2.0 * depthPriority;\n\
    return P;\n\
}\n\
</pre></div><div class=\'section\'><a id=\"selection\"></a><h2 id=\"selection\">Selection</h2></div>\n\
<p>Selection uses the same information as is used for drawing.</p>\n\
<div class=\'section\'><a id=\"screen-orientation\"></a><h2 id=\"screen-orientation\">Screen Orientation</h2></div>\n\
<p>It is worth noting that, for fat lines and points (generated using geometry shaders), or any screen aligned geometry, that a counter-clockwise winding order indicates front-facing geometry. This is consistent for both DirectX and OpenGL.</p>\n\
<p>For example, in the following DirectX code, the quad points are defined as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">static const float4 cQuadPts[4] = {  \n\
    float4( -1.0,  1.0, 0, 0 ),  \n\
    float4( -1.0, -1.0, 0, 0 ),  \n\
    float4(  1.0,  1.0, 0, 0 ),  \n\
    float4(  1.0, -1.0, 0, 0 )};\n\
</pre></div><p>The geometry shader expansion traverses through the points in forward order, resulting in a triangle strip with the triangles each having a counter-clockwise orientation:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void point2ScreenQuad( geometryInS inputs[1], float2 pointSz, float2 screenSize,\n\
     float4x4 viewProjInverse, float depthPriorityUnit, bool orthographic, float DPThresholdInView, \n\
     inout TriangleStream&lt;geometryInS&gt; outStream  ) \n\
{\n\
    geometryInS outS  = inputs[0]; \n\
    float size = max(0, max(pointSz.x, pointSz.y)); \n\
    float dpScale = orthographic ? 1.0f : -DPThresholdInView; \n\
    float dp = 2.0f * size * cDepthPriorityUnit * dpScale; \n\
    float4 sizeInZ = float4(pointSz.xy  / screenSize.xy, 0, 0) * outS.Pc.w;  \n\
    [unroll] for( int i = 0; i &lt; 4; ++i ) { \n\
        outS.Pc = inputs[0].Pc + sizeInZ * cQuadPts[i]; \n\
        outS.Pc.z = inputs[0].Pc.z - dp; \n\
        outStream.Append( outS ); \n\
    } \n\
    outStream.RestartStrip(); \n\
}\n\
</pre></div><div class=\'section\'><a id=\"examples\"></a><h2 id=\"examples\">Examples</h2></div>\n\
<ul>\n\
<li>The plug-in <em>rawFootPrintNode</em> in the Maya Developer Kit has example debug code that performs various <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span>/<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera</a></span> queries, including the world space clip plane computation described above.</li>\n\
<li>The <em>cgfxShader</em> plug-in shows an example of converting from normalized device coordinates (NDC) to screen space.</li>\n\
<li>The <span class=\'code\'>MayaBlinnDirectionalLightShadowGL.cgfx</span>, <span class=\'code\'>MayaBlinnDirectionalLightShadowGL.ogsfx</span>, and <span class=\'code\'>MayaBlinnDirectionalLightShadow10.fx</span> files provide DirectX and OpenGL sample implementations of using depth priority offsets for the same shader. See the <span class=\'code\'>bin\\Cg</span>, <span class=\'code\'>bin\\OGSFX</span> and <span class=\'code\'>bin\\HLSL</span> folders of the Maya installation directory for these files. The fragment <span class=\'code\'>mayaDepthPriorityShader</span> can also be examined as it is the <span class=\'code\'>iPcPriority</span> function discussed above.</li>\n\
<li>The <span class=\'code\'>mayaPoint2Quad</span> fragment can be examined for an example of geometry shader code used for drawing fat lines in the <span class=\'code\'>mayaFatPointShader</span>. It also incorporates the <span class=\'code\'>mayaDepthPriorityShader</span> fragment to allow view direction offsets.</li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> Fragments can be examined using either of the following methods: - the <span class=\'code\'>ogs –xml &lt;fragmentName&gt;</span> command with the fragment name as the <span class=\'code\'>&lt;fragmentname&gt;</span> argument - via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager::getFragmentXML()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#ac6fb2a8f6c193bf89911f036035cc355&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html#a9cf7a66c2e0cf3adeb0d47213aad1417&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager::getFragmentXML()</a></span> API interface. The <em>fragmentDumper</em> sample plug-in implements the <span class=\'code\'>dumpFragment</span> command which can also be used to examine fragments using the <span class=\'code\'>-fn</span> option.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";