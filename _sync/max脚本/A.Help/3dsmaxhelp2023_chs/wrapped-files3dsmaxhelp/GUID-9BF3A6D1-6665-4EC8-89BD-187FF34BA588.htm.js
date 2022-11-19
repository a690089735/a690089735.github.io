var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-9BF3A6D1-6665-4EC8-89BD-187FF34BA588\">\n      <meta name=\"description\" content=\"要设置材质组件的贴图，请将一个贴图节点关联到该组件窗口的输入套接字。从贴图套接字拖动到材质套接字或从材质套接字拖动到贴图套接字。\">\n      <meta name=\"indexterm\" content=\"贴图: 移除\">\n      <meta name=\"indexterm\" content=\"移除贴图\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"using\">\n      <title>关联节点</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-9BF3A6D1-6665-4EC8-89BD-187FF34BA588\"></a><div class=\"head\">\n            <h1>关联节点</h1>\n         </div>\n         <p class=\"blurb\">要设置材质组件的贴图，请将一个贴图节点关联到该组件窗口的输入套接字。从贴图套接字拖动到材质套接字或从材质套接字拖动到贴图套接字。 \n            \n         </p>\n         <p><a name=\"GUID-E7852969-1088-467D-8712-A605E3584688\"></a> <em class=\"strong\">播放此可查看连线贴图的方式</em>： \n            \n         </p>\n         <p><a name=\"GUID-16B9D5F1-6A14-4F3A-AD07-4A771BEB05D7\"></a> \n            <div><a name=\"GUID-45A4F1E4-1607-4B75-8882-68D632624560\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n               </div>\n            </div> \n         </p>\n         <div><a name=\"GUID-BE2CB471-BFEA-4145-B333-B0CDCCDE0F2F\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>也可以直接从“材质/贴图浏览器”面板拖动到输入套接字。 \n               \n            </div>\n         </div>\n         <p><a name=\"WS73099CC142F48755-5C83E7B1120018DE8C0-4A9F\"></a> <img src=\"../images/GUID-2C607DD8-0E10-4790-9E4F-8D506F1CA1C5-low.png\"> 当“选择”工具处于活动状态时，您可以通过单击关联来选择关联，就像选择节点一样。选定连线变为白色。 \n            \n         </p>\n         <p><a name=\"GUID-60235857-4610-4710-95AD-E24B92CC7BB6\"></a> 如果单击节点的左半部分，然后<em class=\"mild\">按住鼠标按钮，</em>3ds Max 会打开一个上下文菜单，通过该菜单可以在可用的输入参数中进行选择。如果单击节点的右侧并按住不放<em class=\"mild\"></em>，菜单将显示可用的输出。如果您移动鼠标，而不进行菜单选择，菜单显示将消失。这种方法可以帮助您在缩小活动视图时关联两个节点，但很难拾取单个套接字。 \n            \n         </p>\n         <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A74271FD\"></a> 3ds Max 为您提供了多种方式来组合贴图，因此视图中显示的贴图树可以采取多种形式。 \n            \n         </p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A74271FE\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-638BB12C-E825-498E-8369-FBEE47C70D42-low.png\"><p class=\"figure-title\">一种材质，其一个贴图用于漫反射颜色，另一个贴图用作凹凸贴图</p>\n         </div><a name=\"WS73099CC142F48755-5C83E7B111FDE81A74271FF\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-89E99BFD-7F6C-49E2-A664-C80FD8E24678-low.png\"><p class=\"figure-title\">一种具有一个贴图的材质，该贴图同时用作漫反射颜色和凹凸贴图</p>\n         </div>\n         <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7427200\"></a>一些贴图可以组合其他贴图，并且某些材质可以组合子材质，因此材质树可以具有两个以上的级别。 \n            \n         </p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7427201\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C8435B99-B347-4241-AC23-447B86B92ED3-low.png\"><p class=\"figure-title\">一个使用多维/子贴图和合成贴图的 4 级树</p>\n         </div><a name=\"WS1A9193826455F5FF2566FFD511FDE75E6567297\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF2566FFD511FDE75E6567298\"></a>要向材质组件应用贴图，请执行以下操作：\n         </p>\n         <ul>\n            <li>从贴图的输出套接字拖动到材质组件窗的输入套接字中。请参见此主题开头的影片。 \n               \n            </li>\n         </ul><a name=\"WS1A9193826455F5FF2566FFD511FDE75E65678BD\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF2566FFD511FDE75E65678BE\"></a>要移除贴图或贴图连接，请执行下列操作之一：\n         </p>\n         <ul>\n            <li>选择一个贴图节点，然后单击 <img src=\"../images/GUID-98502171-DABE-4D6A-99F3-B438A66A3A1B-low.png\">（删除选定项）或按 <span class=\"keyboardEntry\">Delete</span> 键。 \n               	  \n               	 \n               <p><a name=\"GUID-5F4385A6-7282-4DCA-A158-C01FB7A8E482\"></a> \n                  <div><a name=\"GUID-94919A1F-D748-48CC-BB26-D6FB405161D4\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                     </div>\n                  </div> \n               </p>  \n            </li>\n            <li>选择在贴图和材质之间的连线，然后将其删除。 \n               	  \n               	 \n               <p><a name=\"GUID-032349E9-86A1-49AA-8125-BA05D2214CE6\"></a> \n                  <div><a name=\"GUID-DCA11E01-7A55-4E52-9187-CFAB3AE9D6A4\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                     </div>\n                  </div> \n               </p>  \n            </li>\n            <li>将连线拖离其连接到的套接字。 \n               	  \n               	 \n               <p><a name=\"GUID-068D03DF-7E3D-434D-8894-4803CC77CBCB\"></a> \n                  <div><a name=\"GUID-C0D7745B-DC35-4969-8FB5-22BA341BFC97\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                     </div>\n                  </div> \n               </p>  \n            </li>\n            <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择一个对象，然后在“MAXScript 侦听器”中输入 <em class=\"strong\">$.material.diffusemap=undefined</em>（贴图组件的名称随材质类型的不同而异：有关详细信息，请参见 <em class=\"mild\">MAXScript 帮助</em>）。 \n               \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-65BA\"></a> \n            <h2><a name=\"GUID-07688415-C6AF-4729-A6CD-DB3E05B61F2B\"></a>替代关联方法\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-65B9\"></a>板岩材质编辑器为您提供了各种用于连线材质树的替代方式。 \n               \n            </p> <a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-65B8\"></a><ul>\n               <li>双击未使用的输入套接字。这将显示材质/贴图浏览器，通过它可以根据需要选择材质或贴图类型。您在浏览器中选择的材质或贴图将成为板岩材质编辑器中的新节点。 \n                  	 \n               </li>\n               <li>将连线拖动到目标节点的标题栏。弹出菜单可用于选择关联哪些组件窗。 \n                  		 \n                  		\n                  <p><a name=\"GUID-6E5B21D2-98CF-4E4C-B5C9-4A66B6EA655A\"></a> \n                     <div><a name=\"GUID-F37DE82C-F20C-4FE3-8F5C-E17C98055AD3\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n                  <p><a name=\"WS73099CC142F48755-5C83E7B1120018DE8C0-4A9A\"></a>如果目标节点只有一个套接字适合该材质或贴图，3ds Max 就不会显示弹出菜单。而是会立即创建连线。 \n                     		\n                  </p> \n               </li>\n               <li>拖动以创建连线，但然后在视图的空白区域释放鼠标。3ds Max 显示一个“上下文”快捷菜单，可用于创建相应类型的新节点。 \n                  		 \n                  		\n                  <p><a name=\"GUID-22DEFE7D-969D-4523-BCE0-AFF2639FC364\"></a> \n                     <div><a name=\"GUID-6EC40E4A-42E4-4DE2-8656-74DB8CB660E1\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n                  <div><a name=\"WS1A9193826455F5FF-75C1F7C3124F51CCBD1CB6\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>您可以从输入套接字向后拖动，也可以从输出套接字向前拖动。 \n                        		\n                     </div>\n                  </div> \n               </li>\n               <li>将关联拖动到闭合的节点或具有隐藏的未使用窗的节点。 \n                  		 \n                  		\n                  <p><a name=\"GUID-FDFE5E2A-7ABD-4549-93FC-AB1B0028104A\"></a> \n                     <div><a name=\"GUID-7FE4E9C5-CE23-455F-B187-F5E48F30578C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n               </li>\n            </ul> <a name=\"UL_91BA59A752994828BD9A1B922543C75E\"></a><p class=\"list-intro\"><a name=\"GUID-E9CC2025-DE35-410C-AD33-F5ABBDFFC6FF\"></a>要使用其他贴图替换某种贴图，请执行以下操作：\n            </p>\n            <ul>\n               <li>从新贴图的输出套接字拖动到原始贴图的输出套接字。 \n                  		 \n                  		\n                  <p><a name=\"GUID-C43664EF-9648-4063-85B2-CD27D8A53A42\"></a> \n                     <div><a name=\"GUID-AC7CC1F0-F99A-45BC-A900-137AE4C42E58\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n               </li>\n            </ul> <a name=\"UL_057AD17BFFF84FBEA9B022C1ABF6347E\"></a><p class=\"list-intro\"><a name=\"GUID-47CADAD1-CA23-4079-B7F9-55EDA6095C23\"></a>要将节点插入到现有连线，请执行下列操作之一：\n            </p>\n            <ul>\n               <li>将节点从“材质/贴图浏览器”面板拖动到关联中。 \n                  		 \n                  		\n                  <p><a name=\"GUID-43532AC4-18C3-4ED1-B247-9E5866ADAC2C\"></a> \n                     <div><a name=\"GUID-79F3702F-64DF-49C6-BFD0-5F5DBA7641FE\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div>  \n                  </p> \n                  <div><a name=\"WS73099CC142F48755-5C83E7B1120018DE8C0-4A92\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果以这种方式拖放材质，该材质不会被插入到关联中。相反，贴图将输入到此材质以及原始材质中。新材质的输出套接字保持自由（非关联）。 \n                        		\n                     </div>\n                  </div> \n                  <p><a name=\"GUID-FBCCA042-A940-4956-A4C4-7BB47613D1E9\"></a> \n                     <div><a name=\"GUID-49B45D8A-CA70-45DB-BAA3-6E7610F61BE3\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n               </li>\n               <li>从节点的一个输入套接字拖动到连线。 \n                  		 \n                  		\n                  <p><a name=\"GUID-F9D6C373-A921-489E-8F91-38B524DF62F8\"></a> \n                     <div><a name=\"GUID-0DBC52BB-87B7-4ABB-87D6-3632C72846C1\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n               </li>\n               <li>拖动贴图节点本身，然后在将节点放置到关联上之前按 <span class=\"keyboardEntry\">Ctrl</span> 键。 \n                  		 \n                  		\n                  <p><a name=\"GUID-71F002AE-C620-4445-AADD-7BC2C2045417\"></a> \n                     <div><a name=\"GUID-97D007AD-14A7-4404-BA29-C74BBADAB53F\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n               </li>\n            </ul> <a name=\"UL_3899BA0DD4944EA7A1E2B63605A799A7\"></a><p class=\"list-intro\"><a name=\"GUID-1CE52EE6-9BAE-414B-8102-D334140B9DD3\"></a>要断开插入节点的连接，请执行以下操作：\n            </p>\n            <ul>\n               <li>拖动节点，然后按住 <span class=\"keyboardEntry\">Alt</span> 键进行拖动。 \n                  		 \n                  		\n                  <p><a name=\"GUID-CA1254A0-02FC-44E7-AD00-24F365BC4F6C\"></a> \n                     <div><a name=\"GUID-BEF93A6A-E633-43A7-BBF3-730BB6EA8EBC\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关更多视频内容，请查看此在线主题。请参见 <a href=\"http://www.autodesk.com/3dsmax-docs-chs\" target=\"_blank\">http://www.autodesk.com/3dsmax-docs-chs</a> \n                        </div>\n                     </div> \n                  </p>  \n               </li>\n            </ul> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";