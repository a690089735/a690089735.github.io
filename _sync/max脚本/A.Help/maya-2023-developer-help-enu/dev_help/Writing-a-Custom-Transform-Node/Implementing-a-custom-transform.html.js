var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Implementing a custom transform</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Implementing a custom transform</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"implementing-a-custom-transform\"></a></div>\n\
<p>When implementing a custom transform, you need to build the transform, configure its attributes, and so on.</p>\n\
<div class=\'section\'><a id=\"simple-versus-complex-custom-transform\"></a><h2 id=\"simple-versus-complex-custom-transform\">Simple versus complex custom transform</h2></div>\n\
<p>Transforms have input and output attributes that are used to process and store the transformation information. The simplest type of custom transform is one that does not introduce any new attributes that can affect the transformation matrix. For example, the transform may limit the <span class=\'code\'>translate</span> attribute to a certain world space volume using a predetermined calculation.</p>\n\
<p>A more complex custom transform is one that introduces one or more attributes that affects the transformation matrix. For example, the transform may introduce a new type of rotation parameter that is taken and integrated into the final calculation of the transformation matrix. In this case, there are two types of rotation that the custom transform understands and the original rotation attribute (supplied by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform</a></span>) is left untouched in the calculations of the new rotation.</p>\n\
<div class=\'section\'><a id=\"world-space-attributes\"></a><h2 id=\"world-space-attributes\">World space attributes</h2></div>\n\
<p>Instancing an object saves system memory, and is useful to display an object multiple times while maintaining its exact properties. However, instancing an object opens up some interesting coding challenges since there are multiple paths to the same object. Maya handles this situation with array attributes that are classified as world space. An array is necessary for handling multiple paths.</p>\n\
<p>A world space attribute is one that is dependent on the transformations of an object&#39;s parent(s) in addition to its own transformation. Marking an attribute as world space will cause the attribute to be recalculated (if it is requested) if one of its parents is transformed. World space attributes are arrays that handle the instancing scenario described above. An example of a world space attribute is <span class=\'code\'>worldMatrix</span>. Configuring an attribute as an array and making it world space is done in the <span class=\'code\'>initialize()</span> method of the custom transform node with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span> class.</p>\n\
<p>Given that world space attributes are arrays, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArrayDataBuilder\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_array_data_builder.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_array_data_builder.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArrayDataBuilder</a></span> class can be used to create the information that will be placed in the attribute. It would then be necessary to configure the attribute with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute::setUsesArrayDataBuilder()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html#a08fb5fd3764795485a0d799616646ef1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute::setUsesArrayDataBuilder()</a></span> in the <span class=\'code\'>initialize()</span> method.</p>\n\
<div class=\'section\'><a id=\"affects-world-space-attribute\"></a><h2 id=\"affects-world-space-attribute\">Affects world space attribute</h2></div>\n\
<p>An attribute marked as <em>affects world space</em> causes world space attributes to be recalculated (if world space is being requested) on the given node and the children DAGs of the node. There is no array requirement for this type of attribute. An example of an affects world space attribute is the <span class=\'code\'>translate</span> attribute that is found on DAG nodes. Setting an attribute as world space is done in the <span class=\'code\'>initialize()</span> method of the custom transform node with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span> class.</p>\n\
<div class=\'section\'><a id=\"transform-limits\"></a><h2 id=\"transform-limits\">Transform Limits</h2></div>\n\
<p>There are special attributes on the transform (and custom transform) node that are used for clamping values of associated attributes. Transform limits are available for <span class=\'code\'>translate</span>, <span class=\'code\'>rotate</span> and <span class=\'code\'>scale</span>. Each operation includes three additional attributes: enabled, minimum and maximum. Custom transforms modifying these attributes can implement a node that restricts <span class=\'code\'>translate</span>, <span class=\'code\'>rotate</span> and <span class=\'code\'>scale</span> to parts of world space. This is a simple implementation of a custom transform. A more complex version of this custom transform can change the minimum and maximum based on an external attribute input such as distance to another object.</p>\n\
<div class=\'section\'><a id=\"balancing-a-transform\"></a><h2 id=\"balancing-a-transform\">Balancing a transform</h2></div>\n\
<p>In the Maya implementation of a transform node, it is possible to keep the transformation matrix the same while modifying the pivots (rotate and scale) and rotation order. This is referred to as <em>balancing the transform</em>. Balance is a parameter that is included in methods related to modifying pivot and rotation order information. The virtuals provided for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a></span> will handle balancing correctly if the custom transform does not attempt to change the standard way that Maya handles pivots.</p>\n\
<div class=\'section\'><a id=\"validating-and-setting\"></a><h2 id=\"validating-and-setting\">Validating and setting</h2></div>\n\
<p>Maya uses a standard <em>validate and set</em> mechanism for updating the attribute values of custom transforms. You are required to use this mechanism for any attributes that affect the matrix. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::mustCallValidateAndSet()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#a0533b06e6c41eed320612ce1aae241f9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform::mustCallValidateAndSet()</a></span> must be called in the <span class=\'code\'>initialize()</span> method for all attributes that affect the matrix of the transform. It ensures that the matrix is properly calculated when the attribute is explicitly set and that the <span class=\'code\'>MPxTransform::validateAndSet()</span> method is called for this attribute.</p>\n\
<div class=\'section\'><a id=\"returning-the-matrix\"></a><h2 id=\"returning-the-matrix\">Returning the matrix</h2></div>\n\
<p>As a part of the DG updating process, Maya will ask a custom transform for its transformation matrix. This request goes directly to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::getMatrix()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#a633bf92abbd8dfbe9701f7b0e352a7c5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform::getMatrix()</a></span> call. This virtual method in turn calls <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix::asMatrix()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html#a8e2933c5f73e8cfb7409366582caa596&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix::asMatrix()</a></span>. It is very important to implement these two methods so that the custom transform will be returned to Maya.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";