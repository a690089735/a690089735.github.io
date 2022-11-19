var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-16139ACA-4716-47FB-AAB4-15EFF35D7F17\">\n      <meta name=\"indexterm\" content=\"新功能\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>OSL 的计算默认值和 UVW 输入</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-16139ACA-4716-47FB-AAB4-15EFF35D7F17\"></a><div class=\"head\">\n            <h1>OSL 的计算默认值和 UVW 输入</h1>\n         </div>\n         <p> OSL 有一项称为计算默认值的特殊功能。这意味着贴图可以有这样的输入（如果未在任何位置连接该输入）：该输入可以包含某个特别计算的值作为有用的默认值。可以这样理解为何使用计算默认值：输入包含贴图输入，但界面中没有用于该值的值微调器（如果未连接该贴图输入，则使用计算值）。\n            	 \n         </p>\n         <p> 许多贴图都使用此功能。例如，所有包含的 OSL 贴图都附带 UVW 输入。与传统的 3ds Max 贴图相反，您可以通过此功能连接任何计算的输出（返回一个三分量值，例如向量、点甚至颜色）来驱动纹理的查找位置。\n            	 \n         </p>\n         <p>为了在未连接 UVW 输入时贴图具有意义，可使用计算默认值。大多数二维纹理使用映射到 3ds Max 贴图通道 1 的计算默认值，大多数三维纹理具有明暗处理点对象空间坐标的计算默认值。这样，在直接使用贴图时，这些贴图可以提供合理的默认纹理。如果要使用不同的\n            UVW 贴图通道或变换 UVW 坐标，可以使用 UVW 类别中的贴图来完成。\n            	 \n         </p>\n         <p>到底使用什么计算默认值完全取决于 OSL 代码本身。一些贴图的特殊操作只是用于演示，例如，黑体明暗器使用贴图通道 1 的 U 坐标在曲面上生成某个示例渐变，这与波长明暗器一样。这也意味着从 Internet 下载的 OSL 贴图完全可用于获得计算默认值。\n            	 \n         </p>\n         <div><a name=\"GUID-5D9DBD33-D6BB-44F8-AA6C-80B798E42476\"></a><div class=\"note-related\"><span class=\"label label-target-language\">相关信息:</span>如果您只有贴图输入但没有微调器，此时也许可以使用它来提供有意义的输入。\n               	 \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";