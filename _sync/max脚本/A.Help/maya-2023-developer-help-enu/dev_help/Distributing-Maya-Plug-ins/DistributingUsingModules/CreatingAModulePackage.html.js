var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Creating a module package</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Creating a module package</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"creating-a-module-package\"></a></div>\n\
<p>Modules are a way of packaging and distributing Maya add-ons.</p>\n\
<p>Most Maya add-ons will include files such as scripts and icons in addition to the plug-in file. To distribute these files, the full zipped directory is packaged in a module along with a module file that describes how the files are to be used on different platforms.</p>\n\
<p>To create a module:</p>\n\
<ol>\n\
<li>Create a directory for your module</li>\n\
<li>Create the following subdirectories:\n\
<ul>\n\
<li><span class=\'code\'>icons</span></li>\n\
<li><span class=\'code\'>plug-ins</span></li>\n\
<li><span class=\'code\'>presets</span></li>\n\
<li><span class=\'code\'>scripts</span></li>\n\
</ul></li>\n\
<li>Add any icons used in your add-on to the <span class=\'code\'>icons</span> directory</li>\n\
<li>Add C++ or Python plug-ins to the <span class=\'code\'>plug-ins</span> directory</li>\n\
<li>Add presets to the <span class=\'code\'>presets</span> directory</li>\n\
<li>Add any MEL or Python scripts to the <span class=\'code\'>scripts</span> directory</li>\n\
<li>Create a module description file</li>\n\
<li>Add the module description file to the</li>\n\
</ol>\n\
<p>The module description file contains information about the location of the plug-in files. See <a href=\'#!/url=./dev_help/Distributing-Maya-Plug-ins/DistributingUsingModules/Maya-module-paths-folders-and.html\' title=\'\'>the section on module description files</a> and <a href=\'#!/url=./dev_help/Distributing-Maya-Plug-ins/DistributingUsingModules/SampleModuleFile.html\' title=\'\'>the sample module definition file</a> for information on creating a module description file,</p>\n\
<p>Once your module directory is complete, compress it and distribute it.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";