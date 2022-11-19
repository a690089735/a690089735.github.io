var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-6EDC8022-5D6C-4931-A230-38A53194EC8D\">\n      <meta name=\"description\" content=\"当打开或合并以不同于当前 3ds Max 会话的系统单位设置 保存的文件时，将出现此对话框。默认系统单位设置为“英寸”。\">\n      <meta name=\"indexterm\" content=\"系统单位: 单位不匹配对话框\">\n      <meta name=\"indexterm\" content=\"文件: 不匹配的单位\">\n      <meta name=\"indexterm\" content=\"单位: 不匹配\">\n      <meta name=\"indexterm\" content=\"单位: 文件加载单位不匹配\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“文件加载：单位不匹配”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-6EDC8022-5D6C-4931-A230-38A53194EC8D\"></a><div class=\"head\">\n            <h1>“文件加载：单位不匹配”对话框</h1>\n         </div>\n         <p class=\"blurb\">当打开或合并以不同于当前 <span class=\"charspan-msgph\">3ds Max</span> 会话的<em class=\"mild\">系统单位设置</em> 保存的文件时，将出现此对话框。默认系统单位设置为“英寸”。 \n         </p><a name=\"GUID-82C5807C-D6EB-4A1A-81DA-429FC7E6A21F\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-704DEBCC-49BE-48B3-AF50-50D2CE754EE9\">更改系统单位比例。 <img src=\"../images/ac.menuaro.gif\"> 从带有不同单位比例的文件打开、合并、外部参照或拖动几何体。</span> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52BD\"></a>例如，如果打开系统单位设置为“米”的文件，就会看到此对话框。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52BC\"></a>在这种情况下，有两个选项可供选择： \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900411EB\"></a><ul>\n            <li> <em class=\"strong\">按系统单位比例重缩放文件对象：</em>可以选择重缩放传入文件中的对象，以便与当前系统单位相匹配。这将更该传入几何体的大小 \n            </li>\n            <li> <em class=\"strong\">采用文件单位比例：</em>这将更改 <span class=\"charspan-msgph\">3ds Max</span> 安装的系统单位，以便与传入文件的单位相匹配。在出现<span class=\"char_link\"><a href=\"GUID-22D2D2B9-9A82-47FA-88DD-67B1A91E2337.htm\">重置系统单位</a></span>之前，此设置在当前和以后的 <span class=\"charspan-msgph\">3ds Max</span> 会话之间持续存在。这是默认选项。 \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52BB\"></a>选择“文件”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“重置”将无法重置系统单位。必须使用“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“单位设置”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“系统单位设置”对其进行更改或手动编辑 <em class=\"mild\">3dsmax.ini</em> 文件。 \n               </p> \n            </li>\n         </ul>\n         <div><a name=\"WS73099CC142F487551051018113CCCDB767-90C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>只有在<span class=\"char_link\"><a href=\"GUID-22D2D2B9-9A82-47FA-88DD-67B1A91E2337.htm\">“系统单位设置”对话框</a></span>中启用“考虑文件中的系统单位”后才会出现此对话框。 \n            </div>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52BA\"></a> \n            <h2><a name=\"GUID-A2757815-6867-4861-8226-589A8AC6A9A9\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900411EC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-344BE367-933B-4EF8-9CB5-FB4C7E89C9A1-low.png\"></div>  <a name=\"UL_E2F0E7E5FDAE403293C341262B88271D\"></a><ul>\n               <li><em class=\"strong\">按系统单位比例重缩放文件对象</em>按当前会话的系统单位比例重缩放文件中的对象。 \n                  <div><a name=\"WS73099CC142F487551051018113CCCDB767-90B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>许多功能取决于场景的比例，因此选择重缩放文件对象可能会产生不可预测的结果，尤其是在使用光能传递的场景中。如果已重缩放文件对象，那么就重置并重新计算光能传递。 \n                     </div>\n                  </div> \n                  <div><a name=\"WS73099CC142F487551051018113CCCDB767-90A\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果重缩放后视口中的几何体不再可见，则使用“所有视图最大化显示”按钮。 \n                     </div>\n                  </div> \n               </li>\n               <li><em class=\"strong\">采用文件单位比例</em>（默认设置。）更改系统单位比例，以匹配其他文件的单位比例。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52B7\"></a>选择“采用文件单位比例”可向 <em class=\"mild\">3dsmax.ini</em>文件添加两个设置：UnitType= 和 UnitScale=。因此，此更改在会话间持续存在，直至手动重置。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52B6\"></a>要重新获得默认的系统单位比例，请编辑 <em class=\"mild\">3dsmax.ini</em> 文件，然后删除这些设置；或进入“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“单位设置”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“系统单位设置”，然后将单位改回默认的比例（英寸）。 \n                  </p> \n                  <div><a name=\"WS73099CC142F487551051018113CCCDB767-909\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>在选择此选项时，使用“UVW 展开”的对象可能丢失其纹理坐标信息。如果出现这种情况，请选择“重缩放”选项而不是“采用”选项。 \n                     </div>\n                  </div> \n               </li>\n            </ul> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";