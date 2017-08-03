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
  <body>
    <div data-options="region:'north'" style="height:40px;overflow:hidden">
    	 <div class="opreationdiv">
                <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save',plain:true" onclick="return Save();">保存</a> 
                <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="return CloseWin('frmBaseUserAdd');">取消</a>
         </div>
    </div>
    
    <div data-options="region:'center'" style="height:100px; ">
    <form id="frmAdd"  method="post" modelAttribute="User" >
     <div class="InputForm">
	     <table width="100%">
	    	<tr>
	            <th>
	                                                      工号：
	            </th>
	            <td>
	                <input id="fstraffid" name="fstraffid" type="text"  class="easyui-validatebox input_add_text"  autocomplete="off" data-options="required:true"
	                value="${UserInfo.fstraffid}"/>         
	            </td>
	        </tr>
	    	<tr>
	            <th>
	                                                     用户：
	            </th>
	            <td>
	            	<input id="fuserid" name="fuserid" type="hidden" class="easyui-validatebox input_add_text" value="${UserInfo.fuserid}"/>
	                <input id="fusername" name="fusername" type="text"  class="easyui-validatebox input_add_text" data-options="required:true" autocomplete="off" 
	                value="${UserInfo.fusername}"/>         
	            </td>
	        </tr>
	    	<tr>
	            <th>
	                                                     密码：
	            </th>
	            <td>
	                <input id="fpassword" name="fpassword" type="password" class="easyui-validatebox input_add_text" data-options="required:true" autocomplete="off" 
	                value="${UserInfo.fpassword}"/>         
	            </td>
	        </tr>
	        <tr>
	            <th>
	                修改人：
	            </th>
	            <td  class="add_td">
	                <input id="fmodifier" name="fmodifier" type="text" class="easyui-validatebox input_add_text" 
	                autocomplete="off" disabled="true" value="${UserInfo.fmodifier}" />
	            </td>
	        </tr>
	        <tr>
	            <th>
	                修改时间：
	            </th>
	            <td>
	                <input id="fmodifytime" name="fmodifytime" type="text" class="easyui-validatebox" autocomplete="off" disabled="true" value="${UserInfo.fmodifytime}"/>
	            </td>
	        </tr>
	    </table>
    </div>
    </form>
    </div>
    
    <script type="text/javaScript">
    //--------------------------BEGIN 初始化 BEGIN-----------------------------------------
   	$(function(){
   	   //修改時間
   	   if  ($('#fuserid').val()=="" ) 
   	   {
   	   	  //新增
   	   	  $("#fmodifytime").val(GetSystemDateTime());
   	   }
   	   else
   	   {
   	      //修改
   	   	  DateTimeStamp3String("fmodifytime");
   	   }
   	});
    
	//--------------------------END   初始化   END------------------------------------------
    
    //--------------------------BEGIN 方法 BEGIN-----------------------------------------
    //保存
    function Save() {
    	//画面验证
    	if(!$('#frmAdd').form('validate'))
    	{
    		return false;
    	}
    	
    	//确认消息
       $.messager.confirm('确认提示','请确认是否保存该记录？',function(yes){   
	     if (yes)   
         {	  
         	if  ($('#fuserid').val()=="" ) 
         	{
	            $('#frmAdd').form('submit', {
					url:'${pageContext.request.contextPath}/base/User/AddUserInfo.action', 
				    onSubmit: function(data){
				    	//画面提交验证
				    	return $(this).form('validate');
				    },    
				    success:function(data){
				    if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','新增成功！','info'); 
		                        CloseWin('frmBaseUserAdd');
		                   }
		                   else
		                   {
		                     	  $.messager.alert('系统提示','新增数据失败！','warning'); 
		                   }
					}    
				});
			} 
			else 
			{
	            $('#frmAdd').form('submit', {		
					url:'${pageContext.request.contextPath}/base/User/EditeUserInfo.action', 
				    onSubmit: function(data){
				    var isValid=$(this).form('validate');
				    return   isValid;    
				    },    
				    success:function(data){
				    if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','更改成功！','info'); 
				                CloseWin('frmBaseUserAdd');	
		                   }
		                   else
		                   {
		                     	  $.messager.alert('系统提示','更改数据失败！','warning'); 
		                     	  		
		                   }
					}    
				});
			}
         }
       });
     }
     //--------------------------END   方法   END------------------------------------------
    </script>
  </body>
</html>
