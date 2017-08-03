<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>鸡场管理信息系统</title>
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/easyui/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/easyui/themes/icon.css" />
    <script type="text/javascript" src="<%=path %>/static/easyui/jquery.min.js"></script>
    <script type="text/javascript" src="<%=path %>/static/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="<%=path %>/static/easyui/json2.js"></script>
    <script src="<%=path %>/static/easyui/easyui-lang-zh_CN.js" type="text/javascript"></script>
    <link href="<%=path %>/static/css/Login2.css" rel="stylesheet" type="text/css" />
    <!-- 轮显 -->
    <link rel="stylesheet" type="text/css" href="<%=path %>/static/css/banner.css" />
    <script src="<%=path %>/static/js/slider.js" type="text/javascript"></script>

<script language="javascript">
// rewrite the 'onkeydown' event to make sure 'Enter' key can be used as 'Tab' in some needed circumstances.  It work fine on both IE and non-IE browsers.
document.onkeydown=function(evt)
{
	var isie = (document.all) ? true : false;
	var key;
	var srcobj;
	// if the agent is an IE browser, it's easy to do this.
	if (isie) {
		key = event.keyCode;
		srcobj=event.srcElement;
	}
	else {
		key = evt.which;
		srcobj=evt.target;
	}
	//if(key==13 && srcobj.type!='button' && srcobj.type!='submit' &&srcobj.type!='reset' && srcobj.type!='textarea' && srcobj.type!='') {
	if(key==13 && srcobj.type!='button'  && srcobj.type!='submit' ) {
		if(isie)
			event.keyCode=9;
		else {
			var el=getNextElement(evt.target);
			if (el.type!='hidden')
				;   //nothing to do here.
			else
				while(el.type=='hidden')
					el=getNextElement(el);
			if(!el)
				return false;
			else
				el.focus();
		}
	}
}
 
function getNextElement(field) {
	var form = field.form;
	for(var e = 0; e < form.elements.length; e++) {
		if (field == form.elements[e])
		break;
	}
	return form.elements[++e % form.elements.length];
}
 
</script>
    
    <script type="text/javascript">
        //画面初始化
        $(function () {
            //用户名获得焦点
            $("#username").focus();
             var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
			$.getJSON(url, function (data) {
			if(data!=null){
				$("#useripaddress").val(data.Ip);
			}
			});
            
        });
		function SubmitForm() {
            $('#frmLogin').form('submit', {
                url: '${pageContext.request.contextPath}/login.action',
                onSubmit: function(){
				    	//画面提交验证
				    	return $(this).form('validate');
				},  
                success: function (data) {
                	//转成json格式
                    var dataJson = $.parseJSON(data);
                    if (dataJson.returnvalue == 1) {
                        //window.location.href = "index.jsp";
                        window.location.href = "${pageContext.request.contextPath}/index/index.action";
                    } else {
                        //恢复按钮
                        $('#btnLogin').removeAttr("disabled");
                        $.messager.alert('系统提示', dataJson.message, dataJson.messageType, function () {
                            //画面初始化
                            $("#username").val("");
                            $("#password").val("");
                            $("#username").focus();
                        });

                    }
                }
            });
        }
    </script>
</head>
<body>
    <form id="frmLogin" method="post">
     <div class="main">
     	<div class="login_top">
            <img src="<%=path %>/static/images/login_logo.jpg" class="login_logo" />
            <span class="login_title">
            <img src="<%=path %>/static/images/login_logo2.jpg" /></span>
            
            <a href="http://222.82.242.58:81/login/Login.jsp" target="_black" class="login_top_a">|&nbsp;OA登录</a>
            <a href="http://www.tcsw.com.cn/" target="_black" class="login_top_a">|&nbsp;天康首页</a>
        </div>
     </div>
     <div class="banner">
        <div class="main_box">
            <table width="1024" border="0" cellpadding="0" cellspacing="0" class="banner_lunhuan">
                <tr valign="top">
                    <td colspan="4">
                        <!-- 轮播广告 -->
                        <div id="banner_tabs" class="flexslider">
                            <ul class="slides">
                                <li><a title="" href="javascript:void(0);">
                                    <img alt="" width="1024" height="450" style="background: url(<%=path %>/static/images/ad-03.jpg) no-repeat center;
                                        background-size: 100%" src="<%=path %>/static/images/alpha.png"/>
                                </a></li>
                                <li><a title="" href="javascript:void(0);">
                                    <img alt="" width="1024" height="450" style="background: url(<%=path %>/static/images/ad-04.jpg) no-repeat center;
                                        background-size: 1024px 450px;" src="<%=path %>/static/images/alpha.png"/>
                                </a></li>
                                <li><a title="" href="javascript:void(0);">
                                    <img alt="" width="1024" height="450" style="background: url(<%=path %>/static/images/ad-05.jpg) no-repeat center;
                                        background-size: 1024px 450px;" src="<%=path %>/static/images/alpha.png"/>
                                </a></li>
                                <li><a title="" href="javascript:void(0);">
                                    <img alt="" width="1024" height="450" style="background: url(<%=path %>/static/images/ad-06.jpg) no-repeat center;
                                        background-size: 1024px 450px;" src="<%=path %>/static/images/alpha.png"/>
                                </a></li>
                            </ul>
                            <ul class="flex-direction-nav">
                                <li><a class="flex-prev" href="javascript:;">Previous</a></li>
                                <li><a class="flex-next" href="javascript:;">Next</a></li>
                            </ul>
                            <ol id="bannerCtrl" class="flex-control-nav flex-control-paging">
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                            </ol>
                        </div>
                    </td>
                </tr>
                
            </table>
            <div class="login_form_con">
                <div class="form_div">
                </div>
                <div class="login_form">
                    <img alt="" src="<%=path %>/static/images/login_logo2.png" class="login_logo2" />
                    <input name="useripaddress" id="useripaddress" type="hidden" />
                    <input name="username" id="username" type="text" class="login-field easyui-validatebox login_name" data-options="required:true" autocomplete="off" placeholder="用户名" title="用户名" />
                    <input name="password" id="password" type="password" class="login-field easyui-validatebox login_password" data-options="required:true" textmode="Password" placeholder="密码" title="密码" />
                    <input id="btnLogin" name="btnLogin" type="button" value=" " class="login_denglu" onclick="SubmitForm();" />
                    <span class="jishuzhichi">技术支持：新疆天康畜牧生物技术股份有限公司</span>
                </div>
            </div>
        </div>
    </div>
    </form>
    <script type="text/javascript">
        $(function () {
            var bannerSlider = new Slider($('#banner_tabs'), {
                time: 2000,
                delay: 400,
                event: 'hover',
                auto: true,
                mode: 'fade',
                controller: $('#bannerCtrl'),
                activeControllerCls: 'active'
            });
            $('#banner_tabs .flex-prev').click(function () {
                bannerSlider.prev();
            });
            $('#banner_tabs .flex-next').click(function () {
                bannerSlider.next();
            });
        });
    </script>
    <div class="main">
    <div class="banner_bottom">
    	<img src="<%=path %>/static/images/banner_icon.jpg" class="banner_bottom_img" />
    	<span class="banner_bottom_span">欢迎使用天康集团信息门户，请在右侧输入用户名和密码登入系统。<br />
				如账号登入遇到问题，请联系管理员。</span>
    </div></div>
</body>
</html>
