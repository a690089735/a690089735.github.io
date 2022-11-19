var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-8F00AF71-957F-4AC3-BCFE-AF7CB6545347\">\n      <meta name=\"description\" content=\"Civil View 仅使用自由摄影机，并通过能够轻松创建穿越动画的方式管理这些摄影机。\">\n      <meta name=\"indexterm\" content=\"Civil View: 对象库: 摄影机\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>摄影机库</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-8F00AF71-957F-4AC3-BCFE-AF7CB6545347\"></a><div class=\"head\">\n            <h1>摄影机库</h1>\n         </div>\n         <p class=\"blurb\">Civil View 仅使用<span class=\"char_link\"><a href=\"GUID-23F7F6D9-09A9-47D7-BCBC-759B464F5367.htm\">自由摄影机</a></span>，并通过能够轻松创建穿越动画的方式管理这些摄影机。 \n         </p>\n         <p><a name=\"GUID-AD28D86A-F2F3-47A1-8C39-2D7A400B2A72\"></a> <span class=\"char_link\"><a href=\"GUID-8B278D6D-2267-4D69-9EF8-1E682A15A200.htm\">对象放置样式编辑器</a></span>不预览摄影机对象。 \n         </p>\n         <div class=\"section\"><a name=\"GUID-D65D709A-00C0-480F-B79B-5EB08C48575D\"></a> \n            <h2><a name=\"GUID-F3BDBA8B-8CB9-4156-A522-7E29CB46747E\"></a>对象 INI 文件结构\n            </h2> <a name=\"TABLE_A48C900D7FFE4E4A8941072CED3029E4\"></a><div class=\"table-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n                  <colgroup>\n                     <col>\n                  </colgroup>\n                  <tr class=\"ruled-odd-row\">\n                     <td class=\"table-body\"> <a name=\"GUID-BE4AFDDF-663C-4592-B0DD-E412C05CE43A\"></a><p class=\"table-body\">摄影机对象 INI 文件 </p> \n                     </td>\n                  </tr>\n                  <tr class=\"ruled-even-row\">\n                     <td class=\"table-body\"> <a name=\"GUID-B4780662-0967-4BE0-8B3D-EAE714064FCB\"></a><p class=\"table-body\">[参数] </p> <a name=\"GUID-1099B94E-02FA-4BD8-B517-98D41EA7CA4E\"></a><p class=\"table-body\">Lens= </p> <a name=\"GUID-A35EEA7F-B3F4-4040-A584-417CA56D0F3C\"></a><p class=\"table-body\">EnvironmentNear= </p> <a name=\"GUID-DACE3258-E242-492A-B410-B1A2F3199410\"></a><p class=\"table-body\">EnvironmentFar= </p> <a name=\"GUID-43F41B4C-6487-4CB4-AE1C-13D50EC5F6EC\"></a><p class=\"table-body\">TargetLength= </p> <a name=\"GUID-F44AA624-B0AC-4ED7-8E91-B9A08045F831\"></a><p class=\"table-body\">&nbsp; </p> <a name=\"GUID-B02EF839-37A3-41B4-9513-C8661403F1FF\"></a><p class=\"table-body\">[组] </p> <a name=\"GUID-BF69FBA2-3BC6-421E-8844-D07757A561CE\"></a><p class=\"table-body\">名称= </p> <a name=\"GUID-12A8F5C5-F87E-484D-BEC3-FDAF71BEB336\"></a><p class=\"table-body\">&nbsp; </p> \n                     </td>\n                  </tr>\n               </table>\n            </div> <a name=\"GUID-581BC4A6-6229-4652-978D-8207EEDC2B4B\"></a><div class=\"dl_section\"><a name=\"GUID-125DD529-D8AB-4449-B2BB-56878A5BD753\"></a><p class=\"title\"><a name=\"GUID-7631CFB6-62AA-4BA3-876E-405A34036D62\"></a>[参数]\n               </p>\n               <dl>\n                  <dt><a name=\"GUID-2C511EA5-4E4B-4319-8614-7FD398D02E61\"></a><span class=\"term\"><a name=\"GUID-848F8BFE-5CF8-4E1A-B155-AD2FD065C2F8\"></a>Lens</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-6BDEC96C-012E-447C-A087-12EBDB6C028E\"></a>设定摄影机的镜头大小。该值必须是介于 1 到 9 之间的数字，每个数字对应以下备用镜头： <a name=\"UL_5ADE73D44461460DA6F930EE24C1F466\"></a><ul>\n                           <li> 1：15mm 镜头 </li>\n                           <li> 2：20mm 镜头 </li>\n                           <li> 3：24mm 镜头 </li>\n                           <li> 4：28mm 镜头 </li>\n                           <li> 5：35mm 镜头 </li>\n                           <li> 6：50mm 镜头（标准镜头大小） </li>\n                           <li> 7：85mm 镜头 </li>\n                           <li> 8：135mm 镜头 </li>\n                           <li> 9：200mm 镜头 </li>\n                        </ul>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-4E34048E-3FCC-4E7B-8D1A-E6CF8A219DB3\"></a><span class=\"term\"><a name=\"GUID-88BFA7BB-51A3-4FB2-A7AF-BBB49C1D51B3\"></a>EnvironmentNear</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-D796678F-22F9-40E6-B5B2-AFD38AC71A89\"></a> \n                        <p><a name=\"GUID-9A10C324-A0CC-4969-AF55-D2297306E0F6\"></a>为大气效果（例如雾）设定近距范围限制。 \n                        </p> \n                        <p><a name=\"GUID-099F7441-C321-4532-931F-23DFEDCE597A\"></a>近距和远距限制之间的对象在 <span class=\"char_link\"><a href=\"GUID-485DD757-EB38-41D9-8747-9669C68E2CC9.htm\">Civil View“雾参数”面板</a></span>中所定义的“远距数量比例”和“近距数量比例”值之间衰减。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-ECC79527-8F62-43B8-AF6C-CB1E3BEF50AE\"></a><span class=\"term\"><a name=\"GUID-550BC385-C99A-4067-AC53-425C8E469130\"></a>EnvironmentFar</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-F7286AF5-DDD2-466B-AED4-9FE7EECCAEC1\"></a>为大气效果（例如雾）设定远距范围限制。 \n                        <p><a name=\"GUID-1F23259C-6DE3-4FC9-B395-20162B8E011A\"></a>近距和远距限制之间的对象在 <span class=\"char_link\"><a href=\"GUID-485DD757-EB38-41D9-8747-9669C68E2CC9.htm\">Civil View“雾参数”面板</a></span>中所定义的“远距数量比例”和“近距数量比例”值之间衰减。 \n                        </p>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-432A93BD-DEC4-4292-8948-A6843AB53926\"></a><span class=\"term\"><a name=\"GUID-9F41AA59-DC7F-4A21-A232-9D0426A28A6E\"></a>TargetLength</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-5A7ED24A-4DBA-437F-A3F0-4FC6B04C5928\"></a>设定到摄影机所对准的空间某点的距离。 \n                        <p><a name=\"GUID-53607C53-7170-4360-947A-B68B3B900144\"></a>此距离可能是一个重要因素，具体取决于父<span class=\"char_link\"><a href=\"GUID-BC4AA02F-A966-4444-A645-ED63B9E0BD45.htm\">图形</a></span>的几何体。 \n                        </p> \n                        <p><a name=\"GUID-A98EE8D4-ED0C-48A1-88E2-3338D5EB8949\"></a>通过创建具有不同 TargetLength 值的不同 INI 文件，可以提供包含不同目标距离的选择集。或者，创建摄影机后，可以更改此值，甚或从<span class=\"char_link\"><a href=\"GUID-452FE4B1-EB81-43ED-8B04-2D716BEFB890.htm\">“Civil View 浏览器”面板</a></span>中为其设置动画。 \n                        </p> \n                        <div><a name=\"GUID-603AF5A7-4141-419E-A70E-A5DFB0548035\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果指定的 TargetLength 大于父图形的长度，Civil View 将相应地截断此值。 \n                           </div>\n                        </div>\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-1D50D530-5A16-42F2-B51B-A69A0319E4AE\"></a><p class=\"title\"><a name=\"GUID-6E6A74D8-B346-4D23-B518-F71CCD04C2CF\"></a>[组]\n               </p>\n               <dl>\n                  <dt><a name=\"GUID-A50B4832-81B8-4175-88CD-FFC492A52654\"></a><span class=\"term\"><a name=\"GUID-B51844FA-B38D-4AA6-8A68-55FF2FB5C688\"></a>名称</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-1B5F58D2-E798-4FC6-B727-8B81505F5ED0\"></a>应该在其中列出该对象的类别子组的名称。如果未指定名称，则对象将以未分组的状态列出。 \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"GUID-553CCB0D-7EA2-4AFE-9861-296BC96818F8\"></a> \n            <h2><a name=\"GUID-0B188F38-996C-4CD8-B1F2-8F6BFE8E342D\"></a>将自定义摄影机添加到库中\n            </h2> \n            <p><a name=\"GUID-80592797-B828-4CBE-A984-2943FC1ED5C8\"></a>以上述格式创建一个 INI 文件，并将其添加到任何当前 Civil View 资源工具包的 <em class=\"mild\"> <span class=\"filePath\">/objlibs/cameras</span> </em> 文件夹中。（因为 3ds Max 提供摄影机，因此您只需进行这些操作。） \n            </p> \n            <p><a name=\"GUID-CB90ECFC-70D8-4779-A28E-9F0B231945E6\"></a>另请参见 <span class=\"char_link\"><a href=\"GUID-F8CCF537-1A83-47FC-B0D5-8A55720DE30F.htm\">Civil View 对象库概述</a></span>中有关对象库自定义的常规说明。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";