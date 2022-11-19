var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Dependency node basic classes and functions</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Dependency node basic classes and functions</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"dependency-node-basic-classes-and-functions\"></a></div>\n\
<p>There are certain basic elements that depency nodes share. These include implementing core functions, declaring attributes, and handling data.</p>\n\
<div class=\'section\'><a id=\"basic-classes\"></a><h2 id=\"basic-classes\">Basic classes</h2></div>\n\
<p>All dependency node plug-ins need to use the following classes.</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"header\">\n\
<th align=\"left\">Class</th>\n\
<th align=\"left\">Purpose</th>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span></td>\n\
<td align=\"left\">Maya plug-in function set. This is always required when creating a plug-in</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span></td>\n\
<td align=\"left\">The base dependency node proxy class. Proxy classes for specific node types that derive from MPxNode are also included in the API. All dependency node plug-ins must extend a node proxy class.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>MTypeID</span></td>\n\
<td align=\"left\">Used to register the type ID of the dependency node. All dependency nodes must have a type ID. If your node will only ever be used internally to your organization, you can use any value from 0 to 0x7ffff. However, if you intend to distribute your node, you will need to register a node ID range from <a href=\'http://mayaid.autodesk.io/\' title=\'\' target=\'_blank\'>http://mayaid.autodesk.io/</a>.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a></span></td>\n\
<td align=\"left\">Uniquely identifies and references a point of connection defined by a specific node-attribute pair.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a></span></td>\n\
<td align=\"left\">Wrapper class for data blocks. A data block stores all of a node&#39;s data. All attribute data for a node is stored in the node&#39;s data block.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a></span></td>\n\
<td align=\"left\">Wrapper class for data handles. A data handle points to the data in the data block that corresponds to a specific plug.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span></td>\n\
<td align=\"left\">The base attribute function set. Function sets are available for specific types of attributes. These all inherit from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span>. If no class exists for the type of attribute you need, you can use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnGenericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnGenericAttribute</a></span>.</td>\n\
</tr>\n\
</table>\n\
<div class=\'section\'><a id=\"basic-functions-and-methods\"></a><h2 id=\"basic-functions-and-methods\">Basic functions and methods</h2></div>\n\
<p>All nodes need to implement <span class=\'code\'>creator()</span>, <span class=\'code\'>initialize()</span>, <span class=\'code\'>initializePlugin()</span>, and <span class=\'code\'>uninitializePlugin()</span> . Nodes that process data need to implement the <span class=\'code\'>compute()</span> method. These methods are all called by Maya at different times.</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"header\">\n\
<th align=\"left\">Function or method</th>\n\
<th align=\"left\">Description</th>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>initializePlugin()</span></td>\n\
<td align=\"left\">Called when a plug-in is loaded into Maya. Registers the plug-in. See <a href=\'#!/url=./dev_help/Maya-API-introduction/initialize-uninitialize.html\' title=\'\'>Plug-in entry points</a> for details.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>initialize()</span></td>\n\
<td align=\"left\">Initializes node attributes. Called when the node is registered.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>creator()</span></td>\n\
<td align=\"left\">Instantiates the node. Called each time a node is instantiated in the dependency graph.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>compute()</span></td>\n\
<td align=\"left\">Computes the value of output attributes and sets them in the node&#39;s data block. Called the first time the dependency node graph is run, and then whenever an output plug on the node is dirty and needs to be recomputed.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>uninitializePlugin()</span></td>\n\
<td align=\"left\">Called when a plug-in is unloaded from Maya. Deregisters the plug-in. See <a href=\'#!/url=./dev_help/Maya-API-introduction/initialize-uninitialize.html\' title=\'\'>Plug-in entry points</a> for details.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"></td>\n\
<td align=\"left\"></td>\n\
</tr>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";