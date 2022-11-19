var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-05788689-F347-4B90-96B1-530EAAEC4A2B\">\n      <meta name=\"indexterm\" content=\"切角修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 切角\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 切角\">\n      <meta name=\"contextid\" content=\"MODIFIERS-CHAMFERMOD\">\n      <meta name=\"contextid\" content=\"CHAMFERMOD.MODIFIERS\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>切角修改器参考</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-05788689-F347-4B90-96B1-530EAAEC4A2B\"></a><div class=\"head\">\n            <h1>切角修改器参考</h1>\n         </div>\n         <div class=\"abstract\"></div>\n         <div class=\"bodyReference\"><a name=\"UL_76280D48A8A242E7820EB38A69A125A9\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-C1BC87E2-334A-4DE2-BF29-D9F7109C381D\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\">  作出选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “切角”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-DBC166AB-FA31-49E3-8D01-8AC865EA0664\">默认菜单：进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “几何体(网格编辑)” <img src=\"../images/ac.menuaro.gif\"> “切角”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-A61D271B-6CE8-4E02-B01C-0110A78A767A\">Alt 菜单：进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “几何体(转换为网格)” <img src=\"../images/ac.menuaro.gif\"> “切角”</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"SECTION_3F7073597B1F4072BBF65F9ADD0B36F5\"></a> \n               <h2><a name=\"GUID-DD6820AB-C257-434B-8422-60269900924C\"></a>“参数”卷展栏\n               </h2> <a name=\"FIG_B36B2C3D525D46B8B2C61CC1C5F43D0A\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E82E06FE-17FB-4A3B-9868-D1F6F0C66BFA-low.png\"></div> \n               <dl><a name=\"GUID-4019DB1A-A6BE-48F6-B981-5698B7E7B50E\"></a><dt><span class=\"term\">预设 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\">在下拉菜单中，从预设切角设置列表中进行选择。 \n                        		  <a name=\"UL_4A6C05A698AE48BE8A1F7CA6A4D5B035\"></a><ul>\n                           <li>单击 <img src=\"../images/GUID-5ED0B298-8F6B-4F10-8D9C-22B744C95B2B-low.png\"> 加载选定的预设。 \n                              			 \n                           </li>\n                           <li>单击 <img src=\"../images/GUID-E926A621-FB0E-453B-A039-535D355262FA-low.png\"> 将当前堆栈保存为预设。保存预设时，您必须指定名称以及将光标悬停在列表中的名称上时显示的可选工具提示。 \n                              			 \n                           </li>\n                           <li>单击 <img src=\"../images/GUID-3D377271-8B6B-4CE0-9681-CC5EE50E9109-low.png\"> 可删除选定的预设。 将出现一个对话框，以确认此操作。 \n                              			 \n                           </li>\n                        </ul> \n                        <p> 也可以右键单击下拉菜单，然后选择“设为默认值”以将当前设置应用为默认值。 \n                           		  \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n               <div class=\"section\"><a name=\"SECTION_1374E961297944089F5C46FF9B4046DE\"></a> \n                  <h3><a name=\"GUID-39AD22D5-5ECD-4FBD-BB66-D2E752CA7CB5\"></a>“角点选项”组\n                  </h3> \n                  <dl><a name=\"GUID-75FFE88C-C9A6-4AFA-84BE-053F91F6DB83\"></a><dt><span class=\"term\">斜接 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置当多个边连接到同一顶点时连接角点的方法： \n                           			 <a name=\"UL_A67E711CA121470EB28C196753B9F0E7\"></a><ul>\n                              <li><em class=\"strong\">四边形</em>：在每条切角边周围创建新的四边形（2 x 当前“分段”值）。例如，将“分段”设置为 3 会为每条边生成六个新的多边形。使用的“分段”值越高，切角会变的越圆，具体取决于“张力”值。 \n                                 				  <a name=\"FIG_52BB98CC0E8E422785765260EF67316C\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5CBF00D4-410D-406E-BE21-D37394CFBDF9-low.png\"></div> \n                              </li>\n                              <li><em class=\"strong\">均匀</em>：使用四边形交集创建均匀角点。均匀角点可以是平滑的或锐化的，具体取决于“切角”选项下的“深度”设置。 \n                                 				  <a name=\"FIG_AD0990BCE77C4BE8999DE622BCBB5BA0\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-FA8ED6AE-4A16-4F71-B8BA-BCBA146AF624-low.png\"></div> \n                              </li>\n                              <li><em class=\"strong\">面片</em>：创建还具有四边形交集的面片角点，但也可提供更高的分辨率结果并移除瑕疵。面片角点可以是平滑的或锐化的，具体取决于“切角”选项下的“深度”设置。 \n                                 				  <a name=\"FIG_62E0BBB75F454728BAD28BDBB195F29C\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-84660164-DEFE-49E1-94E8-055BD8C57E9C-low.png\"></div> \n                              </li>\n                              <li><em class=\"strong\">径向</em>：创建角点的方式类似于“面片”，但是要执行此操作，需在拐角处生成弧，以避免倒角边顶点连接到非倒角边顶点。径向角点可以是平滑的或锐化的，具体取决于“切角”选项下的“深度”设置。 \n                                 				  <a name=\"FIG_7110A5E92E3B4B8AA848E5CBC4FB8DBD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D2304E54-C257-48DD-8684-88212C40BAAA-low.png\"></div> \n                              </li>\n                              <li><em class=\"strong\">三角形</em>：使用等于当前“分段”值的多个多边形替换每条切角边。这也会增加非共面多边形之间切角边的“分段”值，从而可能会导致切角区域变圆。这种方法会生成三角形和四边形二者。 \n                                 				  \n                                 <div><a name=\"GUID-679D826E-C39A-4CBE-B2CD-80FEF2F7E3B0\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当平滑或细分时，使用三角形可能会导致网格问题。 \n                                       				  \n                                    </div>\n                                 </div> <a name=\"FIG_4F79667C34B540E9811C95AA82CD20CF\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-552517A1-2567-4E67-B909-CDF5BE40187C-low.png\"></div> \n                              </li>\n                           </ul> \n                        </div>\n                     </dd><a name=\"GUID-3B9CA286-BF6B-4E08-91D8-AACC0902E49A\"></a><dt><span class=\"term\">端点偏移（不支持“三角形”斜接角） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">控制不涉及角点的切角的端点，并能够将端点移向下一条边。值为 1.0 会将切角的端点移动到下一条边的第一个顶点，而值为 0.0 将结束切角。 \n                           			 <a name=\"FIG_EFD23265E4CC4A339741C229BCA7A349\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-63FF3AA1-E280-41EF-995E-7C65690D92C4-low.gif\"><p class=\"figure-title\">端点偏移值从 0 调整到 1.0 并再次返回</p>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_233D904EFE6B4514A1111A033FD17279\"></a> \n                  <h3><a name=\"GUID-555F229E-8B48-4A6C-98E5-6B86777F3DA1\"></a>“切角选项”组\n                  </h3> \n                  <dl><a name=\"GUID-89F91558-6A83-4C08-900C-E1E5C0F6C3ED\"></a><dt><span class=\"term\">数量类型（仅限“均匀”、“面片”和“径向”斜接角） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置数量类型： \n                           			 <a name=\"UL_7DE10FBA093C4962989CD59E4CEBC7A6\"></a><ul>\n                              <li><em class=\"strong\">固定</em>：切角量不会根据连接到点的边数增大或缩小。 \n                                 				\n                              </li>\n                              <li><em class=\"strong\">按权重</em>：使用来自网格的权重通道数据来驱动切角量。可以在“可编辑多边形”或“编辑多边形”修改器的“边属性”组中调整权重。 \n                                 				  <a name=\"FIG_BBA38C37A7A749A8BC47811ABAF5FE83\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-13B50F12-669B-4F9B-AB1E-F79819039410-low.gif\"></div> \n                              </li>\n                              <li><em class=\"strong\">按折缝权重</em>：使用来自网格的折缝权重通道数据来驱动切角量。可以在“可编辑多边形”或“编辑多边形”修改器的“边属性”组中调整折缝权重。 \n                                 				  \n                                 <div><a name=\"GUID-6A82ED89-8615-4365-8120-F9E2060FC6D0\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>使用“折缝权重”在顶点之间插入权重，从而沿着权重边创建混合。使用“按权重”沿边保持一致的权重，从而在斜接角内插入权重。 \n                                       				  \n                                    </div>\n                                 </div> <a name=\"FIG_63DDC7C8CCD64A7081FE1CFEB3636EAE\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AFC4A581-3C37-4086-9B1B-B7B5116415AB-low.gif\"><p></p>\n                                    <p class=\"figure-title\">在启用“按折缝权重”选项的情况下增加切角量</p>\n                                 </div> \n                              </li>\n                              <li><em class=\"strong\">旧版</em>：使用结合“四边形切角”和“四边形交集”的旧版算法。保留此选项是为了支持旧版文件，但是不建议将其用于新模型。 \n                                 				\n                              </li>\n                           </ul> \n                        </div>\n                     </dd><a name=\"GUID-99B2DE3C-1BB7-4977-89AA-2AE52B12F63D\"></a><dt><span class=\"term\">数量 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置切角的宽度（采用距离单位）。默认设置为 1.0。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-41DAE7F4-9579-4220-B28B-B55C04B7027C\"></a><dt><span class=\"term\">缩放（仅限“按权重”数量类型） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">按相同数量缩放所有权重值，从而使您可以跨模型调整切角的总体大小。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-B936AEF2-1AC8-472C-B820-37CB27A12103\"></a><dt><span class=\"term\">最小数量（仅限“按折缝权重”数量类型） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">根据最小折缝权重设置最小切角量。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-4B573C9F-69A2-4038-8DD4-C90E255A503C\"></a><dt><span class=\"term\">最大数量（仅限“按折缝权重”数量类型） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 根据最大折缝权重设置最大切角量。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-01DA7BE0-DE15-4A97-B70E-92A816E82A4D\"></a><dt><span class=\"term\">分段 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置切角内的分段数量。分段越多，切角越平滑。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-46E344E6-61D4-4273-825E-2EB56FCA8395\"></a><dt><span class=\"term\">深度类型（仅限“均匀”、“面片”和“径向”斜接角） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置控制切角深度的方法： \n                           			 <a name=\"UL_C9A3435536184B4E9A27B63BDB7A73BF\"></a><ul>\n                              <li><em class=\"strong\">固定</em>：使用下面设置的深度值。 \n                                 				\n                              </li>\n                              <li><em class=\"strong\">按权重</em>：使用来自网格的通道数据来驱动切角。可以在“可编辑多边形”或“编辑多边形”修改器的“边属性”中设置深度权重。 \n                                 				\n                              </li>\n                           </ul> <a name=\"FIG_24567A3AD2D640589363CD4EA3945F79\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-3D335A9D-9280-401A-BCE5-E625CAB2E3C5-low.gif\"></div> \n                        </div>\n                     </dd><a name=\"GUID-0BF46CDA-1E97-4E4A-96EA-57612A74B679\"></a><dt><span class=\"term\">深度（仅限“均匀”、“面片”和“径向”斜接角） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">控制切角的固定深度： \n                           			 <a name=\"UL_8995C40473C541C6B94724C03F4B98FA\"></a><ul>\n                              <li>深度为 1.0 将在凸边上生成锐角。 \n                                 				\n                              </li>\n                              <li>深度为 0.0 将生成平面。 \n                                 				\n                              </li>\n                              <li>深度为 -0.5 将沿凸边生成凹面曲线曲面。 \n                                 				  \n                                 <p>此选项不适用于旧版数量类型。 \n                                    				  \n                                 </p> \n                              </li>\n                           </ul> \n                        </div>\n                     </dd><a name=\"GUID-5DFECA1F-0ECD-4815-98AB-FFCC5DEE2D2B\"></a><dt><span class=\"term\">张力（仅限“旧版”数量类型） \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 确定通过对非共面多边形之间的边应用切角生成的新多边形之间的角度。当设置为默认值 1.0 时，每个切角边中的所有新多边形均位于平面上。降低“张力”值可增加角度；边任一侧的多边形之间具有足够高的“分段”值和原始角度，这会产生新多边形的曲率。值为\n                           0.0 时，新多边形会占用与原始多边形相同的位置。 \n                           			 \n                           <p>“张力”设置不影响从共面多边形之间的边生成的多边形。与切角边相邻的原始多边形之间的角度越大，可用的曲率就越多。 \n                              			 \n                           </p> <a name=\"FIG_1C061FB635014AB587F0EF4566454D6B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E1FC8441-C6EA-4500-A9DD-78207AC06396-low.png\"></div>  \n                           <p> <em class=\"strong\">1. 初始边选择</em> \n                           </p> \n                           <p> <em class=\"strong\">2. 张力 = 1.0</em> \n                           </p> \n                           <p> <em class=\"strong\">3. 张力 = 0.5</em> \n                           </p> \n                           <p> <em class=\"strong\">4. 张力 = 0.0</em> \n                           </p> \n                           <div><a name=\"GUID-C3DDF304-6396-4963-B221-5599CC389EC3\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果通过减少“张力”值未获得所需的曲率，请尝试增加“分段”值。 \n                                 			 \n                              </div>\n                           </div> \n                        </div>\n                     </dd><a name=\"GUID-955D7494-E2A2-445A-A04A-831A1ED859E3\"></a><dt><span class=\"term\">半径偏移 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">控制切角化角的半径，在角度变得尖锐且切角变为钝角的情况下，确保其更像球形。 \n                           			 <a name=\"FIG_12A5BD105A79414892F4A2184530237E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C4B52A59-84A1-4617-8DFC-A86E0A210245-low.gif\"></div> \n                        </div>\n                     </dd><a name=\"GUID-99DACF30-555C-444C-9AEC-CD5E517C78ED\"></a><dt><span class=\"term\"> 限制效果 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\">启用时，可通过限制切角子对象能够向彼此移动的距离防止边的泛光化。换句话说，启用“限制效果”后，将“数量”设置为超过某个值（基于现有几何体）将不起作用。 \n                           			 \n                           <div><a name=\"GUID-E4DC4A1F-02FE-4F31-A647-38B17804F47A\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当“斜接”选项设置为“三角形”斜接角时，将始终应用“限制效果”。当从“三角形”更改为其他斜接角时，此设置将一直保持有效，因此必须明确将其关闭。 \n                                 			 \n                              </div>\n                           </div> <a name=\"FIG_1DDFC703908B41ABBC1D5A4CC80E8714\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-4A557A4F-308B-4356-B106-D5EB868B2D4C-low.png\"><p class=\"figure-title\">左侧：原始圆柱体；右上角：切角圆柱体（数量 = 8，“限制效果”已禁用）；右下角：切角圆柱体（数量 = 8，“限制效果”已启用）</p>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div>\n            <div class=\"section\"><a name=\"SECTION_0B5BB33576C04DD29BE8EF1F835CF096\"></a> \n               <h2><a name=\"GUID-DC157CBE-70B0-4067-A643-4D544B8D94E7\"></a>“插入”组\n               </h2> <a name=\"FIG_FD40A3CFDDF9473D8076372C850A9250\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AED69007-474D-4B05-AB71-337B67F9FA8C-low.png\"><p class=\"figure-title\">使用“面插入”更正了网格问题（右）</p>\n               </div> \n               <dl><a name=\"GUID-C010D0A8-F95B-4C5D-85FC-E1AD1CAB5518\"></a><dt><span class=\"term\">插入 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\">根据当前生成切角的条件，沿切角边启用面插入。 \n                        		\n                     </div>\n                  </dd><a name=\"GUID-8377D376-BBCA-4474-A3E5-B1EFA184BC75\"></a><dt><span class=\"term\">插入类型 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\">将“插入类型”设置为“面插入”或“流循环”。使用“面插入”，可以调整分段数和偏移。使用“流循环”，添加的边会生成循环，从而形成更清晰的几何体。但“流循环”不支持“分段”或“偏移”。 \n                        		  <a name=\"FIG_F3D12854A5F4411D8767A088EB432D9B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-03709208-D9AB-4CCF-8DCC-D102160C5253-low.gif\"></div> \n                     </div>\n                  </dd><a name=\"GUID-3708CBFB-0962-40C8-BB05-6E20C07F164D\"></a><dt><span class=\"term\">数量 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\">设置插入的大小（采用距离单位）。 \n                        		\n                     </div>\n                  </dd><a name=\"GUID-5DCE9328-E045-4E40-A366-6FAB90F49DDE\"></a><dt><span class=\"term\">分段（仅限“面插入”） \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\">设置插入中的分段数量。 \n                        		\n                     </div>\n                  </dd><a name=\"GUID-0D6DAD74-BBA7-467F-BD35-9F43ACCE0523\"></a><dt><span class=\"term\">偏移（仅限“面插入”） \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\">设置插入的偏移。这些值可以是正数或负数。 \n                        		\n                     </div>\n                  </dd>\n               </dl> \n            </div>\n            <div class=\"section\"><a name=\"SECTION_D561862E228C4CF4BBFCA425B763004E\"></a> \n               <h2><a name=\"GUID-0A2D8610-5D1D-40CE-A744-7117C2AEB27D\"></a>“选择”组\n               </h2> \n               <p><a name=\"GUID-F6D256B8-C166-48B2-9E1D-E379FCE8D28D\"></a>通过这些选项，可以超出初始选择指定输入边上的限制。您可以选择仅对已平滑或未平滑的边应用切角，以及仅对具有相同材质 ID 的多边形组边界内或之上的边应用切角。 \n                  \n               </p> \n               <dl><a name=\"GUID-C1BC1C22-AA6A-408E-9102-E2FB6DD09F54\"></a><dt><span class=\"term\"><a name=\"GUID-04636EFC-8764-4B1C-AF38-9B8B6A8D94A0\"></a>选择 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-762FF60E-589D-4539-820C-628311940B1F\"></a>启用并指定要应用切角的子对象选择。 \n                        		  \n                        <p><a name=\"GUID-B2B1E7CC-75CB-46C2-B5B6-E1658C32332B\"></a>切角修改器可处理子对象层级上的选择，活动的选择除外。例如，假设您有一个可编辑多边形对象，其顶点选择和边选择在对象的不同部分中，并且您在应用切角修改器之前访问边子对象层级。使用名称中包含“顶点”的任何“选择”选项都会导致修改器处理选定顶点，而不影响边选择。\n                           \n                           		  \n                        </p> \n                        <p><a name=\"GUID-6ABFA48B-5E67-423A-B0F5-B7FE07FA6FB8\"></a>从下拉列表中进行选择： \n                           		  \n                        </p> <a name=\"UL_AC152A5102EF4538863B0B96CFAE7D87\"></a><ul>\n                           <li><em class=\"strong\">从堆栈：</em>在当前子对象层级对选择应用切角。如果没有处于活动状态的子对象层级，则将对所有边应用切角。这是默认选择选项。 \n                              				\n                              <div><a name=\"GUID-FD2A3DD1-D437-4423-82F9-A7C1089AFFC4\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>子对象选择必须在切角修改器正下方的堆栈层级处于活动状态。例如，假设您有一个可编辑多边形对象，并且边子对象层级处于活动状态，而且选择了边。假设，然后应用多边形选择修改器，而不选择或更改子对象层级（默认情况下，它是“对象”或“顶”层级）。此时在堆栈中，没有子对象选择处于活动状态，以便随后在“从堆栈”默认选项处于活动状态的情况下应用切角修改器时，只对所有边应用切角。\n                                    \n                                    				\n                                 </div>\n                              </div> \n                           </li>\n                           <li><em class=\"strong\">选定边：</em>对选定边应用切角，而不考虑当前的子对象层级。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">选定面的边：</em>对选定面的边应用切角，而不考虑当前的子对象层级。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">选定面的边界：</em>仅对面选择周围的边应用切角，而不考虑当前的子对象层级。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">选定的边顶点：</em>仅对选择了两个顶点的边应用切角，而不考虑当前的子对象层级。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">所有边：</em>对对象中的所有边应用切角，而不考虑当前的子对象层级。 \n                              			 \n                           </li>\n                           <li> <em class=\"strong\">选定顶点：</em>仅对选定顶点应用切角，而不考虑当前的子对象层级。 \n                              			 \n                           </li>\n                           <li> <em class=\"strong\">所有顶点：</em>对对象中的所有顶点应用切角，而不考虑当前的子对象层级。 \n                              				<a name=\"FIG_8412038C4B5346B8B2F543A3EBF4E017\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AB69D398-ED63-4785-94FA-6A4F15EE663D-low.gif\"><p></p>\n                                 <p class=\"figure-title\">顶点切角操作</p>\n                              </div> <a name=\"FIG_803A9A61018D4F5EA88F10C0499EEAB3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9C7669F0-3D7D-4306-877B-76E5D5CBD027-low.gif\"><p></p>\n                                 <p class=\"figure-title\">加权顶点切角操作</p>\n                              </div> \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n            <div class=\"section\"><a name=\"SECTION_1946C7E547C34759901F84A694F45CC6\"></a> \n               <h2><a name=\"GUID-B977B180-68DE-42CD-A4CE-18DB494640CA\"></a>按组过滤\n               </h2> <a name=\"GUID-F6E2617A-BE62-43AD-9BD5-B6501E8991AA\"></a><dl><a name=\"GUID-18FC769C-5B1C-4D99-946C-AB1B790CDB5C\"></a><dt><span class=\"term\"><a name=\"GUID-9C3D3A49-A619-467E-8722-D297A54D8328\"></a> 从平滑 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-A2A9B7EB-C9AF-4460-B8BA-570D20E57860\"></a>指定修改器如何根据相邻面的平滑处理输入边。从下拉列表中进行选择： \n                        		  <a name=\"UL_C0339B170BE34DF6B153426113F937C7\"></a><ul>\n                           <li><em class=\"strong\">禁用：</em>平滑组不会影响切角。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">已平滑的边：</em>仅对属于同一平滑组的面之间的输入边应用切角 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">未平滑的边：</em>仅对<em class=\"mild\">不属于</em>同一平滑组的面之间的输入边应用切角。 \n                              			 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd><a name=\"GUID-BC7F6FA4-CBD3-4716-999A-CD4D4BF64BD8\"></a><dt><span class=\"term\"><a name=\"GUID-6D86334B-89F9-4F70-811F-9177F73426C3\"></a> 从材质 ID \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-8F87EDDA-FB96-4835-A1EA-AC6EC981D769\"></a>指定修改器如何根据相邻面的材质 ID 指定处理输入边。从下拉列表中进行选择： \n                        		  <a name=\"UL_506741298B634FAEBC3614BE78B52A65\"></a><ul>\n                           <li><em class=\"strong\">禁用：</em>材质 ID 不会影响切角。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">不同材质：</em>仅对具有不同材质 ID 指定的面之间的输入边应用切角。 \n                              			 \n                           </li>\n                           <li><em class=\"strong\">相同材质：</em>仅对具有相同材质 ID 指定的面之间的输入边应用切角。 \n                              			 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd><a name=\"GUID-31D058BB-81F5-4CB2-B28D-598F8C315EBA\"></a><dt><span class=\"term\"><a name=\"GUID-4A63007E-5720-49C9-9272-60B5ADC12996\"></a>最小角度 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-F3FB53E4-E2BB-43F9-BF8B-4E3427958A5C\"></a> 启用后，对边应用切角时，如果面之间的角度小于该值，则不会对边应用切角。 \n                        		  \n                        <p><a name=\"GUID-699277D1-8B2E-44C8-A1D7-112AFB9FF7E3\"></a>例如，要防止对共面面之间的边应用切角，请启用“最小角度”并将值设置为 0.0。 \n                           		  \n                        </p> \n                     </div>\n                  </dd><a name=\"GUID-E067ACA1-5804-44F2-91B7-5505D028C372\"></a><dt><span class=\"term\"><a name=\"GUID-09A8A6DF-BC4D-4F50-86EB-D97F7A3E0B00\"></a>最大角度 \n                        		</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-1FB3A492-2223-4CDD-9B00-1134EECC17AC\"></a> 启用后，对边应用切角时，如果面之间的角度大于该值，则不会对边应用切角。 \n                        		  \n                        <p><a name=\"GUID-F0244DA0-AA99-40D4-807B-F8E61BE6ED91\"></a>例如，要仅对彼此成直角的面之间的边应用切角，请启用“最小角度”并将其设置为 89.0 左右，然后启用“最大角度”并将其设置为 90.0。 \n                           		  \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n            <div class=\"section\"><a name=\"SECTION_D9DD53F9BDC449F9973FA90CDA2719DC\"></a> \n               <h2><a name=\"GUID-5BB9BD4C-1CE2-4490-ACC6-8CE369FFCF08\"></a>“输出”卷展栏\n               </h2> <a name=\"FIG_2AFDC76515494D59A466882481971D88\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-00D9D85D-DF6B-4314-8B89-B77DC730A4A4-low.png\"></div> \n               <div class=\"section\"><a name=\"SECTION_A0C84220ED2F4604AE6A35EB8F9135F7\"></a> \n                  <h3><a name=\"GUID-D0942D45-BC3E-4261-AE22-1509CB53C6A4\"></a>“材质输出”组\n                  </h3> \n                  <dl><a name=\"GUID-B613DD3C-0141-461F-B17B-0983C0CDD574\"></a><dt><span class=\"term\"><a name=\"GUID-45158412-294D-41E6-A06D-344F6647D670\"></a> 设置切角材质 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-C1921786-76F0-4A6A-8367-AD8F6265F4AF\"></a> 启用该选项后，会将指定的材质 ID（参见以下内容）应用到通过切角生成的新多边形。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-9CCB62A2-8F9E-4478-ABEB-82F60846E117\"></a><dt><span class=\"term\"><a name=\"GUID-CE7AD463-C154-441D-BF1F-A4C1B9B91D65\"></a> 材质 ID \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-4821801B-0BCA-4AA6-B514-9A8F935B34AD\"></a> 启用了“设置切角材质”时，应用到新多边形的材质 ID \n                           		  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_46D433C9761C41EA984DA21A9B1D912D\"></a> \n                  <h3><a name=\"GUID-325ADEA4-E257-4422-9B8E-8EE5A47851B5\"></a>“平滑输出”组\n                  </h3> <a name=\"GUID-3625455A-251F-4ADF-BC58-A97E9CD79A8B\"></a><dl><a name=\"GUID-9AF21BEA-9275-478A-974D-1425D79AA9A5\"></a><dt><span class=\"term\"><a name=\"GUID-12BE8CE0-99E8-4E4A-BE49-9BFAA10369E3\"></a> 平滑 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-1C64E0F9-AC1F-456E-8D95-1A36B4FBA000\"></a> 启用后，在应用切角后应用平滑组。从下拉列表中，选择以下任一选项： \n                           			 <a name=\"UL_F3F6C54FA5C440C9910A4DCF1C284241\"></a><ul>\n                              <li><em class=\"strong\">平滑整个对象：</em>根据相邻多边形之间的角度，将平滑组应用到整个对象。如果任何两个相邻多边形法线间的角度小于该按钮右侧的微调器设置的阈值角度，则这两个多边形处于同一个平滑组中。 \n                                 				\n                              </li>\n                              <li><em class=\"strong\">仅平滑切角：</em>根据相邻多边形之间的角度，将平滑组应用到切角过程创建的新多边形。如果任何两个相邻多边形法线间的角度小于该按钮右侧的微调器设置的阈值角度，则这两个多边形处于同一个平滑组中。 \n                                 				  <a name=\"UL_BB1BD7A0DB534C77B922DA9EF870E9C5\"></a><ul>\n                                    <li> <em class=\"strong\">平滑到相邻对象：</em>当仅平滑切角（请参见上文）时，请使用“指定法线”执行附加步骤，以便将切角平滑到相邻的原始面，并保留原始面展平的外观。 \n                                       					 \n                                    </li>\n                                 </ul> \n                              </li>\n                           </ul> \n                        </div>\n                     </dd><a name=\"GUID-AC96D433-C70F-4782-9B49-3D4A04174C78\"></a><dt><span class=\"term\"><a name=\"GUID-01FE06EC-DEDC-4A1D-B1DF-A6648896E7BE\"></a> 阈值 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-3497F2ED-A772-4558-8F58-EEFF0E39A373\"></a>启用“平滑”后，如果两个相邻面的法线之间的角度小于设置的“阈值”，则将两个相邻面放在同一个平滑组中。 \n                           		  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_4C0AB82AEF3745B4B9150966A5CECFFF\"></a> \n                  <h3><a name=\"GUID-B640EBB7-0CBD-487A-A8D7-E458F66C04EE\"></a>“打开切角”组\n                  </h3> \n                  <dl><a name=\"GUID-394547BA-3E50-4278-B16C-DAB35DB6BED7\"></a><dt><span class=\"term\">打开 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 切角之后，删除通过切角操作创建的所有面。 \n                           		  \n                        </div>\n                     </dd><a name=\"GUID-6B0E8FE7-D759-410A-81CE-1FBE047CAB85\"></a><dt><span class=\"term\">反转 \n                           		  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 切角之后，删除通过切角操作创建的面之外<em class=\"mild\"></em>的所有面。 \n                           		  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div>\n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-82722323-100B-4711-A01D-8A87EB53DD96.htm\">编辑法线修改器参考</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-CB7FD47E-D809-429C-98D3-20CB56B72EBF.htm\">细分曲面</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";