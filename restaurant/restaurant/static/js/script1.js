
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
	// var nodes = [
 //      { name: "shahi paneer" , price : 510  },
 //      { name: "matar paneer",  price: 450 },
 //      { name: "dal makhni",  price: 300 },  
 //      { name: "half poha",  price: 10 },
 //      { name: "deepa ka dudh",  price: 15 },
 //      { name: "randi",  price: 1000 },
 //      { name: "butter roti",  price: 15 },
 //      { name: "lazania",  price: 600 },
 //      { name: "masali patti",  price: 150 },
 //      { name: "garam bornvita",  price: 150 },
 //      { name: "thanda bornvita",  price: 200 },
 //      { name: "aloo parantha",  price: 500 }];
    
nodes=[];
for (var i =0;i<array2.length/2;i++)
{
    nodes.push({
        name:array2[i],
        price:array3[i]
    });
}


 var nodes1 = [];
for (var i =array2.length/2;i<array2.length;i++)
{
    nodes1.push({
        name:array2[i],
        price:array3[i]
    });
}



var pp = 36;
pp = pp/3;

$scope.nodes = nodes;
$scope.nodes1 = nodes1;
$scope.lman1=function(i){

$.get("subCategory/",{category_id:i},function(data){
      
      var json= JSON.parse(data);
      //console.log(json[0].name);
      var nodes = [];
      var nodes1= [];

   for (var i =0;i<json.length/2;i++)
{
    nodes.push(
        json[i]
    );
}
  for (var i =json.length/2;i<json.length;i++)
{
    nodes1.push(
        json[i]
    );
}   
// for (var i =0;i<json.length/2;i++)
// {
//     nodes.push({
//         name:json[i],
//         price:json[i]
//     });
// }
// for (var i =json.length/2;i<json.length;i++)
// {
//     nodes1.push({
//         name:json[i],
//         price:json[i]
//     });
// }   
$scope.nodes = nodes;
$scope.nodes1 = nodes1;

});

}
//$scope.lman=lman;

});



function lman(){
      var x = document.getElementById("bg1");
       x.style.display= "block";


      //$("#bg1").animate({display : 'block'});
};

