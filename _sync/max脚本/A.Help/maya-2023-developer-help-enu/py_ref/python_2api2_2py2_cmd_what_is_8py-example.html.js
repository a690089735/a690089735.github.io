var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>Python API 2.0 Reference: python/api2/py2CmdWhatIs.py</title>\n\
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
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'python_2api2_2py2_cmd_what_is_8py-example.html\', tocPrefix);\n\
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
	  $(document).ready(py_ref_initializeToc);\n\
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
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Python API 2.0 Reference: python/api2/py2CmdWhatIs.py</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Packages</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"py_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"py_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">python/api2/py2CmdWhatIs.py</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">########################################################################</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\"># DESCRIPTION:</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\"># Produces the Python command &quot;pyWhatIs&quot;.</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\"># This simple command prints a message describing the API types of Maya objects.</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\"># If no Maya objects are passed to the command, then it lists the types of</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\"># all of the currently selected objects.</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\"># To use, make sure that pyWhatIsCmd.py is in your MAYA_PLUG_IN_PATH,</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"># then do the following:</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">#   import maya.cmds</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"comment\">#   maya.cmds.loadPlugin(&quot;pyWhatIsCmd.py&quot;)</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"comment\">#   maya.cmds.pyWhatIs()</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"comment\"># For each object, the following information will be printed: </span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"comment\">#   - name of the object </span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"comment\">#   - API type for the object </span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"comment\">#   - API function sets that can be used on the object. Note that not every</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"comment\">#     function set listed actually exists.</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"comment\"># This list is essentially the class derivation list containing all parent classes of this object.</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"comment\"># For example, create a NURBS sphere, make sure the sphere is selected and enter the command:</span></div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"comment\">#   maya.cmds.pyWhatIs()</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"comment\"># The command results in the following output in the script editor: </span></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"comment\">#   Name: nurbsSphere1 </span></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"comment\">#   Type: kTransform </span></div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"comment\">#   Function Sets: kBase, kNamedObject, kDependencyNode, kDagNode , kTransform </span></div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"comment\">########################################################################</span></div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"keyword\">from</span> builtins <span class=\"keyword\">import</span> range</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;<span class=\"keyword\">import</span> sys</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;<span class=\"keyword\">import</span> maya.api.OpenMaya <span class=\"keyword\">as</span> om</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"keyword\">def </span>maya_useNewAPI():</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;    <span class=\"stringliteral\">&quot;&quot;&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;<span class=\"stringliteral\">    The presence of this function tells Maya that the plugin produces, and</span></div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;<span class=\"stringliteral\">    expects to be passed, objects created using the Maya Python API 2.0.</span></div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;<span class=\"stringliteral\">    &quot;&quot;&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;    <span class=\"keywordflow\">pass</span></div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;<span class=\"comment\"># command</span></div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;<span class=\"keyword\">class </span>PyWhatIsCmd(om.MPxCommand):</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;    kPluginCmdName = <span class=\"stringliteral\">&quot;pyWhatIs&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;    <span class=\"keyword\">def </span>__init__(self):</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;        om.MPxCommand.__init__(self)</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;    @staticmethod</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;    <span class=\"keyword\">def </span>cmdCreator():</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;        <span class=\"keywordflow\">return</span> PyWhatIsCmd()</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;    <span class=\"keyword\">def </span>doIt(self, args):</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;        selectList = om.MGlobal.getActiveSelectionList()</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;        depFn = om.MFnDependencyNode()</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;        <span class=\"keywordflow\">for</span> i <span class=\"keywordflow\">in</span> range(selectList.length()):</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;            node = selectList.getDependNode(i)</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;            depFn.setObject(node)</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;            types = om.MGlobal.getFunctionSetList(node)</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;            print(<span class=\"stringliteral\">&quot;Name: %s&quot;</span> % depFn.name())</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;            print(<span class=\"stringliteral\">&quot;Type: %s&quot;</span> % node.apiTypeStr)</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;            sys.stdout.write( <span class=\"stringliteral\">&quot;Function Sets: &quot;</span> )</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;            sys.stdout.write(<span class=\"stringliteral\">&quot;, &quot;</span>.join(types) + <span class=\"stringliteral\">&#39;\\n&#39;</span>)</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;<span class=\"comment\"># Initialize the script plug-in</span></div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;<span class=\"keyword\">def </span>initializePlugin(plugin):</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;    pluginFn = om.MFnPlugin(plugin)</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;    <span class=\"keywordflow\">try</span>:</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;        pluginFn.registerCommand(</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;            PyWhatIsCmd.kPluginCmdName, PyWhatIsCmd.cmdCreator</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;        )</div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;    <span class=\"keywordflow\">except</span>:</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;        sys.stderr.write(</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;            <span class=\"stringliteral\">&quot;Failed to register command: %s\\n&quot;</span> % PyWhatIsCmd.kPluginCmdName</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;        )</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;        <span class=\"keywordflow\">raise</span></div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;<span class=\"comment\"># Uninitialize the script plug-in</span></div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;<span class=\"keyword\">def </span>uninitializePlugin(plugin):</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;    pluginFn = om.MFnPlugin(plugin)</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;    <span class=\"keywordflow\">try</span>:</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;        pluginFn.deregisterCommand(PyWhatIsCmd.kPluginCmdName)</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;    <span class=\"keywordflow\">except</span>:</div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;        sys.stderr.write(</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;            <span class=\"stringliteral\">&quot;Failed to unregister command: %s\\n&quot;</span> % PyWhatIsCmd.kPluginCmdName</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;        )</div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;        <span class=\"keywordflow\">raise</span></div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;<span class=\"comment\">#-</span></div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;<span class=\"comment\"># ==========================================================================</span></div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;<span class=\"comment\"># Copyright (C) 2011 Autodesk, Inc. and/or its licensors.  All</span></div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;<span class=\"comment\"># rights reserved.</span></div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;<span class=\"comment\"># The coded instructions, statements, computer programs, and/or related</span></div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;<span class=\"comment\"># material (collectively the &quot;Data&quot;) in these files contain unpublished</span></div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;<span class=\"comment\"># information proprietary to Autodesk, Inc. (&quot;Autodesk&quot;) and/or its</span></div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;<span class=\"comment\"># licensors, which is protected by U.S. and Canadian federal copyright</span></div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\">  112</span>&#160;<span class=\"comment\"># law and by international treaties.</span></div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;<span class=\"comment\"># The Data is provided for use exclusively by You. You have the right</span></div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;<span class=\"comment\"># to use, modify, and incorporate this Data into other products for</span></div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;<span class=\"comment\"># purposes authorized by the Autodesk software license agreement,</span></div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;<span class=\"comment\"># without fee.</span></div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;<span class=\"comment\"># The copyright notices in the Software and this entire statement,</span></div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;<span class=\"comment\"># including the above license grant, this restriction and the</span></div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;<span class=\"comment\"># following disclaimer, must be included in all copies of the</span></div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;<span class=\"comment\"># Software, in whole or in part, and all derivative works of</span></div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;<span class=\"comment\"># the Software, unless such copies or derivative works are solely</span></div>\n\
<div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\">  124</span>&#160;<span class=\"comment\"># in the form of machine-executable object code generated by a</span></div>\n\
<div class=\"line\"><a name=\"l00125\"></a><span class=\"lineno\">  125</span>&#160;<span class=\"comment\"># source language processor.</span></div>\n\
<div class=\"line\"><a name=\"l00126\"></a><span class=\"lineno\">  126</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\">  127</span>&#160;<span class=\"comment\"># THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND.</span></div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;<span class=\"comment\"># AUTODESK DOES NOT MAKE AND HEREBY DISCLAIMS ANY EXPRESS OR IMPLIED</span></div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;<span class=\"comment\"># WARRANTIES INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF</span></div>\n\
<div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;<span class=\"comment\"># NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR</span></div>\n\
<div class=\"line\"><a name=\"l00131\"></a><span class=\"lineno\">  131</span>&#160;<span class=\"comment\"># PURPOSE, OR ARISING FROM A COURSE OF DEALING, USAGE, OR</span></div>\n\
<div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;<span class=\"comment\"># TRADE PRACTICE. IN NO EVENT WILL AUTODESK AND/OR ITS LICENSORS</span></div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;<span class=\"comment\"># BE LIABLE FOR ANY LOST REVENUES, DATA, OR PROFITS, OR SPECIAL,</span></div>\n\
<div class=\"line\"><a name=\"l00134\"></a><span class=\"lineno\">  134</span>&#160;<span class=\"comment\"># DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF AUTODESK</span></div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;<span class=\"comment\"># AND/OR ITS LICENSORS HAS BEEN ADVISED OF THE POSSIBILITY</span></div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;<span class=\"comment\"># OR PROBABILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;<span class=\"comment\">#</span></div>\n\
<div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;<span class=\"comment\"># ==========================================================================</span></div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\">  139</span>&#160;<span class=\"comment\">#+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";