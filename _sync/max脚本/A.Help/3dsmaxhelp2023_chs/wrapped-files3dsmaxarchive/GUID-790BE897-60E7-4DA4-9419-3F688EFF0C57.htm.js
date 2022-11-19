var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-790BE897-60E7-4DA4-9419-3F688EFF0C57\">\n      <meta name=\"description\" content=\"最常见的是，您要使用封套纠正 Biped 移动时蒙皮的行为方式。然而，您可以通过手动分配顶点属性来覆盖封套。例如，您可以从所选顶点中删除不适当链接的影响。您也可以通过使用输入权重来更改单个顶点链接之间的权重分配。\">\n      <meta name=\"indexterm\" content=\"Physique: 顶点子对象\">\n      <meta name=\"contextid\" content=\"TOPIC_VERTEX_SUB_OBJECT_PHYSIQUE\">\n      <meta name=\"contextid\" content=\"TOPIC_VERTEX_SUB_OBJECT_PROC1\">\n      <meta name=\"contextid\" content=\"TOPIC_VERTEX_SUB_OBJECT_PROC2\">\n      <meta name=\"contextid\" content=\"TOPIC_VERTEX_SUB_OBJECT_PROC3\">\n      <meta name=\"contextid\" content=\"TOPIC_VERTEX_SUB_OBJECT_PROC4\">\n      <meta name=\"contextid\" content=\"TOPIC_VERTEX_SUB_OBJECT_PROC5\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>顶点子对象 (Physique)</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-790BE897-60E7-4DA4-9419-3F688EFF0C57\"></a><div class=\"head\">\n            <h1>顶点子对象 (Physique)</h1>\n         </div>\n         <p class=\"blurb\">最常见的是，您要使用封套纠正 Biped 移动时蒙皮的行为方式。然而，您可以通过手动分配顶点属性来覆盖封套。例如，您可以从所选顶点中删除不适当链接的影响。您也可以通过使用输入权重来更改单个顶点链接之间的权重分配。 </p><a name=\"GUID-FAA01952-CE3B-480A-968F-004D3234E565\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-BF264111-F0D3-4879-BA4D-5A9F931D81B8\">选择已应用 Physique 修改器的对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “顶点”子对象级别</span> \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-464C\"></a> \n            <h2><a name=\"GUID-AC051139-1A9E-4523-9CA3-3D8FA89D3625\"></a>过程\n            </h2> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F0\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>您不必一次只针对一个链接局部进行操作。您可以使用区域选择来选择顶点组或链接组，同时对身体的区域及其骨骼进行操作。 \n               </div>\n            </div> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E5D\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045E68\"></a>\n               <!--CPM-ContextId = \'TOPIC_VERTEX_SUB_OBJECT_PROC1\'--><a name=\"GUID-39DE4120-E823-4AD6-AAF4-01135DBFC52D\"></a>要检查顶点分配，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>转至“顶点”子对象层级。 </li>\n               <li>在“顶点操作”组中，单击即可打开“按链接选择”。 </li>\n               <li>确保所有三个 <img src=\"../images/GUID-403BC895-196E-4F19-BDCD-5054917866C8-low.png\">“顶点类型”按钮都已启用。 \n               </li>\n               <li>在视口中，单击一个链接。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16956\"></a>Physique 显示分配给该链接的顶点。如果所有指定给链接的顶点位置不当，请按以下步骤所述，将它们重新分配给不同的链接。 \n                  </p> \n               </li>\n               <li>对于骨骼中的其它链接，请重复步骤 4。 </li>\n            </ol> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E5C\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045E69\"></a>\n               <!--CPM-ContextId = \'TOPIC_VERTEX_SUB_OBJECT_PROC2\'--><a name=\"GUID-19DCEFF6-007B-4912-8213-0B280D07B20C\"></a>要删除链接对顶点的影响，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16957\"></a>例如，您可能想要从中指的顶点中删除食指链接的影响。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>转至“顶点”子对象层级。 </li>\n               <li>激活 <img src=\"../images/GUID-103C0FB3-CA74-4C80-9CAF-FA8E106752EF-low.png\">（选择对象），并选择视口中的顶点。 \n               </li>\n               <li>在“顶点操作”组中，打开“从链接删除”。 </li>\n               <li>在视口中单击链接。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16958\"></a>顶点已从该链接的影响中删除。 \n                  </p> \n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F1\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>也可以单击附加链接来删除它们的影响。 \n                     </div>\n                  </div> \n               </li>\n               <li>在“顶点操作”组中，打开“锁定分配”。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16959\"></a>为了确保在以后调整封套参数时，这些封套不会影响这些顶点，必须使用“锁定分配”。 \n                  </p> \n               </li>\n            </ol> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E5B\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045E6A\"></a>\n               <!--CPM-ContextId = \'TOPIC_VERTEX_SUB_OBJECT_PROC3\'--><a name=\"GUID-8CBAC0BF-C866-4807-A025-5780E57E467B\"></a>要从链接的影响中删除可变形顶点，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>转至“顶点”子对象层级。 </li>\n               <li>确保所有三个 <img src=\"../images/GUID-403BC895-196E-4F19-BDCD-5054917866C8-low.png\">“顶点类型”按钮都已启用，然后在“顶点操作”组中，单击以启用“按链接选择”。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1695A\"></a>观察分配并确定哪些顶点的影响不正确。同时要注意顶点是红色的（可变形的），还是绿色的（刚性的）。 \n                  </p> \n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F2\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>蓝色顶点不会落在任何链接的影响范围内，因而被分配给根。 \n                     </div>\n                  </div> \n               </li>\n               <li>激活 <img src=\"../images/GUID-103C0FB3-CA74-4C80-9CAF-FA8E106752EF-low.png\">（选择对象），并在视口中仅选择位置不当的顶点。 \n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F3\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>还可以选择使用 <span class=\"keyboardEntry\">Alt</span>+单击取消选择位于正确位置的顶点。 \n                     </div>\n                  </div> \n               </li>\n               <li>在“顶点类型”组中，单击以禁用 <img src=\"../images/GUID-AEB87544-EFFE-49F7-B57B-B00252F33F9D-low.png\">（刚性顶点）和 <img src=\"../images/GUID-FE81BE38-24E8-4B72-85EF-B8640D68E244-low.png\">（根顶点）。启用 <img src=\"../images/GUID-FD43B849-595E-46A2-8F88-0D8CE76B9531-low.png\">（可变形的顶点）。 <a name=\"WS73099CC142F48755-575EAB4C124F5234AA8-1FA3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-35CAEAEF-62D3-45D2-813F-76AA2366BCA1-low.png\"></div> \n               </li>\n               <li>在“顶点操作”组中，单击“从链接删除”。 </li>\n               <li>在视口中，单击不想再影响已选定可变形顶点的每个链接。 </li>\n            </ol> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E5A\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045E6B\"></a>\n               <!--CPM-ContextId = \'TOPIC_VERTEX_SUB_OBJECT_PROC4\'--><a name=\"GUID-06F3CE6C-7F48-4BCF-AE83-348CAB52FB0F\"></a>要手动覆盖顶点分配，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1695B\"></a>当封套分配不当，并且希望特定的链接影响特定的顶点时，使用该技术。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>转至“顶点”子对象层级。 </li>\n               <li>确保所有三个 <img src=\"../images/GUID-403BC895-196E-4F19-BDCD-5054917866C8-low.png\">“顶点类型”按钮都已启用，然后选择要重新指定的顶点。 \n               </li>\n               <li>在“顶点操作”组中，单击打开“指定给链接”。 </li>\n               <li>在“顶点类型”组中，仅选择要使用的顶点指定类型：<img src=\"../images/GUID-FD43B849-595E-46A2-8F88-0D8CE76B9531-low.png\"> 可变形的（红色）或 <img src=\"../images/GUID-AEB87544-EFFE-49F7-B57B-B00252F33F9D-low.png\"> 刚性（绿色）。 \n               </li>\n               <li>从“在链接之间混合”下拉列表中选择“无混合”。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1695C\"></a>该设置将会忽略混合封套及顶点权重的效果，并允许您手动分配对任何链接的选择。 \n                  </p> \n               </li>\n               <li>在视口中，单击您要影响顶点的链接。 \n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F4\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当您分配了可变形顶点后，一些顶点可能会变成蓝色；它们被分配给根，而不是单击的链接。如要将这些顶点指定为正确的可变形顶点，只需在临近的父链接或子链接中使用 <span class=\"keyboardEntry\">Ctrl</span>+单击。如果蓝色顶点现在变成红色，则表明它们是可变形的。 \n                     </div>\n                  </div> \n               </li>\n               <li>在“顶点操作”组中，单击“锁定分配”以保存手动分配。 </li>\n            </ol> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E59\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045E6C\"></a>\n               <!--CPM-ContextId = \'TOPIC_VERTEX_SUB_OBJECT_PROC5\'--><a name=\"GUID-4CAE3705-7276-46C3-9765-F3A11E418851\"></a>要使顶点变为刚性，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>转至“顶点”子对象层级。 </li>\n               <li>激活 <img src=\"../images/GUID-103C0FB3-CA74-4C80-9CAF-FA8E106752EF-low.png\">（选择对象），并在视口中选择要使其变为刚性的顶点。 \n               </li>\n               <li>在“顶点操作”组中，单击打开“指定给链接”。 </li>\n               <li>在“顶点类型”组中，启用 <img src=\"../images/GUID-AEB87544-EFFE-49F7-B57B-B00252F33F9D-low.png\">（刚性顶点），并禁用 <img src=\"../images/GUID-FD43B849-595E-46A2-8F88-0D8CE76B9531-low.png\">（可变形的顶点）和 <img src=\"../images/GUID-FE81BE38-24E8-4B72-85EF-B8640D68E244-low.png\">（根顶点）。 \n               </li>\n               <li>从“在链接之间混合”下拉列表中选择“无混合”。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1695D\"></a>该设置将会忽略混合封套及顶点权重的效果，并允许您手动分配对任何链接的选择。 \n                  </p> \n               </li>\n               <li>在视口中，单击将分配这些顶点的链接。 </li>\n               <li>在“顶点操作”组中，单击“锁定指定”。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1695E\"></a>所选顶点周围的小方块表明该顶点已被锁定。 \n                  </p> \n               </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-464B\"></a> \n            <h2><a name=\"GUID-93F11E21-EFD1-41B4-8736-376DB5A1CF81\"></a>界面\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1695F\"></a>用于 Physique 控制的网格中顶点的控件位于“顶点链接指定”卷展栏中。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F5\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>这与“Physique 初始化”对话框中使用的卷展栏<span class=\"charspan-emphasis\"> <em class=\"mild\">不</em> </span> 一样。 \n               </div>\n            </div> <a name=\"WS1A9193826455F5FFBA679E112A6A190045E6D\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-51A2BF53-740D-4AF4-845A-6BD9D37922F5-low.png\"></div> <a name=\"GUID-920BA521-97EF-4E4A-8BEA-681210CA5A8B\"></a><div class=\"dl_section\"><a name=\"GUID-2370DD1D-46AA-4E4F-9AD3-BA9138BB1CC3\"></a><p class=\"title\"><a name=\"GUID-2805F75B-C273-4F7A-BC72-7C1665978911\"></a>“顶点类型”组\n               </p><a name=\"WS1A9193826455F5FFBA679E112A6A190045E6F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-40849363-2F40-408C-A6D4-31A6E4DB61DA-low.png\"></div>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16960\"></a>有三种顶点类型，可以通过颜色进行区分： \n               </p><a name=\"WS1A9193826455F5FFBA679E112A6A190045E70\"></a><ul>\n                  <li> <img src=\"../images/GUID-FD43B849-595E-46A2-8F88-0D8CE76B9531-low.png\"> <em class=\"strong\">红色</em>Physique 变形样条线沿线的可变形顶点。 \n                  </li>\n                  <li> <img src=\"../images/GUID-AEB87544-EFFE-49F7-B57B-B00252F33F9D-low.png\"> <em class=\"strong\">绿色</em>不可变形的刚性顶点，只沿着将其分配到的链接。 \n                  </li>\n                  <li> <img src=\"../images/GUID-FE81BE38-24E8-4B72-85EF-B8640D68E244-low.png\"> <em class=\"strong\">蓝色</em>连接到根节点的顶点。当 Physique 不确信将顶点分配给哪个链接时，使用该颜色。这些顶点不会变形，但追随重心对象。您应该将蓝色顶点重新分配为刚性或可变形顶点。 \n                  </li>\n               </ul>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16961\"></a>打开了适当颜色的按钮时，就可以选择该颜色顶点。关闭按钮可以避免选择该颜色的顶点。不能同时关闭所有三个按钮。 \n               </p>\n            </div>\n            <dl>\n               <dt><a name=\"GUID-238E0FC9-61E9-4909-8C8E-BCB8E5875D21\"></a><span class=\"term\"><a name=\"GUID-4AB0BC31-56C4-43AA-AA3B-BFAE80A2D46D\"></a>在链接之间混合</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-0D551B83-7A1C-4BAD-8160-121673CB0982\"></a> \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16962\"></a>此下拉列表提供了多个选项： \n                     </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190045E72\"></a><ul>\n                        <li> <em class=\"strong\">N 个链接</em>所有重叠封套中的顶点都受影响。 \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16963\"></a>当该选项活动时，顶点<em class=\"mild\">只能</em>分配给落在范围内的封套。在这种情况下，Physique 使用封套来定义每个顶点的混合权重。 \n                           </p> \n                        </li>\n                        <li> <em class=\"strong\">无混合</em>顶点仅受一个链接影响，这与在 <em class=\"strong\">character studio 1</em> 中相同。 \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16964\"></a>如果您正在为不支持混合的游戏引擎开发角色，其作为一般默认设置非常有用。在顶点子对象级别，这非常有助于覆盖由封套定义的混合权重，并将顶点分配给刚性或可变形链接。例如，当选择了头骨和脸部的顶点后，依次打开“无混合”、“刚性顶点”和“指定给链接”，然后单击“头链接”。这将会覆盖头部封套顶点分配，并将这些顶点指定为头链接的刚性顶点。使用“锁定分配”可锁定所有更改（如下所述）。\n                              \n                           </p> \n                        </li>\n                        <li> <em class=\"strong\">2、3、4 链接</em>顶点仅受指定数量最紧密链接的影响。这在开发具有有限混合功能的游戏引擎角色时非常有用。 \n                        </li>\n                     </ul> \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-F345BFF5-6E63-498E-A2D1-325C3D0F4260\"></a><p class=\"title\"><a name=\"GUID-21EC87A0-0FB8-4BE5-8D54-EB79D3036BEB\"></a>“顶点操作”组\n               </p><a name=\"WS1A9193826455F5FFBA679E112A6A190045E74\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-17484B4F-B546-42B8-8220-E7CA90C93FC0-low.png\"></div>\n               <dl>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F3\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16965\"></a>选择</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-17A5\"></a> 使用主工具栏中的选择工具选择顶点。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F4\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16966\"></a>按链接选择</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-17A4\"></a> 根据链接选择顶点。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16967\"></a>指定给链接</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-17A3\"></a> 将所选顶点指定给链接。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16968\"></a>要将当前选定的顶点指定给链接，请打开“指定给链接”，然后单击链接。 \n                        </p> \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16969\"></a>“指定给链接”对为每个链接定义的封套具有依赖性，必须将“链接之间混合”设置为“无混合”以覆盖该项。以这种方式手动分配顶点后，请使用“锁定分配”可以防止在后续操作期间不小心再次分配它们。 \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F6\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>您必须通过单击链接来选择或分配一个链接；当使用 Physique 对顶点进行操作时，您不能使用“从场景选择”对话框来选择或分配链接。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F6\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF1696A\"></a>从链接移除</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-17A2\"></a> 从链接删除所选顶点。 \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F7\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“选择”、“按链接选择”、“指定给链接”和“从链接删除”只对由红、绿和蓝顶点类型（“＋”）按钮指定的顶点进行操作。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF1696B\"></a>锁定指定</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-17A1\"></a> 锁定顶点指定。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1696C\"></a>锁定可以防止对当前分配给所选顶点的权重和混合进行任何更改。完成了顶点的<em class=\"mild\">所有</em> 手动分配后，应该将它们锁定。在使用输入权重之前，必须锁定顶点。当在角色的有障碍区域执行封套操作时，在更改封套来影响其它顶点之之前，可能会选择锁定工作良好的顶点。 \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F8\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果额外数据（如更多的顶点）出现在修改器栈中，Physique 会将附近的新顶点记录到锁定的顶点。然后，它会<span class=\"charspan-emphasis\"> <em class=\"mild\">锁定</em> </span>附近的新顶点。已锁定的顶点将不会解锁。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F8\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF1696D\"></a>取消锁定指定</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-17A0\"></a> 取消锁定顶点指定。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1696E\"></a>将所选锁定顶点指定给其他链接，或更改其混合设置之前，请单击所选锁定顶点的“取消锁定指定”。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30F9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF1696F\"></a>输入权重</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-179F\"></a> 显示<span class=\"char_link\"><a href=\"GUID-49E7FD20-C3BD-489F-83FE-5B6E4200CC45.htm\">“输入权重”对话框</a></span>，在此可以输入所选锁定顶点的权重：只能更改锁定顶点的权重。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16970\"></a>要使用此功能：选择一个或多个顶点，然后将其锁定。单击该按钮可显示“输入权重”对话框，从下拉列表中选择链接，然后更改该链接的权重，以定位顶点（当权重改变时，在视口中顶点位置会更新）。 \n                        </p> \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16971\"></a>您可以为落入两个或多个封套之间混合区域中的难处理顶点使用输入权重。您可以对特定链接的顶点权重进行精细调节，只通过单独调整封套难以完成此操作。 \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7F9\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>输入权重主要是有助于纠正在低到中等分辨率网格中的缺陷。在高分辨率网格中，应该使用调整封套来纠正变形。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30FA\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16972\"></a>隐藏</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-179E\"></a> 隐藏所选顶点 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30FB\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16973\"></a>全部取消隐藏</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-179D\"></a> 取消隐藏所有顶点。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <dl>\n               <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E30FC\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16974\"></a>最初骨骼姿势</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-179C\"></a> 启用后，使网格变成其最初的姿势；也就是说，最初应用 Physique 的姿势。默认设置为禁用。 \n                  </div>\n               </dd>\n            </dl> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";