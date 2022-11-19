var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878\">\n      <meta name=\"indexterm\" content=\"包含: 动画（导入）\">\n      <meta name=\"indexterm\" content=\"动画: 动画录制（导入）\">\n      <meta name=\"indexterm\" content=\"动画: 视觉标记（导入）\">\n      <meta name=\"indexterm\" content=\"动画: 点缓存文件（导入）\">\n      <meta name=\"indexterm\" content=\"动画: 变形（导入）\">\n      <meta name=\"indexterm\" content=\"动画: 骨骼（导入）\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>动画</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878\"></a><div class=\"head\">\n            <h1>动画</h1>\n         </div>\n         <p><a name=\"WS73099CC142F487551051018113CCCDB767-4B36\"></a> 激活此选项可导入在场景中找到的动画。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-4224\"></a>展开此选项可访问高级动画选项和功能。 \n         </p>\n         <div class=\"section\"><a name=\"SECTION_89FEFAED444745279333DBC3CA553718\"></a> \n            <h2><a name=\"GUID-E142DA56-BF51-42CB-8560-E09A350CBD16\"></a>附加选项\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF-3D980B8612487088DED-7AAC\"></a>展开“附加选项”可以查看其他用于导入的选项。 \n            </p> <a name=\"GUID-CE00C800-F2E7-4073-B929-E609255160B3\"></a><dl>\n               <dt><a name=\"GUID-EE994C63-F546-4776-97DF-27EF881B3785\"></a><span class=\"term\"><a name=\"GUID-890B13A8-9930-408A-B8EA-AC3C3A32AB6E\"></a>动画应用</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-007C7467-8769-4288-99AB-EFDEA78F17DC\"></a> \n                     <p><a name=\"WS73099CC142F487551051018113CCCDB767-4B4B\"></a> 显示 FBX 文件中当前的动画录制。 \n                     </p> \n                     <p><a name=\"WS73099CC142F487553B93539F117A2602BD5-5F63\"></a>如果文件中不存在动画应用，在该字段将显示“No animation”消息。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-4223\"></a>如果文件中存在多个动画应用，则字段中将显示当前选定的应用。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-4222\"></a>您可以从菜单中选择其他应用来更改选定的动画应用。该插件中列出了文件中包含的所有可用动画录制。 \n                     </p> \n                     <div><a name=\"WS1A9193826455F5FF1DBC298511635BEA875-942\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 每次您只能选择和导入单个动画应用。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n               <dt><a name=\"GUID-8A9F3785-5CEB-49BB-82DF-0F50EA91AB37\"></a><span class=\"term\"><a name=\"GUID-DBEC5470-7730-4524-B726-0BCD4C6DA133\"></a>填充时间表</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-7A92C046-06FC-4936-B5A0-E69F67A22F5D\"></a> \n                     <p><a name=\"WS1A9193826455F5FF-3D980B8612487088DED-7AAA\"></a>当您要按照传入 FBX 文件中的动画范围更新应用程序时间表时，请激活此选项。术语“动画范围”指文件中所包含动画的第一个和最后一个关键点。 \n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"GUID-04C1CC62-9242-4249-8154-6FB3E36352F4\"></a><span class=\"term\"><a name=\"GUID-26EF9363-D2E3-4191-8F81-3FAC2C63E3AB\"></a>烘焙动画层</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-FB00AC23-A9E1-435B-BFF6-8D80A8E06888\"></a> \n                     <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-EF6\"></a>“烘焙动画层”可用于烘焙（或绘制）传入文件中所包含的动画层。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-4221\"></a>如果传入文件中包含动画层，请确保该选项已被激活，以便插件可以处理所有动画曲线。该过程会将所有层都烘焙到基础层上，并使它们与 3ds Max 曲线编辑器相兼容。默认情况下，该选项处于启用状态。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-4220\"></a>如果禁用此选项，插件将仅导入动画的基础层（或第一层），而忽略所有其他层。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-421F\"></a>如果文件中不存在其他动画层，则可以始终启用此选项，这不会产生任何影响。 \n                     </p> \n                  </div>\n               </dd>\n               <dt><a name=\"GUID-1941FD3B-162C-48F1-9CBF-9539DB9677A9\"></a><span class=\"term\"><a name=\"GUID-AEAED967-4CDF-4696-83DE-666A5CF63845\"></a>视觉标记</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-AF85CA3D-B9AA-457F-8CFE-D588BCA74FE4\"></a> \n                     <p><a name=\"WS73099CC142F487553B93539F117A2602BD5-5F61\"></a> 激活此选项可在导入时将文件中所包含的视觉标记转换为虚拟对象。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-421E\"></a>如果禁用此选项，则导入过程将忽略此数据。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-421D\"></a>视觉标记通常来自运动捕捉数据，表现为一片动画点或标记。由于数据类型不兼容，因此插件不会导入动画。但在 3ds Max 中，该插件会将视觉数据转换为一组静态虚拟对象。 \n                     </p> \n                     <div><a name=\"WS73099CC142F487552A50A53111913E7C26F-6B91\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 如果视觉数据来自 MotionBuilder，则可以在 MotionBuilder 中将所有视觉标记的状态设置为“完成”。以这种方式设置标记，可以在 3ds Max 中将动画数据作为曲线导入。 \n                        </div>\n                     </div> \n                  </div>\n               </dd>\n               <dt><a name=\"GUID-CA2CFFF9-21A2-4928-A7E9-78DF18760DBF\"></a><span class=\"term\"><a name=\"GUID-429F6097-94B2-4B92-849F-192BDEB07DCC\"></a>点缓存文件</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-75D94B65-0B39-47C1-B77D-ACD1C49BB91F\"></a> \n                     <p><a name=\"WS73099CC142F487551051018113CCCDB767-4B30\"></a> 激活此选项可在 FBX 导入期间导入由 FBX 导出的点缓存数据。 \n                     </p> <a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-41FF\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-41FE\"></a>当您使用 FBX 导出点缓存文件时，插件会生成以下三种文件：\n                     </p>\n                     <ul>\n                        <li>FBX 文件 </li>\n                        <li>XML 文件 </li>\n                        <li>MC 文件 </li>\n                     </ul> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-41FA\"></a>插件会将 XML 和 MC 文件存储到以 FBX 文件的名称命名的子文件夹中，且后缀为 FPC (_fpc)。 \n                     </p> \n                     <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-41F9\"></a>例如，如果将包含名为 Box01 的立方体的场景导出到 FBX 文件 myTest.fbx 中，则会创建以下文件： \n                     </p> <a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-41F8\"></a><ul>\n                        <li>myTest.fbx </li>\n                        <li>myTest_fpc </li>\n                        <li>Box01.xml </li>\n                        <li>Box01.mc </li>\n                     </ul> \n                  </div>\n               </dd>\n            </dl> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_4489477CD7BF44C2BD2ED3C67968E636\"></a> \n            <h2><a name=\"GUID-E088FE46-DBC0-466E-AC23-476367BABB0A\"></a>变形\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF-54F556CA1166AC9EE9E-EFC\"></a> 激活“变形”选项即可访问“蒙皮和变形”变形选项。 \n            </p> <a name=\"WS73099CC142F48755-42D82BFB116E746D5A6-7F5E\"></a><div class=\"table-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n                  <colgroup>\n                     <col width=\"50%\">\n                     <col width=\"50%\">\n                  </colgroup>\n                  <tr class=\"ruled-heading\">\n                     <th class=\"table-heading\">选项 </th>\n                     <th class=\"table-heading\">说明 </th>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">变形 </td>\n                     <td class=\"table-body\">激活此选项，可导入传入文件中包含的所有几何体变形。 </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">蒙皮 </td>\n                     <td class=\"table-body\">激活此选项可导入传入文件中包含的所有蒙皮变形。 </td>\n                  </tr>\n               </table>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_B5D44B0399FD4BFFA7A6E54C8E86288B\"></a> \n            <h2><a name=\"GUID-697518FE-F677-4D45-AAFF-D6F808FE24CE\"></a>骨骼创建\n            </h2> \n            <p><a name=\"WS73099CC142F487551051018113CCCDB767-4B12\"></a> 展开“骨骼创建”可以对 3ds Max 骨骼的创建进行自定义。 \n            </p> \n            <p><a name=\"WS73099CC142F487551051018113CCCDB767-4B0F\"></a>使用“骨骼创建”选项可以选择是要创建“真实的”3ds Max 骨骼还是与 3ds Max 骨骼行为方式相同的虚拟对象。这样，您可以获得更好的视觉效果。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF-29C43AA6117A24C0284-41F3\"></a>还可以使用此选项创建指定大小的骨骼对象。仅当插件未自动计算骨骼大小的情况下，它才会偶尔使用这些值。 \n            </p> <a name=\"WS73099CC142F487551051018113CCCDB767-4B0E\"></a><div class=\"table-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n                  <colgroup>\n                     <col width=\"50%\">\n                     <col width=\"50%\">\n                  </colgroup>\n                  <tr class=\"ruled-heading\">\n                     <th class=\"table-heading\">设置 </th>\n                     <th class=\"table-heading\">说明 </th>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">锁定宽度和高度 </td>\n                     <td class=\"table-body\">锁定在宽度字段和高度字段中输入的值。（只有您在骨骼的宽度和高度字段中输入了相同值时才会启用此设置。） </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">以虚拟对象转换或设为骨骼 </td>\n                     <td class=\"table-body\">选择“以虚拟对象转换”会在导入时将关节或骨骼转换为虚拟对象。它们类似骨骼但没有“真实”3ds Max 骨骼的限制。选择“设为骨骼”会将关节或骨骼转换为“真实”的骨骼或真正的 3ds Max 骨骼。 </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">宽度 </td>\n                     <td class=\"table-body\">骨骼宽度的大小。（此设置仅影响骨骼的外观而不会影响其行为方式。） </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">高度 </td>\n                     <td class=\"table-body\">骨骼高度的大小。（此设置仅影响骨骼的外观而不会影响其行为方式。） </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">锥化 </td>\n                     <td class=\"table-body\">应用于骨骼梢或骨骼末端的宽度或高度（或者厚度）的百分比。 </td>\n                  </tr>\n               </table>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";