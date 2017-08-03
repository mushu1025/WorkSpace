/**
 * 预览报表
 * @param business 业务名称
 * @param parameters 参数
 */
function PreviewReportForChild(business,parameters){
	var URL="";
	if(business=="ReportDay"){
		URL="../proc/ProcReport/Print?parameters="+parameters;
	}
	$.ajax({
	       type: "POST",
	       url:URL,
	       async:false,
	       success: function (data1) {
	       	$("#reprot").html(data1);
	     },
	     error: function(XMLHttpRequest, textStatus, errorThrown) {
	    	 $.messager.alert('系统提示', "请联系管理员，系统错误。错误内容："+XMLHttpRequest.status+XMLHttpRequest.readyState+textStatus, 'error');
	     }
	});	
}

//打印方法
function ReportPrintDataForChild(business,parameters){
	var URL="";
	if(business=="ReportDay"){
		URL="../proc/ProcReport/PrintData?parameters="+parameters;
	}
	$.ajax({
	       type: "POST",
	       url:URL,
	       async:false,
	       success: function (data1) {
	     },
	     error: function(XMLHttpRequest, textStatus, errorThrown) {
	    	 $.messager.alert('系统提示', "请联系管理员，系统错误。错误内容："+XMLHttpRequest.status+XMLHttpRequest.readyState+textStatus, 'error');
	     }
	});	
}


/**
 * 预览报表
 * @param business 业务名称
 * @param parameters 参数
 */
function PreviewReport(business,parameters){
//	alert("PreviewReport"+business);
	var URL="";
	//菜单其他下的生产报表
	if(business=="ReportDay"){
		URL="../proc/ProcReport/Print?parameters="+parameters;
	}
	//死亡日报
	if(business=="ReportDieDay"){
		URL="../report/ReportDieDay/PrintDieDay?parameters="+parameters;
	}
	//生产日报
	if(business=="ReportProcDay"){
		URL="../report/ReportProcDay/PreviewProcDay?parameters="+parameters;
	}
	//淘汰日报
	if(business=="ReportWashOutDay"){
		URL="../report/ReportWashOutDay/PrintWashOutDay?parameters="+parameters;
	}
	//存栏日报
	if(business=="ReportLivestockOnHand"){
		URL="../report/ReportLivestockOnHand/PrintLivestockOnHand?parameters="+parameters;
	}
	//饼状图报表
	if(business=="ReportPieChart"){
		URL="../report/ReportPieChart/PreviewPieChart?parameters="+parameters;
	}
	
	//柱状图报表
	if(business=="ReportHistogram"){
		URL="../report/ReportHistogram/PreviewHistogram?parameters="+parameters;
		
	}
	//胎次结构
	if(business=="ReportParityAnalysis"){
		URL="../proc/ParityAnalysis/PreviewParityAnalysis?parameters="+parameters;
		
	}
	//付款月报
	if(business=="ReportPayMonth"){
		URL="../report/ReportPayMonth/PreviewReportPayMonth?parameters="+parameters;
		
	}
	//库存结构分析
	if(business=="ReportMaterielAccountStructureStat"){
		URL="../report/ReportMaterielAccountStructure/PreviewReportMaterielAccountStructure?parameters="+parameters;
		
	}
	//销售月报
	if(business=="ReportDVMonth"){
		URL="../report/ReportDVMonth/PreviewReportDVMonth?parameters="+parameters;
		
	}
	//收款月报
	if(business=="ReportGatheringMonth"){
		URL="../report/ReportGatheringMonth/PreviewReportGatheringMonth?parameters="+parameters;
		
	}
	//采购付款计划
	if(business=="ReportSupplyMPayPlan"){
		URL="../report/ReportSupplyMPayPlan/PreviewReportSupplyMPayPlan?parameters="+parameters;
		
	}
	//收发存汇总表	 
	if(business=="ReportMaterielStock"){
		URL="../report/ReportMaterielStock/PreviewReportMaterielStock?parameters="+parameters;
		
	} 
	//药品月计划汇总表	 
	if(business=="ReportMDrugPlan"){
		URL="../report/ReportMDrugPlan/PreviewReportMDrugPlan?parameters="+parameters;
		
	}
	//饲料周计划汇总表	 
	if(business=="ReportWFodderPlan"){
		URL="../report/ReportWFodderPlan/PreviewReportWFodderPlan?parameters="+parameters;
		 
	}
	//药品月订单汇总表	 
	if(business=="ReprotSupplyOrderListDrugMonth"){
		URL="../report/ReprotSupplyOrderListDrugMonth/PreviewReprotSupplyOrderListDrugMonth?parameters="+parameters;
		 
	}
	$.ajax({
	       type: "POST",
	       url:URL,
	       async:false,
	       success: function (data1) {	    	
	        var data =  $.parseJSON(data1);	 	      
	        $("#reprot").html(data.ReportBody);	        
	        $("#DataCount").val(data.DataCount);
	     },
	     error: function(XMLHttpRequest, textStatus, errorThrown) {
	    	 $.messager.alert('系统提示', "请联系管理员，系统错误。错误内容："+XMLHttpRequest.status+XMLHttpRequest.readyState+textStatus, 'error');
	     }
	});	
}

