var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-39CCD58A-4ED2-4339-8B70-89ADEA49B2E8\">\n      <meta name=\"description\" content=\"一个 U 向放样曲面可以穿过多个曲线子对象插入一个曲面。此时，曲线成为曲面的 U 轴轮廓。\">\n      <meta name=\"indexterm\" content=\"NURBS 曲面: U 向放样\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>U 向放样曲面</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-39CCD58A-4ED2-4339-8B70-89ADEA49B2E8\"></a><div class=\"head\">\n            <h1>U 向放样曲面</h1>\n         </div>\n         <div class=\"abstract\"> \n            <p><a name=\"GUID-969AC92B-D8CC-4019-9313-142947D1ED62\"></a> <img src=\"../images/GUID-B8FEE518-9DC5-48B5-88B4-3FE47D04AB8A-low.png\"> \n            </p> \n            <p class=\"blurb\">一个 U 向放样曲面可以穿过多个曲线子对象插入一个曲面。此时，曲线成为曲面的 U 轴轮廓。 </p> \n         </div><a name=\"UL_4E499742E134415CBFC5C13A87E97D9E\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-5194FB9E-C7EF-4DD6-8DAF-11A3989AAC5C\">选择 NURBS 对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> “创建曲面”卷展栏  <img src=\"../images/ac.menuaro.gif\"> “从属曲面”组框  <img src=\"../images/ac.menuaro.gif\"> “U 向放样”</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-4BD189F6-91DE-43FD-A375-7926FA19B5E8\">选择 NURBS 对象。 <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板  <img src=\"../images/ac.menuaro.gif\"> NURBS 工具箱  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-B8FEE518-9DC5-48B5-88B4-3FE47D04AB8A-low.png\">（创建 U 向放样曲面）</span> \n            </li>\n         </ul><a name=\"WS1A9193826455F5FFBA679E112A6A190042068\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F9EEA391-91B7-4021-8E51-8CF3F31C70F4-low.png\"><p class=\"figure-title\">使用多条曲线来创建 U 向放样曲面</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ACD\"></a> <em class=\"strong\">提示</em> \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190042069\"></a><ul>\n            <li>U 向放样能够成为一个完全稠密的曲面。使用视口时，为了提高性能，将视口的<span class=\"char_link\"><a href=\"GUID-A66E61B1-8B69-4A61-A7AF-40C8927DA00E.htm\">曲面近似</a></span>设置为“曲率依赖”。 \n            </li>\n            <li>在确保用于放样的曲线与在同一命令中拥有同样数量的 CV 情况下（也就是曲线指向同样的方向），这时可以加快 U 向放样的创建。同样，CV 曲线的性能也优于点曲线。 </li>\n            <li>在创建 U 向放样时，禁用从属子对象显示（包括 U 向放样本身），也可以提高交互性能。默认的依赖子对象键盘切换方法是按住复合键 <span class=\"keyboardEntry\">Ctrl+D</span> （<span class=\"char_link\"><a href=\"GUID-C14C1D13-0E8E-4471-9671-077FDFB156C8.htm\">键盘快捷键覆盖切换</a></span>按钮必须为启用状态。） <a name=\"WS1A9193826455F5FFBA679E112A6A19004206A\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-2A3BFA02-63D8-4DE4-9D88-A353D200FBC4-low.png\"><p></p>\n                  <p class=\"figure-title\">闭合 U 向放样</p>\n               </div>  \n            </li>\n         </ul>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004206B\"></a> \n            <h2><a name=\"GUID-D52B69B6-D76E-47DF-925C-DA2230EC0E1A\"></a>自动曲线附加\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ACC\"></a>创建 U 向放样后，可以在活动的 NURBS 模型中选择非子对象的曲线。可以在场景中选择其它曲线或<span class=\"char_link\"><a href=\"GUID-6B094F12-B672-4E8B-8A03-0D6776B6C78B.htm\">样条线</a></span>对象。在选择曲线时，自动将其附加到当前的对象上，与使用了“附加”按钮效果相同。 \n            </p> \n            <div><a name=\"WS73099CC142F487551FACE55114134B88B1-725A\"></a><div class=\"note-warning\"><span class=\"label label-target-language\">警告:</span>如果附着的曲线是另一个 NURBS 模型的子对象，整个模型都会附着到此模型上（即为，曲线的父 NURBS 对象）。 \n               </div>\n            </div> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ACB\"></a>在将鼠标移动到一条非活动 NURBS 对象部分的曲线上方时，光标会改变图形来表示可以选取该曲线，但是曲线不会用蓝色高亮显示。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ACA\"></a> \n            <h2><a name=\"GUID-7732AE45-BB08-43BC-94E0-13B43B6C6A02\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004206C\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004206D\"></a>创建 U 向放样曲面，请执行以下操作：\n            </p>\n            <p><a name=\"WS1A9193826455F5FF-316FD70E123DECE8002-4F8E\"></a>NURBS 对象必须至少包含两条曲线。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在 NURBS 工具箱中，启用 <img src=\"../images/GUID-B8FEE518-9DC5-48B5-88B4-3FE47D04AB8A-low.png\">（创建 U 向放样曲面）。 \n               </li>\n               <li>单击第一曲线。 </li>\n               <li>顺次单击附加的曲线。 <a name=\"WS1A9193826455F5FFBA679E112A6A19004206E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-B41AB467-5115-4E67-9A43-0ACDE534497E-low.png\"></div>  \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC9\"></a>创建 U 向放样。沿着单击中的曲线将其“拉伸”。对曲线单击的命令可以影响 U 向放样曲面的图案。在“U 向放样曲面”创建卷展栏中显示曲线名。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC8\"></a>创建 U 向放样时，按住 <span class=\"keyboardEntry\">Backspace</span> 键，将单击中的最后一条曲线从 U 向放样曲线列表中移除。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC7\"></a>在创建放样时，“翻转法线”控件能够翻转曲面法线的方向。（创建完成后，使用“曲面公用”卷展栏中的控件对法线进行翻转。） \n                  </p> \n               </li>\n               <li>单击鼠标右键，结束 U 向放样的创建。 </li>\n            </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A19004206F\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190042070\"></a>创建一个包含自动附着的 U 向放样（例），请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>转至 <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板，创建三个或更多独立的 CV 或点 NURBS 曲线。 \n               </li>\n               <li>转至 <img src=\"../images/GUID-00A9C3E8-5814-4255-A1E2-8DB5CFC5D439-low.png\">“修改”面板。在 NURBS 工具箱中，单击以启用 <img src=\"../images/GUID-B8FEE518-9DC5-48B5-88B4-3FE47D04AB8A-low.png\">（创建 U 向放样曲面）。 \n               </li>\n               <li>按适当顺序单击要放样的曲线。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC6\"></a><span class=\"charspan-msgph\">3ds Max</span> 将创建 U 向放样。不需要将曲线折叠到 NURBS 曲面上，或者<span class=\"char_link\"><a href=\"GUID-7CE9DE0A-D7B9-4432-AC8A-72298B8DA9BD.htm\">附着到已存在的 NURBS 模型上</a></span>。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC5\"></a>在将鼠标移动到一条非活动 NURBS 对象部分的曲线上方时，光标会改变图形来表示可以选取该曲线，但是曲线不会用蓝色高亮显示。 \n                  </p> \n               </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC4\"></a> \n            <h2><a name=\"GUID-D81939CB-6AAC-44E8-99FF-253CBD62405B\"></a>界面\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC3\"></a>选中一个 U 向放样子对象时，在“修改”面板的下方显示一个显示 U 向放样参数的卷展栏。此卷展栏仅在选中<em class=\"mild\">一个</em> U 向放样子对象时显示。每次不能对一个以上的 U 向放样进行编辑，这与一些其它的 NURBS 子对象不同，在选中多个 U 向放样子对象时卷展栏不会显示。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC2\"></a>创建放样曲面和扫描曲面时，可以访问所有的曲面参数，并且可以对曲面进行一些编辑操作。在创建曲面时，能够反转曲线的起点，也能对曲线的起点进行设置。也可以使用箭头按钮改变曲线的顺序，并且能够使用移除按钮将一条曲线移除。 \n            </p> \n            <div><a name=\"WS73099CC142F487551FACE55114134B88B1-7259\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>在编辑 U 向放样子对象时，关闭“曲面公用”卷展栏，这样更易于查看“U 向放样曲面”卷展栏。 \n               </div>\n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190042071\"></a> \n               <h3><a name=\"GUID-1038DB4D-B0D8-4182-AF9B-9B5FA5A604FE\"></a>“U 向放样曲面”卷展栏 (创建时间)\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190042072\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-B41AB467-5115-4E67-9A43-0ACDE534497E-low.png\"></div>  <a name=\"GUID-12FC473E-F518-4B99-A761-6356F83A6597\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2EE\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC1\"></a>U 向曲线</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-614A\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531A6\"></a>这些列表显示所单击的曲线名称，按单击顺序排列。单击需要选定的曲线的名称，将其选定。视口以蓝色显示选中的曲线。最初，第一条曲线被选中。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AC0\"></a>也可以同时选中多条曲线。在使用“编辑曲线”按钮时，此操作很有用。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2EF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ABF\"></a>箭头按钮</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6149\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531A7\"></a>使用此按钮改变用于创建 U 向放样的曲线的顺序。在列表中选中一条曲线，使用箭头来将选中对象上下移动。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ABE\"></a>在创建放样时，可以使用这些按钮。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-3879FDBE-328F-4BF0-9532-AFFB801A6D85\"></a><p class=\"title\"><a name=\"GUID-630CCFB8-802D-4242-BAB1-A62922F67A6B\"></a>“曲线属性”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ABD\"></a>这些控件影响在“U 曲线”列表中选中的单条的曲线（一般而言，相对于放样曲面的属性）。只有在选定“U 曲线”列表中的曲线后，才能使用这些控件。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F0\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ABC\"></a>反转</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6148\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531A8\"></a>在设置时，反转选中曲线的方向。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ABB\"></a>起始点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6147\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531A9\"></a>调整曲线起点的位置。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6ABA\"></a>如果曲线不是闭合曲线该控件无效。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB9\"></a>调整起始点时，在两者间会显示一条蓝色的虚线，该虚线表示两者的对齐。曲面不会显示，因此这不会降低调整速度。当松开鼠标按钮时，该曲面将重新出现。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB8\"></a>张力</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6146\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531AA\"></a>调整放样的张力，此放样与曲线相交。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB7\"></a>使用 COS 切线</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6145\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531AB\"></a>如果曲线是曲面上的曲线，启用此切换能够使 U 向放样使用曲面的切线。这会帮助您将放样光滑的混合到曲面上。默认设置为禁用状态。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB6\"></a>除非曲线是一个点或者是曲面上的 CV 曲线，否则不能使用此切换。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F4\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB5\"></a>翻转切线</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6144\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531AC\"></a>翻转曲线的切线方向。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB4\"></a>除非曲线是一个点或者是曲面上的 CV 曲线，或者启用了“使用 COS 切线”，否则不能使用此切换。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F5\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB3\"></a>自动对齐曲线起始点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6143\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531AD\"></a>（禁用。） \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F6\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB2\"></a>闭合放样</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6142\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531AE\"></a>（禁用。） \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F7\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB1\"></a>插入</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6141\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531AF\"></a>（禁用。） \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F8\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AB0\"></a>移除</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6140\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B0\"></a>从 U 向放样曲面中移除一条曲线。选中列表中的曲线，然后单击移除。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AAF\"></a>在创建放样时，可以使用此按钮。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2F9\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AAE\"></a>优化</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-613F\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B1\"></a>（禁用。） \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2FA\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AAD\"></a>替换</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-613E\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B2\"></a>（禁用。） \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2FB\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AAC\"></a>创建时显示</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-613D\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B3\"></a>启用此项后，在创建 U 向放样曲面时会显示它。禁用此项后，能够更快速的创建放样。默认设置为禁用状态。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2FC\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AAB\"></a>翻转法线</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-613C\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B4\"></a>翻转 U 法线的方向。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190042074\"></a> \n               <h3><a name=\"GUID-DD3E96D5-A778-4536-82B2-75D47A371D1D\"></a>“U 向放样曲面”卷展栏（修改时间）\n               </h3> <a name=\"WS1A9193826455F5FFBA679E112A6A190042075\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C5809ADE-6CDB-44EA-8E74-6BA1C88CDD8F-low.png\"></div>  <a name=\"GUID-1099F377-7688-4A63-80BC-2C18790BD2EF\"></a><dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2FD\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AAA\"></a>U 向曲线</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-613B\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B5\"></a>这些列表显示所单击的曲线名称，按单击顺序排列。在列表中单击需要选定的曲线的名称，将其选定。视口以蓝色显示选中的曲线。最初，第一条曲线被选中。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA9\"></a>也可以同时选中多条曲线。在使用“编辑曲线”按钮时，此操作很有用。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2FE\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA8\"></a>箭头按钮</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-613A\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B6\"></a>使用此按钮改变用于创建 U 向放样的曲线的顺序。在列表中选中一条曲线，使用箭头来将选中对象上下移动。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA7\"></a>在创建放样时，可以使用这些按钮。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-1AA2EA54-BD9F-4F35-BCE1-336D5DFBAA3B\"></a><p class=\"title\"><a name=\"GUID-233ABBF7-A816-4911-BB5B-9BE3E3884D01\"></a>“曲线属性”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA6\"></a>这些控件影响在“U 曲线”列表中选中的单条的曲线（一般而言，相对于放样曲面的属性）。只有在选定“U 曲线”列表中的曲线后，才能使用这些控件。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D2FF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA5\"></a>反转</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6139\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B7\"></a>在设置时，反转选中曲线的方向。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D300\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA4\"></a>起始点</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6138\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B8\"></a>调整曲线起点的位置。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA3\"></a>如果曲线不是闭合曲线该控件无效。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA2\"></a>调整起始点时，在两者间会显示一条蓝色的虚线，该虚线表示两者的对齐。曲面不会显示，因此这不会降低调整速度。当松开鼠标按钮时，该曲面将重新出现。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D301\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA1\"></a>张力</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6137\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531B9\"></a>调整放样的张力，此放样与曲线相交。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D302\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6AA0\"></a>使用 COS 切线</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6136\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531BA\"></a>如果曲线是曲面上的曲线，启用此切换能够使 U 向放样使用曲面的切线。这会帮助您将放样光滑的混合到曲面上。默认设置为禁用状态。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A9F\"></a>除非曲线是一个点或者是曲面上的 CV 曲线，否则不能使用此切换。 \n                           </p> \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D303\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A9E\"></a>翻转切线</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6135\"></a> \n                           <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531BB\"></a>翻转曲线的切线方向。 \n                           </p> \n                           <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A9D\"></a>除非曲线是一个点或者是曲面上的 CV 曲线，或者启用了“使用 COS 切线”，否则不能使用此切换。 \n                           </p> \n                        </div>\n                     </dd>\n                  </dl>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D304\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A9C\"></a>自动对齐曲线起始点</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6134\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531BC\"></a>启用此状态后，对齐 U 向放样中的所有曲线的起点。<span class=\"charspan-msgph\">3ds Max</span> 会选择起点位置。使用自动对齐将减小放样曲面的扭曲量。默认设置为禁用状态。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D305\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A9B\"></a>闭合放样</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6133\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531BD\"></a>如果最初，放样是开曲面，启用此切换，能够在第一条曲线和最后一条曲线之间添加一段新的曲面段使原曲面闭合。默认设置为禁用状态。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D306\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A9A\"></a>插入</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6132\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531BE\"></a>在 U 向放样曲面中插入一条曲线。单击以启用“插入”，然后单击曲线。此曲线插入于所选中曲线的<em class=\"mild\">前面</em>。要在末尾插入一条曲线，首先在列表中高亮显示“----End----”标记。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D307\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A99\"></a>移除</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6131\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531BF\"></a>从 U 向放样曲面中移除一条曲线。选中列表中的曲线，然后单击移除。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A98\"></a>在创建放样时，可以使用此按钮。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D308\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A97\"></a>优化</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6130\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531C0\"></a>细化 U 向放样曲面。单击启用细化，然后在曲面上单击一个 U 轴等参曲线。（拖动鼠标到曲面上方，此时高亮显示可用的曲线。）单击的曲线转换为一个 CV 曲线并插入至放样和 U 曲线列表。在细化一个点曲线时，对 U 向放样的细化可以轻微的改变曲面的曲率。一旦通过添加\n                           U 曲线来细化曲面后，可以使用“编辑曲线”来改变曲线。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D309\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A96\"></a>替换</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-612F\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531C1\"></a>用其他曲线替代 U 曲线。选定一条 U 曲线，单击启用“替换”，然后在视口中单击新的曲线。当拖动鼠标时高亮显示可用的曲线。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A95\"></a>只有在“U 曲线”列表中选定一条曲线时，才能使用此按钮。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D30A\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A94\"></a>显示等参曲线</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-612E\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531C2\"></a>此项设置为启用时，会显示 U 向放样的等参曲线与 U 轴曲线（此曲线用来构建放样）。此 V 轴曲线仅用于显示。不可以将它们用于曲面构建。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF4E421D7D11BF108001D30B\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A93\"></a>编辑曲线</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-612D\"></a> \n                        <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA87531C3\"></a>不用切换到其他子对象层级就可以编辑当前选中曲线。单击启用“编辑曲线”。会显示点或 CV 曲线，如果曲线是一个 CV 曲线还会显示控制晶格。现在可以进行变换，或者在点或曲线 CV 子对象等级将点或 CV 改为想要的结果。要完成编辑此曲线，单击禁用“编辑曲线”。\n                           \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-6A92\"></a>启用“编辑曲线”后，会显示选中曲线的所有可用卷展栏，包括“曲线公用”卷展栏、“CV 或点”卷展栏（取决于曲线类型）和“CV 曲线或点曲线”卷展栏。这些卷展栏显示于“U 向放样”卷展栏下方。它们允许编辑放样曲线和曲线的点或 CV 而不必切换到子对象等级。\n                           \n                        </p> \n                        <div><a name=\"WS73099CC142F487551FACE55114134B88B1-7258\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>在 U 向放样中编辑曲线时，禁用显示 U 向放样本身可以使曲线更易于观察和改善性能。使用 <span class=\"keyboardEntry\">Ctrl+D</span>（当启用<span class=\"char_link\"><a href=\"GUID-C14C1D13-0E8E-4471-9671-077FDFB156C8.htm\">“键盘快捷键覆盖切换”按钮</a></span>）来切换从属子对象（包括“U 向放样”）的显示。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n               </dl> \n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";