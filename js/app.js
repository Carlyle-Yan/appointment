$(document).ready(function(){
	//info
	$(".info input").focus(function(){
    	$(".info-img img").attr("src","./img/info_per_active.png");    	
	});
	$(".info input").blur(function(){
	    $(".info-img img").attr("src","./img/info_per.png");
	});
	
	$("#sub-btn").click(function(){
		if(($("#lastName").val()==""||$("#lastName").val()==null)||($("#taobao").val()!=""
		||$("#lastName").val()!=null)
		||($("#taobao").val()!=""||$("#lastName").val()!=null)
		||$("#iphone").val()!=""||$("#iphone").val()!=null
		||$("#weixin").val()!=""||$("#weixin").val()!=null){
			alert("请完善个人信息！");
		}		
	});
	

	$("#lastName").bind("input propertychange",function(){
		if($("#lastName").val()!=""||$("#lastName").val()!=null){
			$("#lastName").siblings("span").css("opacity","0");
		}
		if($("#lastName").val()==""||$("#lastName").val()==null){
			$("#lastName").siblings("span").css("opacity","1");
		}
	});
	
	$("#taobao").bind("input propertychange",function(){
		if($("#taobao").val()!=""||$("#lastName").val()!=null){
			$("#taobao").siblings("span").css("opacity","0");
		}
		if($("#taobao").val()==""||$("#lastName").val()==null){
			$("#taobao").siblings("span").css("opacity","1");
		}
	});
	
	$("#iphone").bind("input propertychange",function(){
		if($("#iphone").val()!=""||$("#lastName").val()!=null){
			$("#iphone").siblings("span").css("opacity","0");
		}
		if($("#iphone").val()==""||$("#lastName").val()==null){
			$("#iphone").siblings("span").css("opacity","1");
		}
	});
	
	$("#weixin").bind("input propertychange",function(){
		if($("#weixin").val()!=""||$("#lastName").val()!=null){
			$("#weixin").siblings("span").css("opacity","0");
		}
		if($("#weixin").val()==""||$("#lastName").val()==null){
			$("#weixin").siblings("span").css("opacity","1");
		}
	});
	
	
	//edu
	$(".edu input").focus(function(){
    	$(".edu-img img").attr("src","./img/choice_active.png");
	});

	//educ
	$(".li-top [name='educ']").click(function(){
		$(".li-top [name='educ']").each(function(){
			if(this.checked){
				$(this).parent().addClass("addCla");
				$(this).siblings("img").attr("src","./img/radio_active.png");
			}else{
				$(this).parent().removeClass("addCla");
				$(this).siblings("img").attr("src","./img/radio.png");
			}
		});
	});
	
	//jobSt
	$(".li-top [name='jobSt']").click(function(){
		$(".li-top [name='jobSt']").each(function(){
			if(this.checked){
				$(this).siblings("img").attr("src","./img/radio_active.png");
				$(this).parent().addClass("addCla");
			}else{
				$(this).siblings("img").attr("src","./img/radio.png");
				$(this).parent().removeClass("addCla");
			}
		});
	});	
	
	//hpYe
	$(".li-top [name='hpYe']").click(function(){
		$(".li-top [name='hpYe']").each(function(){
			if(this.checked){
				$(this).siblings("img").attr("src","./img/radio_active.png");
				$(this).parent().addClass("addCla");
			}else{
				$(this).siblings("img").attr("src","./img/radio.png");
				$(this).parent().removeClass("addCla");
			}
		});
	});
	
	//isImm
	$(".li-top [name='isImm']").click(function(){
		$(".li-top [name='isImm']").each(function(){
			if(this.checked){
				$(this).siblings("img").attr("src","./img/radio_active.png");
				$(this).parent().addClass("addCla");
			}else{
				$(this).siblings("img").attr("src","./img/radio.png");
				$(this).parent().removeClass("addCla");
			}
		});
	});
	
	//remark
	$(".remark-content textarea").focus(function(){
    	$(".remark-img img").attr("src","./img/remark_active.png");
	});
	$(".remark-content textarea").blur(function(){
	    $(".remark-img img").attr("src","./img/remark.png");
	});
	
	// required jQuery
	var placeholder = '信息或特殊要求的补充， \n填上您方便咨询的时间段, 例如9-11am';
	$('textarea').val(placeholder);
	$("textarea").css("color","rgb(164,154,140)");
	$('textarea').focus(function() {		
	    if ($(this).val() == placeholder) {
	        $(this).val('');
	        $(this).css("color","rgb(0,0,0)");
	    }
	});
	$('textarea').blur(function() {
	    if ($(this).val() == '') {
	        $(this).val(placeholder);
	        $(this).css("color","rgb(164,154,140)");
	    }
	})
});