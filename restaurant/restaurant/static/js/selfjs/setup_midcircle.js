//this is page all about coming from category to sub category

var selector = d3.select('ul');
var n = 6;
var angle = 360/n;
var items=[];
var mainCategory


function setup_centercircle(category_selected){
mainCategory=category_selected
items=[];
  
  $.get("category/",{category_id:category_selected},function(data){
      
      var json= JSON.parse(data);
     // console.log(json);
       for (var i =0;i<json.length;i++)
        {
        items.push(
            json[i]
        );
        }

  
      
n = items.length;
 angle = 360/n;




$('.component').remove();
console.log("hlj");
 var $comp = $("<div>", {class: "component"});
 var $wrapper = $("<div>", {id: "cn-wrapper", class: "cn-wrapper"});
 var $ul = $("<ul>"); //, {id: "cn-wrapper", class: "cn-wrapper"});
$ul.css("position","relative");
$wrapper.append($ul);
$comp.append($wrapper);
   
$('body').append($comp);
selector = d3.select('ul');
 new Propeller(document.getElementsByClassName('component'), {inertia: 0.95});    

selector.selectAll('.cn-wrapper li').data(items).enter().append('li' )
//.attr('onclick','lman()').
                        //.attr("style","-webkit-transform: rotate(76deg) skew("+(90-angle)+"deg);")
                       // .classed(function(d,i){return 'classmid'+i;},true)
                        // .append('a')
                        // .attr('href','#')
                        // //.attr("style","-webkit-transform: rotate(76deg) skew("+(-1)*(90-angle)+"deg);")
                        // .append('span')
                        // .text(function(d){ return d.name;});

                        .attr('onclick',function(d,i){return "lman1("+i+")"})
                        //.attr("style","-webkit-transform: rotate(76deg) skew("+(90-angle)+"deg);")
                        .append('a')
                        .attr('href','#')
                        //.attr("style","-webkit-transform: rotate(76deg) skew("+(-1)*(90-angle)+"deg);")
                        .append('span')
                        .text(function(d){ return d.name;});
$(document).ready(function()
{
    $(".cn-wrapper li").css("-webkit-transform","rotate("+50+"deg)  skew("+(90-angle)+"deg)");
    $(".cn-wrapper li").css("-moz-transform","rotate("+50+"deg)  skew("+(90-angle)+"deg)");
$(".csstransforms .cn-wrapper li a").css("-webkit-transform","skew("+(-1)*(90-angle)+"deg)" +"rotate("+(-1)*(90-angle/2)+"deg)  scale(1)");
$(".csstransforms .cn-wrapper li a").css("-moz-transform","skew("+(-1)*(90-angle)+"deg)" +"rotate("+(-1)*(90-angle/2)+"deg)  scale(1)");

});

     



});


 
}


function lman1(i){
  console.log("hello inside lman1");
angular.element($('body')).scope().lman1(i);
};


function handler(){
        
        wrapper = document.getElementById('cn-wrapper');
       
  
      this.innerHTML = "Close";
      classie.add(wrapper, 'opened-nav');
         

        
     selector.selectAll('.csstransforms .opened-nav li')
            .attr("style", function(d,i)
            {
                return "-webkit-transform: rotate("+(angle)*i+"deg) skew("+(90-angle)+"deg);-moz-transform: rotate("+(angle)*i+"deg) skew("+(90-angle)+"deg);";
            }); 
    
  
    
  }
  function closeWrapper(){
    classie.remove(wrapper, 'opened-nav');
  }


  function top_left(){
console.log( widt_row0);


// if(present_row0>500){
// present_row0-=500;}
// else
 present_row0=0;
console.log(present_row0);

// $('.row0').scrollLeft(0);

// $('.row0').animate({
//    scrollLeft: ""+present_row0
// }, 1000);

$('.row0').animate({
   scrollLeft: present_row0
}, 1000);



};
function top_right(){

// if(present_row0<(widt_row0-500)){
// present_row0+=500;}
// else 
  present_row0=widt_row0;

$('.row0').animate({
   scrollLeft: present_row0
}, 1000);






};

function bottom_left(){
console.log("3");





// if(present_row1>500){
// present_row1-=500;}
// else 
  present_row1=0;

$('.row1').animate({
   scrollLeft: present_row1
}, 1000);


};

function bottom_right (){
console.log("2");




// if(present_row1<(widt_row1-500)){
// present_row1+=500;}
// else 
  present_row1=widt_row1;

$('.row1').animate({
   scrollLeft: present_row1
}, 1000);




};
