var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-845EB927-AD0B-49EE-9904-D673DEF9603E\">\n      <meta name=\"description\" content=\"“材质导出”对话框用于为导出贴图进行设置，贴图是与导出的 OBJ 文件都是材质定义的一部分。\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"migrating\">\n      <title>“OBJ 贴图导出”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-845EB927-AD0B-49EE-9904-D673DEF9603E\"></a><div class=\"head\">\n            <h1>“OBJ 贴图导出”对话框</h1>\n         </div>\n         <p class=\"blurb\">“材质导出”对话框用于为导出贴图进行设置，贴图是与导出的 OBJ 文件都是材质定义的一部分。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_1AB662C347B343CBB2202152FB6C1594\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-F2F2C3B5-62B4-451E-B660-6A5F9E76D3B6\">“文件”菜单  <img src=\"../images/ac.menuaro.gif\"> “导出” <img src=\"../images/ac.menuaro.gif\"> “另存为类型” <img src=\"../images/ac.menuaro.gif\"> “gw::OBJ-Exporter (*.OBJ)” <img src=\"../images/ac.menuaro.gif\"> “材质”组  <img src=\"../images/ac.menuaro.gif\"> “材质导出”按钮</span> \n               </li>\n            </ul><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7652\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2E5D0DA8-B769-457B-87AC-177BD1291D6E-low.png\"></div><a name=\"GUID-264BBB5D-44B8-4B2B-8AEF-F7876D63CB8C\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-2571\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7651\"></a>使用材质路径</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1390\"></a> 禁用时（默认情况下），贴图与 OBJ 文件使用相同的文件夹。启用时，贴图使用指定的文件夹（参见以下内容），与包含 OBJ 文件的文件夹相对应。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-2570\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-764F\"></a>[贴图路径]</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-138F\"></a> 启用“使用贴图路径”时，将为导出器指定保存贴图的文件夹，该文件夹相对于包含 OBJ 文件的文件夹。从键盘编辑路径或单击文本框右侧的“文件夹”按钮导航到所需的文件夹。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-256F\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-764D\"></a>贴图通道</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-138E\"></a> 使用数值字段指定贴图通道，或单击自动（禁用数值字段）自动设置通道。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-256E\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-764B\"></a>扩展的材质参数</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-138D\"></a> 启用时，将凹凸量值、UVW 偏移和 UVW 向平铺存储在 MTL 文件中。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-256D\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7649\"></a>转换位图</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-138C\"></a> 启用时，根据格式设置和可选的大小设置将材质中使用的现存位图重新保存（参见如下内容）。禁用时，使用没有重新保存的原始位图。 \n                     <p><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7647\"></a>重新保存的贴图与 OBJ 文件位于同一路径，或者在启用“使用贴图路径”的情况下，存放于指定的文件夹下。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7646\"></a>对位图进行转换时，还可以启用以下两种选项之一： \n                     </p> <a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7645\"></a><ul>\n                        <li><em class=\"strong\">重新调整大小</em> 启用时，将按“大小”设置中指定的分辨率保存位图。 \n                        </li>\n                        <li><em class=\"strong\">2n</em> 将每个转换位图的尺寸缩放到最接近的 2 的幂。例如，可将分辨率为 200 x 900 的位图调整为 256 x 1024。当目标是实时 3D 图像引擎时使用此选项。 \n                        </li>\n                     </ul> \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-256C\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7642\"></a>渲染程序</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-138B\"></a> 使用指定的“格式”和“大小”设置，创建程序纹理（例如棋盘格）的位图图像。当所需的目标程序不支持 <span class=\"charspan-msgph\">3ds Max</span> 程序贴图时，使用此选项。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-256B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-7640\"></a>格式</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-138A\"></a> 为转换的位图选择文件格式。\n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-256A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-763E\"></a>设置</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1389\"></a> 打开活动文件格式的“设置”对话框。有关详细信息，请单击格式定义中的链接，以继续。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-2569\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-21CB8BBA116ED45764C-763C\"></a>大小</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1388\"></a> 对于转换的位图、调整过大小的位图和渲染过的程序，在水平尺寸和垂直尺寸上设置输出分辨率。 \n                  </div>\n               </dd>\n            </dl>\n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-0F4CC48B-8245-46C8-995D-43403C583EA3.htm\">贴图和明暗器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-33CBE5B2-DFE9-49FF-9D4F-AA7ABF62138E.htm\">图像文件格式</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";