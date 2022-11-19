var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-EC14B96C-C222-41E1-A21A-5A42FBB831E7\">\n      <meta name=\"description\" content=\"该主题给出了创建和使用群组系统的基本步骤。\">\n      <meta name=\"indexterm\" content=\"群组: 创建系统\">\n      <meta name=\"contextid\" content=\"TOPIC_CREATING_A_CROWD_SYSTEM\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>创建群组系统</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-EC14B96C-C222-41E1-A21A-5A42FBB831E7\"></a><div class=\"head\">\n            <h1>创建群组系统</h1>\n         </div>\n         <p class=\"blurb\">该主题给出了创建和使用群组系统的基本步骤。 </p><a name=\"WS1A9193826455F5FFBA679E112A6A190045E7B\"></a><ol type=\"1\" start=\"1\">\n            <li>添加<span class=\"char_link\"><a href=\"GUID-A0B43BC0-5D11-4852-A83A-5B380B5526EB.htm\">群组辅助对象</a></span>。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045E7C\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-533CCDA2-8416-49B7-A505-B27DBE34F8ED-low.png\"></div> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16986\"></a>群组辅助对象是整个群组模拟的控制对象。 \n               </p> \n            </li>\n            <li>创建<span class=\"char_link\"><a href=\"GUID-A0B43BC0-5D11-4852-A83A-5B380B5526EB.htm\">代理辅助对象</a></span>。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045E7D\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0EAD183F-E852-4FA7-B27D-8EA29F049881-low.png\"></div> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16987\"></a>这是群组的一个原型；一个代表性的成员。 \n               </p> \n            </li>\n            <li>在 <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"><span class=\"char_link\"><a href=\"GUID-24DEC359-9562-49A7-8C07-52293E1619EC.htm\">“运动参数”卷展栏</a></span>上，为代理设置适当的速度和翻转限制。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045E7E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-3A6DEABB-5498-49F0-BA89-B95E71CB28A2-low.png\"></div> \n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16988\"></a>这与定义一个特定的动物或对象是如何运动的相类似。它是鸟、鱼、子弹还是飞机？ \n               </p> \n            </li>\n            <li>克隆代理，既可以使用 <span class=\"charspan-msgph\">3ds Max</span> 克隆工具，也可以通过<span class=\"char_link\"><a href=\"GUID-A0B43BC0-5D11-4852-A83A-5B380B5526EB.htm\">散布代理</a></span>的方法来进行克隆。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045E7F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E0093B3A-B95B-4112-A663-5B3F0403F6EC-low.png\"></div> \n            </li>\n            <li>创建与行为一起使用的 <span class=\"charspan-msgph\">3ds Max</span> 对象，诸如栅格、要查找或回避的对象。这些对象通常与场景中的对象相对应。例如，可以在打开的门口创建栅格以吸引代理，或在障碍物上创建长方体以排除代理。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045E80\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-EA373480-2D14-4396-8891-2C06D1DAFFB7-low.png\"></div> \n            </li>\n            <li>添加一个或多个<span class=\"char_link\"><a href=\"GUID-5CDDE2B2-DA06-4003-872D-5B181E58EEF1.htm\">行为</a></span>。修改每个行为的设置，以适合于群组的成员。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045E81\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-FC9B9D59-AD51-48A8-BA3A-84E2649A8EA9-low.png\"></div> \n            </li>\n            <li>求解模拟。 </li>\n            <li>查看已求解的模拟。如果需要修正，对行为或代理参数进行修改。再次求解，一直到模拟能够像希望的那样进行工作。 </li>\n            <li>创建跟随代理的对象，然后<span class=\"char_link\"><a href=\"GUID-73EF2217-E8A9-47D3-A370-88A87EE25CC3.htm\">将对象与代理对齐并链接</a></span>。 \n            </li>\n         </ol>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045E82\"></a> \n            <h2><a name=\"GUID-ED084570-086E-4A8D-B46B-F2574E99405A\"></a>创建复杂的模拟\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16989\"></a>上述过程创建了一个简单的群组模拟。也可以使用其它的工具来进一步控制模拟： \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190045E83\"></a><ul>\n               <li>使用<span class=\"char_link\"><a href=\"GUID-448891C9-CE10-4356-931A-51A8ACB3257D.htm\">认知控制器</a></span>以使代理根据到场景中对象的近程、模拟中逝去的时间和其它因素来切换行为。 \n               </li>\n               <li>使用<span class=\"char_link\"><a href=\"GUID-B3D2A782-2001-4AFF-9A34-251C7BE3CB62.htm\">运动合成</a></span>以使链接对象动画的不同部分根据代理的速度、旋转和其它因素来使用。 \n               </li>\n               <li>使用 Biped 和运动流网络来用代理制作该 Biped 的动画。请参见<span class=\"char_link\"><a href=\"GUID-F4B5E477-3B73-43CB-9793-FE336BA3B78F.htm\">两足动物群组</a></span>。 \n               </li>\n            </ul> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";