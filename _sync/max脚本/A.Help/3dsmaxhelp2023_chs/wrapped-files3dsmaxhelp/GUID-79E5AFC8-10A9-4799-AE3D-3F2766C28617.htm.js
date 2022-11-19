var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-79E5AFC8-10A9-4799-AE3D-3F2766C28617\">\n      <meta name=\"description\" content=\"可以指定控制器类型和控制器设置的永久默认值，以匹配您的首选工作方式。\">\n      <meta name=\"indexterm\" content=\"默认: 控制器\">\n      <meta name=\"indexterm\" content=\"默认: 控制器设置\">\n      <meta name=\"indexterm\" content=\"指定: 默认控制器值\">\n      <meta name=\"indexterm\" content=\"指定: 默认控制器\">\n      <meta name=\"indexterm\" content=\"控制器: 指定默认\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>指定默认控制器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-79E5AFC8-10A9-4799-AE3D-3F2766C28617\"></a><div class=\"head\">\n            <h1>指定默认控制器</h1>\n         </div>\n         <p class=\"blurb\">可以指定控制器类型和控制器设置的永久默认值，以匹配您的首选工作方式。 </p>\n         <p><a name=\"WS73099CC142F48755602CAF04118F18E7A07-55BA\"></a>下列默认值被写入 <em class=\"mild\">3dsmax.ini</em> 文件： \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004496D\"></a><ul>\n            <li>用于每种数据类型的默认控制器 </li>\n            <li>默认控制器设置 </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004496E\"></a> \n            <h2><a name=\"GUID-40F867E2-327B-4660-82C4-07AB5662465B\"></a>指定默认控制器\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-451D\"></a>通过从“轨迹视图”菜单中选择“控制器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“指定”来指定默认控制器（请参见<span class=\"char_link\"><a href=\"GUID-B51DC4A6-8911-42AF-B9F1-F00E26F9C34E.htm\">指定控制器</a></span>）。在“指定控制器”对话框中选择控制器时，可选择在单击“确定”前单击“设置默认值”。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-451C\"></a>单击“设置默认值”，会将选择的控制器指定为使用该数据类型的所有参数的默认值。该操作产生下列效果： \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004496F\"></a><ul>\n               <li>默认控制器在“指定控制器”对话框的底部列出。 </li>\n               <li>多个不同参数可能共享相同的数据类型。例如，选择“立方体”的“长度”参数和指定“线性浮点”作为默认值，会为使用“浮点”数据类型的所有参数设置默认控制器。其中包括“宽度”、“摄影机视野”和“缩放变形曲线”。 </li>\n               <li>默认控制器选择被写入 <em class=\"mild\">3dsmax.ini</em> 文件，并成为所有新场景的默认设置。 \n               </li>\n               <li>不影响以前指定的控制器。 </li>\n            </ul> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044970\"></a> \n            <h2><a name=\"GUID-AE0D96A7-5600-4A12-AD35-39DAD773CC36\"></a>指定默认控制器值\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-451B\"></a>可以在“首选项”对话框中，为多个控制器类型指定默认设置，或者将控制器重置为它们的出厂设置。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044971\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044972\"></a>要指定默认的控制器设置，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>选择“自定义”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“首选项”。 \n               </li>\n               <li>在“首选项”对话框 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“动画”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“控制器默认设置”组中，单击“设置默认值”以显示“设置控制器默认值”对话框。 \n               </li>\n               <li>在可用控制器的列表中，选择一个控制器类型，然后单击“设置”按钮以显示选定控制器支持的默认设置。例如，使用“Bezier”控制器，以设置“内”和“外”切线。 \n                  <p><a name=\"GUID-8DCC07D4-7042-480A-8AEE-10F201109A5A\"></a>默认“位置”控制器为“位置 XYZ”。 \n                  </p> \n                  <p><a name=\"GUID-9344BC01-DF6D-4CF3-9423-FBABB0A4A618\"></a>默认“旋转”控制器为“Euler XYZ”。“Euler XYZ 旋转”与“TCB”旋转操作有很大差别。它提供三个功能曲线供操纵，但不允许在关键点之间出现超过 180 度的旋转。使用 TCB 控制器，用于连续旋转和大于 180 度的旋转。 \n                  </p> \n                  <p><a name=\"GUID-91C0970B-4F5A-4C36-A461-D5F2828FBEBC\"></a>默认“缩放”控制器为 Bezier。 \n                  </p> \n               </li>\n            </ol> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4519\"></a>单击“确定”后，就更改了控制器的默认值。控制器默认设置的更改写入 <em class=\"mild\">3dsmax.ini</em> 文件中，并成为所有新指定的控制器和所有新场景的默认值。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4518\"></a>也可以为所有控制器还原为原来的程序默认值，方法是单击“首选项设置”对话框 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“动画”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“控制器默认设置”组 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“还原为出厂设置”。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";