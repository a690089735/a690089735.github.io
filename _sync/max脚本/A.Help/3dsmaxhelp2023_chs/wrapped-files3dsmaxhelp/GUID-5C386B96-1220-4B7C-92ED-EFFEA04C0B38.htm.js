var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-5C386B96-1220-4B7C-92ED-EFFEA04C0B38\">\n      <meta name=\"description\" content=\"通过“缩放测试”，粒子系统可以检查粒子的缩放或缩放前后的粒子大小以及相应分量。该测试为测量比例或大小提供各种轴选项。\">\n      <meta name=\"indexterm\" content=\"粒子: 测试粒子缩放\">\n      <meta name=\"indexterm\" content=\"大小测试（粒子流）\">\n      <meta name=\"indexterm\" content=\"缩放测试（粒子流）\">\n      <meta name=\"indexterm\" content=\"粒子流测试: 缩放\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 大小\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 缩放\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>缩放测试</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-5C386B96-1220-4B7C-92ED-EFFEA04C0B38\"></a><div class=\"head\">\n            <h1>缩放测试</h1>\n         </div>\n         <p class=\"blurb\">通过“缩放测试”，粒子系统可以检查粒子的缩放或缩放前后的粒子大小以及相应分量。该测试为测量比例或大小提供各种轴选项。 </p>\n         <div class=\"bodyReference\"><a name=\"GUID-263B9616-DE7E-4686-8618-DED95CD7142F\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-3FBCEF56-6F2D-46DC-A5B7-C7E23FD7C190\">粒子视图  <img src=\"../images/ac.menuaro.gif\">  在某个事件中单击“缩放测试”，或将“缩放测试”添加到粒子系统中，然后选择它。</span> \n               </li>\n            </ul>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FFC\"></a>可以使用此测试，根据大小改变行为。例如，气泡可能会增大到特定大小，然后爆破。对象的大小也可能会缩小到力无法影响的程度，例如风。 \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FFB\"></a> \n               <h2><a name=\"GUID-709FB516-85B7-4841-88A7-5726629FCA4C\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004254B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2210430A-0D0B-4F0D-A042-8F69E5BDC34F-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FFA\"></a>该用户界面出现在“粒子视图”对话框右侧的“参数”面板中。 \n               </p> <a name=\"GUID-2169140E-D972-4A22-85FF-A179DE3A6375\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62F5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF9\"></a>类型</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63FC\"></a> 选择要测试的测量类型。可以测试实际的缩放比例或缩放前后的大小。默认设置为“缩放”。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF8\"></a>例如，如果粒子边界框的 X 轴大小初始为 10 个系统单位，然后您使用“缩放”操作符将粒子在 X 轴缩放 150%，缩放前大小为 10，缩放后大小为 15。当然，比例为 150。 \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5F82\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“粒子流”根据每个粒子的边界框在粒子局部坐标空间中的尺寸测量粒子大小。对于低多边形“图形”选项“四面体”和“球体”，此测量的结果与“图形”操作符的“大小”值可能不同。 \n                           </div>\n                        </div> <a name=\"WS1A9193826455F5FFBA679E112A6A19004254C\"></a><ul>\n                           <li> <em class=\"strong\">缩放前大小</em>在缩放前测试大小。 \n                           </li>\n                           <li> <em class=\"strong\">缩放后大小</em>在缩放后测试大小。 \n                           </li>\n                           <li> <em class=\"strong\">缩放</em>测试缩放百分比。 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62F4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF7\"></a>轴</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63FB\"></a> 选择要测量的轴。默认设置为“平均” <a name=\"WS1A9193826455F5FFBA679E112A6A19004254D\"></a><ul>\n                           <li> <em class=\"strong\">平均</em>将全部三个轴上的大小相加，然后除以三，获得平均测量值。 \n                           </li>\n                           <li> <em class=\"strong\">最小</em>使用最小尺寸。 \n                           </li>\n                           <li> <em class=\"strong\">中间</em>使用按大小顺序的中间尺寸。例如，如果粒子尺寸为 X=5、Y=6、Z=12，与“测试值”相比的数字应为 6。 \n                           </li>\n                           <li> <em class=\"strong\">最大</em>使用最大尺寸。 \n                           </li>\n                           <li> <em class=\"strong\">X/Y/Z</em>使用指定尺寸。 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-A60DCB1B-75A2-451A-A864-934EC12884C9\"></a><p class=\"title\"><a name=\"GUID-6246A382-5A74-4C50-B89D-F10583597745\"></a>“测试真值的条件是粒子值”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752D23\"></a>用于指定如果速度测试成功或失败，测试是否将粒子传递给下一个事件。适用于加速时为真/减速时为真以外的所有测试。默认设置为“大于测试值”。 \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF5\"></a>默认情况下，如果测试的值超过了“测试值”的数量，“缩放测试”将返回真值，但是也可以选择“小于测试值”。例如，如果将“类型”设置为“缩放”，将“测试值”设置为 150，将“变化”设置为 0，选择“小于测试值”，只有在比例因子小于 150% 时，粒子才会移动到下一个事件。\n                     \n                  </p>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-853F94C6-6366-4469-B0A2-7781FCB92783\"></a><p class=\"title\"><a name=\"GUID-821B05D5-6788-42C1-A1FA-C4DDE9D20C91\"></a>“大小”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF4\"></a>“类型”设置为“缩放前大小”或“缩放后大小”时，这些设置可用。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62F2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF3\"></a>测试值</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F9\"></a> 要测试的特定大小。默认值为 10.0。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62F1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF2\"></a>变化</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F8\"></a> 要测试的值可以随机变化的量。默认值为 0.0。 \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF1\"></a>为了获取每个粒子的实际测试值，系统将“变化”值乘以 -1.0 到 1.0 之间的某个随机数，然后将结果与“测试值”设置值相加。例如，如果“测试值”为 10，“变化”为 5，每个粒子的测试值将在 5 到 15 之间。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-EF0D4740-50AA-49AF-B564-7D968DF54F73\"></a><p class=\"title\"><a name=\"GUID-629F2AFE-D875-42BB-92B1-B6969575CE08\"></a>“缩放”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FF0\"></a>“类型”设置为“缩放”时，这些设置可用。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62F0\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FEF\"></a>测试值</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F7\"></a> 要测试的特定比例因子。默认值为 100%。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62EF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FEE\"></a>变化</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F6\"></a> 要测试的值可以随机变化的量。默认值为 0.0%。 \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FED\"></a>为了获取每个粒子的实际测试值，系统将“变化”值乘以 -1.0 到 1.0 之间的某个随机数，然后将结果与“测试值”设置值相加。例如，如果“测试值”为 100%，“变化”为 10%，每个粒子的测试值将在 90% 到 110% 之间。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-1235C30F-6AB3-44CD-93D2-61F2A1C77471\"></a><p class=\"title\"><a name=\"GUID-7D028659-72DF-43E3-89E5-E05752146A86\"></a>“测试值偏移关键点”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62EE\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FEC\"></a>同步方式</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F5\"></a> 选择在设置“测试值”和“变化”的动画时要使用的时间帧： <a name=\"WS1A9193826455F5FFBA679E112A6A190042551\"></a><ul>\n                              <li> <em class=\"strong\">绝对时间</em>为参数设置的任意关键点在设置关键点的实际帧应用。 \n                              </li>\n                              <li> <em class=\"strong\">粒子年龄</em>为参数设置的任意关键点在每个粒子存在的相应帧应用。 \n                              </li>\n                              <li> <em class=\"strong\">事件期间</em>参数设置的任意关键点在每个粒子第一次进入事件时开始应用于粒子。 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-F793002A-1720-43CC-AAD8-875EAC3D1430\"></a><p class=\"title\"><a name=\"GUID-A6D31EC2-3A4F-4EC4-8D74-204C3BB904A0\"></a>“唯一性”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FEB\"></a>“唯一性”设置可以使测试值变化随机化。只有“变化”的值超过 0.0 时才可用。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62ED\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FEA\"></a>种子</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F4\"></a> 指定随机化值。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62EC\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FE9\"></a>新增特性</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63F3\"></a> 使用随机化公式计算新种子。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";