var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-76A80A5B-9440-45A0-AD82-BE5F379C4504\">\n      <meta name=\"description\" content=\"Euler XYZ 旋转控制器是一个复杂的控制器，它可以合并单独的、单值浮点控制器来给 X、Y、Z 轴指定旋转角度。Euler XYZ 不如四元旋转（由 TCB 旋转控制器使用）平滑，但它是唯一可以用于编辑旋转功能曲线的旋转类型。\">\n      <meta name=\"indexterm\" content=\"Euler XYZ 旋转控制器\">\n      <meta name=\"indexterm\" content=\"四元数\">\n      <meta name=\"indexterm\" content=\"控制器: Euler XYZ 旋转\">\n      <meta name=\"indexterm\" content=\"XYZ 控制器\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>Euler XYZ 旋转控制器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-76A80A5B-9440-45A0-AD82-BE5F379C4504\"></a><div class=\"head\">\n            <h1>Euler XYZ 旋转控制器</h1>\n         </div>\n         <p class=\"blurb\">Euler XYZ 旋转控制器是一个复杂的控制器，它可以合并单独的、单值浮点控制器来给 X、Y、Z 轴指定旋转角度。Euler XYZ 不如四元旋转（由 TCB 旋转控制器使用）平滑，但它是唯一可以用于编辑旋转功能曲线的旋转类型。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_159D1701A4B540E9BA0BF92CBA0DF3E1\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-1F1BF0AD-76DD-4654-A6F5-8A68200DB3E7\">轨迹视图  <img src=\"../images/ac.menuaro.gif\">  在“轨迹视图”层次中选择一条旋转轨迹。 <img src=\"../images/ac.menuaro.gif\"> 指定控制器  <img src=\"../images/ac.menuaro.gif\">  Euler XYZ</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-392CD975-829F-430F-995D-507656C83918\">在视口中选择一个对象  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-EBCA3C24-9B3B-46F2-A058-71C6B3FFD2E6-low.png\">“运动”面板  <img src=\"../images/ac.menuaro.gif\"> “指定控制器”卷展栏  <img src=\"../images/ac.menuaro.gif\">  选择旋转轨迹。将 Euler XYZ 指定为默认的控制器。</span> \n               </li>\n            </ul><a name=\"WS1A9193826455F5FFBA679E112A6A190044A3D\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-39148F27-CF5F-48CE-B144-2EE661E69462-low.png\"></div>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43CC\"></a>“Euler XYZ 旋转”控制器给位置、旋转和缩放变换的 X、Y 和 Z 分量指定单独的轨迹。默认情况下，控制器将指定三个关键点（每轴一个）。为避免这样，您可以使用<span class=\"char_link\"><a href=\"GUID-71DEAF46-80B6-47D8-8F58-F103CECEE1F5.htm\">自定义用户界面</a></span>操作来创建显式的轴关键点。这些可在“主 UI”组 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“Set Key Tools”类别中获得。 \n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43CA\"></a> <span class=\"char_link\"><a href=\"GUID-0F3E2822-9296-42E5-A572-B600884B07E3.htm#WS1A9193826455F5FF103859C11318F51BDD-7604\">万向参考坐标系</a></span>用于与此控制器配合使用。在其他坐标系下，绕一个轴旋转至少更改两个轨迹。在万向坐标系下，绕一个轴旋转只更改一个轨迹，这使编辑函数曲线更容易。 \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044A42\"></a> \n               <h2><a name=\"GUID-714CD421-5D9F-448A-A492-CBADA13DED89\"></a>Euler 与 TCB 旋转\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C9\"></a>Euler 旋转控制器比 TCB 旋转控制器多几个优点，后者在比 <span class=\"charspan-msgph\">3ds Max</span> 5 更早的版本中是默认的旋转控制器。Euler 旋转控制器提供了功能曲线，而 TCB 则没有。Euler 旋转控制器允许在“曲线编辑器”中操作 3 条不同的曲线。TCB 旋转仅可以通过张力、连续性和偏移设置来进行控制，这使得设置关键帧和单独操作\n                  X、Y 和 Z 旋转非常困难。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C8\"></a>另一方面，TCB 旋转可以在给定关键帧上进行超过 180 度的旋转。如果打开<span class=\"char_link\"><a href=\"GUID-87EBDEA2-9F70-437D-8D42-948E18FC6582.htm#WS1A9193826455F5FF103859C11318F51BDD-410C\">旋转终结</a></span>选项，您可以获得大于 360 度的旋转值。 \n               </p> \n               <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E4F7\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果习惯于使用 TCB 旋转，您可能会觉得比较难于适应 Euler 工作流。此时，你可能希望将 TCB 指定为默认的旋转控制器。请参见<span class=\"char_link\"><a href=\"GUID-79E5AFC8-10A9-4799-AE3D-3F2766C28617.htm\">指定默认控制器</a></span>。 \n                  </div>\n               </div> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044A43\"></a> \n               <h2><a name=\"GUID-D81E5C4F-0F87-491A-9684-8D477287E434\"></a>Euler 旋转与波形浮点控制器\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C7\"></a>因为 Euler 旋转控制器使用弧度，需在其他控制器应用到 Euler 轴上时调整单位。例如，波形浮点控制器在“特征图形”中的默认振幅是 100。当“波形浮点”控制器应用到 Euler 轴上时，默认振幅是 100 弧度。这将振幅设置为 5729.598（即\n                  100 弧度）。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044A44\"></a> \n               <h2><a name=\"GUID-37C0842B-FECE-4E1B-A9E8-2B98B9CCC258\"></a>Euler 旋转与噪波浮点控制器\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C6\"></a>当“噪波浮点”控制器应用到 Euler 轴上时，默认浓度设置为 286.479 或 10 弧度以度表示的 50％（最大导向）。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044A45\"></a> \n               <h2><a name=\"GUID-DDB41C38-92AE-4C56-929D-FDEB632CD112\"></a>Euler 旋转与 MIDI 运动捕获控制器\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C5\"></a>如果应用了 MIDI 运动捕获控制器，则对半径进行参数缩放，以便最大默认设置 1.0 产生 57.2958 度的上限。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C2\"></a> \n               <h2><a name=\"GUID-902027B2-B56C-45AD-9FD3-72B607B729AA\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190044A47\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044A48\"></a>示例：要使用 Euler XYZ 旋转，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建长方体。 </li>\n                  <li>转至 <img src=\"../images/GUID-EBCA3C24-9B3B-46F2-A058-71C6B3FFD2E6-low.png\">“运动”面板并确保已指定的旋转控制器为“Euler XYZ”。如果不是，在“指定控制器”卷展栏列表中高亮显示“旋转”轨迹，然后单击 <img src=\"../images/GUID-B37F3828-8B20-4C02-BF02-B151E0CBBB68-low.png\">（指定控制器），并在“指定控制器”对话框列表中选择“Euler XYZ”。单击“确定”。 \n                  </li>\n                  <li>启用 <img src=\"../images/GUID-859D11E8-44CA-4A08-A696-F5A17CA856E0-low.png\">。 \n                  </li>\n                  <li>在“PRS 参数”卷展栏的底部，单击“旋转”。 </li>\n                  <li>在“Euler 参数”卷展栏中，单击 X 旋转轴按钮（如有必要）。 </li>\n                  <li>在“PRS 参数”卷展栏的“创建关键点”组中，单击“旋转”。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C1\"></a><span class=\"charspan-msgph\">3ds Max</span> 会创建一个旋转关键点。 \n                     </p> \n                  </li>\n                  <li>将时间滑块移至第 50 帧。 </li>\n                  <li>再次在“PRS 参数”卷展栏的“创建关键点”组中，单击“旋转”。 </li>\n                  <li>在“关键点信息（基本）”卷展栏中，在“值”字段输入 <em class=\"strong\">500</em>。 \n                  </li>\n                  <li> 在“Euler 参数”卷展栏中，单击 Z 旋转轴按钮，然后在“关键点信息（基本）”卷展栏的“值”字段中输入 <em class=\"strong\">90</em>。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43C0\"></a><img src=\"../images/GUID-5B32F2AB-610D-42BB-8C54-81463BE72359-low.png\"> 播放动画。这样长方体就绕 X 轴旋转 500 度，绕 Z 轴旋转 90 度。在这种情况下，将先进行 X 轴旋转，然后进行 Z 轴旋转。 \n                     </p> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A190044A49\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044A4A\"></a>要将具有列表控制的 Euler XYZ 用到局部旋转控制上，请执行以下操作：\n               </p>\n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43BF\"></a>可以通过合并列表控制器与 Euler XYZ 旋转控制器来模拟局部 Eluer 旋转控制器（在早期版本的 <span class=\"charspan-msgph\">3ds Max</span> 中可用）。 \n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>选择要进行局部旋转控制的对象。例如，创建一个茶壶和一个虚拟对象。 </li>\n                  <li>对虚拟对象设置动画。 </li>\n                  <li>打开 <img src=\"../images/GUID-EBCA3C24-9B3B-46F2-A058-71C6B3FFD2E6-low.png\">“运动”面板。 \n                  </li>\n                  <li>在“指定控制器”卷展栏上，选择“旋转”变换，然后 <img src=\"../images/GUID-B37F3828-8B20-4C02-BF02-B151E0CBBB68-low.png\"> 将“注视”控制器指定给茶壶，作为虚拟对象指定为“注视目标”。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43BE\"></a>这就通过虚拟对象创建了一个具有旋转控制的对象。 \n                     </p> \n                  </li>\n                  <li>在窗口中选择“旋转: 注视”控制器后，再次单击 <img src=\"../images/GUID-B37F3828-8B20-4C02-BF02-B151E0CBBB68-low.png\">（指定控制器）并拾取“旋转列表”。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43BD\"></a>这就是一个列表控制器，并在列表中将“注视约束”作为首选旋转控制器。 \n                     </p> \n                  </li>\n                  <li>在窗口中向下滚动并选择可用标签选项，然后单击“指定控制器”。 </li>\n                  <li>选择 Euler XYZ。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43BC\"></a>现在将具有“注视约束”的列表控制器作为首选旋转控制器，Euler XYZ 作为第二控制器。 \n                     </p> \n                  </li>\n                  <li>在“旋转列表”卷展栏，在“层”窗口中使 Euler XYZ 高亮显示，然后单击“设置激活”。 </li>\n                  <li>在“Euler 参数”卷展栏中，将“轴顺序”更改为“ZYX”。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43BB\"></a>现在可以在“注视”旋转控制之外独立设置旋转动画。它的作用与“局部 Euler”控制器相同，可在 软件版本 4 或更早的版本中获得。 \n                     </p> \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43BA\"></a> \n               <h2><a name=\"GUID-DB51F7EC-30F9-4D20-AAD8-D7F15B63CEBA\"></a>界面\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B9\"></a>Euler 参数显示在“运动”面板中。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B8\"></a>当在<span class=\"char_link\"><a href=\"GUID-15DC3D4F-D69D-42B8-8441-41AAD883D0A5.htm\">“PRS 参数”卷展栏</a></span>中选中“旋转”时，显示“Euler 参数”卷展栏。 \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044A4B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5ED86FE6-6770-426E-872A-3CB81C95D5D8-low.png\"></div>  <a name=\"GUID-2B673D23-5B89-4EED-BAD7-842DD6B7C928\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-78C5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B7\"></a>轴顺序</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5AAB\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87526F9\"></a>选择旋转计算顺序。默认设置为 X、Y、Z 顺序，其中 X 轴可以首先旋转。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-78C4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B6\"></a>X</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5AAA\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87526FA\"></a>显示用于 X 轴旋转角度的控制器属性。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-78C3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B5\"></a>Y 轴</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5AA9\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87526FB\"></a>显示用于 Y 轴旋转角度的控制器属性。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-78C2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B4\"></a>Z 轴</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5AA8\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87526FC\"></a>显示用于 Z 轴旋转角度的控制器属性。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-43B3\"></a>每个轴使用其自身的控制器，该控制器使用浮点数据类型。例如，X 和 Y 旋转轴可以使用“Bezier 浮点”控制器，而 Z 旋转轴使用“噪波浮点”控制器。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";