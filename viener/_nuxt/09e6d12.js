(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{474:function(t,e,o){var content=o(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("5cef41a7",content,!0,{sourceMap:!1})},485:function(t,e,o){"use strict";o(474)},486:function(t,e,o){var r=o(44)(!1);r.push([t.i,"._equipament_modal_outer{display:flex;align-items:center;justify-content:center;height:100%;opacity:0;pointer-events:none;position:fixed;top:50%;left:50%;width:100%;z-index:995;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-x:-50%;--tw-translate-y:-50%}._equipament_modal_outer ._modal_inner{background-color:var(--text-light);border-color:var(--primary);border-radius:26px;border-width:2px;display:flex;flex-direction:column;align-items:center;height:80vh;overflow-y:auto;overflow-x:hidden;padding:35px;position:relative;text-align:center;width:60vw;z-index:2;grid-gap:20px;gap:20px}._equipament_modal_outer ._modal_inner img{-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:24vw}._equipament_modal_outer ._modal_inner h2{color:var(--primary)}._equipament_modal_outer ._modal_inner p{color:var(--text)}._equipament_modal_outer ._modal_inner ._close{background-color:transparent;font-size:24px;line-height:1;padding:0;position:absolute;top:20px;right:20px;color:var(--primary)}._equipament_modal_outer ._background{height:100%;position:absolute;top:0;left:0;width:100%;z-index:0;background-color:rgba(0,0,0,.2509803922)}._equipament_modal_outer._open{opacity:1;pointer-events:auto}@media screen and (max-width:768px){._equipament_modal_outer ._modal_inner{height:90vh;padding:20px;width:90vw;grid-gap:15px;gap:15px}._equipament_modal_outer ._modal_inner img{width:80%}._equipament_modal_outer ._modal_inner ._close{background-color:transparent;font-size:24px;line-height:1;padding:0;position:absolute;top:20px;right:20px;color:var(--primary)}._equipament_modal_outer ._background{height:100%;position:absolute;top:0;left:0;width:100%;z-index:0;background-color:rgba(0,0,0,.2509803922)}._equipament_modal_outer._open{opacity:1;pointer-events:auto}}",""]),t.exports=r},503:function(t,e,o){"use strict";o.r(e);var r=o(262),n={data:function(){return{state:Object(r.useEquipamentState)()}},methods:{closeModal:function(){this.state.open=!1}}},l=(o(485),o(24)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"_equipament_modal_outer",class:{_open:t.state.open}},[o("div",{staticClass:"_modal_inner"},[o("img",{attrs:{src:t.state.image,alt:t.state.title}}),t._v(" "),o("h2",[t._v(t._s(t.state.title))]),t._v(" "),o("p",[t._v(t._s(t.state.description))]),t._v(" "),o("button",{staticClass:"_close",on:{click:t.closeModal}},[t._v("X")])]),t._v(" "),o("div",{staticClass:"_background",on:{click:t.closeModal}})])}),[],!1,null,null,null);e.default=component.exports}}]);