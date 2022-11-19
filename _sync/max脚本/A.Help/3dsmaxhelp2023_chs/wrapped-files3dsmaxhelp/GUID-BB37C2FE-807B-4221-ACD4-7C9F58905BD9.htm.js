var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-BB37C2FE-807B-4221-ACD4-7C9F58905BD9\">\n      <meta name=\"description\" content=\"“体积选择”修改器可以对顶点或面进行子对象选择，沿着堆栈向上传递给其他修改器。子对象选择与对象的基本参数几何体是完全分开的。如同其他选择方法一样，“体积选择”用于单个或多个对象。\">\n      <meta name=\"indexterm\" content=\"选择方式: 体积\">\n      <meta name=\"indexterm\" content=\"体积选择修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 体积选择\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 体积选择\">\n      <meta name=\"contextid\" content=\"VOLUMESELECT.MODIFIERS\">\n      <meta name=\"contextid\" content=\"MODIFIERS-VOLUMESELECT\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>体积选择修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-BB37C2FE-807B-4221-ACD4-7C9F58905BD9\"></a><div class=\"head\">\n            <h1>体积选择修改器</h1>\n         </div>\n         <p class=\"blurb\">“体积选择”修改器可以对顶点或面进行子对象选择，沿着堆栈向上传递给其他修改器。子对象选择与对象的基本参数几何体是完全分开的。如同其他选择方法一样，“体积选择”用于单个或多个对象。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_8FD2029481904A7699A79E40E06FFABD\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-0D6DD2D0-483C-4C62-8D12-A691A57E652B\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “体积”“选择”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-682F3214-9547-420D-A57D-53DB5AE5E229\">默认菜单：进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “选择修改器” <img src=\"../images/ac.menuaro.gif\"> “体积选择”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-424A07A3-5407-4999-84AB-F752D4795406\">Alt 菜单：进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “选择” <img src=\"../images/ac.menuaro.gif\"> “体积选择”</span> \n               </li>\n            </ul><a name=\"WS1A9193826455F5FFBA679E112A6A190043DF2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-B6DEC418-CE64-4DDA-8F20-2871F987839E-low.png\"><p class=\"figure-title\">使用长方体体积选择的面和顶点。</p>\n            </div>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-367C\"></a>您可以在场景中使用长方体、球体或圆柱体形状的 Gizmo 或对象来定义一个空间体积作为选择区域，然后对这个区域应用修改器。可以在对象上移动选择并设置动画。 \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-367B\"></a>应用之后，“体积选择”从对象堆栈中的当前几何体开始，无论它是整个对象还是子对象选择（例如，从<span class=\"char_link\"><a href=\"GUID-1CF31D5B-A016-4C8A-93C2-2DB528C0FC4E.htm\">编辑网格</a></span>或其他“体积选择”修改器）。 \n            </p><a name=\"WS1A9193826455F5FFBA679E112A6A190043DF6\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-4CE6341F-EF2D-4EDA-974E-F0B49A80B6FE-low.png\"><p class=\"figure-desc\"></p>\n            </div>\n            <p><a name=\"GUID-A2C8BA34-EFB6-4B32-9167-22E4C3219CC4\"></a> <em class=\"strong\">顶部：原网格，显示所选 gizmo</em> \n            </p>\n            <p><a name=\"GUID-4A314324-97FA-4F88-85B0-F04E87BC00EC\"></a> <em class=\"strong\">底部：应用“体积选择”修改器之后的修改效果</em> \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043DF7\"></a> \n               <h2><a name=\"GUID-36CB0F28-B894-422F-8CD3-63F064C33990\"></a>面片\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-367A\"></a>从修改器堆栈中产生的面片对象，不会被此修改器转换为网格。输入“体积选择”修改器中的面片对象保持它的面片定义。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043DF8\"></a> \n               <h2><a name=\"GUID-BF6C5786-081A-49DD-8BE3-20FDD4B8B82E\"></a>缩放兼容性\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3679\"></a>“体积选择”gizmo 与对象一起缩放。因此，如果应用了“体积选择”修改器，然后更改了对象的比例（使用工具栏<span class=\"char_link\"><a href=\"GUID-71DB62CD-C0ED-4C18-BF74-3BF1C7998306.htm\">缩放功能</a></span>），那么选择不会发生变化。也就是说，所有三个变换对“体积选择”gizmo 和它的对象的影响是相等的。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043DF9\"></a> \n               <h2><a name=\"GUID-F134A9A5-615E-4986-BCD1-19AB358E447B\"></a>体积选择中心\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3678\"></a>“体积选择”修改器有一个中心和一个 gizmo。可以用来调整非动画变换的中心。然而，如果设置一个偏移中心的旋转动画，那么得到的动画既是旋转又是变换。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-28E8\"></a> \n               <h2><a name=\"GUID-35557D67-01E1-4069-AF2A-18BC8F24F9E5\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043DFA\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043DFB\"></a>要应用和使用体积选择，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>选中对象并应用“体积选择”修改器。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3677\"></a>出现“参数”卷展栏。 \n                     </p> \n                  </li>\n                  <li>在“堆栈选择级别”组中，选择“对象”、“顶点”或“面”来指定要使用的几何体种类。 </li>\n                  <li>在“选择方式”组中，从以下四个体积类型中选择一个：长方体、球体、圆柱体或网格对象。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3676\"></a>如果选择“网格对象”，应该单击“无”按钮并选择用作选择体积的对象。 \n                     </p> \n                  </li>\n                  <li>选择一种选择方法和类型（请参见后面“界面”一节中的定义）。工作时可以更改这些选项，这取决于要做出的特定选择。 </li>\n                  <li>一旦完成选择，可以执行以下操作之一： <a name=\"WS1A9193826455F5FFBA679E112A6A190043DFC\"></a><ul>\n                        <li>将修改器应用到选择中。 </li>\n                        <li>在子对象层级上变换“体积选择”gizmo，在此过程中更改选择。 </li>\n                        <li>组合这些选项。请参见以下示例。 </li>\n                     </ul> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190043DFF\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E00\"></a>示例：要设置体积选择动画，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>将“体积选择”应用于对象。 </li>\n                  <li>在“面”或“顶点”层级上进行对象几何体的子对象选择，然后将几何体修改器应用到选择中，例如<span class=\"char_link\"><a href=\"GUID-C83CBEE2-19FE-4D19-A1F8-52EC04D89A2A.htm\">弯曲</a></span>。 \n                  </li>\n                  <li>移动到非零帧开始动画。在几何体修改器上调整参数，然后移动到另外一帧。 </li>\n                  <li>在堆栈中，回到“体积选择”修改器。选择“体积选择”gizmo 子对象。将 gizmo 和它的几何体选择移动到对象的另一部份。 </li>\n                  <li>在其他帧上重复此步骤。也可以回到几何体修改器并在任意帧上更改参数。 </li>\n               </ol> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3675\"></a>在播放过程中，观看到动画几何体修改器在对象上方移动的效果。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-28E7\"></a> \n               <h2><a name=\"GUID-6C12238E-876C-4BBB-AE1B-69A76A1F129A\"></a>界面\n               </h2> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E01\"></a> \n                  <h3><a name=\"GUID-9A800505-B638-46FD-B64F-1D96C4C522DC\"></a>修改器堆栈\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043E02\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D286E1EF-208C-4522-8DF6-23448E5416AD-low.png\"></div>  <a name=\"GUID-19A43DDD-F9E4-4249-A98D-7C36212BE95F\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B67\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3672\"></a>Gizmo</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4374\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C08\"></a>可以变换并设置 gizmo 动画更改选择。转换 gizmo 将以相等的距离转换它的中心。根据中心转动和缩放 Gizmo。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B66\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3671\"></a>中心</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4373\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C09\"></a>可以转换并设置中心动画，同时将影响“体积选择”修改器 gizmo 的旋转或缩放。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3670\"></a>关于堆栈显示的更多信息，请参见<span class=\"char_link\"><a href=\"GUID-80209C3A-C2E4-4541-8738-D1E5ECE16E9C.htm\">修改器堆栈</a></span>。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E03\"></a> \n                  <h3><a name=\"GUID-738546CF-8F00-4ED3-8361-DE5D043E9626\"></a>“参数”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043E04\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D9519073-9BFC-4A57-A324-B5640D157473-low.png\"></div>  <a name=\"GUID-9DF0E73D-2F97-41D0-A4C1-6E03137CF053\"></a><div class=\"dl_section\"><a name=\"GUID-C79F7277-9D3A-4F22-A427-FDB2DB220173\"></a><p class=\"title\"><a name=\"GUID-74628FB9-93C9-4EEB-B69C-244F719A5A41\"></a>“堆栈选择级别”组\n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B65\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-366F\"></a>对象/顶点/面</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4372\"></a> “体积选择”提供三种选择级别。“顶点”和“面”级别将修改器堆栈放入子对象选择中。可以为每个“体积选择”修改器进行一次子对象选择。然后可以在“面”和“顶点”层级之间进行选择切换，将它们中的任何一个传向堆栈上方。对象（顶）层级可以在保留所有子对象选择的同时修改整个对象。\n                              \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-8DAE3859-9C40-4235-AC0D-00065A56BD6D\"></a><p class=\"title\"><a name=\"GUID-4228CA04-DF23-4D21-8267-C951D734ADEE\"></a>“选择方法”组\n                     </p><a name=\"UL_53084A048E3745ADADBA55165401B949\"></a><ul>\n                        <li><em class=\"strong\">替换</em>清除沿着堆栈向上传递到“体积选择”修改器中的任何选择，然后选择体积内的几何体。 \n                        </li>\n                        <li><em class=\"strong\">添加</em>选择体积内的所有几何体，并添加到之前的选择中。 \n                        </li>\n                        <li><em class=\"strong\">减去</em>取消选择体积内的所有几何体。 \n                        </li>\n                     </ul>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B61\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-366B\"></a>反转</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-436E\"></a> 反转整个选择集的选择。未选中的几何体成为选中状态，选中的几何体成为未选中状态。 \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-C8D9B4D4-8262-4D2D-9007-7E18EB98A858\"></a><p class=\"title\"><a name=\"GUID-6B570019-17E2-4318-A7CB-CC24149FDAF5\"></a>“选择类型”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-366A\"></a>将“堆栈选择级别”设为“面”时，确定选中的面是全部还是部分位于定义的体积内部。 \n                     </p><a name=\"UL_2D47FBB95A0F469EBBAD8E25D7D73873\"></a><ul>\n                        <li><em class=\"strong\">窗口</em>仅选择所有三个顶点均位于选择体积之内的面。 \n                        </li>\n                        <li><em class=\"strong\">交叉</em>选择只有一个顶点位于选择体积之内的面。 \n                        </li>\n                     </ul>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-5DE2157E-BD8B-440B-8ED8-8AD77E18E2A0\"></a><p class=\"title\"><a name=\"GUID-F4D016F6-E0EA-42B8-A5BB-41ABAA859B5E\"></a>“选择方式”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3667\"></a>以下控件可以使用基本对象、网格对象或曲面特征来定义选择。 \n                     </p>\n                     <dl>\n                        <dt><a name=\"GUID-5D4C3E26-C4C2-46F9-B2A9-740A12615D8B\"></a><span class=\"term\"><a name=\"GUID-24122C14-587C-4DFD-8F67-BDDCAE97941F\"></a>体积</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"GUID-5A5F9C07-841C-47AF-907F-99D3D09F745D\"></a> <a name=\"UL_9E6F8D898B37469DBAAE548C16BFD050\"></a><ul>\n                                 <li><em class=\"strong\">长方体/球体/圆柱体</em>要使用标准基本形状 gizmo 定义选择空间，请选择其中之一。然后可以在对象四周的任何地方缩放、旋转或移动 gizmo。 \n                                 </li>\n                                 <li><em class=\"strong\">网格对象</em>选择此选项用其他对象来定义选择空间。选择“网格对象”之后，单击其下方的按钮（默认情况下标签为“无”），然后选择要用作体积的对象。 \n                                    <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3664\"></a>除了网格对象之外，还可以使用面片对象和 NURBS 对象。另外，如果启用“软选择”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“使用软选择”，则可以使用样条线对象和粒子系统来定义选择。后者的功能非常强大，因为随着粒子的移动，选择也发生变化。 \n                                    </p> \n                                    <p><a name=\"GUID-BC4608FA-D715-4387-9742-F75BBF0EE340\"></a><em class=\"strong\">[“网格对象”按钮]</em> 单击此按钮，选择一个用来定义选择空间的对象。不需要先选择“网格对象”，但是需要选择“网格对象”来将对象用作体积。选取对象后，其名称会出现在按钮上。如果未选择任何对象，该按钮标示为“无”。 \n                                    </p> \n                                 </li>\n                              </ul>\n                              <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA9C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>该选择取决于与对象相交的体积。如果将 gizmo 或对象缩小并移至某个对象的内部，那么将不发生任何选择，因为没有几何体位于 gizmo 的体积内部。 \n                                 </div>\n                              </div> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B5B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3661\"></a> 曲面特征</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4368\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C14\"></a>按曲面特征定义选择，而不是按几何体体积。该选项与体积没有太大关系，添加此选项是因为“体积选择”是一个程序修改器，而<span class=\"char_link\"><a href=\"GUID-19D683F4-335E-4986-8A73-1632192684AF.htm\">网格选择</a></span>是确定的。现在，即便拓扑发生更改，“体积选择”也将使用特殊材质或平滑组来一致选择面或顶点。 \n                              </p> \n                              <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3660\"></a>选择以下选项之一来指定选择基于哪种类型的曲面特征： \n                              </p> <a name=\"UL_372C9F162EF44DF5853CE669F4DF6863\"></a><ul>\n                                 <li><em class=\"strong\">材质 ID</em> 指定材质 ID。使用此 ID（微调器值表明此 ID）的所有面或顶点均被选中。 \n                                 </li>\n                                 <li><em class=\"strong\">平滑组</em>指定平滑组。使用此 ID（微调器值表明此 ID）的所有面或顶点均被选中。 \n                                 </li>\n                                 <li><em class=\"strong\">纹理贴图</em>指定来自场景的纹理贴图。单击贴图按钮（默认情况下标记为“无”）可打开<span class=\"char_link\"><a href=\"GUID-667716BE-A2C3-406A-8991-BA6533A11F02.htm\">材质/贴图浏览器</a></span>并选择用于选择的纹理贴图。所有使用此纹理贴图的面或顶点都将被选中。使用“纹理贴图”选项时，也可以使用“贴图/顶点颜色”单选按钮和微调器来指定贴图通道或顶点颜色通道。 \n                                    <p><a name=\"GUID-0FCD8278-4040-4BE7-A56F-7A07F5DC08AB\"></a>您还可以从“材质编辑器”<span class=\"char_link\"><a href=\"GUID-4CAB4668-21C1-409A-9426-C874D18B9455.htm\">示例窗</a></span>中拖放贴图。如果“<span class=\"char_link\"><a href=\"GUID-7B51EF9F-E660-4C10-886C-6F6ADE9E8F56.htm\">Slate 材质编辑器</a></span>”处于打开状态，则可以从贴图节点的输出套接字拖动，然后放置到该按钮上。也可以从“材质编辑器”中的贴图按钮或 <span class=\"charspan-msgph\">3ds Max</span> 界面中的其他任意位置进行拖放。将贴图放置到贴图按钮上时，将出现一个对话框，询问您希望该贴图成为源贴图的副本（独立）还是实例。 \n                                    </p> \n                                    <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-2B92\"></a>要调整贴图的参数（例如，要指定位图或更改坐标设置），请将贴图按钮拖到材质编辑器中，并确保将其作为实例进行放置。在“精简材质编辑器”中，将贴图置于未使用的示例窗上。在“Slate 材质编辑器”中，将其置于<span class=\"char_link\"><a href=\"GUID-77AB42B0-B11F-48BD-8FD7-BBFDF31CD623.htm\">活动视图</a></span>上。 \n                                    </p> \n                                    <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA9D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>必须将贴图应用于其堆栈中“体积选择”下的对象，“纹理贴图”选择才能起作用。也就是说，“体积选择”修改器必须具有向堆栈上方传递的贴图坐标，这样才能使用纹理贴图进行选择。 \n                                       </div>\n                                    </div> \n                                    <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA9E\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果将“选择类型”设为“窗口”，如果顶点接触到的所有面均使用指定材质或平滑组，那么这些顶点将被选中。如果将“选择类型”设为“交叉”，如果顶点接触到的任意一个面使用指定的材质或平滑组，那么这些顶点将被选中。 \n                                       </div>\n                                    </div> \n                                 </li>\n                              </ul> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-AE0BBF85-B0C9-4B4F-BD7A-58D5FA0D7162\"></a><p class=\"title\"><a name=\"GUID-BF98EF4A-8F7F-48E9-A0DD-BC27D473D760\"></a>“对齐”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-365C\"></a>当 gizmo 变换超出了它相对于对象的方向时，通常需要使用这些控件。 \n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B57\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-365B\"></a>适配</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4364\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C18\"></a>重新调整 gizmo 大小使其匹配堆栈中的对象或先前的选择。保留任何先前的旋转。 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B56\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-365A\"></a>中心</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4363\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C19\"></a>重新定位 gizmo 在对象或堆栈中先前选择上的中心。保留任何先前的比例或旋转。 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B55\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3659\"></a>重置</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4362\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C1A\"></a>将 gizmo 返回其默认大小和方向。取消先前所有变换的效果。 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7B54\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3658\"></a>自动适配</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4361\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751C1B\"></a>启用此选项后，更改基本拓扑（例如，变换顶点）时将自动调整 gizmo 的大小和形状使之与对象匹配。 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E0A\"></a> \n                  <h3><a name=\"GUID-4F2FEBD9-E67F-460A-B3ED-3CAEDD8D0C8D\"></a>“软选择”卷展栏\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3657\"></a>只有在“顶点”堆栈选择级别上时，才可以使用这些控件，可以在选中和未选中的顶点之间设置渐变的影响衰减。请参见<span class=\"char_link\"><a href=\"GUID-BEF2CC1E-40BE-45DD-A8E9-228EE4A1EE98.htm\">“软选择”卷展栏（编辑/可编辑网格）</a></span>。 \n                  </p> \n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA9F\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“软选择”不应用于材质或平滑组。然而，如果已经向堆栈上方传递了权重选择，则将“体积选择”设置为“材质”或“平滑组”模式且<span class=\"charspan-emphasis\"> <em class=\"mild\">不</em> </span>设置为“替换”将保留选择。 \n                     </div>\n                  </div> \n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";