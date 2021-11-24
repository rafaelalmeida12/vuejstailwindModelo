"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[522],{1915:function(t,n,l){l.d(n,{Z:function(){return v}});var e=l(6252),o=l(3577),i={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},u=(0,e._)("span",{class:"md:mr-3"},"Please star this project on",-1),a={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},r=(0,e._)("span",null,"GitHub",-1),c={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},s=(0,e.Uk)(" Check out other components and layouts at"),m=(0,e._)("br",null,null,-1),d=(0,e.Uk)(", "),f=(0,e._)("br",null,null,-1),p=(0,e.Uk)(" screen samples "),b=(0,e._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,e.Uk)(" Get more with "),(0,e._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard",target:"_blank",class:"text-blue-500"},"Premium version")],-1);function w(t,n,l,w,g,h){var _=(0,e.up)("icon"),W=(0,e.up)("router-link"),x=(0,e.up)("titled-section");return(0,e.wg)(),(0,e.j4)(x,{last:""},{default:(0,e.w5)((function(){return[(0,e._)("h1",i,[u,(0,e._)("a",a,[(0,e.Wm)(_,{path:w.mdiGithub,size:"36",class:"mr-1"},null,8,["path"]),r])]),(0,e._)("h1",c,[s,m,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.screens,(function(t,n){return(0,e.wg)(),(0,e.iD)(e.HY,{key:t.path},[(0,e.Wm)(W,{to:t.path,class:"text-blue-500"},{default:(0,e.w5)((function(){return[(0,e.Uk)((0,o.zw)(t.title),1)]})),_:2},1032,["to"]),n+1<w.screens.length?((0,e.wg)(),(0,e.iD)(e.HY,{key:0},[d],64)):(0,e.kq)("",!0)],64)})),128)),f,p]),b]})),_:1})}var g=l(2119),h=l(5317),_=l(4453),W=l(2209),x={name:"BottomOtherPagesSection",components:{TitledSection:_.Z,Icon:W.Z},setup:function(){var t=(0,g.tv)(),n=t.getRoutes(),l=[];for(var e in n){var o=n[e].path,i=n[e].meta&&n[e].meta.title?n[e].meta.title:null;i&&l.push({path:o,title:i})}return{screens:l,mdiGithub:h.LcO}}},k=l(3744);const O=(0,k.Z)(x,[["render",w]]);var v=O},9830:function(t,n,l){l.d(n,{Z:function(){return p}});l(8309);var e=l(6252),o=l(3577),i=l(9963),u=["type","name","value"],a=(0,e._)("span",{class:"check"},null,-1),r={class:"control-label"};function c(t,n,l,c,s,m){return(0,e.wg)(),(0,e.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":l.column}])},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(l.options,(function(t,s){return(0,e.wg)(),(0,e.iD)("label",{key:s,class:(0,o.C_)([l.type,"mr-6 mb-3 last:mr-0"])},[(0,e.wy)((0,e._)("input",{type:c.inputType,name:l.name,"onUpdate:modelValue":n[0]||(n[0]=function(t){return c.computedValue=t}),value:s},null,8,u),[[i.YZ,c.computedValue]]),a,(0,e._)("span",r,(0,o.zw)(t),1)],2)})),128))],2)}l(9653);var s=l(2262),m={name:"CheckRadioPicker",props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup:function(t,n){var l=n.emit,e=(0,s.Fl)({get:function(){return t.modelValue},set:function(t){l("update:modelValue",t)}}),o=(0,s.Fl)((function(){return"radio"===t.type?"radio":"checkbox"}));return{computedValue:e,inputType:o}}},d=l(3744);const f=(0,d.Z)(m,[["render",c]]);var p=f},338:function(t,n,l){l.d(n,{Z:function(){return f}});var e=l(6252),o=l(3577),i={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},a={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};function r(t,n,l,r,c,s){return(0,e.wg)(),(0,e.iD)("div",i,[l.label?((0,e.wg)(),(0,e.iD)("label",u,(0,o.zw)(l.label),1)):(0,e.kq)("",!0),(0,e._)("div",{class:(0,o.C_)(r.wrapperClass)},[(0,e.WI)(t.$slots,"default")],2),l.help?((0,e.wg)(),(0,e.iD)("div",a,(0,o.zw)(l.help),1)):(0,e.kq)("",!0)])}var c=l(2262),s={name:"Field",props:{label:String,help:String},setup:function(t,n){var l=n.slots,e=(0,c.Fl)((function(){var t=[],n=l.default().length;return n>1&&t.push("grid grid-cols-1 gap-3"),2===n&&t.push("md:grid-cols-2"),t}));return{wrapperClass:e}}},m=l(3744);const d=(0,m.Z)(s,[["render",r]]);var f=d},4453:function(t,n,l){l.d(n,{Z:function(){return s}});var e=l(6252),o=l(3577),i={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};function u(t,n,l,u,a,r){return(0,e.wg)(),(0,e.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":l.first,"-mt-6":l.last,"-my-6":!l.first&&!l.last}])},[l.custom?(0,e.WI)(t.$slots,"default",{key:0}):((0,e.wg)(),(0,e.iD)("h1",i,[(0,e.WI)(t.$slots,"default")]))],2)}var a={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},r=l(3744);const c=(0,r.Z)(a,[["render",u]]);var s=c},2748:function(t,n,l){l.r(n),l.d(n,{default:function(){return nt}});var e=l(6252),o=(0,e._)("p",null,"This is sample modal",-1),i=(0,e._)("p",null,"This is sample modal",-1),u=(0,e._)("p",null,"This is sample modal",-1),a=(0,e.Uk)("UI Components"),r=(0,e.Uk)(" Dark mode "),c={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},s=(0,e.Uk)(" Modal examples "),m={class:"space-y-12"},d=(0,e._)("div",{class:"space-y-3"},[(0,e._)("p",null,"Click to see in action")],-1),f=(0,e._)("div",{class:"space-y-3"},[(0,e._)("h1",{class:"text-2xl"},"Unhandled exception"),(0,e._)("p",null,"Click to see in action")],-1),p=(0,e._)("div",{class:"space-y-3"},[(0,e._)("h1",{class:"text-2xl"},"Success"),(0,e._)("p",null,"Click to see in action")],-1),b=(0,e._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),w={class:"flex items-center justify-center mt-6"},g=(0,e._)("b",null,"Info state",-1),h=(0,e.Uk)(". Notification "),_=(0,e._)("b",null,"Success state",-1),W=(0,e.Uk)(". Notification "),x=(0,e._)("b",null,"Warning state",-1),k=(0,e.Uk)(". Notification "),O=(0,e._)("b",null,"Danger state",-1),v=(0,e.Uk)(". Notification "),y=(0,e._)("b",null,"White",-1),S=(0,e.Uk)(". Notification "),C=(0,e._)("b",null,"Light",-1),B=(0,e.Uk)(". Notification "),I=(0,e.Uk)("Buttons"),N=(0,e.Uk)("Cards"),U={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Z=(0,e._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},"With title",-1),T=(0,e._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},"With title & icons",-1);function V(t,n,l,V,A,D){var M=(0,e.up)("modal-box"),H=(0,e.up)("title-bar"),j=(0,e.up)("hero-bar"),F=(0,e.up)("titled-section"),P=(0,e.up)("jb-button"),z=(0,e.up)("card-component"),Y=(0,e.up)("main-section"),q=(0,e.up)("divider"),R=(0,e.up)("jb-buttons"),G=(0,e.up)("check-radio-picker"),L=(0,e.up)("notification"),$=(0,e.up)("field"),E=(0,e.up)("title-sub-bar"),J=(0,e.up)("bottom-other-pages-section");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(M,{modelValue:V.modalOneActive,"onUpdate:modelValue":n[0]||(n[0]=function(t){return V.modalOneActive=t}),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:(0,e.w5)((function(){return[o]})),_:1},8,["modelValue"]),(0,e.Wm)(M,{modelValue:V.modalTwoActive,"onUpdate:modelValue":n[1]||(n[1]=function(t){return V.modalTwoActive=t}),"large-title":"Unhandled exception",button:"danger",shake:""},{default:(0,e.w5)((function(){return[i]})),_:1},8,["modelValue"]),(0,e.Wm)(M,{modelValue:V.modalThreeActive,"onUpdate:modelValue":n[2]||(n[2]=function(t){return V.modalThreeActive=t}),"large-title":"Success",button:"success"},{default:(0,e.w5)((function(){return[u]})),_:1},8,["modelValue"]),(0,e.Wm)(H,{"title-stack":V.titleStack},null,8,["title-stack"]),(0,e.Wm)(j,null,{default:(0,e.w5)((function(){return[a]})),_:1}),(0,e.Wm)(F,{first:""},{default:(0,e.w5)((function(){return[r]})),_:1}),(0,e.Wm)(Y,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(z,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:(0,e.w5)((function(){return[(0,e._)("div",c,[(0,e.Wm)(P,{label:"Toggle",onClick:V.darkModeToggle,outline:""},null,8,["onClick"])])]})),_:1})]})),_:1}),(0,e.Wm)(F,null,{default:(0,e.w5)((function(){return[s]})),_:1}),(0,e.Wm)(Y,null,{default:(0,e.w5)((function(){return[(0,e._)("div",m,[(0,e.Wm)(z,{title:"Confirm modal","header-icon":V.mdiClose,onClick:n[3]||(n[3]=function(t){return V.modalOneActive=!0}),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:""},{default:(0,e.w5)((function(){return[d,(0,e.Wm)(q),(0,e.Wm)(R,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(P,{label:"Confirm",color:"info"}),(0,e.Wm)(P,{label:"Cancel",color:"info",outline:""})]})),_:1})]})),_:1},8,["header-icon"]),(0,e.Wm)(z,{onClick:n[4]||(n[4]=function(t){return V.modalTwoActive=!0}),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:""},{default:(0,e.w5)((function(){return[f,(0,e.Wm)(q),(0,e.Wm)(R,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(P,{label:"Done",color:"danger"})]})),_:1})]})),_:1}),(0,e.Wm)(z,{onClick:n[5]||(n[5]=function(t){return V.modalThreeActive=!0}),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:""},{default:(0,e.w5)((function(){return[p,(0,e.Wm)(q),(0,e.Wm)(P,{label:"Done",color:"success"})]})),_:1})])]})),_:1}),(0,e.Wm)(F,{custom:""},{default:(0,e.w5)((function(){return[b,(0,e._)("div",w,[(0,e.Wm)(G,{type:"switch",name:"notifications-switch",options:{outline:"Outline"},modelValue:V.notificationSettingsModel,"onUpdate:modelValue":n[6]||(n[6]=function(t){return V.notificationSettingsModel=t})},null,8,["modelValue"])])]})),_:1}),(0,e.Wm)(Y,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(L,{color:"info",icon:V.mdiInformationOutline,outline:V.notificationsOutline},{right:(0,e.w5)((function(){return[(0,e.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"info",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[g,h]})),_:1},8,["icon","outline"]),(0,e.Wm)(L,{color:"success",icon:V.mdiCheckCircleOutline,outline:V.notificationsOutline},{right:(0,e.w5)((function(){return[(0,e.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"success",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[_,W]})),_:1},8,["icon","outline"]),(0,e.Wm)(L,{color:"warning",icon:V.mdiAlertCircleOutline,outline:V.notificationsOutline},{right:(0,e.w5)((function(){return[(0,e.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"warning",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[x,k]})),_:1},8,["icon","outline"]),(0,e.Wm)(L,{color:"danger",icon:V.mdiAlertCircle,outline:V.notificationsOutline},{right:(0,e.w5)((function(){return[(0,e.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"danger",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[O,v]})),_:1},8,["icon","outline"]),(0,e.Wm)(L,{color:"white",icon:V.mdiSelectColor,outline:V.notificationsOutline},{default:(0,e.w5)((function(){return[y,S]})),_:1},8,["icon","outline"]),(0,e.Wm)(L,{color:"light",icon:V.mdiFeather,outline:V.notificationsOutline},{default:(0,e.w5)((function(){return[C,B]})),_:1},8,["icon","outline"])]})),_:1}),(0,e.Wm)(F,null,{default:(0,e.w5)((function(){return[I]})),_:1}),(0,e.Wm)(Y,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)($,{label:"Settings"},{default:(0,e.w5)((function(){return[(0,e.Wm)(G,{name:"buttons-switch",type:"switch",modelValue:V.buttonSettingsModel,"onUpdate:modelValue":n[7]||(n[7]=function(t){return V.buttonSettingsModel=t}),options:{outline:"Outline",small:"Small"}},null,8,["modelValue"])]})),_:1}),(0,e.Wm)(q),(0,e.Wm)(R,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(P,{color:"white",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,e.Wm)(P,{color:"light",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,e.Wm)(P,{color:"info",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,e.Wm)(P,{color:"success",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,e.Wm)(P,{color:"warning",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,e.Wm)(P,{color:"danger",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"])]})),_:1}),(0,e.Wm)(q),(0,e.Wm)(R,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(P,{color:"white",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"light",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"info",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"success",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"warning",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"danger",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"])]})),_:1}),(0,e.Wm)(q),(0,e.Wm)(R,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(P,{color:"white",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"light",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"info",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"success",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"warning",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,e.Wm)(P,{color:"danger",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"])]})),_:1})]})),_:1})]})),_:1}),(0,e.Wm)(F,null,{default:(0,e.w5)((function(){return[N]})),_:1}),(0,e.Wm)(Y,null,{default:(0,e.w5)((function(){return[(0,e._)("div",U,[(0,e.Wm)(z,{title:"With Title",mb:""},{default:(0,e.w5)((function(){return[Z]})),_:1}),(0,e.Wm)(z,{title:"Title & Icons",icon:V.mdiMonitorCellphone,"header-icon":V.mdiClose,mb:""},{default:(0,e.w5)((function(){return[T]})),_:1},8,["icon","header-icon"])]),(0,e.Wm)(E,{icon:V.mdiAlertCircle,title:"Empty variation"},null,8,["icon"]),(0,e.Wm)(z,{empty:""})]})),_:1}),(0,e.Wm)(J)],64)}var A=l(2262),D=l(8637),M=l(5317),H=l(179),j=l(3003),F=l(6183),P=l(7250),z=l(9275),Y=l(5507),q=l(3893),R=l(4312),G=l(8208),L=l(4453),$=l(338),E=l(9830),J=l(1915),K=l(5847),Q={name:"Ui",components:{TitleSubBar:K.Z,MainSection:H.Z,HeroBar:j.Z,TitleBar:F.Z,CardComponent:P.Z,JbButtons:z.Z,JbButton:Y.Z,Notification:q.Z,Divider:R.Z,ModalBox:G.Z,TitledSection:L.Z,CheckRadioPicker:E.Z,Field:$.Z,BottomOtherPagesSection:J.Z},setup:function(){var t=(0,A.iH)(["Admin","UI Components"]),n=(0,A.iH)(!1),l=(0,A.iH)(!1),e=(0,A.iH)(!1),o=(0,A.iH)([]),i=(0,A.Fl)((function(){return o.value.indexOf("outline")>-1})),u=(0,A.iH)([]),a=(0,A.Fl)((function(){return u.value.indexOf("outline")>-1})),r=(0,A.Fl)((function(){return u.value.indexOf("small")>-1})),c=(0,D.oR)(),s=function(){c.dispatch("darkMode")};return{titleStack:t,modalOneActive:n,modalTwoActive:l,modalThreeActive:e,notificationSettingsModel:o,notificationsOutline:i,buttonSettingsModel:u,buttonsOutline:a,buttonsSmall:r,darkModeToggle:s,mdiMonitorCellphone:M.qOQ,mdiSelectColor:M.ghH,mdiFeather:M.zuO,mdiInformationOutline:M.EaN,mdiCheckCircleOutline:M.k6A,mdiAlertCircle:M.fr4,mdiAlertCircleOutline:M._gM,mdiOpenInNew:M.fOx,mdiReload:M.vS,mdiPlusCircle:M.kQ,mdiBroadcast:M.O9b,mdiLifebuoy:M.azf,mdiClose:M.r5M}}},X=l(3744);const tt=(0,X.Z)(Q,[["render",V]]);var nt=tt}}]);
//# sourceMappingURL=ui-legacy.6dc7a4ed.js.map