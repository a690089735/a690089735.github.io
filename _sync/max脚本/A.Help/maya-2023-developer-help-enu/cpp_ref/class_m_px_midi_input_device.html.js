var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MPxMidiInputDevice Class Reference</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_midi_input_device.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: MPxMidiInputDevice Class Reference</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxMidiInputDevice Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_u_i.html\">OpenMayaUI - API module for user interface</a> &#124; <a class=\"el\" href=\"#!/url=./cpp_ref/group___m_px.html\">Proxy classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_px_midi_input_device.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_px_midi_input_device.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_px_midi_input_device.html#pro-methods\">Protected Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_px_midi_input_device-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Midi input device.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MPxMidiInputDevice.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a72b00539458a01a953120821de11cc68\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a72b00539458a01a953120821de11cc68\">openDevice</a> ()</td></tr>\n\
<tr class=\"memdesc:a72b00539458a01a953120821de11cc68\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Open the midi device.  <a href=\"class_m_px_midi_input_device.html#a72b00539458a01a953120821de11cc68\">More...</a><br></td></tr>\n\
<tr class=\"separator:a72b00539458a01a953120821de11cc68\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3baec0fab065519e471202498ba8bd27\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3baec0fab065519e471202498ba8bd27\"></a>\n\
virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a3baec0fab065519e471202498ba8bd27\">closeDevice</a> ()</td></tr>\n\
<tr class=\"memdesc:a3baec0fab065519e471202498ba8bd27\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Close the midi device. <br></td></tr>\n\
<tr class=\"separator:a3baec0fab065519e471202498ba8bd27\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5563f9c3d8d4e1b0ad125d933b9e72e3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5563f9c3d8d4e1b0ad125d933b9e72e3\"></a>\n\
virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a5563f9c3d8d4e1b0ad125d933b9e72e3\">nameAxes</a> ()</td></tr>\n\
<tr class=\"memdesc:a5563f9c3d8d4e1b0ad125d933b9e72e3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assign names to the axes of the device. <br></td></tr>\n\
<tr class=\"separator:a5563f9c3d8d4e1b0ad125d933b9e72e3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a05b4f055e7fe256dc499a25c08c098b8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a05b4f055e7fe256dc499a25c08c098b8\"></a>\n\
virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a05b4f055e7fe256dc499a25c08c098b8\">nameButtons</a> ()</td></tr>\n\
<tr class=\"memdesc:a05b4f055e7fe256dc499a25c08c098b8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assign names to the buttons of the device. <br></td></tr>\n\
<tr class=\"separator:a05b4f055e7fe256dc499a25c08c098b8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a57d2c2d7efcf15129e6eeac30fcf97d0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_state.html\">MDeviceState</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a57d2c2d7efcf15129e6eeac30fcf97d0\">deviceState</a> ()</td></tr>\n\
<tr class=\"memdesc:a57d2c2d7efcf15129e6eeac30fcf97d0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the current state of the input device.  <a href=\"class_m_px_midi_input_device.html#a57d2c2d7efcf15129e6eeac30fcf97d0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a57d2c2d7efcf15129e6eeac30fcf97d0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a63c5954210872a3b9a3feef7160811b0\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a63c5954210872a3b9a3feef7160811b0\">sendMessage</a> (const char *const messageType, const char *const messageParams)</td></tr>\n\
<tr class=\"memdesc:a63c5954210872a3b9a3feef7160811b0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">If this midi event belongs to this device then fiil up the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_state.html\" title=\"Input device state. \">MDeviceState</a>.  <a href=\"class_m_px_midi_input_device.html#a63c5954210872a3b9a3feef7160811b0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a63c5954210872a3b9a3feef7160811b0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a425c4c6b0561cccaa1d4ca34747edf71\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a425c4c6b0561cccaa1d4ca34747edf71\">getMessage</a> (const char *const messageType, char *messageResponse)</td></tr>\n\
<tr class=\"memdesc:a425c4c6b0561cccaa1d4ca34747edf71\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">User should override this method.  <a href=\"class_m_px_midi_input_device.html#a425c4c6b0561cccaa1d4ca34747edf71\">More...</a><br></td></tr>\n\
<tr class=\"separator:a425c4c6b0561cccaa1d4ca34747edf71\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a64f338903c8c14e1a437cba45f4920e1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a64f338903c8c14e1a437cba45f4920e1\">doButtonEvents</a> (bool=true)</td></tr>\n\
<tr class=\"memdesc:a64f338903c8c14e1a437cba45f4920e1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to specify whether this device is accepting button events from its child.  <a href=\"class_m_px_midi_input_device.html#a64f338903c8c14e1a437cba45f4920e1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a64f338903c8c14e1a437cba45f4920e1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa44b0f373f2b84e088e7ded1df603280\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#aa44b0f373f2b84e088e7ded1df603280\">doMovementEvents</a> (bool=true)</td></tr>\n\
<tr class=\"memdesc:aa44b0f373f2b84e088e7ded1df603280\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to specify whether this device is accepting movement input from its child.  <a href=\"class_m_px_midi_input_device.html#aa44b0f373f2b84e088e7ded1df603280\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa44b0f373f2b84e088e7ded1df603280\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_px_midi_input_device.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:addcecf15f835fe002b1e082ab78a5409\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#addcecf15f835fe002b1e082ab78a5409\">setNamedButton</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;, unsigned short)</td></tr>\n\
<tr class=\"memdesc:addcecf15f835fe002b1e082ab78a5409\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the name of the specified button.  <a href=\"class_m_px_midi_input_device.html#addcecf15f835fe002b1e082ab78a5409\">More...</a><br></td></tr>\n\
<tr class=\"separator:addcecf15f835fe002b1e082ab78a5409\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa02e7666e6d27c06d75dd36e1d0472fd\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#aa02e7666e6d27c06d75dd36e1d0472fd\">addChannel</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_channel.html\">MDeviceChannel</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:aa02e7666e6d27c06d75dd36e1d0472fd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add the given channel to this device.  <a href=\"class_m_px_midi_input_device.html#aa02e7666e6d27c06d75dd36e1d0472fd\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa02e7666e6d27c06d75dd36e1d0472fd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae698f08c0bcb8a7940be4fe13238fde9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#ae698f08c0bcb8a7940be4fe13238fde9\">setDegreesOfFreedom</a> (int freedom)</td></tr>\n\
<tr class=\"memdesc:ae698f08c0bcb8a7940be4fe13238fde9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the degrees of freedom for this device.  <a href=\"class_m_px_midi_input_device.html#ae698f08c0bcb8a7940be4fe13238fde9\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae698f08c0bcb8a7940be4fe13238fde9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aba25f814c3c0ea5d1fbdb70c02dfe854\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#aba25f814c3c0ea5d1fbdb70c02dfe854\">setNumberOfButtons</a> (int buttons)</td></tr>\n\
<tr class=\"memdesc:aba25f814c3c0ea5d1fbdb70c02dfe854\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the number of buttons for this device.  <a href=\"class_m_px_midi_input_device.html#aba25f814c3c0ea5d1fbdb70c02dfe854\">More...</a><br></td></tr>\n\
<tr class=\"separator:aba25f814c3c0ea5d1fbdb70c02dfe854\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Midi input device. </p>\n\
<p>This is the base class for user defined MIDI input devices.</p>\n\
<p>Child classes of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html\" title=\"Midi input device. \">MPxMidiInputDevice</a> should define:</p>\n\
<ul>\n\
<li><b>a constructor</b> which defines number of buttons and axes </li>\n\
<li><b>nameAttributes()</b> which names the buttons and axes (optional) </li>\n\
<li><b><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_midi_input_device.html#a57d2c2d7efcf15129e6eeac30fcf97d0\" title=\"Return the current state of the input device. \">deviceState()</a></b> which turns a midi event into an <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_state.html\" title=\"Input device state. \">MDeviceState</a> or returns NULL if it is not a midi event from this device </li>\n\
</ul>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a72b00539458a01a953120821de11cc68\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> openDevice </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Open the midi device. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a57d2c2d7efcf15129e6eeac30fcf97d0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_state.html\">MDeviceState</a> * deviceState </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the current state of the input device. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Device state object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a63c5954210872a3b9a3feef7160811b0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> sendMessage </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *const&#160;</td>\n\
          <td class=\"paramname\"><em>messageType</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const char *const&#160;</td>\n\
          <td class=\"paramname\"><em>messageParams</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>If this midi event belongs to this device then fiil up the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_state.html\" title=\"Input device state. \">MDeviceState</a>. </p>\n\
<p>Otherwise return NULL. The user should override this method.</p>\n\
<p>User should override this method.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">messageType</td><td>Message to send. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">messageParams</td><td>Message parameters.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a425c4c6b0561cccaa1d4ca34747edf71\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">char * getMessage </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *const&#160;</td>\n\
          <td class=\"paramname\"><em>messageType</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">char *&#160;</td>\n\
          <td class=\"paramname\"><em>messageResponse</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>User should override this method. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">messageType</td><td></td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">messageResponse</td><td></td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a64f338903c8c14e1a437cba45f4920e1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void doButtonEvents </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>val</em> = <code>true</code></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to specify whether this device is accepting button events from its child. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">val</td><td></td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa44b0f373f2b84e088e7ded1df603280\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void doMovementEvents </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>val</em> = <code>true</code></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to specify whether this device is accepting movement input from its child. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">val</td><td></td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"addcecf15f835fe002b1e082ab78a5409\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setNamedButton </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>buttonName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned short&#160;</td>\n\
          <td class=\"paramname\"><em>button</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the name of the specified button. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">buttonName</td><td>Name of button. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">button</td><td>Index of button. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa02e7666e6d27c06d75dd36e1d0472fd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> addChannel </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_device_channel.html\">MDeviceChannel</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>channel</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Add the given channel to this device. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">channel</td><td>Channel to add. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae698f08c0bcb8a7940be4fe13238fde9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setDegreesOfFreedom </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>freedom</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the degrees of freedom for this device. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">freedom</td><td>New degrees of freedom value. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aba25f814c3c0ea5d1fbdb70c02dfe854\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setNumberOfButtons </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>buttons</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the number of buttons for this device. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">buttons</td><td>New number of buttons. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxMidiInputDevice.h</li>\n\
<li>MPxMidiInputDevice.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";