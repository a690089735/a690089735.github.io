var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Dependency Graph Plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Dependency Graph Plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"dependency-graph-plug-ins\"></a></div>\n\
<p>In the following topic, we outline the basic code structure of a Dependency Graph plug-in.</p>\n\
<div class=\'section\'><a id=\"sample-dependency-graph-plug-in\"></a><h2 id=\"sample-dependency-graph-plug-in\">Sample Dependency Graph Plug-in</h2></div>\n\
<p>The following Python code is a sample Dependency Graph plug-in. This sample defines a utility (<span class=\'code\'>utility/general</span>) Hypershade node named <span class=\'code\'>myNodeName</span>. It has one input attribute which accepts a float (decimal number), and one output attribute which outputs the inputted float. This node can be created using <span class=\'code\'>cmds.createNode( &#39;myNodeName&#39; )</span> or <span class=\'code\'>cmds.shadingNode( &#39;myNodeName&#39;, asUtility=True )</span>. If it is created with the later command, or manually via the Maya Hypershade user interface (filter by typing &#39;<span class=\'code\'>My Node Name</span>&#39; in the text box), an instance of this node will appear in the <strong>Window &gt; Rendering Editors &gt; Hypershade &gt; &#39;Utilities&#39; Tab</strong>.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pySampleDGNode.py\n\
\n\
import sys\n\
\n\
import maya.api.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
\n\
# Plug-in information:\n\
kPluginNodeName = &#39;myNodeName&#39;              # The name of the node.\n\
kPluginNodeClassify = &#39;utility/general&#39;     # Where this node will be found in the Maya UI.\n\
kPluginNodeId = OpenMaya.MTypeId( 0x87EFE ) # A unique ID associated to this node type.\n\
\n\
# Default attribute values\n\
sampleDefaultValue = 1\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class myNode(OpenMaya.MPxNode):\n\
    # Static variables which will later be replaced by the node&#39;s attributes.\n\
    sampleInAttribute = OpenMaya.MObject()\n\
    sampleOutAttribute = OpenMaya.MObject()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMaya.MPxNode.__init__(self)\n\
        \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39;\n\
        Node computation method.\n\
            - pPlug: A connection point related to one of our node attributes (could be an input or an output)\n\
            - pDataBlock: Contains the data on which we will base our computations.\n\
        &#39;&#39;&#39;\n\
        \n\
        if( pPlug == myNode.sampleOutAttribute ):\n\
            \n\
            # Obtain the data handles for each attribute\n\
            sampleInDataHandle = pDataBlock.inputValue( myNode.sampleInAttribute )\n\
            sampleOutDataHandle = pDataBlock.outputValue( myNode.sampleOutAttribute )\n\
            \n\
            # Extract the actual value associated to our sample input attribute (we have defined it as a float)\n\
            sampleInValue = sampleInDataHandle.asFloat()\n\
            \n\
            \n\
            # ... perform the desired computation ...\n\
            \n\
            # Set the output value.\n\
            sampleOutDataHandle.setFloat( sampleInValue ) #  As an example, we just set the output value to be equal to the input value.\n\
            \n\
            # Mark the output data handle as being clean; it need not be computed given its input.\n\
            sampleOutDataHandle.setClean()\n\
             \n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return  myNode() \n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
    \n\
    # The following <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnNumericAttribute</a> function set will allow us to create our attributes.\n\
    numericAttributeFn = OpenMaya.MFnNumericAttribute()\n\
    \n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    global sampleDefaultValue\n\
    myNode.sampleInAttribute = numericAttributeFn.create( &#39;myInputAttribute&#39;, &#39;i&#39;, \n\
                                                          OpenMaya.MFnNumericData.kFloat,\n\
                                                          sampleDefaultValue )\n\
    numericAttributeFn.writable = True \n\
    numericAttributeFn.storable = True \n\
    numericAttributeFn.hidden = False \n\
    myNode.addAttribute( myNode.sampleInAttribute ) # Calls the MPxNode.addAttribute function.\n\
    \n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    myNode.sampleOutAttribute = numericAttributeFn.create( &#39;myOutputAttribute&#39;, &#39;o&#39;,\n\
                                                           OpenMaya.MFnNumericData.kFloat )\n\
    numericAttributeFn.storable = False \n\
    numericAttributeFn.writable = False\n\
    numericAttributeFn.readable = True \n\
    numericAttributeFn.hidden = False \n\
    myNode.addAttribute( myNode.sampleOutAttribute )\n\
    \n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    # If sampleInAttribute changes, the sampleOutAttribute data must be recomputed.\n\
    myNode.attributeAffects( myNode.sampleInAttribute, myNode.sampleOutAttribute )\n\
    \n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator,\n\
                              nodeInitializer, OpenMaya.MPxNode.kDependNode, kPluginNodeClassify )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register node: &#39; + kPluginNodeName )\n\
        raise\n\
    \n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to deregister node: &#39; + kPluginNodeName )\n\
        raise\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
