var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-4648F161-93B3-4F76-AF3B-8C07DD48AD1C\">\n      <meta name=\"indexterm\" content=\"流体: 常见问题解答\">\n      <meta name=\"indexterm\" content=\"常见问题解答: 流体\">\n      <meta name=\"indexterm\" content=\"流体疑难解答\">\n      <meta name=\"indexterm\" content=\"新功能\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"expert\">\n      <meta name=\"topic-subtype\" content=\"using\">\n      <title>常见问题解答</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-4648F161-93B3-4F76-AF3B-8C07DD48AD1C\"></a><div class=\"head\">\n            <h1>常见问题解答</h1>\n         </div><a name=\"FIG_06C13C854BB64786809B405BB9F92FBB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-82EC0E92-2B17-448C-A415-CCDCBBADFC1D-low.png\"></div><a name=\"UL_813B54C0436E4361ADC40FC15B389EDD\"></a><p class=\"list-intro\">可以在同一场景中创建多个流体模拟吗？</p>\n         <ul>\n            <li> 您可以在场景中添加任意数量的模拟，但是这些模拟将不会彼此交互。当您需要交互时，必须将所有发射器及相关对象添加到同一模拟。 \n               		\n            </li>\n         </ul><a name=\"UL_6F652F1C49CF45A897092FC2C0B7D7CA\"></a><p class=\"list-intro\">如何加快预览速度？ </p>\n         <ul>\n            <li>默认体素大小为 0.5，通常用于较高分辨率的最终输出。值越高，模拟时间越长。值大于 2.5 时，通常足以让您了解整个模拟过程，同时提供更高的性能。转到“模拟视图”&gt;“模拟参数”&gt;“解算器属性”&gt;“基础体素大小”，调整相应设置。 \n               		\n            </li>\n         </ul><a name=\"UL_6B71527612DF49ADA7D15B7179D0725C\"></a><p class=\"list-intro\">可以向流体对象添加修改器吗？</p>\n         <ul>\n            <li> 仅在已经生成缓存网格时，流体对象才与修改器兼容。然而建议不要使用修改器，因为效果不可预测，并且会严重降低系统性能。使用 Arnold 曲面或 Arnold 点进行渲染时，修改器也不会影响液体。 \n               		\n            </li>\n         </ul><a name=\"UL_44946A637D9C406AA0A69CCEF74C3781\"></a><p class=\"list-intro\">模拟分辨率由什么控制？我应如何使用？</p>\n         <ul>\n            <li>体素大小是模拟分辨率的主控件。体素大小越大，细节越低，适合在调整设置时进行测试和预览；而体素大小越小，细节越精细，最终输出精度越高。 \n               		  \n               <p>体素大小的主要设置是“解算器参数”&gt;“模拟参数”下的“基础体素大小”。这可以确定用于流体模拟本身的体素大小，也是用于体素化网格（包括发射器、碰撞对象和其他对象）的基准尺寸。请注意，更改“基础体素大小”时，可能还需要调整时间自适应性设置。 \n                  		  \n               </p> \n            </li>\n         </ul><a name=\"UL_339D5D50B31B4EAEB846E83EA49B1973\"></a><p class=\"list-intro\">体素比例如何影响分辨率？</p>\n         <ul>\n            <li>每个网格对象（如发射器或碰撞对象）都有一个体素比例设置，该设置影响最初体素化关联网格的方式。此外，可以覆盖单个发射器、碰撞对象、导向网格和导向发射器的全局“体素比例”设置，仅在需要时使用较小的值以获取模拟中的更多细节。 \n               		  \n               <p>如果将碰撞对象的“体素比例”设置为小于 1.0 的值以在特定网格中显示更多细节，当以较大的体素大小将碰撞对象组合在一起时，可能会丢失一部分细节。如果特定网格需要高细节，则应使用小于 1.0 的全局“体素比例”，并在其他网格的网格属性中使用大于\n                  1.0 的“体素比例”。 \n                  		  \n               </p> \n            </li>\n         </ul><a name=\"UL_844092B446A1459E97F938938FC83DCE\"></a><p class=\"list-intro\">碰撞对象中为什么会出现粒子泄漏？ </p>\n         <ul>\n            <li>最常见的原因是，体素大小过大，粒子采样频率过低。要解决此问题，请尝试在“模拟视图”&gt;“解算器参数”&gt;“模拟参数”中减小“基础体素大小”并调整“时间步阶”和“传输步数”。 \n               		\n            </li>\n         </ul><a name=\"UL_77F5D9017C3749ECB369894E7E252AB9\"></a><p class=\"list-intro\">为什么不能使用液体填充体积？ </p>\n         <ul>\n            <li>当模拟更复杂的液体时，可以超出模拟中的粒子数。通过打开“模拟视图”&gt;“解算器参数”&gt;“模拟参数”&gt;“解算器属性”并清除“删除超出粒子”复选框，可以修复此问题。 \n               		\n            </li>\n         </ul><a name=\"UL_84C064E326054AF285B71679790EC047\"></a><p class=\"list-intro\">模拟时为什么看不到任何东西？ </p>\n         <ul>\n            <li>“基础体素大小”可能设置得太大。要对此进行确认，可以检查缓存文件：如果每个文件都是 22kb，则未存储模拟数据。尝试在“模拟视图”&gt;“模拟参数”&gt;“解算器属性”&gt;“基础体素大小”中减小该值。 \n               		  \n               <p>当使用“实体(坚固)”模式或影响器且“基础体素大小”小于 0.5 时，流体也可能不发射。 \n                  		  \n               </p> \n            </li>\n         </ul><a name=\"UL_A6FD8E9C59E447DDB835870C885225C0\"></a><p class=\"list-intro\">设置非常低的密度时流体为什么会行为异常？ </p>\n         <ul>\n            <li>启用“曲面张力”且使用低密度时，会发生这种情况。请尝试在“液体参数”面板中禁用该选项。 \n               		\n            </li>\n         </ul><a name=\"UL_DA9D54A227AB44EEBB321CD31CAA2955\"></a><p class=\"list-intro\">如何在不丢失我的流体模拟的情况下将当前版本的 Max 文件保存为早期版本？ </p>\n         <ul>\n            <li> 为了避免出现兼容性问题，每当保存为早期版本时，都会自动删除流体模拟。要在使用 Max 2017 时覆盖此行为，请在 3dsmax.ini 文件的 [Plugins] 部分下包含以下行：<span class=\"keyboardEntry\">FluidSaveAs2017=1</span>。 \n               		\n            </li>\n         </ul><a name=\"UL_FB0809F327744BB98F5D9F9FCB1FB931\"></a><p class=\"list-intro\">为什么无法将箭头辅助对象链接到我的发射器？</p>\n         <ul>\n            <li>尽管可以将箭头辅助对象直接链接到已创建的自定义发射器，但无法将其直接链接到标准球体、长方体或平面发射器，后者是世界空间对象且属于模拟本身的一部分。如果要将箭头辅助对象链接到标准发射器，请执行以下步骤： \n               		  <a name=\"OL_ECC7AAA1E0604D768750E792F6B9F52D\"></a><ol type=\"1\" start=\"1\">\n                  <li>创建液体对象。 \n                     			 \n                  </li>\n                  <li>从“辅助对象”面板中，创建虚拟辅助对象。 \n                     			 \n                  </li>\n                  <li>从“辅助对象”面板中，创建箭头辅助对象。 \n                     			 \n                  </li>\n                  <li>对于液体解算器，启用“其他速度”，然后拾取箭头辅助对象。 \n                     			 \n                  </li>\n                  <li>将液体对象链接到虚拟辅助对象。 \n                     			 \n                  </li>\n                  <li>将箭头辅助对象链接到虚拟辅助对象。 \n                     			 \n                  </li>\n                  <li>根据需要设置虚拟辅助对象的动画。 \n                     			 \n                  </li>\n               </ol> \n            </li>\n         </ul><a name=\"UL_378BF86591EC4A5F9947E70E56BB3428\"></a><p class=\"list-intro\">如何加快或减慢流体模拟的整体效果？ </p>\n         <ul>\n            <li> 在“解算器参数”面板的“模拟参数”下，转到“模拟参数”卷展栏，然后在“传输步数”组中调整“时间比例”。 \n               		\n            </li>\n         </ul>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-18CD9467-800F-4545-A472-24DC491BEC80.htm\">发射器对象</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";