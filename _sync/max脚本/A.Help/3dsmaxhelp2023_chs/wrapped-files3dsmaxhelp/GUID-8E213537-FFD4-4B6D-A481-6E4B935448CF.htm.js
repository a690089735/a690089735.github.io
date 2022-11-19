var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-8E213537-FFD4-4B6D-A481-6E4B935448CF\">\n      <meta name=\"description\" content=\"“蒙皮变形”修改器用于使用骨骼旋转进行变形；即对象网格的变形。“蒙皮变形”用于与“蒙皮”或相当的修改器（例如，“Physique”）一起使用；在蒙皮类型修改器之后添加“蒙皮变形”修改器。在效果应最强的帧处创建变形，然后“蒙皮变形”会根据进行变形的骨骼旋转，自动在变形中设置和取消设置受影响顶点的动画。\">\n      <meta name=\"indexterm\" content=\"蒙皮变形修改器\">\n      <meta name=\"indexterm\" content=\"蒙皮修改器: 蒙皮变形修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 蒙皮变形\">\n      <meta name=\"contextid\" content=\"SKIN_MORPHMOD.MODIFIERS\">\n      <meta name=\"contextid\" content=\"MODIFIERS-SKIN_MORPHMOD\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>蒙皮变形修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-8E213537-FFD4-4B6D-A481-6E4B935448CF\"></a><div class=\"head\">\n            <h1>蒙皮变形修改器</h1>\n         </div>\n         <p class=\"blurb\">“蒙皮变形”修改器用于使用骨骼旋转进行变形；即对象网格的变形。“蒙皮变形”用于与“蒙皮”或相当的修改器（例如，“Physique”）一起使用；在蒙皮类型修改器之后添加“蒙皮变形”修改器。在效果应最强的帧处创建变形，然后“蒙皮变形”会根据进行变形的骨骼旋转，自动在变形中设置和取消设置受影响顶点的动画。\n            \n         </p>\n         <div class=\"bodyReference\">\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BCA\"></a>“蒙皮变形”可使用骨骼进行可修复问题区域的变形，来微调任何帧处的网格变形。通常，在使用骨骼设置角色动画时，必须创建额外的骨骼，才能处理腋窝和腹股沟等问题区域。利用“蒙皮变形”将无需添加额外骨骼，只需创建变形，然后将顶点变换为需要的准确形状。使用“蒙皮变形”，可轻松创建肌肉凸出和多种其他效果。\n               \n            </p>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA05\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在使用“蒙皮变形”时，熟悉<em class=\"mild\">增量</em>的概念非常重要。应用该修改器的帧决定“蒙皮变形”控制的变形动画中使用的每个顶点的基本位置。应用该修改器后，转到变形骨骼的旋转量引起最大变形的帧处，然后变换顶点以进行变形。对顶点的变形程度称为 <em class=\"mild\">增量</em>：基本姿势与变形后的位置之间的差异。 \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2932\"></a> \n               <h2><a name=\"GUID-6BE1CF3C-E1C7-4C38-8E9B-B252B862F3C9\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B0D\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B0E\"></a>要使用“蒙皮变形”（基本用法），请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>使用骨骼和蒙皮的实体网格，使用<span class=\"char_link\"><a href=\"GUID-9596F6EF-3569-44F2-8D6C-6EB58C30BEDD.htm\">蒙皮</a></span>或 <span class=\"char_link\"><a href=\"\">Physique</a></span> 等修改器创建动画角色。 \n                  </li>\n                  <li>转到“姿势帧”，然后应用“蒙皮变形”修改器。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC9\"></a>姿势帧包含初始姿势；一般是一个站立角色，手臂展开，两腿分立。此帧通常为第 0 帧，但也可以是任何帧，甚至是负数编号的帧。这是修改器从中测量 delta（将此姿势与变形后的位置比较而得出的顶点位置变化）值的帧。 \n                     </p> \n                  </li>\n                  <li>确定进行要使用“蒙皮变形”修改的变形使用哪一个骨骼。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC8\"></a>例如，弯曲手臂可能使肘关节内部缩进太大，或者您希望增加二头肌。此时，将对前臂骨骼进行变形。 \n                     </p> \n                  </li>\n                  <li>使用“添加”，将进行变形的骨骼添加到该修改器。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC7\"></a>该修改器沿所添加的每个骨骼的长度叠加一条橙色线。 \n                     </p> \n                  </li>\n                  <li>转到要创建变形的帧处。如果使用手臂弯曲示例，此帧可能是前臂与上臂成 90 度角的帧。 </li>\n                  <li>在列表框中，单击骨骼之一。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC6\"></a>在视口中，代表骨骼的橙色线变为较粗的黄色线，指示将对此骨骼进行变形。 \n                     </p> \n                  </li>\n                  <li>在“局部属性”卷展栏上，单击“创建变形”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC5\"></a>该修改器将变形添加到高亮显示的骨骼，并在此帧处将变形设置为 100%，如列表中变形名旁的数字所示。 \n                     </p> \n                  </li>\n                  <li>在“局部属性”卷展栏上单击“编辑”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC4\"></a>这会在当前帧暂时冻结蒙皮变形。 \n                     </p> \n                  </li>\n                  <li>将顶点移到当前帧上的适当位置。 </li>\n                  <li>再次单击“编辑”可退出此模式，然后测试动画。 </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2931\"></a> \n               <h2><a name=\"GUID-469D2D4B-C21C-46E2-86AD-75FE62B9CC02\"></a>界面\n               </h2> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B0F\"></a> \n                  <h3><a name=\"GUID-D1C2C059-9FE0-45B1-97D4-5E09FC8E2E9A\"></a>蒙皮变形修改器堆栈\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B10\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-99141F65-6C58-4138-A10A-3B9DC8070FF4-low.png\"></div>  <a name=\"GUID-5FEFD40E-8D82-455C-AC19-D2AD162C23A9\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6060\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC3\"></a>点子对象层级</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F30\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC1\"></a>在“点”子对象层级，可查看和选择蒙皮网格上的顶点。但是，您只能在“编辑”模式处于启用状态时变换这些顶点（参见下面的“局部属性卷展栏”）。由于能够在未处于“编辑”模式时选择点，所以可在更便于访问点时进行选择，然后转到姿势，以便在“编辑”模式下编辑这些点。\n                              \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B11\"></a> \n                  <h3><a name=\"GUID-45A2B91A-1270-4942-89C4-3F39F9AFE564\"></a>“参数”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B12\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D77C6C15-5BD2-49F5-B6A5-990D785F13D2-low.png\"></div>  <a name=\"GUID-0606DA5C-7F91-4BFE-B422-39428DBA5A6C\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-605F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC2\"></a>[列表窗口]</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F2F\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC2\"></a>在层次视图中列出所有附着的骨骼和它们的变形。单击列表中变形名旁的 + 或 - 框，可扩展或收缩骨骼变形的列表。在变形名旁边，括号中的数字显示变形对当前帧的相对影响百分比。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC1\"></a>在列表中高亮显示骨骼会在视口中将该骨骼高亮显示为黄色线，并允许您为其创建变形。另外，在修改器的“点”子对象层级处于活动状态时，可单击穿过骨骼中间的橙色线以便在视口中选择它。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BC0\"></a>高亮显示列表中的变形可编辑该变形。要更改变形的名称，请编辑“局部属性”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“变形名称”字段。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-605E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BBF\"></a>添加骨骼</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F2E\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC3\"></a>单击可从“选择骨骼”对话框中添加一个或多个骨骼。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA06\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>为简化操作，请仅添加将进行变形的骨骼。添加任何其他骨骼没有意义。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-605D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BBE\"></a>拾取骨骼</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F2D\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC4\"></a>用于在视口中选择骨骼以添加它们。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BBD\"></a>单击“拾取骨骼”，然后在任何视口中选择骨骼。当“拾取骨骼”处于活动状态时，光标类似于十字并带有“添加骨骼”文字。要退出“拾取骨骼”模式，在活动视口中单击右键或者再次单击“拾取骨骼”。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-605C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BBC\"></a>移除骨骼</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F2C\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC5\"></a>从列表中移除骨骼及其变形。单击列表中的骨骼名，然后单击移除。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BBB\"></a>如果单击移除时高亮显示了一个变形名，其对应骨骼被移除。要仅移除变形，请高亮显示它，然后单击“局部属性”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“删除变形”。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B13\"></a> \n                  <h3><a name=\"GUID-D0319110-6608-49B4-BCA0-24EBE55673DF\"></a>“选择”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B14\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-849BDDEC-6142-439E-B7D4-8F4BCA95B9FC-low.png\"></div>  <a name=\"GUID-B4796143-051D-4A96-9450-431834BCBC8D\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-605B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BBA\"></a>使用软选择</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F2B\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC6\"></a>启用软选择可编辑顶点。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB9\"></a>“蒙皮变形”的“软选择”与 <span class=\"charspan-msgph\">3ds Max</span> 中其他部分的<span class=\"char_link\"><a href=\"GUID-BEF2CC1E-40BE-45DD-A8E9-228EE4A1EE98.htm\">软选择</a></span>功能非常相似，只是它不包含用于直接调整图形形状的“收缩”和“膨胀”设置，并且它使用“半径”设置代替“衰减”来确定软选择区域的范围。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-605A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB8\"></a>半径</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F2A\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC7\"></a>以系统单位数确定软选择区域的范围。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6059\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB7\"></a>边限制</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F29\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC8\"></a>启用时，“蒙皮变形”使用“边限制”数值设置，根据一个或多个选定顶点的边数确定软选择区域的范围。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6058\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB6\"></a>重置图形</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F28\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CC9\"></a>将软选择图形设置为默认值。如果顶点或控制柄不再可见，并因此无法操纵，请使用此控件。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6057\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB5\"></a>[图形]</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F27\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CCA\"></a>“蒙皮变形”提供一个功能完备的小曲线图形，用于全局编辑软选择特征；其作用与 <span class=\"charspan-msgph\">3ds Max</span> 中的其他这类图形（例如<span class=\"char_link\"><a href=\"GUID-6D249F03-8E05-4671-859F-5F61FF1A8A8D.htm\">曲线编辑器</a></span>）相似。图形上方的工具栏提供在图形上移动和缩放点以及插入新点的功能。通过右键单击该图形，也可以使用相同功能。如果右键单击图形中的点，可以将其设置为“角”或两个不同的 Bezier 类型中的一个。如果选择 Bezier 点，可通过移动其控制柄来改变曲线形状。\n                              \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6056\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB4\"></a>环</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F26\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CCB\"></a>首先将顶点选择转换为边选择、选择与选定边平行的所有边，然后将新的边选择重新转换为顶点选择，即可扩展顶点选择。使用“环形”要求存在合格的顶点选择；也就是说，同一个边上至少有两个顶点。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6055\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB3\"></a>循环</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F25\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CCC\"></a>首先将顶点选择转换为边选择、选择所有对齐边，然后将新的边选择重新转换为顶点选择，即可扩展顶点选择。使用“循环”要求存在合格的顶点选择；也就是说，同一个边上至少有两个顶点。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6054\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB2\"></a>收缩</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F24\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CCD\"></a>通过取消选择最外部的顶点来减小顶点选择区域。如果无法再减小选择大小，其余顶点被取消选择。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6053\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB1\"></a>扩大</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F23\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CCE\"></a>朝所有可用方向外侧扩展顶点选择。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B15\"></a> \n                  <h3><a name=\"GUID-FA0432DE-AD1B-4DC4-82B2-4B9BB720645D\"></a>“局部属性”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B16\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0018FC93-7CF5-438C-AD7F-779574418D2E-low.png\"></div>  \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BB0\"></a>此卷展栏包含用于创建和编辑单独变形的功能。“变形名”和“影响角度”等设置特定于每个变形。 \n                  </p> <a name=\"GUID-73A22E07-69AD-4F8C-87F0-37093C957788\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6052\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BAF\"></a>创建变形</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F22\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CCF\"></a>在当前帧为高亮显示的骨骼设置变形。另外，使用骨骼的当前方向为此变形设置“姿势”，并将骨骼设置为 100%，如层次视图中的列表窗口中所示。在编辑变形时，蒙皮的对象恢复到并保持此方向。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BAE\"></a>在创建变形时，修改器会以橙色显示当前姿势（即它们从初始姿势偏移）中包含的所有顶点。另外，修改器为图形创建默认名称，并将其添加为列表窗口中的高亮显示骨骼的子对象。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA07\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>在默认情况下，“显示边”开关已启用，所以更难以看到顶点本身。要仅看到顶点，请禁用“选项”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“显示边”。 \n                              </div>\n                           </div> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA08\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>为帮助跟踪变形，请在创建每个变形时，使用“局部属性”卷展栏重命名它。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6051\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BAD\"></a>删除变形</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F21\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD0\"></a>删除高亮显示的变形，在列表视图中从其父骨骼移除它。仅在高亮显示变形时可用。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6050\"></a><span class=\"term\"><a name=\"WSF742DAB04106313366400BF6112A1CEA097-7EF4\"></a>编辑</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F20\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD1\"></a>用于通过变换顶点来设置当前变形的形状。要退出“编辑”模式，请再次单击“编辑”按钮。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BAC\"></a>在“编辑”模式下变换顶点会创建变形目标。根据进行变形的骨骼的角度，变换的每个顶点在变形值增加到 100.0 时移入变形目标位置（或者方向或缩放），然后在变形值减小时又移出它。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BAB\"></a>在“编辑”模式下变换顶点还会将其颜色从橙色更改为黄色。这样，可轻松看出当前变形包含哪些顶点。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BAA\"></a>选择“编辑”会将蒙皮对象放在此变形的 100%“姿势”方向（请参见上文中的“创建变形”）。它还激活“点”子对象层级，所以可使用标准 <span class=\"charspan-msgph\">3ds Max</span> 变换工具来变换顶点。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-604F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA9\"></a>清除顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F1F\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD2\"></a>在变形中保留选定顶点，但将它们的增量（从初始姿势更改）重置为 0。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-604E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA8\"></a>重置方向</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F1E\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD3\"></a>将图形方向设置为控制变形的骨骼的当前方向。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA7\"></a>因此，可更改具有最强变形效果的角度。例如，如果在第 120 帧创建二头肌，以后又决定肌肉应在第 150 帧处最大，请转到第 150 帧，在列表框中选择变形，然后单击“重置方向”。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-604D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA6\"></a>移除顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F1D\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD4\"></a>从当前变形移除选定顶点，这会删除应用为变形的一部分的所有动画。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA5\"></a>由于移除了不属于变形动画的顶点，所以使用此命令可节约内存。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-604C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA4\"></a>启用</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F1C\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD5\"></a>启用时，变形处于活动状态；禁用时，变形不出现在动画中，且列表框中显示文字“禁用”指示这一点。默认设置为启用。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA3\"></a>使用单独启用和禁用每个变形的功能，可以孤立每个变形的效果或者对它们进行组合测试。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-604B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA2\"></a>变形名</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F1B\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD6\"></a>显示并用于更改当前变形的名称。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-604A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA1\"></a>影响角度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F1A\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD7\"></a>骨骼的当前方向周围的角度，在该范围内变形生效。默认值为 90.0。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3BA0\"></a>这是非常重要的参数。将影响角度想象为围绕骨骼并朝向创建变形时的骨骼方向的一个圆锥体。考虑在其中将“影响角度”设置为默认值 90.0 度的示例。如果骨骼开始旋转时的位置与创建变形时的骨骼方向所成角度大于 45 度，则当时的变形不生效。随着骨骼从\n                              45 度以外向变形方向移动，变形会增加到其最大值。然后，随着骨骼旋转走，变形逐渐减小，直到与变形方向的角度大于或等于 45 度，变形才不再出现。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA09\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>“影响角度”用于孤立变形；也就是说，防止不同变形在同一骨骼上重叠。减少该值，直到在下一次变形开始前，一个变形的效果百分比值（显示在列表框中）衰减到 0.0。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6049\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B9F\"></a>衰减</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F19\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD8\"></a>确定骨骼在其影响角度内移动时，变形的更改速率。使用下拉列表从以下四个不同的衰减类型中选择一个：线性、波形、快速或缓慢。如果选择“自定义衰减”，之后可以单击 G（G 代表图形）按钮，并使用标准曲线图形控件编辑衰减。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA0A\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>第一次访问衰减图形时显示的默认图形中显示“波形”衰减类型。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6048\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B9E\"></a>关节类型</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F18\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CD9\"></a>确定修改器如何跟踪骨骼的角度运动这是每个骨骼，而不是每个图形的设置。默认设置是“球关节”。 \n                           </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B17\"></a><ul>\n                              <li> <em class=\"strong\">球关节</em>跟踪骨骼的所有旋转。在大多数情况下使用此设置。 \n                              </li>\n                              <li> <em class=\"strong\">平面关节</em>仅在骨骼的父骨骼平面上跟踪骨骼的旋转。 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6047\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B9D\"></a>外部网格</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F17\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CDA\"></a>用于使用不同网格作为变形目标。单击该按钮（默认标签为 -无-），然后选择目标对象。目标对象应当与“蒙皮变形”对象具有相同的网格结构。指定外部网格后，其名称显示在按钮上。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B9C\"></a>使用外部网格，可更容易地在使用参考姿势的目标网格中设置变形目标，如果使用其中的各个部分相互穿越的蒙皮动画网格，选择要变形的特定顶点很困难。在此情况下，可能最好启用“只重新加载选定顶点”。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA0B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>外部网格连接不活动；如果在外部网格中编辑顶点，“蒙皮变形”不会自动识别更改。要在编辑外部网格后更新顶点位置，请使用“重新加载目标”（请参见下文）。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6046\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B9B\"></a>重新加载目标</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F16\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CDB\"></a>使用外部网格中的已编辑顶点位置，更新“蒙皮变形”对象。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6045\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B9A\"></a>只重新加载选定顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F15\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CDC\"></a>启用时，“重新加载目标”仅从目标网格复制在“蒙皮变形”网格中选择的顶点位置。禁用时，“重新加载目标”复制所有顶点的位置。默认设置为禁用状态。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B18\"></a> \n                  <h3><a name=\"GUID-64A1DD48-5EAA-4322-9289-02091E0BC305\"></a>“复制和粘贴”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B19\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-4B2B1ABE-1162-4F5C-AB0B-105EE809887A-low.png\"></div>  \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B99\"></a>这些功能用于将特定骨骼的所有变形目标从对象的一侧复制到另一侧。通过在“参数”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> 列表框中高亮显示骨骼或其任何变形，指示要复制的变形。 \n                  </p> <a name=\"GUID-497C7C03-5ACC-4B54-A2A6-E4838FECC42F\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6044\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B98\"></a>粘贴镜像</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F14\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CDD\"></a>将变形从高亮显示的骨骼复制到镜像 gizmo 另一侧的目标。必须存在合格的目标骨骼并显示在列表框中。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA0C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>这仅复制变形数据；目标骨骼的旋转必须与源骨骼的旋转相当，动画中才会出现变形。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6043\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B97\"></a>显示镜像平面</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F13\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CDE\"></a>在视口中，将镜像平面显示为红色矩形 Gizmo。目标骨骼必须位于所高亮显示骨骼的镜像平面的另一侧，并且必须显示在“参数”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> 列表框中。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6042\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B96\"></a>预览骨骼</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F12\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CDF\"></a> 在视口中使用红色高亮显示目标骨骼。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6041\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B95\"></a>预览顶点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F11\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE0\"></a>在视口中使用红色显示可变形的合格顶点，以及源顶点中存在的任何动画。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6040\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B94\"></a>镜像平面</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F10\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE1\"></a>镜像平面的轴。该平面与所指示的轴垂直。默认值为 X。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-603F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B93\"></a>镜像偏移</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F0F\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE2\"></a>“镜像平面”轴上的镜像平面的位置。默认设置是 0.0。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-603E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B92\"></a>镜像阈值</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F0E\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE3\"></a>以系统单位数计的半径值，“蒙皮变形”在镜像平面另一侧的该长度内查找合格的目标骨骼。默认设置为 1.0。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043B1A\"></a> \n                  <h3><a name=\"GUID-63CBAE53-E5DD-4DFD-8080-DC6613466973\"></a>“选项”卷展栏\n                  </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190043B1B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0B994F31-A0A5-49B2-8C23-03F1648933D2-low.png\"></div>  <a name=\"GUID-C51FBC6A-3B6D-47B8-AE3C-C7658928881B\"></a><dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-603D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B91\"></a>初始模式</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F0D\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE4\"></a>启用时，必须使用“创建变形”按钮才能创建变形，使用“编辑”按钮才能编辑变形。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B90\"></a>禁用时，可随时创建和编辑变形。在此模式下，在“点”子对象层级选择和移动顶点时，<span class=\"charspan-msgph\">3ds Max</span> 首先确定选定骨骼的现有变形是否达到 100%；如果是，所有编辑应用于该变形。否则，<span class=\"charspan-msgph\">3ds Max</span> 自动创建一个新变形，然后对该变形应用编辑。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-603C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B8F\"></a>显示驱动器骨骼矩阵</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F0C\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE5\"></a>显示当前骨骼的矩阵三轴架。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-603B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B8E\"></a>显示变形骨骼矩阵</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F0B\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE6\"></a>显示活动变形的方向的三轴架。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-603A\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B8D\"></a>显示当前角度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F0A\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE7\"></a>显示描述驱动器骨骼矩阵与变形骨骼矩阵之间的角度的饼形楔子。以下是颜色标识的说明：红色表示绕 X 轴的角度；蓝色表示绕 Y 轴的角度；绿色表示绕 Z 轴的角度。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6039\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B8C\"></a>显示边</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F09\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE8\"></a>以橙色高亮显示与可变形顶点连接的边。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B8B\"></a>这在“网格平滑”等细分修改器应用于“蒙皮变形”修改器上方的蒙皮网格时使用，用于查看“蒙皮变形”影响的实际网格。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6038\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B8A\"></a>矩阵大小</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F08\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CE9\"></a>每个三轴架的大小。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6037\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3B89\"></a>骨骼大小</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7F07\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751CEA\"></a>骨骼显示的大小。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";