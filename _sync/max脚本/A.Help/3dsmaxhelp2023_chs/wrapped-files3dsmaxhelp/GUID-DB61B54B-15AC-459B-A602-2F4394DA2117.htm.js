var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-DB61B54B-15AC-459B-A602-2F4394DA2117\">\n      <meta name=\"description\" content=\"CATMotion 还集成了 CAT 的重定位系统，与标准 IK 相比具有两个优点：重定位消除了由于 IK 链过度伸长造成的膝关节捕捉问题，并且由于腿推动骨盆上升，角色自动具有了“权重”。\">\n      <meta name=\"indexterm\" content=\"使用重定位和 CATMotion\">\n      <meta name=\"indexterm\" content=\"重定位: CATMotion\">\n      <meta name=\"indexterm\" content=\"CATMotion: 重定位\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>CATMotion 和重定位</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-DB61B54B-15AC-459B-A602-2F4394DA2117\"></a><div class=\"head\">\n            <h1>CATMotion 和重定位</h1>\n         </div>\n         <p class=\"blurb\">CATMotion 还集成了 <span class=\"charspan-msgph\">CAT</span> 的<span class=\"char_link\"><a href=\"GUID-6D34E39E-3E3C-47B3-A193-9CE383AA7461.htm\">重定位</a></span>系统，与标准 IK 相比具有两个优点：重定位消除了由于 IK 链过度伸长造成的膝关节捕捉问题，并且由于腿推动骨盆上升，角色自动具有了“权重”。 \n         </p>\n         <div class=\"bodyReference\">\n            <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C72\"></a>由于重定位可以实现笔直的腿，您可用它来实现使用 IK 难于甚至不可能实现的行走。 \n            </p>\n            <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C71\"></a>在 CATMotion 中，重定位由两个控制器组合控制：KneeAngle 和 LegWeight。 \n            </p>\n            <div class=\"section\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62E0\"></a> \n               <h2><a name=\"GUID-78F4CC07-F230-4981-A17A-F2D886E5F122\"></a>KneeAngle\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C70\"></a>行走循环可以分为四个膝部角度。在 KneeAngle 控制器中可以对膝部角度进行控制，该控制器位于 CATMotion 编辑器的“腿”下方。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C6F\"></a>为了便于说明，将四个膝部角度称为抬起、半抬、踩踏和半踩。 \n               </p> <a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62DF\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0D6677F5-CD09-48DE-A3B8-A97F41AD7799-low.png\"></div>  \n               <p><a name=\"GUID-726B1493-79EE-4714-9385-4378B89384BC\"></a> <em class=\"strong\">1. 半踩</em> \n               </p> \n               <p><a name=\"GUID-A3BA00AE-C1EF-4273-83C7-2EEE86D5094A\"></a> <em class=\"strong\">2. 抬起</em> \n               </p> \n               <p><a name=\"GUID-8134A15F-D2E1-489E-944A-AA4AE2096EAB\"></a> <em class=\"strong\">3. 半抬</em> \n               </p> \n               <p><a name=\"GUID-4972FC19-5495-4C67-AA91-2557E02C1BD6\"></a> <em class=\"strong\">4. 踩踏</em> \n               </p> <a name=\"GUID-1B3C97EB-29FE-46B6-AB0A-46C1232BC203\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D2\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D1\"></a>半踩</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D0\"></a> \n                        <p><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62CF\"></a>介于踩踏和抬起之间的膝部角度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62DE\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62DD\"></a>抬起</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62DC\"></a> \n                        <p><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62DB\"></a>脚即将离开地面时的膝部角度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62DA\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D9\"></a>半抬</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D8\"></a> \n                        <p><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D7\"></a>步子抬起一半时的膝部角度。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D6\"></a><span class=\"term\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D5\"></a>踩踏</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D4\"></a> \n                        <p><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62D3\"></a>脚放回地面时的膝部角度。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl> \n            </div>\n            <div class=\"section\"><a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62CE\"></a> \n               <h2><a name=\"GUID-7F56758D-AC65-4843-BC8C-8707143C21B0\"></a>LegWeight\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C6A\"></a>在重定位中使用的另一个重要控制器称为 LegWeight。它位于 CATMotion 编辑器的“腿”下方，与 KneeAngle 在一起。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C69\"></a>LegWeight 图形控制脚部平台下拉贴近地面的程度。LegWeight 值为 0 时，增加膝部角度会将脚抬起得更高。LegWeight 值为 1.0 时，增加膝部角度会将骨盆拉低。 \n               </p> <a name=\"WS73099CC142F48755-6BF62AC8120443AF808-62CD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7E491273-7DBB-4F80-AA3A-302D13F5295E-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C68\"></a>LegWeight 也可看作腿优先级。图形的左侧是抬起优先级，右侧为踩踏优先级。在尝试将膝部推动到躯干上无法达到的角度时，这会非常重要。然后，通过调整腿权重，可以将一条腿设置为该权重，另一条设置为零，从而控制是否会出现此类错误。通常，踩踏腿应获取优先级。\n                  \n               </p> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C67\"></a>系统中的错误在踝部处同化。如果您注意到踝部倾向于垂直向上或者行为异常，请尝试调整 LegWeight 或 KneeAngle。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C66\"></a>通常首先尝试的是减少最大步幅长度，或者增加或减少各个膝部角度。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C65\"></a>如果移动看上去有些笨拙，则可能是需要平滑 LegWeight 图形。如果在脚部抬起时踝部太直，则可能是图形上抬起部分的 LegWeight 太长。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS7AF5CAC11814013A-2EE5B21011FDE8C01A2-7FE6\"></a> \n               <h2><a name=\"GUID-C607FEAD-F542-46A2-B692-D62939B0830A\"></a>跑动和重定位\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C63\"></a>重定位在行走时非常有用，但并非跑动的理想解决方案。此时，在释放腿部权重和由“飞行”接管之间，基本无法实现有用混合。 \n               </p> \n               <p><a name=\"WS1A9193826455F5FF2566FFD511FDE75E656-3C62\"></a>目前，建议为跑步和跳跃使用 IK。 \n               </p> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";