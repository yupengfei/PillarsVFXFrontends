 /* 用require.js实现的*/
require.baseUrl = "/"
require.config({
    baseUrl: require.baseUrl,
    path:{
       "jquery":"jslib/jquery",
       "user" :"js/user",
       "domready" : "js/domReady",
       
    },
    shim:{
       'bootstrap':{
          deps:['jquery']

       }


    }

});
require(['domready','jquery','user','pm',),function(doc,$,user,pm){
   doc(function(){
     
     $("#loginPage_loginButton")[0].onclick=function(){
         user.login();
     }
     pm.load();
   });
});





































/* 能实现的简单的js
 function User(username,userpassword)
{
  this.Username=username; 
  this.Userpassword=userpassword;  
}
 function checkUserNamePassword()
 {
    var username=$("#userName").val();
    var userPassword=$("#userPassword").val();
     //用户名的判断
    if(username.length==0)
    {
         alert("用户名不能为空");
    }else if(username.length>8)  //自己随便定的
    { 
         alert("用户名的长度不能超过8个字符");
    }
    //用户名密码的判断
    else{
        if(userPassword.length==0)
        {
           alert("用户密码不能为空");
        }else if(userPassword.length>6||userPassword.length<6)
        {
            alert("用户名的密码必需为6位");

        }
    }   
}*/

/*点击登陆按钮时的 js
$(document).ready(function(){
    $("#loginButton").click(function (){
         var stringToSend=JSON.stringfy(new User(
           $("#userCancelUserName").val(),$("#userCancelUserPassword").val();
           ));
           alert(stringTosend);
           $.post("/login", stringToSend,function(data,status){
             
                  var returnMessage=JSON.parse(data)
                    if(returnMessage.FeedbackCode!=2)  //data里面存储着登陆者的个人信息，所以要把它获取过来，并显示在一个可替代＃login的层＃successDiv层里
                      alert(data);
                    else
                        window.location.href='http://localhost:8080'
                    if(status=="success")
                         //隐藏原有的div,显示另外的div
                         $(#login).hide();
                         
                         $(#successDiv).show();
                    else(status=="fail")
                        alert("对不起，用户名或密码错误!");
                    else(status=="unregistered")
                        alert("对不起，该用户从未注册过!");
                    else(status=="frozen")
                        alert("对不起，该用户已被冻结！");

           }

    });



});*/
