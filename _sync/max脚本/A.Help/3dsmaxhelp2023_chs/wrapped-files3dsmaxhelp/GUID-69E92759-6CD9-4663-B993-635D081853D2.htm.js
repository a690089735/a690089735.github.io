var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-69E92759-6CD9-4663-B993-635D081853D2\">\n      <meta name=\"description\" content=\"“单位设置”对话框建立单位显示的方式，通过它可以在通用单位和标准单位（英尺和英寸，还是公制）间进行选择。也可以创建自定义单位，这些自定义单位可以在创建任何对象时使用。\">\n      <meta name=\"indexterm\" content=\"单位: 设置\">\n      <meta name=\"contextid\" content=\"IDH_VIEWS_UNITS_SETUP\">\n      <meta name=\"contextid\" content=\"IDH_DIALOG_UNITS_SETUP\">\n      <meta name=\"contextid\" content=\"0-40025\">\n      <meta name=\"contextid\" content=\"40025.0\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <meta name=\"audience\" content=\"user\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"customizing\">\n      <title>“单位设置”对话框</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-69E92759-6CD9-4663-B993-635D081853D2\"></a><div class=\"head\">\n            <h1> “单位设置”对话框</h1>\n         </div>\n         <p class=\"blurb\">“单位设置”对话框建立单位显示的方式，通过它可以在通用单位和标准单位（英尺和英寸，还是公制）间进行选择。也可以创建自定义单位，这些自定义单位可以在创建任何对象时使用。 </p>\n         <div class=\"bodyReference\"><a name=\"UL_2EA2385D217E44FC8C6DD8CC88687360\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-FCA62AE0-DA04-485C-AEDD-4171602CA80D\">默认菜单：“自定义”菜单  <img src=\"../images/ac.menuaro.gif\"> “单位设置” <img src=\"../images/ac.menuaro.gif\"> “单位设置”对话框</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-925E25BF-221D-426D-B7AC-805F5BB4C7F2\">Alt 菜单：“场景”菜单  <img src=\"../images/ac.menuaro.gif\"> “工具(场景设置)” <img src=\"../images/ac.menuaro.gif\"> “单位设置” <img src=\"../images/ac.menuaro.gif\"> “单位设置”对话框</span> \n               </li>\n               <li> <span class=\"MenuCascade\" id=\"GUID-B607E826-0F09-4174-B289-B24CC7BCB863\">Alt 菜单：“自定义”菜单  <img src=\"../images/ac.menuaro.gif\"> “自定义” <img src=\"../images/ac.menuaro.gif\"> “单位设置” <img src=\"../images/ac.menuaro.gif\"> “单位设置”对话框</span> \n               </li>\n            </ul>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52E2\"></a>在此处设置的单位用于度量场景中的几何体。除了这些单位之外，<span class=\"charspan-msgph\">3ds Max</span> 也将系统单位用作一种内部机制。只有在创建场景或导入无单位的文件<em class=\"mild\">之前</em> 才可以更改系统单位。不要在现有场景中更改系统单位。 \n            </p>\n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52E1\"></a>也可以使用该对话框设置照明单位。 \n            </p>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900411D1\"></a> \n               <h2><a name=\"GUID-18346DB2-A91B-4A33-9C36-AFC0FE6D9593\"></a>系统单位与显示单位\n               </h2> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52E0\"></a>注意到“系统单位”和“显示单位”之间的差异十分重要。“显示单位”只影响几何体在视口中的显示方式。而“系统单位”决定几何体实际的比例。例如，如果导入一个含有 1 x 1 x 1 的长方体的 DXF 文件（无单位），那么 <span class=\"charspan-msgph\">3ds Max</span> 可能以英寸或是英里的单位导入长方体的尺寸，具体情况取决于“系统单位”。这会对场景产生重要的影响，这也是要在导入或创建几何体<em class=\"mild\">之前</em>务必要设置系统单位的原因。 \n               </p> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52DE\"></a> \n               <h2><a name=\"GUID-ED4F48E4-5738-4F6F-AA98-4F6D1A8683AE\"></a>过程\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900411D3\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900411D4\"></a>要将单位更改为英尺和英寸，请执行以下操作：\n               </p>\n               <ol type=\"1\" start=\"1\">\n                  <li>在“单位设置”对话框上，选择“美国标准”。 </li>\n                  <li>从下拉列表的显示选项中进行选择。 <a name=\"WS1A9193826455F5FFBA679E112A6A1900411D5\"></a><ul>\n                        <li>如果您要将测量显示为英尺以及英寸，则选择英寸表示的方式：分数或小数。还可以在“默认单位”中，选择“英尺或英寸”。 </li>\n                        <li>如果选择其中一个部分选项，则选择右侧下拉列表上的部分。 </li>\n                     </ul> \n                  </li>\n               </ol> <a name=\"WS1A9193826455F5FFBA679E112A6A1900411D7\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900411D8\"></a>要在数值字段输入分数，请执行以下操作：\n               </p>\n               <ul>\n                  <li>在数值字段输入分数后，它们会转化为正确的单位。例如，如果将单位设置为“英尺/分数英寸”，同时将“默认单位”设置为“英尺”，输入 <em class=\"strong\">37/45</em> 并按下 <span class=\"keyboardEntry\">Enter</span> 键会得到结果 0\'9.867\" 或 37/45\'。 \n                  </li>\n               </ul> \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52DD\"></a>要输入分数以及单位说明符，请将单位说明符放置在分数后面。例如，应当输入 <em class=\"strong\">17/5\'</em>，而不是 <em class=\"strong\">17\'/5</em>。 \n               </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900411D9\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A1900411DA\"></a>要在单位类型间进行转化，请执行以下操作：\n               </p>\n               <ul>\n                  <li>通过输入有效单位说明符及数字并按下 <span class=\"keyboardEntry\">Enter</span> 键，可以在单位类型间进行转化。 \n                     <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52DC\"></a>数字转化为当前单位显示类型。例如，如果单位设置为“米”，输入 <em class=\"strong\">1/2</em>，结果是 0.5M。但是，如果输入 <em class=\"strong\">1/2\'</em> 或 <em class=\"strong\">6\"</em>，结果是 0.152M。 \n                     </p> \n                  </li>\n               </ul> \n            </div>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52DB\"></a> \n               <h2><a name=\"GUID-A9A37DB9-1396-4C1E-9F93-18D733392E13\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A1900411DB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-6D37E6A2-A35D-46F7-B3C0-D8C7D8B5C2B6-low.png\"></div>  <a name=\"GUID-C74A96CA-5306-4D48-B3A8-A36B37010AA0\"></a><dl>\n                  <dt><a name=\"WS73099CC142F48755-1257E12111BF108800E375E\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52DA\"></a>系统单位设置</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS73099CC142F4875546792D6511E39D97277-1475\"></a> 单击以显示<span class=\"char_link\"><a href=\"GUID-22D2D2B9-9A82-47FA-88DD-67B1A91E2337.htm\">“系统单位设置”对话框</a></span>并更改系统单位比例。 \n                        <div><a name=\"WS73099CC142F487551051018113CCCDB767-910\"></a><div class=\"note-warning\"><span class=\"label label-target-language\">警告:</span> 只能在导入或创建几何体<em class=\"mild\">之前</em> 更改系统单位值。不要在现有场景中更改系统单位。 \n                           </div>\n                        </div> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-69F34542-DD55-488E-AC2C-2A79BB961186\"></a><p class=\"title\"><a name=\"GUID-0671B3A8-9BE0-40AC-AFB7-9324C4745799\"></a>“显示单位比例”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52D9\"></a>选择单位比例选项（“公制”、“美国标准”、“自定义”或“通用”）来激活设置。 \n                  </p><a name=\"UL_50360F6E36AA445D8CD5663AE07ED517\"></a><ul>\n                     <li><em class=\"strong\">公制</em>选择此选项，然后选择公制单位：“毫米”、“厘米”、“米”、“公里” \n                     </li>\n                     <li><em class=\"strong\">美国标准</em>选择此选项，然后选择“美国标准”单位。如果选择分数单位，那么就会激活相邻的列表来选择分数组件。小数单位不需要其他额外的指定。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52D6\"></a>“美国标准”如下所示： \n                        </p> <a name=\"WS1A9193826455F5FFBA679E112A6A1900411DE\"></a><ul>\n                           <li>分数英寸 </li>\n                           <li>小数英寸 </li>\n                           <li>分数英尺 </li>\n                           <li>小数英尺 </li>\n                           <li>英尺/分数英寸 </li>\n                           <li>英尺/小数英寸 </li>\n                        </ul> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52D5\"></a>对最后两项，可以指定当在数值字段输入值但没有单位说明符就按下 <span class=\"keyboardEntry\">Enter</span> 键的情况下默认的单位，比如 \' 代表英尺 \" 代表英寸。 \n                        </p> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52D4\"></a>例如，如果“英尺”是默认单位，那么输入 <em class=\"strong\">5</em> 接着按下 <span class=\"keyboardEntry\">Enter</span> 键，结果是 5 英尺。输入 <em class=\"strong\">5\"</em> 接着按下 <span class=\"keyboardEntry\">Enter</span> 键，结果是 0\'5\"。如果“英寸”是默认单位，那么输入 <em class=\"strong\">5</em> 接着按下 <span class=\"keyboardEntry\">Enter </span> 键，结果是 0\'5\"。输入 <em class=\"strong\">5\'</em> 接着按下 <span class=\"keyboardEntry\">Enter</span> 键，结果是 5 英尺。 \n                        </p> \n                     </li>\n                     <li><em class=\"strong\">自定义</em>填充该字段来定义度量的自定义单位。 \n                     </li>\n                     <li><em class=\"strong\">通用单位</em>（默认设置。）<span class=\"charspan-msgph\">3ds Max</span> 中的通用或“系统”单位等于 1 英寸。您可以将其视为您自己定义的任意单位，除非您的场景使用依赖真实度量值的功能，如光度学灯光、位图的“使用真实比例”等。<em class=\"mild\"></em> \n                        <div><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6D14\"></a><div class=\"note-warning\"><span class=\"label label-target-language\">警告:</span>如果您打算对包含详细信息且其尺寸远小于 1 英寸的对象建模，请将通用单位用作小于 1 英寸的任意单位：例如，1 个单位 = 1/50 英寸。否则，您可能会在使用模型时遇到因舍入误差引起的问题。 \n                           </div>\n                        </div> \n                     </li>\n                  </ul>\n               </div>\n               <div class=\"dl_section\"><a name=\"GUID-3CC8B0D6-E3EE-4252-9DB5-7360EABA4FEF\"></a><p class=\"title\"><a name=\"GUID-CD621C34-9BF3-4296-9366-58E4DB63DA3A\"></a>“照明单位”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-52D1\"></a>使用该下拉列表可选择是以美制单位还是国际单位显示灯光值。 \n                  </p>\n               </div> \n            </div>\n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-22D2D2B9-9A82-47FA-88DD-67B1A91E2337.htm\"> “系统单位设置”对话框</a><p>当在<span class=\"char_link\"><a href=\"GUID-69E92759-6CD9-4663-B993-635D081853D2.htm\">“单位设置”对话框</a></span>中单击“系统单位设置”时，显示该对话框。 \n                     </p>\n                  </li>\n                  <li class=\"topiclist-litem\"><a href=\"GUID-6EDC8022-5D6C-4931-A230-38A53194EC8D.htm\">“文件加载：单位不匹配”对话框</a><p>当打开或合并以不同于当前 3ds Max 会话的系统单位设置 保存的文件时，将出现此对话框。默认系统单位设置为“英寸”。 </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";