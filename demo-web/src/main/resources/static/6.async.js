(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"i/nS":function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("MVZn")),c=n(t("o0o1")),s=t("dCQc"),u={namespace:"job",state:{data:{list:[],pagination:{}}},effects:{fetch:c.default.mark(function e(a,t){var n,r,u,l;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,u=t.put,e.next=4,r(s.queryJob,n);case 4:return l=e.sent,e.next=7,u({type:"save",payload:l});case 7:case"end":return e.stop()}},e,this)}),add:c.default.mark(function e(a,t){var n,r,u,l,o;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,u=t.call,l=t.put,e.next=4,u(s.addJob,n);case 4:return o=e.sent,e.next=7,l({type:"save",payload:o});case 7:r&&r();case 8:case"end":return e.stop()}},e,this)}),remove:c.default.mark(function e(a,t){var n,r,u,l,o;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,u=t.call,l=t.put,e.next=4,u(s.removeJob,n);case 4:return o=e.sent,e.next=7,l({type:"save",payload:o});case 7:r&&r();case 8:case"end":return e.stop()}},e,this)}),update:c.default.mark(function e(a,t){var n,r,u,l,o;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,u=t.call,l=t.put,e.next=4,u(s.updateJob,n);case 4:return o=e.sent,e.next=7,l({type:"save",payload:o});case 7:r&&r();case 8:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){return(0,r.default)({},e,{data:a.payload})}}};a.default=u}}]);