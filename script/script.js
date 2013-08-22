var centery;
	var arcpics={
		1:"images/red.png",
		2:"images/black.png",
		3:"images/purple.png",
		4:"images/blue.png",
		5:"images/green.png",
		0:"images/orange.png"
	}
	var menuangles={
		0:{
			div:$("#zero"),
			backimg:"images/1.png",
			start:0,
			end:360+-15
		},
		1:{
			div:$("#one"),
			backimg:"images/2.png",
			start:60,
			end:360+9
		},
		2:{
			div:$("#two"),
			backimg:"images/3.png",
			start:120,
			end:360+33
		},
		3:{
			div:$("#three"),
			backimg:"images/4.png",
			start:180,
			end:360+57
		},
		4:{
			div:$("#four"),
			backimg:"images/5.png",
			start:240,
			end:360+81
		},
		5:{
			div:$("#five"),
			backimg:"images/6.png",
			start:300,
			end:360+105
		},
		limit:6

	}
	var obj={
		container:$("#container"),
		fullcirurl:"images/fullcir.png",
		baseangle:60
	};
	var angle=function(x,y)
	{
		var ang=Math.atan(y/x)*57.2957795;
		if(x<0)
		{
			ang=180+ang;
		}
		else if(x>0 && y<0)
		{
			ang=360+ang;
		}
		return ang;
	}
	var notselected=function(){
		obj.container.removeClass("movedown");
		obj.container.addClass("movecenter");
		for(i=0;i<menuangles.limit;i++)
		{
		menuangles[i].div.css({
				"-webkit-transform": "rotate("+menuangles[i].start+"deg)"	
			});
	}

	}
	var selected=function(){
		obj.container.removeClass("movecenter");
		obj.container.addClass("movedown");
		for(i=0;i<menuangles.limit;i++)
		{
		menuangles[i].div.css({
				"-webkit-transform": "rotate("+menuangles[i].end+"deg)"	
			});
	}

	}
	var menumanager=function(){
		//$("#container").removeClass(".movedown");
		for(i=0;i<menuangles.limit;i++)
		{
		//alert("sf");
		menuangles[i].div.css({
			"-webkit-transform": "rotate("+menuangles[i].start+"deg)",
			"background-image":"url("+menuangles[i].backimg+")"});
		//menuangles[i].div.addClass("clicked");
	}

k=0;
	$(".menus").click(function(){

        //centery=599;//$cir.offset().top+$cir.height()/2;
        //$cir.toggleClass("movedown","movecenter");
        /*$cir.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        	function(e) {   
        		centery=$cir.position().top+$cir.height()/2;
        	});*/
        //console.log(centerx,centery);
		if(k%2)
		notselected();
	else
		selected();
	k++;
		/*for(i=0;i<limit;i++)
		{
		//alert("sf");
		if(menuangles[i].div.hasClass("clicked"))
		{
			
			menuangles[i].div.css({
				"-webkit-transform": "rotate("+menuangles[i].end+"deg)"	
			});
		}
		else
		{
			menuangles[i].div.css({
				"-webkit-transform": "rotate("+menuangles[i].start+"deg)"	
			});
			
		}
		menuangles[i].div.toggleClass("clicked","notclicked");
	}*/
	
});
}
var makecircle=function(){
	var $cir=obj.container;
	var $fullcir=$cir.append("<div class='fullback' style='position:absolute;top:0px;left:0px;width:"+$cir.width()+"px;height:"+$cir.height()+"px;background-image:url("+obj.fullcirurl+");'></div>").find(':last');
	var $partcir=$cir.append("<div class='fullback' style='position:absolute;top:0px;left:0px;width:"+$cir.width()+"px;height:"+$cir.height()+"px;'></div>").find(':last');
	//$cir.addClass("movecenter");
	var centerx=$cir.offset().left+$cir.width()/2;
	centery=$cir.offset().top+$cir.height()/2;
	var centerxlocal=$cir.width()/2;
	var centerylocal=$cir.height()/2;
	var x,y,ang,num,oldnum=-1;
	$partcir.css({
		'-webkit-transform-origin': centerxlocal+ "px "+centerylocal+ "px"
	});

	$(".menus").css({
		'-webkit-transform-origin': centerxlocal+ "px "+centerylocal+ "px"
	});
	menumanager();
	//alert(menuangles[3].start)
	$(document).bind("mousemove",function(event){
		x=event.pageX;
		y=event.pageY;
		ang=angle((x-centerx),(-(y-centery)));
		num=ang/obj.baseangle;
		num=num>>0;
		//alert(num);
		$partcir.css({
			WebkitTransform: 'rotate(' + (-ang) + 'deg)'
		});
		if(num!=oldnum||oldnum==-1)
		{
			oldnum=num;
			$partcir.css({
				"background-image":"url("+arcpics[num]+")"
			})
		};
		console.log(centerx,centery);
	});
	/*$(document).click(function(){
		
        centery=599;//$cir.offset().top+$cir.height()/2;
        //$cir.toggleClass("movedown","movecenter");
        /*$cir.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        	function(e) {   
        		centery=$cir.position().top+$cir.height()/2;
        	});*/
       // console.log(centerx,centery);
   // });
	//alert(centerx+" "+centery);
}
$(function(){
	
	makecircle(obj);
	$(window).click(function(){
		$("#contentintro").addClass("show");
		$("#container").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        	function(e) {   
        		
		$("#menu1").addClass("showmenu");
		$("#mainmenus").addClass("pushright");
		$("#contentintro").addClass("comefront");
		$("#contentintro").addClass("pushright");
        	});
	})
	$("#menu1").click(function(){
		
		$("#menu2").addClass("comefront");
		$("#menu2").addClass("showmenu");
        		$("#cont2").addClass("moveright");
		
	})
})