var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XML file for fragment graph of a shading network rooted at phong1</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XML file for fragment graph of a shading network rooted at phong1</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"xml-file-for-fragment-graph-of-a-shading-network-rooted-at-phong1\"></a></div>\n\
<p>The following is an XML file for a fragment graph of a shading network rooted at phong1(type: phong).</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;!--\n\
Copyright 2014 Autodesk, Inc. All rights reserved. \n\
\n\
Use of this software is subject to the terms of the Autodesk \n\
license agreement provided at the time of installation or download, \n\
or which otherwise accompanies this software in either electronic \n\
or hard copy form.\n\
--&gt;\n\
&lt;fragment_graph  name=&quot;MFragmentManager_getFragmentXML_TempGraph&quot; ref=&quot;MFragmentManager_getFragmentXML_TempGraph&quot; class=&quot;FragmentGraph&quot; version=&quot;1.0&quot; feature_level=&quot;0&quot; &gt;\n\
    &lt;fragments&gt;\n\
            &lt;fragment_ref name=&quot;phong_1&quot; ref=&quot;phong_1&quot; /&gt;\n\
            &lt;fragment_ref name=&quot;mayafloat3PassThrough59&quot; ref=&quot;mayafloat3PassThrough&quot; /&gt;\n\
            &lt;fragment_ref name=&quot;mayaNormalFlip&quot; ref=&quot;mayaNormalFlip&quot; /&gt;\n\
            &lt;fragment_ref name=&quot;mayaIsBackFacing&quot; ref=&quot;mayaIsBackFacing&quot; /&gt;\n\
            &lt;fragment_ref name=&quot;mayaIrradiance&quot; ref=&quot;mayaIrradiance&quot; /&gt;\n\
            &lt;fragment_ref name=&quot;mayaLightSelector16&quot; ref=&quot;mayaLightSelector16&quot; /&gt;\n\
            &lt;fragment_ref name=&quot;mayafloat3PassThrough58&quot; ref=&quot;mayafloat3PassThrough&quot; /&gt;\n\
    &lt;/fragments&gt;\n\
    &lt;connections&gt;\n\
        &lt;connect from=&quot;mayafloat3PassThrough59.mayafloat3PassThrough&quot; to=&quot;phong_1.Nw&quot; name=&quot;Nw&quot; /&gt;\n\
        &lt;connect from=&quot;mayaIrradiance.Ld&quot; to=&quot;phong_1.Lw&quot; name=&quot;Lw&quot; /&gt;\n\
        &lt;connect from=&quot;mayaIrradiance.Ls&quot; to=&quot;phong_1.HLw&quot; name=&quot;HLw&quot; /&gt;\n\
        &lt;connect from=&quot;mayaIrradiance.diffuseI&quot; to=&quot;phong_1.diffuseI&quot; name=&quot;diffuseI&quot; /&gt;\n\
        &lt;connect from=&quot;mayaIrradiance.specularI&quot; to=&quot;phong_1.specularI&quot; name=&quot;specularI&quot; /&gt;\n\
        &lt;connect from=&quot;mayaIrradiance.Ls&quot; to=&quot;phong_1.SLw&quot; name=&quot;SLw&quot; /&gt;\n\
        &lt;connect from=&quot;mayafloat3PassThrough58.mayafloat3PassThrough&quot; to=&quot;phong_1.ambientIn&quot; name=&quot;ambientIn&quot; /&gt;\n\
        &lt;connect from=&quot;mayaNormalFlip.mayaNormalFlip&quot; to=&quot;mayafloat3PassThrough59.input&quot; name=&quot;Nw&quot; /&gt;\n\
        &lt;connect from=&quot;mayaIsBackFacing.mayaIsBackFacing&quot; to=&quot;mayaNormalFlip.isBackFacing&quot; name=&quot;isBackFacing&quot; /&gt;\n\
        &lt;connect from=&quot;mayaLightSelector16.mayaLightSelector16&quot; to=&quot;mayaIrradiance.irradiance&quot; name=&quot;irradiance&quot; /&gt;\n\
    &lt;/connections&gt;\n\
    &lt;properties&gt;\n\
        &lt;undefined  name=&quot;GPUStage&quot; ref=&quot;phong_1.GPUStage&quot; semantic=&quot;GPUStage&quot; /&gt;\n\
        &lt;float3  name=&quot;Nw&quot; ref=&quot;mayaNormalFlip.Nw&quot; flags=&quot;varyingInputParam&quot; /&gt;\n\
        &lt;float  name=&quot;facingFactor&quot; ref=&quot;mayaIsBackFacing.facingFactor&quot; semantic=&quot;SV_FACE&quot; /&gt;\n\
        &lt;float  name=&quot;mayaNormalMultiplier&quot; ref=&quot;mayaNormalFlip.mayaNormalMultiplier&quot; /&gt;\n\
        &lt;bool  name=&quot;isSingleSided&quot; ref=&quot;mayaNormalFlip.isSingleSided&quot; /&gt;\n\
        &lt;int  name=&quot;selectionIndex&quot; ref=&quot;mayaLightSelector16.selectionIndex&quot; /&gt;\n\
        &lt;struct  name=&quot;light0&quot; ref=&quot;mayaLightSelector16.light0&quot; /&gt;\n\
        &lt;struct  name=&quot;light1&quot; ref=&quot;mayaLightSelector16.light1&quot; /&gt;\n\
        &lt;struct  name=&quot;light2&quot; ref=&quot;mayaLightSelector16.light2&quot; /&gt;\n\
        &lt;struct  name=&quot;light3&quot; ref=&quot;mayaLightSelector16.light3&quot; /&gt;\n\
        &lt;struct  name=&quot;light4&quot; ref=&quot;mayaLightSelector16.light4&quot; /&gt;\n\
        &lt;struct  name=&quot;light5&quot; ref=&quot;mayaLightSelector16.light5&quot; /&gt;\n\
        &lt;struct  name=&quot;light6&quot; ref=&quot;mayaLightSelector16.light6&quot; /&gt;\n\
        &lt;struct  name=&quot;light7&quot; ref=&quot;mayaLightSelector16.light7&quot; /&gt;\n\
        &lt;struct  name=&quot;light8&quot; ref=&quot;mayaLightSelector16.light8&quot; /&gt;\n\
        &lt;struct  name=&quot;light9&quot; ref=&quot;mayaLightSelector16.light9&quot; /&gt;\n\
        &lt;struct  name=&quot;light10&quot; ref=&quot;mayaLightSelector16.light10&quot; /&gt;\n\
        &lt;struct  name=&quot;light11&quot; ref=&quot;mayaLightSelector16.light11&quot; /&gt;\n\
        &lt;struct  name=&quot;light12&quot; ref=&quot;mayaLightSelector16.light12&quot; /&gt;\n\
        &lt;struct  name=&quot;light13&quot; ref=&quot;mayaLightSelector16.light13&quot; /&gt;\n\
        &lt;struct  name=&quot;light14&quot; ref=&quot;mayaLightSelector16.light14&quot; /&gt;\n\
        &lt;struct  name=&quot;light15&quot; ref=&quot;mayaLightSelector16.light15&quot; /&gt;\n\
        &lt;float3  name=&quot;Vw&quot; ref=&quot;phong_1.Vw&quot; flags=&quot;varyingInputParam&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1diffuse&quot; ref=&quot;phong_1.diffuse&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1translucence&quot; ref=&quot;phong_1.translucence&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1translucenceDepth&quot; ref=&quot;phong_1.translucenceDepth&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1translucenceFocus&quot; ref=&quot;phong_1.translucenceFocus&quot; /&gt;\n\
        &lt;float3  name=&quot;phong_1specularColor&quot; ref=&quot;phong_1.specularColor&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1cosinePower&quot; ref=&quot;phong_1.cosinePower&quot; /&gt;\n\
        &lt;string  name=&quot;selector&quot; ref=&quot;phong_1.selector&quot; /&gt;\n\
        &lt;float3  name=&quot;phong_1color&quot; ref=&quot;phong_1.color&quot; /&gt;\n\
        &lt;float3  name=&quot;phong_1transparency&quot; ref=&quot;phong_1.transparency&quot; /&gt;\n\
        &lt;float3  name=&quot;phong_1ambientColor&quot; ref=&quot;phong_1.ambientColor&quot; /&gt;\n\
        &lt;float3  name=&quot;ambientIn&quot; ref=&quot;mayafloat3PassThrough58.input&quot; /&gt;\n\
        &lt;float3  name=&quot;phong_1incandescence&quot; ref=&quot;phong_1.incandescence&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1reflectivity&quot; ref=&quot;phong_1.reflectivity&quot; /&gt;\n\
        &lt;float3  name=&quot;phong_1reflectedColor&quot; ref=&quot;phong_1.reflectedColor&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1glowIntensity&quot; ref=&quot;phong_1.glowIntensity&quot; /&gt;\n\
        &lt;bool  name=&quot;phong_1hideSource&quot; ref=&quot;phong_1.hideSource&quot; /&gt;\n\
        &lt;float  name=&quot;phong_1matteOpacity&quot; ref=&quot;phong_1.matteOpacity&quot; /&gt;\n\
        &lt;int  name=&quot;phong_1matteOpacityMode&quot; ref=&quot;phong_1.matteOpacityMode&quot; /&gt;\n\
        &lt;float  name=&quot;extraOpacity&quot; ref=&quot;phong_1.extraOpacity&quot; /&gt;\n\
        &lt;bool  name=&quot;fogEnabled&quot; ref=&quot;phong_1.fogEnabled&quot; /&gt;\n\
        &lt;float3  name=&quot;Pm&quot; ref=&quot;phong_1.Pm&quot; /&gt;\n\
        &lt;float4x4  name=&quot;WorldViewProj&quot; ref=&quot;phong_1.WorldViewProj&quot; semantic=&quot;worldviewprojection&quot; /&gt;\n\
        &lt;float  name=&quot;fogStart&quot; ref=&quot;phong_1.fogStart&quot; /&gt;\n\
        &lt;float  name=&quot;fogEnd&quot; ref=&quot;phong_1.fogEnd&quot; /&gt;\n\
        &lt;int  name=&quot;fogMode&quot; ref=&quot;phong_1.fogMode&quot; /&gt;\n\
        &lt;float  name=&quot;fogDensity&quot; ref=&quot;phong_1.fogDensity&quot; /&gt;\n\
        &lt;float4  name=&quot;fogColor&quot; ref=&quot;phong_1.fogColor&quot; /&gt;\n\
    &lt;/properties&gt;\n\
    &lt;values&gt;\n\
&lt;float name=&quot;mayaNormalMultiplier&quot; value=&quot;1.000000&quot;  /&gt;\n\
&lt;bool name=&quot;isSingleSided&quot; value=&quot;false&quot;  /&gt;\n\
&lt;int name=&quot;selectionIndex&quot; value=&quot;0&quot;  /&gt;\n\
&lt;float name=&quot;phong_1diffuse&quot; value=&quot;0.800000&quot;  /&gt;\n\
&lt;float name=&quot;phong_1translucence&quot; value=&quot;0.000000&quot;  /&gt;\n\
&lt;float name=&quot;phong_1translucenceDepth&quot; value=&quot;0.500000&quot;  /&gt;\n\
&lt;float name=&quot;phong_1translucenceFocus&quot; value=&quot;0.500000&quot;  /&gt;\n\
&lt;float3 name=&quot;phong_1specularColor&quot; value=&quot;0.500000,0.500000,0.500000&quot;  /&gt;\n\
&lt;float name=&quot;phong_1cosinePower&quot; value=&quot;20.000000&quot;  /&gt;\n\
&lt;string name=&quot;selector&quot; value=&quot;mayaLightSelector16&quot;  /&gt;\n\
&lt;float3 name=&quot;phong_1color&quot; value=&quot;0.500000,0.500000,0.500000&quot;  /&gt;\n\
&lt;float3 name=&quot;phong_1transparency&quot; value=&quot;0.000000,0.000000,0.000000&quot;  /&gt;\n\
&lt;float3 name=&quot;phong_1ambientColor&quot; value=&quot;0.000000,0.000000,0.000000&quot;  /&gt;\n\
&lt;float3 name=&quot;phong_1incandescence&quot; value=&quot;0.000000,0.000000,0.000000&quot;  /&gt;\n\
&lt;float name=&quot;phong_1reflectivity&quot; value=&quot;0.500000&quot;  /&gt;\n\
&lt;float3 name=&quot;phong_1reflectedColor&quot; value=&quot;0.000000,0.000000,0.000000&quot;  /&gt;\n\
&lt;float name=&quot;phong_1glowIntensity&quot; value=&quot;0.000000&quot;  /&gt;\n\
&lt;bool name=&quot;phong_1hideSource&quot; value=&quot;false&quot;  /&gt;\n\
&lt;float name=&quot;phong_1matteOpacity&quot; value=&quot;1.000000&quot;  /&gt;\n\
&lt;int name=&quot;phong_1matteOpacityMode&quot; value=&quot;2&quot;  /&gt;\n\
&lt;float name=&quot;extraOpacity&quot; value=&quot;1.000000&quot;  /&gt;\n\
&lt;bool name=&quot;fogEnabled&quot; value=&quot;false&quot;  /&gt;\n\
&lt;float name=&quot;fogStart&quot; value=&quot;0.000000&quot;  /&gt;\n\
&lt;float name=&quot;fogEnd&quot; value=&quot;92.000000&quot;  /&gt;\n\
&lt;int name=&quot;fogMode&quot; value=&quot;0&quot;  /&gt;\n\
&lt;float name=&quot;fogDensity&quot; value=&quot;0.100000&quot;  /&gt;\n\
&lt;float4 name=&quot;fogColor&quot; value=&quot;0.500000,0.500000,0.500000,1.000000&quot;  /&gt;\n\
    &lt;/values&gt;\n\
    &lt;outputs&gt;\n\
        &lt;struct  name=&quot;mayaSurfaceShaderOutput&quot; ref=&quot;phong_1.mayaSurfaceShaderOutput&quot; /&gt;\n\
    &lt;/outputs&gt;\n\
&lt;/fragment_graph&gt;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";