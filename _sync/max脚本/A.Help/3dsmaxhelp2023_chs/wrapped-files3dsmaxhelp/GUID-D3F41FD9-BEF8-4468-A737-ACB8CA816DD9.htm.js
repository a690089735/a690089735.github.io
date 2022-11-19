var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-D3F41FD9-BEF8-4468-A737-ACB8CA816DD9\">\n      <meta name=\"description\" content=\"使用“转化为自由形式”进行无限制的关键点编辑，或使用“转换为足迹”来使用足迹工具。\">\n      <meta name=\"indexterm\" content=\"Biped 足迹: 转换\">\n      <meta name=\"indexterm\" content=\"Biped: “转化为自由形式”对话框\">\n      <meta name=\"indexterm\" content=\"Biped: “转化为足迹”对话框\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“转化为自由形式”或“转化为足迹”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-D3F41FD9-BEF8-4468-A737-ACB8CA816DD9\"></a><div class=\"head\">\n            <h1>“转化为自由形式”或“转化为足迹”对话框</h1>\n         </div>\n         <div class=\"abstract\"> \n            <p><a name=\"GUID-BEF8F954-D8CA-47A2-9934-B0AF795C83C3\"></a> <img src=\"../images/GUID-ACAF012E-CAFA-4275-83E7-522C2F2FCA23-low.png\"> \n            </p> \n            <p class=\"blurb\">使用“转化为自由形式”进行无限制的关键点编辑，或使用“转换为足迹”来使用足迹工具。 </p> \n         </div>\n         <div class=\"bodyReference\"><a name=\"UL_AE0E5F5A8B6A4268AD69CBAA2C2254B2\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-124AE152-2289-4A8E-9EC8-5017FA1C4B2A\">选择 Biped。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-EBCA3C24-9B3B-46F2-A058-71C6B3FFD2E6-low.png\">“运动”面板  <img src=\"../images/ac.menuaro.gif\"> “Biped”卷展栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-ACAF012E-CAFA-4275-83E7-522C2F2FCA23-low.png\">（转化）</span> \n               </li>\n            </ul>\n            <p><a name=\"GUID-3C46CE5F-3E51-407A-8D77-20203DCBDF26\"></a>单击“运动”面板“Biped”卷展栏上的“转化”时，将出现“转化”对话框：“转化为自由形式”<em class=\"mild\"></em>或“转化为足迹”<em class=\"mild\"></em>，这取决于当前加载运动的动画方式。 \n            </p>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E75C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>默认情况下，<em class=\"strong\">character studio</em> 根据重力强度（重力加速度）和足迹间的时间计算跳跃或足迹间的悬空周期。从足迹转换为自由形式时，这些跳跃和悬空周期中的 Biped 标高可能丢失（除非在足迹动画中的悬空周期中创建了垂直 COM 关键点），自由形式的动画为重心位置使用样条线插值而不根据重力来设置。如果转换回足迹，将重新保存悬空周期中的标高。\n                  \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045935\"></a> \n               <h2><a name=\"GUID-9A4381C6-9186-4D94-AEFE-352439ACAE80\"></a>何时使用转换\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190045936\"></a><ul>\n                  <li>在“运动流”模式中使用“保存分段”后使用“转换”将脚本保存为 BIP 文件。退出“运动流”模式，加载 BIP 文件并单击“转换”提取足迹。“保存分段”将“IK 混合”值 1 应用到 Biped 脚步关键点上来得到足迹关键点。如果自由形式动画是“运动流”模式中脚本的一部分，并且想降整个脚本转换为足迹，那么在“保存分段”中的每个“帧”选项中使用“保存关键点”并使用“运动捕捉”卷展栏中的“加载运动捕捉文件”。可以使用近程方法来提取足迹。\n                     \n                  </li>\n                  <li>如果使用足迹动画并想将其转换为自由形式动画，请使用“转化”。 </li>\n                  <li>如果已开始自由形式动画并想将其转换为足迹动画，请使用“转化”。将自由形式动画转换为足迹动画，必须在转换之前使用“IK 混合”，将脚锁定到世界空间以此来正确设置此文件。当创建自由形式动画时，在脚踩踏周期中应该将腿关键点设置为“IK 混合”＝<em class=\"strong\">1.0</em>并设置移动关键点为“IK 混合”＝<em class=\"strong\">0.0</em>。这样就保证躯干在移动时锁定脚步并去除不必要的脚步滑动。转换时，如果腿关键点按照上述方法设置，Biped 会在“IK 混合”＝1.0 的任何持续时间内提取足迹。 \n                  </li>\n               </ul> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4695\"></a> \n               <h2><a name=\"GUID-CB6C4810-21FF-43C1-9AEF-16C511C6411E\"></a>界面\n               </h2> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045937\"></a> \n                  <h3><a name=\"GUID-6E67CB36-03C8-48C0-B27D-1AF3B6FF9A57\"></a>“转化为自由形式”对话框\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190045938\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-774F74AC-1360-46DD-A421-6D6E298CA051-low.png\"></div>  <a name=\"GUID-7EF9DDA9-8D67-429C-9D96-2E39047395E5\"></a><dl>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1F37\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF163EA\"></a>每帧生成一个关键帧</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443CD7\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753603\"></a>在每一帧上创建关键点。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E75D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>将足迹转换为自由形式会将 Biped 脚部原始足迹关键点的脚“IK 混合”值设为 1。把脚部放到世界坐标空间中可以简化关键帧，这防止 Biped 在移动时发生滑动。单击“转换”（在“Biped”卷展栏）来转换回足迹时，同样使用这些脚部“IK 混合”值。\n                                 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045939\"></a> \n                  <h3><a name=\"GUID-17782915-40A3-4F6C-9452-5B63E0C173FB\"></a>“转化为足迹”对话框\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A19004593A\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C9F20BBA-AB0C-450F-9DF0-90B8935882D8-low.png\"></div>  <a name=\"GUID-5E8C4AAF-9279-42CD-ABBA-08961050B224\"></a><dl>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1F38\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF163EB\"></a>每帧生成一个关键帧</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443CD8\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753604\"></a>在每一帧处创建关键点，然后基于脚部 IK 混合值为 1 提取足迹。“运动流”模式中的“保存分段”会将活动脚本存储为不含足迹的 BIP 文件。为 Biped 脚部关键点指定原始足迹关键点的“IK 混合”值 1。加载使用“运动流”模式中的“保存分段”保存的\n                              BIP 文件后，使用“转换”（位于“Biped”卷展栏）提取足迹。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF163EC\"></a>如果已将足迹转换为自由形式（将足迹关键点指定“IK 混合”值 1 时），“转化”也是很有用的。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1F39\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF163ED\"></a>将足迹压缩到 Z = 0</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443CD9\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753605\"></a>将整个 Biped 重新放置在足迹 Z＝0 处。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E75E\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>脚部的“IK 混合”值 1 将脚部放到世界坐标空间中，并防止在自由形式动画中设置 Biped 关键点时发生脚步滑动。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";