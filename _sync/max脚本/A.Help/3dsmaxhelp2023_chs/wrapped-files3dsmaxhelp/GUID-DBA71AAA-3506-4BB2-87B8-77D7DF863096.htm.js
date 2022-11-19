var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-DBA71AAA-3506-4BB2-87B8-77D7DF863096\">\n      <meta name=\"description\" content=\"如名称所示，MassFX 约束（或“关节”）限制刚体在模拟中的移动。现实世界中的一些约束示例包括转枢、钉子、索道和轴。\">\n      <meta name=\"indexterm\" content=\"MassFX: 约束概述\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>约束物理对象</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-DBA71AAA-3506-4BB2-87B8-77D7DF863096\"></a><div class=\"head\">\n            <h1>约束物理对象</h1>\n         </div>\n         <p class=\"blurb\">如名称所示，MassFX <em class=\"mild\">约束</em>（或“关节”）限制刚体在模拟中的移动。现实世界中的一些约束示例包括转枢、钉子、索道和轴。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"FIG_62B5F7DAA243431CA68A8B5511186851\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-BC6CFA15-707C-46EE-996D-4A174ED9AF26-low.png\"></div>\n            <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A74\"></a>  \n            </p>\n            <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A67\"></a>所有约束预设创建具有相同设置的同一类型的辅助对象。不同的约束类型（例如“转枢”与“球和套管”）只需为生成的约束设置一些有用的默认值。 \n               \n            </p>\n            <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A6D\"></a><span class=\"char_link\"><a href=\"GUID-A089EB2B-45A1-4A6B-8B06-221A75267881.htm\">约束辅助对象</a></span>可以将两个刚体链接在一起，也可以将单个刚体定位到全局空间中的某个固定位置。约束组成了一个层次关系：子对象必须是动力学刚体，而父对象可以是动力学刚体、运动学刚体或为空（定位到全局空间）。 \n               \n            </p>\n            <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A6C\"></a>默认情况下，约束“不可断开”：无论对它应用了多强的作用力或使它违反其限制的程度多严重，它将保持效果并尝试将其刚体移回所需的范围。但是，可以将约束设置为可使用独立作用力和扭矩限制来将其断开，超过该限制时约束将会禁用且不再应用于模拟。 \n               \n            </p>\n            <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FE7\"></a> \n               <h2><a name=\"GUID-D73F00DF-A7FD-44CF-A4EB-80E6F9F6FA48\"></a>父对象和子对象\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A6B\"></a>大多数约束连接两个刚体。约束作为父刚体（随约束一起移动和旋转）的子对象链接，并作为子刚体（约束将父刚体运动传输到的对象）的父对象链接。例如，在模拟中，可以通过转枢约束连接汽车及其门的模型，其中汽车作为父对象，门作为子对象。打开和关闭门的距离限制不会在汽车旋转时发生更改，但是与汽车的方向相关。\n                  \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A6A\"></a>两个动力学刚体间的约束行为类似于现实世界：应用于一个刚体的力可以以任一方向传递到其他刚体。大多数情况下，开车会沿着车拉动车门。但是，如果一些强壮（可能是喝醉了酒）的好兄弟没了汽油，通过打开的门推他们的汽车，如果门未打断，车身也会移动。如果父对象是动态的，可能会像子对象一样将其移动。\n                  \n                  \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A69\"></a> \n               <h2><a name=\"GUID-7B262034-1BD3-4AD0-8BA3-3D80497506BA\"></a>创建约束\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A68\"></a>要在两个对象之间创建约束，请在场景中选择父对象，然后选择子对象，再从 MassFX 工具栏上的<span class=\"char_link\"><a href=\"GUID-DEDC3C01-9F80-42BB-BECB-F0868FBBADB4.htm#WSC85FF3233F59DD9D-22AF469E12A68A47743-7FF9\">“约束”弹出按钮</a></span>中选择一个预设。约束将自动放置在父对象的轴点上。然后，在视口中移动鼠标时，系统将跟踪鼠标光标以设置约束的显示大小。将鼠标移动到距离父对象越近，约束变得越小。要确定约束显示大小并完成创建约束，请单击鼠标。 \n                  \n               </p> \n               <div><a name=\"GUID-BCF9E3BB-1D45-4B6C-AB55-0ABA235D3403\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果一个或两个对象不是刚体，MassFX 会在放置约束之前询问您是否要自动应用刚体修改器。 \n                     \n                  </div>\n               </div> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A66\"></a>可以稍后将显示大小更改为约束的特性。它仅会影响约束在视图中绘制的大小，并不会影响约束的模拟效果。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A64\"></a>放置约束会影响从应用约束的父对象进行偏移。如果两个刚体相邻（如门连接到门框），通常将约束放置在子对象的轴上。但是，如果两个刚体是独立的（如悬挂在弯钩上的球），约束的完美位置经常位于父对象的轴上。MassFX 约束辅助对象的“高级”卷展栏含有按钮，可以用来为您将约束自动自动移动到这些位置之一。\n                  \n                  \n               </p> \n               <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FE6\"></a> \n                  <h3><a name=\"GUID-072AF546-53D9-4F36-ADE7-8933326D51B1\"></a>创建世界约束\n                  </h3> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A63\"></a>还可以相对于场景位置约束刚体。可以通过以下方法完成此操作：在“MassFX 约束”辅助对象的“常规”卷展栏上，单击“父对象”按钮旁边的“X”按钮，来将现有约束的父对象设置为空或“未定义”。或者，只需将约束指定给选定的单个刚体；该操作会自动将该刚体设置为子对象并定位空间中的约束。\n                     \n                     	 \n                  </p> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A62\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A81044C5-8717-4854-A479-AD4DFCE24B65-low.png\"></div>  \n               </div> \n            </div>\n            <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FE5\"></a> \n               <h2><a name=\"GUID-E8EF6B15-7CAC-4F15-B0B0-93CAC8D3E9FF\"></a>弹簧和弹性约束\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A61\"></a>MassFX 约束辅助对象支持三种类型的弹性： \n                  \n               </p> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A60\"></a><ul>\n                  <li> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A5F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2A786332-0130-4D9E-8304-BBA124E943D1-low.png\"></div> <em class=\"strong\">反弹：</em>受限约束达到限制边缘时，可以选择从限制反弹。例如，如果突然关上房子中的门，通常闭锁会发出咔哒声，不会反弹回来。若要模拟此操作，可以将约束的“反弹”值设置为 0.0。但是，如果删除闭锁，突然关上门会导致从门框反弹回来，并且处于打开状态。为此，您应该使用非零“反弹”值。\n                     \n                     	 \n                  </li>\n                  <li> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A5D\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5A9BA358-3843-411E-8C73-19C6FFDCC5CE-low.png\"></div> <em class=\"strong\">弹簧：</em>受限约束达到限制边缘时，可以选择超出限制，并应用力使其返回限制。例如，如果您已连接橡皮绳和桥，然后跳离该桥，您会自由下落，直至橡皮绳的长度到其长度限制，这是达到约束平移方面的限制半径值的结果。此时橡皮绳将开始拉伸，之后它会应用力以恢复到其未拉伸长度。后一个力会使您加速并投掷得比必要时更高（绳子开始增速），但是重新回到限制内后将不再应用力。\n                     \n                     		<a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A5B\"></a><ul>\n                        <li>阻尼属性会随着“弹簧”值来描述对象超过限制时所受的移动阻力。 \n                           		  \n                        </li>\n                     </ul> \n                  </li>\n                  <li> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A59\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A70FB3A8-DFD4-436A-B78E-B50C2BFC1720-low.png\"></div> <em class=\"strong\">弹性：</em>位于辅助对象的“弹簧”卷展栏上，“弹性”值表示您对弹簧的通常认识。“弹到基准位置”将父对象和子对象推回到它们在第一帧上的相对平移偏移，但“弹到基准摆动”和“弹到基准扭曲”会影响其旋转。“弹性”值越大，应用的力越大。 \n                     	 \n                  </li>\n               </ul> \n            </div>\n            <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FE4\"></a> \n               <h2><a name=\"GUID-7CC5DEEF-1310-4D66-B1C9-C7BF21D50A09\"></a>改进预览性能\n               </h2> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A57\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-461B8D57-33D0-47D1-977D-BAF9F6312D5E-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A56\"></a>约束在视口中具有自定义可视化，用来显示平移、旋转和扭曲的锁定/限制/自由状态以及这些限制的表示。此可视化有助于了解约束的旋转和限制。但是，绘制这些可视化会影响视口性能。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A55\"></a>如果您在预览具有多个约束的模拟，可能希望禁用辅助对象的显示以改进视口更新的速度。可以通过启用“按类别隐藏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“辅助对象”，在<span class=\"char_link\"><a href=\"GUID-E6C6346B-436A-47B6-9952-43815529CCA5.htm\">“显示”面板</a></span>上执行此操作。 \n                  \n               </p> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";