var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4\">\n      <meta name=\"description\" content=\"此主题提供了有关如何使用“容器”功能的有用信息、提示、最佳做法和方法。\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>使用容器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4\"></a><div class=\"head\">\n            <h1>使用容器</h1>\n         </div>\n         <p class=\"blurb\">此主题提供了有关如何使用“容器”功能的有用信息、提示、最佳做法和方法。 </p>\n         <div class=\"section\"><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D93\"></a> \n            <h2><a name=\"GUID-9C62487F-D8D3-44B3-B5B4-444B166D1EE3\"></a>容器定义\n            </h2> \n            <p><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D92\"></a>容器定义是一个存储容器内容的 MAXC 文件。可通过以下两种方法之一使用定义文件： \n            </p> <a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D91\"></a><ul>\n               <li> <em class=\"strong\">局部定义</em>存储您对内容所做的更改。 \n               </li>\n               <li> <em class=\"strong\">源定义</em>将内容引用到场景中的容器中。 \n               </li>\n            </ul> \n            <p><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D8E\"></a>当在场景中保存容器时，您会保存“局部定义”。如果其他人引用您的内容，则他们的“源定义”与您的“局部定义”相同。如果他们对您的内容进行更改，则他们会将这些更改保存到自己的唯一“局部定义”中。有一种例外情况是“原地编辑”，该功能会将更改保存回“源定义”，会覆盖“源定义”。\n               \n            </p> \n            <p><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D8D\"></a>您可以像处理常规 MAX 场景文件那样，打开定义文件来排除其内容问题：只需将容器文件的 MAXC 扩展名重命名为 MAX。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF45564F421269B08A8E9C59\"></a> \n            <h2><a name=\"GUID-D22585A8-BA52-44BB-ABFC-B743F27F4D15\"></a>锁定的定义\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF45564F421269B08A8E9C5A\"></a>如果同一局部定义由多个容器共享，那么您一次只能访问其在一个容器。如果状态为“锁定”，则表示此容器的定义正在其他位置被访问。在以下情况下会发生此操作： \n            </p> <a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D8C\"></a><ul>\n               <li>容器允许原地编辑，但某人当前正在编辑它。 </li>\n               <li>容器已被复制，某个副本处于打开状态。 </li>\n               <li>同一 <span class=\"charspan-msgph\">3ds Max</span> 场景文件在其他位置打开，且相同的容器处于打开状态。 \n               </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF45564F421269B08A8E9C5B\"></a>只要存在局部定义，当容器处于打开或编辑状态时，就会创建一个临时文件，以向尝试访问它的其他人标识此状态。退出“原地编辑”模式或关闭容器时，将删除此文件。不过，如果在原地编辑时退出或重置 <span class=\"charspan-msgph\">3ds Max</span>，则会保留此锁定文件，从而会导致以后无法访问容器。要还原可访问性，请打开容器文件所驻留的文件夹，删除与容器文件同名但后缀为 <em class=\"mild\"> <span class=\"filePath\">.lock</span> </em> 的文件。例如，如果容器文件名称为 <em class=\"mild\"> <span class=\"filePath\">dining_room.maxc</span> </em>，则锁定文件的名称为 <em class=\"mild\"> <span class=\"filePath\">dining_room.maxc.lock</span> </em>。 \n            </p> \n            <p><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D88\"></a>为了避免冲突，最好在准备让容器可由另一用户本地访问时关闭容器。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF45564F421269B08A8E9C5C\"></a> \n            <h2><a name=\"GUID-FBF3658A-F7A4-4760-83E9-37E395227672\"></a>提示和最佳做法\n            </h2> <a name=\"WS73099CC142F487557CB2BAEA11CFFB8ADB7-72E2\"></a><ul>\n               <li> <em class=\"strong\">从属关系</em>由于容器可由其他人（可将容器添加到其自己的场景中）继承，请确保将内容的所有相关从属关系打包到容器中。否则，在更新、关闭或卸载时，与容器外部对象的关系将断开。 \n                  <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7FBF\"></a>例如，如果球体的运动通过“链接变换”修改器影响圆柱体的变形，则可以将圆柱体和任何相关对象放在一个容器中，然后将该容器和球体放在另一个容器中。 \n                  </p> \n               </li>\n               <li> <em class=\"strong\">系统单位</em>如果打算与其他人共享容器，则确保所有人使用的系统单位都相同。 \n               </li>\n               <li> <em class=\"strong\">实例化的容器和克隆的容器</em>您不能<span class=\"char_link\"><a href=\"GUID-66FDAD95-1504-4639-B1A4-7D080E0C7FFA.htm\">实例化</a></span>容器。您可以<span class=\"char_link\"><a href=\"GUID-7CFBAEF4-19B4-4472-B249-058DA72CC8CA.htm\">克隆</a></span>容器，由于原始容器已<span class=\"char_link\"><a href=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4.htm#WS1A9193826455F5FF45564F421269B08A8E9C59\">锁定定义</a></span>，克隆的容器将关闭。若要继承对当前打开的任何副本所做的更改，请启用<span class=\"char_link\"><a href=\"GUID-26719F6A-B253-4134-84FB-A660B6D57417.htm#WS1A9193826455F5FF-3A17572711DA7B6E15F-7123\">“关闭时自动更新”</a></span> \n                  <p><a name=\"WS1A9193826455F5FF45564F421269B08A8E9FE5\"></a>如果克隆已保存或已关闭的容器，将无法撤消操作。 \n                  </p> \n               </li>\n               <li> <em class=\"strong\">变换容器</em>容器是其内容的父对象，因此，默认情况下，应用于容器的任何变换都会影响其中的所有对象。 \n                  <p><a name=\"WS73099CC142F48755-191A86AC126720FA354-5520\"></a>要在不影响内容的情况下变换容器，请选择一个打开的容器，在“层次”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“调整变换”卷展栏上，启用“不影响子对象”。仅当“层次”面板处于活动状态时，此设置才适用。 \n                  </p> \n               </li>\n               <li> <em class=\"strong\">层次</em>您可以在容器内的对象间创建父/子关系，但所有内容都是该容器的后代。以下规则适用于容器中的对象层次： <a name=\"WS1A9193826455F5FF45564F421269B08A8E9FE6\"></a><ul>\n                     <li><em class=\"strong\">移除对象</em>从容器中移除对象时，也会移除其子对象，因此子对象不再链接到其原始父对象。 \n                     </li>\n                     <li><em class=\"strong\">断开内容链接</em>在容器中断开某个对象与其父对象的链接会移除该对象及其子对象。同样，如果将内容链接到容器外的父对象，则会移除该对象及其子对象。 \n                        <p><a name=\"WS1A9193826455F5FF45564F421269B08A8E9FE9\"></a>断开内容与容器的链接也会将其移除。 \n                        </p> \n                     </li>\n                     <li><em class=\"strong\">链接到内容</em>如果将对象链接到容器内的父对象，则系统会提示您添加它。如果单击“否”，则在更新、关闭或卸载时将断开与父对象的关系。 \n                     </li>\n                  </ul> \n                  <p><a name=\"WS1A9193826455F5FF-72A156FC122CE7955E0-7C68\"></a>同样，如果将容器外的对象作为容器内的父对象来链接，则系统会从容器中移除该父对象，而不给出任何提示。但是，如果将容器外的对象作为容器内的子对象来链接，则系统会提示您将该容器外的对象添加到容器中。<em class=\"mild\"></em> \n                  </p> \n               </li>\n               <li> <em class=\"strong\">外部参照</em>不能将<span class=\"char_link\"><a href=\"GUID-78895E0D-B345-4862-978B-C7479A818EC8.htm\">外部参照对象</a></span>或具有外部参照材质或控制器的对象添加到容器中。相反，您可以继承一个包含可能用作外部参照的对象的容器，并将其添加到另一个容器中。 \n               </li>\n               <li> <em class=\"strong\">容器中的机器人</em>在将动画机器人放入容器之前，请确保机器人中没有任何对象处于隐藏或冻结状态，且容器在原点 (X=0, Y=0, Z=0) 处居中。将机器人添加到容器中时，请确保同时包括所有从属关系。 \n                  <div><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D87\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>继承时，Biped 和 CAT 系统始终为本地系统。这表示它们仅在关闭的容器中更新，且不支持解除特定属性的锁定。 \n                     </div>\n                  </div> \n               </li>\n               <li> <em class=\"strong\">外部路径</em>继承容器的工作原理很像将<span class=\"char_link\"><a href=\"GUID-3C61E27E-27EC-44E5-B9AE-42B5213C2FE4.htm\">资源合并</a></span>到场景中。例如，如果内容使用位图，则在路径发生变化或<span class=\"char_link\"><a href=\"GUID-BD426294-329E-48D2-AB34-8982E63E2FA0.htm\">外部文件</a></span>中未定义新路径的情况下，将找不到该贴图。 \n                  <p><a name=\"WS73099CC142F48755-191A86AC126B843A87B-5D86\"></a>在这种情况下，可以使用<span class=\"char_link\"><a href=\"GUID-6096C857-610F-42F5-91F4-B303E6BC4C65.htm\">“缺少贴图文件”对话框</a></span>，该对话框将打开以定位相应文件。 \n                  </p> \n               </li>\n            </ul> \n         </div>\n         <div class=\"section\"><a name=\"WS73099CC142F487557CB2BAEA11CFFB8ADB7-72DF\"></a> \n            <h2><a name=\"GUID-C5AD8CED-78A4-4A04-A709-5195B8F08225\"></a>过程\n            </h2> <a name=\"WS73099CC142F487557CB2BAEA11CFFB8ADB7-72DE\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F487557CB2BAEA11CFFB8ADB7-72DD\"></a>要创建容器，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在 <img src=\"../images/GUID-98173E20-D8BF-4A71-A169-42981748A8A8-low.png\">“创建”面板上，单击 <img src=\"../images/GUID-9A23D2B8-9CE2-40BE-98B6-651DBC94F4F7-low.png\">（“辅助对象”）。 \n               </li>\n               <li>在“对象类型”卷展栏中，单击“容器”。 </li>\n               <li>在视口中单击并拖动鼠标即可创建容器辅助对象。 </li>\n               <li>右键单击结束对象创建过程。 \n                  <p><a name=\"WS1A9193826455F5FF44C205DF11D7D1722DF-4478\"></a>如果是首次创建，则容器将打开，因此容器是可编辑的。 \n                  </p> \n               </li>\n            </ol> <a name=\"WS1A9193826455F5FF453265C9125FAA23BBB57D3\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E61\"></a>要根据选定对象创建容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1CB1\"></a>选择要在容器中放置的对象后，执行下列操作之一： \n            </p>\n            <ul>\n               <li>从“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“利用所选内容创建容器”。 \n               </li>\n               <li> 打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。在工具栏上，单击 <img src=\"../images/GUID-106EF6CF-2FCA-4A81-A0CA-888F59946813-low.png\">（“利用所选内容创建容器”）。 \n               </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E5D\"></a>一个容器会随即添加到场景中，其中包含所选对象。 \n            </p> <a name=\"WS1A9193826455F5FF453265C9125FAA23BBB57D4\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E5B\"></a>要将对象添加到容器中，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1CAC\"></a>执行下列操作之一： \n            </p>\n            <ul>\n               <li>在视口中，选择要向其中添加对象的已打开容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”卷展栏中，单击“添加”。使用“添加容器节点”对话框（该对话框打开后会高亮显示要添加的对象），然后单击“添加”。 \n               </li>\n               <li>在视口中，选择要添加到容器中的对象，然后从“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“将选定对象添加到容器中”。使用“选择要添加到的容器”对话框，该对话框打开后会选定要将对象添加到的已打开容器。 \n               </li>\n               <li> 打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。选择要添加的对象，然后在工具栏上单击 <img src=\"../images/GUID-E9D94EE7-8BB8-4C39-900C-B89CA47BFEC6-low.png\">（将选定项添加到容器中）。使用“选择要添加到的容器”对话框高亮显示容器，然后单击“添加”。 \n               </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E56\"></a>所添加的对象在视口中仍然可见，但关闭容器时，它们会从场景中移除并引用容器的 MAXC 文件。 \n            </p> <a name=\"WS1A9193826455F5FF453265C9125FAA23BBB57D5\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E54\"></a>要从容器中移除对象，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1CA6\"></a>执行下列操作之一： \n            </p>\n            <ul>\n               <li>选择要从其移除对象的已打开容器。（无法选择已关闭容器中的对象。）在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”卷展栏上，单击移除。在“移除容器节点”对话框的列表中高亮显示要移除的对象，然后单击移除。 \n               </li>\n               <li>选择要移除的对象，然后从“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“从容器中移除选定对象”。 \n               </li>\n               <li> 打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。高亮显示要移除的对象，然后在工具栏上单击 <img src=\"../images/GUID-B54BC16A-6373-4189-8275-6CED4A1C257E-low.png\">（从容器中移除选定项）。 \n               </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E4F\"></a>相应对象会随即从容器中移除，并添加到场景中。 \n            </p> <a name=\"WS1A9193826455F5FF-7F10494411F03A24F2416D8\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF-7F10494411F03A24F2416D9\"></a>要标识对象所属的容器，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>选择场景中要标识其容器的对象。 </li>\n               <li>在“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“选择内容容器”。 \n                  <p><a name=\"WS1A9193826455F5FF-7F10494411F03A24F2416DC\"></a>在场景中，对象的容器被选中。 \n                  </p> \n               </li>\n            </ol> \n            <div><a name=\"WS73099CC142F48755141942F8122CDB42A51-7885\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>如果是嵌套容器，则会选中对象的直接父容器。 \n               </div>\n            </div> <a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E4E\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E4D\"></a>要关闭和保存容器，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>执行下列操作之一： <a name=\"WS73099CC142F4875546792D6511E39D97277-1CA2\"></a><ul>\n                     <li>选择要关闭的容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“管理容器”卷展栏上，单击“关闭”。 \n                     </li>\n                     <li>选择要关闭的容器，然后从“工具”菜单，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“关闭容器”。 \n                     </li>\n                     <li> 打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。高亮显示要关闭的容器，然后在工具栏上单击 <img src=\"../images/GUID-198F7B2F-B50D-4BF1-B020-192997ABF328-low.png\">（关闭容器）。 \n                     </li>\n                  </ul> \n               </li>\n               <li>如果是首次关闭容器，则系统会提示您先对其进行保存。使用“容器定义文件”对话框指定位置和文件名，然后单击“保存”。 \n                  <p><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EC1\"></a>容器辅助对象由打开状态更改为关闭状态。关闭容器后，该容器就可供其他人编辑。 \n                  </p> \n                  <p><a name=\"WS73099CC142F4875546792D6511E39D9727737D1\"></a>所关闭容器中的对象会从场景中移除，但仍会保持可见。现在，场景会从已保存容器的文件中引用它们。关闭容器这一操作可以有效提高场景的性能。 \n                  </p> \n               </li>\n            </ol> <a name=\"WS1A9193826455F5FF453265C9125FAA23BBB57D6\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C72\"></a>要保存容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C7D\"></a>执行下列操作之一： \n            </p>\n            <ul>\n               <li>选择要关闭的容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地容器”卷展栏上，单击“保存”或“另存为”。 \n               </li>\n               <li>选择要保存的容器，然后选择“工具”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“保存容器”。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。选择要保存的容器，然后在工具栏上单击 <img src=\"../images/GUID-F83D8A9C-C819-47DA-B5A1-05770D8FDD70-low.png\">（保存容器）。 \n               </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF-4855151011E3B702B956FEC\"></a>如果是首次保存容器，则会出现一个文件对话框，提示您输入要保存的 MAXC 文件的名称和位置。 \n            </p> <a name=\"WS1A9193826455F5FF453265C9125FAA23BBB57D7\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EA8\"></a>要重新加载容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C8A\"></a>执行下列操作之一： \n            </p>\n            <ul>\n               <li>在视口中，选择要重新加载的已打开容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”卷展栏中，单击“重新加载”。 \n               </li>\n               <li>在视口中，选择要重新加载的已打开容器，然后在“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“重新加载”。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。选择要重新加载的已打开容器，然后在工具栏上单击 <img src=\"../images/GUID-B55930EF-D546-4CE5-B0CA-660C3D51A064-low.png\">（重新加载）。 \n               </li>\n               <li> \n                  <p><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EA5\"></a>这会将已打开容器刷新到最新保存的版本。使用此功能可以在不保存容器的情况下放弃对容器所做的更改，或刷新容器的副本。 \n                  </p> \n               </li>\n            </ul> <a name=\"WS1A9193826455F5FF453265C9125FAA23BBB57D8\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F4875546792D6511E39D97277-1C86\"></a>要更新容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C83\"></a>只能更新具有继承内容的容器。要更新继承容器，请执行下列操作之一： \n            </p>\n            <ul>\n               <li>在视口中，选择要更新的容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“本地内容”卷展栏中，单击“更新”。 \n               </li>\n               <li>在视口中，选择要更新的容器，然后从“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“更新”。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。选择要更新的容器，然后在工具栏上单击 <img src=\"../images/GUID-B870C440-6C8B-4727-93F4-D5E56F5E8512-low.png\">（更新）。 \n               </li>\n            </ul> \n            <p><a name=\"WS1A9193826455F5FF-4855151011E3B702B9540BB\"></a>这会将容器更新到最新保存的版本。 \n            </p> <a name=\"WS1A9193826455F5FF-4855151011E3B702B9540BC\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF-4855151011E3B702B9540BD\"></a>要继承容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS1A9193826455F5FF-6AB24494122F0F3D6B8-17F4\"></a>此过程显示如何将容器作为新实体放入场景中。另外，您也可以将某容器继承到现有容器中；请参见以下过程。 \n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>执行下列操作之一： <a name=\"WS1A9193826455F5FF-4855151011E3B702B9540BF\"></a><ul>\n                     <li>在“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“继承容器”。 \n                     </li>\n                     <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。在工具栏上，单击 <img src=\"../images/GUID-86046107-B381-4609-BDCD-63CCCECD9D6B-low.png\">（继承容器）。 \n                     </li>\n                  </ul> \n               </li>\n               <li>在“继承容器”对话框中，导航到场景中要继承的容器的 MAXC 文件。 </li>\n               <li>单击“打开”。 \n                  <p><a name=\"WS1A9193826455F5FF-4855151011E3B702B9540C4\"></a>如果容器作者<span class=\"char_link\"><a href=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4.htm#WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E47\">已提供编辑权限</a></span>，则您可以单击“原地编辑”以<span class=\"char_link\"><a href=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4.htm#WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C80\">编辑容器内容</a></span>。 \n                  </p> \n               </li>\n            </ol> <a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EB5\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EB4\"></a>要将已保存容器的内容继承到现有容器中，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在视口中，选择要接收继承内容的容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“管理容器”卷展栏中，单击“继承内容”。 \n               </li>\n               <li>使用“继承容器”对话框导航到要继承其对象和显示属性的容器的 MAXC 文件。 </li>\n               <li>单击“打开”。 \n                  <p><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C77\"></a>当前容器中的所有内容将被删除，并替换为您选择要继承的容器的内容。 \n                  </p> \n                  <p><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C76\"></a>如果容器作者已提供相应权限，则单击“原地编辑”可以<span class=\"char_link\"><a href=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4.htm#WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C80\">编辑容器内容</a></span>。 \n                  </p> \n               </li>\n            </ol> <a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C80\"></a><p class=\"list-intro\"><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C7F\"></a>要编辑继承的容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D9727737D5\"></a>仅当作者<span class=\"char_link\"><a href=\"GUID-3B83E236-5D1D-42D5-AD30-C27DE8AA15E4.htm#WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E47\">已提供编辑权限</a></span>时，您才可以编辑继承的容器。 \n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C9D\"></a>如果已授予编辑权限，请执行下列操作之一： \n            </p>\n            <ul>\n               <li>选择要编辑的容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“管理容器”卷展栏上，单击“原地编辑”。进行更改，然后再次单击“原地编辑”以保存工作并关闭容器。 \n               </li>\n               <li>选择要编辑的容器，然后从“工具”菜单，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“编辑容器”。进行更改，然后再次选择“编辑容器”以保存工作并关闭容器。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。高亮显示要编辑的容器，然后在工具栏上单击 <img src=\"../images/GUID-2587C84F-DCB3-418E-9E70-0F791975F4C2-low.png\">（编辑容器）。进行更改，然后再次单击 <img src=\"../images/GUID-2587C84F-DCB3-418E-9E70-0F791975F4C2-low.png\">（“编辑容器”）以保存工作并关闭容器。 \n                  <p><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C79\"></a>任何随后引用容器的用户将继承更改。 \n                  </p> \n               </li>\n            </ul> <a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E47\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E46\"></a>要允许编辑容器，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>选择打开的容器。 </li>\n               <li>在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“规则”卷展栏上，选择“仅原地编辑”、“仅添加新对象”或“任何未锁定的对象”（并设置要锁定的属性），然后保存容器。有关这些选项的说明，请参见<span class=\"char_link\"><a href=\"GUID-26719F6A-B253-4134-84FB-A660B6D57417.htm#WS73099CC142F48755-1257E12111BF108800E1815\">“规则”卷展栏</a></span>。 \n               </li>\n               <li>关闭容器。 \n                  <p><a name=\"WS1A9193826455F5FF6ABE274011CFFBAA2B2-6E43\"></a>容器文件现在即可被任何其他用户编辑。任何随后引用容器的用户将继承更改。 \n                  </p> \n               </li>\n            </ol> <a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EAF\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EAE\"></a>要将继承的内容更改为本地内容，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F48755141942F8122CDB42A51-7884\"></a>继承的内容从容器文件引用到场景中，以便更改该内容也会更改该文件。您可以通过执行以下过程解除引用内容，以使其变为唯一。 \n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C8F\"></a>执行下列操作之一： \n            </p>\n            <ul>\n               <li>选择场景中要使其引用内容唯一的已关闭容器，然后在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“管理容器”卷展栏上，单击“使所有容器唯一”。 \n               </li>\n               <li>在视口中，选中场景中要使其引用内容唯一的已关闭的容器，然后从“工具”菜单中，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“使所有容器唯一”。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。选择场景中要使其引用内容唯一的已关闭容器，然后从工具栏中单击 <img src=\"../images/GUID-A716B4DF-B224-4B5D-A331-34DB937808EA-low.png\">（使所有内容唯一）。 \n               </li>\n            </ul> \n            <p><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C74\"></a>容器状态由“关闭”更改为“打开”，并且将其所有内容加载到场景中。内容不再从 MAXC 文件中引用；现在，对容器内容的任何更改均在本地完成。 \n            </p> <a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EA4\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EA3\"></a>要在场景中合并容器，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C78\"></a>选择从外部引用的<span class=\"char_link\"><a href=\"GUID-A0F9AA1A-2034-4908-BE07-0ADD532C739E.htm\">源容器</a></span>继承内容的已关闭容器，然后执行下列操作之一： \n            </p>\n            <ul>\n               <li>在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“继承的内容”卷展栏上，单击“合并源定义”。 \n               </li>\n               <li>在“工具”菜单上，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“继承的内容”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“合并容器源”。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>，并使“自定义”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“工具栏”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“容器”处于活动状态，或打开独立的<span class=\"char_link\"><a href=\"GUID-3D50EE6D-C676-4DEB-864F-50F532B546DC.htm\">“容器”工具栏</a></span>。在工具栏上，单击 <img src=\"../images/GUID-7E6EE336-B37C-4F07-9E94-C97CB41FB664-low.png\">（合并容器源）。 \n               </li>\n            </ul> \n            <p><a name=\"WS73099CC142F487557F3ACA8D11D5F2B5BAB-7C6E\"></a>将使用源容器的最新版本加载该容器，并将其从关闭状态更改为打开状态。容器现在为本地容器，且对容器所做的任何更改不再影响源。 \n            </p> <a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EBB\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EBA\"></a>要覆盖内容显示设置，请执行以下操作：\n            </p>\n            <p><a name=\"WS73099CC142F4875546792D6511E39D97277-1C98\"></a>选择要覆盖其对象显示属性的容器，然后执行下列操作之一： \n            </p>\n            <ul>\n               <li>在“修改”面板 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“显示”卷展栏上，单击“覆盖对象属性”。 \n               </li>\n               <li>从“工具”菜单，选择“容器”<img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“覆盖对象属性”。 \n               </li>\n               <li>打开<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm\">“容器资源管理器”</a></span>、<span class=\"char_link\"><a href=\"GUID-2569461E-C859-4D54-BAFF-C8BD078B53AC.htm\">“场景资源管理器”</a></span>或<span class=\"char_link\"><a href=\"GUID-2E00A854-AB09-4DA7-B624-FB52478C0669.htm#WS1A9193826455F5FF-3A17572711DA7B6E15F-711F\">“容器”工具栏</a></span>，然后在工具栏上单击 <img src=\"../images/GUID-9FE7918A-1CE9-4A47-91F1-0FBF77E43283-low.png\">（覆盖对象属性）。 \n                  <p><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EB6\"></a>选定容器中所有对象的各显示属性（包括显示颜色、显示/隐藏和渲染性）被为容器设置的显示属性所覆盖和替换。 \n                  </p> \n               </li>\n            </ul> <a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EC0\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EBF\"></a>要删除容器，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>在视口或资源管理器中，选择要删除的容器。 </li>\n               <li>按 <span class=\"keyboardEntry\">Delete</span>，或者选择“编辑”菜单 <img class=\"adsk-glyph-arrow\" src=\"../images/ac.menuaro.gif\">“删除”。 \n                  <p><a name=\"WS1A9193826455F5FF13FB901511D1F95F40B-7EBC\"></a>当您删除容器时，也会删除其内容。 \n                  </p> \n               </li>\n            </ol> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";