var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-59F11070-BAB4-4C47-82FC-08F04E3061AB\">\n      <meta name=\"indexterm\" content=\"场（词汇表）\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>场</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-59F11070-BAB4-4C47-82FC-08F04E3061AB\"></a><div class=\"head\">\n            <h1>场</h1>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2FBB\"></a>您制作的动画也许最终要在电视屏幕上观看。标准的视频信号通过将动画分割为时间段（<span class=\"char_link\"><a href=\"GUID-92B75FD6-C112-44D6-AB89-DB50D11AE0DE.htm\">帧</a></span>）画面来显示动画。每一帧的图像被分割为水平线（扫描线）。已经开发出一种用于视频信号中表达帧信息的特殊方法。这种方法称之为“场交替”。电视监视器通过单独扫描每一帧的两个部分（即称为“场”）显示视频信号。其中，一个场包含一帧中的奇数扫描线，另一个场则包含偶数扫描线。电视监视器单独扫描并显示每一帧的两个场。场在屏幕上隔一条水平线交替显示，以此“层叠”在一起，组成一幅交替图像。\n            \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A190049D1\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-750C4F4D-9BAB-46F7-B83B-989BFFFD14C9-low.png\"><p class=\"figure-title\">两个场相结合产生一帧。</p>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190049D3\"></a> \n            <h2><a name=\"GUID-D375ACAE-3838-4CEA-B1FB-85AD61A9BF09\"></a>渲染为场\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2FBA\"></a>在“渲染设置”对话框的<span class=\"char_link\"><a href=\"GUID-BCA258CE-B108-4B77-A62E-7014842E1157.htm\">“公用参数”卷展栏 </a></span><img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“选项”组中，“渲染为场”复选框可设定渲染器是以指定的帧速率渲染所有的帧，还是以两倍于该帧速率的速率渲染场。打开“渲染为场景”时，渲染器在每两帧之间渲染额外的子帧图像，然后将每一帧和接下来的子帧合成为包含两个场的单独图像。结果是一个每秒 60\n               个场的动画，适合在 <span class=\"char_link\"><a href=\"GUID-A35B5A04-D6A4-410E-B472-661934A40D01.htm\">NTSC</a></span> 制式的电视监视器上播放。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A190049D4\"></a> \n            <h2><a name=\"GUID-74BD8879-79E7-49B0-B788-A958A7B23970\"></a>场顺序\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2FB9\"></a>当进行“渲染为场”操作时，同时指定了场顺序，以此决定先播放哪一个场。“场顺序”配置设置位于“渲染”页面的“<span class=\"char_link\"><a href=\"GUID-5F506D3B-BC0F-4605-8EE5-A294543C0C1F.htm\">首选项</a></span>”中。每一帧的扫描线都进行了编号，每一个场包含了奇数或偶数的扫描线。视频源（例如，广播发送器、录像机或数字视频录像机）决定了每一个场中包含了哪组扫描线以及哪个组最先进行显示。场被标志为场 1 (F1)和场 2 (F2)；每一帧中可能包含奇数扫描线（第一、第三、第五等等）或偶数扫描线（第二、第四、第六等等）。\n               \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2FB8\"></a>使用默认设置“奇数”作为“场顺序”首选项时，<span class=\"charspan-msgph\">3ds Max</span> 将把第一个场图像 (F1) 渲染到奇数扫描线上。如果场顺序首选项设置为“偶数”，那么第一个场图像将被渲染到偶数扫描线上。要正确显示图像，场顺序必须和视频设备的场顺序一致。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2FB7\"></a>某些视频系统要求首先渲染奇数扫描线，而其他的系统则要求首先渲染偶数扫描线。默认情况下，“场顺序”参数设置为“奇数”。如果看到视频输出中不正常的脉冲，请将参数设为“偶数”。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";