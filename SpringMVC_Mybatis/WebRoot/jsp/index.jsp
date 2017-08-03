<?xml version="1.0" encoding="UTF-8" ?>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>管理信息系统</title>
    <style type="text/css">
    .news_con_a{ width:98%; float:left; line-height:28px; text-decoration:none; color:#039; margin-left:25px; border-bottom:1px dashed #ccc;}
   /*  .datagrid-btable tr{height: 10px;} */
    </style>
  </head>
  <body class="easyui-layout" style="overflow-x: hidden" scroll="no">
    <div id="divCenter" data-options="region:'center'" style="overflow-x: hidden" scroll="no">
   		<div id="index-tabs" class="easyui-tabs" data-options="fit:true,border:false">
	    	<div data-options="region:'west',title:'菜单导航',split:true" style="width:220px;">
			    <div id="cc" class="easyui-layout" style="width:100%;height:100%;">  
                    <div data-options="region:'west',title:'菜单',split:true" style="width:260px;height:100%">
                         <div id='wnav' class="easyui-accordion" fit="true" border="false"></div>
                    </div>  
                    <div data-options="region:'center',title:'桌面'" style="padding:10px 0px 10px 5px;overflow-y: hidden">
                    	<div style="width:95%;height:50%;padding: 0px 0px 0px 0px;overflow-y: hidden">
                    		<div style="float:left;width:100%;height:100%;">
                    		     <div  class="easyui-panel" title="我的仪表盘 "  style="width:99%;height:100%;padding:10px;background:#fafafa;float:left;overflow-y: hidden" data-options="iconCls:'icon-save'">   
								 	  <div id="containerNPD" style="min-width: 310px; max-width: 400px;float:left; height: 210px; margin: 0 auto"></div> 
								 	  <div id="containerPSY" style="min-width: 310px; max-width: 400px;float:left; height: 210px; margin: 0 auto"></div> 
								 	  <div id="containerYearParity" style="min-width: 310px; max-width: 400px; float:left;height: 210px; margin: 0 auto"></div>
								</div> 
                    		</div>
                    	</div>
                    	
                    	<div style="width:95%;height:50%;padding: 10px 0px 0px 0px;">
                    		<div style="float:left;width:50%;height:100%;">
                    		     <div  class="easyui-panel" title="任务提醒"  style="width:98%;height:100%;padding:10px;" data-options="iconCls:'icon-save'">   
								 	   任务提醒
								 	  <p>努力完善中，敬请期待。。。。。。。。。。</p>
								</div> 
                    		</div>
                    		<!-- <div style="float:left;width:50%;height:100%;">
	                    		<div class="easyui-panel" title="预警" style="width:98%;height:100%;" data-options="iconCls:'icon-save',tools:'#tt'">   
								  	<table id="dg_DesktopWarningRecord"  style="width:100%;height:30px" ></table>
								  	
								</div> 
								<div id="tt">
									<a href="#" class="icon-more" style="width:30px;" onclick="return ShowMoreWarning();"></a>
								</div>
                    		</div> -->
                    	</div>
                    </div>  
                、			</div>  
			</div>
	    </div>
	</div>
	<%-- <div style="display:none;">
		 <form id="frmAdd"  method="post" modelAttribute="user" >
			<input type="text" id="AppUserInfo.Fusername" value="${user.user_name}"/>
		</form>
	</div> --%>
	<script type="text/javaScript">
	//--------------------------BEGIN 初始化 BEGIN----------------------------------------
	</script>
  </body>
</html>
