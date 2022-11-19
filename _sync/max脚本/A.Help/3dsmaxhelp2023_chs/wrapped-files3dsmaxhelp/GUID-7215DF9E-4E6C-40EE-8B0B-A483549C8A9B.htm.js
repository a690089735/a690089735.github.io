var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-7215DF9E-4E6C-40EE-8B0B-A483549C8A9B\">\n      <meta name=\"description\" content=\"您可以通过 CFD 模拟的速度场平流输送特定位置生成一个或多个样条线。\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>通过 CFD 速度场跟踪单个样条线路径</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-7215DF9E-4E6C-40EE-8B0B-A483549C8A9B\"></a><div class=\"head\">\n            <h1>通过 CFD 速度场跟踪单个样条线路径</h1>\n         </div>\n         <p class=\"blurb\">您可以通过 CFD 模拟的速度场平流输送特定位置生成一个或多个样条线。 \n            \n         </p>\n         <div><a name=\"GUID-A97D25C0-1F66-4F7F-BC1F-F9EA5180D1D9\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>自 <em class=\"strong\">3ds Max 2022</em> 起，弃用此处介绍的 CFD 工作流，在将来的版本中可能会将其删除。\n               	 \n            </div>\n         </div><a name=\"OL_581F46AB8BBF4E939AFC39F9F8C7E5AF\"></a><ol type=\"1\" start=\"1\">\n            <li>导入 Simulation CFD 文件，如<span class=\"char_link\"><a href=\"GUID-BF5681E7-6E90-40A1-9F7C-F9604ED03F0F.htm\">此处</a></span>所述。 \n               		\n            </li>\n            <li>添加辅助对象，例如点或虚拟辅助对象。 \n               		\n            </li>\n            <li>将辅助对象移动到要开始绘制样条线的位置。 \n               		\n            </li>\n            <li>选择<span class=\"MenuCascade\">“创建” <img src=\"../images/ac.menuaro.gif\"> “AEC 对象” <img src=\"../images/ac.menuaro.gif\"> “CFD 可视化” <img src=\"../images/ac.menuaro.gif\"> “MCG 创建 CFD 样条线”</span>。 \n               		\n            </li>\n            <li>出现提示时，请首先拾取 CFDImportData 对象，然后拾取辅助对象。 \n               		  \n               <p>将在场景中创建 CFDSplineNode 对象。 \n                  		  \n               </p> \n            </li>\n            <li>在<span class=\"MenuCascade\">“修改”</span>面板上，根据需要调整 CFDSplineNode 的<span class=\"MenuCascade\">“样条线参数”</span>。样条线的长度由<span class=\"MenuCascade\">“样条线顶点数”</span>和<span class=\"MenuCascade\">“现场采样”</span>的组合控制。 \n               		\n            </li>\n            <li>可以根据需要继续调整辅助对象的位置。 \n               		\n            </li>\n            <li>如果要保存样条线，请单击<span class=\"MenuCascade\">“烘焙样条线”</span>。这将创建一个单独的可编辑样条线，该样条线不再连接到辅助对象。 \n               		  \n               <p>您可以继续移动辅助对象，调整设置，然后保存更多样条线。 \n                  		  \n               </p> \n            </li>\n         </ol>\n         <div class=\"section\"><a name=\"SECTION_19BD97F943DD42CCA9FFDC8899298066\"></a> \n            <h2><a name=\"GUID-71B0A517-4C98-400D-9D56-FC04126EAB18\"></a><span class=\"MenuCascade\">样条线参数</span></h2> \n            <div class=\"section\"><a name=\"SECTION_6F2F4CA4F89E40E28D89DFF457D315A2\"></a> \n               <h3><a name=\"GUID-A8A90D31-D6FC-44FD-809B-EF415C6C9016\"></a>Sim CFD 数据\n               </h3> \n               <dl><a name=\"GUID-A2B3E813-F09B-4D8A-89EC-E45665004564\"></a><dt><span class=\"term\">（CFD 点） \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">单击以拾取场景中的其他 CFDImportData 对象。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-E0955385-CB3A-49F7-B713-C0B33D91C1C7\"></a><dt><span class=\"term\"><span class=\"MenuCascade\">刷新数据</span> </span></dt>\n                  <dd>\n                     <div class=\"definition\">如果作出更改时 CFDSplineNode 对象无法正确更新，请单击此选项。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_93C9C38F959744F383FDCD6EA522D3D7\"></a> \n               <h3><a name=\"GUID-010E31CF-80C9-4535-9C38-BAF55E20CC02\"></a>样条线控制\n               </h3> \n               <dl><a name=\"GUID-10644993-4300-4ADA-872A-FCC062BCE125\"></a><dt><span class=\"term\">（样条线原点辅助对象） \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">单击以拾取场景中的其他 CFDImportData 对象。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-5B72910F-562D-44B0-A75A-AE30FDDF4A3C\"></a><dt><span class=\"term\"><span class=\"MenuCascade\">样条线顶点数</span> </span></dt>\n                  <dd>\n                     <div class=\"definition\">生成的样条线中的顶点数。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_750E329F66B548D6A477F5FDAE68578A\"></a> \n               <h3><a name=\"GUID-D61185B2-84FE-46F5-8028-00A620A11559\"></a>插值设置\n               </h3> \n               <dl><a name=\"GUID-6B17C1E0-64AF-4D2E-B9B1-2ACA4066E2AE\"></a><dt><span class=\"term\"><span class=\"MenuCascade\">顶点数</span> </span></dt>\n                  <dd>\n                     <div class=\"definition\">每个顶点要采样的附近 CFD 数据点数。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-038D3146-AF8E-44BA-BB1A-18FAFC811588\"></a><dt><span class=\"term\"><span class=\"MenuCascade\">平滑</span> </span></dt>\n                  <dd>\n                     <div class=\"definition\">控制附近 CFD 数据点的权重：1.0 提供线性衰减，2.0 提供平方反比衰减，依此类推。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-339F2D31-FA47-4E6A-B717-9BA134B099DC\"></a><dt><span class=\"term\"><span class=\"MenuCascade\">现场采样</span> </span></dt>\n                  <dd>\n                     <div class=\"definition\">速度矢量的除数，用于在每个步骤中延伸样条线。值大于 1.0 会导致样条线顶点之间的分段更短、更准确，而值介于 1.0 和 0.0 之间则导致分段更长。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_D9C0281DD668434DAA47465773480B95\"></a> \n               <h3><a name=\"GUID-9D5BE316-E1D0-4C63-948A-7905344E83E2\"></a>材质控制\n               </h3> \n               <p>控制指定给每个样条线分段的材质 ID。默认情况下，会将“多维/子对象”材质应用于样条线，并且连续的样条线线段可以根据材质 ID 循环切换使用子材质。 \n                  		  \n               </p> \n               <dl><a name=\"GUID-2D645148-07DD-4F79-BB76-39BC7476894A\"></a><dt><span class=\"term\">材质计数 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">控制连续样条线循环切换使用的子材质数。如果该值小于或等于 1，则所有分段将使用第一个子材质；如果值为 2，则分段将循环使用前两个子材质；依此类推。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-0EFE7AE0-C315-4118-8C9B-217E1BD0E985\"></a><dt><span class=\"term\"><span class=\"MenuCascade\">材质动画</span> </span></dt>\n                  <dd>\n                     <div class=\"definition\">将材质循环偏移指定数量的位置。可以为该值设置动画，以沿着样条线移动子材质。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";