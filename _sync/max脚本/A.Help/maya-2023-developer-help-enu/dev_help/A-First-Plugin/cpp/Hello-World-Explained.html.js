var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>A C++ Hello World example explained</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>A C++ Hello World example explained</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"a-c-hello-world-example-explained\"></a></div>\n\
<p>The Hello World examples demonstrates several important components of plug-in development.</p>\n\
<div class=\'section\'><a id=\"doit-and-marglist\"></a><h2 id=\"doit-and-marglist\">doIt and MArgList</h2></div>\n\
<p>In this simple example, <span class=\'code\'>doIt()</span> parse arguments and writes to the Maya output window.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MArgList</a></span> gathers arguments to a plug-in and stores them in a list. It provides similar functionality to the standard <span class=\'code\'>argc</span> and <span class=\'code\'>argv</span> of C and C++.</p>\n\
<p>The <span class=\'code\'>asString()</span> function returns a list argument as an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a></span> object. The <span class=\'code\'>asChar()</span> function converts the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a></span> to a C++ <span class=\'code\'>char *</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> helloWorld::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MArgList</a>&amp; args ) {\n\
    cout &lt;&lt; &quot;Hello World &quot; &lt;&lt; args.asString( 0 ).asChar() &lt;&lt; endl;\n\
    return MS::kSuccess;\n\
}\n\
</pre></div><p>In more complex command plug-ins, <span class=\'code\'>doIt()</span> parses arguments, sets internal data, and does other housekeeping before it calls the <span class=\'code\'>redoIt()</span> function. The <span class=\'code\'>redoIt()</span> function then performs the command&#39;s actions.</p>\n\
<p>As with most API functions, <span class=\'code\'>doIt()</span> returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a></span> object. The returned status can be used for error handling and error logging in more complex plug-ins. In this case, the plug-in always returns the success status code, <span class=\'code\'>MS:kSuccess</span></p>\n\
<p>See <a href=\'#!/url=./dev_help/Command-plug-ins/doItAndredoIt.html\' title=\'\'>The doIt() and redoIt() functions</a> for more information.</p>\n\
<div class=\'section\'><a id=\"instantiate-the-command\"></a><h2 id=\"instantiate-the-command\">Instantiate the command</h2></div>\n\
<p>The command is instantiated using <span class=\'code\'>creator()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">void* helloWorld::creator() {\n\
    return new helloWorld;\n\
}\n\
</pre></div><div class=\'section\'><a id=\"initialize-and-uninitialize-the-plug-in\"></a><h2 id=\"initialize-and-uninitialize-the-plug-in\">Initialize and uninitialize the plug-in</h2></div>\n\
<p>All plug-ins need to implement the <span class=\'code\'>initializePlugin()</span> function. This function in turn calls <span class=\'code\'>registerCommand()</span>. The plug-in will fail to load if <span class=\'code\'>initializePlugin()</span> is not implemented.</p>\n\
<p>Similarly, all plug-ins need to implement the <span class=\'code\'>uninitializePlugin()</span> function. This function in turn calls <span class=\'code\'>deregisterCommand()</span>.</p>\n\
<p>For more information, see <a href=\'#!/url=./dev_help/Maya-API-introduction/initialize-uninitialize.html\' title=\'\'>Initializing and uninitializing plug-ins</a>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a> obj ) {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;Autodesk&quot;, &quot;1.0&quot;, &quot;Any&quot; );\n\
    plugin.registerCommand( &quot;HelloWorld&quot;, helloWorld::creator );\n\
    return MS::kSuccess;\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a> obj ) {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    plugin.deregisterCommand( &quot;HelloWorld&quot; );\n\
    return MS::kSuccess;\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";