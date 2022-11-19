var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-D37A8F15-D272-4ED8-B328-144C4366B3E9\">\n      <meta name=\"indexterm\" content=\"布尔: 布尔操作（术语表）\">\n      <meta name=\"indexterm\" content=\"布尔\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>布尔操作</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-D37A8F15-D272-4ED8-B328-144C4366B3E9\"></a><div class=\"head\">\n            <h1>布尔操作</h1>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-305B\"></a>布尔对象通过对其几何体执行逻辑操作来组合两个或多个对象。这些对象通常重叠，但它们不必重叠。原始的两个对象是<span class=\"char_link\"><a href=\"GUID-8789C2FD-02A3-4973-9779-5A11513A0031.htm\">操作对象</a></span>，而布尔型对象自身是运算的结果。 \n         </p>\n         <p><a name=\"GUID-9E510BD3-6FBB-47DD-B45D-F28484A010F5\"></a>下图显示一些典型的布尔操作： \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004950\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-F3B810A3-54C9-4A18-AB68-654B1528AD41-low.png\"></div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-305A\"></a> <em class=\"strong\">围栏是操作对象 A，猫是操作对象 B。</em> \n         </p>\n         <p><a name=\"GUID-A679C52A-70A0-45E4-8DEB-F1EBEAFE5C7A\"></a> <em class=\"strong\">左上和右上：A 减 B</em> \n         </p>\n         <p><a name=\"GUID-1E99BB91-BB03-4C47-A492-AC3FC4B98BF4\"></a> <em class=\"strong\">左上第二：B 减 A</em> \n         </p>\n         <p><a name=\"GUID-EBBB01CD-88E3-4BD8-B74B-E46AF9CACAA3\"></a> <em class=\"strong\">左下第二：并集</em> \n         </p>\n         <p><a name=\"GUID-2824E5E1-6DD5-4932-8544-87D2E8BE9BCD\"></a> <em class=\"strong\">左下：相交</em> \n         </p>\n         <p><a name=\"GUID-60B8A72A-BEE9-4E27-A761-92A841F43ADB\"></a>对于几何体，标准布尔操作如下： \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A19004952\"></a><ul>\n            <li> <em class=\"strong\">并集：</em> 布尔对象包含两个原始对象的体积。将移除几何体的相交部分或重叠部分。 \n            </li>\n            <li> <em class=\"strong\">交集：</em> 布尔对象只包含两个原始对象共用的体积（也就是说，重叠的位置）。 \n            </li>\n            <li> <em class=\"strong\">差集（或差）：</em> 布尔对象包含从中减去相交体积的原始对象的体积。 \n            </li>\n         </ul>\n         <p><a name=\"GUID-42E0AD8E-AF31-4C38-BB92-F2548B8C82DA\"></a><span class=\"charspan-msgph\">3ds Max</span> 包含以下三种主要类型的布尔对象： <a name=\"UL_BF543A8FBF074D57A454FA503FF44D13\"></a><ul>\n               <li> <span class=\"char_link\"><a href=\"GUID-3DBEB7C2-43CC-4B78-9463-5DD448FD921C.htm\">布尔复合对象</a></span> \n               </li>\n               <li> <span class=\"char_link\"><a href=\"GUID-7621338C-661E-4A8E-9CC5-87DC8420D51A.htm\">ProBoolean 复合对象</a></span> \n               </li>\n               <li> <span class=\"char_link\"><a href=\"GUID-D8229784-21AC-4CF4-9CEA-F5BE8DEC4494.htm\">ProCutter 复合对象</a></span> \n               </li>\n            </ul> \n         </p>\n         <p><a name=\"GUID-98831B05-436B-424D-98AE-EEEB8B77F852\"></a>此外，布尔操作可用于<span class=\"char_link\"><a href=\"GUID-EC9BB02A-FDE3-4B50-824E-07BE9E5ACE3C.htm\">可编辑样条线</a></span>和<span class=\"char_link\"><a href=\"GUID-5E843162-BB62-44E5-96DA-A7D93EC5BA98.htm\">实体对象</a></span>。 \n         </p>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";