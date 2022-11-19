var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-FF375F14-4F27-4059-B0B6-75F889EC7518\">\n      <meta name=\"description\" content=\"本主题介绍了一些用于提高 Physique 交互性能的方法。\">\n      <meta name=\"indexterm\" content=\"Physique: 优化性能\">\n      <meta name=\"contextid\" content=\"TOPIC_IMPROVING_INTERACTIVE_PERFORMANCE_PROCEDURES\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>提高交互式性能</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FF375F14-4F27-4059-B0B6-75F889EC7518\"></a><div class=\"head\">\n            <h1>提高交互式性能</h1>\n         </div>\n         <p class=\"blurb\">本主题介绍了一些用于提高 Physique 交互性能的方法。 </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16761\"></a>Physique 是多线程的，并且针对 Physique 修改器下面的修改器堆栈的变化而优化。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045C94\"></a> \n            <h2><a name=\"GUID-9D77D6A5-D645-4D2A-B699-4EA101B1BB78\"></a>细节级别控制\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16762\"></a>使用 Physique 时，通过指定在视口中自动刷新哪些蒙皮变形，<span class=\"char_link\"><a href=\"GUID-B97BEEBB-EA07-45D7-A9F4-8BCC8858233A.htm\">“Physique 细节级别”卷展栏</a></span>中的控件可以帮助您优化性能。蒙皮对象越复杂，这些控件对加快工作速度越有效。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7B1\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span><span class=\"charspan-msgph\">3ds Max</span> 渲染器也会注意“细节级别”设置。在最后渲染前，切务忘记重置这些控件。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045C95\"></a> \n            <h2><a name=\"GUID-0AB36A72-E6CE-456C-8D19-53852F825163\"></a>开启或关闭混合 \n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16763\"></a>当 Physique 首次初始化时，<span class=\"char_link\"><a href=\"GUID-81F32559-49C4-4CA6-935A-0D7540B420DF.htm\">“Physique 初始化”对话框</a></span>中链接参数间的混合被设置为 <span class=\"char_link\"><a href=\"../files3dsmaxhelp/GUID-E335E3A5-8B4F-4428-B709-7E8F017DB9E1.htm\">N 个链接</a></span>。这意味着当确定对任何<span class=\"char_link\"><a href=\"GUID-2E7C10BD-DE73-4CF5-BEAD-65BD81A5A54C.htm\">顶点</a></span>的影响时，必须考虑到每个封套。虽然在关节上以丢失一些或者所有的混合为代价，但在没有混合（或者只 2、3 或者 4 个链接）的情况下重新初始化会永久降低计算性能。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7B2\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“设置为无混合”只考虑到那些正在制作的角色，将由实时游戏引擎使用。 \n               </div>\n            </div> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16764\"></a>也可在顶点子对象级别设置“无混合”。在“修改”面板上，可以暂时禁用“Physique 细节级别展卷栏”上的“链结混合”。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E9E\"></a> \n            <h2><a name=\"GUID-EDF1C2FB-8999-4490-BFA1-9CE3BEC6302C\"></a>将优化修改器与 Physique 一起使用\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16765\"></a>为了提高显示性能和加快屏幕刷新速度，使用标准的 <span class=\"charspan-msgph\">3ds Max</span> 优化修改器可以降低网格细节级别。使用复杂的蒙皮对象（如详细的 Biped 体形）时，使用 Physique 优化是最有效的。 \n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16766\"></a>堆栈更新选项确定更新堆栈的方式。有关堆栈更新选项的参考，请参阅<span class=\"char_link\"><a href=\"GUID-B97BEEBB-EA07-45D7-A9F4-8BCC8858233A.htm\">“Physique 细节级别”卷展栏</a></span>。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7B3\"></a><div class=\"note-warning\"><span class=\"label label-target-language\">警告:</span>如果全局重新分配当前堆栈更新选项，则每次堆栈改变时，位于 Physique 下堆栈中的任何修改器会促使其重新计算顶点指定。虽然此技术以一种方法改善性能，但是如果在这个堆栈内内需要反复更改降速，将会危害性能。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-466C\"></a> \n            <h2><a name=\"GUID-02B74AD3-1166-4437-9186-A58AF0A5E625\"></a>过程\n            </h2> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7E9D\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045C96\"></a>\n               <!--CPM-ContextId = \'TOPIC_IMPROVING_INTERACTIVE_PERFORMANCE_PROCEDURES\'--><a name=\"GUID-5F3B0035-9A06-4463-A374-21BC64E07140\"></a>要优化蒙皮对象，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择蒙皮。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16767\"></a>如果蒙皮由多个对象组成，则选择所有组件对象。 \n                  </p> \n               </li>\n               <li>将优化修改器应用于蒙皮。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16768\"></a>“修改”面板上出现优化修改“参数”卷展栏。 \n                  </p> \n               </li>\n               <li>在“参数”卷展栏的“优化”组中，增加面阈值的值。 \n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16769\"></a>增加面阈值时，优化可以减少网格中面的数量。 \n                  </p> \n               </li>\n            </ol> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF1676A\"></a>优化过的网格显示得非常快，并且提高对 Physique 的工作速度。不过，因为顶点数量减少，它不显示全部细节，而且有时优化过的蒙皮动画效果不正常。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E7B4\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>在渲染具有动画效果的蒙皮之前，始终要关闭优化。 \n               </div>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";