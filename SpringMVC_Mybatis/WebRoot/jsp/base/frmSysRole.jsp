<?xml version="1.0" encoding="UTF-8" ?>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>系统角色</title>
  </head>
  
  <body class="easyui-layout">
 	  	<!-- 工具栏 -->
	  	<div data-options="region:'north'" style="height: 40px; width: 100%; overflow-x: hidden; overflow-y: hidden;">
				<!--功能按钮-->
			<div class="opreationdiv" id="divopreation">
					<a  onclick="return Query()"     href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-query">查询</a>
              	    <a  onclick="return Add()"       href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-add">新增</a> 
                   	<a  onclick="return Edit()"      href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-save">修改</a> 
                   	<a  onclick="return Delete()"    href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-delete">删除</a>
			</div>
		</div>
		<div data-options="region:'west',split:true" style="width:180px;">
			<ul id="tree_role" class="menu-tree"></ul>
		</div> 
        <div data-options="region:'center'">
          	<table id="dg_control">
			</table>
         </div>
         <input type="hidden" id="currentTreeId" name="currentTreeId" />
	<script type="text/javaScript">
	 
	$(function(){
		
		$('#dg_control').datagrid({
            nowrap:false,
            fitColumns: false, 
            singleSelect:true,
            rownumbers:true,
            pagination:true,
            fit: true,
			columns:[[
				{ field: 'opt', width:50, title: '操作', checkbox: 'true'},
				{ field:'froleid',width:80,align:'center',hidden:true,sortable:true,title:'角色ID'},
				{ field: 'frolename', width:$(this).width()-650 , align: 'left', title: '角色名称' },
                { field: 'fmodifier', width: 80, align: 'left', title: '修改人' },
				{ field: 'fmodifyTime',width:120,align:'center',title:'修改时间', 
				  formatter:function(value,row,index){   
		             return DateTimeStamp2String(value);
		          }, sortable:true }
			]],
	        onLoadError:function(){
           		$.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
	        }
		}); 
		Query();
	});
		
	function Query() { 
	   	$('#tree_role').tree({
	    	url: '${pageContext.request.contextPath}/sys/Role/GetRoleTree.action',
	    	onLoadSuccess:function(){ 
	    		$('#dg_control').datagrid('loadData',{total:0,rows:[]}); //清空datagrid
	    		$("#tree_role").tree("expandAll");
				if($("#currentTreeId").val()!=""){
					var node = $("#tree_role").tree("find", $("#currentTreeId").val());
					$("#tree_role").tree("select", node.target);
		    		QueryDetail(node);
				}
	    	},
	        onSelect:function(node){
	        	$("#currentTreeId").val(node.id);
           	    QueryDetail(node);
	     	}
		});
	} 
	
	
	function QueryDetail(node){
		var queryParams = $("#dg_control").datagrid('options').queryParams;  
        queryParams.fparentId = node.id;
        $('#dg_control').datagrid('options').queryParams = queryParams;
	    $('#dg_control').datagrid({url: '${pageContext.request.contextPath}/sys/Role/GetRoleList.action' });
	}
	
	function Add() {
		var nodes = $('#tree_role').tree('getSelected'); 
		if (nodes){
			openDialog("frmSysRoleAddDialog", 
					"${pageContext.request.contextPath}/sys/Role/AddRole?fparentid=" + nodes.id+"&fparentname="+encodeURI(encodeURI(nodes.text)), 
					"系统角色新增", 320, 465,false,function(){
			//页面重新查询
			Query(); 
		});
		} else {
			$.messager.alert('警告', "请选择系统角色！", 'warning');
		}
	}
	
	function Edit() {
		var nodes = $("#tree_role").tree("getSelected");//选中树的名称
		if(nodes == null){
			$.messager.alert("警告", "请选择系统角色！", "warning");
			return false;
		}
		var rowSelect = $('#dg_control').datagrid('getSelected');  
		if (rowSelect == null) {  
			$.messager.alert("警告", "请选择需要修改的系统角色！", "warning");
			return false;
		} 
		openDialog("frmSysRoleAddDialog", 
			"${pageContext.request.contextPath}/sys/Role/EditRole?froleid="+rowSelect.froleid+"&fparentname="+encodeURI(encodeURI(nodes.text)), 
			"系统角色修改", 320, 465,false,function(){
			//页面重新查询
			Query(); 
		});  
	}
	
	function Delete() { 
		var row = $('#dg_control').datagrid('getSelected'); 
		if (row == null) {  
			$.messager.alert("警告", "请选择系统角色！", "warning");
			return false; 
		}
		//不支持批量修改
		if (row.length > 1) {
			$.messager.alert('系统提示', "不支持批量删除！", 'warning');
		    $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		    return;
		} 
		//预定义数据不能修改
		 if (row.fsysmark == "1") {
		     $.messager.alert('系统提示', "预定义数据不能删除！", 'warning');
		     $("#dg_control").datagrid('clearSelections').datagrid('clearChecked');
		     return;
		 } 
         $.messager.confirm('确认提示','请确认是否删除该记录？',function(yes){   
		    if(yes) {
		    //alert(row.froleid);
		    	$.post("${pageContext.request.contextPath}/sys/Role/DeleteRole",
                      {"ID":row.froleid},
                      function(data){
                     	if (data.indexOf("OK")>0) {
                         	$.messager.alert('系统提示', "删除成功！", 'info');
                         	Query();
                         }else
                           	$.messager.alert('系统提示', "删除数据失败！", 'info');
                       }
                 );
		    }
		 }); 
	}
	</script>
  </body>
</html>
