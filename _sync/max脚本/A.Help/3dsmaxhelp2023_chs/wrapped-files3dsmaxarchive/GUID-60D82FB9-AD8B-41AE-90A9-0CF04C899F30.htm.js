var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-60D82FB9-AD8B-41AE-90A9-0CF04C899F30\">\n      <meta name=\"description\" content=\"在现有的动画关键点（也就是说，一个已求解的模拟）上，平滑用来创建看起来更自然的动画。如果在求解群组模拟时导致了动画对象位置或旋转的急促变化，请使用这些控件。\">\n      <meta name=\"indexterm\" content=\"群组卷展栏: 平滑\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“平滑”卷展栏</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-60D82FB9-AD8B-41AE-90A9-0CF04C899F30\"></a><div class=\"head\">\n            <h1>“平滑”卷展栏</h1>\n         </div>\n         <p class=\"blurb\">在现有的动画关键点（也就是说，一个已求解的模拟）上，平滑用来创建看起来更自然的动画。如果在求解群组模拟时导致了动画对象位置或旋转的急促变化，请使用这些控件。 </p><a name=\"GUID-8995A12C-69CC-4549-8C8F-D9FB64C73320\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-9E87EB0F-FFD5-4E80-A056-3F0B0CBF918C\"> <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-9A23D2B8-9CE2-40BE-98B6-651DBC94F4F7-low.png\">（辅助对象） <img src=\"../images/ac.menuaro.gif\"> “对象类型”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “群组” <img src=\"../images/ac.menuaro.gif\"> “平滑”卷展栏</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-BDF322AD-113A-4B24-AA19-9509867D1FDD\">选择群组对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “平滑”卷展栏</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F487552A50A53111913E7C26F-7715\"></a>默认情况下，平滑通过减少关键点来工作。作为一个选项，也可以过滤（平均）现有动画关键点使变化更加平稳，产生更加自然的动画。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4621\"></a> \n            <h2><a name=\"GUID-39E89E4A-9ECA-46D0-9AE8-E0E23261ACB0\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190045FD1\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-53D8954D-FB87-41FB-9E64-9BD8C0B48234-low.png\"></div> <a name=\"GUID-08611E47-1AEE-4D57-86DD-F63BACA34DA7\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9D6\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D4E\"></a>选择要平滑的对象</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A87\"></a> 打开选择对话框，可以指定要平滑的对象位置和/或旋转。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9D5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D4F\"></a>过滤器代理选择</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A86\"></a> 打开此选项时，由“选择要平滑的对象”打开的选择对话框仅显示代理。关闭此选项时，显示所有场景对象。默认设置为启用。 \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-4CCF0AF0-BD15-4F28-88C5-8554ACFA9D47\"></a><a name=\"UL_A6404774F82B4A4A9F281B51F4C70569\"></a><ul>\n                  <li><em class=\"strong\">整个动画</em>（默认设置。）平滑所有动画帧。 \n                  </li>\n                  <li><em class=\"strong\">动画分段</em>仅平滑“从”和“到”字段中指定范围内的帧。 \n                     <p><a name=\"GUID-6412150D-1636-4080-B0DE-F6D8F9176986\"></a><em class=\"strong\">从</em>当选择了“动画分段”时，指定要平滑动画的第一帧。 \n                     </p> \n                     <p><a name=\"GUID-E6C61FB5-9CCB-45BD-8F2D-BB8BFEFA5A89\"></a><em class=\"strong\">到</em>当选择了“动画分段”时，指定要平滑动画的最后一帧。 \n                     </p> \n                  </li>\n               </ul>\n            </div>\n            <dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9D0\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D54\"></a>位置</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A81\"></a> 打开此选项时，在模拟结束后，通过模拟产生的选定对象的动画路径便已经进行了平滑。默认设置为启用。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9CF\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D55\"></a>旋转</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A80\"></a> 打开此选项时，在模拟结束后，通过模拟产生的选定对象的旋转便已经进行了平滑。默认设置为启用。 \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-738A3BCA-6C97-4779-A305-EA922AC4B37C\"></a><p class=\"title\"><a name=\"GUID-094C0351-04B5-4245-B4F3-0788F8C21AAA\"></a>“减少”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9CE\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D56\"></a>减少</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A7F\"></a> 通过在每一帧中每隔 N 个关键点进行保留来减少关键点数目。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9CD\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D57\"></a>保留每 N 个关键点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A7E\"></a> <em class=\"strong\">N：</em>通过每隔 2 个关键点进行保留或每隔 3 个关键点进行保留等来限制平滑处理量。默认值为 2。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-397063B0-8879-4D44-8D54-6071559D9923\"></a><p class=\"title\"><a name=\"GUID-FD38B75B-FB4D-4698-9AAD-FC04F447B1FB\"></a>“过滤”组\n               </p>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D58\"></a>通过平均代理的当前位置和/或方向来平滑这些向前和向后的关键帧。将影响在计算中使用的所有关键帧。这些设置允许控制平滑执行时使用和扩展的关键帧数目。 \n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9CC\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D59\"></a>过滤器</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A7D\"></a> 打开此选项时，使用组中的其它设置来执行平滑操作。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9CB\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D5A\"></a>过去关键点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A7C\"></a> 使用当前帧之前的关键点数目来平均位置和/或旋转。默认值为 2。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9CA\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D5B\"></a>未来关键点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A7B\"></a> 使用当前帧之后的关键点数目来平均位置和/或旋转。默认值为 2。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9C9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D5C\"></a>平滑度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A7A\"></a> 确定要执行的平滑程度。设置的值越大，计算涉及到的所有关键点便越靠近平均值。默认值为 4。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D5D\"></a>可用的平滑度最大值始终为 6。可用的最小值取决于“过去的关键点”和“未来的关键点”设置。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9C8\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D5E\"></a>执行平滑处理</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A79\"></a> 单击此按钮来执行平滑操作。 \n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E849\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果“减少”和“过滤器”复选框都没有处于启用状态，那么就不执行平滑操作。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n            </dl> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";