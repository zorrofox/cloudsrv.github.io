var TINGYUN=function(t,e,n){if(/(MSIE [0-7].\d+)/.test(navigator.userAgent)){return {TY_INFO: 'Browser Version Not Support to load TINGYUN Agent'};}function r(t){return JSON.parse(t)}function i(t){return JSON.stringify(t)}function a(t){var e=!!t&&"length"in t&&t.length,n=typeof t;return"function"!==n&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function o(t,e,n){var r,i=0;if(t)if(a(t))for(r=t.length;i<r&&e.call(t[i],t[i],i)!==!1;i++);else for(i in t)if((n||Object.prototype.hasOwnProperty.call(t,i))&&e.call(t[i],t[i],i)===!1)break;return t}function u(t){return function(e){return"Array"===t&&Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object "+t+"]"}}function s(t){return new Function("return "+t)()}function c(t){switch(typeof t){case"object":if(!t)return null;if(t instanceof Array){var e=pe.call(t);return o(e,function(t,n){e[n]=c(t)}),"["+e.join(",")+"]"}if(t instanceof Date)return t.getTime().toString();var n="";return o(t,function(t,e){ce(t)||(n+=c(e)+":"+c(t)+",")}),n&&(n=n.substr(0,n.length-1)),"{"+n+"}";case"string":return ge+t.replace(me,"\\$1").replace(ye,"\\n")+ge;case"number":return isNaN(t)?null:t;case"boolean":return t;case"function":return c(t.toString());case"undefined":default:return'"undefined"'}}function f(t){return t&&ue(t)?ae(t):t}function l(t,e,n,r){return t.addEventListener(e,n,r)}function d(t,e,n){return t.removeEventListener(e,n)}function h(t,e,n){return t.attachEvent("on"+e,n)}function v(t,e,n){return t.detachEvent("on"+e,n)}function p(t,e,n,r){var i=function(){return _e(t,e,i),n.apply(this,arguments)};return xe(t,e,i,r)}function g(t,e){return Function.prototype.apply.apply(t,e)}function m(t,e){return function(){t.apply(e,arguments)}}function y(t){return Se?Se(t):t}function b(t){var e=arguments.length;if(e<2||!t)return t;var n=pe.call(arguments,1);return o(n,function(e){o(e,function(e,n){t[n]=e})}),t}function x(t,e){for(var n=-1,r=0,i=null==t?0:t.length,a=[];++n<i;){var o=t[n];e(o,n,t)&&(a[r++]=o)}return a}function _(t,e){return t?e?t.replace(/\{(\w+.?\w+)\}/g,function(t,n){return e[n]||""}).replace(/\{(\d+)\}/g,function(t,n){return e[n]||""}):t:""}function S(t,e,n){var r;if(null==t)return-1;var i=Object(t),a=i.length>>>0;if(0===a)return-1;var o=+n||0;if(Math.abs(o)===1/0&&(o=0),o>=a)return-1;for(r=Math.max(o>=0?o:a-Math.abs(o),0);r<a;){if(r in i&&i[r]===e)return r;r++}return-1}function E(t,e){var n=null==t?0:t.length;if(!n)return-1;for(var r=n;r--;)if(t[r]===e)return r;return r}function w(t){return setTimeout(t,0)}function T(){}function k(){return+new Date}function C(t){return function(){if(null!==t){var e=t;t=null,e.apply(this,arguments)}}}function R(t){return t?ue(t)?t.length:e.ArrayBuffer&&t instanceof ArrayBuffer?t.byteLength:e.Blob&&t instanceof Blob?t.size:t.length?t.length:0:0}function q(t){return we!==Te&&/^https/i.test(t&&t.protocol||we)?"https:":Te}function O(t,e,n,r){var i=null;return t&&e&&(i=q(r)+"//"+t+e,n&&(i+="?",o(n,function(t,e){var n=[y(e),"=",y(t),"&"];i+=n.join("")}),i+="__r="+k())),i}function I(){this.events={}}function N(t){return!(t in Ie)||Ie[t]}function H(t){var e=Re.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?e[3]:null}function L(t,e,n,r){var i=t+"="+e;if(n){var a=new Date;a.setTime(a.getTime()+1e3*n),i+=";expires="+a.toGMTString()}r&&(i+=";path="+r),Re.cookie=i}function j(t,e,n){n=n||T;var r=new Image;xe(r,Je,function(){"loaded"!=r.readyState&&4!=r.readyState||n(null)},!1),xe(r,Xe,function(){n(null)},!1),xe(r,Ue,function(){n(Ue)},!1),r.src=t}function A(t,e,n,r){ce(n)&&(r=n);var i=new XDomainRequest;i.open(hn,t),i.onload=function(){r(null,i.responseText)},i.onerror=function(t){r(t)},i.send(oe(e))}function M(t,e,n){var r=Re.createElement(t);try{for(var i in e)r[i]=e[i]}catch(a){var o="<"+t;for(var i in e)o+=" "+i+'="'+e[i]+'"';o+=">",n||(o+="</"+t+">"),r=Re.createElement(o)}return r}function B(t,e,n,r){ce(n)&&(r=n);var i=M("div",{style:dn}),a=M("iframe",{name:"ty_form",width:0,height:0,style:dn}),o=M("form",{style:dn,action:t,enctype:"application/x-www-form-urlencoded",method:"post",target:"ty_form"}),u=M("input",{name:"data",type:"hidden"},!0);u.value=oe(e),o.appendChild(u),i.appendChild(a),i.appendChild(o),Re.body.appendChild(i),o.submit(),a.onreadystatechange=function(){a.readyState!==$e&&4!==a.readyState||(r(null,a.innerHTML),Re.body.removeChild(i))}}function D(t,e,n,r){ce(n)&&(r=n,n=null);var i=C(r),a=new qe;a[rn]=!0,a.overrideMimeType&&a.overrideMimeType("text/html"),a.onreadystatechange=function(){4==a.readyState&&200==a.status&&i(null,a.responseText)},a.onerror=i,e=oe(e);try{a.open(hn,t,!0)}catch(o){return B(t,e,i)}for(var u in n)a.setRequestHeader(u,n[u]);a.send(e)}function z(t,e,n){if(t&&n&&ce(n)){var r=t[e];if(!r||!r._wrapped){var i=n(r);return i&&(i._wrapped=!0),t[e]=i,i}}}function P(t){pn&&t()}function F(t){return function(){pn&&t.apply(this,arguments)}}function U(){pn=!1}function X(){_n.on(Xe,C(function(){t();var e=k();P(function(){gn.load=e}),Tn.loadEventEnd=e})),o([Xe,Ge,Ye,We],function(t){xe(e,t,function(e){P(function(){(gn.e[t]||(gn.e[t]=[])).push(k())}),_n.emit(t,e)})});var t=C(function(){var t=k();P(function(){gn.end=t}),Tn.domContentLoadedEventStart=t,Re.querySelectorAll&&(yn.resources=yn.resources||[],o(Re.querySelectorAll("head>link,head>script"),function(t){var e;"LINK"==t.tagName?e=t.href:"SCRIPT"!=t.tagName||t.defer||t.async||(e=t.src),e&&yn.resources.push(e)}))});xe(Re,"DOMContentLoaded",t),xe(Re,Je,function(e){Re.readyState===$e&&t()});var n=C(function(){Tn.touch=k()});o(["scroll","click","keypress"],function(t){p(Re,t,n)});var r=e.requestAnimationFrame;!r||r.toString().indexOf("[native code]")<0||z(e,"requestAnimationFrame",function(t){return function(){if(!Tn.firstPaint){var n=k();P(function(){gn.an.count++,gn.an.t=n}),Tn.firstPaint=n,e.requestAnimationFrame=t}return t.apply(this,arguments)}})}function G(t){W(t,Sn)}function Y(t){W(t,En)}function W(t,e){var n="ok";return t?void e.push(t):n=e.length?e.join("\n"):n}function J(){var t=this;t.xhrs={},t.errs=[],I.call(t)}function $(){var t=ze(Qe);return t?t:Pe(Qe,ke(),Ze)}function K(){var t=H(Ve);return t||(t=ke(),L(Ve,t,null,"/")),t}function Q(t){function e(t,e,r){var i=r||"log",a=n[t]||(n[t]={});a[i]=a[i]||"",a[i]+=e}var n={},r=G();if(e("Status",r,"ok"!==r),e("Debug",Y()),o(On,function(t,n){e("Timeline",n+": "+t.toString())}),!t&&In)console.log("[TingYun Agent Diagnosis]\n"),o(n,function(t,e){var n=console[e];o(n,function(t,e){console[e](t)})});else{if(t!==nn)return oe(n);je.href=je.href+"#"+oe(n)}}function V(t,e){this.flags=0,ce(t.create)&&(this.create=t.create,this.flags|=Nn),ce(t.before)&&(this.before=t.before,this.flags|=Hn),ce(t.after)&&(this.after=t.after,this.flags|=Ln),ce(t.error)&&(this.error=t.error,this.flags|=jn),this.data=e}function Z(t,e){if(!Mn){if(!fe(t)||!t)throw new TypeError("callbacks arguments must be an object");return Mn=new V(t,e)}}function tt(t){var e=Mn.data;if(0!==(Mn.flags&Nn)){var n=Mn.create(Mn.data);void 0!==n&&(e=n)}return function r(){0!==(Mn.flags&Hn)&&Mn.before(this,e);var n=r;n._&&(n._=1);try{var i=t.apply(this,arguments)}catch(a){throw 0!==(Mn.flags&jn)&&Mn.error(e,a),a}return 0!==(Mn.flags&Ln)&&Mn.after(this,e),i}}function et(t){return!Mn||Mn.flags<=0?t:tt(t)}function nt(){function t(t){return function(e){var n=pe.call(arguments,0);ce(e)&&(n[0]=et(e));var r=this;try{return t.apply(r,n)}catch(i){}return g(t,[r,n])}}z(e,"setTimeout",t),z(e,"setInterval",t)}function rt(){this.id=null,this.active=null,this._set=[]}function it(){nt();var t=new rt;return t.id=Z({create:function(){return t.active},before:function(e,n){n&&t.enter(n)},after:function(e,n){n&&t.exit(n)},error:function(e,n){if(e){try{var r="moduleId";n[r]=e[r]}catch(i){}t.exit(e)}}}),t}function at(){return Dn||(Bn=it(),Dn=!0),Bn}function ot(t){In&&console.warn(t||"Event key required!")}function ut(t){t=t||{},this.key=t.key;var e=t.timeout||6e5;this.i=e?setTimeout(m(this.fail,this),e):null,this.status=1,this.remain=0,this.xhrs=[],this.s=k(),this.e=null,this.called=this.sent=!1}function st(t){t=t||{};var e=t.key;if(!e)return new ot;if(Fn[e])return new ot("event "+e+" is executing");Fn[e]=!0;var n=Bn.createContext();Bn.enter(n);var r=new ut(t);return Bn.set("event",r),r._end=function(){var t=this;!t.sent&&0===t.remain&&t.called&&t.finish().send(n)},r.end=function(t){var e=this;return e.called?void(In&&console.warn("Event "+this.key+"has ended or failed!")):(e.called=!0,Bn.exit(n),e.status=arguments.length?t:1,void e._end())},r.finish=function(t){var e=this;return e.e=k(),e.i&&clearTimeout(e.i),delete Fn[e.key],e},r.fail=function(){this.end(0)},r}function ct(t){this.limit=t,this.reset()}function ft(t,e,n,r){return String(t)+String(e)+String(n)+String(r)}function lt(t,e,n,r,i,a,o,u,s){var c=this;c.id=t,c.time=k(),c.msg=e,c.lineno=r,c.colno=i,c.filename=n,c.count=1,c.stack=a&&a.stack||"",c.module=o,c.trigger=u,c.customObj=s,c.fix();var f=Kn[t];c.ep=f?0:1,Kn[t]=!0}function dt(t){if(bn.pf){var e=function(t){var e=[];return o(t,function(t){e.push(t.toObject())}),e}($n.c);if(!e||!e.length)return null;var r={fu:Jn?Jn:Jn++,os:parseInt((k()-(yn.pfStart||n))/1e3)};mn.ulabel&&(r.ulabel=mn.ulabel),Tn.emit("send","/err1",r,{datas:e},m($n.reset,$n))}}function ht(t,e,n,r,i,a,u){if(e||!He){var s=!1;if(o(Oe.domains,function(t){if(s=t.test(e))return!1}),!s){var c=i&&i.moduleId,f=ft(t,n,r,c),l=$n.get(f);l?l.increase():(l=new lt(f,t,e,n,r,i,c,a,u),$n.add(f,l),Tn.errs&&Tn.errs.push(l))}}}function vt(){var t=e.onerror;e.onerror=function(e,n,r,i,a){if(ht(e,n,r,i,a,Yn),ce(t))return t.apply(this,arguments)},e.onerror._ty=!0}function pt(){var t=e.onerror;t&&t._ty||vt()}function gt(t,e){if(t){var n=t.message||"",r=t.stack,i="",a=0,u=0;if(r){var s=r.split(/\n/);o(s,function(t,e){if(t&&(t=t.trim()),t&&0===t.indexOf("at ")){var n=t.indexOf("("),r=t.indexOf(")");if(n&&r){var o=n+1;o>r&&(o=r);var s=t.substring(o,r);if(s){var c=s.split(":");c&&c.length>2&&(i=(c.slice(0,c.length-2)||[]).join(":"),a=+c[c.length-2],u=+c[c.length-1])}}}if(i&&le(a)&&a>0&&le(u)&&u>0)return!1})}ht(n,i,a,u,{stack:r},Gn,e)}}function mt(){var t=Ee();return t?vt():xe(e,Ue,function(t){var n,r,i,a,o;(t instanceof e.Event||e.ErrorEvent&&t instanceof e.ErrorEvent)&&(n=t.message||t.error&&(t.error.message||t.error.constructor.name)||"",r=t.lineno||0,i=t.colno||0,a=t.filename||t.error&&t.error.filename||t.target&&t.target.baseURI||"",a==Re.URL&&(a="#"),o=t.error),ht(n,a,r,i,o,Yn)}),_n.on([Xe,Ge,Ye,We],function(t){dt()}).on(Xe,function(){t&&w(pt)}),setInterval(dt,Wn)}function yt(t,e){var n;if(fe(t))n=t;else{if(!ue(t)||void 0===e)throw new Ce(qn);n={},n[t]=e}return o(n,function(t,e){e in Qn?mn[Qn[e]]=t:mn[e]=t}),this}function bt(t){if(t){var e=mn.firstScreenResources=mn.firstScreenResources||[];se(t)||(t=[t]),o(t,function(t){if(ue(t))e.push(t);else if(Cn(t)){var n=t.src||t.href;n&&e.push(n)}})}}function xt(t){se(t)||(t=[t]),o(t,function(t){if(t){if(!(t instanceof RegExp))throw new Ce("parameter's type requires RegExp");(Oe.domains||(Oe.domains=[])).push(t)}})}function _t(){if(Object.defineProperty){var t=e[tn];Object.defineProperty(e,tn,{get:function(){return Zn++>0&&e.console&&console.warn("window.%s is deprecated, use window.%s instead.",tn,en),t}})}}function St(t){try{return f(t)}catch(e){G(e&&e.message)}return null}function Et(){return Tn[ir]||Tn._end}function wt(){return Tn.loadEventEnd||Tn._end}function Tt(t){function r(e){return t[e]>0?t[e]-a:0}var i={},a=n;if(t){P(function(){var e=gn.t={};o(t,function(t,n){ce(t)||(e[n]=t)},!0)}),a=t.navigationStart,i={f:r(tr),qs:r(er),rs:r(nr),re:r(rr),os:r(ir),oe:r(ar),oi:r(or),oc:r(ur),ls:r(sr),le:r(cr),tus:r(fr),tue:r(lr)};var u=r(dr),s=r(hr),c=r(vr),f=r(pr),l=r(gr),d=r(mr);if(d-l>0&&(i.cs=l,i.ce=d),s-u>0&&(i.ds=u,i.de=s),(f-c>0||f>0)&&(i.es=c,i.ee=f),0==i.le){var h=wt();i.ue=h-a}Tn._le=i.ue||i.le;var v,p;if(t.msFirstPaint)v=t.msFirstPaint,P(function(){gn.fp="m_"+v});else if((p=e.chrome)&&p.loadTimes){var g=p.loadTimes();g&&g.firstPaintTime&&(v=1e3*g.firstPaintTime),P(function(){gn.fp="c_"+g.firstPaintTime})}else Tn.firstPaint&&(v=Tn.firstPaint,P(function(){gn.fp=v}));v&&(i.fp=Math.round(v-a),Tn.fp=i.fp),t[yr]&&(i.sl=r(yr))}else i={t:a,os:Et()-a,ls:wt()-a};return i.je=Tn.errs&&Tn.errs.length||0,Tn.ct&&(i.ct=Tn.ct-a),Tn.touch&&(i.fi=Tn.touch-a),i}function kt(t,e){var r={tr:!1,tt:y(Re.title),charset:Re.characterSet};mn.resources&&b(r,mn.resources),P(function(){r.debug=gn}),U();var i=Tn.errs;o(i,function(t,r){var a=t.toObject();a.o=a.o-e&&e.navigationStart||n,i[r]=a}),r.err=i;var a,u="getEntriesByType";return t[u]?a=t[u]("resource"):Y(_(Rn,[u])),a&&(r.tr=!0,r.res=[],o(a,function(t){function e(e){var n=t[e];return n>0?n:0}var n=t.initiatorType,i=t.name,a={o:e("startTime"),rt:n,n:i,f:e(tr),ds:e(dr),de:e(hr),cs:e(gr),ce:e(mr),sl:e(yr),qs:e(er),rs:e(nr),re:e(rr),ts:t.transferSize||0,es:t.encodedBodySize||0};if("xmlhttprequest"===n){var o=Ct(i);o&&(a.aid=o.s_id,a.atd=o.t_id,a.an=o.s_name,a.aq=o.s_qu,a.as=o.s_du)}r.res.push(a)})),r}function Ct(t){var e;return o(Tn.xhrs,function(n,r){if(r&&t.indexOf(r)>-1)return e=n,!1}),e}function Rt(t){var e={};return t&&(e.id=t.id,e.a=t.a,e.q=t.q,e.tid=t.tid,e.n=t.n),e}function qt(t){if(!t.agent){var n=e._ty_rum;if(n&&n.agent)t.agent=n.agent;else{var r="TINGYUN_DATA",i=H(r);if(i){try{t.agent=St(decodeURIComponent(i))}catch(a){G(a&&a.message)}L(r,"",-1e3)}}}return t.agent}function Ot(t){var e=0,n=t.timing;return n?t.getEntriesByName&&(e=n.domLoading,o(yn.resources,function(r){var i=t.getEntriesByName(r);if(1==i.length){var a=i[0].responseEnd+n.navigationStart;a>e&&(e=a)}}),e-=n.navigationStart):Y("fp=0"),P(function(){gn._fp=e}),Math.round(e)}function It(t,n,r,i){var a=r||0,u=mn.firstScreenResources;if(u&&u.length&&t.getEntriesByName)return o(u,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;i>a&&(a=i)}}),i.fs_s=1,Math.round(a);var s=Re.createElement("img");if(!s.getBoundingClientRect)return P(function(){gn.fs=a}),a;if(t.getEntriesByName){var c=e.innerHeight,f=e.innerWidth,l=[];o(Re.querySelectorAll("img"),function(t){t.src&&Nt(Ht(t),c,f)&&!Lt(t)&&l.push(t.src)});var d=(n.loadEventEnd||Tn.loadEventEnd)-n.navigationStart;o(l,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;r.fetchStart<=d&&i>a&&(a=i)}})}return Math.round(a)}function Nt(t,n,r){if(t){var i=e.pageYOffset,a=t.top+(0===i?0:i||Re.scrollTop||0)-(Re.clientTop||0);if(a>=n)return!1;var o=t.left;return o>=0&&o<r}return!1}function Ht(t){return ce(t.getBoundingClientRect)?t.getBoundingClientRect():void 0}function Lt(t){return De.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:jt(t)}function jt(t){for(;t&&1===t.nodeType;){if("none"===At(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function At(t){return t.style&&t.style.display}function Mt(t){var e=n,r=0;return t&&(e=t.navigationStart||e,r=t[ir]||t.domInteractive||t.domLoading||r),r=Tn[ir]||r||Tn._end,r-e}function Bt(t){if(t){var e=t.fetchStart;if(e)return e-t.navigationStart}}function Dt(){var t={},n=0,r=e.performance;return r&&r.getEntriesByType&&o(r.getEntriesByType("mark")||[],function(e){if(e&&e.name&&e.startTime&&0===e.name.indexOf(on)){var r=e.name.substring(on.length);r&&(t[r]=Math.round(e.startTime),n+=1)}}),n>0?t:null}function zt(t,e,n){return n===cn&&t&&t.getResponseHeader?t.getResponseHeader(e):n===fn&&t.headers?t.headers.get(e):null}function Pt(t,e,n){var r=St(zt(t,sn,n||cn));return r&&r.r&&toString(r.r)===toString(e.r)?r:null}function Ft(t,e){t.s_id=e.id,t.s_name=e.action,e.time&&(t.s_du=e.time.duration,t.s_qu=e.time.qu),t.t_id=e.trId}function Ut(t){var e=!1;return o(xn.xhrs,function(n){if(n.id===t.id)return e=!0,!1}),e}function Xt(t){return function e(n,r){var i=this,a=e;if(a._&&(a._=1),!i[rn]){var o=i[tn]={};o.method=n,o.url=r,o.id=xn.uniqueId++;var u=Bn.get("event");u&&(o.key=u.key,u.remain++)}try{return t.apply(i,arguments)}catch(s){}return g(t,[i,arguments])}}function Gt(t){return function e(n,r){var i=this,a=e;if(a._&&(a._=1),!i[rn]){var o=i[tn];o&&n&&"ty_rum_path"===n&&(o.ty_rum_path=r)}try{return t.apply(i,arguments)}catch(u){}return g(t,[i,arguments])}}function Yt(t){return function e(n){var r=this,i=e;if(i._&&(i._=1),!r[rn]){var a=r[tn];a&&(a.start=k(),a.reqSize=R(n)),Wt(r),r.setRequestHeader&&Ie.id&&a&&_r(a.url)&&(a.r=k()%1e9,r.setRequestHeader("X-Tingyun-Id",Ie.id+";r="+a.r))}try{return t.apply(r,arguments)}catch(o){}return g(t,[r,arguments])}}function Wt(t){function e(e){return et(function n(){var r=n;r._&&(r._=1),Jt(t);var i;if(ce(e)){var a=t[tn];if(a&&4==t.readyState)var o=k();i=e.apply(this,arguments),a&&4==t.readyState&&(a.cbTime=k()-o,t[tn]=null)}return i})}function n(e){t[tn]&&(t[tn].errorCode=e)}var r=t[Tr];if(r)z(t,Tr,e);else try{xe(t,Je,et(function a(){var e=a;e._&&(e._=1),Jt(t)})),o(wr,function(e,r){xe(t,r,function(){n(e)})})}catch(i){return void w(function(){o(wr,function(e,r){var i="on"+r;t[i]?z(t,i,function(t){if(n(e),ce(t))return t.apply(this,arguments)}):t[i]=function(){n(e)}}),z(t,Tr,e)})}w(function(){z(t,Tr,e)})}function Jt(t){var e=t[tn];if(e&&(e.end=k(),e.readyState=t.readyState,4==t.readyState)){e.status=t.status,e.resSize=$t(t);var n=Bn.get("event");w(function(){if(!Ut(e)){var r=Kt(e,t);n&&n.key==e.key&&(n.xhrs.push(r),0===--n.remain&&n._end()),Tn.xhrs&&(Er(e),Tn.xhrs[e.url]=r),xn.xhrs.push(r)}})}}function $t(t){var e=0;if(""==t.responseType||"text"==t.responseType)e=R(t.responseText);else if(t.response)e=R(t.response);else try{e=R(t.responseText)}catch(n){}return e}function Kt(t,e){if(t){var n=t.status,r={id:t.id,req:t.method+" "+t.url,start:t.start,du:n>0?t.end-t.start:0,cb:t.cbTime||0,status:n,err:t.errorCode?t.errorCode:0,rec:t.resSize,send:t.reqSize,type:cn};if(t.ty_rum_path&&(r.csheader=t.ty_rum_path),t.r){var i=Pt(e,t);i&&Ft(r,i)}return r}}function Qt(){var t=qe&&qe.prototype;t?(z(t,"open",Xt),z(t,"setRequestHeader",Gt),z(t,"send",Yt)):qe&&(e.XMLHttpRequest=function(){var t=new qe;return z(t,"open",Xt),z(t,"send",Yt),z(t,"setRequestHeader",Gt),t})}function Vt(t,e){if(Ie.id&&t&&_r(t.url)){t.r=k()%1e9;var n=Ie.id+";r="+t.r;if(e){var r=e.headers;he(r)?(e.headers||(e.headers=new Headers),e.headers.append(un,n)):fe(r)?e.headers[un]=n:r||(e.headers={},e.headers[un]=n)}else e={headers:{}},e.headers[un]=n}return e}function Zt(t,e){if(t){var n={id:t.id,req:(t.method||"GET")+" "+t.url,start:t.start,du:t.status>0?t.end-t.start:0,cb:0,status:t.status,err:0,rec:0,send:0,type:fn};if(t.ty_rum_path&&(n.csheader=t.ty_rum_path),t.r){var r=Pt(e,t,fn);r&&Ft(n,r)}return n}}function te(t){return function e(){var n=e;n._&&(n._=1);var r=this,i=pe.call(arguments,0);return new Promise(function(e,n){var a,o,u="GET",s=1;if(i)if(i.length>1)a=i[0],o=i[1],s=1,o&&fe(o)&&(u=o.method);else if(1===i.length){var c=i[0];ue(c)?a=c:c&&(fe(c)||ve(c))&&(o=c,s=0,a=c.url,u=c.method)}var f={id:xn.uniqueId++,method:u,url:a},l=Vt(f,o);if(l&&(i[s]=l,l.headers)){var d;he(l.headers)?d=l.headers.get(ln):fe(l.headers)&&(d=l.headers[ln]),d&&(f[ln]=d)}var h=Bn.get("event");h&&(f.key=h.key,h.remain++),f.start=k();var v;try{v=t.apply(r,i)}catch(p){return void n(p)}v.then(et(function g(t){var n=g;if(n._&&(n._=1),f.end=k(),t){f.status=t.status;var r=Bn.get("event");w(function(){if(!Ut(f)){var e=Zt(f,t);r&&r.key==f.key&&(r.xhrs.push(e),0===--r.remain&&r._end()),Tn.xhrs&&(Er(f),Tn.xhrs[f.url]=e),xn.xhrs.push(e)}})}e(t)}),function(t){n(t)})})}}function ee(){e.fetch&&z(e,"fetch",te)}function ne(){return setInterval(function(){if(bn.pf&&xn.xhrs&&xn.xhrs.length){var t=[];if(o(xn.xhrs,function(e){t.push(e)}),t=x(t,function(t){return(Cr.indexOf?Cr.indexOf(t):S(Cr,t))<0}),t&&t.length){Cr=t;var e=null;mn.ulabel&&(e={ulabel:mn.ulabel}),Tn.emit("send","/xhr1",e,{xhr:t},function(){xn.xhrs=x(xn.xhrs,function(e){return(t.indexOf?t.indexOf(e):S(t,e))<0})}),Ee()&&!window.XDomainRequest&&(xn.xhrs=[])}}},kr)}function re(){return Qt(),ee(),ne()}function ie(){return Tn.start()&&(xr(),re(),mt()),Tn._end=k(),P(function(){gn._end=Tn._end}),_t(),Vn}var ae,oe,ue=u("String"),se=u("Array"),ce=u("Function"),fe=u("Object"),le=u("Number"),de=u("Undefined"),he=u("Headers"),ve=u("Request"),pe=[].slice,ge='"',me=/([\"\\])/g,ye=/\n/g,be=e.JSON;be&&be.parse&&be.stringify?(ae=r,oe=i):(ae=s,oe=c);var xe,_e;e.addEventListener?(xe=l,_e=d):(xe=h,_e=v);var Se=e.encodeURIComponent,Ee=function(){return!document.addEventListener},we=e.location.protocol,Te="http:",ke=function(){function t(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN}function e(t,e){for(var n=t.toString(16),r=e-n.length,i="0";r>0;r>>>=1,i+=i)1&r&&(n=i+n);return n}return function(){return e(t(32),8)+"-"+e(t(16),4)+"-"+e(16384|t(12),4)+"-"+e(32768|t(14),4)+"-"+e(t(48),12)}}();I.prototype={on:function(t,e){var n=this;return ue(t)?(n.events[t]||(n.events[t]=[])).push(e):se(t)&&o(t,function(t){n.on(t,e)}),n},off:function(t,e){var n=arguments.length,r=this;if(0===n)return r.events={},r;var i=r.events[t];if(!i)return r;if(1===n)return r.events[t]=null,r;for(var a,o=i.length;o--;)if(a=i[o],a===e){i.splice(o,1);break}return r},emit:function(t){var e=[].slice.call(arguments,1),n=this.events[t];return n&&o(n,function(t){return t.apply(this,e)}),this},unshift:function(t,e){var n=this;return(n.events[t]||(n.events[t]=[])).unshift(e),n}};var Ce=e.Error,Re=e.document,qe=e.XMLHttpRequest,Oe={};t(Oe);var Ie=Oe.server||{},Ne={fp_threshold:2e3,fs_threshold:4e3,dr_threshold:4e3};Ie=b(Ne,Ie);var He=N("ignore_err"),Le=N("debug"),je=e.location,Ae=e.navigator,Me=e.HTMLElement,Be=function(){try{var t=ke();return e.localStorage.setItem(t,t),e.localStorage.removeItem(t),!0}catch(n){return!1}}(),De={};De.localStorage=Be,function(){function t(){var t,f,l=Re.documentElement;l.appendChild(s),c.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=u=!1,r=o=!0,e.getComputedStyle&&(f=e.getComputedStyle(c),n="1%"!==(f||{}).top,u="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,c.style.marginRight="50%",r="4px"===(f||{marginRight:"4px"}).marginRight,t=c.appendChild(Re.createElement("div")),t.style.cssText=c.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",c.style.width="1px",o=!parseFloat((e.getComputedStyle(t)||{}).marginRight),c.removeChild(t)),c.style.display="none",a=0===c.getClientRects().length,a&&(c.style.display="",c.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=c.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",a=0===t[0].offsetHeight,a&&(t[0].style.display="",t[1].style.display="none",a=0===t[0].offsetHeight)),l.removeChild(s)}var n,r,i,a,o,u,s=(Re.documentElement,Re.createElement("div")),c=Re.createElement("div");c.style&&(c.style.cssText="float:left;opacity:.5",De.opacity="0.5"===c.style.opacity,De.cssFloat=!!c.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",De.clearCloneStyle="content-box"===c.style.backgroundClip,s=Re.createElement("div"),s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",c.innerHTML="",s.appendChild(c),De.boxSizing=""===c.style.boxSizing||""===c.style.MozBoxSizing||""===c.style.WebkitBoxSizing,De.reliableHiddenOffsets=function(){return null==n&&t(),a})}();var ze,Pe;De.localStorage?(ze=function(t){return e.localStorage.getItem(t)},Pe=function(t,n){return e.localStorage.setItem(t,n),n}):(ze=H,Pe=L);var Fe,Ue="error",Xe="load",Ge="unload",Ye="beforeunload",We="pagehide",Je="readystatechange",$e="complete",Ke="on",Qe="TY_DISTINCT_ID",Ve="TY_SESSION_ID",Ze=86400,tn="_ty_rum",en="TINGYUN",nn=2,rn="__ign",an="__ty_aysncWrap__",on="ty_",un="X-Tingyun-Id",sn="X-Tingyun-Tx-Data",cn="XHR",fn="FETCH",ln="ty_rum_path",dn="display:none",hn="POST",vn=j;e.XDomainRequest?Fe=A:Ee()?Fe=B:Ae.sendBeacon?vn=Fe=function(t,e,n,r){ce(n)&&(r=n,n=null);var i=Ae.sendBeacon(t,oe(e));i&&r&&r()}:Fe=D;var pn=Le,gn={start:n,e:{},an:{count:0},visible:[]},mn={},yn={},bn={pf:!1},xn={uniqueId:0,xhrs:[]};!function(){if(Le){var t,e,n="visibilitychange";de(Re.hidden)?de(Re.msHidden)?de(Re.webkitHidden)||(t="webkitHidden",e="webkit"+n):(t="msHidden",e="ms"+n):(t="hidden",e=n),de(Re.addEventListener)||de(Re[t])||xe(Re,e,F(function(){gn.visible.push([Re[t],k()])}))}}();var _n=new I,Sn=[],En=[],wn=J.prototype;wn.start=function(){if(!Ie.key)return G("missing config, agent disabled!"),!1;var t=e[tn]||e[en];return t&&t.server?(G("already loaded!"),!1):(X(),this)},b(wn,I.prototype);var Tn=new J;Tn.on("send",function(t,e,n,r){var i=O(Ie.beacon,t,b({},kn,e||{}));switch(r=r||T,t){case"/pf":n?Fe(i,n,function(){Tn.xhrs=Tn.errs=null,r()}):vn(i,void 0,r);break;default:Fe(i,n,r)}});var kn={pvid:ke(),ref:Re.URL,referrer:Re.referrer,key:Ie.key,v:"1.8.0",av:"1.8.0",did:$(),sid:K()},Cn=Me?function(t){return t instanceof Me}:function(t){t&&"object"==typeof t&&1===t.nodeType&&ue(t.nodeName)},Rn="{0} not support",qn="illegal argument",On={},In="undefined"!=typeof e.console,Nn=1,Hn=2,Ln=4,jn=8,An=V.prototype;An.create=An.before=An.after=An.error=null;var Mn;rt.prototype={createContext:function(){return Object.create?Object.create(this.active):it(this.active)},get:function(t){if(this.active)return this.active[t]},set:function(t,e){if(this.active)return this.active[t]=e},enter:function(t){if(!t)throw new Ce("context required!");this._set.push(this.active),this.active=t},exit:function(t){if(!t)throw new Ce("context required!");if(t===this.active)return void(this.active=this._set.pop());var e=this._set.lastIndexOf?this._set.lastIndexOf(t):E(this._set,t);if(e<0)throw new Ce("context not currently entered!");this._set.splice(e,1)},bind:function(t,e){e||(e=this.active?this.active:this.createContext());var n=this;return function(){n.enter(e);try{return t.apply(this,arguments)}catch(r){try{var i="moduleId";r[i]=e[i]}catch(a){}throw r}finally{n.exit(e)}}}};var Bn,Dn=!1,Bn=at(),zn=ot.prototype;zn.fail=zn.end=T;var Pn=ut.prototype;Pn.end=Pn.finish=Pn.fail=null,Pn.send=function(t){var e=this;e.sent=!0;var n=t.event&&t.event.xhrs||[];o(n,function(t){t.start=t.start-e.s});var r={key:e.key,duration:e.e-e.s,status:e.status,xhrs:n};Tn.emit("send","/spe",null,r,T)};var Fn={},Un={},Xn=e.screen;Xn&&(Un.sh=Xn.height,Un.sw=Xn.width);var Gn="api",Yn="onerror",Wn=1e4,Jn=0;ct.prototype={add:function(t,e){this.len>this.limit||this.get(t)||(this.c[t]=e,this.len++)},get:function(t){return this.c[t]},reset:function(){this.c={},this.len=0}};var $n=new ct(100),Kn={};lt.prototype={increase:function(){this.count++},fix:function(){var t=this,e=t.stack;if(e&&ue(e)){e=e.split(/\n/);var n=[];o(e,function(t,e){t.indexOf(an)==-1&&n.push(t)}),t.stack=n.join("\n")}},toObject:function(){var t=this;return{o:t.time,e:t.msg,l:t.lineno,c:t.colno,r:t.filename,ec:t.count,s:t.stack,m:t.module,ep:t.ep,tr:t.trigger,co:t.customObj}}};var Qn={host:"cshst",url:"csurl"},Vn={version:"1.8.0",config:yt,DIAGNOSE_HREF:nn,diagnose:Q,createEvent:st,logFirstScreen:bt,addExcludedDomain:xt,setError:gt};e[tn]=e[en]=Vn;var Zn=0,tr="fetchStart",er="requestStart",nr="responseStart",rr="responseEnd",ir="domContentLoadedEventStart",ar="domContentLoadedEventEnd",or="domInteractive",ur="domComplete",sr="loadEventStart",cr="loadEventEnd",fr="unloadEventStart",lr="unloadEventEnd",dr="domainLookupStart",hr="domainLookupEnd",vr="redirectStart",pr="redirectEnd",gr="connectStart",mr="connectEnd",yr="secureConnectionStart",br=qt(Oe);br&&br.ulabel&&(mn.ulabel=br.ulabel);var xr=function(){var t=C(function(){function t(t){return t?"1":"0"}var r=e.performance,i=!!r;i||Y(_(Rn,["pf"]));var a=Rt(br),u=r&&r.timing,s=b(Tt(u),a,mn),c=b({},Un);c.ressize=!!u,Tn.fp?(c.fp=Tn.fp,i&&Tn.fp>Tn._le&&(Y("fp>le"),c.fp=Ot(r),c.__fp=2)):i?(c.fp=Ot(r),c.__fp=1):c.fp=c.__fp=0,c.dr=Mt(u),i?c.fs=It(r,u,c.fp,c):c.__fs=0;var f,l="",d=Dt();if(i){var h="trace",v=Math.max(s.ls,0);v||(v=wt()-u.navigationStart||n),c[h]=v;var p=Bt(u);o(["fp","fs","dr",h],function(e){l+=t((p?c[e]-p:c[e])>=Ie[e+"_threshold"])}),delete c[h],l.indexOf("1")>-1&&(f=kt(r,u)),d&&(f||(f={}),f.mark=d)}c.trflag=l||"0000",yn.pfStart=k(),delete s.firstScreenResources,delete s.resources,d&&o(d,function(t,e){c[e]&&le(c[e])&&le(t)&&t>=0&&(c[e]=t)}),Tn.emit("send","/pf",b(s,c),f,function(){Y("pf sent!"),Tn.xhrs=Tn.errs=null,bn.pf=!0})});return _n.on(Xe,function(){var e=0;if(Ie.pfDelay&&fe(Ie.pfDelay)){var n=Dt();o(Ie.pfDelay,function(t,r){(!n||null==n[r])&&le(t)&&t>e&&(e=t)})}setTimeout(t,e)}).on([Ge,Ye,We],t)},_r=function(){function t(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var e=/(msie|trident)/i.test(Ae.userAgent),n=Re.createElement("a"),r=t(je.href);return function(e){var n=t(e);return n.protocol===r.protocol&&n.host===r.host}}(),Sr=function(t){var e=[];return o(t,function(t){try{e.push(new RegExp(t))}catch(n){G(n&&n.message)}}),e}(Ie.custom_urls),Er=Sr.length?function(t){var e=t.url;!Tn.ct&&e&&o(Sr,function(n){if(e.match(n))return Tn.ct=t.end,!1})}:T,wr={error:990,abort:905,timeout:903},Tr=Ke+Je,kr=2e3,Cr=[],Rr=ie();return Rr}(function(ty_rum){ty_rum.server = {ignore_err : true,beacon:'beacon.tingyun.com',beacon_err:'beacon-err.tingyun.com',key:'ayyUhtNWB1s',trace_threshold:7000,fp_threshold:2000,fs_threshold:4000,dr_threshold:4000,custom_urls:[],sr:1.0};},window,+new Date);