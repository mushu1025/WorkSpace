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
<title>组织机构</title>
</head>
<body class="easyui-layout"> 
	<div data-options="region:'north'" style="height: 40px; width: 100%; overflow-x: hidden;overflow-y: hidden;">
    	<!--功能按钮-->
        <div id="divopreation" class="opreationdiv">
        	<input type="hidden" id="fmender" value="${UserInfo.fmender}" />
             <a  onclick="return Query()"     href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-query">查询</a>
             <a  onclick="return Add()"       href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-add">新增</a> 
             <a  onclick="return Save()"      href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-save">保存</a> 
             <a  onclick="return Delete()"    href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-delete">删除</a> 
         	  
        </div>
	</div>
    <div data-options="region:'west',split:true" style="width: 180px;">
    	<ul id="tree_organization" class="easyui-tree">
        </ul>
    </div>
    <div data-options="region:'center'">
    	<div class="easyui-tabs" fit="true" id="changeTabs">
        	<div title="组织信息"> 
            	<form id="frmSysOrgainzation" method="post"  modelAttribute="Organization"> 
                	<div id="p" class="easyui-panel" title="基本信息" style="width: 98%; height: 205px; padding: 10px; background: #fafafa;">
                    	<div class="InputForm">
                        <table width="100%" align="left">
                            <tr>
                            	<th> 组织名称：</th>
                                <td colspan="3" style="width:200px;">
                                	<input type="hidden" name="id" id="id" value="${functionmenu.id}" />
                                	<input type="hidden" name="foldparentid" id="foldparentid" value="" />
                                	<input type="text" id="name" name="name" class="easyui-validatebox input_add_text"
                                         style="width: 432px" data-options="required:true" autocomplete="off" value="${functionmenu.name}" />
                                </td>
                            </tr>
                            <tr>
                                <th>&nbsp;&nbsp;上级组织：</th>
                                <td >
                                    <input type="text" id="fparentid" name="fparentid" class="easyui-validatebox input_add_text"
                                          data-options="required:true" autocomplete="off" value="${functionmenu.fparentid}"/>                                      
                                </td>
                            </tr>
                            <tr>
                             	<th>组织全路径：</th>
                                <td colspan="3">
                                	<input type="text" id="url" name="url" class="easyui-validatebox input_add_text" data-options="required:true" style="width: 432px" autocomplete="off" value="${functionmenu.url}" />
                                </td>
                            </tr>
                        </table>
                     	</div>
                    </div>
               	</form>
            </div>
        </div>
	</div> 
 <script type="text/javaScript">    
//--------------------------BEGIN 初始化 BEGIN------------------------------------------
$(function () {
	
	//加载权限按钮
	//SetUserAppOperation(3);
	//加载树数据
	Query();
});
//--------------------------END   初始化   END--------------------------------------------

//--------------------------BEGIN 方法 BEGIN--------------------------------------------
// 类型失去焦点时候，设置组织路径
function SetOrganizationPath(){
	var nodes = $("#tree_organization").tree("getSelected");
	if ($("#forganizationid").val() == "") { 
		$("#forganizationpath").val(nodes.treePath+"\\"+$("#forganizationshortname").val());
	}else{
		var str=nodes.treePath.substring(nodes.treePath.lastIndexOf("\\"),nodes.treePath.length);
		$("#forganizationpath").val(nodes.treePath.replace(str,"")+"\\"+$("#forganizationshortname").val());
	}
}

//加载树方法
function Query() {
	$("#tree_organization").tree({
		url : "${pageContext.request.contextPath}/sys/function/getfunctionTree.action",
		method : "POST",
		animate : false,
		onLoadSuccess:function (){
			$("#tree_organization").tree("expandAll");
			if($("#currentSelectTreeId").val()!=""){
				var node = $("#tree_organization").tree("find", $("#currentSelectTreeId").val());
				$("#tree_organization").tree("select", node.target);
			}
		},
		onSelect : function (node) {
			$("#currentSelectTreeId").val(node.id);
		    if(node.id == $("#tree_organization").tree("getRoot").id){
		    	$.messager.alert("警告", "请选择的下级组织机构！", "warning");
		    	clear();
		    	return false;
		    }else{
			//组织信息查询
			$.post("${pageContext.request.contextPath}/sys/getfunctionmenubytype.action", {
				"ID" : node.id
			},
				function (result) {
					var data = JSON.parse(result);
					$.each(data,function(n,value) { 
						alert(n+":"+value);
					})
					
				}); 
			}
		}
	});
	clear();
	$('#dg_control').datagrid('loadData',{total:0,rows:[]});
	$("#forganizationnumber").val("");
}
 

