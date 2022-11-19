var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-17\">\n      <meta name=\"topicid\" content=\"GUID-9C15BBC3-E781-4F9B-8268-DAE121D9DAE1\">\n      <meta name=\"description\" content=\"循环事件导致其他事件随时间在视频输出中重复。它们控制排序，但是不执行图像处理。\">\n      <meta name=\"indexterm\" content=\"视频后期处理: 循环事件\">\n      <meta name=\"indexterm\" content=\"添加: 循环事件（视频后期处理）\">\n      <meta name=\"indexterm\" content=\"循环: 循环事件（视频后期处理）\">\n      <meta name=\"contextid\" content=\"IDH_VP_EDIT_LOOP\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>添加循环事件</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-9C15BBC3-E781-4F9B-8268-DAE121D9DAE1\"></a><div class=\"head\">\n            <h1>添加循环事件 </h1>\n         </div>\n         <p class=\"blurb\">循环事件导致其他事件随时间在视频输出中重复。它们控制排序，但是不执行图像处理。 </p><a name=\"GUID-0EC27813-32AA-4BBF-8E1A-EC303EAF5C0E\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-A858E7AD-1F94-4ACA-8B74-03270BE1DC49\">“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “视频后期处理” <img src=\"../images/ac.menuaro.gif\"> “视频后期处理”工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-D8868DBD-FA4A-46CD-BE1D-920E2CB9A0BD-low.png\">（添加循环事件）</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-AEC47A70-CCE1-4E1D-82EC-EAA0D576C52A\">“渲染”菜单  <img src=\"../images/ac.menuaro.gif\"> “视频后期处理” <img src=\"../images/ac.menuaro.gif\"> “视频后期处理”窗口  <img src=\"../images/ac.menuaro.gif\">  选择“循环”事件。 <img src=\"../images/ac.menuaro.gif\"> “Video Post”工具栏  <img src=\"../images/ac.menuaro.gif\"> <img src=\"../images/GUID-2A9F145D-5649-43FA-84FD-22500EDDA2C2-low.png\">（编辑当前事件）</span> \n            </li>\n         </ul>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A86\"></a>循环事件始终为带有单个子事件的父事件。子事件本身也可以是带有子事件的父事件。任一类型的事件都可以是循环事件的子事件，包括其他循环事件。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A85\"></a>循环事件的范围栏以彩色显示子事件播放的原始持续时间，以灰色显示循环事件的范围。可以通过在循环事件轨迹中拖动子事件的帧范围或子事件的原始范围，来更改子事件播放的持续时间，但只能通过更改“编辑循环事件”对话框中的“次数”参数来调整循环（范围栏的灰色部分）的全长。\n            \n         </p>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A84\"></a> \n            <h2><a name=\"GUID-B8EFD4F2-B47F-4FD3-9182-B44B797211B9\"></a>过程\n            </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004468D\"></a><p class=\"list-intro\"><a name=\"WS1A9193826455F5FFBA679E112A6A19004468E\"></a>要添加循环事件，请执行以下操作：\n            </p>\n            <ol type=\"1\" start=\"1\">\n               <li>选择子事件。 </li>\n               <li>单击 <img src=\"../images/GUID-D8868DBD-FA4A-46CD-BE1D-920E2CB9A0BD-low.png\">（添加循环事件）。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A83\"></a>出现“添加循环事件”对话框。 \n                  </p> \n               </li>\n               <li>选择循环设置，然后单击“确定”。 \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A82\"></a>“循环”事件显示为选定事件的父事件。 \n                  </p> \n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A81\"></a>“循环”事件在整个“循环”事件范围内重复子事件。 \n                  </p> \n               </li>\n            </ol> \n         </div>\n         <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A80\"></a> \n            <h2><a name=\"GUID-1D9A2A5A-DCB0-4688-BA15-32DFA26B2E82\"></a>界面\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A7F\"></a>“添加循环事件”和“编辑循环事件”对话框具有相同的控件。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004468F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E34A1D1B-C4B8-4CCF-AAAC-3BD0C54FDC45-low.png\"></div> <a name=\"GUID-C14D2349-9BC3-4E73-ABEF-8AE08BC34272\"></a><div class=\"dl_section\"><a name=\"GUID-FB11D22C-F6DF-4778-8AD1-FA4639F3170F\"></a><p class=\"title\"><a name=\"GUID-D26C68BD-319A-4FF0-B230-69DA68CE9A81\"></a>“顺序”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7C88\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A7E\"></a>标签</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6982\"></a> 用于赋予事件唯一名称。唯一名称使此循环事件在长的事件列表中易于识别。 \n                     </div>\n                  </dd>\n               </dl><a name=\"WS1A9193826455F5FFBA679E112A6A190044691\"></a><ul>\n                  <li> <em class=\"strong\">循环</em>（默认设置。）当子事件到达其范围的终点时，通过再次启动子事件来对其进行重复。 \n                  </li>\n                  <li> <em class=\"strong\">往复</em>重复子事件，方法是首先向前播放，然后向后播放，再向前播放，以此类推。不重复子事件的最后帧。 \n                  </li>\n               </ul>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-56BFA255-E86F-42A1-A1F6-3B1FD608031A\"></a><p class=\"title\"><a name=\"GUID-47842C09-E4A2-42A8-9557-5AA2340F99D8\"></a>“次数”组\n               </p>\n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A7D\"></a>指定除子事件首次播放以外的重复循环或往复的次数。 \n               </p>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-02B9A82D-E876-4F01-A24A-B3772A9A8E7E\"></a><p class=\"title\"><a name=\"GUID-9E5E9443-1268-4F92-9C2B-22E95C5B1AA3\"></a>“Video Post 参数”组\n               </p>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7C87\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A7C\"></a>VP 开始时间/结束时间</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6981\"></a> 在整个 Video Post 队列中设置选定事件的开始和结束帧。“Video Post”根据此处指定的帧数渲染事件。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-4F542F6211C68D07B4A-7C86\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-7A7B\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-6980\"></a> 启用或禁用事件。禁用该框时，事件被禁用，当渲染队列时，“Video Post”会忽略该事件。必须分别禁用各个事件。例如，禁用合成层事件并不禁用合成的图像事件。禁用事件的范围栏在事件轨迹区域中不可用。 \n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";