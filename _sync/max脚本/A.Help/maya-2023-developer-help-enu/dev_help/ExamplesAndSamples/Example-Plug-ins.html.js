var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>About the devkit examples</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>About the devkit examples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"about-the-devkit-examples\"></a></div>\n\
<blockquote>\n\
<p><strong>Important:</strong> The devkit examples can change between releases. This includes their node IDs. Node IDs are used to uniquely identify nodes and plug-ins. If you will be using examples in production, or basing your own plug-ins on the example plug-ins, please obtain a unique node ID from <a href=\'https://mayaid.autodesk.io\' title=\'\' target=\'_blank\'>https://mayaid.autodesk.io</a>.</p>\n\
</blockquote>\n\
<p>C++, C#, and Python example plug-ins are packaged with the devkit, as well as example standalone applications in C++ and Python.</p>\n\
<p>The example plug-ins extend Maya by adding functionality, such as nodes and commands, to it. Standalone applications use the Maya API but run outside of Maya.</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"header\">\n\
<th align=\"left\">Type of Example</th>\n\
<th align=\"left\">Location on Windows</th>\n\
<th align=\"left\">Location on macOS and Linux</th>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">C++ plug-ins</td>\n\
<td align=\"left\"><span class=\'code\'>devkit\\devkitBase\\plug-ins\\</span></td>\n\
<td align=\"left\"><span class=\'code\'>devkit/devkitBase/plug-ins</span></td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Python API 1.0 plug-ins</td>\n\
<td align=\"left\"><span class=\'code\'>devkit\\devkitBase\\plug-ins\\python\\api1</span></td>\n\
<td align=\"left\"><span class=\'code\'>devkit/devkitBase/plug-ins/python/api1</span></td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Python API 2.0 plug-ins</td>\n\
<td align=\"left\"><span class=\'code\'>devkit\\devkitBase\\plug-ins\\python\\api2</span></td>\n\
<td align=\"left\"><span class=\'code\'>devkit/devkitBase/plug-ins/python/api2</span></td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">C# plug-ins</td>\n\
<td align=\"left\"><span class=\'code\'>devkit\\devkitBase\\dotnet</span></td>\n\
<td align=\"left\">not available</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Standalone C++ applications</td>\n\
<td align=\"left\"><span class=\'code\'>devkit\\devkitBase\\applications</span></td>\n\
<td align=\"left\"><span class=\'code\'>devkit/devkitBase/applications</span></td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Standalone Python applications</td>\n\
<td align=\"left\"><span class=\'code\'>devkit\\devkitBase\\applications\\python</span></td>\n\
<td align=\"left\"><span class=\'code\'>devkit/devkitBase/applications/python</span></td>\n\
</tr>\n\
</table>\n\
<blockquote>\n\
<p><strong>Important:</strong> Some examples require third-party libraries to compile or run. Most notably, any plug-in example that begins with <span class=\'code\'>abc</span> cannot be built without additional libraries not included with Maya. Do not attempt to build these examples.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"example-naming-conventions\"></a><h2 id=\"example-naming-conventions\">Example Naming Conventions</h2></div>\n\
<p>Examples are built into plug-ins that create specific items. An example&#39;s suffix indicates the item its plug-in creates.</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"header\">\n\
<th align=\"left\">Suffix</th>\n\
<th align=\"left\">Element created</th>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Cmd</td>\n\
<td align=\"left\">command</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Tool</td>\n\
<td align=\"left\">interactive tool</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Node</td>\n\
<td align=\"left\">dependency node</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Translator</td>\n\
<td align=\"left\">file translator</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Shader</td>\n\
<td align=\"left\">shading node</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Manip</td>\n\
<td align=\"left\">manipulator</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Field</td>\n\
<td align=\"left\">dynamic field</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Emitter</td>\n\
<td align=\"left\">dynamic emitters</td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\">Spring</td>\n\
<td align=\"left\">dynamic spring</td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\">Shape</td>\n\
<td align=\"left\">shape</td>\n\
</tr>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";