//新增方法
function Add() {
	var noteSize = $("#tree_organization").tree("getRoots");
	var nodes;
	if (noteSize.length > 0) {
		var nodes = $("#tree_organization").tree("getSelected");
		if (nodes == null) {
			$.messager.alert("警告", "请选择的上级组织类型！", "warning");
			return false;
		}
	}
	var nodes = $("#tree_organization").tree("getSelected");
	var text = nodes.text;
	if ((nodes.text) == "" && (nodes.id == "")) {
		$.messager.alert("警告", "请选择上级组织信息！", "warning");
	} else {
		var nodes = $("#tree_organization").tree("getSelected");
		var text = nodes.text; 
		var id = nodes.id;
		//清空画面控件
		clear();
		//设置上级组织
		$("#fparentid").val($("#foldparentid").val());
	}
}

//保存方法
function Save() {  
	var noteSize = $("#tree_organization").tree("getRoots"); 
	if (noteSize.length > 0) {
		var nodes = $("#tree_organization").tree("getSelected");
		if (nodes == null) {
			$.messager.alert("警告", "请选择的上级组织类型！", "warning");
			return false;
		}
	}
	//画面验证
	if (!$("#frmSysOrgainzation").form('validate')) {
		return false;
	} 
	var tree = $("#tree_organization").tree("getSelected");
	if ((tree.text) == "" || (tree.id == "")) {
		$.messager.alert("警告", "请选择组织机构信息！", "warning");
		return false;
	}
	//确认消息提示
	$.messager.confirm("确认提示", "请确认是否保存该记录？", function (yes) {
		if (yes){
			$("#frmSysOrgainzation").form("submit", {
				url : "${pageContext.request.contextPath}/sys/Organization/AddOrganization",
				success : function (data) {
					var data = JSON.parse(data);
					if (data.ID) {
						$.messager.alert("提示", "保存数据成功！", "info");
						Query();
					} else
						$.messager.alert("提示", "保存数据失败！", "info");

				}
			});
		} 
	});
}

//删除方法
function Delete() { 
	var noteSize = $("#tree_organization").tree("getRoots"); 
	if (noteSize.length > 0) {
		var nodes = $("#tree_organization").tree("getSelected");
		if (nodes == null) {
			$.messager.alert("警告", "请选择的上级组织类型！", "warning");
			return false;
		}
	}
	var nodes = $("#tree_organization").tree("getSelected");
	var text = nodes.text;
	if ((nodes.text) == "" || (nodes.id == "")) {
		$.messager.alert("警告", "请选择需要删除的组织机构信息！", "warning");
		return false;
	}   
	if(!$('#tree_organization').tree('isLeaf',nodes.target)){
		$.messager.alert("警告", "无法删除有下级组织的组织结构！", "warning");
		return false;
	} 
	$.messager.confirm("确认提示", "请确认是否删除(" + text + ")该组织机构信息？", function (yes) {
		if (yes) {
			$.post("${pageContext.request.contextPath}/sys/Organization/DeleteOrganization", {
				"ID" : nodes.id
			},
				function (result) {
					var data = JSON.parse(result); 
					if (data.ID) {
						$.messager.alert("提示", "删除数据成功！", "info");
						Query();
					} else {
						$.messager.alert("提示", "删除数据失败！", "info");
					}
			});
		}
	}); 
}

//清空画面控件
function clear() {
	$("#id").val("");
	$("#name").val("");
	$("#fparentid").val("");
	$("#url").val("");
}
//--------------------------END   方法   END---------------------------------------------
 </script>
</body>
</html>
