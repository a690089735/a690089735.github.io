var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-BCB5309F-F974-42E7-872E-243F227133F2\">\n      <meta name=\"description\" content=\"通过“曲面选择”修改器（以前称为“NURBS 曲面选择”），您可以在修改器堆栈上放置 NURBS 子对象选择。从而只可以对选定的子对象进行修改。而且，选中子对象是可作为路径和运动轨迹使用的图形对象。\">\n      <meta name=\"indexterm\" content=\"“曲面选择”修改器\">\n      <meta name=\"indexterm\" content=\"NURBS 曲面选择修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 曲面选择\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 曲面选择\">\n      <meta name=\"indexterm\" content=\"NURBS: 曲面选择\">\n      <meta name=\"contextid\" content=\"MODIFIERS-NSURF_SEL\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“曲面选择”修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-BCB5309F-F974-42E7-872E-243F227133F2\"></a><div class=\"head\">\n            <h1> “曲面选择”修改器</h1>\n         </div>\n         <p class=\"blurb\">通过“曲面选择”修改器（以前称为“NURBS 曲面选择”），您可以在修改器堆栈上放置 <span class=\"char_link\"><a href=\"GUID-FD120DDE-E8BE-4DB9-A2CA-62069059B4FF.htm\">NURBS</a></span> 子对象选择。从而只可以对选定的子对象进行修改。而且，选中子对象是可作为路径和运动轨迹使用的图形对象。 \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_31CDC4091BB94D24A2C77DE691971F3E\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-875C08D2-449C-432A-B274-D057968F71E4\">选择一个 NURBS 曲线或曲面对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “曲面选择”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-34464438-1651-46D4-A628-23473111C73A\">默认菜单：选择一个 NURBS 曲线或曲面对象。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “NURBS 编辑” <img src=\"../images/ac.menuaro.gif\"> “曲面选择”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-F6EB18CE-1876-4537-B449-D5FC229D1885\">Alt 菜单：选择一个 NURBS 曲线或曲面对象。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “NURBS” <img src=\"../images/ac.menuaro.gif\"> “曲面选择”</span> \n               </li>\n            </ul>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E58\"></a>如果 NURBS 曲面对象是<span class=\"char_link\"><a href=\"GUID-93976B21-A523-4534-8877-AE922D121EF9.htm\">非相关的</a></span>，则“曲面选择”不能选择子对象层级的“曲线”、“曲线 CV”或“点”。NURBS 曲面默认为非相关的。通过在对象的“常规”卷展栏中启用“相关堆栈”，可以使曲面成为相关的。 \n            </p>\n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E57\"></a>“曲面选择”可以选择除导入以外的任何类型的 NURBS 子对象。每个子对象选择都只位于特定的子对象层级。 \n            </p>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9CD\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“曲面选择”修改器不像<span class=\"char_link\"><a href=\"GUID-19D683F4-335E-4986-8A73-1632192684AF.htm\">网格选择</a></span>那样支持复制和粘贴选择。复制和粘贴网格选择基于顶点索引。NURBS 选择基于对象 ID，它对于每个模型来说是唯一的。 \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-295B\"></a> \n               <h2><a name=\"GUID-9FEA4E28-E76D-40A4-B48A-96E6BC5198E7\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900439C3\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900439C4\"></a>要使用曲面选择修改器，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择 NURBS 对象。转到 <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”命令面板，然后应用“曲面选择”。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E56\"></a>该修改器没有顶层的控件。 \n                     </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900439C5\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-385E021E-69DF-4688-A861-39E848779391-low.png\"></div>  \n                  </li>\n                  <li>在堆栈显示中，从列表中选择子对象层级。 <a name=\"WS1A9193826455F5FFBA679E112A6A1900439C6\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-B019E155-AFC6-46B0-B4AE-E49967EC7547-low.png\"></div>  \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E55\"></a>“曲面选择”含有与在 NURBS 曲面中看到的相同的选择控件，除了这些控件之外，无法使用选择连接曲线或曲面的其他控件。 \n                     </p> \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E54\"></a>关于堆栈显示的更多信息，请参见<span class=\"char_link\"><a href=\"GUID-80209C3A-C2E4-4541-8738-D1E5ECE16E9C.htm\">修改器堆栈</a></span>。 \n                     </p> \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E53\"></a>应用修改器时，也可以按名称选择 NURBS 子对象。启用<span class=\"char_link\"><a href=\"GUID-C14C1D13-0E8E-4471-9671-077FDFB156C8.htm\">键盘快捷键覆盖切换</a></span>，然后按 <span class=\"keyboardEntry\">H</span> 键。此操作会显示<span class=\"char_link\"><a href=\"GUID-71901B07-61A5-4C2E-BECF-BF3CBB3D5A36.htm\">选择浮动框</a></span>的一个版本，只列出当前级别的子对象。选择列表中的一个或多个对象，然后单击“选择”。 \n                     </p> \n                  </li>\n                  <li>使用 <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择控件来创建所选子对象类型的选择集。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E52\"></a>使用“曲面选择”，选中项可以是曲面 CV，也可以是曲面子对象。如果对 NURBS 对象启用了“相关堆栈”，那么也可以选择点、曲线和曲线 CV 子对象。 \n                     </p> \n                  </li>\n                  <li>在“曲线 CV”子对象层级，按照自己的想法调整“软选择”控件。这些控件与 NURBS 曲线和曲面<span class=\"char_link\"><a href=\"GUID-1F84C561-C3EB-4F91-9C74-B02F3020220B.htm\">“软选择”卷展栏</a></span>中的控件相同，只是不含有“仅相同类型”切换。 \n                  </li>\n               </ol> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3E51\"></a>一旦使用了该修改器去创建选择，接着就可以应用其他修改器了。 \n               </p> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";