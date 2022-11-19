var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-6ECCEFA6-10B0-4858-8B5B-E33594CAFE53\">\n      <meta name=\"description\" content=\"“繁殖”使用现有粒子创建新粒子。每个繁殖的粒子在其父粒子的位置生成，方向和形状也相同。“繁殖”可以为繁殖的粒子指定不同的速度和比例因子。如果将“繁殖”测试与另一事件关联，繁殖的粒子将发送给该事件，在其中可以为新粒子指定不同属性。\">\n      <meta name=\"indexterm\" content=\"繁殖粒子\">\n      <meta name=\"indexterm\" content=\"粒子流测试: 繁殖\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 繁殖\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>繁殖测试</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-6ECCEFA6-10B0-4858-8B5B-E33594CAFE53\"></a><div class=\"head\">\n            <h1>繁殖测试</h1>\n         </div>\n         <p class=\"blurb\">“繁殖”使用现有粒子创建新粒子。每个繁殖的粒子在其父粒子的位置生成，方向和形状也相同。“繁殖”可以为繁殖的粒子指定不同的速度和比例因子。如果将“繁殖”测试与另一事件关联，繁殖的粒子将发送给该事件，在其中可以为新粒子指定不同属性。 </p>\n         <div class=\"bodyReference\"><a name=\"GUID-B4CE1951-06B3-4122-9664-63EFDC66B8CC\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-8396299A-92A9-4BEA-81A4-8A294A18A62F\">“粒子视图” <img src=\"../images/ac.menuaro.gif\">  在某个事件中单击“繁殖”，或将“繁殖”添加到粒子系统中，然后选择它。</span> \n               </li>\n            </ul>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FD7\"></a>“繁殖”只是一种测试，因为它将繁殖的粒子发送给另一个事件（如果关联）；不会实际测试任何属性。所有遇到“繁殖”测试的粒子会立即受到该测试的影响。因此，如果希望粒子根据测试结果进行繁殖，应使用其他分支到包含“繁殖”的事件的测试。此时，可能需要将繁殖的粒子发送给另一个事件，否则，粒子将不断重新繁殖。或者，要在碰撞后繁殖粒子，请使用<span class=\"char_link\"><a href=\"GUID-23F1A72A-6BA8-4B98-8DF4-33024D65517F.htm\">碰撞繁殖测试</a></span>。 \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FD5\"></a> \n               <h2><a name=\"GUID-CCEF7C65-114A-41A5-99CC-AC0493E47D17\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A190042561\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-BA242347-9D3B-494E-896C-11F8579AF675-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FD4\"></a>该用户界面出现在“粒子视图”对话框右侧的“参数”面板中。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FD3\"></a>在“繁殖”的上下文中，<em class=\"mild\">父粒子</em> 是用于繁殖新粒子的原始粒子。 \n               </p> <a name=\"GUID-D318AEB0-1715-4A5B-9883-0AA2CFF97FCA\"></a><div class=\"dl_section\"><a name=\"GUID-B84E99E0-F5EC-420F-9627-0471485DD9EC\"></a><p class=\"title\"><a name=\"GUID-CE35DFD0-3A38-44EA-B78C-1F7C8DA835B6\"></a>“繁殖速率和数量”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FD2\"></a>使用以下设置可以指定繁殖粒子的频率、要使用的测量系统以及与繁殖的粒子数有关的其他值。 \n                  </p><a name=\"UL_086200DA1D5748658C0FE99D2C368FAC\"></a><ul>\n                     <li><em class=\"strong\">一次</em>粒子仅繁殖一次。每个现有的粒子产生一个新粒子。 \n                        <p><a name=\"GUID-0F2A3561-2305-4C08-9FE6-F0D19B501282\"></a><em class=\"strong\">删除父粒子</em>启用时，将删除每个繁殖了新粒子的原始粒子。只适用于“一次”选项。 \n                        </p> \n                     </li>\n                     <li><em class=\"strong\">每秒</em>用于指定每秒繁殖的粒子数。例如，如果使用默认“速率”设置 10.0，在 30 fps，每三个帧产生一个新粒子。 \n                        <p><a name=\"GUID-BF7141B4-6B30-48D2-89B1-84086CAE9F46\"></a><em class=\"strong\">速率</em>每秒要繁殖的粒子数。只适用于“每秒”选项。 \n                        </p> \n                     </li>\n                     <li><em class=\"strong\">按移动距离</em>可以按照指定时间间隔在移动的父粒子的路径上繁殖新粒子。 \n                        <p><a name=\"GUID-B2803ABB-917A-4C88-AEC8-614BB4859B41\"></a><em class=\"strong\">步长大小</em>每次父粒子移动此距离（采用 <span class=\"charspan-msgph\">3ds Max</span> 单位）时，粒子流都会繁殖新粒子。 \n                        </p> \n                     </li>\n                  </ul>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62E1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FCB\"></a>可繁殖</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E8\"></a> 当前事件中将繁殖新粒子的粒子的百分比。此设置对于每个粒子在进入事件时确定一次。不过，该参数可设置动画。默认值为 100.0。 \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FCA\"></a>如果“可繁殖”的值不是 100.0，将使用随机的选择过程，受“唯一性种子”值的影响。例如，有五个父粒子，“子孙数”设置为 1，“可繁殖”设置为 80.0，可能会产生 2 到 5 个繁殖粒子。不过，每次繁殖的平均值为 4。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62E0\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC9\"></a>子孙数</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E7\"></a> 系统在每次繁殖事件中使用每个父粒子创建的新粒子数。默认值为 1。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62DF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC8\"></a>变化</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E6\"></a> “子孙数”值可以随机变化的数量。默认值为 0.0。 \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC7\"></a>为了获取每个粒子的实际测试值，系统将“变化”值乘以 -1.0 到 1.0 之间的某个随机数，然后将此结果作为“子孙数”设置的一部分。例如，如果“子孙数”设置为 20，“变化”设置为 10，每个粒子实际的子孙数将在 18 到 22 之间。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62DE\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC6\"></a>同步方式</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E5\"></a> 选择在设置“速率”、“步长大小”、“子孙数”和“变化”的动画时要使用的时间帧： <a name=\"WS1A9193826455F5FFBA679E112A6A190042563\"></a><ul>\n                              <li><em class=\"strong\">绝对时间</em>为参数设置的任意关键点在设置关键点的实际帧应用。 \n                              </li>\n                              <li><em class=\"strong\">粒子年龄</em>为参数设置的任意关键点在每个粒子存在的相应帧应用。 \n                              </li>\n                              <li><em class=\"strong\">事件期间</em>参数设置的任意关键点在每个粒子第一次进入事件时开始应用于粒子。 \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62DD\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC5\"></a>粒子年龄置零</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E4\"></a> 启用时，将每个新繁殖粒子的年龄都设置为 0。禁用时，每个新繁殖粒子都继承其父粒子的年龄。默认设置为启用。 \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-0A9E69CF-E172-4D4F-A442-22813B6CEB78\"></a><p class=\"title\"><a name=\"GUID-B639AA26-26A8-4BD8-9FFB-69A228D3094B\"></a>“速度”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC4\"></a>用于指定繁殖的粒子的绝对速度或相对于父粒子的速度，随机变化可选。繁殖的粒子的方向总是与其父粒子的方向有关，但是可以设置分散度，使粒子最终会散开。 \n                  </p><a name=\"UL_9EC5BC4734A14CF882635F11CE55E2B8\"></a><ul>\n                     <li><em class=\"strong\">使用单位</em>选择此选项可以使用每秒的系统单位数指定繁殖的粒子的速度。默认设置为 100.0。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC2\"></a>正值继承父粒子的方向；负值反转父粒子的方向。 \n                        </p> \n                     </li>\n                     <li><em class=\"strong\">继承的 %</em>（默认设置。）选择此选项可以使用父粒子速度的百分比指定每个繁殖的粒子的速度。默认值为 100.0。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FC0\"></a>正值继承父粒子的方向；负值反转父粒子的方向。 \n                        </p> \n                     </li>\n                  </ul>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62DA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FBF\"></a>变化 %</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E1\"></a> 繁殖的粒子的速度可以随机变化的量。默认设置是 0.0。 \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FBE\"></a>为了获取每个繁殖的粒子的实际速度，系统将“变化”值乘以 -1.0 到 1.0 之间的某个随机数，然后将结果与指定的粒子速度或继承的粒子速度相加。例如，如果粒子速度为 100 个单位/秒，“变化”设置为 20，每个粒子的测试值将在 80 到 120\n                              个单位/秒之间。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FBD\"></a>散度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63E0\"></a> 启用时，将使繁殖的粒子流散开。使用数字设置定义分散程度（度）。范围从 0 到 180。默认值为 20.0。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-4AFB02AF-BBBE-4C01-9BD3-597EF41B719E\"></a><p class=\"title\"><a name=\"GUID-0F9D4BFE-1CC8-4AAF-8696-62982A68F3A6\"></a>“大小”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D8\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FBC\"></a>比例因子 %</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63DF\"></a> 应用于每个繁殖的粒子的统一比例的量，以父粒子大小的百分比为单位。默认值为 100.0。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D7\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FBB\"></a>变化 %</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63DE\"></a> 繁殖的粒子的速度可以随机变化的量。默认设置是 0.0。 \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FBA\"></a>为了获取每个繁殖的粒子的实际比例，系统将“变化”值乘以 -1.0 到 1.0 之间的某个随机数，然后将结果与“比例因子”值相加。例如，如果“比例因子”设置为 100，“变化”设置为 20，每个繁殖的粒子将在父粒子大小的 80% 到 120% 之间。\n                              \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-951DADF9-0814-4005-98DF-53E00222997F\"></a><p class=\"title\"><a name=\"GUID-72704447-3D38-46A0-A6A0-2D3B4B8B1D07\"></a>“唯一性”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB9\"></a>“唯一性”设置可以使“可繁殖”的结果随机化，如果小于 100.0，还可以使“变化”值随机化。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D6\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB8\"></a>种子</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63DD\"></a> 指定随机化值。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB7\"></a>新增特性</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63DC\"></a> 使用随机化公式计算新种子。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"related-links\">\n            <h4 class=\"related\">\n               <p class=\"title\"><a name=\"GUID-243EAC0F-CA38-4494-A9C2-33B3ABE9B519\"></a>相关信息\n               </p>\n            </h4>\n            <ul>\n               <li><span class=\"char_link\"><a href=\"GUID-23F1A72A-6BA8-4B98-8DF4-33024D65517F.htm\">碰撞繁殖测试</a></span></li>\n            </ul>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";