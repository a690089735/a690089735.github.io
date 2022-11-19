var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-B0C87F87-6E4B-41C4-B0EB-94ACE223E9C9\">\n      <meta name=\"description\" content=\"MassFX 提供了一些工具，可用于创建刚体以及调整其设置和物理图形：模拟中对象的表示。\">\n      <meta name=\"indexterm\" content=\"MassFX: 使用刚体\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>使用刚体</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-B0C87F87-6E4B-41C4-B0EB-94ACE223E9C9\"></a><div class=\"head\">\n            <h1>使用刚体</h1>\n         </div>\n         <p class=\"blurb\">MassFX 提供了一些工具，可用于创建刚体以及调整其设置和物理图形：模拟中对象的表示。 \n            \n         </p>\n         <div class=\"bodyReference\">\n            <div class=\"section\"><a name=\"SECTION_A684AFC15E75429D9C36A08E71B41E5A\"></a> \n               <h2><a name=\"GUID-8327401E-36C0-41DF-9A46-3A51730D1558\"></a>创建刚体\n               </h2> \n               <p><a name=\"GUID-18E971D3-4F38-4F17-BBBC-68000B369C1A\"></a>通过将 MassFX 刚体修改器应用到对象来创建刚体。可以通过以下方法从“修改”面板上执行此操作：使用 <span class=\"char_link\"><a href=\"GUID-DEDC3C01-9F80-42BB-BECB-F0868FBBADB4.htm\">MassFX 工具栏</a></span>上的“刚体”弹出按钮，或使用“动画”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“模拟 - MassFX”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“刚体”子菜单中的命令。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AD6\"></a>根据您的选择设置“刚体类型”参数的值时，不同的工具栏按钮和菜单命令都创建相同的修改器。创建后您可以随意更改刚体的类型。有关各种刚体类型的详细信息，请参见“<span class=\"char_link\"><a href=\"GUID-E8ED96F1-1F64-4EE3-944C-586B70CE0C54.htm#WSC85FF3233F59DD9D638EAD5212A68A47868-7FF3\">刚体类型：动力学、运动学和静态</a></span>”。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AD5\"></a>将 MassFX 刚体修改器添加到某对象后，会自动将该对象添加到模拟中。 \n                  \n               </p> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AD4\"></a> \n                  <h3><a name=\"GUID-A89D890D-32F5-4999-A7DA-EBD87E61C917\"></a>体验一下吧！\n                  </h3> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AD2\"></a><ol type=\"1\" start=\"1\">\n                     <li>在新场景中，创建一个茶壶。 \n                        		\n                     </li>\n                     <li>将茶壶移动至高于地面（也许倒置，以获得更有趣的效果）。 \n                        		\n                     </li>\n                     <li>在“MassFX 工具”对话框 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“世界参数”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“场景设置”卷展栏中，禁用“<span class=\"char_link\"><a href=\"GUID-D78BC1A4-A6C3-4537-9515-FC1ABFBDC52E.htm#GUID-2B43A226-9E3F-4DE8-B6EC-6DAD40D5C0EF\">生成每个元素的图形</a></span>”。 \n                        		\n                     </li>\n                     <li>选中茶壶后，在 MassFX 工具栏上单击 <img src=\"../images/GUID-C351E548-DAF0-4CA7-BED1-7F817A297A53-low.png\">“创建动力学刚体”按钮。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6ACE\"></a> MassFX 刚体修改器将添加到修改器堆栈中，同时为物理图形创建凸面外壳。 \n                           		  \n                        </p> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AD3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7B07FE3C-EFC2-4D3C-BB8E-B5BEE161C383-low.png\"></div>  \n                        <p><a name=\"GUID-871A495D-DFF8-4308-B9FC-126E67F4D398\"></a>实际上，由于“生成每个元素的图形”处于启用状态，MassFX 会创建四个凸面外壳：茶壶网格的每个元素对应一个。对于复杂图形（如茶壶），这可能会使模拟更精确，但速度较慢。本主题的稍后步骤中将介绍如何创建单个外壳。 \n                           		  \n                        </p> \n                     </li>\n                     <li>在 MassFX 工具栏上单击 <img src=\"../images/GUID-00B5EF42-31F0-4C70-9286-4CCB48526CAD-low.png\">（开始模拟）。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6ACC\"></a>茶壶落到地面上，并且可能发生轻微的反弹和滚动。 \n                           		  \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6ACB\"></a>茶壶是否正好落在地面上？您可能需要在<span class=\"char_link\"><a href=\"GUID-D78BC1A4-A6C3-4537-9515-FC1ABFBDC52E.htm\">“世界参数”面板</a></span>上启用“使用地面碰撞”选项。 \n                           		  \n                        </p> \n                     </li>\n                     <li> 再次单击 <img src=\"../images/GUID-00B5EF42-31F0-4C70-9286-4CCB48526CAD-low.png\">（开始模拟）以在当前帧停止模拟。 \n                        		\n                     </li>\n                     <li> 单击 <img src=\"../images/GUID-738CADAC-A864-481F-B23D-B2A86C2D1140-low.png\">（重置模拟）以将茶壶返回到其起始位置。 \n                        		\n                     </li>\n                  </ol> \n               </div> \n            </div>\n            <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FF0\"></a> \n               <h2><a name=\"GUID-B9336481-EFA3-471C-B781-6D96F4BEF09D\"></a>管理动力学刚体的“初始变换”\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AC6\"></a>如果您尝试了上一过程，您会看到 MassFX 模拟在场景中移动动力学刚体。单击 <img src=\"../images/GUID-738CADAC-A864-481F-B23D-B2A86C2D1140-low.png\">（重置模拟）会将所有动力学刚体移回到其起始位置。此起始点称为刚体的“初始变换”。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AC5\"></a>MassFX 如何知道此变换的位置？默认情况下，当时间滑块位于第一帧时<em class=\"mild\"></em>，您对动力学刚体的位置或旋转所做的任何更改会自动更新初始变换。当时间滑块<em class=\"mild\"></em>未在第一帧时您对动力学刚体的变换所做的任何更改都将在单击 <img src=\"../images/GUID-738CADAC-A864-481F-B23D-B2A86C2D1140-low.png\">（重置模拟）时丢失。 \n                  \n               </p> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AC4\"></a> \n                  <h3><a name=\"GUID-A7E39D36-1173-46F5-B2CA-51CC8BBEEB3A\"></a>体验一下吧！\n                  </h3> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AC3\"></a><ol type=\"1\" start=\"1\">\n                     <li>接着使用上一过程中的茶壶，再次运行模拟，然后将其停止。 \n                        		\n                     </li>\n                     <li>如果茶壶此时位于地面上，将其移动到新位置。 \n                        		\n                     </li>\n                     <li>单击 <img src=\"../images/GUID-738CADAC-A864-481F-B23D-B2A86C2D1140-low.png\">（重置模拟）。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6ABF\"></a> 时间滑块将跳回到第一帧且茶壶返回其初始位置（浮动于地面上）。所有您精心挑选的放置位置都毁于一旦！ \n                           		  \n                        </p> \n                     </li>\n                     <li>现在，动画位于第一帧，再次移动和旋转茶壶，可能会从更高的位置开始。 \n                        		\n                     </li>\n                     <li>单击 <img src=\"../images/GUID-738CADAC-A864-481F-B23D-B2A86C2D1140-low.png\">（重置模拟）。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6ABC\"></a>此时，茶壶保持不动。 \n                           		  \n                        </p> \n                     </li>\n                     <li>运行并重置模拟。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6ABA\"></a>茶壶移回到其新的起始位置。 \n                           		  \n                        </p> \n                     </li>\n                  </ol> \n               </div> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB9\"></a>也可以将模拟过程中任意位置的刚体状态“捕获”为初始变换。要执行此操作，请使用“MassFX 工具”对话框“模拟工具”面板上的“<span class=\"char_link\"><a href=\"GUID-FD410931-487A-4BB5-AD81-270D8A169FE3.htm#GUID-FB495FD4-E8FF-488A-85F7-5325C47A9D97\">捕获变换</a></span>”按钮。 \n                  \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FEF\"></a> \n               <h2><a name=\"GUID-C240D670-460D-4A49-9D5B-2B15DD18F555\"></a>调整物理材质\n               </h2> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB8\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9CCD4EA8-DF3B-47BA-B950-0BE773A080BD-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB7\"></a>物理材质的“密度”和“质量”参数通过对象的体积联系在一起。例如，一枚小钢针和一根大钢质带缆桩都具有大约 7.85 g/cm<sup>3</sup> 的密度，但（当然）钢针具有更轻的质量。对象越重，惯性就越大，更容易推开轻对象。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB6\"></a>要使动力学刚体的下落速度更快，可在修改器的“物理材质”卷展栏中尝试增加密度（或质量），但不起任何作用。在理想世界（忽略空气阻力）中，不同大小和重量的对象都会以相同的速度下落。（可能您想起了伽利略从比萨斜塔扔下物体的猜想。）可以使对象更快降落的仅有的方法是以下二者之一：\n                  \n                  \n               </p> <a name=\"UL_A607208172334BE2ADBE641D5CE57E84\"></a><ul>\n                  <li>增加重力（使用 <span class=\"char_link\"><a href=\"GUID-CEBF62D8-81B8-439A-9D65-367620BA6001.htm\">“MassFX 工具”对话框</a></span>），或 \n                     	 \n                  </li>\n                  <li>将对象移动到离地面更近。 \n                     	 \n                  </li>\n               </ul> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB2\"></a>将对象朝地面移动可能听起来很显而易见但无用，然而却带来了<em class=\"mild\">单位</em>的重要问题。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB1\"></a>在仅有图形的世界中，6 英尺高的人站在 10 英尺远的位置看到的 50 英尺高的砖塔，相当于 60 英尺高的巨人站在 100 英尺远的位置看到的 500 英尺高的砖塔。但是，从（庞大）500 英尺塔下落的（巨型）砖将比（正常）砖从 50 英尺下落花费更长的时间到达地面。如果通过巨人的眼睛观察，并以人类的想法，则您会奇怪为什么砖下落得如此缓慢。\n                  \n                  \n               </p> \n               <div class=\"section\"><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AB0\"></a> \n                  <h3><a name=\"GUID-BF11E418-35C6-4D01-95C9-92CD9DA018D9\"></a>体验一下吧！\n                  </h3> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AAF\"></a><ol type=\"1\" start=\"1\">\n                     <li>从茶壶对象中删除刚体修改器，然后在“MassFX 工具”对话框 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“世界参数”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“场景设置”卷展栏上，禁用“生成每个元素的图形”。 \n                        		  \n                        <p><a name=\"GUID-ECE48A9F-370A-4CE1-B38F-38BF63E41710\"></a>这将导致刚体修改器的后续应用程序为整个对象创建单个物理图形，不论该对象包含多少个元素。在此处执行此操作的目的是使剩余步骤更容易一点地完成。 \n                           		  \n                        </p> \n                     </li>\n                     <li>再次应用刚体修改器。 \n                        		\n                     </li>\n                     <li>在修改器堆栈底部查看茶壶对象的“半径”参数来检查茶壶的大小。 \n                        		\n                     </li>\n                     <li>通过将半径增加为适当大的值（采用场景的单位）将茶壶变得非常大。如果愿意，可将其变得和足球场一样大；越大越好。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AAC\"></a> 茶壶变得更大，但凸面外壳不会随之更新。 \n                           		  \n                        </p> \n                     </li>\n                     <li>要重新生成凸面外壳，请在“MassFX 工具”对话框 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-217FC02A-293A-4D81-99D7-D82615CC8D6F-low.png\">（多对象编辑器）面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“物理网格”卷展栏上，单击“凸面”按钮并从下拉列表选择“凸面”。或者，在“修改”面板的“物理网格参数”卷展栏上调整任何参数。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AAA\"></a>凸面外壳再次包围茶壶。 \n                           		  \n                        </p> \n                     </li>\n                     <li>将茶壶向上移动至离地面大约一个茶壶直径的位置。 \n                        		\n                     </li>\n                     <li>运行模拟。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AA7\"></a>茶壶像气球一样缓慢漂向地面，并在数秒后触地。 \n                           		  \n                        </p> \n                     </li>\n                     <li>重置模拟，然后将茶壶收缩为人类比例（大约 8 个单位的半径）。也可以重新生成凸面外壳，以适合新的大小。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AA5\"></a> 现在，您拥有了一个漂浮在空中的正常大小的茶壶。 \n                           		  \n                        </p> \n                     </li>\n                     <li>同样，将茶壶移动至离地面大约一个茶壶直径的位置。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AA3\"></a> 这次仅离地面大约一英尺。 \n                           		  \n                        </p> \n                     </li>\n                     <li>运行模拟。 \n                        		  \n                        <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AA1\"></a> 在不到半秒的时间内茶壶触地。 \n                           		  \n                        </p> \n                     </li>\n                  </ol> \n               </div> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6AA0\"></a>因此，如果感觉是在月球上进行模拟，则增加重力之前，请先检查所有物体的大小。差不多听到高中老师说过：“涉及到物理学时，单位十分重要！”。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A9E\"></a>施加于对象的摩擦力值确定该对象沿其他曲面滑动的难易程度。例如，如果聚四氟乙烯桌子上的聚四氟乙烯立方体的摩擦力值为 0.05（几乎无摩擦力），它将在停止前几乎无限期地滑动。反之，如果两块包有一层砂纸的木块的摩擦力值为 0.95（几乎完全摩擦力），这两块木块几乎不会互相滑动。\n                  \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A9C\"></a>MassFX 提供两种摩擦力设置： \n                  \n               </p> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A9B\"></a><ul>\n                  <li> “静摩擦力”描述了两个对象尚未互相滑动时的摩擦力值：使其互相滑动所需施加的力大小。 \n                     	 \n                  </li>\n                  <li> “动磨擦力”描述了两个对象互相滑动时的摩擦力值。 \n                     	 \n                  </li>\n               </ul> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A98\"></a>如果您尝试过推动汽车或躺椅，您可能已经注意到很难使其移动，但一旦动起来就轻松多了。为获得真实的效果，静摩擦力值通常应高于动摩擦力值。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A96\"></a>“反弹力”参数控制对象碰撞时互相反弹的范围。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A95\"></a>橡胶球的“反弹力”值可能大约为 0.75，泡沫球的值可能大约为 0.2，花生酱球的值为 0.0。 \n                  \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FEE\"></a> \n               <h2><a name=\"GUID-1204976F-926A-4F7B-9391-5A8ABF2AFA5C\"></a>调整物理图形\n               </h2> <a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A93\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9D92465A-AA07-4CCA-869F-9E05B41C2F85-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A92\"></a>如<span class=\"char_link\"><a href=\"GUID-E8ED96F1-1F64-4EE3-944C-586B70CE0C54.htm#WSC85FF3233F59DD9D638EAD5212A68A47868-7FF5\">物理图形与图形网格</a></span>中所述，一个刚体可具有一个或多个物理图形，用于在物理模拟中表示该刚体。如果未阅读该部分，现在就请阅读。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A91\"></a>“物理图形”卷展栏的“修改图形”组用于创建其他物理图形。有关这种（不常见）情况的详细信息，请参见 <span class=\"char_link\"><a href=\"GUID-62BA863E-A0C4-4CA7-95F1-720F00AE8EA7.htm\">MassFX 刚体修改器</a></span>。通常，只有模拟需要对动力学刚体使用凹面曲面时，才需要使用多个物理图形；完成此操作的最简单方法是使用“凹面”图形类型（见下文）。 \n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A90\"></a>通过“图形类型”设置，可以更改用于刚体的（选定）物理图形的类型。选择一种网格类型时，其参数将显示在“修改”面板的<span class=\"char_link\"><a href=\"GUID-2A6CADAE-BD3D-4A2F-AB95-82097439A044.htm\">“物理网格参数”卷展栏</a></span>上以及“MassFX 工具”对话框 &gt;“编辑”面板上。以下是可用选项的详细说明： \n                  \n               </p> \n               <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FED\"></a> \n                  <h3><a name=\"GUID-39C4F8D0-5D8F-471D-82B6-591696826CB5\"></a>球体、长方体和胶囊\n                  </h3> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A8E\"></a>它们是简单的“无限平滑”MassFX 基本体。虽然在默认情况下，这些基本体在创建时大致构成了图形网格的边界，但在创建之后可以使用参数（“半径”、“长度”、“宽度”、“高度”）来控制基本体的大小。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A8D\"></a>要在更改图形网格后自动重新计算最佳适配值，只需从下拉列表中再次选择相同的“图形类型”。这会重建图形以适合图形网格。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A8C\"></a>“球体”是用于模拟时速度最快的基本体类型，之后是“长方体”，最后是“胶囊”。这些类型的速度都比“凸面外壳”、“凹面”和“自定义”网格类型快。 \n                     	 \n                  </p> \n               </div> \n               <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FEC\"></a> \n                  <h3><a name=\"GUID-370BA47E-56C8-45E9-A798-A8E4C9371E30\"></a>凸面\n                  </h3> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A8A\"></a>这是大多数刚体的默认物理图形类型，因为它可以用于所有刚体类型且大致类似于原始的图形网格。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A89\"></a>默认参数是 32 个顶点且无膨胀。使用的顶点数越少，近似效果就越粗糙，但性能越好。要创建大于图形网格的外壳，请增加“膨胀”值。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A88\"></a>要手动调整凸面外壳的顶点，请单击“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“物理图形”卷展栏上的“转换为自定义图形”按钮（有关详细信息，请参见<span class=\"char_link\"><a href=\"GUID-2A6CADAE-BD3D-4A2F-AB95-82097439A044.htm#WSC85FF3233F59DD9D-22AF469E12A68A47743-7F87\">自定义</a></span>）。 \n                     	 \n                  </p> \n               </div> \n               <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FEB\"></a> \n                  <h3><a name=\"GUID-4B7064E6-F038-47FD-8559-8F3DB9345470\"></a>凹面\n                  </h3> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A86\"></a>此选项提供了用于创建用作动力学刚体的凹面物理图形的最简单方法。其自动创建并合并多个凸面外壳（即，合成），以根据修改的图形网格中的顶点创建物理图形。如果图形网格是凹面的，则此选项将最精确地合成凸面外壳，以支持凹面物理图形。但是，使用此图形类型可能会消耗大量资源；仅在您需要精确凹面刚体时才使用此图形类型。\n                     \n                     	 \n                  </p> \n                  <div><a name=\"GUID-163FA1F0-5632-4EA7-813D-1C45B372804C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>选择该图形类型时，只有单击“物理网格参数”卷展栏上的“生成”按钮，才会生成合成图形。生成网格时，MassFX 将显示进度条，并显示消息“正在计算”。该过程完成后，卷展栏会显示凸面外壳数。 \n                        	 \n                     </div>\n                  </div> \n               </div> \n               <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FEA\"></a> \n                  <h3><a name=\"GUID-D730F6C3-45B4-4C7B-BCB1-B3C714A6991A\"></a>旧的\n                  </h3> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A81\"></a>此选项使用图形网格中的顶点来创建物理图形。如果您的图形网格是凹面的，使用“原始”网格类型不会使动力学或运动学刚体支持凹面图形。但是，“原始”网格类型提供最佳性能，可支持凹面静态刚体。如果需要精确的凹面刚体，请改用“凹面”。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A80\"></a>例如，创建一个 32x32 分段的平面基本体，然后将其添加将具有足够振幅和波长的涟漪修改器，以使其起伏不平。将其设置为静态刚体并将物理图形类型设置为“原始”。将动力学刚体拖放到上面，会导致这些刚体从波峰反弹并停留在波谷。 \n                     	 \n                  </p> \n               </div> \n               <div class=\"section\"><a name=\"WSC85FF3233F59DD9D638EAD5212A68A47868-7FE9\"></a> \n                  <h3><a name=\"GUID-3ADB8F90-B7E3-4FC1-9B7A-24009CFC2390\"></a>自定义\n                  </h3> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A7E\"></a>“自定义”网格类型允许场景中使用几何体将用作物理图形的对象的副本。要将对象用作物理图形，该对象必须是凸面或平面的，不得是凹面的。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A7A\"></a>要使用自定义对象，请先将“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“物理图形”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“图形类型”设置为“自定义”。然后，在“物理网格参数”卷展栏上，单击“从场景中拾取网格”按钮，并在场景中选择要用于物理图形的对象。相关对象的名称将在按钮上显示。 \n                     	 \n                  </p> \n                  <div><a name=\"GUID-4A50D763-9291-43BE-8E5E-34F25F66C061\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>将在源对象位置处创建自定义网格，因此，要将其定位在刚体上，请在拾取源对象之前叠加对象，或随后在刚体的“网格变换”子对象层级移动网格。 \n                        	 \n                     </div>\n                  </div> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A79\"></a>自定义对象的几何体将复制<em class=\"mild\"></em>到 MassFX 刚体修改器。如果愿意，则可以删除自定义对象，且不会导致出现任何问题。但是，如果不删除自定义对象，可以更改其几何体，然后使用“从源对象更新”功能重新将最新信息复制到修改器中。 \n                     	 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF-6EFBC91312A619575B8-6A78\"></a>如果要使用自定义的物理图形，但没有现成的，会怎么样？例如，默认的凸面外壳可能接近所需的物理图形，但是希望调整某些顶点的位置。要使用其他图形类型，只需单击刚体修改器的“物理图形”卷展栏上的“转换为自定义图形”（在“MassFX 工具”对话框上不可用）。这样，将在关联的场景中创建一个新的可编辑网格对象，作为自定义对象。然后调整网格对象，并使用“从源对象更新”功能。\n                     \n                     	 \n                  </p> \n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";