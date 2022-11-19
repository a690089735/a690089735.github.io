var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-99B9B877-0EC4-4733-9FF8-BEF0573CE577\">\n      <meta name=\"description\" content=\"本主题介绍了当您使用“摄影机跟踪器”时可能遇到的一些常见问题，并且提供了有关如何解决这些问题的建议。\">\n      <meta name=\"indexterm\" content=\"故障排除: 摄影机跟踪器\">\n      <meta name=\"indexterm\" content=\"摄影机跟踪器: 故障排除\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>摄影机跟踪器：故障排除</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-99B9B877-0EC4-4733-9FF8-BEF0573CE577\"></a><div class=\"head\">\n            <h1>摄影机跟踪器：故障排除</h1>\n         </div>\n         <p class=\"blurb\">本主题介绍了当您使用“摄影机跟踪器”时可能遇到的一些常见问题，并且提供了有关如何解决这些问题的建议。</p>\n         <div class=\"bodyReference\">\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004541E\"></a> \n               <h2><a name=\"GUID-B5AFB122-1C27-4DC5-8225-5A34DFF493A4\"></a>特征点跟踪立即停止\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-33B8\"></a>如果特征点跟踪在试图匹配第一对帧时立即停止，请检查如下步骤：\n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190045421\"></a><ol type=\"1\" start=\"1\">\n                  <li>可能是一个启用错误阈值设置过低。在“批量跟踪”卷展栏中执行“检查状态”并查看在“跟踪错误检查”列出的报告。尝试在“错误阈值”卷展栏中每次禁用一个阈值，来观察这样能否解决问题。根据需要调整问题阈值。也可以通过清除每一跟踪器中的“错误时重采样”复选框，完全禁用错误阈值检查。</li>\n                  <li>确保每一跟踪器的搜索边界框足够大来容纳特征点的帧到帧动画。它的大小至少能足以包含运动特征点和在特征点边界框中所选的周围对比区域。</li>\n                  <li>确保场景对象与之跟踪器正确关联。可以在“运动跟踪器”卷展栏顶部的列表中检查条目来证实它。如果对象已关联，请查看它的名称是否在列表条目中，如果不在会看到“&lt;无对象&gt;”。如果在打开关联的 <span class=\"charspan-msgph\">3ds Max</span> 场景之前，为摄影机跟踪器中预先设置的跟踪器打开了一个影片文件，此对象不会与它们的跟踪器相关联。应该确保打开了正确的 <span class=\"charspan-msgph\">3ds Max</span> 场景，然后关闭，然后在“摄影机跟踪器”中重新打开影片文件，这就可以找到场景对象。\n                  </li>\n                  <li>如果不小心交换了场景对象的一个或多个跟踪器，则匹配移动无法找到一个解决方法。</li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045422\"></a> \n               <h2><a name=\"GUID-3FBA07CE-A15B-49D0-83F3-F90EB3357086\"></a>重复匹配移动错误\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-33B7\"></a>如果遇到了重复摄像机匹配移动错误，请遵循以下检查列表：\n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190045423\"></a><ol type=\"1\" start=\"1\">\n                  <li>确保被跟踪的错误帧至少有六个特征点处于活动状态，并且至少其中两个特征点在平面上与其他特征点具有最佳距离。</li>\n                  <li>在出错帧周围的影片窗口中检查跟踪器 gizmos，确保没有明显的特征点跟踪错误出现。</li>\n                  <li>如果在匹配运动之前，在“匹配移动”卷展栏中的“匹配”部分中禁用了任何参数，摄像机所进行的匹配必须在场景中正确设置这些参数。例如，禁用旋转和 FOV，必须已经设置摄像机到正确的 FOV 和旋转方向，或者直接在 <span class=\"charspan-msgph\">3ds Max</span> 中设置，或作为上一次匹配运动的结果。匹配算法使用所有“固定”的摄像机参数来计算将要估算的状态，如果设定了错误的固定值，那么将不能工作。\n                  </li>\n                  <li>一些摄像机参数在匹配序列中不发生变化，但是未必知道它的具体值。解决这种状况的方法是为初始匹配启用所有参数，此后在“平滑移动”卷展栏中给它们应用一个直线平均过滤器。这会在“匹配”部分中自动禁用它们，并将他们设置到一个估算好的固定位置。</li>\n               </ol> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";