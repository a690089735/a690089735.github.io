var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-70457054-7278-4DFD-9624-B96007428995\">\n      <meta name=\"description\" content=\"参考坐标系确定变换使用的 X、Y 和 Z 轴的方向。您使用的变换系统类型将影响所有的变换操作。\">\n      <meta name=\"indexterm\" content=\"指定: 参考坐标系\">\n      <meta name=\"indexterm\" content=\"参考坐标系: 指定\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>指定参考坐标系</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-70457054-7278-4DFD-9624-B96007428995\"></a><div class=\"head\">\n            <h1>指定参考坐标系</h1>\n         </div>\n         <p class=\"blurb\"><span class=\"charspan-emphasis\">参考</span>坐标系确定变换使用的 X、Y 和 Z 轴的方向。您使用的变换系统类型将影响所有的变换操作。\n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7679\"></a>使用<span class=\"char_link\"><a href=\"GUID-0F3E2822-9296-42E5-A572-B600884B07E3.htm\">“参考坐标系”列表</a></span>可以指定该变换坐标系。\n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E91\"></a> \n            <h2><a name=\"GUID-1AFBB6DD-C4F5-45C5-AC8A-F09209A6E8B7\"></a>创建局部轴\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7678\"></a>建模时，具有一个临时、可移动的局部轴非常有用，这样您可以围绕任意中心进行旋转或缩放。\n            </p> \n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-7493\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>此技术不适用于动画。关于动画提示，请参见<span class=\"char_link\"><a href=\"GUID-3D3DB646-42A1-4B7D-9A32-9CCDD65DE357.htm\">选择变换中心</a></span>。\n               </div>\n            </div> \n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-7492\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>此方法的备用方法是，可以使用<span class=\"char_link\"><a href=\"GUID-A7F865D8-7887-4AF0-9976-0CA59E420D6B.htm\">工作轴</a></span>。\n               </div>\n            </div> <a name=\"WS1A9193826455F5FFBA679E112A6A190043E92\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E93\"></a>要创建可调整的局部轴，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>创建一个<span class=\"char_link\"><a href=\"GUID-95468EA8-A4FF-4687-BC99-75A563DF094C.htm\">点辅助对象</a></span>。 \n               </li>\n               <li>从“变换坐标系”列表中选择“拾取”，然后单击点对象。\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7676\"></a>点对象的名称将作为活动的坐标系出现在列表中。\n                  </p>\n               </li>\n            </ol> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7675\"></a>此时可以将点对象坐标系用作可调整轴。\n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190043E94\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043E95\"></a>要使用可调整轴，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>将点对象放在旋转或缩放变换要以其为中心的地方。</li>\n               <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择要变换的对象。\n               </li>\n               <li>在“变换坐标系”下拉列表中选择点对象的名称。</li>\n               <li>从<span class=\"char_link\"><a href=\"GUID-57814FDB-4D6B-469D-9D46-84380E12C8C3.htm\">“使用中心”弹出按钮</a></span>中选择“使用变换坐标中心”。详细信息请参见<span class=\"char_link\"><a href=\"GUID-3D3DB646-42A1-4B7D-9A32-9CCDD65DE357.htm\">选择变换中心</a></span>。\n               </li>\n               <li>继续进行变换。</li>\n            </ol> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";