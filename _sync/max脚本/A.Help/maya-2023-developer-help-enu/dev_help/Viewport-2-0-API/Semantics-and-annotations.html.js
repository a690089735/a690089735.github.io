var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"semantics-and-annotations-supported-by-the-dx11shader-and-glslshader-plug-ins-in-viewport-2.0\"></a></div>\n\
<p>If you are writing your own custom shader for use with the dx11Shader or glslShader plug-in in Viewport 2.0, the following are the supported semantics and annotations.</p>\n\
<div class=\'section\'><a id=\"supported-parameter-and-uniform-annotations\"></a><h2 id=\"supported-parameter-and-uniform-annotations\">Supported parameter and uniform annotations</h2></div>\n\
<p>The <span class=\'code\'>dx11ShaderNode</span> and <span class=\'code\'>GLSLShaderNode</span> classes look for the following annotations on parameters and uniforms (GLSL) and forward relevant information to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span> class at creation time:</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Although the OpenGL Shading Language (GLSL) does not support annotations, OGSFX does and they can be used for uniform, technique, and pass definitions.</p>\n\
</blockquote>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
UIOrder\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-878A06CF-0F2D-4DC4-BDAB-14CB3E0677F6\"></a>\n\
<p class=\"table-body\">\n\
Allows reordering of parameters in the <span id=\"GUID-24AA520C-7E97-425D-95EE-01A1A45D4C4D\" class=\"MenuCascade\">Attribute Editor</span>, especially useful since the parameter order returned by the compiler does not always follow the order of declaration in the FX file. The parameter with the smallest UIOrder is laid out at the top of the AE, and the other parameters are added following increasing UIOrder.\n\
</p>\n\
<a name=\"GUID-A2AA613E-75E2-495D-AFC9-49E87C8E8F7B\"></a>\n\
<p class=\"table-body\">\n\
If not set, the parameter is placed in the same order as it appears in the shader file, but after the parameters with a specified UIOrder.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
UVEditorOrder\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
Allows reordering of textures in the <span id=\"GUID-DB3A51A8-77D0-4491-B747-8FC024137386\" class=\"MenuCascade\">UV Texture Editor</span>. The texture parameter with the lowest UVEditorOrder appears first under the <span id=\"GUID-1E589FA2-C0EA-47BE-BD5F-20C5AF5DF833\" class=\"MenuCascade\">Textures</span> menu.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
UIGroup\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-AFABC873-F00B-4F84-BE95-50916F910C7F\"></a>\n\
<p class=\"table-body\">\n\
All parameters with the same UIGroup attribute are laid out in a separate collapsible panel, the label of which is the UIGroup value. The panels are inserted at the position of the group parameter with the lowest UIOrder.\n\
</p>\n\
<a name=\"GUID-DC06F4B4-9EDC-43DA-84D7-CE08D3E482D9\"></a>\n\
<p class=\"table-body\">\n\
If not set (or empty), the parameter is not placed in any named group.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Object\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-09EC80F7-E2FC-4EFC-893E-7EDFE9DF47FF\"></a>\n\
<p class=\"table-body\">\n\
Group different shader parameters as part of the same <span class=\"charspan-msgph\">Maya</span> object.\n\
</p>\n\
<a name=\"GUID-AA69AB90-49D7-4795-8753-769D5AAF4D8E\"></a>\n\
<p class=\"table-body\">\n\
This is commonly used to define all parameters for a light. At the <span id=\"GUID-BACB0939-C009-4815-9011-D60643AD8C2C\" class=\"MenuCascade\">Attribute Editor</span> parameter layout level, this acts exactly as a UIGroup annotation, except that the panel is collapsed by default. This is also used to determine the type of the light object when the object name contains &quot;Light&quot; (or &quot;Lamp&quot;) and &quot;Point&quot;, &quot;Spot&quot;, &quot;Ambient&quot; or &quot;Directional&quot;.\n\
</p>\n\
<a name=\"GUID-610FD737-E7A8-4CA9-BDF4-EF233B898483\"></a>\n\
<p class=\"table-body\">\n\
A drop-down menu is created for each distinct Object, allowing easy connections to existing Maya scene lights.\n\
</p>\n\
<a name=\"GUID-955B58F2-965A-4C59-9C87-CAFF8A65F2B8\"></a>\n\
<p class=\"table-body\">\n\
Example:\n\
</p>\n\
<pre><code>uniform lightColor : DIFFUSE\n\
&lt;\n\
    Object = \"Light0_Spot\";\n\
&gt;;\n\
uniform lightPosition : POSITION\n\
&lt;\n\
    Object = \"Light0_Spot;\n\
&gt;;</code></pre>\n\
<a name=\"GUID-F31FEAA0-0416-40B2-BA18-72079299D4E2\"></a>\n\
<p class=\"table-body\">\n\
lightColor and lightPosition will be bound to the attributes of the same light node, which will likely be a Spot Light.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
UIName\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
Allows renaming of a parameter in the UI (<span id=\"GUID-8D2AB087-6963-4990-9B0A-4B5F158940A4\" class=\"MenuCascade\">Attribute Editor</span>). By default, the variable name is shown.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-34DDD48B-325E-4A36-A8ED-6760A92269D5\"></a>\n\
<p class=\"table-body\">\n\
SasUiVisible\n\
</p>\n\
<a name=\"GUID-4FE704CE-8763-444F-818E-B65D1C70445D\"></a>\n\
<p class=\"table-body\">\n\
UIType\n\
</p>\n\
<a name=\"GUID-9BB6C7F2-EEB9-4E92-8E12-0D10DB09D743\"></a>\n\
<p class=\"table-body\">\n\
UIWidget\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-B624AFF2-F9E4-47FB-A0C3-978343D56968\"></a>\n\
<p class=\"table-body\">\n\
bool\n\
</p>\n\
<a name=\"GUID-79D704DB-864A-4DE6-923B-D3379AC61BEC\"></a>\n\
<p class=\"table-body\">\n\
string\n\
</p>\n\
<a name=\"GUID-0E817D65-5634-492F-A79C-334D769AA57B\"></a>\n\
<p class=\"table-body\">\n\
string\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-D254DDB8-7989-471D-A802-0FEC054AB94F\"></a>\n\
<p class=\"table-body\">\n\
Controls the visibility of the variable in the UI.\n\
</p>\n\
<a name=\"GUID-0620EA88-289C-42AB-8D27-D1164490B405\"></a>\n\
<p class=\"table-body\">\n\
For the two string annotations, a value of None hides the variable.\n\
</p>\n\
<a name=\"GUID-40791ED8-C38E-4A17-8681-0B2E6421611D\"></a>\n\
<p class=\"table-body\">\n\
Set UIType or UIWidget to ColorPicker to use the Color Chooser widget.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-2B666B0C-5C75-437E-AC11-94DC56A580A0\"></a>\n\
<p class=\"table-body\">\n\
SasUiMin\n\
</p>\n\
<a name=\"GUID-265E4435-B03D-4965-9300-BD333BEA89EA\"></a>\n\
<p class=\"table-body\">\n\
UIMin\n\
</p>\n\
<a name=\"GUID-2950B960-4B78-4B91-8429-8AE64F5D76BF\"></a>\n\
<p class=\"table-body\">\n\
uimin\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-3DF4571B-54FD-42F8-B39C-178C66C93F01\"></a>\n\
<p class=\"table-body\">\n\
float/int\n\
</p>\n\
<a name=\"GUID-8BE49526-A5A0-4A96-9427-A7EF48B8064C\"></a>\n\
<p class=\"table-body\">\n\
(same as Parameter)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-B4D338C5-2F51-4791-AC34-702CDA2F0555\"></a>\n\
<p class=\"table-body\">\n\
Minimum range value.\n\
</p>\n\
<a name=\"GUID-D9504FD7-C30D-474F-8DA2-3ADD1AEB0634\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::setRangeMin()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#a85e791f9ffcc0664e26d39249e9f3576&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::setRangeMin()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-54B14BAD-F478-4508-99D8-F975B346FFA9\"></a>\n\
<p class=\"table-body\">\n\
SasUiMax\n\
</p>\n\
<a name=\"GUID-225DCE3E-D5FF-48C7-BF47-E21202D321A1\"></a>\n\
<p class=\"table-body\">\n\
UIMax\n\
</p>\n\
<a name=\"GUID-9B06D2C7-71F2-4925-B92A-CECB6437B5BE\"></a>\n\
<p class=\"table-body\">\n\
uimax\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-46CBED11-9259-43FC-A861-F68CDA4C71CF\"></a>\n\
<p class=\"table-body\">\n\
float/int\n\
</p>\n\
<a name=\"GUID-1973A716-FF08-452C-901C-47DEEBA4AC1F\"></a>\n\
<p class=\"table-body\">\n\
(same as Parameter)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-47D0A382-4993-443F-ACA8-F5201440C6C5\"></a>\n\
<p class=\"table-body\">\n\
Maximum range value.\n\
</p>\n\
<a name=\"GUID-E5018FE6-54EB-4D35-B29B-6333266077BC\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::setRangeMax()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#aa5e8b1737ecebe3761c33ba56454849c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::setRangeMax()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-F18AFFA5-83E4-47DB-86B4-533485F1D74B\"></a>\n\
<p class=\"table-body\">\n\
UISoftMin\n\
</p>\n\
<a name=\"GUID-9FB97189-4F4E-4E76-A677-83B11F931D61\"></a>\n\
<p class=\"table-body\">\n\
uisoftmin\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-9907EA93-21A8-49EA-888B-31BEA420CA9A\"></a>\n\
<p class=\"table-body\">\n\
float/int\n\
</p>\n\
<a name=\"GUID-D8683C24-DC81-4B34-808B-E21CF1F1D15C\"></a>\n\
<p class=\"table-body\">\n\
(same as Parameter)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C3604365-D02C-4CE4-A86A-2788BE2FA325\"></a>\n\
<p class=\"table-body\">\n\
Minimum slider value for a range. Values smaller than UISoftMin (but larger than UIMin if specified) can be entered in the numeric input of the parameter.\n\
</p>\n\
<a name=\"GUID-4DC8F8A7-58F5-471B-AC2B-82E9538DEE75\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::setSoftRangeMin()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#a24b15b2c12f8543e8eb22486dbb128fc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::setSoftRangeMin()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-74037B49-D805-4726-A9AA-FBFFA3290F58\"></a>\n\
<p class=\"table-body\">\n\
UISoftMax\n\
</p>\n\
<a name=\"GUID-6AD84010-DE38-4ADE-8B45-1874E79B63FA\"></a>\n\
<p class=\"table-body\">\n\
uisoftmax\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-42345512-BF59-48E4-856C-B4BFFF67B8A6\"></a>\n\
<p class=\"table-body\">\n\
float/int\n\
</p>\n\
<a name=\"GUID-78A41326-857C-4431-AE7E-1038D1437833\"></a>\n\
<p class=\"table-body\">\n\
(same as Parameter)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-DCCB8B0D-6128-498C-BC6A-EBBC1E0CC393\"></a>\n\
<p class=\"table-body\">\n\
Maximum slider value for a range. Values greater than UISoftMax (but smaller than UIMax if specified) can be entered in the numeric input of the parameter.\n\
</p>\n\
<a name=\"GUID-A6AC9522-D499-4E07-8133-D281308395E1\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::setSoftRangeMax()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#a3a80ecb9a247236e7637cc5e91c3f68e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::setSoftRangeMax()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
UIFieldNames\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-6F037F83-E4B6-4DC5-B3AD-6A516A40BF1A\"></a>\n\
<p class=\"table-body\">\n\
Creates a drop-down menu for the int parameter using the strings found in the attribute value.\n\
</p>\n\
<a name=\"GUID-14B4EB3B-55C1-4270-A698-6B196B767F18\"></a>\n\
<p class=\"table-body\">\n\
The format is the same as the MEL command <span class=\'code\'>attributeQuery -listEnum</span>, which is a string of colon &quot;:&quot; delimited field names which can specify an index value separated by an equal sign &quot;=&quot;. The indexing starts at zero, and the index value of an item, when it is not explicitly specified, is the index of the previous item (if any) incremented by one.\n\
</p>\n\
<a name=\"GUID-2BCFEC99-7C83-4506-A60D-A38268977919\"></a>\n\
<p class=\"table-body\">\n\
Example: &quot;Shaded:Wireframe=8:Bounding Box&quot; defines 3 items with values 0, 8, and 9.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-BBD8628C-CF53-4404-9095-F1738A2DC67A\"></a>\n\
<p class=\"table-body\">\n\
ResourceName\n\
</p>\n\
<a name=\"GUID-D7B7CC96-4D5B-42D3-BF96-36C19913A105\"></a>\n\
<p class=\"table-body\">\n\
SasResourceAddress\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-60C270D4-B861-4B11-ABFE-D65C7E081288\"></a>\n\
<p class=\"table-body\">\n\
Default texture file name. The plug-in automatically loads and connects the texture when setting the effect.\n\
</p>\n\
<a name=\"GUID-7690FE31-D22A-49BA-B74C-98DED1F24058\"></a>\n\
<p class=\"table-body\">\n\
The path can be absolute or relative. If a relative path is defined, the plug-in first tries to search for the file in the same folder hierarchy as the current <span class=\"code\">ogsfx</span> file.\n\
</p>\n\
<a name=\"GUID-359B77D6-114D-4D0E-8CA8-53B515CA215F\"></a>\n\
<p class=\"table-body\">\n\
If the file is not found, then the plug-in searches for the file in the paths defined in <span class=\"code\">MHWRender::MTextureManager::imagePaths()</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-EB32A3F6-83AC-4BF0-A65D-D3A459A0930C\"></a>\n\
<p class=\"table-body\">\n\
TextureType\n\
</p>\n\
<a name=\"GUID-478DADA4-8A0F-4610-9459-0A2CD52CCD74\"></a>\n\
<p class=\"table-body\">\n\
ResourceType\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-571365FD-55CC-4000-BFFE-E79B2669B6DF\"></a>\n\
<p class=\"table-body\">\n\
If the variable is described as an under-specified texture instead of a texture[1D|2D|3D|Cube], then this annotation allows you to specify the texture type. Valid values are “1D”, “2D”, “3D”, and “Cube”.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Space\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-D7F05EB8-467F-49B1-97C8-15B6A99DBDD0\"></a>\n\
<p class=\"table-body\">\n\
Allows specifying of the default space for position and direction semantics. Valid values are “Object”, “World”, “View”, and “Camera”. Any other value is ignored and the semantic remains undefined.\n\
</p>\n\
<a name=\"GUID-B0607392-B361-40CB-85F2-9BF7162BF633\"></a>\n\
<p class=\"table-body\">\n\
&quot;Object&quot; corresponds to: semantic <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::kSemanticObjectPos\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#ae2d1a7ca98deaf6f6acd790af2e234efad6267c9673325fa9a63cfc0bb300a315&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::kSemanticObjectPos</a></span> or <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::kSemanticObjectDir\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#ae2d1a7ca98deaf6f6acd790af2e234efa09d1a594e9e76ff19ada1f447328882e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::kSemanticObjectDir</a></span>\n\
</p>\n\
<a name=\"GUID-049C33F3-A278-4392-A1A5-BE889B65B567\"></a>\n\
<p class=\"table-body\">\n\
&quot;World&quot; corresponds to: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::kSemanticWorldPos\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#ae2d1a7ca98deaf6f6acd790af2e234efa49972843e25838c681f26a4f75ca69c1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::kSemanticWorldPos</a></span> or <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::kSemanticWorldDir\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#ae2d1a7ca98deaf6f6acd790af2e234efad606c99fe89502591358e64f4f7a589b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::kSemanticWorldDir</a></span>\n\
</p>\n\
<a name=\"GUID-A7CBE853-45D0-4ABF-AC41-5C62F6C30445\"></a>\n\
<p class=\"table-body\">\n\
&quot;View&quot; or &quot;Camera&quot; corresponds to: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::kSemanticViewPos\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#ae2d1a7ca98deaf6f6acd790af2e234efa5f7f2dd48bf94ec26eba9f19290eb3ba&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::kSemanticViewPos</a></span> or <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter::kSemanticViewDir\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html#ae2d1a7ca98deaf6f6acd790af2e234efae5534556150af0c82c0bd935de2e5071&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter::kSemanticViewDir</a></span>\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"texture-specific-parameter-annotations\"></a><h2 id=\"texture-specific-parameter-annotations\">Texture specific parameter annotations</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
mipmaplevels\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-CE17D754-89BA-4482-959D-D9115BA42997\"></a>\n\
<p class=\"table-body\">\n\
The dx11Shader allows for you to control the number of mip-map levels that should be loaded or generated, either at the technique or texture description level.\n\
</p>\n\
<a name=\"GUID-2921F20F-E16F-42C2-B0D5-4140B8DC2C77\"></a>\n\
<p class=\"table-body\">\n\
Use this annotation with your texture description. The following values are valid.\n\
</p>\n\
<a name=\"UL_04422F0B10FB44F1B05481AC4E76B9B6\"></a>\n\
<ul>\n\
<li>\n\
<p>\n\
<a name=\"GUID-0CCA167A-0B0E-4A81-AABB-E34CC22A6FEE\"></a>&lt;val&gt; = 0: generates all mip map levels for affected textures. If there are any existing mip maps in the textures, then they will be loaded. This allows, for example, the loading of pre-calculated mip maps for DDS textures.\n\
</p>\n\
</li>\n\
<li>\n\
<p>\n\
<a name=\"GUID-93D5A316-3EB3-4439-8C15-DFD87C59C0BC\"></a>&lt;val&gt; = 1-10 : only generates mipmaps up to the specified level.\n\
</p>\n\
</li>\n\
</ul>\n\
<a name=\"GUID-FB3C50E5-544E-45B4-9079-756423ABFC63\"></a>\n\
<p class=\"table-body\">\n\
To reduce texture memory, the default value for the dx11Shader plug-in is set to 1, so that only the first mip map level (&lt;val&gt;=1) is loaded / computed.\n\
</p>\n\
<div>\n\
<a name=\"GUID-99D29C46-F9DA-489A-9D1D-BC3B827FE97A\"></a>\n\
<div class=\"note-note\">\n\
<span class=\"label label-target-language\">Note: </span>For the glslShader and shaderFX plug-ins, the default value is set to 0.</div></div>\n\
<a name=\"GUID-4CDDFAA9-D79B-4976-81E8-6DC49A1899D2\"></a>\n\
<p class=\"table-body\">\n\
It is also possible to enforce this on a per texture basis to explicitly reduce memory usage.\n\
</p>\n\
<a name=\"GUID-A0ED96F0-1507-435D-AC7B-26059D43BF8A\"></a>\n\
<p class=\"table-body\">\n\
Sample implementation as follows:\n\
</p>\n\
<pre><code>Texture2D DiffuseTexture\n\
&lt;\n\
    string UIName = \"Diffuse Map\";\n\
    string ResourceType = \"2D\";\n\
    int mipmaplevels = &lt;val&gt;; \n\
&gt;; </code></pre>\n\
<a name=\"GUID-88096979-8A6F-472E-B740-35EB76A68C77\"></a>\n\
<p class=\"table-body\">\n\
This value takes precedence over the value set for the technique annotation (texture_mipmaplevels). See <span class=\"char_link\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html#supported-technique-annotations\">Supported technique annotations</a></span>.\n\
</p>\n\
<a name=\"GUID-576930A5-1E03-4FF4-AB6A-7CB8A7DDDAFE\"></a>\n\
<p class=\"table-body\">\n\
See <span class=\"code\">AutodeskUberShader.fx</span> in the <span class=\"code\">presets\\HLSL11\\examples</span> folder of your Maya installation for example use of this annotation.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"supported-semantics\"></a><h2 id=\"supported-semantics\">Supported semantics</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Semantic</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Color\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-1648678A-92BC-4396-87AD-3F5615A18DC8\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-520E80D5-0183-452A-ABCE-D1E2828DF4B8\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Color parameter: use Color Chooser widget in the <span id=\"GUID-080CC115-4598-4BE1-9748-E5867790AAD2\" class=\"MenuCascade\">Attribute Editor</span>.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Ambient\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-2AE9167B-E56A-4472-BA5C-0A1D23EFA65E\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-F9853970-0A18-4900-831C-2DD6B6E22AEA\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Color parameter: use Color Chooser widget in the <span id=\"GUID-8290DBF6-AEEC-4E38-A453-6BDC543DACDB\" class=\"MenuCascade\">Attribute Editor</span>.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Specular\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C7C1399E-4EAE-45C5-BD6C-131100EFF52C\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-827807AF-9260-4CB3-A7A6-72A13BB50D3C\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Color parameter: use Color Chooser widget in the <span id=\"GUID-B28D6A02-39D6-43F9-A138-2DDBE94EFD18\" class=\"MenuCascade\">Attribute Editor</span>.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Diffuse\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-91F5D2FA-EB11-4476-A373-E5670BBCFADE\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-45BC762A-A1D1-4079-93E0-EEC74DB6D9B6\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Color parameter: use Color Chooser widget in the <span id=\"GUID-4D965A88-CE4C-41FB-AAF0-BA7E0C6A366C\" class=\"MenuCascade\">Attribute Editor</span>.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
TranspDepthTexture\n\
</td>\n\
<td class=\"table-body\">\n\
texture\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-14318129-97A0-42AB-AFFE-5A6D26CA3B19\"></a>\n\
<p class=\"table-body\">\n\
Texture used by the Depth Peeling and Weighted Average transparency algorithms.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
OpaqueDepthTexture\n\
</td>\n\
<td class=\"table-body\">\n\
texture\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-7C029827-66B9-4279-BB71-2B3D4634638E\"></a>\n\
<p class=\"table-body\">\n\
Texture used by the Depth Peeling and Weighted Average transparency algorithms.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"light-specific-semantics\"></a><h2 id=\"light-specific-semantics\">Light specific semantics</h2></div>\n\
<p>In addition to all the semantics currently supported by the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span> class, the <span class=\'code\'>dx11ShaderNode</span> and <span class=\'code\'>GLSLShaderNode</span> add extra light specific semantics to bind the properties of a scene light to shader parameters. When a light is driven by Maya, the values of all supported parameters are written using light information from the draw context. Unsupported parameters are left at the value found in the shader. This means that connecting a point light drives the position parameter, but not the direction.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"20%\" />\n\
<col width=\"20%\" />\n\
<col width=\"20%\" />\n\
<col width=\"40%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Semantic</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Maya light parameter</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-EE1E2249-4319-4A13-875D-8967D4E14D08\"></a>\n\
<p class=\"table-body\">\n\
LightColor, Color,\n\
</p>\n\
<a name=\"GUID-C2F8B209-E01F-4EA6-A261-6418760D868E\"></a>\n\
<p class=\"table-body\">\n\
LightDiffuseColor, Diffuse,\n\
</p>\n\
<a name=\"GUID-52F03B15-CCA1-4031-83D3-5EC1D3BD43DE\"></a>\n\
<p class=\"table-body\">\n\
LightAmbientColor, Ambient,\n\
</p>\n\
<a name=\"GUID-7BC9A38F-92F8-45D1-A75B-4D169F6B7E8A\"></a>\n\
<p class=\"table-body\">\n\
LightSpecularColor, Specular\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-B7A91216-0134-457B-A3D4-9C96D069666D\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-C9C06EB0-C2A0-42F9-A95B-060C4E7C0755\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Color\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C23CFF1D-173B-4C88-BA44-91264AE516C6\"></a>\n\
<p class=\"table-body\">\n\
Color parameter: use Color Chooser widget in the <span id=\"GUID-F9129ED2-69BA-4EF3-A903-9D05C7F56BE1\" class=\"MenuCascade\">Attribute Editor</span>.\n\
</p>\n\
<a name=\"GUID-9A7E1448-9731-4E11-88CA-A92D05BFC3C2\"></a>\n\
<p class=\"table-body\">\n\
Values are not premultiplied by the light intensity.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
LightIntensity\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Intensity\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
LightEnable\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Illuminate by default\n\
</td>\n\
<td class=\"table-body\">\n\
Follows the visibility of the light, including global light settings. When true, the Maya light is active and visible.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
LightType\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
Type\n\
</td>\n\
<td class=\"table-body\">\n\
Allows writing of generic lighting code that can react correctly when connected to any light type. Valid values are:<a name=\"GUID-469F6032-F70C-4775-9C0B-B38C570109B6\"></a>\n\
<p class=\"table-body\">\n\
2- Spot\n\
</p>\n\
<a name=\"GUID-244D2948-0B28-4CB2-AED9-25C32A789C24\"></a>\n\
<p class=\"table-body\">\n\
3- Point\n\
</p>\n\
<a name=\"GUID-503AAAAB-25FC-4374-9AE9-09569FAA9893\"></a>\n\
<p class=\"table-body\">\n\
4- Directional\n\
</p>\n\
<a name=\"GUID-54F430E4-6A5D-4EC8-818E-B1DEB9AD08D4\"></a>\n\
<p class=\"table-body\">\n\
5- Ambient\n\
</p>\n\
<a name=\"GUID-BBE0F2B6-694A-46DC-9A31-9CAD2B562F7F\"></a>\n\
<p class=\"table-body\">\n\
6- Volume\n\
</p>\n\
<a name=\"GUID-3FCEA5A9-BF32-49C7-A66E-571EDACE2B5A\"></a>\n\
<p class=\"table-body\">\n\
7- Area\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Position\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C660C474-E708-4808-8C87-F97C6FBE1A37\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-21929040-2FCC-480F-BDC4-E4414D858834\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
Position for point, spot, area and volume lights.<a name=\"GUID-BD8C16E9-74DA-481D-A0ED-457689DD6C94\"></a>\n\
<p class=\"table-body\">\n\
For area lights, the Position is the center of the area light.\n\
</p>\n\
<a name=\"GUID-6D610E7C-649D-4818-B067-88D13CB4774F\"></a>\n\
<p class=\"table-body\">\n\
Reference space can be specified with an annotation.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Direction\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-539932EA-FA38-46D5-B45D-A01D814F663E\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-68B1C3F5-3546-4F6B-8AB6-C2F42F11AD86\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
Direction for directional and spot lights. Reference space can be specified with an annotation.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
AreaPosition0-3\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-2779069F-4D18-41A3-9CE0-A6B034079F52\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-19DA8A2A-1B53-4379-B635-96583FE79089\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-64179B67-EDC4-497F-82A6-6D838F6940DF\"></a>\n\
<p class=\"table-body\">\n\
Position for the four corners of an area light.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Hotspot\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Cone Angle/ Penumbra Angle\n\
</td>\n\
<td class=\"table-body\">\n\
For spot lights, half angle, in radians. The Hotspot is computed as the minimum of ConeAngle and (ConeAngle+PenumbraAngle).\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-858D09A7-C7E9-407D-8753-BD67B6688551\"></a>\n\
<p class=\"table-body\">\n\
LightFalloff\n\
</p>\n\
<a name=\"GUID-9562CB4A-88BB-40D0-891C-9F1FB403D309\"></a>\n\
<p class=\"table-body\">\n\
Falloff\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Cone Angle/ Penumbra Angle\n\
</td>\n\
<td class=\"table-body\">\n\
For spot lights, half angle, in radians. The Falloff is computed as the maximum of ConeAngle and (ConeAngle+PenumbraAngle).\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
DecayRate\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Decay Rate\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-9E824E94-D646-4453-B26B-3948F5709E11\"></a>\n\
<p class=\"table-body\">\n\
For spot, point, area, and volume lights, expressed as an exponent.\n\
</p>\n\
Maya provides the following values:<a name=\"GUID-E91ABEFC-0330-47AD-8669-567D523FCB90\"></a>\n\
<p class=\"table-body\">\n\
0.0 – No Decay\n\
</p>\n\
<a name=\"GUID-26A2BDAC-E9B8-492E-BE9B-112EEBE1A056\"></a>\n\
<p class=\"table-body\">\n\
1.0 – Linear\n\
</p>\n\
<a name=\"GUID-9EDA8464-3887-4BD2-92C1-80D3639D5F2F\"></a>\n\
<p class=\"table-body\">\n\
2.0 – Quadratic\n\
</p>\n\
<a name=\"GUID-EB70B845-2634-4D77-B423-CB7BF832A766\"></a>\n\
<p class=\"table-body\">\n\
3.0 – Cubic\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ShadowFlag\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Various\n\
</td>\n\
<td class=\"table-body\">\n\
When true, the light casts a shadow that the surface can receive. This value is true only when global <em class=\"mild\">Shadows</em> are enabled, the light <em class=\"mild\">Use Depth Map Shadows</em> is on, and the surface <em class=\"mild\">Receive Shadows</em> is on.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ShadowColor\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-323E94C3-9CA2-4A41-AA71-F923659F4BAB\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-7237935D-CC81-48FB-8228-C90922266B74\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Shadow Color\n\
</td>\n\
<td class=\"table-body\">\n\
Color parameter: use Color Chooser widget in the <span id=\"GUID-18E87145-5E0F-48FF-98C3-CFAE83DE4BC3\" class=\"MenuCascade\">Attribute Editor</span>.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ShadowMap\n\
</td>\n\
<td class=\"table-body\">\n\
Texture2D\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
Contains the depth map shadow texture as computed by Maya.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ShadowMapBias\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
dmapBias\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-262717FC-DD7E-47E0-A962-427F5996663B\"></a>\n\
<p class=\"table-body\">\n\
ShadowMapMatrix\n\
</p>\n\
<a name=\"GUID-A922A473-44EF-4A51-A1E1-EAEB78BBA8CA\"></a>\n\
<p class=\"table-body\">\n\
ShadowMapXForm\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-FA2AC6D1-5D47-4620-A533-B0B54293592E\"></a>\n\
<p class=\"table-body\">\n\
float4x4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-1D252384-F97F-4F4A-A7C9-3CB197C0833B\"></a>\n\
<p class=\"table-body\">\n\
mat4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
View transformation matrix of the light\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"varying-attributes-for-vertex-streams\"></a><h2 id=\"varying-attributes-for-vertex-streams\">Varying attributes for vertex streams</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Semantic\n\
</td>\n\
<td class=\"table-body\">\n\
Type\n\
</td>\n\
<td class=\"table-body\">\n\
Description\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
POSITION\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-7895AA0E-581F-44C5-A1CC-67AB8664E5DE\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-BFB1466E-95B7-4915-B3C4-EE4947FD712B\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-0B0A444D-85C0-4F72-B9FD-467A7DEDA610\"></a>\n\
<p class=\"table-body\">\n\
Instructs <span class=\"charspan-msgph\">Maya</span> to bind this attribute to the vertex buffer that contains the positions\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
NORMAL\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-92A3E93D-2500-417F-AE29-88284596DCD0\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-B66CFA5A-3489-4DD2-9A57-E23BDD862D83\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-E3FA28E4-602C-4D74-ADF3-1B2330A6D744\"></a>\n\
<p class=\"table-body\">\n\
Instructs <span class=\"charspan-msgph\">Maya</span> to bind this attribute to the normal vertex buffer.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
TANGENT\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-68F853CA-7600-4506-B48F-84FF5EDEAE74\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-5B20C709-67D1-46D7-9E61-91A3E1A365D6\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-9475F522-DB18-4DA5-8A7A-AA8121C1468A\"></a>\n\
<p class=\"table-body\">\n\
Instructs <span class=\"charspan-msgph\">Maya</span> to bind this attribute to the tangent vertex buffer.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
BINORMAL\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-07CEADDB-0E35-4D74-8689-F01EA19B6A86\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-62773DD8-C093-4C3A-B9C3-83D87255B508\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-25783DD1-1938-43D4-AF7D-DDB5790F0C66\"></a>\n\
<p class=\"table-body\">\n\
Instructs <span class=\"charspan-msgph\">Maya</span> to bind this attribute to the binormal (or bitangent) vertex buffer.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
COLOR0\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-B497A0A8-B02D-4328-A0D4-FD163F230AB8\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-30FD1613-3B17-415C-9F1B-AAAABECCEA08\"></a>\n\
<p class=\"table-body\">\n\
vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-574FFD1B-6978-4BD3-A87B-6E47648A2B1F\"></a>\n\
<p class=\"table-body\">\n\
Instructs <span class=\"charspan-msgph\">Maya</span> to bind this attribute to the color set vertex buffer.\n\
</p>\n\
<div>\n\
<a name=\"GUID-136C9C60-D7DD-41E1-A6D7-0686EA4C8C96\"></a>\n\
<div class=\"note-note\">\n\
<span class=\"label label-target-language\">Note: </span>\n\
<p>\n\
<a name=\"GUID-20FF2756-BA76-493E-9FB1-F293F343D5E9\"></a>For glslShader only:\n\
</p>\n\
<p>\n\
<a name=\"GUID-74366513-9CA2-4E9D-8093-34784111B6D7\"></a>Currently, there is only 1 stream available.\n\
</p>\n\
<p>\n\
<a name=\"GUID-5B655A49-8BB5-4581-96EA-5FB4F1C93AD4\"></a>While OGSFX is limited to only one color stream defined by the COLOR0 semantic, it is still possible to define more than one color stream by using the TEXCOORDx semantic.\n\
</p>\n\
<p>\n\
<a name=\"GUID-31A1101D-21D1-4331-A32B-4E3193042F27\"></a>An attribute using the TEXCOORDx semantic that is of a vec3 or vec4 type can be used to convey a color stream to the shader, and an attribute using the TEXCOORDx semantic that is of vec2 type used to convey a UV coordinate stream.\n\
</p></div></div>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
TEXCOORD0-7\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-F5F1C525-2700-42B7-9DAA-F6ECEA107F13\"></a>\n\
<p class=\"table-body\">\n\
float3/4 (dx11Shader)\n\
</p>\n\
<a name=\"GUID-63ED25AB-984D-4123-8891-BED33431E22C\"></a>\n\
<p class=\"table-body\">\n\
vec 2 or vec3/4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-28D1E28C-BC28-4168-B7D1-2C3E3F8EFDF0\"></a>\n\
<p class=\"table-body\">\n\
Instructs <span class=\"charspan-msgph\">Maya</span> to bind this attribute to the UV set vertex buffer.\n\
</p>\n\
<a name=\"GUID-7B148165-1FF5-412A-9299-BFBF57FED8CA\"></a>\n\
<p class=\"table-body\">\n\
Currently, there are 8 streams available.\n\
</p>\n\
<div>\n\
<a name=\"GUID-A8F0906E-F535-4730-9521-534A98A75B31\"></a>\n\
<div class=\"note-note\">\n\
<span class=\"label label-target-language\">Note: </span>\n\
<p>\n\
<a name=\"GUID-404A9568-60C3-4676-8708-B9A6A11EDCDF\"></a>For glslShader only:\n\
</p>\n\
<p>\n\
<a name=\"GUID-BD1121AF-D682-4AF6-BA27-F10CA52391DF\"></a>While OGSFX is limited to only one color stream defined by the COLOR0 semantic, it is still possible to define more than one color stream by using the TEXCOORDx semantic.\n\
</p>\n\
<p>\n\
<a name=\"GUID-3451AACB-7BBF-44CB-84A8-94F49CA3C135\"></a>An attribute using the TEXCOORDx semantic that is of a vec3 or vec4 type can be used to convey a color stream to the shader, and an attribute using the TEXCOORDx semantic that is of vec2 type can be used to convey a UV coordinate stream.\n\
</p></div></div>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p><a href=\'#!/url=./dev_help/Viewport-2-0-API/Part-Two-Of-Semantics-and-annotations.html\' title=\'\'>Continues in Part 2 of this section.</a></p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";