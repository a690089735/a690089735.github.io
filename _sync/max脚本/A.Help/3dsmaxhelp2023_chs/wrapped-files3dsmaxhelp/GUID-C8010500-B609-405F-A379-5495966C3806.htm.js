var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-C8010500-B609-405F-A379-5495966C3806\">\n      <meta name=\"description\" content=\"ProBoolean 和 ProCutter 复合对象提供了将 2D 和 3D 形状组合在一起的建模工具，这是很难或不可能使用其他工具做到的。\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>ProBoolean/ProCutter 复合对象</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-C8010500-B609-405F-A379-5495966C3806\"></a><div class=\"head\">\n            <h1>ProBoolean/ProCutter 复合对象</h1>\n         </div>\n         <p class=\"blurb\">ProBoolean 和 ProCutter 复合对象提供了将 2D 和 3D 形状组合在一起的建模工具，这是很难或不可能使用其他工具做到的。 \n            \n         </p>\n         <p><a name=\"WS73099CC142F48755558158A8119D88FB23C-45FF\"></a><span class=\"char_link\"><a href=\"GUID-7621338C-661E-4A8E-9CC5-87DC8420D51A.htm\">ProBoolean 复合对象</a></span>在执行布尔运算之前，它采用了 <span class=\"charspan-msgph\">3ds Max</span> 网格并增加了额外的智能。首先它组合了拓扑，然后确定共面三角形并移除附带的边。然后不是在这些三角形上而是在 N 多边形上执行布尔运算。完成布尔运算之后，对结果执行重复三角算法，然后在共面的边隐藏的情况下将结果发送回 <span class=\"charspan-msgph\">3ds Max</span> 中。这样额外工作的结果有双重意义：布尔对象的可靠性非常高，因为有更少的小边和三角形，因此结果输出更清晰。 \n            	 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900418BF\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1010D015-09BF-41A1-8637-D50A5C510B5B-low.png\"></div><a name=\"WS1A9193826455F5FFBA679E112A6A1900418C0\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-6F065632-71DC-4241-AC10-3DF0105D4736-low.png\"><p class=\"figure-title\">使用 ProBoolean 组合的对象</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4839\"></a>ProBoolean 的优势包括： \n            	 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900418C1\"></a><ul>\n            <li> <em class=\"strong\">高质量网格：</em>小边、窄三角形。 \n               		\n            </li>\n            <li> <em class=\"strong\">小网格：</em>顶点和面较少。 \n               		\n            </li>\n            <li> <em class=\"strong\">整合的百分数和四边形网格</em> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4838\"></a>此外，<span class=\"char_link\"><a href=\"GUID-D8229784-21AC-4CF4-9CEA-F5BE8DEC4494.htm\">ProCutter</a></span> 是一个用于爆炸、断开、装配、建立截面或将对象（如 3D 拼图）拟合在一起的出色的工具。请参见破碎高脚杯示例的以下说明。 \n            	 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900418C2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1EFE774D-7DCB-47AC-8573-5E9B28EA60C5-low.png\"><p class=\"figure-title\">使用 ProCutter 对象打碎玻璃</p>\n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-7621338C-661E-4A8E-9CC5-87DC8420D51A.htm\">ProBoolean 复合对象</a><p>布尔对象通过对两个或多个其他对象执行布尔运算将它们组合起来。ProBoolean 提供了一系列功能，例如一次合并多个对象的能力，每个使用不同的布尔操作。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-D8229784-21AC-4CF4-9CEA-F5BE8DEC4494.htm\">ProCutter 复合对象</a><p>ProCutter 复合对象能够使您执行特殊的布尔运算，主要目的是分裂或细分体积。  </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-EC3DD1B9-6524-418C-B18C-567938A9DD24.htm\">四边形网格和平滑</a><p>ProBoolean、ProCutter 和<span class=\"char_link\"><a href=\"GUID-86C91698-9BAC-4A62-82DC-288E2815375B.htm\">四边形网格化修改器</a></span>可以使用四边形网格算法重设平面曲面的网格。将该能力与“网格平滑”、“涡轮平滑”和“可编辑多边形”中的细分曲面工具结合使用可以产生动态效果。 \n                     </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";