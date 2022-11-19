var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-43075739-F107-4370-AFB2-B64BDE9CCC4F\">\n      <meta name=\"description\" content=\"“摄影机跟踪器”的“错误阈值”卷展栏通过获取测量值并将它们与您在此卷展栏中设置的阈值相比较，来识别特征点跟踪。您可以在手动跟踪检查（请参见“批量跟踪”卷展栏）过程中或在实际跟踪过程中使用此检测，以便使用“运动跟踪器”卷展栏“设置”组中的“错误时重采样”控件更正错误。\">\n      <meta name=\"indexterm\" content=\"摄影机跟踪器: 错误阈值卷展栏\">\n      <meta name=\"indexterm\" content=\"阈值: 错误（摄影机跟踪器）\">\n      <meta name=\"indexterm\" content=\"错误阈值（摄影机跟踪器）\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>摄影机跟踪器：“错误阈值”卷展栏</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-43075739-F107-4370-AFB2-B64BDE9CCC4F\"></a><div class=\"head\">\n            <h1>摄影机跟踪器：“错误阈值”卷展栏</h1>\n         </div>\n         <p class=\"blurb\">“摄影机跟踪器”的“错误阈值”卷展栏通过获取测量值并将它们与您在此卷展栏中设置的阈值相比较，来识别特征点跟踪。您可以在手动跟踪检查（请参见<span class=\"char_link\"><a href=\"GUID-76E4E728-C376-46DF-A463-DD2582F35768.htm\">“批量跟踪”卷展栏</a></span>）过程中或在实际跟踪过程中使用此检测，以便使用<span class=\"char_link\"><a href=\"GUID-CC9AD204-938E-49BD-BEAC-F8272172137B.htm\">“运动跟踪器”卷展栏“设置”组</a></span>中的“错误时重采样”控件更正错误。 \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_0DF1E4CC5FB345679F5C0F0036AD7B9F\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-0EE5C03D-7CC9-4709-B753-E3A1D64E43E2\"> <img src=\"../images/GUID-26D492F7-3E48-4209-AB7B-FEC655C6DA3D-low.png\">“实用程序”面板  <img src=\"../images/ac.menuaro.gif\"> “实用程序”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “更多”按钮  <img src=\"../images/ac.menuaro.gif\"> “实用程序”对话框  <img src=\"../images/ac.menuaro.gif\"> “摄影机跟踪器” <img src=\"../images/ac.menuaro.gif\"> “错误阈值”卷展栏</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3416\"></a> \n               <h2><a name=\"GUID-2036FC5C-65FD-4E0F-A728-5C31EA336A49\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190045403\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-21A15DB3-9523-4733-B9A3-B38154B3A605-low.png\"></div>  <a name=\"GUID-E9F1A671-ACB8-41F1-BDEE-312777A1D0E9\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-7536\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3415\"></a>匹配错误</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-570E\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87523C5\"></a>差值平方和测量当前帧中的最佳匹配 RGB 空间与前一个关键帧的特征点目标。显示的错误是允许的最大图像差别的百分比。较好的匹配一般低于 0.05%。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-7535\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3414\"></a>变化增量</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-570D\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87523C6\"></a>特征点目标图像与当前最佳匹配之间的 RGB 颜色变化的差别。此控件测量目标和匹配是否具有相似的颜色范围，以及是否能够补偿差别总和测量导致的错误。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-57AF30D311C6900F989-7534\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3413\"></a>跳跃增量</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-570C\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87523C7\"></a>跟踪器计算前五帧的移动平均值，并测量该平均值与当前帧的跳跃之差。如果此差值超过当前的“跳跃 Delta”阈值，则标记潜在的错误。如果该阈值设置为五，则当前帧的任何跳跃超过前五帧的平均跳跃五个像素时，就会标记。这会拾取突然加速而不仅仅是大的跳跃。\n                           \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3412\"></a>可以根据需要调整阈值，或者使用每个测量左侧的复选框来启用或禁用检测器中的单个测量。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";