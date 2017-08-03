<?xml version="1.0" encoding="UTF-8" ?>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>管理信息系统</title>
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/easyui/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/easyui/themes/icon.css" />
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/css/main.css" />
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/css/model.css"/>
    <%--  <link rel="stylesheet" type="text/css" href="<%=path %>/static/css/model.css"/> --%>
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/css/default.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/static/css/bigautocomplete.css"/>    
    <script type="text/javascript" src="<%=path %>/static/easyui/jquery.min.js"></script>
    
    <script type="text/javascript" src="<%=path %>/static/easyui/jquery.easyui.min.js"></script>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<%=path %>/static/easyui/json2.js"></script>
	<![endif]-->
    <script type="text/javascript" src="<%=path %>/static/easyui/locale/easyui-lang-zh_CN.js"></script>
    <%-- <script type="text/javascript" src="<%=path %>/static/js/app.js"></script> --%>
    <script type="text/javascript" src="<%=path %>/static/js/index.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/commonSelectFrm.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/highcharts.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/highcharts-more.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/exporting.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/dataItemUtil.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/tools.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/shareType.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/pytools.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/jgxLoader.js"></script> 
	<script src="<%=path %>/static/easyui/common/plugins/qtip/jquery.qtip.pack.js" type="text/javascript"></script>
	<script src="<%=path %>/static/easyui/common/plugins/html/jquery.outerhtml.js" type="text/javascript"></script>
    <script type="text/javascript" src="<%=path %>/static/js/workflow.js"></script> 
    <!-- 消息相关 -->
    <script type="text/javascript" src="<%=path%>/static/xmpp/jquery.cookie.js"></script>
    <script type="text/javascript" src="<%=path%>/static/xmpp/jquery.toastmessage.js"></script>
    <script type="text/javascript" src="<%=path%>/static/xmpp/strophe.min.js"></script>
    <link href="<%=path%>/static/xmpp/css/jquery.toastmessage.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="<%=path%>/static/xmpp/message.js"></script>
	<script type="text/javascript" src="<%=path%>/static/js/jquery.bigautocomplete.js"></script>
	
    <script type="text/javascript">
    	
	    //修改密码
		var ChangePassword = function() {
			openDialog("frmChangePassoword", "../jsp/frmChangePassword.jsp", "修改密码", 240, 460,false,function(){});
		};
		$(function (){
			$("#currentUserName").text("${user.fusername}");
	    });
	        
	        //设定标题宽度
	        $("#divTopBar").css("width",$("#divTopBar").parent().css("width"));
		var Logout = function() {
			$.ajax({  
				url:'${pageContext.request.contextPath}/logout.action',
				type: 'post',  
				success:function(data){
					$.messager.alert('提醒信息','您已完全退出，系统将自动返回登录页面！','info');
					setTimeout(function(){ 
						window.location.href = '${pageContext.request.contextPath}/index.jsp'; 
					},1000);
				}
	        });
		};
		
		//隐藏显示头部信息
		function HidenHead()
		{
			//画面重新渲染
			$('#divLayOut').layout('collapse', 'north');  
		}
    </script>
