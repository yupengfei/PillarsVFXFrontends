  
// 函数login_core
   var login_core = function(UserID,passwd,callback){
        window.res = {};
        //Password=a&Email=a
        $.post('/login_action',
            {
                Email:UserID,
                Password:passwd},
            function(data)
            {
                callback(data);
            },
            "json"
        );
    } 
//编写login函数，在函数login中有调用login_core函数
    var login = function () {
		console.log("login business start");
        UserID  = $('#userName')[0].value;
        passwd  = $('#userPassword')[0].value;
        if(UserID == "" || passwd == ""){
            pm.show('e',"用户名或者密码不能为空");
            return;
        }
		
        login_core(UserID,passwd,function(data){
            if(data.FeedbackCode ==0)
            {
                window.location="/loginSuccess.html";
            }
            else
            {
                pm.show('e',"用户名或密码错误");
            }
        });
    }

   