var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-5E822A30-D464-44E3-9544-C41E4DAE544E\">\n      <meta name=\"description\" content=\"“胶片颗粒”用于在渲染场景中重新创建胶片颗粒的效果。使用“胶片颗粒”还可以将作为背景使用的源材质中（如 AVI）的胶片颗粒与在 3ds Max 中创建的渲染场景匹配。应用胶片颗粒时，将自动随机创建移动帧的效果。\">\n      <meta name=\"indexterm\" content=\"胶片颗粒效果\">\n      <meta name=\"indexterm\" content=\"镜头效果: 胶片颗粒效果\">\n      <meta name=\"indexterm\" content=\"效果: 胶片颗粒镜头效果\">\n      <meta name=\"indexterm\" content=\"渲染效果\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>胶片颗粒渲染效果</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-5E822A30-D464-44E3-9544-C41E4DAE544E\"></a><div class=\"head\">\n            <h1>胶片颗粒渲染效果</h1>\n         </div>\n         <p class=\"blurb\">“胶片颗粒”用于在渲染场景中重新创建胶片颗粒的效果。使用“胶片颗粒”还可以将作为背景使用的源材质中（如 AVI）的胶片颗粒与在 <span class=\"charspan-msgph\">3ds Max</span> 中创建的渲染场景匹配。应用胶片颗粒时，将自动随机创建移动帧的效果。 \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_0776A9CA87E443798E90C42B619762F1\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-9D63E677-FD13-42D5-B143-B8F62F898A02\">默认菜单：“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “效果” <img src=\"../images/ac.menuaro.gif\"> “环境和效果”对话框  <img src=\"../images/ac.menuaro.gif\"> “效果”面板  <img src=\"../images/ac.menuaro.gif\"> “添加” <img src=\"../images/ac.menuaro.gif\"> “添加效果”对话框  <img src=\"../images/ac.menuaro.gif\"> “胶片颗粒”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-3C144D34-B8CF-419C-96DB-34D36ED642B4\">Alt 菜单：“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “环境和效果” <img src=\"../images/ac.menuaro.gif\"> “环境和曝光设置” <img src=\"../images/ac.menuaro.gif\"> “环境和效果”对话框  <img src=\"../images/ac.menuaro.gif\"> “效果”面板  <img src=\"../images/ac.menuaro.gif\"> “添加” <img src=\"../images/ac.menuaro.gif\"> “添加效果”对话框  <img src=\"../images/ac.menuaro.gif\"> “胶片颗粒”</span> \n               </li>\n            </ul><a name=\"WS1A9193826455F5FFBA679E112A6A19004DDC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F3BE8A4E-547D-4DA3-9E63-18FC9A0DE2B4-low.png\"><p class=\"figure-title\">将胶片颗粒应用于场景前后</p>\n            </div>\n            <div style=\"margin-top: 9pt;\"><a name=\"WS1A9193826455F5FF45564F421269B08A8E9BDD\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 如果场景中包含具有 alpha 通道的特定位图格式，则无法对渲染应用“胶片颗粒”。 \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-581C\"></a> \n               <h2><a name=\"GUID-AB7A0940-476D-4737-B6A7-57769601E132\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004DDD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E21C71D0-E41F-407A-B619-41A0566ABCEB-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-2BD4\"></a>“胶片颗粒参数”卷展栏包含以下控件。 \n               </p> <a name=\"GUID-884B292F-4ECE-4255-B88A-1DB448609E4E\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C79E97FC3AFC\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-2BD3\"></a>颗粒</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-7DA7\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8754344\"></a>设置添加到图像中的颗粒数。范围从 0 到 10.0。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C79E97FC3AFD\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-2BD2\"></a>忽略背景</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F487551A80AE1B11E234B4DC9-7DA6\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8754345\"></a>屏蔽背景，使颗粒仅应用于场景中的几何体和效果。如果使用胶片（已包含颗粒）作为背景图像，则选择此选项。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";