var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-FD120DDE-E8BE-4DB9-A2CA-62069059B4FF\">\n      <meta name=\"description\" content=\"在 3ds Max 中建模的方式之一是使用 NURBS 曲面和曲线。NURBS 表示非均匀有理数 B 样条线，是设计和建模曲面的行业标准。它特别适合于为含有复杂曲线的曲面建模。\">\n      <meta name=\"indexterm\" content=\"NURBS: 简介\">\n      <meta name=\"contextid\" content=\"TOPIC_NURBS_MODELING\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <meta name=\"keywords\" content=\"Ctrl+T, H, Ctrl+Shift+N, Shift, Ctrl, Ctrl, H, Ctrl+H, 删除, Ctrl+Shift+N, H, Ctrl+Shift+N, Shift, Ctrl, Ctrl, H, Ctrl+H, Alt+U, Alt+V, Alt+N,  &nbsp;, Ctrl+Shift+N, Ctrl, H, Ctrl+H, 删除,  &nbsp;, Ctrl+Shift+N, Ctrl, Ctrl, H, Ctrl+H, 删除, Ctrl+T, Ctrl+T, Ctrl+T\">\n      <meta name=\"keyword\" content=\"Ctrl+T\">\n      <meta name=\"keyword\" content=\"H\">\n      <meta name=\"keyword\" content=\"Ctrl+Shift+N\">\n      <meta name=\"keyword\" content=\"Shift\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"H\">\n      <meta name=\"keyword\" content=\"Ctrl+H\">\n      <meta name=\"keyword\" content=\"删除\">\n      <meta name=\"keyword\" content=\"Ctrl+Shift+N\">\n      <meta name=\"keyword\" content=\"H\">\n      <meta name=\"keyword\" content=\"Ctrl+Shift+N\">\n      <meta name=\"keyword\" content=\"Shift\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"H\">\n      <meta name=\"keyword\" content=\"Ctrl+H\">\n      <meta name=\"keyword\" content=\"Alt+U\">\n      <meta name=\"keyword\" content=\"Alt+V\">\n      <meta name=\"keyword\" content=\"Alt+N\">\n      <meta name=\"keyword\" content=\" &nbsp;\">\n      <meta name=\"keyword\" content=\"Ctrl+Shift+N\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"H\">\n      <meta name=\"keyword\" content=\"Ctrl+H\">\n      <meta name=\"keyword\" content=\"删除\">\n      <meta name=\"keyword\" content=\" &nbsp;\">\n      <meta name=\"keyword\" content=\"Ctrl+Shift+N\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"Ctrl\">\n      <meta name=\"keyword\" content=\"H\">\n      <meta name=\"keyword\" content=\"Ctrl+H\">\n      <meta name=\"keyword\" content=\"删除\">\n      <meta name=\"keyword\" content=\"Ctrl+T\">\n      <meta name=\"keyword\" content=\"Ctrl+T\">\n      <meta name=\"keyword\" content=\"Ctrl+T\">\n      <title>NURBS 建模</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FD120DDE-E8BE-4DB9-A2CA-62069059B4FF\"></a><div class=\"head\">\n            <h1>NURBS 建模</h1>\n         </div>\n         <p class=\"blurb\">在 <span class=\"charspan-msgph\">3ds Max</span> 中建模的方式之一是使用 NURBS 曲面和曲线。NURBS 表示<em class=\"mild\">非均匀有理数 B 样条线</em>，是设计和建模曲面的行业标准。它特别适合于为含有复杂曲线的曲面建模。 \n         </p>\n         <p><a name=\"WS73099CC142F48755602CAF04118F18E7A07-628F\"></a>使用 NURBS 的建模工具不要求您了解生成这些对象的数学。NURBS 是常用的方式，这是因为这些对象很容易交互操纵，且创建它们的算法效率高，计算稳定性好。 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190041D89\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-058739A2-083D-4ED2-AEA7-49332F558004-low.png\"><p class=\"figure-title\">喷泉创建为 NURBS 模型</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7059\"></a>也可以使用多边形网格或面片来建模曲面。与 NURBS 曲面作比较，网格和面片具有这些缺点： \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190041D8C\"></a><ul>\n            <li>使用多边形会很难创建复杂的弯曲曲面。 </li>\n            <li>由于网格为面状效果，则面状出现在渲染对象的边上。渲染平滑的弯曲边需要大量的小面。 </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7058\"></a>另一方面，NURBS 曲面是解析生成的。可以更加有效地计算它们，而且也可旋转显示为无缝的 NURBS 曲面。（渲染的 NURBS 曲面实际上与多边形相近，但 NURBS 近似可以有细密纹理。） \n         </p><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-7F3EB6C9-AF07-4FFC-B570-3D1AB9852AA5.htm\">NURBS 模型：“对象和子对象”</a><p>与<span class=\"char_link\"><a href=\"GUID-54356FD5-9320-4C31-AD92-A9C234A4C22B.htm\">图形对象</a></span>一样，NURBS 模型是多个 NURBS 子对象的集合。例如，NURBS 对象可能包含以一定间距分隔的两个曲面。可以使用点或控制顶点 (CV) 子对象控制 NURBS 曲线和 NURBS 曲面。点和 CV 的行为与样条线对象的顶点有些类似，但是存在一些区别。\n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-75B24C73-E4F3-4EAD-AB20-C407F5102A7D.htm\">NURBS 曲面</a><p> <span class=\"char_link\"><a href=\"GUID-72D000EA-A330-425C-A612-6E5B83842517.htm\">NURBS</a></span> 曲面对象是 NURBS 模型的基础。使用“创建”面板来创建的初始曲面是带有点或 CV 的平面段。只意味着它是用于创建 NURBS 面板的“粗糙材质”。如果已创建初始的曲面，可以通过移动 CV 或 NURBS 点，附加其他对象，创建子对象等来修改“修改”面板上的曲面。\n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-8DD69DE2-EC6E-42C5-84DA-6DBE6A09472A.htm\">NURBS 曲线</a><p> <span class=\"char_link\"><a href=\"GUID-72D000EA-A330-425C-A612-6E5B83842517.htm\">NURBS</a></span> 曲线是<span class=\"char_link\"><a href=\"GUID-54356FD5-9320-4C31-AD92-A9C234A4C22B.htm\">图形对象</a></span>，在制作样条线时可以使用这些曲线。使用“挤出”或“车削”修改器来生成基于 NURBS 曲线的 3D 曲面。可以将 NURBS 曲线用作放样的路径或图形。（使用 NURBS 曲线创建的放样是放样对象，不是 NURBS 对象。） \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-DCE3700E-7EF1-4478-B976-99C52E3E8A44.htm\">创建 NURBS 曲线和曲面对象</a><p>这些主题介绍如何创建顶层级“起动器”NURBS 对象。</p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-CE9B1F18-7018-403F-9CB2-C7F06D24B085.htm\">创建和编辑 NURBS 子对象</a><p>这些主题介绍如何创建和编辑低层级子对象 NURBS。</p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-2F27D37F-8B5F-48C0-B3B6-44CEF510CAF8.htm\">NURBS 曲线和曲面近似</a><p>本节中的主题介绍如何控制 3ds Max 生成 NURBS 曲线和曲面的方式。</p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";