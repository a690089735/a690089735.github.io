
var py_ref_adsk_ref_toc = (function() {

var NAVTREE =
[
  [ "Python API 2.0 Reference", "index.html", [
    [ "Maya Python API 2.0 Reference", "index.html", null ],
    [ "Working with M*Array Classes", "_m_array.html", null ],
    [ "Packages", null, [
      [ "Packages", "namespaces.html", "namespaces" ],
      [ "Package Functions", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Properties", "functions_prop.html", "functions_prop" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_m_array.html",
"class_open_maya_1_1_m_color.html#a7148172eb22ac3a208887a6c19b6b04c",
"class_open_maya_1_1_m_dag_path_array.html#a5547226833c8e45557235bd3ea4a89f0",
"class_open_maya_1_1_m_external_content_info_table.html#acda87f61526615fead4145723118a10b",
"class_open_maya_1_1_m_fn.html#a02d0d2a56b69ff8c30d7e5fbbceb83bc",
"class_open_maya_1_1_m_fn.html#a3731049159ab3f87e74bb2d910ff4ba8",
"class_open_maya_1_1_m_fn.html#a6e268730b115429985b750ec516cca18",
"class_open_maya_1_1_m_fn.html#aa91fab09f824cf9e7b4086f336d2fb81",
"class_open_maya_1_1_m_fn.html#ae634fda8ad7eaa635981f32ab748aacd",
"class_open_maya_1_1_m_fn_camera.html#acf98cd8b37cd4f7747e624e05de34d8b",
"class_open_maya_1_1_m_fn_generic_attribute.html#a4fd14697144409bc6faa175b5522c295",
"class_open_maya_1_1_m_fn_mesh.html#ad37333d9eb726ded87d60c9d2ae3608c",
"class_open_maya_1_1_m_fn_plugin.html#a092610b3cd12aa6826f3eba39ec2ea8f",
"class_open_maya_1_1_m_global.html#a2fa92a67fdd1c0b2f8c2eb7367426e88",
"class_open_maya_1_1_m_it_geometry.html#a75a0d328d74dbd8b173ba7e56da8bd3c",
"class_open_maya_1_1_m_lock_message.html#a73aa99eebdb4620c3aac475a12ede431",
"class_open_maya_1_1_m_plug.html#a0c2cbaaf004f003c0e98c7ed1d148bff",
"class_open_maya_1_1_m_px_node.html",
"class_open_maya_1_1_m_rich_selection.html#aba869a6a3e41999b9215ad153354802d",
"class_open_maya_1_1_m_time.html#a605a30c55acc025421a4817a9b4a4f59",
"class_open_maya_1_1_m_user_event_message.html#a80d4a179b4b45e40bb2a92e6bc5c41b9",
"class_open_maya_anim_1_1_m_fn_anim_curve.html#a9c127d4192e50464fd0c9c424e3204a2",
"class_open_maya_render_1_1_m_draw_registry.html#a87d7f7a60580e3c1ce821444c04357d3",
"class_open_maya_render_1_1_m_geometry_requirements.html#a557752d8ed3776bbbef906040461049a",
"class_open_maya_render_1_1_m_px_primitive_generator.html#aea89f15751a041e9c100ddf2d639a9a2",
"class_open_maya_render_1_1_m_render_target.html#aa576130702ad32b64fdcf1691ec45462",
"class_open_maya_render_1_1_m_scene_render.html#ab1b3ffca326bfd23e2fe01ef65ae3bbc",
"class_open_maya_render_1_1_m_target_blend_desc.html#a3e48a0a35da86a412937fb424009d267",
"class_open_maya_render_1_1_m_uniform_parameter.html#ac45fef3892d4b1220af579892798da4b",
"class_open_maya_u_i_1_1_m3d_view.html#aad448cc89bd1d7bd635c340869ba5fb5",
"class_open_maya_u_i_1_1_m_fn_point_on_curve_manip.html#a4b2a9c20dacba86c97d73dd244e34c4b",
"class_open_maya_u_i_1_1_m_px_hardware_shader.html#a971ef8749aa0aba6221b4c6e47369b53",
"class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a3f8221f2b8218dda1c7d6fa1914e1bdf"
]; 
 var pub = {};

var storage_namespace = window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/')); 
var sidenav,navtree,content,header;

function localStorageSupported()
{
  try {
    return 'localStorage' in window && window['localStorage'] !== null && window.localStorage.getItem;
  }
  catch(e) {
    return false;
  }
}

function anyStorageSupported()
{
  // test cookies
    var cookieEnabled = false;
	document.cookie="testcookie";
	cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	if (cookieEnabled)  { return true; }
  // test localStorage
  return localStorageSupported();
}

pub.readFromStorage = function(cookie) 
{
  if (localStorageSupported())
  {
	return window.localStorage.getItem(storage_namespace + "_" + cookie);
  }
  var myCookie = storage_namespace+"_"+cookie+"=";
  if (document.cookie) 
  {
    var index = document.cookie.indexOf(myCookie);
    if (index != -1) 
    {
      var valStart = index + myCookie.length;
      var valEnd = document.cookie.indexOf(";", valStart);
      if (valEnd == -1) 
      {
        valEnd = document.cookie.length;
      }
      var val = document.cookie.substring(valStart, valEnd);
      return val;
    }
  }
  return '';
}

pub.writeToStorage = function(cookie, val, expiration) 
{
  if (localStorageSupported())
  {
	window.localStorage.setItem(storage_namespace + "_" + cookie, val);
	return;
  }
  if (val==undefined) return;
  if (expiration == null) 
  {
    var date = new Date();
    date.setTime(date.getTime()+(10*365*24*60*60*1000)); // default expiration is one week
    expiration = date.toGMTString();
  }
  document.cookie = storage_namespace + "_" + cookie + "=" + val + "; expires=" + expiration+"; path=/";
}
 
function resizeWidth() 
{
  var windowWidth = dQuery(window).width() + "px";
  var sidenavWidth = dQuery(sidenav).outerWidth();
  content.css({marginLeft:parseInt(sidenavWidth)+"px"}); 
  pub.writeToStorage('width',sidenavWidth, '');
}

function restoreWidth(navWidth)
{
  var windowWidth = dQuery(window).width() + "px";
  content.css({marginLeft:parseInt(navWidth)+6+"px"});
  sidenav.css({width:navWidth + "px"});
}

function resizeHeight() 
{
  var headerHeight = (typeof(header) == 'undefined') ? 0 : header.outerHeight();
  var footerHeight = (typeof(footer) == 'undefined') ? 0 : footer.outerHeight();
  var windowHeight = dQuery(window).height() - headerHeight - footerHeight;
  if (!dQuery("div#main.view-active").length) { 
    // we are not in the 2.1 chrome: therefore AKN or CHM
    dQuery("#side-nav").css("position", "fixed"); 
    dQuery("#doc-content").css("min-height", windowHeight + "px"); 
    }
  navtree.css({height:windowHeight + "px"});
  sidenav.css({height:windowHeight + "px",top: 0+"px"});
}

pub.initResizable = function()
{
  header  = dQuery("#banner");
  sidenav = dQuery("#side-nav");
  content = dQuery("#doc-content");
  navtree = dQuery("#nav-tree");
  footer  = dQuery("#breadcrumbs");
  dQuery(".side-nav-resizable").resizable({resize: function(e, ui) { resizeWidth(); } });
  dQuery(window).resize(function() { resizeHeight(); });
  var width = pub.readFromStorage('width');
  if (width) { restoreWidth(width); } else { resizeWidth(); }
  resizeHeight();
  var url = location.href;
  var i=url.indexOf("#");
  if (i>=0) window.location.hash=url.substr(i);
  var _preventDefault = function(evt) { evt.preventDefault(); };   
  dQuery("#splitbar").bind("dragstart", _preventDefault).bind("selectstart", _preventDefault);
  dQuery(document).bind('touchmove',function(e){
    var device = navigator.userAgent.toLowerCase();
    var ios = device.match(/(iphone|ipod|ipad)/);
    if (ios) {
      try {
        var target = e.target;
        while (target) {
          if (dQuery(target).css('-webkit-overflow-scrolling')=='touch') return;
          target = target.parentNode;
        }
        e.preventDefault();
      } catch(err) {
        e.preventDefault();
      }
    }
  });
}



var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var navTreeSubIndices = [];

function getData(varName)
{
  var i = varName.lastIndexOf('/');
  var n = i>=0 ? varName.substring(i+1) : varName;
  return eval(n.replace(/\-/g,'_'));
}

// this works in BOTH normal case and 2.1 to return the filename of the current HTML file.
function getFilename(uri)
{
    var lastSlash = uri.lastIndexOf('/');
	var lastHashMark = uri.lastIndexOf('#');
	if (lastHashMark < lastSlash)
	{ link = uri.substring(lastSlash + 1); } 
	else
	{ link = uri.substring(lastSlash + 1, lastHashMark); }
	return link;
}

// works in both 2.1 and normal case, IF used on href and not on pathname
// Do not use on attr('pathname') in to get the current filename. Use only on attr('href')
function stripPath(uri)
{
  return uri.substring(uri.lastIndexOf('/')+1);
}

// works in both 2.1 and normal case, IF used on href
// Always gives the real within-page anchor, if any.
function getHash(uri)
{
	lastHash = uri.lastIndexOf('#');
	if (lastHash == -1) // we are not in 2.1, and there is no hash.
		return '';
	UriHash = uri.substring(lastHash);
	if (UriHash.indexOf('#!/url=') == -1) // whether we're in 2.1 or not, there is a hash, so return it.
		return UriHash;
	return ''; // we are in 2.1, and there is no hash.
}

// This is supposed to support using doxygen with multiple subdirs or short naming scheme.
// In most cases I think it should return the same as above.
function stripPath2(uri)
{
  var i = uri.lastIndexOf('/');
  var s = uri.substring(i+1);
  var m = uri.substring(0,i+1).match(/\/d\w\/d\w\w\/$/); // if the path matches /d./d../$ WHY????
  return m ? uri.substring(i-6) : s;
}


function removeExpandedNodeFromCache(node)
{
	// TODO: also remove all children?
	var expandedNodes = [];
	expandedNodes = cachedExpandedNodes();
	indexOfNode = dQuery.inArray(node.id, expandedNodes);
	if (indexOfNode != -1)
	{
		expandedNodes.splice(indexOfNode, 1);
		pub.writeToStorage('expandedNodes',JSON.stringify(expandedNodes));
	}
}

function expandedInCache(inId)
{
	var expandedNodes = [];
	expandedNodes = cachedExpandedNodes();
	if (dQuery.inArray(inId, expandedNodes) != -1)
		return true;
	return false;
}

function cachedExpandedNodes()
{
	var expandedNodes = [];
	cachedData = pub.readFromStorage('expandedNodes');
	if (cachedData)
	{
		expandedNodes = JSON.parse(cachedData);
		return expandedNodes;
	}
	return [];
}

function storeExpandedNode(node)
{
	var expandedNodes = [];
	expandedNodes = cachedExpandedNodes();
	if (dQuery.inArray(node.id, expandedNodes) == -1)
	{
		expandedNodes.push(node.id);
		pub.writeToStorage('expandedNodes', JSON.stringify(expandedNodes));
	}
}

function setUseCachedBreadcrumbs(doitornot)
{
	if (doitornot)
		pub.writeToStorage('useBreadcrumbs','true');
	else
		pub.writeToStorage('useBreadcrumbs','');
}
function getUseCachedBreadcrumbs()
{
	return pub.readFromStorage('useBreadcrumbs');
}


function storeBreadcrumbs(bc)
{
	pub.writeToStorage('breadcrumbs',JSON.stringify(bc));
}
function deleteBreadcrumbs()
{
	pub.writeToStorage('breadcrumbs','[]');
}

function cachedBreadcrumbs()
{
	var crumbs = pub.readFromStorage('breadcrumbs')
	if (!crumbs) return [];
	return JSON.parse(crumbs);
}

function storeLink(link)
{
	if (!dQuery("#nav-sync").hasClass('sync')) {
		pub.writeToStorage('navpath',link);
	}
}

function deleteLink()
{
	pub.writeToStorage('navpath','');
}

function cachedLink()
{
	var linkInCache = pub.readFromStorage('navpath');
	if (!linkInCache) return '';
	return linkInCache;
}

function getScript(scriptName,func,show)
{
  var head = document.getElementsByTagName("head")[0]; 
  var script = document.createElement('script');
  script.id = scriptName;
  script.type = 'text/javascript';
  script.onload = func; 
  script.src = scriptName+'.js'; 
  if (dQuery.browser.msie && dQuery.browser.version<=8) { 
    // script.onload does not work with older versions of IE
    script.onreadystatechange = function() {
      if (script.readyState=='complete' || script.readyState=='loaded') { 
        func(); if (show) showRoot(); 
      }
    }
  }
  head.appendChild(script); 
}

function createIndent(o,domNode,node,level)
{
  var level=-1;
  var n = node;
  while (n.parentNode) { level++; n=n.parentNode; }
  if (node.childrenData) {
    var imgNode = document.createElement("img");
    imgNode.style.paddingLeft=(16*level).toString()+'px';
    imgNode.width  = 16;
    imgNode.height = 22;
    imgNode.border = 0;
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() {
      if (node.expanded) {
        dQuery(node.getChildrenUL()).slideUp("fast");
        node.plus_img.src = node.relpath+"arrowright.png";
        node.expanded = false;
		//removeExpandedNodeFromCache(node);
      } else {
        expandNode(o, node, false, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
    imgNode.src = node.relpath+"arrowright.png";
  } else {
    var span = document.createElement("span");
    span.style.display = 'inline-block';
    span.style.width   = 16*(level+1)+'px';
    span.style.height  = '22px';
    span.innerHTML = '&#160;';
    domNode.appendChild(span);
  } 
}

var animationInProgress = false;

function gotoAnchor(anchor,aname,updateLocation)
{
    if (dQuery("div#main.view-active").length) { return; } // this lets the 2.1 chrome do the scrolling.
  var pos, docContent = dQuery('#doc-content');
  if (anchor.parent().attr('class')=='memItemLeft' ||
      anchor.parent().attr('class')=='fieldtype' ||
      anchor.parent().is(':header')) 
  {
    pos = anchor.parent().position().top;
  } else if (anchor.position()) {
    pos = anchor.position().top;
  }
  if (pos) {
    var dist = Math.abs(Math.min(
               pos-docContent.offset().top,
               docContent[0].scrollHeight-
               docContent.height()-docContent.scrollTop()));
    animationInProgress=true;
    docContent.animate({
      scrollTop: pos + docContent.scrollTop() - docContent.offset().top
    },Math.max(50,Math.min(500,dist)),function(){
      if (updateLocation) window.location.href=aname;
      animationInProgress=false;
    });
  }
}

function newNode(o, po, text, link, childrenData, indexInParent)
{
  var node = {};
  node.children = [];
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = indexInParent==po.childrenData.length-1;
  node.breadcrumbs = (typeof(po.breadcrumbs) != "undefined") ? po.breadcrumbs.concat(indexInParent) : [indexInParent];

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;
  node.id = po.id + "." + text;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  node.expanded = false;
  a.appendChild(node.label);
  if (link) {
    var url;
    if (link.substring(0,1)=='^') {
      url = link.substring(1);
      link = url;
    } else {
      var prefix = "";
	if (dQuery("div#main.view-active").length) // we are in ADE 2.1
	{ prefix = "./index.html#!/url=./"; }
	url = prefix+node.relpath+link;

    }
    a.className = stripPath(link.replace('#',':'));
    if (link.indexOf('#')!=-1) {
      var aname = '#'+link.split('#')[1];
      var srcPage = getFilename(dQuery(location).attr('href'));
      var targetPage = stripPath(link.split('#')[0]);
      a.href = (srcPage!=targetPage || dQuery("div#main.view-active").length) ? url : "javascript:void(0)"; 
      a.onclick = function(){
		storeBreadcrumbs(node.breadcrumbs);
		setUseCachedBreadcrumbs(true);
        if (!dQuery(a).parent().parent().hasClass('selected'))
        {
          dQuery('.item').removeClass('selected');
          dQuery('.item').removeAttr('id');
          dQuery(a).parent().parent().addClass('selected');
          dQuery(a).parent().parent().attr('id','selected');
        }
        var anchor = dQuery(aname.substring(aname.lastIndexOf("#")))
        gotoAnchor(anchor,aname,true);
      };
    } else {
      a.href = url;
      a.onclick = function() { storeBreadcrumbs(node.breadcrumbs); setUseCachedBreadcrumbs(true);}
    }
  } else {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() {
    if (!node.childrenUL) {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function getDesiredOffset()
{
	var selectedItem = dQuery('#nav-tree #selected')
	var selectedItemTop = selectedItem.offset().top;
	var selectedItemBottom = selectedItemTop + selectedItem.height();
	var divTop = dQuery('#nav-tree').offset().top;
	var divBottom = divTop + dQuery('#nav-tree').height();
	if (selectedItemTop < divTop || selectedItemBottom > divBottom) return (dQuery('#nav-tree').height() / -5);
	return -1;
}

function showRoot()
{
  var headerHeight = dQuery("#top").height();
  var footerHeight = dQuery("#nav-path").height();
  var windowHeight = dQuery(window).height() - headerHeight - footerHeight;
  (function (){ // retry until we can scroll to the selected item
    try {
      var navtree=dQuery('#nav-tree');
	  var desiredOffset = getDesiredOffset();
	  if ( desiredOffset != -1 )
	  {
		navtree.scrollTo('#selected',0,{offset:desiredOffset});
	  }
  } catch (err) {
      setTimeout(arguments.callee, 0);
    }
  })();
}

function expandNode(o, node, imm, showRoot)
{
  if (node.childrenData && !node.expanded) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        expandNode(o, node, imm, showRoot);
      }, showRoot);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      } if (imm || (dQuery.browser.msie && dQuery.browser.version>8)) { 
        // somehow slideDown jumps to the start of tree for IE9 :-(
        dQuery(node.getChildrenUL()).show();
      } else {
        dQuery(node.getChildrenUL()).slideDown("fast");
      }
      node.plus_img.src = node.relpath+"arrowdown.png";
      node.expanded = true;
		//storeExpandedNode(node);
     }
  }
}

function glowEffect(n,duration)
{
  n.addClass('glow').delay(duration).queue(function(next){
    dQuery(this).removeClass('glow');next();
  });
}

function highlightAnchor()
{
  var aname = dQuery(location).attr('hash');
  var anchor = dQuery(aname.substring(aname.lastIndexOf("#")));
  if (typeof(toggleDetails) != "undefined")
	toggleDetails(aname.substring(aname.lastIndexOf("#") + 1), true);
  if (anchor.parent().attr('class')=='memItemLeft' || anchor.parent().attr('class')=='memItemRight'){
    var rows = dQuery('.memberdecls tr[class$="'+
               getHash(dQuery(location).attr('href')).substring(1)+'"]');
    glowEffect(rows.children(),750); // member without details
  } else if (anchor.parent().attr('class')=='groupheader'){
    glowEffect(anchor.parent(),800); // member without details
  } else if (anchor.parents().slice(2).prop('tagName')=='TR') {
    glowEffect(anchor.parents('div.memitem'),1250); // enum value
  } else if (anchor.parent().attr('class')=='fieldtype'){
    glowEffect(anchor.parent().parent(),1250); // struct field
  } else if (anchor.parent().is(":header")) {
    glowEffect(anchor.parent(),1250); // section header
  } else {
    glowEffect(anchor.next(),1250); // normal member
  }
  gotoAnchor(anchor,aname,false);
}

function selectAndHighlight(hash,n)
{
  var a;
  if (hash) {
    var link=getFilename(dQuery(location).attr('href'))+':'+hash.substring(1);
    a=dQuery('.item a[class$="'+link+'"]');
  }
  if (a && a.length) {
     dQuery('.item').removeClass('selected');
     dQuery('.item').removeAttr('id');
  	a.filter(":visible").each( function() {
    $(this).parent().parent().addClass('selected');
    $(this).parent().parent().attr('id','selected');
     } );
  } else if (n) {
     dQuery('.item').removeClass('selected');
     dQuery('.item').removeAttr('id');
    dQuery(n.itemDiv).addClass('selected');
    dQuery(n.itemDiv).attr('id','selected');
    storeBreadcrumbs(n.breadcrumbs);
    }
  if (dQuery('#nav-tree-contents .item:first').hasClass('selected')) {
    dQuery('#nav-sync').css('top','30px');
  } else {
    dQuery('#nav-sync').css('top','5px');
  }
  highlightAnchor();
  showRoot();
}

function showNode(o, node, index, hash)
{
  if (node && node.childrenData) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        showNode(o,node,index,hash);
      },true);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      }
      dQuery(node.getChildrenUL()).css({'display':'block'});
      node.plus_img.src = node.relpath+"arrowdown.png";
      node.expanded = true;
	  var n = node.children[o.breadcrumbs[index]];
	  if (typeof(n) != "undefined")
	  {
	  if (index+1<o.breadcrumbs.length) {
	    expandNode(o, n, true, true);
		showNode(o,n,index+1,hash);
	  } else {
		if (typeof(n.childrenData)==='string') {
		  var varName = n.childrenData;
		  getScript(n.relpath+varName,function(){
			n.childrenData = getData(varName);
			node.expanded=false;
			showNode(o,node,index,hash); // retry with child node expanded
		  },true);
		} else {
		  var rootBase = stripPath(o.toroot.replace(/\..+$/, ''));
		  if (rootBase=="index" || rootBase=="pages" || rootBase=="search") {
			expandNode(o, n, true, true);
		  }
		  expandNode(o, n, true, true);
		  selectAndHighlight(hash,n);
		}
	  } }
    }
  } else {
    selectAndHighlight(hash);
  }
}

function removeToInsertLater(element) {
  var parentNode = element.parentNode;
  var nextSibling = element.nextSibling;
  parentNode.removeChild(element);
  return function() {
    if (nextSibling) {
      parentNode.insertBefore(element, nextSibling);
    } else {
      parentNode.appendChild(element);
    }
  };
}

function getNode(o, po)
{
  var insertFunction = removeToInsertLater(po.li);
  po.childrenVisited = true;
  for (var i = 0; i < po.childrenData.length; i++) {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
      i);
	//if (expandedInCache(po.children[i].id)) { expandNode(o, po.children[i], true, true); }
  }
  insertFunction();
}

function gotoNode(o,subIndex,root,hash,relpath)
{
  var nti = navTreeSubIndices[subIndex][root+hash];
  o.breadcrumbs = dQuery.extend(true, [], nti ? nti : navTreeSubIndices[subIndex][root]);
  if (!o.breadcrumbs && root!=NAVTREE[0][1]) { // fallback: show index
    navTo(o,NAVTREE[0][1],"",relpath);
    dQuery('.item').removeClass('selected');
    dQuery('.item').removeAttr('id');
  }
  if (o.breadcrumbs) {
    o.breadcrumbs.unshift(0); // add 0 for root node
    showNode(o, o.node, 0, hash);
  }
}

function navTo(o,root,hash,relpath)
{
  var bc = cachedBreadcrumbs();
  if (getUseCachedBreadcrumbs() && bc && bc.length > 0) {
    o.breadcrumbs = bc;
	showNode(o, o.node, 0, '');
	if (dQuery('#nav-sync').hasClass('sync')) { setUseCachedBreadcrumbs(false); }
 	return;
  }
  if (hash.match(/^#l\d+$/)) {
    var anchor=dQuery('a[name='+hash.substring(1)+']');
    glowEffect(anchor.parent(),1250); // line number
    hash=''; // strip line number anchors
  }
  var url=root+hash.substring(hash.lastIndexOf("#"));
  var i=-1;
  while (NAVTREEINDEX[i+1]<=url) i++;
  if (i==-1) { i=0; root=NAVTREE[0][1]; } // fallback: show index
  if (navTreeSubIndices[i]) {
    gotoNode(o,i,root,hash,relpath)
  } else {
    getScript(relpath+'navtreeindex'+i,function(){
      navTreeSubIndices[i] = eval('NAVTREEINDEX'+i);
      if (navTreeSubIndices[i]) {
        gotoNode(o,i,root,hash,relpath);
      }
    },true);
  }
}

function showSyncOff(n,relpath)
{
    n.html('<img src="'+relpath+'sync_off.png" title="'+SYNCOFFMSG+'"/>');
    pub.writeToStorage('sync-state-off', 'true');
}

function showSyncOn(n,relpath)
{
    n.html('<img src="'+relpath+'sync_on.png" title="'+SYNCONMSG+'"/>');
    pub.writeToStorage('sync-state-off', '');
}

function toggleSyncButton(relpath)
{
  var navSync = dQuery('#nav-sync');
  if (navSync.hasClass('sync')) {
    navSync.removeClass('sync');
    showSyncOff(navSync,relpath);
    setUseCachedBreadcrumbs(true);
  } else {
    navSync.addClass('sync');
    showSyncOn(navSync,relpath);
    setUseCachedBreadcrumbs(false);
  }
}

pub.initNavTree = function(toroot,relpath)
{
  var o = {};
  o.toroot = toroot;
  o.node = {};
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = [];
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;
  o.node.expanded = false;
  o.node.isLast = true;
  o.node.plus_img = document.createElement("img");
  o.node.plus_img.src = relpath+"arrowright.png";
  o.node.plus_img.width = 16;
  o.node.plus_img.height = 22;
  o.node.id = "root";
  o.node.breadcrumbs = [];

  if (anyStorageSupported())
  {
    var navSync = dQuery('#nav-sync');
    if (!pub.readFromStorage('sync-state-off')) {
    	showSyncOn(navSync,relpath);
    } else {
      showSyncOff(navSync,relpath);
      navSync.removeClass('sync');
    } 
    navSync.click(function(){ toggleSyncButton(relpath); });
  }
  
  dQuery(document).off("toc_initialized");
  dQuery(document).on("toc_initialized", function(){
    navTo(o,toroot,getHash(dQuery(location).attr('href')),relpath);
    showRoot();
  });

  dQuery(window).unbind('hashchange');
  dQuery(window).bind('hashchange', function() {
     if (getHash(dQuery(location).attr('href'))){
		if (getUseCachedBreadcrumbs() || getHash(dQuery(location).attr('href')) == "")
        	navTo(o,getFilename(dQuery(location).attr('href')),getHash(dQuery(location).attr('href')),relpath); 
        else
			selectAndHighlight(getHash(dQuery(location).attr('href')), null);
     } 
  })
}

return pub;
}());