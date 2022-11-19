var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Initializing and uninitializing plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Initializing and uninitializing plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"initializing-and-uninitializing-plug-ins\"></a></div>\n\
<p>Two specific functions, <span class=\'code\'>initializePlugin()</span> and <span class=\'code\'>uninitializePlugin()</span>, must be implemented in all Maya plug-ins. <span class=\'code\'>initializePlugin()</span> is called when Maya loads the plug-in, and <span class=\'code\'>uninitializePlugin()</span> is called when Maya unloads the plug-in. If either of these functions is missing, the plug-in will fail to load.</p>\n\
<p>For a command plug-in, <span class=\'code\'>initializePlugin()</span> must call <span class=\'code\'>registerCommand()</span> to register the command. Similarly, <span class=\'code\'>uninitializePlugin()</span> calls <span class=\'code\'>deregisterCommand()</span>.</p>\n\
<p>For a dependency node plug-in, <span class=\'code\'>initializePlugin()</span> must call <span class=\'code\'>registerNode()</span> to register the command. Similarly, <span class=\'code\'>uninitializePlugin()</span> calls <span class=\'code\'>deregisterNode()</span>.</p>\n\
<p>You can see how these methods are implemented and work together for both Maya Python API 1.0 and API 2.0 in the examples packaged with the Maya devkit.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";