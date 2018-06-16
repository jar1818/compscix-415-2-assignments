//Load Modernizr
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexbox-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.flexbox=function(){return D("flexWrap")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


// Functions for checking user role, and hiding "View all page" container
var runOnExistence = function( selector, callback, attempts ) {
    if ( attempts <= 0) {
        return;
    }
   if ( $(selector).length ) {
        callback();
        return;
    } else {
        var wrappedCall = function() {
            runOnExistence( selector, callback, attempts - 1 );
        };
        window.setTimeout(wrappedCall, 500);
	return;
    }
};
// Selector for making same host, different sub domain links be external
var externalLinkSelector = "a.brcoeExternal:not(.not_external, .external)";

var externalizeLinks = function() {
  var externalLinkSelector = "a.brcoeExternal:not(.not_external, .external)";

  $(externalLinkSelector).each(function(){
    var externalLink = 'Links to an External Site';
    $(this)
        .not(":has(img)")
        .addClass('external')
        .html('<span>' + $(this).html() + '</span>')
        .attr('target', '_blank')
        .append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="' + externalLink + '"/>')
        .append('<span class="screenreader-only">&nbsp;(' + externalLink + ')</span>');
  });

};
// add id="live-session-user" to a connect meeting room link to cause students to automatically enter an adobe connect meeting room as a guest using their canvas name

var addLiveLink = function(){
    var studentname = ENV.current_user.display_name;
    studentname = escape(studentname);
    var suffix = "?guestname=" + studentname;
    //var livelink  = "http://ucbx.adobeconnect.com/mba2571lc?guestname=" + studentname;
    var baseConnectURL = $("a#live-session-user").prop("href");
    var livelink = baseConnectURL + suffix;
    $("a#live-session-user").prop("href", livelink); 
};
/* Test if the main container is using a flex display */

var flexFallbackController = function() {
  //Make sure this isn't just a delay issue
  if(flexContainerWorking()) {
    return;
  }
  window.setTimeout(noFlexFallback, 1000);

};
var flexContainerWorking = function() {
  var displayMode1 = $(".brcoeFlexContainer").css("display");
  var displayMode2 = $(".UNEXaltFlexContainer").css("display");
  return (displayMode1 !== "block") && (displayMode2 !== "block") && Modernizr.flexbox;
};

/* This will apply a style change which changes them to look decent in block display format */
var noFlexFallback = function() {
  if(flexContainerWorking()) {
    return;
  }
  console.log("Original Layout not working, falling back.");
  /* Apply margin-right: .5em */
  var marginRightClass = "fallbackMarginRight";
  var marginLeftClass = "fallbackMarginLeft";
  var marginRightFixSelectors = [
    ".brcoeFlexContent",
    ".brcoealtFlexContentTCT",
    ".brcoeLeftDiv",
    ".brcoealtFlexContent",
  ];

  /* Apply margin-left: 1.25em; */
  var marginLeftFixSelectors = [
    ".UNEXaltFlexContent2"
  ];

  var leftMarginSelectors = marginLeftFixSelectors.join(",");
  var rightMarginSelectors = marginRightFixSelectors.join(",");

  $(leftMarginSelectors).addClass(marginLeftClass);
  $(rightMarginSelectors).addClass(marginRightClass);

};

// Waits a second and then redraws this page
var delayedShowButton = function(){
     window.setTimeout(function(){showViewAllPages(10);},1000);
     window.setTimeout(bindRedrawViewPages, 1000);
};

var refreshFlexContent = function(){
  window.setTimeout(function(){
      $(".brcoeFlexContent, .brcoeNormalFlexContent").each(refreshHeight);
    }, 5000);
};
// Refreshes the height of an element. This clears an artifact issue in chrome
var refreshHeight = function(){
  $(this).toggle().toggle();

};

//hardcoded click event now
var bindRedrawViewPages = function () {
  $(".publish-button").find("button").off("click.delayed");
  $(".publish-button").find("button").on("click.delayed", delayedShowButton);
};

var onPage = function( name ) {
    // Checks if the url has a certain component
    // since canvas has restful locations, this should be safe
    // if they ever change routes.rb we will need to alter this.
    var url = window.location.href;
    url_components = url.split('/');
    var nameFound = ( url_components.indexOf(name) !== -1 );
    return nameFound;
};

var hideAllPageContainer = function(attemptsLeft) {
	if (!attemptsLeft){
		return; //We have used all our attempts.
	}
    var doneCheckbox = document.getElementById("mark-as-done-checkbox");
    var allPageContainer = document.getElementsByClassName("header-bar-outer-container")[0];
    if( allPageContainer !== undefined ) {
        var viewButton = allPageContainer.getElementsByClassName("view_all_pages");
        // Only hide the bar if it contains the view_all_pages button
        if(viewButton !== null && viewButton.length && !doneCheckbox ){
            allPageContainer.style.display = "none";
        } else {
            // Not needed, but more explicit.
            return;
        }
    } else {
        window.setTimeout(function(){hideAllPageContainer(attemptsLeft - 1);}, 500);
    }
};

var showViewAllPages = function(attempts) {
    if(!attempts){
       return;
    }

    var viewButton = document.getElementsByClassName("view_all_pages")[0];
    if(viewButton !== undefined){
        viewButton.style.display = "inline-block";
    } else {
        window.setTimeout(function(){showViewAllPages(attempts - 1);}, 500);
    }
};

var userRolesDefined = function() {
    return !!ENV.current_user_roles;
};

var isRole = function(role) {
    var rolesArray = ENV.current_user_roles;
    return rolesArray.indexOf(role) !== -1;
};

//In Google Analytics you'll need to set up custom dimensions as follows
// Custom Dimension 1 = Canvas User ID --- Scope = User
// Custom Dimension 2 = Archived --- Scope = User
// Custom Dimension 3 = Canvas User Role --- Scope = User
// Custom Dimension 4 = Canvas Course ID --- Scope = Hit
// Custom Dimension 5 = Canvas Course Name --- Scope = Hit
// Custom Dimension 6 = Canvas Sub-Account ID --- Scope = Hit

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

$(document).ready(function () {

    // START - More Google Analytics Tracking Code
    var sUserId
    var sUserRole
    var sTemp // Course ID from URL
    var _course
    var sCourseName = null
    var parent_account //Give you the subaccount_id that the course is in

////////////////// CHANGE UA # HERE /////////////////////
    
	ga('create', 'UA-110265875-1', 'auto');

    //Get User Information
    sUserId = ENV["current_user_id"]
    ga('set', 'dimension1', sUserId);


    //Get User Role
    if ($.inArray('admin', ENV['current_user_roles']) == -1 && $.inArray('teacher', ENV['current_user_roles']) == -1 && $.inArray('student', ENV['current_user_roles']) > -1) {
        sUserRole = "student"
    } else if ($.inArray('admin', ENV['current_user_roles']) == -1 && $.inArray('teacher', ENV['current_user_roles']) > -1) {
        sUserRole = "teacher"
    } else if ($.inArray('admin', ENV['current_user_roles']) > -1) {
        sUserRole = "admin"
    } else {
        sUserRole = "other"
    }

    ga('set', 'dimension3', sUserRole);

    //If the user is in a course
    try {
        sTemp = window.location.pathname.match(/\/courses\/(\d+)/);
        if (sTemp[1]) {

            //Get Course information - Course Name and parent sub-account id
            var d1 = $.get('/api/v1/courses/' + sTemp[1], function (_course) {
                parent_account = _course.account_id
                parent_account = parent_account.toString();
                sCourseName = _course.name
            });


            $.when(d1).done(function (_account) {
                // ...do stuff...
                ga('set', 'dimension4', sTemp[1]);
                ga('set', 'dimension5', sCourseName);
                ga('set', 'dimension6', parent_account);
                ga('send', 'pageview');
            });
        } else {
            ga('send', 'pageview');
        }
    } catch (err) {}

	window.onload = function (){
    var links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
      if (String(links[i].href).includes("cloudfront.net")){
        links[i].onclick=function(){ga('send','event','media_click',this.href)}
     }
    }
}
    // END - Google Analytics Tracking Code

});

