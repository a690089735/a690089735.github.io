var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-0B7D9B90-E954-4754-A566-5931C99CC479\">\n      <meta name=\"description\" content=\"该主题介绍真实世界中的灯光。当照明场景时，它有助于了解灯光的自然行为方式。\">\n      <meta name=\"indexterm\" content=\"属性: 灯光\">\n      <meta name=\"indexterm\" content=\"灯光: 属性\">\n      <meta name=\"indexterm\" content=\"强度（灯光）\">\n      <meta name=\"indexterm\" content=\"入射角\">\n      <meta name=\"indexterm\" content=\"衰减\">\n      <meta name=\"indexterm\" content=\"颜色: 和灯光\">\n      <meta name=\"indexterm\" content=\"颜色: 温度（灯光颜色）\">\n      <meta name=\"indexterm\" content=\"环境: 灯光\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>灯光属性</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-0B7D9B90-E954-4754-A566-5931C99CC479\"></a><div class=\"head\">\n            <h1>灯光属性</h1>\n         </div>\n         <p class=\"blurb\">该主题介绍真实世界中的灯光。当照明场景时，它有助于了解灯光的自然行为方式。 </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59F4\"></a>当光线到达曲面时，曲面反射这些光线，或至少反射一些，因此我们才看到曲面。曲面的外观取决于到达它的光以及曲面材质的属性，如颜色、平滑度和不透明度。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59F3\"></a> <span class=\"char_link\"><a href=\"GUID-B691F3E0-FB2B-4EAE-8311-D03F92D4772A.htm\">材质</a></span>可以指定曲面的视觉属性。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900451F\"></a> \n            <h2><a name=\"GUID-4FBE567F-0AA9-4ED7-B625-687D72B30414\"></a>强度\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59F2\"></a>初始点的灯光强度影响灯光照亮对象的亮度。投影在明亮颜色对象上的暗光只显示暗的颜色。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004520\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0528EDBA-2623-437F-8215-0E445678679C-low.png\"></div>  \n            <p><a name=\"GUID-C0D61AC2-1E69-4BCD-A145-70568E6D3C3F\"></a> <em class=\"strong\">左图：由低强度源的蜡烛照亮的房间。</em> \n            </p> \n            <p><a name=\"GUID-B30FDF3B-EA59-4D8F-80D0-4E509194C25B\"></a> <em class=\"strong\">右图：由高强度灯光灯泡照亮的同一个房间。</em> \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004521\"></a> \n            <h2><a name=\"GUID-990FFD32-4DDE-4C33-9AC7-A88D99C533E9\"></a>入射角\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59F1\"></a>曲面与光源倾斜的越多，曲面接收到的光越少并且看上去越暗。曲面法线相对于光源的角度称为<em class=\"mild\">入射角</em>。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59F0\"></a>当入射角为 0 度（也就是说，光源与曲面垂直）时，曲面由光源的全部强度照亮。随着入射角的增加，照明的强度减小。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004522\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9BE3EE56-0C6B-463B-8302-ABCB4EFC10D3-low.png\"><p class=\"figure-title\">入射角影响强度。</p>\n            </div>  \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004523\"></a> \n            <h2><a name=\"GUID-84E97941-C05D-43DD-A5D4-D43E4ABB83E9\"></a>衰减\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59EF\"></a>在现实世界中，灯光的强度将随着距离的加长而减弱。远离光源的对象看起来更暗；距离光源较近的对象看起来更亮。这种效果称为<em class=\"mild\">衰减</em>。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59EE\"></a>实际上，灯光以平方反比速率衰减。即其强度的减小与到光源距离的平方成比例。当光线由大气驱散时，通常衰减幅度更大，特别是当大气中有灰尘粒子如雾或云时。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004524\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-68355E9A-61C5-4BDA-8376-DE5B0A4E577E-low.png\"></div>  \n            <p><a name=\"GUID-A764AB63-7C37-4116-ADF0-083A4815E403\"></a> <em class=\"strong\">A. 反向衰退</em> \n            </p> \n            <p><a name=\"GUID-DA707D08-1675-4449-8161-8F34AAEBE17B\"></a> <em class=\"strong\">B. 平方反比衰退</em> \n            </p> \n            <p><a name=\"GUID-13D38475-D4AB-4C39-82B5-086FA245C355\"></a> <em class=\"strong\">图形显示衰退曲线。</em> \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004525\"></a> \n            <h2><a name=\"GUID-775AAB5D-4151-4383-B4AD-36ECDFD09758\"></a>反射光和环境光\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59ED\"></a>对象反射光可以照亮其他对象。曲面反射光越多，用于照明其环境中其他对象的光也越多。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59EC\"></a>反射光创建<em class=\"mild\">环境光</em>。环境光具有均匀的强度，并且属于均质漫反射。它不具有可辨别的光源和方向。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004526\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-07F68016-AEA5-4327-B11B-3D41FADCA9A2-low.png\"></div>  \n            <p><a name=\"GUID-64E6FF11-B4FE-410B-B516-558D97DAF9E5\"></a> <em class=\"strong\">A. 平行光</em> \n            </p> \n            <p><a name=\"GUID-2672A862-E238-4F7A-8B8E-31E7322609BF\"></a> <em class=\"strong\">B. 反射光</em> \n            </p> \n            <p><a name=\"GUID-2F011BA2-B658-4DB8-83F0-4FCD1BBA7CD5\"></a> <em class=\"strong\">C. 导致环境光</em> \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004527\"></a> \n            <h2><a name=\"GUID-746327A9-05FF-4717-BDA0-AF97080C1274\"></a>颜色和灯光\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59EA\"></a>灯光的颜色部分依赖于生成该灯光的过程。例如，钨灯投影橘黄色的灯光，水银蒸汽灯投影冷色的浅蓝色灯光，太阳光为浅黄色。灯光颜色也依赖于灯光通过的介质。例如，大气中的云染为天蓝色，脏玻璃可以将灯光染为浓烈的饱和色彩。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E9\"></a>灯光颜色为<em class=\"mild\">加性色；</em>灯光的主要颜色为红色、绿色和蓝色 (RGB）。当与多种颜色混合在一起时，场景中总的灯光将变得更亮并且逐渐变为白色。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004528\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9DA7114C-5ECA-4496-9327-D30AB51FA16C-low.png\"><p class=\"figure-title\">彩色灯光的加性混合</p>\n            </div>  \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004529\"></a> \n            <h2><a name=\"GUID-0176AD6F-3F85-48F5-B1F7-3EDDA3C03790\"></a>颜色温度\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E8\"></a>颜色<em class=\"mild\">温度</em> 使用度开尔文 (K) 介绍颜色。对于描述光源的颜色和与白色相近的其他颜色值，该选项非常有用。下表显示某些类型灯光的颜色温度，该表使用等值的色调编号（从 HSV 颜色描述）。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E7\"></a>如果对场景中的灯光使用这些色调编号，则将该值设置为全部 (255)，然后调整饱和度以满足场景的需要。心理上我们倾向于纠正灯光的颜色，以便对象看起来由白色的灯光照亮；通常场景中颜色温度的效果很小。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900452A\"></a><div class=\"table-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n                  <colgroup>\n                     <col width=\"56.19150467962562%\">\n                     <col width=\"32.68538516918647%\">\n                     <col width=\"11.123110151187905%\">\n                  </colgroup>\n                  <tr class=\"ruled-heading\">\n                     <th class=\"table-heading\">光源 </th>\n                     <th class=\"table-heading\">颜色温度 </th>\n                     <th class=\"table-heading\">色调 </th>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">阴天的日光 </td>\n                     <td class=\"table-body\">6000 K </td>\n                     <td class=\"table-body\">130 </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">中午的太阳光 </td>\n                     <td class=\"table-body\">5000 K </td>\n                     <td class=\"table-body\">58 </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">白色荧光 </td>\n                     <td class=\"table-body\">4000 K </td>\n                     <td class=\"table-body\">27 </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">钨/卤素灯 </td>\n                     <td class=\"table-body\">3300 K </td>\n                     <td class=\"table-body\">20 </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">白炽灯（100 到 200 W） </td>\n                     <td class=\"table-body\">2900 K </td>\n                     <td class=\"table-body\">16 </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">白炽灯 (25 W) </td>\n                     <td class=\"table-body\">2500 K </td>\n                     <td class=\"table-body\">12 </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">日落或日出时的太阳光 </td>\n                     <td class=\"table-body\">2000 K </td>\n                     <td class=\"table-body\">7 </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">蜡烛火焰 </td>\n                     <td class=\"table-body\">1750 K </td>\n                     <td class=\"table-body\">5 </td>\n                  </tr>\n               </table>\n            </div> \n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-96E37398-613E-495A-A80B-9C5D398982F9.htm\">“强度/颜色/衰减”卷展栏（光度学灯光）</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-73A38CF6-FE78-443F-BB42-CC8C60449585.htm\">“颜色选择器”对话框</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-BD576409-BE5E-469C-8B6A-926C741FF1EE.htm\">光通量</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-9BBE5C41-0043-46EB-938E-0706D5D232B9.htm\">发光强度</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-B1C15E4E-4F6C-4FF9-874C-1C824C6B37DD.htm\">照度</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-8C706F93-1E0D-4526-8B02-FD579AA8AEF1.htm\">光度控制光源的常用灯值</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";