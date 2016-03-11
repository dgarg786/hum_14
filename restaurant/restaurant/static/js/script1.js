
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope,$timeout){
	



//$scope.lman=lman;



$scope.lman1=function(i){
console.log("hello from here");
$.get("subCategory/",{category_id:i,mainCategory_id:mainCategory},function(data){
      
     // console.log(data);
      var json= JSON.parse(data);
      //console.log(json[0].name);
      var nodes = [];
      var nodes1= [];
      console.log(json.length);

   for (var i =0;i<Math.ceil(json.length/2);i++)
{
    nodes.push(
        json[i]
    );
}
  for (var i =Math.ceil(json.length/2);i<json.length;i++)
{
    nodes1.push(
        json[i]
    );
} 



//nodes1[5].pic="../../static/images/drinks.jpg";
//console.log(nodes1[5].pic);
$scope.nodes = nodes;
$scope.nodes2 = nodes1;
$scope.$apply();
      

      $("#hay1").css("display","block");
      $("#hay2").css("display","block");
      $("#hay3").css("display","block");
      $("#hay4").css("display","block");
      $("#arrow_img1").css("display","block");
      $("#arrow_img2").css("display","block");
      $("#arrow_img3").css("display","block");
      $("#arrow_img4").css("display","block");
$('#cart_button').css('display','block');
$('.upper_half').css('visibility','visible');
$('.lower_half').css('visibility','visible');
$('#addtocart').css('visibility','visible');
console.log("below visible");
});



};





// $scope$timeout.khol=function(){

// }


//end of lman


var beech = "../../static/images/POHA.jpg"; ///middle image on button click of item
var chosenone = "Half Poha";      //item name
var quant = 1;
$scope.beech = beech;
$scope.quant = quant;


var jugad;
var cart = [];
var quanti = [];
$scope.cart = cart;
var sum = 0;
$scope.summ = sum;
$scope.quanti = quanti;




// $scope.cart = cart;
$scope.xy = function(){
  //document.write(jugad.name);
  console.log(cart.indexOf(jugad));
  //cart.push({jugad :jugad ,quantity:quant});
  //var q;
  if(cart.indexOf(jugad)==-1){
  sum += jugad.price;
  cart.push(jugad);
  quanti.push(1);
  update_cart(1);


}
else{
  quanti[cart.indexOf(jugad)]++;
  update_cart(quanti[cart.indexOf(jugad)]);
  sum += jugad.price;
}
  $scope.cart = cart;
  $scope.quanti = quanti;
  $scope.summ = sum;
  console.log(cart);
    console.log(cart.indexOf(jugad));





   var moveback = move("#bye")
            .x(0)
          .y(0)
          .scale(1)
          .duration(0)
          .end();
        move("#bye")
          .x(450)
          .y(0)
          .scale(.005)
          .duration(2000)
          .then(moveback)
          .end();

}

$scope.del = function del(node){
  var ind = cart.indexOf(node);
  sum -= cart[ind].price * quanti[ind];
  $scope.cart.splice(ind, 1);
  $scope.quanti.splice(ind, 1);
  $scope.summ = sum;
};

// $scope.chosenone = chosenone;

$scope.khol = function(node){
jugad = node;
  console.log("klk");
$(".cn-button").css("display","none");
      var astring = node.details; //details
var tokens = astring.split(' ');
var n = tokens.length;
$scope.part1 = tokens.slice(0, n/4).join(' ');
$scope.part2 = tokens.slice(n/4 ,n/2).join(' ');
$scope.part3 = tokens.slice(n/2, 3*n/4).join(' ');
$scope.part4 = tokens.slice(3*n/4, n).join(' ');
        
        $( '.main_scroll' ).css("visibility","visible");
        $( '.list' ).makisu( 'close' );
        
    
        
         $timeout(function(){

          $( '.list' ).makisu( 'open' );
          chosenone = node.name;$scope.chosenone = chosenone;
          beech = node.pic;$scope.beech = beech;}, 50);
         
       
        $("#bg1").css("display","block");
        $("#bye").css("display","block");
        
     if(cart.indexOf(jugad)==-1){
  close_cart();
}
else{
  
  update_cart(quanti[cart.indexOf(jugad)]);
}


}
});


function allowDrop(ev) {
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

};

function update_cart(i){

var icon = document.getElementsByClassName("icon-hook");


   
    
    var currentClass = icon[0].getAttribute('class'); // The starting class

    

   icon[0].setAttribute('class', currentClass.replace(' active', ''));
      
setTimeout(function(){ 
currentClass = icon[0].getAttribute('class'); 
icon[0].setAttribute('class', currentClass + ' active');
      $('.one').text(i);

 }, 300);

      
    //}
 
};
function close_cart(){

var icon = document.getElementsByClassName("icon-hook");


   
    
    var currentClass = icon[0].getAttribute('class'); // The starting class

   

   icon[0].setAttribute('class', currentClass.replace(' active', ''));   


      
 
};


