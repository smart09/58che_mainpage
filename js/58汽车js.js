//搜索框调出内容
 $("body").click(function(){
	 $(".brand").hide();
 });
 $(".key").click(function(e){
	 $(".brand").show();
	 e.stopPropagation();//阻止冒泡到body
 });
 $(".brand").click(function(e){
	 e.stopPropagation();//阻止冒泡到body
 });
//搜索框文字获取焦点/失去焦点时显示/隐藏
$(function(){
	var txtSearch=document.getElementById("j_keywords");
	txtSearch.onfocus=function()
	{
		if(this.value=="宝马3系"){
			this.value="";
		}
	};
	txtSearch.onblur=function()
	{
		if(this.value==""){
			this.value="宝马3系";
		}
	};
});

//选品牌、选车系交互
$("#header-search-pb").click(function(){
	$("#search-pb").toggle();
});

//热门车型版块tab切换
function setTab(n){
	var tabs=document.getElementById("pt-newcar-tit").getElementsByTagName("li");
	var show=document.getElementById("pt-newcar-view").children;
	for(var i=0;i<tabs.length;i++){
		if(i==n){
			tabs[i].className="tab_cur";
			show[i].className="jswitch";
		}
		else{
			tabs[i].className="";
			show[i].className="newcar-con";
		}
	}
}

//重点推荐滚动文字链
$(function(){
	var oWrap=document.getElementById("recommend-con");
	var oInner=document.getElementById("recommend-item");
	var times=null;
	oInner.innerHTML+=oInner.innerHTML;
	oInner.style.width=oInner.getElementsByTagName("li")[0].offsetWidth*oInner.getElementsByTagName("li").length+"px";
	function move(){
		times=setInterval(function(){
			oWrap.scrollLeft+=1;
			if(oWrap.scrollLeft>=(oInner.offsetWidth/2)){
				oWrap.scrollLeft=0;
			}
		},30)
	}
	oWrap.onmouseover=function(){
		clearInterval(times);
	};
	oWrap.onmouseout=function(){
		clearInterval(times);
		move();
	};
	move();
});

//焦点图轮播交互
$(function(){
var size=$("#focus-con li").length;
$("#pt_first_left span").append("<i>"+"/ "+size+"</i>");
$("#pt_first_right span").append("<i>"+"/ "+size+"</i>");
$("#focus-con li").eq(0).show();  //显示第一张焦点图
//自动轮播
var i=0;
var t=setInterval(move,4000);
//核心向左运动函数
function moveL(){
	i--;
	if(i==-1){
		i=size-1;
	}
	$("#focus-con li").eq(i).fadeIn(300).siblings().fadeOut(300);
	var num1=i+1;
	$("#pt_first_left em").text(num1);
	$("#pt_first_right em").text(num1);
}
//核心向右运动函数
function move(){
	i++;
	if(i>size-1){
		i=0;
	}
	$("#focus-con li").eq(i).fadeIn(300).siblings().fadeOut(300);
	var num2=i+1;
	$("#pt_first_left em").text(num2);
	$("#pt_first_right em").text(num2);
}
$("#pt_first_left").click(function(){
	moveL();
});
$("#pt_first_right").click(function(){
	move();
});
//定时器
$("#focusbox").hover(function(){
  clearInterval(t);
},function(){
	t=setInterval(move,4000);
});
});
	
//车系新闻交互
$("#report-tit li").mouseenter(function(){
	var num3=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".news-con-item").eq(num3).addClass("cur").siblings().removeClass("cur");
});

//汽车视频/厂商访谈交互
$("#video-tit li").mouseenter(function(){
	var num4=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".video-pic").eq(num4).addClass("cur").siblings().removeClass("cur");
});

//栏目推荐tab交互
$(".col-tab li").mouseenter(function(){
	var num5=$(this).index();
	$(this).addClass("act").siblings().removeClass("act");
	$(".tab-pic").eq(num5).addClass("cur").siblings().removeClass("cur");
});

//城市切换
$("#market-tit #city").click(function(){
	$("#swithc-city").toggle();
});

//一屏右侧”大家都看什么车“
$(".inter-slider-l li").mouseenter(function(){
	var num6=$(this).index();
	$(this).addClass("acti").siblings().removeClass("acti");
	$(".tab-pic2").eq(num6).addClass("curr").siblings().removeClass("curr");
});

//北京车市tab切换
$("#local-che-tit li").mouseenter(function(){
	var num7=$(this).index();
	$(this).addClass("actcra").siblings().removeClass("actcra");
	$(".che-item").eq(num7).addClass("curacc").siblings().removeClass("curacc");
});

//本地促销资讯、热门信息切换js
$(".info-tit li").mouseenter(function(){
	var num8=$(this).index();
	$(this).addClass("cra").siblings().removeClass("cra");
	$(".info-item").eq(num8).addClass("cur").siblings().removeClass("cur");
});

