var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Writing Qt plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Writing Qt plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"writing-qt-plug-ins\"></a></div>\n\
<p>If you were writing your own Qt application from scratch, you would need to create your own QCoreApplication or QApplication instance to handle your application&#39;s event loop. When writing a Maya plug-in, you must instead use Maya&#39;s own application object which can be retrieved using Qt&#39;s <strong>qApp</strong> macro. The example code below uses the <strong>qApp</strong> macro to retrieve Maya&#39;s application name:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QCoreApplication*  app = qApp;\n\
if (app) {\n\
    cout &lt;&lt; &quot;Application name is &#39;&quot; &lt;&lt; app-&gt;applicationName().toStdString() &lt;&lt; &quot;&#39;&quot; &lt;&lt; endl;\n\
}\n\
\n\
</pre></div><p>Creating new windows and dialogs using Qt is done the same way as you would if you were writing a standalone Qt application. The helixQtCmd plug-in in the Developer Kit gives a very simple example of this. The plug-in provides the helixQt command which creates a Qt-based button. Whenever the button is pressed it uses API calls to create a helical curve within Maya.</p>\n\
<p>The button is a regular Qt pushButton with a createHelix() slot added to handle the creation of the curve.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class HelixButton : public QPushButton\n\
{\n\
   Q_OBJECT\n\
public:\n\
   HelixButton(const QString&amp; text, QWidget* parent = 0); \n\
   virtual  ~HelixButton();\n\
public slots:\n\
   void createHelix(bool checked);\n\
};\n\
\n\
</pre></div><p>Whenever the helixQt command is executed, it first checks to see if the button already exists. If not then it creates the button and connects its <strong>clicked</strong> signal to its <strong>createHelix</strong> slot, so that whenever the button is clicked the code to create the helix will be executed:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QPointer    HelixQtCmd::button;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> HelixQtCmd::doIt(const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; /* args */)\n\
{\n\
   if (button.isNull()) {\n\
       button = new HelixButton(&quot;Create Helix&quot;);\n\
       button-&gt;connect(button, SIGNAL(clicked(bool)), button, SLOT(createHelix(bool)));\n\
       button-&gt;show();\n\
       }\n\
\n\
</pre></div><p>If the button already exists, then the command simply ensures that it is visible and not hidden beneath other windows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">   else {\n\
       button-&gt;showNormal();\n\
       button-&gt;raise();\n\
       } \n\
   return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>Controls created directly using Qt are not in general recognized by Maya&#39;s UI commands. The <span class=\'code\'>IsUI</span> command does not list them and the commands for specific types of controls, such as <span class=\'code\'>button</span>, do not recognize them. The generic control command is an exception, though. So long as the control has been given a unique name, then the <span class=\'code\'>control</span> command can be used to test for its existence and perform basic operations on the control such as setting its visibility.</p>\n\
<p>For example, if the createHelix method of the helixQtCmd plug-in had given the button the unique name of &quot;myButton&quot;:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">   button = new HelixButton(&quot;Create Helix&quot;);\n\
   button-&gt;setObjectName(&quot;myButton&quot;);\n\
\n\
</pre></div><p>then the following MEL script could be used to hide the button:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if (`control -q -exists myButton`) {\n\
   control -e -visible false myButton;\n\
}\n\
\n\
</pre></div><p>However, the same code using the <span class=\'code\'>button</span> command would not work because <span class=\'code\'>button</span> only recognizes those buttons which it has created:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if (`button -q -exists myButton`) {      // Will always be false.\n\
   button -e -visible false myButton;   // Will never be executed.\n\
}\n\
\n\
</pre></div><p>It may sometimes be desirable to use Qt to directly access UI elements created using Maya commands. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> API class provides methods for retrieving the Qt object underlying a Maya control, layout, window or menu item. For example, if you have a Maya checkBox control named &quot;myCheckBox&quot; which was created with the following MEL script:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">window;\n\
columnLayout;\n\
checkBox myCheckBox;\n\
showWindow;\n\
\n\
</pre></div><p>You can use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> class to retrieve the checkBox&#39;s QWidget pointer, and from that determine the current state of the checkBox:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QWidget* control = <a href=\"javascript:void(0)\" data-symbol=\"MQtUtil::findControl\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html#a4117d34bd18ee0fa108c4952bda68e94&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil::findControl</a>(&quot;myCheckBox&quot;);\n\
if (control) {\n\
   QCheckBox* cb = qobject_cast(control);\n\
   if (cb) {\n\
      if (cb-&gt;isChecked()) {\n\
          <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(&quot;myCheckBox is checked&quot;);\n\
      } else {\n\
          <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(&quot;myCheckBox is not checked&quot;);\n\
      }\n\
   }\n\
}\n\
\n\
</pre></div><p>The example above also serves to illustrate why you must always be careful using MQtUtil. The code will only work if Maya&#39;s <span class=\'code\'>checkbox</span> command creates a QCheckBox widget or something derived from QCheckBox. While that may be the case in the current version of Maya, it could change in some future version. If you write code which uses Qt to directly access UI elements created using Maya commands, then it is up to you to ensure that your code still behaves as expected in each new release of Maya.</p>\n\
<p>Layouts are an even greater minefield of potential problems:</p>\n\
<ul>\n\
<li>In Maya, a layout is considered to be part of the widget hierarchy, while in Qt it is not. To get around this, Maya creates proxy widgets for most, but not all, layouts. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> provides some methods to make navigating through layouts easier, but keeping track of the proxy versus the actual layout can still be challenging for the plug-in writer and a common source of bugs.</li>\n\
<li>Some of Maya&#39;s controls and layouts have special code to interact with each other. If you try adding your own Qt-created controls to a Maya layout, or a Maya control to your own Qt-created layout, you may get unexpected results. Even using Qt to add a Maya control to Maya layout may cause problems.</li>\n\
<li>Some of Maya&#39;s layouts are not implemented as a single Qt layout but rather as a small hierarchy of layouts and controls. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> provides methods to help in navigating these complex layouts, but care must be taken.</li>\n\
</ul>\n\
<p>See <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> for a more in-depth discussion of these and other issues surrounding layouts.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";