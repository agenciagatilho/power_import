(window.webpackJsonp=window.webpackJsonp||[]).push([[24,3,9,12],{441:function(e,t,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("4471efef",content,!0,{sourceMap:!1})},442:function(e,t,n){"use strict";n(441)},443:function(e,t,n){var o=n(44)(!1);o.push([e.i,"._banner>.container{display:flex;flex-direction:column;justify-content:center;height:570px;font-size:16px;line-height:1;color:var(--text-light);grid-gap:30px;gap:30px;line-height:22px}._banner>.container h1{max-width:500px}._banner>.container p{max-width:470px}._banner>.container .default_button{padding-left:40px;padding-right:40px}@media screen and (max-width:768px){._banner{text-align:center}._banner>.container{height:600px}._banner>.container h1{margin-left:auto;margin-right:auto;max-width:500px}._banner>.container p{margin-left:auto;margin-right:auto;max-width:310px}._banner>.container .default_button{margin-left:auto;margin-right:auto;padding-left:30px;padding-right:30px}}",""]),e.exports=o},445:function(e,t,n){"use strict";n.r(t);var o={props:{item:{type:Object,required:!0},background:{type:Object,default:null}}},r=(n(442),n(24)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"_banner",attrs:{background:e.background}},[n("h1",[e._v(e._s(e.item.title))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.item.description)}}),e._v(" "),e.item.cta?n("nuxt-link",{staticClass:"default_button alt",attrs:{to:e.item.cta.url}},[e._v("\n    "+e._s(e.item.cta.text)+"\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VContainer:n(185).default})},450:function(e,t,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("7d1e608d",content,!0,{sourceMap:!1})},451:function(e,t,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("0fe80da5",content,!0,{sourceMap:!1})},456:function(e,t,n){"use strict";n(450)},457:function(e,t,n){var o=n(44)(!1);o.push([e.i,"._grid_two_image_with_text_and_cta .container{display:grid;grid-gap:100px;gap:100px;grid-template-columns:repeat(2,minmax(0,1fr))}._grid_two_image_with_text_and_cta .container ._image{width:calc(100% + 80px)}._grid_two_image_with_text_and_cta .container ._image img{height:100%;width:100%;margin-left:-80px}._grid_two_image_with_text_and_cta .container ._text{display:flex;flex-direction:column;justify-content:center;grid-gap:30px;gap:30px}._grid_two_image_with_text_and_cta .container ._text h3{margin-top:-25px}._grid_two_image_with_text_and_cta.inverted .container ._image{grid-column-start:2}._grid_two_image_with_text_and_cta.inverted .container ._image img{height:100%;width:100%;margin-left:0}._grid_two_image_with_text_and_cta.inverted .container ._text{grid-column-start:1;grid-row-start:1}@media screen and (max-width:768px){._grid_two_image_with_text_and_cta .container{grid-gap:30px;gap:30px;grid-template-columns:repeat(1,minmax(0,1fr))}._grid_two_image_with_text_and_cta .container ._image{width:100%}._grid_two_image_with_text_and_cta .container ._image img{margin-left:0}._grid_two_image_with_text_and_cta .container ._text .default_button{margin-left:auto;margin-right:auto}._grid_two_image_with_text_and_cta.inverted .container ._image{grid-column-start:1}._grid_two_image_with_text_and_cta.inverted .container ._image img{height:100%;width:100%;margin-left:0}._grid_two_image_with_text_and_cta.inverted .container ._text{grid-column-start:1;grid-row-start:2}}",""]),e.exports=o},458:function(e,t,n){"use strict";n(451)},459:function(e,t,n){var o=n(44)(!1);o.push([e.i,"._fullscreen_linear_text{background-color:var(--color);position:relative;text-align:center;color:var(--text-s)}._fullscreen_linear_text .container{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:50px;padding-bottom:50px;position:relative;z-index:2;grid-gap:30px;gap:30px}._fullscreen_linear_text .container p{max-width:700px}._fullscreen_linear_text .background{height:100%;position:absolute;top:0;left:0;width:100%;z-index:-1}@media screen{._fullscreen_linear_text .container h2{padding-left:20px;padding-right:20px}._fullscreen_linear_text .container p{padding-left:40px;padding-right:40px}}",""]),e.exports=o},463:function(e,t,n){"use strict";n.r(t);var o={props:{item:{type:Object,required:!0},image:{type:String,required:!0},alt:{type:String,required:!0},inverted:{type:Boolean,default:!1}}},r=(n(456),n(24)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"_grid_two_image_with_text_and_cta",class:{inverted:e.inverted}},[n("picture",{staticClass:"_image"},[e.image.includes("mp4")?n("video",{attrs:{controls:"",playsinline:"",preload:"metadata",src:e.image,poster:e.image.replaceAll(".mp4","")+"-preview.webp",alt:e.alt,width:"650px",height:"425px"}}):n("v-image",{attrs:{src:e.image,width:"650px",height:"425px",alt:e.alt}})],1),e._v(" "),n("div",{staticClass:"_text"},[n("h2",[e._v(e._s(e.item.title))]),e._v(" "),e.item.subtitle?n("h3",[e._v("\n      "+e._s(e.item.subtitle)+"\n    ")]):e._e(),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.item.description)}}),e._v(" "),e.item.cta?n("nuxt-link",{staticClass:"default_button",attrs:{to:e.item.cta.url}},[e._v("\n      "+e._s(e.item.cta.text)+"\n    ")]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VImage:n(112).default,VContainer:n(185).default})},464:function(e,t,n){"use strict";n.r(t);var o={props:{item:{type:Object,required:!0},image:{type:String,required:!1},color:{type:String,default:"#5EA756"},text:{type:String,default:"#ffffff"}}},r=(n(458),n(24)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"_fullscreen_linear_text",style:"--color: "+e.color+"; --text-s: "+e.text+";"},[n("div",{staticClass:"container small"},[n("h2",[e._v(e._s(e.item.title))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.item.description)}}),e._v(" "),e.item.cta?n("nuxt-link",{staticClass:"default_button alt",attrs:{to:e.item.cta.url}},[e._v("\n      "+e._s(e.item.cta.text)+"\n    ")]):e._e()],1),e._v(" "),e.image?n("v-image",{staticClass:"background",attrs:{alt:"background",src:e.image,width:"1920px",height:"350px"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VImage:n(112).default})},494:function(e,t,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("4d61aa40",content,!0,{sourceMap:!1})},525:function(e){e.exports=JSON.parse('{"banner":{"title":"Agilidade e boas experiências.","description":"Um dos nossos principais objetivos é levar segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos, olhando para cada situação de forma única, contribuindo com um amanhã mais sustentável."},"detailsAttention":{"title":"Atenção aos detalhes","description":"Desde o início, buscamos sempre as melhores formas de entregar soluções eficientes, antecipando problemas, sempre atentos às oportunidades do mercado, mas, principalmente, olhando para a necessidade das pessoas.<br><br>Voltamos nossa atenção aos detalhes, às pessoas e às parcerias construídas através de boas experiências e de produtos e serviços de qualidade. Dessa forma, queremos deixar nossa marca no mundo, ajudando a construir um lugar melhor para todos, com economia e sustentabilidade.","cta":{"text":"Conheça nossas soluções","url":"/energiasrenovaveis"}},"careAndResponsibility":{"title":"Cuidado e responsabilidade","description":"Fortalecemos nossas parcerias nos colocando lado a lado com nossos clientes e demonstrando consideração e zelo. Compartilhamos conhecimento e garantimos um ponto de assistência aos nossos clientes.<br><br>Oferecemos apoio em todos os pontos de conexão, sendo receptíveis às necessidades e olhando para o todo com atenção aos detalhes. Nossas relações são baseadas em confiança, e nos dedicamos para entregar soluções efetivas."},"transformEnergyWithViener":{"title":"Transforme sua energia com a Viener","description":"Entre em contato e entenda como podemos trabalhar juntos para melhorar a sua produção de energia.","cta":{"text":"Entre em contato","url":"/contato"}},"depositions":{"title":"Conheça a opinião de quem já é cliente"}}')},526:function(e){e.exports=JSON.parse('[{"name":"Lorem Ipsum","job_title":"Lorem Ipsum","locale":"Chapecó – SC","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"name":"Lorem Ipsum","job_title":"Lorem Ipsum","locale":"Chapecó – SC","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"name":"Lorem Ipsum","job_title":"Lorem Ipsum","locale":"Chapecó – SC","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"name":"Lorem Ipsum","job_title":"Lorem Ipsum","locale":"Chapecó – SC","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"name":"Lorem Ipsum","job_title":"Lorem Ipsum","locale":"Chapecó – SC","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"name":"Lorem Ipsum","job_title":"Lorem Ipsum","locale":"Chapecó – SC","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]')},527:function(e,t,n){"use strict";n(494)},528:function(e,t,n){var o=n(44)(!1);o.push([e.i,"#quem_somos{display:flex;flex-direction:column;grid-gap:75px;gap:75px}#quem_somos ._renewable_energy .container{width:540px}#quem_somos ._renewable_energy .container .default_button{background-color:var(--primary);padding-left:60px;padding-right:60px}#quem_somos ._transform_energy_with_viener h2{max-width:415px}@media screen and (max-width:768px){#quem_somos{text-align:center;grid-gap:50px;gap:50px}#quem_somos ._banner>.container p{max-width:295px}}",""]),e.exports=o},559:function(e,t,n){"use strict";n.r(t);var o=n(525),r=n(526),l={data:function(){return{quemsomos:o,depositions:r,banner_background:{src:"images/banner_quemsomos.webp",color:"#ED7220"}}},head:function(){return{title:"Conheça a Viener | Energias Renováveis",meta:[{name:"title",content:"Conheça a Viener | Energias Renováveis"},{name:"description",content:"Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos."},{property:"og:type",content:"website"},{property:"og:url",content:"https://viener.com.br/"},{property:"og:title",content:"Conheça a Viener | Energias Renováveis"},{property:"og:description",content:"Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos."},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:"https://viener.com.br/"},{property:"twitter:title",content:"Conheça a Viener | Energias Renováveis"},{property:"twitter:description",content:"Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos."}]}}},c=(n(527),n(24)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"quem_somos"}},[n("Banner",{attrs:{item:e.quemsomos.banner,background:e.banner_background}}),e._v(" "),n("GridTwoImageWithTextAndCta",{attrs:{item:e.quemsomos.detailsAttention,image:"images/young-architect-standing.webp",alt:"arquiteto para na frente de paineis solares"}}),e._v(" "),n("FullscreenLinearText",{attrs:{item:e.quemsomos.careAndResponsibility,image:"images/background-linear-quemsomos.webp",color:"#2E4739CC"}}),e._v(" "),n("GridTwoImageWithTextAndCta",{staticClass:"_transform_energy_with_viener",attrs:{inverted:"",item:e.quemsomos.transformEnergyWithViener,image:"images/sungrow_2.webp",alt:"painel solar"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Banner:n(445).default,GridTwoImageWithTextAndCta:n(463).default,FullscreenLinearText:n(464).default})}}]);