//jquery:

$(function(){
    if( userRolesDefined() && isRole("student") && !isRole("teacher") && !onPage("groups") ){
        hideAllPageContainer(10);
    }

    if( userRolesDefined() && ( isRole("teacher") || isRole("admin")) ){
        showViewAllPages(10);
    }
});
//add tabs

$(function() {
    var tabMaker = function() {
        $( "#tabs" ).tabs();
        $( ".BRCOE_tab" ).tabs();
    };
    var accordionMaker = function() {
        $( "#accordion" ).accordion({ heightStyle: "content", icons: false,  active: false, collapsible: true, });
        $( ".BRCOE_accordion" ).accordion({ heightStyle: "content", icons: false,  active: false, collapsible: true, });
    };

    runOnExistence( "#tabs, .BRCOE_tab", tabMaker, 10 );
    runOnExistence( "#accordion, .BRCOE_accordion", accordionMaker, 10 );
    runOnExistence( ".publish-button button", bindRedrawViewPages, 10);
    runOnExistence(externalLinkSelector, externalizeLinks, 10);
	runOnExistence("#live-session-user", addLiveLink, 50);
    runOnExistence(".UNEXaltFlexContainer, .brcoeFlexContainer", flexFallbackController, 10);
    /*runOnExistence(".brcoeFlexContent, .brcoeNormalFlexContent", refreshFlexContent, 10); */
});

/* Potentially breaking 10/14
$(function() {
$( "#radio1" ).buttonset();
});
*/

//$("label[for=pseudonym_session_unique_id] > span").text("Username");
//$("label[for=pseudonym_session_unique_id_forgot] > span").text("Username");

