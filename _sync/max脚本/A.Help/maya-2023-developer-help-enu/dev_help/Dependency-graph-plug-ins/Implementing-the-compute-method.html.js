var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The compute() method</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The compute() method</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-compute-method\"></a></div>\n\
<p>All nodes that process data implement the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#ae17c4b226f482e2d77c3f99375d1eea0&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::compute()</a></span> method:</p>\n\
<p><span class=\'code\'>MPxNode::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; dataBlock )</span></p>\n\
<p><span class=\'code\'>compute()</span> is called when one or more of a node&#39;s output plugs <a href=\'#!/url=./dev_help/Dependency-graph-plug-ins/DirtyPropagation.html\' title=\'\'>is marked as dirty and needs to be recomputed</a>.</p>\n\
<p>The value of the attribute associated with the output plug will be recomputed using the updated value of the attributes that affect it. The output attribute&#39;s value in the node&#39;s data block is then updated with the recomputed value.</p>\n\
<p>The <span class=\'code\'>compute()</span> method should not use any data that is not available to it through its attributes, and it should only modify its output attributes.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";