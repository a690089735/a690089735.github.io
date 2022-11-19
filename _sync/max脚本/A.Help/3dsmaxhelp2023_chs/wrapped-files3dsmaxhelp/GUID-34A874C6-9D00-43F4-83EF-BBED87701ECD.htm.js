var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-34A874C6-9D00-43F4-83EF-BBED87701ECD\">\n      <meta name=\"description\" content=\"通过“速度测试”，粒子系统可以检查粒子速度、加速度或圆周运动的速率以及相应分量。该测试提供许多变量，既可以测试特定轴上的速度或加速度，也可以只测试粒子加速还是减速。\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 圆周运动\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 加速\">\n      <meta name=\"indexterm\" content=\"加速测试（粒子流）\">\n      <meta name=\"indexterm\" content=\"速度测试（粒子流）\">\n      <meta name=\"indexterm\" content=\"粒子流测试: 速度\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 速度\">\n      <meta name=\"indexterm\" content=\"测试（粒子流）: 速度\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>速度测试</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-34A874C6-9D00-43F4-83EF-BBED87701ECD\"></a><div class=\"head\">\n            <h1>速度测试</h1>\n         </div>\n         <p class=\"blurb\">通过“速度测试”，粒子系统可以检查粒子速度、加速度或圆周运动的速率以及相应分量。该测试提供许多变量，既可以测试特定轴上的速度或加速度，也可以只测试粒子加速还是减速。 </p>\n         <div class=\"bodyReference\"><a name=\"GUID-A2B3C619-1C6F-4F6C-8B7A-A01DC49E08EA\"></a><ul>\n               <li> <span class=\"MenuCascade\" id=\"GUID-E4596E86-4319-4811-A0D9-17ADE7A2CA84\">“粒子视图” <img src=\"../images/ac.menuaro.gif\"> 在某个事件中单击“速度测试”，或将“速度测试”添加到粒子系统中，然后选择它。</span> \n               </li>\n            </ul>\n            <div class=\"section\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB4\"></a> \n               <h2><a name=\"GUID-32F15965-47C5-456A-96AE-6C3123CD4D40\"></a>界面\n               </h2> <a name=\"WS1A9193826455F5FFBA679E112A6A19004256F\"></a><div class=\"figure-anchor\"><img src=\"../images/GUID-52D05160-8151-4B89-8E7A-16DA637EA99D-low.png\"></div>  \n               <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB3\"></a>该用户界面出现在“粒子视图”对话框右侧的“参数”面板中。 \n               </p> <a name=\"GUID-E9B70430-4778-4134-A8E0-2711B231AFBA\"></a><dl>\n                  <dt><a name=\"GUID-E15EDED2-543E-49D0-A4E1-CB9D4F2B0738\"></a><span class=\"term\"><a name=\"GUID-D4CA57E6-C144-44CF-9372-B2B05461A45E\"></a>[下拉列表]</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"GUID-313DCE8F-BFF5-4586-AB64-4CCC840E268A\"></a> \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB2\"></a>第一个界面元素是一个下拉列表，用于选择要测试的测量类型： \n                        </p> <a name=\"WS1A9193826455F5FFBA679E112A6A190042570\"></a><ul>\n                           <li> <em class=\"strong\">速度大小</em>在不考虑方向的情况下测试粒子的速度（每秒的系统单位数）。此测试类型为默认设置。 \n                           </li>\n                           <li> <em class=\"strong\">速度 X/Y/Z</em>使用世界坐标系测试粒子在指定轴的速度（每秒的系统单位数）。 \n                              <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB1\"></a> 此选项的示例是用于烟火：粒子向上移动时，在世界坐标系 Z 轴上的速度为正值。到达轨迹顶部，开始向下移动时，在世界坐标系 Z 轴上的速度减慢为 0，然后变为负值。如果选择“速度 Z”和“小于测试值”，并将“测试值”设置为 0.0，可以在开始向下移动时将粒子发送给另一个事件。\n                                 \n                              </p> \n                           </li>\n                           <li> <em class=\"strong\">加速度大小</em>在不考虑方向的情况下测试粒子的加速度（速度变化，每秒的每秒系统单位数）。 \n                           </li>\n                           <li> <em class=\"strong\">加速度 X/Y/Z</em>使用世界坐标系测试粒子在指定轴的加速度（速度变化，每秒的每秒系统单位数）。 \n                           </li>\n                           <li> <em class=\"strong\">移动速率</em>在不考虑旋转或自旋的情况下测试粒子运动的圆周分量（每秒的度数）。 \n                              <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FB0\"></a>例如，如果粒子沿着抛物线路径运动，其运动包含线性分量和圆周分量。圆周分量在抛物线顶部达到最大。如果粒子在一秒内通过了整个圆，速率为 360；如果通过了半圆，速率为 180。 \n                              </p> \n                              <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FAF\"></a>可能的用法：如果强制粒子过于猛烈地旋转，粒子可能会爆炸或改变移动类型。例如，导弹追踪一架喷气式战斗机，而该战斗机则努力躲开导弹。强制导弹迅速改变路径，但是导弹的构造无法承受移动的迅速改变，所以，导弹会爆炸或分解。 \n                              </p> \n                              <div><a name=\"WS1A9193826455F5FF662FFB11407B58D52-5F80\"></a><div class=\"note-tip\"><span class=\"label label-target-language\">提示</span>使用<span class=\"char_link\"><a href=\"GUID-361FBC9D-C2ED-4793-B60A-5E5EB0B0977C.htm\">速度按图标</a></span>设置粒子速度，并将“速度按图标”操作符图标链接到一个圆形路径上，可以测试移动速率。 \n                                 </div>\n                              </div> \n                           </li>\n                           <li> <em class=\"strong\">加速时为真</em>如果粒子速度的值增大，则返回真值。 \n                           </li>\n                           <li> <em class=\"strong\">减速时为真</em>如果粒子速度的值减小，则返回真值。 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-2159C94E-7E6C-4CEE-B2C7-5ED41C969501\"></a><p class=\"title\"><a name=\"GUID-A0D5EE17-C4BF-4240-8E52-3788340DAC65\"></a>“测试真值的条件是粒子值”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF1DBC298511635BEA8752D42\"></a>用于指定如果速度测试成功或失败，测试是否将粒子传递给下一个事件。适用于加速时为真/减速时为真以外的所有测试。默认设置为“大于测试值”。 \n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FAD\"></a>默认情况下，如果测试的值超过了“测试值”的数量，“速度测试”将返回真值，但是也可以选择“小于测试值”。例如，如果使用“速度大小”测试类型，并将“测试值”设置为 200，将“变化”设置为 0，选择“小于测试值”，只有粒子的运动速度超过每秒 200\n                     个单位时，粒子才会移动到下一个事件。任何运动速度小于或等于每秒 200 个单位的粒子将保留在当前事件中，除非以后超过该速度或其他测试返回真值。 \n                  </p>\n               </div>\n               <dl>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D3\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FAC\"></a>测试值</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63DA\"></a> 要测试的特定速度或加速度。测量单位取决于测试的类型；请参见上文。默认设置为 300.0。 \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D2\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FAB\"></a>变化</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63D9\"></a> 要测试的值可以随机变化的量。默认设置是 0.0。 \n                        <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FAA\"></a>为了获取每个粒子的实际测试值，系统将“变化”值乘以 -1.0 到 1.0 之间的某个随机数，然后将结果与“测试值”设置值相加。例如，如果“测试值”为 300，“变化”为 10，每个粒子的测试值将在 290 到 310 之间。 \n                        </p> \n                     </div>\n                  </dd>\n                  <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D1\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FA9\"></a>同步方式</span></dt>\n                  <dd>\n                     <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63D8\"></a> 选择在设置“测试值”和“变化”的动画时要使用的时间帧：有关详细信息，请参见<span class=\"char_link\"><a href=\"GUID-D4593D7B-86FA-40C6-A500-7855C9DDBA94.htm#GUID-9BCB8F53-6DBB-4447-B9CD-B4C7A329ABFC\">“动画偏移关键点”组</a></span>。 <a name=\"WS1A9193826455F5FFBA679E112A6A190042571\"></a><ul>\n                           <li> <em class=\"strong\">绝对时间</em>为参数设置的任意关键点在设置关键点的实际帧应用。 \n                           </li>\n                           <li> <em class=\"strong\">粒子年龄</em>为参数设置的任意关键点在每个粒子存在的相应帧应用。 \n                           </li>\n                           <li> <em class=\"strong\">事件期间</em>参数设置的任意关键点在每个粒子第一次进入事件时开始应用于粒子。 \n                           </li>\n                        </ul> \n                     </div>\n                  </dd>\n               </dl>\n               <div class=\"dl_section\"><a name=\"GUID-FAD339E7-7677-4195-A8D0-E983A57F8860\"></a><p class=\"title\"><a name=\"GUID-3C454151-3D9B-4340-9612-F8AC441E3976\"></a>“唯一性”组\n                  </p>\n                  <p><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FA8\"></a>“唯一性”设置可以使测试值变化随机化。 \n                  </p>\n                  <dl>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62D0\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FA7\"></a>种子</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63D7\"></a> 指定随机化值。 \n                        </div>\n                     </dd>\n                     <dt><a name=\"WS1A9193826455F5FF-7C11D46C11CB8605735-62CF\"></a><span class=\"term\"><a name=\"WS1A9193826455F5FF103859C11318F51BDD-5FA6\"></a>新增特性</span></dt>\n                     <dd>\n                        <div class=\"definition\"><a name=\"WS1A9193826455F5FF-5187222B11EEADCDC61-63D6\"></a> 使用随机化公式计算新种子。 \n                        </div>\n                     </dd>\n                  </dl>\n               </div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";