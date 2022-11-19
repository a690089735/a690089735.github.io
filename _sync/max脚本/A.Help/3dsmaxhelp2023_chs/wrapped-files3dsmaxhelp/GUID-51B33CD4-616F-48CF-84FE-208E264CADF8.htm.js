var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-51B33CD4-616F-48CF-84FE-208E264CADF8\">\n      <meta name=\"description\" content=\"使用“混合框贴图”可简化混合投影纹理贴图过程，使您可以轻松地自定义贴图和输出。\">\n      <meta name=\"indexterm\" content=\"混合框贴图\">\n      <meta name=\"indexterm\" content=\"新功能\">\n      <meta name=\"indexterm\" content=\"长方体贴图\">\n      <meta name=\"indexterm\" content=\"uvw 展开替代项\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"using\">\n      <title>混合框贴图</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-51B33CD4-616F-48CF-84FE-208E264CADF8\"></a><div class=\"head\">\n            <h1>混合框贴图</h1>\n         </div>\n         <p class=\"blurb\">使用“混合框贴图”可简化混合投影纹理贴图过程，使您可以轻松地自定义贴图和输出。 \n            	 \n         </p><a name=\"UL_B64AA785DEE94ACF9AC1B75F95666C16\"></a><ul>\n            <li><span class=\"MenuCascade\">材质/贴图浏览器  <img src=\"../images/ac.menuaro.gif\">  贴图  <img src=\"../images/ac.menuaro.gif\">  常规  <img src=\"../images/ac.menuaro.gif\">  混合框贴图</span> \n            </li>\n         </ul>\n         <div><a name=\"GUID-59F70D12-15C1-4EEF-B989-831C069D05EE\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>仅当活动渲染器支持时，混合框贴图才会显示在浏览器中。 \n               	 \n            </div>\n         </div>\n         <p> <a name=\"FIG_EE3613BD4DBC420588E7C5BAC802ADED\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1388BE2E-8045-452F-8714-F87578FB5808-low.png\"><img src=\"../images/GUID-6A18EB57-101C-4D14-B126-B14F67C3AF8F-low.png\"></div> \n         </p>\n         <p>相比于需要复杂 UV 贴图的传统方法，混合框贴图使您可以通过更简单的方式将贴图投影到对象上。如果您想要在一个或多个对象中应用长方体贴图，以便从所有侧面对其进行贴图，例如应用泥土和污垢等细节，那么混合框贴图是非常理想的选择。 \n            	 \n         </p>\n         <p>和长方体贴图类似，混合框贴图从三个 90° 方向投影图像。您可以为投影框的每个侧面投影 1 个、3 个或 6 个不同的贴图。这两种贴图的主要区别是混合。传统的长方体或立方体贴图会在不同的 UV 投影之间创建硬接缝，而混合框贴图能够混合不同的贴图，从而实现更好的无缝效果。\n            \n            	 \n         </p>\n         <p> \n            <div><a name=\"GUID-F0179860-4990-4C17-A4E7-BBAFFE8418C5\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>混合框贴图存在一些限制。它无法应用于变形对象，若要导出至实时引擎，您必须首先将该解决方案烘焙回 UV。 \n                  		\n               </div>\n            </div> \n         </p>\n         <div class=\"section\"><a name=\"SECTION_A30C7E0174F54CC3B3AFFE54207C33B9\"></a> \n            <h2><a name=\"GUID-79C118C4-1C49-44BE-A78C-BC78305EA776\"></a>界面\n            </h2> \n            <div class=\"section\"><a name=\"SECTION_F6C114FAEF8E44B590CA13097E3B4DE6\"></a> \n               <h3><a name=\"GUID-CAF0B4A1-4234-430C-BCC3-E00C7B5D1EF0\"></a>“参数”卷展栏\n               </h3> \n               <p><img src=\"../images/GUID-C4B7A909-686D-484E-9794-02AF46144E16-low.png\"> \n               </p> \n               <div class=\"section\"><a name=\"SECTION_AC4DCDD311F74C959CA3B97076C62EFD\"></a> \n                  <h4><a name=\"GUID-9E4645EA-6274-4EF3-8873-AAB11A3E7330\"></a>“混合”组\n                  </h4> \n                  <dl><a name=\"GUID-3F5E2D44-2AD5-4C0A-8F04-93D4A3596F9D\"></a><dt><span class=\"term\">混合量 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">每个投影之间的混合百分比。默认值为 25。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-2641AFA8-E0FC-4FE6-A076-FDFDC55155B0\"></a><dt><span class=\"term\">混合贴图 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">混合贴图扩散到对象上的百分比。 \n                           					 \n                           <div><a name=\"GUID-E6C413EA-917B-4706-889D-CEC0A9493EF5\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>较高的值可能会导致溢出。 \n                                 					 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_531CDB43A778471AA7264D697A1C970D\"></a> \n                  <h4><a name=\"GUID-E9C75FC2-A9A4-4BE1-8B4B-1525D3BA627B\"></a>“贴图”组\n                  </h4> \n                  <dl><a name=\"GUID-770BA6A4-C2B4-411A-824C-FFDA648E086E\"></a><dt><span class=\"term\">投影数 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">选项包括 1、3、6 贴图投影。 \n                           					 <a name=\"UL_6DF247AA51E246DA8E4853865D16B049\"></a><ul>\n                              <li>1 在顶面、底面、左面、右面、正面、背面投影单个贴图。 \n                                 						\n                              </li>\n                              <li>3 在顶面和底面投影一个贴图，在左面和右面投影一个贴图，在正面和背面投影一个贴图。 \n                                 						\n                              </li>\n                              <li>6 在顶面、底面、左面、右面、正面、背面各投影一个贴图。 \n                                 						\n                              </li>\n                           </ul> 您可以使用颜色和贴图（默认选项为“无贴图”）选择框选择在各个可用侧面上投影颜色还是贴图。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-9F60F615-2348-4D3B-BF5C-2310A4CB80EF\"></a><dt><span class=\"term\">贴图比例 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">应用于所有贴图的缩放百分比。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-A01C48C0-ECE4-4C98-A515-9418A1A29B96\"></a><dt><span class=\"term\">加载贴图 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">当您仅选择一个贴图时，同时加载多个名称类似的贴图。只要贴图的名称与通道对应，就会将其指定给相应的侧面。例如 checker_left.jpg、checker_front.jpg 等。 \n                           				  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_AD323AD56EE54473BDB9A544335EE3DF\"></a> \n                  <h4><a name=\"GUID-5E5629ED-9DDC-4D8F-968E-933BE0007595\"></a>“投影”组\n                  </h4> \n                  <dl><a name=\"GUID-FA7CECE8-73E3-4B52-B2D7-338A2B0A6331\"></a><dt><span class=\"term\">锁定到帧 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">选中该复选框可以按照您指定的帧数将投影锁定到对象上。在使用变换（如移动、旋转或缩放）为对象设置动画时，防止投影倾斜。 \n                           					 \n                           <p>“锁定到帧”可以对构建的模型实现更清晰的投影。 \n                              					 \n                           </p> \n                           <div><a name=\"GUID-545417A6-6837-4729-9499-668E499D74F7\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>不适用于变形，如果为对象的几何体设置动画，可能会产生意外的结果。 \n                                 					 \n                              </div>\n                           </div> \n                        </div>\n                     </dd><a name=\"GUID-5C374031-9509-44A3-93E2-F8E19A8F4894\"></a><dt><span class=\"term\">投影到 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">选择将贴图投影到的对象。选项包括： \n                           					 \n                           <dl><a name=\"GUID-FB794144-E3D7-4EE3-8930-13CCE89E4008\"></a><dt><span class=\"term\">单个对象 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">每个对象都拥有自己的贴图投影。 \n                                    						  \n                                 </div>\n                              </dd><a name=\"GUID-844D7ED0-E6CA-492E-BB34-9D9D97DAEBF6\"></a><dt><span class=\"term\">一次多个对象 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">将多个对象作为一个对象进行处理。您可以通过在场景中创建和变换虚拟对象“投影框”，控制贴图的放置方式。 \n                                    						  \n                                 </div>\n                              </dd><a name=\"GUID-178ADE47-23F8-469F-A354-9535C4182FB5\"></a><dt><span class=\"term\">自动 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">同时投影到多个对象，并基于您创建的边界框自动适配投影大小。 \n                                    						  \n                                 </div>\n                              </dd>\n                           </dl> \n                        </div>\n                     </dd><a name=\"GUID-B5054199-1ED3-4E1E-A44D-867D983030B9\"></a><dt><span class=\"term\">立方体 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">强制将投影变为立方体，防止使用正方形贴图（725x725、1024x1024 等）时出现纹理拉伸。选项包括： \n                           					 \n                           <dl><a name=\"GUID-025BE8BC-DFE6-4ACA-A83B-9E54573AD98E\"></a><dt><span class=\"term\">非均匀 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">每个对象均按使用 Gizmo 定义的投影大小（每个对象对应一个 Gizmo）进行贴图。 \n                                    						  \n                                 </div>\n                              </dd><a name=\"GUID-2BBEDAC8-508C-41BB-A5F6-6570680D3020\"></a><dt><span class=\"term\">均匀 - 拾取 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">所有对象均按选定对象的投影大小进行贴图。 \n                                    						  \n                                 </div>\n                              </dd><a name=\"GUID-7D6C8E25-92C7-4EA8-8169-2A51621A845D\"></a><dt><span class=\"term\">均匀 - 大小 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">所有对象均按使用 Gizmo 定义的投影大小（所有对象对应一个 Gizmo）进行贴图。 \n                                    						  \n                                 </div>\n                              </dd><a name=\"GUID-14D35822-A9A0-401C-86CF-010A5F0D56D5\"></a><dt><span class=\"term\">均匀 - 最大 \n                                    						  </span></dt>\n                              <dd>\n                                 <div class=\"definition\">所有对象均按具有应用材质的最大对象的投影大小进行贴图。 \n                                    						  \n                                 </div>\n                              </dd>\n                           </dl> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_D79D00063B5F4404A1BD6CDFAD8C402A\"></a> \n               <h3><a name=\"GUID-C492823D-1061-41DB-ABFF-7055A7D428D1\"></a>“变换”卷展栏\n               </h3> \n               <p><img src=\"../images/GUID-7D1A0D41-57DC-4A8B-AC16-428D6351D575-low.png\"> \n               </p> \n               <div class=\"section\"><a name=\"SECTION_79CBE9ADD09F42D0A662538C1C08ED5C\"></a> \n                  <h4><a name=\"GUID-AB57F16F-0E6B-4358-B883-5D736B9DAC9B\"></a>“随机化投影”组\n                  </h4> \n                  <div><a name=\"GUID-9DBD1835-2A28-4CCD-AC1B-DAB481D39BDA\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>随机化参数仅在“单个投影”模式下可用。 \n                        			 \n                     </div>\n                  </div> \n                  <dl><a name=\"GUID-2EA0977F-8668-41F6-92FF-C7E2B5825819\"></a><dt><span class=\"term\">种子 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置随机化值。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-7E42E71A-2733-4227-9EAD-66CE88224919\"></a><dt><span class=\"term\">随机化轴 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置随机化投影的轴。选项包括 X、Y、Z。 \n                           				  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_FF2553D8AFF74E7EB7DC1581F30E3E9D\"></a> \n                  <h4><a name=\"GUID-A68A911D-B9F8-4CB0-972D-ABE2C812BBC7\"></a>“贴图变换”组\n                  </h4> \n                  <dl><a name=\"GUID-F0EAE74E-09B5-4071-86B4-3C4A405B0077\"></a><dt><span class=\"term\">使用随机值 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">基于“种子”设置将随机值应用于变换。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-039F39E1-9E69-4665-AA53-0CBFA7888970\"></a><dt><span class=\"term\">位置 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">沿 U 轴和 V 轴移动投影位置。 \n                           				  \n                        </div>\n                        <div class=\"definition\">“锁定”按钮可锁定 V 位置偏移以匹配 U 位置。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-FEF3CD85-6768-4845-9370-EFEC9E7E747D\"></a><dt><span class=\"term\">旋转 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置在顶面和底面 (T/B)、左面和右面 (L/R) 以及正面和背面 (F/B) 旋转投影的角度。 \n                           				  \n                        </div>\n                        <div class=\"definition\">“锁定”按钮可锁定所有旋转偏移以匹配顶面和底面偏移。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-3DD83184-ED62-49CF-BB12-FADF189FC176\"></a><dt><span class=\"term\">比例 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">增大/减小 U 轴和 V 轴的投影大小。 \n                           				  \n                        </div>\n                        <div class=\"definition\">“锁定”按钮可锁定 V 比例以匹配 U 比例。 \n                           				  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_A69030FC20E34E5C9394F4D3B9ABA42E\"></a> \n               <h3><a name=\"GUID-4549D515-7F61-4FFD-93B9-1DFCFCC78416\"></a>“渲染投影模板”卷展栏\n               </h3> \n               <p><img src=\"../images/GUID-692240FF-2A8A-4939-AA86-681B950FD0E7-low.png\"> \n               </p> \n               <p>将投影的所有侧面渲染到各个图像中，从而可以更轻松地通过第三方程序将纹理贴图绘制到各个图像上。 \n                  		  \n               </p> \n               <dl><a name=\"GUID-3D500A83-96F5-437E-B53C-9285451ED224\"></a><dt><span class=\"term\">保存 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">打开“渲染投影模板”对话框，从中可以指定文件的名称、类型和位置。此工具会自动附加适当的后缀（_top、_left 等）。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-84BA7695-F46E-4D95-942C-1BF351C025DC\"></a><dt><span class=\"term\">分辨率最大值 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">设置最大的贴图分辨率。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-36ECD807-C74C-4D4A-9345-AFDBFC9D6FDB\"></a><dt><span class=\"term\">渲染 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">渲染图像。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <p> </p><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-7D5F9202-BC4B-4646-8E57-1FAD8AE26D4A.htm\">使用混合框贴图</a><p>使用混合框贴图可轻松地将带有混合接缝的贴图投影到对象上。 \n                        \n                     </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-970CB2F9-FE0C-4EFC-BD08-3DAC71163263.htm\">“坐标”卷展栏 (3D)</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";