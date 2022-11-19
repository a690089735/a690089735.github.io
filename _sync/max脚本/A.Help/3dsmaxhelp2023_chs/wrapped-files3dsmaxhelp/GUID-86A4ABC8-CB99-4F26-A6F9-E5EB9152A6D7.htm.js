var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-86A4ABC8-CB99-4F26-A6F9-E5EB9152A6D7\">\n      <meta name=\"description\" content=\"提供附加蒙皮修改器选项。\">\n      <meta name=\"indexterm\" content=\"蒙皮修改器: 高级参数卷展栏\">\n      <meta name=\"indexterm\" content=\"蒙皮修改器: 保存/加载封套\">\n      <meta name=\"indexterm\" content=\"蒙皮修改器: 保存/加载顶点权重\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“高级参数”卷展栏（“蒙皮”修改器）</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-86A4ABC8-CB99-4F26-A6F9-E5EB9152A6D7\"></a><div class=\"head\">\n            <h1>“高级参数”卷展栏（“蒙皮”修改器）</h1>\n         </div>\n         <p class=\"blurb\">提供附加蒙皮修改器选项。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_9C745321659549868536581664EC5CE4\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-2942CD9E-A842-4550-8AE1-44569F353C1B\">选择网格、面片或 NURBS 对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “蒙皮” <img src=\"../images/ac.menuaro.gif\"> “高级参数”卷展栏</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-B38A0BAC-158B-49E6-82C8-483646EFE4BD\">选择网格、面片或 NURBS 对象。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “动画修改器” <img src=\"../images/ac.menuaro.gif\"> “蒙皮” <img src=\"../images/ac.menuaro.gif\"> “高级参数”卷展栏</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WSF742DAB04106313366400BF6112A1CEA097-7EFE\"></a> \n               <h2><a name=\"GUID-8E4A6153-0C84-4352-AAEA-A33AA513AB9A\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043ADE\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AF4D8492-9E0D-44F5-B541-0A2F38A206A0-low.png\"></div>  <a name=\"GUID-976D26AD-488B-4D7A-B586-B080273CF805\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60AC\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C34\"></a>始终变形</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F7C\"></a> 用于编辑骨骼和所控制点之间的变形关系的切换。此关系是在最初应用“蒙皮”时设置的。要更改该关系，可禁用“始终变形”，移动对象或骨骼后重新激活它。现在，将使用新的变形关系。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60AB\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C33\"></a>参考帧</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F7B\"></a> 设置骨骼和网格位于参考位置的帧。 \n                        \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C32\"></a>通常，该帧为第 0 帧。如果第 0 帧为参考帧，则从第 1 帧或以后的帧开始播放动画。如果需要相对于网格调整骨骼，请将时间滑块移到第 0 帧，禁用“始终变形”，将骨骼移到正确位置并启用“始终变形”。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60AA\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C31\"></a>回退变换顶点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F7A\"></a> 用于将网格<span class=\"char_link\"><a href=\"GUID-4115DE9B-D636-4A42-904E-71259A843E0A.htm\">链接</a></span>到骨骼结构。通常，在执行此操作时，任何骨骼移动都会根据需要将网格移动两次，一次随骨骼移动，一次随链接移动。选中此选项可防止在这些情况下网格移动两次。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C30\"></a>刚性顶点（全部）</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F79\"></a> 如果启用此选项，则可以有效地将每个顶点指定给其封套影响最大的骨骼，即使为该骨骼指定的权重为 100% 也是如此。顶点将不具有分布到多个骨骼的权重，蒙皮对象的变形将是刚性的。这主要用于不支持权重点变换的游戏引擎。 \n                        \n                        <div><a name=\"WS1A9193826455F5FF603F1A63123AB7A861F-7FFE\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>这不会更改指定给多个骨骼的顶点的权重值，因此只需关闭“刚性顶点(全部)”即可返回分布式权重指定。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A8\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C2F\"></a>刚性面片控制柄（全部）</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F78\"></a> 在面片模型上，强制面片控制柄权重等于结权重。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C2E\"></a>骨骼影响限制</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F77\"></a> 限制可影响一个顶点的骨骼数。 \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-346402BC-3B78-40A8-ABDB-E02E751E51B8\"></a><p class=\"title\"><a name=\"GUID-C7780AA7-62CA-435E-AFA7-4B8C7F199C78\"></a>“重置”组\n                  </p><a name=\"WS1A9193826455F5FFBA679E112A6A190043AE0\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-296D750C-9028-4DB6-8ABB-CAD361E88D28-low.png\"></div>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A6\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C2D\"></a> <img src=\"../images/GUID-6DF7242E-1FA2-407B-ADF4-5D4F790DF375-low.png\"> 重置选定的顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F76\"></a> 将选定顶点的权重重置为封套默认值。手动更改顶点权重后，需要时可使用此控件重置权重。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C2C\"></a> <img src=\"../images/GUID-4866DA7D-32F8-47A0-8663-E4E67D8273A8-low.png\"> 重置选定的骨骼</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F75\"></a> 将关联顶点的权重重新设置为为选定骨骼的封套计算的原始权重。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A4\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C2B\"></a> <img src=\"../images/GUID-597E653C-815B-4001-93A6-CE8878550021-low.png\"> 重置所有骨骼</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F74\"></a> 将所有顶点的权重重新设置为为所有骨骼的封套计算的原始权重。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A3\"></a><span class=\"term\"><a name=\"WSF742DAB04106313366400BF6112A1CEA097-7EFD\"></a> 保存/加载</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F73\"></a> 用于保存和加载封套位置及形状，以及顶点权重。如果将保存的文件加载到不同的骨骼系统，可以使用<span class=\"char_link\"><a href=\"GUID-33A7756F-B1E2-4EBF-9ECC-7C3E7B6ACFA7.htm\">“加载封套”对话框</a></span>将传入的骨骼与当前骨骼相匹配。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A2\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C2A\"></a>释放鼠标按钮时更新</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F72\"></a> 启用后，如果按下鼠标按钮，则不进行更新。释放鼠标时，将进行更新。该选项可以避免不必要的更新，从而使工作流程快速移动。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A1\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C29\"></a>快速更新</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F71\"></a> 在不渲染时，禁用权重变形和 gizmo 的视口显示，并使用刚性变形。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-60A0\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C28\"></a>忽略骨骼比例</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F70\"></a> 启用此选项可以使蒙皮的网格不受缩放骨骼的影响。默认设置为禁用。 \n                        \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9F8\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>要缩放骨骼的长度，首先需要禁用<span class=\"char_link\"><a href=\"GUID-2AC1FCA3-04C2-418A-8AAC-4D7EAA173EDA.htm\">“对象属性”卷展栏</a></span>（位于“骨骼工具”浮动框对话框）上的“冻结长度”选项。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-609F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C27\"></a>可设置动画的封套</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F6F\"></a> 启用“自动关键点”时切换在所有可设置动画的封套参数上创建关键点的可能性。默认设置为禁用。 \n                        \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9F9\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>这不会影响可设置关键点轨迹设置。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-609E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C26\"></a>权重所有顶点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F6E\"></a> 启用后，将强制不受封套控制的所有顶点加权到与其最近的骨骼。对手动加权的顶点无效。默认设置为启用。 \n                        \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9FA\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果要将顶点还原为原始权重值，则单击“重置选定顶点”（在“重置”组中）或打开<span class=\"char_link\"><a href=\"GUID-9DE90E0E-C0E1-4E30-B4EC-BC4169917B28.htm\">权重表</a></span>，并更改选定顶点的修改加权状态 (M)。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-609D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3C25\"></a>移除零权重</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F6D\"></a> 如果顶点低于“移除零限制”值，则从其权重中将其去除。从而可以使蒙皮的模型更简洁（例如在游戏中），因为存储在几何体中的不必要的数据较少了。还可以从“权重表”进行访问。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-609C\"></a><span class=\"term\"><a name=\"WSF742DAB04106313366400BF6112A1CEA097-7EFC\"></a>移除零限制</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F6C\"></a> 设置权重阈值，该阈值确定在单击“删除零权重”后是否从权重中去除顶点。默认设置为 0.0。 \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";