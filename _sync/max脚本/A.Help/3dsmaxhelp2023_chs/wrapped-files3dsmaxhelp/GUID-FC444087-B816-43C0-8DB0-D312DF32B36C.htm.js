var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-FC444087-B816-43C0-8DB0-D312DF32B36C\">\n      <meta name=\"indexterm\" content=\"工作流限制: 日光入口\">\n      <meta name=\"indexterm\" content=\"限制: Revit 日光入口\">\n      <meta name=\"indexterm\" content=\"Revit: 日光入口限制\">\n      <meta name=\"indexterm\" content=\"故障诊断: Revit 日光入口\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>Revit 日光入口怎么不见了？</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FC444087-B816-43C0-8DB0-D312DF32B36C\"></a><div class=\"head\">\n            <h1>Revit 日光入口怎么不见了？</h1>\n         </div>\n         <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7EF5\"></a> Revit 所使用的日光入口不同于 3ds Max。两个应用程序中都提供了日光入口，但由于渲染时采用的计算方式不同，所以 <span class=\"charspan-msgph\">3ds Max FBX plug-in</span>不会将这些日光入口导入 3ds Max。这样将导致性能降低。之所以出现此性能问题是因为 Revit 会为每个窗口以及窗口的每条边系统地创建日光入口。这不会影响 Revit 的渲染性能，因为只有与摄影机视图相关的窗口才会只在渲染时计算。 \n         </p>\n         <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7EF3\"></a>但是，3ds Max 可系统地渲染所有日光入口。因此，当您使用 3ds Max 时，最好尽可能为 3ds Max 中的整个窗口墙面手动创建一个单独的日光入口。这将提高性能，且会营造出更佳的视觉效果。 \n         </p>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";