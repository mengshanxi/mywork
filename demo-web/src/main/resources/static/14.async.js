(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"5WY0":function(e,t,a){e.exports={main:"antd-pro\\pages\\-user\\-register-main",getCaptcha:"antd-pro\\pages\\-user\\-register-getCaptcha",submit:"antd-pro\\pages\\-user\\-register-submit",login:"antd-pro\\pages\\-user\\-register-login",error:"antd-pro\\pages\\-user\\-register-error",success:"antd-pro\\pages\\-user\\-register-success",warning:"antd-pro\\pages\\-user\\-register-warning","progress-pass":"antd-pro\\pages\\-user\\-register-progress-pass",progress:"antd-pro\\pages\\-user\\-register-progress"}},cq3J:function(e,t,a){"use strict";var r=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var s=r(a("BMrR"));a("+L6B");var n=r(a("2/Rp"));a("jCWc");var u=r(a("kPKH"));a("Q9mQ");var i=r(a("diRs"));a("MXD1");var o=r(a("CFYs")),d=r(a("MVZn")),c=r(a("lwsE")),f=r(a("W8MJ")),p=r(a("a1gu")),m=r(a("Nsbk")),g=r(a("7W2i"));a("5NDa");var h=r(a("5rEg"));a("OaEy");var v=r(a("2fM7"));a("y8nQ");var E,w,y,b=r(a("Vl3Y")),k=l(a("q1tI")),P=a("MuoO"),S=r(a("mOP9")),C=r(a("usdK")),N=r(a("5WY0")),x=b.default.Item,D=v.default.Option,z=h.default.Group,F={ok:k.default.createElement("div",{className:N.default.success},"\u5f3a\u5ea6\uff1a\u5f3a"),pass:k.default.createElement("div",{className:N.default.warning},"\u5f3a\u5ea6\uff1a\u4e2d"),poor:k.default.createElement("div",{className:N.default.error},"\u5f3a\u5ea6\uff1a\u592a\u77ed")},q={ok:"success",pass:"normal",poor:"exception"},M=(E=(0,P.connect)(function(e){var t=e.register,a=e.loading;return{register:t,submitting:a.effects["register/submit"]}}),w=b.default.create(),E(y=w(y=function(e){function t(){var e,a;(0,c.default)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return a=(0,p.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(l))),a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},a.onGetCaptcha=function(){var e=59;a.setState({count:e}),a.interval=setInterval(function(){e-=1,a.setState({count:e}),0===e&&clearInterval(a.interval)},1e3)},a.getPasswordStatus=function(){var e=a.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.form,l=t.dispatch;r.validateFields({force:!0},function(e,t){if(!e){var r=a.state.prefix;l({type:"register/submit",payload:(0,d.default)({},t,{prefix:r})})}})},a.handleConfirmBlur=function(e){var t=e.target.value,r=a.state.confirmDirty;a.setState({confirmDirty:r||!!t})},a.checkConfirm=function(e,t,r){var l=a.props.form;t&&t!==l.getFieldValue("password")?r("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u5339\u914d!"):r()},a.checkPassword=function(e,t,r){var l=a.state,s=l.visible,n=l.confirmDirty;if(t)if(a.setState({help:""}),s||a.setState({visible:!!t}),t.length<6)r("error");else{var u=a.props.form;t&&n&&u.validateFields(["confirm"],{force:!0}),r()}else a.setState({help:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01",visible:!!t}),r("error")},a.changePrefix=function(e){a.setState({prefix:e})},a.renderPasswordProgress=function(){var e=a.props.form,t=e.getFieldValue("password"),r=a.getPasswordStatus();return t&&t.length?k.default.createElement("div",{className:N.default["progress-".concat(r)]},k.default.createElement(o.default,{status:q[r],className:N.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,a=e.register,r=t.getFieldValue("mail");"ok"===a.status&&C.default.push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,l=this.state,o=l.count,d=l.prefix,c=l.help,f=l.visible;return k.default.createElement("div",{className:N.default.main},k.default.createElement("h3",null,"\u6ce8\u518c"),k.default.createElement(b.default,{onSubmit:this.handleSubmit},k.default.createElement(x,null,r("mail",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740\uff01"},{type:"email",message:"\u90ae\u7bb1\u5730\u5740\u683c\u5f0f\u9519\u8bef\uff01"}]})(k.default.createElement(h.default,{size:"large",placeholder:"\u90ae\u7bb1"}))),k.default.createElement(x,{help:c},k.default.createElement(i.default,{content:k.default.createElement("div",{style:{padding:"4px 0"}},F[this.getPasswordStatus()],this.renderPasswordProgress(),k.default.createElement("div",{style:{marginTop:10}},"\u8bf7\u81f3\u5c11\u8f93\u5165 6 \u4e2a\u5b57\u7b26\u3002\u8bf7\u4e0d\u8981\u4f7f\u7528\u5bb9\u6613\u88ab\u731c\u5230\u7684\u5bc6\u7801\u3002")),overlayStyle:{width:240},placement:"right",visible:f},r("password",{rules:[{validator:this.checkPassword}]})(k.default.createElement(h.default,{size:"large",type:"password",placeholder:"\u81f3\u5c116\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199"})))),k.default.createElement(x,null,r("confirm",{rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801\uff01"},{validator:this.checkConfirm}]})(k.default.createElement(h.default,{size:"large",type:"password",placeholder:"\u786e\u8ba4\u5bc6\u7801"}))),k.default.createElement(x,null,k.default.createElement(z,{compact:!0},k.default.createElement(v.default,{size:"large",value:d,onChange:this.changePrefix,style:{width:"20%"}},k.default.createElement(D,{value:"86"},"+86"),k.default.createElement(D,{value:"87"},"+87")),r("mobile",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]})(k.default.createElement(h.default,{size:"large",style:{width:"80%"},placeholder:"11\u4f4d\u624b\u673a\u53f7"})))),k.default.createElement(x,null,k.default.createElement(s.default,{gutter:8},k.default.createElement(u.default,{span:16},r("captcha",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})(k.default.createElement(h.default,{size:"large",placeholder:"\u9a8c\u8bc1\u7801"}))),k.default.createElement(u.default,{span:8},k.default.createElement(n.default,{size:"large",disabled:o,className:N.default.getCaptcha,onClick:this.onGetCaptcha},o?"".concat(o," s"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))),k.default.createElement(x,null,k.default.createElement(n.default,{size:"large",loading:a,className:N.default.submit,type:"primary",htmlType:"submit"},"\u6ce8\u518c"),k.default.createElement(S.default,{className:N.default.login,to:"/User/Login"},"\u4f7f\u7528\u5df2\u6709\u8d26\u6237\u767b\u5f55"))))}}]),t}(k.Component))||y)||y),W=M;t.default=W}}]);