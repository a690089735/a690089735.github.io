var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Setting up and saving your plug-in</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Setting up and saving your plug-in</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"setting-up-and-saving-your-plug-in\"></a></div>\n\
<p>Before writing your plug-in, <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>set up your environment</a>.</p>\n\
<p>Two different Python APIs, <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-API-1-0.html\' title=\'\'>Maya Python API 1.0</a> and <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-API-2-0.html\' title=\'\'>Maya Python API 2.0</a>, are included with Maya. Maya Python API 1.0 is generated from the Maya C++ API. It is more comprehensive than Maya Python API 2.0, but less Pythonic than API 2.0. Maya Python API 2.0 is more Pythonic than Maya Python API 1.0. Its structure will be more familiar to Python programmers, and will be more intuitive to use as a result.</p>\n\
<p>Two versions of a simple Hello World plugin are provided:</p>\n\
<ul>\n\
<li><a href=\'#!/url=./dev_help/A-First-Plugin/Python/HelloWorldAPI1.html\' title=\'\'>Python API 1.0</a> with <a href=\'#!/url=./dev_help/A-First-Plugin/Python/HelloWorldPython1Explained.html\' title=\'\'>explanatory information</a></li>\n\
<li><a href=\'#!/url=./dev_help/A-First-Plugin/Python/HelloWorldAPI2.html\' title=\'\'>Python API 2.0</a> with <a href=\'#!/url=./dev_help/A-First-Plugin/Python/HelloWorldPython2Explained.html\' title=\'\'>explanatory information</a></li>\n\
</ul>\n\
<p>Open an editor and cut-and-paste the source code into a new file. In keeping with Maya&#39;s Python naming conventions, Python API 1.0 files should have the &quot;py1&quot; prefix, and Python API 2.0 files should have the &quot;py2&quot; prefix. For example, the API 1.0 version can be named &quot;py1HelloWorld.py&quot; and the API 2.0 version can be named &quot;py2HelloWorld.py&quot;.</p>\n\
<p>Save your file to <span class=\'code\'>MAYA_PLUGIN_PATH</span>. Plug-ins placed in that directory are automatically picked up by Maya if your environment has been set up according to the instructions in <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a>.</p>\n\
<p>Open the the Plug-in Manager. Click on <strong>Window &gt; Settings/Preferences &gt; Plug-in Manager</strong>. You can <a href=\'#!/url=./dev_help/LoadingAndUnloadingPlugins/Loading-Samples-Plug-ins-Into-Maya.html\' title=\'\'>load your plug-in from the plug-in manager</a>.</p>\n\
<p>You can also load the plug-in from the Script Editor using <span class=\'code\'>maya.cmds.loadPlugin()</span>. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">import maya.cmds\n\
maya.cmds.loadPlugin(&quot;py2HelloWorld.py&quot;)\n\
</pre></div><p>Once your plug-in is loaded, the command defined by the plug-in will be added to the <span class=\'code\'>maya.cmds</span> module. You can now call the command from the Script Editor.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">import maya.cmds as cmds\n\
cmds.py2HelloWorld()\n\
</pre></div><p>The command will be echoed and &quot;Hello World!&quot; will be printed below it.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">import maya.cmds as cmds\n\
cmds.py2HelloWorld()\n\
Hello World!\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";