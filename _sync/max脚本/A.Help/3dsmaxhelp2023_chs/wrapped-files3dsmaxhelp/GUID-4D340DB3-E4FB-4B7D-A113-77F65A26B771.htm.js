var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-4D340DB3-E4FB-4B7D-A113-77F65A26B771\">\n      <meta name=\"description\" content=\"在将动画从一个装备或对象映射到另一个装备或对象时，可以使用此卷展栏在传入的节点之间创建关于它们比例依赖的重新定位 参考。重定位 就是缩放动画以使它与将运动映射其上的那个对象相匹配。\">\n      <meta name=\"indexterm\" content=\"动画: 映射\">\n      <meta name=\"indexterm\" content=\"重定位卷展栏\">\n      <meta name=\"indexterm\" content=\"映射动画: 重定位卷展栏\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>“重定位”卷展栏</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-4D340DB3-E4FB-4B7D-A113-77F65A26B771\"></a><div class=\"head\">\n            <h1>“重定位”卷展栏</h1>\n         </div>\n         <p class=\"blurb\">在将动画从一个装备或对象映射到另一个装备或对象时，可以使用此卷展栏在传入的节点之间创建关于它们比例依赖的<em class=\"mild\">重新定位</em> 参考。<em class=\"mild\">重定位</em> 就是缩放动画以使它与将运动映射其上的那个对象相匹配。 \n         </p><a name=\"UL_8F11077F53B44A28B21DDD3D629EB8F6\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-2FF73C31-DA11-4B48-A058-97A78E785651\">默认菜单：“动画”菜单  <img src=\"../images/ac.menuaro.gif\"> “加载动画” <img src=\"../images/ac.menuaro.gif\"> “打开”对话框  <img src=\"../images/ac.menuaro.gif\"> “编辑贴图”</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-543D02DC-962A-4148-A10B-F6E1E2008AB8\">默认菜单：“动画”菜单  <img src=\"../images/ac.menuaro.gif\"> “加载动画” <img src=\"../images/ac.menuaro.gif\"> “打开”对话框  <img src=\"../images/ac.menuaro.gif\"> “加载运动” <img src=\"../images/ac.menuaro.gif\"> “XML 动画”对话框  <img src=\"../images/ac.menuaro.gif\">  单击“是”。</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-B485198B-32BB-4202-9218-933AFFA3D47A\">Alt 菜单：“动画”菜单  <img src=\"../images/ac.menuaro.gif\"> “工具(动画设置)” <img src=\"../images/ac.menuaro.gif\"> “加载动画” <img src=\"../images/ac.menuaro.gif\"> “加载 XML 动画文件”对话框  <img src=\"../images/ac.menuaro.gif\"> “编辑贴图”</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-42E91B59-B322-47C9-B2FD-183A66BBF9C1\">Alt 菜单：“动画”菜单  <img src=\"../images/ac.menuaro.gif\"> “工具(动画设置)” <img src=\"../images/ac.menuaro.gif\"> “加载动画” <img src=\"../images/ac.menuaro.gif\"> “加载 XML 动画文件”对话框  <img src=\"../images/ac.menuaro.gif\"> “加载运动” <img src=\"../images/ac.menuaro.gif\">  单击“是”。</span> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF-6507591011913E8F4B8-6354\"></a>仅当传入模型的尺寸或比例与当前模型的尺寸或比例不同时才需要重新定位。 \n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-229B\"></a>重定位可应用于<em class=\"mild\">任何种类的动画</em>，从匹配动作舞蹈，到更改气象气球飞跃山丘和山谷的飞行轨迹。它比较不方便的地方是必须手动设置缩放关系；而有利的是该步骤比较简单明了，并且一旦完成重新定位，在相同两组对象之间映射的所有动画都可以重新使用该设置。 \n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-229A\"></a>重定位是一个通用的功能，如果角色的尺寸不同或可能的比例不同（例如，从人类模型到大猩猩或相反），那么在从一个角色到另一个角色变换动画时，它就显得特别有用。可以将 IK 动画传输到 FK 装备上，反之亦可。在使用映射角色动画时，有以下一些经验规则：\n            \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004-5\"></a><ul>\n            <li>在步行周期内，角色的根进行移动，而所有其它运动通常都是旋转。 \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2299\"></a>由于这个原因，通常需要映射根运动和旋转轨迹，而不用管其它的东西。 \n               </p> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2298\"></a>当手臂或其他部分（触角？）由 IK 设置动画时例外。当 IK 出现时，需要执行映射和重定位 IK 目标这个额外的步骤。 \n               </p> \n            </li>\n            <li>腿部需接触“地面”，而足部不应当滑动。 \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2297\"></a>由于这个原因，将腿部作为重新计算目标角色比例的基础。 \n               </p> \n            </li>\n            <li>角色通常是对称的。 \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2296\"></a>由于这个原因，通常重定位一个肢体可以使相应的肢体也生效。 \n               </p> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2295\"></a>如果角色的肢体<em class=\"mild\">不是</em>对称的，应分别进行重新定位。如果当前模型使用正向运动学，也可以使用“FK 重定位范围”控件。 \n               </p> \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2B48\"></a> \n            <h2><a name=\"GUID-E31878CA-4B19-432F-A715-F5E319015926\"></a>过程\n            </h2> <a name=\"WSF742DAB04106313339AEF003112A1CE9423-7FA4\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004-4\"></a>要将一个角色重新定位到另一个角色上，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2294\"></a>此步骤并非详细的步骤，而是一个总体的工作流。假设已经保存了传入角色的动画，然后将它加载到当前角色上，如<span class=\"char_link\"><a href=\"GUID-A6EB9AE5-66ED-4400-8252-5E012AFBBEA0.htm#WSF742DAB04106313339AEF003112A1CE9423-7FAC\">使用“保存动画”和“加载动画”命令</a></span>所述。 \n            </p>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E3FA\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果保存的动画是未设置关键点的世界空间动画（相对于 IK 或 FK），在保存时应禁用“动画轨迹”。 \n               </div>\n            </div>\n            <ol type=\"1\" start=\"1\">\n               <li>在<span class=\"char_link\"><a href=\"GUID-7B6CFB56-144C-451C-B907-47C60614F126.htm\">“将轨迹映射到轨迹”卷展栏</a></span>上，将传入角色的根的运动轨迹映射到当前角色的根。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2293\"></a>例如，如果将一 <span class=\"char_link\"><a href=\"GUID-2F6BC5D1-DD45-4C2E-AC3A-D8C6E0F5DEB1.htm\">Biped</a></span> 映射到另一 Biped 上，应当将传入 <em class=\"mild\">Biped</em> 对象的位置和旋转轨迹映射到当前 <em class=\"mild\">Biped</em> 上。 \n                  </p> \n               </li>\n               <li>将传入角色肢体的旋转轨迹映射到当前角色的肢体上。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2292\"></a>此处有个例外：例如，如果“手”打算在当前场景中使用 IK，或者根本就不映射它，所以可以稍后对它进行动画，或者如果正在由 FK 模型映射到 IK 模型，则将映射 <em class=\"mild\">“露出世界变换”</em>以将传入 FK 轨迹传输到当前 IK 控制。 \n                  </p> \n               </li>\n               <li> 转到“重定位”卷展栏。 </li>\n               <li>在“缩放原点”组中，同时选择“引入”和“当前”根对象。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2291\"></a>如果对象是对称的并且具有相同的比例，就可以在“可重新定位节点”列表中选择所有映射的轨迹。如果角色不是对称的，或是它们的比例不同，就需要执行进一步的操作。 \n                  </p> \n               </li>\n               <li>在“导出链之间的缩放”组中，同时选择“引入”和“当前”链的“开始”和“结束”节点，以与角色的左腿或右腿相对应：例如，由<em class=\"mild\">大腿</em> 到<em class=\"mild\">小腿</em>。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2290\"></a>读取在两条链的基础上设置的“比例因子”。 \n                  </p> \n               </li>\n               <li>单击“设置”以重新定位高亮显示的映射轨迹。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-228F\"></a>如果当前的两条腿长度不一致，对另一条腿重复步骤 5，然后选择那条腿的<em class=\"mild\">足部</em>（或<em class=\"mild\">脚趾）</em>节点，启用“FK 重定位范围”组中的“启用”，并选择腿部（例如<em class=\"mild\">大腿）</em>的顶部作为要使用的父节点。单击“设置关键点”。 \n                  </p> \n               </li>\n               <li>保存重新定位的映射文件。 </li>\n               <li>单击“加载运动”以设置当前角色的动画，然后关闭“映射动画”对话框。 </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2B47\"></a> \n            <h2><a name=\"GUID-5247245B-898D-41B6-A068-8D35CDFDEEEB\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004-3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-FD57482A-2058-4EF7-876C-92C70D298806-low.png\"></div>  <a name=\"GUID-7381CC74-7B03-4E5E-8F74-B4F4F32FE7E3\"></a><dl>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-722B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-228C\"></a>查找</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57C1\"></a> 输入名称以在“可重定位的节点”列表中搜索特定对象，然后按 <span class=\"keyboardEntry\">Enter</span> 键。<span class=\"charspan-msgph\">3ds Max</span> 高亮显示列表中匹配的项。\n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-722A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-228B\"></a>过滤重定位节点</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57C0\"></a> 启用时，“可重定位的节点”列表仅显示那些重新定位的映射。禁用时，列出所有映射。默认设置为禁用。\n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-722C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-228E\"></a>重定位节点列表</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57C2\"></a> 此列表显示了使用<span class=\"char_link\"><a href=\"GUID-7B6CFB56-144C-451C-B907-47C60614F126.htm\">“映射轨迹到轨迹”卷展栏</a></span>而完成映射的轨迹。这些映射都可以重新定位。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-228D\"></a>该列表中的字段如下： \n                     </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004-2\"></a><ul>\n                        <li> <em class=\"strong\">当前映射的节点</em>显示节点到节点的映射，如“当前对象 -&gt; 引入对象”中的一样。 \n                        </li>\n                        <li> <em class=\"strong\">R</em>在对映射进行重新定位后，此字段显示一个“X”。 \n                        </li>\n                        <li> <em class=\"strong\">缩放（X、Y、Z）</em>显示当前节点每一维度的当前比例因子。 \n                        </li>\n                        <li> <em class=\"strong\">绝对</em>如果映射使用绝对缩放，此字段显示一个“X”。 \n                        </li>\n                        <li> <em class=\"strong\">缩放原点（引入、当前）</em>显示用于该映射的传入和当前缩放原点。如果还没有重新定位映射，则此字段显示“场景根、场景根”。 \n                        </li>\n                        <li> <em class=\"strong\">引入链（开始、结束）</em>如果映射进行了重新定位，显示用来计算比例的引入链。 \n                        </li>\n                        <li> <em class=\"strong\">当前链（开始、结束）</em>如果映射进行了重新定位，显示用来计算比例的当前链。 \n                        </li>\n                        <li> <em class=\"strong\">FK 范围</em>如果重新计算了映射轨迹的 FK 范围，显示在计算中使用的父节点。 \n                        </li>\n                     </ul> \n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7229\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-228A\"></a>映射的节点</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57BF\"></a> 显示当前高亮显示的映射节点。如果高亮显示的项不止一个，则显示“—多个—”。 \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-5E3A86EC-36A6-4362-BEAA-E71FFBA38652\"></a><p class=\"title\"><a name=\"GUID-D2FDA943-65B2-4E55-8C23-A9623A5C0E5A\"></a>“缩放”组\n               </p><a name=\"WS1A9193826455F5FFBA679E112A6A190040\"></a><ul>\n                  <li> <em class=\"strong\">绝对</em>选择此项后，当前高亮显示映射的缩放为绝对缩放，并且单独基于此组中的 XYZ 设置。 \n                  </li>\n                  <li> <em class=\"strong\">导出比例相乘</em>（默认设置。）选择时，选定映射的缩放同时基于此组中的 XYZ 设置以及“导出链之间的缩放”组和“FK 重定位范围”组（如其已使用）的计算。 \n                  </li>\n               </ul>\n               <dl>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7228\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2289\"></a>X/Y/Z</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57BE\"></a> 可以使用这些字段显式设置当前高亮显示映射的比例因子。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-E76B719D-9CBE-4693-A4C1-FFC20F5EA00B\"></a><p class=\"title\"><a name=\"GUID-718EAD12-061F-4D72-ADD2-2CD078B1306C\"></a>“缩放原点”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7227\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2288\"></a>传入</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57BD\"></a> 选择从中获取缩放原点的传入对象。这是从传入节点列表中获取的一个下拉列表。\n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7226\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2287\"></a>当前</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57BC\"></a> 单击可显示“选择”对话框，并选择从中获取缩放原点的当前对象。该对话框显示所有当前选定的对象。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2286\"></a>通常，将这两项设置为其运动轨迹进行了映射的传入根节点和当前根节点。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-7F3BE0A5-9FE8-49D0-8A9B-FC6AD5201F90\"></a><p class=\"title\"><a name=\"GUID-9B4B6739-13A8-41E6-A56B-5C93405D702C\"></a>“链之间导出比例”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7225\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2285\"></a>结果比例因子</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57BB\"></a> 显示从“缩放原点”和“传入/当前链”中获取的比例因子。检查该值以查看它是否与重定位的对象或角色之间的明显不同的比例相匹配。\n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7224\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2284\"></a>引入链</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57BA\"></a> 这些控件设置在计算“比例因子”中所使用的传入 IK 或 FK 链。 <a name=\"WS1A9193826455F5FFBA679E112A6A190043\"></a><ul>\n                           <li> <em class=\"strong\">开始</em>选择传入链的开始。这是从传入节点列表中获取的一个下拉列表。 \n                              <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2283\"></a>在重定位角色动画时，通常选择传入角色腿部的顶部；例如，大腿。 \n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">结束</em>选择传入链的结束处。该选项为下拉列表，其内容限于传入“开始”对象的子对象。 \n                              <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2282\"></a>在重定位角色动画时，通常选择传入角色腿部的底部；例如，脚趾。 \n                              </p> \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7223\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2281\"></a>当前链</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57B9\"></a> 这些控件设置在计算“比例因子”中所使用的传入 IK 或 FK 链。 <a name=\"WS1A9193826455F5FFBA679E112A6A190044\"></a><ul>\n                           <li> <em class=\"strong\">开始</em>单击可显示“选择”对话框并选择当前链的开始。该对话框显示所有当前选定的对象。 \n                              <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2280\"></a>在重定位角色动画时，通常选择当前角色腿部的顶部（使用与传入链中所使用的同一侧）。 \n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">结束</em>选择当前链的结束。该选项为下拉列表，其内容限于当前“开始”对象的子对象。 \n                              <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-227F\"></a>在重定位角色动画时，通常可以选择当前角色腿部的底部。 \n                              </p> \n                           </li>\n                        </ul> \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-227E\"></a>如果角色的腿部是对称的，通常会是这种情况，只需计算一条腿的重定位比例，然后将该值“设置”给两条腿。如果角色的腿部<em class=\"mild\">不是</em> 对称的，就需要计算两条腿的值，然后使用“FK 范围”控件（如下所述）。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-D87C6C97-260D-4DCB-811F-FC7F53EDE2C6\"></a><p class=\"title\"><a name=\"GUID-F4571AAD-79E6-4AB2-8D60-3315066A10B8\"></a>“FK 重定位范围”组\n               </p>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-227D\"></a>当前模型使用 IK 时，<span class=\"charspan-msgph\">3ds Max</span> 知道重新定位的范围，因为它是由 IK 解决方案定义的。但是如果当前模型使用 FK，就需要指定重新定位的范围。例如，在从具有不同链接长度的长腿到短腿映射旋转动画时，需要选择短腿的足部进行重新定位，以使它像长腿一样离开地面。为使 <span class=\"charspan-msgph\">3ds Max</span> 知道进行重新定位时，从足部将链上升的高度，必须指定所需链（例如，大腿）的父链。通过定义要进行比较的两条链，<span class=\"charspan-msgph\">3ds Max</span> 可以调整结果旋转而使足部不会滑动。 \n               </p>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-227C\"></a>当角色的肢体不对称时，也可以使用这些控件来保持旋转比例。首先，高亮显示“可重新定位节点”列表中的当前子节点（例如，一只脚或是脚趾）。启用“启用”，然后使用下拉列表选择进行重定位的肢体的上方父节点（例如，大腿）最后，单击“设置”。 \n               </p>\n               <dl>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7222\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-227B\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57B8\"></a> 启用此项可启用重定位范围。默认设置为禁用。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7221\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-227A\"></a>父节点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57B7\"></a> 选择进行重定位的肢体的当前上方父节点。该选项为下拉列表，其内容限于当前高亮显示的当前对象的父节点。\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <dl>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-7220\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2279\"></a>获取</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57B6\"></a> 单击此项，可基于列表中当前高亮显示的映射来设置“比例”、“导出链之间的缩放”和“FK 重定位范围”组中的控件。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2278\"></a>如果选择了多个映射，“获取”就取列表中第一个高亮显示的映射。 \n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-721F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2277\"></a>设置</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57B5\"></a> 单击此项，可将当前“比例因子”应用到列表中当前高亮显示的映射。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F487557579AB9211C98C460A4-721E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2276\"></a>清除</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-57B4\"></a> 单击此项可清楚列表中当前高亮显示的映射的重定位值。 \n                  </div>\n               </dd>\n            </dl> \n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-6791DBAB-3D8A-45ED-952B-AE6DAAC4FC46.htm\">将 HTR 运动文件与 Character Studio 一起使用</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-231F0264-8DFE-40DF-9A9A-EF1A74B50211.htm\">“映射动画”对话框</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";