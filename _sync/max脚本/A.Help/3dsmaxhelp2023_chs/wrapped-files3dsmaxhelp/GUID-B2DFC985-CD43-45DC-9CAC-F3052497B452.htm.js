var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-B2DFC985-CD43-45DC-9CAC-F3052497B452\">\n      <meta name=\"description\" content=\"“图形实例”允许将场景中的任一参考对象用作粒子。\">\n      <meta name=\"indexterm\" content=\"粒子流操作符: 图形实例\">\n      <meta name=\"indexterm\" content=\"粒子: 几何体类型\">\n      <meta name=\"indexterm\" content=\"粒子: 方向\">\n      <meta name=\"indexterm\" content=\"图形操作符（粒子流）: 图形实例\">\n      <meta name=\"indexterm\" content=\"实例: 图形实例操作符（粒子流）\">\n      <meta name=\"indexterm\" content=\"参考对象\">\n      <meta name=\"indexterm\" content=\"设置动画: 参考对象（粒子流）\">\n      <meta name=\"indexterm\" content=\"更新: 粒子图形\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>“图形实例”操作符</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-B2DFC985-CD43-45DC-9CAC-F3052497B452\"></a><div class=\"head\">\n            <h1> “图形实例”操作符</h1>\n         </div>\n         <p class=\"blurb\">“图形实例”允许将场景中的任一<span class=\"char_link\"><a href=\"GUID-180AB5ED-30A7-4D88-9F64-0C1C9528F82E.htm\">参考对象</a></span>用作粒子。 \n            \n         </p>\n         <div class=\"bodyReference\"><a name=\"GUID-8F446B14-AE85-427A-B156-8765A86AF5CC\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-6A8C1B18-5F5D-419A-B3BA-8E46920E4C38\">粒子视图  <img src=\"../images/ac.menuaro.gif\">  在某个事件中打击“图形实例”，或将“图形实例”操作符添加到粒子系统，然后选择它。</span> \n               </li>\n            </ul>\n            <p><a name=\"GUID-B640D232-A01B-43FC-81D4-42FA8F5CC401\"></a>只能为每个事件定义一个有效参考对象，但此对象可以包含任意数量的子对象，“粒子流”可以将其中每个子对象作为单独粒子。此外，如果使用测试，可以将粒子流拆分为多个分支，并为每个分支定义不同的粒子图形。 \n               \n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6228\"></a>如该操作符的名称所示，参考几何体可以实例化为粒子系统。因此，对原始几何体所做的任何物理更改都会立即反映在粒子系统中。即使隐藏了原始几何体，粒子仍会出现。但是，如果删除原始几何体，则也将删除粒子。 \n               \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004246B\"></a> \n               <h2><a name=\"GUID-DAC72F9F-53A4-4E44-8EB4-72FB93FBAF90\"></a>使用变换动画参考对象\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6227\"></a>可以通过使用修改器设置参考对象动画，然后启用“已设置动画的图形”，来创建动画粒子图形。但是，“图形实例”忽略了直接应用于此参考对象的任何旋转和位置变换，它只使用完全缩放组件。例如，如果使用“视图”参考坐标系非均匀地缩放对象，则可能使对象的图形倾斜。由于倾斜是旋转变换的副产品，因此，它不会反映在粒子的图形中。但是，修改器和包含应用于参考对象的变换的相似功能，会反映在实例粒子中。例如，如果希望粒子使用应用于参考对象的旋转变换，请使用参考对象上的“重置变换”功能。可以从“工具”面板中使用“重置变换”。\n                  \n                  \n               </p> \n               <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FBA\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>但是，当将整个层次用作单一粒子时，“粒子流”<em class=\"mild\">可以</em> 使用应用于层次中子对象的旋转和位置动画。为此，请创建一个层次，并设置子对象动画，然后指定父对象作为参考对象。不要启用“以下项的单独粒子”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“对象和子对象”。下面是演示此过程的步骤。 \n                     \n                  </div>\n               </div> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6226\"></a>当使用动画参考对象时，建议在粒子系统中将其实例化后隐藏该参考对象。 \n                  \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6222\"></a> \n               <h2><a name=\"GUID-361B3AC2-CAA3-4DC5-B19F-B24365B0814C\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004246C\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004246D\"></a>示例：在粒子系统中使用参考对象的旋转和位置动画：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建一个要用作粒子图形的对象，如茶壶和“虚拟”辅助对象。 \n                     	 \n                  </li>\n                  <li>使用“移动”和“旋转”工具为茶壶设置动画。 \n                     	 \n                  </li>\n                  <li>使用“对齐”工具将茶壶与虚拟对象中心对齐。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6221\"></a>此步骤不是必需的，但它有助于得到更一致的结果。 \n                        		\n                     </p> \n                  </li>\n                  <li>将茶壶链接为虚拟对象的子对象（从茶壶拖至虚拟对象）。 \n                     		\n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6220\"></a>可以将任一对象用作父对象，但使用没有渲染的虚拟对象，可以为最终动画中所有可见的实例粒子设置动画。 \n                        		\n                     </p> \n                  </li>\n                  <li>创建默认的“粒子流”系统。 \n                     	 \n                  </li>\n                  <li>在“粒子视图”中删除“旋转”操作符。 \n                     	 \n                  </li>\n                  <li>使用“图形实例”操作符替换“图形”操作符。 \n                     	 \n                  </li>\n                  <li>在“图形”操作符参数中，将虚拟对象指定为“粒子几何体对象”。 \n                     	 \n                  </li>\n                  <li>启用“已设置动画的图形”。 \n                     	 \n                  </li>\n                  <li>若要获得更具视觉趣味性的连续动画，请在“动画偏移关键点”中将“同步方式”设置为“粒子年龄”或“事件持续时间”。 \n                     	 \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-621F\"></a> \n               <h2><a name=\"GUID-D1442257-1E3B-4078-8A18-AD8BBBE76D08\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004246E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-CD51A62C-15DE-4750-9612-27FAEB4FA0E3-low.png\"></div>  <a name=\"GUID-CBB2DDC6-A51C-44E3-B668-BF37046A08EE\"></a><div class=\"dl_section\"><a name=\"GUID-0792528A-C079-4591-BFB5-A6063DB79498\"></a><p class=\"title\"><a name=\"GUID-9B19BD35-6E76-46FF-8205-E34577FBE076\"></a>“粒子几何体”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-621E\"></a>使用此控件可以定义要用作粒子几何体的对象。此对象名为<em class=\"mild\">参考对象</em>。 \n                     \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-645C\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-621D\"></a>[粒子几何体按钮]</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6563\"></a> 单击此按钮，然后选择场景中要用作粒子图形的几何体对象。置于可以用作参考对象的有效对象上时，鼠标光标将变为交叉图形。有效对象包括<em class=\"mild\">多图形</em>对象（如组和层次）；请参见<span class=\"char_link\"><a href=\"GUID-B2DFC985-CD43-45DC-9CAC-F3052497B452.htm#GUID-923AD68A-EEC7-4E98-B023-9BD43F26B40E\">“以下项的单独粒子”组</a></span>。 \n                           \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-621C\"></a>选取参考对象后，其名称会出现在按钮上。 \n                              \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-621B\"></a>可以将几乎所有几何体对象用作参考对象。默认情况下，操作符会通过“添充”由图形轮廓定义的区域，自动将闭合的样条线转化为渲染几何体。而要使用图形轮廓，请选择原始图形，并在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“渲染”卷展栏上启用“显示渲染网格”。不必启用“可渲染”，但对所有其他“渲染”卷展栏设置所进行的更改（如“厚度”和“边数”）都会反映在渲染粒子中。 \n                              \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-621A\"></a>“粒子流”并不自动“添充”打开的图形，如直线（非闭合）和“弧”。要在将图形用作粒子时渲染这些图形，请启用“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“渲染”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“显示渲染网格”。 \n                              \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6219\"></a>如果未定义几何体对象的“图形实例”操作符有效，且将视口显示类型设置为“几何体”，则这些粒子会出现在视口中，显示为 X 字符。 \n                              \n                           </p> \n                           <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FB9\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果用作参考对象的多图形对象包含应用或未应用材质的对象，并且启用“获取材质”，那么“粒子流”会将第一个可用的材质应用到任何未应用材质的对象中。 \n                                 \n                              </div>\n                           </div> \n                           <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FB8\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>可以将 NURBS 曲面用作参考对象，但不能将 NURBS 曲线用作参考对象。要将 NURBS 曲线用作粒子几何体，请首先使用某种方法（如封口功能）将其转化为曲面。 \n                                 \n                              </div>\n                           </div> \n                           <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FB7\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>要获得最佳结果，当使用动画参考对象时，强烈建议在渲染前隐藏原对象，或使用“对象属性”禁用其“可渲染”复选框。 \n                                 \n                              </div>\n                           </div> \n                           <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FB6\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果将组用作参考对象，请确保在选择前此组处于关闭状态。选择打开的组将只添加所单击的组成员，并不是整个组。 \n                                 \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-923AD68A-EEC7-4E98-B023-9BD43F26B40E\"></a><p class=\"title\"><a name=\"GUID-A2A030E8-4736-456F-B6B1-D5912CDDF15B\"></a>“以下项的单独粒子”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6218\"></a><span class=\"charspan-msgph\">3ds Max</span> 提供了多种方法来将不同对象合并为单个实体，包括分组、通过链接构建层次以及附加。默认情况下，当将这种<em class=\"mild\">多图形</em> 对象用作粒子几何体时，每个粒子包含所有成员对象。或者，还可以使用这些选项指示“粒子流”将每个成员对象视为单独粒子。默认情况下，当启用时，“粒子流”将每个成员对象用作单独粒子，根据其在 X 轴的位置，成员对象按从左向右的顺序排列。例如，如果在“前”视口中创建文本，并将其指定为参考几何体，并启用“对象元素”，这些文字会按正确的顺序显示。\n                     \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6217\"></a>可以通过启用<span class=\"char_link\"><a href=\"GUID-B2DFC985-CD43-45DC-9CAC-F3052497B452.htm#WSF742DAB0410631331C0DB195112A1CEB6FD-7F96\">多图形随机顺序</a></span>随机变化此顺序。 \n                     \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6216\"></a>可以启用“单独粒子”项的任一组合。默认情况下全部为禁用。 \n                     \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-645B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6215\"></a>组成员</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6562\"></a> 启用时，将组成员视为单独粒子。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-645A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6214\"></a>对象和子对象</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6561\"></a> 启用时，将链接的对象视为单独粒子。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6459\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6213\"></a>对象元素</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6560\"></a> 启用时，将单一网格对象的元素子对象视为单独粒子。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6458\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6212\"></a>顶点/面</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-655F\"></a> 显示每个粒子的顶点和三角形的数量。如果参考几何体为多图形，并且启用了“单独粒子”中的相应复选框，那么它们将显示顶点/面数的平均值。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6457\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6211\"></a>图形数</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-655E\"></a> 显示不同粒子图形的数量。此数值始终为 1，除非参考几何体为多图形并且启用了“以下项的单独粒子”组中的相应复选框，在这种情况下，会显示得到的不同图形的数量。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6456\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6210\"></a>比例 (%)</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-655D\"></a> 指定所有粒子的均匀缩放因子。范围从 0 到 100000。默认设置为启用，其值为 100。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-620F\"></a>个别处理的多图形对象成员的缩放中心取决于对象合并的方式。对于分组和链接的对象，此缩放操作围绕对象的轴点进行。对于对象元素，缩放中心就是每个对象的几何中心，即所有顶点的平均位置。 \n                           \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-620E\"></a>不能对此值设置动画。要设置粒子大小的动画，请使用<span class=\"char_link\"><a href=\"GUID-D4593D7B-86FA-40C6-A500-7855C9DDBA94.htm\">缩放操作符</a></span>。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6455\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-620D\"></a>变化 (%)</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-655C\"></a> 指定缩放变化的随机化百分比。使用“唯一性”设置更改随机化。范围为 0 至 100。默认值为 0。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-620C\"></a>不能对此值设置动画。要设置缩放变化的动画，请使用<span class=\"char_link\"><a href=\"GUID-D4593D7B-86FA-40C6-A500-7855C9DDBA94.htm\">缩放操作符</a></span>。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6454\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-620B\"></a>获取贴图</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-655B\"></a> 启用时，将来自参考对象的所有帖图数据传输给粒子。默认设置为启用。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6453\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-620A\"></a>获取材质</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-655A\"></a> 启用时，将来自参考对象的材质数据传输给粒子。默认设置为启用。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6209\"></a>如果参考对象为组，同时不同的材质应用到组成员中，那么“粒子流”会创建一个新的“多维/子对象”材质，此材质包含所有材质，并将其用作粒子材质。 \n                           \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FB5\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>由于材质在“粒子流”中是“粘滞”的，如果在指定带有附加材质的参考对象后禁用“获取材质”，那么此材质会继续应用到粒子中。若要避免将实例图形的材质应用到粒子，请在指定参考对象前禁用“获取材质”。 \n                              \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-EBC14EF9-C53B-493C-823B-D69D150E9C52\"></a><span class=\"term\"><a name=\"GUID-88EA93DD-6004-417A-90C2-31ABB89096F8\"></a> 子材质 ID 偏移</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-CA0F89C8-ECB6-4066-A49C-95D8C64C9D56\"></a>将<span class=\"char_link\"><a href=\"GUID-D3AC022F-B6F6-4C99-A2AE-06D35AF3F0A6.htm\">材质继承</a></span>与多维/子对象材质一起使用时，“图形实例”操作符会将此值添加到“材质 ID”值以创建子材质 ID。粒子流将使用此 ID 根据材质中的子材质 ID 确定继承材质中的哪些子材质，然后将这些子材质应用于其事件中的粒子。\n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6452\"></a><span class=\"term\"><a name=\"WSF742DAB0410631331C0DB195112A1CEB6FD-7F96\"></a>多图形随机顺序</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6559\"></a> 启用时，按随机顺序将图形指定到粒子。禁用时，“粒子流”按图形的 X 坐标的顺序将多图形对象中的每个图形当作单一粒子发射。换句话说，首先发射具有最低 X 轴坐标的图形，然后发射具有次高 X 轴坐标的图形，以此类推。仅当“以下项的单独粒子”组中至少有一个复选框启用时，该选项才可用。默认设置为禁用状态。\n                        \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6208\"></a>例如，如果希望这些粒子拼出单词或短语，请将在“前”视口中创建的挤出文本用作参考对象，启用“以下项的单独粒子”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“组元素”，但使多图形随机顺序处于禁用状态。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6451\"></a><span class=\"term\"><a name=\"WSF742DAB0410631331C0DB195112A1CEB6FD-7F95\"></a>已设置动画的图形</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6558\"></a> 启用时，粒子使用参考对象中的任一动画，包括用“参数曲线超出范围类型”控件应用的循环动画。禁用时，不对粒子设置动画。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6207\"></a>通过此选项，可以使用“动画偏移关键点”控件来指定使参考对象动画和粒子同步的方式。请参见下一部分。 \n                           \n                        </p> \n                        <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5FB4\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>仅当事件包含“图形实例”操作符时，才可以为使用此选项的粒子设置动画。如果粒子移动至不包含图形操作符的另一事件，那么此粒子会保持相同的图形，但动画会停止。使动画在从一个事件移动到其他事件后继续的最简单方法是，将“图形实例”操作符放置在<span class=\"char_link\"><a href=\"GUID-8D6E4ECF-8B0C-427C-8B68-245CD61FA345.htm\">全局事件</a></span>中。否则，需要将此操作符放置在将要对其粒子设置动画的每个事件中。 \n                              \n                           </div>\n                        </div> \n                        <div><a name=\"NOTE_B31053B3B33C4962B1A19988DB8D4FAB\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 除非启用“已设置动画的图形”或“获取当前图形”，否则多维材质可能无法正确显示。 \n                              \n                           </div>\n                        </div>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-0E68B3A4-4640-4E13-9CBE-7DA7A1F7A63C\"></a><span class=\"term\"><a name=\"GUID-D177941A-CC70-4C51-8BC9-1EB3E30262F2\"></a>快速图形评估</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-A7A111AA-671C-4E67-B541-2C5429F55520\"></a>启用时，只需通过在最终的积分步长评估粒子图形，此选项便可加速执行“图形实例”操作符。这类似于“输出”子操作符的“历史依赖型”选项。 \n                        \n                        <p><a name=\"GUID-8319314D-F726-4DEF-943C-FAC8FE4F3C2D\"></a>可以通过示例场景 <span class=\"filePath\">SpidersForCaching.max</span> 了解此选项的工作方式。分别比较启用和禁用该选项时，在视口中从第一个帧切换到最后一帧所用的时间。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-6450\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6206\"></a>获取当前图形</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6557\"></a> 启用时，当每个粒子进入事件时，“粒子流”从参考对象中获得粒子图形。这样，如果已对此参考对象设置动画，那么在不同时间进入的粒子会得到不同的图形。然而，不能对这些图形设置动画。当禁用此选项时，可以从第 0 帧获得此图形。默认设置为禁用状态。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6205\"></a>仅当“已设置动画的图形”处于禁用状态时可用。 \n                           \n                        </p> \n                        <div><a name=\"NOTE_05F759B5A4BA49818775EA98F1602A68\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> 除非启用“获取当前图形”或“已设置动画的图形”，否则多维材质可能无法正确显示。 \n                              \n                           </div>\n                        </div>\n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-6E732F94-4549-4C93-B07D-BC3E52B6CC15\"></a><p class=\"title\"><a name=\"GUID-6AB899E8-1ED3-4B25-9077-761E57C649D7\"></a>“动画偏移关键点”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6204\"></a>仅当“已设置动画的图形”处于启用状态时，以下控件可用。 \n                     \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-644F\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6203\"></a>同步方式</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6556\"></a> 可用于选择使参考对象动画和粒子同步的方式。 \n                           <a name=\"WS1A9193826455F5FFBA679E112A6A190042472\"></a><ul>\n                              <li><em class=\"strong\">绝对时间</em>在任一指定时间，所有粒子都拥有相同的图形。 \n                                 	 \n                              </li>\n                              <li><em class=\"strong\">粒子年龄</em>使参考对象动画与粒子年龄同步：参考对象动画的帧 0 对应于每个粒子的出生帧。 \n                                 	 \n                              </li>\n                              <li><em class=\"strong\">事件持续时间</em>参考对象动画的帧 0 对应于粒子进入事件的时间。 \n                                 	 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-644E\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6202\"></a>随机偏移</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6555\"></a> 启用时，随机变化每个粒子动画的开始。使用此数值设置来指定帧数，根据此帧数可以变化动画的开始。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div> <a name=\"GUID-143D619E-4BB5-4F03-8AAF-F103CEBA2F8C\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-644D\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6201\"></a>更新粒子图形</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6554\"></a> 从参考对象中刷新实例粒子图形。在分级参考对象中，更改对象后使用此选项。 \n                        \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6200\"></a>在多数情况下，当对参考对象进行更改时，“流子流”会自动升级实例粒子。然而，在某些情况下，当更改深层次中的对象时，可能不会更新此粒子实例。在这种情况下，单击“更新粒子图形”可以刷新实例。 \n                           \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-C4DD0D53-0C18-46DD-95D9-F906B7CA2AD5\"></a><p class=\"title\"><a name=\"GUID-A3A0E7D8-41B0-4004-A38E-443251ED3D4F\"></a>“唯一性”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-61FF\"></a>“唯一性”设置可用于更改缩放变化、动画偏移和多图形随机顺序的随机性。 \n                     \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-644C\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-61FE\"></a>种子</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6553\"></a> 指定随机化值。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-644B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-61FD\"></a>新增特性</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6552\"></a> 使用随机化公式计算新种子。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"related-links\">\n            <h4 class=\"related\">\n               <p class=\"title\"><a name=\"GUID-C0A33E4A-5394-4647-8092-B09886DB7F5D\"></a>相关信息\n               </p>\n            </h4>\n            <ul>\n               <li><span class=\"char_link\"><a href=\"GUID-74D532DF-2F7A-46E0-BA4B-2FC5CC975BC6.htm\">图形操作符 \n                        		</a></span></li>\n               <li><span class=\"char_link\"><a href=\"GUID-ED7A1417-1BFC-4ED6-88C7-2C0725A50FDD.htm\">图形朝向操作符 \n                        		</a></span></li>\n               <li><span class=\"char_link\"><a href=\"GUID-E585C814-DC0E-4126-9636-9DCA841DAC20.htm\">图形标记操作符 \n                        		</a></span></li>\n            </ul>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";