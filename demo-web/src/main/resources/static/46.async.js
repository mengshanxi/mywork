(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{VGLV:function(e,t,a){e.exports={row:"antd-pro\\pages\\-account\\-settings\\-geographic-view-row",item:"antd-pro\\pages\\-account\\-settings\\-geographic-view-item"}},dzOB:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var s=n(a("5rEg")),i=n(a("lwsE")),l=n(a("W8MJ")),u=n(a("a1gu")),o=n(a("Nsbk")),c=n(a("7W2i"));a("DZo9");var d=n(a("8z0m"));a("+L6B");var p=n(a("2/Rp"));a("OaEy");var f=n(a("2fM7"));a("y8nQ");var g,m,v,h=n(a("Vl3Y")),y=r(a("q1tI")),b=a("LLXN"),E=a("MuoO"),w=n(a("gJV7")),M=n(a("uYNw")),k=n(a("w4Dz")),N=h.default.Item,O=f.default.Option,_=function(e){var t=e.avatar;return y.default.createElement(y.Fragment,null,y.default.createElement("div",{className:w.default.avatar_title},"Avatar"),y.default.createElement("div",{className:w.default.avatar},y.default.createElement("img",{src:t,alt:"avatar"})),y.default.createElement(d.default,{fileList:[]},y.default.createElement("div",{className:w.default.button_view},y.default.createElement(p.default,{icon:"upload"},y.default.createElement(b.FormattedMessage,{id:"app.settings.basic.avatar",defaultMessage:"Change avatar"})))))},C=function(e,t,a){var n=t.province,r=t.city;n.key||a("Please input your province!"),r.key||a("Please input your city!"),a()},V=function(e,t,a){var n=t.split("-");n[0]||a("Please input your area code!"),n[1]||a("Please input your phone number!"),a()},q=(g=(0,E.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}}),m=h.default.create(),g(v=m(v=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=(0,u.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(r))),a.setBaseInfo=function(){var e=a.props,t=e.currentUser,n=e.form;Object.keys(n.getFieldsValue()).forEach(function(e){var a={};a[e]=t[e]||null,n.setFieldsValue(a)})},a.getViewDom=function(e){a.view=e},a}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return t}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return y.default.createElement("div",{className:w.default.baseView,ref:this.getViewDom},y.default.createElement("div",{className:w.default.left},y.default.createElement(h.default,{layout:"vertical",onSubmit:this.handleSubmit,hideRequiredMark:!0},y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.email"})},e("email",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.email-message"},{})}]})(y.default.createElement(s.default,null))),y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.nickname"})},e("name",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.nickname-message"},{})}]})(y.default.createElement(s.default,null))),y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.profile"})},e("profile",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.profile-message"},{})}]})(y.default.createElement(s.default.TextArea,{placeholder:(0,b.formatMessage)({id:"app.settings.basic.profile-placeholder"}),rows:4}))),y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.country"})},e("country",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.country-message"},{})}]})(y.default.createElement(f.default,{style:{maxWidth:220}},y.default.createElement(O,{value:"China"},"\u4e2d\u56fd")))),y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.geographic"})},e("geographic",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.geographic-message"},{})},{validator:C}]})(y.default.createElement(M.default,null))),y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.address"})},e("address",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.address-message"},{})}]})(y.default.createElement(s.default,null))),y.default.createElement(N,{label:(0,b.formatMessage)({id:"app.settings.basic.phone"})},e("phone",{rules:[{required:!0,message:(0,b.formatMessage)({id:"app.settings.basic.phone-message"},{})},{validator:V}]})(y.default.createElement(k.default,null))),y.default.createElement(p.default,{type:"primary"},y.default.createElement(b.FormattedMessage,{id:"app.settings.basic.update",defaultMessage:"Update Information"})))),y.default.createElement("div",{className:w.default.right},y.default.createElement(_,{avatar:this.getAvatarURL()})))}}]),t}(y.Component))||v)||v),P=q;t.default=P},gJV7:function(e,t,a){e.exports={baseView:"antd-pro\\pages\\-account\\-settings\\-base-view-baseView",left:"antd-pro\\pages\\-account\\-settings\\-base-view-left",right:"antd-pro\\pages\\-account\\-settings\\-base-view-right",avatar_title:"antd-pro\\pages\\-account\\-settings\\-base-view-avatar_title",avatar:"antd-pro\\pages\\-account\\-settings\\-base-view-avatar",button_view:"antd-pro\\pages\\-account\\-settings\\-base-view-button_view"}},uYNw:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var s=n(a("W9HT")),i=n(a("lwsE")),l=n(a("W8MJ")),u=n(a("a1gu")),o=n(a("Nsbk")),c=n(a("7W2i"));a("OaEy");var d,p,f=n(a("2fM7")),g=r(a("q1tI")),m=a("MuoO"),v=n(a("VGLV")),h=f.default.Option,y={label:"",key:""},b=(d=(0,m.connect)(function(e){var t=e.geographic,a=t.province,n=t.isLoading,r=t.city;return{province:a,city:r,isLoading:n}}),d(p=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=(0,u.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(r))),a.componentDidMount=function(){var e=a.props.dispatch;e({type:"geographic/fetchProvince"})},a.getCityOption=function(){var e=a.props.city;return a.getOption(e)},a.getOption=function(e){return!e||e.length<1?g.default.createElement(h,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map(function(e){return g.default.createElement(h,{key:e.id,value:e.id},e.name)})},a.selectProvinceItem=function(e){var t=a.props,n=t.dispatch,r=t.onChange;n({type:"geographic/fetchCity",payload:e.key}),r({province:e,city:y})},a.selectCityItem=function(e){var t=a.props,n=t.value,r=t.onChange;r({province:n.province,city:e})},a}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,n=t.value;!e.value&&n&&n.province&&a({type:"geographic/fetchCity",payload:n.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return this.getOption(e)}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:y,city:y};var t=e.province,a=e.city;return{province:t||y,city:a||y}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,n=this.props.isLoading;return g.default.createElement(s.default,{spinning:n,wrapperClassName:v.default.row},g.default.createElement(f.default,{className:v.default.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),g.default.createElement(f.default,{className:v.default.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),t}(g.PureComponent))||p),E=b;t.default=E},uy6Z:function(e,t,a){e.exports={area_code:"antd-pro\\pages\\-account\\-settings\\-phone-view-area_code",phone_number:"antd-pro\\pages\\-account\\-settings\\-phone-view-phone_number"}},w4Dz:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var s=r(a("5rEg")),i=r(a("lwsE")),l=r(a("W8MJ")),u=r(a("a1gu")),o=r(a("Nsbk")),c=r(a("7W2i")),d=n(a("q1tI")),p=r(a("uy6Z")),f=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange,n=["",""];return t&&(n=t.split("-")),d.default.createElement(d.Fragment,null,d.default.createElement(s.default,{className:p.default.area_code,value:n[0],onChange:function(e){a("".concat(e.target.value,"-").concat(n[1]))}}),d.default.createElement(s.default,{className:p.default.phone_number,onChange:function(e){a("".concat(n[0],"-").concat(e.target.value))},value:n[1]}))}}]),t}(d.PureComponent),g=f;t.default=g}}]);