module.exports=[30557,a=>{"use strict";let b,c;var d,e=a.i(68361),f=a.i(54590),g=a.i(46221),h=a.i(71509),i=a.i(75055),j=a.i(39646),k=a.i(72063),l=a.i(43313),m=a.i(9947),n=a.i(37754),o=a.i(11088),p=a.i(22181),q=a.i(62404),r=a.i(88623),s=a.i(64213),t=a.i(65707),u=a.i(30512),v=a.i(64109);let w={data:""},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,A=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?A(g,f):f+"{"+A(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=A(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=A.p?A.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},B={},C=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+C(a[c]);return b}return a};function D(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=C(a),h=B[g]||(B[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!B[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=x.exec(a.replace(y,""));)b[4]?d.shift():b[3]?(c=b[3].replace(z," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(z," ").trim();return d[0]})(a);B[h]=A(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&B.g?B.g:null;return c&&(B.g=B[h]),f=B[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":A(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||w,d.g,d.o,d.k)}D.bind({g:1});let E,F,G,H=D.bind({k:1});function I(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:F&&F()},h),c.o=/ *go\d+/.test(i),h.className=D.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),G&&j[0]&&G(h),E(j,h)}return b?b(e):e}}var J=(a,b)=>"function"==typeof a?a(b):a,K=(b=0,()=>(++b).toString()),L="default",M=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return M(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},N=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},P={},Q=(a,b=L)=>{P[b]=M(P[b]||O,a),N.forEach(([a,c])=>{a===b&&c(P[b])})},R=a=>Object.keys(P).forEach(b=>Q(a,b)),S=(a=L)=>b=>{Q(b,a)},T=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||K()}))(b,a,c);return S(e.toasterId||(d=e.id,Object.keys(P).find(a=>P[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},U=(a,b)=>T("blank")(a,b);U.error=T("error"),U.success=T("success"),U.loading=T("loading"),U.custom=T("custom"),U.dismiss=(a,b)=>{let c={type:3,toastId:a};b?S(b)(c):R(c)},U.dismissAll=a=>U.dismiss(void 0,a),U.remove=(a,b)=>{let c={type:4,toastId:a};b?S(b)(c):R(c)},U.removeAll=a=>U.remove(void 0,a),U.promise=(a,b,c)=>{let d=U.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?J(b.success,a):void 0;return e?U.success(e,{id:d,...c,...null==c?void 0:c.success}):U.dismiss(d),a}).catch(a=>{let e=b.error?J(b.error,a):void 0;e?U.error(e,{id:d,...c,...null==c?void 0:c.error}):U.dismiss(d)}),a};var V=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,W=H`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=H`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=I("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${X} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Z=H`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$=I("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${Z} 1s linear infinite;
`,_=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,aa=H`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ab=I("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${aa} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ac=I("div")`
  position: absolute;
`,ad=I("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ae=H`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,af=I("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ae} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ag=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(af,null,b):b:"blank"===c?null:f.createElement(ad,null,f.createElement($,{...d}),"loading"!==c&&f.createElement(ac,null,"error"===c?f.createElement(Y,{...d}):f.createElement(ab,{...d})))},ah=I("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ai=I("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${H(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${H(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement(ag,{toast:a}),i=f.createElement(ai,{...a.ariaProps},J(a.message,a));return f.createElement(ah,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))}),d=f.createElement,A.p=void 0,E=d,F=void 0,G=void 0,D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var aj=a.i(45846);function ak(){let[a,b]=(0,f.useState)([]),[c,d]=(0,f.useState)([]),[w,x]=(0,f.useState)(!0),[y,z]=(0,f.useState)(!1),[A,B]=(0,f.useState)(null),[C,D]=(0,f.useState)({name:"",base_url:"",webhook_url:"",api_key:"",secret_key:"",is_active:!0});(0,f.useEffect)(()=>{E()},[]);let E=async()=>{try{let[a,c]=await Promise.all([g.default.get("/admin/api-providers"),g.default.get("/admin/api-logs")]);b(a.data),d(c.data.data)}catch(a){a.response?.status===403?U.error("Access Denied: You do not have permission to view API logs."):(console.error(a),U.error("Failed to load API data"))}finally{x(!1)}},F=async a=>{a.preventDefault();try{A?(await g.default.put(`/admin/api-providers/${A.id}`,C),U.success("Provider updated")):(await g.default.post("/admin/api-providers",C),U.success("Provider created")),z(!1),B(null),D({name:"",base_url:"",webhook_url:"",api_key:"",secret_key:"",is_active:!0}),E()}catch(a){U.error("Operation failed")}},G=async a=>{if(confirm("Are you sure? This will delete all logs associated with this provider."))try{await g.default.delete(`/admin/api-providers/${a}`),U.success("Provider deleted"),E()}catch(a){U.error("Failed to delete")}};return(0,e.jsxs)("div",{className:"space-y-6",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100",children:"API Management"}),(0,e.jsx)("p",{className:"text-muted-foreground",children:"Manage third-party API connections and view integration logs."})]}),(0,e.jsxs)(l.Tabs,{defaultValue:"providers",className:"space-y-4",children:[(0,e.jsxs)(l.TabsList,{children:[(0,e.jsxs)(l.TabsTrigger,{value:"providers",className:"flex items-center gap-2",children:[(0,e.jsx)(u.Server,{className:"w-4 h-4"})," Providers"]}),(0,e.jsxs)(l.TabsTrigger,{value:"logs",className:"flex items-center gap-2",children:[(0,e.jsx)(v.Activity,{className:"w-4 h-4"})," Error Logs"]})]}),(0,e.jsx)(l.TabsContent,{value:"providers",children:(0,e.jsxs)(k.Card,{children:[(0,e.jsxs)(k.CardHeader,{className:"flex flex-row items-center justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(k.CardTitle,{children:"API Providers"}),(0,e.jsx)(k.CardDescription,{children:"Configure external services (e.g., Payment Gateways, SMS)."})]}),(0,e.jsxs)(m.Dialog,{open:y,onOpenChange:z,children:[(0,e.jsx)(m.DialogTrigger,{asChild:!0,children:(0,e.jsxs)(h.Button,{onClick:()=>{B(null),D({name:"",base_url:"",webhook_url:"",api_key:"",secret_key:"",is_active:!0})},children:[(0,e.jsx)(t.Plus,{className:"w-4 h-4 mr-2"})," Add Provider"]})}),(0,e.jsxs)(m.DialogContent,{children:[(0,e.jsx)(m.DialogHeader,{children:(0,e.jsx)(m.DialogTitle,{children:A?"Edit Provider":"New API Provider"})}),(0,e.jsxs)("form",{onSubmit:F,className:"space-y-4 py-4",children:[(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)(n.Label,{children:"Provider Name"}),(0,e.jsx)(i.Input,{value:C.name,onChange:a=>D({...C,name:a.target.value}),placeholder:"e.g. Paystack",required:!0})]}),(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)(n.Label,{children:"Base URL"}),(0,e.jsx)(i.Input,{value:C.base_url,onChange:a=>D({...C,base_url:a.target.value}),placeholder:"https://api.example.com",required:!0})]}),(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)(n.Label,{children:"Webhook URL (Optional)"}),(0,e.jsx)(i.Input,{value:C.webhook_url,onChange:a=>D({...C,webhook_url:a.target.value}),placeholder:"https://your-site.com/api/webhook"})]}),(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)(n.Label,{children:"API Key"}),(0,e.jsx)(j.PasswordInput,{value:C.api_key,onChange:a=>D({...C,api_key:a.target.value})})]}),(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)(n.Label,{children:"Secret Key"}),(0,e.jsx)(j.PasswordInput,{value:C.secret_key,onChange:a=>D({...C,secret_key:a.target.value})})]}),(0,e.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,e.jsx)(q.Switch,{checked:C.is_active,onCheckedChange:a=>D({...C,is_active:a})}),(0,e.jsx)(n.Label,{children:"Active Status"})]}),(0,e.jsx)(m.DialogFooter,{children:(0,e.jsx)(h.Button,{type:"submit",children:A?"Update":"create"})})]})]})]})]}),(0,e.jsx)(k.CardContent,{children:(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)(o.Table,{children:[(0,e.jsx)(o.TableHeader,{children:(0,e.jsxs)(o.TableRow,{children:[(0,e.jsx)(o.TableHead,{children:"Name"}),(0,e.jsx)(o.TableHead,{children:"Base URL"}),(0,e.jsx)(o.TableHead,{children:"Status"}),(0,e.jsx)(o.TableHead,{className:"text-right",children:"Actions"})]})}),(0,e.jsx)(o.TableBody,{children:w?(0,e.jsx)(o.TableRow,{children:(0,e.jsx)(o.TableCell,{colSpan:4,className:"p-0",children:(0,e.jsx)(aj.TableSkeleton,{columns:4,rows:5})})}):0===a.length?(0,e.jsx)(o.TableRow,{children:(0,e.jsx)(o.TableCell,{colSpan:4,className:"text-center text-muted-foreground",children:"No providers configured."})}):a.map(a=>(0,e.jsxs)(o.TableRow,{children:[(0,e.jsx)(o.TableCell,{className:"font-medium",children:a.name}),(0,e.jsx)(o.TableCell,{className:"text-muted-foreground text-xs",children:a.base_url}),(0,e.jsx)(o.TableCell,{children:(0,e.jsx)(p.Badge,{variant:a.is_active?"default":"secondary",children:a.is_active?"Active":"Inactive"})}),(0,e.jsxs)(o.TableCell,{className:"text-right space-x-2",children:[(0,e.jsx)(h.Button,{variant:"ghost",size:"icon",onClick:()=>{B(a),D({name:a.name,base_url:a.base_url,webhook_url:a.webhook_url||"",api_key:a.api_key||"",secret_key:a.secret_key||"",is_active:!!a.is_active}),z(!0)},children:(0,e.jsx)(s.Edit,{className:"w-4 h-4"})}),(0,e.jsx)(h.Button,{variant:"ghost",size:"icon",className:"text-red-500 hover:text-red-600",onClick:()=>G(a.id),children:(0,e.jsx)(r.Trash2,{className:"w-4 h-4"})})]})]},a.id))})]})})})]})}),(0,e.jsx)(l.TabsContent,{value:"logs",children:(0,e.jsxs)(k.Card,{children:[(0,e.jsxs)(k.CardHeader,{children:[(0,e.jsx)(k.CardTitle,{children:"System Logs"}),(0,e.jsx)(k.CardDescription,{children:"Recent API failures and integration errors."})]}),(0,e.jsx)(k.CardContent,{children:(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)(o.Table,{children:[(0,e.jsx)(o.TableHeader,{children:(0,e.jsxs)(o.TableRow,{children:[(0,e.jsx)(o.TableHead,{children:"Time"}),(0,e.jsx)(o.TableHead,{children:"Provider"}),(0,e.jsx)(o.TableHead,{children:"Endpoint"}),(0,e.jsx)(o.TableHead,{children:"Status"}),(0,e.jsx)(o.TableHead,{children:"Message"})]})}),(0,e.jsx)(o.TableBody,{children:w?(0,e.jsx)(o.TableRow,{children:(0,e.jsx)(o.TableCell,{colSpan:5,className:"p-0",children:(0,e.jsx)(aj.TableSkeleton,{columns:5,rows:5})})}):0===c.length?(0,e.jsx)(o.TableRow,{children:(0,e.jsx)(o.TableCell,{colSpan:5,className:"text-center text-muted-foreground",children:"No logs found."})}):c.map(a=>(0,e.jsxs)(o.TableRow,{children:[(0,e.jsx)(o.TableCell,{className:"text-xs text-muted-foreground",children:new Date(a.created_at).toLocaleString()}),(0,e.jsx)(o.TableCell,{children:a.provider?.name||"Unknown"}),(0,e.jsxs)(o.TableCell,{className:"font-mono text-xs",children:[(0,e.jsx)("span",{className:"font-bold",children:a.method})," ",a.endpoint]}),(0,e.jsx)(o.TableCell,{children:(0,e.jsx)(p.Badge,{variant:a.status_code>=400?"destructive":"outline",children:a.status_code})}),(0,e.jsx)(o.TableCell,{className:"text-xs max-w-xs truncate",title:a.error_message||a.response,children:a.error_message||a.response||"No details"})]},a.id))})]})})})]})})]})]})}a.s(["default",()=>ak],30557)}];

//# sourceMappingURL=Desktop_Projects_Megaai_frontend_src_app_admin_api-management_page_tsx_224e8727._.js.map