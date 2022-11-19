var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shading Node Overrides</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shading Node Overrides</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"shading-node-overrides\"></a></div>\n\
<div class=\'section\'><a id=\"overview\"></a><h2 id=\"overview\">Overview</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> (along with its subclass <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span>) is the API entry point to override the hardware shading fragment used to render a plug-in software shading node in Viewport 2.0. Unlike <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> are not responsible for the full draw. In fact, such implementations do no drawing at all.</p>\n\
<p>Implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> must be associated with specific types of shading nodes. In most cases, a plug-in defines a shading node, and a separate <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> is written to provide Viewport 2.0 support. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> implementations must be registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> using a classification string. Shading nodes with classification strings that satisfy the override classification are translated for Viewport 2.0 using the override. The classification string must begin with &quot;drawdb/shader&quot; to be recognized by the system.</p>\n\
<p>The responsibility of a shading node override is to define a hardware shading fragment to be associated with a software shading node. Ideally, the fragment has input parameters which correspond exactly to the input attributes on the node and output parameters, which correspond exactly to output attributes on the node. This is not always possible; normally, hardware fragments support a subset of the functionality of the software shading node. Whenever possible, a shading node override should be able to operate in isolation using only information from the shading node it is operating on. It should not need to know anything about other nodes in the shading network.</p>\n\
<p>When translating a shading network for display in Viewport 2.0, Maya traverses upstream in the dependency graph in a depth first manner, starting with the surface shader connected to the shading engine. For each node it visits, it creates an instance of the shading node override associated with the node type. The override created may be internal or defined by a plug-in (the system sees no difference between the two). After creating an override for a node, Maya requests the name of the fragment or fragment graph to be used for the node from the override. It then connects the fragments together in a graph which approximates the DG connections of the nodes in the Maya shading network. Once fragments for all nodes in the network are created and connected together, Maya connects some global fragments for lighting and geometry information and then compiles the final fragment graph into a shading effect. This shading effect is then applied when drawing scene objects to which the original surface shader has been assigned. If there is a problem translating any node in the network (for example, no override, bad fragment, unable to form connections), then Maya simply prunes the translation at that node; and as a result, the sub-network rooted there provides no contribution to the final shading effect.</p>\n\
<p>When there is a change to an existing shading network, the override system is again invoked. If the change alters the topology of the Maya shading network; or, if an override for a node in the network specifies that the change is equally large, then the pre-existing overrides are all deleted and the translation is redone from scratch. If the change is simply a change to an attribute value, then the overrides are invoked to update the values of any parameters on the final shading effect that correspond to the parameters on the original fragments. Much of the value updating is handled automatically by Maya, but this can be overridden in a specific implementation where needed.</p>\n\
<p>Since Maya sees no difference between internal and plug-in shading node overrides, implementing <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> for a plug-in software shading node is the best way to provide a Viewport 2.0 representation that works with all of the Viewport 2.0 systems. Lights, shadows, screen-space effects, transparency, acceleration structures and integration with unrelated plug-ins all work automatically.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section3_5_fig43.png\' title=\'\' /></div>\n\
<p>Figure 43: Shows a non-trivial Maya shading network and how it is translated to a hardware fragment graph which is used to create the final shading effect. Each shading node has an associated shading node override. The override specifies the hardware fragment or fragment graph to be created for the node. Those fragments are joined together, along with some global lighting and geometry fragments, to produce a final fragment graph. The input parameters of the graph drive the input parameters of the contained fragments.</p>\n\
<div class=\'section\'><a id=\"fragments-and-fragment-graphs\"></a><h2 id=\"fragments-and-fragment-graphs\">Fragments and Fragment Graphs</h2></div>\n\
<p>Shader fragments and fragments graphs are managed by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager</a></span>. New fragments and/or graphs may be defined using XML and registered with Maya through <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager</a></span>. These fragments and graphs may then be referenced by implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span>. For the purposes of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span>, fragments and fragment graphs can be used interchangeably. A fragment graph is merely a special case of a fragment which still has input and output parameters but is composed of other fragments instead of directly defining shading code. In this guide, assume that any reference to a fragment can also refer to a fragment graph.</p>\n\
<p>The XML formats for fragments and fragment graphs are fully defined by XML Schema Documents (XSDs) (see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/XML-Schema.html\' title=\'\'>XML Schema</a>). However, at a high level, the format allows the author to define the input and output parameters of a fragment as well as define the code for a Cg and/or HLSL method to implement the shading as required for OpenGL and/or DirectX 11. For fragment graphs, the format allows you to name multiple pre-existing fragments, define how they are connected, and define how the attributes of those fragments map to the external input and output interface of the fragment graph.</p>\n\
<p>All supported internal Maya shading nodes are implemented using fragments and fragment graphs. In fact, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager</a></span> allows you to query the XML for many of Maya’s internal fragments. It also provides facilities for instructing Maya to dynamically dump intermediate fragment graphs, along with the final effect definition, to disk. This allows fragment authors to examine the process of how Maya takes individual fragments and joins them together to ultimately produce the final shading effect. With careful examination, you can produce fragments which integrate very well with pre-defined Maya fragments. Also, plug-ins may reuse Maya’s internal fragments, if possible, instead of defining their own.</p>\n\
<p>The easiest way to learn how to define fragments in XML is to examine pre-existing definitions either from the Developer Kit or by dumping out some of Maya’s internal fragments. The following is a sample fragment taken from the <em>brickShader</em> developer kit sample. The XML first defines the name and settings of the fragment, then the input parameters (called <em>properties</em>), default values for some of the inputs, and the output parameters. Finally it defines two implementations for the fragment: one for OpenGL (written in Cg) and the other for DirectX 11 (written in HLSL). Although the two implementations are identical here (Cg and HLSL have a lot in common), this is not always the case. In particular, you must handle the differences between GL and DX with regard to texture access and matrix order.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragment\n\
    uiName=&quot;pluginBrickTexture&quot;\n\
    name=&quot;pluginBrickTexture&quot;\n\
    type=&quot;plumbing&quot;\n\
    class=&quot;ShadeFragment&quot;\n\
    version=&quot;1.0&quot;&gt;\n\
\n\
    &lt;description&gt;&lt;![CDATA[Brick procedural texture fragment]]&gt;&lt;/description&gt;\n\
\n\
    &lt;properties&gt;\n\
        &lt;float3 name=&quot;brickColor&quot; /&gt;\n\
        &lt;float3 name=&quot;jointColor&quot; /&gt;\n\
        &lt;float name=&quot;blurFactor&quot; /&gt;\n\
        &lt;float2 name=&quot;uvCoord&quot; semantic=&quot;mayaUvCoordSemantic&quot; flags=&quot;varyingInputParam&quot; /&gt;\n\
        &lt;float2 name=&quot;uvFilterSize&quot; /&gt;\n\
    &lt;/properties&gt;\n\
    &lt;values&gt;\n\
        &lt;float3 name=&quot;brickColor&quot; value=&quot;0.750000,0.300000,0.100000&quot; /&gt;\n\
        &lt;float3 name=&quot;jointColor&quot; value=&quot;0.750000,0.750000,0.750000&quot; /&gt;\n\
    &lt;/values&gt;\n\
    &lt;outputs&gt;\n\
        &lt;float3 name=&quot;outColor&quot; /&gt;\n\
    &lt;/outputs&gt;\n\
\n\
    &lt;implementation&gt;\n\
        &lt;implementation render=&quot;OGSRenderer&quot; language=&quot;Cg&quot; lang_version=&quot;2.1&quot;&gt;\n\
          &lt;function_name val=&quot;pluginBrickTexture&quot; /&gt;\n\
          &lt;source&gt;&lt;![CDATA[\n\
//\n\
// Helper function for implementing brick texture fragment\n\
//\n\
float btnplinearstep(float t, float a, float b)\n\
{\n\
    if (t &lt; a) return 0.0f;\n\
    if (t &gt; b) return 1.0f;\n\
    return (t - a)/(b - a);\n\
}\n\
\n\
//\n\
// Actual brick texture fragment code, corresponds to the function_name tag\n\
// in the implementation definition and signature matches input/output\n\
// parameter definitions of the fragment\n\
//\n\
float3 pluginBrickTexture(\n\
    float3 brickColor,\n\
    float3 jointColor,\n\
    float blurFactor,\n\
    float2 uv,\n\
    float2 uvFilterSize)\n\
{\n\
    uv -= floor(uv);  // map uv to 0-1 range\n\
    float v1 = 0.05f; float v2 = 0.45f; float v3 = 0.55f; float v4 = 0.95f;\n\
    float u1 = 0.05f; float u2 = 0.45f; float u3 = 0.55f; float u4 = 0.95f;\n\
    float du = blurFactor*uvFilterSize.x/2.0f;\n\
    float dv = blurFactor*uvFilterSize.y/2.0f;\n\
    float t = max(\n\
        min(btnplinearstep(uv.y, v1 - dv, v1 + dv) - btnplinearstep(uv.y, v2 - dv, v2 + dv),\n\
            max(btnplinearstep(uv.x, u3 - du, u3 + du), 1.0f - btnplinearstep(uv.x, u2 - du, u2 + du))),\n\
        min(btnplinearstep(uv.y, v3 - dv, v3 + dv) - btnplinearstep(uv.y, v4 - dv, v4 + dv),\n\
            btnplinearstep(uv.x, u1 - du, u1 + du) - btnplinearstep(uv.x, u4 - du, u4 + du)));\n\
    return t*brickColor + (1.0f - t)*jointColor;\n\
}\n\
                ]]&gt;&lt;/source&gt;\n\
        &lt;/implementation&gt;\n\
\n\
        &lt;implementation render=&quot;OGSRenderer&quot; language=&quot;HLSL&quot; lang_version=&quot;11.0&quot;&gt;\n\
            &lt;function_name val=&quot;pluginBrickTexture&quot; /&gt;\n\
            &lt;source&gt;&lt;![CDATA[\n\
//\n\
// Helper function for implementing brick texture fragment\n\
//\n\
float btnplinearstep(float t, float a, float b)\n\
{\n\
    if (t &lt; a) return 0.0f;\n\
    if (t &gt; b) return 1.0f;\n\
    return (t - a)/(b - a);\n\
}\n\
\n\
//\n\
// Actual brick texture fragment code, corresponds to the function_name tag\n\
// in the implementation definition and signature matches input/output\n\
// parameter definitions of the fragment\n\
//\n\
float3 pluginBrickTexture(\n\
    float3 brickColor,\n\
    float3 jointColor,\n\
    float blurFactor,\n\
    float2 uv,\n\
    float2 uvFilterSize)\n\
{\n\
    uv -= floor(uv);  // map uv to 0-1 range\n\
    float v1 = 0.05f; float v2 = 0.45f; float v3 = 0.55f; float v4 = 0.95f;\n\
    float u1 = 0.05f; float u2 = 0.45f; float u3 = 0.55f; float u4 = 0.95f;\n\
    float du = blurFactor*uvFilterSize.x/2.0f;\n\
    float dv = blurFactor*uvFilterSize.y/2.0f;\n\
    float t = max(\n\
        min(btnplinearstep(uv.y, v1 - dv, v1 + dv) - btnplinearstep(uv.y, v2 - dv, v2 + dv),\n\
            max(btnplinearstep(uv.x, u3 - du, u3 + du), 1.0f - btnplinearstep(uv.x, u2 - du, u2 + du))),\n\
        min(btnplinearstep(uv.y, v3 - dv, v3 + dv) - btnplinearstep(uv.y, v4 - dv, v4 + dv),\n\
            btnplinearstep(uv.x, u1 - du, u1 + du) - btnplinearstep(uv.x, u4 - du, u4 + du)));\n\
    return t*brickColor + (1.0f - t)*jointColor;\n\
}\n\
            ]]&gt;&lt;/source&gt;\n\
        &lt;/implementation&gt;\n\
\n\
    &lt;/implementation&gt;\n\
&lt;/fragment&gt;\n\
</pre></div><div class=\'section\'><a id=\"attribute-parameter-mappings\"></a><h2 id=\"attribute-parameter-mappings\">Attribute-Parameter Mappings</h2></div>\n\
<p>As previously mentioned, Maya combines the fragments for each node in a shading network and turns the overall fragment graph into a shading effect. The parameters of this effect come from the input parameters of all the fragments. In order to avoid name clashes when multiple fragments define parameters with the same name, Maya renames most parameters uniquely.</p>\n\
<p>In most cases, the values for the parameters on the shading effect are automatically driven by the attributes of the Maya nodes that were used to create the effect. This is done by matching the attributes on each Maya node to the parameters of the corresponding fragment. The name and type of the attributes must match the name and type of the parameters for this automatic relationship to be established. In the sample XML above, the input parameters (or properties) of the brick texture fragment have the same name and data type as the input attributes defined for the brickTexture plug-in node. Thus, Maya automatically sets the values for those parameters on the final shading effect using the values from the attributes on the brickTexture node. No further work is required by the shading node override.</p>\n\
<p>Plug-ins may also specify associations between attributes and parameters of the same type, but with different names, by implementing <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride::getCustomMappings()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#acf67b2108877bbb3c466067aa0e351b0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#aef88a1b1231f165be36c1e70b913498a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride::getCustomMappings()</a></span>. This method is called immediately after the fragment is created, but before the automatic mappings are done. No automatic mapping is performed for any parameter on the fragment that already has a custom mapping.</p>\n\
<p>Any attribute on the node that has no mapping to a parameter on the fragment is ignored. Similarly, any parameters on the fragment without a mapping to an attribute on the node is ignored (unless custom parameter setting is done by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride::updateShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#af45c45875cf1342536ef1aefd996ce89&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#afda5eda704a7c3d62246c3833102d98b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride::updateShader()</a></span>).</p>\n\
<p>All functionality is driven through these attribute parameter mappings. When Maya is traversing the shading network and building and connecting fragments, it only traverses connections where the input attribute on the node has a defined mapping (custom or automatic). Also, as fragments are combined for all the nodes in the Maya shading graph, their parameters are renamed in order to avoid collisions (allowing the same fragment type to be used multiple times in a graph). Only parameters with mappings are renamed; all others may suffer name collisions which produce unpredictable results.</p>\n\
<p>In addition to informing Maya of the relationship between attributes and parameters, custom mappings may be used to prevent Maya from trying to connect other fragments to a particular parameter; or, to prevent a parameter from being renamed (name collisions become the responsibility of the user). Custom mappings may also be used to tell Maya to rename a parameter to avoid name collisions but not to associate it with any attribute (set the attribute name of the mapping to an empty string). The values for such a parameter must be set manually by implementing <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride::updateShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#af45c45875cf1342536ef1aefd996ce89&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#afda5eda704a7c3d62246c3833102d98b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride::updateShader()</a></span>. This can be useful when a parameter is not directly driven by an attribute, but must be set with a computed value.</p>\n\
<div class=\'section\'><a id=\"output-parameters\"></a><h2 id=\"output-parameters\">Output parameters</h2></div>\n\
<p>Like input parameters, if the output parameters of the fragment specified by an override match the name and type of output attributes on the associated shading node, Maya automatically forms connections between the output of the fragment and the inputs of other fragments as required by the shading network. Any output attributes on the Maya node that do not have a corresponding output parameter on the fragment are ignored. Output parameters on the fragment which have no matching output attribute on the node are also ignored.</p>\n\
<p>Currently, the fragment system only supports one output parameter per fragment for normal shading fragments. To create a fragment with multiple outputs (to match multiple outputs on a Maya shading node), such a fragment must define its single output parameter as a “struct” output. A separate fragment must be created to define the struct type and the main fragment must be connected to this new struct definition fragment in a fragment graph. The graph can then be used by Maya and Maya automatically matches the names and types of the struct members to the output attributes of the shading node where required. See the <em>checkerShader</em> or <em>fileTexture</em> sample plug-ins for examples of how struct output fragments are created and used.</p>\n\
<p>Again, like input parameters, you can define custom mappings for the cases where the names of the output parameters on the fragment do not match the names of the output attributes on the node (as long as the types still match). Implement <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride::outputForConnection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#a59ea32aa355f063e348f78a6e42a0d84&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#af7445d9c09e48ba06fa0ddc322059633&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride::outputForConnection()</a></span> to handle custom output mappings.</p>\n\
<div class=\'section\'><a id=\"custom-parameter-update\"></a><h2 id=\"custom-parameter-update\">Custom Parameter Update</h2></div>\n\
<p>An implementation of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span>, which specifies a fragment to use along with optional custom attribute-parameter mappings, function well in the Viewport 2.0 shading system. The parameter values on the final effect are automatically set to the values of the attributes on the Maya node whenever the Maya node changes. However, if additional control is required, the implementation may also override the <span class=\'code\'>updateDG()</span> and <span class=\'code\'>updateShader()</span> methods. These two methods are called when Maya needs to update the parameter values on the final shader, and can be used to set the values of parameters on the final effect which do not map directly to attributes on the shading node.</p>\n\
<p>In <span class=\'code\'>updateDG()</span>, the override should query and cache any information it needs from the Maya dependency graph. It is an error to attempt to access the DG in <span class=\'code\'>updateShader()</span>, and doing so may result in instability.</p>\n\
<p>In <span class=\'code\'>updateShader()</span>, the override is given the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> of which the fragment it specified is a part. It is also given the full list of attribute-parameter mappings known to Maya for the node (both automatic and custom). Since most parameters are renamed from the original names on the fragment, the implementation must use the &quot;resolved&quot; name from the mappings to set values on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>. The implementation may set the value of any parameter on the shader instance; however, any parameter with a mapping that defines an attribute is set automatically. Only parameters without a mapping or with a mapping that has no attribute need to be handled. Although it is possible to set values on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> for parameters from other fragments in the Maya shading node graph, this behaviour is not recommended or supported. Such values may get overwritten and behaviour is unpredictable.</p>\n\
<p>See the developer kit samples <em>phongShader</em> and <em>fileTexture</em> for examples of custom parameter setting.</p>\n\
<div class=\'section\'><a id=\"varying-parameters-and-system-parameters\"></a><h2 id=\"varying-parameters-and-system-parameters\">Varying Parameters and System Parameters</h2></div>\n\
<p>In hardware shading terms, all fragment input parameters discussed so far are considered uniform parameters. It is also possible to access varying parameters in fragment code (that is, parameters which are driven by vertex data), as well as parameters with semantics the value of which are automatically populated by the rendering system (also called system parameters).</p>\n\
<p>In both cases, this is accomplished by specifying a “semantic” in addition to a name and type when defining the input parameter. In the case of varying parameters, you must also mark the parameter as varying. In the brick texture XML sample above, the “uvCoord” parameter is an example of a varying parameter. The semantic “mayaUvCoordSemantic” is a special semantic that, when used on parameters with the name “uvCoord”, causes Maya to ensure that the correct UV set is made available to the fragment (based on UV linking). The table below lists semantics that are recognized for varying parameters.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Meaning</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Pm\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
Object space position\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Pw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space position\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Pv\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
View space position\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Nm\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
Object space normal\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Nw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space normal\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
U0 - U7\n\
</td>\n\
<td class=\"table-body\">\n\
2-float or 3-float\n\
</td>\n\
<td class=\"table-body\">\n\
UV coordinates from 1 of 8 specific channels. It is preferable to use the “mayaUvCoordSemantic” semantic if UVs are needed, as Maya handles the allocation of UV channels among all fragments in the final shading effect so that there are no collisions.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
mayaUvCoordSemantic\n\
</td>\n\
<td class=\"table-body\">\n\
2-float or 3-float\n\
</td>\n\
<td class=\"table-body\">\n\
A non-specific UV channel. Maya ensures that the correct UV data is filled in based on UV linking in the Maya dependency graph. The name of the parameter must be set to “uvCoord”.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Tw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space tangent. It is preferable to use the “tangent” semantic if tangents are needed, as Maya handles allocating channels among all fragments in the final shading effect so that there are no collisions.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
tangent\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space tangent. Maya ensures that the correct tangent data is filled in based on UV linking in the Maya dependency graph. The name of the parameter must be set to “mayaTangentIn”.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Bw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space bitangent. It is preferable to use the “bitangent” semantic if bitangents are needed, as Maya handles the allocation of channels among all fragments in the final shading effect so that there are no collisions.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
bitangent\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space bitangent. Maya ensures that the correct bitangent data is filled in based on UV linking in the Maya dependency graph. The name of the parameter must be set to “mayaBitangentIn”.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Vw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space view vector\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
fcolor or C_4F\n\
</td>\n\
<td class=\"table-body\">\n\
4-float\n\
</td>\n\
<td class=\"table-body\">\n\
Vertex color. Supports 1 varying parameter in OpenGL mode.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
colorset\n\
</td>\n\
<td class=\"table-body\">\n\
4-float\n\
</td>\n\
<td class=\"table-body\">\n\
Vertex color. Supports more than 1 varying parameter in both OpenGL and DX11 mode.\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>The semantics for system parameters are detailed in <a href=\'#!/url=./dev_help/Viewport-2-0-API/Shader-semantics-supported-by.html\' title=\'\'>Semantics supported by Viewport 2.0 to be used with MShaderInstance</a>. These are often used to access active matrices like the current world-view-projection matrix. See the <em>depthShader</em> developer kit sample for an example of using system parameters.</p>\n\
<div class=\'section\'><a id=\"mpxsurfaceshadingnodeoverride\"></a><h2 id=\"mpxsurfaceshadingnodeoverride\">MPxSurfaceShadingNodeOverride</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> is an extension of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span>, specifically for surface shaders. Plug-in surface shader nodes that may be connected directly to a Maya shading engine should define an override which derives from this class instead of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> when providing support for Viewport 2.0.</p>\n\
<p>Like <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span>, implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> must be associated with specific types of shading nodes. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> implementations must be registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> using a classification string. Shading nodes with classification strings that satisfy the override classification are translated for Viewport 2.0 using the override. The classification string must begin with &quot;drawdb/shader/surface&quot; to be recognized by the system as a surface shading node.</p>\n\
<p>In addition to providing all the functionality of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> also lets the override specify attributes and parameters that are treated in unique ways specific to surface shaders.</p>\n\
<ul>\n\
<li><strong>Transparency</strong>: An override may specify the name of the float or 3-float parameter on the fragment used to drive the transparency of the final shading effect. Objects with transparent materials are rendered in a separate pass, and if specified, Maya watches the values and connections of this transparency parameter to ensure that objects using the shader are drawn in the correct pass.</li>\n\
<li><strong>Bump</strong>: An override may specify the name of an attribute on the node that accepts connections from Maya bump utility nodes (often this attribute is named “normalCamera”). Maya automatically creates a special mapping between the attribute and the 3-float parameter named “Nw” on the fragment (if it exists). The special mapping ensures that the extra fragments needed for bump mapping are attached before the final shading effect is created. The “Nw” input on the fragment then receives the perturbed normal if a bump node is connected to the attribute on the node.</li>\n\
<li><strong>Primary Color</strong>: The Maya viewport has two main “shaded” modes, one with textures and one without. When textures are disabled, the shading network translation process does not traverse the connections of any surface shader and therefore produces effects based on just the fragment for each surface shader. However, if a texture which defines an attribute named “defaultColor” is connected to the primary color channel of a surface shader, then Maya uses the value of that default color attribute to set the primary color on the surface shader when in non-textured mode. If an override specifies the parameter on the fragment that is to be considered the primary color, then the default color in non-textured mode behavior is maintained for the plug-in surface shading node.</li>\n\
</ul>\n\
<p>See the <em>lambertShader</em> sample plug-in in the developer kit for examples of the use of these special settings.</p>\n\
<p>Maya also treats <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> objects differently than <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> objects. In particular, Maya attempts to connect the shader fragments for lights to the fragment provided by the implementation of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span>. The following named input parameters on the fragment are recognized and have the specified Maya lighting parameters automatically connected to them.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Parameter name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Parameter type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Automatically connected value from lights</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Lw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space light direction vector for diffuse lighting\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
HLw and SLw\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
World space light direction vector for specular lighting\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
diffuseI\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
Diffuse irradiance for light\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
specularI\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
Specular irradiance for light\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
ambientIn\n\
</td>\n\
<td class=\"table-body\">\n\
3-float\n\
</td>\n\
<td class=\"table-body\">\n\
Total contribution from all ambient lights\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>When there are multiple lights in the scene, the contribution from the fragments that make up the final shading effect is computed once for each light and then the results are accumulated. Therefore, the parameters above all apply to the light that is currently being computed. Overrides should not define custom attribute-parameter mappings for the special light parameters. See the fragments and fragment graphs for the Maya Phong shader (mayaPhongSurface) for examples of how light information can be used (dump the fragment and fragment graph XML using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager</a></span>).</p>\n\
<p>Sample plug-ins from the developer kit which implement <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> include: <em>lambertShader</em>, <em>phongShader</em>, <em>depthShader</em>, and <em>onbShader</em>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";