</head>
<body class="easyui-layout" id="divLayOut" >
	<!-- 上面部分 -->
    <div  border="false" style="height:22px;" data-options="region:'north',split:false">  
        <div style="background:#D9EDF4;height:22px;border:0px solid;overflow:auto;overflow-y: hidden;" scroll="no">
            <div class="top_middle"><img src="<%=path %>/static/easyui/themes/icons/man.png" style="width:15px; height:17px; float:left;margin-right:3px;" /><label id="currentUserName"></label> ，您好！</div>
            <div  style="width:800px; height:22px; float:left; margin-left:50px; display:inline;line-height:22px;">
            	<marquee  id="AnnouncementBoard" style="color:blue;" direction="left" behavior="scroll" scrollamount="1" scrolldelay="0" loop="-1" width="100%" height="22">
            		<span style="float:left;color:#184b9aa;">
            			<img src="<%=path %>/static/easyui/themes/icons/notice.png" style="float:left; margin-top:4px; margin-right:5" />	
            			<a href="javascript:void(0)" style="float:left;color:#184b9a; text-decoration:none;" onclick="">猪场信息管理系统已经上线,试用中存在问题请大家提出来。</a>
            		</span>
            		<span style="float:left;color:#184b9aa;">
            			<img src="<%=path %>/static/easyui/themes/icons/notice.png" style="float:left; margin-top:4px;" />	
            			<a href="javascript:void(0)" style="float:left;color:#184b9a; text-decoration:none;"  onclick="">猪场信息管理系统已经上线,试用中存在问题请大家提出来。</a>
            		</span>
            	 </marquee>
            </div>
            <span class="top_right">
                  <img src="<%=path %>/static/easyui/themes/icons/hiden.png" onclick="return HidenHead();" style=" float:left;"/>
                  <a href="javascript:void(0)" onclick="return HidenHead();">隐藏</a> 
            </span>
             <span class="top_right">
                  <img src="<%=path %>/static/easyui/themes/icons/exit.png" onclick="return Logout();" />
                  <a href="javascript:void(0)" onclick="return Logout();">安全退出</a> 
            </span>
              <span class="top_right">
              	<img src="<%=path %>/static/easyui/themes/icons/editpassword.png"  onclick="return ChangePassword();"/>
                <a  href="javascript:void(0)" id="editpass" onclick="return ChangePassword();">修改密码</a> 
            </span>
        </div>
    </div>
	
    <decorator:body />

	<!-- 下面部分 -->
	<div data-options="region:'south',split:'true'" style="height: 35px; background: #D2E0F2;padding: 5px">
		<div style="float:left;text-align: center; font-weight: bold;width:93%;">技术支持：新疆天康畜牧生物技术股份有限公司</div>
		<div  style="float:right;text-align:left; width:50px;"><a id="footermesssage" href="javascript:void(0)" onclick=""></a></div>
		<img src="<%=path %>/static/easyui/themes/icons/message.png" onclick="" style="float:right; margin-top:1px; margin-right:3px;" />
	</div>
	
	<div id="dlgAnnouncement"   style="width:400px;height:200px;display:none;overflow: hidden;">   
	<table id="Announcement_control" class="easyui-datagrid" style="width:100%, height:100%" >
	</table>
	</div>  
	<!-- 公告内容 -->
	<div id="dlgAnnouncementDetail"  >
		     <table width="100%" id="AnnouncementDetail_control">
		    	<tr >
		            <td>
		   				<textarea id="fannouncementcontent" name="fannouncementcontent" type="text" style="width:270px;height: 245px; "  class="easyui-validatebox input_add_text" autocomplete="off"></textarea>
		   			    
		            </td>
		        </tr>
		 	</table>
	</div> 
	<!-- 未读消息内容 -->
		<div id=dlgMessageDetail  >
		     <table width="100%" id="dlgMessageDetail_control">
		    	<tr >
		            <td>
		   				<textarea id="fmessage" name="fmessage" type="text" style="width:270px;height: 245px; "  class="easyui-validatebox input_add_text" autocomplete="off"></textarea>
		   			    
		            </td>
		        </tr>
		 	</table>
	</div> 
	
	<div id="dlgMessage"   style="width:600px;height:530px;display:none;overflow: hidden;">
    	<div id="divSouth"  data-options="region:'south',fit:true,split:true" style="height:500px;width: 100%;">
    	<div id="tab_All" class="easyui-tabs" data-options="tabWidth:168" style="height:500px;">
			<div title="未读消息" id="unitData" data-options="closable:false" >
		       	<table id="NotReadMessage_control" style="width:100%; height:70%;" >
       			</table>
		    </div>
		    <div title="已读消息" id="stockData" data-options="closable:false" >
		       	<table id="ReadMessage_control" style="width: 100%; height: 70%;" >
       			</table>
		    </div>
    	</div> 
    </div>
	</div>  
</body>
</html>
