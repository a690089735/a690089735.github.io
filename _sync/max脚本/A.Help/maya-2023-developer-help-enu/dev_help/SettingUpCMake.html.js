var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Setting up CMake to build your plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Setting up CMake to build your plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"setting-up-cmake-to-build-your-plug-ins\"></a></div>\n\
<p>Creating a plug-in or a standalone application requires setting up your environment as described in <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>Setting Up Your Build Environment</a>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Before creating your own samples, <a href=\'#!/url=./dev_help/Samples.html\' title=\'\'>build some of the samples included in the devkit</a> to familiarize yourself with the Maya API and CMake.</p>\n\
</blockquote>\n\
<p>CMake requires a <span class=\'code\'>CmakeList.txt</span> file. This file provides information for the CMake Generator to create a project or makefile with which to build the application. This file needs to specify the project name, its source files, and any libraries it needs.</p>\n\
<p>The <span class=\'code\'>CMakeList.txt</span> files in the sample plug-ins and applications can be used as a guide to creating your own <span class=\'code\'>CMakeList.txt</span> file.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";