var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-17245354-DEF5-484D-B7A8-889DA18BB36E\">\n      <meta name=\"description\" content=\"在缩放对象时对其进行克隆可生成各种嵌套对象和阵列，具体情况取决于选择的中心。\">\n      <meta name=\"indexterm\" content=\"克隆: shift + 缩放\">\n      <meta name=\"indexterm\" content=\"按住 Shift 键并克隆: 使用\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>使用 Shift+ 缩放进行克隆</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-17245354-DEF5-484D-B7A8-889DA18BB36E\"></a><div class=\"head\">\n            <h1>使用 Shift+ 缩放进行克隆</h1>\n         </div>\n         <p class=\"blurb\">在缩放对象时对其进行克隆可生成各种嵌套对象和阵列，具体情况取决于选择的中心。 \n            \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190041A47\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-30B8A401-A6EA-4F6D-A4D4-55731EB9F5A6-low.png\"><p class=\"figure-title\"> 使用“Shift+缩放”创建具有不同大小的克隆。</p>\n         </div>\n         <div style=\"margin-top: 9pt;\"><a name=\"GUID-4BF158EC-94E0-4FEC-8056-44E44EFEEF46\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> <span class=\"char_link\"><a href=\"GUID-9DF0E9DB-F68E-448D-BB9E-C75CA85B6E70.htm\">Maya 模式</a></span>处于活动状态时，不能通过按住 <span class=\"keyboardEntry\">Shift</span> 键并拖动来克隆对象。在 Maya 模式下，请按住 <span class=\"keyboardEntry\">Shift</span> 键并左键单击选择或取消选择对象。 \n               	 \n            </div>\n         </div><a name=\"WS1A9193826455F5FFBA679E112A6A190041A48\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041A49\"></a>若要使用“Shift+缩放”进行克隆，请执行以下操作：\n         </p>\n         <ol type=\"1\" start=\"1\">\n            <li>单击主工具栏上的“缩放”按钮。 \n               		\n            </li>\n            <li>选择坐标系、轴约束和变换中心。 \n               		\n            </li>\n            <li>选择要克隆的对象。 \n               		\n            </li>\n            <li>按住 <span class=\"keyboardEntry\">Shift</span> 键，然后拖动以缩放选择对象。 \n               		\n            </li>\n            <li>使用“克隆选项”对话框来选择要制作的克隆数，然后使它们成为副本、实例或参考。 \n               		\n            </li>\n         </ol>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041A4A\"></a> \n            <h2><a name=\"GUID-EA4B8641-4863-4D7C-B300-A8587754AEA2\"></a>变换设置的效果\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E6\"></a>变换设置通过使用 <span class=\"keyboardEntry\">Shift</span> + 缩放来确定 <span class=\"charspan-msgph\">3ds Max</span> 分布选择对象克隆的方式。在所有缩放操作中，变换中心作为缩放中心： \n               		\n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041A4B\"></a><ul>\n               <li>当克隆对象减少大小时，这些对象将朝向变换中心收缩。 \n                  		  \n               </li>\n               <li>当克隆对象增加大小时，这些对象将背离变换中心展开。 \n                  		  \n               </li>\n            </ul> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E5\"></a>克隆对象之间的距离像克隆本身一样进行缩放，该缩放是基于原始克隆到第一个克隆的初始距离进行的。相对于变换中心的空间成比例增加或减少。 \n               		\n            </p> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041A4C\"></a> \n               <h3><a name=\"GUID-2A73351C-B814-48CD-93EE-6E2E5DCCCEB1\"></a>嵌套副本\n               </h3> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E4\"></a>当选择中心用做单个对象的变换中心时，缩放将围绕此中心对称出现，从而生成嵌套副本。 \n                  		  \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041A4D\"></a><ul>\n                  <li>当朝向中心进行缩放时，创建越来越小的副本。 \n                     			 \n                  </li>\n                  <li>在其他方向上，由增加较大的副本来围绕原始对象。 \n                     			 \n                  </li>\n               </ul> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E3\"></a>有可能有各种变化，具体情况取决于缩放和轴限制的类型。例如，通过使用<span class=\"char_link\"><a href=\"GUID-D51970C6-5F52-4C52-8CA8-55FDBEB7A030.htm\">挤压</a></span>和在 Z 轴上向内进行克隆，您可以将扁平长方体缩放为一个渐进的呈阶梯状四棱锥。 \n                  		  \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041A4E\"></a> \n               <h3><a name=\"GUID-50FA2995-47FA-4F79-8195-1C7478801264\"></a>偏移中心\n               </h3> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E2\"></a>对于 <span class=\"keyboardEntry\">Shift</span> + 缩放，除了局部轴的任何中心都具有创建渐进缩放对象的阵列的效果。另外，对象朝向中心向下缩放大小，同时远离中心增加大小。但是，特定的缩放选项和轴约束限制此效果，下一章节会对此进行讨论。 \n                  		  \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041A4F\"></a> \n               <h3><a name=\"GUID-84D3EBEC-80EE-47F7-828E-F28F439BE677\"></a>轴约束\n               </h3> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E1\"></a>非均匀缩放不受轴约束，这样可以使用变换 Gizmo 来设置。副本始终从当前坐标系的中心由向内或向外排列。 \n                  		  \n               </p> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-2E0\"></a>对于“非均匀缩放”和“挤压”，缩放只在沿着轴或使用限制轴设置的轴时才出现。 \n                  		  \n               </p> \n               <div><a name=\"WS73099CC142F487551051018113CCCDB767-96C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“限制到”按钮（也称做“轴约束”按钮）在<span class=\"char_link\"><a href=\"GUID-9974EB8A-AE38-42AE-AC83-75DAA3F7D5E7.htm\">“轴约束”工具栏</a></span>上可用，默认情况下处于禁用状态。通过右键单击工具栏的空白区域并从<span class=\"char_link\"><a href=\"GUID-DBC08DD5-F581-486A-BD08-56A115CD32ED.htm\">“自定义显示”右键单击菜单</a></span>中选择“轴约束”来切换此工具栏的显示。 \n                     		  \n                  </div>\n               </div> \n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";