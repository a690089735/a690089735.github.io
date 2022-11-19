var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-31FB2A11-506D-40B8-B3CA-F199F0A03831\">\n      <meta name=\"description\" content=\"您可以选择将 Inventor 对象作为“实体对象”或“可编辑网格”对象导入。其他各种选项可以控制 Inventor 文件导入。\">\n      <meta name=\"indexterm\" content=\"导入: IPT 文件\">\n      <meta name=\"indexterm\" content=\"IPT 文件（Inventor 零件）\">\n      <meta name=\"indexterm\" content=\"文件类型: IPT（Inventor 零件）\">\n      <meta name=\"indexterm\" content=\"导入: IAM 文件\">\n      <meta name=\"indexterm\" content=\"IAM 文件（Inventor 部件）\">\n      <meta name=\"indexterm\" content=\"文件类型: IAM（Inventor 部件）\">\n      <meta name=\"indexterm\" content=\"Autodesk Inventor 文件: 导入\">\n      <meta name=\"indexterm\" content=\"Inventor 文件: 导入\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"migrating\">\n      <title>“Autodesk Inventor 文件导入”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-31FB2A11-506D-40B8-B3CA-F199F0A03831\"></a><div class=\"head\">\n            <h1> “Autodesk Inventor 文件导入”对话框</h1>\n         </div>\n         <p class=\"blurb\">您可以选择将 Inventor 对象作为“实体对象”或“可编辑网格”对象导入。其他各种选项可以控制 Inventor 文件导入。 </p>\n         <div class=\"bodyReference\">\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2B16\"></a> <a name=\"WS1A9193826455F5FFBA679E112A6A190041FA\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-71C0B5CA-A2CB-422B-AA1B-DE6E96E9C6BB-low.png\"></div>  <a name=\"GUID-3A4B45D1-730E-440A-BD7A-0FE6E9465933\"></a><div class=\"dl_section\"><a name=\"GUID-EB89B54B-F790-4D1C-BA0D-355BAD8B0E5B\"></a><p class=\"title\"><a name=\"GUID-AF6CCE13-E005-4207-8A9F-20269E998E3D\"></a>导入为组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-287A\"></a>选择导入 Inventor 文件时所用的格式： \n                  </p><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2879\"></a><ul>\n                     <li> <em class=\"strong\">实体对象</em>将 Inventor 文件作为“实体对象”导入，这会保留所有 ACIS 实体信息（导入 SAT 文件时也会使用“实体对象”）。要将这些对象另存为实体，请使用 SAT 导出器。 \n                     </li>\n                     <li> <em class=\"strong\">网格</em>将 Inventor 文件作为“可编辑网格对象”导入。使用网格分辨率设置（参见下文）可以确定所导入的网格的细致度或粗糙度。 \n                     </li>\n                  </ul>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-E8492337-92BF-4070-BCF1-B54D0C001985\"></a><p class=\"title\"><a name=\"GUID-0174574C-872A-4D23-8E5A-49ACECB1F246\"></a>“集合选项”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2875\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2874\"></a>参考重复部分</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2873\"></a> 启用时，导入器将 Inventor 文件中的重复部分视为相互参考。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2871\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2870\"></a>按材质创建层</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-286F\"></a> 基于传入材质生成层信息。共享材质的所有对象将放在相同层上。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-286D\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-286C\"></a>为材质添加对象名称</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-286B\"></a> 导入材质时，将使用导入材质名称作为对象名称的一部分。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-512E07D0-B25E-48F5-BB29-0779D88F40CE\"></a><p class=\"title\"><a name=\"GUID-0FBB577B-A0F7-4536-82AE-FAC07C34429B\"></a>“合并/替换选项”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2866\"></a>选择导入器处理当前场景内容的方式： \n                  </p><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-2865\"></a><ul>\n                     <li> <em class=\"strong\">和当前场景合并</em> 将导入的几何体与现在已显示在场景中的现有几何体进行合并。此设置用于将单独文件中的组件到单个场景中。 \n                     </li>\n                     <li> <em class=\"strong\">完全替换当前场景</em>（默认设置。）导入的数据完全替换当前场景中任何现有几何体。如果当前场景尚未保存，则允许在继续执行导入过程之前保存场景。 \n                     </li>\n                  </ul>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-62C6765A-CD4B-4787-A5B6-0FDE03263C0B\"></a><p class=\"title\"><a name=\"GUID-0A7B1862-8652-47C6-B258-1B0BC7178522\"></a>“材质选项”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-264B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-1F7C\"></a>导入 inventor 材质</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1472\"></a> 启用时，所有 Inventor 材质和纹理贴图都转换并导入到场景中。禁用时，不导入模型的任何材质。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-264A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-1F7B\"></a>指定材质 ID</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1471\"></a> 可以控制是否将材质 ID 指定给从 Inventor 导入的对象。使用 Inventor 时，可以为同一对象的不同表面指定不同的材质。当这些对象导入到 <span class=\"charspan-msgph\">3ds Max</span> 时，将材质 ID 指定给应用多个材质的单个对象上的面。 \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-1F7A\"></a>例如，假如创建了一个对象，该对象代表了一个带有线轴的圆球，为圆球应用黑色的塑料材质，为线轴应用银色的金属材质。如果将模型导入到 <span class=\"charspan-msgph\">3ds Max</span> 时“指定材质 ID”处于启用状态，则会给已指定塑料材质的导入面指定材质 ID #1，给已指定金属材质的面指定材质 ID #2。如果在 <span class=\"charspan-msgph\">3ds Max</span> 中处理时，您选择尝试不同材质，可以很快根据材质 ID 进行子对象选择，或应用“多维/子对象”材质，它包含对应于已指定给各个面的 ID 的材质。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-44DB5AD6-8BD4-4FAD-A200-C37FE53DD26D\"></a><p class=\"title\"><a name=\"GUID-31B245E7-7AEA-44C4-8D84-E98CE009E838\"></a>“网格分辨率”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-2649\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-1F79\"></a>“网格分辨率”滑块</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1470\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8754851\"></a>作为网格导入时，此滑块允许确定应用于网格对象的精致度。设置为 0 时，几何体导入时与在 Autodesk Inventor 中的外貌相同。设置为小于零的值时，将以较少面对网格进行优化，因此会减少细节。如果将网格分辨率设置为大于零，则以更多的面来细化网格，从而得到更多细节。\n                              \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-1F78\"></a>启动导入时，网格分辨率滑块总是设置为 0。 \n                           </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041FE\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C80E812A-25AC-452E-A80E-F9018EDF4ADC-low.png\"></div>  \n                           <p><a name=\"GUID-D42C5026-B8F9-40B7-8296-35F1108376A0\"></a> <em class=\"strong\">左侧：网格分辨率 = -7</em> \n                           </p> \n                           <p><a name=\"GUID-7ECC9461-1DE6-432A-BB48-1BFAEF5B4CC5\"></a> <em class=\"strong\">中心：网格分辨率 = 0</em> \n                           </p> \n                           <p><a name=\"GUID-ADB7F260-59E2-4047-979E-B36305BDA7C3\"></a> <em class=\"strong\">右侧：网格分辨率 = +7</em> \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E43B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>只有从 Autodesk Inventor 10 或更高版本中导入模型时调整网格分辨率的选项才可用。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-997808DD-70E5-405B-8628-A1E9623EF8DE\"></a><p class=\"title\"><a name=\"GUID-8BA72DC8-8565-40A2-A8AF-6796DB9B86B1\"></a>“Inventor 文件垂直方向”组\n                  </p>\n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-1F77\"></a>该选项确定导入时模型的方向。可以选择 Inventor 模型的垂直轴。 \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-285F\"></a>选择轴选项： \n                  </p><a name=\"WS1A9193826455F5FF5BB0A1A512649144CFC-285E\"></a><ul>\n                     <li> <em class=\"strong\">X 轴</em>Inventor 中看到的模型 X 轴，导入后发生旋转并作为垂直轴。 \n                     </li>\n                     <li> <em class=\"strong\">Y 轴</em>模型导入后，Y 轴作为垂直轴。 \n                     </li>\n                     <li> <em class=\"strong\">Z 轴</em>导入后的模型发生旋转使 Z 轴作为垂直轴。 \n                     </li>\n                  </ul>\n               </div> \n            </div>\n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-93B409C7-A983-4CB7-9535-A819FA7B6936.htm\">对实体对象使用修改器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-5C468918-9ACC-40D7-A3A6-32BCEEEF1C10.htm\">“SAT 导入”对话框</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";