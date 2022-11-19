var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-8E3FF64C-63B6-42FA-A198-D65E10387A5D\">\n      <meta name=\"description\" content=\"金属明暗处理的材质生成其自己的高光颜色。另外，金属明暗器的高光曲线与 Blinn Oren-Nayar-Blinn 和 Phong 高光的曲线在形状上不同。\">\n      <meta name=\"indexterm\" content=\"金属高光\">\n      <meta name=\"indexterm\" content=\"高光: 金属\">\n      <meta name=\"indexterm\" content=\"反射高光: 金属\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>金属高光</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-8E3FF64C-63B6-42FA-A198-D65E10387A5D\"></a><div class=\"head\">\n            <h1>金属高光</h1>\n         </div>\n         <p class=\"blurb\">金属明暗处理的材质生成其自己的高光颜色。另外，金属明暗器的高光曲线与 <span class=\"char_link\"><a href=\"GUID-7C791BBC-B27F-4BD2-821D-D7DBEA9E7CC9.htm\">Blinn Oren-Nayar-Blinn 和 Phong 高光</a></span>的曲线在形状上不同。 \n         </p><a name=\"GUID-C25FF0B8-A9CC-4FAC-99E0-923EABA3C53F\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-7A8EA74D-D743-4AE2-A2B2-BF10A422688B\"> <img src=\"../images/GUID-49279336-6EAB-47AC-B365-148668F3E087-low.png\"> <img src=\"../images/GUID-D2BE83D3-DB0A-40EF-96FD-0D85D4A54DD5-low.png\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “标准”材质  <img src=\"../images/ac.menuaro.gif\"> “基本参数”卷展栏（标准材质）（针对“金属”明暗器） <img src=\"../images/ac.menuaro.gif\"> “反射高光”组</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-DBCD12F5-497E-4A8B-A670-2CB80A658575\">“材质编辑器” <img src=\"../images/ac.menuaro.gif\"> “光线跟踪”材质  <img src=\"../images/ac.menuaro.gif\"> “光线跟踪基本参数”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “明暗处理: 金属” <img src=\"../images/ac.menuaro.gif\"> “反射高光”组</span> \n            </li>\n         </ul>\n         <div><a name=\"WS73099CC142F48755BE5C71114081FCAA9-7B1D\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>对于<span class=\"char_link\"><a href=\"GUID-06832470-021B-47A4-B912-E347156B74A6.htm\">光线跟踪材质</a></span>，“反射高光”组中将显示“高光颜色”组件。并且，不属于当前明暗器的高光控件将标记为“N/A”。 \n            </div>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2A71\"></a> \n            <h2><a name=\"GUID-68F2D8B6-A2EF-4E08-87B5-312B96877654\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004-868\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004-867\"></a>要增加或降低高光的大小和强度，请执行以下操作：\n            </p>\n            <ul>\n               <li>更改“光泽度”值。 \n                  <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B10\"></a>高光曲线的宽度和高光预览将更改。光泽度为 0% 时，曲线采用其最大宽度。光泽度为 100% 时，曲线会非常狭窄。 \n                  </p> \n               </li>\n            </ul> <a name=\"WS1A9193826455F5FFBA679E112A6A19004-866\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004-865\"></a>要增加或降低高光的强度，请执行以下操作：\n            </p>\n            <ul>\n               <li>更改“高光级别”的值。 \n                  <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B0F\"></a>高光曲线的强度和高光预览将更改。在 0% 高光级别上，没有高光。在 100% 高光级别上，曲线采用没有超载的最大高度。如果值大于 100%，则曲线将超载：曲线将变得更宽，较宽的区域采用最大高光强度。 \n                  </p> \n                  <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B0E\"></a>增加高光级别也会使漫反射颜色变暗。 \n                  </p> \n                  <p><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B0D\"></a>高光曲线的形状影响材质高光颜色区域和漫反射颜色区域之间的混合。曲线越陡峭，存在的混合就越少，反射和掠射高光的边缘越尖锐。 \n                  </p> \n               </li>\n            </ul> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2A70\"></a> \n            <h2><a name=\"GUID-AAEA223F-A935-43FB-8E6D-4266BFBE0A28\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004-864\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-3602B961-B7B9-4967-B28A-A0B8B44C9B81-low.png\"></div>  <a name=\"GUID-8D4A7E53-D19D-4FF5-AF99-B06D2FCB0060\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861-CC3\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B0C\"></a>高光级别</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D16A3\"></a> \n                     <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8754BEF\"></a>影响反射高光的强度。随着该值的增加，高光变得越来越亮并且漫反射颜色变得越来越暗。对于标准材质，默认值为 10；对于光线跟踪材质，默认值为 50。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FFF0124D0128744E2E7D32C8\"></a>单击“贴图”按钮以指定<span class=\"char_link\"><a href=\"GUID-0CEDBCDF-7AD6-4C42-A44B-03DF9E35771B.htm\">高光级别贴图</a></span>。这个按钮是一个快捷方式：还可以在<span class=\"char_link\"><a href=\"GUID-9F6BBCA6-9253-409B-AEC3-14FA7E5FF7C4.htm\">“贴图”卷展栏</a></span>中指定高光级别贴图。 \n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861-CC2\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B0A\"></a>光泽度</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D16A4\"></a> \n                     <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8754BF0\"></a>影响反射高光的大小。随着该值的增加，高光曲线变得越来越窄并且高光变得越来越小。对于标准材质，默认值为 10；对于光线跟踪材质，默认值为 40。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FFF0124D0128744E2E7D32C9\"></a>单击“贴图”按钮以指定<span class=\"char_link\"><a href=\"GUID-76F225CD-982A-4F17-9935-A656E6878BCD.htm\">光泽度贴图</a></span>。这个按钮是一个快捷方式：还可以在<span class=\"char_link\"><a href=\"GUID-9F6BBCA6-9253-409B-AEC3-14FA7E5FF7C4.htm\">“贴图”卷展栏</a></span>中指定光泽度贴图。 \n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF-4F542F6211C79DEA861-CC1\"></a><span class=\"term\"><a name=\"WS73099CC142F4875513F8D121131880AB2F-7B08\"></a>高光图</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D16A5\"></a> \n                     <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8754BF1\"></a>该曲线显示调整“高光级别”和“光泽度”值的效果。如果降低“光泽度”，曲线将变宽；如果增加“高光级别”，曲线将变高。 \n                     </p> \n                  </div>\n               </dd>\n            </dl> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";