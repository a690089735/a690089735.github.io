var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XML Schema for Shading Fragments</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XML Schema for Shading Fragments</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"xml-schema-for-shading-fragments\"></a></div>\n\
<p>The following is an XML schema which defines the XML format used for shading fragments registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFragmentManager</a></span>. This schema can be used to validate the XML for fragment definitions. Valid XML is necessary, but is not a sufficient condition for a fragment to function correctly in the Maya fragment shader system.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;?xml version=&quot;1.0&quot;?&gt;\n\
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;\n\
\n\
 &lt;xs:element name=&quot;fragment&quot;&gt;\n\
  &lt;xs:complexType&gt;\n\
   &lt;xs:sequence&gt;\n\
    &lt;xs:element name=&quot;description&quot; type=&quot;xs:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; /&gt;\n\
    &lt;xs:element name=&quot;keyword&quot; type=&quot;KeywordType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; /&gt;\n\
    &lt;xs:element name=&quot;properties&quot; type=&quot;PropertiesListType&quot; /&gt;\n\
    &lt;xs:element name=&quot;values&quot; type=&quot;ValuesListType&quot; /&gt;\n\
    &lt;xs:element name=&quot;outputs&quot; type=&quot;OutputsListType&quot; /&gt;\n\
    &lt;xs:element name=&quot;implementation&quot; type=&quot;ImplementationListType&quot; /&gt;\n\
   &lt;/xs:sequence&gt;\n\
   &lt;xs:attribute name=&quot;uiName&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
   &lt;xs:attribute name=&quot;name&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
   &lt;xs:attribute name=&quot;type&quot; type=&quot;FragmentType&quot; use=&quot;required&quot; /&gt;\n\
   &lt;xs:attribute name=&quot;class&quot; type=&quot;xs:string&quot; use=&quot;required&quot; fixed=&quot;ShadeFragment&quot; /&gt;\n\
   &lt;xs:attribute name=&quot;version&quot; type=&quot;xs:float&quot; use=&quot;required&quot; /&gt;\n\
   &lt;xs:attribute name=&quot;feature_level&quot; type=&quot;xs:integer&quot; /&gt;\n\
  &lt;/xs:complexType&gt;\n\
 &lt;/xs:element&gt;\n\
\n\
 &lt;xs:simpleType name=&quot;FragmentType&quot;&gt;\n\
  &lt;xs:restriction base=&quot;xs:string&quot;&gt;\n\
   &lt;xs:enumeration value=&quot;surface&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;declaration&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;sceneEffect&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;graph&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;interpolant&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;geomInterpolant&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;lighting&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;plumbing&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;procedure&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;structure&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;unknown&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;constant&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;accum&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;selector&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;choice&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;imaging&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;output&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;geometryShader&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;hullShader&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;domainShader&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;computeShader&quot; /&gt;\n\
  &lt;/xs:restriction&gt;\n\
 &lt;/xs:simpleType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;KeywordType&quot;&gt;\n\
  &lt;xs:attribute name=&quot;value&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;PropertiesListType&quot;&gt;\n\
  &lt;xs:choice minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;\n\
   &lt;xs:element name=&quot;float&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float2&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float3&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float4&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;target&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;texture1&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;texture2&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;texture3&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;textureCube&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;world&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;bool&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int2&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int3&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int4&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;color&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;colorAlpha&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float4x4&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;string&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;stringArray&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;countedObject&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;object&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;struct&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;camera&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;effectInstance&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;effectInstanceArray&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;sampler&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;simpleMesh&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;pointStream&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;lineStream&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;triStream&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;undefined&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;renderer&quot; type=&quot;PropertyType&quot; /&gt;\n\
   &lt;xs:element name=&quot;enum&quot; type=&quot;PropertyType&quot; /&gt;\n\
  &lt;/xs:choice&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;PropertyType&quot;&gt;\n\
  &lt;xs:attribute name=&quot;name&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;struct_name&quot; type=&quot;xs:string&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;semantic&quot; type=&quot;xs:string&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;size&quot; type=&quot;xs:nonNegativeInteger&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;flags&quot; type=&quot;xs:string&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;evaluatedByOwner&quot; type=&quot;xs:boolean&quot; /&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;ValuesListType&quot;&gt;\n\
  &lt;xs:choice minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;\n\
   &lt;xs:element name=&quot;float&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float2&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float3&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float4&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;color&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;colorAlpha&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;bool&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int2&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int3&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int4&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float4x4&quot; type=&quot;ValueType&quot; /&gt;\n\
   &lt;xs:element name=&quot;string&quot; type=&quot;ValueType&quot; /&gt;\n\
  &lt;/xs:choice&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;ValueType&quot;&gt;\n\
  &lt;xs:attribute name=&quot;name&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;value&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;OutputsListType&quot;&gt;\n\
  &lt;xs:choice minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;\n\
   &lt;xs:element name=&quot;float&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float2&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float3&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float4&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;target&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;texture1&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;texture2&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;texture3&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;textureCube&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;world&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;bool&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int2&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int3&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;int4&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;color&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;colorAlpha&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;float4x4&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;string&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;stringArray&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;countedObject&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;object&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;struct&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;camera&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;effectInstance&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;effectInstanceArray&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;sampler&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;simpleMesh&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;pointStream&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;lineStream&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;triStream&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;undefined&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;renderer&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;enum&quot; type=&quot;OutputType&quot; /&gt;\n\
   &lt;xs:element name=&quot;alias&quot; type=&quot;OutputType&quot; /&gt;\n\
  &lt;/xs:choice&gt;\n\
&lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;OutputType&quot;&gt;\n\
  &lt;xs:attribute name=&quot;name&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;struct_name&quot; type=&quot;xs:string&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;semantic&quot; type=&quot;xs:string&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;size&quot; type=&quot;xs:nonNegativeInteger&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;flags&quot; type=&quot;xs:string&quot; /&gt;\n\
  &lt;xs:attribute name=&quot;isInOutParam&quot; type=&quot;xs:boolean&quot; /&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;ImplementationListType&quot;&gt;\n\
  &lt;xs:sequence&gt;\n\
   &lt;xs:element name=&quot;implementation&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;\n\
    &lt;xs:complexType&gt;\n\
     &lt;xs:sequence&gt;\n\
      &lt;xs:element name=&quot;function_name&quot; type=&quot;FunctionNameType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; /&gt;\n\
      &lt;xs:element name=&quot;declaration&quot; type=&quot;DeclarationType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; /&gt;\n\
      &lt;xs:element name=&quot;source&quot; type=&quot;xs:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; /&gt;\n\
      &lt;xs:element name=&quot;vertex_source&quot; type=&quot;xs:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; /&gt;\n\
     &lt;/xs:sequence&gt;\n\
     &lt;xs:attribute name=&quot;render&quot; type=&quot;xs:string&quot; use=&quot;required&quot; fixed=&quot;OGSRenderer&quot; /&gt;\n\
     &lt;xs:attribute name=&quot;language&quot; type=&quot;LanguageType&quot; use=&quot;required&quot; /&gt;\n\
     &lt;xs:attribute name=&quot;lang_version&quot; type=&quot;xs:float&quot; use=&quot;required&quot; /&gt;\n\
    &lt;/xs:complexType&gt;\n\
   &lt;/xs:element&gt;\n\
  &lt;/xs:sequence&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:simpleType name=&quot;LanguageType&quot;&gt;\n\
  &lt;xs:restriction base=&quot;xs:string&quot;&gt;\n\
   &lt;xs:enumeration value=&quot;Cg&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;GLSL&quot; /&gt;\n\
   &lt;xs:enumeration value=&quot;HLSL&quot; /&gt;\n\
  &lt;/xs:restriction&gt;\n\
 &lt;/xs:simpleType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;FunctionNameType&quot;&gt;\n\
  &lt;xs:attribute name=&quot;val&quot; type=&quot;xs:string&quot; use=&quot;required&quot; /&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
 &lt;xs:complexType name=&quot;DeclarationType&quot;&gt;\n\
  &lt;xs:simpleContent&gt;\n\
   &lt;xs:extension base=&quot;xs:string&quot;&gt;\n\
    &lt;xs:attribute name=&quot;name&quot; type=&quot;xs:string&quot; /&gt;\n\
   &lt;/xs:extension&gt;\n\
  &lt;/xs:simpleContent&gt;\n\
 &lt;/xs:complexType&gt;\n\
\n\
&lt;/xs:schema&gt;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";