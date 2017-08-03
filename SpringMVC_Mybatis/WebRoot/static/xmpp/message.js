// 123.57.29.155
var HOST_NAME = "iz2520kib9kz"; //iz2520kib9kz testserver
var BOSH_SERVICE = 'http://123.57.29.155:7070/http-bind/'; // http://123.57.29.155:7070/http-bind/
var connection = null;
var DEBUG = true;

function log(msg) 
{
    // $('#xmpp_Log').append('<div></div>').append(document.createTextNode(msg));
}

function onConnect(status)
{

	console.log('Strophe.Status.CONNECTING: ' + Strophe.Status.CONNECTING);
	console.log('Strophe.Status.CONNFAIL: ' + Strophe.Status.CONNFAIL);
	console.log('Strophe.Status.DISCONNECTING: ' + Strophe.Status.DISCONNECTING);
	console.log('Strophe.Status.DISCONNECTED: ' + Strophe.Status.DISCONNECTED);
	console.log('Strophe.Status.CONNECTED: ' + Strophe.Status.CONNECTED);
	console.log('Strophe.Status.AUTHENTICATING: ' + Strophe.Status.AUTHENTICATING);
	console.log('Strophe.Status.AUTHFAIL: ' + Strophe.Status.AUTHFAIL);
	console.log('=============================');

	console.log(connection);
	console.log(status);

    if (status == Strophe.Status.CONNECTING) {
		log('正在连接...');
        console.log('Strophe is connecting.');
    } else if (status == Strophe.Status.CONNFAIL) {
		log('连接失败');
    } else if (status == Strophe.Status.DISCONNECTING) {
		log('断开连接...');
    } else if (status == Strophe.Status.DISCONNECTED) {
		log('连接已断开');
    } else if (status == Strophe.Status.CONNECTED) {
		log('连接成功');
		$().toastmessage('showSuccessToast', "连接消息系统成功");
        console.log('Strophe is connected.');

		$.cookie('jid', connection.jid);
		$.cookie('sid', connection.sid);
		$.cookie('rid', connection.rid);
        
        connection.addHandler(onMessage, null, 'message', null, null,  null); 
        connection.send($pres().tree());
    }
}

function onMessage(msg) {
    var to = msg.getAttribute('to');
    var from = msg.getAttribute('from');
    var type = msg.getAttribute('type');
    var elems = msg.getElementsByTagName('body');

    if ((type == "normal" || type == null) && elems.length > 0) {
    	var body = elems[0];
    	
    	log(new Date().toLocaleTimeString() + ' ' + from + ': ' + Strophe.getText(body));
    	$().toastmessage('showToast', {
    	    text     : '新消息：' + Strophe.getText(body),
    	    sticky   : true,
    	    position : 'top-right',
    	    type     : 'notice',
    	    close    : function () {console.log("toast is closed ...");}
    	});
    }

    return true;
}


$(document).ready(function () {

	log("域名：" + document.domain);
	
    connection = new Strophe.Connection(BOSH_SERVICE);

	if (DEBUG){
		// $("#xmpp_Log").show();
		 // 取消注释以监听交互内容
	    connection.rawInput = function (data) { log('RECV: ' + data); console.log('RECV: ' + data);};
	    connection.rawOutput = function (data) { log('SEND: ' + data); console.log('SEND: ' + data);};

	    // 取消注释以查看全部debug信息
	    //Strophe.log = function (level, msg) { log('LOG: ' + msg); };
		
	}
	else
	{
		// $("#xmpp_Log").hide();
	}
	
	//get_login_name();
});


function get_login_name(){
	$.ajax({  
		url: '../getUserName.action',
		type: 'post',  
		success:function(data){
			var result =JSON.parse(data);
			//connection.connect(result.floginname + "@" + HOST_NAME, "1", onConnect);
			// result.floginname
		}
    });
}
