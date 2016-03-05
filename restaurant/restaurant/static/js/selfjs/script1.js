


var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
	var nodes = [
      { name: "shahi paneer" , price : 510  },
      { name: "matar paneer",  price: 450 },
      { name: "dal makhni",  price: 300 },  
      { name: "half poha",  price: 10 },
      { name: "deepa ka dudh",  price: 15 },
      { name: "randi",  price: 1000 },
      { name: "butter roti",  price: 15 },
      { name: "lazania",  price: 600 },
      { name: "masali patti",  price: 150 },
      { name: "garam bornvita",  price: 150 },
      { name: "thanda bornvita",  price: 200 },
      { name: "aloo parantha",  price: 500 },


     
      
];
var nodes1 = [
      { name: "shahi paneer" , price : 510  },
      { name: "matar paneer",  price: 450 },
      { name: "dal makhni",  price: 300 },  
      { name: "half poha",  price: 10 },
      { name: "deepa ka dudh",  price: 15 },
      { name: "randi",  price: 1000 },
      { name: "butter roti",  price: 15 },
      { name: "lazania",  price: 600 },
      { name: "masali patti",  price: 150 },
      { name: "garam bornvita",  price: 150 },
      { name: "thanda bornvita",  price: 200 },
      

     
     
      
];
var nodes2 = [
      { name: "shahi paneer" , price : 510  },
      { name: "matar paneer",  price: 450 },
      { name: "dal makhni",  price: 300 },  
      { name: "half poha",  price: 10 },
      { name: "deepa ka dudh",  price: 15 },
      { name: "randi",  price: 1000 },
      { name: "butter roti",  price: 15 },
      { name: "lazania",  price: 600 },
      { name: "masali patti",  price: 150 },
      { name: "garam bornvita",  price: 150 },
      { name: "thanda bornvita",  price: 200 },
      { name: "aloo parantha",  price: 500 },

     
     
      
];
var pp = 36;
pp = pp/3;

$scope.nodes = nodes;
$scope.nodes2 = nodes2;
$scope.nodes1 = nodes1;

});

function lman(){
	var x = document.getElementById("bg1");
	//x.style.animation-name= "example";
  //x.style.animation-duration = "4s";
  x.style.display = "block";
      //$("#bg1").animate({display : "block"});

      /* Chrome, Safari, Opera */
    
};
  
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

