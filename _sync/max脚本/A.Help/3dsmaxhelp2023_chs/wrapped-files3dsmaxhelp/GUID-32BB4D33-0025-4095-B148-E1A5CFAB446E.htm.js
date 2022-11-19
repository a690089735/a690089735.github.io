var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-32BB4D33-0025-4095-B148-E1A5CFAB446E\">\n      <meta name=\"description\" content=\"Autodesk 3ds Max 2022 中新增了局部和全局场景资源管理器的概念。本地“场景资源管理器”仅存在于特定场景中，并随该场景一起保存和加载。另一方面，全局场景资源管理器在每个 3ds Max 会话中都可用。这使您可以根据特定项目定制一些自定义的场景资源管理器，同时在全局使用其他场景资源管理器。\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>关于局部和全局场景资源管理器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-32BB4D33-0025-4095-B148-E1A5CFAB446E\"></a><div class=\"head\">\n            <h1>关于局部和全局场景资源管理器</h1>\n         </div>\n         <div class=\"abstract\"> \n            <p class=\"blurb\"> <span class=\"charspan-msgph\">Autodesk 3ds Max 2022</span> 中新增了局部和全局场景资源管理器的概念。本地“场景资源管理器”仅存在于特定场景中，并随该场景一起保存和加载。另一方面，全局场景资源管理器在每个 <span class=\"charspan-msgph\">3ds Max</span> 会话中都可用。这使您可以根据特定项目定制一些自定义的场景资源管理器，同时在全局使用其他场景资源管理器。 \n               	 \n            </p> \n         </div>\n         <p><a name=\"GUID-C1D49769-A28E-4B10-A5D5-A0B9967DFC5B\"></a> 默认情况下，所有“场景资源管理器”都是全局的，但此功能的好处是可以打开资源管理器、对其进行自定义以满足您的项目需求，然后使其成为本地资源管理器，使所有使用当前场景的人都可使用该资源管理器。为此，主要机制是通过任何“场景资源管理器”对话框左下角的下拉菜单，如下图所示：\n            \n            	 \n         </p><a name=\"FIG_B2307DA84C064472B37FDDE40206F88E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0A9F0150-4D85-4885-96F7-E33DDF5AA1DC-low.png\"></div>\n         <p><a name=\"GUID-3BA11F48-03F2-4F9F-A567-0280E92C5AF3\"></a>该图显示了标准、浮动、全局场景资源管理器，其通过默认工作空间中“工具”菜单上打开的场景资源管理器调用（为了明确起见，添加了红色编号）。此“场景资源管理器”对话框处于活动状态，由它的名称“场景资源管理器”（下拉列表左侧的黄色文本）指示。 \n            	 \n         </p>\n         <p><a name=\"GUID-7E0A9481-59BB-4A31-9A30-1F2CD90332C1\"></a>显示在该图下半部分的下拉菜单包含五个部分的列表和命令。若要将其打开，请单击名称字段右侧的箭头。其内容如下： \n            	 \n         </p><a name=\"OL_D5FA1DEDF7CD4665B01DD5F48EA78416\"></a><ol type=\"1\" start=\"1\">\n            <li>所有局部场景资源管理器的列表：仅当存在局部场景资源管理器时显示。在此示例中，局部场景资源管理器 1 将灰显，表明它已在单独的对话框中打开。但是，可单击局部场景资源管理器 2，这意味着它已关闭，因此单击其名称会将活动的对话框替换为局部场景资源管理器\n               2。执行此操作，然后再次启用“工具”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“场景资源管理器”，以打开一个新的全局场景资源管理器。这还包含第 4 部分中的任何选项。 \n               		\n            </li>\n            <li> <em class=\"strong\">将活动资源管理器设为局部（命令）</em>：仅当活动场景资源管理器为全局时可用。场景资源管理器为局部时，以下内容适用： \n               		  <a name=\"UL_C865D8F875B44B0387AB9ED61DD6F64F\"></a><ul>\n                  <li>其名称显示在所有局部场景资源管理器列表中。 \n                     			 \n                  </li>\n                  <li>它将自动与场景一同保存。打开场景时，所有局部场景资源管理器将完全恢复为保存时的内容。 \n                     			 \n                  </li>\n                  <li>您可以通过编辑“场景资源管理器”左下角的名称字段更改其名称。 \n                     			 \n                  </li>\n                  <li>您可以将其设置为全局（请参见下文的 5）。 \n                     			 \n                  </li>\n               </ul> \n            </li>\n            <li> 工作区“场景资源管理器”的名称。默认情况下，该浏览器处于打开状态，并且停靠在视口左侧，因此其在此菜单中的名称将灰显并且不可单击。如果工作区“场景资源管理器”处于关闭状态，则可以通过单击其在该列表中的名称以替换活动的“场景资源管理器”。 \n               		  \n               <div><a name=\"GUID-89FD4C38-D609-4134-928D-381E1A82F592\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>工作区“场景资源管理器”既不是全局也不是局部，因此无法转换。 \n                     		  \n                  </div>\n               </div> \n            </li>\n            <li> 所有全局场景资源管理器的列表（如对应的文件所定义），例如使局部场景资源管理器成为全局场景资源管理器时保存的场景资源管理器。下图显示了随 <span class=\"charspan-msgph\">3ds Max</span> 一起安装的默认全局场景资源管理器。 \n               		\n            </li>\n            <li> <em class=\"strong\">将活动资源管理器设为全局（命令）</em>：仅当活动场景资源管理器为局部时可用。打开一个对话框以在单独的文件中保存全局场景资源管理器。 \n               		  \n               <div><a name=\"GUID-498A10D0-6D2E-4F56-86DE-F46841C167CC\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>您可以为文件提供任何名称，但 <span class=\"charspan-msgph\">3ds Max</span> 界面始终根据“场景资源管理器”左下角的名称字段所指定的名称显示全局资源管理器名称。因此，如果要重命名全局资源管理器，请在其成为全局之前作为局部资源管理器时进行该操作。 \n                     		  \n                  </div>\n               </div> \n               <p><a name=\"GUID-411DBCDE-5E77-4B1C-99CD-D7ADBF831DC4\"></a></p> \n            </li>\n         </ol>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";