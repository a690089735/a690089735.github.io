var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-1ADE757E-C959-4B61-A682-2831E2963C2F\">\n      <meta name=\"description\" content=\"对包含与代理有关的 Biped 的模拟进行求解时，群组系统会使用“优先级”卷展栏设置。\">\n      <meta name=\"indexterm\" content=\"群组卷展栏: 优先级\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“优先级”卷展栏</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-1ADE757E-C959-4B61-A682-2831E2963C2F\"></a><div class=\"head\">\n            <h1>“优先级”卷展栏</h1>\n         </div>\n         <p class=\"blurb\">对包含与代理有关的 Biped 的模拟进行求解时，群组系统会使用“优先级”卷展栏设置。 </p><a name=\"GUID-E90E7579-6AF3-4120-8EA8-391D41B68D68\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-EC794507-68DF-49B4-9426-3D3B804191BD\"> <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-9A23D2B8-9CE2-40BE-98B6-651DBC94F4F7-low.png\">（辅助对象） <img src=\"../images/ac.menuaro.gif\"> “对象类型”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “群组” <img src=\"../images/ac.menuaro.gif\"> “优先级”卷展栏</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-3FF7F88F-B884-441E-83F3-7979652386DA\">选择群组对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “优先级”卷展栏</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F487552A50A53111913E7C26F-7716\"></a>优先级参数是用户指定给代理的正整数。使用优先级时，根据优先级<em class=\"mild\">从最低级到最高级</em> 的设置，群组模拟一次只能计算一个 Biped。换而言之，优先级设置越低，则优先级越高。如果两个 Biped/代理的优先级相同，则这两个 Biped/代理的计算顺序是随机确定的。 \n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D29\"></a>本主题介绍了设置代理优先级的六种不同方法，以及如何在不同情况下使用优先级。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045FC7\"></a> \n            <h2><a name=\"GUID-F537BC2B-1920-4DC7-ADC5-8E836F3D99C2\"></a>使用优先级\n            </h2> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D2A\"></a>如果大型群组都沿着一个方向运动，通常需要先求解前面的代理。在这种情况下，使用“对象的近程”或“栅格的近程”在设置优先级时是很有用的。 \n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D2B\"></a>如果以 Biped 周期开始，且要求这些 Biped 呈现闲庭信步，可能无需关注 Biped 的优先级。您可以令这些 Biped 具有相同的优先级，然后由系统决定先运动的 Biped。但是，可能最好指定随机优先级或使优先级唯一，以便确保每次的顺序相同，同时可以读取优先级号码，从而了解以后出现的\n               Biped。另外，这样做可以使您根据需要更改相关的顺序。 \n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D2C\"></a>假设有两组 Biped，其中，为每个 Biped 都指定了随机优先级。如果要在每组中保持优先级关系，而在另一组之前或之后启动一组，可以使用“增量优先级”递增或递减一组中的全部优先级。 \n            </p> \n            <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D2D\"></a>如果算法与您的具体情况不符，则需要采用特定方式，手动设置优先级。可以显式设置优先级是很有用的。这就是所谓的“通过拾取指定”方法。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4623\"></a> \n            <h2><a name=\"GUID-4B2EE5F0-F3AD-4084-801E-75386A31679F\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190045FC8\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-62B70048-209A-4B8C-A777-4BBD64E31F29-low.png\"></div> <a name=\"GUID-38C7DA03-E7A7-493C-BDDE-F9B760E1DDCB\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E8\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D2E\"></a>起始优先级</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A99\"></a> 设置初始优先级值。此时，该选项将会应用于设置优先级的前四种方法：“通过拾取指定”、“对象的近程”、“栅格的近程”和“指定随机优先级”。默认值为 0。 \n                     <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E846\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>优先级是按照递增的顺序指定的。因此，优先级值为 0 的代理位于优先级值为 1 的代理之前，优先级值为 1 的代理位于优先级值为 2 的代理之前，依此类推。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-15178861-FA88-4022-95F5-5E187C48D308\"></a><p class=\"title\"><a name=\"GUID-C182C913-0753-4416-9E7E-7B3BD0906CC2\"></a>“通过拾取指定”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D2F\"></a>拾取/指定</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A98\"></a> 允许在视口中依次选择每个代理，然后将连续的较高优先级值指定给任何数目的代理。选定的第一个代理指定的是“起始优先级”值。为选定的每个后续代理指定的优先级值是逐一递增的。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D30\"></a>要停止指定优先级，请在视口中右键单击，或重新单击“拾取/指定”按钮。 \n                        </p> \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D31\"></a>此时，代理的优先级将会以附加到每个代理的黑色数字显示在视口中；通常，这些优先级最容易显示在“线框”视图中。 \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E847\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在此操作期间，您可以撤销和/或恢复指定。 \n                           </div>\n                        </div> \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E848\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>使用这种方法，可以为两个或多个代理指定相同的优先级值。在这种情况下，对于预测性更高的行为，请使用“优先级唯一化”，以便代理不会共享优先级。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-D75AF8D6-4379-46E2-A368-13617F2205D4\"></a><p class=\"title\"><a name=\"GUID-CFBEE6C4-C4A0-41B5-8524-5FC4598BF93A\"></a>“通过计算指定”组\n               </p>\n               <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D32\"></a>此组提供了用于指定代理优先级的五种不同方法，以及用于选择受这些方法影响的代理的按钮。 \n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E6\"></a><span class=\"term\"><a name=\"WSF742DAB041063133728B9B2112A1CE7292-7DF5\"></a>要指定优先级的代理</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A97\"></a> 允许使用“选择”对话框指定受后续使用该组中的其它控件影响的代理。使用“选择”对话框选择相关的代理，然后单击“选择”退出该对话框。这种选择只能应用于近程指定（即，“对象的近程”和“栅格的近程”）。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D34\"></a>对象的接近度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A96\"></a> 允许根据代理与特定对象之间的距离指定优先级。要指定对象，请单击“无”按钮，然后选择优先级要基于其的对象。此后，单击“指定”按钮计算和指定优先级。离对象最近的代理指定的是“起始优先级”值，而后续距离较远的每个代理指定的是次最高优先级。 \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D35\"></a>对于距离对象相等的任何代理，character studio 会随机指定优先级。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E4\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D36\"></a>栅格的接近度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A95\"></a> 允许根据代理与特定栅格对象指定的无限平面之间的距离指定优先级。要指定栅格对象，请单击“无”按钮，然后选择优先级要基于其的栅格对象。此后，单击“指定”按钮计算和指定优先级。离栅格对象最近的代理指定的是“起始优先级”值，而后续距离较远的每个代理指定的是次最高优先级。\n                        \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D37\"></a>对于距离平面相等的任何代理，character studio 会随机指定优先级。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E3\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D38\"></a>指定随机优先级</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A94\"></a> 为选定的代理指定随机优先级。指定的优先级值介于“起始优先级”值与该值与选定代理数之和之间。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E2\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D39\"></a>使优先级唯一</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A93\"></a> 确保所有的代理具有唯一的优先级值。如果两个代理共享相同的优先级，将会为其中一个代理指定一个与另外一个代理不同的新优先级值。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E1\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D3A\"></a>增量优先级</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A92\"></a> 按照增量值递增所有选定代理的优先级。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9E0\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D3B\"></a>增量</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A91\"></a> 按照“增量优先级”按钮调整代理优先级设置值。使用负的增量值，可以递减优先级。默认值为 0。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9DF\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D3C\"></a>设置开始帧</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A90\"></a> 打开<span class=\"char_link\"><a href=\"GUID-952FBBD2-EFEC-463D-98E9-132FFB90E508.htm\">“设置开始帧”对话框</a></span>，以便根据指定的优先级设置开始帧。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9DE\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D3D\"></a>显示优先级</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A8F\"></a> 启用作为附加到代理的黑色数字的指定优先级值的显示。默认设置为禁用状态。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-9DD\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D3E\"></a>显示开始帧</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-1A8E\"></a> 启用作为附加到代理的黑色数字的指定开始帧值的显示。默认设置为禁用状态。 \n                     <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16D3F\"></a>如果“显示优先级”和“显示开始帧”同时处于打开状态，则两个值会并排显示，且以斜线符号 (/) 分隔。此时，优先级显示在斜线的左侧，而开始帧显示在斜线的右侧。 \n                     </p> \n                  </div>\n               </dd>\n            </dl> \n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-952FBBD2-EFEC-463D-98E9-132FFB90E508.htm\">“设置开始帧”对话框</a><p>将 Biped 包含在使用共享运动流的群组模拟中时，通常不希望它们在前后紧接的编队上行走。可以为群组设置不同的开始帧来避免这个问题，这样每个 Biped 都能在不同的动画帧上使用自己的初始运动剪辑开始移动。大多数情况下，用与优先级相同的顺序设置开始帧，这样就不会使具有较早开始帧的\n                        Biped 停滞在具有较晚开始帧的 Biped 之后。“设置开始帧”对话框可以自动为代理指定与优先级相同的开始帧顺序。 \n                     </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";