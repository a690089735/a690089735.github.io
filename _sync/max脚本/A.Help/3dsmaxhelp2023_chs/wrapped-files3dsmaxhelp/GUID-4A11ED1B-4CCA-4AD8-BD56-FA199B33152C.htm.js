var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-4A11ED1B-4CCA-4AD8-BD56-FA199B33152C\">\n      <meta name=\"indexterm\" content=\"轨迹: 轨迹（词汇表）\">\n      <meta name=\"indexterm\" content=\"轨迹视图: 轨迹（词汇表）\">\n      <meta name=\"indexterm\" content=\"动画: 轨迹（词汇表）\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>轨迹</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-4A11ED1B-4CCA-4AD8-BD56-FA199B33152C\"></a><div class=\"head\">\n            <h1>轨迹</h1>\n         </div>\n         <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E37\"></a>轨迹是一段时间出现的动画的线性表示。可以将轨迹看作一条又长又直的道轨，动画的开始时间为一端，结束时间为另一端。每次在动画中出现时，每个动画<span class=\"char_link\"><a href=\"GUID-065DBA5F-0C10-4F26-A4DE-92CE85090214.htm\">关键点</a></span>都会显示在轨迹上。<span class=\"char_link\"><a href=\"GUID-2B5EE43F-F86F-42C9-82C7-48BAFC0EE9F4.htm\">“轨迹视图”</a></span>层次中的每个项目都有一个轨迹，显示了该项目随时间的变化情况。 \n         </p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E36\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7E1C9356-D2DD-4FAF-AC83-AD4408007258-low.png\"><p class=\"figure-title\">范围轨迹显示在时间滑块下方的轨迹栏中</p>\n         </div>\n         <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E35\"></a> <span class=\"charspan-msgph\">3ds Max</span> 中有多种类型的轨迹： \n         </p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E34\"></a><ul>\n            <li>“动画”轨迹包含某个项目的实际动画值。只有控制器才包含动画轨迹。 \n               <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E30\"></a>通常，动画轨迹中的值显示为关键点。某些控制器不会使用关键点，而是将其值显示为范围栏或其它某些图形符号。例如，“波浪形”项目可以将声音文件显示为两个通道的声波。 \n               </p> \n               <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E2F\"></a>另外，“动画”轨迹也是可以显示为功能曲线的唯一轨迹类型。 \n               </p> \n            </li>\n            <li>范围轨迹指定动画发生的时间范围。这些轨迹主要出现在<span class=\"char_link\"><a href=\"GUID-AFAD34E3-2851-43F4-A7DA-6F3286F83606.htm\">“摄影表”</a></span>模式下的“轨迹视图”中，不过也可以选择放在<span class=\"char_link\"><a href=\"GUID-A55E4702-263E-4768-9964-5866698784DA.htm\">轨迹栏</a></span>上。要在轨迹栏上显示范围，请选择该范围的关键点，然后单击右键并选择“配置”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“显示选择范围”。 \n               <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7D35\"></a>在“摄影表”中，范围轨迹指示何时为轨迹下方的项目设置动画效果。轨迹中的范围栏显示了随动画生成的时间帧范围。可以通过拖动轨迹或其端点来编辑范围。 \n               </p> \n            </li>\n            <li>在<span class=\"char_link\"><a href=\"GUID-D2491163-80EB-49E7-8BFA-EFE5B41C07CD.htm\">运动混合器</a></span>中，暂存运动剪辑的线性区域称作<em class=\"mild\">轨迹</em>。可以建立多个轨迹的堆栈以便同时使用所有轨迹来制作动画。 \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E2E\"></a><em class=\"strong\">character studio</em> 中有处理轨迹的专用工具，其中包括： \n         </p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7E2D\"></a><ul>\n            <li>专门处理 Biped 轨迹的工具。质心是唯一的，因为它的水平动画和垂直动画各有一条单独的轨迹，这两条轨迹可在“运动”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"><span class=\"char_link\"><a href=\"GUID-E73981D1-A6A8-4084-B128-2E56436CDC27.htm\">“轨迹选择”卷展栏</a></span>中选择。可使用<span class=\"char_link\"><a href=\"GUID-7EF8B1E9-2674-483D-94D2-A43C297F2349.htm\">“复制/粘贴”卷展栏</a></span>将 Biped 对象的<span class=\"char_link\"><a href=\"GUID-8C5F3DD9-BCC9-4203-AE1B-24D4F848F58A.htm\">轨迹复制和粘贴</a></span>到其他 Biped。 \n            </li>\n            <li>在<span class=\"char_link\"><a href=\"GUID-D272C970-1472-40B4-8343-47DBF64DE308.htm\">“关键帧工具”卷展栏</a></span>中，可以清除所有动画或只清除选定轨迹。 \n            </li>\n         </ul>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";