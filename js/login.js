$(function(){
	$(".btn").click(function(){
		if ($(".userName").val() == ""){
			alert("用户名不能为空");
		}else if ($(".password").val() == "") {
			alert("密码不能为空");
		}else{
			// 发送用户名和密码给后台
			$.ajax({
				type : "POST",
				url : "/geek/management/login",
				contentType : "application/json",
				data : {
					username : $(".userName").val(),
					password : $(".password").val()
				},
				success : function(data){
					var oData = data.data;
					if (data.success==true) {
						if (oData == "登录成功") {
							window.location.href = 'index.html';
						}else{
							alert("用户名或密码错误");
						}	
					}else{
						alert("服务器超时");
					}
				},
				error : function(){
					alert("请求失败");
				}
			})
		}
	})
})