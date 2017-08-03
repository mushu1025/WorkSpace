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
                <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="return CloseWin('frmBaseDiseaseAdd');">取消</a>
         </div>
    </div>
    
    <div data-options="region:'center'" style="height:100px; ">
    <form id="frmAdd"  method="post" modelAttribute="Disease" >
     <div class="InputForm">
	     <table width="100%">
	    	<tr>
	            <th>
	                                                      疾病：
	            </th>
	            <td>
	            	<input id="fdiseaseid" name="fdiseaseid" type="hidden" class="easyui-validatebox input_add_text" value="${diseaseInfo.fdiseaseid}"/>
	            	<input id="fdiseasetypeid" name="fdiseasetypeid" type="hidden" class="easyui-validatebox input_add_text" value="${diseaseInfo.fdiseasetypeid}"/>
	                <input id="fdisease" name="fdisease" type="text"  class="easyui-validatebox input_add_text" data-options="required:true" autocomplete="off" 
	                value="${diseaseInfo.fdisease}"/>         
	            </td>
	        </tr>
	    	<tr>
	            <th>
	                                                      疾病类型：
	            </th>
	            <td>
	            	<input id="fdiseasetypeid" name="fdiseasetypeid" type="hidden" class="easyui-validatebox input_add_text" value="${diseaseInfo.fdiseasetypeid}"/>
	                <select id="cboDiseaseType" name="cboDiseaseType" class="easyui-combobox" style="width: 135px;"> 
	                </select>       
	            </td>
	        </tr>
	        
	        
	        
	        <tr>
	            <th>
	                启用：
	            </th>
	            <td align="left" class="add_td">
	            	<input type="hidden" id="fstatustemp"   autocomplete="off"  value="${diseaseInfo.fstatus}" />      
	                <input type="checkbox" id="fstatusstr" name="fstatusstr" autocomplete="off" style="float:left;" />
	            </td>
	        </tr>
	        <tr>
	            <th>
	                预定义：
	            </th>
	            <td>
	            	<input type="hidden" id="fsysmarktemp"   autocomplete="off"  value="${diseaseInfo.fsysmark}" />      
	                <input type="checkbox"  id="fsysmarkstr" name="fsysmarkstr" autocomplete="off" style="float:left;" />
	            </td>
	        </tr>
	         
	        <tr>
	            <th>
	                修改人：
	            </th>
	            <td  class="add_td">
	                <input id="fmender" name="fmender" type="text" class="easyui-validatebox input_add_text" 
	                autocomplete="off" disabled="true" value="${diseaseInfo.fmender}" />
	            </td>
	        </tr>
	        <tr>
	            <th>
	                修改时间：
	            </th>
	            <td>
	                <input id="fmodifytime" name="fmodifytimestr" type="text" class="easyui-validatebox" autocomplete="off" disabled="true" value="${diseaseInfo.fmodifytime}"/>
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
   	   SetComboxItem("cboDiseaseType",false,true,$("#fdiseasetypeid").val());
   	   //修改時間
   	   if  ($('#fdiseaseid').val()=="" )
   	   {
   	   	  //新增
   	   	  $("#fstatusstr").prop("checked", true);
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
    	//设定猪只类型			
			$("#fdiseasetypeid").val($("#cboDiseaseType").combobox("getValue"));
    	
    	//确认消息
       $.messager.confirm('确认提示','请确认是否保存该记录？',function(yes){   
	     if (yes)   
         {	  
         	if  ($('#fdiseaseid').val()=="" ) 
         	{
	            $('#frmAdd').form('submit', {
					url:'${pageContext.request.contextPath}/base/Disease/InsertSelective', 
				    onSubmit: function(data){
				    	//画面提交验证
				    	return $(this).form('validate');
				    },    
				    success:function(data){
				    if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','新增成功！','info'); 
		                        CloseWin('frmBaseDiseaseAdd');
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
					url:'${pageContext.request.contextPath}/base/Disease/updateByPrimaryKeySelective',
				    success:function(data){
				    if (data.indexOf("OK")>0) 
		                   {
		                        $.messager.alert('系统提示','更改成功！','info'); 
				                CloseWin('frmBaseDiseaseAdd');
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
