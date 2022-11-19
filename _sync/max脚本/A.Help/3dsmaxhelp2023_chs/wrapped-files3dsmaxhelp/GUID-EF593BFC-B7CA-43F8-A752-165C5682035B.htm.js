var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-EF593BFC-B7CA-43F8-A752-165C5682035B\">\n      <meta name=\"indexterm\" content=\"重心: 坐标（词汇表）\">\n      <meta name=\"indexterm\" content=\"坐标: 重心（词汇表）\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>重心坐标</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-EF593BFC-B7CA-43F8-A752-165C5682035B\"></a><div class=\"head\">\n            <h1>重心坐标</h1>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3094\"></a>假设点 A、B 和 C 围成一个三角形，这个三角形曲面上的每个 X 点都可以用角的加权总和表示： \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3093\"></a>X = a*A + b*B + c*C\n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3092\"></a>其中 a、b 和 c 是 0 和 1 之间的数字，并且 a+b+c = 1。\n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3091\"></a>这些数字称为点 X 的<em class=\"mild\">重心坐标</em>。在三角形上，每个点都具有一组唯一的重心坐标。\n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004935\"></a> \n            <h2><a name=\"GUID-E3DCD00B-E97F-448A-89B6-D2782B09214C\"></a>示例\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3090\"></a>由重心坐标 (1/3, 1/3, 1/3) 指定的三角形的重心如下：X = 1/3 A + 1/3 B + 1/3 C = (A+B+C)/3。\n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-308F\"></a>如果其中一个重心坐标为零，那么点 X 必须位于对边上。例如：\n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-308E\"></a>如果 a=0，则 X = b*B + c*C\n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-308D\"></a>其中 b+c=1\n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-308C\"></a>这意味着 X 位于线段 BC 上。\n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-308B\"></a>另一方面，如果 a=1，则 b=c=0，那么 X 的确切位置必定在点 A 处。\n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";