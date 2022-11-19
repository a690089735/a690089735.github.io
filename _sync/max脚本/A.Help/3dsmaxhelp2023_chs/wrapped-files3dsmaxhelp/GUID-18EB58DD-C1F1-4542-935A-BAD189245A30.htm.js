var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-18EB58DD-C1F1-4542-935A-BAD189245A30\">\n      <meta name=\"description\" content=\"当您运行“管理器”、“服务器”或“队列监视器”应用程序，或访问“网络作业分配”对话框时，这些程序将创建或更新 Backburner 目录下 \\Network 子目录的初始化文件 backburner.xml。\">\n      <meta name=\"indexterm\" content=\"backburner.xml 文件\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>backburner.xml 文件</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-18EB58DD-C1F1-4542-935A-BAD189245A30\"></a><div class=\"head\">\n            <h1>backburner.xml 文件</h1>\n         </div>\n         <p class=\"blurb\">当您运行“管理器”、“服务器”或“队列监视器”应用程序，或访问“网络作业分配”对话框时，这些程序将创建或更新 Backburner 目录下 <em class=\"mild\">\\Network</em> 子目录的初始化文件 <em class=\"mild\">backburner.xml</em>。\n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-4B72\"></a>可以使用<em class=\"mild\">“管理器属性”对话框</em> 和<span class=\"char_link\"><a href=\"GUID-E054EEF9-95CA-4481-9DC5-686716DDCED7.htm\">服务器属性对话框</a></span>更改 <span class=\"char_link\"><a href=\"GUID-DD1789B2-1748-4902-9B83-AFBAC22DA896.htm\">backburner.xml</a></span> 中的多数设置。\n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-4B71\"></a>通过在文本编辑应用程序（如记事本）中编辑 XML 文件，可以只更改此处列出的参数。如果在使用网络渲染器时遇到网络问题，也可使用此方法。\n         </p>\n         <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-4B70\"></a>在编辑 <em class=\"mild\">backburner.xml</em> 文件之前确保关闭管理器和服务器应用程序（或未安装的服务）。当重新启动“管理器”和/或“服务器”时，更改将生效。\n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190042DA3\"></a> \n            <h2><a name=\"GUID-FB007ED1-A5D2-4373-82EB-D404D7192001\"></a> <em class=\"mild\">backburner.xml</em> \n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190042DA4\"></a><ul>\n               <li> <em class=\"strong\">最大块大小</em>位于 &lt;GeneralCfg&gt; 标题下面，该值是在传输大块（如项目）时发送的数据包的最大大小。对于速度慢的连接（如调制解调器），将使用较小的包大小，例如，1024。\n               </li>\n               <li> <em class=\"strong\">确认超时</em>此值在 &lt;TimerCfg&gt; 标题下显示为 AckTimeout，是系统等待确认在管理器和服务器间来回发送的命令（像 Ping）需要的时间量（以秒为单位）。默认设置为 20 秒。 \n               </li>\n               <li> <em class=\"strong\">确认重试</em>此值在 &lt;TimerCfg&gt; 标题下显示为 AckRetries，它可以确定如果没有接收到确认，发送者重试的次数。默认值为六次尝试。之后，机器将考虑关闭并进入脱机状态。\n               </li>\n            </ul> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";