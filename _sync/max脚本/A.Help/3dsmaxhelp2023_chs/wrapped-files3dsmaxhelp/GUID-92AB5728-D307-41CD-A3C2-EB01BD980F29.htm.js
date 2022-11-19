var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-92AB5728-D307-41CD-A3C2-EB01BD980F29\">\n      <meta name=\"description\" content=\"法向投影曲线依赖于曲面。该曲线基于原始曲线，以曲面法线的方向投影到曲面。\">\n      <meta name=\"indexterm\" content=\"NURBS 曲面: 修剪\">\n      <meta name=\"indexterm\" content=\"NURBS 曲线: 法向投影\">\n      <meta name=\"indexterm\" content=\"法向投影曲线 (NURBS)\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>法向投影曲线</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-92AB5728-D307-41CD-A3C2-EB01BD980F29\"></a><div class=\"head\">\n            <h1>法向投影曲线</h1>\n         </div>\n         <div class=\"abstract\"> \n            <p><a name=\"GUID-26539532-17D9-4521-9876-9D8FA401CD74\"></a> <img src=\"../images/GUID-F19CE5C0-54A9-4B24-9628-3A3D6D556EA5-low.png\"> \n            </p> \n            <p class=\"blurb\">法向投影曲线依赖于曲面。该曲线基于原始曲线，以曲面法线的方向投影到曲面。 </p> \n         </div><a name=\"UL_23F9ED081AB64BD89CD3647DCFD40029\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-042B1F0B-8BF1-4F57-857D-BF4C8FE43E9C\">选择 NURBS 对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “创建曲线”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “从属曲线”组框  <img src=\"../images/ac.menuaro.gif\"> “法向投影”按钮</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-7A147647-8869-4949-9C6D-1E2B5B76E73E\">选择 NURBS 对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\">  NURBS 工具箱  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-F19CE5C0-54A9-4B24-9628-3A3D6D556EA5-low.png\">（创建法向投影曲线）</span> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C2A\"></a>可以将法向投影曲线用于<span class=\"char_link\"><a href=\"GUID-6DC30BD4-6592-42D9-8FC6-C25D539F29A9.htm\">修剪</a></span>。 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190041FAD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5958AE4A-5315-4958-B1CE-91C8BAD95E84-low.png\"><p class=\"figure-title\">使用法向投影曲线修剪曲面</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C29\"></a>如果投影在两个或多个位置上与曲面相交，则与种子点最近的交点是创建曲线的交点。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C28\"></a> \n            <h2><a name=\"GUID-102C26E8-0865-4F7D-A5A5-C7F954035A2B\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190041FAE\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041FAF\"></a>要创建法向投影曲线，请执行以下操作：\n            </p>\n            <p><a name=\"WS1A9193826455F5FF-316FD70E123DECE8002-4F9B\"></a>NURBS 对象必须至少包含一个曲面及一条曲线。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在 NURBS 工具箱中，启用 <img src=\"../images/GUID-F19CE5C0-54A9-4B24-9628-3A3D6D556EA5-low.png\">（创建法向投影曲线）。 \n               </li>\n               <li>单击该曲线，然后单击使法向投影曲线依赖的曲面。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C27\"></a>如果曲线以曲面法线方向投射到曲面，则可以创建投射曲线。原始父曲线可以离开“曲面的边”。只可以在投影和曲面相交的位置创建投射曲线。 \n                  </p> \n               </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C26\"></a> \n            <h2><a name=\"GUID-1B10CA3B-04B4-4AA4-A24F-FE152BA77F08\"></a>界面\n            </h2> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041FB0\"></a> \n               <h3><a name=\"GUID-6B636DB6-C2F6-453F-9B37-35BF6138F299\"></a>“法向投影曲线”卷展栏（创建时间）\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190041FB1\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A7A70334-F952-4E98-A5B2-09DB8708F5A8-low.png\"></div>  <a name=\"GUID-C5D1A4DA-EF55-4175-92D3-4A46016E2827\"></a><div class=\"dl_section\"><a name=\"GUID-E4B57AA5-DC87-4CA0-B990-752C57F2FA54\"></a><p class=\"title\"><a name=\"GUID-56E8C8A9-4FF8-42EB-BDFB-C5E9036EAD53\"></a>“修剪控件”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D276\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C25\"></a>修剪</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61C2\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA875312E\"></a>启用此选项后，将针对曲线修剪曲面。禁用此选项后，不能修剪曲面。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C24\"></a>如果不可以使用该曲线进行修剪，则曲面将以错误的颜色显示（默认情况下为橙色）。例如，如果该曲线既不能与曲面的边交叉也不能形成闭合的环，则曲线将无法用于修剪。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D277\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C23\"></a>翻转修剪</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61C1\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA875312F\"></a>启用此选项后，将以相反的方向修剪曲面。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D278\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C22\"></a>U 向种子/V 向种子</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61C0\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753130\"></a>更改曲面上种子值的 UV 向位置。如果可以选择投影，则离种子点最近的投影是用于创建曲线的投影。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041FB3\"></a> \n               <h3><a name=\"GUID-CBF0A94D-BBA3-49AD-971B-A26100147958\"></a>“法向投影曲线”卷展栏（修改时间）\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190041FB4\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E8F7BB20-8E9F-42C6-A779-734EA81E597A-low.png\"></div>  <a name=\"GUID-733B299C-7F41-45E7-9DD4-FC1BFA000DA5\"></a><div class=\"dl_section\"><a name=\"GUID-9A89126D-6BAF-44ED-A94A-8D23C809F44D\"></a><p class=\"title\"><a name=\"GUID-2FEF2226-3810-452E-953F-723AEBF4A599\"></a>“修剪控件”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D279\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C21\"></a>修剪</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61BF\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753131\"></a>启用此选项后，将针对曲线修剪曲面。禁用此选项后，不能修剪曲面。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C20\"></a>如果不可以使用该曲线进行修剪，则曲面将以错误的颜色显示（默认情况下为橙色）。例如，如果该曲线既不能与曲面的边交叉也不能形成闭合的环，则曲线将无法用于修剪。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D27A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C1F\"></a>翻转修剪</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61BE\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753132\"></a>启用此选项后，将以相反的方向修剪曲面。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D27B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C1E\"></a>U 向种子/V 向种子</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61BD\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753133\"></a>更改曲面上种子值的 UV 向位置。如果可以选择投影，则离种子点最近的投影是用于创建曲线的投影。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D27C\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6C1D\"></a>替换曲线 / 替换曲面</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-61BC\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8753134\"></a>用于替换父子对象。单击任一按钮，然后单击要替换原始父对象的曲线或曲面。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";