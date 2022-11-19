var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-441E85B0-3511-40F4-8E2F-6B302E55ECEE\">\n      <meta name=\"description\" content=\"反向运动学建立在层次链接的概念上。要了解 IK 是如何进行工作的，首先必须了解层次链接和正向运动学的原则。请参见使用正向运动学设置动画和反向运动学 (IK)。\">\n      <meta name=\"indexterm\" content=\"反向运动学: 方法\">\n      <meta name=\"indexterm\" content=\"方法 (IK)\">\n      <meta name=\"indexterm\" content=\"应用式 IK\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>反向运动学方法</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-441E85B0-3511-40F4-8E2F-6B302E55ECEE\"></a><div class=\"head\">\n            <h1>反向运动学方法</h1>\n         </div>\n         <p class=\"blurb\">反向运动学建立在层次链接的概念上。要了解 IK 是如何进行工作的，首先必须了解层次链接和正向运动学的原则。请参见<span class=\"char_link\"><a href=\"GUID-E8CE8A19-6C17-4121-ACA0-DE230B95B5A7.htm\">使用正向运动学设置动画</a></span>和<span class=\"char_link\"><a href=\"GUID-516E301F-E911-429F-9337-9FA7FAD49BB6.htm\">反向运动学 (IK)</a></span>。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044D09\"></a> \n            <h2><a name=\"GUID-238AE578-A608-4AD9-A319-C871EF29479B\"></a>IK 解算器\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E7F\"></a> <span class=\"char_link\"><a href=\"GUID-AE4A0089-95F5-4199-A853-ABB8E0DB3439.htm\">IK 解算器</a></span>是按程序在一定范围的帧上应用 IK 解决方案的特殊控制器。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E7D\"></a><span class=\"charspan-msgph\">3ds Max</span> 附带了四种不同的 IK 解算器： \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044D0A\"></a><ul>\n               <li>HD（历史依赖型） </li>\n               <li>HI（历史独立型） </li>\n               <li>IK 肢体 </li>\n               <li> 样条线 IK </li>\n            </ul> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E54D\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果要将 IK 解算器放置到两个骨骼的链上，就还需要一块骨骼。选择第一块骨骼，然后从“创建”菜单中单击 IK 解算器，然后在视口中单击第三块骨骼。 \n               </div>\n            </div> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E7C\"></a>通常，所有的 IK 解算器有以下共同点： \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044D0B\"></a><ul>\n               <li>可以在任何层次上工作。 </li>\n               <li>可以在任何层次或骨骼结构上工作。 </li>\n               <li>在进行更改时，为所有帧实时计算 IK 解决方案。 </li>\n               <li>允许在一个单个的层次内创建多个 IK 链。 </li>\n               <li>允许在一个单个的层次内创建多个或重叠的 IK 链。 </li>\n               <li>以图形方式显示活动的关节轴和关节限制。 </li>\n               <li>使用节点、目标或末端效应器来设置链末端的动画。 </li>\n               <li>使用末端效应器来设置链末端的动画。 </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E7B\"></a>IK 解算器只在 IK 目标或末端效应器上替换关键帧，这与正向运动学（或非解算器 IK 方法）正好相反，它在骨骼或层次对象本身上替换旋转关键帧。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190044D0C\"></a> \n            <h2><a name=\"GUID-DD1538FF-B8B3-4821-B630-98525A238DF1\"></a>其他 IK 方法\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E7A\"></a>除了 IK 解算器之外，<span class=\"charspan-msgph\">3ds Max</span> 还提供了两个反向运动学动画的非解算器方法：交互式 IK 和应用式 IK。这些 IK 方法不应用 IK 解算器。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E54E\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>这些是从 <span class=\"charspan-msgph\">3ds Max</span> 最早版本延续下来的较老的 IK 方法。通常建议优先使用 IK 解算器，而不是交互式 IK 或应用式 IK。 \n               </div>\n            </div> <a name=\"WS1A9193826455F5FFBA679E112A6A190044D0D\"></a><ul>\n               <li> <span class=\"char_link\"><a href=\"GUID-F8D02C95-44D6-42A3-8DDF-2D8D17B77D78.htm\">交互式 IK</a></span> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E79\"></a>“交互式 IK”可以在不应用 IK 解算器的情况下在层次上使用 IK 操纵器。可以激活“交互式 IK”（在“层次”面板的 IK 面板和“层次”工具栏上）并手动设置末端效应器位置的动画，来设置 IK 结构的动画。IK 解决方案仅为设置的关键帧进行计算。所有其他的运动都是插补的，就如对象的控制器所设置的一样。移动链的末端只是将旋转关键点添加到链中的对象上。对于其他控件，对象可以指定关节限制。也可以使用<span class=\"char_link\"><a href=\"GUID-12500210-C3FC-4289-9181-2AB0A0E6E7D6.htm\">“自动终结”卷展栏</a></span>中的工具来终止链。 \n                  </p> \n               </li>\n               <li> <span class=\"char_link\"><a href=\"GUID-03F614BB-7449-460C-9D31-1D6FB490418B.htm\">使用应用式 IK 设置动画</a></span> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E78\"></a>使用“应用式 IK”，可以设置跟随对象的动画，并且 <span class=\"charspan-msgph\">3ds Max</span> 可在指定范围的每一帧上求解。IK 解决方案作为标准变换动画关键点而应用。“应用式 IK”使用所有对象的链接层次，除使用“HI 解算器”或“IK 肢体解算器”的骨骼之外。它可以在相同的对象上合并正向运动学和反向运动学。可以将它自动应用到一定范围的帧上，或交互式的应用到单个帧上。\n                     \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E76\"></a>“应用式 IK”速度比较快而且比较精确，但它在每一帧上为运动链上的每一个对象创建关键点。大量关键点使以后难以调整动画。重复使用“应用式 IK”来调整动画。 \n                  </p> \n               </li>\n            </ul> \n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-AE4A0089-95F5-4199-A853-ABB8E0DB3439.htm\">IK 解算器</a><p>IK 解算器可以创建反向运动学解决方案，用于旋转和定位链中的链接。它可以应用 IK 控制器，用来管理链接中子对象的变换。您可以将 IK 解算器应用于对象的任何层次。使用“动画”菜单中的命令，可以将 IK 解算器应用于层次或层次的一部分。在层次中选中对象，并选择\n                        IK 解算器，然后单击该层次中的其他对象，以便定义 IK 链的末端。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-0386B708-F88D-4A11-A8B0-9031FC0D13F5.htm\">“交互式 IK”和“应用式 IK”</a><p>交互式 IK 和应用式 IK 是 IK 解算器方法的备选方法。</p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";