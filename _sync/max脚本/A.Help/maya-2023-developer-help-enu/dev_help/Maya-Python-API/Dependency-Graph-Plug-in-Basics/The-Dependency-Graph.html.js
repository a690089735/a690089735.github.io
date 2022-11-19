var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The Dependency Graph</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The Dependency Graph</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-dependency-graph\"></a></div>\n\
<p>This topic summarizes the basic concepts of Maya&#39;s Dependency Graph.</p>\n\
<div class=\'section\'><a id=\"what-is-the-dependency-graph\"></a><h2 id=\"what-is-the-dependency-graph\">What is the Dependency Graph?</h2></div>\n\
<p>The Dependency Graph is a network of <em>nodes</em>, represented by instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span>. The connection points of a node are known as <em>plugs</em>, and are represented by instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>. A directed edge connects one node&#39;s output plug to another node&#39;s input plug. <a href=\'#!/url=./dev_help/Maya-Python-API/Dependency-Graph-Plug-in-Basics/The-Dependency-Graph.html#data-propagation-and-node-computation\' title=\'\'>As we explain in greater detail below</a>, <em>data blocks</em> (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataBlock</a></span>) sequentially visit the connected nodes in the graph, providing input to each node&#39;s <span class=\'code\'>compute()</span> function, and storing the resulting output.</p>\n\
<div class=\'figure\'><img src=\'images/MayaPlugs_75%.png\' title=\'\' /></div>\n\
<p>To illustrate the behavior of nodes in the Dependency Graph, <a href=\'#!/url=./dev_help/Maya-Python-API/Dependency-Graph-Plug-in-Basics/Example-Bounding-Box-Deformer.html\' title=\'\'>consider a simple mesh deformation node</a>. Such a node would take set of vertices as inputs, and transform them via its <span class=\'code\'>compute()</span> function into a new set of output vertices. This new set of vertices can be subsequently modified by another node in the dependency graph, and so on.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The <a href=\'#!/url=./dev_help/Maya-Python-API/Command-Plug-in-Basics/Querying-the-Scene-Graph.html\' title=\'\'>Directed Acyclic Graph (DAG), also known as the scene graph</a>, is a subset of the Dependency Graph. Transform and Shape nodes in the DAG can be connected to other nodes in the Dependency Graph to affect or animate their behavior.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"data-propagation-and-node-computation\"></a><h2 id=\"data-propagation-and-node-computation\">Data Propagation and Node Computation</h2></div>\n\
<p>The purpose of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> is to flag values which need to be recomputed during Maya&#39;s ongoing Dependency Graph evaluation process. If an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> is marked as <em>dirty</em>, its associated value needs to be recomputed. This dirty flag propagates to the relevant <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>s in the graph. When a node containing a dirty <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> has its <span class=\'code\'>compute()</span> function invoked, the dirty <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> is marked as <em>clean</em> to avoid unnecessary recomputations.</p>\n\
<p>In the diagram below, the <span class=\'code\'>compute()</span> function of the <span class=\'code\'>mynode1</span> instance is being called to recompute the value associated with the &quot;<span class=\'code\'>mynode1.outputAttribute</span>&quot; output <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>. The <span class=\'code\'>compute()</span> function takes the following two parameters:</p>\n\
<ol>\n\
<li><strong>The &quot;dirty&quot; output MPlug -</strong> A node may have multiple dirty output <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>s. This parameter informs us of which <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> we are &quot;cleaning&quot; with our computation.</li>\n\
<li><strong>An instance of MDataBlock -</strong> The provided instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataBlock</a></span> contains the input values needed to compute the output. The resulting output must be stored in the corresponding output <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataHandle</a></span>, contained within the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataBlock</a></span>. <a href=\'#!/url=./dev_help/Maya-Python-API/Dependency-Graph-Plug-in-Basics/The-Dependency-Graph.html#defining-a-custom-node\' title=\'\'>Later in this topic</a>, we explain how Maya <em>knows</em> which inputs to provide to compute a specific output.</li>\n\
</ol>\n\
<div class=\'figure\'><img src=\'images/MayaComputeFunction_75%.png\' title=\'\' /></div>\n\
<p>As a brief example of data propagation and computation, suppose the user changes a polygon&#39;s number of subdivisions via Maya&#39;s user interface. This will first cause the immediately connected input <span class=\'code\'>MPlugs</span> of the related shape node to be marked as &quot;dirty&quot;. After this dirty flag has propagated throughout the dependency graph, Maya will sequentially call <span class=\'code\'>compute()</span> on the concerned nodes to &quot;clean&quot; the dirtied <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>s.</p>\n\
<div class=\'section\'><a id=\"defining-a-custom-node\"></a><h2 id=\"defining-a-custom-node\">Defining a Custom Node</h2></div>\n\
<p>A custom node is defined by creating a Maya Dependency Graph plug-in. Such a plug-in contains a class which inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span> or one of its subclasses. This new class will override the <span class=\'code\'>MPxNode.compute()</span> function to define the custom node&#39;s behavior. Once a Dependency Graph plug-in is loaded into Maya, the Script Editor can be used to create an instance of the node.</p>\n\
<div class=\'figure\'><img src=\'images/MayaAttributevsPlug_75%.png\' title=\'\' /></div>\n\
<p>In the previous diagram, the <span class=\'code\'>initializePlugin()</span> function makes a call to <span class=\'code\'>mplugin.registerNode()</span>, passing the parameter &quot;<span class=\'code\'>mynode</span>&quot; to declare the custom node type&#39;s name. An instance of this node can therefore be created using the following Python script:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.createNode( &quot;mynode&quot; )\n\
</pre></div><p>The result is an instance of a node whose input and output <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>s are initialized according to the attributes declared in the plug-in (<span class=\'code\'>nodeInitializer()</span>). More concretely, the attributes declared in the plug-in will dictate how the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>s will be created in terms of their type, default value, visibility in the UI, readability (usable as input), writeability (usable as output), and whether or not the run-time value should be stored to a file when the scene is saved.</p>\n\
<p>Observe that in the <span class=\'code\'>nodeInitializer()</span> function of our plug-in definition, we declare an <em>affects</em> relationship between:</p>\n\
<ul>\n\
<li><span class=\'code\'>inputAttribute1</span> and <span class=\'code\'>outputAttribute</span>,</li>\n\
<li><span class=\'code\'>inputAttribute2</span> and <span class=\'code\'>outputAttribute</span>.</li>\n\
</ul>\n\
<p>The <em>affects</em> relationship, declared using <span class=\'code\'>MPxNode.attributeAffects()</span>, tells Maya which inputs are required to compute a given output. As such, for any given instance of our node, if the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> associated to its <span class=\'code\'>inputAttribute1</span> is marked dirty, the dirty flag will also propagate to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> associated to its <span class=\'code\'>outputAttribute</span>. This dirty flag propagation will therefore cause the node&#39;s <span class=\'code\'>compute()</span> function to be called to clean the dirty <span class=\'code\'>outputAttribute</span> <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";