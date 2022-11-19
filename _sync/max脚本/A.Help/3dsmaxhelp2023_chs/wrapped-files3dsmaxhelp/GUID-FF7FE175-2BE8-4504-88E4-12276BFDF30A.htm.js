var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-FF7FE175-2BE8-4504-88E4-12276BFDF30A\">\n      <meta name=\"description\" content=\"“参数关联”对话框允许对连线参数的关系进行定义。在此对话框中，可以创建对象参数间新的双向的控制关系，编辑已存在的关系，并创建或编辑定义参数关系的表达式。\">\n      <meta name=\"indexterm\" content=\"参数关联\">\n      <meta name=\"indexterm\" content=\"连线编辑器\">\n      <meta name=\"indexterm\" content=\"编辑连线\">\n      <meta name=\"indexterm\" content=\"链接: 可设置动画的参数\">\n      <meta name=\"indexterm\" content=\"连线参数\">\n      <meta name=\"indexterm\" content=\"动画菜单: 连线参数\">\n      <meta name=\"contextid\" content=\"IDH_PARAMETER_WIRING_DIALOG\">\n      <meta name=\"contextid\" content=\"PARAMETER WIRE-PARAMWIRE_DIALOG\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“参数关联”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FF7FE175-2BE8-4504-88E4-12276BFDF30A\"></a><div class=\"head\">\n            <h1> “参数关联”对话框</h1>\n         </div>\n         <p class=\"blurb\">“参数关联”对话框允许对<span class=\"char_link\"><a href=\"GUID-B084D14B-2925-4EA6-890F-4F2564BB9D9A.htm\">连线参数</a></span>的关系进行定义。在此对话框中，可以创建对象参数间新的双向的控制关系，编辑已存在的关系，并创建或编辑定义参数关系的表达式。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_E816CF7CC0E94EBBBA72C1F4F11B99CE\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-625AA6E6-C50E-45A3-9C76-7A6D4B8A4C10\"> 选择对象。 <img src=\"../images/ac.menuaro.gif\">  右键单击四元菜单  <img src=\"../images/ac.menuaro.gif\"> “变换”（右下角）四元菜单  <img src=\"../images/ac.menuaro.gif\"> “连线参数” <img src=\"../images/ac.menuaro.gif\">  选择要连线的参数。</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-E7F865C4-B616-4B1F-9A14-5430E7B2A51D\"> 选择对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\">  右键单击可设置动画的参数微调器的文本框部分。 <img src=\"../images/ac.menuaro.gif\">  选择“在参数连线对话框中显示”。</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-1C6EE2F3-EA4D-45E3-9E21-1A3B1DD04D1B\">默认菜单：“动画”菜单  <img src=\"../images/ac.menuaro.gif\"> “连线参数” <img src=\"../images/ac.menuaro.gif\">  选择要连线的参数。</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-C2221010-8D54-4554-8E60-4CB1D4CB0C21\">Alt 菜单：“动画”菜单  <img src=\"../images/ac.menuaro.gif\"> “关系/IK” <img src=\"../images/ac.menuaro.gif\"> “连线参数” <img src=\"../images/ac.menuaro.gif\">  选择要连线的参数。</span> \n               </li>\n            </ul>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F7C\"></a>只有可以设置动画的参数才可以关联。子对象在关联之前必须先设置动画，例如顶点。 \n               \n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F7B\"></a>参数关联可以用于建立从<span class=\"char_link\"><a href=\"GUID-1F7A0B86-08EE-433B-BE85-4E778E1C1195.htm\">操纵器</a></span>和<span class=\"char_link\"><a href=\"GUID-7EAA7D84-5775-4E4C-9936-D874EB7A42BB.htm\">自定义属性</a></span>到对象、材质和修改器之间的联系。 \n               \n            </p>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E542\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>参数关联是一种<span class=\"char_link\"><a href=\"GUID-12C2A80A-E384-4A80-8020-A97595D16C60.htm\">“无模式”对话框</a></span>，并且同时可以打开几个对话框。 \n                  \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F79\"></a> \n               <h2><a name=\"GUID-79670184-DEBC-4854-84CC-334A2BE46EBD\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190044C48\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044C49\"></a>示例：要使用连线参数的表达式，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>在场景中创建长方体和球体。 \n                     	 \n                  </li>\n                  <li>右键单击长方体，然后从四元菜单中选择“变换区域”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“连线参数”。 \n                     	 \n                  </li>\n                  <li>从弹出菜单中，选择“对象（长方体）”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“长度”。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F78\"></a>此时，将会出现一个橡皮筋似的虚线，它连接顶点和鼠标光标。 \n                        		\n                     </p> \n                  </li>\n                  <li>单击球体并从弹出菜单中选择“变换”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“位置”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“Z 位置”。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F77\"></a>现在球体的位置和长方体的长度相关联。 \n                        		\n                     </p> \n                  </li>\n                  <li>在“参数关联”对话框中，单击指向长方体的树视图的箭头来创建一个单向关联。 \n                     	 \n                  </li>\n                  <li>在 Z 位置前输入 <em class=\"strong\">abs</em>（然后是右括号）<em class=\"strong\"></em>，这样在 Box01 的文本框表达式中，整个表达式就是 <em class=\"mild\">abs(Z_Position)</em>。 \n                     	 \n                  </li>\n                  <li>单击“连接”。 \n                     	 \n                  </li>\n                  <li>将球体在视口中沿着 Z 轴向上移动。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F76\"></a>注意当球体在视口中移动时，长方体的长度会改变。使用 abs() 确保长方体不会出现负长度。 \n                        		\n                     </p> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190044C4A\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044C4B\"></a>要从一个驱动者参数控制多个受驱动参数，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>打开“参数关联”对话框。 \n                     	 \n                  </li>\n                  <li>在树视图中选择驱动者参数。 \n                     	 \n                  </li>\n                  <li>在另一个树视图中选择第一个受驱动参数。 \n                     	 \n                  </li>\n                  <li>单击指向该受驱动参数的箭头。 \n                     	 \n                  </li>\n                  <li>在表达式文本框内输入所需的关系表达式。 \n                     	 \n                  </li>\n                  <li>单击“连接”。 \n                     	 \n                  </li>\n                  <li>保持驱动者参数处于选中状态，从树视图中选择另一个受驱动参数。 \n                     	 \n                  </li>\n                  <li>单击指向该受驱动参数的箭头。 \n                     	 \n                  </li>\n                  <li>在表达式文本框内输入所需的关系表达式。 \n                     	 \n                  </li>\n                  <li>单击“连接”。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F75\"></a>可以重复此循环，根据需要设置多个受驱动参数。结果是形成一个“扇形”的参数连线，这样可以在更改驱动者参数时立即控制所有受驱动参数。 \n                        		\n                     </p> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190044C4C\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044C4D\"></a>要创建一个连线参数的链，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>打开“参数关联”对话框。 \n                     	 \n                  </li>\n                  <li>在一个树视图中选择第一个控制参数。 \n                     	 \n                  </li>\n                  <li>在另一个树视图中选择第一个受驱动参数。 \n                     	 \n                  </li>\n                  <li>单击指向该受驱动参数的箭头。 \n                     	 \n                  </li>\n                  <li>在表达式文本框内输入所需的关系表达式。 \n                     	 \n                  </li>\n                  <li>单击“连接”。 \n                     	 \n                  </li>\n                  <li>保持原始受驱动参数处于选中状态，从树视图中选择下一个受驱动参数。 \n                     	 \n                  </li>\n                  <li>单击指向新的受驱动参数的箭头。 \n                     	 \n                  </li>\n                  <li>在表达式文本框内输入所需的关系表达式。 \n                     	 \n                  </li>\n                  <li>单击“连接”。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F74\"></a>可以重复此循环，根据需要多次将受驱动参数替换为驱动者参数。结果是形成一个“链形”的参数连线，这样在修改原始驱动者参数时每个受驱动参数都可以与参数队列中的下一个参数保持恒定关系。 \n                        		\n                     </p> \n                  </li>\n               </ol> <a name=\"OL_99CD321F48A14BD1B390FA133441AD5B\"></a><p class=\"list-intro\"><a name=\"GUID-E98B03AC-3E4A-47AF-BC68-F4BBC38CC448\"></a>要编辑场景节点之间的关联参数，请执行以下操作：\n               </p>\n               <p><a name=\"GUID-C59E3E0C-45B5-49E3-8D05-0AA5120641F7\"></a>如果创建或继承包含关联参数的场景，并且要编辑特定关系，您可以使用<span class=\"char_link\"><a href=\"GUID-842CD36E-9E73-4733-9BAA-C7876013CA72.htm\">“图解视图”</a></span>来查找关系并在“参数关联”对话框中将其打开。 \n                  \n               </p>\n               <div><a name=\"GUID-CB4D376A-2A7E-405E-9DE1-2AB345B146EA\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>此步骤介绍了编辑场景节点之间的参数关联。要编辑单个节点中的关联，例如在对象的创建参数和修改器参数之间，请参见以下步骤。 \n                     \n                  </div>\n               </div>\n               <ol type=\"1\" start=\"1\">\n                  <li>打开一个包含多个节点、且节点之间具有一对或多对关联参数的场景。 \n                     \n                  </li>\n                  <li>通过单击主工具栏上的 <img src=\"../images/GUID-15CD34C5-60D9-4275-A989-3F4BA81786C8-low.png\"> 打开“图解视图”对话框。 \n                     	 \n                     <p><a name=\"GUID-AAAAEE3E-90E5-4771-B1B5-78467A2FF99F\"></a>“图解视图”将打开，并显示场景节点和“显示”浮动框。 \n                        	 \n                     </p> <a name=\"FIG_9C3FA2C728D54180AB4C7152BC912947\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AA80C9BD-1424-4EC3-B8B9-BA2C35A3BFB4-low.png\"></div>  \n                     <div><a name=\"GUID-C5ADD7BA-9B43-4AC5-8F27-FFC1ACF9CE6A\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果看不到“显示”浮动框，从“图解视图”的“显示”菜单中将其打开。 \n                           	 \n                        </div>\n                     </div> \n                  </li>\n                  <li>在“显示”浮动框上，单击“参数关联”按钮以将其启用。 \n                     	 \n                     <p><a name=\"GUID-083FD39C-EADD-4AD7-923F-F5F20471FC9A\"></a>节点之间的任何连线显示为与“参数关联”按钮颜色相同的线。 \n                        	 \n                     </p> <a name=\"FIG_A4CCC801C23D4F7C9E50D182A16416E5\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-134C496C-78F6-411B-B811-E74979342D87-low.png\"></div>  \n                  </li>\n                  <li>将鼠标光标放在其中一个连线上。 \n                     	 \n                     <p><a name=\"GUID-ACA1479A-94D7-473E-8C5E-A64993B686F7\"></a>关联关系将显示在工具提示中。 \n                        	 \n                     </p> <a name=\"FIG_1A994F6FB25E4D56AC1A9B9C44A39916\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-EDD0CC61-AB22-4DF7-967D-0389D05DFC74-low.png\"></div>  \n                  </li>\n                  <li> 找到要编辑的关系后，请双击其连线。 \n                     	 \n                     <p><a name=\"GUID-2F6640B8-BCCF-49CA-A65E-6E9CDF25D058\"></a>这将打开“参数关联”对话框，同时高亮显示关联参数、并将当前设置置于活动状态。 \n                        	 \n                     </p> <a name=\"FIG_94B93E831E614631A0A8B73D46B27026\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F48B1CAB-3B89-4A95-B20A-066B502052E0-low.png\"></div>  \n                  </li>\n                  <li> 根据需要调整设置，然后单击“更新”。 \n                     \n                  </li>\n                  <li>对其他任何要编辑的关联参数重复该过程。 \n                     \n                  </li>\n               </ol> <a name=\"OL_AA98AC0CFF164A70B816230929EB559A\"></a><p class=\"list-intro\"><a name=\"GUID-AA2705B1-F59A-43B4-85CD-9A6A45C20225\"></a>在单个场景节点中编辑关联参数：\n               </p>\n               <p><a name=\"GUID-BDF4A25A-2CBA-4F9E-97C4-19548E62D0B4\"></a>如果参数是在场景节点中关联，例如对象相对于修改器参数的位置应用到对象，则可能不容易在“图解视图”中看到关联。但是，您可以使用其他显示选项来显示关联。 \n                  \n               </p>\n               <div><a name=\"GUID-CAFDEE31-77BD-46C3-8F88-812D00FB87F2\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>此步骤基于前面的步骤中介绍的方法。 \n                     \n                  </div>\n               </div>\n               <ol type=\"1\" start=\"1\">\n                  <li>打开一个在单个节点中包含参数关联的场景。例如，一个应用“弯曲”修改器的对象可能会将其 X 位置关联到“弯曲”修改器的“角度”参数。 \n                     \n                  </li>\n                  <li>通过单击主工具栏上的 <img src=\"../images/GUID-15CD34C5-60D9-4275-A989-3F4BA81786C8-low.png\"> 打开“图解视图”对话框。 \n                     	 \n                     <p><a name=\"GUID-A996B2F3-D64F-4D7A-936F-1927A9AE868B\"></a>“图解视图”将打开，并显示场景节点和“显示”浮动框。 \n                        	 \n                     </p> <a name=\"FIG_9F8A3E2B6E57444BBD997F4568D9D89F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-04984F78-81BC-4AA8-BE0E-B94CDA0B852F-low.png\"></div>  \n                     <div><a name=\"GUID-4D9F0EE7-904E-43D6-BE2F-3CD5F6DC0AAD\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果看不到“显示”浮动框，从“图解视图”的“显示”菜单中将其打开。 \n                           	 \n                        </div>\n                     </div> \n                  </li>\n                  <li>在“显示”浮动框上，单击“参数关联”按钮。 \n                     	 \n                     <p><a name=\"GUID-6AB9AD3F-9E7E-47FA-98F5-3CE03C85A460\"></a>未发生任何变化，因为参数关联是在对象内部发生的。其内部结构需要展开才能看到关联。 \n                        	 \n                     </p> <a name=\"FIG_F69C1AAA5A5B4CC3A1B24CB8CBCA1A44\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-144DACCD-E755-4940-84D8-6F38C7FF44DC-low.png\"></div>  \n                  </li>\n                  <li>未修改的对象通常具有两个可以关联的参数集：变换和创建参数，也称为对象参数。下图展示了这两种类型：上面为变换、下面为对象。 \n                     	 <a name=\"FIG_95047DE5605641A68FF5595ED281B182\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-31398700-407A-4309-987C-ABD59024733D-low.png\"></div>  \n                     <p><a name=\"GUID-6AF60EFC-AB66-4741-9010-5A61E8ACD913\"></a>要让“图解视图”显示这些连线，需要在“实体”组中启用下列“显示”浮动框开关： \n                        	 \n                     </p> <a name=\"UL_86FE93A4EE974238AB4CD98AB5C3971E\"></a><ul>\n                        <li>基础对象（显示创建参数） \n                           		\n                        </li>\n                        <li>控制器（显示变换） \n                           		\n                        </li>\n                        <li>相关的变换：P（位置）、R（旋转）和 S（缩放) \n                           		\n                        </li>\n                     </ul> \n                     <p><a name=\"GUID-1F3F12C9-A1DE-4180-BEAA-F3687A603D9A\"></a> 下图描绘的是对象的位置和半径之间的关联： \n                        	 \n                     </p> <a name=\"FIG_CCFE83CB54E842E69E49E07E857010A2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-6FEC15E8-6615-4F83-9C51-3AC55EBF6ADF-low.png\"></div>  \n                  </li>\n                  <li>如果修改器参数已关联，则需要启用“显示”浮动框上的“修改器堆栈”开关。下图展示了对象的位置和应用于该对象的“弯曲”修改器的“角度”设置之间的关联。为清晰起见，某些修改器参数已收拢层次。 \n                     	 <a name=\"FIG_AC8152E1D96F49C7AE6483A964F9DFAC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2E714879-1E53-48E9-B6BF-912C7450F976-low.png\"></div>  \n                  </li>\n                  <li>在任何情况下，为显示连线而显示足够多的参数后，将鼠标光标悬停在连线上可查看关系，双击连线可打开“参数关联”对话框，并且关系处于高亮显示状态。 \n                     \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F73\"></a> \n               <h2><a name=\"GUID-B16F345E-2C90-44A4-9FED-63650BBB6398\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190044C4F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-00262324-0722-41DC-A93F-6BF9CA0EF982-low.png\"></div>  <a name=\"GUID-465117D9-3BBA-4376-BDD0-002EA4DE787F\"></a><div class=\"dl_section\"><a name=\"GUID-0A05C5C4-DB6A-4D3F-ABB7-9924849ACDFE\"></a><p class=\"title\"><a name=\"GUID-045A07FD-DD8B-40A9-9A2C-94813D9A325D\"></a>树视图\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F72\"></a>该对话框显示两个树视图，这两个视图显示场景中所有可见对象的动画参数。当前选中对象的名称会出现在顶端。树视图在场景中显示对象并允许选中并关联所有场景中的对象和场景本身的动画参数。 \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F71\"></a>树视图用带有颜色的代码来显示已经存在的关联。指定了连线控制器的参数（作为双向连线对的成员或单向连线的受驱动参数）显示为红色。当选中一个关联控制器参数，所有直接关联于它的参数都在另一个树视图中以绿色文本显示。在任何一种情况下，如果参数是在一个没有展开的轨迹内部，该关闭的轨迹会以红色或绿色显示，可以展开该轨迹来找到连线。\n                     \n                     \n                  </p>\n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E543\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果通过关联两个参数来打开“参数关联”对话框，树视图最初会仅显示选中的对象，在关联过程中会高亮显示在弹出菜单中选中的参数。如果希望展开树视图，包含场景中所有其他的动画参数，单击“显示所有轨迹”。 \n                        \n                     </div>\n                  </div>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F70\"></a>以下是树视图上面的按钮： \n                     \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CC9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F6F\"></a> <img src=\"../images/GUID-D3798337-B3D1-47EA-81BE-A7D34B7E4D3F-low.png\"> 显示所有轨迹</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5968\"></a> 显示场景对象列表的顶部。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CCA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F6E\"></a> <img src=\"../images/GUID-FA4920B8-9D67-496D-978A-8B01CD58FE09-low.png\"> 查找下一个参数</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5967\"></a> 在场景中查找下一个关联参数，如果需要可展开树以显示和选择参数。通过单击此按钮可以浏览所有现有的关联。 \n                           \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E544\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果选中一个关联参数，它的连接会在另一个树视图中以绿色显示。高亮显示连线参数的同时，在另一个树视图上的“显示下一关联”按钮将仅循环绿色链接，这样可以迅速找到选中的关联链接。 \n                                 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CCB\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F6D\"></a> <img src=\"../images/GUID-EA95F541-FB63-441B-8633-07904AE9A78C-low.png\"> 将选定节点刷新到树视图内容</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5966\"></a> 仅在树视图中显示场景中选定的节点。节点目前显示为扩展。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"GUID-FD3D2EC4-4B8D-452D-BC40-E31114090088\"></a><span class=\"term\"><a name=\"GUID-4C451954-2B25-4FA0-B8E6-58501D4F7055\"></a>[对象名称]</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-6F0163F9-260C-4EFB-8BEA-CE49FAEEC43B\"></a>对于每个树视图，此文本字段显示您选择的对象的名称。\n                        </div>\n                     </dd>\n                  </dl><a name=\"UL_A7C83127B95F4BAFB5B2CE153C746528\"></a><ul>\n                     <li><em class=\"strong\">驱动者单选按钮</em> 参数连线系统提供了一种方法，可以将成对的连线参数作为单个系统来设置动画。通过在一个参数上建立子控制器来实现；此控制器上的所有动画都会驱动关联控制器对。动画子控制器始终指定给连线对的驱动者参数。默认情况下，这是您在关联对象时最先单击的参数。您还可以指定驱动者对象，方法是选择其中一个树视图下的驱动者单选按钮。\n                        \n                        		\n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F68\"></a>在“轨迹视图”中，动画子控制器显示为驱动者参数轨迹中的嵌套轨迹。它的值直接驱动并匹配驱动者参数值。如果子控制器可设置关键帧（当首先建立的是双向关联时，这是默认设置），可以通过调整<em class=\"mild\">任意</em>一个连线参数来为其设置关键帧。这意味着，如果通过调整非驱动者参数来设置连线对的关键帧，则动画子控制器中的关键帧值由驱动者参数传递表达式确定。既然连线对可以通过任意参数设置动画，那么选择驱动者参数基本上只是一个约定。 \n                           		\n                        </p> \n                     </li>\n                  </ul>\n               </div>\n               <dl>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CCC\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F6C\"></a>控制方向</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5965\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525DF\"></a>在树视图之间是三个方向控制按钮。每次只能选择其中的一个按钮。这些按钮确定控制的方向，无论是单向还是双向的： \n                           \n                        </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044C52\"></a><ul>\n                           <li> <img src=\"../images/GUID-81F1EA0A-6A7C-42D1-B4F5-0E5E26BE41CC-low.png\"> <em class=\"strong\">双向连接 [双头箭头]</em>单击此项将两个参数彼此链接，这样在改变其中一个参数时会影响另一个。 \n                              	 \n                           </li>\n                           <li> <img src=\"../images/GUID-C3A0C65B-B3DD-441A-B1A1-4D3EFBD77553-low.png\"> <em class=\"strong\">单向连接: 右参数控制左参数 [左箭头]</em>右参数控制左参数。 \n                              	 \n                           </li>\n                           <li> <img src=\"../images/GUID-320E3859-721F-495B-81FE-7F8D1E79FF90-low.png\"> <em class=\"strong\">单向连接: 左参数控制右参数 [右箭头]</em>左参数控制右参数。 \n                              	 \n                           </li>\n                        </ul> \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E545\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>通过单击所需的方向按钮，然后单击“连接”或“更新”，可以随时改变关联的方向。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CCD\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F6B\"></a> <img src=\"../images/GUID-7C152DA5-E24F-4BB4-9ADD-2B22405C5A18-low.png\"> 连接/更新</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5964\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525E0\"></a>“连接/更新”按钮会改变自己的标签，具体取决于单击该按钮后是向之前的未连线参数添加新关联（连接），还是改变现有关联表达式或方向（更新）。对存在的关联进行改变仅在单击“更新”时应用。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CCE\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F6A\"></a> <img src=\"../images/GUID-EAAFFB7A-E0AA-484C-8C4C-86ABC1A70A0B-low.png\"> 断开</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5963\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525E1\"></a>当所选参数之间存在已有关联时启用“断开”按钮。此操作会移除连线控制器，并将其替换为驱动者参数的动画轨迹（如果为双向）或默认的控制器（如果为单向）。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-254851D2-F7AB-41E1-9B07-F831F46F1A05\"></a><p class=\"title\"><a name=\"GUID-BBA7F3BC-5C4E-451F-A935-130116CE5994\"></a>[传递表达式窗口]\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F67\"></a>参数树下面是传递表达式窗口。这些表达式确定每个参数的更改会对其他参数产生的影响。通常，一个表达式是另一个表达式的反转。（您可以为不互相反转的两个参数输入表达式，但不鼓励这样做，因为这种情况下关联的结果将因最先更改的参数而异。） \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F65\"></a>当您第一次连线参数时，默认的表达式是参数间简单的一对一链接。可在这些窗口中编辑表达式。有效表达式会为其参数产生正确类型的结果。例如，如果将一个参数（比如说高度，包含一个浮点值）与另一个参数（比如说位置，包含一个 Point3 值）相链接，表达式必须包含产生相同类型输出值的转化。\n                     \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F66\"></a>有关表达式语法的详细信息，请参见 <em class=\"mild\">MAXScript 帮助</em>中的“脚本控制器”主题。 \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F64\"></a>对于单向关联，由于没有为其指定关联控制器，因此控制参数的表达式窗口不可用。 \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3F63\"></a>对于双向关联，将启用两个传递表达式窗口。 \n                     \n                  </p>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";