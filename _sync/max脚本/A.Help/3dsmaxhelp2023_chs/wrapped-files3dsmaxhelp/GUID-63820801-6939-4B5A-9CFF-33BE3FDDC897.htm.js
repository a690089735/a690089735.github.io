var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-63820801-6939-4B5A-9CFF-33BE3FDDC897\">\n      <meta name=\"description\" content=\"使用“保留”修改器可以尽可能多的保留边长度、面角度，以及经过编辑和变形的网格对象的体积，该网格对象在变形前使用对象未修改的副本。当在子对象层级推动和拉出顶点时，处理过程通常拉伸边并经常修改面角度，这使得拓扑不规则。可以使用“保留”修改器生成更规则的边长度，以及更“清晰”的网格。\">\n      <meta name=\"indexterm\" content=\"保留修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 保留\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 保留\">\n      <meta name=\"contextid\" content=\"PRESERVE.MODIFIERS\">\n      <meta name=\"contextid\" content=\"MODIFIERS-PRESERVE\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>保留修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-63820801-6939-4B5A-9CFF-33BE3FDDC897\"></a><div class=\"head\">\n            <h1>保留修改器</h1>\n         </div>\n         <p class=\"blurb\">使用“保留”修改器可以尽可能多的保留边长度、面角度，以及经过编辑和变形的网格对象的体积，该网格对象在变形前使用对象未修改的副本。当在子对象层级推动和拉出顶点时，处理过程通常拉伸边并经常修改面角度，这使得拓扑不规则。可以使用“保留”修改器生成更规则的边长度，以及更“清晰”的网格。\n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_56F6199ED7364063BEC79448740AC7F4\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-AACBEA19-4B19-4A72-8F0C-4B13A82E6FF3\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\">  作出选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “保留”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-1CD94B66-4C3A-4753-BF4C-6D775307ABDA\">默认菜单：进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “参数化变形器” <img src=\"../images/ac.menuaro.gif\"> “保留”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-5D4511E9-7D7C-408A-865A-C7F4B10938F8\">Alt 菜单：进行选择。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “几何体(参数化)” <img src=\"../images/ac.menuaro.gif\"> “保留”</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-294E\"></a> \n               <h2><a name=\"GUID-7B98F5E2-B929-41A1-AE0A-FE2F93FAFCB0\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A2D\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043A2E\"></a>要使用“保留”修改器，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建一个对象。在对其进行编辑前，创建一个副本。 </li>\n                  <li>在子对象层级编辑副本，推动和拉出顶点、面等等。 </li>\n                  <li>将“保留”修改器应用到副本上，单击“拾取原始”按钮，然后选择原始未修改的对象。 </li>\n                  <li>在“保留”修改器上调整控件以微调网格。 </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A2F\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043A30\"></a>示例：在几何球体上使用“保留”修改器：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建一个<span class=\"char_link\"><a href=\"GUID-ADCB4D06-BD52-4D0A-A367-63FCBC37A848.htm\">几何球体</a></span>并在按下 <img src=\"../images/GUID-5D7D7630-6D16-400D-AE6F-87F13C97DEA2-low.png\"> <span class=\"keyboardEntry\">Shift</span> 键的同时移动来生成其一个副本。 \n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9DE\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果想在贴图上查看“保留”的效果，那么将一个方格贴图材质应用到球体上并在生成副本前在视口中将其显示。 \n                        </div>\n                     </div> \n                  </li>\n                  <li>将副本转化为一个<span class=\"char_link\"><a href=\"GUID-3CBF3773-3CDC-4ED7-8C34-D0EAF9CD9F66.htm\">可编辑网格</a></span>。 \n                  </li>\n                  <li>在“顶点”子对象层级，选中球体顶部三分之一的顶点，并将它们向上（从前面看去）移动大约一个半径的距离。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D8C\"></a>注意在移动的顶点和保留的顶点间被拉伸的边。 \n                     </p> \n                  </li>\n                  <li>仍然保持在“顶点”子对象层级，应用“保留”修改器。 </li>\n                  <li>单击“拾取原始”按钮，然后选择原始（未编辑的）球体。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D8B\"></a>选中顶点移动回球体，试图恢复其原始体积和边长度。 \n                     </p> \n                  </li>\n                  <li>启用“反选”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D8A\"></a>选中顶点返回其移动位置，而未选择顶点（反向的选择）向上朝着选中顶点移动。 \n                     </p> \n                  </li>\n                  <li>禁用“反选”然后慢慢的将“迭代次数”减少为 0。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D89\"></a>对象现在看起来如同未应用“保留”之前的状态。 \n                     </p> \n                  </li>\n                  <li>将“迭代次数”增加到默认值 25，然后进一步增加到大约 75。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D88\"></a>对象现在再次几乎完全是球形了。 \n                     </p> \n                  </li>\n                  <li>将“迭代次数”设置回 25，然后试试不同的“边长度”、“面角度”和“体积”设置。（也可以通过将“边长度”设置为 1.0、将“面角度”和“体积”设置为 0.3 来恢复默认设置。） </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A31\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-8DF8A0C0-CDCC-406E-9BDB-F7E4EFD6EA66-low.png\"></div> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A32\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2945795D-83DC-4546-8D4F-63545D3F01BB-low.png\"></div> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A34\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-DAF68153-BB07-496A-A23E-C7C383C0BC24-low.png\"><p class=\"figure-title\">将“保留”修改器应用到几何球体上的步骤</p>\n               </div>    <a name=\"WS1A9193826455F5FFBA679E112A6A190043A35\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043A36\"></a>示例：设置保留对象的动画：\n               </p>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D87\"></a>可以设置“保留”参数的动画，但是下列步骤展示了如何将“变形”与“保留”一起使用。 \n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>从复制球体上移除“保留”修改器，并转到对象层级（而不再是子对象层级）。 </li>\n                  <li>仍然选中复制的（也是经过变形的）球体，选择 <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“复合对象”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“变形”使其转变为一个“变形”对象。 \n                  </li>\n                  <li>确保在“拾取目标”卷展栏中选择了“实例”。 </li>\n                  <li>在第 0 帧，单击“拾取目标”然后选择原始球体。 </li>\n                  <li>在 <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板中，转至第 100 帧，在“变形目标”列表中选择“sphere02”，然后单击“创建变形关键点”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D86\"></a>对象现在从球体变形为一个变形的球体。 \n                     </p> \n                  </li>\n                  <li>将“保留”修改器应用到变形对象上。 </li>\n                  <li>单击“拾取原始”，然后选择原始球体。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D85\"></a>对象现在从球体变形为一个保留和变形的球体。请注意，因为对象选择是由堆栈传递，所以“保留”效果应用到整个球体上。 \n                     </p> \n                  </li>\n                  <li>在“选择”组中选择“仅选定顶点”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D84\"></a>现在，只有选中顶点受到“保留”修改器的影响。不过，变形仍有效。 \n                     </p> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A37\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043A38\"></a>示例：使用“选择”复选框：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>重置 <span class=\"charspan-msgph\">3ds Max</span>，创建一个长方体，并将其转化为可编辑网格。 \n                  </li>\n                  <li>使用 <img src=\"../images/GUID-5D7D7630-6D16-400D-AE6F-87F13C97DEA2-low.png\"><span class=\"keyboardEntry\">Shift</span> 并移动以制作复件。 \n                  </li>\n                  <li> 使用 <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板选择第二个长方体顶部的四个顶点。将它们沿着 Z 轴向上移动，使复制的长方体高于原始长方体。 \n                  </li>\n                  <li>应用“保留”修改器，并拾取第一个长方体作为原始对象。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D83\"></a>选中顶点向下移动以匹配原始边长。 \n                     </p> \n                  </li>\n                  <li>将“迭代次数”设置为 <em class=\"strong\">0</em> 以再次将顶点向上移动，然后启用“反选”，并将迭代次数设置回 <em class=\"strong\">25</em>。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D82\"></a>选中顶点停留在其初始位置，但是未选中顶点向上移动以恢复初始边长。 \n                     </p> \n                  </li>\n                  <li>将“迭代次数”再次设置回 <em class=\"strong\">0</em>。启用“应用于整个网格”（“反转”无效），然后将“迭代次数”设置回 <em class=\"strong\">25</em>。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D81\"></a>“保留”现在应用到整个网格上。因为所有的顶点都受到影响，所以长方体的顶部和底部相互靠近。 \n                     </p> \n                  </li>\n                  <li>禁用“应用于整个网格”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D80\"></a>所有的顶点都转换，但是保持相互间的相同位置。 \n                     </p> \n                  </li>\n                  <li>禁用“反选”然后启用“仅选定顶点”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D7F\"></a>这样回到初始效果。可以上下移动“迭代次数”微调器，会发现现在只影响选中的顶点。 \n                     </p> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A39\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043A3A\"></a>示例：模拟布料：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>重置 <span class=\"charspan-msgph\">3ds Max</span>，创建一个“四边形面片栅格”，并将其转化为可编辑网格。 \n                  </li>\n                  <li>生成一个副本，然后生成副本的参考。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D7E\"></a>应当在场景中总共含有三个对象。 \n                     </p> \n                  </li>\n                  <li>将“保留”修改器应用到第三个面片上，并将第一个用作原始对象。 </li>\n                  <li>启用“仅选定顶点”和“反选”。 </li>\n                  <li>将“迭代次数”设置为 <em class=\"strong\">100</em>。 \n                  </li>\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择第二个面片并转到“子对象”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“顶点”层级。 \n                  </li>\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 在面片的中间选择一个顶点并沿着 Z 轴将该顶点向上移动。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D7D\"></a>第三个面片成为浮动的手帕。 \n                     </p> \n                  </li>\n                  <li> <img src=\"../images/GUID-8A52C09C-4B1B-4074-A22E-1F815F11273C-low.png\"> 撤消顶点移动。 \n                  </li>\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择第二个面片的两个远角顶点，并沿着 Z 轴将它们向上拖动。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D7C\"></a>现在，得到了悬挂在线上的被单。 \n                     </p> \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-294D\"></a> \n               <h2><a name=\"GUID-D2CE1D6E-8C4F-4E0A-A466-12B58A7CF0E0\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A3B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C36FC775-1462-4E05-A4F8-F3C88E397D1D-low.png\"></div>  <a name=\"GUID-08BD3C1E-9E1F-4F13-9C93-89687A787C82\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A5A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D7B\"></a>原始</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CBC\"></a> 显示选定原始对象的名称。（请注意，所谓“原始”对象实际上并不意味着必须是最初的对象。它只不过是表示其未修改拓扑对象的一个副本。） \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A59\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D7A\"></a>拾取原始</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CBB\"></a> 单击该选项，然后选择当前对象的一个未修改副本。应该拾取与当前对象拓扑相同的对象，也就是具有同样的顶点数目。当选择拥有相同顶点的完全不同的对象时，会产生不可预料的结果。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A58\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D79\"></a>迭代次数</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CBA\"></a> 指定解决方案的计算次数。该值越高，所得对象越匹配原始对象，而处理过程也越缓慢。将该值设置为零时，原始对象不受影响，就如同没有应用“保留”修改器那样。 \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-6B52BF42-F741-40F2-A321-B68E66CBAC02\"></a><p class=\"title\"><a name=\"GUID-867BE121-A197-4CA3-B599-92876F8CDBEC\"></a>“保留重量”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A57\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D78\"></a>边长、面角度、体积</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CB9\"></a> 调整您尝试保留的三个组件（边长、面角度和体积）的相对重要性。大多数情况下，可以使用它们的默认设置，但是通过改变它们也可以获得有趣的效果。例如，面角度权重越高，产生刚性越强的网格。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-72F3E829-ACC7-45F7-8EC5-198A4BE22D12\"></a><p class=\"title\"><a name=\"GUID-9959ACC7-26D2-4796-9229-4A6AA0A92CDE\"></a>“选择”组\n                  </p>\n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D77\"></a>提供选项，用于指定所采用的来自于堆栈中前一选择修改器的选择层级。“保留”修改器在指定的选择上作用。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A56\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D76\"></a>应用于整个网格</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CB8\"></a> 将“保留”修改器应用于整个对象，而无论从堆栈的前一级别所传递来的是什么样的选择。禁用其他两个复选框。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A55\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D75\"></a>仅选定顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CB7\"></a> 使用前一子对象顶点选择。请注意，“顶点”子对象层级在前一堆栈条目中是否是活动的不影响当前选择。只要顶点被选中，“保留”就使用该选择。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A54\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3D74\"></a>反选</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7CB6\"></a> 反转堆栈传递的选择。 \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9DF\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果禁用所有复选框，那么“保留”修改器使用任何由堆栈传递的活动选择。因此，如果“网格选择”修改器设置到“顶点”层级，那么就会使用顶点选择。如果同样的“网格选择”修改器设置到顶（对象）层级，那么整个对象都会受到影响。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";