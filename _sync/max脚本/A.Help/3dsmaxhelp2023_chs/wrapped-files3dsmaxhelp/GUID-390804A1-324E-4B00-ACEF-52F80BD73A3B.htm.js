var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-390804A1-324E-4B00-ACEF-52F80BD73A3B\">\n      <meta name=\"description\" content=\"IES 天空是一种基于物理的灯光对象，可模拟大气对天光的影响（IES 是 Illuminating Engineering Society（照明工程协会）的简写）。\">\n      <meta name=\"indexterm\" content=\"IES: IES 天空\">\n      <meta name=\"indexterm\" content=\"日光: IES 天空\">\n      <meta name=\"indexterm\" content=\"天空: IES 天光\">\n      <meta name=\"contextid\" content=\"TOPIC_IES_SKY_LIGHT\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>IES 天光（光度学）</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-390804A1-324E-4B00-ACEF-52F80BD73A3B\"></a><div class=\"head\">\n            <h1>IES 天光（光度学）</h1>\n         </div>\n         <p class=\"blurb\">IES 天空是一种基于物理的灯光对象，可模拟大气对天光的影响（IES 是 Illuminating Engineering Society（照明工程协会）的简写）。 \n            \n         </p><a name=\"UL_FEDF89CA7127479EA7077F6BAF4599B4\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-0B31F982-5B95-4D5A-B0B7-A92731658960\">“创建”面板  <img src=\"../images/ac.menuaro.gif\"> “系统” <img src=\"../images/ac.menuaro.gif\">  在场景中创建日光系统。 <img src=\"../images/ac.menuaro.gif\"> “修改”面板  <img src=\"../images/ac.menuaro.gif\"> “日光参数”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “天光” <img src=\"../images/ac.menuaro.gif\"> “IES 天光”</span> \n            </li>\n         </ul><a name=\"WS1A9193826455F5FFBA679E112A6A19004633\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A7DAD63D-73FB-430B-9D50-ADB1EEB3FA00-low.png\"><p class=\"figure-title\">由 IES 天光照亮的室外场景</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5804\"></a> 日光系统将在统一的界面中组合太阳和天空这两个日光组件。使用“日光”系统可以对要使用的灯光类型设置日期和时间位置。 \n            	 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5803\"></a>只有当天空对象指向 Z 轴的下方，也就是说从“顶”视图观看时它指向下时，IES 天光才正常工作。 \n            	 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5802\"></a>当使用默认扫描线渲染器时，IES 天光与“高级照明”选项（光能传递或光跟踪）中的一个选项结合使用会产生最佳的效果。 \n            	 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004634\"></a> \n            <h2><a name=\"GUID-946DF7FC-671A-4F05-A2B6-1E987317F6EC\"></a>使用带有 IES 天光的渲染元素\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5800\"></a>如果使用渲染元素输出场景（此场景使用光能传递或光跟踪器）中 IES 天光的照明元素，则无法分隔灯光的直接、间接和阴影通道。IES 天光照明的所有三个元素输出到“间接光”通道。 \n               		\n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2BC3\"></a> \n            <h2><a name=\"GUID-A555318A-16CA-48FF-9799-2AD405B672F9\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004635\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F544C006-C759-405C-8B59-28B6FA364196-low.png\"></div>  <a name=\"GUID-4500C43D-7BB5-478E-A587-7C797B6D7420\"></a><dl>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D10\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57FD\"></a>启用</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6EDB\"></a> 在视口中启用和禁用天光。 \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D11\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57FC\"></a>倍增</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6EDA\"></a> 调整天光的强度。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57FB\"></a>该值设置为 1.0 时，强度基于角度将在物理效果上非常精确。但是，可以通过更改该值将其覆盖。对于使用人工照明进行夜间快照，该选项非常有用。 \n                        		\n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D12\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57FA\"></a>天空颜色</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6ED9\"></a> 单击色样将打开颜色选择器，您可以在其中设置天空的颜色。 \n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-89556E8D-9669-4B0E-8607-34B7CFED1E79\"></a><p class=\"title\"><a name=\"GUID-B5595D52-0CE6-4CFA-AC57-0E8D9BF4595F\"></a>“覆盖范围”组\n               </p>\n               <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87544B3\"></a>在“晴朗”、“少云”和“多云”之间选择来决定灯光在整个天空中散射的程度。 \n                  		\n               </p>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-17D9E835-F35E-45C1-943C-817782BFBBE4\"></a><p class=\"title\"><a name=\"GUID-5C381730-8A06-4A5E-8189-5F9FD5FEA658\"></a>“渲染”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D14\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57F8\"></a>投射阴影</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6ED7\"></a> 使天光投射阴影。 \n                        		\n                        <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57F7\"></a>计算天光投射的微弱阴影需要进行大量处理。如果在模型中阴影并不重要，可以将其禁用并且节省大量处理时间。但是，效果将不太真实。 \n                           		\n                        </p> \n                        <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6B24\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>当使用光能传递或光跟踪时，“投射阴影”切换无效。 \n                              		\n                           </div>\n                        </div> \n                        <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6B23\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>IES 天空对象<em class=\"mild\">不会</em>在 ActiveShade 渲染中投射阴影。 \n                              		\n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D15\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57F6\"></a>每采样光线数</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6ED6\"></a> 用于计算落在场景中指定点上天光的光线数。对于动画应将该选项设置为高的值以消除闪烁。值为 30 左右应该可以消除闪烁。 \n                        		<a name=\"WS1A9193826455F5FFBA679E112A6A19004638\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-8E25E16F-15BA-4686-8E4F-674BC0FE9B82-low.png\"><p class=\"figure-title\">增加光线数可提高图像的质量。然而，这样也会增加渲染时间。</p>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D16\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-57F5\"></a>光线偏移</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6ED5\"></a> 对象可以在场景中指定点上投射阴影的最短距离。将该值设置为 0 可以使该点在自身上投射阴影，并且将该值设置为大的值可以防止点附近的对象在该点上投射阴影。 \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-DF3552FD-84AA-412C-803A-A43B0774979C.htm\"> 天光</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-EA0E3DE0-275C-42F7-83EC-429A37B2D501.htm\">IES 标准文件格式</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";