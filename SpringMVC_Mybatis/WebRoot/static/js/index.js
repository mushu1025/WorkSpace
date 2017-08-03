$(function () {
	// 导航菜单初始化
    $("#wnav").accordion({
        animate: false
    })
  //获取当前登陆用户的操作菜单
    $.ajax({
        type: "POST",
        url: "../sys/function/getfunctionTree.action",
        async:false,
        success: function (data) {
        	addNav(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $.messager.alert('系统提示', "导航树加载失败。", 'error');
        }
    });
   
});


function addNav(data) {
    $.each(data, function (i, sm) {
        var id = sm.id;
        $('#wnav').accordion('add', {
            title: sm.text,
            content: "<ul id='tree" + id + "' ></ul>",
            selected: true,
            iconCls:sm.iconCls
        });
        $("#tree" + id).tree({
            data: sm.children,
            onClick: function (node) {
            	if ($(this).tree('isLeaf',node.target) ) {
                	if(node.attributes.url != ""){
                		//打开对应画面
                        addTab(node.text, node.attributes.url, node.iconCls);
                	}
            	}else{
                	//$(this).tree('expand',node.target);
                	$(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
                }
            }
        });
    });

    //默认打开第一个抽屉
    var pp = $('#wnav').accordion('panels');
    if(pp.length>0){
    	var t = pp[0].panel('options').title;
        $('#wnav').accordion('select', t);
    }
}
function addTab(subtitle, url, icon) {
    if (!$('#index-tabs').tabs('exists', subtitle)) {
        $('#index-tabs').tabs('add', {
            title: subtitle,
            content: createFrame(url),
            closable: true,
            icon: icon
        });
    } else {
        $('#index-tabs').tabs('select', subtitle);
        //$('#mm-tabupdate').click();
    }
    //tabClose();
}


function createFrame(url) {
    var s = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>';
    return s;
}