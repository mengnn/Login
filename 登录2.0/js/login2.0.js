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
function input_change(obj){
  alert(123);
  $(obj).css("border-bottom","3px solid #4078cb")
}
$("#userName").keyup(function(){
  var h=$(this).val();
  if(h!=""){
    $(this).css("border-bottom","2px solid #4078cb");
    $(".i12").css("color","#4078cb");
  }else{
    $(this).css("border-bottom","1px solid #999999");
    $(".i12").css("color","#B3B3B3");
  }
})
$("#passWord").keyup(function(){
  var h=$(this).val();
  if(h!=""){
    $(this).css("border-bottom","2px solid #4078cb");
    $(".i13").css("color","#4078cb");
  }else{
    $(this).css("border-bottom","1px solid #999999");
    $(".i13").css("color","#B3B3B3");
  }
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
   var userVal=$("#userName").val();
   var passVal=$("#passWord").val();
   if(userVal==""&&passVal==""){
     $(".user_1").css("display","block");
     $(".pass_1").css("display","block");
   }if(userVal==""){
     $(".user_1").css("display","block");
   }if(passVal==""){
     $(".pass_1").css("display","block");
   }




});


})
