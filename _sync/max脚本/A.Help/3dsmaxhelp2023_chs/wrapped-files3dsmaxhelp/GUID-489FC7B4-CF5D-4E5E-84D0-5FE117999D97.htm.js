var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-489FC7B4-CF5D-4E5E-84D0-5FE117999D97\">\n      <meta name=\"description\" content=\"使用剪切平面可以排除场景的一些几何体并只查看或渲染场景的某些部分。每个摄影机对象都具有近端和远端剪切平面。对于摄影机，比近距剪切平面近或比远距剪切平面远的对象是不可视的。\">\n      <meta name=\"indexterm\" content=\"摄影机: 使用剪切平面排除几何体\">\n      <meta name=\"indexterm\" content=\"剪切平面: 用于排除几何体\">\n      <meta name=\"indexterm\" content=\"视口剪切: 使用剪切平面\">\n      <meta name=\"indexterm\" content=\"渲染: 场景部分\">\n      <meta name=\"indexterm\" content=\"查看: 场景部分\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"using\">\n      <title>使用剪切平面排除几何体</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-489FC7B4-CF5D-4E5E-84D0-5FE117999D97\"></a><div class=\"head\">\n            <h1>使用剪切平面排除几何体</h1>\n         </div>\n         <p class=\"blurb\">使用剪切平面可以排除场景的一些几何体并只查看或渲染场景的某些部分。每个摄影机对象都具有近端和远端剪切平面。对于摄影机，比近距剪切平面近或比远距剪切平面远的对象是不可视的。 \n            \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5503\"></a>如果场景中有许多复杂几何体，那么剪切平面对于渲染其中选定部分的场景非常有用。它们还可以帮助您创建剖面视图。 \n            	 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004829\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C192428B-A470-4E94-A1D1-430162245EFE-low.png\"></div>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5502\"></a> <em class=\"strong\">左：剪切平面排除前景椅子和桌子前方区域。</em> \n         </p>\n         <p><a name=\"GUID-2C7FE000-60D6-424B-A024-DA9E5D5DE206\"></a> <em class=\"strong\">右：剪切平面排除背景椅子和桌子后方区域。</em> \n         </p>\n         <p><a name=\"GUID-E234A3BD-A4F9-4E0B-8310-262349CC1834\"></a>剪切平面设置是摄影机参数的一部分。每个剪切平面的位置是沿着摄影机的视线（其局部 Z 轴）进行测量的，采用场景的当前单位。 \n            	 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5501\"></a>您可以设置靠近摄影机的近端剪切平面，以便它不排除任何几何体，并且仍然使用远平面来排除对象。同样，您可以设置距离摄影机足够远的远端剪切平面，以便它不排除任何几何体，并仍然使用近平面来排除对象。 \n            	 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-5500\"></a>应将近端值约束为小于远端值。 \n            	 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-54FF\"></a>如果剪切平面与一个对象相交，则该平面将穿过该对象，并创建剖面视图。（剖面对象的可见数量取决于对象材质是否为双面。） \n            	 \n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-54FE\"></a>也可以在非摄影机视口中使用剪切平面。只需单击或右键单击“观察点”(POV) 视口标签，并在 POV 视口标签菜单中，选择“视口剪切”。 \n            	 \n         </p>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-F86CB637-685E-4874-82C5-CFACB8486D35.htm\">观察点 (POV) 视口标签菜单</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";