var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command plug-in basic classes and functions</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Command plug-in basic classes and functions</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"command-plug-in-basic-classes-and-functions\"></a></div>\n\
<p>There are certain basic elements that command plug-ins share.</p>\n\
<div class=\'section\'><a id=\"basic-classes\"></a><h2 id=\"basic-classes\">Basic classes</h2></div>\n\
<p>All command plug-ins need to use the following classes.</p>\n\
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
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span></td>\n\
<td align=\"left\">The base command plug-in proxy class. All command plug-ins must extend this class.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a></span></td>\n\
<td align=\"left\">Used to specify the flags and arguments passed to commands.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a></span></td>\n\
<td align=\"left\">Used to parse the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a></span> for the flags, arguments, and objects passed to the command.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"></td>\n\
<td align=\"left\"></td>\n\
</tr>\n\
</table>\n\
<div class=\'section\'><a id=\"basic-functions-and-methods\"></a><h2 id=\"basic-functions-and-methods\">Basic functions and methods</h2></div>\n\
<p>All command plug-ins need to implement <span class=\'code\'>creator()</span>, <span class=\'code\'>doIt()</span>, <span class=\'code\'>initializePlugin()</span>, and <span class=\'code\'>uninitializePlugin()</span> . These functions and methods are all called by Maya at different times.</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"header\">\n\
<th align=\"left\">Function or method</th>\n\
<th align=\"left\">Description</th>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>creator()</span></td>\n\
<td align=\"left\">Instantiates the command. <span class=\'code\'>creator()</span> is a global function that must be implemented in your code.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>doIt()</span></td>\n\
<td align=\"left\">Executes the command&#39;s actions. It is invoked only once, the first time the command is run. <span class=\'code\'>doItI()</span> is a member of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> and needs to be overridden in your code. See <a href=\'#!/url=./dev_help/Command-plug-ins/doItAndredoIt.html\' title=\'\'>The <span class=\'code\'>doIt()</span> and <span class=\'code\'>redoIt()</span> methods</a> for details.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>redoIt()</span></td>\n\
<td align=\"left\">Executes the command&#39;s actions. With the exception of the first time the command is run, it is called every time the command is run. <span class=\'code\'>redoItI()</span> is a member of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> and needs to be overridden in your code. See <a href=\'#!/url=./dev_help/Command-plug-ins/doItAndredoIt.html\' title=\'\'>The <span class=\'code\'>doIt()</span> and <span class=\'code\'>redoIt()</span> methods</a> for details.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>undoIt()</span></td>\n\
<td align=\"left\">Undoes the command operations. <span class=\'code\'>undoItI()</span> is a member of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> and needs to be overridden in your code. See <a href=\'#!/url=./dev_help/Command-plug-ins/UndoableCommands.html\' title=\'\'>Undoable commands</a> for details.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>isUndoable()</span></td>\n\
<td align=\"left\">Indicates whether the command is undoable and that its actions should be added to Maya&#39;s undo queue. <span class=\'code\'>isUndoable()</span> is a member of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span>. It returns <span class=\'code\'>false</span> by default and needs to be overridden in your code to return <span class=\'code\'>true</span> if your command is undoable. See <a href=\'#!/url=./dev_help/Command-plug-ins/UndoableCommands.html\' title=\'\'>Undoable commands</a> for details.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>addMenuItem()</span></td>\n\
<td align=\"left\">Attaches a command to a Maya menu item. <span class=\'code\'>addMenuItem()</span> is a member of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> and is called in <span class=\'code\'>initializePlugin()</span>.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>removeMenuItem()</span></td>\n\
<td align=\"left\">Removes the command&#39;s menu item from the Maya menu. <span class=\'code\'>removeMenuItem()</span> is a member of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> and is called in <span class=\'code\'>uninitializePlugin()</span>.</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><span class=\'code\'>initializePlugin()</span></td>\n\
<td align=\"left\">Called when a plug-in is loaded into Maya. Registers the plug-in. <span class=\'code\'>initializePlugin()</span> is a global function that you must implement in your code. See <a href=\'#!/url=./dev_help/Maya-API-introduction/initialize-uninitialize.html\' title=\'\'>Plug-in entry points</a> for details.</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><span class=\'code\'>uninitializePlugin()</span></td>\n\
<td align=\"left\">Called when a plug-in is unloaded from Maya. Deregisters the plug-in. <span class=\'code\'>uninitializePlugin()</span> is a global function that you must implement in your code.See <a href=\'#!/url=./dev_help/Maya-API-introduction/initialize-uninitialize.html\' title=\'\'>Plug-in entry points</a> for details.</td>\n\
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