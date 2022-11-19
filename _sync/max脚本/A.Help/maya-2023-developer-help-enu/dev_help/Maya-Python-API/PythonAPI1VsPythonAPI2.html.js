var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Maya Python API 1.0 vs Maya Python API 2.0</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Maya Python API 1.0 vs Maya Python API 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"maya-python-api-1.0-vs-maya-python-api-2.0\"></a></div>\n\
<p>Maya Python API 1.0 is generated from the Maya C++ API. It is more comprehensive than Maya Python API 2.0, but less Pythonic than API 2.0. If you are already familiar with Python, API 1.0 may be less intuitive to use than API 2.0.</p>\n\
<p>Maya Python API 1.0 does not include Viewport 2.0 interfaces. The Viewport 2.0 Python API is only availabe in API 2.0.</p>\n\
<p>Maya Python API 2.0 is more Pythonic than Maya Python API 1.0. Its structure will be more familiar to Python programmers, and will be more intuitive to use as a result.</p>\n\
<p>Maya Python API 2.0 is not as comprehensive as API 1.0, but it has several advantages over API 1.0:</p>\n\
<ul>\n\
<li>Array types are full Python sequences</li>\n\
<li>Methods which take Maya array parameters will, with few exceptions, take native Python sequences, such as arrays and tuples</li>\n\
<li>Methods pass their outputs through return values rather than through their parameter lists</li>\n\
<li>Multiple values are returned as tuples or lists, eliminating the need for MScriptUtil</li>\n\
<li>Many object attributes are accessed directly instead of through setters and getters</li>\n\
<li>More types of exceptions</li>\n\
<li>Faster and more efficient</li>\n\
<li>Includes Viewport 2.0 API</li>\n\
</ul>\n\
<p>You can use both Maya Python API 1.0 and Maya Python API 2.0 together. However, you cannot pass an API 1.0 object to an API 2.0 method and vice versa.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";