var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-C8549FD7-0B35-4267-B23A-54D1BA14EEC8\">\n      <meta name=\"description\" content=\"当在两足动物的上半身和下半身使用不同的运动时，您可以创造这样一个环境：两个剪辑中的平衡彼此不匹配。例如，如果上半身使用的动画中手臂大幅度摇摆，那么应该补偿一定程序的臀部动画，以保持 Biped 平衡。这种手臂运动与其他臀部/腿部运动的直接混合最有可能造成平衡失调。\">\n      <meta name=\"indexterm\" content=\"平衡轨迹\">\n      <meta name=\"indexterm\" content=\"横向比\">\n      <meta name=\"indexterm\" content=\"传播\">\n      <meta name=\"indexterm\" content=\"轨迹组: 调整平衡\">\n      <meta name=\"indexterm\" content=\"Biped 平衡, 运动混合器\">\n      <meta name=\"indexterm\" content=\"运动混合器: 调整平衡\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>在混合器中调整两足动物平衡</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-C8549FD7-0B35-4267-B23A-54D1BA14EEC8\"></a><div class=\"head\">\n            <h1>在混合器中调整两足动物平衡</h1>\n         </div>\n         <p class=\"blurb\">当在两足动物的上半身和下半身使用不同的运动时，您可以创造这样一个环境：两个剪辑中的平衡彼此不匹配。例如，如果上半身使用的动画中手臂大幅度摇摆，那么应该补偿一定程序的臀部动画，以保持 Biped 平衡。这种手臂运动与其他臀部/腿部运动的直接混合最有可能造成平衡失调。\n            \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900452FC\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F34DAD3F-1F4F-441A-A951-F92E2300AC79-low.png\"><p class=\"figure-title\">Biped 带有一组相同的上半身和下半身躯干运动。Biped 左侧拥有平衡补偿，而右侧却没有。</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3665\"></a>默认情况下，混合器通过对脊骨和骨盆运动进行略微改动，以此补偿上半身和下半身运动的差别。例如，如果 Biped 腰部弯曲，则将移动骨盆，以补偿移位，同时减小脊骨旋转角度，以使 Biped 保持平衡。平衡补偿用于使 Biped 运动看上去尽可能自然。\n            \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3664\"></a>在混合器中，您可以使用平衡轨迹控制自动平衡补偿的程度。在 Biped 添加到混合器时，将为其自动创建一个平衡轨迹。 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900452FD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-FD645016-0DE9-4F16-90F6-1307FD19114A-low.png\"><p class=\"figure-title\">平衡轨迹</p>\n         </div>\n         <div style=\"margin-top: 9pt;\"><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E5E7\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span> <img src=\"../images/GUID-26EC12E8-6AF7-4C8E-821B-389ACCE6BB7C-low.png\"> 如果未显示 Biped 的平衡轨迹，请单击运动混合器工具栏上的“首选项”，然后打开<span class=\"char_link\"><a href=\"GUID-B1C12417-3DC9-4E21-81D9-5BA4DE2C6446.htm\">“混合器首选项”对话框</a></span>上的“平衡曲线”。 \n            </div>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3663\"></a>平衡视图拥有一条权重曲线，用于调整上半身和下半身轨迹组之间自动平衡补偿的程度。默认情况下，平衡轨迹上的权重值为 1.0 时可以提供最大的补偿度。您还可以减少各个点上的权重曲线，以降低混合器执行的自动平衡度。 \n         </p>\n         <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E5E8\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>每个 Biped 都只拥有一个平衡轨迹，并且无法将其删除。 \n            </div>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3662\"></a>要对平衡补偿进行精细调整，还可以更改<span class=\"char_link\"><a href=\"GUID-BF0CE381-9A6B-438E-BB65-579EA085F4FB.htm#WSF742DAB041063133-128E6F4112A1CE6C39-7E94\">“平衡参数”对话框</a></span>上的参数（可以通过“混合”菜单打开该对话框。 \n         </p>\n         <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E5E9\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>“平衡曲线”和相关参数不适用于非 Biped 混合。 \n            </div>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3661\"></a> \n            <h2><a name=\"GUID-807FD3CD-72F4-496E-8840-46BED032F5FC\"></a>过程\n            </h2> <a name=\"WSF742DAB041063133-128E6F4112A1CE6C39-7EA3\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900452FE\"></a>要使用平衡轨迹调整平衡，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>将 Biped 添加到混合器中，然后为其至少创建两个轨迹组。请参见<span class=\"char_link\"><a href=\"GUID-6AEB7A30-8831-4119-B422-F892345F33B0.htm\">过滤混合器轨迹</a></span>。 \n               </li>\n               <li>过滤一个轨迹组，以只从脊骨、手臂和头部使用动画。请参见<span class=\"char_link\"><a href=\"GUID-6AEB7A30-8831-4119-B422-F892345F33B0.htm\">过滤混合器轨迹</a></span>。此轨迹组将保持上半身运动。 \n               </li>\n               <li>过滤另一个轨迹组，以只应用于腿部、骨盆和 COM 轨迹。此轨迹组将保持下半身运动。 </li>\n               <li>将带有大量上半身运动的剪辑添加到上半身轨迹中。请参见<span class=\"char_link\"><a href=\"GUID-77D7056B-6D16-48CE-9522-EC55EEEFECB0.htm\">将剪辑导入混合器</a></span>。 \n               </li>\n               <li>将带有截然不同的下半身动画的剪辑添加到下半身轨迹中。 </li>\n               <li>单击 <img src=\"../images/GUID-78DEFD6A-5579-43EF-8BDA-BBE30A1FA573-low.png\">（平衡权重模式）。此按钮在平衡轨迹的最右端。 <a name=\"WS1A9193826455F5FFBA679E112A6A1900452FF\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-30E83D80-9EBA-42EC-9BB6-5D582071D2CA-low.png\"></div>  \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3660\"></a>此时可以在平衡轨迹的顶部看到权重曲线。 \n                  </p> \n                  <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E5EA\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>如果您未看到权重曲线，请单击“首选项”，以显示“混合器首选项”对话框，然后打开“权重曲线”。 \n                     </div>\n                  </div> \n               </li>\n               <li>将节点添加到权重曲线中，然后调整节点。有关如何添加节点及编辑权重曲线的信息，请参见<span class=\"char_link\"><a href=\"GUID-EE231165-4EA1-4325-889C-A4F546E10DBC.htm\">调整轨迹权重</a></span>。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045300\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C099C536-2F1D-4855-8E61-5A5B358143A3-low.png\"></div>  \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-365F\"></a>将权重设置为 0.0 之后，混合器并不能调整脊骨和骨盆运动，以补偿上半身和下半身运动的差异。介于 0.0 和 1.0 之间的值可以在一定程度上调整平衡。 \n                  </p> \n               </li>\n            </ol> <a name=\"PROC_TO_FINE_TUNE_BALANCE_COMPENSATION_ON_THE_PELVIS_AND_SPINE\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A190045301\"></a>要微调骨盆和脊骨上的平衡补偿，请执行以下操作：\n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-365E\"></a>“平衡参数”对话框上的值可用于对 Biped 的平衡进行精细调整。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在运动混合器中，单击 Biped 轨迹组左上角上的名称可将其选中。 </li>\n               <li>从运动混合器菜单中，选择“混合”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“平衡参数”。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-365D\"></a>显示“平衡参数”对话框。 \n                  </p> \n               </li>\n               <li>要调整骨盆上水平平衡补偿度，请更改“横向比”参数。值越小就可以对骨盆执行更大幅度的向前/向后运动，而值越大就可以使用更大幅度的左右运动来进行补偿。 </li>\n               <li>要调整下半身运动的脊骨旋转在上半身传播的程度，请更改“传播”参数。使用较高的值旋转脊骨链接可以更准确地追随 COM 和骨盆运动。 <a name=\"WS1A9193826455F5FFBA679E112A6A190045302\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-0DE6D4A3-1451-41FE-A224-FF622F23C8C7-low.png\"><p></p>\n                     <p class=\"figure-title\">Biped 带有相同的上半身和下半身运动。Biped 左侧的传播设置为 0.0，而右侧的传播为 1.0。</p>\n                  </div>  \n               </li>\n            </ol> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";