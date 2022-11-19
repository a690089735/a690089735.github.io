var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Minimum Requirements</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Minimum Requirements</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"minimum-requirements\"></a></div>\n\
<p>The system requirements for Maya release versions can be found on the <a href=\'https://knowledge.autodesk.com/support/maya/troubleshooting/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Maya.html\' title=\'\' target=\'_blank\'>System requirements for Autodesk Maya</a> page.</p>\n\
<p>The compiler and tool versions required to build plug-ins and applications with the Maya devkit are:</p>\n\
<table class=\'ruled\'>\n\
<tr class=\"header\">\n\
<th align=\"left\">Operating system</th>\n\
<th align=\"left\">Requirements</th>\n\
<th align=\"left\">Notes</th>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><strong>Windows</strong></td>\n\
<td align=\"left\">Visual Studio 2019</td>\n\
<td align=\"left\"></td>\n\
</tr>\n\
<tr class=\"even\">\n\
<td align=\"left\"><strong>macOS</strong></td>\n\
<td align=\"left\">Xcode version 10.2.1</td>\n\
<td align=\"left\"></td>\n\
</tr>\n\
<tr class=\"odd\">\n\
<td align=\"left\"><strong>Linux</strong></td>\n\
<td align=\"left\">Red Hat devtoolset-9-1 with gcc 9.3.1</td>\n\
<td align=\"left\">The Red Hat Developer Toolset can be installed using the yum package management tool. See the <a href=\'https://developers.redhat.com/products/developertoolset\' title=\'\' target=\'_blank\'>Red Hat Developer Toolset website</a> for more information.</td>\n\
</tr>\n\
</table>\n\
<p>Maya C++ plug-ins are built using CMake. You can use CMake to generate makefiles under Linux, Visual Studio projects on Windows, and Xcode projects on macOS. These projects can then be built using CMake, be imported into an IDE, or built using another tool.</p>\n\
<p>The minimum version of CMake required is 3.13.</p>\n\
<p>Maya supports Python 3.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";