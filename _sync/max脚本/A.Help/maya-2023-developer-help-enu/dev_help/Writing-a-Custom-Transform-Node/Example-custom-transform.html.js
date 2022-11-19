var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example custom transform</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example custom transform</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-custom-transform\"></a></div>\n\
<p>The following are examples of custom transform usage.</p>\n\
<div class=\'section\'><a id=\"custom-transform-attribute-example\"></a><h2 id=\"custom-transform-attribute-example\">Custom transform attribute example</h2></div>\n\
<p>This section describes the <span class=\'code\'>rockingTransform</span> example that is available in the Maya Developer Kit. The <span class=\'code\'>rockingTransform</span> example introduces an attribute that contains a rocking motion along the X-axis. This rocking motion or rotation is stored separately from the regular Rotate attributes but are incorporated into the transformation matrix. Additionally, get/set methods have been added to the class to help you access the new <span class=\'code\'>rockXValue</span> class variable.</p>\n\
<div class=\'section\'><a id=\"implementing-the-proxy-transformation-matrix\"></a><h2 id=\"implementing-the-proxy-transformation-matrix\">Implementing the proxy transformation matrix</h2></div>\n\
<p>The <span class=\'code\'>rockingTransformMatrix</span> class inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a></span> and defines a number of virtual methods such as <span class=\'code\'>asMatrix()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class rockingTransformMatrix : public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a>\n\
{\n\
    // A really simple implementation of MPxTransformationMatrix.\n\
    // The methods include:\n\
    // - Two accessor methods for getting and setting the \n\
    // rock\n\
    // - The virtual asMatrix() method which passes the matrix \n\
    // back to Maya when the command &quot;xform -q -ws -m&quot; is invoked\n\
    public:\n\
        rockingTransformMatrix();\n\
        static void *creator();\n\
        \n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> asMatrix() const;\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> asMatrix(double percent) const;\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> asRotateMatrix() const;\n\
        \n\
        // Degrees\n\
        double  getRockInX() const;\n\
        void    setRockInX( double rock );\n\
        \n\
        static  <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> id;\n\
    protected:      \n\
        typedef <a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a> ParentClass;\n\
        // Degrees\n\
        double rockXValue;\n\
};\n\
\n\
</pre></div><p>The implementation of the <span class=\'code\'>rockingTransformNode</span> involves deriving from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform</a></span> and supporting some required virtuals such as <span class=\'code\'>createTransformationMatrix()</span> and <span class=\'code\'>validateAndSet()</span>. Also, a new <span class=\'code\'>aRockInX</span> attribute has been added to the class.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class rockingTransformNode : public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform</a> \n\
{\n\
    // A really simple custom transform.\n\
    public:\n\
        rockingTransformNode();\n\
        rockingTransformNode(<a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a> *);\n\
        virtual ~rockingTransformNode();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a> *createTransformationMatrix();\n\
\n\
        virtual void postConstructor();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> validateAndSetValue(\n\
            const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug,\n\
            const <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a>&amp; handle, \n\
            const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext</a>&amp; context);\n\
\n\
        virtual void resetTransformation (<a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a> *);\n\
        virtual void resetTransformation (const <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> &amp;);\n\
\n\
        // Utility for getting the related rock matrix pointer\n\
        rockingTransformMatrix *getRockingTransformMatrix();\n\
\n\
        const char*         className();\n\
        static  void *      creator();\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>  initialize();\n\
\n\
        static  <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> id;\n\
    protected:\n\
        // Degrees\n\
        static  <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> aRockInX;\n\
        double rockXValue;\n\
        typedef <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform</a> ParentClass;\n\
};\n\
\n\
</pre></div><div class=\'section\'><a id=\"initializing-the-plug-in\"></a><h2 id=\"initializing-the-plug-in\">Initializing the Plug-in</h2></div>\n\
<p>You need to register the new transform node and its related transformation matrix with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> when initializing the plug-in. The unique identifiers that are stored in <span class=\'code\'>MTypeIds</span> are required for registering the transform.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{ \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin(obj, &quot;Autodesk&quot;, &quot;6.5&quot;, &quot;Any&quot;);\n\
    status = plugin.registerTransform( &quot;rockingTransform&quot;, \n\
        rockingTransformNode::id, &amp;rockingTransformNode::creator, \n\
        &amp;rockingTransformNode::initialize, &amp;rockingTransformMatrix::creator,\n\
        rockingTransformMatrix::id);\n\
    if (!status) {\n\
        status.perror(&quot;registerNode&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>Removing the custom node is done in the <span class=\'code\'>uninitializePlugin()</span> through a call to the <span class=\'code\'>deregisterNode()</span> method of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin(obj);\n\
    status = plugin.deregisterNode( rockingTransformNode::id );\n\
    if (!status) {\n\
        status.perror(&quot;deregisterNode&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"implementation-of-the-rockingtransform-matrix-class\"></a><h3 id=\"implementation-of-the-rockingtransform-matrix-class\">Implementation of the rockingTransform matrix class</h3></div>\n\
<p>The following examples are very simple implementations of the constructor, creator and get/set methods.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//\n\
// Matrix constructor. Initialize any\n\
// class variables.\n\
//\n\
rockingTransformMatrix::rockingTransformMatrix()\n\
{\n\
    rockXValue = 0.0;\n\
}\n\
//\n\
// Creator for matrix\n\
//\n\
void *rockingTransformMatrix::creator()\n\
{\n\
    return new rockingTransformMatrix();\n\
}\n\
//\n\
// Utility method for getting the rock\n\
// motion in the X axis\n\
//\n\
double rockingTransformMatrix::getRockInX() const\n\
{\n\
    return rockXValue;\n\
}\n\
//\n\
// Utility method for setting the rcok \n\
// motion in the X axis\n\
//\n\
void rockingTransformMatrix::setRockInX( double rock )\n\
{\n\
    rockXValue = rock;\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'>asMatrix()</span> method is very important to the custom transformation matrix implementation. This method is what Maya calls when it is requesting the transformation matrix from the custom transform. The implementation of <span class=\'code\'>asMatrix()</span> in the following example calls <span class=\'code\'>ParentClass::asMatrix()</span> to calculate the standard Maya transformation matrix. The rocking motion is then used to add a quaternion rotation to the calculated transformation matrix. This approach allows a custom transform to integrate new attributes into the output of the transformation matrix.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//\n\
// This method will be used to return information to\n\
// Maya. Use the attributes which are outside of\n\
// the regular transform attributes to build a new\n\
// matrix. This new matrix will be passed back to\n\
// Maya.\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> rockingTransformMatrix::asMatrix() const\n\
{\n\
    // Get the current transform matrix\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> m = ParentClass::asMatrix();\n\
    // Initialize the new matrix we will calculate\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTransformationMatrix</a> tm( m );\n\
    // Find the current rotation as a quaternion\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MQuaternion\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_quaternion.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQuaternion</a> quat = rotation();\n\
    // Convert the rocking value in degrees to radians\n\
    DegreeRadianConverter conv;\n\
    double newTheta = conv.degreesToRadians( getRockInX() );\n\
    quat.setToXAxis( newTheta );\n\
    // Apply the rocking rotation to the existing rotation\n\
    tm.addRotationQuaternion( quat.x, quat.y, quat.z, quat.w, <a href=\"javascript:void(0)\" data-symbol=\"MSpace::kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8adafa274206df602835f0f22ae887e126&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpace::kTransform</a> );\n\
    // Let Maya know what the matrix should be\n\
    return tm.asMatrix();\n\
}\n\
\n\
</pre></div><p>Note that there is more than one <span class=\'code\'>asMatrix()</span> method. Depending on how the custom transform affects the matrix, all <span class=\'code\'>asMatrix()</span> methods may need to be implemented.</p>\n\
<div class=\'section\'><a id=\"implementing-the-rockingtransformnode\"></a><h3 id=\"implementing-the-rockingtransformnode\">Implementing the rockingTransformNode</h3></div>\n\
<p>As in other proxy nodes implemented using the API, the <span class=\'code\'>initialize()</span> method is used to add new attributes and configure them. In this example, the <span class=\'code\'>aRockInX</span> attribute is added to the node, the attribute is made keyable and is set as <em>affects world space</em>. Also, <span class=\'code\'>mustCallValidateAndSet()</span> is called so that Maya will update correctly as the attribute changes.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//\n\
//    Node initialize method. We configure node\n\
//    attributes here. Static method so\n\
//    the *this pointer is not available.\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> rockingTransformNode::initialize()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> numFn;\n\
    aRockInX = numFn.create(&quot;RockInX&quot;, &quot;rockx&quot;,\n\
         <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kDouble\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kDouble</a>, 0.0);\n\
    numFn.setKeyable(true);\n\
    numFn.setAffectsWorldSpace(true);\n\
    addAttribute(aRockInX);\n\
    // This is required so that the validateAndSet method \n\
    // is called\n\
    mustCallValidateAndSet(aRockInX);\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>The standard methods for class implementation are the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//\n\
// Constructor of the transform node\n\
//\n\
rockingTransformNode::rockingTransformNode()\n\
: ParentClass()\n\
{\n\
    rockXValue = 0.0;\n\
}\n\
//\n\
// Constructor of the transform node\n\
//\n\
rockingTransformNode::rockingTransformNode(<a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a> *tm)\n\
: ParentClass(tm)\n\
{\n\
    rockXValue = 0.0;\n\
}\n\
//\n\
// Post constructor method. Has access to *this. Node setup\n\
// operations that do not go into the initialize() method should go\n\
// here.\n\
//\n\
void rockingTransformNode::postConstructor()\n\
{\n\
    // Make sure the parent takes care of anything it needs.\n\
    //\n\
    ParentClass::postConstructor();\n\
    // The baseTransformationMatrix pointer should be setup properly \n\
    // at this point, but just in case, set the value if it is missing.\n\
    //\n\
    if (NULL == baseTransformationMatrix) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayWarning\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#acb043e7fc4eb7fc0f39833d31364b8a4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayWarning</a>(&quot;NULL baseTransformationMatrix found!&quot;);\n\
        baseTransformationMatrix = new <a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a>();\n\
    }\n\
}\n\
//\n\
// Destructor of the rocking transform\n\
//\n\
rockingTransformNode::~rockingTransformNode()\n\
{\n\
}\n\
//\n\
// Method that returns the new transformation matrix\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MPxTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransformationMatrix</a> *rockingTransformNode::createTransformationMatrix()\n\
{\n\
    return new rockingTransformMatrix();\n\
}\n\
//\n\
// Method that returns a new transform node\n\
//\n\
void *rockingTransformNode::creator()\n\
{\n\
    return new rockingTransformNode();\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'>validateAndSetValue()</span> virtual can be used to make sure that attribute input is correct. For example, it should confirm whether an attribute is locked or clamped. In this simple case, the method can be implemented to ignore locking and clamping. This approach has been taken in the following implementation:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> rockingTransformNode::validateAndSetValue(\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug,\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a>&amp; handle,\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext</a>&amp; context)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
    // Make sure that there is something interesting to process.\n\
    //\n\
    if (plug.isNull())\n\
        return MS::kFailure;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a> block = forceCache(*(<a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext</a> *)&amp;context);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> blockHandle = block.outputValue(plug, &amp;status);\n\
    ReturnOnError(status);\n\
    \n\
    if ( plug == aRockInX )\n\
    {\n\
        // Update our new rock in x value\n\
        double rockInX = handle.asDouble();\n\
        blockHandle.set(rockInX);\n\
        rockXValue = rockInX;\n\
        \n\
        // Update the custom transformation matrix to the\n\
        // right rock value. \n\
        rockingTransformMatrix *ltm = getRockingTransformMatrix();\n\
        if (ltm)\n\
            ltm-&gt;setRockInX(rockXValue);\n\
        else \n\
            <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(&quot;Failed to get rock transform matrix&quot;);\n\
            \n\
        blockHandle.setClean();\n\
        \n\
        // Mark the matrix as dirty so that DG information\n\
        // will update.\n\
        dirtyMatrix();        \n\
    }\n\
    \n\
    // Allow processing for other attributes\n\
    return ParentClass::validateAndSetValue(plug, handle, context);\n\
}\n\
\n\
</pre></div><p>There are a number of virtuals that the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform</a></span> node provides for testing locking and clamping. For example, to handle locking and clamping correctly with rotation, the methods <span class=\'code\'>checkAndSetRotation()</span>, <span class=\'code\'>applyRotationLimits()</span> and <span class=\'code\'>applyRotationLocks()</span> can be implemented. A similar set of methods exists for other attributes. The <span class=\'code\'>rockingTransformCheck</span> example in the Maya Developer Kit demonstrates these principles for rotation.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";