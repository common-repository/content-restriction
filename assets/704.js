"use strict";(self.webpackChunkcontent_restriction=self.webpackChunkcontent_restriction||[]).push([[704],{6704:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var c=n(1609),r=n(4976),a=n(7767),i=n(6207),s=n(261),l=n(7143),o=n(6087),_=n(2609);const m={modalVisible:!1,sidebarVisible:!1,ruleType:"",contentRule:{status:!1,id:"",ruleTitle:"",whoCanSee:{},whatContent:{},restrictView:{},ruleData:{}}},u=(0,l.createReduxStore)("content-restriction-stores",{reducer(e=(()=>m)(),t){let n;switch(t.type){case"SET_WHO_CAN_SEE":n={...e,contentRule:{...e.contentRule,whoCanSee:{...t.whoCanSee}}};break;case"SET_WHAT_CONTENT":n={...e,contentRule:{...e.contentRule,whatContent:{...t.whatContent}}};break;case"SET_RESTRICT_VIEW":n={...e,contentRule:{...e.contentRule,restrictView:{...t.restrictView}}};break;case"SET_RULE":n={...e,contentRule:{...e.contentRule,ruleData:t.rule}};break;case"SET_RULE_STATUS":n={...e,contentRule:{...e.contentRule,status:t.status}};break;case"SET_ID":n={...e,contentRule:{...e.contentRule,id:t.id}};break;case"SET_RULE_TITLE":n={...e,contentRule:{...e.contentRule,ruleTitle:t.ruleTitle}};break;case"SET_RULE_TYPE":n={...e,ruleType:t.ruleType};break;case"SET_MODAL_VISIBLE":n={...e,modalVisible:t.modalVisible};break;case"SET_SIDEBAR_VISIBLE":n={...e,sidebarVisible:t.sidebarVisible};break;default:n=e}return localStorage.setItem("content-restriction-stores",JSON.stringify(n)),n},actions:{setWhoCanSee:e=>({type:"SET_WHO_CAN_SEE",whoCanSee:e}),setWhatContent:e=>({type:"SET_WHAT_CONTENT",whatContent:e}),setRestrictView:e=>({type:"SET_RESTRICT_VIEW",restrictView:e}),setRule:e=>({type:"SET_RULE",rule:e}),setRulePublished:e=>({type:"SET_RULE_STATUS",status:e}),setId:e=>({type:"SET_ID",id:e}),setRuleTitle:e=>({type:"SET_RULE_TITLE",ruleTitle:e}),setRuleType:e=>({type:"SET_RULE_TYPE",ruleType:e}),setModalVisible:e=>({type:"SET_MODAL_VISIBLE",modalVisible:e}),setSidebarVisible:e=>({type:"SET_SIDEBAR_VISIBLE",sidebarVisible:e})},selectors:{getRuleData:e=>e.contentRule.ruleData,getRuleStatus:e=>e.contentRule.status,getId:e=>e.contentRule.id,getRuleTitle:e=>e.contentRule.ruleTitle,getWhoCanSee:e=>e.contentRule.whoCanSee,getWhatContent:e=>e.contentRule.whatContent,getRestrictView:e=>e.contentRule.restrictView,getRule:e=>e.contentRule,getRuleType:e=>e.ruleType,getModal:e=>e.modalVisible,getSidebar:e=>e.sidebarVisible}});(0,l.register)(u);const d=u;var E=n(1848),h=n(7723),g=n(1455),p=n.n(g);async function M(e,t,n){n=n||{},t=t||{};const c=[["X-WP-Nonce",content_restriction_admin.rest_args.nonce]];return await p()({path:e,method:"POST",data:t,headers:c,...n}).then((e=>e)).catch((e=>{throw e}))}const{confirm:N}=E.A;function b(e,t){N({title:(0,h.__)("Are you sure you want to delete this item?","content-restriction"),content:(0,h.__)("This action cannot be undone.","content-restriction"),okText:(0,h.__)("Confirm","content-restriction"),okType:"danger",cancelText:(0,h.__)("Cancel","content-restriction"),onOk(){y(e,t)},onCancel(){}})}const y=(e,t)=>{M(`content-restriction/rules/delete?id=${e}`).then((e=>{t("/rules"),window.location.reload()})).catch((e=>{}))};var w=n(2359);function I(e,t){w.Ay[e]({message:t,placement:"bottomLeft"})}function S({}){const[e,t]=(0,o.useState)({}),[n,m]=(0,o.useState)(""),[u,E]=(0,o.useState)("Untitled Rule"),[g,p]=(0,o.useState)(!1),[N,y]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),v=(0,a.Zp)(),T=(0,l.select)("content-restriction-stores"),j=(0,o.useRef)(null),C=e=>{j.current&&!j.current.contains(e.target)&&S(!1)};(0,o.useEffect)((()=>(document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)})),[]),(0,o.useEffect)((()=>{const e=(0,l.subscribe)((()=>{const e=T.getId(),n=T.getRuleData(),c=T.getRuleTitle(),r=T.getRuleStatus();m(e),E(c||u),t(n),y(r)}));return()=>e()}));const D=(0,o.useRef)(null);(0,o.useEffect)((()=>{const e=e=>{if(g){const t=D.current?.contains(e.target),n=e.target.classList.contains("anticon-edit");t||n||p(!1)}};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[g]);const A=n?()=>function(e,t,n,c){t&&t.hasOwnProperty("who-can-see")&&t.hasOwnProperty("what-content")&&t.hasOwnProperty("restrict-view")?M("content-restriction/rules/update",{id:e,data:{status:c,title:n,rule:t}}).then((e=>{I("success",(0,h.__)("Successfully Updated!","content-restriction"))})).catch((e=>{I("error",(0,h.__)("Rules update error","content-restriction"))})):I("warning",(0,h.__)("Please complete the setup","content-restriction"))}(n,e,u,N):()=>function(e,t,n,c){e&&e.hasOwnProperty("who-can-see")&&e.hasOwnProperty("what-content")&&e.hasOwnProperty("restrict-view")?M("content-restriction/rules/create",{data:{status:n,title:t,rule:e}}).then((e=>{I("success",(0,h.__)("Successfully Created!","content-restriction")),c(`/rule/${e}`)})).catch((e=>{I("error",(0,h.__)("Rules create error","content-restriction"))})):I("warning",(0,h.__)("Please complete the setup","content-restriction"))}(e,u,N,v);return(0,c.createElement)(c.Fragment,null,(0,c.createElement)("div",{className:"content-restriction__header"},(0,c.createElement)("div",{className:"content-restriction__header__action content-restriction__header__action--left"},(0,c.createElement)(r.N_,{to:"/",class:"content-restriction__btn content-restriction__btn--sm content-restriction__btn--back"},(0,c.createElement)(i.A,null),(0,h.__)("Back","content-restriction")),(0,c.createElement)("div",{className:"content-restriction__header__action__input"},g?(0,c.createElement)("input",{type:"text",ref:D,value:u,onChange:e=>(0,l.dispatch)(d).setRuleTitle(e.target.value)}):(0,c.createElement)("h2",{className:"content-restriction__header__title"},u),(0,c.createElement)("p",{className:"content-restriction__header__action__edit"},g?(0,c.createElement)(i.A,{onClick:e=>{e.stopPropagation(),p(!1)}}):(0,c.createElement)(s.A,{onClick:e=>{e.stopPropagation(),p(!0)}})))),(0,c.createElement)("div",{className:"content-restriction__header__action content-restriction__header__action--right"},(0,c.createElement)(_.A,{checked:N,onChange:e=>{y(e),(0,l.dispatch)(d).setRulePublished(e)},checkedChildren:"",unCheckedChildren:""}),(0,c.createElement)("button",{className:"content-restriction__btn content-restriction__btn--create",onClick:A},n?(0,h.__)("Update","content-restriction"):(0,h.__)("Publish","content-restriction")),n&&(0,c.createElement)(c.Fragment,null,(0,c.createElement)("button",{className:"content-restriction__btn content-restriction__btn--delete",onClick:()=>{S(!w)},ref:j},"..."),(0,c.createElement)("ul",{className:"content-restriction__single__btn__dropdown "+(w?"active":"")},(0,c.createElement)("li",{className:"content-restriction__single__btn__dropdown__item"},(0,c.createElement)("button",{className:"content-restriction__single__btn__dropdown__btn content-restriction__single__btn__dropdown__btn--delete",onClick:()=>b(n,v)},(0,h.__)("Delete","content-restriction"))))))))}var v=n(2318),T=n(1005),j=n(3009);function C(e){const{id:t,type:n,openKey:r,setOpenKey:a,changeAction:i,resetType:s}=e,l=(0,o.useRef)(null);(0,o.useEffect)((()=>{const e=e=>{!l.current||l.current.contains(e.target)||e.target.closest(".ant-dropdown-trigger")||setTimeout((()=>{a(null)}),100)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[a]);const _=[{key:"remove",label:(0,c.createElement)("a",{onClick:e=>{e.stopPropagation(),s(e,n)}},(0,h.__)("Remove","content-restriction"))},{key:"change",label:(0,c.createElement)("a",{onClick:e=>{e.stopPropagation(),i(e,n)}},(0,h.__)("Change","content-restriction"))}],m=r===n;return(0,c.createElement)("div",{ref:l},(0,c.createElement)(j.A,{menu:{items:_},trigger:["click"],placement:"bottomRight",open:!t&&m,onOpenChange:()=>{a(n)}},(0,c.createElement)("button",{className:"content-restriction__single__btn__action",onClick:e=>{e.stopPropagation(),t?i(e,n):a(n)}},t?(0,c.createElement)(T.A,null):(0,c.createElement)(v.A,null))))}const D="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDAgNDgiIHdpZHRoPSI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yMCA0NGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjBjLTExLjA0NTcyIDAtMjAgOC45NTQzLTIwIDIwczguOTU0MjggMjAgMjAgMjB6bTYuMjM5My0zMC42ODMyYy4zMDM3LTEuMDc4Ny0uNzQzMi0xLjcxNjctMS42OTkzLTEuMDM1NWwtMTMuMzQ2OSA5LjUwODNjLTEuMDM2OS43Mzg3LS44NzM4IDIuMjEwNC4yNDUgMi4yMTA0aDMuNTE0NnYtLjAyNzJoNi44NDk4bC01LjU4MTMgMS45NjkzLTIuNDYwNSA4Ljc0MTFjLS4zMDM3IDEuMDc4OC43NDMxIDEuNzE2NyAxLjY5OTMgMS4wMzU1bDEzLjM0NjktOS41MDgyYzEuMDM2OS0uNzM4Ny44NzM3LTIuMjEwNS0uMjQ1LTIuMjEwNWgtNS4zMjk4eiIgZmlsbD0iIzE1NWVlZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+";var A=n(9140);const z=()=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("li",{className:"content-restriction__type__item"},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(0,c.createElement)(A.A,{active:!0,paragraph:{rows:4}}))),(0,c.createElement)("li",{className:"content-restriction__type__item"},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(0,c.createElement)(A.A,{active:!0,paragraph:{rows:4}}))),(0,c.createElement)("li",{className:"content-restriction__type__item"},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(0,c.createElement)(A.A,{active:!0,paragraph:{rows:4}}))),(0,c.createElement)("li",{className:"content-restriction__type__item"},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(0,c.createElement)(A.A,{active:!0,paragraph:{rows:4}}))),(0,c.createElement)("li",{className:"content-restriction__type__item"},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(0,c.createElement)(A.A,{active:!0,paragraph:{rows:4}}))),(0,c.createElement)("li",{className:"content-restriction__type__item"},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(0,c.createElement)(A.A,{active:!0,paragraph:{rows:4}})))),k=()=>{const e=(0,l.select)("content-restriction-stores"),[t,n]=(0,o.useState)(e.getRuleType()||"who-can-see"),[r,a]=(0,o.useState)([]),[i,s]=(0,o.useState)(!1),[_,m]=(0,o.useState)(e.getModal()||!1),[u,E]=(0,o.useState)("-"),[g,p]=(0,o.useState)("-"),N=(0,l.subscribe)((()=>{const t=e.getModal(),c=e.getRuleType();m(t),n(c),"restrict-view"===c&&(E((0,h.__)("How should the content be protected?","content-restriction")),p((0,h.__)("When user does not have access permission, the following options help control their experience.","content-restriction"))),"what-content"===c&&(E((0,h.__)("What content will be unlocked?","content-restriction")),p((0,h.__)("When user have access permission, the following content will be available.","content-restriction"))),"who-can-see"===c&&(E((0,h.__)("Who can see the content?","content-restriction")),p((0,h.__)("Which user type should be allowed to see the content.","content-restriction")))}));(0,o.useEffect)((()=>(m(e.getModal()),()=>N())));const b=()=>{m(e.getModal());const n=e.getWhatContent(),c=e.getWhoCanSee(),r=e.getRestrictView();t&&M(`content-restriction/modules/${t}`,{what_content:n?.key,who_can_see:c?.key,restrict_view:r?.key}).then((e=>{a(e),s(!0)}))};(0,o.useEffect)((()=>{b(),s(!1)}),[t]),(0,o.useEffect)((()=>{b()}),[]);const y=()=>{(0,l.dispatch)(d).setModalVisible(!1)};return(0,c.createElement)("div",{className:"content-restriction__modal "+(_?"content-restriction__modal--visible":"")},(0,c.createElement)("div",{className:"content-restriction__modal__overlay",onClick:y}),(0,c.createElement)("div",{className:"content-restriction__modal__content"},(0,c.createElement)("div",{className:"content-restriction__modal__content__header"},(0,c.createElement)("div",{className:"content-restriction__modal__content__header__info"},(0,c.createElement)("div",{class:"info-text"},(0,c.createElement)("h2",{class:"content-restriction__modal__content__title"},u),(0,c.createElement)("p",{class:"content-restriction__modal__content__desc"},g))),(0,c.createElement)("div",{className:"content-restriction__modal__content__header__action"},(0,c.createElement)("button",{className:"content-restriction__modal__content__close-btn",onClick:y},"x"))),(0,c.createElement)("div",{className:"content-restriction__modal__content__body"},(0,c.createElement)("div",{className:"content-restriction__modal__content__wrapper"},(0,c.createElement)("div",{className:"content-restriction__module"},r.length>0?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("ul",{className:"content-restriction__type"},i?r?.map(((n,r)=>(0,c.createElement)(c.Fragment,null,n.upcoming||n.is_pro&&!content_restriction_admin.pro_available?(0,c.createElement)("li",{className:"content-restriction__type__item pro-item",key:r},(0,c.createElement)("button",{className:"content-restriction__type__btn"},(n.upcoming,(0,c.createElement)("span",{class:"pro-badge"},(0,h.__)("Upcoming","content-restriction"))),(0,c.createElement)("img",{src:n?.icon||D,alt:n.name}),(0,c.createElement)("h3",null,n.name),(0,c.createElement)("span",null,n.desc))):(0,c.createElement)("li",{className:"content-restriction__type__item",key:r},(0,c.createElement)("button",{className:"content-restriction__type__btn",onClick:()=>((t,n)=>{(0,l.dispatch)(d).setModalVisible(!1),(0,l.dispatch)(d).setSidebarVisible(!0),(0,l.dispatch)(d).setRuleType(t);const c={...e.getRuleData(),[t]:n.key};(0,l.dispatch)(d).setRule(c),"who-can-see"===t?(0,l.dispatch)(d).setWhoCanSee(n):"what-content"===t?(0,l.dispatch)(d).setWhatContent(n):"restrict-view"===t&&(0,l.dispatch)(d).setRestrictView(n)})(t,n)},(0,c.createElement)("img",{src:n?.icon||D,alt:n.name}),(0,c.createElement)("h3",null,n.name),(0,c.createElement)("span",null,n.desc)))))):(0,c.createElement)(z,null))):"")))))};var f=n(3303),R=n(6190),L=n(1575);function x(e){return"string"!=typeof e?"":e.replace(/[^a-zA-Z0-9]/g," ").split(/[\s_]+/).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}function O(e){return Object.entries(e||{}).map((([e,t])=>({value:e,label:"string"==typeof t?t:t.title})))}const{TextArea:V}=f.A,W=()=>{const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)("Action"),[a,i]=(0,o.useState)(),[s,_]=(0,o.useState)(!1),[m,u]=(0,o.useState)(!1),[E,g]=(0,o.useState)(null),[p,M]=(0,o.useState)([]),[N,b]=(0,o.useState)(null),[y,w]=(0,o.useState)({}),[I,S]=(0,o.useState)("");(0,o.useEffect)((()=>{const e=(0,l.select)("content-restriction-stores");_(e.getSidebar());const n=(0,l.subscribe)((()=>{const n=e.getSidebar(),c=e.getRuleType(),a=e.getRuleData(),s=e.getWhoCanSee(),l=e.getWhatContent(),o=e.getRestrictView();_(n),t(c),w(a),"who-can-see"===c?(i(s),r(s.name)):"what-content"===c?(i(l),r(l.name)):"restrict-view"===c&&(i(o),r(o.name))}));return()=>n()}));const v=(t,n)=>{w((c=>({...c,[e]:{[a.key]:{...c[e]?.[a.key],[t]:n}}})))};return(0,o.useEffect)((()=>{const e=y&&y["what-content"];if(e&&"object"==typeof e)for(const[t,n]of Object.entries(e))S(t);else S(e);(0,l.dispatch)(d).setRule(y)}),[y]),(0,o.useEffect)((()=>{if(g(null),M(null),b(null),a&&!a?.options)w((t=>({...t,[e]:a?.key})));else if(a&&e&&y&&y[e]?.[a.key]){const t=y[e][a.key];if("string"==typeof t||"number"==typeof t)g(t),M([]),b([]);else if("object"==typeof t){const e=Object.keys(t)[0];if(g(e),Array.isArray(t[e])){b(t[e]);const n=a.options[e];if(n&&"multi-select"===n.type){const e=Object.entries(n.options||{}).map((([e,t])=>({value:e,label:t})));M(e)}}else M([]),b([])}}else w((t=>({...t,[e]:a?.key})))}),[a]),(0,c.createElement)("div",{className:"content-restriction__sidebar "+(s?"content-restriction__sidebar--visible":"")},a?(0,c.createElement)("div",{className:"content-restriction__sidebar__content"},(0,c.createElement)("div",{className:"content-restriction__sidebar__content__header"},(0,c.createElement)("h2",{className:"content-restriction__sidebar__content__title"},n),(0,c.createElement)("button",{className:"content-restriction__sidebar__content__btn",onClick:e=>(e=>{e.stopPropagation(),(0,l.dispatch)(d).setSidebarVisible(!1),(0,l.dispatch)(d).setModalVisible(!0)})(e)},(0,h.__)("Change","content-restriction")),(0,c.createElement)("button",{className:"content-restriction__sidebar__content__close-btn",onClick:()=>{(0,l.dispatch)(d).setSidebarVisible(!1)}},"x")),(0,c.createElement)("div",{className:"content-restriction__sidebar__content__body"},(0,c.createElement)("div",{className:"content-restriction__sidebar__tab"},(0,c.createElement)("div",{className:"tab-content content-restriction__sidebar__tab__content",id:"nav-tabContent"},(0,c.createElement)("div",{className:"content-restriction__sidebar__tab__content__event"},(0,c.createElement)("div",{className:"content-restriction__sidebar__tab__content__event__wrapper"},"select"===a?.type?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("h3",{className:"content-restriction__sidebar__tab__content__event__title"},(0,h.__)("Select ","content-restriction")," ",a?.name,"   ",(0,h.__)("(required) ","content-restriction")),(0,c.createElement)(R.A,{allowClear:!0,style:{width:"100%",marginBottom:"10px"},placeholder:(0,h.__)("Please select an option","content-restriction"),onChange:t=>{const n=a.options[t];if(g(t),b([]),n&&"object"==typeof n&&"multi-select"===n.type){const c=Object.entries(n.options||{}).map((([e,t])=>({value:e,label:t})));M(c),w((n=>({...n,[e]:{[a.key]:{[t]:[]}}})))}else n?(M([]),w((n=>({...n,[e]:{[a.key]:t}})))):M([])},options:O(a?.options),value:E}),E&&p.length>0&&(0,c.createElement)(c.Fragment,null,(0,c.createElement)("h3",{className:"content-restriction__sidebar__tab__content__event__title"}," ",(0,h.__)("Choose","content-restriction")," ",x(E)),(0,c.createElement)(R.A,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:`Select ${E} option`,onChange:t=>{b(t),w((n=>({...n,[e]:{[a.key]:{[E]:t}}})))},options:p,value:N}))):"section"===a?.type?(0,c.createElement)(c.Fragment,null,a.options&&Object.entries(a.options).length>0?Object.entries(a.options).map((([t,n])=>"text"===n.type||"url"===n.type?(0,c.createElement)("div",{className:"content-restriction__sidebar__tab__content__event__section-wrapper",key:t},(0,c.createElement)("h3",{className:"content-restriction__sidebar__tab__content__event__title"},n.title),(0,c.createElement)(f.A,{id:`content-restriction__${t}`,placeholder:`Type ${n.title}`,value:y&&y[e]?.[a.key]?.[t]||"",onChange:e=>v(t,e.target.value)})):"textarea"===n.type?(0,c.createElement)("div",{className:"content-restriction__sidebar__tab__content__event__section-wrapper",key:t},(0,c.createElement)("h3",{className:"content-restriction__sidebar__tab__content__event__title"},n.title),(0,c.createElement)(V,{id:`content-restriction__${t}`,rows:4,placeholder:`Type ${n.title}`,value:y&&y[e]?.[a.key]?.[t]||"",onChange:e=>v(t,e.target.value)})):"range"===n.type?(0,c.createElement)("div",{className:"content-restriction__sidebar__tab__content__event__section-wrapper",key:t},(0,c.createElement)("h3",{className:"content-restriction__sidebar__tab__content__event__title"},n.title),(0,c.createElement)(L.A,{defaultValue:n.default,value:y&&y[e]?.[a.key]?.[t]||n.default,onChange:e=>v(t,e)})):"multi-select"===n.type?(0,c.createElement)("div",{className:"content-restriction__sidebar__tab__content__event__section-wrapper",key:t},(0,c.createElement)("h3",{className:"content-restriction__sidebar__tab__content__event__title"},n.title),(0,c.createElement)(R.A,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:(0,h.__)("Please select","content-restriction"),onChange:e=>v(t,e),options:O(n.options),value:y&&y[e]?.[a.key]?.[t]||[]})):null)):(0,c.createElement)("div",null,(0,h.__)("No options available","content-restriction"))):(0,c.createElement)(c.Fragment,null,(0,c.createElement)("p",{className:"content-restriction__sidebar__tab__content__event__desc"},a?.desc)))))))):null)},P=()=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("div",{className:"content-restriction__single__btn"},(0,c.createElement)(A.A,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}})));function U(){const[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)([]),[a,i]=(0,o.useState)(""),[s,_]=(0,o.useState)(""),[m,u]=(0,o.useState)(""),[E,g]=(0,o.useState)(null),[p,N]=(0,o.useState)(!1),[b,y]=(0,o.useState)(D),[w,I]=(0,o.useState)(D),[S,v]=(0,o.useState)(D),T={name:"",key:"",type:"",options:""};(0,o.useEffect)((()=>{const e=window.location.href.split("/"),n=e[e.length-1];if("rule"===n)return N(!0),(0,l.dispatch)(d).setWhoCanSee(T),(0,l.dispatch)(d).setWhatContent(T),(0,l.dispatch)(d).setRestrictView(T),(0,l.dispatch)(d).setRuleTitle(""),(0,l.dispatch)(d).setRulePublished(""),(0,l.dispatch)(d).setId(""),void(0,l.dispatch)(d).setRule("");t(e[6]),M("content-restriction/rules/list").then((e=>{r(e);const t=e.length>0&&e.find((e=>e.id===n));(0,l.dispatch)(d).setId(t?.id),(0,l.dispatch)(d).setRule(t?.rule),(0,l.dispatch)(d).setRulePublished(t?.status),(0,l.dispatch)(d).setRuleTitle(t?.title);const c=t&&t?.rule["who-can-see"]?"object"==typeof t?.rule["who-can-see"]?Object.keys(t?.rule["who-can-see"])[0]:"string"==typeof t?.rule["who-can-see"]?t?.rule["who-can-see"]:"":"",a=t&&t?.rule["what-content"]?"object"==typeof t?.rule["what-content"]?Object.keys(t?.rule["what-content"])[0]:"string"==typeof t?.rule["what-content"]?t?.rule["what-content"]:"":"",s=t&&t?.rule["restrict-view"]?"object"==typeof t?.rule["restrict-view"]?Object.keys(t?.rule["restrict-view"])[0]:"string"==typeof t?.rule["restrict-view"]?t?.rule["restrict-view"]:"":"";i(x(c)),_(x(a)),u(x(s));const o=async(e,t)=>{try{const n=(e&&await M(`content-restriction/modules/${e}`)).find((e=>e.key===t));n&&("who-can-see"===e?(0,l.dispatch)(d).setWhoCanSee(n):"what-content"===e?(0,l.dispatch)(d).setWhatContent(n):"restrict-view"===e&&(0,l.dispatch)(d).setRestrictView(n))}catch(e){}};o("who-can-see",c),o("what-content",a),o("restrict-view",s),N(!0)})).catch((e=>{}))}),[]),(0,o.useEffect)((()=>{const e=(0,l.select)("content-restriction-stores"),t=(0,l.subscribe)((()=>{var t,n,c;const r=e.getWhoCanSee(),a=e.getWhatContent(),s=e.getRestrictView();i(r.name),_(a.name),u(s.name),y(null!==(t=r.icon)&&void 0!==t?t:b),I(null!==(n=a.icon)&&void 0!==n?n:w),v(null!==(c=s.icon)&&void 0!==c?c:S)}));return()=>t()}),[n]);const j=(e,t)=>{e.stopPropagation(),(0,l.dispatch)(d).setRuleType(t),"who-can-see"===t?a?z():A():"what-content"===t?s?z():A():"restrict-view"===t&&(m?z():A())},A=()=>{g(null),(0,l.dispatch)(d).setModalVisible(!0)},z=()=>{g(null),(0,l.dispatch)(d).setSidebarVisible(!0)},f=(e,t)=>{e.stopPropagation(),(0,l.dispatch)(d).setModalVisible(!1),(0,l.dispatch)(d).setSidebarVisible(!1),"who-can-see"===t?(i(""),(0,l.dispatch)(d).setWhoCanSee(T)):"what-content"===t?(_(""),(0,l.dispatch)(d).setWhatContent(T)):"restrict-view"===t&&(u(""),(0,l.dispatch)(d).setRestrictView(T))},R=(e,t)=>{e.stopPropagation(),g(null),(0,l.dispatch)(d).setRuleType(t),(0,l.dispatch)(d).setModalVisible(!0)};return(0,c.createElement)(c.Fragment,null,(0,c.createElement)("section",{className:"content-restriction__create-rules"},p?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("div",{className:"content-restriction__single"},(0,c.createElement)("div",{className:"content-restriction__single__btn",onClick:e=>j(e,"who-can-see")},(0,c.createElement)("img",{src:b}),a?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("h3",{className:"content-restriction__single__btn__title"},a),(0,c.createElement)(C,{id:e,type:"who-can-see",openKey:E,setOpenKey:g,changeAction:R,resetType:f})):(0,c.createElement)("h3",{className:"content-restriction__single__btn__title"},(0,h.__)("Who can see the content?","content-restriction")))),(0,c.createElement)("div",{className:"content-restriction__single"},(0,c.createElement)("div",{className:"content-restriction__single__btn "+(a?"":"disabled"),onClick:e=>j(e,"what-content")},(0,c.createElement)("img",{src:w}),s?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("h3",{className:"content-restriction__single__btn__title"},s),(0,c.createElement)(C,{id:e,type:"what-content",openKey:E,setOpenKey:g,changeAction:R,resetType:f})):(0,c.createElement)("h3",{className:"content-restriction__single__btn__title"},(0,h.__)("What content will be unlocked?","content-restriction")))),(0,c.createElement)("div",{className:"content-restriction__single"},(0,c.createElement)("div",{className:"content-restriction__single__btn "+(a&&s?"":"disabled"),onClick:e=>j(e,"restrict-view")},(0,c.createElement)("img",{src:S}),m?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("h3",{className:"content-restriction__single__btn__title"},m),(0,c.createElement)(C,{id:e,type:"restrict-view",openKey:E,setOpenKey:g,changeAction:R,resetType:f})):(0,c.createElement)("h3",{className:"content-restriction__single__btn__title"},(0,h.__)("How should the content be protected?","content-restriction"))))):(0,c.createElement)(c.Fragment,null,(0,c.createElement)(P,null),(0,c.createElement)(P,null),(0,c.createElement)(P,null))),(0,c.createElement)(k,null),(0,c.createElement)(W,null))}function H(){return(0,c.createElement)(c.Fragment,null,(0,c.createElement)(S,null),(0,c.createElement)(U,null))}var Q=n(9266);const Y=[{key:"rules",label:(0,c.createElement)(r.N_,{to:"/rules",className:"content-restriction__menu__single"},(0,h.__)("Rules","content-restriction"))},{key:"integrations",label:(0,c.createElement)(r.N_,{to:"/integrations",className:"content-restriction__menu__single"},(0,h.__)("Integrations","content-restriction"))}];function Z({menuKey:e}){return(0,c.createElement)(Q.A,{selectedKeys:[e],mode:"horizontal",items:Y,lineWidth:"0",style:{width:"100%",lineHeight:"70px"}})}function B({menuKey:e}){return(0,c.createElement)(c.Fragment,null,(0,c.createElement)("div",{className:"content-restriction__header"},(0,c.createElement)("div",{className:"content-restriction__header__action content-restriction__header__action--left"},(0,c.createElement)(r.N_,{to:"/",className:"content-restriction__menu__single"},(0,c.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSI0MyIgdmlld0JveD0iMCAwIDQzIDQzIiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTAgM0MwIDEuMzQzMTQgMS4zNDMxNSAwIDMgMEg0MEM0MS42NTY5IDAgNDMgMS4zNDMxNSA0MyAzVjQwQzQzIDQxLjY1NjkgNDEuNjU2OSA0MyA0MCA0M0gzQzEuMzQzMTQgNDMgMCA0MS42NTY5IDAgNDBWM1oiIGZpbGw9IiMzNzQ3RDYiLz4KPHBhdGggZD0iTTEyLjM5MDkgMTMuNjYzSDEzLjU0MTkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY1NDggMTMuNjYzSDI3LjE5NTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjM2NjkgMjkuNDI5NUMxNi4zNjY5IDI4LjM5OTUgMTYuMzY2OSAyNy45MTE2IDE2LjcxMjMgMjcuNTg2NEMxNy4wNTc2IDI3LjI2MTEgMTcuNTc1NiAyNy4yNjExIDE4LjY2OTEgMjcuMjYxMUgyMy4yNzM0QzI0LjM2NjkgMjcuMjYxMSAyNC44ODQ5IDI3LjI2MTEgMjUuMjMwMyAyNy41ODY0QzI1LjU3NTYgMjcuOTExNiAyNS41NzU2IDI4LjM5OTUgMjUuNTc1NiAyOS40Mjk1VjMwLjUxMzdDMjUuNTc1NiAzMi4wMzE1IDI1LjU3NTYgMzIuNzkwNSAyNS4wNTc2IDMzLjI3ODNDMjQuNTM5NiAzMy43NjYyIDIzLjczMzggMzMuNzY2MiAyMi4xMjIzIDMzLjc2NjJIMTkuODIwMkMxOC4yMDg3IDMzLjc2NjIgMTcuNDAyOSAzMy43NjYyIDE2Ljg4NDkgMzMuMjc4M0MxNi4zNjY5IDMyLjc5MDUgMTYuMzY2OSAzMi4wMzE1IDE2LjM2NjkgMzAuNTEzN1YyOS40Mjk1WiIgc3Ryb2tlPSIjRkZFNUQ2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMy4yNzMzIDI2LjcxOTFWMjYuMTc3QzIzLjI3MzMgMjQuOTg0NCAyMi4yMzczIDI0LjAwODcgMjAuOTcxMSAyNC4wMDg3QzE5LjcwNDkgMjQuMDA4NyAxOC42Njg5IDI0Ljk4NDQgMTguNjY4OSAyNi4xNzdWMjYuNzE5MSIgc3Ryb2tlPSIjRkZFNUQ2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMi42ODM1IDMyLjU1MTFDMTAuNjExNSAzMi4zMzQzIDkgMzAuNzA4IDkgMjguNzAyMlYxMy45MDMxQzkgMTEuNzM0NyAxMC44NDE3IDEwIDEzLjE0MzkgMTBIMjguODU2MUMzMS4xNTgzIDEwIDMzIDExLjczNDcgMzMgMTMuOTAzMVYyOC43MDIyQzMzIDMwLjcwOCAzMS4zODg1IDMyLjMzNDMgMjkuMzE2NSAzMi41NTExIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjIzNDEzIDE2Ljc3NTZIMzIuNzA5MSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPg==",alt:"{__( 'Content Restriction', 'content-restriction' )}"})),(0,c.createElement)("span",null,(0,h.__)("Content Restriction","content-restriction"))),(0,c.createElement)("div",{className:"content-restriction__header__action content-restriction__header__action--right"},(0,c.createElement)(Z,{menuKey:e}))))}var F=n(6795);function G({timestamp:e}){return J(1e3*e)}const J=e=>{const t=new Date,n=new Date(e),c=Math.floor((t-n)/1e3);let r=Math.floor(c/31536e3);return r>=1?1===r?(0,h.__)(" 1 year ago","content-restriction"):r+(0,h.__)(" years ago","content-restriction"):(r=Math.floor(c/2592e3),r>=1?1===r?(0,h.__)(" 1 month ago","content-restriction"):r+(0,h.__)(" months ago","content-restriction"):(r=Math.floor(c/86400),r>=1?1===r?(0,h.__)(" 1 day ago","content-restriction"):r+(0,h.__)(" days ago","content-restriction"):(r=Math.floor(c/3600),r>=1?1===r?(0,h.__)(" 1 hour ago","content-restriction"):r+(0,h.__)(" hours ago","content-restriction"):(r=Math.floor(c/60),r>=1?1===r?(0,h.__)(" 1 minute ago","content-restriction"):r+(0,h.__)(" minutes ago","content-restriction"):1===Math.floor(c)?(0,h.__)(" 1 second ago","content-restriction"):Math.floor(c)+(0,h.__)(" seconds ago","content-restriction")))))},K=()=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("tr",null,(0,c.createElement)("td",null,(0,c.createElement)(A.A,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}})),(0,c.createElement)("td",null,(0,c.createElement)(A.A,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}})),(0,c.createElement)("td",null,(0,c.createElement)(A.A,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}})),(0,c.createElement)("td",null,(0,c.createElement)(A.A,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}}))));function X(){const e=(0,a.Zp)(),[t,n]=(0,o.useState)([]),[i,s]=(0,o.useState)({}),[l,m]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{const e=t.reduce(((e,t)=>(e[t.id]=t.status,e)),{});s(e)}),[t]),(0,o.useEffect)((()=>{M("content-restriction/rules/list").then((e=>{n(e),m(!0)})).catch((e=>{I("error",(0,h.__)("Something wen't wrong!","content-restriction"))}))}),[]),(0,c.createElement)("div",{class:"content-restriction__rules relative"},(0,c.createElement)("table",{class:"content-restriction__rules__list"},(0,c.createElement)("thead",{class:"content-restriction__rules__list__header"},(0,c.createElement)("tr",null,(0,c.createElement)("th",{scope:"col",width:"5%"},(0,h.__)("Status","content-restriction")),(0,c.createElement)("th",{scope:"col"},(0,h.__)("Name","content-restriction")),(0,c.createElement)("th",{scope:"col"},(0,h.__)("Last edit","content-restriction")),(0,c.createElement)("th",{scope:"col",width:"5%",className:"text-center"},(0,h.__)("Actions","content-restriction")))),(0,c.createElement)("tbody",{class:"content-restriction__rules__body"},t.length>0?t.map(((t,n)=>(0,c.createElement)("tr",{key:n},(0,c.createElement)("td",null,(0,c.createElement)(_.A,{checked:i[t.id],onChange:e=>((e,t,n,c)=>{s({...i,[t]:e}),M("content-restriction/rules/update",{id:t,data:{status:e,title:n,rule:c}}).then((e=>{I("success",(0,h.__)("Successfully updated!","content-restriction"))})).catch((e=>{I("error",(0,h.__)("Status update error","content-restriction"))}))})(e,t.id,t.title,t.rule),checkedChildren:"",unCheckedChildren:""})),(0,c.createElement)("td",null,(0,c.createElement)(r.N_,{to:`/rule/${t.id}`},t.title)),(0,c.createElement)("td",null,(0,c.createElement)(G,{timestamp:t.modified})),(0,c.createElement)("td",{className:"content-restriction__rules__action"},(0,c.createElement)(F.A,{title:(0,h.__)("Delete","content-restriction")},(0,c.createElement)("a",{href:"#",className:"delete-btn"},(0,c.createElement)("svg",{onClick:()=>b(t.id,e),width:"13",height:"18",viewBox:"0 0 304 384",xmlns:"http://www.w3.org/2000/svg"},(0,c.createElement)("path",{fill:"#CA0B00",d:"M21 341V85h256v256q0 18-12.5 30.5T235 384H64q-18 0-30.5-12.5T21 341M299 21v43H0V21h75L96 0h107l21 21z"})))),(0,c.createElement)(F.A,{title:"Edit"},(0,c.createElement)(r.N_,{to:`/rule/${t.id}`},(0,c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",size:"24",name:"actionEdit"},(0,c.createElement)("path",{fill:"#2D2E2E",d:"m16.92 5 3.51 3.52 1.42-1.42-4.93-4.93L3 16.09V21h4.91L19.02 9.9 17.6 8.48 7.09 19H5v-2.09L16.92 5Z"})))))))):l?(0,c.createElement)("tr",null,(0,c.createElement)("td",{colSpan:"4",className:"text-center"},(0,h.__)("No rules was found! Create new rule","content-restriction"))):(0,c.createElement)(c.Fragment,null,(0,c.createElement)(K,null),(0,c.createElement)(K,null),(0,c.createElement)(K,null)))))}function $(){return(0,c.createElement)(c.Fragment,null,(0,c.createElement)(B,{menuKey:"rules"}),(0,c.createElement)("div",{className:"content-restriction__rules container"},(0,c.createElement)("div",{className:"content-restriction__rules__header"},(0,c.createElement)("h1",{className:"content-restriction__rules__header__title"},"Rules"),(0,c.createElement)(r.N_,{to:"/rule",className:"content-restriction__btn content-restriction__btn--create"},(0,c.createElement)("svg",{width:"15",height:"15",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,c.createElement)("path",{d:"M15.2031 0.4375C15.5761 0.4375 15.9338 0.585658 16.1975 0.849381C16.4612 1.1131 16.6094 1.47079 16.6094 1.84375V12.3906H27.1562C27.5292 12.3906 27.8869 12.5388 28.1506 12.8025C28.4143 13.0662 28.5625 13.4239 28.5625 13.7969V15.2031C28.5625 15.5761 28.4143 15.9338 28.1506 16.1975C27.8869 16.4612 27.5292 16.6094 27.1562 16.6094H16.6094V27.1562C16.6094 27.5292 16.4612 27.8869 16.1975 28.1506C15.9338 28.4143 15.5761 28.5625 15.2031 28.5625H13.7969C13.4239 28.5625 13.0662 28.4143 12.8025 28.1506C12.5388 27.8869 12.3906 27.5292 12.3906 27.1562V16.6094H1.84375C1.47079 16.6094 1.1131 16.4612 0.849381 16.1975C0.585658 15.9338 0.4375 15.5761 0.4375 15.2031V13.7969C0.4375 13.4239 0.585658 13.0662 0.849381 12.8025C1.1131 12.5388 1.47079 12.3906 1.84375 12.3906H12.3906V1.84375C12.3906 1.47079 12.5388 1.1131 12.8025 0.849381C13.0662 0.585658 13.4239 0.4375 13.7969 0.4375H15.2031Z",fill:"white"})),(0,c.createElement)("span",null,(0,h.__)("Create Rule","content-restriction")))),(0,c.createElement)(X,null)))}const q=()=>(0,c.createElement)("div",{class:"content-restriction__integrations__list__item"},(0,c.createElement)("div",{class:"content-restriction__integrations__list__item__header"},(0,c.createElement)(A.A,{active:!0,title:!1,paragraph:{rows:8,width:"100%"}})));function ee(){const[e,t]=(0,o.useState)([]),[n,r]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{M("content-restriction/settings/integrations").then((e=>{t(e),r(!0)})).catch((e=>{I("error",(0,h.__)("Something wen't wrong!","content-restriction"))}))}),[]),(0,c.createElement)("div",{class:"content-restriction__integrations__list"},n?e.map(((e,t)=>(0,c.createElement)("div",{class:"content-restriction__integrations__list__item"},(0,c.createElement)("div",{class:"content-restriction__integrations__list__item__header"},(0,c.createElement)("img",{src:e.icon,alt:e.title}),(0,c.createElement)("div",{class:"badges"},e.badges.map(((e,t)=>(0,c.createElement)("span",{class:"badge"},x(e)))))),(0,c.createElement)("h3",{class:"content-restriction__integrations__list__item__title"},e.title),(0,c.createElement)("p",{class:"content-restriction__integrations__list__item__actions"},e.link?(0,c.createElement)("a",{href:e.link,class:"learn-more"},(0,h.__)("Learn more","content-restriction")):(0,c.createElement)("span",null),e.action&&"upgrade"===e.action?(0,c.createElement)("a",{href:"https://contentrestriction.com/pricing/",class:"action upgrade-to-pro",target:"__blank"},(0,h.__)("Let's go","content-restriction")):"")))):(0,c.createElement)(c.Fragment,null,(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null),(0,c.createElement)(q,null)))}function te(){return(0,c.createElement)(c.Fragment,null,(0,c.createElement)(B,{menuKey:"integrations"}),(0,c.createElement)("div",{className:"content-restriction__integrations container"},(0,c.createElement)("div",{className:"content-restriction__integrations__header"},(0,c.createElement)("h1",{className:"content-restriction__integrations__header__title"},(0,h.__)("Numerous Integrations, New Possibilities.","content-restriction")),(0,c.createElement)("p",null,(0,h.__)("Boost your web-creation process with Integrations, plugins, and more tools specially selected to unleash your creativity, increase productivity, and enhance your WordPress-powered website.*","content-restriction"))),(0,c.createElement)(ee,null)))}function ne(){return(0,c.createElement)(c.Fragment,null,(0,c.createElement)(S,null),(0,c.createElement)(U,null))}var ce=n(49);const{TextArea:re}=f.A,{Option:ae}=R.A,{Sider:ie,Content:se}=ce.A,{TextArea:le}=f.A,oe=function(){return(0,c.createElement)(c.Fragment,null,(0,c.createElement)(r.I9,null,(0,c.createElement)(a.BV,null,(0,c.createElement)(a.qh,{path:"/",element:(0,c.createElement)($,null)}),(0,c.createElement)(a.qh,{path:"/rules",element:(0,c.createElement)($,null)}),(0,c.createElement)(a.qh,{path:"/rule",element:(0,c.createElement)(H,null)}),(0,c.createElement)(a.qh,{path:"/rule/:id",element:(0,c.createElement)(ne,null)}),(0,c.createElement)(a.qh,{path:"/integrations",element:(0,c.createElement)(te,null)}))))}}}]);