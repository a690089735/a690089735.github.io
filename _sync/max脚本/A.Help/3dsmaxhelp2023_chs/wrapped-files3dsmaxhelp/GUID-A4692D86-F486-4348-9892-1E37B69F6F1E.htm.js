var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A4692D86-F486-4348-9892-1E37B69F6F1E\">\n      <meta name=\"description\" content=\"“冲突属性”控制冲突对象在布料模拟中的行为。布料对象沿着冲突对象反弹、包裹或被其撕裂。\">\n      <meta name=\"indexterm\" content=\"冲突属性 (布料)\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>冲突属性</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A4692D86-F486-4348-9892-1E37B69F6F1E\"></a><div class=\"head\">\n            <h1>冲突属性</h1>\n         </div>\n         <p class=\"blurb\">“冲突属性”控制冲突对象在布料模拟中的行为。布料对象沿着冲突对象反弹、包裹或被其撕裂。 </p>\n         <div class=\"bodyReference\"><a name=\"GUID-3B946E53-00AF-4D1B-8B64-39F29F8197EF\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-D5B78D12-63CA-4DE1-A90D-7632455D5F92\">选择对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “布料” <img src=\"../images/ac.menuaro.gif\"> “对象”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “对象属性”按钮  <img src=\"../images/ac.menuaro.gif\"> “对象属性”对话框  <img src=\"../images/ac.menuaro.gif\">  高亮显示列表中的对象。 <img src=\"../images/ac.menuaro.gif\">  选择“冲突对象”。 <img src=\"../images/ac.menuaro.gif\"> “冲突属性”组</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS73099CC142F48755-B872B1811D6C581626-53CB\"></a> \n               <h2><a name=\"GUID-ECF291DD-7CCD-43B8-B5F4-4914AD69AC68\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043708\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1B233EE7-DCE0-47D2-A081-EC4E3D1F8CFE-low.png\"></div>  <a name=\"GUID-1D469CF9-F6BA-4D1F-A252-3CD6E4B237CB\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E279B\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-4356\"></a>深度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4AFB\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752059\"></a>冲突对象的冲突深度。如果部分布料在冲突对象中达到此深度，模拟将不再尝试将布料推出网格。此值使用 <span class=\"charspan-msgph\">3ds Max</span> 单位进行测量。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E279C\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-4355\"></a>偏移</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4AFA\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA875205A\"></a>在布料对象和冲突对象之间保持的距离。非常低的值将导致冲突网格从布料下突出来。非常高的值将令织物看起来象是漂浮在冲突对象的顶部。此值使用 <span class=\"charspan-msgph\">3ds Max</span> 单位进行测量。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E279D\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-4354\"></a>动摩擦力</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4AF9\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA875205B\"></a>布料和该特殊实体对象之间的动摩擦。较大的值将增加更多的摩擦力，导致织物在物体表面上滑动较少。较小的值将令织物在物体上易于滑动，类似于丝织物将会产生的反应。该值只用于和启用“使用实体摩擦”的布料对象交互，否则该摩擦力值将取自布料自身的属性。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E279E\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-4353\"></a>静摩擦力</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4AF8\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA875205C\"></a>布料和实体对象之间的静摩擦。当布料处于静止位置时，此值将控制其在某处的静止或滑动能力。该值只用于和启用“使用实体摩擦”的布料对象交互，否则该摩擦力值将取自布料自身的属性。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E279F\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-4352\"></a>启用冲突</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4AF7\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA875205D\"></a>启用或禁用此对象的冲突，同时仍然允许对其进行模拟。这意味着该对象仍然可用于设置曲面约束。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-B872B1811D6C581626-5341\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-B872B1811D6C581626-5340\"></a>切割布料</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11DF600637E-4AF6\"></a> \n                        <p><a name=\"WS73099CC142F48755-B872B1811D6C581626-533F\"></a>启用此选项后，如果在模拟过程中与布料相交，“冲突对象”可以切割布料。必须设置布料对象以制造撕裂沿接缝或一组顶点进行。默认设置为禁用状态。 \n                        </p> \n                        <div><a name=\"WS73099CC142F48755-B872B1811D6C581626-533D\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>启用“切割布料”后，将禁用“启用冲突”。对于大多数模型，这样可以得到最逼真的结果。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";