var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-2B74A33F-2B11-480B-BFD6-F13E641D43FA\">\n      <meta name=\"description\" content=\"允许您创建参数化扫描对象。\">\n      <meta name=\"indexterm\" content=\"Civil View: 扫描对象样式 (SOS) 编辑器\">\n      <meta name=\"indexterm\" content=\"Civil View 样式: 扫描对象 (SOS)\">\n      <meta name=\"contextid\" content=\"ID_CV_SWEPT_OBJECT_STYLE_EDITOR\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>扫描对象样式编辑器</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-2B74A33F-2B11-480B-BFD6-F13E641D43FA\"></a><div class=\"head\">\n            <h1>扫描对象样式编辑器</h1>\n         </div>\n         <p class=\"blurb\">允许您创建参数化扫描对象。 </p><a name=\"UL_5C3BBE8AC34A409AB54607B7BF360CDE\"></a><ul>\n            <li> <span class=\"MenuCascade\" id=\"GUID-20B69C56-B34D-4415-8991-C0450F6FA75E\">“Civil View”菜单  <img src=\"../images/ac.menuaro.gif\"> “扫描对象样式编辑器” <img src=\"../images/ac.menuaro.gif\"> “扫描对象样式(SOS)编辑器”对话框</span> \n            </li>\n            <li> <span class=\"MenuCascade\" id=\"GUID-FFF598C9-8393-436A-A85B-2313514DEF62\">Civil View 浏览器  <img src=\"../images/ac.menuaro.gif\">  上部面板  <img src=\"../images/ac.menuaro.gif\"> “Civil View 对象”分支  <img src=\"../images/ac.menuaro.gif\"> “其他对象”分支 <img src=\"../images/ac.menuaro.gif\">  右键单击“扫描对象”条目。 <img src=\"../images/ac.menuaro.gif\"> 弹出菜单  <img src=\"../images/ac.menuaro.gif\"> “创建扫描对象” <img src=\"../images/ac.menuaro.gif\"> “扫描对象样式(SOS)编辑器”对话框</span> \n            </li>\n         </ul>\n         <p><a name=\"GUID-831409A4-C558-43CF-8C1B-44850DB9B9E4\"></a>您可以在许多方面使用扫描对象，但它们通常用于创建与道路或铁路平行的对象：如桥、隧道、筑堤和沟渠等特征。 \n         </p><a name=\"FIG_C5B519A472484D46BEDA1CAD9FF64C7E\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-CC6810FB-F24F-4ACF-9301-7AA86959E638-low.png\"></div>\n         <p><a name=\"GUID-A78BBA2F-D597-4356-B1D6-C3BF9BC91545\"></a> <em class=\"mild\">父图形</em>提供了扫描对象的路径，该对象可以有一个或多个父图形。通过多个父图形，可以创建其他跨度曲面和闭合曲面以跨父图形之间的间隙。 \n         </p>\n         <p><a name=\"GUID-099843A9-C56E-45BF-B60B-A9143EC5D44B\"></a>扫描对象定义可以保存到基于文本的扫描对象样式 (SOS)。每个样式都包含一组元素。每个元素都表示扫描对象内的一个曲面。每个元素包括可调整（和可变）的水平和垂直偏移以及独立的材质通道定义。默认情况下，扫描对象使用 <span class=\"char_link\"><a href=\"GUID-3963FA8C-DE16-4AE9-87B3-0FED10F9BF08.htm\">CivilViewSurfaces 材质</a></span>。 \n         </p>\n         <div class=\"section\"><a name=\"SECTION_3E489154E6CB4807A3624C8D4C30D3B2\"></a> \n            <h2><a name=\"GUID-9B08EE2A-FE6C-425C-9EB7-0A1FBEA5B3EE\"></a>界面\n            </h2> <a name=\"FIG_F7DDB289DB0F4122AE11062167F24AA3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-9D395541-5F55-4E8C-AA46-0740A5B55C62-low.png\"></div>  <a name=\"GUID-250131E1-C7FE-40DB-8DA1-7FA3B829C29E\"></a><div class=\"dl_section\"><a name=\"GUID-B9D073F3-4F0F-47A9-9091-DFBF3B1AE590\"></a><p class=\"title\"><a name=\"GUID-44F90089-DE21-4F43-8C26-3302B4418D12\"></a>[SOS 元素列表]\n               </p><a name=\"FIG_82CC2D24ECEF4D1294F5A614835E8160\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-C00B59B8-02C1-4C0D-8524-F0EE109FE877-low.png\"></div>\n               <p><a name=\"GUID-671A52D8-C834-404E-8DC5-E17388BF0AC4\"></a>列出了当前扫描对象样式的内容。每一行显示列表中的单个元素。高亮显示某个元素将在编辑器上的剩余控件中显示其详细信息。 \n               </p>\n               <dl>\n                  <dt><a name=\"GUID-CE643AB3-CEDD-41AE-B941-333C48903F87\"></a><span class=\"term\"><a name=\"GUID-700471E4-3325-4292-9CF8-BD4C4E7641A5\"></a><img src=\"../images/GUID-4B44C7A1-237B-435C-88E3-700275F765D3-low.png\"> 启动新样式</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-2ADF1C99-DC6F-4102-B221-2438A1B3E405\"></a>单击可创建新的扫描对象样式。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-04004006-5F25-42B7-9402-85973E5A7A45\"></a><span class=\"term\"><a name=\"GUID-F4F316FA-0135-4E95-A32C-BC7F55DBE59F\"></a><img src=\"../images/GUID-8C6CB846-FAEC-4A51-A101-AC67E8C0EA6E-low.png\"> 打开样式</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-EEB83786-9F8F-4D22-B111-12DE3B21CE25\"></a>单击可打开先前创建的扫描对象样式。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-0B6D57DD-82AE-4019-92C9-E0BB9958C739\"></a><span class=\"term\"><a name=\"GUID-8EF4C2C0-6F4A-4653-AFE7-4D5C6ED63598\"></a><img src=\"../images/GUID-DEDA456F-52EA-4C52-8128-9889A8073156-low.png\"> 保存样式</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-ADFE747F-2382-451C-A1FE-2E2F5AB0AE25\"></a>单击可保存当前的扫描对象样式。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-4D71AA20-A78D-42C7-9350-5306CC12A9A3\"></a><span class=\"term\"><a name=\"GUID-0A1BE532-BE71-42F5-9848-7CDE0F1B4925\"></a><img src=\"../images/GUID-8DC917BB-5FB0-42F9-AEA1-B652CE4D5EC2-low.png\"> 添加新元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-93FF3CF0-66D1-4C84-A219-498F58FB6C3F\"></a>单击可将新元素添加到当前的扫描对象样式。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-BBF2C985-CFE5-415D-99CE-4C1FCEED7054\"></a><span class=\"term\"><a name=\"GUID-7578463B-15B5-4287-80F3-6F0D64948424\"></a><img src=\"../images/GUID-082A59A6-D42B-4749-A204-BD352473D3C6-low.png\"> 删除选定元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-3CAB55C1-5968-4686-9EC4-8007BD3D6165\"></a>单击可从当前扫描对象样式中删除选定的元素。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-9A862B1E-E512-40DA-ADD2-503E92CC657A\"></a><span class=\"term\"><a name=\"GUID-E7E9BF13-A741-4CA6-A550-BE334C126F57\"></a><img src=\"../images/GUID-AF2A1AE2-7FAD-43FD-A920-5C60F8FBD6BA-low.png\"> 上移选定元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-6CDD005D-2155-48B3-BB52-6D4258A35840\"></a>单击可在元素列表中将选定的元素上移一个位置。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-8A73EBA2-D491-4260-90C5-43C97C140E1B\"></a><span class=\"term\"><a name=\"GUID-543264D1-6B84-48DB-B906-6C28D9195120\"></a><img src=\"../images/GUID-61DF09EF-7CA4-48BC-BDC1-7CE48CA03B7F-low.png\"> 下移选定元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-D126AF2D-E4C7-4B6C-BA52-D91A751E0697\"></a>单击可在元素列表中将选定的元素下移一个位置。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-EDDEBAD9-174C-49DC-B8DA-8076421140AC\"></a><span class=\"term\"><a name=\"GUID-AD631AEB-2E46-46FB-ABA4-D11FDC0E86E6\"></a><img src=\"../images/GUID-F5700878-3B56-416C-873E-68BF15CF0D4D-low.png\"> 剪切元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-121C5D3F-15BB-4EFC-B56C-5665E12ECBB9\"></a>单击此选项可从样式中剪切选定的元素，并将其保存到剪贴板中。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-D0691F0B-4550-4F12-8AA6-06D3EA6773C0\"></a><span class=\"term\"><a name=\"GUID-11906119-897E-4099-AF81-B0B0A0A806D8\"></a><img src=\"../images/GUID-75320395-19C1-4CFA-A6CA-B69C8C1F2079-low.png\"> 复制元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-81E379E7-463C-436F-BA72-AEE1A45C01A8\"></a>单击此选项可复制选定元素并将其保存到剪贴板中。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-E0787E62-1759-4970-8D69-B02258E5E8F2\"></a><span class=\"term\"><a name=\"GUID-C43C5785-9985-4EE8-B0C2-4AA1E8D85086\"></a><img src=\"../images/GUID-8A0AA472-CFDA-433C-B535-8CD24ABC021D-low.png\"> 粘贴元素</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-3695A294-C694-49AD-9604-BF4CB376EE58\"></a>单击此选项可粘贴已剪切或复制的元素。 \n                        <p><a name=\"GUID-49296251-40CC-4B68-9CBE-D45697590B22\"></a>可以将已剪切的元素粘贴到当前样式中的其他位置，并且可以将已剪切或复制的元素粘贴到其他 SOS 中。 \n                        </p>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-9B75E42D-0893-41BA-BF3F-C5901B58B530\"></a><span class=\"term\"><a name=\"GUID-8765755C-A94B-4D94-AD7F-BF9FB0189A80\"></a>从图形创建轮廓</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-C5FE8429-9C73-4EB4-8F1A-91B7F3785263\"></a> 要将扫描对象样式基于场景中已存在的样式，请单击此按钮将其启用，然后在视口中单击以选择图形。如果您单击的图形具有 SOS，Civil View 将创建新的 SOS，其参数与该图形关联的 SOS 的参数相同。 \n                        <p><a name=\"GUID-DFF1B70F-9660-40D4-AE48-E11708575CA5\"></a>如果横截面图形中已经存在您创建的对象，该功能尤其有用。在这种情况下，横截面图形中的现有多义线可以导入到扫描对象样式，以便形成轮廓的基础。 \n                        </p> \n                        <p><a name=\"GUID-4756E246-EDDE-44AA-A450-416C86926DEC\"></a>如果选定图形对象在分段级别包含材质 ID 指定，则这些指定也包含在生成的扫描对象样式中。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-9CA66405-5BC5-47DB-92E8-B67030338C63\"></a><span class=\"term\"><a name=\"GUID-E9F1AFA2-44D5-4C2A-8117-F6FFF40FD14E\"></a><img src=\"../images/GUID-4CBE62AB-B9A6-4448-8F3E-C89B901136C7-low.png\"> 更改材质指定</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-2EF435E6-7DEE-4640-8C45-DE0C28E45B5B\"></a>单击将显示一个对话框，通过该对话框，可以更改指定给扫描对象的材质。 <a name=\"FIG_534C98F648BA465B81C23F27CCECFEA3\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-A5F8D9C2-8783-412C-BB2B-8317EED48536-low.png\"></div> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-9AA8AB66-E9B4-4AA6-A667-49EC6334314E\"></a><span class=\"term\"><a name=\"GUID-893C00EA-C641-4557-AA9F-7022E2258EB1\"></a><img src=\"../images/GUID-9C029A3E-4D6A-4021-8237-5B9D5E083D0A-low.png\"> 重置扫描对象</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-E5D573F1-0DAC-4315-A983-4A2953BDAA27\"></a>单击可删除当前在此 SOS 编辑器会话中创建的扫描对象。\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <dl>\n               <dt><a name=\"GUID-B3373937-F584-41E9-A8CA-E3E8A5E08072\"></a><span class=\"term\"><a name=\"GUID-C4372314-1826-4879-8C35-1BC6B75C45DB\"></a>拾取父图形</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-2711F72A-DCDC-4074-864F-577DD347233A\"></a> <a name=\"FIG_2A93E20C2C6749FFB24154286CFFCAA2\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-CD350631-8D09-48EF-BC3D-A3660C4E0C24-low.png\"></div> 单击可启用此选项，然后在视口中单击可选择父图形。 <a name=\"UL_262CF5F1197043AD8D0CD76EF4FAA7E4\"></a><ul>\n                        <li><img src=\"../images/GUID-6B1D4D49-06D9-4195-B1C7-DF8A4824DFBC-low.png\"><em class=\"strong\">[按名称拾取]</em>单击可打开一个对话框（类似于“选择对象”），通过该对话框，可以按名称拾取图形。 \n                        </li>\n                        <li><em class=\"strong\">“X”按钮</em>单击可移除父图形。 \n                        </li>\n                     </ul>\n                  </div>\n               </dd>\n               <dt><a name=\"GUID-B1F65A9E-215A-47E6-BCD7-16E2D9C88934\"></a><span class=\"term\"><a name=\"GUID-0F453BDE-9AC2-4158-825B-C50C68563B4E\"></a>创建多样条线父图形</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-0061AED8-EB10-4FA3-8C70-59096ED97F62\"></a>单击可打开<span class=\"char_link\"><a href=\"GUID-E91FEDE8-181A-44FB-882B-1A99128FC2F0.htm\">“构建新父图形”对话框</a></span>，通过该对话框，可以构建包含多条样条线的父图形。 \n                     <p><a name=\"GUID-F1A5E8EF-D88E-4A67-9868-1D1006686B44\"></a>扫描对象样式可应用于一个或多个图形。每个父图形可以包含一条或多条样条线。如果扫描对象样式应用于多个父图形，将自动应用<span class=\"char_link\"><a href=\"GUID-A5D3DA98-1856-4F83-A0DE-FF972200BC50.htm\">参数实例</a></span>以帮助确保在所有生成的扫描对象中共享一组参数。 \n                     </p>\n                  </div>\n               </dd>\n               <dt><a name=\"GUID-BA7FB8CF-3CC3-4CEC-BFA8-910BF10A493A\"></a><span class=\"term\"><a name=\"GUID-273E0378-EE04-4D7C-82ED-B310FC51B8C1\"></a>[父图形列表]</span></dt>\n               <dd>\n                  <div class=\"definition\"><a name=\"GUID-272AAF92-7560-48CA-A933-FC698E528E39\"></a>显示您选择的父图形的名称。\n                  </div>\n               </dd>\n            </dl>\n            <div class=\"dl_section\"><a name=\"GUID-9167F895-7A77-47B0-B074-DBDCA3B67DFF\"></a><p class=\"title\"><a name=\"GUID-A3BC63A3-FB71-45D8-A630-53575A624D71\"></a>“纵向复杂性”组\n               </p><a name=\"FIG_B07786DA7FF74B78AC9B536BC44FFABD\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-E48B5972-6E6B-4A59-AC94-D322DA2D48E1-low.png\"></div><a name=\"UL_04D0CB98DD094EEAAC7BFFA94531CEEA\"></a><ul>\n                  <li><em class=\"strong\">按分段数</em>（默认设置。）使用父图形中的分段数调整复杂性。 \n                  </li>\n                  <li><em class=\"strong\">按分段长度</em>使用父图形中的分段长度调整复杂性。 \n                  </li>\n               </ul>\n               <dl>\n                  <dt><a name=\"GUID-12B2F0A9-FD98-4E6C-80EC-EE55C47C3A5C\"></a><span class=\"term\"><a name=\"GUID-92190654-6D18-49F6-841B-5106ED4E9B7C\"></a>分段数</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-59E92D4D-014E-4A34-92AC-40B009E39EEF\"></a> \n                        <p><a name=\"GUID-C1F3A564-B1BE-4876-BFEE-E2676387F493\"></a>影响生成的扫描对象的复杂性。较高的值会导致产生更复杂的对象几何体。 \n                        </p> \n                        <p><a name=\"GUID-23099C73-AA93-4FC1-9464-E7E0A61D593F\"></a>最好在此微调器中使用尽可能最低的值，但要使用的精确值取决于父图形的几何体。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-8280E480-2D22-4F4B-8C83-DF232E78589D\"></a><p class=\"title\"><a name=\"GUID-FF166C57-62B5-4BB3-A201-03D3F39E74E7\"></a>“方向和类型”组\n               </p><a name=\"FIG_0C7DC872AB1842B49B5BC0309B57C3B7\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-59EB1E8C-BA1E-41A0-A8F5-760175EE705A-low.png\"></div><a name=\"UL_BB9BDEA53F5747F5AB565FEDEBC0ED55\"></a><ul>\n                  <li><em class=\"strong\">二者</em>（默认设置。）轮廓在两个方向上进行延伸。 \n                  </li>\n                  <li><em class=\"strong\">左</em>轮廓仅向左侧延伸。 \n                  </li>\n                  <li><em class=\"strong\">右</em>轮廓仅向右侧延伸。 \n                     <p><a name=\"GUID-B417E7EE-1E29-4F1B-B6FF-CA5A75D8EA92\"></a>如果选择“左”或“右”，将禁用“跨度曲面”、“闭合曲面”和“封口曲面”控件。 \n                     </p> \n                  </li>\n               </ul>\n               <dl>\n                  <dt><a name=\"GUID-7EC0F76E-2CEC-43A2-AEC6-B6A011109377\"></a><span class=\"term\"><a name=\"GUID-1F2F6820-F781-4D89-BD7F-BD30A1D4FFAA\"></a>反转水平偏移？</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-0CF92F2C-948E-4597-89A1-0C74AD4B75E3\"></a> \n                        <p><a name=\"GUID-29FD26AA-FD38-42E0-9F22-D2523CFCE4D0\"></a>启用此选项后，将反转扫描对象轮廓中所有水平偏移的方向。默认设置为禁用状态。 \n                        </p> \n                     </div>\n                  </dd>\n               </dl><a name=\"UL_62237768908F437B929FA54C8F222C80\"></a><ul>\n                  <li><em class=\"strong\">分离几何体模式</em>（默认设置。）沿父对象中的每条样条线创建相同的非跨度几何体。 \n                     <p><a name=\"GUID-5A0DA5E2-3233-41D1-8A34-023304123330\"></a>此选项可用于创建墙和噪波挡墙轮廓，其中样条线之间的潜在间隙表示墙或挡墙中的间隙。 \n                     </p> \n                  </li>\n                  <li><em class=\"strong\">可跨越几何体模式</em>在原始样条线和扫描轮廓的尾部末端之间创建跨度曲面和闭合曲面。 \n                     <p><a name=\"GUID-606A0F7E-CA9E-4D58-B303-AEF153D3B595\"></a>此选项可用于创建需要跨父图形中两条或更多条样条线之间的间隙的桥面。 \n                     </p> \n                  </li>\n               </ul>\n               <dl>\n                  <dt><a name=\"GUID-0DB4699A-FCD9-4CD9-A4BD-878AB83E6D32\"></a><span class=\"term\"><a name=\"GUID-77664729-3F1D-4C5A-B4DD-123A5F36126B\"></a>倾斜（度）</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-5B0EF2B6-A463-4373-8D4F-7CE6FDA6C5DC\"></a>设置为非零值时，将倾斜扫描对象轮廓。默认值为 0.0。 \n                        <p><a name=\"GUID-81BFD819-B401-4FF1-80B2-0C06705DE6EE\"></a>等于 0.0 时，轮廓是沿父图形方向的正常偏移。非零值可用于诸如不对称桥面等对象。 \n                        </p>\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-AD73FDEF-8BEF-4143-B031-569C73F2A8FC\"></a><p class=\"title\"><a name=\"GUID-1EE786C3-AB71-48C7-88D6-BE9F65CE53AA\"></a>“跨度曲面”组\n               </p>\n               <p><a name=\"GUID-42E69320-73D7-4B57-B4AA-19963DB1581A\"></a><em class=\"mild\">跨度曲面</em>是一个可选的曲面，可“覆盖”父样条线之间的间隙。这对于在桥面上创建沥青曲面十分有用。 \n               </p>\n               <p><a name=\"GUID-4DC24D02-A059-4EFC-BC45-42FB2146C19A\"></a>在轮廓的“方向和类型”组（参见上文）中选择“左”或“右”时不可用。 \n               </p><a name=\"FIG_8DA31A81CF2C4B689E80466B1075ABEB\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-EEE96848-75F5-4A48-B91C-05778C18C762-low.png\"></div>\n               <dl>\n                  <dt><a name=\"GUID-1C68B440-7516-4098-8785-ADF6794422B5\"></a><span class=\"term\"><a name=\"GUID-F92FB236-66AF-487C-ACE5-96288DA05612\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-CFFEEA0F-0CFE-46C2-9E4B-E7256BA75F48\"></a>启用此选项后，将构建跨度曲面。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-4E55C5A0-1BD0-416C-8976-BA92EFD6FA42\"></a><span class=\"term\"><a name=\"GUID-C8411C2A-13C2-4881-A2D2-6846737CA4EB\"></a>[子材质下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-1D217599-5132-4D16-B9B3-2BBDC9FC190F\"></a>选择跨度曲面的材质通道。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-B68C7425-2989-42F3-BDEB-255C7A9B1E39\"></a><span class=\"term\"><a name=\"GUID-09D1DF20-3A99-4077-9D17-2B5CC2DCFB6D\"></a>翻转跨度曲面？</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-13FCD669-DA3C-4FF1-8066-BFB919C744B2\"></a>启用此选项后，将翻转跨度曲面的曲面法线。\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-ABB75CB0-AA2E-43C4-A80E-B99AB345BDBF\"></a><p class=\"title\"><a name=\"GUID-2564E382-B2A7-44C2-948A-9EFBA11A1646\"></a>“闭合曲面”组\n               </p>\n               <p><a name=\"GUID-F0D0FF9C-6772-4B9D-B67D-BB0E3380C12F\"></a><em class=\"mild\">闭合曲面</em>是一个可选的曲面，可“覆盖”扫描对象的最终曲面之间的间隙。这对于创建桥面的下侧十分有用。 \n               </p>\n               <p><a name=\"GUID-D185ACA6-883D-4F04-97C0-79084BA70599\"></a>仅当存在多个父图形，并且父图形以允许 Civil View 构建闭合曲面的方式排列时才可用。请参见<span class=\"char_link\"><a href=\"GUID-E91FEDE8-181A-44FB-882B-1A99128FC2F0.htm\">“构建新父图形”对话框</a></span>。 \n               </p>\n               <p><a name=\"GUID-F258598F-ED75-466D-94D9-5B019FA228A6\"></a>在轮廓的“方向和类型”组（参见上文）中选择“左”或“右”时不可用。 \n               </p>\n               <p><a name=\"GUID-DC7C9512-7359-413E-8C26-954255FF88DA\"></a>所选构建方法是“分离几何体模式”（参见上文）时不可用。 \n               </p><a name=\"FIG_92B01DBC54454D6781AC3BC01AADE820\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-896DDA8E-0E92-4C14-8360-FD9758A699DF-low.png\"></div>\n               <dl>\n                  <dt><a name=\"GUID-3237DE21-6B72-4835-BB2B-90989C96C08E\"></a><span class=\"term\"><a name=\"GUID-A5B08699-8D61-4242-81DD-420DE1034B1C\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-8DA0F403-DD56-447D-8A6D-DAE8D1507F3A\"></a>启用此选项后，将构建闭合曲面。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-503BF662-896B-4E71-9CBA-9426CAC41105\"></a><span class=\"term\"><a name=\"GUID-33138079-E16C-453E-9E91-D81CF186AB7C\"></a>[子材质下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-EF7BF09E-4948-45E5-8F19-C4029F7A4DDC\"></a>选择闭合曲面的材质通道。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-E9C64E97-52E0-41CE-AD92-9626293D9F73\"></a><span class=\"term\"><a name=\"GUID-B57840C8-D707-40FB-922F-A19C5F1251B2\"></a>翻转跨度曲面？</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-0FC857A7-3D2A-4CFC-A48A-F65B7B122560\"></a>启用此选项后，将翻转闭合曲面的曲面法线。\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-A95B47A5-A604-4C6B-902F-F9388A2B6709\"></a><p class=\"title\"><a name=\"GUID-D99AB34F-D806-4BEB-8D39-F8137CCD9207\"></a>“封口曲面”组\n               </p>\n               <p><a name=\"GUID-4AA5FE98-C4B2-46EB-BC3F-2EB409FA54FD\"></a><em class=\"mild\">封口曲面</em>将关闭或封口扫描对象的开放末端。 \n               </p>\n               <p><a name=\"GUID-C991315D-AB1B-48CA-8F7F-66F116F234D0\"></a>在轮廓的“方向和类型”组（参见上文）中选择“左”或“右”时不可用。 \n               </p>\n               <p><a name=\"GUID-A8CA3CFF-07EF-4E5E-BE38-D304A45E99D8\"></a>所选构建方法是“分离样条线几何体”（参见上文）时不可用。 \n               </p><a name=\"FIG_52C71BE4DD58411B8BF16DCF6295D1E1\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-7621E35A-81BC-4496-BC52-ADE7D160F32A-low.png\"></div>\n               <dl>\n                  <dt><a name=\"GUID-D0FCBE1F-99C3-4FC0-A7C1-06DBF11AAFEB\"></a><span class=\"term\"><a name=\"GUID-4BB3CDF7-4C9A-4CB0-B97F-29D43AC0C1B5\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-1B1647E8-29D1-4ABA-9C67-D705A1E5D07E\"></a>启用此选项后，将构建封口曲面。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-4CD84965-E7EB-4DF6-AACB-C5E8F2BF3231\"></a><span class=\"term\"><a name=\"GUID-C781BDC7-8D5F-4251-82F2-74F29FFB8981\"></a>[子材质下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-AD8A8E7F-0E74-483A-AC01-299898003FCD\"></a>选择封口曲面的材质通道。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-B56B7B28-E62D-41FB-BB3A-16D6A5E176C8\"></a><span class=\"term\"><a name=\"GUID-A498A51C-F93E-49ED-8907-02295BCCA8CF\"></a>翻转跨度曲面？</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-DD1525E8-8308-4640-AF51-E75571F97EBD\"></a>启用此选项后，将翻转封口曲面的曲面法线。\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-A4F07D27-9E49-44ED-9D31-F0EA003B9212\"></a><p class=\"title\"><a name=\"GUID-CCC80D69-316F-4AA8-81B5-2286C2B79FE6\"></a>“编辑样式元素”组\n               </p><a name=\"FIG_DBFDAA97FC2B4B6EBBBB49D0633A86CA\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-46550F27-1BA8-4171-96FA-A339AB9AA859-low.png\"></div>\n               <p><a name=\"GUID-DE2E3547-C735-4585-9A10-7204881C9356\"></a>编辑当前在 SOS 元素列表中高亮显示的元素的设置。每个元素都表示扫描对象中的一个曲面，并且包括水平和垂直偏移，以及独立的材质通道选择。 \n               </p>\n               <div><a name=\"GUID-7FAE5A6A-A654-48B2-8A58-BBB66B8F7DFF\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>这些控件的值将进行动态链接，以便更改一个值时影响其他值。例如，通过该设置，您可以选择在同时可以看到两个值时是按偏移指定垂直偏移，还是按横向坡度指定垂直偏移。如果您知道所需的横向坡度，请首先设置该值，然后更改水平偏移以观察“垂直偏移”值进行相应地更新。\n                     \n                  </div>\n               </div>\n               <dl>\n                  <dt><a name=\"GUID-52C8C671-6219-42D4-9F78-5E5469D628F3\"></a><span class=\"term\"><a name=\"GUID-DA79AF90-E8E5-46A4-8BFD-D5FDE5131338\"></a>起点水平偏移/终点水平偏移</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-9C4D59C8-99D0-46A7-9276-F16B6E5EBF64\"></a>调整 SOS 元素的水平偏移。 <a name=\"UL_50C237C014AD45C6B985ABE2C00B8A2B\"></a><ul>\n                           <li><img src=\"../images/GUID-8AC10E79-FC24-4178-8D21-495447F45407-low.png\"><em class=\"strong\"> 锁定起点和终点水平偏移</em>单击可锁定或解除锁定“起点”和“终点”值。解除锁定这些值后，水平偏移可以随扫描对象长度的变化而变化。默认设置为“锁定”。 \n                           </li>\n                        </ul>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-CC1006D7-695A-41E7-802B-BAB1C5021D92\"></a><span class=\"term\"><a name=\"GUID-E436E751-3A21-4555-93EF-A6F5B15B78AB\"></a>起点垂直偏移/终点垂直偏移</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-9159167D-6462-4CAA-893F-76A2D793E2C0\"></a>调整 SOS 元素的垂直偏移。 <a name=\"UL_528416D712F34E7A9B782518F080EA39\"></a><ul>\n                           <li><img src=\"../images/GUID-8AC10E79-FC24-4178-8D21-495447F45407-low.png\"><em class=\"strong\"> 锁定起点和终点垂直偏移</em>单击可锁定或解除锁定“起点”和“终点”值。解除锁定这些值后，垂直偏移可以随扫描对象长度的变化而变化。默认设置为“锁定”。 \n                           </li>\n                        </ul>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-481BEC27-E0B7-4F74-AB86-25D7C37E024E\"></a><span class=\"term\"><a name=\"GUID-811F0CA2-057B-4DCB-AE6F-48936FAF1698\"></a>起点横向坡度/终点横向坡度</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-3FC35751-4CEF-423B-9F40-60825712E5E1\"></a>调整扫描对象的横向坡度。 <a name=\"UL_4D6AE2F508E8460289F8FE5535CDD4DB\"></a><ul>\n                           <li><img src=\"../images/GUID-670EBB3E-612B-4E90-AC47-645D5477918E-low.png\"><em class=\"strong\"> [锁定起点/终点横向坡度]</em>单击可锁定或解除锁定“起点”和“终点”值。锁定“起点横向坡度”或“终点横向坡度”值后，更改垂直偏移不会影响该值；反之，会影响该值。默认设置为解除锁定。 \n                              <div><a name=\"GUID-CA8DD685-A7B8-46D6-A301-1E58A4F01991\"></a><div class=\"note-note\"><span class=\"label label-target-language\">注意:</span>除非已解除锁定水平或垂直偏移值，否则“终点横向坡度”不可用。 \n                                 </div>\n                              </div> \n                           </li>\n                        </ul>\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-1ACD506F-D35A-42FD-9C2B-832C37A52252\"></a><p class=\"title\"><a name=\"GUID-4D5ECBA5-6AA0-4F4D-B760-4FDCD33A53A0\"></a>“材质”组\n               </p>\n               <dl>\n                  <dt><a name=\"GUID-FF500E8D-7E75-4742-8256-EC9C7E24F7BC\"></a><span class=\"term\"><a name=\"GUID-15EC04AA-DB4F-462B-A892-3689AF869ADC\"></a>使用继承材质</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-76100BFF-0484-49EC-8792-0EBD7449802B\"></a>启用此选项后，前面轮廓元素中的材质，以及前面元素的贴图参数将应用于该元素。 \n                        <p><a name=\"GUID-6D5044A1-DEC0-4958-A576-24327A2E09B7\"></a>启用此选项将禁用“材质”组（平滑组除外）中的其他设置。 \n                        </p>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-F7BE07D5-A81B-41CF-B2B8-35DC602154F5\"></a><span class=\"term\"><a name=\"GUID-2BBF1B71-33FA-4B73-B97C-E46DF9FAD3E9\"></a>启用</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-9DB75F86-D467-40EA-93D5-6E63F6510833\"></a>禁用此选项后，没有材质将应用于该元素，从而使其成为<em class=\"mild\">间隙元素。</em>默认设置为启用。 \n                        <p><a name=\"GUID-88382795-07B8-4AE3-93D7-17FC12660ECD\"></a>间隙元素会在父图形与扫描对象中的第一个曲面之间创建一个不可见的偏移。间隙元素将在“扫描对象样式”元素列表中显示为“[间隙]”。 \n                        </p>\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-95306E09-0E8E-42E8-9BC6-F7B86220EC23\"></a><span class=\"term\"><a name=\"GUID-D04A34B5-C624-42C1-9AB6-D5A24F223254\"></a>[子材质下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-D36267C9-04A3-4118-A418-E6AF7E5D1595\"></a>选择扫描对象元素的材质通道。扫描元素使用 <span class=\"char_link\"><a href=\"GUID-3963FA8C-DE16-4AE9-87B3-0FED10F9BF08.htm\">CivilViewSurfaces 材质</a></span>。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-A7D03DEF-EA65-4ED2-ACF9-EF64330A4F02\"></a><span class=\"term\"><a name=\"GUID-A9F99617-8C39-428A-830D-EC37B24F946B\"></a>翻转曲面？</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-9948997E-C226-4966-BB90-061D3FC8E783\"></a>启用此选项后，将翻转元素的曲面法线。\n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-AE6AA544-30E7-435E-B60E-007F3ECF080E\"></a><span class=\"term\"><a name=\"GUID-D27F8070-6629-4BA8-BF56-CDA1654AA70A\"></a>长度重复</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-6077A9F7-1A14-497E-A9A8-6D5F527B7A1B\"></a> \n                        <p><a name=\"GUID-1797E378-F28D-4920-97A9-B63AB6B2D715\"></a>设置选定材质沿元素重复的距离。默认值为 10.0 世界单位。 \n                        </p> \n                        <p><a name=\"GUID-689D0ABE-443C-47E1-9BA8-7A3D13D730D4\"></a>此选项仅适用于可平铺的纹理贴图，在与程序纹理贴图一起使用时将忽略该选项。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-8589C0C2-133A-45D5-B17B-BB7705D8E842\"></a><span class=\"term\"><a name=\"GUID-8EA40259-C473-4642-B1A2-83A48E446B70\"></a>宽度平铺</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-85B0A0D4-6DDA-426B-9CA9-7C07F2D9B6E9\"></a> \n                        <p><a name=\"GUID-B0FF2344-766B-4BDA-96A0-3B36EF619662\"></a>设置选定材质沿元素的宽度重复的次数。默认值为 1。 \n                        </p> \n                        <p><a name=\"GUID-7A56A8CB-DFE9-40FD-9998-0C3B2A353DE9\"></a>此选项仅适用于可平铺的纹理贴图，在与程序纹理贴图一起使用时将忽略该选项。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-761BF0F0-924C-4903-A3D2-04AF4105B6AA\"></a><span class=\"term\"><a name=\"GUID-61BBC5A1-6EE7-4861-8DFF-A6129AFFD6EB\"></a>贴图旋转</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-E96FB0B1-5CC2-4974-B360-0C9B9DAB887D\"></a> \n                        <p><a name=\"GUID-09968A1D-97E6-4220-8FE3-1ACAFEFBDCA0\"></a>设置要应用于元素上的贴图的旋转。 \n                        </p> \n                        <p><a name=\"GUID-99EB0E23-9C25-40EA-98CC-FDC163FB72B5\"></a>此选项仅适用于可平铺的纹理贴图，在与程序纹理贴图一起使用时将忽略该选项。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-F33326E6-0FDD-4D43-824F-B67380B69B0E\"></a><span class=\"term\"><a name=\"GUID-79BE6890-151B-4E0E-97A1-DED014E53E41\"></a>平滑组</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-0ABF755F-F3C4-4D71-8D75-E371AF26251A\"></a> \n                        <p><a name=\"GUID-1252DFE0-95BC-496F-A626-4646B3FF5677\"></a>设置由元素使用的平滑组 ID。默认情况下，向轮廓添加一个新元素时，平滑组的值就增加一。 \n                        </p> <a name=\"UL_2BB571DDE3EB42C69330EE42573D0774\"></a><ul>\n                           <li> 使用不同平滑组 ID 的相邻元素未应用曲面平滑。 </li>\n                           <li> 使用公用平滑组 ID 的相邻元素进行平滑以创建弯曲扫描对象轮廓的假象。 </li>\n                        </ul> \n                        <p><a name=\"GUID-2A004517-B388-4D8C-A45B-A0CF90EA0789\"></a>有效平滑组 ID 的值在 1 和 32 之间。也可以将值指定为 0：这将防止任何纵向平滑应用于任何单个轮廓元素。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"GUID-C4BE6D43-910E-4163-8A3E-E536E85AC941\"></a><span class=\"term\"><a name=\"GUID-6BE99EC4-F44A-4C7A-8023-E0C59F453971\"></a>“R”按钮</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-20005BEF-1B81-41B7-A1DC-B20B1B0CD93A\"></a>对于上述每一个控件，单击“R”可将值重置为其默认值。\n                     </div>\n                  </dd>\n               </dl>\n            </div>\n            <div class=\"dl_section\"><a name=\"GUID-B0D6922B-DBE3-47D8-AB97-4473756DDECE\"></a><p class=\"title\"><a name=\"GUID-873701FA-52BB-450E-B4F3-2E1C600CA2BC\"></a>“全局 UV 贴图”组 \n               </p><a name=\"FIG_EF778FFEF030419EB9D0228E8C88404C\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-03E60289-8ABE-406E-A469-2DAF367BABA3-low.png\"></div>\n               <p><a name=\"GUID-368CE20E-9611-4A7B-B7CA-EEFC63004D57\"></a>这些设置会影响跨度曲面和闭合曲面上的材质贴图。 \n               </p>\n               <p><a name=\"GUID-946E8CBB-2415-4383-9493-FA5716ABBE64\"></a>“长度重复”、“宽度重复”和“贴图旋转”的行为与针对元素的行为相同。 \n               </p><a name=\"UL_755694A3CBD546EAA923FF3F360AB7A5\"></a><ul>\n                  <li><em class=\"strong\">“R”按钮</em>单击可将控件重置为其原始值。 \n                  </li>\n               </ul>\n               <dl>\n                  <dt><a name=\"GUID-96A0C5E9-8321-408B-B9FD-C3C0C2510B86\"></a><span class=\"term\"><a name=\"GUID-5158E083-820B-4DC2-BA3E-612F303D2979\"></a>替代元素贴图</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-B641B5D0-F57B-4616-8A84-B2124B62BBE6\"></a>启用此选项后，全局 UV 贴图设置会影响该元素，并替代在轮廓元素级别存储的贴图参数。默认设置为禁用状态。\n                     </div>\n                  </dd>\n               </dl>\n            </div> \n         </div><span class=\"noindex\">\n            <div class=\"topic-list\">\n               <h4 class=\"related\">本节内容</h4>\n               <ul class=\"jumplist\">\n                  <li class=\"topiclist-litem\"><a href=\"GUID-E91FEDE8-181A-44FB-882B-1A99128FC2F0.htm\">“构建新父图形”对话框</a><p>用于构造包含多条样条线的扫描对象的父图形。 \n                        \n                     </p>\n                  </li>\n               </ul>\n            </div></span><div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";