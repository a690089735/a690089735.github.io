var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using semantics and annotations in your GLSL shader</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using semantics and annotations in your GLSL shader</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-semantics-and-annotations-in-your-glsl-shader\"></a></div>\n\
<p>The list of semantics supported by the glslShader plug-in can be found at: <a href=\'#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html\' title=\'\'>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0</a> and <a href=\'#!/url=./dev_help/Viewport-2-0-API/Shader-semantics-supported-by.html\' title=\'\'>Shader semantics supported by Viewport 2.0</a>.</p>\n\
<p>Annotations can also be used for uniform, technique, and pass definitions. The list of supported annotations can be found at: <a href=\'#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html\' title=\'\'>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0</a>.</p>\n\
<p>Annotations can be used as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">uniform myUniform : SEMANTIC\n\
&lt;\n\
    string myStringAnnotation = &quot;myStrValue&quot;;\n\
    int myIntAnnotation = 1;\n\
    float myFloatAnnotation = 2.0;  // = 2; also works\n\
    // boolean annotation are not yet supported : use string annotation instead\n\
    string myBooleanAnnotation = &quot;true&quot;;\n\
&gt;;\n\
 \n\
technique myTechnique\n\
&lt;\n\
    string myTechniqueAnnotation = &quot;myValue&quot;;\n\
&gt;\n\
{\n\
    pass myPass\n\
    &lt;\n\
        string myPassAnnotation = &quot;myValue&quot;;\n\
    &gt;\n\
    {\n\
        // shader stages\n\
    }\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";