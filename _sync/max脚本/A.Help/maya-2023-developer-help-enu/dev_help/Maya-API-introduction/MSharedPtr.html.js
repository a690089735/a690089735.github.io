var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MSharedPtr</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MSharedPtr</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"msharedptr\"></a></div>\n\
<p>MSharedPtr&lt;&gt; is a template class that is used to share objects between a plug-in and Maya. It behaves similarly to std::shared_ptr, and as with std::shared_Ptr, MSharedPtr&lt;&gt; keeps track of references to an object, and destroys and deallocates the object when there are no more references to it.</p>\n\
<p>If an MSharedPtr&lt;&gt; is returned to you, you will need to maintain it. As with any other smart pointer, hold an MSharedPtr&lt;&gt; for any object you may want to reuse later. Maya will hold its own MSharedPtr&lt;&gt; for any objects it may use again later to prevent the objects from being destroyed and deallocated.</p>\n\
<p>More than one MSharedPtr&lt;&gt; can point to the same object. However, you cannot have both an MSharedPtr&lt;&gt; and a std::shared_ptr pointing at the same object.</p>\n\
<p>MSharedPtr&lt;&gt; is typically templated on <a href=\'#!/url=./dev_help/Maya-API-introduction/Proxies.html\' title=\'\'>proxy classes</a>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";