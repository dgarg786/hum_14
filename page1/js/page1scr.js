var n=5;
			

			$(document).ready(function(){

				for ( var i = 0; i < n; i++ ) { 
					var $div = $("<div>", {id: ("foo"+i), class: "circle"});
			        $("#wrapper1").append($div);	
			        var pos=i*360/n;
			        //var dtr=pos+"deg"
			        $(("#foo"+i)).css("-webkit-transform","rotate("+pos+"deg) translateX(200px)");
				 $(("#foo")+i).css("background","#50dc64");		       

				}	


				$("#foo1").click(function(){
			        $(this).animate({
			            left: '200px',
			            top: '200px',
			            height: '+=150px',
			            width: '+=150px'
			        });
			    });
				 











 	     
 	
			});


