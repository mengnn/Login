$(function(){

/*记住密码样式*/
 $(".i2").click(function(){
    var idName=$(this).attr("id");
   /* alert(idName);*/
    if(idName=="no"){
      $("#no").css("display","none");
      $("#yes").css("display","inline-block");
    }if(idName=="yes"){
      $("#yes").css("display","none");
      $("#no").css("display","inline-block");
    }
 })
/*输入框获得焦点样式*/
$("#phoneNumber").keyup(function(){
  var h=$(this).val();
  if(h!=""){
    $(this).css("border-bottom","2px solid #4078cb");
    $(".i13").css("color","#4078cb");
  }else{
    $(this).css("border-bottom","1px solid #999999");
    $(".i13").css("color","#B3B3B3");
  }
});
$("#yNumber").keyup(function(){
  var h=$(this).val();
  if(h!=""){
    $(this).css("border-bottom","2px solid #4078cb");
  }else{
    $(this).css("border-bottom","1px solid #999999");
  }
});
$("#passWord").keyup(function(){
  var h=$(this).val();
  if(h!=""){
    $(this).css("border-bottom","2px solid #4078cb");
    $(".i14").css("color","#4078cb");
  }else{
    $(this).css("border-bottom","1px solid #999999");
    $(".i14").css("color","#B3B3B3");
  }
});
$("#maillNumber").keyup(function(){
  var h=$(this).val();
  if(h!=""){
    $(this).css("border-bottom","2px solid #4078cb");
    $(".i17").css("color","#4078cb");
  }else{
    $(this).css("border-bottom","1px solid #999999");
    $(".i17").css("color","#B3B3B3");
  }
});
/*手机邮箱选项卡*/
$(".txt_l").click(function(){
  $(".phone").show();
  $(".maill").hide();
  $(this).css({
     background:"#4078cb",
     color:"#fff"
  });
  $(".txt_r").css({
     background:"#fff",
     color:"#4078cb"
  });
})
$(".txt_r").click(function(){
  $(".maill").show();
  $(".phone").hide();
  $(this).css({
     background:"#4078cb",
     color:"#fff"
  });
  $(".txt_l").css({
     background:"#fff",
     color:"#4078cb"
  });
});
/*改变密码显示方式*/
$("#pass").click(function(){
       /* alert(123);*/
        if($(this).hasClass("i16")){
          $(this).removeClass("i16");
          $("#passWord").attr("type","password");
        }else{
          $(this).addClass("i16");
          $("#passWord").attr("type","text");
        }
});
/*登录验证*/
$(".login_btn").click(function(){
   var passVal=$("#passWord").val();
   var passLength=$("#passWord").val().length;
   var phoneVal=$("#phoneNumber").val();
   var yVal=$("#yNumber").val();
   var phoneREG=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
   /*var passREG=/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]\/i/;*/
   var passREG=/^[A-Za-z0-9]+$/;

   if(passVal==""&&phoneVal==""&&yVal==""){
     $(".pass_1").css("display","block");
     $(".phone_1").css("display","block");
     $(".yN_1").css("display","block");
   }if(passVal==""){
     $(".pass_1").css("display","block");
     $(".pass_2").css("display","none");
     $(".pass_3").css("display","none");
   }if(phoneVal==""){
     $(".phone_1").css("display","block");
     $(".phone_2").css("display","none");
   }else{
      if(!phoneREG.test(phoneVal)){//手机号正则验证
    /*alert(123)*/
      $(".phone_2").css("display","block");
      $(".phone_1").css("display","none");
     }
   }
   if(yVal==""){
     $(".yN_1").css("display","block");
   }
   if(passLength<8){//密码字符个数验证
      $(".pass_2").css("display","block");
      $(".pass_3").css("display","none");
      $(".pass_1").css("display","none");
   }else{
      if(!passREG.test(phoneVal)){//密码组成正则验证
      $(".pass_3").css("display","block");
      $(".pass_2").css("display","none");
      $(".pass_1").css("display","none");
      }
   }


});





})
