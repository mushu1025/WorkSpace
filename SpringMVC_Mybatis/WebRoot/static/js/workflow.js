function graphTrace(options) {
    var _defaults = {
        srcEle: this,
        pid:options.activityid
    };
    var opts = $.extend(true, _defaults, options);
    // 处理使用js跟踪当前节点坐标错乱问题
    $('#changeImg').on('click', function() {
        $('#workflowTraceDialog').dialog('close');
        if ($('#imgDialog').length > 0) {
            $('#imgDialog').remove();
        }
        $('<div/>', {
            'id': 'imgDialog',
            title: '此对话框显示的图片是由引擎自动生成的，并用红色标记当前的节点',
            html: "<img src='../workflow/process/trace/auto/"+opts.processinstanceid+"'/>"
        }).appendTo('body').dialog({
            modal: true,
            resizable: false,
            dragable: false,
            width: document.documentElement.clientWidth * 0.95,
            height: document.documentElement.clientHeight * 0.95
        });
    });

    // 获取图片资源
    var imageUrl ="../workflow/resource/process-instance?pid=" + opts.processinstanceid + "&type=image";
    $.getJSON('../workflow/process/trace?pid=' + opts.processinstanceid, function(infos) {
        var positionHtml = "";
        // 生成图片
        var varsArray = new Array();
        if(opts.processdefinitionid.indexOf("饲料周采购计划")>-1){
        	 $.each(infos, function(i, v) {
                 var $positionDiv = $('<div/>', {
                     'class': 'activity-attr'
                 }).css({
                     position: 'absolute',
                     left: ((v.x -1)+5),
                     top: ((v.y-10)),
                     width: (v.width - 2),
                     height: (v.height - 2),
                     backgroundColor: 'black',
                     opacity: 0,
                     zIndex: $.fn.qtip.zindex - 1
                 });

                 // 节点边框
                 var $border = $('<div/>', {
                     'class': 'activity-attr-border'
                 }).css({
                     position: 'absolute',
                     left: ((v.x -1)+5),
                     top: ((v.y-10)),
                     width: (v.width - 4),
                     height: (v.height - 3),
                     zIndex: $.fn.qtip.zindex - 2
                 });
                 	
                 if (v.currentActiviti) {
                     $border.addClass('ui-corner-all-12').css({
                         border: '3px solid red'
                     });
                 }
                 positionHtml += $positionDiv.outerHTML() + $border.outerHTML();
                 varsArray[varsArray.length] = v.vars;
             });
        }else if(opts.processdefinitionid.indexOf("药品月采购计划")>-1  || opts.processdefinitionid.indexOf("煤炭月采购计划")>-1){
        	//药品月采购计划
            	 $.each(infos, function(i, v) {
                     var $positionDiv = $('<div/>', {
                         'class': 'activity-attr'
                     }).css({
                         position: 'absolute',
                         left: (v.x-35),
                         top: (v.y-100),
                         width: (v.width - 2),
                         height: (v.height - 2),
                         backgroundColor: 'black',
                         opacity: 0,
                         zIndex: $.fn.qtip.zindex - 1
                     });

                     // 节点边框
                     var $border = $('<div/>', {
                         'class': 'activity-attr-border'
                     }).css({
                         position: 'absolute',
                         left: (v.x-35),
                         top: (v.y-100),
                         width: (v.width - 4),
                         height: (v.height - 3),
                         zIndex: $.fn.qtip.zindex - 2
                     });
                     	
                     if (v.currentActiviti) {
                         $border.addClass('ui-corner-all-12').css({
                             border: '3px solid red'
                         });
                     }
                     positionHtml += $positionDiv.outerHTML() + $border.outerHTML();
                     varsArray[varsArray.length] = v.vars;
                 });
        }else if(opts.processdefinitionid.indexOf("饲料付款计划")>-1  || opts.processdefinitionid.indexOf("煤炭付款计划")>-1 || opts.processdefinitionid.indexOf("药品付款计划")>-1){
        	//药品月采购计划
       	 $.each(infos, function(i, v) {
                var $positionDiv = $('<div/>', {
                    'class': 'activity-attr'
                }).css({
                    position: 'absolute',
                    left: (v.x+5),
                    top: (v.y+5),
                    width: (v.width - 2),
                    height: (v.height - 2),
                    backgroundColor: 'black',
                    opacity: 0,
                    zIndex: $.fn.qtip.zindex - 1
                });

                // 节点边框
                var $border = $('<div/>', {
                    'class': 'activity-attr-border'
                }).css({
                    position: 'absolute',
                    left: (v.x+5),
                    top: (v.y+5),
                    width: (v.width - 4),
                    height: (v.height - 3),
                    zIndex: $.fn.qtip.zindex - 2
                });
                	
                if (v.currentActiviti) {
                    $border.addClass('ui-corner-all-12').css({
                        border: '3px solid red'
                    });
                }
                positionHtml += $positionDiv.outerHTML() + $border.outerHTML();
                varsArray[varsArray.length] = v.vars;
            });
   }

        if ($('#workflowTraceDialog').length == 0) {
            $('<div/>', {
                id: 'workflowTraceDialog',
                title: '查看流程',
                html: "<div><img src='" + imageUrl + "' style='position:absolute; left:60px; top:55px;' />" +
                "<div id='processImageBorder'>" +
                positionHtml +
                "</div>" +
                "</div>"
            }).appendTo('body');
        } else {
            $('#workflowTraceDialog img').attr('src', imageUrl);
            $('#workflowTraceDialog #processImageBorder').html(positionHtml);
        }

        // 设置每个节点的data
        $('#workflowTraceDialog .activity-attr').each(function(i, v) {
            $(this).data('vars', varsArray[i]);
        });

        // 打开对话框
        $('#workflowTraceDialog').dialog({
            modal: true,
            resizable: false,
            dragable: false,
            open: function() {
                $('#workflowTraceDialog').dialog('option', 'title', '查看流程（按ESC键可以关闭）<button id="changeImg">如果坐标错乱请点击这里</button>');
                $('#workflowTraceDialog').css('padding', '0.2em');
                $('#workflowTraceDialog .ui-accordion-content').css('padding', '0.2em').height($('#workflowTraceDialog').height() - 75);

                // 此处用于显示每个节点的信息，如果不需要可以删除
                $('.activity-attr').qtip({
                    content: function() {
                        var vars = $(this).data('vars');
                        var tipContent = "<table class='need-border'>";
                        $.each(vars, function(varKey, varValue) {
                            if (varValue) {
                                tipContent += "<tr><td class='label'>" + varKey + "</td><td>" + varValue + "<td/></tr>";
                            }
                        });
                        tipContent += "</table>";
                        return tipContent;
                    },
                    position: {
                        at: 'bottom left',
                        adjust: {
                            x: 3
                        }
                    }
                });
                // end qtip
            },
            close: function() {
                $('#workflowTraceDialog').remove();
            },
            width: document.documentElement.clientWidth * 0.95,
            height: document.documentElement.clientHeight * 0.95
        });

    });
}


var _ProcessRightData;
//获取流程字段权限
function GetProcessRightData(){
	//流程实例ID
	var FTaskProcessID=$("#ftaskprocessid").val();
	//任务表单ID
	var FTaskFormID=$("#ftaskformid").val();
	//节点ID
	var FTaskID=$("#ftasknode").val();
	var param={"FTaskProcessID":FTaskProcessID,"FTaskFormID":FTaskFormID,"FTaskID":FTaskID};
	$.ajax({
		type : "POST",
		url : "../wf/ActRuProcessNodeRight/GetActReProcessColumns",
		data : param,
		success : function (data) {
			_ProcessRightData=$.parseJSON(data);
	     },
         error: function(XMLHttpRequest, textStatus, errorThrown) {
         	EndOperationLoader();
	     	$.messager.alert('系统提示', "请联系管理员，系统错误。错误内容："+XMLHttpRequest.status+XMLHttpRequest.readyState+textStatus, 'error');
	     }
	});
}
