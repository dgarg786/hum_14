
// items=[
// {name: "YOLO"}];
//console.log(array[0]);
// for (var i =0;i<array.length;i++)
// {
//     items.push({
//         name:array[i]
//     });
// }


var n = 6;
var angle = 360/n;


var selector = d3.select('ul');

// selector.selectAll('li').data(items).enter().append('li')
//                                     .text(function(d)
//                                         {
//                                             return d.name;
//                                         });

//function(d,i){return i;}
selector.selectAll('.cn-wrapper li').data(items).enter().append('li' )
//.attr('id','hello')
//.classed("nameId",true)
.attr('ng-click',function(d,i){return "lman1("+i+")"})
                        //.attr("style","-webkit-transform: rotate(76deg) skew("+(90-angle)+"deg);")
                        .append('a')
                        .attr('href','#')
                        //.attr("style","-webkit-transform: rotate(76deg) skew("+(-1)*(90-angle)+"deg);")
                        .append('span')
                        .text(function(d){ return d.name;});

// d3.select(' li').attr("style","-webkit-transform: rotate("+(90-angle/2)+"deg)  skew("+50+"deg)");
// d3.select(' a').attr("style","-webkit-transform: rotate("+(-1)*(90-(angle/2))+"deg) skew("+(-1)*50+"deg) scale(1)");
$(document).ready(function()
{
    $(".cn-wrapper li").css("-webkit-transform","rotate("+50+"deg)  skew("+(90-angle)+"deg)");
$(".csstransforms .cn-wrapper li a").css("-webkit-transform","skew("+(-1)*(90-angle)+"deg)" +"rotate("+(-1)*(90-angle/2)+"deg)  scale(1)");

});


(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');

		selector.selectAll('.csstransforms .opened-nav li')
            .attr("style", function(d,i)
            {
                return "-webkit-transform: rotate("+(angle)*i+"deg) skew("+(90-angle)+"deg);";
        	});
	      
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
