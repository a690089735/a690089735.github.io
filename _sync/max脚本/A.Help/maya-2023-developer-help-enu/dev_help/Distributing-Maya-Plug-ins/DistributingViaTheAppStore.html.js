var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Distributing Maya plug-ins using the Autodesk App Store package format</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Distributing Maya plug-ins using the Autodesk App Store package format</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"distributing-maya-plug-ins-using-the-autodesk-app-store-package-format\"></a></div>\n\
<p>Maya plug-ins can be packaged and distributed using the Autodesk App Store package format. This format bundles a plug-in&#39;s components together in one package along with a <span class=\'code\'>PackageContents.xml</span> file.</p>\n\
<p>The <span class=\'code\'>PackageContents.xml</span> file contains version information, company information, links to the documentation, paths to the plug-ins in the package, and plug-in runtime requirements.</p>\n\
<p>For more information, see <a href=\'https://www.autodesk.com/developer-network/app-store/maya\' title=\'\' target=\'_blank\'>The Autodesk App Store—information for Maya developers</a>.</p>\n\
<p>Maya plug-ins packaged using this format do not necessarily need to be distributed using the App Store.</p>\n\
<div class=\'section\'><a id=\"about-autoloading-the-plug-in\"></a><h2 id=\"about-autoloading-the-plug-in\">About autoloading the plug-in</h2></div>\n\
<p>The <span class=\'code\'>AutoLoad</span> option in the <span class=\'code\'>ComponentEntry</span> definition takes precedence over the plug-in&#39;s autoload setting in the Maya Plug-In Manager.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">&lt;ComponentEntry ModuleName=&quot;./Contents/plug-ins/myNode.py&quot; AutoLoad=&quot;True&quot; /&gt;\n\
</pre></div><p>This means that if <span class=\'code\'>AutoLoad</span> is set to <span class=\'code\'>True</span>, the plug-in will be autoloaded regardless of whether the autoload option has been unchecked in the plug-in manager.</p>\n\
<p>To prevent this situation from occurring, the Maya-specific <span class=\'code\'>AutoLoadOnce</span> option can be used instead:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">&lt;ComponentEntry ModuleName=&quot;./Contents/plug-ins/myNode.py&quot; AutoLoadOnce=&quot;True&quot; /&gt;\n\
</pre></div><p>Setting <span class=\'code\'>AutoLoadOnce</span> to <span class=\'code\'>True</span> will result in the plug-in being autoloaded the first time Maya is started after it has been installed. However, if the plug-in&#39;s autoload option is unchecked in the plug-in manager, the plug-in will not be autoloaded on startup from that point on.</p>\n\
<p>This setting is connected to preferences. If preferences are reset, the plug-in will once again be autoloaded into Maya.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";