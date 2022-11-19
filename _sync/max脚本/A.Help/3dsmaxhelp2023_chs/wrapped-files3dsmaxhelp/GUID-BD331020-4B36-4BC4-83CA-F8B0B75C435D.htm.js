var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-BD331020-4B36-4BC4-83CA-F8B0B75C435D\">\n      <meta name=\"indexterm\" content=\"连线: 粒子流（词汇表）\">\n      <meta name=\"indexterm\" content=\"粒子视图: 连线（词汇表）\">\n      <meta name=\"indexterm\" content=\"连线: 参数（词汇表）\">\n      <meta name=\"indexterm\" content=\"参数: 关联（词汇表）\">\n      <meta name=\"indexterm\" content=\"连线: 材质和贴图（词汇表）\">\n      <meta name=\"indexterm\" content=\"材质和贴图节点: 关联（词汇表）\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>关联</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-BD331020-4B36-4BC4-83CA-F8B0B75C435D\"></a><div class=\"head\">\n            <h1>关联</h1>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_2B177825284C41048EC1D532EF6C3ECD\"></a> \n            <h2><a name=\"GUID-8721DD5E-B52F-408A-8FEE-48AD2AB57150\"></a>参数\n            </h2> \n            <p><a name=\"GUID-D3CCEB47-73EB-44A7-A4E0-D4900C6A15A7\"></a>要在对象参数之间创建从属关系，可以使用“<span class=\"char_link\"><a href=\"GUID-B084D14B-2925-4EA6-890F-4F2564BB9D9A.htm\">连线参数</a></span>”功能。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_02C78223E60B4AE69AC30F87812E5559\"></a> \n            <h2><a name=\"GUID-BD314CAD-7235-41C7-B773-8A13047F44DD\"></a>粒子流\n            </h2> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2C1E\"></a>粒子流使用连线显示<span class=\"char_link\"><a href=\"GUID-E66ED65C-B467-47D4-B467-27286098529D.htm\">粒子视图</a></span>中各个事件之间的连接。连线连线有下面两种类型：一种是用于连接<span class=\"char_link\"><a href=\"GUID-8D6E4ECF-8B0C-427C-8B68-245CD61FA345.htm\">全局事件</a></span>和<span class=\"char_link\"><a href=\"GUID-E8F10B5D-CCC9-4F18-A9D0-2EFDA2844C72.htm\">出生事件</a></span>的连线，它用蓝色虚线表示；一种是用于连接<span class=\"char_link\"><a href=\"GUID-6506BC18-FAA7-4960-8235-D00B45AB225A.htm\">测试</a></span>和<span class=\"char_link\"><a href=\"GUID-1444E83A-349E-48DD-ACF6-4EDF5E6BAA9E.htm\">局部事件</a></span>的连线，它用蓝色实线表示。 \n            </p> <a name=\"WS1A9193826455F5FFBA679E112A6A19004C13\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-767FD1FE-1B12-41FF-8F98-B76B6CFD58BB-low.png\"><p class=\"figure-title\">连接全局事件和出生事件的连线（上方）；连接测试和局部事件的连线（下方）</p>\n            </div>  \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2C1D\"></a>要将测试与事件关联，请从<em class=\"mild\">测试输出</em>中将蓝色圆点（默认情况下向测试的左侧伸出）拖动至<em class=\"mild\">事件输入</em>（其从顶部伸出），反之亦然。同样，通过在全局事件底部的<em class=\"mild\">源输出</em>和事件输入之间拖动，可以将全局事件与出生事件关联。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2C1C\"></a> <img src=\"../images/GUID-2687612E-4461-48AD-BB53-D4BB04DA288D-low.png\"> 如果导线已经连接到输入或输出插座，光标会显示一个小加号。 \n            </p> \n            <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-2C1B\"></a>要删除连线，请右键单击该连线，然后选择“删除连线”，或者单击该连线（高亮显示为黄色），然后按 <span class=\"keyboardEntry\">Delete</span> 键。或者，将连接测试和事件的连线从连接器拖至<span class=\"char_link\"><a href=\"GUID-9B113EDD-6118-4526-834D-3AAABB4D8943.htm\">事件显示</a></span>中的空白区域。 \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_41B66798693F46C3A03F0EDF98DE2982\"></a> \n            <h2><a name=\"GUID-63F4DB8D-4594-4476-9201-1DD451A4DD08\"></a>Slate 材质编辑器\n            </h2> \n            <p><a name=\"GUID-4F771430-316A-44F7-BE68-23446BC99D15\"></a>要创建材质树、贴图树或明暗器树，<span class=\"char_link\"><a href=\"GUID-7B51EF9F-E660-4C10-886C-6F6ADE9E8F56.htm\">Slate 材质编辑器</a></span>使用材质、贴图和明暗器节点之间的关联。请参见<span class=\"char_link\"><a href=\"GUID-9BF3A6D1-6665-4EC8-89BD-187FF34BA588.htm\">关联节点</a></span>。 \n            </p> \n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";