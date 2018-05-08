class UI{constructor(){this.palette={clr1:"#EE7B22",clr2:"#F9D5B6",clr3:"#D2D9AC",black:"#161C1E",white:"#F7F8F9",neutral:"#F9F9F9",darkneutral:"#2D393F",coolneutral:"#E2E5E8"};var e=document.getElementById("intersections"),t=document.getElementById("trajectories"),s=document.getElementById("itineraries");this.dom={tabs:document.getElementById("tabs").getElementsByTagName("a"),searchfield:document.getElementById("search-field"),searchresults:document.getElementById("search-results")},this.dom.intersections={elem:e,legend:e.getElementsByClassName("legend")[0],dateslider:e.getElementsByClassName("slider")[0],datestart:e.getElementsByClassName("date-start")[0],dateend:e.getElementsByClassName("date-end")[0],map:{header:e.getElementsByClassName("header")[1],view:e.getElementsByClassName("map")[0]},results:{header:e.getElementsByClassName("header")[2],title:e.getElementsByClassName("title")[0],view:e.getElementsByClassName("results-view")[0]}},this.dom.trajectories={elem:t,dateslider:t.getElementsByClassName("slider")[0],datestart:t.getElementsByClassName("date-start")[0],dateend:t.getElementsByClassName("date-end")[0],authors:{header:t.getElementsByClassName("header")[1],list:t.getElementsByClassName("authors-list")[0]},map:{header:t.getElementsByClassName("header")[2],view:t.getElementsByClassName("map")[0]}},this.dom.itineraries={elem:s,authors:{selections:s.getElementsByClassName("selections")[0],header:s.getElementsByClassName("header")[0],list:s.getElementsByClassName("authors-list")[0],author1:s.getElementsByClassName("author")[0],author2:s.getElementsByClassName("author")[1]},selections:[{header:s.getElementsByClassName("itinerary-header")[0],view:s.getElementsByClassName("itinerary-view")[0]},{header:s.getElementsByClassName("itinerary-header")[1],view:s.getElementsByClassName("itinerary-view")[1]}]},this.initLegendUI()}initLegendUI(){d3.select(this.dom.intersections.legend).on("click",function(){d3.select(this).transition().duration(800).style("opacity",0).remove()})}initPanels(){for(var e=document.getElementById("tabs").children,t=document.getElementById("panels").children,s=0;s<e.length;s++)e[s].setAttribute("data-panel",s),e[s].onclick=function(){for(var s=0;s<t.length;s++)t[s].style.display="none",t[s].classList.remove("selected");for(var a=0;a<t.length;a++)e[a].classList.remove("active");this.classList.add("active"),t[this.getAttribute("data-panel")].style.display="block",t[this.getAttribute("data-panel")].classList.add("selected")};var a=window.innerHeight-document.getElementById("nav").clientHeight-this.dom.intersections.map.header.clientHeight;document.getElementById("panels").setAttribute("style","min-height:"+a+"px")}generateAuthorList(e){var t="",s=1,a=1;for(var l in e.authors)s%2!=0&&(t+="<div class='arow'>\n"),e.authors.hasOwnProperty(l)&&(t+=this.authorItemTemplate(e.authors[l],l,"a",a)+"\n"),s%2==0&&(t+="</div>\n"),s=2==s?1:2,a++;return t}authorItemTemplate(e,t,s,a){return"<"+s+" data-key='"+t+"' class='author a-"+a+"' title='"+this.escapeHtml(e)+"'>"+e+"</"+s+">"}escapeHtml(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(e).replace(/[&<>"'`=\/]/g,function(e){return t[e]})}}var ui=new UI;ui.initPanels();
//# sourceMappingURL=../../maps/archive/phase 2/ui.js.map
