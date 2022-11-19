var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-08EAEC2D-6532-4EE6-94EE-FFCD93581D49\">\n      <meta name=\"description\" content=\"毛皮贴图在对有机体模型（如人物角色和动物）进行贴图时非常有用。该功能提供了一个特殊的编辑器，该编辑器中的可视化缩放器和弹簧可以使您轻松“拖拉”复杂的 UVW 贴图平面。与其他贴图方法相比，采用该方法的结果更接近对象的真实形状，更容易创作出逼真的纹理贴图。\">\n      <meta name=\"indexterm\" content=\"UVW 展开: 毛皮贴图对话框\">\n      <meta name=\"indexterm\" content=\"毛皮贴图对话框（UVW 展开）\">\n      <meta name=\"indexterm\" content=\"贴图: 毛皮（UVW 展开）\">\n      <meta name=\"contextid\" content=\"IDH_UNWRAP_PELTMAP\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“毛皮贴图”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-08EAEC2D-6532-4EE6-94EE-FFCD93581D49\"></a><div class=\"head\">\n            <h1> “毛皮贴图”对话框</h1>\n         </div>\n         <p class=\"blurb\"> 毛皮贴图在对有机体模型（如人物角色和动物）进行贴图时非常有用。该功能提供了一个特殊的编辑器，该编辑器中的可视化缩放器和弹簧可以使您轻松“拖拉”复杂的 UVW 贴图平面。与其他贴图方法相比，采用该方法的结果更接近对象的真实形状，更容易创作出逼真的纹理贴图。\n            \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_42B2B2B0ED0C484CADD793F2BA601067\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-EF9E1496-2F36-48B8-A821-EB8B3CBBC8E1\">“UVW 展开修改器” <img src=\"../images/ac.menuaro.gif\"> “面(多边形)”子对象层级  <img src=\"../images/ac.menuaro.gif\"> “剥”卷展栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-900BFC6A-D52F-4C5B-9134-AC748A1E3C44-low.png\">（毛皮贴图）</span> \n               </li>\n            </ul>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3835\"></a>“毛皮贴图”对话框的主要功能是将 UVW 坐标延伸为统一的平整贴图，然后就可以使用它添加纹理。当该对话框打开时，<em class=\"mild\">拉伸器</em>以点圈的形式出现在“编辑 UVW”对话框窗口中，每个点都与毛皮接缝上的顶点相连。您可以像操纵编辑器中的任何其他顶点一样操纵这些顶点，例如进行选择、旋转和移动等。使用对话框中提供的其他特殊功能可拉直拉伸器顶点，将它们捕捉到皮毛接缝等。 \n               \n            </p><a name=\"WS1A9193826455F5FFBA679E112A6A190043D00\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-72280016-FF0A-41E3-A8E4-7639DE87C800-low.png\"><p class=\"figure-title\">拉伸器点围绕“编辑 UVW”对话框窗口中的毛皮 UV。</p>\n            </div>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3834\"></a>连接拉伸器顶点和毛皮接缝顶点的线所起的是弹簧作用，它以动画模拟的方式将毛皮接缝向外拉伸。设置了毛皮 UV 和拉伸器的形状后，单击“模拟 Pelt 拉伸”按钮来运行模拟。可能需要进一步的调整和模拟，这由结果来定。 \n               \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3833\"></a>“毛皮”模式处于活动状态且“编辑 UVW”对话框打开时，大多数标准的 UVW 编辑功能也仍然可用。例如，并非拉伸整个毛皮，您可以选择拉伸 UV 的一个子集。要访问在“毛皮”模式下不可用的任何命令（如“贴图”菜单命令），只需要关闭“毛皮贴图”对话框。\n               \n               \n            </p>\n            <div class=\"section\"><a name=\"WS73099CC142F4875535A241551166AC8792F-ABA\"></a> \n               <h2><a name=\"GUID-92ED9011-E5AC-437D-A0D6-7E35D3841E73\"></a>步骤\n               </h2> <a name=\"WSF742DAB04106313366400BF6112A1CEA097-7ECE\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043CB2\"></a>要使用“毛皮”贴图，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>将“展开 UVW ”应用于该对象。 \n                     	 \n                  </li>\n                  <li>进行以后可以转换为毛皮接缝的边选择。在这里不一定非要执行此操作，但是修改器的“边”子对象级提供了方便的“环形”和“循环”工具和其他功能按钮，来自动展开和缩放边选择。 \n                     		\n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA50\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>创建毛皮接缝是讲究艺术效果的工作，而不是死板地按部就班。使网格平躺的方式可视化，然后选择边以使 UV 能够以一种自然的方式进行分割。 \n                           		\n                        </div>\n                     </div> \n                  </li>\n                  <li>转到修改器的“面”子对象层级，并选择要进行毛皮贴图的面。要选择所有面，请按 <span class=\"keyboardEntry\">Ctrl+A</span> 组合键。 \n                     	 \n                  </li>\n                  <li>如果在第 2 步中选择了边，则单击“剥”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-E224E8AD-843C-4DCF-BD7E-4128A32055DB-low.png\">（将边选择转换为接缝）。该操作会将边选择复制到接缝。 \n                     		\n                     <p><a name=\"GUID-00BA6BBB-1351-4142-B80F-0EB39D6916AA\"></a>或者，如果未选择要转换为接缝的边，请使用 <img src=\"../images/GUID-0E7EBA02-5C9E-4066-B2CC-EF9DC5156851-low.png\">（编辑接缝）和/或 <img src=\"../images/GUID-78AD25A2-192A-4A97-8410-73AF49AD18ED-low.png\">（点到点接缝）来指定视口中的接缝。 \n                        		\n                     </p> \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-394B\"></a>毛皮接缝在网格上显示为蓝线。 \n                        		\n                     </p> \n                  </li>\n                  <li>如果不需要对整个网格进行毛皮贴图，那么可能需要对毛皮接缝包围的区域进行贴图。单击区域中的面进行贴图，然后单击 <img src=\"../images/GUID-AFC9177C-9578-4BDF-88FC-B5807BAE312A-low.png\">（将面选择转换为接缝）。 \n                     		\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-394A\"></a>这会将面选择扩展到接缝定义的整个区域。 \n                        		\n                     </p> \n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA51\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>一次只能对一个这样的区域进行毛皮贴图。 \n                           		\n                        </div>\n                     </div> \n                  </li>\n                  <li>在“剥”卷展栏上，单击 <img src=\"../images/GUID-900BFC6A-D52F-4C5B-9134-AC748A1E3C44-low.png\">（毛皮）。 \n                     		\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3949\"></a>该操作将打开“毛皮贴图”对话框。还将打开“编辑 UVW”对话框，如有必要，可在编辑器窗口中显示毛皮 UVW 和拉伸器。默认情况下，拉伸器显示为中心位于毛皮 UVW 上的一个点圈，只有拉伸器的顶点处于选中状态。用虚线表示的弹簧连接拉伸器点和毛皮接缝的顶点。\n                        \n                        		\n                     </p> \n                  </li>\n                  <li>如有必要，旋转“毛皮 UV”以使贴图坐标的方向正确，旋转拉伸器以使弹簧形成对称图案。通常需要调整到左右对称。 \n                     		\n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA53\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>使用 <span class=\"keyboardEntry\">Ctrl</span> 并单击添加到现有的选择内容，如视口中所示。 \n                           		\n                        </div>\n                     </div> \n                  </li>\n                  <li>在“毛皮贴图”对话框中单击“开始毛皮”。 \n                     		\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3948\"></a>弹簧收缩，将毛皮接缝顶点朝拉伸器点拖动。该操作也影响内部的 UV 顶点。可以使用“毛皮选项”卷展栏中的“衰退”设置调整它们受影响的程度。 \n                        		\n                     </p> \n                  </li>\n                  <li>模拟持续运行，直到您单击“停止皮毛”按钮才可以停止模拟。在您对解决方案满意或者希望进行某些调整时，请执行上述操作。 \n                     	 \n                  </li>\n                  <li>继续调整拉伸器点、贴图顶点、对话框设置等等，然后再次运行解决方案直至得到想要的结果。如果事情失去了控制，只需撤消所执行的操作，或单击“重置”并重新开始。 \n                     	 \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-28FC\"></a> \n               <h2><a name=\"GUID-BAE04DB8-9693-4D68-A412-6ADF211BDF05\"></a>界面\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3832\"></a>主要的“毛皮贴图”命令可通过“快速毛皮”卷展栏中的按钮激活。该对话框上的其他功能能够使您调整各种拉伸参数。 \n                  \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190043D01\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0A08E272-C880-4F78-8078-681A13E90E4C-low.png\"></div>  \n               <div class=\"section\"><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-4619\"></a> \n                  <h3><a name=\"GUID-0AF6223D-148E-4879-8FBE-8E8BC5CD25B9\"></a>“快速毛皮”卷展栏\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3820\"></a>这些是用于模拟的主要控件，其中与拉伸器连接的弹簧将把毛皮接缝顶点拉开，以展平 UV。为得到最佳结果，请在运行模拟（单击“开始毛皮”）和松弛网格之间交替。 \n                     	 \n                  </p> <a name=\"GUID-9AB77098-25EA-48B7-AF29-D8FF3494977E\"></a><div class=\"dl_section\"><a name=\"GUID-B3C6FD87-25DD-4E68-8A14-49FD87AF7059\"></a><p class=\"title\"><a name=\"GUID-512E64D2-349C-4EA8-B1FC-E48AD6DBC814\"></a>“毛皮”组\n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C43\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-381A\"></a>开始毛皮</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4450\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B47\"></a>运行该模拟，将毛皮接缝顶点拉向拉伸器点。模拟将持续运行，直到您通过按下 <span class=\"keyboardEntry\">Esc</span> 键或单击“停止毛皮”（同一个按钮）停止模拟。还可以单击对话框底部的“重设”、“提交”或“取消”停止模拟。 \n                                 	 \n                              </p> \n                              <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-229B\"></a>皮毛只影响选定的纹理顶点。但是，如果未选定任何纹理顶点，皮毛将影响所有这些顶点。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C42\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-381F\"></a>重置</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-444F\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B43\"></a>停止正在运行的模拟，然后将皮毛和拉伸器返回到其原始条件。 \n                                 	 \n                              </p> \n                              <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-3966\"></a>还可以通过单击“提交”或“取消”退出皮毛贴图模式，然后再次单击“皮毛”按钮，来重置毛皮。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C41\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-381D\"></a>模拟采样</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-444E\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B44\"></a>围绕在模拟中使用的每个毛皮接缝点的采样的数量。较高的值将会导致较大的拉伸效果。默认值为 5。范围为 1 至 50。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C40\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-3965\"></a>显示本地扭曲</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-444D\"></a> \n                              <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-3964\"></a>启用此选项后，可描述可见面（即启用“<span class=\"char_link\"><a href=\"GUID-C65A1B09-3670-4E7E-BCFC-13E10C831817.htm#WS73099CC142F4875514C01AC112A7ACEF16-38DA\">仅显示选定的面</a></span>”后在视口中选定的面）的纹理顶点和网格顶点之间的差异。有关详细信息，请参见<span class=\"char_link\"><a href=\"GUID-2AEF6A44-859D-434E-8E08-00D2A480A0CD.htm#WS73099CC142F4875514C01AC112A7ACEF16-3875\">显示边扭曲</a></span>。 \n                                 	 \n                              </p> \n                              <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-3963\"></a>通常，显示边扭曲时，<span class=\"charspan-msgph\">3ds Max</span> 会考虑整个网格。因此，仅在部分网格（例如，角色的头部）上使用毛皮贴图时，会产生对扭曲不切实际的描述。有关您当前进行毛皮贴图的网格部分的扭曲边更精确的描述，请启用该选项，启用“过滤选定面”，然后在视口中只选择您当前进行毛皮贴图的面。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-747B09CB-248D-462A-9A07-D408FB6C0577\"></a><p class=\"title\"><a name=\"GUID-7FA63DB0-72B5-4705-83A9-0271968ADAFB\"></a>“松弛”组\n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C3F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-381C\"></a>开始松弛</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-444C\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B45\"></a>规格化贴图顶点之间的距离松弛进程将持续运行，直到您通过按下 <span class=\"keyboardEntry\">Esc</span> 键或单击“停止松弛”（同一个按钮）停止松弛。 \n                                 	 \n                              </p> \n                              <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-229A\"></a>松弛仅影响选定的纹理顶点。但是，如果未选定任何纹理顶点，松弛将影响所有这些顶点。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C3E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-381B\"></a>设置</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-444B\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B46\"></a>打开<span class=\"char_link\"><a href=\"GUID-48B2004C-9A5C-43BE-9040-5EE34E3F38E3.htm\">“松弛工具”对话框</a></span>，设置松弛参数。该对话框打开后，可以单击该对话框中的按钮或“毛皮贴图”对话框中的“开始松弛”按钮开始松弛。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-4616\"></a> \n                  <h3><a name=\"GUID-B821E22F-EEB2-418B-84C9-F31E4E130BB3\"></a>“毛皮选项”卷展栏\n                  </h3> <a name=\"GUID-5986C9B6-A02C-47F2-A120-FA9EB56CE441\"></a><div class=\"dl_section\"><a name=\"GUID-BAEED451-B3C0-4EEC-98F1-E8BEE9FCB112\"></a><p class=\"title\"><a name=\"GUID-CF5C40A5-12F8-4AC3-B06D-DABEE31BA4BB\"></a>“拉伸器”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3831\"></a>可使用这些工具调整拉伸器的形状。 \n                        	 \n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C3D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-382D\"></a>拉直拉伸器</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-444A\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B39\"></a>可使您通过移动点为拉伸器指定多边形轮廓。当该模式处于活动状态时，移动一个拉伸器顶点，然后再移动一个不相临的点，以在两个顶点之间将所有居间顶顶点排成一条直线。该过程是完全交互的，当您移动第二个顶点时，居间顶点将不断改变位置以保持直线。继续移动顶点以创建一个多边形轮廓，如要退出，再单击“拉直拉伸器”。\n                                 \n                                 	 \n                              </p> \n                              <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA6B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当“拉直拉伸器”处于活动状态时，您可以使用上下文控件（鼠标中键分别拖或滚动鼠标滚轮）在任何时候平移和缩放编辑器窗口来访问该窗口的不同部分。进行此操作后，<span class=\"charspan-msgph\">3ds Max</span> 仍然会记住最后拖动的顶点，并在该顶点和要拖动的下一个顶点之间绘制一条直线。类似地，您可以使用<span class=\"char_link\"><a href=\"GUID-C65A1B09-3670-4E7E-BCFC-13E10C831817.htm#SECTION_350062D850ED43BE98E40A3A85C09BCC\">控制按钮</a></span>调整该窗口，然后返回到拉直拉伸器。如果该控制要求进行多个单击，如“平移”，则在窗口中右击退出该控制，然后返回拉直拉伸器。 \n                                    	 \n                                 </div>\n                              </div> \n                              <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA6C\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>要为拉伸器创建一个对称的轮廓，请在一侧创建轮廓，然后使用“镜像拉伸器”（请参见下文）。 \n                                    	 \n                                 </div>\n                              </div> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C3C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-382F\"></a>捕捉到接缝</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4449\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B38\"></a>将所有拉伸器点与毛皮 UV 上的边接缝对齐。这会使拉伸器呈现毛皮的轮廓。 \n                                 	 \n                              </p> \n                              <div><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-2299\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>为获得最佳效果，仅在拉伸后使用该命令。 \n                                    	 \n                                 </div>\n                              </div> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C3B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-382C\"></a>镜像拉伸器</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4448\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B3A\"></a>将拉伸器点从镜像轴（如下所述）的一侧镜像到另一侧。默认情况下，“镜像拉伸器”将点从右侧镜像到左侧。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C3A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-382B\"></a>镜像轴</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4447\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B3B\"></a>能够使您指定镜像轴的方向。该轴的形式是由三条黄线组成的 T。T 的腿表示使用“镜像拉伸器”时将被镜像的一侧（参见前面），水平线表示发生镜像的轴。默认值为 0.0。范围为 0.0 至 360.0。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-09B0A986-8DF8-4F65-9D2C-190EA38DC675\"></a><p class=\"title\"><a name=\"GUID-5D2D35B5-3BE5-4CF8-810B-4FED3C54D162\"></a>“选择”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-382A\"></a>这些控件能够使您选择所有拉伸器点或毛皮 UV。对于其他选择方法，当您使用上述任何一种方法添加到当前选择时，可以按住 <span class=\"keyboardEntry\">Ctrl</span> 键。也就是说，要选择所有拉伸器点和毛皮 UV，单击一个按钮，按住 <span class=\"keyboardEntry\">Ctrl</span>，然后单击另一个按钮。 \n                        	 \n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C39\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3829\"></a>选择拉伸器</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4446\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B3C\"></a>选择所有的拉伸器点。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C38\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3828\"></a>选择 Pelt UV</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4445\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B3D\"></a>选择所有毛皮纹理顶点。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div>\n                  <div class=\"dl_section\"><a name=\"GUID-50EA13D6-B137-485D-BBCE-CAF70AED1597\"></a><p class=\"title\"><a name=\"GUID-12D7FD99-2CF7-4C38-9961-F62D7CFCE672\"></a>“弹簧”组\n                     </p>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3827\"></a>这些参数控制用来拉伸毛皮的弹簧。大多数情况下您不需要改变这些值，但是“拉力强度”可能除外。 \n                        	 \n                     </p>\n                     <dl>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C37\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3826\"></a>拉力强度</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4444\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B3E\"></a>单击“模拟 Pelt 拉伸”时拉伸动作的数量级。默认值为 0.1。范围为 0.0 至 0.5。 \n                                 	 \n                              </p> \n                              <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3825\"></a>如果拉伸太过平缓，提高“拉力强度”以得到一个更强大的拉伸动作。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C36\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3823\"></a>阻尼</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4443\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B40\"></a>对拉伸动作应用阻尼或抑制因子。阻尼值越高，对拉伸器的抑制就越大。默认值为 0.16。范围为 0.0 至 0.5。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C35\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3824\"></a>刚度</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4442\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B3F\"></a>设置弹簧拉伸的速率。刚度值越高，拉伸动作越生硬。默认值为 0.16。范围为 0.0 至 0.5。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C34\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3822\"></a>衰退</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4441\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B41\"></a>每个毛皮接缝顶点对其他贴图顶点影响的衰减速率。较高的衰退值通常会导致非常大的拉伸，或得到不希望出现的结果。要得到最佳结果，请保持较低的衰退值。默认值为 0.25。范围为 0.0 至 0.5。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                        <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7C33\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3821\"></a>锁定开放边</span></dt>\n                        <dd>\n                           <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4440\"></a> \n                              <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751B42\"></a>将开放边锁定在适当的位置。这通常适用于对毛皮区域中贴图顶点的部分选择使用拉伸器。启用“锁定打开边”时，未选定顶点旁边的选定顶点在拉伸期间很可能会停留在原位置。禁用“锁定打开边”时，选定顶点很可能会离开未选定顶点。 \n                                 	 \n                              </p> \n                           </div>\n                        </dd>\n                     </dl>\n                  </div> \n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";