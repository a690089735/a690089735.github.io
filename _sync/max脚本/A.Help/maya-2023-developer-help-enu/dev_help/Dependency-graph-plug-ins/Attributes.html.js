var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Attributes</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Attributes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"attributes\"></a></div>\n\
<p>A node&#39;s attributes define the data used by the node. A node should not use any data that is not defined by its attributes.</p>\n\
<p>Attribute names must be unique across the entire node hierarchy. This means that they must be unique across all of a node&#39;s derived and parent classes. However, the same attribute name can be reused between unrelated nodes.</p>\n\
<p>When you define an attribute, you must define the type and name of the attribute. Several function sets are available for different types of attributes. These all inherit from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span>. If no class exists for the type of attribute you need, you can use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnGenericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnGenericAttribute</a></span>.</p>\n\
<p>Attributes are created, configured, and added to a node in <a href=\'#!/url=./dev_help/Dependency-graph-plug-ins/DependencyNodeBasics.html\' title=\'\'>the node&#39;s <span class=\'code\'>initialize()</span> function</a>.</p>\n\
<p>You will need to declare an attribute function set for each type of attribute your node uses. Always use the attribute function set that corresponds to the type of data the attribute will be handling.</p>\n\
<p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> numericAttr;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a> typedAttr;\n\
</pre></div><p>Each attribute function set can be used to create multiple attributes. This means that you do not have to declare an attribute function set for each attribute. You only need to declare an attribute function set for each attribute type.</p>\n\
<p>All of an attribute&#39;s characteristics must be set before the next attribute can be created.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">output = nAttr.create(&quot;output&quot;, &quot;out&quot;, <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kFloat</a>, 0.0);\n\
nAttr.setWritable(false);\n\
nAttr.setReadable(true);\n\
nAttr.setStorable(false);\n\
\n\
input1 = nAttr.create(&quot;input1&quot;, &quot;in1&quot;, <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kFloat</a>, 0.0);\n\
nAttr.setStorable(false);\n\
nAttr.setWritable(true);\n\
nAttr.setReadable(false);\n\
\n\
input2 = nAttr.create(&quot;input2&quot;, &quot;in2&quot;, <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kInt\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9bb31be73c01d40428195449f62588ac&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kInt</a>, 2);\n\
nAttr.setStorable(false);\n\
nAttr.setWritable(true);\n\
nAttr.setReadable(false);\n\
</pre></div><p>The attribute&#39;s characteristics specify how it will be used. <span class=\'code\'>setWritable()</span>, <span class=\'code\'>setReadable()</span>, and <span class=\'code\'>setStorable()</span> are used to set characterists that determine whether the attribute is an input attribute, an output attribute, or if the attribute&#39;s value is retained between runs of the graph.</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>setReadable()</span></td>\n\
<td align=\"left\">When set to true, the attribute is an output attribute. Its value can read by nodes connected to it. Attributes are readable by default. Input nodes should have <span class=\'code\'>setReadable(false)</span>.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>setWritable()</span></td>\n\
<td align=\"left\">When set to true, the attribute is an input attribute. A node connected to this attribute can write a value to it. Attributes are writeable by default. Output nodes should have <span class=\'code\'>setWriteable(false)</span>.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>setStorable()</span></td>\n\
<td align=\"left\">When set to false, the attribute&#39;s value will not be retained between runs of the graph. Attributes are storable by default.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"></td>\n\
<td align=\"left\"></td>\n\
</tr>\n\
</table>\n\
<p>For a complete list of attribute characteristics, see the documentation for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span>.</p>\n\
<p>Use <span class=\'code\'>attributeAffects()</span> to set dependency relationships between attributes. This information is used to create <a href=\'#!/url=./dev_help/Dependency-graph-plug-ins/DirtyPropagation.html\' title=\'\'>Evaluation Graphs</a>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">attributeAffects(input1, output);\n\
attributeAffects(input2, output);\n\
</pre></div><p>Finally, add your attributes to your node using the <span class=\'code\'>addAttribute()</span> function.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">addAttribute(input1);\n\
addAttribute(input2);\n\
addAttribute(output);\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";