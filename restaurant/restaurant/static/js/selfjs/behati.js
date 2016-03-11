// It is timed, if you wait the box will slide in automatically.

$(document).ready(function(){
  
  // Setting variable so we only access the DOM once
  // var slide = $(".slide");
  var wrap = $(".wrap");
  
  // setTimeout(function(){
  //   $(slide).animate({marginLeft: "200px"});
  // }, 2000);
  
  $(".button").on("click", function(){
  	if ($(wrap).css("marginRight") == "0px") {

  		$(wrap).animate({marginRight:"200px"});
      $(".x2").animate({top:"50%"});
      $(".x1").animate({top:"0%"});
  	}else if ($(".wrap").css("marginRight") == "200px") {
  		$(wrap).animate({marginRight: "0px"});
      $(".x2").animate({top:"100%"});
      $(".x1").animate({top:"-50%"});
  	};

  	// $(wrap).animate({marginRight: "200px"});
    
		// if($(slide).css("marginLeft") == "-200px"){
		// 	$(slide).animate({marginLeft: "0px"});
		// }else if($(".slide").css("marginLeft") == "0px"){
		// 	$(slide).animate({marginLeft: "-200px"});
		// }

  

	 });	
});

  //  $(".button").on("click", function(){
  // if($('#neeche').css("visibility" == "hidden")){
  //   $(body).css({background-color:"#ffff00"});
  // }else if($('#neeche').css("visibility" == "visible")){
  //   $(body).css({background-color:"#33cc33"});
  // }; 
  // };

function cmc(){
      chin = document.getElementById('chinchu');
      chin.style.visibility = (chin.style.visibility != 'visible' ? 'visible' : 'hidden' );      
    };

function dikha(){
  upardekh = document.getElementById('upar');
  neechedekh= document.getElementById('neeche');
  upardekh.style.visibility = (upardekh.style.visibility != 'visible' ? 'visible' : 'hidden');
  neechedekh.style.visibility = (neechedekh.style.visibility != 'visible' ? 'visible' : 'hidden');
  // body.style.filter = 'blur(10px)';
};

function dhundh(){

  // $("#upup").css("filter","blur(8px)");
  // $("#downdown").css("filter","blur(8px)");
  up1 = document.getElementById('upup');
  car = document.getElementById('cart_button');
  car.style.display = (car.style.display != 'none' ? 'none' : 'block');
  down1 = document.getElementById('downdown');
  up1.style.filter = (up1.style.filter != 'blur(5px)' ? 'blur(5px)' : 'blur(0px)');
  down1.style.filter = (down1.style.filter != 'blur(5px)' ? 'blur(5px)' : 'blur(0px)');
  up1.style.webkitFilter = (up1.style.webkitFilter != 'blur(5px)' ? 'blur(5px)' : 'blur(0px)');
  down1.style.webkitFilter = (down1.style.webkitFilter != 'blur(5px)' ? 'blur(5px)' : 'blur(0px)');
  // gola = document.getElementById('cn-wrapper');
  // gola.style.webkitFilter = (gola.style.webkitFilter != 'blur(5px)' ? 'blur(5px)' : 'blur(0px)');
  // compo = document.getElementById('component');
  // compo.style.webkitFilter = (compo.style.webkitFilter != 'blur(5px)' ? 'blur(5px)' : 'blur(0px)');
};

// $(".button").on("click", function(){

// };

function scrollWin(x, y){
  window.scrollBy(x, y);
}


