var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Porting Selection from Viewport 1 to 2</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Porting Selection from Viewport 1 to 2</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"porting-selection-from-viewport-1-to-2\"></a></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/Updated_Even-to-Odd.png\' title=\'\' /></div>\n\
<div class=\'section\'><a id=\"introduction\"></a><h2 id=\"introduction\">Introduction</h2></div>\n\
<p>Porting selection functionality in your plug-ins can be seen as a separate task from porting drawing, depending on the interfaces used and the version of Maya used.</p>\n\
<p>As of Maya 2016, native Viewport 2 selection is available.</p>\n\
<p>Before the 2016 release, selection could only be performed using existing Viewport 1 interfaces. The Viewport 1 interface drawing must use OpenGL even if the draw code for Viewport 2 is using a different drawing API (such as DirectX11).</p>\n\
<p><em>The Viewport 1 interfaces are dependent on OpenGL software pick buffers for selection.</em> Software pick buffers are not available when you are using a core profile context. If a legacy OpenGL profile is available, then this functionality may be available.</p>\n\
<p>A choice of OpenGL profiles is available on the Windows and Linux platforms. On certain configurations of Mac OS X, only core profile contexts can be instantiated.</p>\n\
<div class=\'section\'><a id=\"interfaces\"></a><h2 id=\"interfaces\">Interfaces</h2></div>\n\
<p>The following is an overview of the Viewport 2.0 selection interfaces for various objects and components. For more information regarding these interfaces, see the sections below.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"20%\" />\n\
<col width=\"20%\" />\n\
<col width=\"60%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Objects/components\n\
</th>\n\
<th class=\"table-heading\">\n\
Interface for drawing\n\
</th>\n\
<th class=\"table-heading\">\n\
Interface for selection\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Manipulators:<a name=\"GUID-6E58839A-2566-4212-A62E-73011D2C4A44\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipContainer</a></span> <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipulatorNode</a></span>\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-E31DD6F4-6F53-401A-A15C-182DE9C3D98E\"></a>\n\
<p class=\"table-body\">\n\
Drawing done using <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> is used for hit testing.\n\
</p>\n\
<span class=\"code\">MUIDrawManager::beginDrawable(unsigned int name, bool nameIsPickable )</span><a name=\"GUID-B3108C2A-3750-4536-A228-4CBD59B5D78E\"></a>\n\
<p class=\"table-body\">\n\
The bool <span class=\"code\">nameIsPickable</span> input parameter to this interface can be used to mark drawables as selectable.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Locators:<a name=\"GUID-12F549DB-578C-4068-A617-BEF45BECB418\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode</a></span>\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-5E9E46E8-432F-4C98-AC99-CBFC7BCDAEA0\"></a>\n\
<p class=\"table-body\">\n\
Drawing done using <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> is used for hit testing.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Shapes:<a name=\"GUID-0697CD9A-0258-4541-A15E-7138A26FEA00\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape</a></span>\n\
</p>\n\
<a name=\"GUID-5F7C3C5C-A117-4133-8360-B6EEDF5DE209\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_component_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentShape</a></span>\n\
</p>\n\
<a name=\"GUID-01C2EA1E-CA25-4A45-AE76-09687CCA189C\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode</a></span>\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-28B1AB96-53EF-49D7-BCFA-F091DF8A41D0\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>\n\
</p>\n\
<a name=\"GUID-F70E3595-564A-422A-A6E0-0811277FCB51\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-EE632164-BCE0-4291-ADDE-2B91B11ABDC0\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape::getShapeSelectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html#acedd5e97c21aacfc5f976499438c7fa8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html#a9810ef42719423cd3ca10bd51dcba84f&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape::getShapeSelectionMask()</a></span> to specify the type of geometry, selection priority and filtering.\n\
</p>\n\
<a name=\"GUID-5B606B2C-89D4-456E-AA08-C0B69D16B5E6\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::getSelectionPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#af3b88498daedce6cd2e55103c58160a4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a1e9e778dc6c1a23256a84bb47510ec00&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride::getSelectionPath()</a></span> for complex plug-ins to obtain the dag path from a render item.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Components\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-85BF2328-FA1E-43F8-8B98-1335B601424B\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>\n\
</p>\n\
<a name=\"GUID-34F1E79E-106B-489E-838A-2721A103DAFF\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"UL_EFE02A64740141839DDBA04402FA39D4\"></a>\n\
<ul>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MSelectionContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_selection_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_selection_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionContext</a></span> to provide information about the state of selection, including selection level.\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MIntersection\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIntersection</a></span> to provide hit intersection information.\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MSelectionInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_selection_info.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_selection_info.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionInfo</a></span> to provide selection state information about selected objects.\n\
</li>\n\
<li>\n\
<p>\n\
<a name=\"GUID-FC5CC1BD-9112-48D0-8FBE-2B25220C613A\"></a><span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentConverter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_component_converter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentConverter</a></span> to convert selection intersection data to a list of object components (<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MFnComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_component.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnComponent</a></span>) by matching the index buffer positions to valid component ids.\n\
</p>\n\
<p>\n\
<a name=\"GUID-BFF2659D-469A-4346-A961-8CAE52DE04A1\"></a>Register/de-register with <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry::registerComponentConverter()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html#ac76651be69e4645ee8e741049dd183ed&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html#a2314ec585d240eb0677ccabb98175c84&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry::registerComponentConverter()</a></span> and <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry::deregisterComponentConverter()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html#a56780f99f287625aef1d60eb5c6a0e03&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html#a081911bfd247ca93336bf3e60aff1db8&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry::deregisterComponentConverter()</a></span>.\n\
</p>\n\
</li>\n\
<li>\n\
<p>\n\
<a name=\"GUID-C5AE1911-7FB9-4D9A-930D-22AE8ADBE363\"></a><span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::refineSelectionPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a134d9274d060a8deb679db8408419cab&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#affc18019b6fc7a3f06195b7f24ffdfab&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::refineSelectionPath()</a></span> to override the selected path or selected components during the hit test phase.\n\
</p>\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::updateSelectionGranularity()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a35db327011e850bc4f290c65fdc8d8fd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#a31540bd6c022db98652447b130b58733&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::updateSelectionGranularity()</a></span> and <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::updateSelectionGranularity()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a35db327011e850bc4f290c65fdc8d8fd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a8a2dbaebc1b0e186ad56311f8d8073d0&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride::updateSelectionGranularity()</a></span> to set the selection level, for example, object or component.\n\
</li>\n\
<li>\n\
<p>\n\
<a name=\"GUID-A7C8D89E-1FF1-465C-8E18-646EBEE37161\"></a><span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::getInstancedSelectionPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a3d9b68da81d724902522fe2bf5f809c5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a8bff1faa2c2037aa27da2f4aa3aa3f72&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride::getInstancedSelectionPath()</a></span> to select the correct render item instance when the viewport is in GPU acceleration mode.\n\
</p>\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::pointSnappingActive()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a4a0af36ded25ebee92ce267d31004f0c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#a0a64feda46dfc4a9a6f18cc8fbc44cbf&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::pointSnappingActive()</a></span> and <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::pointSnappingActive()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a4a0af36ded25ebee92ce267d31004f0c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a126938441cd4ccfeb01ee40d1c537b42&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride::pointSnappingActive()</a></span> to set the correct selection level when snapping is active.\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometry::DrawMode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a9a325db332d24e6105fe3b48a94604c3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry::DrawMode</a></span> <span class=\"code\">kSelectionOnly</span> to indicate draw only for selection.\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::setSelectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a793ce3d41d7f13aea020b811379a3ef3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#aa4572b596dcfb26d8027f5cb36c42de3&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::setSelectionMask()</a></span> to set the render item selection mask.\n\
</li>\n\
<li>\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape::getComponentSelectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html#a8904f1188c606e05e32ffb20c92812bf&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html#a44d64766283a7726b5276d25b900fe62&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape::getComponentSelectionMask()</a></span> to provide information about the shape component selection mask.\n\
</li>\n\
</ul>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<blockquote>\n\
<p><strong>Note:</strong> Tool contexts (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxContext</a></span>) cannot be selected and are thus not included in this list.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"manipulators\"></a><h2 id=\"manipulators\">Manipulators</h2></div>\n\
<p>Manipulators are not selectable at the object level for both Viewport 1 and Viewport 2 as they do not exist as scene elements.</p>\n\
<p>The selection level that is available for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipulatorNode</a></span> instances is defined at the &quot;sub-object&quot; level, also called the &quot;handle level&quot;.</p>\n\
<p>Manipulator containers (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipContainer</a></span>) that are composed from existing manipulators require no additional code to support selection as this support is defined at the manipulator level. This is true for both Viewport 1 and Viewport 2. It is possible to add additional draw (and hence selection) for a container as desired.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Draw Interface Used\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Disabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Enabled\n\
</th>\n\
<th class=\"table-heading\">\n\
SDK Examples\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> (without custom selection handles)\n\
</td>\n\
<td class=\"table-body\">\n\
Uses Viewport 1 draw routine for hit testing.\n\
</td>\n\
<td class=\"table-body\">\n\
All drawing done using <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> during draw will be used for a single hit test.\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"mild\">footprintManip</em> (<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipulatorNode</a></span>) <em class=\"mild\">swissArmyManip</em> (<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipContainer</a></span>)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> (with custom selection handles)\n\
</td>\n\
<td class=\"table-body\">\n\
Viewport 1 interfaces use OpenGL pick identifiers as the actual selection handles and explicitly relies on software pick buffers (which may not exist for all OpenGL context profiles). Interfaces that can be used: <span class=\"code\">colorAndName() </span><span class=\"code\">shouldDrawHandleAsSelected()</span> <span class=\"code\">glFirstHandle() glActiveName()</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Specific drawables can be marked selectable using &quot;handle&quot; identifiers via arguments on the <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager::beginDrawable()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#a9008ebfa63c02670625076230d77c3f9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html#a1c1472189f0e6f4f1b76d9b4591a0491&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager::beginDrawable()</a></span> method: <span class=\"code\">MUIDrawManager::beginDrawable(unsigned int name, bool nameIsPickable )</span> If <em class=\"mild\">nameIsPickable</em> is set to be &quot;true&quot; then the subsequent draw code will be used for hit testing. This should apply for both 3D as well as 2D manipulators.\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"mild\">lineManip</em> (<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipulatorNode</a></span>)\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"locators\"></a><h2 id=\"locators\">Locators</h2></div>\n\
<p>Locators (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode</a></span>) are only selectable at the object level.</p>\n\
<p>For locators that draw very simple geometry, or when there will be very few occurrences of a given locator in a scene, it is acceptable to use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> interface for drawing and selection.</p>\n\
<p>For &quot;click&quot; or closest point single selection, there is no change in the interface logic used. The members <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::useClosestPointForSelection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#a46219280be6a8c5debd03bea8d8ebf4f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#a82ee082cd9fe43174477b7dac00b70e3&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode::useClosestPointForSelection()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::closestPoint()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#a7527772bfca7cf7becb5fafa70607508&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#a8031e9b43148b7775483d94155d44f80&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode::closestPoint()</a></span> should be implemented for Viewport 1 selection. For Viewport 2 selection, the closest point is computed automatically from the geometry data and hence the APIs are not used.</p>\n\
<p>Anything that is more complicated or requires better performance falls into the category of &quot;shapes&quot;, covered in the next section. They should be implemented using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"21.73913043478261%\" />\n\
<col width=\"28.260869565217394%\" />\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Draw Interface Used\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Disabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Enabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Examples\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::boundingBox()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#a762dab569a9d88aa731f3c7229803e1e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#acdab0d6950dec52c09cd061acca9d6f4&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode::boundingBox()</a></span> is used for hit testing.\n\
</td>\n\
<td class=\"table-body\">\n\
All drawing using <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> is used for hit testing.\n\
</td>\n\
<td class=\"table-body\">\n\
2016 version of <span class=\"filePath\">footPrintNode</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride::prepareForDraw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#a9add62fff797c657c9bb5740b97f6a29&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html#a763bdb6350add68c3d018e82ecdd4c94&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride::prepareForDraw()</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::boundingBox()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#a762dab569a9d88aa731f3c7229803e1e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#acdab0d6950dec52c09cd061acca9d6f4&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode::boundingBox()</a></span> is used for hit testing. Position of the hit is the position of the origin of the locator. For more precision, implement <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::closestPoint()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#a7527772bfca7cf7becb5fafa70607508&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#a8031e9b43148b7775483d94155d44f80&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode::closestPoint()</a></span> (see above).<a name=\"GUID-3681CF96-83B2-465D-91C4-7EB34165E17E\"></a>\n\
<p class=\"table-body\">\n\
(Note: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride::prepareForDraw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#a9add62fff797c657c9bb5740b97f6a29&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html#a763bdb6350add68c3d018e82ecdd4c94&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride::prepareForDraw()</a></span> is not used, even if implemented).\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Raw draw code cannot be supported and therefore using <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> is not recommended.\n\
</td>\n\
<td class=\"table-body\">\n\
2015 or earlier version of <span class=\"filePath\">footPrintNode</span>, or 2016 version of <span class=\"filePath\">rawFootPrintNode</span>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"shapes\"></a><h2 id=\"shapes\">Shapes</h2></div>\n\
<p>More complex object types such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_component_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentShape</a></span>, (or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode</a></span>s that require more complex or persistent drawing) should use render item (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>) -based interfaces: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>.</p>\n\
<p>Using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> for complex objects is <em>not</em> recommended, though Viewport 2 selection can still work.</p>\n\
<p>Using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> if Viewport 2 selection is required is <em>not</em> recommended as it does not support raw draw code.</p>\n\
<div class=\'section\'><a id=\"mpxgeometryoverride\"></a><h3 id=\"mpxgeometryoverride\">MPxGeometryOverride</h3></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Draw interface used\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Disabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Enabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Examples\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> (object level)\n\
</td>\n\
<td class=\"table-body\">\n\
Use Viewport 1 selection interfaces\n\
</td>\n\
<td class=\"table-body\">\n\
Selection is performed per render item. For shapes, <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape::getShapeSelectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html#acedd5e97c21aacfc5f976499438c7fa8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html#a9810ef42719423cd3ca10bd51dcba84f&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape::getShapeSelectionMask()</a></span> can be overridden to specify the type of geometry, selection priority and filtering.\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"filePath\">footPrintNode_GeometryOverride</span>: for usage with a locator <span class=\"filePath\">apiMeshShape</span>: for usage with a surface shape <span class=\"filePath\">gpuCacheShapeNode</span>: for an example of using <span class=\"code\">getShapeSelectionMask()</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> (component level)\n\
</td>\n\
<td class=\"table-body\">\n\
Use Viewport 1 selection code\n\
</td>\n\
<td class=\"table-body\">\n\
See Viewport 2 Selection Handling of Components section.\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"filePath\">apiMeshShape</span>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"mpxsubsceneoverride\"></a><h3 id=\"mpxsubsceneoverride\">MPxSubSceneOverride</h3></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Draw interface used\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Disabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Viewport 2 Selection Enabled\n\
</th>\n\
<th class=\"table-heading\">\n\
Examples\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
Use Viewport 1 selection interfaces or custom selection.\n\
</td>\n\
<td class=\"table-body\">\n\
Complex plugins may require implementing <span class=\"code\">getSelectionPath()</span> to get back the proper dag path (<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a></span>) from a render item.\n\
</td>\n\
<td class=\"table-body\">\n\
gpuCache: <span class=\"filePath\">gpuCacheSubSceneOverride.cpp</span>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span> (component level)\n\
</td>\n\
<td class=\"table-body\">\n\
Use Viewport 1 selection interfaces or custom selection.\n\
</td>\n\
<td class=\"table-body\">\n\
See Viewport 2 Selection Handling of Components section.\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"viewport-2-selection-handling-of-components\"></a><h2 id=\"viewport-2-selection-handling-of-components\">Viewport 2 Selection Handling of Components</h2></div>\n\
<p>When Viewport 2 selection is enabled (as of Maya 2016) the selection interfaces on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI</a></span> are no longer called.</p>\n\
<p>Functionality in the following Viewport 1 interfaces:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::select()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#ad847ba49d36027fa9ae1184695b248b6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#aa3a97433ccea1118606c281d5a033414&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::select()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::selectUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#a9f737af188a8dea503d7b06bdd0f3b01&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a61c466b2e3dfee36f9012df2c726f3fa&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::selectUV()</a></span></li>\n\
</ul>\n\
<p>are handled by the following Viewport 2 interfaces:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_selection_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_selection_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionContext</a></span>: Information about the state of selection including selection level.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntersection\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIntersection</a></span>: Hit intersection information</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_selection_info.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_selection_info.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionInfo</a></span>: Used with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::refineSelectionPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a134d9274d060a8deb679db8408419cab&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#affc18019b6fc7a3f06195b7f24ffdfab&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::refineSelectionPath()</a></span></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentConverter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_component_converter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentConverter</a></span> : utility to handle <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntersection\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIntersection</a></span>s and convert index buffers to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_component.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnComponent</a></span>s.</p>\n\
<p>Registered / deregistered on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> using <span class=\'code\'>registerComponentConverter()</span> / <span class=\'code\'>deregisterComponentConverter()</span></p></li>\n\
<li><p>For <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>:</p>\n\
<p>A &quot;selection&quot; mode (<span class=\'code\'>DrawMode</span>) allows indication of whether a render item should be used for selection.</p>\n\
<p>There is the ability to set a selection mask (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionMask\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_mask.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_mask.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionMask</a></span>) to indicate the selection type.</p></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape</a></span>: has been extended with the ability to return a selection mask (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionMask\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_mask.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_mask.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionMask</a></span>) to indicate that component selection is supported in Viewport 2.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"plugin-setup\"></a><h3 id=\"plugin-setup\">Plugin Setup</h3></div>\n\
<p>A plug-in must register its own implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentConverter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_component_converter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentConverter</a></span> for any given render item name. It is possible to register the same converter against multiple render item names to allow reuse between different render items. A new converter is created for each render item to process.</p>\n\
<div class=\'section\'><a id=\"regular-draw-update\"></a><h3 id=\"regular-draw-update\">Regular Draw Update</h3></div>\n\
<p>Render items marked for selection are added when the draw update code is called due to any change in rendering preferences (for example: a change in the highlight list, and so forth). Starting a selection should not dirty the render items of scene elements that are not in the selection region, so the plug-in should not expect <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::updateDG()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a66874f312bfb87c0159dfbfacafbc3fd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#a5c5cf0da1f4f0c8f296b339a6f1e6cd1&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::updateDG()</a></span> to be called for all nodes each time a selection is done.</p>\n\
<p>The following describes the steps by which selection is processed:</p>\n\
<p><strong>Selection draw stage:</strong></p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::updateSelectionGranularity()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a35db327011e850bc4f290c65fdc8d8fd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#a31540bd6c022db98652447b130b58733&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::updateSelectionGranularity()</a></span> is called to find out if the geometry node wants to participate in component selection</li>\n\
<li>In <em>camera selection mode</em> :\n\
<ul>\n\
<li>All selectable render items are drawn with a special shader that uses a different color for each component</li>\n\
<li>The draw buffer is then scanned and each color found in the selection region is transformed into a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntersection\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIntersection</a></span></li>\n\
</ul></li>\n\
<li>In <em>regular selection mode</em>:\n\
<ul>\n\
<li>The vertex positions of all selectable render items are used to compute <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntersection\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_intersection.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIntersection</a></span> with the selection region.</li>\n\
</ul></li>\n\
</ul>\n\
<p><strong>Selection interpretation stage:</strong></p>\n\
<ul>\n\
<li>The list of hits is sorted by render item (or proximity for click selection).</li>\n\
<li>All hits for a render item are then processed and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentConverter::addIntersection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#aeb25b60515cb3943231004fe1e363df3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_component_converter.html#ab50eac1b53b6749104f9d4f577f6e586&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentConverter::addIntersection()</a></span> is called to convert the hit information into a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_component.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnComponent</a></span>.</li>\n\
<li>When all hits are processed for a render item or when the nearest hit is processed for &quot;click&quot; selection, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentConverter::component()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#ad506603f129f6876b4f8c03ffe0b0b36&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_component_converter.html#a7ca29839b8d5dbba5ec1f589cdf27ccc&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentConverter::component()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxComponentConverter::selectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#aaa36eb1ffbfba344bcbcf291834e0c7f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_component_converter.html#ab125f7486b751a14abe0e3d1704eadc6&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxComponentConverter::selectionMask()</a></span> are called to gather the final component information, and then <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::refineSelectionPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a134d9274d060a8deb679db8408419cab&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#affc18019b6fc7a3f06195b7f24ffdfab&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::refineSelectionPath()</a></span> is called to add the finishing touches to the selection information before it gets added to the list of selected items.</li>\n\
</ul>\n\
<p>Examples: apiMeshShape (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span> versions).</p>\n\
<div class=\'section\'><a id=\"notes-for-complex-shaders\"></a><h2 id=\"notes-for-complex-shaders\">Notes for Complex Shaders</h2></div>\n\
<p>For hardware shaders that displace input geometry (for example, a mesh that is drawn at a different location, or with more details, such as tessellation), or that generate complex geometries at the shader level (for example, shaders that use a geometry stage to draw complex geometry such as a particle blob on a very basic geometry such as a point):</p>\n\
<ul>\n\
<li>For the Viewport 2 selection path, when creating the selection render items, custom hardware selection effects can be added that replicate the displacement/generation of the beauty pass, but that draw flat shaded geometries using a color defined by the hardware selection protocol. These items will then be selectable using camera based selection mode in a WYSIWYG manner in the viewport.</li>\n\
<li>For the non-Viewport 2.0 selection path, draw code in Viewport 1 interfaces which displaces geometry is always ignored.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"notes-for-geometry\"></a><h2 id=\"notes-for-geometry\">Notes for Geometry</h2></div>\n\
<p>It is possible to reference or extract out the geometry used for render items (<span class=\'code\'>MRenderItems</span>) and to use raw resource handle to draw with. This can help to avoid duplicating memory if using Viewport 2 draw and Viewport 1 selection.</p>\n\
<div class=\'section\'><a id=\"camera-based-selection\"></a><h2 id=\"camera-based-selection\">Camera based selection</h2></div>\n\
<p>In camera based selection mode, the scene is painted using a single plain color for each distinct scene element that can be selected. The shader should use the following formula to generate the plain color used for selection:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">int colorID = [HWS_PrimitiveBase];\n\
if (![HWS_ObjectLevel])\n\
    colorID += PrimitiveID;\n\
