var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Implement an MRenderOverride</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Implement an MRenderOverride</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"implement-an-mrenderoverride\"></a></div>\n\
<p>You can create a plug-in with an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> to completely replace the rendering pipeline. The plug-in can use standard operations (or passes) in the pipeline, as well as add other custom operations. To do this, the plug-in should first obtain the operation set that represents the current pipeline, then modify it by adding, inserting, or removing operations.</p>\n\
<p>The standard operations are controlled by a variety of settings and filters that determine how the pass operates. This provides ultimate control over the viewport, and provides a few conveniences for filtering the objects displayed, the display modes used, the material overrides, the post processes, and so forth.</p>\n\
<p>The advantage of creating an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> plug-in by populating the operation list is that the plug-in does not need to include target creation or management in its implementation. This is handled automatically by the system and pushed down to the operation level.</p>\n\
<p>The drawback to using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> is that it must override the entire pipeline, and any customization to the pipeline must appear as a whole new renderer. For more information about <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span>, see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Rendering-Overrides.html\' title=\'\'>Rendering Overrides</a>.</p>\n\
<div class=\'section\'><a id=\"classes-and-interfaces\"></a><h2 id=\"classes-and-interfaces\">Classes and interfaces</h2></div>\n\
<p>The following classes and interfaces enable you to create an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> as outlined above.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperationList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperationList</a></span> class holds and takes ownership of a collection of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span>s. This class has standard list methods for indexing, adding, removing, and replacing operations in the list, and also includes methods to take ownership of operations from a list.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::getStandardViewportOperations()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a592e0903ce501733b7ff820aa2477774&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderer::getStandardViewportOperations()</a></span> interface allows you to fill a list with the standard viewport operations used for non-override drawing.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> protected member:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MRenderOperationList mOperations\n\
</pre></div><p>is the operation list for this override.</p>\n\
<div class=\'section\'><a id=\"to-obtain-the-list-of-standard-operations\"></a><h2 id=\"to-obtain-the-list-of-standard-operations\">To obtain the list of standard operations</h2></div>\n\
<p>A class deriving from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> simply needs to populate the list with operations, either by getting the standard list of operations, by adding their own operations, or a combination of both.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//Get the standard list of operations\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderer::theRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderer::theRenderer</a>()-&gt;getStandardViewportOperations(mOperations);\n\
\n\
//Create a custom quad render operation \n\
PostQuadRender* swirlOp = new PostQuadRender( kSwirlPassName, &quot;FilterSwirl&quot;, &quot;&quot; );\n\
swirlOp-&gt;setEnabled(false); // swirl is disabled by default\n\
\n\
//Insert swirlOp in the pipeline after the kStandardSceneName operation\n\
mOperations.insertAfter(MHWRender::MRenderOperation::kStandardSceneName, swirlOp);\n\
\n\
</pre></div><p>A few standard operation names have been predefined for ease of use. These names can be used to locate operations in a standard operation list.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kStandardBackgroundName;  \n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kStandardSceneName;    \n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kStandardHUDName;\n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kStandardPresentName;\n\
</pre></div><div class=\'section\'><a id=\"managing-targets-with-operations\"></a><h2 id=\"managing-targets-with-operations\">Managing targets with operations</h2></div>\n\
<p>Target management is handled at the operation level to allow operations to be more autonomous and be self-describing when added to a larger operation list.</p>\n\
<p>A class deriving from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span> must do the following to complete its implementation:</p>\n\
<ol>\n\
<li>Declare the names of the inputs it requires, and declare the names of the output targets it produces.</li>\n\
<li>Provide an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderTargetDescription\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_target_description.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderTargetDescription</a></span> for its named inputs.</li>\n\
<li>Specify the start index and number of targets it will write to.</li>\n\
</ol>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span> has two protected member variables that allow you to perform the first step above:</p>\n\
<ul>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStringArray</a> mInputTargetNames</span></p></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStringArray</a> mOutputTargetNames</span></p></li>\n\
</ul>\n\
<p>To declare the inputs and outputs, an operation must add the name (that is, the semantic) of the targets it want to use. A few common target types have been predefined in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span> class:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kColorTargetName;  \n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kDepthTargetName;\n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kAuxiliaryTargetName;\n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kAuxiliaryTarget2Name;\n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kAuxiliaryTarget3Name;\n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kAuxiliaryTarget4Name;\n\
static const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> kAuxiliaryDepthTargetName;\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Tip:</strong> When writing post effects, auxiliary targets are required when you need to read from the current rendered result and write out new results. Because you cannot simultaneously read and write to the same buffer, you must create a new render target that is similar to the target used in previous passes. An auxiliary target should have the same size and format as the standard color target. After they are written to, the auxiliary target inputs are returned as the new standard color target to be read from or appended to in additional post passes. The previous standard color target should be returned as an auxiliary target so that it can be reused by other post effects that require an additional auxiliary target.</p>\n\
\n\
<p>By default, all <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span>s use the standard color and depth target names for their inputs, so that they connect automatically to other operations in the list that write to or read from the standard targets. This is all that is required for operations that simply write to the currently active target, and is implemented for you in the base class.</p>\n\
<p>For example, the following code snippet declares two default inputs and two default outputs:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">mInputTargetNames.append(kColorTargetName);\n\
mInputTargetNames.append(kDepthTargetName);\n\
mOutputTargetNames.append(kColorTargetName);\n\
mOutputTargetNames.append(kDepthTargetName);\n\
</pre></div><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span> classes that want to read from or write to multiple targets can override the default inputs and outputs by clearing the lists and adding their own.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">mInputTargetNames.append(kAuxiliaryTargetName);\n\
mInputTargetNames.append(kAuxiliaryDepthTargetName);\n\
mInputTargetNames.append(“sceneTarget”);\n\
mInputTargetNames.append(“sceneDepthTarget”);\n\
\n\
mOutputTargetNames.append(kColorTargetName);\n\
mOutputTargetNames.append(kDepthTargetName);\n\
</pre></div><p>They can then supply descriptions for the named input targets in their custom passes. In the following example, the descriptions are copied from the auxiliary targets in order for the multi-sample anti-aliasing properties and size to match.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool PostQuadRender::getInputTargetDescription(const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a>&amp; name, \n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderTargetDescription\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderTargetDescription</a>&amp; description) \n\
{ \n\
    if (name == “sceneTarget”)\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderTarget\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderTarget</a>* outTarget = getInputTarget(kAuxiliaryTargetName);\n\
        if (outTarget)\n\
            outTarget-&gt;targetDescription(description);\n\
        description.setName(&quot;_post_target_1&quot;);\n\
        return true;\n\
    }\n\
    else if (name == “sceneDepthTarget”)   \n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderTarget\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderTarget</a>* outTarget = getInputTarget(kAuxiliaryDepthTargetName);\n\
        if (outTarget)\n\
            outTarget-&gt;targetDescription(description);\n\
        description.setName(&quot;_post_target_depth&quot;);\n\
        return true;\n\
    }\n\
    return false;\n\
}\n\
</pre></div><p>An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span> plug-in can then connect operations by ensuring that the names match.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//Get MRenderOperationList of the standard viewport operations\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderer::theRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderer::theRenderer</a>()-&gt;getStandardViewportOperations(mOperations);\n\
\n\
//Get the index of the operation kStandardSceneName\n\
int sceneOpID = mOperations.indexOf(MHWRender::MRenderOperation::kStandardSceneName);\n\
\n\
//Set sceneOp to point to the kStandardSceneName operation in the MRenderOperationList\n\
MRenderOperation* sceneOp = mOperations[sceneOpID];\n\
\n\
//Rename the output target of the kStandardSceneName operation from kColorTargetName to sceneTarget\n\
sceneOp-&gt;renameOutputTarget(MHWRender::MRenderOperation::kColorTargetName, “sceneTarget”);\n\
\n\
//Create the new MRenderOperation swirlOp\n\
PostQuadRender* swirlOp = new PostQuadRender( kSwirlPassName, &quot;FilterSwirl&quot;, &quot;&quot; );\n\
\n\
// Insert swirlOp after the operation named kStandardSceneName\n\
// Because swirlOp has an input named sceneTarget, and you have renamed the output target\n\
// of kStandardSceneName to sceneTarget, the two operations will share the same target.\n\
// The target is constructed from the description provided by the swirl\n\
// operation and is the target that the scene operation should render to.\n\
mOperations.insertAfter(MHWRender::MRenderOperation::kStandardSceneName, swirlOp);\n\
</pre></div><p>To specify the start index and number of targets an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOperation</a></span> should write to, do as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">int PostQuadRender::writableTargets(unsigned int&amp; count)\n\
{\n\
    count = 2;  \n\
    return 0;\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";