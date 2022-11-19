var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-0DEA4688-6EC7-4E9A-ADD3-949379B2AB23\">\n      <meta name=\"description\" content=\"Biped 更为强大的功能之一是可以将某个 Biped 的运动重新定位或是映射到其它的 Biped 上。\">\n      <meta name=\"indexterm\" content=\"贴图 Biped 运动\">\n      <meta name=\"indexterm\" content=\"运动: 贴图\">\n      <meta name=\"indexterm\" content=\"缩放: 步幅\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>运动贴图：重定位 Biped 运动</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-0DEA4688-6EC7-4E9A-ADD3-949379B2AB23\"></a><div class=\"head\">\n            <h1>运动贴图：重定位 Biped 运动</h1>\n         </div>\n         <p class=\"blurb\">Biped 更为强大的功能之一是可以将某个 Biped 的运动重新定位或是映射到其它的 Biped 上。</p>\n         <div class=\"bodyReference\">\n            <p><a name=\"WS73099CC142F487552A50A53111913E7C26F-77F4\"></a>如果把一个没有尾部的 Biped 的运动映射到另外一个有尾部的 Biped 上，那么拥有尾部的 Biped 的默认运动将会计算在内。当把一个具有较少腿部、脊椎或颈部链接的 Biped 运动映射到一个具有较多腿部、脊椎或颈部链接的 Biped 上时，默认的运动也会被计算在内。有以下几种方法可以进行运动映射。可以执行的操作：\n            </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900456D7\"></a><ul>\n               <li>进入体形模式并更改 Biped 的结构。当退出体形模式时，Biped 的新结构就会自适应于已经存在的动画。</li>\n               <li>将某个 Biped 保存为 BIP 或 STP 文件，然后把它加载到另一个不同结构和大小的 Biped 上。</li>\n               <li>拷贝某个 Biped 的足迹，然后把它粘贴到另一个不同结构和大小的 Biped 的足迹上。</li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900456D8\"></a> \n               <h2><a name=\"GUID-8EE1176F-806C-47B6-A2E2-400A86D036D2\"></a>缩放步幅模式\n               </h2> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16113\"></a>缩放步幅模式可以控制运动映射的某些方面是否发生。\n               </p> \n               <p><a name=\"WSF742DAB041063133728B9B2112A1CE7292-7F70\"></a>如果缩放步幅模式处于活动状态（默认情况下该模式为活动状态）：\n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900456D9\"></a><ul>\n                  <li>当加载了一个 FIG 文件或是更改了 Biped 的腿长度、骨盆宽度或高度后退出体形模式时，足迹的位置就会自动缩放以匹配更改后的腿长和骨盆宽度，重力也会自动更改以匹配 Biped 的新高度。</li>\n                  <li>当加载了一个 BIP 或 STP 文件，文件中足迹的位置将会缩放以匹配当前存在的 Biped 的腿长度和骨盆宽度。重力将会根据文件中存储的重力值按比例进行调整。（存储在 BIP 或 STP 文件中的运动有与之相关的重力值。）</li>\n                  <li>拷贝一个 Biped 的足迹并将其粘贴到另一个 Biped 上时，缓冲区中的足迹位置将会缩放以匹配当前存在的 Biped 的腿长和骨盆宽度。重力将会根据文件中存储的重力值按比例进行调整。（存储在 BIP 或 STP 文件中的运动有与之相关的重力值。）</li>\n               </ul> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16114\"></a>如果未激活缩放步幅模式，那么将不会执行上述情况中的任何一种计算。这样可能会看到 Biped 在移动脚步时足迹的位置不正确，相对于这个 Biped 来说足迹和步幅过大或是过小。一般情况下，应该让缩放步幅模式处于活动状态，除非您希望在场景中保持 Biped\n                  和其它对象的空间联系。\n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-46BD\"></a> \n               <h2><a name=\"GUID-ECAAA5CA-A882-40D0-9543-704BC7DB92A7\"></a>过程\n               </h2> <a name=\"WSF742DAB041063133728B9B2112A1CE7292-7F6F\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900456DA\"></a>要关闭缩放步幅模式，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选中 Biped，并转到 <img src=\"../images/GUID-EBCA3C24-9B3B-46F2-A058-71C6B3FFD2E6-low.png\">“运动”面板。\n                  </li>\n                  <li>在“Biped”卷展栏中，单击底部的扩展条对该卷展栏进行扩展。<a name=\"WS1A9193826455F5FF-75C1F7C3124F51CCBD1-4994\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7C4D36FE-4524-485D-9FF1-9249CF869141-low.png\"></div>\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16115\"></a>（如果卷展栏已经展开，该栏的左侧会显示减号，而不是加号。）\n                     </p>\n                  </li>\n                  <li>在“模式”组中，单击 <img src=\"../images/GUID-3611F916-8BA7-43E0-8EE7-5BC2925894AE-low.png\">（“缩放步幅模式”）将其禁用。\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16116\"></a>按钮将发生变化，表明步幅缩放已禁用。\n                     </p><a name=\"WS1A9193826455F5FF-75C1F7C3124F51CCBD1-4993\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1A8EB3F5-9929-49BF-AF46-F2B1F13355AB-low.png\"></div>\n                  </li>\n                  <li>使用 <img src=\"../images/GUID-B890857E-806A-461B-928C-FBCFEF71C1A4-low.png\">（“体形模式”）编辑体形。\n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16117\"></a>当返回到关键帧模式或是足迹模式时，将不考虑 Biped 体形的新比例，因此 Biped 的步幅长度不会改变。\n                     </p>\n                  </li>\n               </ol> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";