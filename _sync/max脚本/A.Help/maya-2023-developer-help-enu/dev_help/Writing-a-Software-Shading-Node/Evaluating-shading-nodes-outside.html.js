var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Evaluating shading nodes outside of the rendering context</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Evaluating shading nodes outside of the rendering context</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"evaluating-shading-nodes-outside-of-the-rendering-context\"></a></div>\n\
<p>Shading nodes can request rendering information regarding the current sample position through pre-defined attributes (See Appendix C: Rendering attributes for a complete list of rendering specific attributes and their corresponding names). However, these pre-defined attributes are not supplied in a non-rendering context. Evaluation of shading nodes outside of the rendering context is supported using the call <span class=\'code\'>MRenderUtil::sampleShadingNetwork</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> <a href=\"javascript:void(0)\" data-symbol=\"MRenderUtil::sampleShadingNetwork\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_render_util.html#a6b9ba1907baa091db043c29581c963fe&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderUtil::sampleShadingNetwork</a>(\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> shadingNodeName,\n\
    long numSamples,\n\
    bool useShadowMaps,\n\
    bool reuseMaps,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatPointArray</a> *points, // sample points in world\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatArray</a> *uCoords,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatArray</a> *vCoords,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVectorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVectorArray</a> *normals, // normals in world\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatPointArray</a> *refPoints, // refPoints in world\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVectorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVectorArray</a> *tangentUs,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVectorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVectorArray</a> *tangentVs,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatArray</a> *filterSizes,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVectorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVectorArray</a> &amp;resultColors,\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVectorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVectorArray</a> &amp;resultTransparencies\n\
);\n\
\n\
</pre></div><p>You provide lists of sample points, normals, UVs, etc., and the function will return lists of colors and transparencies calculated based on the supplied sample data.</p>\n\
<p>Shadow calculation can also be done by forcing a test rendering to generate shadow maps before samples are taken.</p>\n\
<p>An example plug-in, sampleCmd.cpp, has been provided. This command takes a particle object and a shading node/shading engine name as input, and creates particles which have the color assigned based on the sampling result.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";