var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-366DA2FF-9FE3-4DCE-8FE6-5A19EAA2E74C\">\n      <meta name=\"description\" content=\"3ds Max 中的照明模拟自然照明。\">\n      <meta name=\"indexterm\" content=\"照明: 在 3ds Max 中\">\n      <meta name=\"indexterm\" content=\"3ds Max: 照明\">\n      <meta name=\"indexterm\" content=\"强度（灯光）\">\n      <meta name=\"indexterm\" content=\"入射角\">\n      <meta name=\"indexterm\" content=\"衰减\">\n      <meta name=\"indexterm\" content=\"光能传递\">\n      <meta name=\"indexterm\" content=\"环境: 灯光\">\n      <meta name=\"indexterm\" content=\"颜色: 和灯光\">\n      <meta name=\"indexterm\" content=\"灯光: 和阴影\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>3ds Max 中的照明</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-366DA2FF-9FE3-4DCE-8FE6-5A19EAA2E74C\"></a><div class=\"head\">\n            <h1>3ds Max 中的照明</h1>\n         </div>\n         <p class=\"blurb\"><span class=\"charspan-msgph\">3ds Max</span> 中的照明模拟自然照明。 \n         </p>\n         <div><a name=\"GUID-40F88152-0A9B-4F86-93D9-4869C141E9B4\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>标准灯光比自然照明更简单。使用<span class=\"char_link\"><a href=\"GUID-E337DCA6-6B8D-4689-BCB8-6A6EEF06E6EE.htm\">光度学灯光</a></span>和<span class=\"char_link\"><a href=\"\">光能传递解决方案</a></span>可以提供最佳的真实世界模型。 \n            </div>\n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004538\"></a> \n            <h2><a name=\"GUID-5624CA79-A671-4930-BE84-EAE72088402C\"></a>强度\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E5\"></a>标准灯光的强度为其 HSV 值。当该值为完全强度 (255) 时，灯光最亮；当该值为 0，灯光完全黑暗。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6B62\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>有关材质颜色和其与灯光强度交互方式的详细信息，请参见<span class=\"char_link\"><a href=\"GUID-B691F3E0-FB2B-4EAE-8311-D03F92D4772A.htm\">设计材质</a></span>。 \n               </div>\n            </div> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E4\"></a>光度学灯光的强度由真实强度值设置，以流明、坎得拉或照度为单位。请参见<span class=\"char_link\"><a href=\"GUID-96E37398-613E-495A-A80B-9C5D398982F9.htm\">“强度/颜色/衰减”卷展栏（光度学灯光）</a></span>。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004539\"></a> \n            <h2><a name=\"GUID-3072357F-AC66-4730-885D-00F88EFD647D\"></a>入射角\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E3\"></a> <span class=\"charspan-msgph\">3ds Max</span> 使用从灯光对象到该曲面的一个向量和面法线来计算入射角。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E2\"></a>当入射角为 0 度（也就是光源垂直曲面入射）时，曲面完全照亮。如果入射角增加，则衰减有效，或如果灯光有颜色，则曲面强度减小。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E1\"></a>换句话说，灯光的位置和方向与对象相关，并且是控制场景中入射角的内容。<span class=\"char_link\"><a href=\"GUID-C85C15B9-7739-414B-A2CC-30D42647BCB9.htm\">“放置高光”命令</a></span>是微调灯光位置的一种方法。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900453A\"></a> \n            <h2><a name=\"GUID-9ABF760A-4551-4698-AACC-A95562F01AE0\"></a>衰减\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59E0\"></a>对于标准灯光，默认情况下，<span class=\"char_link\"><a href=\"GUID-DCAA85A2-F058-4920-BBFE-DB742FE665A0.htm\">衰减</a></span>为禁用状态。要使用衰减着色或渲染场景，则对于一个或多个灯光，将其启用。标准灯光的所有类型支持衰减。在衰减开始和结束的位置可以显式设置。这只是一部分操作，因此您不必担心要在灯光对象和照明的对象之间设置严格的逼真距离。更重要的是，使用该功能可以微调衰减的效果。\n               \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59DF\"></a>在室外场景中，衰减可以增强距离的效果。另一种方法是建立环境效果的模型以在渲染时使用大气设置。请参见<span class=\"char_link\"><a href=\"GUID-E8EA0B29-B2FA-471D-8E05-B02C18CB1822.htm\">环境和曝光设置</a></span>。）在室内设置中，衰减对于低强度光源（如蜡烛）非常有用。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59DE\"></a>光度学灯光始终衰减，实际上使用平方反比衰减。（如果是 IES 太阳光，则其强度较大会使其衰减不明显。） \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900453B\"></a> \n            <h2><a name=\"GUID-8EC6179B-CB95-45DB-B1A7-08F42E5D5A13\"></a>反射光和环境光\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59DC\"></a>使用默认的渲染器进行渲染并且标准灯光不计算从场景中对象反射的灯光效果。因此，使用标准灯光照明场景通常要求添加比实际需要更多的灯光对象。但是，可以使用<span class=\"char_link\"><a href=\"\">光能传递</a></span>来显示反射灯光的效果。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59DB\"></a>当不使用光能传递解决方案时，可以使用<span class=\"char_link\"><a href=\"GUID-EF33AEB1-44BE-403E-B4CC-3C29495988C2.htm\">“环境”面板</a></span>调整环境光的颜色和强度。环境光影响对比度。环境光的强度越高，场景中的对比度越低。环境光的颜色为场景染色。有时，环境光是从场景中其他对象获取其颜色的反射光。但是，多数情况下，环境光的颜色应该是场景主光源的颜色组件。 \n            </p> \n            <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-6B61\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>要获得最佳模拟反射光和由场景中对象的反光度改变引起的变化，可以向场景中添加更多灯光并进行设置以排除不想影响的对象。也可以将灯光设置为仅影响曲面的环境光组件。请参见<span class=\"char_link\"><a href=\"GUID-D4232034-E0A5-4761-A212-E3BDF8DB8A14.htm\">常规照明参数</a></span>。 \n               </div>\n            </div> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900453C\"></a> \n            <h2><a name=\"GUID-8FCC6A2B-C46D-4F5D-8AA3-6EBF4CE31608\"></a>颜色\n            </h2> \n            <p><a name=\"WS1A9193826455F5FFBA679E112C9EF5A71-59DA\"></a>可以设置 <span class=\"charspan-msgph\">3ds Max</span> 灯光的颜色。可以使用颜色温度的 RGB 值作为场景的主要照明的指南；请参见<span class=\"char_link\"><a href=\"GUID-0B7D9B90-E954-4754-A566-5931C99CC479.htm\">灯光属性</a></span>。但应注意，我们倾向于感觉场景由白色灯光照亮（这是称为<em class=\"mild\">颜色恒定性的概念现象），</em>因此精确复制光源颜色可以使渲染场景看起来染为奇怪的颜色。只将光源值用作常规指南。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";