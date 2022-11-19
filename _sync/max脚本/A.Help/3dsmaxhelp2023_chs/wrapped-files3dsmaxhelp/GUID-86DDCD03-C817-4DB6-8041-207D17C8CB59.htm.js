var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-86DDCD03-C817-4DB6-8041-207D17C8CB59\">\n      <meta name=\"description\" content=\"控制 ProOptimizer 处理带有材质或纹理贴图的对象的方式。\">\n      <meta name=\"indexterm\" content=\"ProOptimizer 修改器: 材质和纹理贴图选项\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“材质和 UV”组</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-86DDCD03-C817-4DB6-8041-207D17C8CB59\"></a><div class=\"head\">\n            <h1>“材质和 UV”组</h1>\n         </div>\n         <p class=\"blurb\">控制 ProOptimizer 处理带有材质或纹理贴图的对象的方式。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_21B9498F05364D54A7E3F776247628E6\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-52CB1660-634D-48EB-A895-FC0FE79F34FA\">创建或导入一个对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “ProOptimizer”修改器  <img src=\"../images/ac.menuaro.gif\"> “优化选项”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “材质和 UV”组</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-23E9\"></a> \n               <h2><a name=\"GUID-9A15D6F1-E0F1-4F35-BE10-7C4B99AD0BE4\"></a>界面\n               </h2> <a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2526\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-6D8563F6-9851-46E3-83BD-BF92C5EDA852-low.png\"></div>  <a name=\"GUID-96C5776F-1B10-4DB9-B56A-7663B3C44173\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A18\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2525\"></a>保持材质边界</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C7A\"></a> \n                        <p><a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2524\"></a>启用时，ProOptimizer 将保留材质之间的边界。属于具有不同材质的面的点将被冻结，并且在优化过程中不会被移除。默认设置为启用。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-3254\"></a>禁用时，ProOptimizer 可沿材质之间的边界移除面。 \n                        </p> <a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-3253\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-BBD038D9-2856-41A8-9CD3-24755B06AB95-low.png\"><p class=\"figure-title\">原始对象</p>\n                        </div> <a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-3252\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-DFA867A0-66B2-47C5-8B8A-6E0FDF83A366-low.png\"><p class=\"figure-title\">以红色点显示材质之间边界的原始对象</p>\n                        </div> <a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-3251\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AC6B100B-B3A9-4C2B-9C43-5AE52D68416C-low.png\"><p class=\"figure-title\">“保持材质边界”处于启用状态时的优化对象（红色点显示边界）</p>\n                        </div> <a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-3250\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-080DEE4D-D87B-445C-8AD6-A96D99A081BD-low.png\"><p class=\"figure-title\">关闭“保持材质边界”时的优化对象</p>\n                        </div>     \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A17\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2523\"></a>保持纹理</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C79\"></a> \n                        <p><a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2522\"></a>启用时，ProOptimizer 将保留纹理贴图坐标。禁用时，ProOptimizer 将移除纹理坐标。默认设置为禁用状态。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-324F\"></a>如果对象没有纹理坐标，将禁用此选项。 \n                        </p> \n                        <div><a name=\"WS73099CC142F48755-42A8108711A530FF1D3-56A2\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果在优化带贴图的对象时禁用“保持纹理”，则当您尝试渲染该对象时，<span class=\"charspan-msgph\">3ds Max</span> 将显示“缺少贴图坐标”对话框。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A16\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2521\"></a>保持 UV 边界</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C78\"></a> \n                        <p><a name=\"WS73099CC142F48755-63C0748611A1FA08F71-2520\"></a>仅当启用“保持纹理”时，此控件才可用。启用时，ProOptimizer 将保留 UV 贴图值之间的边界。禁用时，ProOptimizer 将忽略 UV 贴图值。默认设置为禁用状态。 \n                        </p> <a name=\"WS73099CC142F48755-63C0748611A1FA08F71-1E17\"></a><ul>\n                           <li> <em class=\"strong\">公差</em>仅当启用“保持 UV 边界”时才可用。“公差”值控制 UV 边界的处理方式。值为 0.0（默认值）时，将保留所有具有与相邻面不同的 UV 贴图值的面。值为 1.0（默认值）时，允许移除任何面，即使其相邻面具有不同的 UV 值。 \n                              <div><a name=\"WS1A9193826455F5FF68908C3E11A1FA06A23-324D\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>将“公差”设置为 <em class=\"strong\">0.1</em> 时，将保留大多数贴图边界，但同时允许合理程度的优化。 \n                                 </div>\n                              </div> \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";