\n\
cmds.loadPlugin( &#39;pySampleDGNode.py&#39; )\n\
cmds.createNode( &#39;myNodeName&#39; )\n\
# ...\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleDGNode.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
# Plug-in information:\n\
kPluginNodeName = &#39;myNodeName&#39;              # The name of the node.\n\
kPluginNodeClassify = &#39;utility/general&#39;     # Where this node will be found in the Maya UI.\n\
kPluginNodeId = OpenMaya.MTypeId( 0x87EFE ) # A unique ID associated to this node type.\n\
\n\
# Default attribute values\n\
sampleDefaultValue = 1\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class myNode(OpenMayaMPx.MPxNode):\n\
    # Static variables which will later be replaced by the node&#39;s attributes.\n\
    sampleInAttribute = OpenMaya.MObject()\n\
    sampleOutAttribute = OpenMaya.MObject()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxNode.__init__(self)\n\
        \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39;\n\
        Node computation method.\n\
            - pPlug: A connection point related to one of our node attributes (could be an input or an output)\n\
            - pDataBlock: Contains the data on which we will base our computations.\n\
        &#39;&#39;&#39;\n\
        \n\
        if( pPlug == myNode.sampleOutAttribute ):\n\
            \n\
            # Obtain the data handles for each attribute\n\
            sampleInDataHandle = pDataBlock.inputValue( myNode.sampleInAttribute )\n\
            sampleOutDataHandle = pDataBlock.outputValue( myNode.sampleOutAttribute )\n\
            \n\
            # Extract the actual value associated to our sample input attribute (we have defined it as a float)\n\
            sampleInValue = sampleInDataHandle.asFloat()\n\
            \n\
            \n\
            # ... perform the desired computation ...\n\
            \n\
            # Set the output value.\n\
            sampleOutDataHandle.setFloat( sampleInValue ) #  As an example, we just set the output value to be equal to the input value.\n\
            \n\
            # Mark the output data handle as being clean; it need not be computed given its input.\n\
            sampleOutDataHandle.setClean()\n\
             \n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( myNode() )\n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
    \n\
    # The following <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnNumericAttribute</a> function set will allow us to create our attributes.\n\
    numericAttributeFn = OpenMaya.MFnNumericAttribute()\n\
    \n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    global sampleDefaultValue\n\
    myNode.sampleInAttribute = numericAttributeFn.create( &#39;myInputAttribute&#39;, &#39;i&#39;, \n\
                                                          OpenMaya.MFnNumericData.kFloat,\n\
                                                          sampleDefaultValue )\n\
    numericAttributeFn.setWritable( True )\n\
    numericAttributeFn.setStorable( True ) \n\
    numericAttributeFn.setHidden( False )\n\
    myNode.addAttribute( myNode.sampleInAttribute ) # Calls the MPxNode.addAttribute function.\n\
    \n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    myNode.sampleOutAttribute = numericAttributeFn.create( &#39;myOutputAttribute&#39;, &#39;o&#39;,\n\
                                                           OpenMaya.MFnNumericData.kFloat )\n\
    numericAttributeFn.setStorable( False )\n\
    numericAttributeFn.setWritable( False )\n\
    numericAttributeFn.setReadable( True )\n\
    numericAttributeFn.setHidden( False )\n\
    myNode.addAttribute( myNode.sampleOutAttribute )\n\
    \n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    # If sampleInAttribute changes, the sampleOutAttribute data must be recomputed.\n\
    myNode.attributeAffects( myNode.sampleInAttribute, myNode.sampleOutAttribute )\n\
    \n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator,\n\
                              nodeInitializer, OpenMayaMPx.MPxNode.kDependNode, kPluginNodeClassify )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register node: &#39; + kPluginNodeName )\n\
        raise\n\
    \n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to deregister node: &#39; + kPluginNodeName )\n\
        raise\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
\n\
cmds.loadPlugin( &#39;sampleDGNode.py&#39; )\n\
cmds.createNode( &#39;myNodeName&#39; )\n\
# ...\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><div class=\'section\'><a id=\"maya-plug-in-entry-and-exit-points\"></a><h2 id=\"maya-plug-in-entry-and-exit-points\">Maya Plug-in Entry and Exit Points</h2></div>\n\
<p>Dependency Graph plug-ins require the same entry and exit point functions as <a href=\'#!/url=./dev_help/Maya-Python-API/Command-Plug-in-Basics/Command-Plug-ins.html\' title=\'\'>Command Plug-ins</a>, namely: <span class=\'code\'>initializePlugin()</span> and <span class=\'code\'>uninitializePlugin()</span>. These two functions are respectively invoked when Maya loads and unloads the plug-in. Your plug-in will fail to load if these two functions are absent in your file. Dependency Graph plug-ins are used to create new node types by inheriting from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span> or one of its many subclasses. In the sample contained within this topic, we are inheriting directly from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span>, so we must register our node via <span class=\'code\'>MFnPlugin.registerNode()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator,\n\
                              nodeInitializer, OpenMayaMPx.MPxNode.kDependNode, kPluginNodeClassify )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register node: &#39; + kPluginNodeName )\n\
        raise\n\
    \n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to deregister node: &#39; + kPluginNodeName )\n\
</pre></div><p>You will notice that our call to <span class=\'code\'>MFnPlugin.registerNode()</span> contains six parameters. We describe these parameters as follows:</p>\n\
<ol>\n\
<li><p><strong>Node Name</strong> - The name of the node. We specify this value in the arbitrarily named variable <span class=\'code\'>kPluginNodeName</span>. This variable is also used in <span class=\'code\'>uninitializePlugin()</span>, as well as in our error-reporting calls to <span class=\'code\'>sys.stderr.write()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">kPluginNodeName = &#39;myNodeName&#39;              # The name of the node.\n\
</pre></div><p>By registering this node name, we can create an instance of node using the following Python command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.createNode( &#39;myNodeName&#39; )</pre></div></li>\n\
<li><p><strong>Node ID</strong> - A unique identification number to represent our node&#39;s type (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MTypeId</a></span>) among all the other node types registered in Maya. We specify this value with the arbitrarily named variable <span class=\'code\'>kPluginNodeId</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">kPluginNodeId = OpenMaya.MTypeId( 0x87EFE ) # A unique ID associated to this node type.\n\
</pre></div><p>It is important that this <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MTypeId</a></span> value be unique; when Maya attempts to save and load files containing our nodes, it will label our nodes using this unique ID. If the unique ID of loaded nodes is not registered in Maya (perhaps because our plug-in isn&#39;t loaded), these nodes will fail to appear in the Dependency Graph. As explained in more detail in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MTypeId</a></span> API documentation, specific numeric ranges of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MTypeId</a></span> are reserved for different purposes. We present a brief summary of these ranges in the table below:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"23.076923076923077%\" />\n\
<col width=\"76.92307692307692%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Reserved <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MTypeId</a></span> Range\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">0x00000 - 0x7ffff</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-ins which are not intended to be widely distributed. This range is suitable for internally-developed plug-ins.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">0x80000 - 0xfffff</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Example plug-ins provided with Maya and its API documentation.\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<blockquote>\n\
<p><strong>Note:</strong> If you intend to publically distribute a Dependency Graph plug-in you have written, it will require a globally unique ID. The <a href=\'http://www.autodesk.com/developmaya\' title=\'\' target=\'_blank\'>Autodesk Developer Network</a> will provide such id&#39;s in blocks of 64, 128, 256 or 512. You will be assigned one or more 24-bit prefixes. Once this has been obtained, use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MTypeId</a></span> constructor which takes two <span class=\'code\'>unsigned int</span> parameters. The prefix goes in the first parameter, and you are responsible for managing the allocation of the IDs that go into the second parameter.</p>\n\
</blockquote></li>\n\
<li><p><strong>Node Creation Function Reference</strong> - A reference to the arbitrarily named <span class=\'code\'>nodeCreator()</span> function. This function is responsible for creating an instance of our node and returning it as a valid Maya object pointer.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( myNode() )\n\
</pre></div></li>\n\
<li><p><strong>Node Attribute Initialization Function Reference</strong> - A reference to the arbitrarily named <span class=\'code\'>nodeInitializer()</span> function. This function is responsible for creating the node&#39;s set of input and output attributes.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
\n\
    # The following <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnNumericAttribute</a> function set will allow us to create our attributes.\n\
    numericAttributeFn = OpenMaya.MFnNumericAttribute()\n\
\n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    global sampleDefaultValue\n\
    myNode.sampleInAttribute = numericAttributeFn.create( &#39;myInputAttribute&#39;, &#39;i&#39;, \n\
                                                          OpenMaya.MFnNumericData.kFloat,\n\
                                                          sampleDefaultValue )\n\
    numericAttributeFn.setWritable( True )\n\
    numericAttributeFn.setStorable( True ) \n\
    numericAttributeFn.setHidden( False )\n\
    myNode.addAttribute( myNode.sampleInAttribute ) # Calls the MPxNode.addAttribute function.\n\
\n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    myNode.sampleOutAttribute = numericAttributeFn.create( &#39;myOutputAttribute&#39;, &#39;o&#39;,\n\
                                                           OpenMaya.MFnNumericData.kFloat )\n\
    numericAttributeFn.setStorable( False )\n\
    numericAttributeFn.setWritable( False )\n\
    numericAttributeFn.setReadable( True )\n\
    numericAttributeFn.setHidden( False )\n\
    myNode.addAttribute( myNode.sampleOutAttribute )\n\
\n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    # If sampleInAttribute changes, the sampleOutAttribute data must be recomputed.\n\
    myNode.attributeAffects( myNode.sampleInAttribute, myNode.sampleOutAttribute )\n\
</pre></div><p>We use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnNumericAttribute</a></span> function set to create instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span> which encapsulate numeric attributes. These attributes require a long and short name, as well as a type and an optional default value. We assign the created attributes as static variables of the <span class=\'code\'>myNode</span> class, for example: <span class=\'code\'>myNode.sampleInAttribute</span>. Assigning these objects as static variables allows us to refer to them in the <span class=\'code\'>myNode.compute()</span> method.</p>\n\
<p>The created attributes are also added to the node&#39;s base class via <span class=\'code\'>MPxNode.addAttribute()</span>. This makes the node&#39;s attributes accessible in the Dependency Graph.</p>\n\
<p>The <span class=\'code\'>MFnNumericAttribute.setWritable()</span> function allows the attribute to be connected as a destination to an input source. The <span class=\'code\'>MFnNumericAttribute.setStorable()</span> allows the value associated with the attribute to be saved to a file. The <span class=\'code\'>MFnNumeric.setReadable()</span> function allows the value associated with this attribute to be used as input to another node&#39;s writable attribute(s). The <span class=\'code\'>MFnNumeric.setHidden()</span> attribute hides the attribute in the user interface so it cannot be mistakenly connected.</p>\n\
<p>The <span class=\'code\'>MPxNode.attributeAffects()</span> function ensures that if the value associated with the given input changes, the node&#39;s <span class=\'code\'>compute()</span> function will be called to recompute the value of the output attribute. For more information, see <a href=\'#!/url=./dev_help/Maya-Python-API/Dependency-Graph-Plug-in-Basics/The-Dependency-Graph.html#defining-a-custom-node\' title=\'\'>The Dependency Graph</a>.</p></li>\n\
<li><p><strong>Node Type</strong> - The node type defined by the plug-in. By default, this is set to <span class=\'code\'>MPxNode.kDependNode</span>, but other types, such as <span class=\'code\'>MPxNode.kLocatorNode</span>, <span class=\'code\'>MPxNode.kDeformerNode</span>, <span class=\'code\'>MPxNode.kSurfaceShape</span>, etc, can be specified to define different behaviors in the Dependency Graph.</p></li>\n\
<li><p><strong>Node Classification</strong> - The node classification is a string which determines how the node will be categorized in various rendering-related user interfaces, such as the Create Render Node and the HyperShade windows. If no string is supplied, the node will not be considered as a rendering node, and will therefore not be displayed in these user interfaces.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">kPluginNodeClassify = &#39;utility/general&#39;     # Where this node will be found in the Maya UI.\n\
</pre></div><p>The following table presents a set of valid rendering node classifications:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"23.076923076923077%\" />\n\
<col width=\"76.92307692307692%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Category\n\
</th>\n\
<th class=\"table-heading\">\n\
Classification String\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
2D Textures\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;texture/2d&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3D Textures\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;texture/3d&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Env Textures\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;texture/environment&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Surface Materials\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;shader/surface&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Volumetric Materials\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;shader/volume&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Displacement Materials\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;shader/displacement&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Lights\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;light&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
General Utilities\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;utility/general&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Color Utilities\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;utlity/color&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Particle Utilities\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;utility/particle&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Image Planes\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;imageplane&#39;</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Glow\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\">&#39;postprocess/opticalFX&#39;</span>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"node-behavior\"></a><h2 id=\"node-behavior\">Node Behavior</h2></div>\n\
<p>The behavior of our Dependency Graph node (<span class=\'code\'>myNode</span>) is defined in a class which inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class myNode(OpenMayaMPx.MPxNode):\n\
    # Static variables which will later be replaced by the node&#39;s attributes.\n\
    sampleInAttribute = OpenMaya.MObject()\n\
    sampleOutAttribute = OpenMaya.MObject()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxNode.__init__(self)\n\
        \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39;\n\
        Node computation method.\n\
            - pPlug: A connection point related to one of our node attributes (could be an input or an output)\n\
            - pDataBlock: Contains the data on which we will base our computations.\n\
        &#39;&#39;&#39;\n\
        \n\
        if( pPlug == myNode.sampleOutAttribute ):\n\
            \n\
            # Obtain the data handles for each attribute\n\
            sampleInDataHandle = pDataBlock.inputValue( myNode.sampleInAttribute )\n\
            sampleOutDataHandle = pDataBlock.outputValue( myNode.sampleOutAttribute )\n\
            \n\
            # Extract the actual value associated to our sample input attribute (we have defined it as a float)\n\
            sampleInValue = sampleInDataHandle.asFloat()\n\
            \n\
            \n\
            # ... perform the desired computation ...\n\
            \n\
            # Set the output value.\n\
            sampleOutDataHandle.setFloat( sampleInValue ) #  As an example, we just set the output value to be equal to the input value.\n\
            \n\
            # Mark the output data handle as being clean; it need not be computed given its input.\n\
            sampleOutDataHandle.setClean()\n\
             \n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
</pre></div><p>The node attributes added with <span class=\'code\'>MPxNode.addAttribute()</span> in <span class=\'code\'>nodeInitializer()</span> are used by Maya to define the input and output connection points of our node when it is instantiated in the Dependency Graph.</p>\n\
<p>These connection points are known as <em>plugs</em>, and are represented by instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>. The call to <span class=\'code\'>MPxNode.attributeAffects()</span> in <span class=\'code\'>nodeInitializer()</span> determines the causal input &gt; output link between these plugs. Ultimately, the Dependency Graph keeps track of the directed edges of connected plugs among all the nodes. During Maya&#39;s ongoing Dependency Graph evaluation process, if data associated to a plug is changed, this plug is marked as <em>dirty</em>, meaning that its cached value is stale and must be recomputed. The plug hierarchy is recursively traversed to mark the remaining affected plugs as dirty.</p>\n\
<p>Maya then calls the <span class=\'code\'>compute()</span> method on each node containing a dirty plug, passing an instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> as well as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataBlock</a></span>. The related attribute of the passed <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span> should be checked to determine what to compute. This is done using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span>&#39;s overloaded equality operator &#39;<span class=\'code\'>==</span>&#39;.</p>\n\
<p>The passed <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataBlock</a></span> instance contains <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataHandle</a></span> objects, which store the values associated to their respective attributes. The <span class=\'code\'>float</span> input value is obtained as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">sampleInDataHandle = pDataBlock.inputValue( myNode.sampleInAttribute )\n\
sampleInValue = sampleInDataHandle.asFloat()\n\
</pre></div><p>The <span class=\'code\'>compute()</span> method should conclude by setting a newly computed value to the correct output <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataHandle</a></span>. The call to <span class=\'code\'>MDataHandle.setClean()</span> removes the dirty flag from its corresponding plug.</p>\n\
<p>If the plug passed into the <span class=\'code\'>compute()</span> function is not related to an output attribute we can compute, the function should return <span class=\'code\'>OpenMaya.kUnknownParameter</span>. This lets Maya know that the plug&#39;s value should be computed using one of our base class&#39;s <span class=\'code\'>compute()</span> functions.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";