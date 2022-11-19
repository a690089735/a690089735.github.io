var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command Arguments and Flags</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Command Arguments and Flags</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"command-arguments-and-flags\"></a></div>\n\
<p>A command can have both arguments and flags.</p>\n\
<p>Flags are named options to a command. For example, in</p>\n\
<p><span class=\'code\'>cmds.polyCube( sx=10, sy=15, sz=5, h=20 )</span></p>\n\
<p>&#39;<span class=\'code\'>sx</span>&#39;, &#39;<span class=\'code\'>sy</span>&#39;, &#39;<span class=\'code\'>sz</span>&#39;, and &#39;<span class=\'code\'>h</span>&#39; are command flags.</p>\n\
<p>Command arguments do not have associated names. They will always appear at the beginning of the call to the command, before the command&#39;s flags. For example, in</p>\n\
<p><span class=\'code\'>cmds.group( &#39;circle1&#39;, &#39;sphere1&#39;, n=&#39;group1&#39; )</span></p>\n\
<p><span class=\'code\'>&#39;circle1&#39;</span> and <span class=\'code\'>&#39;sphere1&#39;</span> are command arguments. They are placed before the optional &#39;<span class=\'code\'>n</span> flag.</p>\n\
<p>When your command processes arguments or flags, <span class=\'code\'>registerCommand()</span> needs to include the command&#39;s argument syntax.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-python\">mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
</pre></div><p><span class=\'code\'>syntaxCreator</span> is an MSyntax object that defines the flags and arguments. Flags are added with <span class=\'code\'>MSyntax.addFlag()</span> and arguments are added with <span class=\'code\'>MSyntax.addArg()</span>.</p>\n\
<p>The MSyntax object is parsed in the <a href=\'#!/url=./dev_help/Maya-Python-API/Command-Plug-in-Basics/DoItAndRedoIt.html\' title=\'\'><span class=\'code\'>doIt</span></a> function by using the MArgParser and MArgList classes.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";