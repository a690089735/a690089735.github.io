var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-0584ED4B-FE91-4B0B-A09C-22557D5D51DD\">\n      <meta name=\"description\" content=\"您可以使用位图文件或程序贴图来控制自发光值。这样将使对象的部分出现发光。贴图的白色区域渲染为完全自发光。不使用自发光渲染黑色区域。灰色区域渲染为部分自发光，具体情况取决于灰度值。\">\n      <meta name=\"indexterm\" content=\"作为材质组件贴图: 自发光\">\n      <meta name=\"indexterm\" content=\"自发光贴图\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>自发光贴图</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-0584ED4B-FE91-4B0B-A09C-22557D5D51DD\"></a><div class=\"head\">\n            <h1>自发光贴图</h1>\n         </div>\n         <p class=\"blurb\">您可以使用位图文件或<span class=\"char_link\"><a href=\"GUID-783C7A59-F829-41DA-A2A2-E967E516172D.htm\">程序贴图</a></span>来控制<span class=\"char_link\"><a href=\"GUID-2666F7BF-D728-4056-B247-638D77B79003.htm\">自发光值</a></span>。这样将使对象的部分出现发光。贴图的白色区域渲染为完全自发光。不使用自发光渲染黑色区域。灰色区域渲染为部分自发光，具体情况取决于灰度值。 \n         </p><a name=\"UL_1478C8290A984402BE59F06BDD3EC381\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-08987828-4540-4714-A217-995A1FC649B7\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “标准”材质  <img src=\"../images/ac.menuaro.gif\"> “贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “自发光”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-7BDF298E-E056-42F3-B00A-D3313FFB9CA7\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “光线跟踪”材质  <img src=\"../images/ac.menuaro.gif\"> “贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “发光度”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-765D4BEA-A6E5-480F-B358-FB770C4072FC\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “Arch &amp; Design”材质  <img src=\"../images/ac.menuaro.gif\"> “特殊用途贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “自身照明颜色”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-3D255205-F838-49B7-BC80-9B7BF75577D8\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\">  具有“自发光”或“发光度”组件的其他材质</span> \n            </li>\n         </ul><a name=\"WS73099CC142F487554E67820D1283FBC0BF326AB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E53C7554-A17C-4120-8E1E-DE176DF9E4AA-low.png\"><p class=\"figure-title\">使用自发光贴图</p>\n         </div>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF326AC\"></a> 自发光意味着发光区域不受场景（其环境光颜色组件消失）中的灯光影响，并且不接收阴影。 \n         </p>\n         <div class=\"section\"><a name=\"WS73099CC142F487554E67820D1283FBC0BF326AD\"></a> \n            <h2><a name=\"GUID-07C3AE73-AF56-4434-92C5-882C17D6E90E\"></a>过程\n            </h2> <a name=\"WS73099CC142F487554E67820D1283FBC0BF326AE\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F487554E67820D1283FBC0BF326AF\"></a>要使用自发光贴图，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>单击“自发光”的“贴图”按钮。 \n                  <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF326B1\"></a><span class=\"charspan-msgph\">3ds Max</span> 将打开<span class=\"char_link\"><a href=\"GUID-667716BE-A2C3-406A-8991-BA6533A11F02.htm\">材质/贴图浏览器</a></span>。 \n                  </p> \n               </li>\n               <li>从贴图类型列表中进行选择，然后单击“确定”。 \n                  <p><a name=\"WS1A9193826455F5FF-2248B67F12850E5FD4867C5\"></a>（如果选择将“位图”作为贴图类型，则 <span class=\"charspan-msgph\">3ds Max</span> 将打开用于选择图像文件的文件对话框。） \n                  </p> \n               </li>\n               <li>使用贴图控件可设置贴图。 </li>\n            </ol> \n            <p><a name=\"WS1A9193826455F5FF-2248B67F12850E5FD4867C6\"></a>或者，您可以使用 <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <span class=\"char_link\"><a href=\"GUID-7B51EF9F-E660-4C10-886C-6F6ADE9E8F56.htm\">Slate 材质编辑器</a></span><span class=\"char_link\"><a href=\"GUID-9BF3A6D1-6665-4EC8-89BD-187FF34BA588.htm\">关联贴图节点</a></span>到“自发光”组件。 \n            </p> \n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-E444F273-E9A6-4E8E-9305-E06E062FF04D.htm\">高级照明覆盖材质</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-C5A3C77B-794B-4444-9783-7F2EA11C16BD.htm\">Modeling Global Illumination with Radiosity</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-27F990DA-E4FA-4949-A073-9AA608EA44DF.htm\">照明跟踪</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-48472238-9C02-4117-B075-242251BFCCF8.htm\">反射比和透射比显示</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-2818B285-15A3-4E7F-8E0F-8C00B37D0FA8.htm\">凹凸贴图</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";