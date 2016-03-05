var   w = 1000,
      h =  550,
      circleWidth = 5; 
      Catagory_select=-1;

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
      { name: "MENU", target: [0,1,2,4], value: 70,px: 500,py: 250 }, 
      { name: "MAIN-COURSE", target: [], value: 70 }, 
      { name: "SNACKS",target: [], value:70},
      { name: "DRINKS", target: [], value: 70 },
      { name: "DESSERTS", target: [], value: 70 },  
      { name: "SALADS", target: [], value: 70 }, 


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
      .charge(-2000)
      .size([w,h]); 

      var link = myChart.selectAll('line') 
            .data(links).enter().append('line')
            .attr('stroke', palette.lightgray)
            .attr('stroke-width', '0')
            .attr('stroke-opacity','1');

      var node =  myChart.selectAll('circle')  
            .data(nodes).enter() 
            .append('g')
            .attr('id',function(d,i){return 'Catogary'+i;})
            .each(function(d, i){
              //force.drag=true;
    addHummerEventListener(this, d);
  })
            .call(force.drag); 

     var idef =  myChart.append('defs').append('mask')
     .attr('id','maskmenu')
     .attr('x','0%')
     .attr('y' , '0%')
     .attr('width','100%')
     .attr('height','100%');

      idef.append('circle')
            .attr('cx',0)
            .attr('cy',0)
            .attr('r', 85)
            .attr('fill','white')
            .attr('fill-opacity',1)
            ;
            
            idef.append('text')
      //.attr('id','text_wrap')
           .text('MENU')
            .attr('y','14')
            //.attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
            .attr('text-anchor', 'middle')
            .attr('font-size', '2.5em')
            .attr('font-weight','bold') ;





 
      node.append('animateTransform')
      .attr('attributeType','xml')
      .attr('attributeName','transform')
      .attr('type','rotate')
      .attr('values', function(d,i) {
        // body...
      if(i==0) return '0 0 0; 360 0 0'})
      .attr('dur','5s')
      .attr( 'additive','sum' )
      .attr('repeatCount', 'indefinite');

     node.append('circle')
     
            .attr('cx', function(d,i){if(i==0) {d.fixed=true; return d.x;}
              else return d.x; })
            .attr('cy', function(d,i){
               return d.y; })
            .attr('r', function(d,i){
                  console.log(d.value);
                  
                        return circleWidth + d.value; 
                  
            })
            .attr('fill-opacity',function(d,i){ 
                  if ( i == 0 ) {
                        return 0.4;
                  }
                  else{
                    return 0;
                  }

            })
            .attr('fill', function(d,i){
                  if ( i == 0 ) {
                        return palette.lightgray;
                        //return 'orange';
                  }
                  else{
                    return 'white';
                  }
                  
            })
             
            .attr('stroke-dasharray',function(d,i){
              if(i==0){
                return '84 ,10';
              }
            })
            .attr('stroke-width', function(d,i){
                  if(i==0) return '5';
                      else  return '7';
            })
            .attr('stroke-opacity',0.6)
            .attr('stroke', function(d,i){
                  
                        return palette.lightgray;
                  
            })
             .attr('mask',function(d,i){
              if(i==0) return 'url(#maskmenu)';
            }); 
            //.attr('transform','rotate(90 150 160) rotate(90 150 80)');
            


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

      
      node.append('text')
            .attr("id","rot")
            .text(function(d,i){ if(i!=0)return d.name; })
            .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
            .attr('fill', function(d, i){
              console.log(d.value);
                 
                        return 'white';
                  
            })
            .attr('text-anchor', function(d, i) {
                  return 'middle';
            })

            .attr('font-size', function(d, i){
                  if (i==0) {
                        return '1.6em';
                  } else {
                        return '1.2em';    
                  }
            }) 

           

           

           
var present_catgory_select= -1;



function addHummerEventListener(that, d){
  

  Hammer(that).on("tap", function(event){
     force.stop(); force.on('tick',null);
     $('#pattern').css('visibility','hidden');
     if(present_catgory_select!=-1){
      if(d==present_catgory_select) return;
      
      closeWrapper();
     } 

     var id;
     node  
               .style('visibility',function(e,i){
                    if(d!=e) {e.fixed=true;return 'hidden';}  
                    else{ e.fixed=true;id=i;return 'visible';};
                    }
                 )
           .transition().duration(1000)
           .attr('transform',function(e,i){
            if(d==e)return 'translate('+(500)+','+(282  )+')';
            //else return 'translate('+(e.x)+','+(e.y)+')';
            })
         // .on(".drag", null);

       node.selectAll('circle')
           .transition().duration(1000)          
            .attr('r',function(e,i){
          if(d==e) return 2000;
          else return 20;  
            })
            .transition().duration(1000) 
            .attr('r',function(e,i){
          if(d==e) {present_catgory_select = d; return 64;}
          else return 20;  
            }).attr('stroke-width',function(e,i){
          if(d==e) { return 7;}
          else return 2;  
            });

        node.selectAll('text')
            .attr('font-size',function(e,i){
          if(d==e) {return '1.2em';}
          else return '.6em';  
            });    

             setTimeout(function() {
   
              openpage2(d,id);
              }, 1500);
   //Catagory_select=id;

   


    

   });
  
}



force.start();