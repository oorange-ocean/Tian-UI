(function(d,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(d=typeof globalThis<"u"?globalThis:d||self,e(d.index={},d.Vue))})(this,function(d,e){"use strict";const l={modelValue:{type:Boolean,default:!1}},f="",c="",o=e.defineComponent({name:"SBaseModal",props:l,emits:["update:modelValue"],setup(a,{slots:n,emit:i}){const{modelValue:u}=e.toRefs(a);return()=>{var t;return e.createVNode("div",null,[u.value&&e.createVNode("div",{class:"s-base-modal"},[e.createVNode("div",{class:"s-base-modal__mask",onClick:()=>{i("update:modelValue",!1)}},null),(t=n.default)==null?void 0:t.call(n)])])}}}),s={install(a){a.component(o.name,o)}};d.BaseModal=o,d.default=s,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});