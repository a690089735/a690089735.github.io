var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-E17C584D-78EC-4D12-AA99-F232510C867D\">\n      <meta name=\"indexterm\" content=\"流体: 模拟参数\">\n      <meta name=\"indexterm\" content=\"模拟参数: 流体\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>模拟参数</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-E17C584D-78EC-4D12-AA99-F232510C867D\"></a><div class=\"head\">\n            <h1>模拟参数</h1>\n         </div><a name=\"UL_BBD7F4526C50406CA0E8E37C6122E8A5\"></a><ul>\n            <li><span class=\"MenuCascade\">“创建”面板  <img src=\"../images/ac.menuaro.gif\"> “几何体” <img src=\"../images/ac.menuaro.gif\"> “流体” <img src=\"../images/ac.menuaro.gif\"> “设置”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “模拟视图” <img src=\"../images/ac.menuaro.gif\"> “解算器参数”面板  <img src=\"../images/ac.menuaro.gif\"> “模拟参数”</span> \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"SECTION_5BF7625CB2A64B7C930733828F98CDEC\"></a> \n            <h2><a name=\"GUID-5D39459B-D579-4110-B75D-F1FC53BF6AEE\"></a>“常规参数”卷展栏\n            </h2> <a name=\"FIG_22375E136E87428F897F900F4A9631AB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F2D4E3A6-E5B0-45A6-8CA6-4F41175DE346-low.png\"></div> \n            <div class=\"section\"><a name=\"SECTION_23AFCD341E8241CAB0B8AD6E7FC4B58E\"></a> \n               <h3><a name=\"GUID-00566A06-6FD9-490B-869D-06523186B9D3\"></a>“帧范围”组\n               </h3> \n               <dl><a name=\"GUID-1BEA68FD-ADBC-4A2C-B84B-0C1FE8E346E6\"></a><dt><span class=\"term\">使用时间轴 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 使用当前时间轴来设置模拟的帧范围。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-5FCC877F-80B9-4D46-8769-FE8B16563BB0\"></a><dt><span class=\"term\">开始帧 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 设置模拟的开始帧。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-D3ABF25C-FFA2-4F30-B4F3-2DE03139847C\"></a><dt><span class=\"term\">结束帧 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">设置模拟的结束帧。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_94A69027A0C64BC98D89AE525FB8195B\"></a> \n               <h3><a name=\"GUID-CE354E0D-6F66-46E9-865A-30A3349FBA93\"></a>“比例”组\n               </h3> \n               <dl><a name=\"GUID-C0C7DD19-1FB6-438F-A7C0-DB8D526C13E6\"></a><dt><span class=\"term\">使用系统比例 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">将模拟设置为使用系统比例，可以在“自定义”菜单的“单位设置”下修改系统比例。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-0AF68A5D-5B6C-4D51-A693-458012605F63\"></a><dt><span class=\"term\">流体比例 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">覆盖系统比例并使用具有指定单位的自定义比例。模型比例不等于所需的真实世界比例时，这有助于使模拟看起来更真实。例如，如果潜水艇模型的原始大小为十英尺长，但您希望模拟反映出来的是该舰艇看起来像一百英尺长，则可将流体比例调整为十倍，使一个单位等于 12\n                        英寸，而不是 1.0。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-1BC1FD6B-31BF-46FA-AA4D-468CEA905F05\"></a><dt><span class=\"term\">自动重缩放参数 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">自动重缩放基础体素大小以使用自定义流体比例。如果禁用，基础体素大小不会相应地缩放，参数将不再匹配。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_451CC8646A11498AA1FEC38DBBBB23E1\"></a> \n               <h3><a name=\"GUID-D1BD6CC6-1642-40A8-97FF-3733B2028D20\"></a>“解算器属性”组\n               </h3> \n               <dl><a name=\"GUID-FD9C8DD7-74C1-43C0-8D4F-E28C946A8E6E\"></a><dt><span class=\"term\">基础体素大小 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">设置模拟的基本分辨率（以栅格单位表示）。值越小，细节越详细，精度越高，但需要的内存和计算更多。较大的值有助于快速预览模拟行为，或者适用于内存和处理能力有限的系统。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-DD732276-73A3-4566-8649-D7FA1C5EEEF1\"></a><dt><span class=\"term\">重力幅值 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 重力加速强度默认以米每秒的平方表示。值 9.8 对应于地球重力，值为 0 则模拟零重力环境。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-8E7601A8-F94E-4575-A783-9CF8A7D11FA9\"></a><dt><span class=\"term\">创建重力 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">在场景中创建重力辅助对象。箭头方向将调整重力的方向。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-A4811C52-9971-4643-9D1A-8BDFCBD2C313\"></a><dt><span class=\"term\">使用重力节点强度 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">启用后，将在场景中使用重力辅助对象的强度而不是“重力幅值”。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-002654CC-B17B-4ED0-8447-C275621DFFF5\"></a><dt><span class=\"term\">空间自适应性 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 对于液体模拟，此选项允许较低分辨率的体素位于通常不需要细节的流体中心。这样可以避免不必要的计算并有助于提高系统性能。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-A6AC9C1D-803C-4601-8AAB-0EB5E596E292\"></a><dt><span class=\"term\">删除超出粒子 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 低分辨率区域中的每体素粒子数超过某一阈值时，移除一些粒子。如果在空间自适应模拟和非自适应模拟之间遇到体积丢失或其他大的差异，则禁用此选项。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_451BE416252241C5814332B6AA474C41\"></a> \n            <h2><a name=\"GUID-56B604C6-FC5D-4114-9DCD-8E5C9471AC98\"></a>“模拟参数”卷展栏\n            </h2> <a name=\"FIG_E9FC01C520C242F8BF1416CC4F6F57A9\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-42A63517-8A74-40F2-9A78-E083DA9BADEA-low.png\"></div> \n            <div class=\"section\"><a name=\"SECTION_34CF471BC80F4A01BB919EE37547E991\"></a> \n               <h3><a name=\"GUID-8A3F2A8D-4480-493E-9C86-105BF67303B0\"></a>“传输步数”组\n               </h3> \n               <dl><a name=\"GUID-C76DC25E-AC71-492A-9AB3-C4A31701EB6A\"></a><dt><span class=\"term\">自适应性 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 控制在执行压力计算后用于沿体素速度场平流传递粒子的迭代次数。值越低，触发后续子步骤的可能性越低。 \n                        				  \n                        <p>请谨慎操作以免一次增加此设置太多，特别是值接近 1.0 时。这样做可能会导致不必要的长时间计算。另请注意，距离是以体素长度测量的，这意味着较低的基础体素大小可能会在给定速度下触发粒子的额外迭代。 \n                           				  \n                        </p> \n                        <p> </p> \n                     </div>\n                  </dd><a name=\"GUID-31B54BCD-DB0C-4185-80F6-4EC06E8DDE68\"></a><dt><span class=\"term\">最小传输步数 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 设置传输迭代的最小数目。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-402B246E-9BE7-4D3E-A40E-324807F1BB0A\"></a><dt><span class=\"term\">最大传输步数 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 设置传输迭代的最大数目。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-3BAD3866-AC6F-44CB-9854-88534C22DA1B\"></a><dt><span class=\"term\">时间缩放 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 更改粒子流的速度。大于 1.0 的值会加快流动，而不引入任何新的速度或加速；而介于 0.0 和 1.0 之间的值会减慢速度。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_79DC8C2688854234BD7A836B9B9E1A94\"></a> \n               <h3><a name=\"GUID-7C912EDC-8B90-45A1-847D-1C8FA6B12AE3\"></a>“时间步阶”组\n               </h3> \n               <dl><a name=\"GUID-38A1C9E6-B8CE-4A08-986B-56DA3E859405\"></a><dt><span class=\"term\">自适应性 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 控制每帧的整个模拟（其中包括体素化、压力和传输相位）的迭代次数。值越低，触发后续子步骤的可能性越低。 \n                        				  \n                        <div><a name=\"GUID-545846B8-9B35-4DD2-9013-243DAA8E0FDB\"></a><div class=\"note-important\"><span class=\"label label-target-language\">重要信息:</span>请谨慎操作以免一次增加此设置太多，特别是值接近 1.0 时。这样做可能会导致不必要的长时间计算。另请注意，距离是以体素长度测量的，这意味着较低的基础体素大小可能会在给定速度下触发粒子的额外迭代。 \n                              				  \n                           </div>\n                        </div> \n                     </div>\n                  </dd><a name=\"GUID-1720F247-AA6A-4F42-8062-55FAB8A994B7\"></a><dt><span class=\"term\">最小时间步阶 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 设置时间步长迭代的最小次数。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-96B28A0E-CE5E-4E1E-8AC6-06D2E558F6AC\"></a><dt><span class=\"term\">最大时间步阶 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 设置时间步长迭代的最大次数。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_A05584BC427E4D85B01F20F811DB201D\"></a> \n               <h3><a name=\"GUID-6F73CC03-7CC3-43FD-BE90-9D8D21E9B238\"></a>“体素缩放”组\n               </h3> \n               <dl><a name=\"GUID-CEA83D12-BE91-42BE-8598-2AB10542E3FD\"></a><dt><span class=\"term\">碰撞体素比例 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 用于体素化所有碰撞对象的“基础体素大小”倍增。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-30F9C209-17D6-480B-92B6-7349AF16EB25\"></a><dt><span class=\"term\">加速体素比例 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 用于体素化所有加速器对象的“基础体素大小”倍增。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-D3D527EB-27E4-4808-9236-8C8252BD59C3\"></a><dt><span class=\"term\">泡沫遮罩体素比例 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\"> 用于体素化所有泡沫遮罩的“基础体素大小”倍增。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";