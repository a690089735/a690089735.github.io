var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-6B70BB6B-DE99-4ACD-A61B-B3F5D50ACDE3\">\n      <meta name=\"indexterm\" content=\"Alpha 通道（词汇表）\">\n      <meta name=\"contextid\" content=\"TOPIC_ALPHA_CHANNEL_GLOSSARY\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>Alpha 通道</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-6B70BB6B-DE99-4ACD-A61B-B3F5D50ACDE3\"></a><div class=\"head\">\n            <h1>Alpha 通道</h1>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30D5\"></a>Alpha 是出现在 32 位<span class=\"char_link\"><a href=\"GUID-A1654CD2-2A7C-42A6-816D-28F7A849F96F.htm\">位图</a></span>文件中的一类数据，用于向图像中的像素指定透明度。 \n         </p><a name=\"WS1A9193826455F5FFBA679E112A6A1900490F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9F0A9E62-EBB5-445B-B475-A1C22C10AAC8-low.png\"><p class=\"figure-title\">Alpha 通道以黑色显示在右侧</p>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30D4\"></a>  24 位真彩文件包含三种颜色信息通道：红色、绿色和蓝色或 <span class=\"char_link\"><a href=\"GUID-551B1692-907A-4E25-9D8E-04F0368753F9.htm\">RGB</a></span>。每个通道在各个像素上都拥有具体的强度或值。每个通道的强度决定图像中像素的颜色。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30D3\"></a>通过添加第四种 alpha 通道，文件可以指定每个像素的透明度或不透明度。alpha 的值为 0 表示透明，alpha 的值为 255 则表示不透明，在此范围之间的值表示半透明。透明度对于<span class=\"char_link\"><a href=\"GUID-7BFA7CF2-2E9D-495B-BFB5-A7D513C6D667.htm\">合成</a></span>操作是至关重要的，如在 <span class=\"char_link\"><a href=\"\">Video Post</a></span> 中，位于各个层中的几个图像将混合在一起。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30D2\"></a>对于所渲染图像中对象的<span class=\"char_link\"><a href=\"GUID-BA56C252-4608-43F1-A10B-03F8BF36C834.htm\">锯齿</a></span>边缘周围部分透明的像素，alpha 通道特别有用。这些像素用于合成。如果生成 alpha 通道，并且与图像一同保存，那么类似于上述形式的图像可以平滑地合成到不同的背景中。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30D1\"></a>真彩位图文件的每个通道都定义为 8 位，可以提供 256 个级别的强度。因此，一个 RGB 文件是 24 位的，具有 256 个级别（都带有红、绿和蓝）。RGBA 文件（红、绿、蓝、alpha）是 32 位的，具有额外的 8 位 alpha，可以提供\n            256 个级别的透明度。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30D0\"></a> <span class=\"charspan-msgph\">3ds Max</span> 可以在渲染时自动创建 alpha 通道。渲染图像中的所有背景像素都是完全透明的，且 alpha 通道也可以说明通过材质和贴图创建的任何其他透明度。通过单击工具栏上的“显示 Alpha 通道”按钮，可以在<span class=\"char_link\"><a href=\"GUID-DB20C3DE-93A8-4FF5-BD97-CA05DD3A89B4.htm\">渲染帧窗口</a></span>中看到这种情况：在生成的显示中，黑色像素是完全透明的，白色像素是不透明的，而灰色像素则显示透明度。要返回到常规显示，再次单击“显示 Alpha 通道”即可。 \n         </p>\n         <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-30CF\"></a>要输出带有 Alpha 的渲染图像，请保存为兼容 Alpha 的格式，如 <span class=\"char_link\"><a href=\"GUID-4B119070-232F-4A74-AD83-3527C9521DA1.htm\">TIFF</a></span> 或 <span class=\"char_link\"><a href=\"GUID-C2C7C2F8-083F-4FDC-93AD-AD1D3F5045FD.htm\">Targa</a></span>。如果使用 Targa，默认设置包含保存 Alpha；如果使用 TIFF，请确保启用“存储 Alpha 通道”复选框。 \n         </p>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";