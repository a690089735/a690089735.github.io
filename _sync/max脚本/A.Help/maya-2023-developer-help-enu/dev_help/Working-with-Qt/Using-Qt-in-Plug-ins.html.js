var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Building Qt examples</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Building Qt examples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"building-qt-examples\"></a></div>\n\
<p>Maya ships with Qt libraries and header files. These libraries may be different than other Qt libraries installed on your system. This is why it is important that the directory containing the headers packaged with Maya appear in your include path before other Qt header directories, and that the directory containing Maya&#39;s version of the libraries appears in your library path before other Qt library directories.</p>\n\
<p>Use the qmake provided with the Maya devkit to build Qt plug-ins. qmake is located in the devkit&#39;s <span class=\'code\'>bin</span> directory on all platforms.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Qt plug-ins must be built in the Visual Studio x64 Command Prompt on Windows. Use the Windows search function to find its location on your system.</p>\n\
</blockquote>\n\
<p>Before building Qt examples, set up your environment according to the instructions in <a href=\'#!/url=./dev_help/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a>.</p>\n\
<p>To build a Qt example:</p>\n\
<ol>\n\
<li>Extract the Qt headers. See <a href=\'#!/url=./dev_help/Working-with-Qt/QtHeadersAndLibraries.html\' title=\'\'>Qt headers and libraries</a> for details.</li>\n\
<li>Locate the plug-in you want to build. Plug-in examples are located in devkit&#39;s <span class=\'code\'>plug-ins</span> directory. Qt example will have <span class=\'code\'>Qt</span> in their names, and the files belonging to a specific example will be named similarly. For example, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"helixQtCmd.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/helix_qt_cmd_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">helixQtCmd.cpp</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"helixQtCmd.h\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/helix_qt_cmd_8h-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">helixQtCmd.h</a></span>, and <span class=\'code\'>helixQtCmd.pro</span> files belong to the helixQtCmd.</li>\n\
<li>Create a directory named after your example and copy all the related files to that directory. For example, create the <span class=\'code\'>helixQtCmd</span> directory and copy <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"helixQtCmd.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/helix_qt_cmd_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">helixQtCmd.cpp</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"helixQtCmd.h\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/helix_qt_cmd_8h-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">helixQtCmd.h</a></span>, and <span class=\'code\'>helixQtCmd.pro</span> to that directory.</li>\n\
<li>Copy the <span class=\'code\'>qtconfig</span> file, also located in the <span class=\'code\'>plug-ins</span> directory, to the <span class=\'code\'>helixQtCmd</span> directory.</li>\n\
<li>Change directory to the example&#39;s directory. For example, change directory to the <span class=\'code\'>helixQtCmd</span> directory.</li>\n\
<li>Run qmake on the <span class=\'code\'>pro</span> file to generate a makefile.</li>\n\
</ol>\n\
<p>For example, on Linux or macOS, you would run:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">```sh\n\
$DEVKIT_LOCATION/devkit/bin/qmake helixQtCmd.pro\n\
```\n\
\n\
On Windows, you would run:\n\
\n\
```sh\n\
%DEVKIT_LOCATION%\\devkit\\qmake.exe helixQtCmd.pro\n\
```\n\
\n\
On macOS, the makefile will have the name of the project with the `.mak` extension added. For example, `helixQtCmd.mak`.\n\
\n\
On Linux and Windows, the makefile will be named `Makefile` regardless of the name of the example.\n\
<ol>\n\
<li></li></ol></pre></div><p>Run <span class=\'code\'>make</span> on the makefile to build the plug-in.</p>\n\
<p>On Linux, run <span class=\'code\'>make –f Makefile</span></p>\n\
<p>On macOS, run <span class=\'code\'>make –f helixQtCmd.mak</span></p>\n\
<p>On Windows, run <span class=\'code\'>nmake /f Makefile</span></p>\n\
\n\
<div class=\'section\'><a id=\"debug-build\"></a><h2 id=\"debug-build\">Debug build</h2></div>\n\
<p>All of the example Qt plug-ins are built in release (that is, non-debug) mode. To build them for debug, turn on qmake&#39;s debug configuration parameter by doing the following in your .pro file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">CONFIG += debug\n\
\n\
</pre></div><p>That should be sufficient to build your plug-in for debug on Linux and OS X. Unfortunately, on Windows, the debug configuration setting does not just compile your plug-in with debugging information, but it also forces the plug-in to link with the debug versions of the Qt libraries. That makes the plug-in incompatible with Maya, which was linked using the release versions of the Qt libraries. Depending upon which Qt classes your plug-in uses, it may or may not load into Maya, but even if it does successfully load, it is unlikely to perform correctly since it will not have access to Maya&#39;s QCoreApplication or other Qt global values.To get around this, set the <em>debug</em> configuration parameter described above and build the intermediate makefiles using the following command, substituting the name of your plug-in for <em>myPlugin</em>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">nmake /f Makefile.qt myPlugin.mak\n\
\n\
</pre></div><p>This generates, among other things, a <span class=\'code\'>.mak.Debug</span> file for your plug-in (for example, <span class=\'code\'>myPlugin.mak.Debug</span>). Edit that file, find the <strong>LIBS</strong> line, and replace all of the debug Qt libraries with their non-debug versions by removing the final <em>d</em> from their names. For example, in <span class=\'code\'>helixQtCmd.mak.Debug</span> the <strong>LIBS</strong> line would initially look like this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">LIBS = /LIBPATH:..\\..\\lib ..\\..\\lib\\OpenMaya.lib ..\\..\\lib\\Foundation.lib ..\\..\\lib\\OpenMayaUI.lib c:\\qt-adsk-5.6.1\\lib\\QtGuid4.lib c:\\qt-adsk-5.6.1\\lib\\QtCored4.lib`\n\
\n\
</pre></div><p>You would replace <span class=\'code\'>QtGuid4.lib</span> with <span class=\'code\'>QtGui4.lib</span>, and <span class=\'code\'>QtCored4.lib</span> with <span class=\'code\'>QtCore4.lib</span>, leaving you with this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">LIBS = /LIBPATH:..\\..\\lib ..\\..\\lib\\OpenMaya.lib ..\\..\\lib\\Foundation.lib ..\\..\\lib\\OpenMayaUI.lib c:\\qt-adsk-5.6.1\\lib\\QtGui4.lib c:\\qt-adsk-5.6.1\\lib\\QtCore4.lib`\n\
\n\
</pre></div><p>Now use the modified <span class=\'code\'>.mak.Debug</span> file to explicitly build your plug-in:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">nmake /f myPlugin.mak.Debug debug\\myPlugin.mll\n\
\n\
</pre></div><p>This still leaves one potential problem area on Windows. Qt&#39;s QList template class provides inline methods which can create and destroy Qt objects. Because those methods are inlined, if they are called by plug-in code which has been built for debug, any objects created or deleted will use the memory allocator from the debug version of Microsoft&#39;s C Runtime Library. If the methods are called within Maya, they will use the release version of the C Runtime Library. Thus it is possible to get situations where objects are allocated within Maya using the release runtime library and deleted in the plug-in using the debug runtime library, or vice-versa. Since the release and debug versions of Microsoft&#39;s C Runtime Library are incompatible with each other, this can lead to crashes.</p>\n\
<p>At the moment, QList is the only Qt class we are aware of which has this potential for failure, but other Qt template classes could exhibit similar problems. To date, the only known workarounds are either to avoid the use of Qt template classes in your code, or to only build your plug-in in release mode on Windows.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";