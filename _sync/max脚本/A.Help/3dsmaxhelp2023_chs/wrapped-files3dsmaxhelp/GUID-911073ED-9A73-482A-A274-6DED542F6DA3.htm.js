var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-911073ED-9A73-482A-A274-6DED542F6DA3\">\n      <meta name=\"description\" content=\"将位图或程序贴图指定给“裁切”组件可使材质部分透明。贴图的浅色（较高的值）区域渲染为不透明；深色区域渲染为透明；之间的值渲染为半透明。\">\n      <meta name=\"indexterm\" content=\"贴图作为材质组件: 裁切\">\n      <meta name=\"indexterm\" content=\"裁切贴图\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>裁切贴图</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-911073ED-9A73-482A-A274-6DED542F6DA3\"></a><div class=\"head\">\n            <h1>裁切贴图</h1>\n         </div>\n         <p class=\"blurb\">将<span class=\"char_link\"><a href=\"GUID-A1654CD2-2A7C-42A6-816D-28F7A849F96F.htm\">位图</a></span>或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>指定给“裁切”组件可使材质部分透明。贴图的浅色（较高的值）区域渲染为不透明；深色区域渲染为透明；之间的值渲染为半透明。 \n         </p><a name=\"UL_F618763D7CF0443395A7A5E5BA119594\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-28A395B4-3AB2-4EC1-9AC9-B5938F767E49\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “建筑”材质  <img src=\"../images/ac.menuaro.gif\"> “特殊效果”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “裁切贴图”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-0980EFE6-D6C5-4F9B-AF00-137DE1787A58\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “光线跟踪”材质  <img src=\"../images/ac.menuaro.gif\"> “贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “透明度”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-BAC990C0-870C-4163-8397-81A8F7116BA1\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “Arch &amp; Design”材质  <img src=\"../images/ac.menuaro.gif\"> “特殊用途贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “裁切贴图”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-FFE70C01-D234-4682-8927-A0A793981EE3\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “Autodesk 通用”材质  <img src=\"../images/ac.menuaro.gif\"> “裁切”卷展栏  <img src=\"../images/ac.menuaro.gif\">  启用“启用”。 <img src=\"../images/ac.menuaro.gif\"> “图像”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-55A4FDB9-54E1-4B41-864D-F2E702ABC3DC\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “Autodesk 金属”材质  <img src=\"../images/ac.menuaro.gif\"> “裁切”卷展栏  <img src=\"../images/ac.menuaro.gif\">  将“类型”更改为“自定义”。 <img src=\"../images/ac.menuaro.gif\"> “图像”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-E848AA70-2B11-4574-8CED-19B31E23C5A4\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\">  具有“裁切”组件的其他材质</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF326CD\"></a>将裁切贴图的“数量”设置为 100 可应用于所有贴图。透明区域将完全透明。将“数量”设置为 0 相当于禁用贴图。中间“数量”值将与原始“透明度”值混合。贴图的透明区域将变得更加不透明。 \n         </p><a name=\"WS73099CC142F487554E67820D1283FBC0BF326CE\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A1124CC2-5826-47B6-8362-1CCDCB16C27B-low.png\"><p class=\"figure-title\">裁切贴图的灰度决定透明的数量。</p>\n         </div>\n         <div class=\"section\"><a name=\"WS73099CC142F487554E67820D1283FBC0BF326CF\"></a> \n            <h2><a name=\"GUID-ACB430E2-3C20-4D37-8449-B3CE1DE5DB3D\"></a>过程\n            </h2> <a name=\"WS73099CC142F487554E67820D1283FBC0BF326D0\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F487554E67820D1283FBC0BF326D1\"></a>要使用裁切贴图，请使用以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>单击“裁切”贴图按钮。 \n                  <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF326D3\"></a><span class=\"charspan-msgph\">3ds Max</span> 将打开<span class=\"char_link\"><a href=\"GUID-667716BE-A2C3-406A-8991-BA6533A11F02.htm\">材质/贴图浏览器</a></span>。 \n                  </p> \n               </li>\n               <li>从<span class=\"char_link\"><a href=\"GUID-0F4CC48B-8245-46C8-995D-43403C583EA3.htm\">贴图类型</a></span>列表中进行选择，然后单击“确定”。 \n                  <p><a name=\"WS1A9193826455F5FF-2248B67F12850E5FD4867CA\"></a>（如果选择将“位图”作为贴图类型，则 <span class=\"charspan-msgph\">3ds Max</span> 打开用于选择图像文件的文件对话框。） \n                  </p> \n               </li>\n               <li>使用贴图控件可设置贴图。 </li>\n            </ol> \n            <p><a name=\"WS1A9193826455F5FF-2248B67F12850E5FD4867CB\"></a>或者，您可以使用 <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <span class=\"char_link\"><a href=\"GUID-7B51EF9F-E660-4C10-886C-6F6ADE9E8F56.htm\">Slate 材质编辑器</a></span>将<span class=\"char_link\"><a href=\"GUID-9BF3A6D1-6665-4EC8-89BD-187FF34BA588.htm\">贴图节点</a></span>关联到“裁切”组件。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";