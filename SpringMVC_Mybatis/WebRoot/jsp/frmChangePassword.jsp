<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
  </head>
  
  <body class="easyui-layout">
  	<div data-options="region:'north'" style="height:40px;overflow:hidden">
    	 <div class="opreationdiv">
                <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save',plain:true" onclick="return ChangePwd();">保存</a> 
                <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="return CloseWin('frmChangePassoword');">取消</a>
         </div>
    </div>
    
    <div data-options="region:'center'" style="height:80px;">
	    <form id="frmAdd"  method="post">
		    <div class="InputForm">
			     <table width="100%">
			     	<tr></tr>
			     	<tr>
			                  <th>旧密码：</th>
			                  <td>    
			                        <input type="password" class="Modify_div_con_input" id="oldpassword" />
			                  </td>   
		                  </tr>
		                  <tr>
			                  <th >新密码：</th>
			                  <td>    
			                        <input type="password" class="Modify_div_con_input" id="newpassword" />
			                  </td> 
		                  </tr>
		                  <tr>  
			                  <th >验证新密码：</th>
			                  <td>    
			                        <input type="password" class="Modify_div_con_input" id="repassword" />
			                  </td>
		                  </tr>   
			    </table>
		    </div>
	    </form>
    </div>
  	
	<script type="text/javascript">
		function ChangePwd() {
			//ajax调用保存数据库
			$.messager.confirm('确认信息','确认要修改密码吗？', function(r){   
	    	if (r) {
	    		var oldpass = $('#oldpassword').val();
	    		var newpass = $('#newpassword').val();
	    		var repass = $('#repassword').val();
	    		if ((oldpass == '') || (newpass == '') || (repass == '')) {
	    			$.messager.alert('系统提示','密码为空，请输入相应的密码！','warning'); 
	    			return;
	    		}
	    		if (newpass != repass) {
	    			$.messager.alert('系统提示','两次输入新密码不一致！','warning'); 
	    			return;
	    		}
	    		//画面验证,如果验证不通过则退出
                if (!$("#frmAdd").form('enableValidation').form('validate')) {
                    return false;
                } else {
					$.post("${pageContext.request.contextPath}/sys/User/ModifyPwd.action",{"oldPassword":oldpass, "newPassword":newpass}, 
					function(result){
	                	var rst = JSON.parse(result);   
	           			if (rst.result == "success") {
	           				$.messager.alert('系统提示','密码修改成功！', 'info'); 
	           				Logout();
							CloseWin('frmChangePassoword');
	                    } else
	                    	$.messager.alert('系统提示','密码修改失败：' + rst.data, 'error'); 
	                });
                }
			}
		});
	};
	
	 function Logout() {
			$.ajax({  
				url:'${pageContext.request.contextPath}/logout.action',
				type: 'post',  
				success:function(data){
					$.messager.alert('提醒信息','您已完全退出，系统将自动返回登录页面！','info');
					window.location.href = '${pageContext.request.contextPath}/index.jsp'; 
				}
	        });
		};
	</script>
  </body>
</html>
