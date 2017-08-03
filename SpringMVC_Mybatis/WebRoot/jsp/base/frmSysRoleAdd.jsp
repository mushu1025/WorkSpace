<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <title>系统角色新增</title>
    <base href="<%=basePath%>">
  </head>
  
  <body>
    <div id="win" class="easyui-panel" style="padding: 5px;background:#d9edf5">
        <table cellpadding="0" cellspacing="0" style="width: 100%; border-color: #d9edf5;
            border: soild">
            <tr>
                <td style="padding-left: 2px">
                    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save',plain:true"
                        onclick="save()">保存</a> 
                    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" 
                    	onclick="CloseWin('frmSysRoleAddDialog');">取消</a>
                </td>
            </tr>
        </table>
    </div>
    <form id="frmAdd"  method="post" modelAttribute="Role" >
    	<div class="InputForm">
    		<table class="tableForm" width="100%">
        		<tr class="add_tr">
            		<th>
            			上级角色：
            		</th>
		            <td>
		            	<input id="froleid" name="froleid" type="hidden" class="easyui-validatebox input_add_text" value="${roleInfo.froleid}"/>
		            	<input id="fparentid" name="fparentid" type="hidden" class="easyui-validatebox input_add_text" autocomplete="off" value="${roleInfo.fparentid}"/>
		                <input id="fparentrolename" name="fparentrolename" type="text" class="easyui-validatebox input_add_text" 
		                   disabled="true" autocomplete="off" value="${roleInfo.fparentrolename}"/>
		            </td>
        		</tr>
        		<tr class="add_tr">
           	 		<th>
               			 角色名称：
            		</th>
            		<td>
                	<input id="frolename" name="frolename" type="text" class="easyui-validatebox input_add_text" data-options="required:true"
                    	autocomplete="off" value="${roleInfo.frolename}"/>
            		</td>
        		</tr>
<!--         		<tr class="add_tr">
           	 		<th>
               			 角色类型：
            		</th>
            		<td>
            			<select id="cboUserType" class="easyui-combobox" style="width: 200px;"> 
						</select>
						<input id="fusertypeid" name="fusertypeid" type="hidden" class="easyui-validatebox input_add_text"/>
            		</td>
        		</tr> -->
        		<tr class="add_tr">
            		<th>
                		启用：
            		</th>
            		<td>
		            	<input type="hidden" id="fstatustemp"   autocomplete="off"  value="${roleInfo.fstatus}" />      
		                <input type="checkbox" id="fstatusstr" name="fstatusstr" autocomplete="off" style="float:left;" />
            		</td>
        		</tr>
        		<tr class="add_tr">
            		<th>
                		预定义：
            		</th>
		            <td>
		            	<input type="hidden" id="fsysmarktemp" autocomplete="off"  value="${roleInfo.fsysmark}" />      
		                <input type="checkbox" id="fsysmarkstr" disabled="true" name="fsysmarkstr" autocomplete="off" style="float:left;" />
		            </td>
		        </tr>
		        <tr class="add_tr">
            		<th>
                		修改人：
            		</th>
            		<td>
                		<input id="fmender" name="fmender" type="text" class="easyui-validatebox input_add_text"
                   			disabled="true" autocomplete="off" value="${roleInfo.fmender}"/>
            		</td>
        		</tr>
        		<tr class="add_tr">
            		<th>
              		 	 修改时间：
            		</th>
		            <td>
		                <input id="fmodifytime" name="fmodifytimestr" type="text" class="easyui-validatebox input_add_text"
		                   disabled="true" autocomplete="off" value="${roleInfo.fmodifytime}"/>
		            </td>
        		</tr>
    		</table>
    	</div>
    </form>
    <script type="text/javaScript">
  	$(function(){
  		//修改時間
   	   	if  ($('#fparentid').val()=="" ){
   	   	  //新增
   	   		$("#fmodifytime").val(GetSystemDateTime());
   	   	}else{
   	      //修改
   	   		DateTimeStamp3String("fmodifytime");
   	   	}
    	if ($('#fsysmarktemp').val()=="1"){
      		$('#fsysmarkstr').prop("checked",true);
 	    }else{
        	$('#fsysmarkstr').prop("checked",false);
        }
     	if ($('#fstatustemp').val()=="1"){
      		$('#fstatusstr').prop("checked",true);
     	}else{
        	$('#fstatusstr').prop("checked",false);
  		}
  		
  		$("#fstatusstr").prop("checked",true);
  		//SetComboxItem("cboUserType",false,false,"");
  	});
   	function save() {
   		//画面验证
    	if(!$('#frmAdd').form('validate')){
    		return false;
    	} 
    	$.messager.confirm('确认提示','请确认是否保存该记录？',function(r){   
	    	if (r){	  
            	if($('#froleid').val()==""){  
            		//$("#fusertypeid").val($("#cboUserType").combobox("getValue")); 
	            	$('#frmAdd').form('submit', {	
						url:'${pageContext.request.contextPath}/sys/Role/Add', 
				    	onSubmit: function(data){
				    		return $(this).form('validate');    
				    	},    
				    	success:function(data){    
				     		var data = eval('(' + data + ')');   
			         		if (data.ID) {
                        		$.messager.alert('系统提示', '保存成功！', 'info');
                        		CloseWin('frmSysRoleAddDialog');	
                     		}else{
                        		$.messager.alert('系统提示', '保存数据失败！', 'info');
                        	}
						}    
					});
			 	}else{  
			 		//$("#fusertypeid").val($("#cboUserType").combobox("getValue")); 
		        	$('#frmAdd').form('submit', {				  
						url:'${pageContext.request.contextPath}/sys/Role/Edit', 
				    	onSubmit: function(data){ 
					    	return $(this).form('validate');    
			    		},    
			    		success:function(data){    
					     	var data = eval('(' + data + ')');   
				         	if (data.ID) {
	                        	$.messager.alert('系统提示', '保存成功！', 'info');
                        		CloseWin('frmSysRoleAddDialog');	
		                 	}else{
		                    	$.messager.alert('系统提示', '保存 数据失败！', 'info');
		                    }
					 	}    
		 			});
			 	}
         	}
       	});
     }
    </script>
  </body>
</html>
