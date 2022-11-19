var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-1EC7526C-A684-4D34-B351-C1B1123615C9\">\n      <meta name=\"description\" content=\"Quicksilver 硬件渲染器使用图形硬件生成渲染。\">\n      <meta name=\"indexterm\" content=\"Quicksilver 硬件渲染器\">\n      <meta name=\"indexterm\" content=\"渲染器: Quicksilver\">\n      <meta name=\"contextid\" content=\"TOPIC_QUICKSILVER_HARDWARE_RENDERER\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"using\">\n      <title>Quicksilver 硬件渲染器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-1EC7526C-A684-4D34-B351-C1B1123615C9\"></a><div class=\"head\">\n            <h1>Quicksilver 硬件渲染器</h1>\n         </div>\n         <p class=\"blurb\"> Quicksilver 硬件渲染器使用图形硬件生成渲染。 </p><a name=\"UL_B0B053B56DBC49F6BB035F85F4A0CE06\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-D2C6C7E6-836F-4816-8438-0F14F85461DB\">主工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-D7B21710-141B-4E81-BB93-6175D09E68D0-low.png\">（渲染设置） <img src=\"../images/ac.menuaro.gif\"> “渲染设置”对话框  <img src=\"../images/ac.menuaro.gif\"> “公用”面板  <img src=\"../images/ac.menuaro.gif\"> “指定渲染器”卷展栏  <img src=\"../images/ac.menuaro.gif\">  选择“Quicksilver 硬件渲染器”作为活动的产品级渲染器。</span> \n            </li>\n         </ul>\n         <p><a name=\"WS73099CC142F487551D68DD061249D36330F-6FF9\"></a>Quicksilver 硬件渲染器的一个优点是它的速度。默认设置提供快速渲染。 \n         </p><a name=\"WS73099CC142F487551D68DD061249D36330F-6FF6\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1C1A2DF5-6063-4B0F-B751-9A1853F94935-low.png\"><p class=\"figure-title\">Quicksilver 渲染。时间：4 秒</p>\n         </div>\n         <p><a name=\"GUID-D6D5F0F4-F02C-434C-9D8D-55C6D9B32F76\"></a> Quicksilver 硬件渲染器同时使用 CPU（中央处理器）和图形处理器 (GPU) 加速渲染。这有点像是在 3ds Max 内具有游戏引擎渲染器。CPU 的主要作用是转换场景数据以进行渲染；包括为使用中的特定图形卡编译明暗器。因此，渲染第一帧要花费一段时间，直到明暗器编译完成。这在每个明暗器上只发生一次：越频繁使用\n            Quicksilver 渲染器，其速度将越快。 \n         </p>\n         <p><a name=\"GUID-286B6BDF-6095-4C40-8DD3-064D82090E26\"></a>可以渲染多个透明曲面。 \n         </p><a name=\"FIG_7F49275EBAC14004B55208BEFAEB3863\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-4AE6DBE3-DB53-4FF7-A91E-67944103087D-low.png\"><p class=\"figure-title\">将汽车渲染为透明实体以显示内部零件。阴影也显示为透明。</p>\n         </div>\n         <p><a name=\"GUID-C3285DA0-B062-44AD-BE6A-42EB60F890F1\"></a> 可以渲染为 Nitrous 视口也可提供的非照片级真实感样式。 \n         </p><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-37972330-ECC2-44DD-91BF-53875A9FD056.htm\">硬件注意事项（Quicksilver 渲染器）</a><p> 要使用 Quicksilver 硬件渲染器，您的图形硬件必须支持 Shader Model 3.0 (SM3.0) 或更高版本。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-79F4B714-DFB8-4BB5-9955-063F845E228B.htm\">Quicksilver 渲染中的阴影</a><p>Quicksilver 硬件渲染器支持与灯光对象相关联的大多数阴影控件，但始终生成阴影贴图的阴影。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-F40FF5D3-84B6-4498-B449-FC95247FE103.htm\">受支持的材质（Quicksilver 渲染器）</a><p> Quicksilver 可以渲染的材质如下： </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-374EFE09-6CB0-4309-975B-E181C47746E3.htm\">受支持的贴图和明暗器（Quicksilver 渲染器）</a><p>以下是 Quicksilver 可以渲染的贴图和明暗器。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-158B62C9-97F0-4C09-8126-57F44FAA1B21.htm\">附加功能和限制（Quicksilver 渲染器）</a><p> Quicksilver 如何处理 3ds Max 的某些其他功能。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-A62F05FA-97B8-4307-A7D5-2E29957F5991.htm\">使用 Quicksilver 渲染器：提示与技巧</a><p> 几点指示有助于改善 Quicksilver 渲染的质量和速度。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-4F13CC38-6A12-4B3D-8D20-074FAFC85804.htm\"> “Quicksilver 硬件渲染器参数”卷展栏</a><p>Quicksilver 硬件渲染器的主卷展栏可以用于通过设置渲染时要花费的时间或要执行的迭代次数来调整渲染质量。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-350248A9-954E-4747-8070-5602FAB2F28D.htm\"> “视觉样式和外观”卷展栏（Quicksilver 渲染器）</a><p>这些控件用于选择渲染的视觉样式，以及渲染器处理照明的方式。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-5DF50A46-B852-43BE-B85A-602714C01985.htm\"> “反射”卷展栏（Quicksilver 渲染器）</a><p>通过这些控件，可以选择 Quicksilver 渲染器处理反射对象的方式。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-C6126DFA-213C-4844-AEFF-9AED3B8497AC.htm\"> “景深”卷展栏 (Quicksilver 渲染器）</a><p>通过这些控件，可以增加渲染的景深。只有当渲染摄影机或透视视图时，景深才可用。 \n                        \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-047AA881-DB34-48CB-9233-0E44B57C9543.htm\"> “硬件缓存”卷展栏（Quicksilver 渲染器）</a><p>通过这些控件，可以管理计算机上硬件明暗器的位置。 </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-BB6A75F2-67DA-4726-AED4-C44A10F1C8BD.htm\"> 非照片级真实感样式</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";