(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a(29)},22:function(t,e,a){},23:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=(a(22),a(6)),o=a(5),u=(a(23),function(t){var e=t.text;return r.a.createElement("div",{className:"tab-content"},e)});u.defaultProps={text:""};var m=u,s=function(t){var e=t.tabs,a=t.currentTabId,n=t.tabsMatch;return r.a.createElement(i.a,null,e.map(function(t,e){return r.a.createElement(i.b,{key:t.title,to:"".concat(n.path,"/tab-").concat(e+1),className:"tab-link",activeClassName:"tab-link-active"},t.title)}),r.a.createElement(o.a,{path:"".concat(n.path,"/:currentTabId?"),render:function(t){var n=t.match;return r.a.createElement(m,{text:n.params.currentTabId?e.find(function(t){return t.id===n.params.currentTabId}).content:e.find(function(t){return t.id===a}).content})}}))};s.defaultProps={tabs:[],currentTabId:"",tabsMatch:{}};var b=s,d=function(){return r.a.createElement("h1",null,"Home page")},f=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(t){var e=t.match;return r.a.createElement(b,{tabs:f,currentTabId:"tab-1",tabsMatch:e})};p.defaultProps={match:{}};var E=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Tabs with router"),r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/",exact:!0,className:"link",activeClassName:"link-active"},"HomePage"),r.a.createElement(i.b,{to:"/tabs",className:"link",activeClassName:"link-active"},"TabsPage")),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,render:d}),r.a.createElement(o.a,{path:"/tabs",exact:!0,render:p})))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.72ad464d.chunk.js.map