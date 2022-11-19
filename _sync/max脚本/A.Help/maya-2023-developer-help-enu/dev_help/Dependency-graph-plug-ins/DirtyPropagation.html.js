var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Dirty propagation and attributeAffects()</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Dirty propagation and attributeAffects()</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"dirty-propagation-and-attributeaffects\"></a></div>\n\
<p>All nodes are required to specify which input attributes affect which output attributes using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::attributeAffects()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#aef755adb241fbe273368fefae14047a4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#adf19fe538d775ac2ec0169e6bc300f1c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::attributeAffects()</a></span>. This information is used for dirty propation.</p>\n\
<p>When an attribute changes, the dependency graph checks to see if that attribute affects any other attribute. If an attribute is affected, its plug is marked &quot;dirty&quot;, meaning that the attribute value is stale and needs to be recomputed.</p>\n\
<p>The connection from the dirty output plug is followed to the input plug it is connected to. That input plug is also marked dirty, and the plugs of any attributes it affects are also marked dirty. This process, referred to as dirty propagation, repeats until all the plugs in the graph that need to be recomputed are marked dirty. When the dependency node graph is recomputed, only the dirty plugs will be recomputed.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";