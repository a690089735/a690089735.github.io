var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-395E6B03-C60A-457D-A4BE-ED98380CFC55\">\n      <meta name=\"description\" content=\"骨骼系统是骨骼对象的一个有关节的层次链接，可用于设置其他对象或层次的动画。\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>关于骨骼系统</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-395E6B03-C60A-457D-A4BE-ED98380CFC55\"></a><div class=\"head\">\n            <h1>关于骨骼系统</h1>\n         </div>\n         <p class=\"blurb\">骨骼系统是骨骼对象的一个有关节的层次链接，可用于设置其他对象或层次的动画。 </p>\n         <p><a name=\"GUID-DF92B4C6-DDC9-43E2-97BD-E309A19CB6D5\"></a> \n         </p>\n         <p><a name=\"WS1A9193826455F5FF-2ADE9D9118A20D4F813EF1\"></a>在设置具有连续皮肤网格的角色模型的动画方面，骨骼尤为有用。可以采用正向运动学或反向运动学为骨骼设置动画。对于反向运动学，骨骼可以使用任何可用的 IK 解算器，或者交互式 IK 或应用式 IK。 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190041966\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-03F289C0-DCCE-476B-B013-3CFE42FFA003-low.png\"><p class=\"figure-title\">使用骨骼建模的恐龙角色</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4758\"></a>骨骼可以渲染，不过在默认情况下该功能处于禁用状态。它们具备多个可定义骨骼所表示形状的参数，如锥化和鳍。通过鳍，可以更容易地观察骨骼的旋转。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4757\"></a>在动画方面，非常重要的一点是要理解骨骼对象的结构。骨骼的几何体与其链接是不同的。每个链接在其底部都具有一个轴点。骨骼可以围绕该轴点旋转。移动子级骨骼时，实际上是在旋转其父级骨骼。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4756\"></a>由于实际作用的是骨骼的轴点位置而不是实际的骨骼几何体，因此可将骨骼视为关节。可将几何体视作从轴点到骨骼子对象纵向绘制的一个可视辅助工具。子对象通常是另一个骨骼。 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190041967\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-5F8479C8-BB09-4EB4-80FE-71BB8C24155B-low.png\"><p class=\"figure-title\">线框模型内单独的骨骼系统</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4755\"></a>任何层次都可充当骨骼结构（请参见“将对象用作骨骼”）。只需启用“骨骼工具”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“对象属性”卷展栏中的“启用骨骼”即可。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041968\"></a> \n            <h2><a name=\"GUID-B57545DE-48B3-4433-AFB0-21F043EA136C\"></a>创建骨骼\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4753\"></a>可以通过单击“骨骼编辑工具”卷展栏上的“创建骨骼”按钮或单击“创建”面板上的“系统”类别中的“骨骼”按钮开始创建骨骼。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4752\"></a>有关详细信息，请参见本部分中的“使用骨骼系统”主题。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004196C\"></a> \n            <h2><a name=\"GUID-B3C0996B-1E3F-4D51-A255-BAA4FB769A34\"></a>为骨骼指定 IK 控制器\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-474F\"></a>默认情况下，骨骼未指定反向运动学 (IK)。可以通过以下两种方法之一来指定 IK 解算器。最常用的方式是，创建一个骨骼层次，然后手动指定 IK 解算器。这样可以精确地控制定义 IK 链的位置。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-474E\"></a>另一种指定 IK 解算器的方式更为自动。在创建骨骼时，在“IK 链指定”卷展栏中，从列表中选择 IK 解算器，然后启用“指定给子对象”。退出骨骼创建时，选择的 IK 解算器将自动应用于层次。解算器将从层次中的第一个骨骼扩展至最后一个骨骼。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004196D\"></a> \n            <h2><a name=\"GUID-974E925A-D7C4-426E-B962-0326FD5F8354\"></a>设置骨骼的初始位置\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-474C\"></a>第一次创建骨骼系统时，骨骼的位置即为<em class=\"mild\">初始状态</em>。在指定 IK 解算器或方法之前，可以分别移动、旋转或拉伸骨骼，以更改骨骼的初始状态。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004196E\"></a> \n            <h2><a name=\"GUID-9CE24D23-BCD9-480C-BB32-746818DED029\"></a>骨骼颜色\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-474B\"></a>默认情况下，在“自定义用户界面”对话框的“颜色”面板中为骨骼指定颜色。选择对象作为元素，然后在列表中选择“骨骼”。可以通过以下方法来更改各个骨骼的颜色：选择骨骼，在“创建”面板或“修改”面板中单击骨骼名称旁边的活动色样，然后在“对象颜色”对话框中选择颜色。\n               \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-474A\"></a>还可以使用“骨骼工具”指定骨骼颜色，并为骨骼层次指定颜色渐变。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004196F\"></a> \n            <h2><a name=\"GUID-ABA72A41-5B1A-4F73-A175-1B669DE6AFA2\"></a>骨骼鳍\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4749\"></a>“骨骼工具”中提供的鳍有助于可视化骨骼方向。还可以使用鳍近似估计角色的形状。骨骼最多具有三组鳍：前鳍、后鳍和侧鳍，其中每组鳍都有各自的“大小”和“锥化”设置。默认情况下，此功能处于禁用状态。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041970\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-23BF37C0-3505-4F7E-9284-A3B71470578B-low.png\"><p class=\"figure-title\">骨骼可以具有鳍。</p>\n            </div>  <a name=\"WS1A9193826455F5FFBA679E112A6A190041971\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-EC7EE647-9960-4BD7-AE35-7DFB76691101-low.png\"><p class=\"figure-title\">带有各种鳍配置的骨骼</p>\n            </div>  \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041972\"></a> \n            <h2><a name=\"GUID-0DA8796B-BCA0-4475-B7B5-103308AC0A6C\"></a>可渲染的骨骼\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4748\"></a>尽管默认情况下骨骼不会进行渲染，但是您可对其进行更改。要使骨骼可渲染，请在“对象属性”中启用其“可渲染”选项。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041973\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-AE71A1A4-C37F-470D-A4CF-0349FF3F6D05-low.png\"><p class=\"figure-title\">骨骼是可渲染的。</p>\n            </div>  \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041974\"></a> \n            <h2><a name=\"GUID-C7946BF0-2C7D-4F50-A29E-A5D9A0CA8842\"></a>骨骼的对象属性\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4747\"></a>除了可视属性之外，骨骼还具有行为属性。这些属性的控件包含在“骨骼工具”中。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4746\"></a>可以使用这些控件将其他类型的对象转变为骨骼。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190041975\"></a> \n            <h2><a name=\"GUID-AF54279D-2544-4EF5-9E90-8D7D1582F75C\"></a>对骨骼使用约束\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4745\"></a>只要未给骨骼指定 IK 解算器或方法，即可对骨骼应用约束。如果骨骼具有指定的 IK 控制器，则只能约束层次或链的根。不过，对链接的骨骼应用位置控制器或约束会产生意外的影响，如使骨骼链断裂。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041976\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-D30E53AC-D14B-4338-A93E-DE6D8BD206D3-low.png\"></div>  \n            <p><a name=\"GUID-F59C054C-9F23-46EC-BD89-F7095CDB9CBD\"></a> <em class=\"strong\">链末端的“凸起”骨骼有一个应用的“弹簧”控制器。“弹簧”控制器与一个运动的球体相连。</em> \n            </p> \n            <p><a name=\"GUID-834E8D60-1B83-4C89-B706-12D901985890\"></a> <em class=\"strong\">右：球体的运动使骨骼链断裂。</em> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4744\"></a>为避免此问题，请不要直接对子级骨骼应用位置控制器。而是创建一个 IK 链，然后对 IK 链的终端效应器应用控制器。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190041977\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-86233FD0-4C02-428C-87BE-BFF2D8A0B7C3-low.png\"></div>  \n            <p><a name=\"GUID-F863401B-2B7C-4DF1-9A13-9596C81AA711\"></a> <em class=\"strong\">应用 IK 链连接终端凸起与其父级骨骼。IK 链的终端效应器通过“弹簧”控制器与球体连接。</em> \n            </p> \n            <p><a name=\"GUID-08DBE46C-F961-485B-87A2-09D90D745E1D\"></a> <em class=\"strong\">右：现在，当球体运动时，IK 链可防止骨骼断裂。</em> \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-4743\"></a>只影响方向的约束和控制器，如“方向”或“注视”控制器，在应用于子级骨骼时不存在此问题。 \n            </p> \n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-E6164716-CFA9-4DE9-9976-F8A58850461F.htm\">使用骨骼系统</a><p>本主题逐步简要说明骨骼系统的基本用法。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-E08D0050-23FF-4F6D-9A7F-A4651FABA22B.htm\">将对象用作骨骼</a><p>您可以将任意对象（如圆柱体或长方体）用作骨骼，控制其动画，就好像它们是骨骼系统中的骨骼一样。您可以将 IK 解算器应用于骨骼对象。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-54BB3F45-4A23-449A-A77A-CECF0A194AB1.htm\">骨骼系统参考</a></li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-D7849466-3C9C-4098-87C1-F84ACEA70F64.htm\">骨骼工具：骨骼编辑工具参考</a><p>使用“骨骼编辑工具”卷展栏上的控件可以创建并修改骨骼几何体和结构，并为一个或多个骨骼设置骨骼颜色。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-D3103F18-7C28-41CE-9BDF-A4322111BFAF.htm\">骨骼工具:鳍调整工具参考</a><p>使用“鳍调整工具”卷展栏上的控件调整骨骼几何体的某些方面，包括鳍。 </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-2AC1FCA3-04C2-418A-8AAC-4D7EAA173EDA.htm\"> 骨骼工具：对象属性参考</a><p>使用这些设置可以将其他对象转变为骨骼并控制骨骼的刚性及对齐方式。 </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"related-topics\"><span class=\"noindex\">\n               <div class=\"related-information\">\n                  <h4 class=\"related\">相关信息</h4>\n                  <ul>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-AE4A0089-95F5-4199-A853-ABB8E0DB3439.htm\">IK 解算器</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-F8D02C95-44D6-42A3-8DDF-2D8D17B77D78.htm\">使用交互式 IK 设置动画</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-03F614BB-7449-460C-9D31-1D6FB490418B.htm\">使用应用式 IK 设置动画</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-E08D0050-23FF-4F6D-9A7F-A4651FABA22B.htm\">将对象用作骨骼</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-10AC3D82-523D-4670-8240-D6E3AC79F0BF.htm\">动画约束</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-D5446135-7734-4F9A-A1A1-3564FB89147B.htm\"> 选择并链接</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-516E301F-E911-429F-9337-9FA7FAD49BB6.htm\">反向运动学 (IK)</a></li>\n                     <li class=\"topiclist-litem\"><a href=\"GUID-6190F461-53AA-4B78-9C46-B04376A19DDA.htm\"> “颜色”面板</a></li>\n                  </ul>\n               </div></span></div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";