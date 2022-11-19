var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-08208003-BA6A-41C9-8C36-4A9D3D0A703F\">\n      <meta name=\"indexterm\" content=\"Interactive: 预设\">\n      <meta name=\"indexterm\" content=\"预设: Interactive\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>为 Interactive 明暗器创建自定义预设</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-08208003-BA6A-41C9-8C36-4A9D3D0A703F\"></a><div class=\"head\">\n            <h1>为 Interactive 明暗器创建自定义预设</h1>\n         </div>\n         <div><a name=\"GUID-614155ED-6CEC-42D3-87F7-EE7FE289EEEF\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在 3ds Max 2018.4 Update 中，Stingray 基于物理的明暗器被重命名为 <em class=\"mild\">Interactive</em>。 \n               	 \n            </div>\n         </div>\n         <p>为了避免重复创建相同的明暗器图形以及降低项目的速度，可以创建并保存预设明暗器图形，然后在想要创建新的 Interactive 明暗器时重用此预设。 \n            	 \n         </p>\n         <p> <a name=\"OL_A3BCAEA41FA7480C9C6C7F772E463E37\"></a><ol type=\"1\" start=\"1\">\n               <li>创建 Interactive 明暗器节点。 \n                  		\n               </li>\n               <li>在 DirectX 材质的 Interactive 卷展栏中，从“预设材质”列表中选择“自定义”。 \n                  		  \n                  <p>“父材质”字段现在为空。 \n                     		  \n                  </p> \n               </li>\n               <li>在“DirectX 明暗器”卷展栏中，单击“打开 ShaderFX”，然后构建您的图形。 \n                  		\n               </li>\n               <li> （可选）在 ShaderFX 编辑器中选择“标准基础”节点。在“属性”面板的“父材质”属性中提供路径和资源名称，例如：/content/materials/my_interactive_material。现在，导出到 Max Interactive\n                  后，明暗器图形指向位于 /content/materials/my_interactive_material 的父图形。将明暗器导入 Max Interactive 时，它将不会重新创建父图形。但是，您必须确保 3ds Max ShaderFX\n                  编辑器中的图形与 Max Interactive 引擎中的父图形（即路径中设置的图形）相同。 \n                  		\n               </li>\n               <li>在“ShaderFX 文件”菜单中选择<span class=\"filePath\">“文件”&gt;“导出图形”</span>。 \n                  		\n               </li>\n               <li> <a name=\"UL_7091673DB0EB48FCA4EDE9DF08856355\"></a><p class=\"list-intro\">将 SFX 文件保存到以下位置之一：</p>\n                  <ul>\n                     <li>要使预设仅对当前项目可用，则保存到项目目录，即 renderData\\shaders 文件夹。 \n                        			 \n                     </li>\n                     <li>要使预设对所有项目全局可用，则保存到 \\Documents\\3dsMax\\ShaderFX\\Scenes\\StingrayPBS。 \n                        			 \n                     </li>\n                  </ul> \n               </li>\n               <li>（可选）重命名明暗器节点，以便将 FBX 文件导入到游戏引擎中时易于识别。如果要使用 Interactive 菜单导出到 Max Interactive，还可以在 Interactive 卷展栏的“引擎资源”属性中输入材质的名称，该名称将在 Max\n                  Interactive 中用作材质名称。 \n                  		\n               </li>\n               <li> 现在，当您重新启动 3ds Max 并创建新的 Interactive PBS 节点时，可以在“预设材质”下拉列表中找到预设。选择预设以重用相同的明暗器图形。您只需更改属性而不必更改明暗器图形，就可以继续使用预设。 \n                  		\n               </li>\n            </ol> \n         </p>\n         <div class=\"section\"><a name=\"SECTION_645483117168428EBC630B7CE9EBE6B1\"></a> \n            <h2><a name=\"GUID-87467668-8F06-4B15-B1D4-57570E2CF647\"></a>自定义预设的应用\n            </h2> \n            <div class=\"section\"><a name=\"SECTION_75E70D8ECCE14F138BD62CCA68208CBC\"></a> \n               <h3><a name=\"GUID-9198B743-C96F-4E41-8529-00C1DE8E971A\"></a>父材质和子材质\n               </h3> \n               <p>包含明暗器图形的材质称为父材质。 \n                  		  \n               </p> \n               <p>您可以基于父材质创建子材质。子材质从父材质继承明暗器图形，因此也会继承材质属性。 \n                  		  \n               </p> \n               <p>子材质可以修改父材质的属性；例如，其颜色值和纹理贴图。通常而言，这些属性都显示在 Interactive PBS“属性编辑器”中。然而，子材质无法更改父材质的明暗器图形。 \n                  		  \n               </p> \n               <p> 如果在场景中具有一个由足球运动员组成的团队，则可以创建一个明暗器图形以对其所有 T 恤着色。 \n                  		  \n               </p> \n               <p>创建一个具有预设明暗器图形的父材质，然后基于该父材质创建 10 个子材质。每个子材质“属性编辑器”都可以连接到表示队员姓名和编号的一个不同纹理。由于有 10 个子材质未连接明暗器图形，因此计算它们要快得多，从而降低了对性能的瞬时干扰。 \n                  		  \n               </p> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_514F26B14DB24C258C9602F5CEC68AC9\"></a> \n               <h3><a name=\"GUID-4D35AB70-FB4D-4C68-9917-7849B29C4E34\"></a>使用现有明暗器图形创建自定义预设\n               </h3> <a name=\"OL_999A02949F2044D0BEECE0C7CE7CE26E\"></a><ol type=\"1\" start=\"1\">\n                  <li>从“预设材质”列表中选择具有要从中开始构建的明暗器图形的预设。 \n                     			 \n                  </li>\n                  <li>单击“使唯一”。Interactive 明暗器节点不再指向先前选定的预设；但当您单击“打开 ShaderFX”时，仍保留明暗器图形。 \n                     			 \n                  </li>\n               </ol> \n            </div> \n            <h2><a name=\"GUID-F95EBCCB-7B85-4504-A608-F62454CF5EF5\"></a>编辑现有的自定义预设\n            </h2> <a name=\"OL_2EB8044D076441EA8F6A7A84A7E6CB58\"></a><ol type=\"1\" start=\"1\">\n               <li>在 Interactive PBS 明暗器“属性编辑器”中，从“预设材质”下拉列表中选择要编辑的预设。 \n                  		  \n               </li>\n               <li>单击“打开 ShaderFX”以打开 ShaderFX 编辑器窗口。ShaderFX 编辑器中的消息将通知您，该图形继承自预设图形；在本例中为自定义预设。 \n                  		  \n               </li>\n               <li>编辑图形，然后选择“文件”&gt;“导出图形”，并使用现有文件名保存预设以替换先前版本。 \n                  		  \n               </li>\n            </ol> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";