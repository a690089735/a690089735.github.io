var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-A6CDE7D5-37DB-4C0F-9F2F-03FF04B807BA\">\n      <meta name=\"description\" content=\"肌肉股是一种用于角色蒙皮的非渲染辅助对象，其作用类似于两个点之间的 Bezier 曲线。股的精度高于 CATMUscle，而且在必须扭曲蒙皮的情况下可提供更好的结果。\">\n      <meta name=\"indexterm\" content=\"CAT: 肌肉股\">\n      <meta name=\"contextid\" content=\"CATMUSCLESTRAND.OBJECTS_HELPERS\">\n      <meta name=\"contextid\" content=\"OBJECTS HELPERS-CATMUSCLESTRAND\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>肌肉股</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-A6CDE7D5-37DB-4C0F-9F2F-03FF04B807BA\"></a><div class=\"head\">\n            <h1>肌肉股</h1>\n         </div>\n         <p class=\"blurb\">肌肉股是一种用于角色蒙皮的非渲染辅助对象，其作用类似于两个点之间的 Bezier 曲线。股的精度高于 CATMUscle，而且在必须扭曲蒙皮的情况下可提供更好的结果。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_1DDDC347FF13403EA2D14F29623E9947\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-DB86DA0E-3CFC-4F13-8E5F-0FB3EA8D7F73\"> <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-9A23D2B8-9CE2-40BE-98B6-651DBC94F4F7-low.png\">（辅助对象） <img src=\"../images/ac.menuaro.gif\"> “CAT 对象” <img src=\"../images/ac.menuaro.gif\"> “对象类型”卷展栏 <img src=\"../images/ac.menuaro.gif\"> “肌肉股”按钮</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-07429D28-8A07-46E9-B8C7-57034D10D345\">Alt 菜单：“对象”菜单 <img src=\"../images/ac.menuaro.gif\"> “角色和骨骼” <img src=\"../images/ac.menuaro.gif\"> “CAT 肌肉股”</span> \n               </li>\n            </ul>\n            <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-322A\"></a>CATMuscle 最适用于肩部和胸部的蒙皮，但对于手臂和腿的蒙皮，肌肉股更加适宜。 \n            </p>\n            <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3229\"></a>下图显示了用于使用二头肌的肌肉股。 \n            </p><a name=\"WS1A9193826455F5FF-414E5ED12075B5C5DC-7C95\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9FAD5231-53F4-4A13-B3BA-4979A6D2BE02-low.png\"><p class=\"figure-title\">刚刚创建的肌肉股，适合形成二头肌</p>\n            </div>\n            <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3228\"></a>在“创建”面板打开的情况下，您可以使用鼠标塑造肌肉股。但其大部分属性需要在“修改”面板中进行设置。 \n            </p>\n            <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3227\"></a>完成二头肌的修改后，请执行下列操作： \n            </p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3226\"></a><ul>\n               <li>将（父对象）一端附加到上臂的顶部（即附加到 CATBone）。 </li>\n               <li>将另一端附加到稍低于前臂顶部的位置。 </li>\n               <li>使用肌肉股（而不是 CATBone）驱动蒙皮。 </li>\n            </ul>\n            <p><a name=\"WS73099CC142F4875539000486122982E6AA8-74AF\"></a>一只手臂修改完毕后，可以轻松创建一个手臂副本（包括所有 CATBone、肌肉股、蒙皮等），即原始手臂的一个镜像。 \n            </p>\n            <div class=\"section\"><a name=\"WS73099CC142F4875539000486122982E6AA8-6603\"></a> \n               <h2><a name=\"GUID-F6E10C09-27DE-478F-83A6-59020BD86034\"></a>过程\n               </h2> <a name=\"WS73099CC142F4875539000486122982E6AA8-6602\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F4875539000486122982E6AA8-6601\"></a>要创建肌肉股，请执行下列操作：\n               </p>\n               <p><a name=\"WS73099CC142F4875539000486122982E6AA8-6600\"></a>创建一个肌肉股需要进行四次单击操作（在启动对象的初次按钮单击之后）： \n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>在 <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\"> 创建面板上，单击 <img src=\"../images/GUID-9A23D2B8-9CE2-40BE-98B6-651DBC94F4F7-low.png\">（“辅助对象”），然后从下拉列表中选择“CAT 对象”。在“对象类型”卷展栏中单击“肌肉股”。 \n                  </li>\n                  <li>在视口中单击左键以设置一个端点，然后移动鼠标。 \n                     <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65FD\"></a>此时可以设置第一个端点控制柄的角度。您也可以稍后对其进行调整。 \n                     </p> \n                  </li>\n                  <li>单击以设置控制柄角度。 </li>\n                  <li>再次移动鼠标。 \n                     <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65FA\"></a>此时可以设置肌肉股的总长度，以及控制柄的大小。您也可以稍后对其进行调整。 \n                     </p> \n                  </li>\n                  <li>单击以创建第二个端点，从而设置长度。 </li>\n                  <li>再次移动鼠标以设置第二个端点的控制柄角度，然后单击完成肌肉股。 \n                     <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65F7\"></a>此后，可以通过移动端点辅助对象来调整肌肉长度，通过移动控制柄调整肌肉样条线的曲率。 \n                     </p> \n                  </li>\n               </ol> <a name=\"WS73099CC142F4875539000486122982E6AA8-65F6\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65F5\"></a>要使用肌肉股，请执行下列操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>创建或加载一个要向其附加肌肉的角色装备，并确定要附加肌肉的位置。 </li>\n                  <li>添加一个肌肉股对象，并将其放置在该装备上。 \n                     <div><a name=\"WS73099CC142F4875539000486122982E6AA8-65F2\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>肌肉股对象不会渲染，因此即使它在视口中显示为透过蒙皮，也不会影响最终输出。 \n                        </div>\n                     </div> \n                  </li>\n                  <li>根据需要设置肌肉股的参数。特别是，如果肌肉在<span class=\"char_link\"><a href=\"GUID-9596F6EF-3569-44F2-8D6C-6EB58C30BEDD.htm\">蒙皮修改器</a></span>中使用，则将“类型”设置为“骨骼”；如果计划在<span class=\"char_link\"><a href=\"GUID-1B3C4662-8C42-4F02-BD1B-204CD491166B.htm\">蒙皮包裹</a></span>中使用，则将“类型”设置为“网格”。 \n                  </li>\n                  <li>在主工具栏上单击 <img src=\"../images/GUID-2FD1B2A7-98E2-4EC0-9CAA-D6641253DF99-low.png\">（选择并链接），然后从肌肉股上的一个端点辅助对象拖放到应附加该对象的骨骼。 \n                  </li>\n                  <li>针对另一个端点辅助对象重复以上步骤。另外，还可以选择将端点控制柄链接到其运动将会影响肌肉曲率的对象。 </li>\n                  <li>对于任何其他肌肉股，请重复步骤 2 到步骤 5。 </li>\n                  <li>为角色创建蒙皮，并确保包括作为骨骼（具有蒙皮）或控制对象（具有蒙皮包裹）的肌肉。 </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-772C\"></a> \n               <h2><a name=\"GUID-24F99ADF-03CA-48E6-887D-4A0E57E5C649\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-772B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-3BAEC919-E392-4F16-90EC-126F5F4FEE32-low.png\"></div>  <a name=\"GUID-95AD0304-FAFF-4681-9C71-E8DDFA7F3D72\"></a><div class=\"dl_section\"><a name=\"GUID-6AE62414-02BC-4A92-BB3D-6253EE12BE60\"></a><p class=\"title\"><a name=\"GUID-74959ED6-7CB8-4F0A-9F4F-F7081ED30D2D\"></a>“类型”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7155\"></a>选择“网格”或“骨骼”。两种类型有一个共同点：移动控制柄可改变肌肉股的形状，每个控制柄在保留部分股的情况下都有自己的名称。区别如下： \n                  </p><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7154\"></a><ul>\n                     <li> <em class=\"strong\">网格</em>肌肉股充当单个碎片。与<span class=\"char_link\"><a href=\"GUID-1B3C4662-8C42-4F02-BD1B-204CD491166B.htm\">蒙皮包裹修改器</a></span>配合使用时，此模式最佳（请参见<span class=\"char_link\"><a href=\"GUID-49276514-378F-4FDA-9B3B-E31E332DD966.htm#WS73099CC142F4875539000486122982E6AA8-7139\">用法</a></span>）。 \n                     </li>\n                     <li> <em class=\"strong\">骨骼</em> 每个球体充当一块单独的骨骼，并具有自己的名称。因此，在不需要所有球体的情况下，可以将球体子集附加到<span class=\"char_link\"><a href=\"GUID-9596F6EF-3569-44F2-8D6C-6EB58C30BEDD.htm\">“蒙皮”修改器</a></span>中。 \n                        <div><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7151\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>可以选择骨骼类型肌肉股对象的单个球体，但移动任何球体都会移动整个肌肉。 \n                           </div>\n                        </div> \n                     </li>\n                  </ul>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-E17C53BB-82F1-4103-B748-B7F9F467EE54\"></a><p class=\"title\"><a name=\"GUID-00BF1DD6-C2CD-4ED9-AAD4-3AA1C4C10F28\"></a>“肌肉属性”组\n                  </p>\n                  <div><a name=\"WS73099CC142F4875539000486122982E6AA8-65EB\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>与 CATMuscle 不同的是，肌肉股对象没有“名称”属性。但是，如果重命名“类型”设置为“网格”（请参见上文）的对象，该名称将充当控制柄的基础名称。例如，如果将对象命名为 <em class=\"mild\">Bicep</em>，那么端点辅助对象将命名为 <em class=\"mild\">BicepM_Start</em> 和 <em class=\"mild\">BicepM_End</em>，它们的控制柄分别命名为 <em class=\"mild\">BicepM_StartHdl</em> 和 <em class=\"mild\">BicepM_EndHdl</em>。 \n                        <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65EA\"></a>在重命名第一个<em class=\"mild\"></em>球体（默认名称为 <em class=\"mild\">MuscleStrand01</em>）时，此规则也适用于“类型”设置为“骨骼”的肌肉股对象。但是，重命名第一个球体不会影响其他球体的名称，而重命名肌肉股中的任何其他球体也不会影响对象的其他组件。 \n                        </p> \n                     </div>\n                  </div>\n                  <dl>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65E9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65E8\"></a> <img src=\"../images/GUID-F44DC59D-D8C2-4484-BC2E-DAA23B5830AE-low.png\"> 复制股设置</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65E7\"></a> 将所选肌肉股的设置复制到内存缓冲区，准备粘贴到其他股。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65E5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65E4\"></a> <img src=\"../images/GUID-06F51362-2126-4EF4-80C0-65325149D5ED-low.png\"> 粘贴股设置</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65E3\"></a> 将从其他肌肉股复制的设置粘贴到选定股。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-62E9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-62E8\"></a>L/M/R</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-62E7\"></a> 左/中/右：肌肉股所在的装备侧面。例如，可以选择“L”选项在左边设置肌肉股，然后通过指定“R”选项跨中心轴对肌肉股执行镜像操作。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-62E5\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-62E4\"></a>镜像：X/Y/Z</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-62E3\"></a> 肌肉股沿其分布的轴。此选项可帮助镜像系统工作。\n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-B579ACEA-14D9-429D-AB0D-605B8B6D4929\"></a><p class=\"title\"><a name=\"GUID-251CCD73-B3E3-49A9-8B50-6D2892F94C4B\"></a>“控制柄”组\n                  </p>\n                  <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65D8\"></a>肌肉股对象的端点有一个框形辅助对象，其中每个辅助对象都有一个控制柄，其作用类似于 Bezier 曲线结的控制柄。可以通过移动这些控制柄改变肌肉形状，也可以<span class=\"char_link\"><a href=\"GUID-4115DE9B-D636-4A42-904E-71259A843E0A.htm\">链接</a></span>作为另一对象（如角色装备中的骨骼）的子对象的任何控制柄。然后，移动父对象（骨骼）时也会移动该控制柄，进而导致肌肉发生相应的变形。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65D7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65D6\"></a>可见</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65D5\"></a> 切换肌肉控制柄的显示。 \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65D3\"></a>通常情况下，控制柄在视口中显示为围绕肌肉的线框立方体；要禁用控制柄的显示，请禁用“可见”。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65D2\"></a>将肌肉与它们的骨骼相连并选择不再需要控制柄后，这对简化视口显示很有用。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65D1\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65D0\"></a>控制柄大小</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65CF\"></a> 每个控制柄的大小；此选项的更改会影响所有控制柄。通常，控制柄是在创建时按照其与整个肌肉的比例来设置大小的；使用此设置可调节控制柄的大小。\n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-E90EBBD4-FFAB-43AC-8393-7956134CD0C3\"></a><p class=\"title\"><a name=\"GUID-4C19BF84-8635-4222-91F1-C5C1E7FEFBC1\"></a>“球体属性”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-772A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7729\"></a>球体数</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7728\"></a> 构成肌肉股的球体的数量。此值越大，肌肉的分辨率越高。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7726\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7725\"></a>显示轮廓曲线</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7724\"></a> 打开“肌肉轮廓曲线”对话框，其中包含一个图形，编辑该图形可控制肌肉股的剖面或轮廓。默认情况下，肌肉的中间较厚，两端较薄，但您可以通过移动曲线上的三个点（不能为该曲线添加点）更改此设置。 <a name=\"WS73099CC142F4875539000486122982E6AA8-65CC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-885F87A7-04BC-4E84-BF00-DD5B7B0339C3-low.png\"></div>  \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65CB\"></a>关闭对话框或再次单击“显示轮廓曲线”，完成曲线编辑。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-470F2FA4-378C-4D85-95CB-86EA68C7138B\"></a><p class=\"title\"><a name=\"GUID-5DC7CE14-FD7D-415D-9327-64128A954035\"></a>“挤压/拉伸”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65C9\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65C8\"></a>启用</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65C7\"></a> \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65C6\"></a>打开此选项时，更改肌肉长度将影响剖面：缩短肌肉会使其增厚（挤压），而加长肌肉会使其减薄（拉伸）。关闭此选项时，长度不会影响剖面。 \n                           </p> <a name=\"WS73099CC142F4875539000486122982E6AA8-65C5\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-66B372EA-5B94-4ACA-A658-CDDC8EB2F826-low.png\"></div>  \n                           <p><a name=\"GUID-3BC98FDC-A43D-4B00-887C-7F2BD7276FC7\"></a> <em class=\"strong\">顶部：“挤压/拉伸”处于禁用状态，无论肌肉缩短（左）还是加长（右），肌肉股剖面都保持不变。</em> \n                           </p> \n                           <p><a name=\"GUID-650BEB6B-346B-47F5-A14A-EA7B52960A51\"></a> <em class=\"strong\">底部：“挤压/拉伸”处于启用状态，肌肉短（左）时肌肉股增厚，肌肉长（右）时肌肉股减薄。</em> \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65C4\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65C3\"></a>当前比例</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65C2\"></a> 此只读字段显示肌肉缩放量，该数量以松弛状态（见下）和通过移动端点调整的长度为基准。 \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65C0\"></a>“当前比例”为 1.0 时，肌肉处于其松弛状态。“当前比例”大于 1.0 时，肌肉处于挤压状态，小于 1.0 时，肌肉处于拉伸状态。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65BF\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65BE\"></a>倍增</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65BD\"></a> 增加或减少挤压和拉伸的量。增大此值可实现放大效果。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65BB\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65BA\"></a>松弛长度</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65B9\"></a> 肌肉处于松弛状态（即“当前状态”= 1.0）时的长度。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65B7\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65B6\"></a>当前</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65B5\"></a> 此只读字段显示肌肉的当前长度。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F4875539000486122982E6AA8-65B3\"></a><span class=\"term\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65B2\"></a>设置松弛状态</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F4875539000486122982E6AA8-65B1\"></a> 单击以设置松弛状态。此操作会将“松弛长度”设置为当前长度，将“当前比例”设置为 1.0。 \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65AF\"></a>此后，将肌肉缩短至小于“松弛长度”会产生挤压，加长肌肉会产生拉伸。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-2D463EF9-97AE-415D-9444-B043B2A755C4\"></a><p class=\"title\"><a name=\"GUID-4501700B-16DE-4670-A096-473EECA82BED\"></a>[球体设置组]\n                  </p>\n                  <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65AD\"></a>使用“肌肉股”卷展栏上的其余控件，可通过调整其范围设置肌肉中每个球体的长度。将“当前球体”设置为要调整的球体，然后更改“U 开始”和“U 结束”的值。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7712\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7711\"></a>当前球体</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7710\"></a> 要调整的球体。此选项可以是从 1 到 <span class=\"char_link\"><a href=\"GUID-A6CDE7D5-37DB-4C0F-9F2F-03FF04B807BA.htm#WS1A9193826455F5FF-40CEFF981229D6A8D2C-772A\">[球体数]</a></span> 的任何值。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-770E\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-770D\"></a>半径</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-770C\"></a> 此只读字段显示当前球体的半径。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-770A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7709\"></a>U 开始/U 结束</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-40CEFF981229D6A8D2C-7708\"></a> 相对于球体全长测量的当前球体的范围，在此上下文中是指从 0.0 到 1.0 的范围。本质上，设置的是球体沿肌肉长度开始和结束的百分比。 \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65AC\"></a>要缩短球体，可加大“U 开始”或减小“U 结束”；要加长球体，可减小“U 开始”或加大“U 结束”。 \n                           </p> \n                           <p><a name=\"WS73099CC142F4875539000486122982E6AA8-65AB\"></a>例如，要使球体开始于肌肉长度的 25% 处，结束于 28% 处，请将“U 开始”设置为 0.25，将“U 结束”设置为 0.28。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";