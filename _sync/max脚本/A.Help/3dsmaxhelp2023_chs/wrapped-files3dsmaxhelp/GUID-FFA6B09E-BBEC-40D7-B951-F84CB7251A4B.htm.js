var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-FFA6B09E-BBEC-40D7-B951-F84CB7251A4B\">\n      <meta name=\"description\" content=\"使用“可渲染样条线”修改器可以设置样条线对象的可渲染属性，而无需将对象转换为可编辑的样条线。从 AutoCAD 中链接的样条线，该选项特别有用。也可以将相同的渲染属性同时应用于多条样条线。\">\n      <meta name=\"indexterm\" content=\"可渲染样条线修改器\">\n      <meta name=\"indexterm\" content=\"修改器: 可渲染样条线\">\n      <meta name=\"indexterm\" content=\"对象空间修改器: 可渲染样条线\">\n      <meta name=\"contextid\" content=\"RENDERABLESPLINE.MODIFIERS\">\n      <meta name=\"contextid\" content=\"MODIFIERS-RENDERABLESPLINE\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>可渲染样条线修改器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-FFA6B09E-BBEC-40D7-B951-F84CB7251A4B\"></a><div class=\"head\">\n            <h1>可渲染样条线修改器</h1>\n         </div>\n         <p class=\"blurb\">使用“可渲染样条线”修改器可以设置样条线对象的可渲染属性，而无需将对象转换为可编辑的样条线。从 AutoCAD 中链接的样条线，该选项特别有用。也可以将相同的渲染属性同时应用于多条样条线。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"UL_D46F88101E64400690A31686EF6185D7\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-FF9855D4-0220-4F76-B38E-D00F94A0A069\">选择一个图形。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “修改器列表” <img src=\"../images/ac.menuaro.gif\"> “可渲染样条线”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-6D30CFF4-5626-4251-84DD-1965DA70D089\">选择一个图形。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “面片/样条线编辑” <img src=\"../images/ac.menuaro.gif\"> “可渲染样条线修改器”</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-D94B8DC4-040B-4DA3-9A87-84473E8E1375\">选择一个图形。 <img src=\"../images/ac.menuaro.gif\"> “修改器”菜单  <img src=\"../images/ac.menuaro.gif\"> “样条线” <img src=\"../images/ac.menuaro.gif\"> “可渲染样条线修改器”</span> \n               </li>\n            </ul>\n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9E6\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>该修改器不能应用于 NURBS 曲线。 \n                  \n               </div>\n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2941\"></a> \n               <h2><a name=\"GUID-2344FD71-843B-4707-9E2D-27B835363C48\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190043A88\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9B8C59B7-A88D-496D-9BCF-A48455FD7FA6-low.png\"></div>  <a name=\"GUID-342CCED2-C5BD-424E-B630-7F8BF216DAED\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A03\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CF2\"></a>在渲染器中启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C62\"></a> 启用该选项后，使用为渲染器设置的径向或矩形参数将图形渲染为 3D 网格。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A02\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CF1\"></a>在视口中启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C61\"></a> 启用该选项后，使用为渲染器设置的径向或矩形参数将图形作为 3D 网格显示在视口中。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A01\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CF0\"></a>使用视口设置</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C60\"></a> 可以为视口显示和渲染设置不同的参数，并显示视口中“视口”设置所生成的网格。只有启用“在视口中启用”时，此选项才可用。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-7A00\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CEF\"></a>生成贴图坐标</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C5F\"></a> 启用此项可应用贴图坐标。默认设置为禁用。 \n                        \n                        <p><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CEE\"></a> <span class=\"charspan-msgph\">3ds Max</span> 在 U 向维度和 V 向维度中生成贴图坐标。U 坐标围绕样条线包裹一次；V 坐标沿其长度贴图一次。平铺是使用应用材质的“平铺”参数所获得的。有关详细信息，请参见<span class=\"char_link\"><a href=\"GUID-8D4509A6-0C08-4E7F-A459-BE60959E57DE.htm\">贴图坐标</a></span>。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-79FF\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CED\"></a> 真实世界贴图大小</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C5E\"></a> 控制应用于该对象的纹理贴图材质所使用的缩放方法。缩放值由位于应用材质的<span class=\"char_link\"><a href=\"GUID-8AE3643F-BDB4-498B-B220-92646FC8A562.htm\">“坐标”卷展栏</a></span>中的“使用真实世界比例”设置控制。默认设置为启用。 \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-E7558A57-55E8-4AC3-A0B3-1E208DB5895D\"></a><p class=\"title\"><a name=\"GUID-1D87F78B-565E-43C6-8C4D-E8B60B80BF1D\"></a>“视口”/“渲染器”组\n                  </p><a name=\"UL_80533CA7C49F428081D41D863C964C95\"></a><ul>\n                     <li><em class=\"strong\">视口</em>选择该选项为该图形指定径向或矩形参数，当启用“在视口中启用”时，它将显示在视口中。只有启用“使用视口设置”时，此选项才可用。 \n                        	 \n                     </li>\n                     <li><em class=\"strong\">渲染器</em>选择启用该选项为该图形指定径向或矩形参数，当启用“在视口中启用”时，渲染或查看后它将显示在视口中。 \n                        	 \n                     </li>\n                  </ul>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-79FC\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CEA\"></a>径向</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C5B\"></a> 当 3D 对象具有环形横截面时，显示样条线。 \n                           <a name=\"WS1A9193826455F5FFBA679E112A6A190043A89\"></a><ul>\n                              <li> <em class=\"strong\">厚度</em>指定横截面直径。默认值为 1.0。范围为 0.0 至 100,000,000.0。 \n                                 	 \n                              </li>\n                              <li> <em class=\"strong\">边</em>在视口或渲染器中为样条线网格设置边数。例如，值为 4 表示一个方形横截面。 \n                                 	 \n                              </li>\n                              <li> <em class=\"strong\">角度</em>调整视口或渲染器中横截面的旋转位置。例如，如果您拥有方形横截面，则可以使用“角度”将“平面”定位为面朝下。 \n                                 	 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-79FB\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CE9\"></a> 矩形</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C5A\"></a> 当 3D 对象具有矩形横截面时，显示样条线。 \n                           <a name=\"WS1A9193826455F5FFBA679E112A6A190043A8A\"></a><ul>\n                              <li> <em class=\"strong\">长度</em>指定沿本地 <em class=\"mild\">Y</em> 轴横截面的大小。 \n                                 	 \n                              </li>\n                              <li> <em class=\"strong\">宽度</em>指定沿本地 <em class=\"mild\">X</em> 轴横截面的大小。 \n                                 	 \n                              </li>\n                              <li> <em class=\"strong\">角度</em>调整视口或渲染器中横截面的旋转位置。例如，如果拥有方形横截面，则可以使用“角度”将“平面”定位为面朝下。 \n                                 	 \n                              </li>\n                              <li> <em class=\"strong\">纵横比</em>设置矩形横截面的纵横比。通过“锁定”复选框可以锁定纵横比。启用“锁定”之后，将宽度锁定为宽度与深度之比为恒定比率的深度。 \n                                 	 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-79FA\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CE8\"></a> 自动平滑</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C59\"></a> 启用之后，使用“阈值”设置指定的平滑角度自动平滑样条线。“自动平滑”基于样条线分段之间的角度设置平滑。如果它们之间的角度小于阈值角度，则可以将任何两个相接的分段放到相同的平滑组中。 \n                        \n                        <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E9E7\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>对每种情况启用“自动平滑”并不总是能够获得最佳平滑质量。有必要更改阈值角度或禁用“自动平滑”可能产生最佳效果。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-6672057A11CE3B1F807-79F9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875514C01AC112A7ACEF16-3CE7\"></a> 阈值</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E1D0EC60D-7C58\"></a> 以度数为单位指定阈值角度。如果它们之间的角度小于阈值角度，则可以将任何两个相接的样条线分段放到相同的平滑组中。 \n                     </div>\n                  </dd>\n                  <dt><span class=\"term\"> \n                        扭曲校正</span></dt>\n                  <dd>\n                     <div class=\"definition\">如果启用，则在调整闭合样条线上的 Bezier 控制柄后，将校正第一个顶点与最后一个顶点之间创建的任何扭曲。</div>\n                  </dd>\n                  <dt><span class=\"term\">封口</span></dt>\n                  <dd>\n                     <div class=\"definition\">对可渲染样条线启用封口。当此选项处于禁用状态时，样条线的末端将没有封口。</div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\">\n                  <p>“封口选项”组 \n                     \n                  </p>\n                  <dl>\n                     <dt><span class=\"term\">四边形封口</span></dt>\n                     <dd>\n                        <div class=\"definition\">启用四边形封口以便为 OpenSubdiv、涡轮平滑和网格平滑之类的操作创建更加清晰的结果。</div>\n                     </dd>\n                     <dt><span class=\"term\">分段</span></dt>\n                     <dd>\n                        <div class=\"definition\">设置每个封口中的分段数。</div>\n                     </dd>\n                     <dt><span class=\"term\">球体</span></dt>\n                     <dd>\n                        <div class=\"definition\">逐渐圆化封口。分段越多，结果越平滑。设置为 1 时将创建完整的半球，设置为 0 时将创建平面封口。</div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-AE5B3E67-8197-4753-ABBE-1A005B5FF91B.htm\">样条线重叠修改器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-B6267DE5-CAD8-4F78-A9A2-A801A791C16C.htm\">规格化样条线修改器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-5B5552A2-3555-4224-9A38-F04FDB8DA05C.htm\">徒手</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";