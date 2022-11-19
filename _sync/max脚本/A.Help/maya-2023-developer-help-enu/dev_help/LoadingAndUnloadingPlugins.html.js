var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Loading and Unloading Plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Loading and Unloading Plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"loading-and-unloading-plug-ins\"></a></div>\n\
<p>If you set the <span class=\'code\'>MAYA_PLUG_IN_PATH</span> in your <span class=\'code\'>Maya.env</span> file as described in <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a>, plug-ins in the top-level of that directory will be loaded into Maya automatically. However, plug-ins that are not in that directory&#39;s top-level will need to be loaded manually.</p>\n\
<p>If your plug-in uses dynamic libraries, it must be unloaded before it is recompiled otherwise Maya will crash. It is good practice to always unload a plug-in before rebuilding it.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";