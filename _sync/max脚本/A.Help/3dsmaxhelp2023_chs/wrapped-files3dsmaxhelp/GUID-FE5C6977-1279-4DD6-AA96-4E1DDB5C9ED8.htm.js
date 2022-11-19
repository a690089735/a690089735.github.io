var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-FE5C6977-1279-4DD6-AA96-4E1DDB5C9ED8\">\n      <meta name=\"description\" content=\"“摄影机贴图”修改器（对象空间版本）允许将对象混合于单个帧中的背景。\">\n      <meta name=\"indexterm\" content=\"摄影机贴图修改器: 对象空间\">\n      <meta name=\"indexterm\" content=\"修改器: 摄影机贴图\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 摄影机贴图\">\n      <meta name=\"indexterm\" content=\"图版匹配/MAX R2.5 抗锯齿\">\n      <meta name=\"indexterm\" content=\"背景: 和抗锯齿（摄影机贴图）\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>摄影机贴图修改器（对象空间）</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FE5C6977-1279-4DD6-AA96-4E1DDB5C9ED8\"></a><div class=\"head\">\n            <h1>摄影机贴图修改器（对象空间）</h1>\n         </div>\n         <p class=\"blurb\">“摄影机贴图”修改器（对象空间版本）允许将对象混合于单个帧中的背景。 \n            \n         </p>\n         <p><a name=\"GUID-5D6509BB-9764-4129-B530-B6B869A738A8\"></a>此修改器的工作方式是根据当前帧和场景中的特定摄影机指定平面贴图坐标。此修改器与摄影机贴图 (WSM) 修改器的区别在于，前者更新对象在每一帧的贴图坐标。 \n            	 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004366E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-59264E50-3700-47AB-8288-B983D8EDE382-low.png\"></div>\n         <p><a name=\"GUID-273A48E2-EDCB-4E6C-9591-8DB721871314\"></a> <em class=\"strong\">左：当通过摄影机贴图修改器使用的摄影机观察时，应用了该修改器的对象纹理会与背景相匹配。</em> \n         </p>\n         <p><a name=\"GUID-0F6B7BC5-6039-47D4-B633-A290FFBC968E\"></a> <em class=\"strong\">右：当通过未使用摄影机贴图的摄影机观察时，对象的纹理是基于对象的几何体的。</em> \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004366F\"></a> \n            <h2><a name=\"GUID-FD8AE24C-0249-4795-A6A3-D064A867128D\"></a>将对象混合于背景\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-44A1\"></a>“使用摄影机贴图修改器（对象空间）”主题介绍了如何将对象混合于背景。如果背景使用了与对象纹理贴图相同的图案，对象会在应用修改器并指定摄影机的那一帧与背景混合。如果摄影机或对象发生移动，那么对象会变得可见。为了产生这种效果，必须将背景贴图与对象贴图指定为相同的贴图。\n               \n               		\n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-449E\"></a>如果要移动摄影机并保持与背景的匹配，请使用摄影机贴图 (WSM)。 \n               		\n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043670\"></a> \n            <h2><a name=\"GUID-341085A0-AC25-4CF9-96CE-18236DD0FBCE\"></a>贴图坐标\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-44A0\"></a>因为贴图对象的精确度部分依赖于网格的复杂性，所以“混入背景”在应用于带有相对高密度三角曲面的对象时会达到最好效果。必要的密度同时依赖于从摄影机到对象的距离。 \n               		\n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-449F\"></a>简单长方体在仅占用背景中的一小部分时可能会看起来很好，但是如果没有充分细分会在上部靠近贴图的位置看上去发生扭曲。一些实验需要得到理想的贴图而且使几何体的复杂度最小。（通常情况下，对于占据屏幕四分之一大小的长方体对象，最好将其细分为 4x4x4。）\n               \n               		\n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E93B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当使用“摄影机贴图修改器”时，每次只能对一个对象应用修改器。如果对一个选择集应用，只有集中的第一项会正确地贴图。 \n                  		\n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043671\"></a> \n            <h2><a name=\"GUID-BF775164-BFAA-414F-9B1F-6346EE138CC1\"></a> 使用图版匹配/MAX R2.5 渲染过滤器\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-449D\"></a>在 <span class=\"charspan-msgph\">3ds Max</span> 3 以前的版本中，抗锯齿只影响几何体的边缘，位图的过滤由“位图贴图”参数（四棱锥、总面积或无过滤）控制。抗锯齿过滤器影响对象的每个方面，在过滤几何体边缘的同时也过滤纹理。虽然抗锯齿提供了更好的效果，它同时在渲染与环境背景相匹配的对象时产生矛盾。这是因为抗锯齿过滤器在默认情况下对背景不产生影响。\n               \n               		\n            </p> \n            <p><a name=\"GUID-9BD953CB-E662-462E-99C9-BCD32A2ADF0C\"></a>可以在“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“首选项”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“渲染”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“背景抗锯齿”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“过滤背景”中启用背景抗锯齿。要正确地将对象贴图匹配到未过滤的背景图像上，请使用“图版匹配/MAX R2.5”过滤器，以防止纹理受到抗锯齿的影响。 \n               		\n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-449C\"></a>在 <span class=\"charspan-msgph\">3ds Max</span> 中有三种可以将渲染对象无缝混合到背景环境中的方法： \n               		\n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190043672\"></a><ul>\n               <li>通过指定一个“无光/投影材质” \n                  		  \n               </li>\n               <li>通过对使用“摄影机贴图”的对象指定一个 100% 自发光的漫反射纹理 \n                  		  \n               </li>\n               <li>通过使用“环境／屏幕投影”指定 100% 自发光的漫反射纹理 \n                  		  \n               </li>\n            </ul> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-449B\"></a>将前景对象与未过滤背景匹配时，或者匹配 <span class=\"charspan-msgph\">3ds Max</span><em class=\"strong\"> 2.5 </em>渲染器的抗锯齿质量时，请使用图版匹配/MAX R2.5 抗锯齿。 \n               		\n            </p> \n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-BDE184E6-D1A3-4065-AAE7-F69D9C4E22E7.htm\">使用摄影机贴图修改器（对象空间）</a><p>摄影机贴图修改器（对象空间版本）基于当前帧和摄影机贴图修改器中指定的摄影机来指定平面贴图坐标。此修改器与摄影机贴图 (WSM) 修改器的区别在于，前者更新对象在每一帧的贴图坐标。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-41624ECB-C379-4F81-8782-3F432050A107.htm\">摄影机贴图修改器（对象空间）参考</a></li>\n               </ul>\n            </div></span><div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-4B1D7158-8FF8-48C6-9716-BECBD8D5C049.htm\">摄影机贴图修改器（世界空间）</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";