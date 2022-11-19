var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Working with PySide in Maya</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Working with PySide in Maya</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"working-with-pyside-in-maya\"></a></div>\n\
<p>PySide2 provides Qt Python bindings. The version of PySide2 used with Maya can be found on the <a href=\'#!/url=./dev_help/Open-Source-Components.html\' title=\'\'>Open Source Components</a> page.</p>\n\
<p>Some things to keep in mind when working with PySide2 are:</p>\n\
<ul>\n\
<li>A unique <span class=\'code\'>objectName()</span> is needed for your widget so that it can be used and looked up through <span class=\'code\'>maya.OpenMayaUI.MQtUtil.findControl()</span>.</li>\n\
<li>There are no native sizing preferences for PySide2 widgets. You can use the <span class=\'code\'>windowPref</span> command directly to set the sizing preferences.</li>\n\
<li>When docking windows, the size of the widget is retained and you can dock multiple windows to the same area so that you can switch among them via a tab as with Maya.</li>\n\
<li><p>You must parent your widget under an existing Maya widget to prevent it from being destroyed by the Python garbage collector. You can parent the widget to the Maya main window or the dock control. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">hello = QLabel(&quot;Hello, World&quot;, parent=mayaMainWindow) \n\
hello.setObjectName(&#39;MyLabel&#39;) \n\
hello.setWindowFlags(Qt.Window) # Make this widget a parented standalone window\n\
hello.show() \n\
hello = None # widget is parented, so it will not be destroyed. </pre></div></li>\n\
</ul>\n\
<p>Several example PySide2 scripts are provided in the Maya devkit in <span class=\'code\'>pythonScripts</span> under the <span class=\'code\'>devkit</span> directory.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";