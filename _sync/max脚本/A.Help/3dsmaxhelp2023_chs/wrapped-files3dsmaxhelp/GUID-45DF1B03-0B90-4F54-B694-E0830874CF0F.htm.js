var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-45DF1B03-0B90-4F54-B694-E0830874CF0F\">\n      <meta name=\"description\" content=\"“面片选择”修改器可以在堆栈中为后续修改器向上传递一个子对象选择。它提供在编辑面片修改器中可用的选择功能的超集。可以选择顶点、边、面片和元素。也可以将选择从子对象层级更改到对象层级。\">\n      <meta name=\"indexterm\" content=\"修改器: 面片选择\">\n      <meta name=\"indexterm\" content=\"面片选择修改器\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 面片选择\">\n      <meta name=\"contextid\" content=\"PATCHSELECT.MODIFIERS\">\n      <meta name=\"contextid\" content=\"MODIFIERS-PATCHSELECT\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>面片选择修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-45DF1B03-0B90-4F54-B694-E0830874CF0F\"></a><div class=\"head\">\n            <h1>面片选择修改器</h1>\n         </div>\n         <p class=\"blurb\">“面片选择”修改器可以在堆栈中为后续修改器向上传递一个子对象选择。它提供在<span class=\"char_link\"><a href=\"GUID-AA0DB9F3-81F9-4F2C-AD5B-0E619A9C578A.htm\">编辑面片修改器</a></span>中可用的选择功能的超集。可以选择顶点、边、面片和元素。也可以将选择从子对象层级更改到对象层级。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_C073AA46A32D479CAC3AF06E7409B980\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-D48E1EDE-9276-4021-A4F2-3F48B6F1B3DC\">进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “面片选择”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-0367D704-29CE-4F02-B98C-715C7385737E\">进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “选择” <img src=\"../images/ac.menuaro.gif\"> “面片选择”</span> \n               </li>\n            </ul>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9D0\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当应用“面片选择”修改器然后转到任何子对象层级时，工具栏中的选择和变换按钮都无效，而“选择对象”按钮会自动激活。 \n                  \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900439DD\"></a> \n               <h2><a name=\"GUID-F6DA1C3B-84EB-4C86-ACEE-37E4681A02C9\"></a>使用“变换”修改器来设置面片选择的动画\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E32\"></a>应用“面片选择”修改器时，不会有动画控制器指定到子对象选择上。这意味着选择无法“携带”设置动画所需要的变换信息。 \n                  \n               </p> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E31\"></a>要使用“面片选择”设置子对象选择的动画，可以对选择应用“变换”或“链接变换”修改器。这些修改器提供设置变换效果动画所必需的控制器。在场景中，它们将“整个对象状态”提供给子对象选择。 \n                  \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900439DE\"></a><ul>\n                  <li> <span class=\"char_link\"><a href=\"GUID-44AA1775-4215-423B-9D78-7E74CD3D4423.htm\">变换</a></span> \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E30\"></a>在子对象选择上直接设置变换动画。为子对象选择创建 Gizmo 和中心。可以设置这两者的动画，并且将中心作为选择的轴点。 \n                        		\n                     </p> \n                  </li>\n                  <li> <span class=\"char_link\"><a href=\"GUID-D8FA03E0-8278-456D-859B-75555C3D37F5.htm\">链接变换</a></span> \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E2F\"></a>选择另一个对象以控制动画。子对象选择链接到“控制对象”上。变换控制对象时，子对象选择相应的跟着变换。 \n                        		\n                     </p> \n                  </li>\n               </ul> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2958\"></a> \n               <h2><a name=\"GUID-50151AF7-C3F1-41CE-B1E5-2D86694B1406\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900439DF\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900439E0\"></a>要使用“面片选择”修改器，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建或选择一个面片对象。 \n                     	 \n                  </li>\n                  <li>转到“修改”面板并从修改器列表中选择“面片选择”。 \n                     	 \n                  </li>\n                  <li> 选择顶点、控制柄、边、面片或元素。 \n                     	 \n                  </li>\n                  <li>从第三步开始添加另一个只影响选中项的修改器。 \n                     	 \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2957\"></a> \n               <h2><a name=\"GUID-1983DD14-F548-4C3D-B729-D0CC7068BEDD\"></a>界面\n               </h2> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900439E1\"></a> \n                  <h3><a name=\"GUID-8430007C-B95E-4C20-B6EF-FFD3FA4285F6\"></a>修改器堆栈\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A1900439E2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9A563DD0-DCA0-4A17-8544-67DE36B7EFFB-low.png\"></div>  <a name=\"GUID-C5C0C20B-DB31-47D9-9122-7CB14D1BA3D2\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AAF\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E2E\"></a>顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D11\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB3\"></a>选择顶点。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AAE\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E2D\"></a>控制柄</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D10\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB4\"></a>选择控制柄。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AAD\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E2C\"></a>边</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D0F\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB5\"></a>选择边。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AAC\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E2B\"></a>面片</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D0E\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB6\"></a>选择面片。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AAB\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E2A\"></a>元素</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D0D\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB7\"></a>选择元素。 \n                              	 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E29\"></a>关于堆栈显示的更多信息，请参见<span class=\"char_link\"><a href=\"GUID-80209C3A-C2E4-4541-8738-D1E5ECE16E9C.htm\">修改器堆栈</a></span>。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900439E4\"></a> \n                  <h3><a name=\"GUID-AC830B24-5E9A-4C4C-A004-19B7CCA4FB01\"></a>“参数”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A1900439E5\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-46450AFF-397F-4838-AB19-EE9F6D5A1B58-low.png\"></div>  \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E28\"></a>提供各种按钮，用于启用和禁用不同的子对象模式，使用命名选择和控制柄，显示设置和关于选中条目的信息。 \n                     	 \n                  </p> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E27\"></a>通过“选择”卷展栏顶部的图标，可以指定面选择的方法。在这里单击一个按钮与在修改器堆栈中选择一个子对象类型效果相同。再次单击该按钮将其禁用并返回到对象选择层级。 \n                     	 \n                  </p> <a name=\"GUID-2549E7A6-2C94-4454-8436-1565DBA1B7D2\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AAA\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E26\"></a> <img src=\"../images/GUID-15D17D2C-9D76-485B-855C-2F239ED5C6B9-low.png\">顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D0C\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB8\"></a>选定光标下的顶点；区域选择将选择区域内的顶点。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E25\"></a> <img src=\"../images/GUID-11BCF581-5434-4BD2-9B1B-DCB564B42DB5-low.png\"> 控制柄</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D0B\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EB9\"></a>选定光标下的控制柄；区域选择将选择区域内的多个控制柄。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA8\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E24\"></a> <img src=\"../images/GUID-40E81B98-4547-417A-9506-2B2FED0FF2BF-low.png\">边</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D0A\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EBA\"></a>选定光标下的边；区域选择将选择区域内的多条边。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E23\"></a> <img src=\"../images/GUID-9B7C8C3F-E206-42B5-A5EF-C66C31593CB1-low.png\"> 面片</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D09\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EBB\"></a>选定光标下的面片；区域选择将选择区域内的多个面片。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA6\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E22\"></a> <img src=\"../images/GUID-269CB902-3F72-472D-80CE-3186858A346A-low.png\"> 元素</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D08\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EBC\"></a>选定对象中的所有连续面；区域选择的结果与此相同。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E21\"></a>按顶点选择</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D07\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EBD\"></a>在当前层级选中使用您所单击的顶点的任何子对象。应用到所有子对象层级除了“顶点”。同样也适用于“区域选择”。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA4\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E20\"></a>忽略背面</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D06\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EBE\"></a>只选择其法线使其在视口中可见的这些边、面片或元素。禁用该选项后（默认设置），选择包含所有的子对象，而无论其法线方向。 \n                              	 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9D1\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在“显示”面板中的背面消隐设置状态不影响子对象选择。因此，如果禁用“忽略背面”，即使看不到子对象但仍然可以选择它们。 \n                                 	 \n                              </div>\n                           </div> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9D2\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“忽略背面”复选框的状态也会影响“边”子对象选择级别的边选择。 \n                                 	 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl>\n                  <div class=\"dl_section\"><a name=\"GUID-82A3E956-E68D-4649-814D-01D5ABCED788\"></a><p class=\"title\"><a name=\"GUID-ECE0A731-B439-47F4-8846-9EB902F11D52\"></a>“从其他级别获取”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E1F\"></a>将选择从一个子对象层级应用到另一个子对象层级。 \n                        	 \n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA3\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E1E\"></a>获取顶点选择</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D05\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EBF\"></a>根据上一次顶点选择来选择边、面片或元素。该选择会被添加到当前选择中。仅当“顶点”不是当前子对象层级时才可用。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA2\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E1D\"></a>获取边选择</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D04\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EC0\"></a>根据上一次边选择来选择顶点、面片或元素。选择含有该边的顶点、面片或元素。只有当“边”不是当前子对象层级时才可以使用。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA1\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E1C\"></a>获取面片选择</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D03\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EC1\"></a>根据上一次面片选择来选择顶点、边或元素。该选择会被添加到当前选择中。只有当“面片”不是当前子对象层级时才可以使用。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-6E350A50-243B-4119-B1F9-9D54EFC275A6\"></a><p class=\"title\"><a name=\"GUID-3AAD475C-EB06-4BAA-85D7-CF2A29F4EF57\"></a>“按材质 ID 选择”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E1B\"></a>根据其材质 ID 选择面。 \n                        	 \n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7AA0\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E1A\"></a>ID</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D02\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EC2\"></a>将微调器设置为想要选择的 id 编号，然后单击“选择”按钮。单击时按下 <span class=\"keyboardEntry\">Ctrl</span> 键以添加到当前选择中，或者按下 <span class=\"keyboardEntry\">Alt</span> 键从当前选择中删除。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-D85AF6B6-8F7F-450A-843A-14AD08401B37\"></a><p class=\"title\"><a name=\"GUID-B0BC9DF0-9CBC-44B8-86A8-3A69EE82EE86\"></a>“命名选择集”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E19\"></a>这些功能主要用于在相似对象间、类似修改器和可编辑对象间复制子对象的<span class=\"char_link\"><a href=\"GUID-93B01505-5474-43D6-8B83-810BA0157A9B.htm\">命名选择集</a></span>。例如，可以将一个面片选择修改器应用到球体上，创建一个边的命名选择集，然后将选择复制到另一个已经转化为可编辑面片对象的球体上。甚至可以将选择集复制到一个不同类型的对象上，因为选择是由实体的 ID 编号定义的。 \n                        	 \n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E18\"></a>标准过程是创建一个选择集，为其命名，然后使用“复制”将其复制到复制缓冲区中。接下来，选择一个不同的对象和/或修改器，转入与复制选择集时所在的相同的子对象层级，然后单击“粘贴”。 \n                        	 \n                     </p>\n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9D3\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>因为子对象 ID 编号根据对象而有所不同，在不同对象间复制命名选择集可能会产生意外的结果。例如，如果缓冲的选择集只含有比目标对象中任何现有编号都大的实体，那么当粘贴选择集时不会选中任何实体。 \n                           	 \n                        </div>\n                     </div>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A9F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E17\"></a>复制</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D01\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EC3\"></a>将命名选择放置到复制缓冲区。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A9E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E16\"></a>粘贴</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7D00\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EC4\"></a>从复制缓冲区中粘贴命名选择。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A9D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E15\"></a>选择开放边</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CFF\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751EC5\"></a>选择所有只有一个面的边。在大多数对象中，这会显示何处缺少面片。只在“边”子对象层级下才可以使用。 \n                              	 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"GUID-C68C6D10-C9B5-4046-B6F1-DB5693C354BB\"></a><span class=\"term\"><a name=\"GUID-39BF0AA4-A933-4A34-99E0-38CDDF933557\"></a>选择信息</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-8070F53A-C1C8-4ACA-981D-18B812291DBA\"></a>在“面片选择参数”卷展栏的底部有一个文本显示，它提供关于当前选择的信息。如果没有子对象选中，或者选中了多个子对象，那么该文本给出选择的数目和类型。如果选中了一个子对象，那么该文本给出选定项的 ID 编号和类型。 \n                           	 \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9D4\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当前子对象类型是“面片”或“元素”时，选择信息按面片给出。 \n                                 	 \n                              </div>\n                           </div>\n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900439EB\"></a> \n                  <h3><a name=\"GUID-D32AC829-5295-4869-B38A-50B78995AC99\"></a>“软选择”卷展栏\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E13\"></a>请参见<span class=\"char_link\"><a href=\"GUID-BEF2CC1E-40BE-45DD-A8E9-228EE4A1EE98.htm\">“软选择”卷展栏</a></span>以了解关于“软选择”卷展栏设置的更多信息。 \n                     	 \n                  </p> \n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";