var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-17B0FB7F-543B-4727-A16B-EAAF80922666\">\n      <meta name=\"description\" content=\"可以按类别（对象的基本类型）隐藏对象。例如，可以同时隐藏场景中的所有灯光、所有图形或任意类别组合。隐藏所有类别后，场景看起来是空的。隐藏的对象虽然不显示，但仍继续作为场景中几何体的一部分存在，只是无法对其进行选择。\">\n      <meta name=\"indexterm\" content=\"类别, 对象的隐藏和取消隐藏方式\">\n      <meta name=\"indexterm\" content=\"隐藏和取消隐藏: 按类别\">\n      <meta name=\"contextid\" content=\"40190.0\">\n      <meta name=\"contextid\" content=\"40191.0\">\n      <meta name=\"contextid\" content=\"40186.0\">\n      <meta name=\"contextid\" content=\"40185.0\">\n      <meta name=\"contextid\" content=\"40187.0\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>按类别隐藏和取消隐藏对象</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-17B0FB7F-543B-4727-A16B-EAAF80922666\"></a><div class=\"head\">\n            <h1>按类别隐藏和取消隐藏对象</h1>\n         </div>\n         <p class=\"blurb\">可以按类别（对象的基本类型）隐藏对象。例如，可以同时隐藏场景中的所有灯光、所有图形或任意类别组合。隐藏所有类别后，场景看起来是空的。隐藏的对象虽然不显示，但仍继续作为场景中几何体的一部分存在，只是无法对其进行选择。 </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900426BD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-48CE4B66-5FB5-4842-8362-6D63BE6E2E66-low.png\"></div>\n         <p><a name=\"GUID-79BF5274-4931-4DCC-BA66-92F6B004D6ED\"></a> <em class=\"strong\">上面：显示所有对象</em> \n         </p>\n         <p><a name=\"GUID-E9493386-475A-42D0-8FBC-07AD341BED7A\"></a> <em class=\"strong\">下面：隐藏了灯光和图形</em> \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900426BE\"></a> \n            <h2><a name=\"GUID-C20F0397-3AFB-401D-8540-D41058CA2147\"></a>隐藏几何体和粒子系统\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7F49\"></a>几何体和粒子系统具有单独的类别，即使粒子系统也是几何体。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900426BF\"></a><ul>\n               <li>选择“几何体”将隐藏场景中的所有几何体，包括粒子系统。粒子系统的选项将不可用。 </li>\n               <li>选择“粒子系统”将只隐藏这些对象，对其他几何体不产生影响。 </li>\n            </ul> \n         </div>\n         <div class=\"section\"><a name=\"WSF742DAB041063133-B5E9D0A112A1CEB315-7FF4\"></a> \n            <h2><a name=\"GUID-CCFB592E-722E-473D-8404-6E33E41C3F82\"></a>按类别隐藏的效果\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900426C0\"></a><ul>\n               <li>如果在隐藏的类别中创建对象，<span class=\"charspan-msgph\">3ds Max</span> 会禁用该类别的隐藏，并会取消隐藏该类别中的对象。 \n               </li>\n               <li>按类别取消隐藏对使用“隐藏”卷展栏上的控件进行隐藏的对象没有影响（请参见<span class=\"char_link\"><a href=\"GUID-F1D5767C-155D-4DEE-9721-61B065E53EAB.htm\">按选择隐藏和取消隐藏对象</a></span>）。这些对象仍保持隐藏状态。需要使用该卷展栏上的控件来取消隐藏这些对象。 \n               </li>\n               <li>按类别取消隐藏对于已经关闭的层上的对象没有影响。这些对象仍为不可见。您需要打开其所在层来显示相应对象。 </li>\n               <li>如果隐藏对象类别，则按选择取消隐藏并不能将隐藏对象返回至场景中。“全部取消隐藏”和“按名称取消隐藏”控件继续起作用，但直到类别被清除后，才能看到效果。 </li>\n               <li>按类别隐藏的灯光会继续照明。通过摄影机和目标灯光的视图仍处于活动状态。 </li>\n               <li>隐藏时，链接对象、实例对象和参考对象会如同其可见时一样表现。 </li>\n            </ul> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5DC4\"></a> \n            <h2><a name=\"GUID-350AC989-8AED-46F6-A54F-CF123AA1C667\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900426C1\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900426C2\"></a>要隐藏对象类别，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li> <img src=\"../images/GUID-35FF54C8-2558-4A3B-AF13-8B72BB0E8C56-low.png\"> 打开“显示”面板。 \n               </li>\n               <li>如有必要，单击“按类别隐藏”展开卷展栏。默认情况下，该卷展栏上的所有类别都处于禁用状态（未隐藏）。 </li>\n               <li>选择要隐藏的类别。进行选择后，该类别的所有对象都将立即从场景中消失。 </li>\n            </ol> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7F48\"></a>相同的“按类别隐藏”选项将显示在“显示浮动框”的“对象层级”面板中（默认菜单：“工具”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“显示浮动框”；Alt 菜单：“编辑”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“对象属性”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“管理对象显示”）。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900426C3\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900426C4\"></a>要取消隐藏对象类别，请执行以下操作：\n            </p>\n            <ul>\n               <li>取消选择类别。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7F47\"></a>此类别中的所有对象都将重新显示，除非已经按选择隐藏了某些对象。请参见<span class=\"char_link\"><a href=\"GUID-17B0FB7F-543B-4727-A16B-EAAF80922666.htm#WSF742DAB041063133-B5E9D0A112A1CEB315-7FF4\">按类别隐藏的效果</a></span>。 \n                  </p> \n               </li>\n            </ul> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";