var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-8F48662F-16F8-4405-B166-57817AEAF47E\">\n      <meta name=\"description\" content=\"使用反向运动学要求设置许多 IK 组件的参数。然后简要地定义这些组件；详细信息在其他主题中提供。\">\n      <meta name=\"indexterm\" content=\"术语（反向运动学）\">\n      <meta name=\"indexterm\" content=\"反向运动学: 术语\">\n      <meta name=\"indexterm\" content=\"IK: IK 关节\">\n      <meta name=\"indexterm\" content=\"运动学链\">\n      <meta name=\"indexterm\" content=\"端点符\">\n      <meta name=\"indexterm\" content=\"绑定: 对象\">\n      <meta name=\"indexterm\" content=\"末端效应器\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>IK 术语</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-8F48662F-16F8-4405-B166-57817AEAF47E\"></a><div class=\"head\">\n            <h1>IK 术语</h1>\n         </div>\n         <p class=\"blurb\">使用反向运动学要求设置许多 IK 组件的参数。然后简要地定义这些组件；详细信息在其他主题中提供。 </p>\n         <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E54C\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span> <span class=\"charspan-msgph\">3ds Max</span> 提供了多种反向运动学系统。共有四种类型的 IK 解算器，加上应用的 IK 和不使用 IK 解算器的交互式 IK 系统。并非所有系统都使用以下全部的参数： \n            </div>\n         </div><a name=\"GUID-4C7B4569-AF87-49FB-B459-E1ECEDFE04E3\"></a><dl>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E96\"></a>IK 解算器</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5950\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525F4\"></a>IK 解算器可以将 IK 解决方案应用到运动学链中。运动学链是由一个骨骼系统或一组链接对象所组成的。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E94\"></a>关节</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-594F\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525F6\"></a>IK 关节可以控制对象与它的父亲一起如何进行变换。可以在三种类别中用设置来指定关节行为： \n                  </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044D03\"></a><ul>\n                     <li> <em class=\"strong\">对象轴点</em>对象的轴点位置定义了应用关节运动的地方。 \n                     </li>\n                     <li> <em class=\"strong\">关节参数</em>更改“层次”命令面板中的 IK 设置，以确定关节操作的方向、约束和顺序。 \n                     </li>\n                     <li> <em class=\"strong\">父轴点</em>对象父轴点的位置定义了对关节约束进行估量的原点。 \n                     </li>\n                  </ul> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E93\"></a>用以为对象和它的父对象放置轴点的命令在<span class=\"char_link\"><a href=\"GUID-D2A59192-0A81-49D5-AAA1-E6898D0B3957.htm\">调整轴</a></span>中进行了描述。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E92\"></a>开始关节和结束关节</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-594E\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525F7\"></a>开始关节和结束关节定义了 IK 解算器所管理的 IK 链的开始和结束。链的层次确定了它的方向。启用末端效应器显示后，结束关节的轴点显示为末端效应器。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E8F\"></a>运动学链</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-594D\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525FA\"></a>反向运动学计算运动学链中对象的位置和方向。运动学链定义为 IK 控制之下的层次的任何一部分。IK 链开始于一个选定的节点，并由一个开始节点和结束节点组成。链的基点可以是整个层次的根或者指定为链的终结点的对象。在将 IK 解算器应用到链上，或自动应用\n                     IK 解算器来创建骨骼链的时候，就定义了运动学链。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E8E\"></a>目标</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-594C\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525FB\"></a>目标为“HI 解算器”用来操纵链的末端。在设置了目标的动画后，IK 解决方案会尝试将末端效应器（链中最后一个孩子的轴点）与目标位置相匹配。在使用“HD 解算器”时，末端效应器执行与目标相同的功能。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE6\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E8D\"></a>末端效应器</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-594B\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525FC\"></a>对于任何 IK 解决方案，明确移动控制对象。之后，IK 计算就会移动并旋转运动学链中所有其他的对象，以对移动的对象作出响应。进行移动的对象就是目标，在“HI解算器”或“IK 肢体解算器”中，或在“HD 解算器中”，它是<span class=\"char_link\"><a href=\"GUID-7A35B53A-BF95-40EB-B053-15868E469127.htm\">末端效应器</a></span>。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE7\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E8B\"></a>首选角度</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-594A\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525FE\"></a>确定关节要弯曲的方向。在应用“HI 解算器”后，首选角度创建了链元素之间的基准角度。“IK 解决方案”会在计算中查找这个角度。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE8\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E8A\"></a>解算器平面和旋转角度操纵器</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5949\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87525FF\"></a>可以在开始关节和结束关节之间定义平面，这有助于控制 IK 解决方案。在操纵模式中，可以更改旋转角度操纵器来调整解算器平面或设置它的动画。这就为链确定了向上矢量操纵柄，它也可以随着时间设置动画。也可以定义一个旋转角度操纵器的跟随目标。有关详细信息，请参见<span class=\"char_link\"><a href=\"GUID-FABCED32-D76C-4CDB-AAB1-225736FE0EF3.htm\">白皮书：HI IK 解算器的旋转角度</a></span>。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CE9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E89\"></a>终结点</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5948\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752600\"></a>可以将一个或多个对象定义为终结点，来明确设置 HD（历史依赖型）IK 链的地基。终结点对象可以停止 IK 计算，以使高于层次的对象不受 IK 解决方案的影响。终结点对象也可以用来定义使用多个 HD IK 链的层次。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E88\"></a>在“HI 解算器”或“IK 肢体解算器”中不使用终结点对象。在这些情况下，终结点是由链的结束关节所确定的。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CEA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E87\"></a>绑定对象</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5947\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752601\"></a>层次中的对象可以绑定到世界，也可以绑定到<span class=\"char_link\"><a href=\"GUID-94C5DB5B-2187-41AE-BE03-A6058A9BB617.htm\">跟随对象</a></span>。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E86\"></a>绑定允许层次外的对象影响层次中的对象。 \n                  </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190044D04\"></a><ul>\n                     <li>绑定到世界的对象将会尝试保持它当前的位置和方向。 </li>\n                     <li>绑定到跟随对象的对象将会尝试与跟随对象的位置和方向相匹配。 </li>\n                     <li>在使用“HD 解算器”，或使用“已应用 IK”时，可以绑定到跟随对象。在使用“HI 解算器”或“IK 肢体解算器”时，如果要绑定到跟随对象，可以在目标和任何选定的跟随对象（通常是一个点、虚拟对象、样条线或骨骼）之间应用位置约束。 </li>\n                  </ul> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CEB\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E85\"></a>已启用 IK</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5946\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752602\"></a>（HI 解算器）在使用“HI 解算器”时，既可以使用反向运动学，也可以使用正向运动学 (FK) 来设置动画。启用“启用”后，反向运动学控制了链，并且关键帧只会放置到目标上。在禁用“启用”后，正像运动学可旋转关键点将会放置到所有的骨骼上。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CEC\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E84\"></a>IK/FK 捕捉</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5945\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752603\"></a>（HI 解算器）在使用“HI 解算器”时，如果同时使用 IK 和 FK 来设置动画，可能会使目标移离链的末端，从而导致动画发生跳动。按下“IK/FK 捕捉”将会使目标移回以匹配末端效应器的位置，从而消除动画的跳动。 \n                  </p> \n               </div>\n            </dd>\n            <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E1CED\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3E83\"></a>IK 设置 FK 姿势</span></dt>\n            <dd>\n               <div class=\"definition\"><a name=\"WS1A9193826455F5FF-4855151011E22F62443-5944\"></a> \n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752604\"></a>（HI 解算器）启用此按钮后，移动目标将自动为骨骼设置旋转关键点。实际上，这允许您使用 IK 操纵器来创建体态，并设置 FK 关键点。 \n                  </p> \n               </div>\n            </dd>\n         </dl>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";