var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-22B9515E-8D17-47D9-8249-9CFB553C92B9\">\n      <meta name=\"description\" content=\"如果已指定材质为多维/子对象材质，则材质来源将影响粒子的渲染方式。\">\n      <meta name=\"indexterm\" content=\"使用: 对粒子系统使用多维/子对象材质\">\n      <meta name=\"indexterm\" content=\"多维/子对象材质\">\n      <meta name=\"indexterm\" content=\"材质: 和粒子系统\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>对粒子系统使用多维/子对象材质</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-22B9515E-8D17-47D9-8249-9CFB553C92B9\"></a><div class=\"head\">\n            <h1>对粒子系统使用多维/子对象材质</h1>\n         </div>\n         <p class=\"blurb\">如果已指定材质为多维/子对象材质，则材质来源将影响粒子的渲染方式。</p><a name=\"WS1A9193826455F5FFBA679E112A6A1900425AB\"></a><ul>\n            <li> <em class=\"strong\">图标：</em>在大多数情况下，每个粒子在出生时会被指定不同的子材质，从而可以循环切换使用每种可用的子材质。例如，如果只有三种子材质，第一个粒子使用子材质 1，第二个粒子使用子材质 2，第三个粒子使用子材质 3，第四个粒子使用子材质 1，依此类推。例外情况如下：\n            </li>\n            <li>变形球粒子仅使用第一种子材质。</li>\n            <li>对象碎片同时产生，因此所有对象碎片仅使用第一种子材质。</li>\n            <li> <em class=\"strong\">拾取的发射器：</em>使用对象碎片作为粒子时，每个粒子使用“碎片材质”组中的三个 ID 编号。如果对其他粒子类型使用此源，将按照选定“图标”时的相同方式为粒子指定子材质。\n            </li>\n            <li> <em class=\"strong\">实例几何体：</em>对“实例几何体”粒子使用时，按照源对象的相同方式为每个粒子指定子材质，使每个粒子的外观与源对象类似。对其他粒子类型使用时，将按照选定“图标”时的相同方式为粒子指定子材质。\n               <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5F77\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>使用“多维/子对象”材质的实例化对象无法对图像应用运动模糊效果。\n                  </div>\n               </div>\n            </li>\n         </ul><a name=\"WS1A9193826455F5FFBA679E112A6A1900425A7\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1A52C39A-39FD-4BB1-A398-7D51251E05CA-low.png\"><p class=\"figure-title\">使用多维/子对象材质的粒子</p>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";