var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Setting up your C++ Hello World example project</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Setting up your C++ Hello World example project</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"setting-up-your-c-hello-world-example-project\"></a></div>\n\
<p>As a first excercise in creating a command plug-in, create a command plug-in that prints &quot;Hello World&quot; in the Maya output window.</p>\n\
<p>After setting up your environment according to the instructions in <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a>, create a directory called <span class=\'code\'>helloWorld</span> and create your <span class=\'code\'>helloWorld.cpp</span> file in that directory.</p>\n\
<p>You can use any editor or IDE to write your code. You will use CMake to generate a Visual Studio project, an Xcode project, or a makefile with which to build your plug-in.</p>\n\
<p><a href=\'#!/url=./dev_help/A-First-Plugin/cpp/HelloWorldComplete.html\' title=\'\'>Copy the C++ code</a> to your <span class=\'code\'>helloWorld.cpp</span> file. A walkthrough of this code is provided in <a href=\'#!/url=./dev_help/A-First-Plugin/cpp/Hello-World-Explained.html\' title=\'\'>A C++ Hello World example explained</a>.</p>\n\
<p>Create a <span class=\'code\'>CMakeLists.txt</span> file for this project and save it to the <span class=\'code\'>helloWorld</span> directory:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">cmake_minimum_required(VERSION 3.13)\n\
\n\
set(PROJECT_NAME helloWorld)\n\
project(${PROJECT_NAME})\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
  \n\
set(SOURCE_FILES\n\
    helloWorld.cpp\n\
)\n\
\n\
set(LIBRARIES\n\
    OpenMaya Foundation\n\
)\n\
  \n\
build_plugin()\n\
</pre></div><p>Use <a href=\'#!/url=./dev_help/SettingUpCMake/Building-with-cmake.html\' title=\'\'>CMake</a> to generate a project for your code:</p>\n\
<ul>\n\
<li><span class=\'code\'>cmake -H. -Bbuild -G &quot;Visual Studio 16 2019 Win64&quot;</span> to generate a Visual Studio project</li>\n\
<li><span class=\'code\'>cmake -H. -Bbuild -G Xcode</span> to generate an Xcode project</li>\n\
<li><span class=\'code\'>cmake -H. -Bbuild -G &quot;Unix Makefiles&quot;</span> to generate a makefile</li>\n\
</ul>\n\
<p>Once you have generate your project or makefile, you can either open the project in Visual Studio or Xcode and build your plug-in from there, or use CMake again to build your plug-in:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake --build build\n\
</pre></div><p>You can now <a href=\'#!/url=./dev_help/LoadingAndUnloadingPlugins/Loading-Samples-Plug-ins-Into-Maya.html\' title=\'\'>load your plug-in into Maya</a> using the Plug-in Manager, which is accessed from <strong>Window &gt; Settings/Preferences &gt; Plug-in Manager</strong> from the Maya menu.</p>\n\
<p>Once loaded, run <span class=\'code\'>helloWorld</span> from the Maya command window:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/HelloWorldHiThere.png\' title=\'alt text\' /></div>\n\
<p>Your greeting will be printed to the Maya output window:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/HelloWorldHiThereOutput.png\' title=\'alt text\' /></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";