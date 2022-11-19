var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-94A76BE6-31D3-400B-B6CF-1D3A9C10160F\">\n      <meta name=\"indexterm\" content=\"故障诊断: 纹理\">\n      <meta name=\"indexterm\" content=\"纹理: 故障诊断\">\n      <meta name=\"indexterm\" content=\"故障诊断: Poser 创建的 DAE 文件\">\n      <meta name=\"indexterm\" content=\"DAE: 缺少纹理贴图解决方法\">\n      <meta name=\"indexterm\" content=\"Poser: 纹理贴图: 故障诊断\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>纹理出现了什么问题？</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-94A76BE6-31D3-400B-B6CF-1D3A9C10160F\"></a><div class=\"head\">\n            <h1>纹理出现了什么问题？</h1>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF-72A156FC122CE7955E0-7F36\"></a> 如果从关联媒体文件所在位置的相对和绝对路径移动或删除任何纹理，则纹理会从文件中消失。如果您将 FBX 文件给使用另一台计算机的某个人，而这个人没有您的计算机驱动器上该目录下的那种纹理，可能会出现这种情况。 \n         </p>\n         <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7F4A\"></a>使用<span class=\"char_link\"><a href=\"GUID-FB993022-FD65-4ABD-8AF3-7F2CF613D71D.htm\">嵌入媒体</a></span>选项可以使 FBX 插件将关联媒体（如纹理）包含（嵌入）到 FBX 文件中。然后该插件在导入时将相应的媒体提取到 .fbm 文件夹。该插件将嵌入的媒体复制到与 FBX 文件处于同一位置上的 &lt;文件名&gt;.fbm 文件夹中，并以 FBX 文件命名。\n            \n         </p>\n         <div><a name=\"WS1A9193826455F5FF-72A156FC122CE7955E0-7F35\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 激活“嵌入媒体”后，媒体将包含在 FBX 文件本身中，这对文件大小有影响。最好仅在将 FBX 文件传输到接收者再也无法访问其中的原始媒体源的位置时使用该选项。 \n            </div>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF-72A156FC122CE7955E0-7F34\"></a>如果禁用“嵌入媒体”选项，那么 FBX 插件将在导出时存储关联媒体文件的相对和绝对路径。如果因故无法再访问路径，那么将导致出现问题。请确保可以访问关联的媒体，以确保能正确导入这些媒体文件。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF-6AB24494122F0F3D6B8-1E23\"></a> \n            <h2><a name=\"GUID-E83A223F-DE04-44C5-A489-4473D9B57411\"></a>“嵌入媒体”处于启用状态，但我仍旧看不到纹理\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF-6AB24494122F0F3D6B8-1E22\"></a>在先前版本的 <span class=\"charspan-msgph\">3ds Max FBX plug-in</span>中，在“嵌入媒体”选项激活的情况下保存 FBX 文件时，会将嵌入的文件提取到 FBX 文件所在位置的文件夹中。如果您没有写入该文件夹的权限，则不会提取媒体文件。通过网络工作时可能会遇到这种缺少写入权限的情况。 \n            </p> \n            <p><a name=\"WS73099CC142F487551D68DD061249D36330F-78EB\"></a>在当前版本的 3ds Max FBX 插件中，如果您没有创建该文件夹所需的写入权限，则媒体文件会改而发送到临时文件夹中。请参见<span class=\"char_link\"><a href=\"GUID-FB993022-FD65-4ABD-8AF3-7F2CF613D71D.htm\">嵌入媒体</a></span>。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FF219F8B8B1249CF2CB82-6731\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 如果使用 FBX 2010 版及更早版本将文件导出为 ASCII 格式，则不会嵌入任何纹理。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF-735130A41278D915F58-7D01\"></a> \n            <h2><a name=\"GUID-5C29095C-B9A9-4E00-A2CB-EE0EAFC01257\"></a>Maya 中 Poser 创建的 Collada (DAE) 文件\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF-735130A41278D915F58-7D00\"></a>  如果导入在 Poser 中创建的 Collada (DAE) 文件，文件会丢失其纹理贴图。如果 FBX 插件遇到此限制，渲染时将显示“缺少贴图文件”对话框。这是因为 3ds Max 找不到文件。 \n            </p> \n            <p><a name=\"WS73099CC142F48755-6BF55A3B1279D6BCE50-7F5B\"></a>如果将此位置添加到“外部文件”路径列表中，则可以解决此问题。 \n            </p> <a name=\"WS73099CC142F48755-6BF55A3B1279D6BCE50-7F5A\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F48755-6BF55A3B1279D6BCE50-7F59\"></a>保持纹理可见的步骤： \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在 3ds Max 中，单击“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“配置用户路径”。 \n                  <p><a name=\"WS73099CC142F48755-6BF55A3B1279D6BCE50-7F57\"></a>将显示“配置用户路径”对话框。 \n                  </p> \n               </li>\n               <li> 选择“外部文件”选项卡，然后单击“添加”。 </li>\n               <li>在“选择新的外部文件路径”对话框中导航到纹理文件的位置。 </li>\n               <li>单击“使用路径”。 \n                  <p><a name=\"WS73099CC142F48755-6BF55A3B1279D6BCE50-7F53\"></a>渲染文件时，会显示纹理贴图。 \n                  </p> \n               </li>\n            </ol> \n            <p><a name=\"WS73099CC142F48755-6BF55A3B1279D6BCE50-7F52\"></a>有关此限制的说明，请参见<span class=\"char_link\"><a href=\"GUID-7AE0EB6B-7223-4992-835A-88E7E9760319.htm\"> DAE 文件中缺少纹理贴图</a></span>。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";