(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),b=(n(10),n(4)),d=n.n(b),l=n(0),r=function(t){var e=t.tabs,n=t.selectedTab,c=t.handleTabselected;return Object(l.jsx)("ul",{className:"nav nav-tabs mb-3",children:e.map((function(t){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("button",{className:d()({"nav-link":!0,active:t.id===n.id}),type:"button",onClick:function(){return c(t)},children:t.title})},t.id)}))})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(o[0]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(l.jsxs)("div",{className:"App m-3",children:[Object(l.jsxs)("h1",{children:["Selected tab is\xa0",n.title]}),Object(l.jsx)(r,{tabs:o,selectedTab:n,handleTabselected:function(t){t.id!==n.id&&c(t)}}),Object(l.jsx)("div",{"data-cy":"content m-5",children:n.content})]})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f480f842.chunk.js.map