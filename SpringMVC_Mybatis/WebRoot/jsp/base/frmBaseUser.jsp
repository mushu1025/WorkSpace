<?xml version="1.0" encoding="UTF-8" ?>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>猪只类群</title>
  </head>
  <body>
  	<div data-options="region:'center'">
	  	<div class="easyui-layout" style="height:100%" style="border:0px">
		  	<!-- 工具栏 -->
		  	<div data-options="region:'north'" style="height: 40px; width: 100%; overflow:hidden;"scroll="no">
			  		<div class="opreationdiv" id="divopreation">
			<a  onclick="return Query()"     href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-query">查询</a>
			<a  onclick="return Add()"       href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-add">新增</a> 
			<a  onclick="return Edit()"      href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-edit">修改</a> 
			<a  onclick="return Delete()"    href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-delete">删除</a> 
		</div>
			</div>
            <div data-options="region:'center'">
				<table id="dg_control" class="easyui-datagrid" style="width:100%,height:100%" >
				</table>
            </div>
		</div>
	</div>
    
	<script type="text/javaScript">
	//--------------------------BEGIN 初始化 BEGIN----------------------------------------
		$(function(){
				//加载权限按钮
			$('#dg_control').datagrid({
				nowrap:false,
	            fitColumns: false, 
	            singleSelect:false,
	            rownumbers:true,
	            pagination:true,
	            fit: true,
	            pageSize:50,
	            pageList:[10,30,50,100],
				columns:[[
					{field:'opt', width:50, title:'操作', checkbox:'true', },
					{field:'fuserid',width:180,align:'left',title:'用户ID',hidden:true, sortable:true},
					{field:'fstraffid',width:80,halign:'center',align:'left',title:'工号', sortable:true},
					{field:'fusername',width:80,halign:'center',align:'left',title:'用户', sortable:true},
					{field:'fpassword',width:120,halign:'center',align:'left',title:'密码',hidden:true, sortable:true},
					{field:'fmodifier',width:120,halign:'center',align:'center',title:'修改人', sortable:true},
					{field:'fmodifytime', width:120, sortable : true ,title:'修改时间', align:'center', 
						formatter:function(value,row,index){
					  		return DateTimeStamp2String(value);
			          	}
					}
				]],
		        onLoadError:function(){
            		$.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
		        }
			});
			//页面初始化查询
			Query();
		});
	//--------------------------END   初始化   END------------------------------------------
	
	
	//--------------------------BEGIN 方法 BEGIN------------------------------------------
    //查詢
	function Query(){
	//參數
		var queryParams = $("#dg_control").datagrid('options').queryParams;  
		$('#dg_control').datagrid('options').queryParams = queryParams;
		/* $('#dg_control').datagrid({url: '${pageContext.request.contextPath}/getUser.action'}); */
		$('#dg_control').datagrid({url: '${pageContext.request.contextPath}/sys/GetUserList.action'});
	}
	
	//新增
	function Add() {
		openDialog("frmBaseUserAdd", "${pageContext.request.contextPath}/base/User/UserAdd.action", "用户新增", 300,350,false,
		function(){
		//页面重新查询
			Query();
			}
		);
	}
	
	//編輯
	function Edit() {
			var row = $('#dg_control').datagrid('getChecked');  
		//如果未选择
		if (row.length==0) {
	         $.messager.alert('系统提示', "请先勾选要修改的对象。", 'warning');
	         return false;
		 } 
		 //不支持批量修改
		 if (row.length > 1) {
		     $.messager.alert('系统提示', "不支持批量修改。", 'warning');
		     $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		     return false;
		 }
		 //弹出修改画面
		openDialog("frmBaseUserAdd", 
				"${pageContext.request.contextPath}/base/User/UserEdit.action?fuserid=" + row[0].fuserid, 
				"用户修改",300,350,false,
				function(){
					//页面重新查询
					Query();
						}
				);
	}
	
	//刪除
		function Delete() {
			var rowSel = $('#dg_control').datagrid('getChecked');
			//如果未选择
			if (rowSel.length == 0) {
				$.messager.alert("系统提示", "请先勾选要刪除的对象。", "warning");
				return;
			}
			
			var param = { "fuserids" : JSON.stringify(rowSel) };
			BeginOperationLoader();
			//调用审核数据
			$.ajax({
				type : "POST",
				url : "${pageContext.request.contextPath}/base/User/DeleteUser.action",
				data : param,
				success : function (data) {
					if (data.indexOf("OK")>0){
                   		EndOperationLoader();
                        $.messager.alert('系统提示','删除成功！','info'); 
                        Query();}
                    else{	
		            	EndOperationLoader();
		                $.messager.alert('系统提示','删除数据失败！','warning');}
				},
		        error: function(XMLHttpRequest, textStatus, errorThrown) {
		                      $.messager.alert('系统提示', "请联系管理员，系统错误。", 'info');
		               }
			});
		} 
	//--------------------------END   方法   END------------------------------------------
	
	</script>
  </body>
</html>
