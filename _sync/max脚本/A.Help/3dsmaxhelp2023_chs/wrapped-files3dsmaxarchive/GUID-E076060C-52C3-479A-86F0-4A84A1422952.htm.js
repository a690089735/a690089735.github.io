var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-E076060C-52C3-479A-86F0-4A84A1422952\">\n      <meta name=\"description\" content=\"使用 Physique 添加蒙皮的骨骼可以是 3ds Max 层次、一个层次中的骨骼、非层次中的骨骼或样条线。Physique 基于骨骼 的相对位置或层次中的链接使蒙皮变形。尤其需要注意的是，其运用每一链接的长度和两个连接在一起的链接之间的角度；同时其也能运用链接的比例。\">\n      <meta name=\"indexterm\" content=\"Physique: 和 3ds Max 对象\">\n      <meta name=\"indexterm\" content=\"骨骼: 将未链接的骨骼与 Physique 一起使用\">\n      <meta name=\"indexterm\" content=\"浮动骨骼\">\n      <meta name=\"indexterm\" content=\"Physique 中基于样条线的变形\">\n      <meta name=\"indexterm\" content=\"变形\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>将 Physique 与 3ds Max 对象一起使用</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-E076060C-52C3-479A-86F0-4A84A1422952\"></a><div class=\"head\">\n            <h1>将 Physique 与 3ds Max 对象一起使用</h1>\n         </div>\n         <p class=\"blurb\">使用 Physique 添加蒙皮的骨骼可以是 <span class=\"charspan-msgph\">3ds Max</span> 层次、一个层次中的骨骼、非层次中的骨骼或样条线。Physique 基于<em class=\"mild\">骨骼</em> 的相对位置或层次中的链接使蒙皮变形。尤其需要注意的是，其运用每一链接的长度和两个连接在一起的链接之间的角度；同时其也能运用链接的比例。\n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF166E2\"></a>骨骼层次也可以是一个定义行为和层次的 <span class=\"charspan-msgph\">3ds Max</span> 系统对象。有两种对象对 Physique 特别有用：\n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190045BB7\"></a><ul>\n            <li>骨骼是 <span class=\"charspan-msgph\">3ds Max</span> 提供的标准系统对象。骨骼既可以采用层次链接，也可以<em class=\"mild\">浮动</em>。\n            </li>\n            <li>可以使用样条线，而不是“骨骼”层次。</li>\n         </ul>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF166E3\"></a> <img src=\"../images/GUID-99D114B3-494A-4D3D-8513-3D52504AF64F-low.png\"> 使用“创建”面板上的系统对象类别创建骨骼。\n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF166E4\"></a>对于面部动画或非 Biped 角色来说，骨骼尤为重要，例如带有活动嘴唇的脸部。 \n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF166E5\"></a>通常情况下都是在创建骨骼之前就创建 Physique 蒙皮，因为我们必须使骨骼纬度与蒙皮的纬度相适应，以便优化层次中链接的顶点指定。\n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190045BB8\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2E2F127E-0987-4706-9A04-73526254F400-low.png\"><p class=\"figure-title\">这个 Physique 层次由相互之间链接的虚拟对象创建而成。</p>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045BB9\"></a> \n            <h2><a name=\"GUID-DE519584-0720-4CA9-A1A5-82AD158407F8\"></a> 浮动骨骼\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF166E6\"></a>所谓浮动骨骼就是指没有链接在一起以及相互之间无关的骨骼。通过将浮动骨骼添加到 Physique 上，您可以通过制作骨骼动画的方式来使网格变形。在这点上与使用“附加到节点”并单击某一层次的根（如 Biped 的盆骨）形成鲜明的对比。要使用“附加到节点”，应该将所有骨骼链接在一起。\n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190045BBC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E49E3FC3-80FF-42B5-908E-062C63762C50-low.png\"></div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045BBD\"></a> \n            <h2><a name=\"GUID-5159E2E6-3AEE-4346-A5D7-A1D9066135E4\"></a>基于样条线的 Physique 变形\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF166E7\"></a>除了 Biped 以及 <span class=\"charspan-msgph\">3ds Max</span> 骨骼之外，Physique 也支持使用样条线和 NURBS 曲线来进行网格变形。通过在样条线上制作顶点的动画，您可以制作网格动画。您能够在面部动画中使用此技术，也可以用来变形任何的网格。\n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190045BC1\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045BC2\"></a>要用样条线来控制网格，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>将样条线置于网格中。</li>\n               <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择网格并应用 Physique 修改器。\n               </li>\n               <li>在“Physique”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“浮动骨骼”卷展栏上，单击“添加”并在视口中选取样条线。\n               </li>\n               <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择样条线，转到“顶点”子对象层级，并 <img src=\"../images/GUID-5D7D7630-6D16-400D-AE6F-87F13C97DEA2-low.png\"> 移动样条线定点以制作网格动画。<a name=\"WS1A9193826455F5FFBA679E112A6A190045BC3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1A702938-32C7-4D03-9838-A0D112C24E1F-low.png\"></div><a name=\"WS1A9193826455F5FFBA679E112A6A190045BC4\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A299DA59-1B8F-4A34-9F24-5A0FB444229A-low.png\"></div>\n               </li>\n            </ol> \n         </div>\n         <div class=\"see-also\">\n            <h4>请参见</h4>\n            <div class=\"related-links\">\n               <ul>\n                  <li> <span class=\"char_link\"><a href=\"GUID-C279475C-C154-463C-BF8C-2EC92631E2CF.htm\">将 Physique 与 Biped 一起使用</a></span> \n                  </li>\n               </ul>\n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";