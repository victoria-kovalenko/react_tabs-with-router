(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(0),l=c(1),d=function(e){var t=e.tabs,c=Object(i.h)().tabId,a=void 0===c?"":c,s=Object(r.useMemo)((function(){return t.find((function(e){return e.id===a}))}),[a,t]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{className:j()({"is-active":a===e.id}),"data-cy":"Tab",children:Object(l.jsx)(n.b,{to:"../".concat(e.id),"data-cy":"TabLink",children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:s?s.content:"Please select a tab"})]})},o=function(e){var t=e.tabs;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(d,{tabs:t})]})},h=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},x=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},O=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{className:function(e){var t=e.isActive;return j()("navbar-item ",{"is-active":t})},to:"/",children:"Home"}),Object(l.jsx)(n.c,{className:function(e){var t=e.isActive;return j()("navbar-item ",{"is-active":t})},to:"/tabs",children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(i.b,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(o,{tabs:O})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(o,{tabs:O})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(x,{})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6e52fe92.chunk.js.map