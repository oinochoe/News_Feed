(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{36:function(e,n,t){e.exports=t(64)},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(28),o=t.n(c),i=t(7),l=t(5),u=t(6);function m(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n  padding: 1rem;\n  box-sizing:border-box;\n  background:#00B8E1;\n  color:#fff;\n"]);return m=function(){return e},e}var s=u.a.div(m()),d=function(){return r.a.createElement(s,null,"Today News")},p=t(11);function b(){var e=Object(l.a)(["\n    font-size: 1rem;\n    cursor: pointer;\n    white-space: pre;\n    text-decoration: none;\n    color: inherit;\n    padding: 1rem;\n    box-sizing: border-box;\n\n    &:hover {\n        color: #495057;\n    }\n\n    &.active {\n        font-weight: 600;\n        border-bottom: 2px solid #22b8cf;\n        color: #22b8cf;\n        &:hover {\n            color: #3bc9db;\n        }\n    }\n"]);return b=function(){return e},e}function f(){var e=Object(l.a)(["\n    display: flex;\n    width: 768px;\n    margin: 0 auto;\n    box-sizing: border-box;\n    @media screen and (max-width: 768px) {\n        width: 100%;\n        overflow-x: auto;\n    }\n"]);return f=function(){return e},e}var h=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],g=u.a.div(f()),v=Object(u.a)(p.b)(b()),x=function(){return r.a.createElement(g,null,h.map((function(e){return r.a.createElement(v,{key:e.name,activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/News_Feed/":"/News_Feed/".concat(e.name)},e.text)})))},w=t(9);function E(){var e=Object(l.a)(["\n    display: flex;\n    @media screen and (max-width: 768px) {\n        width: 100%;\n        display: block;\n    }\n    .thumbnail {\n        margin-right: 1rem;\n        img {\n            display: block;\n            width: 160px;\n            height: 100px;\n            object-fit: cover;\n            @media screen and (max-width: 768px) {\n                width: 100%;\n                margin-bottom: 0.5rem;\n            }\n        }\n    }\n    .contents {\n        h2 {\n            margin: 0;\n            a {\n                color: black;\n            }\n        }\n        p {\n            margin: 0;\n            line-height: 1.5;\n            margin-top: 0.5rem;\n            white-space: normal;\n        }\n    }\n    & + & {\n        margin-top: 2rem;\n    }\n"]);return E=function(){return e},e}var y=u.a.div(E()),j=function(e){var n=e.article,t=n.title,a=n.description,c=n.url,o=n.urlToImage;return r.a.createElement(y,null,o&&r.a.createElement("div",{className:"thumbnail"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o,alt:"thumbnail"}))),r.a.createElement("div",{className:"contents"},r.a.createElement("h2",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},t)),r.a.createElement("p",null,a)))},k=t(33),O=t.n(k),N=t(17),z=t.n(N);function _(){var e=Object(l.a)(["\n    box-sizing: border-box;\n    padding-bottom: 3rem;\n    width: 768px;\n    margin: 0 auto;\n    margin-top: 2rem;\n    @media screen and (max-width: 768px) {\n        width: 100%;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        font-size: 0.8rem;\n        margin-top: 0;\n    }\n"]);return _=function(){return e},e}var F=u.a.div(_()),B=function(e){var n=e.category,t=function(e,n){var t=Object(a.useState)(!1),r=Object(w.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(null),l=Object(w.a)(i,2),u=l[0],m=l[1],s=Object(a.useState)(null),d=Object(w.a)(s,2),p=d[0],b=d[1];return Object(a.useEffect)((function(){!function(){var n;z.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.prev=1,t.next=4,z.a.awrap(e());case 4:n=t.sent,m(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(t.t0);case 11:o(!1);case 12:case"end":return t.stop()}}),null,null,[[1,8]])}()}),n),[c,u,p]}((function(){var e="all"===n?"":"&category=".concat(n);return O.a.post("https://newsapi.org/v2/top-headlines?country=kr".concat(e,"&apiKey=77b22cca25e1454281497e59e5be6992"))}),[n]),c=Object(w.a)(t,3),o=c[0],i=c[1],l=c[2];if(o)return r.a.createElement(F,null,"\ub300\uae30\uc911...");if(!i)return null;if(l)return r.a.createElement(F,null,"\uc5d0\ub7ec \ubc1c\uc0dd!");var u=i.data.articles;return r.a.createElement(F,null,u.map((function(e){return r.a.createElement(j,{key:e.url,article:e})})))},S=function(e){var n=e.match.params.category||"all";return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(x,null),r.a.createElement(B,{category:n}))},I=function(){return r.a.createElement(i.a,{path:"/News_Feed/:category?",component:S})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.922d8e33.chunk.js.map