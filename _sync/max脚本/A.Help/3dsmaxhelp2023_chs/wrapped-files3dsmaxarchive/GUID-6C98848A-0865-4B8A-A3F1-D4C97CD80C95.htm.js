var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-6C98848A-0865-4B8A-A3F1-D4C97CD80C95\">\n      <meta name=\"description\" content=\"“镜头效果高光”属性可用于确定应用高光的场景部分，以及应用高光的方式。\">\n      <meta name=\"indexterm\" content=\"视频后期处理过滤器: 高光属性\">\n      <meta name=\"indexterm\" content=\"视频后期处理: 高光属性\">\n      <meta name=\"indexterm\" content=\"镜头效果（视频后期处理）: 高光属性\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>高光属性</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-6C98848A-0865-4B8A-A3F1-D4C97CD80C95\"></a><div class=\"head\">\n            <h1>高光属性</h1>\n         </div>\n         <p class=\"blurb\">“镜头效果高光”属性可用于确定应用高光的场景部分，以及应用高光的方式。 </p><a name=\"UL_F432AEE1C503475D89E3D5312B8005FB\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-0EE34E40-F7AB-41B0-B6DF-D3D146011A7C\">“视频后期处理”工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-8A18F5CC-A85E-49BC-833C-1CE3F9A37C40-low.png\">（添加图像过滤器事件） <img src=\"../images/ac.menuaro.gif\">  从“过滤器插件”列表中选择“镜头效果高光” <img src=\"../images/ac.menuaro.gif\"> “设置” <img src=\"../images/ac.menuaro.gif\"> “属性”选项卡</span> \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78FD\"></a> \n            <h2><a name=\"GUID-21193789-3639-4E98-BD73-631D6C6C41A6\"></a>界面\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190044747\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0F9AA05D-E3E1-4DF5-805E-2FB457F68FAA-low.png\"></div> <a name=\"GUID-911D4CC9-51A0-40E7-8871-5D5FB8EDB350\"></a><div class=\"dl_section\"><a name=\"GUID-77F1F9B0-90D0-4028-84B3-0DEF68EDF41D\"></a><p class=\"title\"><a name=\"GUID-77175B83-19AA-4B8E-B2BC-641DFC79985A\"></a>“源”组\n               </p>\n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78FB\"></a>用于选择要应用高光的场景中的任何“G 缓冲区”数据。“镜头效果高光”通过从希望产生光晕的场景中找到源像素来开始此过程。 \n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BDB\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78FA\"></a>全部</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68D5\"></a> 可以将高光应用于整个场景，而不仅仅应用于几何体的特定部分。实际上，这使场景中的每个像素都成为一个潜在的高光源。应用高光的场景区域，由对话框的<em class=\"strong\">过滤器</em>部分的设置确定。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BDA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F9\"></a>对象 ID</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68D4\"></a> “对象 ID”可用于将高光应用于场景中具有相应 G 缓冲区（或对象）ID 的特定对象。G 缓冲区是几何体缓冲区，右键单击任意 <span class=\"charspan-msgph\">3ds Max</span> 对象，然后从菜单中选择“属性”，可以定义 G 缓冲区。然后，在“G 缓冲区 ID”控件下设置“对象通道 ID”。可以对此参数<span class=\"char_link\"><a href=\"GUID-CD33166D-40D6-4BE9-A9A0-D8A7CF7117DF.htm\">设置动画</a></span>。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F8\"></a>效果 ID</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68D3\"></a> “效果 ID”可用于将高光应用于指定了特定的“材质 ID”的对象或其中一部分。材质 ID 可用于材质编辑器。请参见 <span class=\"char_link\"><a href=\"../files3dsmaxhelp/GUID-866E101D-7974-4EBA-BF07-1D6A123C620C.htm\">G 缓冲区</a></span>。此参数可设置动画。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F7\"></a>然后，高光将仅应用于几何体中具有该特定 ID 的几何体区域。 \n                        </p> \n                        <div><a name=\"WS73099CC142F4875518DA1CE114C8D67215-796B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>在许多情况下，可能需要将不同的高光设置应用于几何体或 ID 的不同部分。要完成此项操作，请向 Video Post 队列添加“镜头效果高光”条目。然后设置每个不同的“高光”条目，以影响不同的“材质 ID”或“对象 ID”，并继续操作。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD8\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F6\"></a>非钳制</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68D2\"></a> 超亮度颜色比纯白色 (255,255,255) 要亮。<span class=\"charspan-msgph\">3ds Max</span> 跟踪这些“热”区域，通常，如果场景中包含明亮金属高光或爆炸效果，会出现此类区域。此微调器可用于确定高亮显示的最低像素值。纯白的像素值为 1。该微调器设为 1 时，任何像素值高于 255 的像素都将具有光晕。单击微调器右侧的 <em class=\"strong\">I</em> 按钮可以反转此值。此参数可设置动画。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD7\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F5\"></a>曲面法线</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68D1\"></a> 根据曲面法线到摄影机的角度，高亮显示对象的一部分。如果值为 0，则共面，即与屏幕平行。如果值为 90，则为法向，即与屏幕垂直。如果将“曲面法线”设置为 45，则只有法线角度大于 45 度的曲面会产生光晕。单击微调器右侧的 <em class=\"strong\">I</em> 按钮可以反转此值。此参数可设置动画。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD6\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F4\"></a>遮罩</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68D0\"></a> 高亮显示图像的遮罩通道。此微调器值表示“遮罩”中出现的灰度级别。设置后，“遮罩”图像大于设置值的任一部分都将在最终图像中产生光晕。单击微调器右侧的 <em class=\"strong\">I</em> 按钮可以反转此值。此参数可设置动画。范围从 0 到 255。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F3\"></a>Alpha</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68CF\"></a> 高亮显示图像的 Alpha 通道。Alpha 通道的透明度的定义与“遮罩”通道透明度相反。值的范围可以从 0 至 255。单击微调器右侧的 <em class=\"strong\">I</em> 按钮可以反转此参数，也可以对此参数设置动画。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F2\"></a>Z 缓冲区高和 Z 缓冲区低</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68CE\"></a> 根据对象到摄影机的距离（“Z 缓冲区”距离），高亮显示对象。高值为最大距离，低值为最小距离。这两个 Z 缓冲区距离之间的任何对象均将高亮显示。此参数可设置动画。 \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-10ED69D4-71E7-42D9-8DC5-A5D775644837\"></a><p class=\"title\"><a name=\"GUID-A217C970-30E3-4F76-AFF1-E672715162E0\"></a>“过滤器”组\n               </p>\n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F1\"></a>过滤“源”选择以控制应用高光的方式。例如，在场景中有十个球体，每个球体的对象 ID 相同，但是颜色不同。如果将源设置为这些球体的“对象 ID”（选定所有球体），则此为场景中“光晕”应用效果的唯一位置。 \n               </p>\n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78F0\"></a>但是，由于“高光”知道了<em class=\"mild\">可以</em> 高亮显示的像素所在的位置，所以还需要知道哪些像素实际应用高光。“高光”使用过滤器控件找到要应用高光的源像素。 \n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78EF\"></a>全部</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68CD\"></a> 选择场景中的所有源像素，并将高光应用于这些像素上。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78EE\"></a>边缘</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68CC\"></a> 选择所有沿边界的源像素，并对这些像素应用高光。沿对象边应用高光会在对象内、外边上生成柔和的光晕。 <a name=\"WS1A9193826455F5FFBA679E112A6A19004474A\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-278D7A0E-940B-4757-8E9B-AD66BA84080F-low.png\"><p class=\"figure-title\">边高亮显示</p>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78ED\"></a>周界 Alpha</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68CB\"></a> 根据对象的 Alpha 通道，将高光仅应用于此对象的周界。选择此选项仅使对象的外部高亮显示，而内部没有任何变化。然而，按<em class=\"strong\">边</em>高亮显示会在对象上生成斑点，“周界 Alpha”可以保证所有边清洁，因为“周界 Alpha”利用场景的 Alpha 通道实现其效果。 <a name=\"WS1A9193826455F5FFBA679E112A6A19004474B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5EC87229-A3B1-414C-A60A-37A82775552F-low.png\"><p class=\"figure-title\">周界 Alpha 高亮显示</p>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BD0\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78EC\"></a>周界</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68CA\"></a> 根据“边”推论，将高光效果仅应用于对象的周界。虽然不像“周界 Alpha”那样精确，但在 Alpha 通道不可用时，可能需要使用“周界”选项。 <a name=\"WS1A9193826455F5FFBA679E112A6A19004474C\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F25A8327-F403-4ADB-BC26-43C410B02D4D-low.png\"><p class=\"figure-title\">周界高亮显示</p>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BCF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78EB\"></a>亮度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68C9\"></a> 根据源对象的亮度值过滤源对象。只选定亮度值高于微调器设置的对象，并高亮显示。单击微调器旁边的 <em class=\"strong\">I</em> 按钮可以反转此选项。此参数可设置动画。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7BCE\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-78EA\"></a>色调</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-68C8\"></a> 按色调过滤源对象。单击微调器旁边的色样可以选择色调。可选的色调值为 0 到 255。“色调”色样旁边的微调器可用于输入变化级别，从而使光晕能够在与选定颜色相同的范围内找到几种不同的色调。此参数可设置动画。 \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";