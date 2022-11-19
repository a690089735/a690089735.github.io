var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-34D36047-F87E-4FAC-912F-CDFD8CE82937\">\n      <meta name=\"description\" content=\"场景背景可以使用贴图。反射贴图和折射贴图也使用环境坐标，而不是纹理坐标。\">\n      <meta name=\"indexterm\" content=\"环境贴图\">\n      <meta name=\"indexterm\" content=\"环境: 环境贴图\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>环境贴图</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-34D36047-F87E-4FAC-912F-CDFD8CE82937\"></a><div class=\"head\">\n            <h1>环境贴图</h1>\n         </div>\n         <p class=\"blurb\">场景背景可以使用贴图。反射贴图和折射贴图也使用环境坐标，而不是纹理坐标。 </p><a name=\"UL_01A7ECD06BC547DEB4838C3CD7EEB368\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-FFC913A9-A65E-4300-B911-B998120C5D3E\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “光线跟踪”材质  <img src=\"../images/ac.menuaro.gif\"> “贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “环境”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-D25CCD41-5071-435C-A861-A799201046A9\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “Arch &amp; Design”材质  <img src=\"../images/ac.menuaro.gif\"> “特殊用途贴图”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “环境”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-29C97F92-56A5-4E1A-B349-F420D60C7096\">默认菜单：“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “环境” <img src=\"../images/ac.menuaro.gif\"> “环境和效果”对话框  <img src=\"../images/ac.menuaro.gif\"> “环境”面板  <img src=\"../images/ac.menuaro.gif\"> “环境贴图”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-2FCF5850-227E-4861-B84F-025DA036FF46\">Alt 菜单：“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “环境和效果” <img src=\"../images/ac.menuaro.gif\"> “环境和曝光设置” <img src=\"../images/ac.menuaro.gif\"> “环境和效果”对话框  <img src=\"../images/ac.menuaro.gif\"> “环境”面板  <img src=\"../images/ac.menuaro.gif\"> “环境贴图”按钮</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF32901\"></a>纹理坐标将<span class=\"char_link\"><a href=\"GUID-0F4CC48B-8245-46C8-995D-43403C583EA3.htm\">贴图</a></span>投影到特定几何体，而环境坐标将贴图投影到世界坐标系。如果您移动对象，贴图将保持不变。如果移动观察点，贴图视图将发生变化。这种类型的贴图系统可用于反射、折射和环境贴图。 \n         </p><a name=\"WS73099CC142F487554E67820D1283FBC0BF32902\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-FB462C68-3BF3-4AA1-B231-9029460D6C38-low.png\"></div>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF32903\"></a> <em class=\"strong\">上：图像使用图片作为背景。环境贴图使用屏幕坐标。</em> \n         </p>\n         <p><a name=\"GUID-7E446C92-2C77-4F8F-AC13-75F1058EF116\"></a> <em class=\"strong\">下：图像显示了一个棋盘格贴图应用到使用球形贴图坐标的环境中。</em> \n         </p>\n         <p><a name=\"GUID-2D085EB1-272F-477A-9E00-5F5E7B04E748\"></a>存在四种类型的环境坐标： \n         </p><a name=\"WS73099CC142F487554E67820D1283FBC0BF32904\"></a><ul>\n            <li>球形 </li>\n            <li>柱形 </li>\n            <li>收缩包裹 </li>\n            <li>屏幕 </li>\n         </ul>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF32909\"></a>前三种坐标与<span class=\"char_link\"><a href=\"GUID-78327298-4741-470C-848D-4C3618B18FCA.htm\">UVW 贴图修改器</a></span>使用的坐标相同。想像一下，有一个无穷大的球体围绕着您的场景并使用球形<span class=\"char_link\"><a href=\"GUID-245C4F26-7D3B-40E4-B815-531E3DF49967.htm\">贴图坐标</a></span>进行了贴图，则可以形象地感受到使用球形环境贴图的效果。收缩包裹用于包裹巨大球体周围的贴图，从而之剩下一个奇点。柱形像一个巨大的圆柱体。 \n         </p>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF3290A\"></a>屏幕系统将图像直接映射到视图中，并不会发生扭曲。这与平面投影类似，因为它像一个悬挂在场景后面的巨大背景幕布。与其他环境贴图方法不同，屏幕将锁定到视图。当您移动摄影机时，贴图将随之移动。因此，您只能将屏幕坐标用于静态渲染或摄影机不移动的动画中。\n            \n         </p>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF3290B\"></a>要将<span class=\"char_link\"><a href=\"GUID-A1654CD2-2A7C-42A6-816D-28F7A849F96F.htm\">位图</a></span>与屏幕以外的任何环境贴图系统一起使用，由于虚拟球体或圆柱体的大小限制，因此需要高分辨率的贴图。 \n         </p>\n         <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF3290C\"></a>要将环境贴图指定为场景的背景，请使用“环境和效果”对话框 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> <span class=\"char_link\"><a href=\"GUID-EF33AEB1-44BE-403E-B4CC-3C29495988C2.htm\">“环境”面板</a></span>。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF-6B86D352127E4CDBFBA-718C\"></a> \n            <h2><a name=\"GUID-6C680B10-18C0-4A0B-98ED-BB1F1BC48CE8\"></a>编辑环境贴图\n            </h2> \n            <p><a name=\"WS73099CC142F487554E67820D1283FBC0BF3290D\"></a>要使用“环境和效果”对话框编辑或调整指定的贴图，需要使用材质编辑器。为此，有以下几种不同方法可供选择： \n            </p> <a name=\"WS1A9193826455F5FF-6B86D352127E4CDBFBA-718B\"></a><ul>\n               <li>在“<span class=\"char_link\"><a href=\"GUID-B6CA2B16-8522-4440-9711-E1664F224D04.htm\">精简材质编辑器</a></span>”中执行以下操作： <a name=\"WS73099CC142F487554E67820D1283FBC0BF3290E\"></a><ul>\n                     <li>激活未使用的示例窗，单击 <img src=\"../images/GUID-1ECCAF28-B55B-4959-A4E6-2A70E4485231-low.png\"> <span class=\"char_link\"><a href=\"GUID-71C11EF5-3B62-47B8-B888-BE8B59052F85.htm\">（获取材质）</a></span>，然后在<span class=\"char_link\"><a href=\"GUID-667716BE-A2C3-406A-8991-BA6533A11F02.htm\">材质/贴图浏览器 </a></span> <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“场景材质”组中，双击环境贴图的条目。 \n                        <p><a name=\"WS1A9193826455F5FF-6B86D352127E4CDBFBA-7189\"></a>贴图现在显示在示例窗中，您可以使用下方的卷展栏编辑其设置。 \n                        </p> \n                     </li>\n                     <li>拖动<span class=\"char_link\"><a href=\"GUID-EF33AEB1-44BE-403E-B4CC-3C29495988C2.htm\">“环境”对话框</a></span>上的贴图按钮，并将其放置在未使用的示例窗上。<span class=\"charspan-msgph\">3ds Max</span> 提示您时，请确保指定“实例”；否则在“材质编辑器”中所做的更改不会影响环境贴图。 \n                     </li>\n                  </ul> \n               </li>\n               <li>在“<span class=\"char_link\"><a href=\"GUID-7B51EF9F-E660-4C10-886C-6F6ADE9E8F56.htm\">板岩材质编辑器</a></span>”中执行以下操作： <a name=\"WS1A9193826455F5FF-6B86D352127E4CDBFBA-7187\"></a><ul>\n                     <li>将环境贴图从“材质/贴图浏览器”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“场景材质”组拖动到活动视图中。<span class=\"charspan-msgph\">3ds Max</span> 提示您时，请确保指定“实例”；否则对贴图设置所做的更改不会影响环境贴图。双击贴图节点，这样您就可以看到贴图设置，然后在“参数编辑器”面板中对它们进行调整。 \n                     </li>\n                     <li>拖动<span class=\"char_link\"><a href=\"GUID-EF33AEB1-44BE-403E-B4CC-3C29495988C2.htm\">“环境”对话框</a></span>上的贴图按钮，然后将其放置在活动视图中。<span class=\"charspan-msgph\">3ds Max</span> 提示您时，请确保指定“实例”；否则对贴图设置所做的更改不会影响环境贴图。双击贴图节点，这样您就可以看到贴图设置，然后在“参数编辑器”面板中对它们进行调整。 \n                     </li>\n                  </ul> \n               </li>\n            </ul> \n            <div><a name=\"WS73099CC142F487554E67820D1283FBC0BF32911\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>要控制渲染器在为渲染图像创建 Alpha 时是否使用环境贴图的 <span class=\"char_link\"><a href=\"GUID-6B70BB6B-DE99-4ACD-A61B-B3F5D50ACDE3.htm\">Alpha 通道</a></span>，请选择“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“首选项”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“渲染”，然后在“背景抗锯齿”组中启用“使用环境 Alpha”。如果禁用了“使用环境 Alpha”（默认设置），则背景的 Alpha 值将为 0（完全透明）。如果启用了“使用环境 Alpha”，结果图像的 Alpha 是场景和背景图像的 Alpha\n                  的组合。此外，如果在禁用“预乘 Alpha”时写入 <span class=\"char_link\"><a href=\"GUID-C2C7C2F8-083F-4FDC-93AD-AD1D3F5045FD.htm\">TGA 文件</a></span>，则启用“使用环境 Alpha”可以避免出现不正确的结果。在其他程序中（如 Photoshop）进行合成时，仅支持带有 Alpha 通道的背景图像或黑色背景。 \n               </div>\n            </div> \n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-56B48AB4-ACC6-45B4-B026-CE8E74412E4D.htm\">物理太阳和天空环境</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";