var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A7CC32F5-40BE-4DE5-A364-05E7986D4BA5\">\n      <meta name=\"description\" content=\"UV 编辑器的中心（也称为“编辑 UVW”对话框）是一个窗口，其中显示纹理坐标，以顶点、边和多边形描绘，统称为子对象。默认情况下，这些与贴图对象的几何体相匹配；通过编辑坐标，可以更改它们相对于对象网格的位置。这样您可以微调纹理贴图与模型的“拟合”。\">\n      <meta name=\"indexterm\" content=\"编辑 UVW 对话框（UVW 展开）\">\n      <meta name=\"indexterm\" content=\"UVW 展开: 编辑 UVW 对话框\">\n      <meta name=\"contextid\" content=\"IDH_UNWRAP_EDIT\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>UV 编辑器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A7CC32F5-40BE-4DE5-A364-05E7986D4BA5\"></a><div class=\"head\">\n            <h1> UV 编辑器</h1>\n         </div>\n         <p class=\"blurb\">UV 编辑器的中心（也称为“编辑 UVW”对话框）是一个窗口，其中显示纹理坐标，以顶点、边和多边形描绘，统称为<em class=\"mild\">子对象</em>。默认情况下，这些与贴图对象的几何体相匹配；通过编辑坐标，可以更改它们相对于对象网格的位置。这样您可以微调纹理贴图与模型的“拟合”。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_B682432360EB4664AF3FFC2F10CF076F\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-CF2D8E8C-A317-434C-A566-24638181E821\">选择对象。 <img src=\"../images/ac.menuaro.gif\"> “修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “UVW 展开” <img src=\"../images/ac.menuaro.gif\"> “打开 UV 编辑器”按钮（在“编辑 UV”卷展栏上）</span> \n               </li>\n            </ul>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3905\"></a>视图窗口显示栅格上叠加的贴图的 2D 图像空间中的 UVW。与显示在图像空间中一样，较粗的栅格线显示纹理贴图的边界；矩形左下角显示坐标 (0,0)，右上角显示坐标 (1,1)。 \n               \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3904\"></a>“编辑 UVW”对话框的状态，包括按钮和选定选项被存储并供您下次打开“编辑”对话框时重新调用。 \n               \n            </p>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA5B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在“UV 编辑器”中，可以编辑面片对象纹理坐标以及网格坐标。在编辑面片对象时，也可以编辑顶点控制柄。另外，可以编辑手动内部控制柄。不过，在应用“展开 UVW”修改器<em class=\"mild\">之前</em>，必须启用手动内部控制柄。为此，应在“面片”子对象层级选择一个或多个面片，右键单击选定面片，然后从四元菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> 工具 1 象限选择“手动内部”。手动内部控制柄在编辑器窗口中显示为孤立顶点。 \n                  \n               </div>\n            </div>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA5C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>某些建模操作可以保留编辑器窗口中显示的未使用（孤立的）贴图顶点，但不能用于贴图。如果模型是“可编辑多边形”或“编辑多边形”对象，可以在“顶点”子对象层级使用“移除未使用的贴图顶点”按钮自动删除这些顶点。 \n                  \n               </div>\n            </div>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA5D\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>编辑器能够显示所选中子对象的数量。该选项可作为“展开 UVW”快捷键，与“显示子对象计数器”一样。 \n                  \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2901\"></a> \n               <h2><a name=\"GUID-614141BE-6CC5-463B-B325-DFAD52A15CD7\"></a>界面\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3903\"></a>除包含窗口以外，编辑器界面还包含一个菜单栏、三个工具栏（上方一个，下方两个），以及右侧的几个卷展栏。 \n                  \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190043CC8\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-961A366F-54B4-4DF0-A0AF-13E64946F274-low.png\"></div>  \n               <p><a name=\"GUID-9153C404-2830-43C2-B956-ADAFFE9F5E53\"></a>编辑器中的大多数工具都适用于选定的子对象。要选择 UVW 子对象，请使用与在视口中使用网格子对象时相同的方法和工具。当拖动一个区域来选择多个子对象时，仅可使用矩形区域，但是该方法支持活动的“窗口/交叉”选择开关设置。 \n                  \n               </p> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043CCA\"></a> \n                  <h3><a name=\"GUID-9F9096C6-F4BC-4CCE-9831-087CDDD1B4E3\"></a>菜单栏\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3902\"></a>通过菜单栏可以访问多种“编辑 UVW”功能。请参见“编辑 UVW”对话框菜单栏。 \n                     	 \n                  </p> \n               </div> \n               <div class=\"section\"><a name=\"SECTION_565EBAD2E9ED44AC9AD81B36B29C75F5\"></a> \n                  <h3><a name=\"GUID-BDD13587-F565-498F-B054-3F504D392C7D\"></a>工具栏和卷展栏\n                  </h3> \n                  <p><a name=\"GUID-E91E9C51-1F62-4914-923D-01A49F4A3541\"></a>通过编辑器工具栏和卷展栏，可以方便地访问用于处理纹理坐标时的常用工具。 \n                     	 \n                  </p> <a name=\"UL_797AFD9546424D7688C8AECFCB176CE9\"></a><ul>\n                     <li> “编辑 UVW”对话框卷展栏 \n                        		\n                     </li>\n                     <li> “编辑 UVW”对话框工具栏 \n                        		\n                     </li>\n                  </ul> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043CCF\"></a> \n                  <h3><a name=\"GUID-7AE01DB2-18C6-45AF-8803-ACE343B6C2FA\"></a>“编辑 UVW”窗口\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-38E6\"></a>使用“编辑 UVW”窗口可以编辑 UVW 子对象以调整模型上的贴图。例如，纹理贴图可包含车的侧视图、俯视图和正视图。首先在“多边形”子对象层级对模型的上面、侧面和前面进行平面贴图，可调整每个选择的纹理坐标以将纹理贴图的不同部分与汽车上的对应区域相适配。\n                     \n                     	 \n                  </p> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-38E5\"></a>要编辑 UVW 顶点，首先选择变换工具和子对象模式，并进行选择，然后在窗口中单击和拖动以变换选择。 \n                     	 \n                  </p> \n                  <div><a name=\"GUID-9A14B91A-FFE4-4027-A52C-D974FB470D1D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 如何在“编辑 UVW”窗口中进行缩放和平移取决于处于活动状态的交互模式（3ds Max 或 Maya）。 \n                        	 \n                     </div>\n                  </div> <a name=\"GUID-8A0F6494-FDE5-4232-A872-0BB95F856C44\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7CB6\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-38E4\"></a>四元菜单</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-44CA\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751ABD\"></a>在窗口中右键单击可显示四元菜单，使用该菜单可以访问所有变换工具以及多个编辑器命令。 \n                              	 \n                           </p> <a name=\"FIG_A0CEE24D053C4B76B7744FD75AAE4DDE\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-125193E1-B19C-48EC-80CC-CBDC0F97B90B-low.png\"></div>  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div>\n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-2AEF6A44-859D-434E-8E08-00D2A480A0CD.htm\">“编辑 UVW”对话框菜单栏</a><p>通过<span class=\"char_link\"><a href=\"GUID-A7CC32F5-40BE-4DE5-A364-05E7986D4BA5.htm\">“编辑 UVW”对话框</a></span>菜单栏可以使用许多重要的编辑命令。这些命令中的一些也在对话框工具栏和“展开 UVW”命令面板上；其他命令，例如“贴图”、“缝合”和“草图”工具，只在菜单上。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-C65A1B09-3670-4E7E-BCFC-13E10C831817.htm\"> “编辑 UVW”对话框工具栏 </a><p>“编辑 UVW”对话框包含三个工具栏：一个在编辑窗口上面和两个在下面。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-9E98AEAC-F06F-4FAD-9091-DCD30AC9BB26.htm\"> “编辑 UVW”对话框卷展栏 </a><p>“编辑 UVW”对话框包含多个卷展栏，提供用于编辑纹理坐标的各种工具。其中一些工具用于按程序变换和细分 UVW，从而为艺术家提供有用的快捷方式以更高效地进行纹理编辑。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-86034121-F9ED-487C-A49F-45299FF7BFE1.htm\">展开 UVW 快捷键</a><p>要使用“展开 UVW”修改器的键盘快捷键，则必须启用<span class=\"char_link\"><a href=\"GUID-C14C1D13-0E8E-4471-9671-077FDFB156C8.htm\">键盘快捷键覆盖切换 </a></span>。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-CD75DC19-4797-4363-942B-BFD305CB6713.htm\">“UVW 编辑器”对话框</a><p>这些主题描述了“展开 UVW”修改器的支持对话框。</p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";