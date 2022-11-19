var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Building examples on Linux</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Building examples on Linux</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"building-examples-on-linux\"></a></div>\n\
<blockquote>\n\
<p><strong>Important:</strong> You need to set up your environment as described in <a href=\'#!/url=./dev_help/Setting-up-your-build/Linux-environment.html\' title=\'\'>Setting up your build environment</a> before building the examples.</p>\n\
</blockquote>\n\
<p>Plug-in examples are located in <span class=\'code\'>$DEVKIT_LOCATION/devkit/plug-ins/</span> and standalone application examples are located in <span class=\'code\'>$DEVKIT_LOCATION/devkit/applications/</span>. Each individual example is in its own dedicated directory. Change to the example&#39;s directory to build it.</p>\n\
<p>For example, the <span class=\'code\'>circleNode</span> plug-in example, is located in the <span class=\'code\'>circleNode</span> directory. To build it, change directory to <span class=\'code\'>circleNode</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cd $DEVKIT_LOCATION/devkit/plug-ins/circleNode\n\
</pre></div><p>To build an example, run <span class=\'code\'>cmake</span> once to generate a makefile:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cmake -H. -Bbuild -G &quot;Unix Makefiles&quot;\n\
</pre></div><p>The <span class=\'code\'>cmake</span> command should exit with no errors and create a <span class=\'code\'>build</span> directory.</p>\n\
<p>Run <span class=\'code\'>cmake</span> again to build the example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cmake --build build\n\
</pre></div><p>The executable or plug-in will be located under the <span class=\'code\'>build</span> directory.</p>\n\
<p>Plug-ins have the suffix <span class=\'code\'>so</span>. For example, the <span class=\'code\'>circleNode</span> plug-in will be called <span class=\'code\'>circleNode/build/circleNode.so</span>.</p>\n\
<p>Unlike applications that can be run from the command line, plug-ins must be <a href=\'#!/url=./dev_help/Loading-Samples-Plug-ins-Into-Maya.html\' title=\'\'>loaded into Maya</a>.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Do not rebuild a plug-in that is already loaded into Maya. <a href=\'#!/url=./dev_help/Unloading-Plug-ins.html\' title=\'\'>Unload the plug-in</a> before you rebuild it.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";