!function(t,e){"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof module&&module.exports?module.exports=function(t){return t.tip=e(t),t.tip}:t.d3.tip=e(t.d3)}(this,function(t){return function(){var e=function(){return"n"},n=function(){return[0,0]},r=function(){return" "},o=c(),i=null,f=null,l=null;function u(t){var e;i="svg"===(e=(e=t).node()).tagName.toLowerCase()?e:e.ownerSVGElement,f=i.createSVGPoint(),document.body.appendChild(o)}u.show=function(){var t=Array.prototype.slice.call(arguments);t[t.length-1]instanceof SVGElement&&(l=t.pop());var o,i=r.apply(this,t),f=n.apply(this,t),c=e.apply(this,t),y=p(),d=a.length,m=document.documentElement.scrollTop||document.body.scrollTop,h=document.documentElement.scrollLeft||document.body.scrollLeft;for(y.html(i).style({opacity:1,"pointer-events":"all"});d--;)y.classed(a[d],!1);return o=s.get(c).apply(this),y.classed(c,!0).style({top:o.top+f[0]+m+"px",left:o.left+f[1]+h+"px"}),u},u.hide=function(){return p().style({opacity:0,"pointer-events":"none"}),u},u.attr=function(e,n){if(arguments.length<2&&"string"==typeof e)return p().attr(e);var r=Array.prototype.slice.call(arguments);return t.selection.prototype.attr.apply(p(),r),u},u.style=function(e,n){if(arguments.length<2&&"string"==typeof e)return p().style(e);var r=Array.prototype.slice.call(arguments);return t.selection.prototype.style.apply(p(),r),u},u.direction=function(n){return arguments.length?(e=null==n?n:t.functor(n),u):e},u.offset=function(e){return arguments.length?(n=null==e?e:t.functor(e),u):n},u.html=function(e){return arguments.length?(r=null==e?e:t.functor(e),u):r},u.destroy=function(){return o&&(p().remove(),o=null),u};var s=t.map({n:function(){var t=y();return{top:t.n.y-o.offsetHeight,left:t.n.x-o.offsetWidth/2}},s:function(){var t=y();return{top:t.s.y,left:t.s.x-o.offsetWidth/2}},e:function(){var t=y();return{top:t.e.y-o.offsetHeight/2,left:t.e.x}},w:function(){var t=y();return{top:t.w.y-o.offsetHeight/2,left:t.w.x-o.offsetWidth}},nw:function(){var t=y();return{top:t.nw.y-o.offsetHeight,left:t.nw.x-o.offsetWidth}},ne:function(){var t=y();return{top:t.ne.y-o.offsetHeight,left:t.ne.x}},sw:function(){var t=y();return{top:t.sw.y,left:t.sw.x-o.offsetWidth}},se:function(){var t=y();return{top:t.se.y,left:t.e.x}}}),a=s.keys();function c(){var e=t.select(document.createElement("div"));return e.style({position:"absolute",top:0,opacity:0,"pointer-events":"none","box-sizing":"border-box"}),e.node()}function p(){return null===o&&(o=c(),document.body.appendChild(o)),t.select(o)}function y(){for(var e=l||t.event.target;void 0===e.getScreenCTM&&"undefined"===e.parentNode;)e=e.parentNode;var n={},r=e.getScreenCTM(),o=e.getBBox(),i=o.width,u=o.height,s=o.x,a=o.y;return f.x=s,f.y=a,n.nw=f.matrixTransform(r),f.x+=i,n.ne=f.matrixTransform(r),f.y+=u,n.se=f.matrixTransform(r),f.x-=i,n.sw=f.matrixTransform(r),f.y-=u/2,n.w=f.matrixTransform(r),f.x+=i,n.e=f.matrixTransform(r),f.x-=i/2,f.y-=u/2,n.n=f.matrixTransform(r),f.y+=u,n.s=f.matrixTransform(r),n}return u}});
//# sourceMappingURL=../maps/libs/index.js.map
