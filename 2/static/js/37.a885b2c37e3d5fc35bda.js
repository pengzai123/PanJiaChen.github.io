webpackJsonp([37],{nOMn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("//Fk"),o=a.n(n),l=a("EX+S"),i={data:function(){return{dataObj:{token:"",key:""},image_uri:[],fileList:[]}},methods:{beforeUpload:function(){var t=this;return new o.a(function(e,a){Object(l.a)().then(function(a){var n=a.data.qiniu_key,o=a.data.qiniu_token;t._data.dataObj.token=o,t._data.dataObj.key=n,e(!0)}).catch(function(t){console.log(t),a(!1)})})}}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-upload",{attrs:{action:"https://upload.qbox.me",data:t.dataObj,drag:"",multiple:!0,"before-upload":t.beforeUpload}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])},d=[],r={render:u,staticRenderFns:d},c=r,s=a("VU/8"),f=s(i,c,!1,null,null,null);e.default=f.exports}});