var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-D51E697D-E12C-4E37-9E24-2CF82314351A\">\n      <meta name=\"description\" content=\"使用层可以在原始的 Biped 动画上添加连续性的动画层。这是对角色动画进行全局更改的有力方法。\">\n      <meta name=\"indexterm\" content=\"使用: 层\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>使用层</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-D51E697D-E12C-4E37-9E24-2CF82314351A\"></a><div class=\"head\">\n            <h1>使用层</h1>\n         </div>\n         <p class=\"blurb\">使用层可以在原始的 Biped 动画上添加连续性的动画层。这是对角色动画进行全局更改的有力方法。</p>\n         <div class=\"bodyReference\">\n            <p><a name=\"WS73099CC142F487552A50A53111913E7C26F-77F5\"></a>比如说，简单的增加一个层，朝任何一帧旋转脊椎，那么循环跑变成了蹲伏跑。原始 Biped 的运动保持了完整无缺性，能够切换到原始层来观察。层能够单独的进行观察，或者在所有的层中视为一切动画的合成来看待。图层行为象<span class=\"char_link\"><a href=\"GUID-F28B7789-2D8F-432B-8E29-4F1A84ADD449.htm\">自由形式动画</a></span>，Biped 可以采用任一位置。\n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16DE\"></a>使用层可以轻易地调整各个帧上包含关键点的原始运动捕获数据。简单的增加一个层，以及设置 Biped 的关键帧。通过增加层并移动重心，也可以使用层来改变 Biped 在自由形式和足迹动画中的全局位置。\n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-46C0\"></a> \n               <h2><a name=\"GUID-4973A18B-3E00-45A4-9D42-9674F9CD7DA5\"></a>过程\n               </h2> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7F7F\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045693\"></a>要使用层增加所有关键点（全局偏移），请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>在<img src=\"../images/GUID-EBCA3C24-9B3B-46F2-A058-71C6B3FFD2E6-low.png\">“运动”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“层”卷展栏上，单击 <img src=\"../images/GUID-B8DFFB6C-7203-40A1-944A-78E7CEC9E539-low.png\">（“创建层”）以创建新层。在层名称字段中输入层的名称。\n                  </li>\n                  <li>通过设置一个关键点来创建偏移量（或“增加量”）。您可以使用“自动关键点”模式，也可以单击<span class=\"char_link\"><a href=\"GUID-24693B38-20BD-435D-9816-BE5BDA528506.htm\">“关键点信息”卷展栏</a></span>上的 <img src=\"../images/GUID-88BA9A75-BB96-430C-9B06-A5BAD3A87E19-low.png\">（“设置关键点”），此操作可以在任何帧上完成。\n                  </li>\n                  <li>单击 <img src=\"../images/GUID-CA10B158-9949-482D-8DF0-687900F8D8AA-low.png\">（“塌陷”）使层塌陷。\n                  </li>\n               </ol> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7F7E\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045694\"></a>要使用封套增加关键点的间隔（混合的偏移），请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建一个新的已命名的层。</li>\n                  <li>通过设置一个关键点来创建偏移量。您可以使用“自动关键点”模式，也可以在要发生递增的帧单击“关键点信息”卷展栏上的 <img src=\"../images/GUID-88BA9A75-BB96-430C-9B06-A5BAD3A87E19-low.png\">（“设置关键点”）。\n                  </li>\n                  <li>要创建封套，可在递增范围前后使用 <img src=\"../images/GUID-46FD6DD0-4C64-48DD-9429-DC686A1AA2C5-low.png\">（“捕捉和设置关键点”）。\n                  </li>\n                  <li>单击 <img src=\"../images/GUID-CA10B158-9949-482D-8DF0-687900F8D8AA-low.png\">（“塌陷”）使层塌陷。\n                  </li>\n               </ol> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7F7D\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045695\"></a>要不使用封套增加关键点的间隔（非混合的偏移），请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建一个新的已命名的层。</li>\n                  <li>通过设置两个关键点来创建偏移量。您可以使用“自动关键点”模式，也可以单击“关键点信息”卷展栏上的 <img src=\"../images/GUID-88BA9A75-BB96-430C-9B06-A5BAD3A87E19-low.png\">（“设置关键点”）。在增量开始的帧之前设置一个关键点，以及在增量结束的帧之后再设置一个关键点。\n                  </li>\n                  <li>使用 <img src=\"../images/GUID-46FD6DD0-4C64-48DD-9429-DC686A1AA2C5-low.png\">（“捕捉和设置关键点”）在递增范围前后创建关键点，将运动限制在两个关键点之间范围内的偏移量。\n                  </li>\n                  <li>单击 <img src=\"../images/GUID-CA10B158-9949-482D-8DF0-687900F8D8AA-low.png\">（“塌陷”）使层塌陷。\n                  </li>\n               </ol> \n            </div>\n         </div>\n         <div class=\"related-links\">\n            <h4 class=\"related\">\n               <p class=\"title\"><a name=\"GUID-F4A86E99-F336-4713-9EE9-7D452F5CAB15\"></a>相关信息\n               </p>\n            </h4>\n            <ul>\n               <li><span class=\"char_link\"><a href=\"GUID-04BB89A1-6C0C-4313-B21E-5929FBE3712D.htm\">层</a></span></li>\n               <li><span class=\"char_link\"><a href=\"GUID-1D2FBDE2-55A3-4788-90F8-884A60EEFA6F.htm\">“层”卷展栏</a></span></li>\n            </ul>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";