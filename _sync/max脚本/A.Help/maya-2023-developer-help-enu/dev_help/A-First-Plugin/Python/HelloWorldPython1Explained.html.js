var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>A Python API 1.0 Hello World example explained</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>A Python API 1.0 Hello World example explained</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"a-python-api-1.0-hello-world-example-explained\"></a></div>\n\
<p>The Hello World examples demonstrates several important components of plug-in development using the Maya Python API 1.0.</p>\n\
<p>You can find more information on Python functions and plug-ins in the <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-API-1-0.html\' title=\'\'>Maya Python API</a> section.</p>\n\
<div class=\'section\'><a id=\"command-plug-ins-inherits-from-mpxcommand\"></a><h2 id=\"command-plug-ins-inherits-from-mpxcommand\">Command plug-ins inherits from MPxCommand</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">class Py1HelloWorldCmd(OpenMayaMPx.MPxCommand):\n\
    kPluginCmdName = &quot;py1HelloWorld&quot;\n\
</pre></div><div class=\'section\'><a id=\"instantiate-the-command\"></a><h2 id=\"instantiate-the-command\">Instantiate the command</h2></div>\n\
<p>The command is instantiated using <span class=\'code\'>cmdCreator()</span>. <span class=\'code\'>doIt()</span> executes the command&#39;s actions. In more complex command plug-ins, <span class=\'code\'>doIt()</span> is used to parse arguments, set internal data, and do other housekeeping before it calls the <span class=\'code\'>redoIt()</span> function. The <span class=\'code\'>redoIt()</span> function then performs the command&#39;s actions.</p>\n\
<p>See <a href=\'#!/url=./dev_help/Maya-Python-API/Command-Plug-in-Basics/DoItAndRedoIt.html\' title=\'\'>The doIt() and redoIt() functions</a> for more information.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">@staticmethod\n\
   def cmdCreator():\n\
        return OpenMayaMPx.asMPxPtr( Py1HelloWorldCmd() )\n\
\n\
        def doIt(self,argList):\n\
            print (&quot;Hello World!&quot;)\n\
</pre></div><div class=\'section\'><a id=\"initialize-the-plug-in\"></a><h2 id=\"initialize-the-plug-in\">Initialize the plug-in</h2></div>\n\
<p>All plug-ins need to implement the <span class=\'code\'>initializePlugin()</span> function. This function in turn calls <span class=\'code\'>registerCommand()</span>. The plug-in will fail to load if <span class=\'code\'>initializePlugin()</span> is not implemented. For more information, see <a href=\'#!/url=./dev_help/Maya-Python-API/PluginEntryPoints.html\' title=\'\'>Initializing and uninitializing plug-ins</a>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">def initializePlugin(plugin):\n\
    pluginFn = OpenMayaMPx.MFnPlugin(plugin)\n\
    try:\n\
        pluginFn.registerCommand(\n\
        Py1HelloWorldCmd.kPluginCmdName, Py1HelloWorldCmd.cmdCreator\n\
    )\n\
    except:\n\
        sys.stderr.write(\n\
            &quot;Failed to register command: %s\\n&quot; % Py1HelloWorldCmd.kPluginCmdName\n\
    )\n\
    raise\n\
</pre></div><div class=\'section\'><a id=\"uninitialize-the-plug-in\"></a><h2 id=\"uninitialize-the-plug-in\">Uninitialize the plug-in</h2></div>\n\
<p>All plug-ins need to implement the <span class=\'code\'>uninitializePlugin()</span> function. This function in turn calls <span class=\'code\'>deregisterCommand()</span>. The plug-in will fail to load if <span class=\'code\'>uninitializePlugin()</span> is not implemented. For more information, see <a href=\'#!/url=./dev_help/Maya-Python-API/PluginEntryPoints.html\' title=\'\'>Initializing and uninitializing plug-ins</a>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">def uninitializePlugin(plugin):\n\
    pluginFn = OpenMayaMPx.MFnPlugin(plugin)\n\
    try:\n\
        pluginFn.deregisterCommand(Py1HelloWorldCmd.kPluginCmdName)\n\
    except:\n\
        sys.stderr.write(\n\
            &quot;Failed to unregister command: %s\\n&quot; % Py1HelloWorldCmd.kPluginCmdName\n\
        )\n\
    raise\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";