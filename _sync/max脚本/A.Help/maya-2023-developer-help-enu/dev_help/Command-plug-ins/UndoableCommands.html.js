var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Undoable commands</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Undoable commands</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"undoable-commands\"></a></div>\n\
<p>Any command that manipulates the state of the Dependency Graph and its nodes, including the DAG, should implement <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand::undoIt()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html#a0789a8d51244cad0495abb2b811c39db&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html#aef9a01827b5bbd0991c281c8ab16994d&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand::undoIt()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand::isUndoable()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html#a31978f979fb290149f118d3bcba9e9d6&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand::isUndoable()</a></span>,</p>\n\
<p><span class=\'code\'>undoIt()</span> reverses the manipulations that were performed in <a href=\'#!/url=./dev_help/Command-plug-ins/doItAndredoIt.html\' title=\'\'><span class=\'code\'>redoIt()</span></a>.</p>\n\
<p><span class=\'code\'>isUndoable()</span> indicates whether a command&#39;s actions can be undone and should be added to Maya&#39;s undo queue. It returns true if the command can be undone, and false otherwise. By default it returns false. You will need to override it in your command to return true if the command is is undoable</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Only commands that query the scene or do not modify it in any way should be non-undoable. If you create a non-undoable command that modifies the scene, it will break Maya&#39;s undo capability.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";