var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Running Python scripts outside a Maya session</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Running Python scripts outside a Maya session</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"running-python-scripts-outside-a-maya-session\"></a></div>\n\
<p>You can run Python scripts that use Maya Python modules from standalone Python interpreters such as <span class=\'code\'>mayapy</span>. However, when you run a Python script from outside a Maya session using either <span class=\'code\'>mayapy</span> or another external interpreter, you will need to import and initialize the Maya Python libraries before you can use the Maya Python modules and APIs. This will load the libraries, check out licenses, and initialize graph states.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">import maya.standalone \n\
maya.standalone.initialize()\n\
</pre></div><p>Before your script exits, call <span class=\'code\'>maya.standalone.uninitialize()</span>. This will return licenses, unload the Maya libraries, and close the Maya session.</p>\n\
<p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">import maya.standalone\n\
maya.standalone.initialize()\n\
\n\
import maya.cmds\n\
\n\
# script body\n\
\n\
maya.standalone.uninitialize()\n\
</pre></div><blockquote>\n\
<p><strong>Note:</strong> Calling <span class=\'code\'>initialize()</span> and <span class=\'code\'>uninitialize()</span> from within a Maya process, whether through the script editor or a batch process, will generate an error because the Maya Python libraries are automatically loaded and initialized within a Maya process. If your Python script will be called either from within Maya or from within an external interpreter, you will need to enclose the calls to <span class=\'code\'>initialize()</span> and <span class=\'code\'>uninitialize()</span> within try blocks:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">try:\n\
  import maya.standalone\n\
  maya.standalone.initialize()\n\
except:\n\
  pass\n\
\n\
try:\n\
  maya.standalone.uninitialize()\n\
except:\n\
  pass\n\
</pre></div></blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";