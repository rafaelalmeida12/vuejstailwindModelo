"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[790],{1915:function(e,t,n){n.d(t,{Z:function(){return W}});var l=n(6252),o=n(3577),a={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},u=(0,l._)("span",{class:"md:mr-3"},"Please star this project on",-1),r={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},i=(0,l._)("span",null,"GitHub",-1),m={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},s=(0,l.Uk)(" Check out other components and layouts at"),c=(0,l._)("br",null,null,-1),d=(0,l.Uk)(", "),p=(0,l._)("br",null,null,-1),f=(0,l.Uk)(" screen samples "),b=(0,l._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,l.Uk)(" Get more with "),(0,l._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard",target:"_blank",class:"text-blue-500"},"Premium version")],-1);function h(e,t,n,h,w,y){var g=(0,l.up)("icon"),k=(0,l.up)("router-link"),x=(0,l.up)("titled-section");return(0,l.wg)(),(0,l.j4)(x,{last:""},{default:(0,l.w5)((function(){return[(0,l._)("h1",a,[u,(0,l._)("a",r,[(0,l.Wm)(g,{path:h.mdiGithub,size:"36",class:"mr-1"},null,8,["path"]),i])]),(0,l._)("h1",m,[s,c,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.screens,(function(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,{key:e.path},[(0,l.Wm)(k,{to:e.path,class:"text-blue-500"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,o.zw)(e.title),1)]})),_:2},1032,["to"]),t+1<h.screens.length?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[d],64)):(0,l.kq)("",!0)],64)})),128)),p,f]),b]})),_:1})}var w=n(2119),y=n(5317),g=n(4453),k=n(2209),x={name:"BottomOtherPagesSection",components:{TitledSection:g.Z,Icon:k.Z},setup:function(){var e=(0,w.tv)(),t=e.getRoutes(),n=[];for(var l in t){var o=t[l].path,a=t[l].meta&&t[l].meta.title?t[l].meta.title:null;a&&n.push({path:o,title:a})}return{screens:n,mdiGithub:y.LcO}}},v=n(3744);const _=(0,v.Z)(x,[["render",h]]);var W=_},9830:function(e,t,n){n.d(t,{Z:function(){return f}});n(8309);var l=n(6252),o=n(3577),a=n(9963),u=["type","name","value"],r=(0,l._)("span",{class:"check"},null,-1),i={class:"control-label"};function m(e,t,n,m,s,c){return(0,l.wg)(),(0,l.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":n.column}])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.options,(function(e,s){return(0,l.wg)(),(0,l.iD)("label",{key:s,class:(0,o.C_)([n.type,"mr-6 mb-3 last:mr-0"])},[(0,l.wy)((0,l._)("input",{type:m.inputType,name:n.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.computedValue=e}),value:s},null,8,u),[[a.YZ,m.computedValue]]),r,(0,l._)("span",i,(0,o.zw)(e),1)],2)})),128))],2)}n(9653);var s=n(2262),c={name:"CheckRadioPicker",props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,l=(0,s.Fl)({get:function(){return e.modelValue},set:function(e){n("update:modelValue",e)}}),o=(0,s.Fl)((function(){return"radio"===e.type?"radio":"checkbox"}));return{computedValue:l,inputType:o}}},d=n(3744);const p=(0,d.Z)(c,[["render",m]]);var f=p},338:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(6252),o=n(3577),a={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},r={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};function i(e,t,n,i,m,s){return(0,l.wg)(),(0,l.iD)("div",a,[n.label?((0,l.wg)(),(0,l.iD)("label",u,(0,o.zw)(n.label),1)):(0,l.kq)("",!0),(0,l._)("div",{class:(0,o.C_)(i.wrapperClass)},[(0,l.WI)(e.$slots,"default")],2),n.help?((0,l.wg)(),(0,l.iD)("div",r,(0,o.zw)(n.help),1)):(0,l.kq)("",!0)])}var m=n(2262),s={name:"Field",props:{label:String,help:String},setup:function(e,t){var n=t.slots,l=(0,m.Fl)((function(){var e=[],t=n.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return{wrapperClass:l}}},c=n(3744);const d=(0,c.Z)(s,[["render",i]]);var p=d},7918:function(e,t,n){n.d(t,{Z:function(){return w}});n(8309);var l=n(6252),o=n(3577),a={class:"flex items-stretch justify-start relative"},u={class:"inline-flex"},r=["accept"],i={key:0},m={class:"inline-flex px-4 py-2 justify-center bg-gray-100 border-gray-200 border rounded-r"};function s(e,t,n,s,c,d){var p=(0,l.up)("jb-button");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("label",u,[(0,l.Wm)(p,{as:"a",label:"Upload",icon:s.mdiUpload,color:"info",class:(0,o.C_)({"rounded-r-none":s.file})},null,8,["icon","class"]),(0,l._)("input",{type:"file",ref:"input",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:n.accept,onInput:t[0]||(t[0]=function(){return d.upload&&d.upload.apply(d,arguments)})},null,40,r)]),s.file?((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("span",m,(0,o.zw)(s.file.name),1)])):(0,l.kq)("",!0)])}var c=n(2262),d=n(5317),p=n(5507),f={name:"FilePicker",components:{JbButton:p.Z},props:{modelValue:[Object,File,Array],label:String,icon:String,accept:{type:String,default:null}},emits:["update:modelValue"],setup:function(e){var t=(0,c.iH)(e.modelValue);return{file:t,mdiUpload:d.xyB}},methods:{upload:function(e){var t=e.target.files||e.dataTransfer.files;this.file=t[0],this.$emit("update:modelValue",this.file)}},watch:{modelValue:function(e){this.file=e,e||(this.$refs.input.value=null)}}},b=n(3744);const h=(0,b.Z)(f,[["render",s]]);var w=h},4453:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(6252),o=n(3577),a={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};function u(e,t,n,u,r,i){return(0,l.wg)(),(0,l.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":n.first,"-mt-6":n.last,"-my-6":!n.first&&!n.last}])},[n.custom?(0,l.WI)(e.$slots,"default",{key:0}):((0,l.wg)(),(0,l.iD)("h1",a,[(0,l.WI)(e.$slots,"default")]))],2)}var r={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},i=n(3744);const m=(0,i.Z)(r,[["render",u]]);var s=m},4275:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});n(8309);var l=n(6252),o=n(9963),a=(0,l.Uk)("Forms"),u=(0,l.Uk)(" Custom elements ");function r(e,t,n,r,i,m){var s=(0,l.up)("title-bar"),c=(0,l.up)("hero-bar"),d=(0,l.up)("title-sub-bar"),p=(0,l.up)("control"),f=(0,l.up)("field"),b=(0,l.up)("divider"),h=(0,l.up)("jb-button"),w=(0,l.up)("jb-buttons"),y=(0,l.up)("card-component"),g=(0,l.up)("main-section"),k=(0,l.up)("titled-section"),x=(0,l.up)("check-radio-picker"),v=(0,l.up)("file-picker"),_=(0,l.up)("bottom-other-pages-section");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s,{"title-stack":r.titleStack},null,8,["title-stack"]),(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[a]})),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{icon:r.mdiBallotOutline,title:"Forms example"},null,8,["icon"]),(0,l.Wm)(y,{title:"Forms",icon:r.mdiBallot,onSubmit:(0,o.iM)(r.submit,["prevent"]),form:""},{default:(0,l.w5)((function(){return[(0,l.Wm)(f,{label:"Grouped with icons"},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{icon:r.mdiAccount,modelValue:r.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.name=e})},null,8,["icon","modelValue"]),(0,l.Wm)(p,{type:"email",icon:r.mdiMail,modelValue:r.form.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.email=e})},null,8,["icon","modelValue"])]})),_:1}),(0,l.Wm)(f,{label:"With help line",help:"Do not enter the leading zero"},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{type:"tel",placeholder:"Your phone number",modelValue:r.form.phone,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.form.phone=e})},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(f,{label:"Dropdown"},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{options:r.selectOptions,modelValue:r.form.department,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.form.department=e})},null,8,["options","modelValue"])]})),_:1}),(0,l.Wm)(b),(0,l.Wm)(f,{label:"Question",help:"Your question. Max 255 characters"},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{type:"textarea",placeholder:"Explain how we can help you"})]})),_:1}),(0,l.Wm)(b),(0,l.Wm)(w,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(h,{type:"submit",color:"info",label:"Submit"}),(0,l.Wm)(h,{type:"reset",color:"info",outline:"",label:"Reset"})]})),_:1})]})),_:1},8,["icon","onSubmit"])]})),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((function(){return[u]})),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(y,{title:"Custom elements",icon:r.mdiBallotOutline},{default:(0,l.w5)((function(){return[(0,l.Wm)(f,{label:"Checkbox","wrap-body":""},{default:(0,l.w5)((function(){return[(0,l.Wm)(x,{name:"sample-checkbox",modelValue:r.customElementsForm.checkbox,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.customElementsForm.checkbox=e}),options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(b),(0,l.Wm)(f,{label:"Radio","wrap-body":""},{default:(0,l.w5)((function(){return[(0,l.Wm)(x,{name:"sample-radio",type:"radio",modelValue:r.customElementsForm.radio,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.customElementsForm.radio=e}),options:{one:"One",two:"Two"}},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(b),(0,l.Wm)(f,{label:"Switch"},{default:(0,l.w5)((function(){return[(0,l.Wm)(x,{name:"sample-switch",type:"switch",modelValue:r.customElementsForm.switch,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.customElementsForm.switch=e}),options:{one:"One",two:"Two"}},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(b),(0,l.Wm)(v,{modelValue:r.customElementsForm.file,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.customElementsForm.file=e})},null,8,["modelValue"])]})),_:1},8,["icon"])]})),_:1}),(0,l.Wm)(_)],64)}var i=n(2262),m=n(5317),s=n(179),c=n(6183),d=n(7250),p=n(9830),f=n(7918),b=n(3003),h=n(338),w=n(9714),y=n(4312),g=n(5507),k=n(9275),x=n(1915),v=n(4453),_=n(5847),W={name:"Forms",components:{TitleSubBar:_.Z,TitledSection:v.Z,Divider:y.Z,MainSection:s.Z,HeroBar:b.Z,FilePicker:f.Z,CheckRadioPicker:p.Z,CardComponent:d.Z,TitleBar:c.Z,Field:h.Z,Control:w.Z,JbButton:g.Z,JbButtons:k.Z,BottomOtherPagesSection:x.Z},setup:function(){var e=(0,i.iH)(["Admin","Forms"]),t=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],n=(0,i.qj)({name:"John Doe",email:"john.doe@example.com",phone:"",department:t[0],subject:"",question:""}),l=(0,i.qj)({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),o=function(){};return{titleStack:e,selectOptions:t,form:n,customElementsForm:l,submit:o,mdiBallot:m.hjO,mdiBallotOutline:m.fmz,mdiAccount:m.rI3,mdiMail:m.xaU,mdiCheck:m.oL1}}},V=n(3744);const Z=(0,V.Z)(W,[["render",r]]);var F=Z}}]);
//# sourceMappingURL=forms-legacy.13f6e3f5.js.map