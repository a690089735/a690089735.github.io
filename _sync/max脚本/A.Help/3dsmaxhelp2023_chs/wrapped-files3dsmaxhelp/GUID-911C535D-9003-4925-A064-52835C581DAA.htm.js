var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-911C535D-9003-4925-A064-52835C581DAA\">\n      <meta name=\"description\" content=\"修改器堆栈及其编辑对话框是管理所有修改方面的关键。使用这些工具可以执行以下操作：\">\n      <meta name=\"indexterm\" content=\"修改器堆栈: 使用\">\n      <meta name=\"indexterm\" content=\"堆栈: 使用\">\n      <meta name=\"indexterm\" content=\"显示: 显示最终结果（修改器堆栈）\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>使用修改器堆栈</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-911C535D-9003-4925-A064-52835C581DAA\"></a><div class=\"head\">\n            <h1>使用修改器堆栈</h1>\n         </div>\n         <p class=\"blurb\">修改器堆栈及其编辑对话框是管理所有修改方面的关键。使用这些工具可以执行以下操作： </p>\n         <div class=\"bodyReference\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004349D\"></a><ul>\n               <li>找到特定修改器，并调整其参数。 </li>\n               <li>查看和操纵修改器的顺序。 </li>\n               <li>在对象或对象集合之间对修改器进行复制、剪切和粘贴。 </li>\n               <li>在堆栈，视口显示，或两者中取消激活修改器的效果。 </li>\n               <li>选择修改器的组件，例如 gizmo 或中心。 </li>\n               <li>删除修改器。 </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004349E\"></a> \n               <h2><a name=\"GUID-6265C9A8-EB92-40D4-8B46-18804113DDDD\"></a>检查修改器堆栈\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46E2\"></a>修改器堆栈（或简写为“堆栈”）是“修改”面板上的列表。它包含有累积历史记录，上面有选定的对象，以及应用于它的所有修改器。 \n               </p> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46E1\"></a>在内部，<span class=\"charspan-msgph\">3ds Max</span> 会从堆栈底部开始“计算”对象，然后顺序移动到堆栈顶部，对对象应用更改。因此，应该从下往上“读取”堆栈，按照 <span class=\"charspan-msgph\">3ds Max</span> 使用的序列来显示或渲染最终对象。 \n               </p> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46E0\"></a>此处是一个例子，胶囊对象的堆栈项（扩展基本体）： \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004349F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0A599E93-5BC9-4616-BB62-F954185FC569-low.png\"></div>  <a name=\"WS1A9193826455F5FFBA679E112A6A1900434A1\"></a><ul>\n                  <li>在堆栈的底部，第一个条目始终列出对象的类型（在这个例子中，是“胶囊”）。单击此条目即可显示原始对象创建参数，以便可以对其进行调整。如果还没应用过修改器，那么这就是堆栈中唯一的条目。 </li>\n                  <li>在对象类型之上，会显示对象空间修改器。单击修改器条目即可显示修改器的参数，可以对其进行调整，或者删除修改器。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46DE\"></a><img src=\"../images/GUID-8A80D084-989D-4519-B2B8-58DA3F8B3588-low.png\">如果修改器有子对象（或子修改器）级别，那么它们前面会有加号或减号图标。请参见<span class=\"char_link\"><a href=\"GUID-B587E47C-BA3A-4031-AC17-C13B400C238A.htm\">在子对象层级使用堆栈</a></span>。 \n                     </p> \n                  </li>\n                  <li>在堆栈顶部，是绑定到对象的世界空间修改器和空间扭曲。（在示例图中，“置换网格”是世界空间修改器。）这些总是会在顶部显示，称作“绑定”。 </li>\n               </ul> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900434A2\"></a> \n               <h2><a name=\"GUID-8A181D18-5B62-4B37-A6E0-51EB78DBAD70\"></a>使用堆栈的基础知识\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46DD\"></a>堆栈的功能是不需要做永久修改。单击堆栈中的项目，就可以返回到进行修改的那个点。然后可以重做决定，暂时禁用修改器，或者删除修改器，完全丢弃它。也可以在堆栈中的该点插入新的修改器。所做的更改会沿着堆栈向上摆动，更改对象的当前状态。 \n               </p> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900434A3\"></a> \n                  <h3><a name=\"GUID-0B4C64DB-66EC-4212-A21D-E726A7F8F2CE\"></a>添加多个修改器\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46DC\"></a>可以向对象应用任意数目的修改器，包括重复应用同一个修改器。当开始向对象应用对象修改器时，修改器会以应用它们时的顺序“入栈”。第一个修改器会出现在堆栈底部，紧挨着对象类型出现在它上方。 \n                  </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900434A4\"></a><ul>\n                     <li><span class=\"charspan-msgph\">3ds Max</span> 会将新的修改器插入到堆栈中当前选择的上面，紧挨着当前选择，但是总是会在合适的位置。如果试图在两个对象空间修改器之间插入一个世界空间修改器，那么 <span class=\"charspan-msgph\">3ds Max</span> 会自动将它放在堆栈顶部。 \n                     </li>\n                     <li>当在堆栈中选择了对象类型，并应用了新的对象空间修改器之后，它会出现在紧挨着对象类型的上面，成为第一个要计算的修改器。 </li>\n                  </ul> \n               </div> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900434A5\"></a> \n                  <h3><a name=\"GUID-6CAFBFC2-7F9A-4FDC-A2CC-6CDBEFDAF408\"></a>堆栈顺序的效果\n                  </h3> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46DB\"></a><span class=\"charspan-msgph\">3ds Max</span> 会以修改器的堆栈顺序应用它们（从底部开始向上执行，变化一直积累），所以修改器在堆栈中的位置是很关键的。 \n                  </p> \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46DA\"></a>下面的图显示的是，堆栈中的两个修改器，如果执行顺序颠倒过来，那么对象会有什么变化。在左手边的管道，是先应用了一个“锥化”修改器，后应用了一个“弯曲”修改器，在右手边的管道，先应用的是“弯曲”。 \n                  </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900434A6\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2C239C5F-A5F6-4696-861B-BEC2304CAB5B-low.png\"><p class=\"figure-title\">颠倒堆栈中两个修改器的顺序之后，产生的结果</p>\n                  </div>  \n               </div> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900434A7\"></a> \n               <h2><a name=\"GUID-7690BFBB-804F-4BB3-BFD5-3C80C2CBAB3A\"></a>使用按钮\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46D9\"></a>以下这些按钮（就在修改器堆栈下面）可用来管理堆栈： \n               </p> <a name=\"GUID-C60C80CE-98AE-4F87-9B31-04FFC789B833\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861D43\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46D8\"></a><img src=\"../images/GUID-85D572CA-F480-4775-80DB-1F729D40C20E-low.png\"> 锁定堆栈</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4322\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87521F9\"></a>将堆栈和“修改”面板上的所有控件锁定到选定对象的堆栈。即使在选择了视口中的另一个对象之后，也可以继续对锁定堆栈的对象进行编辑。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861D44\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46D7\"></a><img src=\"../images/GUID-4CD02AD7-7D68-49D4-BA3D-D1F7A8DD642C-low.png\"> 显示最终结果</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4321\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87521FA\"></a>启用此选项后，会在选定的对象上显示整个堆栈的效果。禁用此选项后，会仅显示到当前高亮修改器时，堆栈的效果。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861D45\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46D6\"></a><img src=\"../images/GUID-A25EFF63-D638-4D37-A427-D886EB5C54F7-low.png\"> 使唯一</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4320\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87521FB\"></a>使实例化对象唯一，或者使实例化修改器对于选定的对象唯一。详细信息，请参见<span class=\"char_link\"><a href=\"GUID-548051DF-8B78-4F76-AED7-996B9B076F08.htm\">编辑堆栈</a></span>。该选项位于<span class=\"char_link\"><a href=\"GUID-3B752392-7B10-4D03-B624-51044BF94106.htm\">修改器堆栈右键单击菜单</a></span>中。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861D46\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46D5\"></a><img src=\"../images/GUID-7BDC6691-30E1-4B54-B958-9A02894A1153-low.png\"> 移除修改器</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-431F\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87521FC\"></a>从堆栈中删除当前的修改器，从而消除由该修改器引起的所有更改。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861D47\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-46D4\"></a><img src=\"../images/GUID-BDAEDDCA-3417-431D-A618-722B1E917524-low.png\"> 配置修改器集</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-431E\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87521FD\"></a>单击将显示一个弹出菜单，通过该菜单，您可以配置如何在“修改”面板中显示和选择修改器。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"related-links\">\n            <h4 class=\"related\">\n               <p class=\"title\"><a name=\"GUID-225B0183-FC5E-41E7-87D5-E3EFBE38AF8C\"></a>相关信息\n               </p>\n            </h4>\n            <ul>\n               <li><span class=\"char_link\"><a href=\"GUID-548051DF-8B78-4F76-AED7-996B9B076F08.htm\">编辑堆栈 </a></span></li>\n               <li><span class=\"char_link\"><a href=\"GUID-80209C3A-C2E4-4541-8738-D1E5ECE16E9C.htm\">修改器堆栈控件 </a></span></li>\n               <li><span class=\"char_link\"><a href=\"GUID-3B752392-7B10-4D03-B624-51044BF94106.htm\">修改器堆栈右键单击菜单 </a></span></li>\n            </ul>\n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-79998C44-22AA-4485-9608-51630079E5A7.htm\">修改器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-2C58DCD5-6126-4443-9110-29E47A42E7E7.htm\">修改器堆栈</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-80209C3A-C2E4-4541-8738-D1E5ECE16E9C.htm\">修改器堆栈控件</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-4B0C8DE6-8237-4EDC-88B7-B16268A1766C.htm\">世界空间</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-14658086-ACD6-480D-A31D-8075C0F40633.htm\"> 选择并移动</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-CE714983-3FCD-4C76-BB3A-7B2C5B0C4F5E.htm\">选择并旋转</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-71DB62CD-C0ED-4C18-BF74-3BF1C7998306.htm\"> 选择并均匀缩放</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-D51970C6-5F52-4C52-8CA8-55FDBEB7A030.htm\">选择并挤压</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-A310F8C2-B0C8-4C4A-AA3C-C584D6FDF353.htm\"> 选择并非均匀缩放</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-44AA1775-4215-423B-9D78-7E74CD3D4423.htm\">变换修改器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-86AF500F-4A42-46E6-9409-0184E9DBA238.htm\">在子对象层级工作</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-CA91953E-FD01-4856-AC65-FF7F17CD5988.htm\">对象空间</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";