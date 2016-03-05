
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
	

console.log("hellohh");



var pp = 36;
pp = pp/3;

// $scope.nodes = nodes;
// $scope.nodes1 = nodes1;

//start of lman1
$scope.lman1=function(i){
console.log("hello from here");
// $.get("subCategory/",{category_id:i},function(data){
      
//       var json= JSON.parse(data);
//       console.log(json);
//      // console.log(json[0].name);
//       var nodes = [];
//       var nodes1= [];


//    for (var i =0;i<json.length/2;i++)
// {
//     nodes.push(
//         json[i]
//     );
// }
//   for (var i =json.length/2;i<json.length;i++)
// {
//     nodes1.push(
//         json[i]
//     );
// }

// console.log(data);   


// $scope.nodes = nodes;
// $scope.nodes1 = nodes1;

// });

// $('.upper_half').css('visibility','visible');
// $('.lower_half').css('visibility','visible');

};





// $scope$timeout.khol=function(){

// }


//end of lman


// var beech = "../../static/images/POHA.jpg"; ///middle image on button click of item
// var chosenone = "Half Poha";      //item name

// $scope.beech = beech;
// $scope.chosenone = chosenone;

// $scope.khol = function(node){
// $(".cn-button").css("display","none");
//       var astring = node.details; //details
// var tokens = astring.split(' ');
// var n = tokens.length;
// $scope.part1 = tokens.slice(0, n/4).join(' ');
// $scope.part2 = tokens.slice(n/4 ,n/2).join(' ');
// $scope.part3 = tokens.slice(n/2, 3*n/4).join(' ');
// $scope.part4 = tokens.slice(3*n/4, n).join(' ');
        
//         $( '.main_scroll' ).css("visibility","visible");
//         $( '.list' ).makisu( 'close' );
    
        
//          $timeout(function(){$( '.list' ).makisu( 'open' );chosenone = node.name;$scope.chosenone = chosenone;beech = node.picture;$scope.beech = beech;}, 50);
         
       
//         $("#bg1").css("display","block");

        

// }
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