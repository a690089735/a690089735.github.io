var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-DCA4B1CB-58D0-4D73-8A28-27A87E1E1755\">\n      <meta name=\"indexterm\" content=\"脚本: fbximportergetparam\">\n      <meta name=\"indexterm\" content=\"脚本: fbximportersetparam\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Animation\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: AxisConversion\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: BakeAnimationLayers\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Cameras\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: ConvertUnit\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: FillTimeline\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: FilterKeyReducer\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: FilterKeySync\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: GenerateLog\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: ImportBoneAsDummy\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: KeepFrameRate\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Lights\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: LoadImportPresetFile\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Markers\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Mode\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam &#34;PopSettings&#34;\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam &#34;PushSettings&#34;\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: PointCache\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Resampling\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: ResetImport\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: ScaleConversion\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: ScaleFactor\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Shape\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: Skin\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: SmoothingGroups\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: TakeCount\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: TakeIndex\">\n      <meta name=\"indexterm\" content=\"FBXImporterSetParam: UpAxis\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>FBXImporterGetParam</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-DCA4B1CB-58D0-4D73-8A28-27A87E1E1755\"></a><div class=\"head\">\n            <h1>FBXImporterGetParam</h1>\n         </div>\n         <p><a name=\"WS73099CC142F487551051018113CCCDB767-4BB6\"></a>getparam 脚本用于查询导入插件参数，其中 [arg] 为已识别的导入参数。 \n            	 \n         </p>\n         <p><a name=\"WS73099CC142F487552A50A53111913E7C26F-5F6B\"></a>“FBXImporterGetParam”返回命名参数的值。如果参数无法识别或所提供的参数数目错误，则返回“unsupplied”值。 \n            	 \n         </p>\n         <p><a name=\"WS73099CC142F487552A50A53111913E7C26F-5F6A\"></a>有关受支持的参数列表，请参见 <span class=\"char_link\"><a href=\"GUID-DCA4B1CB-58D0-4D73-8A28-27A87E1E1755.htm#SECTION_C060DDC5FF0F4E7AA7809FE8E9466DAF\">FBXImporterGetParam [arg] [value]</a></span>。 \n            	 \n         </p>\n         <div class=\"section\"><a name=\"SECTION_C060DDC5FF0F4E7AA7809FE8E9466DAF\"></a> \n            <h2><a name=\"GUID-3477826B-B808-4131-BC41-A645D80C433D\"></a>FBXImporterSetParam [arg] [value]\n            </h2> \n            <p><a name=\"WS73099CC142F487551051018113CCCDB767-4BB0\"></a>setparam 脚本 \n               		  用于为导入设置特定的参数，其中 [arg] 为已识别的导入参数，[value] 是所支持参数对应的值。 \n               		\n            </p> <a name=\"WS73099CC142F487551051018113CCCDB767-4BAF\"></a><ul>\n               <li>如果成功，“FBXImporterSetParam”将返回“OK”，如果向其发送的是无法识别的参数，将返回“unsupplied”。 \n                  		  \n               </li>\n               <li>如果传递的参数数目错误，“FBXImporterSetParam”将返回“unsupplied”。 \n                  		  \n               </li>\n            </ul> \n            <p><a name=\"WS73099CC142F487551051018113CCCDB767-4BAC\"></a>例如，要使用“添加并更新”场景元素模式和蒙皮修改器导入 FBX 文件，但无需加载动画 FCurve，则输入以下内容： \n               		\n            </p> \n            <div class=\"codeBlock\"><pre>\n	FBXImporterSetParam \"Mode\" #merge\n	FBXImporterSetParam \"Skin\" true\n	FBXImporterSetParam \"Animation\" false\n</pre></div> \n            <p><a name=\"WS73099CC142F487551051018113CCCDB767-4BAE\"></a>FBXImporterSetParam 可识别以下的参数和值： \n               		\n            </p> <a name=\"WS73099CC142F487551051018113CCCDB767-4BAD\"></a><div class=\"table-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n                  <colgroup>\n                     <col width=\"50%\">\n                     <col width=\"50%\">\n                  </colgroup>\n                  <tr class=\"ruled-heading\">\n                     <th class=\"table-heading\">名称 \n                        				  \n                     </th>\n                     <th class=\"table-heading\">值 \n                        				  \n                     </th>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"Animation\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm\">动画</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"AxisConversion\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-DB504E29-7782-428D-8C2D-2D2F3080547F.htm\">轴转化</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"BakeAnimationLayers\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#GUID-04C1CC62-9242-4249-8154-6FB3E36352F4\">烘焙动画层</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"Cameras\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-FC2155ED-F80E-48D6-AE99-C1E18ED67621.htm\">摄影机</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"ConvertUnit\" </td>\n                     <td class=\"table-body\">“mm”、“cm”、“dm”、“m”、“km”、“mi”、“in”、“ft”或“yd”。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-C7D3DC9B-CF3F-408D-A3BD-A82EC31BBBC5.htm#GUID-E35F3E39-CACC-4467-B85C-AE0800AA206C\">文件单位转化为</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"FillTimeline\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#GUID-8A9F3785-5CEB-49BB-82DF-0F50EA91AB37\">填充时间表</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"FilterKeyReducer\" </td>\n                     <td class=\"table-body\">True 或 False。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"FilterKeySync\" </td>\n                     <td class=\"table-body\">True 或 False。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"GenerateLog\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-C7D3DC9B-CF3F-408D-A3BD-A82EC31BBBC5.htm#GUID-D84FB0A6-79E6-45CD-864A-74DC9B8F3A1A\">生成日志数据</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"ImportBoneAsDummy\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#SECTION_B5D44B0399FD4BFFA7A6E54C8E86288B\">骨骼创建</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"KeepFrameRate\" </td>\n                     <td class=\"table-body\">True 或 False。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"Lights\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-CDB6B49A-FB46-43BE-96DE-217655185941.htm\">灯光</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"LoadImportPresetFile\" </td>\n                     <td class=\"table-body\">\"x\"，其中 x 表示预设文件的位置。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-AE794918-3077-4203-A926-DB0A4C164788.htm\">导入预设</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"Markers\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#GUID-1941FD3B-162C-48F1-9CBF-9539DB9677A9\">视觉标记</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"Mode\" \n                        					  \n                     </td>\n                     <td class=\"table-body\">#create（添加）#exmerge（更新动画）#merge（添加并更新动画）。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-841A7E66-F4CF-4890-96C8-771F1D335C2E.htm#SECTION_06F2266F6CA04DC892A214D282D28857\">文件内容</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"PopSettings\" \n                        					  \n                     </td>\n                     <td class=\"table-body\">当您执行单击操作时，此设置将保留设置的当前状态。此设置加载 FBXImporterSetParam \"PushSettings\" 保存的所有设置。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"PushSettings\" \n                        					  \n                     </td>\n                     <td class=\"table-body\"> 当您执行单击操作时，此设置将保留设置的当前状态。此设置保存所有 I/O 设置 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"PointCache\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#GUID-CA2CFFF9-21A2-4928-A7E9-78DF18760DBF\">点缓存文件</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"Resampling\" </td>\n                     <td class=\"table-body\">浮点数。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"ResetImport\" </td>\n                     <td class=\"table-body\">还原为出厂默认设置。如果调用 ResetImport 时不使用以下软件的参数： \n                        					 <a name=\"UL_99839518797C43C99DDB5600A12EA2B4\"></a><ul>\n                           <li><em class=\"strong\">3DS Max</em>：加载 Autodesk Media &amp; Entertainment 导入预设。 \n                              						\n                           </li>\n                           <li><em class=\"strong\">3DS Design</em>：加载 Autodesk Architectural (Revit) 导入预设。 \n                              						\n                           </li>\n                        </ul>将<em class=\"strong\">仅文件名</em>用作参数：如果传递 \"Autodesk Media &amp; Entertainment.fbximportpreset\" 或 \"Autodesk Architectural (Revit) .fbximportpreset\"，将搜索用于加载预设文件的出厂预设目录。\n                        \n                        					 <a name=\"GUID-07BB2AF3-DD59-4C8E-B095-1880A0CEB964\"></a><p class=\"table-body\">使用此命令加载出厂预设时无需知道目录。 \n                           					 \n                        </p> \n                        <div><a name=\"GUID-3DDC5461-7685-4CC0-9936-E0388C6CD125\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“单击”功能将使用该命令。 \n                              					 \n                           </div>\n                        </div> \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"ScaleConversion\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-C7D3DC9B-CF3F-408D-A3BD-A82EC31BBBC5.htm#SECTION_F638D0A084454C7FBA390A85B4291221\">单位</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"ScaleFactor\" </td>\n                     <td class=\"table-body\">浮点数。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-C7D3DC9B-CF3F-408D-A3BD-A82EC31BBBC5.htm#GUID-B26B72A1-E893-492B-B8A0-D9EADDCD339C\">比例因子</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"Shape\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#SECTION_4489477CD7BF44C2BD2ED3C67968E636\">变形</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"Skin\" </td>\n                     <td class=\"table-body\">True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#SECTION_4489477CD7BF44C2BD2ED3C67968E636\">变形</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"SmoothingGroups\" </td>\n                     <td class=\"table-body\"> True 或 False。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-146CAC45-1D4B-4F95-8EA2-7B662D6A3B30.htm#SECTION_9288D3D6DEAD49568A1F64899A66F09D\">平滑组</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"TakeCount\" </td>\n                     <td class=\"table-body\">此参数仅适用于“get”函数。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\">\"TakeIndex\" </td>\n                     <td class=\"table-body\"> 整数，范围从 1 到 FBX 中的应用的个数。此参数仅用于设置。指定应用时，用 0 指示无动画。（这是此属性的默认值。）用 1 指示 FBX 文件中的第一个应用，用 2 指示第二个应用，依此类推。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-A4BE0193-F0A2-4249-AE91-994904FC8878.htm#GUID-EE994C63-F546-4776-97DF-27EF881B3785\">动画应用</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\">\"UpAxis\" </td>\n                     <td class=\"table-body\">“Y”或“Z”。有关此设置的说明，请参见<span class=\"char_link\"><a href=\"GUID-DB504E29-7782-428D-8C2D-2D2F3080547F.htm\">轴转化</a></span>。 \n                        				  \n                     </td>\n                  </tr>\n               </table>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";