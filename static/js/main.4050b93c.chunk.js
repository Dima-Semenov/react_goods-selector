(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),c=n(2),o=n.n(c),i=n(5),r=n(3),s=n(4),u=n(7),m=n(6),d=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=e.call.apply(e,[this].concat(l))).state={title:["none"]},t.clear=function(){t.setState({title:["none"]})},t.select=function(e){"none"===t.state.title[0]&&t.setState({title:[]}),t.state.title.includes(e)||t.setState((function(t){return{title:[].concat(Object(i.a)(t.title),[e])}}))},t.delete=function(e){t.setState((function(t){return{title:t.title.filter((function(t){return t!==e}))}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Selected good:",0!==this.state.title.length?this.state.title.join(", "):this.setState({title:["none"]})),l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"container__list"},d.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"container__item"},e,":",l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"container__button",onClick:function(){t.select(e)}},"Select"),l.a.createElement("button",{type:"button",className:"container__button container__button-delete",onClick:function(){t.delete(e)}},"Delete"))))})))),l.a.createElement("button",{type:"button",className:" container__button container__button-delete container__button-delete-all ",onClick:this.clear,hidden:"none"===this.state.title[0]||!1},"Clear"))}}]),n}(l.a.Component);o.a.render(l.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4050b93c.chunk.js.map