var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Plug-in entry points</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Plug-in entry points</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"plug-in-entry-points\"></a></div>\n\
<p>Every plug-in must implement both <span class=\'code\'>initializePlugin()</span> and <span class=\'code\'>uninitializePlugin()</span> functions as entry points into the plug-in. These functions register and deregister the additions to Maya defined in the plug-in.</p>\n\
<p><span class=\'code\'>initializePlugin()</span> is called when Maya loads the plug-in. It contains code to register the commands, nodes, tools, and other additions to Maya defined by the plug-in.</p>\n\
<p><span class=\'code\'>uninitializePlugin()</span> is called when the plug-in is unloaded. It deregisters anything that was registered when the plug-in was loaded.</p>\n\
<p>For a command plug-in, <span class=\'code\'>initializePlugin()</span> must call <span class=\'code\'>registerCommand()</span> to register the command. Similarly, <span class=\'code\'>uninitializePlugin()</span> calls <span class=\'code\'>deregisterCommand()</span>.</p>\n\
<p>For a dependency node plug-in, <span class=\'code\'>initializePlugin()</span> must call <span class=\'code\'>registerNode()</span> to register the command. Similarly, <span class=\'code\'>uninitializePlugin()</span> calls <span class=\'code\'>deregisterNode()</span>.</p>\n\
<p>The plug-in will fail to load if either <span class=\'code\'>initializePlugin()</span> or <span class=\'code\'>uninitializePlugin()</span> is missing.</p>\n\
<p>Examples of how to implement these functions can be found in any of the devkit plug-in examples.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";