if ([HWS_InstancedDraw])\n\
    colorID += InstanceID * [HWS_PrimitiveCountPerInstance];\n\
float4 color;\n\
color.x = float(colorID &amp; 0x000000FF) / 255.0;\n\
color.y = float((colorID &amp; 0x0000FF00) &gt;&gt; 8) / 255.0;\n\
color.z = float((colorID &amp; 0x00FF0000) &gt;&gt; 16) / 255.0;\n\
color.w = float((colorID &amp; 0xFF000000) &gt;&gt; 24) / 255.0;\n\
</pre></div><p>PrimitiveID and InstanceID are system values that can be retrieved using the correct GLSL/HLSL API (SV_PrimitiveID and SV_InstanceID for DX11, and gl_PrimitiveID and gl_InstanceID for GLSL). Square brackets are used to indicate any variable that is declared using the aforementioned semantics.</p>\n\
<p>Refer to the NormalView_Selection technique definition in the WaterSimulation shader example for a demonstration of how to select displaced geometry, and to draw vertex, edge, and face components at their correct displaced positions. For the GLSL version, see the <span class=\'code\'>WaterSimulation.ogsfx</span> and <span class=\'code\'>PS_HWSelection.ogsfh</span> files in the <span class=\'code\'>presets\\GLSL\\examples</span> folder of the Maya installation directory. For the DX11 version, see the <span class=\'code\'>WaterSimulation.fx</span> and <span class=\'code\'>PS_HWSelection.fxh</span> files in the <span class=\'code\'>presets\\HLSL11\\examples</span> folder.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> For more information, see <em>camera selection mode</em> in the <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Porting-Selection-from-Viewport.html#regular-draw-update\' title=\'\'>Regular Draw Update</a> section above.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"selection-mask-usage\"></a><h2 id=\"selection-mask-usage\">Selection mask usage</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::getShapeSelectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#acedd5e97c21aacfc5f976499438c7fa8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#a828167a6f8149d841d162923af60a87b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode::getShapeSelectionMask()</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape::getShapeSelectionMask()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html#acedd5e97c21aacfc5f976499438c7fa8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html#a9810ef42719423cd3ca10bd51dcba84f&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape::getShapeSelectionMask()</a></span> can be overridden to return the desired selection mask for use in Viewport 2.0.</p>\n\
<p>This can be either an existing internal mask or a custom one that is registered by using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionMask::registerSelectionType()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_mask.html#ab4cc6ba8300a9924dd443bb64b736744&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_mask.html#a26b46bba359ebbb17e974492df713034&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionMask::registerSelectionType()</a></span>. For example, if a custom type called <em>&quot;my_selection_type&quot;</em> is registered, the <span class=\'code\'>getShapeSelectionMask()</span> would return <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionMask\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_mask.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_mask.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionMask</a>(&quot;my_selection_type&quot;)</span>.</p>\n\
<p>By default, custom selection types are disabled. To enable a custom selection type, do as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&quot;selectType -byName \\&quot;my_selection_type\\&quot; 1&quot;\n\
</pre></div><p>where <em>&quot;my_selection_type&quot;</em> is your custom type.</p>\n\
<p>Also available with a custom selection type is the ability to set the priority via the <span class=\'code\'>selectPriority</span> command. In this example, assume that the registration originally set the priority to be 2.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Change it to be lower in priority \n\
selectPriority -byName &quot;my_selection_type&quot; 1;\n\
\n\
// Change it to be higher in priority \n\
selectPriority -byName &quot;my_selection_type&quot; 3;\n\
</pre></div><p>An example use case is when an environment encompasses the scene. The user may either not be able to or accidentally select the environment instead of the objects in the scene. To mitigate this, the environment&#39;s selection priority can be lowered.</p>\n\
<p>Selection of a particular type can also be disabled to disallow selection:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&quot;selectType -byName &quot;my_selection_type&quot; 0;\n\
</pre></div><p>See the <em>footPrintNode</em> geometry override implementation (<em>footPrintNode_GeometryOverride</em> Developer Kit example) for an example use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode</a></span> and a custom selection type. See <em>apiDirectionalLightShape</em> and <em>apiMeshShape</em> for example use of internal masks.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";