//认证经销商轮播交互
function dotClick(ulName,dotName,moveTime){
	var myUl=$(ulName)
	var myli=$(ulName).children("li:first");
	var mylis=$(ulName).children("li");
	var dot=$(dotName);
	//var dotNumbers=1;
	var tbsc=null;
	var tips=$(myli).clone(true);
    myUl.append(tips);
	var mylilast=$(ulName).children("li:last");
	var mydotlast=$(dotName).children("li:last");
	//点击事件
	var num10=0;
	var num11=0;  //小点图标
	var imgwidth=myUl.children("li").css("width");
	imgwidth=parseInt(imgwidth);
	var steps=myUl.children("li").length;
	myUl.width(imgwidth*steps)
	//定时器
	function sport(){
		num10++;
		num11++;
		var distance=imgwidth*-num10;
		if(num10>myUl.children("li:last").index()){
			num10=1;
			myUl.css("left",0).stop().animate({left:(imgwidth*-1)},300);
		}else
		{
			myUl.stop().animate({left:distance},300);
		}
		if(num11>mydotlast.index()){
			num11=0;
			dot.children("li").eq(num11).addClass("rua").siblings().removeClass("rua");
		}else
		{
			dot.children("li").eq(num11).addClass("rua").siblings().removeClass("rua");
		}
	}
	tbsc=setInterval(sport,moveTime);
	var distbts;
	dot.children("li").click(function(){
		distbts=imgwidth*$(this).index()*-1;
		$(this).addClass("rua").siblings().removeClass("rua");
		myUl.animate({left:distbts},300);
		num10=$(this).index();
		num11=$(this).index();
		clearInterval(tbsc);
		tbsc=setInterval(sport,moveTime);
	});
	mylis.hover(function(){
		clearInterval(tbsc);
	},function(){
		tbsc=setInterval(sport,moveTime);
	});
}
dotClick($(".sum"),$(".dots"),4000);

//新车日历鼠标划过时js交互
$(".calen-img").mouseover(function(){
	$(this).find(".cal-txt").slideDown("1000");
});
$(".calen-img").mouseleave(function(){
	$(this).find(".cal-txt").slideUp("fast");
});

//新车日历内容轮播
$(function(){
	var j=0;
	var clone=$(".calen-item .cal-sum li").first().clone();
	var myli=parseInt($(".calen-item .cal-sum li").css("width"));
	$(".calen-item .cal-sum").append(clone);
	var size=$(".calen-item .cal-sum li").size();
	for(var k=0;k<size-1;k++){
		$(".dots2").append("<li></li>")
	}
	$(".dots2 li").first().addClass("rua2");
	//鼠标划入圆点效果
	$(".dots2 li").hover(function(){
		var indexs=$(this).index();
		j=indexs;
		$(".calen-item .cal-sum").stop().animate({left:-indexs*myli},300);
		$(this).addClass("rua2").siblings().removeClass("rua2");
	})
	//自动轮播
	var T=setInterval(MoveL,5000);
	function MoveL(){
		j++;
		if(j==size){
			$(".calen-item .cal-sum").css({left:0});
			j=1;
		}
			$(".calen-item .cal-sum").stop().animate({left:-j*myli},300);
			if(j==size-1){
				$(".dots2 li").eq(0).addClass("rua2").siblings().removeClass("rua2");
			}else{
				$(".dots2 li").eq(j).addClass("rua2").siblings().removeClass("rua2");
			}
	}
	function MoreR(){
		j--;
		if(j==-1){
			$(".calen-item .cal-sum").css({left:-(size-1)*myli});
			j=size-2;
		}
		$(".calen-item .cal-sum").stop().animate({left:-j*myli},300);
		$(".dots2 li").eq(j).addClass("rua2").siblings().removeClass("rua2");
	}
	//向左运动按钮
	$("#F-prev").click(function(){
		MoveL();
	})
	//向右运动按钮
	$("#F-next").click(function(){
		MoreR();
	})
	//定时器操作
	$(".calen-con").hover(function(){
		clearInterval(T);
	},function(){
		T=setInterval(MoveL,5000);
	})
});

//二手版块
$(".ershou-con-tit li").mouseenter(function(){
	var num21=$(this).index();
	$(this).addClass("cua").siblings().removeClass("cua");
	$(".ershou-item").eq(num21).addClass("caut").siblings().removeClass("caut");
});


//美车致tab切换
$("#meiche li").mouseenter(function(){
	var num20=$(this).index();
	console.log(num20)
	$(this).addClass("actcra").siblings().removeClass("actcra");
	$(".che-item2").eq(num20).addClass("curaccb").siblings().removeClass("curaccb");
});

//右侧浮动
function float_nav(dom){
	var right_nav=$(dom);
	var nav_height=right_nav.height();
	function right_nav_position(bool){
		var window_height=$(window).height();
		var nav_top=(window_height-nav_height)/2;
		if(bool){
			right_nav.stop(true,false).animate({top:nav_top+$(window).scrollTop()},400);
		}else
		{
			right_nav.stop(true,false).animate({top:nav_top},300);
		}
		right_nav.show();
	}
	if(!+"\v1" && !window.XMLHttpRequest){
		$(window).bind("scroll resize",function(){
			if($(window).scrollTop()>800){
				right_nav_position(true);
			}else{
				right_nav.hide();
			}
		})
	}else{
		$(window).bind("scroll resize",function(){
			if($(window).scrollTop()>800){
				right_nav_position();
			}else{
				right_nav.hide();
			}
		})
	}
}
float_nav(".Lf-con-nav")

//浮动导航鼠标划过时交互
$("#Lf-con-nav li").mouseenter(function(){
  $(this).addClass("on").siblings().removeClass("on");
})

//点击顶部按钮时交互
$(".top").click(function(){
	$("html,body").animate({scrollTop:0},120);
})
$("#news").click(function(){
	$("html,body").animate({scrollTop:800},120);
})

$("#newcar").click(function(){
	$("html,body").animate({scrollTop:1600},120);
})

$("#selecar").click(function(){
	$("html,body").animate({scrollTop:2200},120);
})

$("#ordercar").click(function(){
	$("html,body").animate({scrollTop:2800},120);
})

$("#yongcar").click(function(){
	$("html,body").animate({scrollTop:3200},120);
})
$("#carbbs").click(function(){
	$("html,body").animate({scrollTop:3600},120);
})
$("#carpic").click(function(){
	$("html,body").animate({scrollTop:3800},120);
})


