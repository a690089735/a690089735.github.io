var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A4D5E67D-429C-44D1-8350-28C5687A334B\">\n      <meta name=\"description\" content=\"优化样条线修改器可减少结数并调整其控制柄，从而以最佳方式尽可能原样重新生成原始样条线。\">\n      <meta name=\"indexterm\" content=\"优化样条线修改器\">\n      <meta name=\"indexterm\" content=\"优化样条线\">\n      <meta name=\"indexterm\" content=\"optimus 灌注\">\n      <meta name=\"indexterm\" content=\"修改器: 优化样条线\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 优化样条线\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>优化样条线修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A4D5E67D-429C-44D1-8350-28C5687A334B\"></a><div class=\"head\">\n            <h1>优化样条线修改器</h1>\n         </div>\n         <p class=\"blurb\">优化样条线修改器可减少结数并调整其控制柄，从而以最佳方式尽可能原样重新生成原始样条线。 \n            \n         </p><a name=\"UL_9F5E2A5A7D8547EBA12BE6B6D0AC37AB\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-88E0B138-A372-4ED7-9D91-0E4A7A816916\">选择样条线。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “对象空间修改器” <img src=\"../images/ac.menuaro.gif\"> “优化样条线”</span> \n            </li>\n         </ul><a name=\"FIG_4291958E2CF5493A916D21239248D494\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-40D26A58-2313-46E0-9C6F-BE46F4EC8237-low.png\"><p class=\"figure-title\">优化 40% 之前（左）和之后的文本样条线。请注意，即使定义曲线的结较少，曲线也会保持完整。</p>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_A93DB3A5CFEE40A091F7108C36D5B37D\"></a> \n            <h2><a name=\"GUID-8C80D127-04DD-4649-A35B-4818A2752C74\"></a>界面\n            </h2> <a name=\"FIG_62E2A2C68C994401ABBD94873F47FB81\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-DB4BF32C-B311-4E93-951E-6B7940767F96-low.png\"></div> \n            <div class=\"section\"><a name=\"SECTION_0DD46D1ADE4346C9B252507855D0A448\"></a> \n               <h3><a name=\"GUID-42E8151F-DBE7-452F-81C7-8239141C549C\"></a>“优化样条线”卷展栏\n               </h3> \n               <dl><a name=\"GUID-AF891355-DD84-4B83-B2BE-22AEBA5997D8\"></a><dt><span class=\"term\">显示结 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">显示样条线上的结。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n               <div class=\"section\"><a name=\"SECTION_17F831931C614294B3ABC0A4632F9CFA\"></a> \n                  <h4><a name=\"GUID-00946421-AF23-4211-A6F7-39C42A999D7E\"></a>“减少结数”组\n                  </h4> \n                  <p>设置应如何确定目标结数。如果图形中有多条样条线，则这些设置将应用于每条样条线。 \n                     			 \n                  </p> \n                  <dl><a name=\"GUID-AC92C167-BCE3-4BBA-AB2E-492037DB8F01\"></a><dt><span class=\"term\">按百分比 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">设置按指定百分比减少结。最大百分比为 99%。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-B0D4309C-1E3E-4D84-B5AA-DDD81A50D1B6\"></a><dt><span class=\"term\">最小结数 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 设置要保留的最小结数。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-D4B6A21D-3F31-4C8D-8C9F-8C9ABB61A8F2\"></a><dt><span class=\"term\">最大值 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\">将最大结数用作减少目标，而不是特定百分比。\n                           				  \n                        </div>\n                     </dd><a name=\"GUID-E4004780-74F2-467F-B2EC-4DE07012F84E\"></a><dt><span class=\"term\">最大结数 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 设置优化后要保留的最大结数。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-87C30E13-80CE-49EC-A511-2DD7C27BDD9D\"></a><dt><span class=\"term\">迭代次数 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 设置用于优化结及其切线的放置的迭代次数。数字越大，结果越好，但计算时间越长。 \n                           				  \n                        </div>\n                     </dd><a name=\"GUID-A83EC94A-8FF3-4233-A19C-4FE16BAC56F9\"></a><dt><span class=\"term\">子分段 \n                           				  </span></dt>\n                     <dd>\n                        <div class=\"definition\"> 设置在优化过程中要添加在现有结之间的结数。数字越大，结果越好，但计算时间越长。 \n                           				  \n                        </div>\n                     </dd>\n                  </dl> \n               </div> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_C04FC3232DD34CE0BA167CFD213EEA7C\"></a> \n               <h3><a name=\"GUID-8D7D2937-0AD9-47DA-8D74-CF39E97C5849\"></a>“创建”组\n               </h3> \n               <dl><a name=\"GUID-824E2B1A-ABC7-4F96-833A-CA7A60A0EC91\"></a><dt><span class=\"term\">“生成样条线”按钮 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">使用计算的最终结果创建重复的样条线，以避免在获得所需结果后进一步进行计算。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-A7261368-96D7-4C6B-B407-10C594104C1D\"></a><dt><span class=\"term\">使自适应 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">在创建的样条线上启用自适应插值。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_31A2E393626A470485513A58B0B4C61E\"></a> \n               <h3><a name=\"GUID-416DFAF8-5D7E-4E50-8C97-EF87893F8224\"></a>“统计信息”组\n               </h3> \n               <dl><a name=\"GUID-87ED92E2-E769-489D-9E2F-5D40DC432708\"></a><dt><span class=\"term\">图形数 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">显示当前选择中的图形数。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-A0FF4EB0-5720-4DD1-9E76-EFC9BDA61E29\"></a><dt><span class=\"term\">样条线数 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">显示当前选择中的样条线数。 \n                        				\n                     </div>\n                  </dd><a name=\"GUID-BB80518B-CD87-4B9D-A1A1-AC33DE954887\"></a><dt><span class=\"term\">结统计信息 \n                        				</span></dt>\n                  <dd>\n                     <div class=\"definition\">显示结总数、最小结数、最大结数和平均结数。 \n                        				\n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";