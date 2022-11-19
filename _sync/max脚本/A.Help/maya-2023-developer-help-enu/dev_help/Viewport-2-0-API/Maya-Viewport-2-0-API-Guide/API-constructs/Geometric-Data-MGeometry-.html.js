var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometric Data (MGeometry)</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Geometric Data (MGeometry)</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"geometric-data-mgeometry\"></a></div>\n\
<p>A collection of geometric data is represented by the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span>.</p>\n\
<p>An instance of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> describes in a non-draw API specific manner a set of available <strong>data streams</strong> and any <strong>indexing</strong> for those streams. There can be one or more associated data streams and either zero or more sets of indexing.</p>\n\
<p>Each item for a data stream represents a vertex (point) attribute and data streams are called <strong>vertex buffers</strong>. Indexing data, if applicable, provides the topological (connectivity) information to represent geometric primitives.</p>\n\
<p>A simple example of a set of data held by an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> instance is a set data streams for position, normal and color data, as required by a shader. A single set of indices could describe the set of connected triangle primitives.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f4be0.jpg\' title=\'\' /></div>\n\
<p>Figure 18: Each item in the index list defines a data offset into a position (P), normal (N) and color (C) vertex buffer. Three indices are used per triangle.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> can hold the data and indexing required for rendering many shaders. There can thus be a complex set of data and indexing combinations depending on the requirements of a given shader.</p>\n\
<p>In the previous example where an object (torus) required geometry for filled shading, wireframe draw and control point draw: the total set of data streams required are two position streams, one normal stream, one tangent stream, one bitangent stream and one color stream. Three indexing streams are also required – one for each render item.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
  <img src=\"dev_help/images/aa0f4c3d.jpg\" />\n\
</td>\n\
<td class=\"table-body\">\n\
  <img src=\"dev_help/images/aa0f4c57.jpg\" />\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Figure 19</p>\n\
<p>In this example there is one <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> instance with P1 and P2 as positions; N, T, B as normal, tangent and bitan­gent; and C as a color stream. I1 is the indexing that describes the connected wireframe line segments, I2 the index­ing that describes the triangle mesh for filled drawing and I3 the indexing for the control vertex points. Note in this scenario that P1 is reused for both wire and shaded drawing.</p>\n\
<div class=\'section\'><a id=\"vertex-buffers-and-gpu-data\"></a><h2 id=\"vertex-buffers-and-gpu-data\">Vertex Buffers and GPU Data</h2></div>\n\
<p>A vertex buffer is represented in the API by the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span>. Logically it is just a block of binary data.</p>\n\
<p>The format for this data is described in a <strong>vertex buffer descriptor</strong>, which in the API is represented by the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span>. A buffer descriptor describes the following properties:</p>\n\
<ul>\n\
<li><em>Name</em>: user name to uniquely identify the data.</li>\n\
<li><em>Semantic</em>: How the data should be interpreted as a vertex attribute. The basic semantics include position, normal, texture coordinate, color, tangent, bitangent, and tangent with winding order sign.</li>\n\
<li><em>Data type</em>: Numeric data type.</li>\n\
<li><em>Dimension</em>: Length of data.</li>\n\
</ul>\n\
<p>Unique names allow you to have multiple sets of data with the same semantic. For example, it is possible to have two sets of texture coordinates with different names.</p>\n\
<p>In the torus example, for instance, there can be a set of vertex buffers, each with a different name, for example “P1” as the name of one of the position buffers.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f5132.jpg\' title=\'\' /></div>\n\
<p>Figure 20</p>\n\
<p>Unlike in previous systems, only GPU side (no CPU side) data is maintained by the resource management system in the rendering framework.</p>\n\
<p>For vertex buffers (and in fact for all GPU side resources) the following properties are true:</p>\n\
<ul>\n\
<li>Data is managed and owned by the resource management system.</li>\n\
<li>Plug-ins are no longer free to access and update data without an active GPU device or context.</li>\n\
<li>Data must be acquired from the management system. If the data resides on the GPU, then it must be mapped back to CPU data before any modification can occur.</li>\n\
<li>When a CPU update is complete or if this is the first time data is created, then it must be committed (trans­ferred) to the GPU.</li>\n\
<li>Descriptions are mapped to GPU side descriptions. It is not possible to change the description after the ini­tial creation of the resources.</li>\n\
<li>Direct access to the draw API specific GPU handle can be obtained for each GPU resource. With this han­dle, any updates to the resource are done without the knowledge of the internal management system.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"index-buffers\"></a><h2 id=\"index-buffers\">Index Buffers</h2></div>\n\
<p>Indexing data is represented by the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span>. Logically it is just a block of binary data.</p>\n\
<p>The interpretation and format of the indexing is provided by the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span>. The descriptor has basic properties such as a string name for unique identification, primitive type and a data type. The only data type currently returned from internal object types is 32-bit integer.The primitive type includes basic hardware types such as points, lines and triangles but also includes enumerations for more advanced primitives which may be created via custom indexing.</p>\n\
<p>The descriptor also allows for a semantic meaning to be specified for the indexing. This semantic meaning is called the <strong>indexing type</strong>. There are a series of predefined semantics which can be used, as well as the ability to mark the indexing as being “custom” generated.</p>\n\
<p>More details on custom indexing are provided in the <strong>Advanced Topics</strong> sections.</p>\n\
<p>The indexing does not need to represent all the elements of a given primitive type for a renderable object. For instance, it can be used to represent the component indexing for faces on a mesh for per-face shading, or to repre­sent selected CVs on a NURBS surface. For correspondence, a Maya DAG object component may be associated with the index descriptor.</p>\n\
<p>As with vertex buffers, indexing is stored as GPU data and managed by the resource manager.</p>\n\
<div class=\'section\'><a id=\"mgeometry-management\"></a><h2 id=\"mgeometry-management\">MGeometry management</h2></div>\n\
<p>To put all of the pieces together for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span>, Figure 20 below illustrates an instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> and the internal resource manager.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f5138.jpg\' title=\'\' /></div>\n\
<p>Figure 21: The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> references an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> instance. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> instance references one or more <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span> instances, and zero or more <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span> instances. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> keeps information about the specific <span class=\'code\'>MVertexBuffers</span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span> it uses. Any Maya DAG component can correspond to a specific <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span>. The data for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span> is managed by the internal resource manager which interacts directly with the GPU data.</p>\n\
<p>This diagram shows a series of dependencies represented as connecting lines. The direction of arrows shows the direction of dependency. Each dependency is a reference and the collection of references shows how lifetime man­agement is handled. The resource manager always references the actual geometric data. MVertexBuffer and MIndexBuffer instances hold references to their corresponding GPU data. MGeometry holds references to all the MVertexBuffer and MInd­exBuffer instances for a renderable object. MRenderItem references specific MVertexBuffer and MIndexBuffer instances it uses.</p>\n\
<p>Important notes in this scheme</p>\n\
<ol>\n\
<li>Maya objects do not hold direct references to geometric data.</li>\n\
<li>Plug-ins should never keep permanent references to any instances of geometry classes as they are not owned by the plug-in.</li>\n\
<li>This includes vertex buffer descriptors and index buffer descriptors. Though they are not considered to be resources themselves they may reference resources and thus should not be held on to by the plug-in.</li>\n\
<li>Even though there exists a backdoor to access the GPU resource handle, plug-ins should never try and delete data in this manner.</li>\n\
</ol>\n\
<div class=\'section\'><a id=\"geometry-requirements\"></a><h2 id=\"geometry-requirements\">Geometry Requirements</h2></div>\n\
<p>The previous sections have discussed static geometry data structures and their relationships to one another. During the update phase, instances of these structures need to be instantiated and filled in.</p>\n\
<p>We call this step <strong>fulfilling geometry requirements</strong>.</p>\n\
<p>Within the API, the corresponding class that specifies what to fulfill is an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryRequirements</a></span>.</p>\n\
<p>An instance of this class represents the hand-shake mechanism between shaders and locations where data is filled. Each shader for a render item puts forth its requirements. The cumulative set of requirements is collected and pre­sented in a single instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryRequirements</a></span>.</p>\n\
<p>Requirements are specified by a set of vertex buffers descriptors (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span>) and a set of index buffer descriptors (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span>).</p>\n\
<p>A round-trip update of geometric data is shown in the following diagram. Some geometry needs to be updated for a set of shaders. The requirements are gathered, fulfilled, and the geometry required for shading is updated.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f5144.jpg\' title=\'\' /></div>\n\
<p>Figure 22: In this example, a few render items are shown. The shader for each respective render item specifies a set of descriptors (index or data) and the descriptors are accumulated into a single <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryRequirements</a></span> instance. When an update is required, those requirements are fulfilled and the resulting data cached and referenced by an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> instance. In this particular case, all render items reference this <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> instance, and use this data during the rendering phase.</p>\n\
<div class=\'section\'><a id=\"general-geometry-extraction\"></a><h2 id=\"general-geometry-extraction\">General Geometry Extraction</h2></div>\n\
<p>It is sometimes useful to be able to extract geometry from the resource manager outside the context of updating a render item, or outside the context of the rendering pipeline itself.</p>\n\
<p>To do this, use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryExtractor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryExtractor</a></span> interface. The interface is intended to provide non-renderer specific geometry data from Maya DAG objects.</p>\n\
<p>It is the preferred mechanism to replace the old interface (called <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryManager</a></span>). Though it is still possible to use either the old or the new interface or to even use functional interfaces for objects (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFn\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFn</a>*</span>), the existing inter­faces do not take advantage of all the properties of the new interface:</p>\n\
<ul>\n\
<li>The extraction interface is the same for all object types (unlike for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFn\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFn</a>*</span> interfaces)</li>\n\
<li>Geometric data is cached and only updated when required, thus reducing any DG or DAG evaluation over­head.</li>\n\
<li>The data format has been optimized to provide fast hardware draw.</li>\n\
<li>The data return resides on the CPU and has no dependence on the renderer and GPU resources.</li>\n\
<li>Data is owned by the caller.</li>\n\
<li>A common consistent mechanism is used to specify data “requirements” (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryRequirements</a></span>).</li>\n\
<li>Both indexing and vertex buffers can be returned. Custom defined data is also accessible via this interface.</li>\n\
</ul>\n\
<p>Currently, only polygonal object types are supported.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f514a.jpg\' title=\'\' /></div>\n\
<p>Figure 23: For a given DAG path, a set of geometry requirements is passed to the extractor. From the associated DAG object, a set of index or vertex data blocks can be extracted.</p>\n\
<div class=\'section\'><a id=\"comparison-of-geometry-classes\"></a><h2 id=\"comparison-of-geometry-classes\">Comparison of Geometry Classes</h2></div>\n\
<p>For plug-in writers which have used existing geometry classes, there can be some confusion between the old and the new interfaces. This is especially true as some names have been reused. One key item to remember is that all of the new interfaces are in the same namespace: <span class=\'code\'>MHWRender</span>.</p>\n\
<p>In this section, a table comparing some of the key differences between the old and new classes is provided. Note that the two interfaces are not designed to be compatible with each other and it is not advisable to try and mix-and-match class usage.</p>\n\
<p>As has been noted before, one key difference is that all old interfaces manage CPU side data while the new inter­faces manage GPU side data.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"30.543933054393307%\" />\n\
<col width=\"32.00836820083682%\" />\n\
<col width=\"37.44769874476987%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-0811C551-49DE-432E-9260-A5355F3AE00F\"></a>\n\
<p class=\"table-body\">\n\
Construct / Interface\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-0E7003AE-8C8D-4A7B-B546-40DF35E26CAE\"></a>\n\
<p class=\"table-body\">\n\
Old Class (key differentiation)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-6DA3FF25-63AD-49FC-834F-C42FB7A54D8D\"></a>\n\
<p class=\"table-body\">\n\
Correspond New Class\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-DDBC6B1D-4909-4125-8CEB-17CDA1814816\"></a>\n\
<p class=\"table-body\">\n\
Data stream (vertex buffer)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-00035BCE-CDF7-4217-A699-5BC9E0B85803\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryData</a></span>: Data types have semantics (versus indexing types for the new interface). For example, primitive center and compo­nent identifier are data types. Both can be supplied from internal data, as well as vertex blind data. There is a fixed set of supported formats and packing defined.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-904B55A7-CF7A-4B16-A8AD-E7A5D59BCCC3\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a></span>: Has addi­tional formats for items such as packing tangent + sign to handle winding order. Supports flexible format and custom packing. Semantics are specified at the indexing level.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-8386075F-F695-47ED-A0C2-B5AB9004C641\"></a>\n\
<p class=\"table-body\">\n\
Indexing for data streams\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-3EF354CE-968F-4924-B47F-A26785B7683A\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryPrimitive\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_primitive.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryPrimitive</a></span>: Includes legacy quad and quad strip primitive types as well as N-gons.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-7167B9EE-FE87-4DF7-8932-E8EE2EB7D5FB\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBuffer</a></span>: Can have custom indexing and indexing semantics. Does not support legacy quad and N-gon types.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-FD56C977-00C4-45ED-BDCA-93DFB0BC7FD7\"></a>\n\
<p class=\"table-body\">\n\
Stream collection\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-A67ED964-DE2F-41D6-BC6E-D46FFF6C315B\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> : A collection of data and indexing ( <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryData</a></span> and <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryPrimitive\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_primitive.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryPrimitive</a></span> )\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-6C284502-51DE-44A7-AF02-2C4EF3E8A769\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">MHWRender::MVertexBufferList</span>: A list of vertex buffers (without indexing).\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-F225A247-4D60-4197-8C87-B2851DB5EC93\"></a>\n\
<p class=\"table-body\">\n\
List of stream collections\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-3ABFC0A2-0D66-4C2F-86F2-FCB6A86491EE\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryList</a></span>: stream / path / matrix list.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-4678D4A9-E284-4751-A2AB-1870EB3E0A3E\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry</a></span>: A collection of data and indexing.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-7CCF92FB-0996-4F63-8D98-A67DDD9E3BCA\"></a>\n\
<p class=\"table-body\">\n\
Geometry requirements\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-CD097D23-847A-4F26-9750-37BF195193E5\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryRequirements</a></span>: Fixed set of requirements and allowable data formats. Not expandable.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-78F2DFB5-0EF3-4253-AA61-279723F1E378\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryRequirements</a></span> Customizable requirements via the usage of descriptor classes. (<span class=\"code\">MHWRender ::<a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span>, <span class=\"code\">MHWRender ::<a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span>)\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-7020D2F8-BD26-4D09-ABEB-AC73551C5CA4\"></a>\n\
<p class=\"table-body\">\n\
Geometry Manager\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-625236A6-B834-47DF-86EF-484680C4C7D9\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryManager</a></span>: Allows access to default geometry as well as extraction of <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> for a given Maya DAG object.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-AC94594C-5D9C-40DD-9231-8B8FDE4E2FB8\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryExtractor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryExtractor</a></span>: Extraction of geometry data based on description. Can support custom data streams and custom indexing.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";