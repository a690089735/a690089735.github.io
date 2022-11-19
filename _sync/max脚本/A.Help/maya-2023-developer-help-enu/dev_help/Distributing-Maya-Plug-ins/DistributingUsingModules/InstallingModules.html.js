var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Installing the module</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Installing the module</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"installing-the-module\"></a></div>\n\
<p>To install a module:</p>\n\
<ol>\n\
<li>Extract the module</li>\n\
<li>Move or copy the module&#39;s entire directory tree to a local or shared location, depending on whether the module will be used by a single user or several user</li>\n\
<li>Change the path to the module description file to point to the location where the module&#39;s directory tree is now located</li>\n\
<li>Place a copy of the modified module description file into a directory pointed to by the <span class=\'code\'>MAYA_MODULE_PATH</span> environment variable</li>\n\
</ol>\n\
<p>When Maya starts up, it will read in the module description file and add the module&#39;s <span class=\'code\'>icons</span> directory to <span class=\'code\'>XBMLANGPATH</span>, add the module&#39;s <span class=\'code\'>plug-ins</span> directory to <span class=\'code\'>MAYA_PLUG_IN_PATH</span>, add the module&#39;s <span class=\'code\'>presets</span> directory to <span class=\'code\'>MAYA_PRESET_PATH</span> and add the module&#39;s <span class=\'code\'>scripts</span> directory to <span class=\'code\'>MAYA_SCRIPT_PATH</span> and <span class=\'code\'>PYTHON_PATH</span>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> <span class=\'code\'>MAYA_MODULE_PATH</span> defines the search paths for Maya module files. To see what directories this environment variable is set to, use the <span class=\'code\'>getenv</span> command in the Maya Script Editor or Maya command line:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">getenv MAYA_MODULE_PATH\n\
</pre></div><p>You can also add additional directories to <span class=\'code\'>MAYA_MODULE_PATH</span> in the <span class=\'code\'>Maya.env</span> file. See <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a> for information about <span class=\'code\'>Maya.env</span>.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";