var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-1A7AB59C-148E-4FE9-A646-DE625C88C864\">\n      <meta name=\"description\" content=\"使用提供的门模型可以控制门外观的细节。还可以将门设置为打开、部分打开或关闭，而且可设置打开的动画。\">\n      <meta name=\"indexterm\" content=\"建筑对象: 门\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>门</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-1A7AB59C-148E-4FE9-A646-DE625C88C864\"></a><div class=\"head\">\n            <h1>门</h1>\n         </div>\n         <p class=\"blurb\">使用提供的门模型可以控制门外观的细节。还可以将门设置为打开、部分打开或关闭，而且可设置打开的动画。 </p><a name=\"UL_B10FE209A71C48A089F610DE178A11FF\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-7A91EBD3-EF6E-4BA2-9110-B084B28682CC\"> <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-549DD4DF-FDA0-480C-A31E-EC971D7D66D4-low.png\">（几何体） <img src=\"../images/ac.menuaro.gif\"> “门”</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-082C6A85-F16C-48C5-8372-D9CEC9CD42E7\">默认菜单：“创建”菜单  <img src=\"../images/ac.menuaro.gif\"> “AEC 对象”</span> \n            </li>\n         </ul><a name=\"WS1A9193826455F5FFBA679E112A6A1900414E7\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5983EC5E-005A-425D-B362-60B4E8E878E6-low.png\"><p class=\"figure-title\">房屋模型中的不同门类型</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D80\"></a>“门”类别包括三种类型： <a name=\"UL_55DAD7933F4C4CA6B7D542F29674B441\"></a><ul>\n               <li><span class=\"char_link\"><a href=\"GUID-26D4058B-C203-45DF-A87C-13F9D12FE5FB.htm\">枢轴门</a></span>是大家熟悉的，仅在一侧装有铰链的门。 \n               </li>\n               <li><span class=\"char_link\"><a href=\"GUID-EC5F3860-BEFD-4479-8425-A25CA7383FF6.htm\">折叠门</a></span>的铰链装在中间以及侧端，就像许多壁橱的门那样。您也可以将此类型的门设置为一组双门。 \n               </li>\n               <li><span class=\"char_link\"><a href=\"GUID-68742C77-76DD-4E90-9874-241CE2780DA9.htm\">推拉门</a></span>有一半固定，另一半可以推拉。 \n               </li>\n            </ul> \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D7F\"></a>每一种类型门的主题描述了该类型门的唯一控件和行为。大多数门参数通用于所有类型的门，如此处所描述。 \n         </p>\n         <div><a name=\"GUID-5F2B56E7-8D41-40FD-858E-85D7A89888C1\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>在创建门对象（在两次单击之间）时，您可以按如下所示以交互方式导航视口： <a name=\"UL_AFA2771A05F041D3B927425CFB66F99A\"></a><ul>\n                  <li>若要平移视口，请滚动鼠标滚轮或使用鼠标中键进行拖动。 </li>\n                  <li>若要环绕视口，请按住 <span class=\"keyboardEntry\">Alt</span> 键的同时滚动鼠标滚轮，或使用鼠标中键进行拖动。 \n                  </li>\n                  <li>若要缩放视口，请滚动鼠标滚轮或按住 <span class=\"keyboardEntry\">Alt+Ctrl</span> 键并按住鼠标中键前后拖动。 \n                  </li>\n               </ul> \n            </div>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414E8\"></a> \n            <h2><a name=\"GUID-BC98F74A-3C06-4C93-B5B9-D25A6270F180\"></a>门和材质\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D7E\"></a>默认情况下，<span class=\"charspan-msgph\">3ds Max</span> 为门指定五个不同的材质 ID。<em class=\"mild\"></em>aectemplates.mat 材质库包括门模板<em class=\"mild\"></em>，该模板是一个旨在与门配合使用的<span class=\"char_link\"><a href=\"GUID-D968CDD9-4C5D-489D-A311-ED7486FCD4AA.htm\">多维/子对象材质</a></span>。下面列出了门/材质的每个组件及其相应的材质 ID。 \n            </p> <a name=\"WS73099CC142F48755-7F940DBD11F14EF21C0-7627\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D1EC69C6-CD66-4C34-85A5-C3533C1BBC97-low.png\"><p class=\"figure-title\">门或窗的材质 ID</p>\n            </div>  <a name=\"WSF742DAB041063133-2A605991112A1CE7A04-7FA1\"></a><div class=\"table-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n                  <colgroup>\n                     <col width=\"29.49225783219301%\">\n                     <col width=\"70.50774216780698%\">\n                  </colgroup>\n                  <tr class=\"ruled-heading\">\n                     <th class=\"table-heading\">材质 ID </th>\n                     <th class=\"table-heading\">门/材质组件 </th>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">1 </td>\n                     <td class=\"table-body\">前 </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">2 </td>\n                     <td class=\"table-body\">后 </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">3 </td>\n                     <td class=\"table-body\">内部倒角（在“面板”设置为“玻璃”或“倒角”时用于玻璃。） </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">4 </td>\n                     <td class=\"table-body\">帧 </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">5 </td>\n                     <td class=\"table-body\">内门 </td>\n                  </tr>\n               </table>\n            </div> \n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6165\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> <span class=\"charspan-msgph\">3ds Max</span> 不会自动为门对象指定材质。要使用提供的材质，请打开相应的库，然后向所用的对象分配所需的材质。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414E9\"></a> \n            <h2><a name=\"GUID-B85C5B9C-1164-4F6F-A43E-303386095679\"></a>创建门的开口\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D7D\"></a>要在墙上创建开口，可以执行一个<span class=\"char_link\"><a href=\"GUID-3DBEB7C2-43CC-4B78-9463-5DD448FD921C.htm\">布尔操作</a></span>，将墙作为操作对象 A，将另一个对象（例如框）作为操作对象 B。然后，可以在开口中创建并添加一个门，并将该门<span class=\"char_link\"><a href=\"GUID-4115DE9B-D636-4A42-904E-71259A843E0A.htm\">链接</a></span>（如果您需要）为墙的子对象。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6164\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>使用捕捉时，可以在墙对象中插入门，此操作自动将两者链接在一起为该门创建一个裁切。请参见步骤<span class=\"char_link\"><a href=\"GUID-73E5833B-C207-437A-9B3E-938296CE7107.htm#WS1A9193826455F5FFBA679E112A6A190041473\">在墙上创建和放置门窗</a></span>。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D7C\"></a> \n            <h2><a name=\"GUID-FFEDD37A-1FFF-4AC9-8582-D906F61909F6\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414EA\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414EB\"></a>要创建门，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在“对象类型”卷展栏上，单击用于要创建的门类型的按钮。 </li>\n               <li>根据需要选择选项，例如更改默认创建方法。禁用“创建门框”可消除门框。如果需要上倾门，则启用“允许侧柱倾斜”。 </li>\n               <li>在视口中拖动鼠标可创建前两个点，用于定义门的宽度和门脚的角度。 </li>\n               <li>释放鼠标并移动可调整门的深度（默认创建方法），然后单击可完成设置。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D7B\"></a>默认情况下，深度与前两个点之间的直线垂直，与活动栅格平行。 \n                  </p> \n               </li>\n               <li>移动鼠标以调整高度，然后单击以完成设置。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D7A\"></a>高度与由前三个点定义的平面垂直，并且与活动栅格垂直。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D79\"></a>可以在“参数”卷展栏上调整“高度”、“宽度”和“深度”值。 \n                  </p> \n               </li>\n            </ol> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D78\"></a>在“创建方法”卷展栏上，可以将创建顺序从宽度-深度-高度更改为宽度-高度-深度。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414EC\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414ED\"></a>要创建门材质，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>创建门或选择一个现有的门。 </li>\n               <li>打开“材质编辑器”，并为材质选择一个示例窗。 </li>\n               <li>单击“材质编辑器”工具栏下面的“类型”按钮。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D77\"></a>将打开“材质/贴图浏览器”对话框。 \n                  </p> \n               </li>\n               <li>在“材质”列表中，双击“多维/子对象”项目，然后在显示的“替换材质”对话框中，选择一个选项并单击“确定”。 </li>\n               <li>在“多维/子对象基本参数”卷展栏中，单击“设置数量”并将“材质数量”更改为 5。单击“确定”。 </li>\n               <li>也可以选择将子材质名称更改为<span class=\"char_link\"><a href=\"GUID-1A7AB59C-148E-4FE9-A646-DE625C88C864.htm#WSF742DAB041063133-2A605991112A1CE7A04-7FA1\">上表</a></span>中指定的名称。 \n               </li>\n               <li>像编辑任何“多维/子对象”材质那样编辑材质。 </li>\n            </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414EE\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414EF\"></a>要设置门的动画，请执行以下操作：\n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D76\"></a>可以通过为“打开”设置设定关键帧点来设置门打开和关闭的动画。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>创建门或选择一个现有的门。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D75\"></a>如果使用现有的门，还要访问“修改”面板。 \n                  </p> \n               </li>\n               <li>将“参数”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“打开”参数设置为希望在动画开始时打开门的数量。如果希望门关闭，则将其设置为 <em class=\"strong\">0</em>。 \n               </li>\n               <li>单击“自动关键点”按钮并前进到第一个关键帧。 </li>\n               <li>更改“打开”设置。 </li>\n               <li>继续移至任何其他关键帧并根据需要更改“打开”设置。 </li>\n               <li>播放动画。 </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D74\"></a> \n            <h2><a name=\"GUID-1E835305-C65D-406C-BE70-D0EAF84A8528\"></a>界面\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D73\"></a>每一种类型门的主题描述了该类型门的唯一控件和行为。大多数门参数通用于所有类型的门，如此处所描述。 \n            </p> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414F0\"></a> \n               <h3><a name=\"GUID-2D390AA8-6D1C-4D4D-96C1-C3F5AACDBBF7\"></a>“对象类型”卷展栏\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414F1\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-CF292494-EF17-4CDD-8111-0B9E62E00803-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D72\"></a><span class=\"charspan-msgph\">3ds Max</span> 中有三种门： \n               </p> <a name=\"GUID-38BEFADA-10C9-4F91-AEE4-DFDBF82B8256\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D50\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D71\"></a>枢轴门</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79D7\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C14\"></a>大家熟悉的门类型，仅在一侧装有铰链。请参见<span class=\"char_link\"><a href=\"GUID-26D4058B-C203-45DF-A87C-13F9D12FE5FB.htm\">枢轴门</a></span>。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D4F\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D70\"></a>推拉门</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79D6\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C15\"></a>一半固定，另一半可以推拉。请参见<span class=\"char_link\"><a href=\"GUID-68742C77-76DD-4E90-9874-241CE2780DA9.htm\">推拉门</a></span>。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D4E\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D6F\"></a>折叠门</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79D5\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C16\"></a>铰链装在中间以及侧端，就像许多壁橱的门那样。也可以将此类型的门创建成一组双门。请参见<span class=\"char_link\"><a href=\"GUID-EC5F3860-BEFD-4479-8425-A25CA7383FF6.htm\">折叠门</a></span>。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414F2\"></a> \n               <h3><a name=\"GUID-1E6625B7-C26F-42FE-A55B-D82DC6CA1BAD\"></a>“名称和颜色”卷展栏\n               </h3> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D6E\"></a>请参见<span class=\"char_link\"><a href=\"GUID-090A31AA-AE7D-41BA-9DAA-C97125140274.htm\">对象名称和线框颜色</a></span>。 \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414F3\"></a> \n               <h3><a name=\"GUID-0EC76F47-3056-489A-B00C-88069F7494E8\"></a>“创建方法”卷展栏\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414F4\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-CB311EF2-33DC-4589-9D52-F4C3AAE5EB14-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D6D\"></a> 可以使用四个点来定义每一种类型的门：拖动前两个，后面跟随两个移动-单击序列。“创建方法”设置确定这些操作定义门的尺寸的顺序。 \n               </p> <a name=\"UL_BDB2707F2F5349159C3158F2FB1F2144\"></a><ul>\n                  <li><em class=\"strong\">宽度/深度/高度</em>（默认设置。）前两个点定义门的宽度和门脚的角度。通过在视口中拖动来设置这些点，如创建门的第一步中所述。第一个点（在拖动之前单击并按住的点）定义单枢轴门和折叠门（两个侧柱在双门上都有铰链，而推拉门没有铰链）的铰链上的点。第二个点（在拖动后在其上释放鼠标按键的点）定义门的宽度以及从一个侧柱到另一个侧柱的方向。这样，就可以在放置门时使其与墙或开口对齐。第三个点（移动鼠标后单击的点）指定门的深度，第四个点（再次移动鼠标后单击的点）指定高度。\n                     \n                  </li>\n                  <li><em class=\"strong\">宽度/高度/深度</em>与“宽度/高度/深度”选项的作用方式相似，只是最后两个点首先创建高度，然后创建深度。 \n                     <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6163\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>使用此方法时，深度与由前三个点设置的平面垂直。这样，如果您在“顶”或“透视”视口中绘制门，门将平躺在活动栅格上。 \n                        </div>\n                     </div> \n                  </li>\n               </ul> <a name=\"GUID-C05B84C6-E7B2-478E-B7AE-DC7E854E2127\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D4B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D6A\"></a>允许侧柱倾斜</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79D2\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C19\"></a>允许您创建倾斜门。设置<span class=\"char_link\"><a href=\"GUID-66F42B65-7EA5-4CF8-BBF1-46EBC0845C75.htm\">捕捉</a></span>以定义构造平面之外的点。默认设置为禁用。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414F5\"></a> \n               <h3><a name=\"GUID-0F6055D0-1B59-4E35-BF82-8ECD1558217B\"></a>“参数”卷展栏\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414F6\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7C828683-8A7B-4E75-AFE2-4E9F6AB34FB3-low.png\"></div>  <a name=\"GUID-5D657AA9-5F56-4481-ABE2-30CB9E851FEC\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D4A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D69\"></a>高度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79D1\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C1A\"></a>设置门装置的总体高度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D49\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D68\"></a>宽度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79D0\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C1B\"></a>设置门装置的总体宽度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D48\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D67\"></a>深度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79CF\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C1C\"></a>设置门装置的总体深度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D47\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D66\"></a>打开</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79CE\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C1D\"></a>使用枢轴门时，指定以角度为单位的门打开的程度。使用推拉门和折叠门时，“打开”指定门打开的百分比。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-80A3D174-3010-43C3-9DA2-4AE36E5D7636\"></a><p class=\"title\"><a name=\"GUID-5228E81E-71F0-425A-8BD3-251F86CF0BBB\"></a>“门框”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D65\"></a>该组包含用于门侧柱门框的控件。虽然门框只是门对象的一部分，但它的行为就像是墙的一部分。打开或关闭门时，门框不会移动。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D46\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D64\"></a>创建门框</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79CD\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C1E\"></a>这是默认启用的，以显示门框。禁用此选项可以禁用门框的显示。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D45\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D63\"></a>宽度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79CC\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C1F\"></a>设置门框与墙平行的宽度。仅当启用了“创建门框”时可用。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D44\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D62\"></a>深度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79CB\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C20\"></a>设置门框从墙投影的深度。仅当启用了“创建门框”时可用。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D43\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D61\"></a>门偏移</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79CA\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C21\"></a>设置门相对于门框的位置。在 0.0 时，门与修剪的一个边平齐。请注意，此设置的值可以是正数，也可以是负数。仅当启用了“创建门框”时可用。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D42\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D60\"></a>生成贴图坐标</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C9\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C22\"></a>为门指定<span class=\"char_link\"><a href=\"GUID-245C4F26-7D3B-40E4-B815-531E3DF49967.htm\">贴图坐标</a></span>。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D41\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D5F\"></a>真实世界贴图大小</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C8\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C23\"></a>控制应用于该对象的纹理贴图材质所使用的缩放方法。缩放值由位于应用材质的<span class=\"char_link\"><a href=\"GUID-8AE3643F-BDB4-498B-B220-92646FC8A562.htm\">“坐标”卷展栏</a></span>中的“使用真实世界比例”设置控制。默认设置为禁用状态。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900414F8\"></a> \n               <h3><a name=\"GUID-9EFCF9C8-3BD4-4301-8568-F5036D6910A5\"></a>“页扇参数”卷展栏\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A1900414F9\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C16C8904-96B3-4B04-8719-139F939CB63C-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D5E\"></a>提供影响门本身（相对于包括门框的门装置）的控件。您可以调整门的大小、添加面板，以及调整这些面板的大小和位置。每个门元素的面板总数是水平划分的数量乘以垂直划分的数量所得的值。枢轴门只有一个门元素，除非是双门。折叠门有两个门元素，如果是双门，则有四个门元素。推拉门有两个门元素。\n                  \n               </p> <a name=\"GUID-3304F0C0-E32A-4115-9785-02CD83A7F6CE\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D40\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D5D\"></a>厚度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C7\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C24\"></a>设置门的厚度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D3F\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D5C\"></a>门挺/顶梁</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C6\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C25\"></a>设置顶部和两侧的面板框的宽度。仅当门是面板类型时，才会显示此设置。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D3E\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D5B\"></a>底梁</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C5\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C26\"></a>设置门脚处的面板框的宽度。仅当门是面板类型时，才会显示此设置。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D3D\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D5A\"></a>水平窗格数</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C4\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C27\"></a>设置面板沿水平轴划分的数量。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D3C\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D59\"></a>垂直窗格数</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C3\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C28\"></a>设置面板沿垂直轴划分的数量。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D3B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D58\"></a>镶板间距</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C2\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C29\"></a>设置面板之间的间隔宽度。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-EE767012-2C9D-4881-83CB-0446854A48B7\"></a><p class=\"title\"><a name=\"GUID-CC865C33-3860-4092-9471-73ADB4D47C1E\"></a>“面板”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D57\"></a>确定在门中创建面板的方式。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D3A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D56\"></a>无</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C1\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C2A\"></a>门没有面板。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D39\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D55\"></a>玻璃</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79C0\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C2B\"></a>创建不带倒角的玻璃面板。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D38\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D54\"></a>厚度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79BF\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C2C\"></a>设置玻璃面板的厚度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D37\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D53\"></a>有倒角</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79BE\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C2D\"></a>选择此选项可以具有倒角面板。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D52\"></a>其余的微调器影响面板的倒角。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D36\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D51\"></a>倒角角度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79BD\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C2E\"></a>指定门的外部平面和面板平面之间的倒角角度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D35\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D50\"></a>厚度 1</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79BC\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C2F\"></a>设置面板的外部厚度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D34\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D4F\"></a>厚度 2</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79BB\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C30\"></a>设置倒角从该处开始的厚度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D33\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D4E\"></a>中间厚度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79BA\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C31\"></a>设置面板内面部分的厚度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D32\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D4D\"></a>宽度 1</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79B9\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C32\"></a>设置倒角从该处开始的宽度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7D31\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4D4C\"></a>宽度 2</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF6A6AC56911E1C5C8A4E-79B8\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753C33\"></a>设置面板的内面部分的宽度。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div> \n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-26D4058B-C203-45DF-A87C-13F9D12FE5FB.htm\">枢轴门</a><p>枢轴门只在一侧用铰链接合。您还可以将门制作成为双门，该门具有两个门元素，每个元素在其外边缘处用铰链接合。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-68742C77-76DD-4E90-9874-241CE2780DA9.htm\">推拉门</a><p>使用“滑动”门可以将门进行滑动，就像在轨道上一样。该门有两个门元素：一个保持固定，而另一个可以移动。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-EC5F3860-BEFD-4479-8425-A25CA7383FF6.htm\">折叠门</a><p>折叠门在中间转枢也在侧面转枢。该门有两个门元素。也可以该门制作成有四个门元素的双门。 </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";