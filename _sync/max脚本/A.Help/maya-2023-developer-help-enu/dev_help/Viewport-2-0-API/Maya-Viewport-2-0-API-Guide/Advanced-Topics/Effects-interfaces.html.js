var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Post-effect interfaces</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Post-effect interfaces</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"post-effect-interfaces\"></a></div>\n\
<div class=\'section\'><a id=\"ssao-screen-space-ambient-occlusion-control\"></a><h2 id=\"ssao-screen-space-ambient-occlusion-control\">SSAO (Screen-space ambient occlusion) control</h2></div>\n\
<p>The information in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> provides sufficient information to indicate if a plug-in is being invoked to render passes that must support SSAO (screen-space ambient occlusion).</p>\n\
<p>The internal algorithm for SSAO requires a specific <em>normal-depth</em> pass to produce intermediate results. By default, the renderer sets up a specific shader to be used in this pass. In the case where a plug-in shader causes geometry to be displaced or normal to be modified, it is possible to override this default shader.</p>\n\
<p>This <em>normal-depth</em> pass can be detected by querying <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> information in a similar fashion to how shadow map passes can be detected (see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Lighting-Interfaces.html#shadowing-control\' title=\'\'>Section 4.2.1 Shadowing control</a>). For this pass, the pass identifier is: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext::kNormalDepthPassSemantic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a30804db03c6cccf4fd8d480fe4af0660&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext::kNormalDepthPassSemantic</a></span>.</p>\n\
<p>If any tessellation shaders are required, then the override should be added to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> instead of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>.</p>\n\
<p>To add support, any custom shader should take into account the following conditions.</p>\n\
<ul>\n\
<li>Two color targets are bound during the normal-depth pass:\n\
<ul>\n\
<li>Color target 0 is of the unsigned fixed-point RGB format</li>\n\
<li>Color target 1 is of the floating point single channel (R) format</li>\n\
<li>The current target information should be available from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext</a></span> when this is available to the plug-in.</li>\n\
</ul></li>\n\
<li>Geometry Requirements:\n\
<ul>\n\
<li>Object space normal stream.</li>\n\
<li>Object space position stream.</li>\n\
</ul></li>\n\
<li>Required output values:\n\
<ul>\n\
<li>Normalized normal values (unsigned and in view space) written to color target 0.</li>\n\
<li>Depth values (in view space) written to color target 1.</li>\n\
</ul></li>\n\
</ul>\n\
<p>The following is a sample of the shader used for this pass, written in HLSL:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Check if the back-facing normal needs to be flipped. \n\
extern bool isSingleSided = false; \n\
extern float mayaNormalMultiplier = 1.0f; \n\
\n\
// Shader semantic supported by Viewport 2.0 to indicate whether \n\
// the projection matrix flips the Z component of a point when transformed\n\
// -1.0 if so, otherwise 1.0. \n\
float gProjZSense : ProjectionZSense; \n\
\n\
// Vertex shader input structure.\n\
struct VS_INPUT_NormalDepth\n\
{\n\
    float3 Pos : POSITION;\n\
    float3 Normal: NORMAL;\n\
};\n\
\n\
// Vertex shader output structure.\n\
struct VS_TO_PS_NormalDepth\n\
{\n\
    float4 HPos : SV_Position;\n\
    float4 NormalDepth : TEXCOORD0;\n\
};\n\
\n\
// Vertex shader.\n\
VS_TO_PS_NormalDepth VS_NormalDepth(VS_INPUT_NormalDepth In)\n\
{\n\
    VS_TO_PS_NormalDepth Out;\n\
    \n\
    // Transform the vertex from object space to clip space.\n\
    Out.HPos = mul(float4(In.Pos, 1.0f), gWVPXf);\n\
    \n\
    // Record the normal and depth components for the pixel shader.\n\
    // Note:  This depends on whether the view direction is along the +Z or -Z axis.     \n\
    // The projection matrix &quot;Z sense&quot; determines this. \n\
    Out.NormalDepth.xyz = mul(In.Normal, gWVITXf);\n\
    Out.NormalDepth.z = gProjZSense * Out.NormalDepth.z;     \n\
    Out.NormalDepth.w = gProjZSense * mul(float4(In.Pos, 1.0f), gWVXf).z; \n\
\n\
    return Out;\n\
}\n\
\n\
// Pixel shader output structure.\n\
struct PS_OUT\n\
{\n\
    float4 Normal : SV_Target0;\n\
    float4 Depth : SV_Target1;\n\
};\n\
\n\
// Pixel shader.\n\
PS_OUT PS_NormalDepth(VS_TO_PS_NormalDepth In, bool isFrontFace : SV_IsFrontFace) \n\
{\n\
    PS_OUT Out;\n\
\n\
    float3 normal = normalize(In.NormalDepth.xyz);     \n\
\n\
    if ( !isSingleSided )     \n\
    {         \n\
        float normalMul = isFrontFace ? mayaNormalMultiplier : -mayaNormalMultiplier;\n\
        normal *= normalMul;     \n\
    }     \n\
\n\
    // Set the normal for an unsigned normalized integer target, and depth for a floating-point target.     \n\
    Out.Normal = float4((normal + 1.0f) * 0.5f, 0.0f); \n\
    Out.Depth  = In.NormalDepth.wwww;\n\
\n\
    return Out;\n\
}\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> Described above is the behavior of the internal pass for Maya 2016.</p>\n\
\n\
<div class=\'section\'><a id=\"motion-blur-control\"></a><h2 id=\"motion-blur-control\">Motion blur control</h2></div>\n\
<p>The information in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> provides sufficient information to indicate if a plug-in is being invoked to render passes that are required to support motion blur.</p>\n\
<p>The internal algorithm for motion blur requires a specific motion-vector pass that produces intermediate results. By default, the renderer sets up a specific shader to be used in this pass. In the case where a plug-in shader causes geometry to be displaced, it is possible to override this default shader.</p>\n\
<p>This motion-vector pass can be detected by querying <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> information and checking for a pass semantic matching this string: <span class=\'code\'>motionVectorPass</span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext::kMotionVectorPassSemantic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a2781bebea5ef7c30f94bda5bf9c38a36&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext::kMotionVectorPassSemantic</a></span>.</p>\n\
<p>If any tessellation shaders are required, then the override should be added to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> instead of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>.</p>\n\
<p>To add support, a custom shader should take into account the following conditions.</p>\n\
<ul>\n\
<li>One color target is bound during the normal-depth pass:\n\
<ul>\n\
<li>Color target 0 is of the fp32 RGBA format.</li>\n\
<li>The current target information should be available from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext</a></span> when it is available to the plug-in.</li>\n\
</ul></li>\n\
<li>Geometry Requirements:\n\
<ul>\n\
<li>Object space position stream.</li>\n\
</ul></li>\n\
<li><p>Required output values:</p>\n\
<ul>\n\
<li>Motion vectors written to color target 0.</li>\n\
</ul>\n\
<p>The following is a sample of the shader used for this pass, written in HLSL:</p></li>\n\
</ul>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Shader semantics supported by Viewport 2.0.\n\
extern float4x4 World : world;\n\
extern float4x4 previousWorld : previousWorld;\n\
extern float4x4 WorldViewProj : worldviewprojection;\n\
extern float4x4 viewProjection : viewProjection;\n\
extern float4x4 previousViewProjection : previousViewProjection;\n\
extern float2 viewportSize : viewportPixelSize;\n\
\n\
// The uniform variable will be set by Viewport 2.0 with the value of the\n\
// hardwareRenderingGlobals.motionBlurShutterOpenFraction attribute,\n\
// which denotes the percentage of frame time for which the shutter\n\
// is open, with 0 denoting that the shutter is not open at all, and 1\n\
// denoting that the shutter is open for 100% of the frame time.\n\
extern float shutterOpenFraction = 0.200000f;\n\
\n\
// Vertex Shader\n\
VS_TO_PS_MotionVector VS_MotionVector(VS_INPUT_MotionVector In ) \n\
{ \n\
    VS_TO_PS_MotionVector Out; \n\
    Out.Pw = mul( float4(In.pm,1), World).xyz;\n\
    Out.OtherFramePw = mul( float4(In.pm,1), previousWorld).xyz; \n\
    Out.Pc = mul( float4(In.pm,1), WorldViewProj );\n\
    return Out; \n\
} \n\
\n\
// Pixel Shader\n\
float4 PS_MotionVector(VS_TO_PS_MotionVector In ) : SV_Target\n\
{ \n\
    float k = shutterOpenFraction * 100.0f; \n\
    float4 Pc = mul( float4(In.Pw, 1.0f), viewProjection ); \n\
    float4 prevPc = mul( float4(In.OtherFramePw, 1.0f), previousViewProjection ); \n\
    float2 curUV  = Pc.xy / Pc.w; \n\
    float2 prevUV = prevPc.xy / prevPc.w; \n\
    float2 vec = (curUV - prevUV) * shutterOpenFraction * 0.5f; \n\
    vec *= viewportSize; \n\
    float vecLength = length(vec); \n\
    vec *= min(k / vecLength, 1.0f); \n\
    vec /= viewportSize; \n\
    return float4( vec.x, -vec.y, 1.0f - (Pc.z / Pc.w), vecLength ); \n\
} \n\
\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong>The algorithm above applies to Maya 2016 and is only one example of how motion vectors may be computed. A custom shader may implement motion blur in any manner appropriate.</p>\n\
\n\
<p>The XML wrapper for this implementation for a given release can be found using the MEL command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">ogs -xml mayaMotionVector;\n\
</pre></div><p>From the API, the <span class=\'code\'>MFragmentManager:: getFragmentXML()</span> method can be used to query this shade fragment. The sample plug-in <em>fragmentDumper</em> demonstrates the use of this method to dump out fragments:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">dumpFragment -fn mayaMotionVector;\n\
</pre></div><div class=\'section\'><a id=\"depth-of-field-control\"></a><h2 id=\"depth-of-field-control\">Depth of field control</h2></div>\n\
<p>The information in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> provides sufficient information to indicate if a plug-in is being invoked to render passes that must support depth of field (DOF).</p>\n\
<p>The internal algorithm for DOF requires a specific pass to produce intermediate results. By default, the renderer sets up a specific shader for this pass.</p>\n\
<p>The pass can be detected by querying <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> information and checking for a pass semantic matching this string: <span class=\'code\'>dofPass</span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext::kDOFPassSemantic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a730755c181d1c16d7abde72c447fac04&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext::kDOFPassSemantic</a></span>.</p>\n\
<p>In the case where a plug-in shader causes geometry to be displaced, it is possible to override this default shader.</p>\n\
<p>The shader must compute the circle-of-confusion (CoC) value and depth values per pixel. These values are written to the R and G channels of a floating point output target (R32G32), which are bound as color target 0. Depth testing is performed with a locally bound depth target.</p>\n\
<p>The computation is as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">0.5 * alpha * abs( Z - Zf ) / Z, where alpha = F*F/(A*(Zf-F))\n\
</pre></div><p>Where:</p>\n\
<ul>\n\
<li><p>F is the focal length of the lens</p></li>\n\
<li><p>A is the aperture number</p></li>\n\
<li><p>Zf is the focus distance</p></li>\n\
<li><p>alpha is the CoC at infinity</p></li>\n\
</ul>\n\
<p>The following is an example of a shader used for this pass, written in HLSL:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">float4 mayaCoCDepth( float alpha, float focusDist, float3 Pw, float4x4 view ) \n\
{\n\
    float z = abs( mul( float4(Pw, 1), view ).z );\n\
    float CoC = 0.5f * alpha * (z - focusDist) / z; \n\
    // Write to R, G channels of output\n\
    return float4( CoC, z, 0, 1 ); \n\
} \n\
</pre></div><p>Where Pw is the world space position and view is the view matrix.</p>\n\
<p>The current internal computation for alpha and focus distance is given below:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">float ItoM = 0.0254f; // inches converted to m\n\
float CMtoM = 0.01f; // cm converted to m\n\
\n\
// Obtain the hyperfocal distance from the camera in m.\n\
//\n\
float focus = &lt;camera shape’s focusDistance&gt; * CMtoM;\n\
focusDist = focus * 100; // Convert back to cm.\n\
\n\
// Compute alpha, the COC at infinity, in m\n\
//\n\
float fStop = &lt;camera shape’s fStop&gt; * &lt;camera shape’s focus region scale&gt; // Apply region scale\n\
float F = &lt;camera shape’s camera scale&gt; * &lt;camera shape’s focal length&gt; * 0.001f; // in m\n\
float alpha = F * F / (fStop * (focus - F));\n\
\n\
// Convert to UV space\n\
float apertureX = &lt;camera shape’s horizontal film aperture&gt; * 0.001f;\n\
float apertureY = &lt;camera shape’s vertical film aperture&gt; * 0.001f;\n\
alpha /= min( apertureX, apertureY );\n\
\n\
</pre></div><p>Camera shape parameters are denoted by the &lt;&gt; delimiters in the above pseudo-code.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The algorithm above applies to Maya 2016 and is only one example of how COC may be computed. A custom shader may implement COC in any manner appropriate, and does not need to use Maya’s camera node attributes.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"compositing-control\"></a><h2 id=\"compositing-control\">Compositing control</h2></div>\n\
<p>Most internal Maya shapes are affected by post effects, with some exceptions such as image planes. In contrast, plug-in render items are excluded from post effects by default. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span> APIs can override this default behavior per render item by returning <span class=\'code\'>false</span> from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::setExcludedFromPostEffects()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a634faadbe865d745bc8ed447efe671da&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#a0704932795c36669268b767a9db4e38a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::setExcludedFromPostEffects()</a></span>. On the other hand, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> API provides object-level control: it can be included in post effects by either overriding virtual function <span class=\'code\'>MPxDrawOverride::excludedFromPostEffect()</span> to return <span class=\'code\'>false</span>, or by starting the draw classification string with <span class=\'code\'>drawdb/geometry/includePostEffects/</span> during registration. Lastly, semitransparent pixels on all surfaces, whether native and drawn by a plug-in, are excluded from post effects in Viewport 2.0.</p>\n\
<p>In order to composite opaque surfaces affected by post effects with those excluded from post effects, Viewport 2.0 performs a full-screen pass blending between the original beauty pass output and the output of post-effect passes, based on an alpha mask render target generated by a post-effect pattern pass followed by a non-post-effect pattern pass.</p>\n\
<p>During the post-effect pattern pass, render items included in post effects are drawn with color writes disabled and depth writes enabled in order to fill an intermediate depth buffer. A plug-in can detect this pass by querying the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> for a pass semantic matching the <span class=\'code\'>PEPatternPass</span> string constant (defined as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext::kPEPatternPassSemantic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a21eddbaf1720cec960972c79d2cde72a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext::kPEPatternPassSemantic</a></span>).</p>\n\
<p>During the non-post-effect pattern pass, render items excluded from post effects are drawn with the same depth buffer, but with color writes enabled and the alpha mask render target set. A plug-in can detect this pass by querying the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> for a pass semantic matching the <span class=\'code\'>nonPEPatternPass</span> string constant (defined as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext::kNonPEPatternPassSemantic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a8f503e129a06c3b3e69d38572579cf63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext::kNonPEPatternPassSemantic</a></span>). By default, render items are drawn in the non-post-effect pattern pass with the same shader as in the beauty pass, however only the alpha channel of the shader output is written to the alpha mask render target due to its 8-bit alpha format. At the same time, plug-ins using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> APIs can use the above information to perform arbitrarily complex rendering in this pass, generating custom patterns. For convenience, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> can be used with either one of these APIs. More information about the render target can be obtained from an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> instance.</p>\n\
<p>After the non-post-effect pattern pass, the screen-space compositing pass is performed as illustrated by the shader pseudo-code below. The <span class=\'code\'>AlphaMask</span> texture in this code represents the alpha mask render target, <span class=\'code\'>SrcTarget</span> is the output of post effect passes and <span class=\'code\'>DstTarget</span> is the beauty pass output without post effects. The result is <span class=\'code\'>DstTarget</span> blended over <span class=\'code\'>SrcTarget</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">float4 CompositeWithAlphaMask( float3 UV,\n\
                               texture2D SrcTarget, sampler SrcTargetSampler,\n\
                               texture2D DstTarget, sampler DstTargetSampler,\n\
                               texture2D AlphaMask, sampler AlphaMaskSampler )\n\
{\n\
    float4 srcColor = SrcTarget.Sample( SrcTargetSampler, UV.xy ); // Color with post effects\n\
    float4 dstColor = DstTarget.Sample( DstTargetSampler, UV.xy ); // Color with no post effects\n\
    float alphaMask = AlphaMask.Sample( AlphaMaskSampler, UV.xy ).a;\n\
    return lerp( srcColor, dstColor, alphaMask );\n\
}\n\
\n\
</pre></div><p>The XML wrapper for this implementation for a given release can be found using the MEL command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">ogs -xml maya_CompositeWithAlphaMask;\n\
</pre></div><p>From the API, the <span class=\'code\'>MFragmentManager:: getFragmentXML()</span> method can be used to query this shade fragment. The example plug-in <em>fragmentDumper</em> in the Developer Kit demonstrates the use of this method to dump out fragments:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">dumpFragment -fn maya_CompositeWithAlphaMask;\n\
</pre></div><p>Finally, after opaque surfaces have been composited, transparent surfaces are rendered without post effects.</p>\n\
<div class=\'section\'><a id=\"frame-and-draw-context\"></a><h2 id=\"frame-and-draw-context\">Frame and draw context</h2></div>\n\
<p>For information regarding frame and draw context, see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Frame-and-draw-contexts.html\' title=\'\'>Frame and draw contexts</a>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> If <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext::shaderOverrideInstance()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#aef8d7620ddd58e44e45ea0f0dfaa6fb4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html#aec50485f6a2efbcdc89f5926342fa406&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext::shaderOverrideInstance()</a></span> is called to obtain an override shader at draw time, then the plug-in must update the <span class=\'code\'>isSingleSided</span> parameter based on the lighting state obtained from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext</a></span>.</p>\n\
</blockquote>\n\
<blockquote>\n\
<p><strong>Important:</strong> For geometry requirements on a custom shader, if the appropriate input streams are not provided, then the renderer internally attempts to create them. This may occur per frame and thus affect performance. As an example, if an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> were written to provide the geometry for the custom shader, and the code only returns position but not normal streams, then an attempt to internally derive normal values occurs.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";