


function openpage2(d,category_selected){
          
          force.stop();
          var g=100;
          

         node 
         .attr('transform',function(e,i){
                  if(d!=e && i!=0){ return 'translate('+(-50)+','+(-70)+')';}
                   else return 'translate('+(500)+','+(282)+')'; }
            )
         .style('visibility',function(e,i){
                    if(i==0) {return 'hidden';}  
                    else{ return 'visible';};
                    }
                 )
            .transition().duration(700)
            .attr('transform',function(e,i){
                  if(d!=e && i!=0){ g+=70; return 'translate('+(50)+','+(g)+')';}
                   else return 'translate('+(500)+','+(282)+')'; }
            );

                
               setup_centercircle(category_selected);
            // setTimeout(function() {   
            //   console.log("abdekho");
            //   $('.component').css("visibility","visible");
            //   }, 500);

             

            //   setTimeout(function() {   
            //   handler();
            //   }, 700);
      




  
}
  