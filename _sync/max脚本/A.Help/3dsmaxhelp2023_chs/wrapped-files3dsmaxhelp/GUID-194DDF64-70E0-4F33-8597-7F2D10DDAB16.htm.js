var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-194DDF64-70E0-4F33-8597-7F2D10DDAB16\">\n      <meta name=\"description\" content=\"渲染操作符提供渲染粒子的有关控制。您可以指定渲染粒子所采用的形式以及出于渲染目的将粒子转换为单个网格对象的方式。\">\n      <meta name=\"indexterm\" content=\"转换为网格\">\n      <meta name=\"indexterm\" content=\"网格转换\">\n      <meta name=\"indexterm\" content=\"粒子: 渲染为\">\n      <meta name=\"indexterm\" content=\"渲染: 渲染操作符（粒子流）\">\n      <meta name=\"indexterm\" content=\"渲染: 渲染操作符（粒子流）\">\n      <meta name=\"indexterm\" content=\"粒子流操作符: 渲染\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>渲染操作符</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-194DDF64-70E0-4F33-8597-7F2D10DDAB16\"></a><div class=\"head\">\n            <h1>渲染操作符</h1>\n         </div>\n         <p class=\"blurb\">渲染操作符提供渲染粒子的有关控制。您可以指定渲染粒子所采用的形式以及出于渲染目的将粒子转换为单个网格对象的方式。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"GUID-F9B260CE-6A36-47B0-B36B-EA35F1D1821D\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-2E4FEAAC-295B-4E12-B941-578AA2EACC8D\">“粒子视图” <img src=\"../images/ac.menuaro.gif\">  在某个事件中单击“渲染”操作符，或者将“渲染”操作符添加到粒子系统中，然后选择它。</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60FB\"></a> \n               <h2><a name=\"GUID-33BDF9C3-25C0-4B9B-8FE6-62113ABD2D5A\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900424E2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-B67B9D1E-610F-40B2-89FA-EFF05B1F3D3D-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60FA\"></a>该用户界面出现在“粒子视图”对话框右侧的“参数”面板中。 \n                  \n               </p> <a name=\"GUID-1BBC1D21-6C41-4209-81B1-8AE767A1C805\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-63D6\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F9\"></a>类型</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-64DD\"></a> 可用于设置按照边界框或几何体渲染粒子，或者在渲染时禁用粒子系统，或者启用粒子系统但禁止将可渲染的粒子发送到 <span class=\"charspan-msgph\">3ds Max</span> 渲染器中。默认设置为“几何体”。 \n                        <a name=\"WS1A9193826455F5FFBA679E112A6A1900424E3\"></a><ul>\n                           <li> <em class=\"strong\">无</em>认为粒子系统（或事件，如果本地使用）不可渲染，从而在渲染期间不计算该粒子系统（或事件）。 \n                              	 \n                           </li>\n                           <li> <em class=\"strong\">边界框</em>粒子按照边界框进行渲染，边界框的大小表示粒子几何体的范围。 \n                              		\n                              <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F8\"></a>对于复杂粒子系统使用该选项可以加速测试渲染。 \n                                 		\n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">几何体</em>使用粒子的实际几何体进行渲染。 \n                              		\n                              <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F7\"></a>对于较简单的粒子系统使用该选项，并且可以用于最终渲染。 \n                                 		\n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">幻影</em>当需要正常使用粒子流，计算每帧动画，但不直接渲染几何体时，可以使用该选项。一个例子是使用<span class=\"char_link\"><a href=\"GUID-89DA4474-E8F4-496F-9339-305D8C8E241E.htm#GUID-95821745-BFB6-4AC1-8840-C7B97EC6504E\">“最后一步更新”脚本</a></span>将数据从粒子系统传递到场景中的其他对象的情况。 \n                              	 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-63D5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F6\"></a>可见 %</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-64DC\"></a> 渲染粒子的百分比。范围从 0 到 100。默认值＝100。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F5\"></a>降低该值可以加速对复杂粒子系统的渲染。 \n                           \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F4\"></a>渲染时还可以使用“数量倍增”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\"> <span class=\"char_link\"><a href=\"GUID-89DA4474-E8F4-496F-9339-305D8C8E241E.htm#WS1A9193826455F5FF-7C11D46C11CB8605735-6569\">“渲染设置”</a></span>减少系统中的粒子数量。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-3E963A74-3BCB-4EEC-A9EC-7363CE92F80B\"></a><p class=\"title\"><a name=\"GUID-B2F43A13-EBE0-4A31-BA37-52E55589D500\"></a>“渲染结果”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F3\"></a>这些设置确定系统将粒子转换为用于渲染的网格格式的方式。默认情况下，<span class=\"charspan-msgph\">3ds Max</span> 按照每个事件单个网格渲染所有粒子，这样在大多数情况下可以提供最有效的操作。然而，在某些情况中，需要通过选中“每个粒子一个网格”将每个粒子转换为单个网格对象。例如，如果每一粒子面数超过 10,000，那么每个粒子一个网格进行渲染最有效。另外，可以通过指定每网格的面数和粒子数将粒子合并到多个网格中。\n                     \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60F2\"></a>某些渲染器可能需要对“渲染结果”进行设置，而不使用默认值。详细信息请参见渲染器文档。 \n                     \n                  </p>\n                  <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5F9B\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>粒子流每帧可以处理的粒子数量仅受系统资源的限制，但是每一单个网格允许的最大面（或顶点）数为 5,000,000 个。如果一个网格中面（或顶点）的总数超过 5,000,000 个，则粒子流会忽略超过该限制的粒子。 \n                        \n                     </div>\n                  </div><a name=\"UL_6FAB7FF85D1B42A192378528BEE961C0\"></a><ul>\n                     <li><em class=\"strong\">单个网格</em>向渲染器发送一个包含系统中所有粒子的网格对象。 \n                        	 \n                     </li>\n                     <li><em class=\"strong\">多个网格</em>向渲染器发送指定数量的网格对象，每个网格对象包含指定数量的粒子。如果粒子总数除以“每网格粒子数”的结果小于指定的“网格数”的值，则一些网格可能不包含任何面或包含较少的面。 \n                        		\n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60EF\"></a>这是操作的折衷方法，可以用于这样的渲染器：它无法在单个网格中处理所有粒子，但是可以处理多组一定大小的粒子。 \n                           		\n                        </p> \n                        <p><a name=\"GUID-EF00F1D4-173D-4366-BA2C-E3C08D73CBDB\"></a><em class=\"strong\">网格计数</em>粒子流将发送到渲染器的网格对象的最大数量。 \n                           		\n                        </p> \n                        <p><a name=\"GUID-5D1B96E1-B137-4F6D-96A2-04ECD886B9A3\"></a><em class=\"strong\">每网格粒子数</em>每个网格对象包含的粒子数。 \n                           		\n                        </p> \n                     </li>\n                     <li><em class=\"strong\">每个粒子一个网格</em>向渲染器发送单独网格的每个粒子。 \n                        		\n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-60EB\"></a>这是操作效率最低的方法，但是某些渲染器需要这种方法。 \n                           		\n                        </p> \n                        <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5F9A\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>使用默认的扫描线渲染器时，此方法不支持渲染在开始渲染帧顺序后出生的粒子。通常，仅在渲染器要求时才使用“每个粒子一个网格”。 \n                              		\n                           </div>\n                        </div> \n                     </li>\n                  </ul>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";