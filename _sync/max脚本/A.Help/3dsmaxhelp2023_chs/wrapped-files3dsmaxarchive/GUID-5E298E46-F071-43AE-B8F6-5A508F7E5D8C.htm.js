var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-5E298E46-F071-43AE-B8F6-5A508F7E5D8C\">\n      <meta name=\"description\" content=\"脚本状态选项可用来创建带两个参数的“MAXScript”脚本：节点和时间。脚本通常测试一个或多个值，之后如果条件（测试结果）为真就返回 1，如果条件为假则返回 0。此结果决定是否激活状态。\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“脚本”面板</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-5E298E46-F071-43AE-B8F6-5A508F7E5D8C\"></a><div class=\"head\">\n            <h1>“脚本”面板</h1>\n         </div>\n         <p class=\"blurb\">脚本状态选项可用来创建带两个参数的“MAXScript”脚本：节点和时间。脚本通常测试一个或多个值，之后如果条件（测试结果）为真就返回 1，如果条件为假则返回 0。此结果决定是否激活状态。 </p><a name=\"GUID-72867946-780C-4409-AA14-B314D9E629A1\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-1E3A2539-5D13-4B0F-91A6-2E1474AB6678\">选择群组辅助对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “全局剪辑控制器”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “新建” <img src=\"../images/ac.menuaro.gif\">  选择全局剪辑对象。 <img src=\"../images/ac.menuaro.gif\">  在列表中选择对象。 <img src=\"../images/ac.menuaro.gif\"> “编辑” <img src=\"../images/ac.menuaro.gif\"> “合成”对话框  <img src=\"../images/ac.menuaro.gif\"> “状态”面板  <img src=\"../images/ac.menuaro.gif\"> “新建状态” <img src=\"../images/ac.menuaro.gif\"> “编辑属性” <img src=\"../images/ac.menuaro.gif\"> “剪辑状态”对话框  <img src=\"../images/ac.menuaro.gif\"> “脚本”面板</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-3D23567C-DBBF-4D8E-A5E7-D17AC6BF364C\">“轨迹视图” <img src=\"../images/ac.menuaro.gif\"> “层次” <img src=\"../images/ac.menuaro.gif\"> “全局轨迹” <img src=\"../images/ac.menuaro.gif\"> “块控制” <img src=\"../images/ac.menuaro.gif\"> “全局剪辑属性”（右键单击） <img src=\"../images/ac.menuaro.gif\"> “合成”对话框  <img src=\"../images/ac.menuaro.gif\"> “状态”面板  <img src=\"../images/ac.menuaro.gif\"> “新建状态” <img src=\"../images/ac.menuaro.gif\"> “编辑属性” <img src=\"../images/ac.menuaro.gif\"> “剪辑状态”对话框  <img src=\"../images/ac.menuaro.gif\"> “脚本”面板</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16EA0\"></a>剪辑控制器所使用的脚本除了需要一个与时间相关的特别的状态之外，与那些<span class=\"char_link\"><a href=\"GUID-435DDD88-C220-48BB-ACAF-764EF09AC349.htm\">认知控制器</a></span>所使用的脚本相类似。 \n         </p>\n         <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16EA1\"></a>在以下示例脚本中，“del”是代理的节点，“t”是时间。脚本化的函数名称“stoppedScript”也需要在“剪辑状态”对话框的“脚本”面板内的名称字段中输入。与认知控制器脚本不一样，需要调用语句“at time t”，因为在合成发生的时候并没有运行动画。\n            \n         </p>\n         <div class=\"codeBlock\"><pre>fn stoppedScript del t = (\nat time t\nif del.pos.z &lt; 65 then 1 else 0\n)</pre></div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4610\"></a> \n            <h2><a name=\"GUID-C6D80EE7-5F00-4751-A3CC-DEFEA749874E\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004602C\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-534C4A96-7606-456B-9BC1-3B1B8F34123E-low.png\"></div> <a name=\"GUID-F08993E8-15F9-4F93-8258-A4989B49D86F\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-931\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16EA2\"></a>使用脚本</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-19E5\"></a> \n                     <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87539CA\"></a>打开此项，以使用“MAXScript”脚本来控制剪辑。 \n                     </p> \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-62CF0891-47A6-40E0-BDC4-8A981CB92988\"></a><p class=\"title\"><a name=\"GUID-30F25ED0-1154-4387-B6F1-192638EED70E\"></a>“脚本”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-930\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16EA3\"></a>[函数名称字段]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-19E4\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87539CB\"></a>输入由脚本定义的函数名称，也可以在脚本的开始处找到它。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D-92F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16EA4\"></a>编辑脚本</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-19E3\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87539CC\"></a>打开 MAXScript 编辑器窗口以编辑脚本。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";