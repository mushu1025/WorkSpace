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
    <title>疾病原因</title>
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
			$('#dg_control').datagrid({
				nowrap:false,
	            fitColumns: false, 
	            singleSelect:false,
	            rownumbers:true,
	            pagination:true,
	            fit: true,
				columns:[[
					{field:'opt', width:50, title:'操作', checkbox:'true', },
					{field:'fstatus',width:40, align:'center',title:'启用',
					  formatter: function(value,row,index){
							if (value=='1'){
								return "是";
							} else {
								return "否";
							}
						}},
					{field:'fdiseaseid',width:180,align:'left',title:'死亡原因ID',hidden:true, sortable:true},
					{field:'fsysmark',width:50,align:'center',title:'预定义',
					 formatter: function(value,row,index){
							if (value=='1'){
								return "是";
							} else {
								return "否";
							}
						}},
					{field:'fdisease',width:600,halign:'center',align:'left',title:'疾病', sortable:true},
					{field:'fdiseasetype',width:400,halign:'center',align:'left',title:'疾病类型', sortable:true},
					{field:'fmender',width:80 ,align:'center',title:'修改人', sortable:true},
					{field:'fmodifytime',width:120,align:'center',title:'修改时间', 
					  formatter:function(value,row,index){ 
					  return DateTimeStamp2String(value);
			          }, sortable:true }
				]],
		        onLoadError:function(){
            		$.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
		        }
			});
			//页面初始化查询
			//Query();
		});
	//--------------------------END   初始化   END------------------------------------------
	
	
	//--------------------------BEGIN 方法 BEGIN------------------------------------------
    //查詢
	function Query(){
	//參數
		var queryParams = $("#dg_control").datagrid('options').queryParams;  
		$('#dg_control').datagrid('options').queryParams = queryParams;
		$('#dg_control').datagrid({url: '${pageContext.request.contextPath}/base/Disease/selectAll' });
	}
	
	//新增
	function Add() {
		openDialog("frmBaseDiseaseAdd", "${pageContext.request.contextPath}/base/Disease/DiseaseAdd", "疾病新增", 270,350,false,
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
		 //预定义数据不能修改
		 if (row[0].fsysmark>0) {
		     $.messager.alert('系统提示', "预定义数据不能修改。", 'warning');
		     $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		     return false;
		 }
		 //弹出修改画面
		openDialog("frmBaseDiseaseAdd", 
				"${pageContext.request.contextPath}/base/Disease/DiseaseAdd?fdiseaseid=" + row[0].fdiseaseid, 
				"疾病修改", 270,350,false,
				function(){
					//页面重新查询
					Query();
						}
				);
	}
	
	//刪除
	function Delete() {
	    var row = $('#dg_control').datagrid('getChecked'); 
	    //如果未选择
		if (row[0]==null) {
	         $.messager.alert('系统提示', "请先勾选要刪除的对象。", 'warning');
	         return;
		 }
		 
		 //预定义数据不能删除
		 for(var i=0; i<row.length; i++){
		 if (row[i].fsysmark>0) {
		     $.messager.alert('系统提示', "预定义数据不能删除。", 'warning');
		     $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		     return;
		 }}
		  var fdiseaseids = "";
		  for(var i=0; i<row.length; i++){
			fdiseaseids += row[i].fdiseaseid +",";
		    }
		  var param = {"fdiseaseids":fdiseaseids};
		  //确认是否删除
		  $.messager.confirm('确认提示','请确认是否删除该记录',function(yes){   
         	//点击取消退出
		    if (yes)
		    {
		    	 //删除异步方法
			     //var param = {"ID":row.fdiseaseid };
		           $.ajax({
		               type: "POST",
		               url: "${pageContext.request.contextPath}/base/Disease/deleteByPrimaryKey",
		               data: param,
		               success: function (data) {
		                   if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','删除成功！','info'); 
		                        //重新查询
		                        Query();
		                   }
		                   else
		                   {
		                     	  $.messager.alert('系统提示','删除数据失败！','info'); 		
		                   }
		               },
		               error: function(XMLHttpRequest, textStatus, errorThrown) {
		                      $.messager.alert('系统提示', "请联系管理员，系统错误。", 'info');
		               }
		               
		           });
		    	}   
		  });
	   
	}
	//--------------------------END   方法   END------------------------------------------
	
	</script>
  </body>
</html>
