var topic = "<!DOCTYPE html><html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"3DSMAX\">\n      <meta name=\"release\" content=\"2023\">\n      <meta name=\"book\" content=\"GeneralUser\">\n      <meta name=\"created\" content=\"2022-03-27\">\n      <meta name=\"topicid\" content=\"GUID-15D7B1FB-168E-462D-B38B-9FA415AF6D5E\">\n      <meta name=\"indexterm\" content=\"Alembic\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>3ds Max Alembic 文件扩展名参考</title><script language=\"javascript\">var index = \'index3dsmaxhelp.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-15D7B1FB-168E-462D-B38B-9FA415AF6D5E\"></a><div class=\"head\">\n            <h1>3ds Max Alembic 文件扩展名参考</h1>\n         </div>\n         <p> 3ds Max 增强了 Alembic 文件规范来存储额外的数据，并且可以更好地与其他应用程序交换数据。这些扩展名遵循 Autodesk 标准，以增强与其他 Autodesk 产品（如 Maya）的互操作性。本主题介绍 Autodesk 标准，并列出了\n            3ds Max 为 Alembic 文件导出而增加的特定扩展名。 \n            	 \n         </p>\n         <div class=\"section\"><a name=\"SECTION_3ECF57CC94DC48D9B02F8432A945B124\"></a> \n            <h2><a name=\"GUID-2DFA0313-2468-47D2-BB13-E72299482147\"></a>一般性说明\n            </h2> \n            <p> <a name=\"UL_82D0FACD3D11417D8F3877D545FA4326\"></a><ul>\n                  <li>节点和属性的名称中没有空格。 \n                     		  \n                  </li>\n                  <li>自定义属性存储在 <span class=\"code\">.userProperties</span> 属性下。这些属性可以位于 <span class=\"code\">.geom</span> 或 <span class=\"code\">.xform</span> 节点下，因此没有几何体的对象也可具有自定义数据。 \n                     		  \n                  </li>\n               </ul> \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_A92DA92806C54006833F2E98F8BA9041\"></a> \n            <h2><a name=\"GUID-5A9AB2E4-0F34-4929-8D7E-02B548D289F3\"></a>其他 UV 通道\n            </h2> \n            <p> <a name=\"UL_69404F8064A844B2A1C8B72772E4C88D\"></a><ul>\n                  <li>额外的 UV 通道存储在 .arbGeomParams 的 .geom 属性下。 \n                     		  \n                  </li>\n                  <li>属性名称即为通道名称。 \n                     		  \n                  </li>\n                  <li>仅导出 UV 数据，不导出 UVW。 \n                     		  \n                  </li>\n                  <li><span class=\"code\">.vals</span> 是 kFloat32POD 的数组，其中范围 = 2 \n                     		  \n                  </li>\n                  <li><span class=\"code\">.indices</span> 是 kUint32POD 的数组，其中范围 = 1 \n                     		  \n                  </li>\n               </ul> \n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_3DE7A3F4FCB04F1B909083E64E40E9B2\"></a> \n            <h2><a name=\"GUID-D7FD25B0-AAC7-43EE-88AE-9B8082224F07\"></a>未导出的数据\n            </h2> \n            <p>Alembic 中不支持样条线。样条线已转换为 NURBS 以便于导出。 \n               		\n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_8ABAEACB9CD9486189C7CBCD2E70AE29\"></a> \n            <h2><a name=\"GUID-0B004469-6392-4746-B828-31BFE2AD848B\"></a>实例\n            </h2> \n            <p>实例需遵循 Alembic 规范才能受支持。但是，导入时不检测重复的几何体，也不将其转换为实例。 \n               		\n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_341A5B13A8954E599461FD0398B8D6AA\"></a> \n            <h2><a name=\"GUID-4144290E-2D7B-44ED-B557-01B6A874C7ED\"></a>摄影机\n            </h2> \n            <p>3ds Max 场景摄影机在 Alembic 中导出。 \n               		\n            </p> \n            <p>Maya 默认会导出透视摄影机（前、透视、侧和顶）。 \n               		\n            </p> \n         </div>\n         <div class=\"section\"><a name=\"SECTION_E8C8F74A552A4784A2B9997E8FB0B5CA\"></a> \n            <h2><a name=\"GUID-B23ABC6E-EC4A-4AEC-864E-DB2579303BCD\"></a>3ds Max 的自定义数据节点\n            </h2> \n            <p> </p> \n            <p class=\"table-title\">Max 节点</p><a name=\"TABLE_496100F3973F42F9A93DBEA6E0B707C5\"></a><div class=\"table-not-ruled\">\n               <table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n                  <colgroup>\n                     <col width=\"28.28025477707007%\">\n                     <col width=\"12.738853503184714%\">\n                     <col width=\"58.98089171974522%\">\n                  </colgroup>\n                  <tr class=\"not-ruled-heading\">\n                     <th class=\"table-heading\">节点 \n                        				\n                     </th>\n                     <th class=\"table-heading\">类型 \n                        				\n                     </th>\n                     <th class=\"table-heading\">注释 \n                        				\n                     </th>\n                  </tr>\n                  <tr class=\"not-ruled-odd-row\">\n                     <td class=\"table-body\"><em class=\"strong\">Node/Node/MaxVisibility </em> \n                     </td>\n                     <td class=\"table-body\"> 标量：Float32 \n                        				\n                     </td>\n                     <td class=\"table-body\"> \n                        <p class=\"table-body\">用来容纳 Max 对象属性的容器。支持的属性包括： \n                           				  \n                        </p> \n                        <div class=\"codeBlock\"><pre>{ kHide, _T(\"Hide\"), CustomAttribute::DataType::kBool},\n\n{ kFreeze, _T(\"Freeze\"), CustomAttribute::DataType::kBool},\n\n{ kSeeThrough, _T(\"SeeThrough\"), CustomAttribute::DataType::kBool},\n\n{ kDisplayAsBox,_T(\"DisplayAsBox\"), CustomAttribute::DataType::kBool },\n\n{ kBackfaceCull,_T(\"BackfaceCull\"), CustomAttribute::DataType::kBool },\n\n{ kEdgesOnly,_T(\"EdgesOnly\"), CustomAttribute::DataType::kBool},\n\n{ kVertexTicks,_T(\"VertexTicks\"), CustomAttribute::DataType::kBool},\n\n kMotionPaths,_T(\"MotionPaths\"), CustomAttribute::DataType::kBool},\n\n{ kIgnoreExtents,_T(\"IgnoreExtents\"), CustomAttribute::DataType::kBool},\n\n{ kShowFrozenInGray,_T(\"ShowFrozenInGray\"), CustomAttribute::DataType::kBool},\n\n{ kNeverDegrade,_T(\"NeverDegrade\"), CustomAttribute::DataType::kBool},\n\n{ kRenderable,_T(\"Renderable\"), CustomAttribute::DataType::kBool},\n\n{ kInheritVisibility,_T(\"InheritVisibility\"), CustomAttribute::DataType::kBool },\n\n{ kVisibleToCamera,_T(\"VisibleToCamera\"), CustomAttribute::DataType::kBool},\n\n{ kVisibleToReflection,_T(\"VisibleToReflection\"), CustomAttribute::DataType::kBool },\n\n{ kReceiveShadows,_T(\"ReceiveShadows\"), CustomAttribute::DataType::kBool},\n\n{ kCastShadows,_T(\"CastShadows\"), CustomAttribute::DataType::kBool},\n\n{ kApplyAtmospherics,_T(\"ApplyAtmospherics\"), CustomAttribute::DataType::kBool},\n\n{ kRenderOccludedObjects,_T(\"RenderOccludedObjects\"), CustomAttribute::DataType::kBool },\n\n{ kDisplayByLayer,_T(\"DisplayByLayer\"), CustomAttribute::DataType::kBool },\n\n{ kRenderingByLayer,_T(\"RenderingByLayer\"), CustomAttribute::DataType::kBool },\n\n{ kMotionBlurByLayer,_T(\"MotionBlurByLayer\"), CustomAttribute::DataType::kBool },\n\n{ kMotionBlurEnabled,_T(\"MotionBlurEnabled\"), CustomAttribute::DataType::kBool},\n\n{ kMotionBlurMultiplier,_T(\"MotionBlurMultiplier\"), CustomAttribute::DataType::kFloat},\n\n{ kMotionBlurType,_T(\"MotionBlurType\"), CustomAttribute::DataType::kInt },\n\n{ kObjectID,_T(\"ObjectID\"), CustomAttribute::DataType::kULong },\n\n{ kUserPropBuffer,_T(\"UserPropBuffer\"), CustomAttribute::DataType::kString },</pre></div> \n                     </td>\n                  </tr>\n                  <tr class=\"not-ruled-even-row\">\n                     <td class=\"table-body\"><em class=\"strong\">Node/Node/MaxCustomAttributes_BaseObject </em> \n                     </td>\n                     <td class=\"table-body\"> 复合 \n                        				\n                     </td>\n                     <td class=\"table-body\"> \n                        <p class=\"table-body\">用来容纳指定给基础对象的自定义属性的容器。请注意，所有 CA 类型均直接受支持，节点、纹理贴图、材质除外，其中参考名称存储为一个字符串以及仅存储选定元素索引的数组。 \n                           				  \n                        </p> \n                        <p class=\"table-body\">元数据：“max_a_uihint”附加到每个属性，以提供有关数据如何使用，以及哪些是 ParamType 和 ParamType2 枚举的提示。 \n                           				  \n                        </p> \n                     </td>\n                  </tr>\n                  <tr class=\"not-ruled-odd-row\">\n                     <td class=\"table-body\"><em class=\"strong\">Node/Node/MaxCustomAttributes_Modifier </em> \n                     </td>\n                     <td class=\"table-body\"> 复合 \n                        				\n                     </td>\n                     <td class=\"table-body\">用来容纳指定给对象修改器的自定义属性的容器。同上。当前导入时不支持注释。 \n                        				\n                     </td>\n                  </tr>\n               </table>\n            </div> \n            <p> </p> \n            <p> \n               <p class=\"table-title\">1.0.0 中的新增功能</p><a name=\"TABLE_9B700215F21840BA8CED29E96993ED44\"></a><div class=\"table-not-ruled\">\n                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n                     <colgroup>\n                        <col>\n                        <col>\n                        <col>\n                     </colgroup>\n                     <tr class=\"not-ruled-heading\">\n                        <th class=\"table-heading\">节点 \n                           				\n                        </th>\n                        <th class=\"table-heading\">类型 \n                           				\n                        </th>\n                        <th class=\"table-heading\">注释 \n                           				\n                        </th>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.userProperties/Max_CustomAttributes_BaseObject </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.userProperties/Max_CustomAttributes_Modifier </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.userProperties/Max_CustomAttributes_Modifier </em> \n                        </td>\n                        <td class=\"table-body\"> OStringProperty \n                           				\n                        </td>\n                        <td class=\"table-body\"> 包含具有此节点的层的名称 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Map_Channel \"Name\" </em> \n                        </td>\n                        <td class=\"table-body\"> 复合 \n                           				\n                        </td>\n                        <td class=\"table-body\">用于容纳单个通道的容器 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Map_Channel \"Name\"/.vals </em> \n                        </td>\n                        <td class=\"table-body\"> OV2fGeomParam 或 OV3fGeomParam 的数组 \n                           				\n                        </td>\n                        <td class=\"table-body\"> 包含纹理数据 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Map_Channel \"Name\"/.indices </em> \n                        </td>\n                        <td class=\"table-body\"> OInt32Property 的数组 \n                           				\n                        </td>\n                        <td class=\"table-body\">包含纹理索引 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Map_Channel \"Name\"/Max_Map_ChannelNumber </em> \n                        </td>\n                        <td class=\"table-body\">标量 OInt32Property \n                           				\n                        </td>\n                        <td class=\"table-body\"> Max 使用的贴图通道 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Vertex_Color_Map </em> \n                        </td>\n                        <td class=\"table-body\"> 复合 \n                           				\n                        </td>\n                        <td class=\"table-body\"> 顶点颜色通道的容器 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Vertex_Color_Map/.vals </em> \n                        </td>\n                        <td class=\"table-body\"> OC3fGeomParam 的数组 \n                           				\n                        </td>\n                        <td class=\"table-body\">包含顶点颜色数据 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.arbGeomParams/Max_Vertex_Color_Map/.indices </em> \n                        </td>\n                        <td class=\"table-body\"> OInt32Property 的数组 \n                           				\n                        </td>\n                        <td class=\"table-body\">顶点颜色索引 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.userProperties/Max_MaterialName </em> \n                        </td>\n                        <td class=\"table-body\"> OStringProperty \n                           				\n                        </td>\n                        <td class=\"table-body\">包含节点的材质的名称 \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/.userProperties/Max_ObjectID </em> \n                        </td>\n                        <td class=\"table-body\"> OUInt32Property \n                           				\n                        </td>\n                        <td class=\"table-body\"> 包含节点的对象 ID \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/Max_MaterialID_# </em> \n                        </td>\n                        <td class=\"table-body\"> 复合 \n                           				\n                        </td>\n                        <td class=\"table-body\"> 包含面集模式 OFaceSetSchema \n                           				\n                        </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/Max_MaterialID_#/.faceset </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/Max_MaterialID_#/.faceset/.selfBnds </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/Max_MaterialID_#/.faceset/.faces </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/Node/.geom/Max_MaterialID_#/Max_MaterialID </em> \n                        </td>\n                        <td class=\"table-body\"> OInt32Property \n                           				\n                        </td>\n                        <td class=\"table-body\">面材质 ID 的附加属性 \n                           				\n                        </td>\n                     </tr>\n                  </table>\n               </div> \n            </p> \n            <div class=\"section\"><a name=\"SECTION_10AE043ABA274FE0A86E0D958C6C26DF\"></a> \n               <h3><a name=\"GUID-45CDF4C0-1111-4714-B4A2-D70CE10DD620\"></a> 支持的曲线属性\n               </h3> <a name=\"TABLE_2FC14F64198D40D1B6B73B3A00EB346C\"></a><div class=\"table-not-ruled\">\n                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n                     <colgroup>\n                        <col>\n                        <col>\n                        <col>\n                     </colgroup>\n                     <tr class=\"not-ruled-heading\">\n                        <th class=\"table-heading\">节点\n                           					 \n                        </th>\n                        <th class=\"table-heading\">类型\n                           					 \n                        </th>\n                        <th class=\"table-heading\">注释\n                           					 \n                        </th>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:# </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/.geom/ </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/.geom/.selfBnds </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/.geom/.P </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/.geom/nVertices </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/.geom/curveBasisAndType </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/.geom/width </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/MaxLayerName </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">BezierName/BezierName:#/\\MaxObjectID </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/.geom/ </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/.geom/.selfBnds </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/.geom/.P </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/.geom/nVertices </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/.geom/curveBasisAndType </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/.geom/width </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-odd-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/MaxLayerName </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                     <tr class=\"not-ruled-even-row\">\n                        <td class=\"table-body\"><em class=\"strong\">Node/NURBSName/\\MaxObjectID </em> \n                        </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                        <td class=\"table-body\">&nbsp; </td>\n                     </tr>\n                  </table>\n               </div> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_658D3502E9C1493F8508E38F737AF488\"></a> \n               <h3><a name=\"GUID-26AA034D-7C1F-4A48-83D6-B844938FC8AB\"></a> 支持的摄影机属性\n               </h3> \n               <p> </p> \n               <p>以下是支持的摄影机属性及其在 Max 中的计算方式 \n                  		  \n               </p> \n               <div class=\"codeBlock\"><pre>       CameraState lCameraState;\n\n       Interval lValid( TIME_NegInfinity, TIME_PosInfinity );\n       RefResult lRefResult;\n\n       lRefResult = lGenCamera-&gt;EvalCameraState( t, lValid, &amp;lCameraState );\n       Interface *lMaxInterface = GetCOREInterface();\n\n       double lLensSqueeenzeRatio = lMaxInterface ? lMaxInterface-&gt;GetRendApect() : 1.0;\n       mSample.setLensSqueezeRatio( lLensSqueeenzeRatio );\n\n       double lApertureWidth = 3.6f;\n       double lApertureHeight = 2.4f;\n       if ( lMaxInterface ) {\n             lApertureWidth = lMaxInterface-&gt;GetRendApertureWidth() * MATH_MM_TO_CM;\n             float lImageAspect = lMaxInterface-&gt;GetRendImageAspect();\n             if ( lImageAspect &lt;= 0.0f ) {\n                    lImageAspect = 0.001f;\n             }\n\n             lApertureHeight = lApertureWidth * ( 1.0 / lImageAspect );\n       }\n       mSample.setHorizontalAperture( lApertureWidth );\n       mSample.setVerticalAperture( lApertureHeight );      \n\n       double lAngleOfView = lCameraState.fov * MATH_RAD_TO_DEG;\n       int lFovType = lGenCamera-&gt;GetFOVType();\n       double lFocalLength = CalculateFocalLength( lAngleOfView, lApertureWidth,\n             lApertureHeight, lFovType, lLensSqueeenzeRatio ) * ( 1.0 / MATH_MM_TO_CM );\n       mSample.setFocalLength( lFocalLength );\n      \n\n       mSample.setNearClippingPlane( lCameraState.nearRange );\n       mSample.setFarClippingPlane( lCameraState.farRange );\n       mSample.setFStop( lGenCamera-&gt;GetDOFFStop( t ) );\n       mSample.setFocusDistance( lCameraState.tdist );</pre></div> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_022D63FDC66248EE95CAAD05C89B9766\"></a> \n               <h3><a name=\"GUID-30B7F883-B6D0-4C5E-AC1F-039276253400\"></a> 支持的细分属性\n               </h3> \n               <p>不受支持。 \n                  		  \n               </p> \n               <p> </p> \n            </div> \n            <div class=\"section\"><a name=\"SECTION_92F73A78BF214741A677AA2DDEE3D5B5\"></a> \n               <h3><a name=\"GUID-74BF9833-0AC2-475F-B2AB-8661C5D9B77C\"></a>支持的点基本体属性\n               </h3> \n               <p>简单和粒子流粒子在 OPointsSchema 中均受支持。 \n                  		  \n               </p> \n            </div> \n         </div>\n         <p> </p>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">请将您关于此页内容的评论发送给我们</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>除非另有说明，否则此作品受到 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"> Creative Commons 署名-非商业性使用-相同方式共享 3.0 未本地化版本许可证</a>的制约。请参见 <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons 常见问题</a>(英文)以获取更多信息。</em></p><br></div>\n   </body>\n</html>";