webpackJsonp([34],{"EjB/":function(v,i,_){i=v.exports=_("FZ+f")(!1),i.push([v.i,".back-to-ceiling[data-v-2a3c2def]{position:fixed;display:inline-block;text-align:center;cursor:pointer}.back-to-ceiling[data-v-2a3c2def]:hover{background:#d5dbe7}.fade-enter-active[data-v-2a3c2def],.fade-leave-active[data-v-2a3c2def]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-2a3c2def],.fade-leave-to[data-v-2a3c2def]{opacity:0}.back-to-ceiling .Icon[data-v-2a3c2def]{fill:#9aaabf;background:none}",""])},"rqz+":function(v,i,_){var d=_("EjB/");"string"==typeof d&&(d=[[v.i,d,""]]),d.locals&&(v.exports=d.locals);_("rjj0")("65759e81",d,!0)},snxh:function(v,i,_){"use strict";function d(v){_("rqz+")}Object.defineProperty(i,"__esModule",{value:!0});var t={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var v=this,i=window.pageYOffset,_=0;this.interval=setInterval(function(){var d=Math.floor(v.easeInOutQuad(10*_,i,-i,500));d<=v.backPosition?(window.scrollTo(0,v.backPosition),clearInterval(v.interval)):window.scrollTo(0,d),_++},16.7)},easeInOutQuad:function(v,i,_,d){return(v/=d/2)<1?_/2*v*v+i:-_/2*(--v*(v-2)-1)+i}}},e=function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("transition",{attrs:{name:v.transitionName}},[_("div",{directives:[{name:"show",rawName:"v-show",value:v.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:v.customStyle,on:{click:v.backToTop}},[_("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[_("title",[v._v("回到顶部")]),v._v(" "),_("g",[_("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},a=[],n={render:e,staticRenderFns:a},o=n,r=_("VU/8"),c=d,l=r(t,o,!1,c,"data-v-2a3c2def",null),s=l.exports,p={name:"backToTop-demo",components:{BackToTop:s},data:function(){return{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},u=function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("div",{staticClass:"components-container"},[_("code",[v._v("页面滚动到指定位置会在右下角出现返回顶部按钮")]),v._v(" "),_("code",[v._v("可自定义按钮的样式、show/hide临界点、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素 ")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("el-tooltip",{attrs:{placement:"top",content:"文字提示"}},[_("back-to-top",{attrs:{transitionName:"fade",customStyle:v.myBackToTopStyle,visibilityHeight:300,backPosition:50}})],1)],1)},f=[],h={render:u,staticRenderFns:f},b=h,g=_("VU/8"),m=g(p,b,!1,null,null,null);i.default=m.exports}});