//打印方法
function ReportPrintData(business,parameters){
	var URL="";
	//菜单其他下的生产报表
	if(business=="ReportDay"){
		URL="../proc/ProcReport/PrintData?parameters="+parameters;
	}
	//死亡日报
	if(business=="ReportDieDay"){
		URL="../report/ReportDieDay/PrintDataDieDay?parameters="+parameters;
	}
	//生产日报
	if(business=="ReportProcDay"){
		URL="../report/ReportDieDay/PrintDataProcDay?parameters="+parameters;
	}
	//淘汰日报
	if(business=="ReportWashOutDay"){
		URL="../report/ReportWashOutDay/PrintDataWashOutDay?parameters="+parameters;
	}
	//存栏日报
	if(business=="ReportLivestockOnHand"){
		URL="../report/ReportLivestockOnHand/PrintDataLivestockOnHand?parameters="+parameters;
	}
	//柱状图报表 
	if(business=="ReportHistogram"){
		URL="../report/ReportHistogram/PrintHistogram?parameters="+parameters;
	}
	//饼状图报表 
	if(business=="ReportPieChart"){
		URL="../report/ReportPieChart/PrintPieChart?parameters="+parameters;
	}
	//付款月报
	if(business=="ReportPayMonth"){
		URL="../report/ReportPayMonth/PrintReportPayMonth?parameters="+parameters;
	}
	//库存结构分析
	if(business=="ReportMaterielAccountStructureStat"){
		URL="../report/ReportMaterielAccountStructure/PrintReportMaterielAccountStructure?parameters="+parameters;
		
	}
	//销售月报
	if(business=="ReportDVMonth"){
		URL="../report/ReportDVMonth/PrintReportDVMonth?parameters="+parameters;
		
	}
	//收款月报
	if(business=="ReportGatheringMonth"){
		URL="../report/ReportGatheringMonth/PrintReportGatheringMonth?parameters="+parameters;
		
	}
	//采购付款计划
	if(business=="ReportSupplyMPayPlan"){
		URL="../report/ReportSupplyMPayPlan/PrintReportSupplyMPayPlan?parameters="+parameters;
		
	}
	//收发存汇总表
	if(business=="ReportMaterielStock"){
		URL="../report/ReportMaterielStock/PrintReportMaterielStock?parameters="+parameters;
		
	}
	//药品月计划汇总表	 
	if(business=="ReportMDrugPlan"){
		URL="../report/ReportMDrugPlan/PrintReportMDrugPlan?parameters="+parameters;
		
	}
	//饲料周计划汇总表	 
	if(business=="ReportWFodderPlan"){
		URL="../report/ReportWFodderPlan/PrintReportWFodderPlan?parameters="+parameters;
		
	}
	//药品月订单汇总表	 
	if(business=="ReprotSupplyOrderListDrugMonth"){
		URL="../report/ReprotSupplyOrderListDrugMonth/PrintReprotSupplyOrderListDrugMonth?parameters="+parameters;
		 
	}
	$.ajax({
	       type: "POST",
	       url:URL,
	       async:false,
	       success: function (data1) {
	     },
	     error: function(XMLHttpRequest, textStatus, errorThrown) {
	    	 $.messager.alert('系统提示', "请联系管理员，系统错误。错误内容："+XMLHttpRequest.status+XMLHttpRequest.readyState+textStatus, 'error');
	     }
	});	
}