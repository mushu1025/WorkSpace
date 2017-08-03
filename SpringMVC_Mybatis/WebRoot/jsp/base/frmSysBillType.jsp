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
    <title>单据类型</title>
  </head>
  <body>
  	<div data-options="region:'center'">
	  	<div class="easyui-layout" style="height:100%" style="border:0px">
		  	<!-- 工具栏 -->
		  	<div data-options="region:'north'" style="height: 40px; width: 100%; overflow:hidden;"scroll="no">
			  	<div class="opreationdiv" id="divopreation">
			  	<%--
					<a  onclick="return Query()"     href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-query">查询</a>
               	    <a  onclick="return Add()"       href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-add">新增</a> 
                    <a  onclick="return Edit()"      href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-edit">修改</a> 
                    <a  onclick="return Delete()"    href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-delete">删除</a>
                    --%>
				</div>
			</div>
			<div data-options="region:'west'" style="width: 180px;">
                <ul id="BillTypeTree" class="easyui-tree">
                </ul>
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
			SetUserAppOperation(402);
			//加载单据类型树
			$("#BillTypeTree").tree({
				method:'get',
				animate:true,
				url : "${pageContext.request.contextPath}/sys/BillType/GetBillTypeNewTree",
				onClick : function (node) {
					$("#BillTypeTree").tree("expandAll");
					//参数：
					var nodes = $('#BillTypeTree').tree('getSelected'); 
					 if($('#BillTypeTree').tree('isLeaf',node.target)){
						var queryParams = $("#dg_control").datagrid("options").queryParams;
						queryParams.fcategoryid = node.id;
						$("#dg_control").datagrid("options").queryParams = queryParams;
						$("#dg_control").datagrid({
							url : "${pageContext.request.contextPath}/sys/BillType/GetBillTypeByCategoryID"
						});
						}else{
							$('#dg_control').datagrid('loadData',{total:0,rows:[]}); //清空datagrid
						}
					}
			});
			$('#dg_control').datagrid({
				nowrap:false,
	            fitColumns: false, 
	            singleSelect:true,
	            rownumbers:true,
	            pagination:true,
	            fit: true,
				columns:[[
					{field:'opt', width:50, title:'操作', checkbox:'true', },
					{field:'fstatus',width:50, align:'center',title:'启用',
					  formatter: function(value,row,index){
							if (value=='1'){
								return "是";
							} else {
								return "否";
							}
						}},
					{field:'fbilltypeid',width:180,align:'left',title:'单据类型ID',hidden:true, sortable:true},
					{field:'fsysmark',width:50,align:'center',title:'预定义',
					 formatter: function(value,row,index){
							if (value=='1'){
								return "是";
							} else {
								return "否";
							}
						}},
					{field:'fcategorycode',width:80,halign:'center',align:'left',title:'分类编码', sortable:true},
					{field:'fcategoryname',width:100,halign:'center',align:'left',title:'分类名称', sortable:true},
					{field:'fbilltypecode',width:100,halign:'center',align:'left',title:'单据类型编码', sortable:true},
					{field:'fbilltypename',width:140,halign:'center',align:'left',title:'单据类型名称', sortable:true},
					{field:'ftablename',width:240,halign:'center',align:'left',title:'表名', sortable:true},
					{field:'fremark',width:200,align:'left',halign:'center',title:'备注', sortable:true},
					{field:'fcreater',width:80,align:'center',title:'建立人', sortable:true},
					{field:'fcreatetime',width:120,align:'center',title:'建立时间',formatter:function(value,row,index){return DateTimeStamp2String(value);}, sortable:true },
					{field:'fmender',width:80,align:'center',title:'修改人', sortable:true},
					{field:'fmodifytime',width:120,align:'center',title:'修改时间',formatter:function(value,row,index){return DateTimeStamp2String(value);}, sortable:true }
				]],
		        onLoadSuccess:function(){
		        	//列拖动
            		//$("#dg_control").datagrid("columnMoving");
            		//支持上下键
            		$(this).datagrid("keyCtr");
            		
		        },
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
		//重新加载树
		$("#BillTypeTree").tree({
				url : "${pageContext.request.contextPath}/sys/BillType/GetBillTypeNewTree",
				onLoadSuccess:function(){ 
	    		$('#dg_control').datagrid('loadData',{total:0,rows:[]}); //清空datagrid
	    		$("#BillTypeTree").tree("expandAll");
	    		},
			});
		}
	function NewQuery(){
			var node = $('#BillTypeTree').tree('getSelected'); 
				var queryParams = $("#dg_control").datagrid("options").queryParams;
				queryParams.fcategoryid = node.id;
				$("#dg_control").datagrid("options").queryParams = queryParams;
				$("#dg_control").datagrid({
					url : "${pageContext.request.contextPath}/sys/BillType/GetBillTypeByCategoryID"
			});
		}
	
	//新增
	function Add() {
		var node = $('#BillTypeTree').tree('getSelected');
		var isLeaf = $('#BillTypeTree').tree('isLeaf',node.target); 
		if(!isLeaf){
			$.messager.alert('系统提示', "请先选择单据分类。", 'warning');
			return;
		}3
		var node = $('#BillTypeTree').tree('getSelected'); 
		openDialog("frmBillTypeAdd", "${pageContext.request.contextPath}/sys/BillType/AddBillTypeInfo?fcategoryid="+node.id+"&fcategoryname="+encodeURI(encodeURI(node.text)), "单据类型新增", 430, 345,false,
		function(){
		//页面重新查询
			NewQuery();
			}
		);
	}
	
	//編輯
	function Edit() {
		var row = $('#dg_control').datagrid('getSelected');  
		//如果未选择
		if (row==null) {
	         $.messager.alert('系统提示', "请先勾选要修改的对象。", 'warning');
	         return;
		 }
		 
		 //预定义数据不能修改
		 if (row.fsysmark == "1") {
		     $.messager.alert('系统提示', "预定义数据不能修改。", 'warning');
		     $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		     return;
		 }
		 //弹出修改画面
		openDialog("frmBillTypeAdd", 
				"${pageContext.request.contextPath}/sys/BillType/EditBillTypeInfo?fbilltypeid=" + row.fbilltypeid, 
				"单据类型修改", 430, 345,false,
				function(){
					//页面重新查询
					NewQuery();
						}
				);
	}
	
	//刪除
	function Delete() {
	    var row = $('#dg_control').datagrid('getSelected'); 
	    //如果未选择
		if (row==null) {
	         $.messager.alert('系统提示', "请先勾选要刪除的对象。", 'warning');
	         return;
		 }
		 
		 //预定义数据不能删除
		 if (row.fsysmark == "1") {
		     $.messager.alert('系统提示', "预定义数据不能删除。", 'warning');
		     $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		     return;
		 }
		 
		  //确认是否删除
		  $.messager.confirm('确认提示','请确认是否删除该记录',function(yes){   
         	//点击取消退出
		    if (yes)
		    {
		    	 //删除异步方法
			     var param = {"ID":row.fbilltypeid };
		           $.ajax({
		               type: "POST",
		               url: "${pageContext.request.contextPath}/sys/BillType/deleteByPrimaryKey",
		               data: param,
		               success: function (data) {
		                   if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','删除成功！','info'); 
		                        //重新查询
		                        NewQuery();
		                   }
		                   else
		                   {
		                     	  $.messager.alert('系统提示','删除数据失败！','error'); 		
		                   }
		               },
		               error: function(XMLHttpRequest, textStatus, errorThrown) {
		                      $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
		               }
		               
		           });
		    	}   
		  });
	   
	     
	}
	//--------------------------END   方法   END------------------------------------------
	</script>
  </body>
</html>
