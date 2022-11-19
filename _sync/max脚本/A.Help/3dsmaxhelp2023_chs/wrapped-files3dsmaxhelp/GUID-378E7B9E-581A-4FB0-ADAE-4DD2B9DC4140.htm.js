var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-378E7B9E-581A-4FB0-ADAE-4DD2B9DC4140\">\n      <meta name=\"description\" content=\"一旦使用运动混合器创建了两足动物的一个动画序列，有几种方法可以对完成后的混合再进行处理。\">\n      <meta name=\"indexterm\" content=\"合成\">\n      <meta name=\"indexterm\" content=\"BIP 文件（Biped 运动）: 使用运动混合器导出\">\n      <meta name=\"indexterm\" content=\"导出动画: 运动混合器\">\n      <meta name=\"indexterm\" content=\"运动混合器: 导出动画\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>将动画导入两足动物</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-378E7B9E-581A-4FB0-ADAE-4DD2B9DC4140\"></a><div class=\"head\">\n            <h1>将动画导入两足动物</h1>\n         </div>\n         <p class=\"blurb\">一旦使用运动混合器创建了两足动物的一个动画序列，有几种方法可以对完成后的混合再进行处理。 </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-365B\"></a>如果要处理当前 Biped 上的混合（而不是场景中的其他 Biped），有以下几个选项： \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004530A\"></a><ul>\n            <li>如果已满意当前的动画效果，可以在<img src=\"../images/GUID-8D3F2D00-992E-46FA-9DFB-EB79A7AAE093-low.png\"><span class=\"char_link\"><a href=\"GUID-D6DBEAF4-1BD8-4731-8D32-A056FC7E5589.htm\">“Biped”卷展栏</a></span>上启用 （混合器模式）来显示 Biped 的混合，并简单地渲染场景。 \n            </li>\n            <li>如果不同脚部/腿部运动之间的变换在变换区域附近产生了微小的跳跃和急速变化，可以为 Biped 创建一个<span class=\"char_link\"><a href=\"GUID-D33E0BA6-D19E-4240-A638-17005ECA0673.htm\">合成</a></span>，将合成复制到 Biped 之前先检查它的效果。合成可以解决很多与脚部和腿部相关的连续性问题。只要您愿意，可以任意多次地修正变换，并重新计算合成。当合成的效果令人满意时，便可以将它复制到 Biped。 \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-365A\"></a>如果想将此运动用于不同的 Biped，可以复制合成到当前 Biped，存储运动为 BIP 文件，然后将此新 BIP 文件加载到其它 Biped 上。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3659\"></a>混合也可以另存为 MIX (<em class=\"mild\">.mix)</em> 文件。<span class=\"char_link\"><a href=\"GUID-55A96E97-3BA4-4B54-9315-08134FF584B5.htm#WS73099CC142F48755-2231E4B3128F27EE529181D\">MIX 文件</a></span>可以根据需要加载到其它 Biped，并在运动混合器中进行编辑。 \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004530B\"></a> \n            <h2><a name=\"GUID-BF9CD5FA-3B64-4ACB-9843-2150AA4E370E\"></a>使用合成固定基于脚的变换\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3658\"></a>当使用踩踏脚（使用了 IK 约束）来创建两个运动之间的变换时，剪辑间的运动可能匹配得不是很好。当发生这种情况时，踩踏脚可能会发生滑动或跳跃，或者腿部可能会在变换区间附近不自然地伸展。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3657\"></a>合成可以在基于脚运动变换之间来修正这两类错误： \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004530C\"></a><ul>\n               <li>变换时脚步从一个踩踏运动滑到另一个踩踏运动中。 </li>\n               <li>腿部完全伸直（过度伸长），不自然地到达踩踏位置。 </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3656\"></a> <img src=\"../images/GUID-26EC12E8-6AF7-4C8E-821B-389ACCE6BB7C-low.png\"><span class=\"char_link\"><a href=\"GUID-B1C12417-3DC9-4E21-81D9-5BA4DE2C6446.htm\">“混合器首选项”对话框</a></span>中的合成选项可以帮助更正这些问题。在运动混合器工具栏上单击“首选项”来访问此对话框。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004530D\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-81CC539C-0C39-4E83-99DD-C1D797CC216E-low.png\"></div>  \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3655\"></a>为使合成产生作用，这些选项必须在计算合成之前先进行设置。如果为每个“合成”选项打开了“提示”，那么在每次计算合成的时，都会得到设置这些选项的提示。否则，合成将使用“混合器首选项”对话框中的设置。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3654\"></a>“合成选项”组中的选项决定了合成是否影响踩踏脚剪辑间的变换，以及怎样影响这些变换。强制 IK 约束影响踩踏脚，而“过滤过度伸长腿部”则影响不自然伸直的腿部。如果希望每次进行和合成时都询问这些设置，请为每个“合成”选项打开“提示”。有关这些选项的详细信息，请参见<span class=\"char_link\"><a href=\"GUID-B1C12417-3DC9-4E21-81D9-5BA4DE2C6446.htm\">“混合器首选项”对话框</a></span>。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FFBA22E1113C6C30C0E5EB\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>不要指望合成过程可以修正与剪辑或变换相关的极端问题。为得到最佳结果，在合成之前先调整变换以最小化脚步滑动及腿部过度伸长。请参见<span class=\"char_link\"><a href=\"GUID-A3A9D091-EB99-4B7D-BF04-9B0AAA1E962D.htm\">处理过渡</a></span>。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3653\"></a> \n            <h2><a name=\"GUID-BE0D7E06-A525-4557-8A47-C12968C44D44\"></a>过程\n            </h2> <a name=\"WSF742DAB041063133-128E6F4112A1CE6C39-7EA0\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004530E\"></a>要执行合成，并将其复制到 Biped，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在轨迹组集的左上方单击 Biped 名称，来选择运动混合器中的 Biped。 </li>\n               <li>右键单击最上面的 Biped 轨迹，然后从弹出菜单中选择“计算合成”。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3652\"></a>如果在“混合器首选项”对话框中打开了每个“合成”选项的“提示”，将会得到合成选项的提示信息。单击“确定”开始合成。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3651\"></a>混合器底部的进度条显示了合成过程的进度。不久会在 Biped 的混合中便创建了一条名为“合成”的新轨迹。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-3650\"></a>可以单击它来打开和关闭该轨迹。当轨迹显示为实线时，合成轨迹处于活动状态，Biped 执行合成中的动画。当轨迹显示为“#”时，轨迹处于非活动状态，Biped 执行粗糙混合中的动画。 \n                  </p> \n               </li>\n               <li>单击“合成”轨迹，使之处于活动状态。 </li>\n               <li>拖动时间滑块或播放动画来检查变换。如果需要修正，先关闭“合成”轨迹，修正变换再重新计算“合成”。重复该过程直至变换正确。 </li>\n               <li>“合成”轨迹为活动状态时，选择“Biped”菜单<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“将合成复制到 Biped”。 \n               </li>\n               <li>禁用 <img src=\"../images/GUID-38E8EAC3-3C8D-449C-9132-A98EB5838922-low.png\">（混合器模式）（如果它启用的话）。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-364F\"></a>即使 Biped 不在“混合器模式”中，在视口中依然可以看到 Biped 身上来自运动混合器的混合。 \n                  </p> \n               </li>\n               <li>要将动画保存为 BIP 文件，在“Biped”卷展栏上，单击 <img src=\"../images/GUID-58181066-FF2F-477C-9C97-480089FC63AC-low.png\">（保存文件）。 \n               </li>\n            </ol> <a name=\"WSF742DAB041063133-128E6F4112A1CE6C39-7E9F\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004530F\"></a>要将运动混合器数据保存为 MIX 文件，请执行以下操作：\n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-364E\"></a>MIX 文件存储了选定 Biped 的运动混合器数据的当前状态，包括所有剪辑、变换、修剪、缩放和时间扭曲。保存 MIX 文件之前不需要塌陷剪辑。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在轨迹集的左上方单击 Biped 名称，来选择运动混合器中的 Biped。 </li>\n               <li>在运动混合器菜单中，选择“Bipeds”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“保存混合文件”。输入 <em class=\"mild\">.mix</em> 文件的文件名，然后单击“保存”。 \n               </li>\n            </ol> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";