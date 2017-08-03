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
    <title>鸡场管理信息系统</title>
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/easyui/themes/default/easyui.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/easyui/themes/icon.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/css/model.css"/>
    <script type="text/javascript" src="<%=path %>/static/easyui/jquery.min.js"></script> 
    <%-- <script type="text/javascript" src="<%=path %>/static/easyui/jquery-1.11.3.js"></script> --%>
    <script type="text/javascript" src="<%=path %>/static/js/browser.js"></script>
    <script type="text/javascript" src="<%=path %>/static/easyui/jquery.easyui.min.js"></script>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<%=path %>/static/easyui/json2.js"></script>
	<![endif]-->
    <script type="text/javascript" src="<%=path %>/static/js/commonSelectFrm.js"></script>
    <script type="text/javascript" src="<%=path %>/static/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/tools.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/datagrid-groupview.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/dataItemUtil.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/reportTool.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/shareType.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/pytools.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/jgxLoader.js"></script> 
	<script src="<%=path %>/static/easyui/common/plugins/qtip/jquery.qtip.pack.js" type="text/javascript"></script>
	<script src="<%=path %>/static/easyui/common/plugins/html/jquery.outerhtml.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=path %>/static/js/workflow.js"></script> 
	<script type="text/javascript" src="<%=path %>/static/js/highcharts.js"></script>
	<script type="text/javascript" src="<%=path %>/static/js/highcharts-more.js"></script>
    <script type="text/javascript" src="<%=path %>/static/js/exporting.js"></script>
</head>
<body class="easyui-layout" style="border:0px" >
    <decorator:body />
    
    <script language="javascript">
	</script>
    
    <script type="text/javaScript">
	</script>	
</body>
</html>
