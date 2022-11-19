var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Compiling the .NET examples</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Compiling the .NET examples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"compiling-the-.net-examples\"></a></div>\n\
<p>The Maya devkit includes several C# plug-in examples. The examples are located in the <span class=\'code\'>%DEVKIT_LOCATION%\\devkit\\dotnet\\examples</span> and <span class=\'code\'>%DEVKIT_LOCATION%\\devkit\\dotnet\\wpfexamples</span> directories. A Visual Studio solution file is included in each directory.</p>\n\
<p>To build the examples:</p>\n\
<ol>\n\
<li>Copy the example directories to a location outside of the devkit. This is not required, but it guarantees that a clean copy of the examples is kept within the devkit.</li>\n\
<li>Open the example&#39;s Visual Studio solution file in Visual Studio.</li>\n\
<li>Add <span class=\'code\'>openmayacs.dll</span> to the project references.</li>\n\
<li>Right-click on <strong>References</strong> under the project, and select <strong>Add reference</strong> <a href=\'#!/url=./dev_help/images/DotNetExampleAddReference.png\' title=\'\'>alt text</a></li>\n\
<li>In the Reference Manager, click on <strong>Browse</strong>. Change directory to <span class=\'code\'>%MAYA_LOCATION%\\bin\\</span> and add <span class=\'code\'>openmayacs.dll</span> to the references. If you had previously added <span class=\'code\'>openmaycs.dll</span> to a project, it will be visible under your recent items. In this case, simply select the dll.</li>\n\
<li>Build the solution as usual.</li>\n\
</ol>\n\
<p>The built examples will be located in the <span class=\'code\'>assemblies</span> directory and will have the extension <span class=\'code\'>.nll.dll</span>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";