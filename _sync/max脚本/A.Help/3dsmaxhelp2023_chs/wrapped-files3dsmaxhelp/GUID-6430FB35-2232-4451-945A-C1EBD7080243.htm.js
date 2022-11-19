var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-6430FB35-2232-4451-945A-C1EBD7080243\">\n      <meta name=\"indexterm\" content=\"ActiveShade\">\n      <meta name=\"indexterm\" content=\"交互式渲染\">\n      <meta name=\"indexterm\" content=\"重新明暗处理\">\n      <meta name=\"indexterm\" content=\"交互式重新明暗处理\">\n      <meta name=\"contextid\" content=\"IDH_RENDERING_IRESHADE\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"using\">\n      <title>扫描线 ActiveShade</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-6430FB35-2232-4451-945A-C1EBD7080243\"></a><div class=\"head\">\n            <h1> 扫描线 ActiveShade</h1>\n         </div>\n         <p class=\"blurb\"> </p>\n         <div class=\"bodyReference\"><a name=\"UL_1DF8AF87CF2443649DC1032FEE430C4A\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-CCD52502-4B2F-4CD9-91D3-588139865570\">主工具栏  <img src=\"../images/ac.menuaro.gif\"> “渲染生产”弹出按钮  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-8413A24F-6773-4847-8992-773A5CA0B390-low.png\"> (ActiveShade)</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-6095EEF8-D826-44B0-8C54-D96220B57702\">主工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-4FC9A658-BC74-4396-A164-8AB453E3644F-low.png\">（“渲染设置”） <img src=\"../images/ac.menuaro.gif\"> “渲染设置”对话框  <img src=\"../images/ac.menuaro.gif\"> “目标”下拉列表  <img src=\"../images/ac.menuaro.gif\"> “ActiveShade 模式”</span> \n               </li>\n            </ul>\n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5386\"></a>对于扫描线渲染器，只有一个 ActiveShade 选项：浮动，其中 ActiveShade 渲染出现在其自身的窗口中。 \n               \n               <div><a name=\"GUID-AD039383-A4B2-4BD0-B6C8-C1DF45F402F8\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>不支持物理材质。 \n                     \n                  </div>\n               </div> \n            </p>\n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-70DA\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果清除了图像，可以通过在 ActiveShade 窗口中右键单击并选择“工具”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“初始化”，或从四元菜单的右下方象限中选择“工具”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“更新”来重新显示该图像。 \n                  \n               </div>\n            </div>\n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5385\"></a>一次只能激活一个 ActiveShade 窗口。 \n               \n            </p>\n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-70E2\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>可以将材质从材质编辑器拖放到 ActiveShade 窗口中，就像在其他视口中那样。 \n                  \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900428B9\"></a> \n               <h2><a name=\"GUID-012D7FCE-557C-4931-A89A-43C4CB66857E\"></a>扫描线 ActiveShade 和对象选择\n               </h2> \n               <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5383\"></a>如果在调用 ActiveShade 前选定对象，那么 ActiveShade 只对该对象有效。这样可以极大加快 ActiveShade 的速度。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5382\"></a>同样，一旦打开 ActiveShade 窗口，初始化和更新步骤（无论自动还是手动）也只对选定对象有效。 \n                  \n               </p> \n               <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-70E0\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>当 ActiveShade 窗口中的对象具有贴图材质时，请在更改贴图或调整其参数之前将其选中。 \n                     \n                  </div>\n               </div> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900428BA\"></a> \n               <h2><a name=\"GUID-0732F651-D493-41F8-BA14-8544C2FD78E2\"></a>扫描线 ActiveShade 的作用范围\n               </h2> \n               <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5380\"></a>为了实现交互，ActiveShade 窗口在其可以更新的内容方面做出了限制。ActiveShade 渲染通常不如最终产品级渲染那么精确。 \n                  \n               </p> \n               <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-70DF\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>通过变换或修改更改几何体之后，请右键单击 ActiveShade 窗口并从四元菜单中（右下方的四元菜单）选择“工具”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“初始化”。这样便更新 ActiveShade 渲染。 \n                     	 <a name=\"WS1A9193826455F5FFBA679E112A6A1900428BB\"></a><ul>\n                        <li>移动对象不会更新 ActiveShade 窗口。 \n                           		\n                        </li>\n                        <li>应用修改器或更改对象几何体不会交互地更新 ActiveShade 窗口。 \n                           		\n                        </li>\n                        <li>只在“初始化”过程中对“反射”进行渲染。 \n                           		\n                        </li>\n                        <li>材质显示为每个通道 8 位的 RGBA 数据。 \n                           		\n                        </li>\n                        <li>对材质的多次修改可能会导致图像质量下降。 \n                           		  \n                           <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-537F\"></a>如果出现这种情况，请右键单击 ActiveShade 窗口并从四元菜单（四元菜单右下方）中选择“工具”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“初始化”。 \n                              		  \n                           </p> \n                        </li>\n                        <li>遮罩将由每个象素 8x8 细分下降到 4x4 细分。遮罩修正为 6 位不透明度（0 到 63 而不是 0 到 255）。这可能会导致对象边缘附近出现一些视觉噪波。 \n                           		\n                        </li>\n                        <li>由于以上提到的各种原因，过滤器比完整渲染粗糙，但仍然提供重要的子像素信息。 \n                           		\n                        </li>\n                        <li>每个像素最多只能进行 16 细分。因此，将忽略给定像素的第十六个阻挡对象之后的任何对象。渲染后的背面作为单独对象。 \n                           		\n                        </li>\n                        <li>重新着色使用压缩法线和其他方向矢量。这没有视觉效果。 \n                           		\n                        </li>\n                        <li>ActiveShade 不渲染大气效果、渲染效果及光线跟踪阴影（唯一能进行渲染的阴影是经阴影贴图处理的阴影）。 \n                           		\n                        </li>\n                     </ul> \n                  </div>\n               </div> \n            </div>\n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-B2D44179-DDF6-43DB-A193-8FD058E2318B.htm\">ActiveShade 初始化和更新</a><p>扫描线 ActiveShade 渲染的过程包含两个步骤：首先是初始化过程，然后是更新明暗处理过程。 </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";