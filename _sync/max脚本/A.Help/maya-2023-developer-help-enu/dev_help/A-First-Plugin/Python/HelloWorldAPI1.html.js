var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Hello World source code for Python API 1.0</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Hello World source code for Python API 1.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"hello-world-source-code-for-python-api-1.0\"></a></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">import sys\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
\n\
# command\n\
class Py1HelloWorldCmd(OpenMayaMPx.MPxCommand):\n\
    kPluginCmdName = &quot;py1HelloWorld&quot;\n\
\n\
    def __init__(self):\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
\n\
    @staticmethod\n\
    def cmdCreator():\n\
        return OpenMayaMPx.asMPxPtr( Py1HelloWorldCmd() )\n\
\n\
        def doIt(self,argList):\n\
            print (&quot;Hello World!&quot;)\n\
\n\
# Initialize the script plug-in\n\
def initializePlugin(plugin):\n\
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
\n\
# Uninitialize the script plug-in\n\
def uninitializePlugin(plugin):\n\
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