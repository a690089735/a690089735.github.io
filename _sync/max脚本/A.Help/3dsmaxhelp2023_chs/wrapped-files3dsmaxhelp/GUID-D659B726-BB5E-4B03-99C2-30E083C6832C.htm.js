var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-D659B726-BB5E-4B03-99C2-30E083C6832C\">\n      <meta name=\"description\" content=\"边界是网格的线性部分，通常可以描述为孔洞的边缘。它通常是多边形仅位于一面时的边序列。例如，长方体基本体没有边界，但茶壶对象有若干边界：壶盖、壶身和壶嘴上有边界，还有两个在壶把上。如果创建圆柱体，然后删除末端多边形，相邻的一行边会形成边界。\">\n      <meta name=\"indexterm\" content=\"功能区面板: 边界边\">\n      <meta name=\"indexterm\" content=\"“边界边”面板（功能区）\">\n      <meta name=\"contextid\" content=\"MTOGGLEEDITBBRIDGE\">\n      <meta name=\"contextid\" content=\"MTOGGLEEDITBCONNECT\">\n      <meta name=\"contextid\" content=\"MACTIONEDITBCONNECTOPTIONS\">\n      <meta name=\"contextid\" content=\"MLABELBWEIGHT\">\n      <meta name=\"contextid\" content=\"MSPINNERBWEIGHT\">\n      <meta name=\"contextid\" content=\"MLABELBCREASE\">\n      <meta name=\"contextid\" content=\"MSPINNERBCREASE\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“边界边”面板</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-D659B726-BB5E-4B03-99C2-30E083C6832C\"></a><div class=\"head\">\n            <h1>“边界边”面板</h1>\n         </div>\n         <p class=\"blurb\">边界是网格的线性部分，通常可以描述为孔洞的边缘。它通常是多边形仅位于一面时的边序列。例如，<span class=\"char_link\"><a href=\"GUID-95F876F8-462B-4A31-A320-D339B97B049E.htm\">长方体基本体</a></span>没有边界，但<span class=\"char_link\"><a href=\"GUID-72B0B5B6-8D56-4DD9-BB3E-7DB87D430C4E.htm\">茶壶</a></span>对象有若干边界：壶盖、壶身和壶嘴上有边界，还有两个在壶把上。如果创建圆柱体，然后删除末端多边形，相邻的一行边会形成边界。 \n         </p><a name=\"UL_85DA9BF6BEAB4C11B501F9914C590A3B\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-6E7F95BF-6135-4B4E-B54F-696AF7E4F282\">功能区  <img src=\"../images/ac.menuaro.gif\"> “建模”选项卡  <img src=\"../images/ac.menuaro.gif\"> “多边形建模”面板  <img src=\"../images/ac.menuaro.gif\">  访问“边界”子对象层级  <img src=\"../images/ac.menuaro.gif\"> “边界边”面板</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3883\"></a>在“可编辑多边形边界”子对象层级，可以选择一个和多个边界，然后使用标准方法对其进行变换。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D68\"></a> \n            <h2><a name=\"GUID-75FAA9BD-305A-4ECB-9E84-674E4F822172\"></a>界面\n            </h2> <a name=\"WS73099CC142F4875546792D6511E4BADA40D-3882\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C28C179C-CF14-48F0-8508-DE4AD6B0A4A2-low.png\"></div>  <a name=\"GUID-FB97EBC6-D0A2-4763-B553-3171BC6DE90D\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D69\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D6A\"></a> <img src=\"../images/GUID-77A9AAFA-3B86-40ED-848E-266F258831EA-low.png\"> 挤出</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-5672\"></a> 通过直接在视口中操纵对边界进行手动挤出处理。单击此按钮，然后垂直拖动任何边界，以便将其挤出。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71D5\"></a>挤出边界时，该边界将会沿着法线方向移动，然后创建形成挤出面的新多边形，从而将该边界与对象相连。挤出时，可以形成不同数目的其他面，具体情况视该边界附近的几何体而定。随着挤出长度的增加，基本多边形的大小会随之增大，达到与挤出边界的端点相邻的顶点的范围。\n                        \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71D4\"></a>下面是边界挤出的一些重要方面： \n                     </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041CD9\"></a><ul>\n                        <li>当鼠标光标位于选定的边界上时，它会变为“挤出”光标。 </li>\n                        <li>若要指定挤出范围，请沿垂直方向拖动；若要设置基面大小，请沿水平方向拖动。 </li>\n                        <li>选定多个边界时，如果拖动任何一个边界，将会均匀地挤出所有的选定边界。 </li>\n                        <li>当“挤出”按钮处于活动状态时，可通过拖动将其他边界依次挤出。再次单击“挤出”或在活动视口中右键单击，以便结束操作。 </li>\n                     </ul> \n                     <div><a name=\"WS73099CC142F4875546792D6511E4BADA40D-387C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>若要打开“挤出边”对话框，请从下拉菜单中选择“挤出设置”，或者按住 <span class=\"keyboardEntry\">Shift</span> 键并单击“挤出”按钮。 \n                        </div>\n                     </div>\n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F4875546792D6511E4BADA40D-387B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-387A\"></a>挤出设置（位于“挤出”下拉列表中）</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-D3F5F10C-0D49-4D44-AE31-1C448D929BD0\"></a>打开<span class=\"char_link\"><a href=\"GUID-120012A8-90FC-460F-9287-5FB4545B1EA0.htm\">“挤出边”助手</a></span>，以便通过交互式操纵执行挤出。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71D2\"></a>如果在执行手动挤出后单击该按钮，则会以预览的形式对当前选择执行相同的挤出，并打开助手，其中“挤出高度”设置为最后一次手动挤出的量。 \n                     </p>\n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D6D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3877\"></a> <img src=\"../images/GUID-FBA6D8D2-3EAD-4B45-9F48-BF2A57D6ED1B-low.png\"> 桥\n                     <!--CPM-ContextId = \'mToggleEditBBridge\'--><a name=\"GUID-FAB065F1-95C8-44CA-9744-24E66338FD77\"></a></span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-566C\"></a> 用“桥”多边形连接对象上的边界对。在“直接操纵”模式（即，无需打开“桥设置”对话框）下，使用“桥”的方法有两种： <a name=\"WS1A9193826455F5FFBA679E112A6A190041CDA\"></a><ul>\n                        <li>选择对象的平均边界数，然后单击“桥”。此时，将会使用当前的“桥”设置立刻在每对选定边界之间创建桥，然后取消激活“桥”按钮。 </li>\n                        <li>如果不存在符合要求的选择（即，两个或多个选定边界），单击“桥”时会激活该按钮，并使您处于“桥”模式下。首先单击边界边，然后移动鼠标；此时，将会显示一条连接鼠标光标和单击边的橡皮筋线。单击其他边界上的第二条边，使这两条边相连。此时，使用当前“桥”设置时会立即创建桥；“桥”按钮始终处于活动状态，以便用于连接多对边界。要退出“桥”模式，右键单击活动视口，或者单击“桥”按钮。\n                           \n                        </li>\n                     </ul> \n                     <p><a name=\"WS73099CC142F487557109353211EEADCAF73-5D3F\"></a>由执行“桥”操作生成的新多边形将被自动选中，通过访问“多边形”子对象层级可看到这一点。 \n                     </p> <a name=\"WS73099CC142F48755-7F940DBD11F14EF21C0-791A\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5D777C4B-BED7-4726-A8C3-184BA01C9DBF-low.gif\"><p class=\"figure-title\">在“边界”级别使用桥。</p>\n                     </div>  \n                     <div><a name=\"WS73099CC142F487551FACE55114134B88B1-72D5\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>使用“桥”时，始终可以在边界对之间建立直线连接。要沿着某种轮廓建立桥连接，请在创建桥<em class=\"mild\">后</em>，根据需要应用建模工具。例如，桥接两个边界，然后使用<span class=\"char_link\"><a href=\"GUID-C83CBEE2-19FE-4D19-A1F8-52EC04D89A2A.htm\">混合</a></span>。 \n                        </div>\n                     </div> \n                     <div><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3871\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>若要打开“桥边界”对话框，请从下拉菜单中选择“桥设置”，或者按住 <span class=\"keyboardEntry\">Shift</span> 并单击“桥”按钮。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D71\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3870\"></a>桥设置（位于“桥”下拉列表中）</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-55157470-BB3B-4961-B8B3-3FAF4C951706\"></a>打开<span class=\"char_link\"><a href=\"GUID-366DCE9C-FB42-47CB-A1ED-65129C95923E.htm\">“桥”助手</a></span>，以便通过交互式操纵连接边界对。\n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D75\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-386D\"></a> <img src=\"../images/GUID-C74B8141-C60A-4471-85A4-87E014936C71-low.png\"> 切角</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-566F\"></a> 单击该按钮，然后拖动活动对象中的边界。不需要先选中该边界。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71CD\"></a>如果对多个选定的边界进行切角处理，则这些边界的切角是相同的。如果拖动取消选择的边界，将会首先取消选择任何选定的边界。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71CC\"></a>从根本上讲，边界切角可以用于设置边界边的“帧”，从而创建与边界边平行的一组新边和使用任意转角的新斜边。这些新边正好是到原始边的 &lt;切角量&gt; 距离。新切角面是用其中一个邻近面（随意拾取）的材质 ID 和作为所有邻近平滑组的相交组的平滑组创建的。\n                        \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71CB\"></a>或者，也可以在切角边界的周围创建开放的空间（实际是在开放边处进行剪切）；有关详细信息，请参见<span class=\"char_link\"><a href=\"GUID-FB852041-9E26-4F4A-9E17-154CD4CB504A.htm\">切角</a></span>。 \n                     </p> \n                     <div><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3867\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>若要打开“切角边”对话框，请从下拉菜单中选择“切角设置”，或者按住 <span class=\"keyboardEntry\">Shift</span> 键并单击“切角”按钮。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D79\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3866\"></a>切角设置（位于“切角”下拉列表中）</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-E6E4449E-B4C1-46F2-93D9-306F4306470D\"></a>打开<span class=\"char_link\"><a href=\"GUID-FB852041-9E26-4F4A-9E17-154CD4CB504A.htm\">“切角边”助手</a></span>，以便通过交互式操纵对边界进行切角处理，以及切换“打开”选项。 \n                     <p><a name=\"GUID-48CA1CBA-0B14-45E8-9AD9-F62EFD6C1AD5\"></a>如果在执行手动切角后单击该按钮，对当前选定对象和预览对象上执行的切角操作相同。此时，将会打开该对话框，其中“切角量”被设置为最后一次手动切角时的量。 \n                     </p>\n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4855151011E3B702B953D7D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3863\"></a> <img src=\"../images/GUID-CA805A92-5701-484E-98E6-64B62082C324-low.png\"> 连接\n                     <!--CPM-ContextId = \'mToggleEditBConnect\'--><a name=\"GUID-49E29144-9524-48BA-94B8-89E6BFFB824B\"></a></span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-566A\"></a> 在选定边界边对之间创建新边。这些边可以通过其中点相连。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71C3\"></a>只能连接同一多边形上的边。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71C2\"></a>连接不会让新的边交叉。所以，举例来说，如果选择四边形的全部四个边，然后单击“连接”，则只连接相邻边，会生成菱形图案。 \n                     </p> \n                     <div><a name=\"WS73099CC142F4875546792D6511E4BADA40D-385D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>若要打开“连接边”对话框，请从下拉菜单中选择“连接设置”，或者按住 <span class=\"keyboardEntry\">Shift</span> 并单击“连接”按钮。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F4875546792D6511E4BADA40D-385C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-385B\"></a>连接设置（位于“连接”下拉列表中）\n                     <!--CPM-ContextId = \'mActionEditBConnectOptions\'--><a name=\"GUID-7E11F296-E815-4796-A066-7482CBB26879\"></a></span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-F14D83AA-16A5-4139-B806-9F7C3F251754\"></a> 用于预览“连接”，并指定执行该操作时创建的边分段数。要增加新边周围的网格分辨率，请增加“连接边分段”设置。\n                  </div>\n               </dd>\n            </dl> \n            <div><a name=\"WS73099CC142F4875546792D6511E4BADA40D-484C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当功能区最大化或“边界边”面板处于浮动状态时，下列控件会显示在展开的“边界边”面板上。 \n               </div>\n            </div> <a name=\"GUID-98F079DC-7158-4EBD-BF2F-6623D0A8E345\"></a><dl>\n               <dt><a name=\"WS73099CC142F4875546792D6511E4BADA40D-484B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3858\"></a> <img src=\"../images/GUID-F106C91D-356D-43F2-B7ED-46A3B13CC431-low.png\"> 利用所选内容创建图形</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3857\"></a> 选择一个或多个边后，请单击该按钮，以便通过选定的边创建样条线形状。此时，将会显示“创建图形”对话框，用于命名图形，并将其设置为“平滑”或“线性”。新图形的枢轴位于多边形对象的中心。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F4875546792D6511E4BADA40D-4847\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-4846\"></a>权重\n                     <!--CPM-ContextId = \'mLabelBWeight\'--><a name=\"GUID-AFF2463D-DBF3-4006-B6F0-D966F27727D3\"></a>\n                     <!--CPM-ContextId = \'mSpinnerBWeight\'--><a name=\"GUID-54B0C37F-4CC6-4889-927D-A7A11765EAF5\"></a></span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3855\"></a> 设置选定边界的权重。它可以供<span class=\"char_link\"><a href=\"GUID-642809FB-1C98-4960-8689-24B8108F3B10.htm#WSF742DAB041063133-48601C13112A1CEBBD0-7FB8\">“NURMS 细分”选项</a></span>使用。 \n                     	 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71BE\"></a>增加边的权重时，可能会远离平滑结果。 \n                        	 \n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"WS73099CC142F4875546792D6511E4BADA40D-4843\"></a><span class=\"term\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-4842\"></a>折缝\n                     <!--CPM-ContextId = \'mLabelBCrease\'--><a name=\"GUID-7183D969-F41C-4E9E-9541-7E64D04E1470\"></a>\n                     <!--CPM-ContextId = \'mSpinnerBCrease\'--><a name=\"GUID-E5C715D8-AABA-4ABA-B82B-706E5D5BB0C0\"></a></span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F4875546792D6511E4BADA40D-3853\"></a> 指定对选定边界或边界执行的折缝操作量。它可以供<span class=\"char_link\"><a href=\"GUID-642809FB-1C98-4960-8689-24B8108F3B10.htm#WSF742DAB041063133-48601C13112A1CEBBD0-7FB8\">“NURMS 细分”选项</a></span>使用。 \n                     	 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-71BC\"></a>如果设置值不高，该边界相对平滑。在更高设置，折缝显著可见。如果设置值为 1.0，即最高设置值时，该边界根本不会平滑。 \n                        	 \n                     </p> \n                  </div>\n               </dd>\n            </dl> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";