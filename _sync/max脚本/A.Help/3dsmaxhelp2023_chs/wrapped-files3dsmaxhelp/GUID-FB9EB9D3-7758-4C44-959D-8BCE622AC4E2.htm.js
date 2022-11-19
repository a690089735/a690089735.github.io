var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-FB9EB9D3-7758-4C44-959D-8BCE622AC4E2\">\n      <meta name=\"description\" content=\"边是一条线，可见或不可见，组成面的边并连接两个顶点。两个面可以共享一条边。\">\n      <meta name=\"indexterm\" content=\"可编辑网格: 边\">\n      <meta name=\"indexterm\" content=\"曲面: 曲面属性卷展栏（可编辑网格边）\">\n      <meta name=\"indexterm\" content=\"边: 创建图形\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>可编辑网格（边）</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FB9EB9D3-7758-4C44-959D-8BCE622AC4E2\"></a><div class=\"head\">\n            <h1>可编辑网格（边）</h1>\n         </div>\n         <div class=\"abstract\"> \n            <p><a name=\"GUID-48AAA24A-C21C-4EB5-907F-D51175D348FA\"></a> <img src=\"../images/GUID-40E81B98-4547-417A-9506-2B2FED0FF2BF-low.png\"> \n            </p> \n            <p class=\"blurb\">边是一条线，可见或不可见，组成面的边并连接两个顶点。两个面可以共享一条边。 \n               	 \n            </p> \n         </div><a name=\"UL_9675E81B50794289BD6087C8B8FFE311\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-728D3D5E-A5F5-41E5-97A8-242BBBC4BFE8\">选择可编辑网格对象。 <img src=\"../images/ac.menuaro.gif\"> “修改”面板  <img src=\"../images/ac.menuaro.gif\"> “选择”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “边”</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-1ED1317F-A8FB-4FBE-B583-4AB45A017202\">选择可编辑网格对象。 <img src=\"../images/ac.menuaro.gif\"> “修改”面板  <img src=\"../images/ac.menuaro.gif\">  修改器堆栈显示  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-8A80D084-989D-4519-B2B8-58DA3F8B3588-low.png\"> 展开“可编辑网格”项目。 <img src=\"../images/ac.menuaro.gif\"> “边”</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-72018C1C-C4FC-4AC2-B525-38DF0131F829\">选择可编辑网格对象。 <img src=\"../images/ac.menuaro.gif\">  四元菜单  <img src=\"../images/ac.menuaro.gif\"> “工具 1”象限  <img src=\"../images/ac.menuaro.gif\"> “边”</span> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-731B\"></a>在“可编辑网格（边）”子对象层级上，可以选择一个或多个边，然后使用标准方法对其进行变换。 \n            	 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7319\"></a> \n            <h2><a name=\"GUID-4B553354-8E70-4825-9849-D0B6C4AA2D13\"></a>步骤\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190041BC5\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041BC6\"></a>要从一条或多条边创建形状，请执行下列操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li> 选择要形成图形的边。 \n                  		  \n               </li>\n               <li>在“编辑几何体”卷展栏上，单击“从边创建图形”。 \n                  		  \n               </li>\n               <li>在出现的“创建图形”对话框上，根据需要进行修改。 \n                  			 <a name=\"WS1A9193826455F5FFBA679E112A6A190041BC7\"></a><ul>\n                     <li>输入曲线名称或保持默认设置。 \n                        				\n                     </li>\n                     <li>选择“平滑”或“线性”作为图形类型。 \n                        				\n                     </li>\n                     <li>启用“忽略隐藏边”从计算中排除隐藏边，或者禁用此功能。 \n                        				\n                     </li>\n                  </ul> \n               </li>\n               <li>单击“确定”。 \n                  			 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7318\"></a>产生的图形由一条或多条样条线组成，它们的顶点与选定边的顶点重合。“平滑”选项用平滑值生成顶点，而“线性”选项产生具有角顶点的线性样条线。 \n                     			 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7317\"></a>区域选择边时，将高亮显示所有选中的边，包括隐藏边，隐藏边以虚线显示。默认情况下，“创建图形”函数忽略隐藏边，即便它们处于选中状态。如果想在计算中包含隐藏边，请禁用“忽略隐藏边”选项。 \n                     			 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7316\"></a>如果选定边不连续或存在分支，生成的图形将包含多条样条线。当“创建图形”函数遇到边上的“Y”型分支时，它将任意决定由哪条边产生哪条样条线。要控制这种情况，请选择仅会产生单一样条线的边，然后重复使用“创建图形”来产生正确数量的图形。然后，使用“可编辑样条线”中的“附着”，将各个图形组合成一个图形。\n                     \n                     			 \n                  </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041BCA\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1685A11F-8C4B-4434-A523-0426BDC94F54-low.png\"></div>  \n                  <p><a name=\"GUID-D325122C-D5CF-4744-9892-41942C431B19\"></a> <em class=\"strong\">顶部：原始对象</em> \n                  </p> \n                  <p><a name=\"GUID-D0D29222-C34D-4B72-9F38-57A2D43A5E36\"></a> <em class=\"strong\">底部：选定边的对象</em> \n                  </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041BCB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-EB78C15D-224C-4F5C-8148-B23C5B164A35-low.png\"></div>  \n                  <p><a name=\"GUID-847DFBC8-68D8-421E-964A-596ABD88C914\"></a> <em class=\"strong\">顶部：从原始对象移除的选定边</em> \n                  </p> \n                  <p><a name=\"GUID-A73B9340-3E34-48F8-822C-73231C5FEFE3\"></a> <em class=\"strong\">底部：移除的不需要的边</em> \n                  </p> \n               </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7315\"></a> \n            <h2><a name=\"GUID-99EA0613-E103-4DCF-8F53-7E56B9887B07\"></a>界面\n            </h2> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FF-6B86D352127E4CDBFBA-776A\"></a> \n               <h3><a name=\"GUID-0CAE935A-A33A-4951-B0AB-02A6485D59E8\"></a>“选择”卷展栏\n               </h3> \n               <p><a name=\"WS1A9193826455F5FF-6B86D352127E4CDBFBA-7769\"></a>有关“选择”卷展栏设置的信息，请参见<span class=\"char_link\"><a href=\"GUID-6E8FC133-93D1-41ED-A7EA-43AFC2DD1B3F.htm\">“选择”卷展栏（可编辑网格）</a></span>。 \n                  		  \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041BCD\"></a> \n               <h3><a name=\"GUID-206F1A87-EC3B-4454-B535-A979F45DB0AB\"></a>“软选择”卷展栏\n               </h3> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7313\"></a>“软选择”控件影响子对象的“移动”、“旋转”和“缩放”功能操作。当这些处于启用状态时，<span class=\"charspan-msgph\">3ds Max</span> 将样条线曲线变形应用到变换的选定子对象周围的未选择顶点。这提供一种类似磁场的效果，在变换周围产生影响的球体。 \n                  		  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7312\"></a>详细信息，请参见<span class=\"char_link\"><a href=\"GUID-BEF2CC1E-40BE-45DD-A8E9-228EE4A1EE98.htm\">“软选择”卷展栏</a></span>。 \n                  		  \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041BCE\"></a> \n               <h3><a name=\"GUID-9DD4F4E0-03E7-4D82-B61F-7F12C67A2914\"></a>“编辑几何体”卷展栏\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190041BCF\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-EA6AF9DA-E7C9-45C7-B9FC-722952ACFA49-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7311\"></a>有关这些控件的详细说明，请参见<span class=\"char_link\"><a href=\"GUID-89D446C3-87F6-4A26-B168-2398E715F87A.htm\">“编辑几何体”卷展栏（网格）</a></span>。 \n                  		  \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041BD1\"></a> \n               <h3><a name=\"GUID-ACBAD6AF-0AD5-4232-8022-B924A57CE843\"></a>“曲面属性”卷展栏\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190041BD2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1134039D-A603-4543-8EA2-DAAAC885DD56-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7310\"></a>这些控件影响边的可见性。不可见边（也称为构建线）出现在视口中，当禁用“仅显示边”或在“边”的子对象层级上进行编辑时，出现在“显示”命令面板中。当使用线框材质渲染对象时，边的可见性非常重要。 \n                  		  \n               </p> <a name=\"GUID-7775EE9D-638B-4BB9-8C14-7C91E038006D\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1BF1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-730F\"></a>可见</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF211A40BE11DCC57291C36CA\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752EBD\"></a>使选中的边可见。 \n                           		  \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1BF2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-730E\"></a>不可见</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF211A40BE11DCC57291C36CB\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752EBE\"></a>使选定的边不可见，使它们不会显示在“仅显示边”模式中。 \n                           		  \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-94DCBFD8-C5C8-44B7-8B07-C45B53CE918A\"></a><p class=\"title\"><a name=\"GUID-C62A198A-3D73-444A-BE28-4BFDB0463DFF\"></a>“自动边”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1BF3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-730D\"></a>自动边</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF211A40BE11DCC57291C36CC\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752EBF\"></a>根据共享边的面之间的夹角来确定边的可见性，面之间的角度由该选项右边的“阈值”微调器设置。 \n                              		  \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-730C\"></a>单击“自动边”可以产生以下三种效果之一，这取决于激活了哪个单选按钮：（“设置”意味着让不可见边可见；“清除”意味着让可见边不可见） \n                              		  \n                           </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041BD4\"></a><ul>\n                              <li><em class=\"strong\">设置和清除边可见性</em>根据“阈值”设定更改所有选定边的可见性。 \n                                 			 \n                              </li>\n                              <li><em class=\"strong\">设置</em>当边超过了“阈值”设定时，使原先可见的边变为不可见；但不清除任何边。 \n                                 			 \n                              </li>\n                              <li><em class=\"strong\">清除</em>当边小于“阈值”设定时，使原先不可见的边可见；不让其他任何边可见。 \n                                 			 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div> \n         </div>\n         <div class=\"related-links\">\n            <h4 class=\"related\">\n               <p class=\"title\"><a name=\"GUID-B7491B13-9DB9-4A5E-96B4-797150FF6075\"></a>相关信息\n               </p>\n            </h4>\n            <ul>\n               <li><span class=\"char_link\"><a href=\"GUID-3CBF3773-3CDC-4ED7-8C34-D0EAF9CD9F66.htm\">可编辑网格曲面\n                        		  </a></span></li>\n            </ul>\n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-54356FD5-9320-4C31-AD92-A9C234A4C22B.htm\"> 图形</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-2C16FF31-BF20-450F-8163-3362A7037603.htm\">可编辑多边形（边）</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-36DF6364-2624-4CE1-8AC0-5CEED91CB393.htm\">挤出修改器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-9353AF31-45CC-48BA-8B94-2CC5E050F928.htm\">车削修改器</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";