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
                <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="return CloseWin('frmBillTypeAdd');">取消</a>
         </div>
    </div>
    
    <div data-options="region:'center'" style="height:100px; ">
    <form id="frmAdd"  method="post" modelAttribute="BillType" >
     <div class="InputForm">
	     <table width="100%">
	    	<tr>
	            <th>
	                                                      单据类型编码：
	            </th>
	            <td style="width:155px;">
	            	<input id="fbilltypecode" name="fbilltypecode" type="text" class="easyui-validatebox input_add_text" data-options="required:true" autocomplete="off"
	            	value="${billTypeInfo.fbilltypecode}"/>
	            </td>
	        </tr>
	    	<tr>
	            <th>
	                                                      单据类型：
	            </th>
	            <td style="width:155px;">
	            	<input id="fbilltypeid" name="fbilltypeid" type="hidden" class="easyui-validatebox input_add_text" value="${billTypeInfo.fbilltypeid}"/>
	                <input id="fbilltypename" name="fbilltypename" type="text"  class="easyui-validatebox input_add_text" data-options="required:true" autocomplete="off" 
	                value="${billTypeInfo.fbilltypename}"/>
	            </td>
	        </tr>
	    	<tr>
	            <th>
	                                                      类型分类名称：
	            </th>
	            <td style="width:155px;">
	            	<input id="fcategoryid" name="fcategoryid" type="hidden" class="easyui-validatebox input_add_text" value="${billTypeInfo.fcategoryid}"/>
	            	<input id="fcategoryname" name="fcategoryname" type="text" class="easyui-validatebox input_add_text" value="${billTypeInfo.fcategoryname}" disabled="true"/>
	            	<!-- <select id="cbofcategoryname" name="cbofcategoryname" class="easyui-combobox" style="width: 155px;"> 
	                </select> -->  
	            </td>
	        </tr>
	        <tr>
	            <th>
					启用：
	            </th>
	            <td align="left" class="add_td">
	            	<input type="hidden" id="fstatustemp"   autocomplete="off"  value="${billTypeInfo.fstatus}" />      
	                <input type="checkbox" id="fstatusstr" name="fstatusstr" autocomplete="off" style="float:left;" />
	            </td>
	        </tr>
	        <tr>
	            <th>
	                预定义：
	            </th>
	            <td>
	            	<input type="hidden" id="fsysmarktemp"   autocomplete="off"  value="${billTypeInfo.fsysmark}" />      
	                <input type="checkbox" id="fsysmarkstr" name="fsysmarkstr" autocomplete="off" style="float:left;" />
	            </td>
	        </tr>
	           <tr>
	            <th>
	               表名：
	            </th>
	            <td style="width:155px;">
	                <input id="ftablename" name="ftablename" type="text"  class="easyui-validatebox input_add_text" autocomplete="off" value="${billTypeInfo.ftablename}" />
	            </td>
	        </tr>
	         <tr>
	            <th>
	               备注：
	            </th>
	            <td style="width:155px;">
	                <input id="fremark" name="fremark" type="text"  class="easyui-validatebox input_add_text" autocomplete="off" value="${billTypeInfo.fremark}" />
	            </td>
	        </tr>
	         
	        <tr>
	            <th>
	               建立人：
	            </th>
	            <td  class="add_td">
	                <input id="fcreater" name="fcreater" type="text" class="easyui-validatebox input_add_text" 
	                autocomplete="off" disabled="true" value="${billTypeInfo.fcreater}" />
	            </td>
	        </tr>
	        <tr>
	            <th>
	                建立时间：
	            </th>
	            <td style="width:155px;">
	                <input id="fcreatetime" name="fcreatetime" type="text" class="easyui-validatebox" autocomplete="off" disabled="true" value="${billTypeInfo.fcreatetime}"/>
	            </td>
	        </tr>
	         
	        <tr>
	            <th>
	                修改人：
	            </th>
	            <td  class="add_td" style="width:155px;">
	                <input id="fmender" name="fmender" type="text" class="easyui-validatebox input_add_text" 
	                autocomplete="off" disabled="true" value="${billTypeInfo.fmender}" />
	            </td>
	        </tr>
	        <tr>
	            <th>
	                修改时间：
	            </th>
	            <td style="width:155px;">
	                <input id="fmodifytime" name="fmodifytimestr" type="text" class="easyui-validatebox" autocomplete="off" disabled="true" value="${billTypeInfo.fmodifytime}"/>
	            </td>
	        </tr>
	    </table>
    </div>
    </form>
    </div>
    
    <script type="text/javaScript">
    //--------------------------BEGIN 初始化 BEGIN-----------------------------------------
   	$(function(){
   	   //启用
   	   SetCheckBoxValue("fstatusstr",$("#fstatustemp").val());
   	   //预定义
   	   SetCheckBoxValue("fsysmarkstr",$("#fsysmarktemp").val());
   	   //
   	  /*  SetComboxItem("cbofcategoryname",false,true,$("#fcategoryid").val()); */
   	   //修改時間
   	   $("#fmodifytime").val(GetSystemDateTime());
 	   //新增建立时间
   	   if  ($('#fbilltypeid').val()=="" )
   	   {
   	   	  $("#fcreatetime").val(GetSystemDateTime());
   	   }
   	   else
   	   {
   	      //修改
   	   	  DateTimeStamp3String("fcreatetime");
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
    	//		
		/* $("#fcategoryid").val($("#cbofcategoryname").combobox("getValue")); */
    	
    	//确认消息
       $.messager.confirm('确认提示','请确认是否保存该记录？',function(yes){ 
	     if (yes)
         {	  
         	if  ($('#fbilltypeid').val()=="" ) 
         	{
	            $('#frmAdd').form('submit', {
					url:'${pageContext.request.contextPath}/sys/BillType/InsertSelective', 
				    onSubmit: function(data){
				    	//画面提交验证
				    	return $(this).form('validate');
				    },    
				    success:function(data){
				    if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','新增成功！','info'); 
		                        CloseWin('frmBillTypeAdd');
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
					url:'${pageContext.request.contextPath}/sys/BillType/updateByPrimaryKeySelective',
				    success:function(data){
				    if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','更改成功！','info'); 
				                CloseWin('frmBillTypeAdd');
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
