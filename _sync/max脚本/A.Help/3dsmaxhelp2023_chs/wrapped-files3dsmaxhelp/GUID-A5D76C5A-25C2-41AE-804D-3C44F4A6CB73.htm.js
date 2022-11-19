var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A5D76C5A-25C2-41AE-804D-3C44F4A6CB73\">\n      <meta name=\"description\" content=\"此卷展栏包含主要用于光线跟踪贴图的控件。\">\n      <meta name=\"indexterm\" content=\"光线跟踪器参数卷展栏\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“光线跟踪器参数”卷展栏</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A5D76C5A-25C2-41AE-804D-3C44F4A6CB73\"></a><div class=\"head\">\n            <h1>“光线跟踪器参数”卷展栏</h1>\n         </div>\n         <p class=\"blurb\">此卷展栏包含主要用于<span class=\"char_link\"><a href=\"GUID-4D919F24-F0BB-47F0-9C2D-28D393C1A1DE.htm\">光线跟踪贴图</a></span>的控件。 \n         </p><a name=\"GUID-A2C95CB2-F14D-4C45-9C77-56534305B962\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-9A69601B-617D-40FB-AE87-DB5E086DD647\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “光线跟踪”贴图  <img src=\"../images/ac.menuaro.gif\"> “光线跟踪器参数”卷展栏</span> \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-29EA\"></a> \n            <h2><a name=\"GUID-9B80FCA1-580D-4032-BC8E-AF878BD07FF3\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004-35E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-CF5AFF65-C997-4A64-9078-18930CCA96A8-low.png\"></div>  <a name=\"GUID-D3E2D492-1330-456C-8271-FDE913F74058\"></a><div class=\"dl_section\"><a name=\"GUID-5C171240-2FC0-4052-B224-C1D99B543A5A\"></a><p class=\"title\"><a name=\"GUID-7CA9BC83-99B2-433C-A7AB-93CBAF7012EE\"></a>“局部选项”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79C8\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-7290\"></a>启用光线跟踪</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D1962\"></a> 启用或禁用光线跟踪器。默认设置为启用。 \n                        <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-728F\"></a>即使禁用光线跟踪，光线跟踪材质和光线跟踪贴图仍然反射和折射环境，包括用于场景的环境贴图和指定给光线跟踪材质的环境贴图。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79C7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-728E\"></a>光线跟踪大气</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D1963\"></a> 启用或禁用大气效果的光线跟踪。大气效果包括火、雾、体积光等等。默认设置为启用。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79C6\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-728D\"></a>启用自反射/折射</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D1964\"></a> 启用或禁用自反射/折射。默认设置为启用。 \n                        <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-728C\"></a>对象可以自行反射吗？例如，茶壶的壶体反射茶壶的手柄，但是球体永远不能反射自己。如果不需要这种效果，则可以通过禁用此切换缩短渲染时间。 \n                        </p> \n                        <div><a name=\"WS73099CC142F48755BE5C71114081FCAA9-7A5E\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果拥有像玻璃这样的透明对象，并且已启用自反射/折射，则不必使对象成为 <span class=\"char_link\"><a href=\"GUID-4EACDADD-2F96-4869-91EC-34983EBED732.htm\">2 面</a></span>。退出折射对象时，光线跟踪器会看到背面。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79C5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-728B\"></a>反射/折射材质 ID</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D1965\"></a> 启用该选项之后，材质将反射启用或禁用渲染器的<span class=\"char_link\"><a href=\"GUID-866E101D-7974-4EBA-BF07-1D6A123C620C.htm\">G 缓冲区</a></span>中指定给材质 ID 的效果。默认设置为启用。 \n                        <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-728A\"></a>默认情况下，光线跟踪材质和光线跟踪贴图反射指定给某个材质 ID 的效果，因此 G 缓冲区的效果不会丢失。例如，如果光线跟踪的对象反射使用 Video Post“光晕”过滤器（镜头效果光晕）制作的带有光晕的灯，则也将反射光晕。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-4CDC5E69-E046-4782-AACA-DD2621F0D3CF\"></a><p class=\"title\"><a name=\"GUID-A6C63085-8E60-4151-8660-C9A8FD41F675\"></a>“跟踪模式”组\n               </p>\n               <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7289\"></a>使用此组中的这些选项，可以选择是否投射反射或折射光线。 \n               </p><a name=\"UL_C363DEE837E84E3681E4885919CDF1D7\"></a><ul>\n                  <li><em class=\"strong\">自动检测</em>如果指定给材质的反射组件，则光线跟踪器将反射。如果指定给折射，则将进行折射。如果将光线跟踪指定给其他任何组件，则必须手动指定是要反射光线还是折射光线。（默认设置。） \n                     <div><a name=\"WS73099CC142F48755BE5C71114081FCAA9-7A5D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在带有强凹凸贴图的材质中使用光线跟踪贴图时，“自动检测”可能失败。在使用强凹凸贴图时，选择一个显式选项。 \n                        </div>\n                     </div> \n                  </li>\n                  <li><em class=\"strong\">反射</em>从对象曲面投射反射光线（离开对象）。 \n                  </li>\n                  <li><em class=\"strong\">折射</em>向对象曲面投射折射光线（进入或穿过对象）。 \n                     <div><a name=\"WS73099CC142F48755BE5C71114081FCAA9-7A5C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>光线跟踪在<span class=\"char_link\"><a href=\"GUID-876287AE-69EE-4C32-9E12-20068E83031A.htm\">材质 ID 通道</a></span>（<span class=\"char_link\"><a href=\"GUID-866E101D-7974-4EBA-BF07-1D6A123C620C.htm\">G 缓冲区</a></span>）中反射和透射 ID，以使其能够产生光晕反射等效果。 \n                        </div>\n                     </div> \n                  </li>\n               </ul>\n            </div>\n            <dl>\n               <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79C1\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-7285\"></a>局部排除</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D1969\"></a> 单击可显示局部<span class=\"char_link\"><a href=\"GUID-58F18915-B4E6-4F51-ACE2-0EAFCAC43B02.htm\">“排除/包含”对话框</a></span>。 \n                     <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7284\"></a>局部排除的对象将只从此贴图中排除。 \n                     </p> \n                     <div><a name=\"WS73099CC142F48755BE5C71114081FCAA9-7A5B\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>使用排除列表是提高光线跟踪器效果最简单的最佳方法之一。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-E9D06868-68A4-40C4-B8BC-4280E2FF9005\"></a><p class=\"title\"><a name=\"GUID-D8D7D631-7504-4A6F-A58B-62BF16D18C77\"></a>“背景”组\n               </p><a name=\"UL_FCB0FAA2CCBC42A6878545FD2BF64DCC\"></a><ul>\n                  <li><em class=\"strong\">使用环境设置</em>涉及当前场景的环境设置。 \n                  </li>\n                  <li><em class=\"strong\">[色样]</em>使用指定颜色覆盖环境设置。 \n                  </li>\n                  <li><em class=\"strong\">[贴图按钮]</em>使用指定贴图覆盖环境设置。 \n                     <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7280\"></a>通过指定环境贴图，可以将场景的环境贴图作为整体进行覆盖。除非使用此选项来指定另一个贴图，否则反射和折射使用场景范围的环境贴图。使用此控件，您可以基于每个对象来使用不同的环境贴图，或没有作为整体的场景时，向指定对象提供环境。 \n                     </p> \n                  </li>\n               </ul>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-562C21C6-1EC3-4150-8292-09C3D44A167F\"></a><p class=\"title\"><a name=\"GUID-249022B0-D9E1-401E-909C-C7639B96FC5D\"></a>“光线跟踪反射和折射抗锯齿器”组\n               </p>\n               <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-727F\"></a>使用此组中的控件可以覆盖光线跟踪贴图和材质的全局抗锯齿设置。如果全局禁用抗锯齿，则这些控件不可用。要全局启用抗锯齿，可选择“渲染”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“光线跟踪器设置”以打开<span class=\"char_link\"><a href=\"GUID-F0A61E06-1A1F-4A7A-9633-8975189CC0F0.htm\">“光线跟踪器全局参数”卷展栏</a></span>。 \n               </p>\n               <dl>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79BD\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-727E\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D196D\"></a> 启用此选项之后将使用抗锯齿。除非启用全局抗锯齿，否则默认设置为不可用。如果启用全局抗锯齿，则默认设置为启用。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-79BC\"></a><span class=\"term\"><a name=\"WS73099CC142F487551C03D7B1148F5F0295-4145\"></a>[下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D196E\"></a> 选择要使用的抗锯齿设置。有三个选项： <a name=\"WS73099CC142F487551C03D7B1148F5F0295-4144\"></a><ul>\n                           <li> <em class=\"strong\">使用全局抗锯齿设置</em>（默认设置。）使用全局抗锯齿设置。 \n                              <p><a name=\"WS73099CC142F487551C03D7B1148F5F0295-4142\"></a>单击 <span class=\"keyboardEntry\">...</span> 可打开<span class=\"char_link\"><a href=\"GUID-F0A61E06-1A1F-4A7A-9633-8975189CC0F0.htm\">“光线跟踪器全局参数”卷展栏</a></span>。 \n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">快速自适应抗锯齿器</em>使用“快速自适应抗锯齿器”，不必考虑全局设置。 \n                              <p><a name=\"WS73099CC142F487551C03D7B1148F5F0295-4140\"></a>单击<span class=\"keyboardEntry\">...</span>以打开<span class=\"char_link\"><a href=\"GUID-BBE21574-C7CE-482B-9400-35CC9B360C54.htm\">“快速自适应抗锯齿器”对话框</a></span>。 \n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">多分辨率自适应抗锯齿器</em>使用“多分辨率自适应抗锯齿器”，不必考虑全局设置。 \n                              <p><a name=\"WS73099CC142F487551C03D7B1148F5F0295-413E\"></a>单击 <span class=\"keyboardEntry\">...</span> 以打开<span class=\"char_link\"><a href=\"GUID-2865ED53-DA39-494E-B66B-DC5FB7BC683E.htm\">“多分辨率自适应抗锯齿器”对话框</a></span>。 \n                              </p> \n                           </li>\n                        </ul> \n                        <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-727B\"></a>局部更改某个抗锯齿器的设置之后，不会影响该抗锯齿器的全局设置。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";