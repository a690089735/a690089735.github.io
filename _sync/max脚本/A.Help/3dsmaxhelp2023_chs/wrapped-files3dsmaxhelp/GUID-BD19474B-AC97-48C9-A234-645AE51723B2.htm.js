var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-BD19474B-AC97-48C9-A234-645AE51723B2\">\n      <meta name=\"description\" content=\"“修剪”/“延伸”修改器主要用于在多个样条线中清理重叠或打开样条线使这些线相交于一个单独的点。当与“圆角”/“切角”修改器一起使用时，该修改器对图形中子对象层级的样条线进行操作。在应用于多个样条线的选择时，“修剪”/“延伸”的操作与处理单独样条线时一样。\">\n      <meta name=\"indexterm\" content=\"延伸修改器\">\n      <meta name=\"indexterm\" content=\"“修剪/延伸”修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 修剪/延伸\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 修剪/延伸\">\n      <meta name=\"contextid\" content=\"TRIM_EXTEND.MODIFIERS\">\n      <meta name=\"contextid\" content=\"MODIFIERS-TRIM_EXTEND\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>修剪/延伸修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-BD19474B-AC97-48C9-A234-645AE51723B2\"></a><div class=\"head\">\n            <h1>修剪/延伸修改器</h1>\n         </div>\n         <p class=\"blurb\">“修剪”/“延伸”修改器主要用于在多个样条线中清理重叠或打开样条线使这些线相交于一个单独的点。当与“圆角”/“切角”修改器一起使用时，该修改器对图形中子对象层级的样条线进行操作。在应用于多个样条线的选择时，“修剪”/“延伸”的操作与处理单独样条线时一样。\n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_7B6657EE4E134208A9B4CC50AE9C007D\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-F92C14C3-67D8-4AE3-9912-AE66F8D3FC75\">选择一个图形。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “修剪/延伸”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-486BB63F-E83E-42D9-84E2-62BF5BD0FA5A\">默认菜单：选择一个图形。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “面片/样条线编辑” <img src=\"../images/ac.menuaro.gif\"> “修剪/延伸”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-CE8928D5-737B-43B9-B552-CF8C54C4ACA2\">Alt 菜单：选择一个图形。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “样条线” <img src=\"../images/ac.menuaro.gif\"> “修剪/延伸”</span> \n               </li>\n            </ul>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-39D1\"></a>要进行修剪，需要将样条线相交。单击要移除的样条线部分。样条线沿着它的长度搜索直到与另一条样条线相交，并删除到相交点的部分。如果线段在两边相交，整个线段删除两个相交点之间的部分。如果线段是一端打开并在另一端相交，整个线段将交点与开口端之间的部分删除。如果线段没有相交，则不进行任何处理。\n               \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-39D0\"></a>要进行延伸操作，需要一条开口样条线。样条线最接近拾取点的末端会延伸直到它到达另一条相交的样条线。如果没有相交样条线，则不进行任何处理。曲线样条线沿样条线末端的曲线方向延伸。如果样条线的末端直接位于边缘（相交样条线），它会沿此向更远方向寻找相交点。\n               \n            </p><a name=\"WS1A9193826455F5FFBA679E112A6A190043C60\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-21DC7394-C141-4F8F-A666-CBB67996A6AE-low.png\"><p class=\"figure-title\">在开始使用修剪之前和之后</p>\n            </div><a name=\"WS1A9193826455F5FFBA679E112A6A190043C61\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2468DA69-BB9F-491C-892A-41D1FBEB05D1-low.png\"><p class=\"figure-title\">在以上样条线上第二次应用修剪之前和之后</p>\n            </div><a name=\"WS1A9193826455F5FFBA679E112A6A190043C62\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7B3D643D-EA70-484E-A71D-E8C91E0B01FE-low.png\"><p class=\"figure-title\">使用延伸之前和之后</p>\n            </div>\n            <div style=\"margin-top: 9pt;\"><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA3D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“<span class=\"char_link\"><a href=\"GUID-60F20068-36AE-4CB8-9FE1-EEE1516AEF86.htm\">编辑/可编辑样条线</a></span>”包含交互式修剪/延伸功能。改用此修改器，在堆栈的特定位置应用修剪/延伸效果，或在希望使用“相交投影”选项时应用修剪/延伸效果。 \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-290F\"></a> \n               <h2><a name=\"GUID-43972ACF-84B0-45FD-BEA4-E505CE79EFFB\"></a>步骤\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043C63\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190043C64\"></a>示例：要使用“修剪/延伸”修改器修剪图形，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>以大致为同心圆的重叠圆的形式来创建一个开口<span class=\"char_link\"><a href=\"GUID-1408D223-7A05-4163-A7FA-5314DF5352BE.htm\">线形图形</a></span>。 \n                  </li>\n                  <li> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\"> 应用“修剪/延伸”修改器。 \n                  </li>\n                  <li>单击“拾取位置”。 </li>\n                  <li>单击同心圆图形的内部样条线段来将它们修剪开，或者单击开口样条线部分来延伸样条线。 </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-290E\"></a> \n               <h2><a name=\"GUID-F412DA7F-6E6F-4DAF-A4F4-A89BE812CFAA\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043C65\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-B2BB5C89-5778-4051-84CF-8EE4FE417CD5-low.png\"></div>  <a name=\"GUID-E9382D16-6330-49E7-90B8-67552C17CC26\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-5F55\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-39CF\"></a>拾取位置</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7E25\"></a> 单击启用拾取模式。在此模式中，鼠标光标在位于可以被修剪/延伸修改器影响的样条线部分上方时会改变显示。单击修剪或延伸样条线，基于下面的设置。默认情况下为“自动”。 \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-C847763C-3304-443A-A93B-6658852CF8E4\"></a><p class=\"title\"><a name=\"GUID-64EFB7CC-74A0-4233-9599-362ACCEC359F\"></a>“运算”组\n                  </p>\n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-39CE\"></a> 指定在选中样条线上执行的操作。 \n                  </p><a name=\"UL_95CD4433B3D34A7BAE4CE807678327D9\"></a><ul>\n                     <li><em class=\"strong\">自动</em>选择此选项后，将先查找修剪，如果未找到，则尝试延伸。大多数情况下，选中自动会执行修剪。然而，在开口样条线的位置没有其它相交样条线的情况下会执行延伸操作。 \n                     </li>\n                     <li><em class=\"strong\">仅修剪</em>仅执行修剪操作。启用拾取位置。然后单击要修剪的样条线段。 \n                     </li>\n                     <li><em class=\"strong\">仅延伸</em>仅执行延伸操作。单击拾取位置，并选中要延伸的开口样条线段。 \n                     </li>\n                  </ul>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-5F51\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-39CA\"></a>无限边界</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7E21\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8751DD1\"></a>为了计算相交，启用此选项将开口样条线视为无穷长。例如，此项会允许将线形样条线沿着另一条线长度的相反方向至实际上并没有相交的位置进行修剪。 \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0EA3F\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在图形中增加开口样条线的同时，当使用无限边界时，找到交点的机会也会相应增加。此项会产生所不想要的结果因为没有考虑到投影样条线的交点，特别是在自动模式时。为了达到想要的结果，在使用“无限边界”时避免使用“自动模式”。 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-5B68713B-04CB-489B-960B-9FE9139B488F\"></a><p class=\"title\"><a name=\"GUID-2324719E-97CF-4EA1-8A15-071CE11B64C5\"></a>“相交投影”组\n                  </p>\n                  <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-39C9\"></a>这些选项指定了修剪和延伸功能决定可用交点的方式。 \n                  </p><a name=\"UL_2D5D544EFCB5425D97E143725F4BCCFE\"></a><ul>\n                     <li><em class=\"strong\">查看</em>将线投影到活动视口中，并据此判断交点。这些就是在活动视口中所看到的交点。 \n                     </li>\n                     <li><em class=\"strong\">构造平面</em>将线投影到当前构造平面上。 \n                     </li>\n                     <li><em class=\"strong\">无(3D)</em>仅考虑在 3D 空间中存在的样条线的真实交点。它们必须是要考虑的物理交点。 \n                     </li>\n                  </ul>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";