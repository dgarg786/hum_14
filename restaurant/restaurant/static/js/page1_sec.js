var   w = 1000,
      h =  550,
      circleWidth = 5; 
 

var palette = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
  }

var colors = d3.scale.category20();
var vid = document.getElementById("bgvid");
function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


var nodes = [
      { name: "SNACKS", value:65},
      { name: "DRINKS", target: [], value: 55 },
      { name: "DESSERTS", target: [], value: 65 },  
      { name: "SALADS", target: [], value: 50 },
      { name: "MENU", target: [0,1,2,4], value: 48,px: 500,py: 250 }, 
      { name: "MAIN-COURSE", target: [], value: 70 }, 
      //{ name: "Breakpoints", target: [0,3,4], value: 36 },
     /* {name: "yahiruk1", target:[0,1,2,3,4,5,6],value:0},
      {name: "yahiruk2", target:[0,1,2,3,4,5,6],value:0},
      {name: "yahiruk3", target:[0,1,2,3,4,5,6],value:0},
      {name: "yahiruk4", target:[0,1,2,3,4,5,6],value:0},
      {name: "yahiruk5", target:[0,1,2,3,4,5,6],value:0},
      {name: "yahiruk6", target:[0,1,2,3,4,5,6],value:0},*/

      ];

var links = [];

for (var i = 0; i < nodes.length; i++){
      if (nodes[i].target !== undefined) { 
            for ( var x = 0; x < nodes[i].target.length; x++ ) 
              links.push({
                  source: nodes[i],
                 target: nodes[nodes[i].target[x]]  
              });
            
      };
};


var myChart = d3.select('body')
      .append("div")
        .classed("svg-container", true)
      
      .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 1000 550")
        .classed("svg-content-responsive", true)
    

var force = d3.layout.force()
      .nodes(nodes)
      .links([])
      .gravity(0.12)
      .charge(-1000)
      .size([w,h]); 

      var link = myChart.selectAll('line') 
            .data(links).enter().append('line')
            .attr('stroke', palette.lightgray)
            .attr('stroke-width', '0')
            .attr('stroke-opacity','1');

      var node =  myChart.selectAll('circle')  
            .data(nodes).enter() 
            .append('g')
            .each(function(d, i){
              //force.drag=true;
		addHummerEventListener(this, d);
	})
            .call(force.drag); 

     
     node.append('circle')
            .attr('cx', function(d,i){if(i==4) {d.fixed=true; return d.x;}
              else return d.x; })
            .attr('cy', function(d,i){if(i>6) return 1000;
              else return d.y; })
            .attr('r', function(d,i){
                  console.log(d.value);
                  if ( i > 0 ) {
                        return circleWidth + d.value; 
                  } else {
                        return circleWidth + 35; 
                  }
            })
            .attr('fill-opacity',function(d,i){ 
                  if ( i == 4 ) {
                        return 0.9;
                  }
                  else{
                    return 0;
                  }

            })
            .attr('fill', function(d,i){
                  if ( i == 4 ) {
                        return palette.lightgray;
                  }
                  else{
                    return 'white';
                  }
                  
            })
             
            .attr('stroke-dasharray',function(d,i){
              if(i==4){
                return '40,30';
              }
            })
            .attr('stroke-width', function(d,i){
                  if(i==4) return '2';
                      else  return '5';
            })
            .attr('stroke-opacity',0.9)
            .attr('stroke', function(d,i){
                  if ( i > 0 ) {
                        return palette.lightgray;// palette.lightgray'';
                  } else {
                        return palette.lightgray;
                  }
            });


      force.on('tick', function(e){ 
            node.attr('transform', function(d, i){
              
              return 'translate(' + d.x + ','+ d.y + ')'
              
              
          })
          
          link 
              .attr('x1', function(d){if(d.source.name=="Compass") return 500;
              else return d.source.x; }) 
              .attr('y1', function(d){ if(d.source.name=="Compass") return 250;
              else return d.source.y;})
              .attr('x2', function(d){ return d.target.x; })
              .attr('y2', function(d){ return d.target.y; })
          
      });

      //node.attr('background', 'white');
            //.attr('-webkit-background-clip','text');
           // .attr('display','block');
      node.append('text')
            .text(function(d,i){ return d.name; })
            .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
            .attr('fill', function(d, i){
              console.log(d.value);
                  if ( i > 0 && d.value < 10 ) {
                        return palette.lightgray;
                  } else if ( i > 0 && d.value >10 ) {
                        return palette.lightgray;
                  } else {
                        return palette.lightgray;
                  }
            })
            .attr('text-anchor', function(d, i) {
                  return 'middle';
            })

            .attr('font-size', function(d, i){
                  if (i==4) {
                        return '1.6em';
                  } else {
                        return '1.2em';    
                  }
            }) 
            //.attr('-webkit-text-fill-color', 'transparent')
            //.attr('-webkit-background-clip','text')
            //.attr('display','block');

var fg = -1;
function addHummerEventListener(that, d){

	Hammer(that).on("tap", function(event){
    force = force.charge(function(e,i){
      if(d==e&&fg!=e)return -80000;
      else if (fg==e){
        return -2000;
      }
      else return -2000;
    });
    

   // force.alpha(1);
    force.start();
    //force.start();
    //force = force.charge(-1000);
    //force.start();
		//console.log(event);
		//alert("Tap! "+d.name);
  //.transition()
  node.selectAll('circle')
  .transition().duration(1000)
    /*.style('fill',function(e,i){
    if(d==e)return 'blue';
    else return 'white';
  })*/
  .attr('r',function(e,i){
    if(d==e&&fg!=e) {//this.moveToFront();
      //var sel = d3.select(this);
  //sel.moveToFront();
                     fg = d;return 2000;}
    else if(fg ==e )
      {fg = -1;return 30;}
    else return 30;
  })
.attr('r',function(d,i){
if(fg==-1) return 70;
else if(d==e)return 2000;
else return 30;
})

  });
  /*
	Hammer(that).on("swipeleft", function(event){
		console.log(event);
		alert("Swipe Left! "+d.name);
	});
	Hammer(that).on("swiperight", function(event){
		console.log(event);
		alert("Swipe Right! "+d.name);
	});
	
	
	//iphone??up,down??????????
	Hammer(that).on("swipeup", function(event){
		console.log(event);
		alert("Swipe UP! "+d.name);
	});
	Hammer(that).on("swipedown", function(event){
		console.log(event);
		alert("Swipe Down! "+d.name);
	});*/
}

force.start();