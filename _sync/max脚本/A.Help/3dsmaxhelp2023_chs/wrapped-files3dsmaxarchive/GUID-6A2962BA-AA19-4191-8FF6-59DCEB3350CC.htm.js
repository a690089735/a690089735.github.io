var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-6A2962BA-AA19-4191-8FF6-59DCEB3350CC\">\n      <meta name=\"description\" content=\"“添加图像过滤器事件”提供图像和场景的图像处理。以下列出了几种类型的图像过滤器。例如，“底片”过滤器反转图像的颜色，“淡入淡出”过滤器随时间淡入淡出图像。\">\n      <meta name=\"indexterm\" content=\"过滤器: 过滤器事件（视频后期处理）\">\n      <meta name=\"indexterm\" content=\"添加: 图像过滤器事件（视频后期处理）\">\n      <meta name=\"indexterm\" content=\"图像过滤器事件（视频后期处理）\">\n      <meta name=\"indexterm\" content=\"视频后期处理: 图像过滤器事件\">\n      <meta name=\"contextid\" content=\"IDH_VP_EDIT_FILTER\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>添加图像过滤器事件</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-6A2962BA-AA19-4191-8FF6-59DCEB3350CC\"></a><div class=\"head\">\n            <h1>添加图像过滤器事件 </h1>\n         </div>\n         <p class=\"blurb\">“添加图像过滤器事件”提供图像和场景的图像处理。以下列出了几种类型的图像过滤器。例如，“底片”过滤器反转图像的颜色，“淡入淡出”过滤器随时间淡入淡出图像。 </p><a name=\"GUID-1EA2C27A-A791-4386-93FF-B5B9A1EAB089\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-235FDB7C-90B8-4BD3-B8E5-93C9BAFC174C\">“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “视频后期处理” <img src=\"../images/ac.menuaro.gif\"> “视频后期处理”窗口  <img src=\"../images/ac.menuaro.gif\">  确保队列中未选择任何事件。 <img src=\"../images/ac.menuaro.gif\"> “视频后期处理”工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-8A18F5CC-A85E-49BC-833C-1CE3F9A37C40-low.png\">（添加图像过滤器事件）</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-AF31AC80-17B7-46E2-8E81-AF7801F7A0E7\">“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “视频后期处理” <img src=\"../images/ac.menuaro.gif\"> “视频后期处理”窗口  <img src=\"../images/ac.menuaro.gif\">  从“视频后期处理队列”中选择过滤器。 <img src=\"../images/ac.menuaro.gif\"> “Video Post”工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-2A9F145D-5649-43FA-84FD-22500EDDA2C2-low.png\">（编辑当前事件）</span> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF9\"></a>“图像过滤器”事件通常是带有单一子事件（其自身也可以是带子事件的父事件）的父事件，例如，“场景”事件、“图像输入”事件、包含“场景”或“图像输入”事件的“层”事件，或包含“场景”或“图像输入”事件的“过滤器”事件。还可添加不带子事件的“图像过滤器”，此情况下，该“图像过滤器”会处理队列中以前事件的结果。\n            \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044654\"></a> \n            <h2><a name=\"GUID-0C95AE79-352E-4C2F-9778-A311DCE0D21F\"></a>可用的图像过滤器\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF8\"></a> <span class=\"char_link\"><a href=\"GUID-7B92DDDE-A150-46FF-95FF-EB88329E7966.htm\">对比度过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF7\"></a> <span class=\"char_link\"><a href=\"GUID-4A513922-F6CF-436F-A384-5B9833938269.htm\">淡入淡出过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF6\"></a> <span class=\"char_link\"><a href=\"GUID-39DCFA56-ABA5-4C83-8523-1EC34E11DB4A.htm\">图像 Alpha 过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF5\"></a> <span class=\"char_link\"><a href=\"GUID-666D8C66-F096-4062-9532-05B267629615.htm\">镜头效果过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF4\"></a> <span class=\"char_link\"><a href=\"GUID-F1B1EAE7-2E75-40EA-9EC2-0BBE46CE9B0C.htm\">底片过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF3\"></a> <span class=\"char_link\"><a href=\"GUID-CD376B67-4280-4635-9AFA-7CB2F7C73DAD.htm\">伪 Alpha 过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF2\"></a> <span class=\"char_link\"><a href=\"GUID-9B8958FE-5B11-4CC0-B84C-D65276F350BE.htm\">简单擦拭过滤器</a></span> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF1\"></a> <span class=\"char_link\"><a href=\"GUID-FAB6EFEE-AD32-4DF0-B882-D8BE55879851.htm\">星空过滤器</a></span> \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AF0\"></a> \n            <h2><a name=\"GUID-33F219C9-EF92-4D59-9712-130434E1C5A7\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190044655\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044656\"></a>要添加图像过滤器事件，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>选择有效子事件，或确保队列中未选择任何事件。 </li>\n               <li>单击 <img src=\"../images/GUID-8A18F5CC-A85E-49BC-833C-1CE3F9A37C40-low.png\">（添加图像过滤器事件）。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AEF\"></a>出现“添加图像过滤器事件”对话框。 \n                  </p> \n               </li>\n               <li>从“过滤器插件”列表中选择需要的过滤器种类。 </li>\n               <li>如果已启用该类过滤器的“设置”按钮，请单击“设置”以设置过滤器选项。 </li>\n               <li>如果希望遮罩过滤器，或如果要使用的该类过滤器需要遮罩，则选择遮罩。 </li>\n               <li>调整其他“图像过滤器”设置，然后单击“确定”。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AEE\"></a>如果已选择了子事件，则“图像过滤器”事件成为其父事件。如果未选择事件，则“图像过滤器”事件会出现在队列的末尾。 \n                  </p> \n               </li>\n            </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190044657\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044658\"></a>要选择遮罩文件，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>单击“文件”。 </li>\n               <li>使用文件对话框选择遮罩文件，然后单击“确定”。 </li>\n               <li>从通道的下拉列表中选择要使用的通道。 </li>\n            </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190044659\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004465A\"></a>要确定遮罩的位置或重新调整其大小，请执行以下操作：\n            </p>\n            <ul>\n               <li>单击“选项”。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AED\"></a>会出现“图像输入选项”对话框，它与为“图像输入”事件使用的对话框相同。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AEC\"></a>如果此遮罩已设置动画，也可使用该对话框指定其时间范围和播放速度。 \n                  </p> \n               </li>\n            </ul> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AEB\"></a> \n            <h2><a name=\"GUID-1F479959-2263-4DF7-BB6D-A49BEA49AD97\"></a>界面\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AEA\"></a>“添加图像过滤器事件”和“编辑过滤器事件”对话框具有相同的控件。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004465B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-53ED4268-DFEE-4A83-A749-53F6C86A0DCC-low.png\"></div> <a name=\"GUID-BB2095F7-3DDC-4DDA-A61F-A8B643865377\"></a><div class=\"dl_section\"><a name=\"GUID-637A1AFD-36C8-4536-9E96-F9EB02A6BE71\"></a><p class=\"title\"><a name=\"GUID-742E7BDE-22B1-4848-BEFD-361E26E504E7\"></a>“过滤器插件”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CAB\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE9\"></a>标签</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-69A5\"></a> 用于赋予事件唯一名称。唯一名称使此过滤器事件在长的事件列表中易于识别。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CAA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE8\"></a>[过滤器下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-69A4\"></a> 列出已安装的过滤器<span class=\"char_link\"><a href=\"../files3dsmaxhelp/GUID-E63D24C3-B78F-4A36-AAD0-CCE047694F87.htm\">插件</a></span>。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE7\"></a>有关随 <span class=\"charspan-msgph\">3ds Max</span> 一起提供的各个过滤器的说明，可通过单击以上列出的任一过滤器来查看独立的帮助主题。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE6\"></a>关于</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-69A3\"></a> 提供特定于插件的版本和来源信息。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA8\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE5\"></a>设置</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-69A2\"></a> 显示特定于插件的设置对话框。部分插件可能无法使用此按钮。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-6F33D9EE-BD65-4BAD-890A-9090CCB033EA\"></a><p class=\"title\"><a name=\"GUID-CC171FBB-11BE-47A8-B82C-A8FA41C24D61\"></a>“遮罩”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA7\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE4\"></a>[通道下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-69A1\"></a> 如果要将位图用做遮罩文件，可以使用 Alpha 通道、“红色”、“绿色”或“蓝色”通道、“亮度”、“Z 缓冲”、“材质 ID”通道或“对象 ID”。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA6\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE3\"></a>文件</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-69A0\"></a> 选择用做遮罩的文件。选定文件的名称会出现在“文件”按钮上方。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE2\"></a>选项</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-699F\"></a> 显示<span class=\"char_link\"><a href=\"GUID-A1125069-1987-4BA8-A8C3-7A1DE17BEC64.htm\">“图像输入选项”对话框</a></span>，可以在该对话框中设置相对于视频输出帧的对齐和大小。对于已设置动画的图像，还可将遮罩与视频输出帧序列同步。该对话框与用于“图像输入事件”选项的对话框相同。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE1\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-699E\"></a> 启用遮罩。如果禁用该框，则“Video Post”会忽略任何其他遮罩设置。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7AE0\"></a>反转</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-699D\"></a> 启用后，将遮罩反转。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-F4D24C00-3D03-44A2-B6C3-4BE2DA10320B\"></a><p class=\"title\"><a name=\"GUID-5F76A9AA-BA9F-498A-AD58-BE176318F926\"></a>“Video Post 参数”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7ADF\"></a>VP 开始时间/结束时间</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-699C\"></a> 在整个 Video Post 队列中设置选定事件的开始和结束帧。“Video Post”根据此处指定的帧数渲染事件。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7CA1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7ADE\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-699B\"></a> 启用或禁用事件。禁用该框时，事件被禁用，当渲染队列时，“Video Post”会忽略该事件。必须分别禁用各个事件。例如，禁用合成层事件并不禁用合成的图像事件。禁用事件的范围栏在事件轨迹区域中不可用。 \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";