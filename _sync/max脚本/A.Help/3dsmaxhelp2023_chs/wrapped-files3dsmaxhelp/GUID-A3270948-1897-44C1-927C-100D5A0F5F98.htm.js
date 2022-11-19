var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A3270948-1897-44C1-927C-100D5A0F5F98\">\n      <meta name=\"description\" content=\"对某些类型的动画而言，需要暂停重力对两足动物影响的计算。\">\n      <meta name=\"indexterm\" content=\"足迹: 悬空周期\">\n      <meta name=\"indexterm\" content=\"足迹: 之间自由形式周期\">\n      <meta name=\"indexterm\" content=\"自由形式: 在足迹之间插入周期\">\n      <meta name=\"indexterm\" content=\"自由形式: 在足迹动画中设置周期\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>足迹间的自由形式动画</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A3270948-1897-44C1-927C-100D5A0F5F98\"></a><div class=\"head\">\n            <h1>足迹间的自由形式动画</h1>\n         </div>\n         <p class=\"blurb\">对某些类型的动画而言，需要暂停重力对两足动物影响的计算。 </p>\n         <div class=\"bodyReference\">\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16B\"></a>例如，如果想让一个 Biped 先跑动、跳进水池然后再爬出水池，那么需要为动画的跑动和爬起部分创建足迹，而游泳部分则不需要。当激活足迹后，两足动在游泳周期中会变成悬空状态，也就是在跑动和爬起足迹间高高跳起到空中。 \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16C\"></a>如果在悬空周期中没有暂停重力，那么就无法更改 Biped 的躯干垂直位置以使其降低并放置到水池中。关于在足迹间悬空周期中 Biped 如何动作的详细信息，请参见<span class=\"char_link\"><a href=\"GUID-32D68023-0799-4D91-B0AA-A8DA444DEF64.htm\">调整垂直运动</a></span>。 \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D\"></a>为了实现在悬空周期中暂停重力，可以在动画中创建自由形式周期。在自由形式周期中，能够以自由形式模式制作 Biped 动画，这种模式包括在场景中的任何位置定位 Biped 而不用考虑悬空周期的长度。 \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16E\"></a>轨迹视图 - 摄影表编辑器用于在足迹间插入自由形式周期。在自由形式周期中暂停了垂直动力学（重力影响），取而代之，躯干垂直关键点使用<span class=\"char_link\"><a href=\"GUID-1039FFBC-8AB9-4D24-9B1C-7683B784C301.htm\">样条线动力学</a></span>。 \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-46CA\"></a> \n               <h2><a name=\"GUID-7BCB3B74-88B7-495E-96E0-6A60AB05DD65\"></a>过程\n               </h2> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7FAD\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900455E8\"></a>要将悬空周期转换到自由形式模式，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建至少含有一个悬空周期的足迹动画，然后激活足迹。关于创建含有悬空周期的足迹模式的最简便方法，请参见<span class=\"char_link\"><a href=\"GUID-CF13843B-2042-4825-BE87-27CB297CD3E8.htm\">自动创建足迹</a></span>。 \n                  </li>\n                  <li>通过从 <span class=\"charspan-msgph\">3ds Max</span> 菜单中选择“图形编辑器”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“轨迹视图 - 摄影表”来访问“轨迹视图”。 \n                  </li>\n                  <li>为 Biped 扩展足迹关键点显示。 </li>\n                  <li>右键单击足迹关键点显示区域。出现“足迹模式”对话框。 <a name=\"WS1A9193826455F5FFBA679E112A6A1900455E9\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-84D33B56-375F-4EFA-9ACC-7CBC4011A066-low.png\"></div>  \n                  </li>\n                  <li>在“足迹模式”对话框中，选择编辑自由形式（无物理变化）选项。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1610\"></a>在轨迹视图中的每个悬空周期，会显示空心的黄色框。 \n                     </p> <a name=\"WS1A9193826455F5FF-4F6D1F1D11D24BE3E031DC0\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C601DB6A-F14F-4A54-AC1D-05FE86185442-low.png\"></div>  \n                  </li>\n                  <li>在轨迹视图中显示出足迹关键点，单击想暂停重力的表示悬空周期的黄色框内部。这样会填充黄色框，这表明在该周期中暂停了垂直动力学。 <a name=\"WS1A9193826455F5FFBA679E112A6A1900455EA\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-BFE7843D-2335-4A97-9825-6A6E72A0E83F-low.png\"></div>  \n                  </li>\n                  <li><img src=\"../images/GUID-5B32F2AB-610D-42BB-8C54-81463BE72359-low.png\"> 播放动画。Biped 在所有足迹运动中使用垂直动力学，除了自由形式周期。 <a name=\"WS1A9193826455F5FFBA679E112A6A1900455EB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-066AACA7-A206-453E-BCB5-D673D1FE3AE5-low.png\"></div>  <a name=\"WS1A9193826455F5FFBA679E112A6A1900455EC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-271091D4-FB34-4AFB-A486-9DC33E707520-low.png\"><p></p>\n                        <p class=\"figure-title\">在自由形式周期中不使用垂直动力学，然后在接下来的悬空周期中返回垂直动力学模式。</p>\n                     </div>  \n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E6B6\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果在足迹间设置自由形式周期后激活足迹，那么 Biped 可能会忽略在自由形式周期某一端的足迹。因为这些原因，所以应当在设置自由形式周期前激活足迹。 \n                        </div>\n                     </div> \n                  </li>\n                  <li>在自由形式周期中，随意制作 Biped 动画和设置关键帧。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1611\"></a>为了在创建自由形式周期后编辑足迹计时，必须在“足迹模式”对话框中选择“编辑足迹”选项。 \n                     </p> \n                  </li>\n               </ol> \n            </div>\n         </div>\n         <div class=\"related-links\">\n            <h4 class=\"related\">\n               <p class=\"title\"><a name=\"GUID-2A81AB22-E50C-44BD-BD6D-A01BFD710166\"></a>相关信息\n               </p>\n            </h4>\n            <ul>\n               <li><span class=\"char_link\"><a href=\"GUID-7C28FFD5-3CC2-4E05-897D-CBEB7D151183.htm\">轨迹视图 (Biped) </a></span></li>\n            </ul>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";