class CreateMap{constructor(){this.data={},this.itineraries={},this.trajectories={},this.intersections={},this.places={},this.authors={},this.continents={},this.width=window.innerWidth,this.height=window.innerHeight,this.loading=[],this.range=[new Date(1890,1,1),new Date(2010,1,1)],this.date_start=this.range[0],this.date_end=this.range[1],this.mode=d3.select("#_01").classed("selected")?1:2,this.ttime=45}loading_manager(t){this.loading=this.loading.filter(function(e){return e!==t}),0===this.loading.length&&(this.process_data(),this.setup(),this.generate())}get_data(){var t=this,e=["author_ids","intersections","itineraries","places","continents"];e.forEach(function(e){t.loading.push(e)}),e.forEach(function(e){var a="data/three_"+e+".json";d3.json(a,function(a,n){a||(t.data[e]=n,t.loading_manager(e))})})}process_data(){var t=this;t.continents=t.data.continents,d3.keys(t.data.places).forEach(function(e){var a=e.split(",");a[0]=a[0].trim().split(" ").join("-"),a[1]=a[1].trim().split(" ").join("-"),a=a.join("_").toLowerCase(),t.places[a]=t.data.places[e],t.places[a].PlaceName=e}),d3.keys(t.data.author_ids).forEach(function(e){t.authors[t.data.author_ids[e]]=e}),t.intersections=t.data.intersections,t.trajectories={},t.itineraries={},d3.keys(t.authors).forEach(function(e){t.itineraries[e]||(t.itineraries[e]=[])}),d3.keys(t.data.itineraries).forEach(function(e){t.data.itineraries[e].forEach(function(e){t.itineraries[e.AuthorID].push(e)})})}setup(){var t=this,e=d3.selectAll(".tab");this.svg=d3.select("#container").append("svg").attr("width",this.width),e.on("click",function(a){var n=d3.select(this),i=+n.attr("id").split("_")[1];t.switch_mode(i),e.classed("selected",!1),n.classed("selected",!0)})}generate(){1===this.mode?this.generate_map():this.generate_routes()}generate_map(){var t=this,e=!1,a=d3.selectAll(".sidebar_tab"),n=1;this.svg.attr("height",this.height),t.svg.on("click",function(t){d3.event.stopPropagation(),j(),P()}),a.on("click",function(t){var e=d3.select(this);a.classed("selected",!1),e.classed("selected",!0),n=+e.attr("id").split("_")[1],P()});var i=d3.time.scale().domain(this.range),s=d3.svg.axis().orient("right").ticks(20).tickSize(30).tickPadding(12),r=d3.slider().scale(i).axis(s).value([l(this.range[1]),l(this.range[0])]).orientation("vertical").margin(0).animate(!1).on("slide",function(e,a){var n=a[1]instanceof Date?a[1]:new Date(a[1]),i=a[0]instanceof Date?a[0]:new Date(a[0]);t.date_start=l(n),t.date_end=l(i),L(),S()}).on("slideend",function(t,e){S()});function l(e){var a=d3.time.scale().domain(i.domain()).range([0,t.height]).nice(d3.time.month);return a.invert(t.height-a(e))}d3.select("#slider .slider_body").call(r);d3.selectAll("#slider .slider_body .tick").last().style("display","none"),L();var c,o,d,u,h,f,_,p,g,v,D,m,y,k,E=d3.geo.mercator().scale(200).translate([.5*t.width,.65*t.height]),w=d3.geo.path().projection(E),x=topojson.feature(t.continents,t.continents.objects.continents);function A(){c={},o={},d={},u={};var e=d3.entries(t.intersections).filter(function(e){var a=new Date(e.key);return a>=t.date_start&&a<=t.date_end});e.forEach(function(t){d3.keys(t.value).length>0&&d3.keys(t.value).forEach(function(e){c[e]||(c[e]={},c[e].figures={}),t.value[e].forEach(function(t){(!c[e].figures[t.AuthorID]||c[e].figures[t.AuthorID]>t.Likelihood)&&(c[e].figures[t.AuthorID]=t.Likelihood)})})}),d3.keys(c).forEach(function(t){c[t].lists={},c[t].lists._01=d3.values(c[t].figures).filter(function(t){return 1===t}),c[t].lists._02=d3.values(c[t].figures).filter(function(t){return 2===t}),c[t].lists._03=d3.values(c[t].figures).filter(function(t){return 3===t})}),e.forEach(function(t){d3.keys(t.value).forEach(function(e){o[e]||(o[e]=[]),t.value[e].forEach(function(t){0===o[e].filter(function(e){return e.AuthorID===t.AuthorID&&e.EndDate===t.EndDate}).length&&o[e].push(t)})})}),e.forEach(function(t){d3.keys(t.value).forEach(function(e){t.value[e].forEach(function(t){d[t.AuthorID]||(d[t.AuthorID]=[]),0===d[t.AuthorID].filter(function(e){return e.PlaceID===t.PlaceID&&e.EndDate===t.EndDate}).length&&d[t.AuthorID].push(t)})})});for(var a=0,n=0;n<d3.keys(d).length;n++)for(var i=0;i<d[d3.keys(d)[n]].length-1;i++)d[d3.keys(d)[n]][i].PlaceID_End=d[d3.keys(d)[n]][i+1].PlaceID,d[d3.keys(d)[n]][i].Likelihood_End=d[d3.keys(d)[n]][i+1].Likelihood,d[d3.keys(d)[n]][i].tier=a,a=i%2*10;d3.keys(c).forEach(function(t){u[t]||(u[t]=[])}),d3.values(d).forEach(function(t){t.forEach(function(t){u[t.PlaceID]||(u[t.PlaceID]=[]),u[t.PlaceID_End]||(u[t.PlaceID_End]=[]),u[t.PlaceID].push(t),t.PlaceID_End&&u[t.PlaceID_End].push(t)})})}function I(){(D=t.svg.selectAll("g.lines_target").data([t])).enter().append("g").classed("lines_target",!0),D.exit().remove(),(m=D.selectAll("g.lines_g").data(d3.entries(d))).enter().append("g").classed("lines_g",!0),m.attr("class",function(e){return"lines_g id_"+d3.keys(t.authors).indexOf(e.key)}),m.exit().remove(),(y=m.selectAll("path.line").data(function(t){return t.value.filter(function(t){return t.PlaceID_End})})).enter().append("path").classed("line",!0),y.attr("d",function(e){var a,n,i=e.PlaceID||e.PlaceID_End,s=e.PlaceID_End||e.PlaceID;a=E([t.places[i].Long,t.places[i].Lat]);var r=(n=E([t.places[s].Long,t.places[s].Lat]))[0]-a[0],l=n[1]-a[1],c=Math.sqrt((r+e.tier)*(r+e.tier)+(l+e.tier)*(l+e.tier));return"M"+a[0]+","+a[1]+"A"+c+","+c+" 0 0,1 "+n[0]+","+n[1]}),y.exit().remove()}function b(){var a=d3.scale.linear().domain([0,10]).range([0,36]);(h=t.svg.selectAll("g.points_target").data([t])).enter().append("g").classed("points_target",!0),h.exit().remove(),(f=t.svg.selectAll("g.points_g").data(d3.entries(c))).enter().append("g").classed("points_g",!0),f.attr("transform",function(e){var a=E([t.places[e.key].Long,t.places[e.key].Lat]);return"translate("+a[0]+","+a[1]+")"}),f.on("mousemove",function(e){d3.select(this).transition().duration(t.ttime).attr("transform",function(e){var a=E([t.places[e.key].Long,t.places[e.key].Lat]);return"translate("+a[0]+","+a[1]+")scale(1.5)"})}).on("mouseout",function(e){d3.select(this).transition().duration(t.ttime/2).attr("transform",function(e){var a=E([t.places[e.key].Long,t.places[e.key].Lat]);return"translate("+a[0]+","+a[1]+")scale(1)"})}).on("click",function(t){d3.event.stopPropagation(),j(),t.key!==e.key&&(e=t,d3.select(this).classed("focus_point",!0)),P()}),f.exit().remove(),(_=f.selectAll("circle.point_back").data(function(t){return[t.value.lists._01]})).enter().append("circle").classed("point_back",!0),_.attr("cx",0).attr("cy",0).attr("r",function(t){var e=t.length+this.parentNode.__data__.value.lists._02.length+this.parentNode.__data__.value.lists._03.length;return a(e)}),_.exit().remove(),(v=f.selectAll("circle.point_01").data(function(t){return[t.value.lists._01]})).enter().append("circle").classed("point_01",!0),v.classed("point",!0).attr("cx",0).attr("cy",0).attr("r",function(t){var e=t.length+this.parentNode.__data__.value.lists._02.length+this.parentNode.__data__.value.lists._03.length;return a(e)}),v.exit().remove(),(g=f.selectAll("circle.point_02").data(function(t){return[t.value.lists._02]})).enter().append("circle").classed("point_02",!0),g.classed("point",!0).attr("cx",0).attr("cy",0).attr("r",function(t){var e=t.length+this.parentNode.__data__.value.lists._03.length;return a(e)}),g.exit().remove(),(p=f.selectAll("circle.point_03").data(function(t){return[t.value.lists._03]})).enter().append("circle").classed("point_03",!0),p.classed("point",!0).attr("cx",0).attr("cy",0).attr("r",function(t){var e=t.length;return a(e)}),p.exit().remove()}function P(){var a=d3.scale.linear().domain([0,3]).range([.5,1]);if(e){d3.select("#sidebar_title").html("&#8618;&nbsp;"+t.places[e.key].PlaceName);var i,s,r=1===n?o[e.key]||[]:u[e.key];(i=d3.select("#sidebar_items").selectAll("li.item").data(r)).enter().append("li").classed("item",!0),i.attr("class",function(e){return"item id_"+d3.keys(t.authors).indexOf(e.AuthorID)}).style("opacity",function(t){return a(t.Likelihood)}).html(function(e){return t.authors[e.AuthorID]}),i.exit().remove(),(s=i.selectAll("div.item_date").data(function(t){return[t]})).enter().append("div").classed("item_date",!0),s.html(function(a){var i;if(1===n)i=a.StartDate&&a.EndDate?a.StartDate+"&nbsp;&ndash;&nbsp;"+a.EndDate:a.StartDate?a.StartDate+"&nbsp;&ndash;":a.EndDate?"&nbsp;&ndash;"+a.EndDate:"";else{var s=a.PlaceID===e.key?"accent":"",r=a.PlaceID_End&&a.PlaceID_End===e.key?"accent":"",l='<span class="_'+a.Likelihood+" "+s+'">'+t.places[a.PlaceID].PlaceName+"</span>",c='<span class="_'+a.Likelihood_End+" "+r+'">'+(a.PlaceID_End?t.places[a.PlaceID_End].PlaceName:"")+"</span>";i='<div class="b">'+(a.EndDate||"")+"</div><div>"+l+"&nbsp;&rarr;&nbsp;"+c+"</div>"}return i}),s.exit().remove()}else d3.select("#sidebar_title").html(""),d3.select("#sidebar_items").html("")}function L(){var e=d3.time.format("%b. %Y");d3.select("#date_start").html(e(t.date_start)),d3.select("#date_end").html(e(t.date_end))}function S(){A(),I(),b(),P()}function j(){e=!1,d3.selectAll(".focus_point").classed("focus_point",!1)}(k=t.svg.selectAll("path.map").data([x])).enter().append("path").classed("map",!0),k.attr("d",w),k.exit().remove(),A(),I(),b(),P()}generate_routes(){var t=this,e=6*this.height;this.svg.attr("height",e);var a,n,i,s,r,l,c,o=d3.time.scale().domain(this.range).range([0,e-150-60]),d=[];d3.keys(t.itineraries).forEach(function(e){d.push(d3.min(t.itineraries[e],function(t){return new Date(t.StartDate)}))}),o.domain([d3.min(d,function(t){return t}),this.range[1]]),(a=this.svg.selectAll("g.routes_g").data(d3.keys(t.itineraries))).enter().append("g").classed("routes_g",!0),a.attr("class",function(e){return"routes_g id_"+d3.keys(t.authors).indexOf(e)}).attr("transform",function(e,a){return"translate("+a*(t.width/2)+",150)"}),a.exit().remove(),(n=a.selectAll("line.routes_lines_bknd").data(function(e){return t.itineraries[e]})).enter().append("line").classed("routes_lines_bknd",!0),n.attr("x1",t.width/4).attr("y1",function(t,e){return o(o.domain()[0])}).attr("x2",t.width/4).attr("y2",function(t,e){return o(o.domain()[1])}),n.exit().remove(),(i=a.selectAll("text.routes_labels").data(function(t){return[t]})).enter().append("text").classed("routes_labels",!0),i.attr("x",t.width/4).attr("y",-30).text(function(e){return t.authors[e]}),i.exit().remove(),(s=a.selectAll("line.routes_lines").data(function(e){return t.itineraries[e]})).enter().append("line").classed("routes_lines",!0),s.attr("class",function(e){return"routes_lines id_"+d3.keys(t.authors).indexOf(e.AuthorID)}).attr("x1",t.width/4).attr("y1",function(t,e){return t.StartDate?o(new Date(t.StartDate)):o(new Date(t.EndDate))}).attr("x2",t.width/4).attr("y2",function(t,e){return t.EndDate?o(new Date(t.EndDate)):o(new Date(t.StartDate))}),s.exit().remove(),(l=a.selectAll("line.routes_points").data(function(e){return t.itineraries[e]})).enter().append("line").classed("routes_points",!0),l.attr("x1",t.width/4-15).attr("y1",function(t,e){return t.StartDate?o(new Date(t.StartDate)):o(new Date(t.EndDate))}).attr("x2",t.width/4+45).attr("y2",function(t,e){return t.StartDate?o(new Date(t.StartDate)):o(new Date(t.EndDate))}),l.exit().remove(),(r=a.selectAll("circle.routes_stops").data(function(e){return t.itineraries[e]})).enter().append("circle").classed("routes_stops",!0),r.attr("cx",t.width/4+45).attr("cy",function(t,e){return t.StartDate?o(new Date(t.StartDate)):o(new Date(t.EndDate))}).attr("r",3),r.exit().remove(),(c=a.selectAll("text.routes_points_labels").data(function(e){return t.itineraries[e]})).enter().append("text").classed("routes_points_labels",!0),c.attr("x",t.width/4+60).attr("y",function(t,e){return(t.StartDate?o(new Date(t.StartDate)):o(new Date(t.EndDate)))+4}).text(function(e){var a=e.StartDate||"Unknown",n=e.EndDate||"Unknown";return t.places[e.PlaceID].PlaceName+" ("+a+" to "+n+")"}),c.exit().remove()}switch_mode(t){this.mode=t,this.tear_down(),1===this.mode?this.generate_map():this.generate_routes()}tear_down(){var t=1===this.mode?2:1;this.svg.selectAll("*").remove(),d3.select("#slider .slider_body").selectAll("*").remove(),d3.selectAll(".sidebar_tab.selected").classed("selected",!1),d3.select(".sidebar_tab#sidebar_01").classed("selected",!0),d3.selectAll("._0"+t).style("display","none"),d3.selectAll("._0"+this.mode).style("display","block"),this.date_start=this.range[0],this.date_end=this.range[1]}}var vis=new CreateMap;vis.get_data(),d3.selection.prototype.first=function(){return d3.select(this[0][0])},d3.selection.prototype.last=function(){var t=this.size()-1;return d3.select(this[0][t])};
//# sourceMappingURL=../../maps/archive/phase 1/vis.orig.js.map