// link directly to a tab
$(document).ready(function () {
  // Extract a boolean for page containing tabs later
  // Make this a function it can be bound to hashchange event
  function checkHashTab() {
    try {
      var tabArea = $("div#tabs"), hashVal = window.location.hash;
      //Check if this is an empty selection or not
      if (!!tabArea.length) {
        //Pull the hash from the end of the url it will begin with #
        //Fire a click event on the tab matching the hash
        $("a[href=" + hashVal + "]").click();
      }
    } catch (err) {

    }
  }
  //Fired from a elements, look up their href, and switch to the tab with the same href
  function switchTab() {
    var myHref = $(this).attr("href"), tabs = $("div#tabs");
    if (!!tabs.length) {
      $("a[href=" + myHref + "]", tabs).click();
    }

  }

  $(window).bind("hashchange", checkHashTab);
  $("a.tab_link").bind("click", switchTab);
  checkHashTab();

});


//badges
$(function() {
  // NOTE: if pasting this code into another script, you'll need to manually change the
  // next line. Instead of assigning the value null, you need to assign the value of
  // the Canvabadges domain, i.e. "https://canvabadges.herokuapp.com". If you have a custom
  // domain configured then it'll be something like "https://canvabadges.herokuapp.com/_my_site"
  // instead.
  var protocol_and_host = "https://canvabadges.herokuapp.com";
  var $scripts = $("script");
  $("script").each(function() {
    var src = $(this).attr('src');
    if(src && src.match(/canvas_profile_badges/)) {
      var splits = src.split(/\//);
      protocol_and_host = splits[0] + "//" + splits[2];
    }
    var prefix = src && src.match(/\?path_prefix=\/(\w+)/);
    if(prefix && prefix[1]) {
      protocol_and_host = protocol_and_host + "/" + prefix[1];
    }
  });
  if(!protocol_and_host) {
    console.log("Couldn't find a valid protocol and host. Canvabadges will not appear on profile pages until this is fixed.");
  }
  var match = location.href.match(/\/(users|about)\/(\d+)$/);
  if(match && protocol_and_host) {
    var user_id = match[2];
    var domain = location.host;
    var url = protocol_and_host + "/api/v1/badges/public/" + user_id + "/" + encodeURIComponent(domain) + ".json";
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: url,
      success: function(data) {
        if(data.objects && data.objects.length > 0) {
          var $box = $("<div/>");
          $box.append("<h2 class='border border-b'>Badges</h2>");
          for(idx in data.objects) {
            var badge = data.objects[idx];
            var $badge = $("<div/>", {style: 'float: left;'});
            var link = protocol_and_host + "/badges/criteria/" + badge.config_id + "/" + badge.config_nonce + "?user=" + badge.nonce;
            var $a = $("<a/>", {href: link});
            $a.append($("<img/>", {src: badge.image_url, style: 'width: 72px; height: 72px; padding-right: 10px;'}));
            $badge.append($a);
            $box.append($badge);
          }
          $box.append($("<div/>", {style: 'clear: left'}));
          $("#edit_profile_form,fieldset#courses,.more_user_information + div").after($box);
        }
      },
      error: function() {
        console.log("badges failed to load");
      },
      timeout: 5000
    });
  }
});

$(function() {
    var addedInstructions = '<p style="padding:0; margin-bottom: .25em !important;" class="ic-Login__forgot-text">Student Usernames are an X followed by 6 digits: e.g. X000000</p><p class="ic-Login__forgot-text" >Instructor Usernames are a T followed by 6 digits: e.g. T000000</p>';
    if (/\/login\/canvas$/.test(window.location.href)) {
        try {
            add_first_login();
        } catch(err) {
            console.log("Error setting login customization");
        }
        injectResetInstructions(addedInstructions);
        
     }
     

    function add_first_login() {
        var forgotPasswordContainer;
        var forgotPasswordLink;
        var firstTimeLoginContainer;
        var firstTimeLoginLink;
        var login_holder;
        
        forgotPasswordContainer = document.getElementsByClassName( "ic-Login__forgot" )[0];
        forgotPasswordLink = forgotPasswordContainer.getElementsByTagName("a")[0];
        firstTimeLoginContainer = forgotPasswordContainer.cloneNode( true );
        console.log(firstTimeLoginContainer);
        firstTimeLoginLink = firstTimeLoginContainer.getElementsByTagName("a")[0];
        firstTimeLoginLink.id = "brcoe_first_time_login";
        firstTimeLoginLink.innerText = "First Time Logging In?";
        $(firstTimeLoginLink).on("click", function( e ) {
             e.preventDefault();
             $(forgotPasswordLink).click(); } 
        );
        console.log(firstTimeLoginContainer);
        login_holder = forgotPasswordContainer.parentNode;
        console.log(login_holder);
        login_holder.insertBefore(firstTimeLoginContainer, firstTimeLoginContainer.nextSibling);
    }
    
    function injectResetInstructions(instructions) {
      try {
        $("#forgot_password_instructions").after(instructions);
      } catch(err){
        console.log("Failed to set password instructions");
      }
    }

});


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

window.ALLY_CFG = {
    'baseUrl': 'https://prod.ally.ac',
    'clientId': 6
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');