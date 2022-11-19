var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The CMakeLists.txt File</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The CMakeLists.txt File</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-cmakelists.txt-file\"></a></div>\n\
<p>The CMake tool is used to generate projects for your plug-ins and applications.</p>\n\
<p>The <span class=\'code\'>CMakeLists.txt</span> file in the plug-in or application directory contains information about the libraries, source files, and build functions needed to generated a project. It must be located at the top level of your plug-in or application directory, along with your source code and any <span class=\'code\'>mel</span> scripts that will be packaged with your plug-in.</p>\n\
<p>This page will walk you through the different parts of a <span class=\'code\'>CMakeLists.txt</span> file.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> You can use the <span class=\'code\'>CMakeLists.txt</span> files in the devkit samples as starting points for creating your own.</p>\n\
</blockquote>\n\
<p>The <span class=\'code\'>CMakeLists.txt</span> file has the following elements:</p>\n\
<ol>\n\
<li><p>The minimum version of CMake required</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)</pre></div></li>\n\
<li><p>The path to the <span class=\'code\'>pluginEntry.cmake</span> file. This path will be identical for all <span class=\'code\'>CMakeLists.txt</span> files you use with the Maya devkit</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)\n\
\n\
 include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)</pre></div></li>\n\
<li><p>The project name</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">set(PROJECT_NAME &lt;projectName&gt;)\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)\n\
\n\
 include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)</pre></div></li>\n\
<li><p>A list of required resource files, if needed. If your project uses more than one resource file, separate each file with a space</p>\n\
<p>```sh cmake_minimum_required(VERSION 3.13)</p>\n\
<p>include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)</p>\n\
<p>set(PROJECT_NAME exampleNode)</p></li>\n\
</ol>\n\
<p>set(RESOURCES_FILES myResource.xpm) ```</p>\n\
<ol>\n\
<li><p>A list of <span class=\'code\'>mel</span> files, if needed. If your project uses more than one <span class=\'code\'>mel</span> file, separate each file with a space</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">set(MEL_FILES \n\
    &lt;melFileName1&gt; &lt;melFileName2&gt; &lt;melFileName3&gt;)\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)\n\
\n\
set(RESOURCES_FILES myResource.xpm)\n\
\n\
set(MEL_FILES \n\
    exampleNode.mel)</pre></div></li>\n\
<li><p>A list of source files, including the <span class=\'code\'>mel</span> and resource files, if used. If your project uses more than one source file, separate each file with a space</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">set(SOURCE_FILES\n\
    &lt;sourceFileName1&gt; &lt;sourceFileName2&gt; &lt;sourceFileName3&gt;\n\
        ${MEL_FILES}\n\
        ${RESOURCE_FILES})\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)\n\
\n\
set(RESOURCES_FILES myResource.xpm)\n\
\n\
set(MEL_FILES \n\
    exampleNode.mel)\n\
\n\
set(SOURCE_FILES\n\
        exampleNode.cpp\n\
        ${MEL_FILES}\n\
    )</pre></div></li>\n\
<li><p>A list of required devkit libraries. Separate the list of libraries with a space</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> All plug-ins and applications must include the OpenMaya and Foundation libraries.</p>\n\
</blockquote>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">set(LIBRARIES\n\
    OpenMaya Foundation &lt;additionalLibrary1&gt; &lt;additionalLibrary2&gt;\n\
    )\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)\n\
\n\
set(RESOURCES_FILES myResource.xpm)\n\
\n\
set(MEL_FILES \n\
    exampleNode.mel)\n\
\n\
set(SOURCE_FILES\n\
        exampleNode.cpp\n\
        ${MEL_FILES}\n\
    )\n\
\n\
set(LIBRARIES\n\
    OpenMaya Foundation\n\
    )</pre></div></li>\n\
<li><p>A list of required 3rd party packages added using the <a href=\'#!/url=./dev_help/SettingUpCMake/LibraryMacros.html\' title=\'\'><span class=\'code\'>find_&lt;package_name&gt;</span></a> macros or the <a href=\'#!/url=./dev_help/SettingUpCMake/ThirdPartyLibs.html\' title=\'\'><span class=\'code\'>find_package()</span></a> call.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">find_package(MtoA)\n\
find_alembic()\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">  cmake_minimum_required(VERSION 3.13)\n\
\n\
 include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)\n\
\n\
set(RESOURCES_FILES myResource.xpm)\n\
\n\
set(MEL_FILES \n\
    exampleNode.mel)\n\
\n\
set(SOURCE_FILES\n\
        exampleNode.cpp\n\
        ${MEL_FILES}\n\
    )\n\
\n\
set(LIBRARIES\n\
    OpenMaya Foundation\n\
    )\n\
\n\
find_package(MtoA)\n\
find_alembic()</pre></div></li>\n\
<li><p>Finally, the build function.</p>\n\
<p>If you are creating a plug-in, add <span class=\'code\'>build_plugin()</span>. If you are creating a standalone application, add <span class=\'code\'>build_application()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 3.13)\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)\n\
\n\
set(RESOURCES_FILES myResource.xpm)\n\
\n\
set(MEL_FILES \n\
    exampleNode.mel)\n\
\n\
set(SOURCE_FILES\n\
        exampleNode.cpp\n\
        ${MEL_FILES}\n\
    )\n\
\n\
set(LIBRARIES\n\
    OpenMaya Foundation\n\
    )\n\
\n\
find_package(MtoA)\n\
find_alembic()\n\
build_plugin()</pre></div></li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";