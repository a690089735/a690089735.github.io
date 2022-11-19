var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-689A4F6D-B02C-445D-A05B-D12FCF582A09\">\n      <meta name=\"description\" content=\"使用材质的颜色组件（如漫反射颜色）中的贴图可将贴图的颜色应用于该组件。将贴图应用于其他类型的材质组件会具有不同的效果，例如，使材质看起来凹凸不平，控制材质的透明度，控制高光的外观等等。也可以将环境用作贴图以模拟反射或折射，或将背景提供给场景。\">\n      <meta name=\"indexterm\" content=\"作为材质组件的贴图\">\n      <meta name=\"indexterm\" content=\"贴图: 作为材质组件\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>将贴图和环境用作材质组件</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-689A4F6D-B02C-445D-A05B-D12FCF582A09\"></a><div class=\"head\">\n            <h1>将贴图和环境用作材质组件</h1>\n         </div>\n         <p class=\"blurb\">使用材质的颜色组件（如漫反射颜色）中的贴图可将贴图的颜色应用于该组件。将贴图应用于其他类型的材质组件会具有不同的效果，例如，使材质看起来凹凸不平，控制材质的透明度，控制高光的外观等等。也可以将环境用作贴图以模拟反射或折射，或将背景提供给场景。\n            \n            \n         </p>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF32631\"></a>本部分中的主题介绍了使用各种常用材质组件的贴图的效果。本主题不介绍贴图可应用于的所有可能材质组件：有关特定材质类型中组件的完整列表，请参考该材质的描述。 \n            	 \n         </p><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-C01E4AFD-392A-4736-BD8C-E6B0D220FD71.htm\">环境光颜色贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>将图像贴图到材质的<span class=\"char_link\"><a href=\"GUID-FE816049-4624-46CD-BAFC-F59931A92F06.htm\">环境光颜色</a></span>。图像绘制在对象的明暗处理部分。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-69603DC2-F58C-4053-A955-EA19FDB8D084.htm\">漫反射颜色贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>，以将图案或纹理指定给材质的<span class=\"char_link\"><a href=\"GUID-3CEBFC6A-7A8F-4E78-9CF2-F78BA9CFCDC3.htm\">漫反射颜色</a></span>。贴图的颜色将替换材质的漫反射颜色组件。这是最常用的一种贴图用法。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-99C10931-185F-4F67-A2E8-5809F1C943C9.htm\">漫反射贴图</a><p>“散射”贴图组件提供附加的，二级的纹理来修改“散射”组件。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-A492627F-CD39-40DA-8ED9-E03B2E9C56C5.htm\">漫反射级别贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制漫反射级别参数。贴图中白色像素保留漫反射级别无更改。黑色像素将漫反射级别降低到 0。中间值会相应地调整漫反射级别。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-EB812FAD-58F4-42F1-AADD-95A1AB76BD2A.htm\">漫反射粗糙度贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制“基本参数”卷展栏上的“粗糙度”参数。贴图中的白色像素增加粗糙度。黑色像素将粗糙度减少到 0。中间值相应地会调整粗糙度。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-C6E7C770-B86C-40B9-9900-4A22544E31B0.htm\">高光颜色贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>，以将图像指定给材质的<span class=\"char_link\"><a href=\"GUID-90065A74-C223-474C-8D85-7596D70E5004.htm\">高光颜色组件</a></span>。贴图的图像只出现在反射高光区域中。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-0CEDBCDF-7AD6-4C42-A44B-03DF9E35771B.htm\">高光级别贴图</a><p>可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>基于位图的强度来改变反射高光的强度。贴图中的白色像素产生全部反射高光。黑色像素将完全移除反射高光，并且中间值相应减少反射高光。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-76F225CD-982A-4F17-9935-A656E6878BCD.htm\">光泽度贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>控制反射高光显示位置。指定给光泽度材质组件的贴图决定整个曲面的哪些区域更有光泽，哪些区域不太有光泽，具体情况取决于贴图中颜色的强度。贴图中的黑色像素将产生全面的光泽。白色像素将完全消除光泽，中间值会减少高光的大小。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-0584ED4B-FE91-4B0B-A09C-22557D5D51DD.htm\">自发光贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制<span class=\"char_link\"><a href=\"GUID-2666F7BF-D728-4056-B247-638D77B79003.htm\">自发光值</a></span>。这样将使对象的部分出现发光。贴图的白色区域渲染为完全自发光。不使用自发光渲染黑色区域。灰色区域渲染为部分自发光，具体情况取决于灰度值。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-DA60809C-7486-47BC-818B-61716CD3AE1E.htm\">不透明贴图</a><p>可以通过在“不透明度”材质组件中使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来生成部分透明的对象。贴图的浅色（较高的值）区域渲染为不透明；深色区域渲染为透明；之间的值渲染为半透明。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-911073ED-9A73-482A-A274-6DED542F6DA3.htm\">裁切贴图</a><p>将<span class=\"char_link\"><a href=\"GUID-A1654CD2-2A7C-42A6-816D-28F7A849F96F.htm\">位图</a></span>或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>指定给“裁切”组件可使材质部分透明。贴图的浅色（较高的值）区域渲染为不透明；深色区域渲染为透明；之间的值渲染为半透明。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-3A448CA5-9351-430C-94F2-608FED248D32.htm\">过滤颜色贴图</a><p>过滤颜色，也称为半透明颜色，是通过透明或半透明材质（如玻璃）透射的颜色。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-6DDCC0F8-BBC5-4D61-B2D8-E7CF84BEF108.htm\">各向异性贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制“各向异性”参数。该贴图通常（但不一定）在“光泽度”参数所指定的区域内控制各向异性高光的图形。黑色值和白色值具有一定影响。具有大量灰度值的贴图（如<span class=\"char_link\"><a href=\"GUID-3D77DCAE-1812-4E87-B4DC-880846CBF2B4.htm\">噪波</a></span>或<span class=\"char_link\"><a href=\"GUID-B3F75800-E884-467B-A4D1-C95702BFA15F.htm\">衰减</a></span>）可能非常有效。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-F6764F2B-9B06-41F0-93EA-85F7C5E533C7.htm\">方向贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制方向材质组件。方向控制各向异性高光的位置。使用方向贴图可更改高光的位置。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-E99E42C2-4DC2-4487-A4E1-556C56822ED4.htm\">金属度贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制金属度材质组件。贴图中的白色像素增加金属度。黑色像素将金属度减少到 0。中间值相应地会调整金属度。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-2818B285-15A3-4E7F-8E0F-8C00B37D0FA8.htm\">凹凸贴图</a><p>您可以将位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>用作凹凸贴图，该贴图能够使对象看起来具有凹凸不平或不规则的曲面。用凹凸贴图材质渲染对象时，贴图较明亮（较白）的区域看上去被提升，而较暗（较黑）的区域看上去被降低。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-14B36287-F9FB-4D92-98D3-A95D100DA296.htm\">置换贴图</a><p>置换贴图可以使曲面的几何体产生置换。它的效果与使用<span class=\"char_link\"><a href=\"GUID-12F0E0BA-3FCA-4C8F-8C9B-C77C8FB4A45C.htm\">置换修改器</a></span>类似。与<span class=\"char_link\"><a href=\"GUID-2818B285-15A3-4E7F-8E0F-8C00B37D0FA8.htm\">凹凸贴图</a></span>不同，置换贴图实际上更改了曲面的几何体或面片细分。位移贴图应用贴图的灰度来生成位移。在 2D 图像中，较亮的颜色比较暗的颜色更多的向外突出，导致几何体的 3D 置换。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-C65DE825-BAB0-4CDA-82E2-CCE1EAFAFAC5.htm\">反射贴图</a><p>您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>控制对象曲面的反射率。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-CCD9B76C-9AC6-46E6-8B9C-E367CFC0FDAF.htm\">折射贴图</a><p>可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>（例如<span class=\"char_link\"><a href=\"GUID-D3621A9C-931C-4D24-8D32-60C2494F5F9E.htm\">反射/折射</a></span>）来控制对象的折射。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-34D36047-F87E-4FAC-912F-CDFD8CE82937.htm\">环境贴图</a><p>场景背景可以使用贴图。反射贴图和折射贴图也使用环境坐标，而不是纹理坐标。 </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-13427D7B-634B-4CF5-8657-EBDD61DFB5F0.htm\">关于贴图</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-69603DC2-F58C-4053-A955-EA19FDB8D084.htm\">漫反射颜色贴图</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";