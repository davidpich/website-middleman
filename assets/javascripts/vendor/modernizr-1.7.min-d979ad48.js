window.Modernizr=function(e,t,n){function i(){f.input=function(e){for(var t=0,n=e.length;n>t;t++)S[e[t]]=!!(e[t]in b);return S}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var i,r,a,s=0,o=e.length;o>s;s++)b.setAttribute("type",r=e[s]),i="text"!==b.type,i&&(b.value=x,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&b.style.WebkitAppearance!==n?(m.appendChild(b),a=t.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,m.removeChild(b)):/^(search|tel)$/.test(r)||(/^(url|email)$/.test(r)?i=b.checkValidity&&b.checkValidity()===!1:/^color$/.test(r)?(m.appendChild(b),m.offsetWidth,i=b.value!=x,m.removeChild(b)):i=b.value!=x)),T[e[s]]=!!i;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function r(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+E.join(n+" ")+n).split(" ");return!!a(i,t)}function a(e,t){for(var i in e)if(y[e[i]]!==n&&(!t||t(e[i],F)))return!0}function s(e,t){return-1!==(""+e).indexOf(t)}function o(e,t){return typeof e===t}function u(e,t){return l(w.join(e+";")+(t||""))}function l(e){y.cssText=e}var c,d,h="1.7",f={},p=!0,m=t.documentElement,g=t.head||t.getElementsByTagName("head")[0],v="modernizr",F=t.createElement(v),y=F.style,b=t.createElement("input"),x=":)",C=Object.prototype.toString,w=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),E="Webkit Moz O ms Khtml".split(" "),D={svg:"http://www.w3.org/2000/svg"},k={},T={},S={},N=[],L=function(e){var n,i=t.createElement("style"),r=t.createElement("div");return i.textContent=e+"{#modernizr{height:3px}}",g.appendChild(i),r.id="modernizr",m.appendChild(r),n=3===r.offsetHeight,i.parentNode.removeChild(i),r.parentNode.removeChild(r),!!n},q=function(){function e(e,r){r=r||t.createElement(i[e]||"div");var a=(e="on"+e)in r;return a||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),a=o(r[e],"function"),o(r[e],n)||(r[e]=n),r.removeAttribute(e))),r=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),A={}.hasOwnProperty;d=o(A,n)||o(A.call,n)?function(e,t){return t in e&&o(e.constructor.prototype[t],n)}:function(e,t){return A.call(e,t)},k.flexbox=function(){function e(e,t,n,i){e.style.cssText=w.join(t+":"+n+";")+(i||"")}function n(e,t,n,i){t+=":",e.style.cssText=(t+w.join(n+";"+t)).slice(0,-t.length)+(i||"")}var i=t.createElement("div"),r=t.createElement("div");n(i,"display","box","width:42px;padding:0;"),e(r,"box-flex","1","width:10px;"),i.appendChild(r),m.appendChild(i);var a=42===r.offsetWidth;return i.removeChild(r),m.removeChild(i),a},k.canvas=function(){var e=t.createElement("canvas");return e.getContext&&e.getContext("2d")},k.canvastext=function(){return f.canvas&&o(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){return"ontouchstart"in e||L("@media ("+w.join("touch-enabled),(")+"modernizr)")},k.geolocation=function(){return!!navigator.geolocation},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){var t=!!e.openDatabase;return t},k.indexedDB=function(){for(var t=-1,n=E.length;++t<n;){var i=E[t].toLowerCase();if(e[i+"_indexedDB"]||e[i+"IndexedDB"])return!0}return!1},k.hashchange=function(){return q("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!(!e.history||!history.pushState)},k.draganddrop=function(){return q("dragstart")&&q("drop")},k.websockets=function(){return"WebSocket"in e},k.rgba=function(){return l("background-color:rgba(150,255,150,.5)"),s(y.backgroundColor,"rgba")},k.hsla=function(){return l("background-color:hsla(120,40%,100%,.5)"),s(y.backgroundColor,"rgba")||s(y.backgroundColor,"hsla")},k.multiplebgs=function(){return l("background:url(//:),url(//:),red url(//:)"),new RegExp("(url\\s*\\(.*?){3}").test(y.background)},k.backgroundsize=function(){return r("backgroundSize")},k.borderimage=function(){return r("borderImage")},k.borderradius=function(){return r("borderRadius","",function(e){return s(e,"orderRadius")})},k.boxshadow=function(){return r("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return u("opacity:.55"),/^0.55$/.test(y.opacity)},k.cssanimations=function(){return r("animationName")},k.csscolumns=function(){return r("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return l((e+w.join(t+e)+w.join(n+e)).slice(0,-e.length)),s(y.backgroundImage,"gradient")},k.cssreflections=function(){return r("boxReflect")},k.csstransforms=function(){return!!a(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},k.csstransforms3d=function(){var e=!!a(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return e&&"webkitPerspective"in m.style&&(e=L("@media ("+w.join("transform-3d),(")+"modernizr)")),e},k.csstransitions=function(){return r("transitionProperty")},k.fontface=function(){var e,n,i=g||m,r=t.createElement("style"),a=t.implementation||{hasFeature:function(){return!1}};r.type="text/css",i.insertBefore(r,i.firstChild),e=r.sheet||r.styleSheet;var s=a.hasFeature("CSS2","")?function(t){if(!e||!t)return!1;var n=!1;try{e.insertRule(t,0),n=/src/i.test(e.cssRules[0].cssText),e.deleteRule(e.cssRules.length-1)}catch(i){}return n}:function(t){return e&&t?(e.cssText=t,0!==e.cssText.length&&/src/i.test(e.cssText)&&0===e.cssText.replace(/\r+|\n+/g,"").indexOf(t.split(" ")[0])):!1};return n=s('@font-face { font-family: "font"; src: url(data:,); }'),i.removeChild(r),n},k.video=function(){var e=t.createElement("video"),n=!!e.canPlayType;if(n){n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"');var i='video/mp4; codecs="avc1.42E01E';n.h264=e.canPlayType(i+'"')||e.canPlayType(i+', mp4a.40.2"'),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}return n},k.audio=function(){var e=t.createElement("audio"),n=!!e.canPlayType;return n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"'),n.mp3=e.canPlayType("audio/mpeg;"),n.wav=e.canPlayType('audio/wav; codecs="1"'),n.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")),n},k.localstorage=function(){try{return!!localStorage.getItem}catch(e){return!1}},k.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(e){return!1}},k.webWorkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(D.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==D.svg},k.smil=function(){return!!t.createElementNS&&/SVG/.test(C.call(t.createElementNS(D.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(C.call(t.createElementNS(D.svg,"clipPath")))};for(var H in k)d(k,H)&&(c=H.toLowerCase(),f[c]=k[H](),N.push((f[c]?"":"no-")+c));return f.input||i(),f.crosswindowmessaging=f.postmessage,f.historymanagement=f.history,f.addTest=function(e,t){return e=e.toLowerCase(),f[e]?void 0:(t=!!t(),m.className+=" "+(t?"":"no-")+e,f[e]=t,f)},l(""),F=b=null,p&&e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function n(e,t){for(var i,r=-1,a=e.length,s=[];++r<a;)i=e[r],"screen"!=(t=i.media||t)&&s.push(n(i.imports,t),i.cssText);return s.join("")}function i(e){for(var t=-1;++t<o;)e.createElement(s[t])}var r,a="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",s=a.split("|"),o=s.length,u=new RegExp("(^|\\s)("+a+")","gi"),l=new RegExp("<(/*)("+a+")","gi"),c=new RegExp("(^|[^\\n]*?\\s)("+a+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),d=t.createDocumentFragment(),h=t.documentElement,f=h.firstChild,p=t.createElement("body"),m=t.createElement("style");i(t),i(d),f.insertBefore(m,f.firstChild),m.media="print",e.attachEvent("onbeforeprint",function(){var e,i=-1,a=n(t.styleSheets,"all"),f=[];for(r=r||t.body;null!=(e=c.exec(a));)f.push((e[1]+e[2]+e[3]).replace(u,"$1.iepp_$2")+e[4]);for(m.styleSheet.cssText=f.join("\n");++i<o;)for(var g=t.getElementsByTagName(s[i]),v=g.length,F=-1;++F<v;)g[F].className.indexOf("iepp_")<0&&(g[F].className+=" iepp_"+s[i]);d.appendChild(r),h.appendChild(p),p.className=r.className,p.innerHTML=r.innerHTML.replace(l,"<$1font")}),e.attachEvent("onafterprint",function(){p.innerHTML="",h.removeChild(p),h.appendChild(r),m.styleSheet.cssText=""})}(e,t),f._enableHTML5=p,f._version=h,m.className=m.className.replace(/\bno-js\b/,"")+" js "+N.join(" "),f}(this,this.document);