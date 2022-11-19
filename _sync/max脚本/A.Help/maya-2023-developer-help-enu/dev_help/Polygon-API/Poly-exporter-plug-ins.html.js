var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Poly exporter plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Poly exporter plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"poly-exporter-plug-ins\"></a></div>\n\
<p>These are two new example exporter plug-ins that demonstrate how to extract polygonal data from Maya using the Poly API. The two exporters write out data in raw text and Extensible 3D (X3D) formats respectively. The functionality is split into two components, one that extracts the data from Maya and stores it in intermediate data structures, and the second that writes the data to a file in the required format. These two components are implemented as pure virtual base classes from which the user derives to implement export to a specific format. More detailed comments are in the source code.</p>\n\
<div class=\'section\'><a id=\"classes\"></a><h2 id=\"classes\">Classes</h2></div>\n\
<ul>\n\
<li>polyExporter – base class for code that extracts poly information from Maya.</li>\n\
<li>polyWriter – base class for code that writes data to a disk file.</li>\n\
<li>polyRawExporter, polyRawWriter – Derived classes implementing raw text output.</li>\n\
<li>polyX3DExporter, polyRawWriter – Derived classes implementing X3D output.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"polyx3dexporter\"></a><h2 id=\"polyx3dexporter\">polyX3DExporter</h2></div>\n\
<p>Adds the ability to export polygonal meshes from a Maya scene to the Extensible 3D (X3D) file format. Once this plug-in is loaded, the new file format is listed as an output format for export.</p>\n\
<p>Polygonal meshes are exported by using theFile &gt; Export All menu item (or by selected specific meshes and using the File &gt; Export Selection option), choosing X3D as the file type, and providing a filename. The resulting file will be in X3D compliant format.</p>\n\
<p>This plug-in example demonstrates how to utilize the Maya Poly API for extracting polygonal geometry data, in conjunction with the Maya <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator</a></span> class to create a file exporter plug-in. Currently, data that is extracted includes:</p>\n\
<ul>\n\
<li>faces and their vertex components</li>\n\
<li>vertex coordinates</li>\n\
<li>colors per vertex</li>\n\
<li>normals per vertex</li>\n\
<li>current uv set and coordinates (X3D did not support multiple UV sets when this plug-in was written.)</li>\n\
<li>component sets</li>\n\
<li>file textures (for the current UV set)</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"polyrawexporter\"></a><h2 id=\"polyrawexporter\">polyRawExporter</h2></div>\n\
<p>This exporter is the same as polyX3DExporter except that the output data is in raw text format rather than X3D. Also this plug-in exports all UV sets and coordinates.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";