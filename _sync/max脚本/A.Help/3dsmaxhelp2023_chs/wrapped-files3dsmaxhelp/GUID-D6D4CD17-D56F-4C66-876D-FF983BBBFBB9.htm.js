var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-D6D4CD17-D56F-4C66-876D-FF983BBBFBB9\">\n      <meta name=\"description\" content=\"CATRig 中的每块骨骼都具有一个控件阵列，用于定义该骨骼的操纵方式及其如何继承运动。这些控件位于“层次”面板上。\">\n      <meta name=\"indexterm\" content=\"CAT: 装备层次\">\n      <meta name=\"indexterm\" content=\"CAT: 装备关节限制\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>CATRig 的“层次”面板</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-D6D4CD17-D56F-4C66-876D-FF983BBBFBB9\"></a><div class=\"head\">\n            <h1>CATRig 的“层次”面板</h1>\n         </div>\n         <p class=\"blurb\">CATRig 中的每块骨骼都具有一个控件阵列，用于定义该骨骼的操纵方式及其如何继承运动。这些控件位于“层次”面板上。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_4FAFFC6005E444DCA92D67B0CF04F158\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-45D5F3A1-85E7-4C6C-88C7-73524689520B\">选择 CATBone。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-FF012ED2-9008-4A7C-932C-DD6D854CCF12-low.png\">“层次”面板  <img src=\"../images/ac.menuaro.gif\"> “链接信息”按钮  <img src=\"../images/ac.menuaro.gif\"> “骨骼层次”卷展栏</span> \n               </li>\n            </ul>\n            <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-422E\"></a>使用“层次”面板设置，您可以在设置动画时配置更安全、更强大的装备。通过更改相应设置，您可以防止动画设置人员以装备不需要的方式来移动和编辑骨骼。有关这些设置如何影响骨骼的操纵方式的某些示例，请查看预设 CATRig 中不同骨骼的设置。 \n            </p>\n            <div class=\"section\"><a name=\"WS7AF5CAC11814013A17BA0FBF11FDE8BF84B-7FCE\"></a> \n               <h2><a name=\"GUID-7526C830-6306-46F5-B452-4CC8EC6F1993\"></a>关节限制\n               </h2> \n               <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-4213\"></a>可使用独立于层的 <span class=\"charspan-msgph\">CAT</span> 来设置关节限制。使用 <span class=\"charspan-msgph\">CAT</span> 限制系统的优点在于：可限制任何类型的控制器；例如，可限制约束。可在角色设置控制器上为视点控制器指定<span class=\"char_link\"><a href=\"GUID-74E8DBCD-060B-49CE-9DAA-701D513A8E1D.htm\">“注视”约束</a></span>，然后限制视点运动，使其不会变得太远。可限制“TCB 旋转”控制器或无法使用标准限制系统进行限制的任何控制器类型。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS7AF5CAC11814013A17BA0FBF11FDE8BF84B-7FCD\"></a> \n               <h2><a name=\"GUID-2E34FEA5-7CA8-4B05-A161-ED22857CCF8F\"></a>步骤\n               </h2> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F43\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F44\"></a>示例：使用“层次”面板设置：\n               </p>\n               <div class=\"section\"><a name=\"SECTION_35ED46677E0740F4BCA278A1E7D48750\"></a> \n                  <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-4211\"></a>此示例采用一个由三块<span class=\"char_link\"><a href=\"GUID-AC4CADBB-2C16-45D6-B7A6-66316C3FBA4B.htm\">额外骨骼</a></span>组成的简单层次，如下所示： \n                  </p> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F45\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-8B19DBB2-C5F7-46E9-9ABE-FC88D857C45A-low.png\"></div>  \n               </div>\n               <ol type=\"1\" start=\"1\">\n                  <li> <img src=\"../images/GUID-5D7D7630-6D16-400D-AE6F-87F13C97DEA2-low.png\"> 选择绿色骨骼，并将其移至 X 轴上。 \n                     <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F47\"></a>该骨骼将根据变换层次成员的基本规则按预期方式移动。 \n                     </p> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F48\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-40C866FC-6089-4E8C-AF32-021FEAFC0B4F-low.png\"></div>  \n                  </li>\n                  <li> <img src=\"../images/GUID-8A52C09C-4B1B-4074-A22E-1F815F11273C-low.png\"> 撤消第 1 步中所做的任何更改。 \n                  </li>\n                  <li>要锁定骨骼，请转到 <img src=\"../images/GUID-FF012ED2-9008-4A7C-932C-DD6D854CCF12-low.png\">“层次”面板，单击“链接信息”，然后在“骨骼层次”卷展栏 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“设置模式”组中，启用“锁定局部位置”。 \n                     <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-420D\"></a>现在，当您尝试移动骨骼时，不会发生任何状况，因为此位置已被锁定。 \n                     </p> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F4B\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A72D1054-D600-4238-8AFE-79C88684E28B-low.png\"></div>  \n                  </li>\n                  <li>在“层次”面板上，启用“操纵影响相邻层次”。 </li>\n                  <li> \n                     <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-420A\"></a>现在，当您移动绿色骨骼时，其局部位置将保持不变，但会旋转其父对象（红色骨骼），并会旋转其自身以注视其子对象（蓝色骨骼）。 \n                     </p> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F4E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F9634793-21BA-4964-9E76-DC1AB0539213-low.png\"></div>  \n                  </li>\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择红色骨骼，然后在“设置模式”组中启用“操纵导致拉伸”。 \n                     <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F50\"></a>现在，当您移动绿色骨骼时，红色骨骼将拉伸到绿色骨骼所在的位置。 \n                     </p> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F51\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-17399440-23EE-4E15-AFAF-150EA314609C-low.png\"></div>  \n                  </li>\n                  <li> <img src=\"../images/GUID-AEA0DCE7-AEB5-4739-B941-449CC7232C3F-low.png\"> 选择绿色骨骼，然后在“设置模式”组中启用“操纵导致拉伸”。 \n                     <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F53\"></a>现在，当您移动绿色骨骼时，红色骨骼和绿色骨骼将拉伸到绿色骨骼所在的位置。 \n                     </p> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F54\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-258D734D-270A-4CDB-911B-B7CEB782B75C-low.png\"></div>  \n                  </li>\n               </ol> \n            </div>\n            <div class=\"section\"><a name=\"WS7AF5CAC11814013A17BA0FBF11FDE8BF84B-7FD5\"></a> \n               <h2><a name=\"GUID-7A82AF71-0F78-49F1-80D5-0B66FF5FDC48\"></a>界面\n               </h2> <a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F55\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D8120E9F-3D41-4A16-9B1D-2941EE9B9DE9-low.png\"></div>  <a name=\"GUID-20CFA923-0206-4592-BF97-D7CE4E051A18\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F7A\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F7B\"></a>应用变换</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F7C\"></a> 确定此骨骼是否受直接变换（即，操纵其变换 Gizmo）影响。如果骨骼没有父对象，则通常需要启用此选项，而作为其他 CATBone 的子对象的骨骼则应禁用此选项。 \n                        <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F7D\"></a>通常，需要启用“应用变换”的唯一骨骼是根连接部（骨盆），此外，IK 目标也需要启用此选项。当变换动画层时，层次中的子级骨骼继承其父对象的变换，因此无需单独变化这些子级骨骼。请参见<span class=\"char_link\"><a href=\"GUID-14A8C008-2930-45E0-AA40-252A208F20AF.htm\">层变换 Gizmo</a></span>。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F7E\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F7F\"></a>显示洋葱皮</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F80\"></a> 可对任意 CATBone 启用此选项。这会使 CATBone 按照“视图”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“重影”功能的工作方式来显示动画相位。两者之间的主要区别在于，在默认情况下，重影在当前帧之前和之后显示。 \n                        <div><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F82\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>重影只能在动画模式下显示。 \n                           </div>\n                        </div> <a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BB4\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-8071FB86-C4B4-4882-8187-695445AB1502-low.png\"></div> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-0FABE7D2-D7A2-4880-AA62-FF452B5607B7\"></a><p class=\"title\"><a name=\"GUID-CD30A6FC-C9AC-422A-A4EA-BCFDA1793C63\"></a>“继承”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"GUID-25F7B44D-C098-41F0-8EFA-7CDFBB2DF8B9\"></a><span class=\"term\"><a name=\"GUID-EF63217F-7108-4298-BA4D-363B5C7DA6A0\"></a>设置模式</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-36F7B79F-25D3-4684-B90B-2B0E32D06329\"></a> \n                           <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72FA\"></a><em class=\"strong\">位置</em>如果启用此选项，骨骼将在设置模式下从父级骨骼继承其位置；如果禁用此选项，则从 CATParent 继承。 \n                           </p> \n                           <p><a name=\"GUID-DA5E8C98-9A4C-4627-B8F0-24B15E890E25\"></a><em class=\"strong\">旋转</em>如果启用此选项，骨骼将在设置模式下从父级骨骼继承其旋转；如果禁用此选项，则从 CATParent 继承。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"GUID-D504B95D-7708-440F-BE4F-8EC9F923A7C0\"></a><span class=\"term\"><a name=\"GUID-4AF70190-955F-4FDF-B833-0B52CA4FE28F\"></a>动画模式</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"GUID-EB27603B-DF36-4BDB-9653-85ADA3C1EBCC\"></a> \n                           <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72F6\"></a><em class=\"strong\">继承位置</em>如果启用此选项，骨骼将在动画模式下从父级骨骼继承其位置；如果禁用此选项，则从 CATParent 继承。 \n                           </p> \n                           <p><a name=\"GUID-8CE07E45-5F64-42F3-BA0D-F61E9C1EAB08\"></a><em class=\"strong\">继承旋转</em>如果启用此选项，骨骼将在动画模式下从父级骨骼继承其旋转；如果禁用此选项，则从 CATParent 继承。 \n                           </p> \n                           <p><a name=\"GUID-B0F1CD63-CC7A-4D1C-B4D5-27FC0A92EC1E\"></a><em class=\"strong\">继承比例</em>如果启用此选项，骨骼将在动画模式下从父级骨骼继承其比例；如果禁用此选项，则从 CATParent 继承。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72F1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72F0\"></a>操纵影响相邻层次</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72EF\"></a> \n                        <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72EE\"></a>如果启用此选项，此骨骼将影响层次中的相邻骨骼。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-90661FB2-3096-4267-883D-3B021BB0FAA9\"></a><p class=\"title\"><a name=\"GUID-BE6FBE58-529F-476B-97D4-EF2AE3D6A5BD\"></a>“设置模式”组\n                  </p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BB3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-1F34E0F6-6082-411D-9F2C-BEB63948EA2E-low.png\"></div>\n                  <dl>\n                     <dt><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F5F\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F60\"></a>锁定局部位置</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F61\"></a> 如果启用此选项，将在设置模式下锁定此骨骼的位置。如果尝试移动骨骼，此骨骼将不会发生任何移动，但是，如果已启用“操纵影响相邻层次”，则会尝试移动其相邻区域。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F62\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F63\"></a>锁定局部旋转</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F64\"></a> 如果启用此选项，将在设置模式下锁定此骨骼的旋转。如果尝试旋转骨骼，此骨骼将不会发生任何旋转。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F65\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F66\"></a>锁定局部缩放</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS73099CC142F48755-5C83E7B111FDE81A7425F67\"></a> 如果启用此选项，将在设置模式下锁定此骨骼的大小。如果尝试缩放骨骼，此骨骼将不会调整其大小。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72E9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72E8\"></a>操纵导致拉伸</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72E7\"></a> 如果启用此选项，在设置模式下移动此骨骼将导致其拉伸。如果禁用此选项，移动骨骼时将移动其子对象。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72E5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72E4\"></a>静态矩阵值/动画控制器</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72E3\"></a> 选择以下选项之一，以便确定角色在设置模式（从动画模式返回后）下的姿势： <a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A1D\"></a><ul>\n                              <li> <em class=\"strong\">静态矩阵值</em>默认情况下，设置模式处于完全静态模式，角色在设置模式下返回到的姿势由此矩阵定义。 \n                              </li>\n                              <li> <em class=\"strong\">动画控制器</em>或者，也可以将骨骼设置为使用动画控制器定义角色在设置模式下的姿势。 \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A1A\"></a>默认情况下，CATBone 使用名为 SetupTM 的静态变换值，该值不会在动画编辑器中显示（由于无法对其设置动画），而只能通过 MAXScript 访问。 \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A19\"></a>设置姿势的原因是无法对其设置动画，因此，默认情况下，无法使用任何设置动画控制器。选择“动画控制器”选项之后，您将获得一个“设置”动画控制器，用作 LayerTrans（层变换）轨迹的子对象，可在“轨迹视图”中查看和编辑此控制器。 \n                                 </p> <a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A18\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-924822B9-7468-4578-B0CD-9763DAB4D257-low.png\"></div>  \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A17\"></a> <em class=\"strong\">CATbone“轨迹视图”层次，并将“设置模式”设置为：</em> \n                                 </p> \n                                 <p><a name=\"GUID-7A258351-99C3-4839-B4F8-468AF39B6CD1\"></a> <em class=\"strong\">左图：“静态矩阵值”</em> \n                                 </p> \n                                 <p><a name=\"GUID-EA8463F1-B6DC-4E03-96ED-11CA0BC02E77\"></a> <em class=\"strong\">右图：“动画控制器”</em> \n                                 </p> \n                                 <p><a name=\"GUID-EF3A67A2-0169-4E06-80DB-4464E731B30B\"></a>使动画控制器处于设置模式的原因是为了利用<span class=\"char_link\"><a href=\"GUID-D6D4CD17-D56F-4C66-876D-FF983BBBFBB9.htm#WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C7\">增加到设置姿势</a></span>功能。您可以向设置控制器应用您自己的程序动画控制器设置，然后将分层系统与该控制器关联起来。 \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A16\"></a>您可能需要使用此功能自定义您的角色的手臂或头部继承。您只需为设置模式控制器指定一个约束，以便定义动画控制器在设置动画时所依据的基值。例如，您可以使手部朝下，但向设置“旋转”轨迹应用“注视”约束，并将高空中的某个对象指定为“注视”目标，并将胸腔指定为上方向节点。然后，您可以创建一个新对象，应用一个定位到胸腔和骨盆的“方向”约束，并使用此对象来引导肢体的设置方向。这使您能够灵活地控制肢体的行为方式，而不是仅从胸腔继承旋转。\n                                    \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A15\"></a>您可以将您的角色的尾部约束到样条线或 IK 链，以便在尾部使用样条线 IK。实际上，“动画”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“动画 - CAT”子菜单上的<span class=\"char_link\"><a href=\"GUID-36813D6C-FC27-4D55-8AD5-1A28CD4411AE.htm\">“应用 Max IK”工具</a></span>即可执行如此操作。如果将此工具的“拾取层”选项设置为“使用安装程序控制器”，则会将 CATBone 链约束为使用设置模式层的 IK 链。 \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A14\"></a>如果要设置面装备，您还可以编写脚本以生成自动眨眼，或从眼球移动继承少许旋转。这将向您提供程序运动，但还兼有叠加 <span class=\"charspan-msgph\">CAT</span> 的分层系统的优势，使您能够在程序动画上方添加手部动画触动。 \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A13\"></a>为什么不将这些程序控制器仅放置到一层中，并在其上应用一个用于手部关键帧触动的附加层？ \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A12\"></a>分层系统不会随装备预设一起保存，因此，如果要保存装备预设，您将丢失您所做的工作。分层系统旨在保存关键帧控制器；如果要构建复杂的控制器配置，常用最佳方法是将其放置到设置控制器中，以使配置嵌入到装备，而非局限于某个特定层。 \n                                 </p> \n                                 <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-6A11\"></a>层特定于场景。如果要将修改放置到某层中，应严格将其应用于该场景，而不是应用于一般装备设置。如果要为装备添加某个功能，设置控制器即是执行此操作的场所。 \n                                 </p> \n                              </li>\n                           </ul> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-166B8334-373B-4CDC-99CF-12694AB9DA56\"></a><p class=\"title\"><a name=\"GUID-EFDBD2F8-5D25-4D80-B870-49ED1D2BF3D2\"></a>“动画模式”组\n                  </p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BB2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7E0C58D9-70EA-40EE-95A3-D6447725C90E-low.png\"></div>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D8\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D7\"></a>锁定局部位置</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D6\"></a> 如果启用此选项，将在动画模式下锁定此骨骼的位置。如果尝试移动骨骼，此骨骼将不会发生任何移动，但是，如果已启用“操纵影响相邻层次”，则会尝试移动其相邻区域。 \n                           <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-421D\"></a>对于您不希望在动画设置期间移动骨骼，请启用此锁定。这样，当动画设置人员尝试移动此骨骼时，将禁止移动。此设置还会影响<span class=\"char_link\"><a href=\"GUID-0F10D9F1-4143-490D-91A3-78B9F269F3AF.htm\">“捕获动画”</a></span>工具及其将动画映射到此骨骼的方式。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D3\"></a>锁定局部旋转</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D2\"></a> 如果启用此选项，将在动画模式下锁定此骨骼的旋转。如果尝试旋转骨骼，此骨骼将不会发生任何旋转。\n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72D0\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72CF\"></a>锁定局部缩放</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72CE\"></a> 如果启用此选项，将在动画模式下锁定此骨骼的大小。如果尝试缩放骨骼，此骨骼将不会调整其大小。 \n                           <p><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72CC\"></a>对于您不希望在动画设置期间缩放的骨骼，建议您锁定这些骨骼的比例。随后，当动画设置人员不小心缩放此骨骼时，<span class=\"charspan-msgph\">CAT</span> 将忽略此拉伸。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72CB\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72CA\"></a>操纵导致拉伸</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C9\"></a> 如果启用此选项，在动画模式下移动此骨骼将导致其拉伸。如果禁用此选项，移动骨骼时将移动其子对象。\n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-B7067EF3-BE2A-42EF-B2A0-4A22E7801071\"></a><p class=\"title\"><a name=\"GUID-843A07F1-4103-47A3-9F1E-60BEA23C5786\"></a>“层设置”组\n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C7\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C6\"></a>增加到设置姿势</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C5\"></a> 如果启用此选项，层堆栈中的所有层都以相对于设置姿势的方式工作。评估期间，将出现以下情况： \n                           <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-4218\"></a>骨骼姿势 = 设置模式姿势 + 层值 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C3\"></a>记住层设置</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C2\"></a> 单击此按钮可将当前层配置保存到骨骼中。如果您希望骨骼使用特定控制器组合，您只需设置所需配置，然后单击此按钮。随后，骨骼将保存此配置，当添加新层时，骨骼将重新加载此配置。 \n                           <div><a name=\"WS1A9193826455F5FF2566FFD511FF6F8C7CA-72C1\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“记住层设置”仅适用于绝对层。 \n                                 <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-4215\"></a>此外，“记住层设置”不能与“反应”控制器搭配使用。“反应”控制器无法通过 SDK 访问，因此，无法使用 <span class=\"charspan-msgph\">CAT</span> 的动画保存程序和加载程序保存和加载它们。如果您希望设置“反应”控制器，请使用“设置模式”组中的“动画控制器”选项执行此操作（请参见上文）。可在设置控制器上设置“反应”控制器，然后启用“层设置”组中的“增加到设置姿势”选项（请参见上文）。RG3\n                                    文件格式可随装备一起保存和加载“反应”控制器。 \n                                 </p> \n                                 <p><a name=\"WS73099CC142F48755-5C83E7B111FDE81A742-4214\"></a>最后，可使用“限制”控制器设置限制。您可以手动限制各个值，然后单击“记住层设置”以使骨骼记住这些限制值，并在每次添加新的绝对层时重新应用这些值。 \n                                 </p> \n                              </div>\n                           </div> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-C2DD0B35-F15C-48D3-9E80-A00CF82FF32B\"></a><p class=\"title\"><a name=\"GUID-143B3475-66F6-4B9D-849C-C5BAF109B980\"></a>“关节限制”组\n                  </p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BB0\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-6D23EAEF-C02A-4969-8C8C-AF9E71A1BED0-low.png\"></div>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BAF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BAE\"></a>位置</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BAD\"></a> \n                           <p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BAC\"></a>如果启用此选项，可使用 X/Y/Z 设置指定选定骨骼在对应轴上的允许位置偏移范围。骨骼上添加的线框用于描述位置限制。 \n                           </p> <a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BAB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-31A5CA17-D5C3-4496-AB52-2677BACBB7FE-low.png\"></div>  \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BAA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BA9\"></a> 旋转</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BA8\"></a> \n                           <p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BA7\"></a>如果启用此选项，可使用 X/Y/Z 设置指定选定骨骼在对应轴上的允许旋转偏移范围。旋转 Gizmo 上添加的橙色线条用于描述旋转限制。 \n                           </p> <a name=\"WS1A9193826455F5FF-3859B43C1209703A838-3BA6\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D52D3F86-3C39-4B0F-AED9-7DE394DA7E37-low.png\"></div>  \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";