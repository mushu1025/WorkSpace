function SetComboxItem(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue){
	var url;
	//疾病类型
	if(controlName=="cboDiseaseType"){
		url="../base/DiseaseType/selectAll";
	}
	//猪只类群1
	if(controlName=="cboMonoid1"){
		url="../base/Monoid/getcboMonoidList";
	}
	//指标分类
	if(controlName=="cboFcategory"){
		url="../base/IndexCategory/getIndexCategoryList";
	}
	//单据类型
	if(controlName=="cboFBillType"){
		url="../report/ReportSupplyMPayPlan/getFBillTypeList";
	}
	//比较符
	if(controlName=="cboFoperator"){
		url="../base/Foperator/getFoperatorList";
	}
	//表单类型
	if(controlName=="cboFormType"){
		url="../wf/ActReFormType/getcboFormTypeList";
	}
	//猪只类群
	if(controlName=="cboMonoid"){
		url="../base/Monoid/getcboMonoidList";
	}
	//品种分类
	if(controlName=="cboCultivarClass"){
		url="../base/CultivarClass/getcboCultivarList";
	}
	//品种
	if(controlName=="cboCultivar"){
		url="../base/Cultivar/getcboCultivarList";
	}
	//品系
	if(controlName=="cboCultivarStrain"){
		url="../base/CultivarStrain/getcboCultivarStrainList";
	}
	//饲养阶段
	if(controlName=="cboFreeingStage"){
		url="../base/FreeingStage/getcboFreeingStageList";
	}
	if(controlName=="cboFreeingStageold"){
		url="../base/FreeingStage/getcboFreeingStageList";
	}
	if(controlName=="cboFreeingStagenew"){
		url="../base/FreeingStage/getcboFreeingStageList";
	}
	//种猪状态
	if(controlName=="cboBoarStatus"){
		url="../base/BoarStatus/getcboBoarStatusList";
	}
	//猪只来源(需要写)
	if(controlName=="cboPigSource"){
		url="../base/PigSource/getcboPigSourceList";
	}
	//用户类型
	if(controlName=="cboUserType"){
		url="../sys/UserType/getcboUserTypeList";
	}
	//单据类型分类
	if(controlName=="cbofcategoryname"){
		url="../sys/BillTypeCategory/GetBillTypeCategoryInfo";
	}
	//单据类型
	if(controlName=="cbofbilltypename"){
		url="../sys/BillType/GetBillTypeInfo";
	}
	
	//圈舍类型
	if(controlName=="cboColonyHouseType"){
		url="../base/ColonyHouseType/getcboColonyHouseTypeList";
	}
	//圈舍
	if(controlName=="cboColonyHouse"){
		url="../base/ColonyHouse/GetColonyHouse";
	}
	//批次类型
	if(controlName=="cboBatchType"){
		url="../base/BatchType/selectAllBatchType";
	}
	//仓库类型
	if(controlName=="cboFDepotTypeName"){
		url="../base/DepotType/getcboDepotTypeList";
	}
	//客户区域
	if(controlName=="cboCustomerFarea"){
		url="../base/SaleCustomer/getcboCustomerFareaList";
	}
	//客户类型
	if(controlName=="cboCustomerFtype"){
		url="../base/SaleCustomer/getcboCustomerFtypeList";
	}
	//供应商区域
	if(controlName=="cboProviderFarea"){
		url="../base/SupplyProvider/getcboProviderFareaList";
	}
	//供应商类型
	if(controlName=="cboProviderFtype"){
		url="../base/SupplyProvider/getcboProviderFtypeList";
	}
	//供应商ID
	if(controlName=="cboProviderFproviderID"){
		url="../base/SupplyProvider/getcboProviderFproviderIDList";
	}
	
	//财务年月
	if(controlName=="cboSysAccountDate"){
		url="../util/UserManage/getSysAccountDate";
	}
	//部门
	if(controlName=="cboDept"){
		url="../sys/OrganizationType/GetcboDeptList";
	} 
	//猪只状态
	if(controlName=="cboPigStatus"){
		url="../base/PigStatus/GetcboPigStatusList";
	}
	//淘汰原因
	if(controlName=="cboSelectionCause"){
		url="../base/SelectionCause/getcboSelectionCauseList";
	}	
	//死淘处理方式
	if(controlName=="cboDeadHandleMode"){
		url="../base/DeadHandleMode/getcboDeadHandleModeList";
	}
	//死亡原因
	if(controlName=="cboDieCause"){
		url="../base/DieCause/getcboDieCauseList";
	}
	//采购计量单位,生产计量单位,库存计量单位,销售计量单位。
	if(controlName=="cboFPurchaseUnit" || controlName=="cboFProduceUnit" || controlName=="cboFStockUnit" || controlName=="cboFSaleUnit"){
		url="../base/Materiel/getcboMaterielUnit";
	}
	//物料
	if(controlName=="cboMateriel"){
		url="../base/Materiel/GetCobMateriel";
	}
	//疾病症状分类
	if(controlName=="cboFSymptom"){
		url="../base/SymptomCategory/GetSymptomCategoryListInfo";
	}
	$.ajax({
        type: "POST",
        url:url,
        async:false,
        success: function (data1) {
        	var test= JSON.parse(data1);
        	if(hasEmptyOptioin){
        		test.unshift({ "id": "" ,"name":"全部"});
        	}
            $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				$('#'+controlName).combobox("setValue",test[0].id);
				    			}
				        	}
				    	}
				    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

//根据控件ID和控件类型来加载Combox数据
function SetComboxItemByType(controlName,controlType,hasEmptyOptioin,hasDefaultValue,defaultValue,callbackFuc){
	var url;
	//财务年月
	if(controlType=="SysAccountDate"){
		url="../util/UserManage/getSysAccountDate";
	}else if(controlType=="SysWeekData"){
		url="../sys/AccountDate/GetComboxWeekData";
	}
	$.ajax({
        type: "POST",
        url:url,
        async:false,
        success: function (data1) {
        	var test= JSON.parse(data1);
        	if(hasEmptyOptioin){
        		test.unshift({ "id": "" ,"name":"全部"});
        	}
            $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				if(controlType=="SysAccountDate"){
				    					var fyearPeriod=GetCurrentYearPeriodByDate(GetSystemDate());
				    					$('#'+controlName).combobox("setValue",fyearPeriod);
				    				}else if(controlType=="SysWeekData"){
				    					
				    				}
				    			
				    			}
				        	}
				    		
				    	}
				    	//回调函数
				    	//callbackFuc();
				    	if(callbackFuc!=null)
						{
				    		callbackFuc();
						}
				    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

/**
 * 多选下拉列表
 * @param controlName  控件名称
 * @param ismultipleSelect 是否可以复选
 * @param forgtypeids  组织类型
 * @param defaultValue 默认值
 * //http://www.cnblogs.com/scy251147/p/3904870.html				    			
 */
function SetComboxUserManage(controlName,ismultipleSelect,forgtypeids,defaultValue,callbackFuc){
	var url;
	//if(controlName=="cboUserManageOrg"){
		url="../util/UserManage/GetUserManageOrgList";
	//} 
	$.ajax({
        type: "POST",
        url: url,
        async:false,
        data:{"Forgtypeids":forgtypeids},
        success: function (data) {
        	var test= JSON.parse(data); 
        	var columns=new Array();
        	var DefautValues=[];
        	for(var p in test){ 
        		var result =new Object();
        		result.id=test[p].forganizationid;
            	result.text=test[p].forganizationshortname;
            	columns.push(result);
            	DefautValues.push(test[p].forganizationid);
        	} 
            $('#'+controlName).combotree({    
            		data:columns,     
				    multiple:ismultipleSelect,
				    keyHandler: {
						down: function(){
							  $('#'+controlName).combotree("showPanel");
						}, 
						enter: function(){
							$('#cboPigDeptSelect').combobox().next('span').find('input').focus();
						}
					},
				    onLoadSuccess:function(){
				    	if(ismultipleSelect){ 
				    		$('#'+controlName).combotree('setValues',DefautValues);
				    		//回调函数
	    					if(callbackFuc!=null)
	    					{
	    						callbackFuc();
	    					}
				    	}else{ 
				    		if(defaultValue!=null){ 
				    			setTimeout(function () { 
			    					$('#'+controlName).combotree('setValue',defaultValue);
			    					//回调函数
			    					if(callbackFuc!=null)
			    					{
			    						callbackFuc();
			    					}
							    	
			    				}, 300);
				    		}else if(columns.length>0){ 
				    			setTimeout(function () {
		    						$('#'+controlName).combotree('setValue',columns[0].id);
		    						//回调函数
			    					if(callbackFuc!=null)
			    					{
			    						callbackFuc();
			    					}
		    					}, 300);
				    		}
				    	}
				    	
				    	
				    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

/**
 * 根据用户获取用户管理组织和用户查询部门
 * @param controlName  控件名称
 * @param ismultipleSelect 是否可以复选
 * @param fparentid  上级组织ID
 * @param defaultValue 默认值
 * @param managerOrRetrieve 是否是查询部门
 */
function SetComboxUserManageForDeptment(controlName,ismultipleSelect,fparentid,defaultValue,managerOrRetrieve, callbackFuc){
	var url;
	if(managerOrRetrieve){
		url="../util/UserManage/GetUserManageDeptment";
	}else{
		url="../util/UserManage/GetUserRetrieveDeptment";
	}
	$.ajax({
        type: "POST",
        url:url,
        async:false,
        data:{"fparentid":fparentid},
        success: function (data) {
        	//var data='[{"id":1,"text":"天康畜牧","fuserid":0},{"id":2,"text":"天康畜牧2","fuserid":0},{"id":3,"text":"天康畜牧3","fuserid":0}]';
        	var test= JSON.parse(data);
        	var columns=new Array();
        	for ( var p in test ){ 
        		var result =new Object();
        		result.id=test[p].forganizationid;
            	result.text=test[p].forganizationshortname;
            	columns.push(result);
        	}
            $('#'+controlName).combotree({    
	    		data:columns,     
			    multiple:ismultipleSelect,
			    onLoadSuccess:function(){
			    	if(ismultipleSelect){
			    		if(defaultValue!=null){
			    		/*	$('#'+controlName).combobox("setValue",defaultValue);
			    			$('#'+controlName).combotree("setValue",defaultValue);*/
			    		}
			    		//回调函数
						if(callbackFuc!=null){
							callbackFuc();
						}
			    	}else{
			    		if(defaultValue!=null && defaultValue != ""){ 
			    			setTimeout(function () { 
			    				$('#'+controlName).combotree('setValue',defaultValue);
			    				//回调函数
		    					if(callbackFuc!=null){
		    						callbackFuc();
		    					}
			    			}, 300);
			    		}else if(columns.length>0){  
			    			setTimeout(function () { 
			    				$('#'+controlName).combotree('setValue',columns[0].id);
			    				//回调函数
		    					if(callbackFuc!=null){
		    						callbackFuc();
		    					}
			    			}, 300);
			    		}
			    	} 
			    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	});
}

/**
 * 多选下拉列表
 * @param controlName  控件名称
 * @param ismultipleSelect 是否可以复选
 * @param forgtypeids  组织类型
 * @param defaultValue 默认值
 */
function SetComboxUserManageByType(controlName,controlType,ismultipleSelect,forgtypeids,defaultValue){
	var url;
	if(controlType=="userManageOrg"){
		url="../util/UserManage/GetUserManageOrgList";
	}
	
	$.ajax({
        type: "POST",
        url:url,
        async:false,
        data:{"Forgtypeids":forgtypeids},
        success: function (data) {
        	//var data='[{"id":1,"text":"天康畜牧","fuserid":0},{"id":2,"text":"天康畜牧2","fuserid":0},{"id":3,"text":"天康畜牧3","fuserid":0}]';
        	var test= JSON.parse(data);
        	var columns=new Array();
        	for ( var p in test ){ 
        		var result =new Object();
        		result.id=test[p].forganizationid;
            	result.text=test[p].forganizationshortname;
            	columns.push(result);
        	}
        	$('#'+controlName).combotree({    
            		data:columns,     
				    multiple:ismultipleSelect,
				    onLoadSuccess:function(){
				       if(ismultipleSelect){
				    		if(defaultValue!=null)
				    		{
				    			  //$('#'+controlName).combobox("setValues",defaultValue);
				    			  //$('#'+controlName).combotree("setValue",defaultValue);
				    		}
				    	}
				    	else{
				    		if(defaultValue!=null)
				    		{
				    			//alert("SetValue:"+defaultValue);
				    			//$('#'+controlName).combobox("setValue",defaultValue);
				    			//$('#'+controlName).combotree("setValue",defaultValue);
				    		}
				    	}
				    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

//重名验证
function HasSameName(tableName, colName, colValue, keyName,keyValue){
 	var result="";
		$.ajax({
	        type: "POST",
	        url:"../util/UserManage/HasSameName",
	        async:false,
	        data:
	        {"tableName":tableName,
	         "colName":colName,
	         "colValue":colValue,
	         "keyName":keyName,
	         "keyValue":keyValue
	         },
	        success: function (data) {
	        	if(data=='true'){
	        		result="true";
	        	}else {
	        		result="false";
	        	}
	       }
	});
		return result;
}

/**
 * 根据条件获取下拉类表数据
 * @param controlName 控件名称
 * @param hasEmptyOptioin 是否有空选项
 * @param hasDefaultValue 是否有默认值
 * @param defaultValue 默认值
 * @param editable 是否可以编辑
 * @param tableName 表名称
 * @param valuekey 条件字段
 * @param valuename 条件值
 * @param key 表字段
 * @param name 显示名称
 */
function SetComboxDataByValue(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue,editable,tableName,valuekey,valuename,key,name){
	$.ajax({
        type: "POST",
        url:"../util/common/getcboDataByValueList",
        async:false,
        data:{"tableName":tableName,"key":key,"name":name,"valuekey":valuekey,"valuename":valuename},
        success: function (data) {
        	var test= JSON.parse(data);
        	if(hasEmptyOptioin){
        		test.unshift({ "id": "-1" ,"name":"　　"});
        	}
            $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    editable:editable ,
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				$('#'+controlName).combobox("setValue",test[0].id);
				    			}
				        	}
				    	}
				    }
			});  
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}


/**
 * 获取下拉类表数据
 * @param controlName 控件名称
 * @param hasEmptyOptioin 是否有空选项
 * @param hasDefaultValue 是否有默认值
 * @param defaultValue 默认值
 * @param editable 是否可以编辑
 * @param tableName 表名称
 * @param key 表字段
 * @param name 显示名称
 */
function SetComboxData(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue,editable,tableName,key,name){
	$.ajax({
        type: "POST",
        url:"../util/common/getcbodataList",
        async:false,
        data:{"tableName":tableName,"key":key,"name":name},
        success: function (data) {
        	var test= JSON.parse(data);
        	if(hasEmptyOptioin){
        		test.unshift({ "id": "-1" ,"name":"　　"});
        	}
            $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    editable:editable ,
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				$('#'+controlName).combobox("setValue",test[0].id);
				    			}
				        	}
				    	}
				    }
			});  
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}


/**
 * 获取下拉类表数据
 * @param controlName 控件名称
 * @param hasEmptyOptioin 是否有空选项
 * @param hasDefaultValue 是否有默认值
 * @param defaultValue 默认值
 * @param editable 是否可以编辑
 * @param data 数据源
 * @param key 表字段
 * @param name 显示名称
 */
function SetComboxDataByData(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue,editable,dataSource,key,name){
	$('#'+controlName).combobox({    
	    data:dataSource,    
	    valueField:key,    
	    textField:name, 
	    editable:editable ,
	    onLoadSuccess:function(){
	    	if(hasDefaultValue && defaultValue!=0){
	    		$('#'+controlName).combobox("setValue",defaultValue);
	    	}
	    	else 
	    	{
	    		if(!hasEmptyOptioin){
	    			if(dataSource.length>0){
	    				$('#'+controlName).combobox("setValue",dataSource[0].id);
	    			}
	        	}
	    	}
	    }
	});  
}


/**
 * 获取下拉类表数据
 * @param controlName 控件名称
 * ismultipleSelect  是否复选
 * @param data 数据源
 */
function SetComboxTreeDataByData(controlName,ismultipleSelect,dataSource){
	//var test= JSON.parse(data);
	var columns=new Array();
	for ( var p in dataSource ){ 
		var result =new Object();
		result.id=dataSource[p].id;
    	result.text=dataSource[p].name;
    	columns.push(result);
	}
	$('#'+controlName).combotree({    
	    data:columns,    
	    multiple:ismultipleSelect,
	    onLoadSuccess:function(){
	    	
	    }
	});  
}
/**
 * 获取下拉类表数据
 * @param controlName 控件名称
 * ismultipleSelect  是否复选
 * @param data 数据源
 */
function SetComboxTreeAllDataByData(controlName,ismultipleSelect,dataSource){
	//var test= JSON.parse(data);
	var columns=new Array();
	var allselect='';
	for ( var p in dataSource ){ 
		var result =new Object();
		result.id=dataSource[p].id;
		result.text=dataSource[p].name;
		allselect += dataSource[p].id + ",";
		columns.push(result);
	}
		var result =new Object();
		result.id="-11";
		result.text="全部";
		allselect += "-11,";
		result.children = columns; 
		columns=new Array();
		columns.push(result);
		allselect = allselect.substring(0, allselect.length-1);
	$('#'+controlName).combotree({    
		data:columns,    
		multiple:ismultipleSelect,
		onLoadSuccess:function(){
			var allselectData=allselect.split(',');
			$('#'+controlName).combotree('setValues',allselectData);
		}
	});  
}

/**
 * 
 * @param controlName 控件名称
 * @param tableName 表名
 * @param key 表字段
 * @param name 显示名称
 * @returns {String} 
 */
function getCommonComboxItemData(controlName,tableName,key,name){ 
	var result="";
	$.ajax({
        type: "POST",
        url:"../util/common/getcbodataList",
        async:false,
        data:{"tableName":tableName,"key":key,"name":name},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}

/**
 * 
 * @param controlName 控件名称
 * @param tableName 表名
 * @param key 表字段
 * @param name 显示名称
 * @returns {String} 
 */
function getCommonComboxItemData2(tableName,key,name,order){ 
	var result="";
	$.ajax({
        type: "POST",
        url:"../util/common/getcbodataList",
        async:false,
        data:{"tableName":tableName,"key":key,"name":name,"order":order},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}

/**
 * 
 * @param controlName 控件名称
 * @param tableName 表名
 * @param key 表字段
 * @param name 显示名称
 * @returns {String} 
 */
/*function getCommonComboxItemData2(controlName,tableName,key,name){ 
	var result="";
	$.ajax({
        type: "POST",
        url:"../util/common/getcbodataList",
        async:false,
        data:{"tableName":tableName,"key":key,"name":name},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	var resultreal=[];
	var keyreal=key.toLowerCase();
	var namereal=name.toLowerCase();
	$.each(result,function(n,value){
		var dataObject=new Object();
		dataObject[keyreal]=value.id;
		dataObject[namereal]=value.name;
		resultreal.push(dataObject);
	});
	
	return resultreal;
}
*/

/**
 * 
 * @param faccountunitid	核算单位
 * @param fdepottypeid	    仓库类型
 * @returns {String}
 */
function getCommonDepotComboxItemData(faccountunitid,fdepottypeid){ 
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getDepotCboData",
		async:false,
		data:{"fdepottypeid":fdepottypeid,"faccountunitid":faccountunitid},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}
/**
 * 
 * @param faccountunitid	核算单位
 * @param fsalegradeid	    销售等级ID
 * @returns {String}
 */
function getCommonSaleGradeComboxItemData(faccountunitid,fsalegradeid){ 
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getSaleGradeCboData",
		async:false,
		data:{"fsalegradeid":fsalegradeid,"faccountunitid":faccountunitid},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}


/**
 * 
 * @param 当前日期	fdate
 * @returns {String}
 */
function getCurrentWeek(fdate){ 
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getWeek",
		async:false,
		data:{"fdate":fdate},
		success: function (data) {
			result = data;
		}
	});
	return result;
}

/**
 * 
 * @param 当前日期	fdate
 * @returns {String}
 */
function getCurrentWeekID(fdate){ 
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getWeekid",
		async:false,
		data:{"fdate":fdate},
		success: function (data) {
			result = data;
		}
	});
	return result;
}


/**
 * 
 * @param controlName   控件名称
 * @param fcolonyhouseid	圈舍ID
 * @returns {String}
 */
function getCommonAccountComboxItemData(controlName,fcompanyid){ 
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getAccountCboData",
		async:false,
		data:{"fcompanyid":fcompanyid},
		success: function (data) { 
			result = JSON.parse(data);
		}
	});
	return result;
}

/**
 * 部门选择后设置圈舍一览数据
 * @param controlName 控件名称
 * @param defaultPar 默认值/控件选中值
 */
function SetComboxGrid(controlName,defaultPar){
	if(controlName=="cboColonyHousegrid"){
		$('#'+controlName).combogrid({    
			url:"../base/ColonyHouse/GetCboColonyHouseListByOrgID?FOrgID="+defaultPar,
		    idField: 'fcolonyhouseid',
			textField: 'fcolonyhouse', 
			multiple:true, 
			method: 'get',
			panelWidth:200,
			panelHeight:350,
			fitColumns: true,
			columns: [[
			           	{field:'ck',checkbox:true},
						{field:'fcolonyhouseid',title:'圈舍ID',halign:'center',align:'left',hidden:true,width:10},
						{field:'fcolonyhouse',title:'圈舍',halign:'center',align:'left',width:120},
						{field:'fcolonyhousetype',title:'圈舍分类',halign:'center',align:'left',width:120}
					]],
			onLoadSuccess:function(){  
				$('#'+controlName).combogrid('grid').datagrid('selectAll'); 
		    }		
		});  
	}
}

//根据核算单位选择圈舍
function SetColonyHouseByOrgList(controlName,defaultPar,defaultValue){
	$.ajax({
        type: "POST",
        url:"../supply/WVPigBrief/GetColonyHouseByOrg?FOrgID="+defaultPar,
        async:false,
        success: function (data) {
        	var defaultValueFlag = false;
        	var test= JSON.parse(data);  
        	$.each(test, function(index, obj){ 
        		if(defaultValue == obj.id){
        			defaultValueFlag = true;
        		}
        	}); 
            $('#'+controlName).combobox({    
				    data:test,
				    valueField:'id',
				    textField:'name', 
				    onLoadSuccess:function(){
		    			if(test.length>0){
		    				if(defaultValue!=0 && defaultValue!="" && defaultValueFlag){ 
		    					$('#'+controlName).combobox("setValue",defaultValue);
		    				}else{
		    					$('#'+controlName).combobox("setValue",test[0].id);
		    				}
		    			}
				    }
			});  
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

/**
 * 设置圈舍下拉列表值
 * @param controlName
 * @param defaultPar
 * @param defaultValue
 */
function SetComboxDrowDownList(controlName,defaultPar,defaultValue){ 
	$.ajax({
        type: "POST",
        url:"../base/ColonyHouse/GetCboColonyHouseDropDownListByOrgID?FOrgID="+defaultPar,
        async:false,
        success: function (data) {
        	var defaultValueFlag = false;
        	var test= JSON.parse(data);
        	for ( var p in test ){ 
        		if(defaultValue == p.id){
        			defaultValueFlag = true;
        		}
        	}
            $('#'+controlName).combobox({    
			    data:test,    
			    valueField:'id',    
			    textField:'name', 
			    onLoadSuccess:function(){
	    			if(test.length>0){
	    				if(defaultValue!=0 && defaultValue!="" && defaultValueFlag){ 
	    					$('#'+controlName).combobox("setValue",defaultValue);
	    				}else{
	    					$('#'+controlName).combobox("setValue",test[0].id);
	    				}
	    			}
			    }
			});  
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	});
}
/**
 * 设置圈舍下拉列表值返回JSON对象
 * @param defaultPar
 */
function SetComboxDrowDownJSONList(defaultPar){ 
	var test="";
	$.ajax({
		type: "POST",
		url:"../base/ColonyHouse/GetCboColonyHouseDropDownListByAccountOrgID?FOrgID="+defaultPar,
		async:false,
		success: function (data) {
			var defaultValueFlag = false;
			test= JSON.parse(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
		}
	});
	return test;
}

function getComboxItemData(controlName){
	var result="";
	var url;
	//品种
	if(controlName=="cboCultivar"){
		url="../base/Cultivar/getcboCultivarList";
	}
	//发情类型
	if(controlName=="cboRutType"){
		url="../base/RutType/GetCboRutTypeList";
	}
	//淘汰原因
	if(controlName=="cboSelectionCause"){
		url="../base/SelectionCause/getcboSelectionCauseList";
	}
	//死亡原因
	if(controlName=="cboDieCause"){
		url="../base/DieCause/getcboDieCauseList";
	}
	//妊检结果
	if(controlName=="cboPregnancyTestResult"){
		url="../base/PregnancyTestResult/GetCboPregnancyTestResultList"; 
	}
	//流产原因
	if(controlName=="cboabortioncause"){
		url="../base/AbortionCause/getcboAbortionCauseList"; 
	}
	//种猪状态
	if(controlName=="cboBoarStatus"){
		url="../base/BoarStatus/getcboBoarStatusList";
	}
	//饲养阶段
	if(controlName=="cboFreeingStage"){
		url="../base/FreeingStage/getcboFreeingStageList";
	}
	//猪只类群
	if(controlName=="cboMonoid"){
		url="../base/Monoid/getcboMonoidList";
	}
		$.ajax({
        type: "POST",
        url:url,
        async:false,
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}

/**
 * @param controlName        空间名称
 * @param hasEmptyOptioin    是否是空选项
 * @param hasDefaultValue    是否有默认值
 * @param defaultValue       默认值
 * @param ismultipleSelect   是否复选
 * @param conditionValue     过滤下拉框的参数
 */
function SetComboxTreeItem(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue,ismultipleSelect,conditionValue){
	var url;  
	//猪只类群
	if(controlName=="cboMonoid" || controlName=="cboSowMonoid" || controlName=="comboxMultipleSowMonoid" 
		|| controlName=="cboChickenMonoid"){
		url="../base/Monoid/getcboMonoidList";
	}   
	//品种
	if(controlName=="cboMonoid" || controlName=="cboSowMonoid" || controlName=="comboxMultipleSowMonoid" 
		|| controlName=="cboChickenCultivar"){
		url="../base/Cultivar/getcboCultivarList";
	}  	
	//饲养阶段
	if(controlName=="cboFreeingStage" || controlName=="cboSowFreeingStage"){
		url="../base/FreeingStage/getcboFreeingStageList";
	} 
	//种猪状态
	if(controlName=="cboBoarStatus" || controlName=="cboSowBoarStatus" || controlName=="comboxMultipleSowBoarStatus"){
		url="../base/BoarStatus/getcboBoarStatusList";
	}
	//猪只状态
	if(controlName=="cboPigStatus" || controlName=="cboSowPigStatus"){
		url="../base/PigStatus/GetcboPigStatusList";
	} 
	//圈舍
	if(controlName=="cboColonyHouse" || controlName=="cboSowColonyHouse"){
		url="../base/ColonyHouse/GetColonyHouse";
	}
	//物料分类
	if(controlName=="cboMeterielType" || controlName=="cboMeterielType"){
		url="../base/MaterielType/GetcboMaterielTypeList";
	}
	//物料采购分类
	if(controlName=="cboMeterielPurcType" || controlName=="cboMeterielPurcType"){
		url="../base/MaterielPurchaseCategory/GetcboMaterielPurchaseTypeList";
	}
	//defaultValue = JSON.parse("["+defaultValue+"]");
	$.ajax({
        type: "POST",
        url: url,
        async:false,
        data:{"IDs":conditionValue},
        success: function (data) { 
        	var test= JSON.parse(data);
        	var columns=new Array();
        	var allselect = "";
        	for ( var p in test ){ 
        		var result =new Object();
        		result.id=test[p].id;
            	result.text=test[p].name;
            	allselect += test[p].id + ",";
            	columns.push(result);
        	} 
        	if(hasEmptyOptioin){
        		if(ismultipleSelect){
        			var result =new Object();
        			result.id="-11";
        			result.text="全部";
        			allselect += "-11,";
        			result.children = columns; 
        			columns=new Array();
        			columns.push(result);
        		}else{
        			columns.unshift({ "id": "" ,"name":"全部"}); 
        		} 
        	} 
        	allselect = allselect.substring(0, allselect.length-1);
            $('#'+controlName).combotree({    
            		data:columns,  
				    multiple:ismultipleSelect,
				    onLoadSuccess:function(){ 
				    	if(hasDefaultValue && defaultValue!=0 && defaultValue!=""){
				    		setTimeout(function () {
				    			if(ismultipleSelect){ 
				    				var defaultData=defaultValue.split(','); 
				    				$('#'+controlName).combotree('setValues',defaultData);
				    			}else{ 
				    				$('#'+controlName).combotree('setValue',defaultValue);
				    			}
				    		}, 300);
				    	}else{  
			    			if(columns.length>0){ 
			    				setTimeout(function () {  
			    					var allselectData=allselect.split(',');
			    					$('#'+controlName).combotree("setValues",allselectData);
			    				}, 300);
			    			} 
				    	}
				    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

//取得数据源中的Name 主要应用于dataGridformat用
function GetName(dataSource,id)
{
		var retName='';
		$.each(dataSource,function(i, value){
			if(value.id==id)
			{
				retName=value.name;
				return false;
			}
		});
		
		return retName;
}

//取得数据源中的行数据
function GetRowData(dataSource,id)
{
		var retName;
		$.each(dataSource,function(i, value){
			if(value.id==id)
			{
				retName=value;
				return false;
			}
		});
		
		return retName;
}


//取得数据源中的Name 主要应用于dataGridformat用 取得计量单位名称
function GetName2(dataSource,funitid)
{
	var retName='';
	$.each(dataSource,function(i, value){
		if(value.funitid==funitid)
		{
			retName=value.funitname;
			return false;
		}
	});
	return retName;
}

//通过物料ID取得物料的计量单位列表
function GetUnitName(fmaterielid){
	var result="";
	$.ajax({
        type: "POST",
        url:"../base/Materiel/getUnitList",
        async:false,
        data:{"fmaterielid":fmaterielid},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}


//根据物料ID取得生产计量单位
function GetProcUnitId(fmaterielid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../base/Materiel/getProcUntiList",
		async:false,
		data:{"fmaterielid":fmaterielid},
		success: function (data) {
			result = JSON.parse(data)[0].FUnitID;
		}
	});
	return result;
}

//根据物料ID取得销售计量单位
function GetSaleUnitId(fmaterielid,str){
	var result="";
	$.ajax({
		type: "POST",
		url:"../base/Materiel/getSaleUntiList",
		async:false,
		data:{"fmaterielid":fmaterielid},
		success: function (data) {
			if(str=="id")
				{
			result = JSON.parse(data)[0].FUnitID;
				}
			if(str=="name")
			{
			result = JSON.parse(data)[0].FUnitName;
			}
			if(str=="model")
			{
			result = JSON.parse(data)[0].FModel;
			}
		}
	});
	return result;
}

//根据物料ID取得采购计量单位
function GetPurchaseUnitId(fmaterielid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../base/Materiel/getPurchaseUntiList",
		async:false,
		data:{"fmaterielid":fmaterielid},
		success: function (data) {
			result = JSON.parse(data)[0].FUnitID;
		}
	});
	return result;
}

//根据物料ID取得库存计量单位
function GetStockUnitId(fmaterielid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../base/Materiel/getStockUntiList",
		async:false,
		data:{"fmaterielid":fmaterielid},
		success: function (data) {
			result = JSON.parse(data)[0].FUnitID;
		}
	});
	return result;
}


//根据  猪只类群ID  种猪状态ID  性别ID 品种ID 取得猪只物料
function GetMaterielForPig(fMonoidID,fBoarStatusID,fSexID,fCultivarID){
	var result={};
	$.ajax({
		type: "POST",
		url:"../base/MaterielForPig/getMaterielForPig",
		async:false,
		data:{"fmonoidid":fMonoidID,"fboarstatusid":fBoarStatusID,"fsexid":fSexID,"fcultivarid":fCultivarID},
		success: function (data) {
			result = JSON.parse(data)[0];
		}
	});
	return result;
}

//@FCompanyID BIGINT 
//@FAccountUnitID BIGINT ,
//@FProviderID BIGINT、
//@FMaterielID BIGINT
//@FDate DATETIME
//根据相关信息取得 P_Supply_GetMaterielPrice 物料价格
//function GetMaterielPrice(fcompanyid,fproviderid,fmaterielid,fdate){
function GetMaterielPrice(fcompanyid,faccountunitid,fproviderid,fmaterielid,fdate){
	var result={};
	$.ajax({
		type: "POST",
		url:"../supply/MaterielPrice/GetMaterielPrice",
		async:false,
		data:{"fcompanyid":fcompanyid,"faccountunitid":faccountunitid,"fproviderid":fproviderid,"fmaterielid":fmaterielid,"fdate":fdate},
		success: function (data) {
			result = JSON.parse(data)[0];
		}
	});
	if(result==undefined){
		result=new Object();
		result.fprice=0;
		result.fpricetax=0;
		result.ftaxratecomputemodeid=1;
		result.ftaxrateid=1;
		result.ftaxrate=0;
	}
	return result;
}


/*@FCompanyID BIGINT ,
@FProviderID BIGINT ,
@FCarrierID  BIGINT ,
@FAccountUnitID BIGINT ,
@fpackingid  int 包装方式
funitid  单位ID
FReceiveOrgID  接受单位ID
@FDate DATETIME*/
//根据相关信息取得 P_Supply_GetFreightPrice 取得运价信息
function GetFreightPrice(fcompanyid,fproviderid,fcarrierid,faccountunitid,freceiveorgid,fpackingid,funitid,fdate){
	var result;
	$.ajax({
		type: "POST",
		url:"../supply/FreightPrice/GetFreightPrice",
		async:false,
		data:{"fcompanyid":fcompanyid,"fproviderid":fproviderid,"fcarrierid":fcarrierid,"faccountunitid":faccountunitid,"freceiveorgid":freceiveorgid,"fpackingid":fpackingid,"funitid":funitid,"fdate":fdate},
		success: function (data) {
			result = JSON.parse(data)[0];
		}
	});
	return result;
}





//根据某年的周次信息获得该周的开始日期和结束日期  参数：2015-17
function GetWeeKDateYearPeriod(companyid,yearperiod){ 
	var result="";
	$.ajax({
		type: "POST",
		url:"../sys/AccountDate/GetAccountDate",
		async:false,
		data:{"fyearperiod":yearperiod,"fcompanyid":fcompanyid},
		success: function (data) {
			var temp = JSON.parse(data)[0];
			result = temp.fstartdate+";"+temp.fedndate;
		}
	});
	return result;
}

/**
 * 根据公司ID和当前日期取得年月
 * @param fcompanyid 公司ID
 * @param fbilldate  单据日期
 * @returns {String} 
 */
function GetCurrentYearPeriod(fcompanyid,fbilldate){
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getCurrentYearPeriod",
		async:false,
		data:{"fbilldate":fbilldate,"fcompanyid":fcompanyid},
		success: function (data) {
			if(data!=null && data!=""){
				result =data;
			}else{
				$.messager.alert("系统提示", "当前日期的年月没有设定", "error");
			}
		}
	});
	return result;
}

/**
 * 根据当前日期取得年月
 * @param fbilldate  单据日期
 * @returns {String} 
 */
function GetCurrentYearPeriodByDate(fbilldate){
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/getCurrentYearPeriodByDate",
		async:false,
		data:{"fbilldate":fbilldate},
		success: function (data) {
			if(data!=null && data!=""){
				result =data;
			}else{
				$.messager.alert("系统提示", "当前日期的年月没有设定", "error");
			}
		}
	});
	return result;
}


//根据 公司ID fCompanyID  物料ID FMaterielID 年月 FYearPeriod  重量  Weight 取得当前销售策略
function GetSalePricePolicyByMateriel(fCompanyID,FMaterielID,FYearPeriod,fWeight){
	var result={};
	$.ajax({
		type: "POST",
		url:"../sale/PricePolicy/GetSalePricePolicyByMateriel",
		async:false,
		data:{"fcompanyid":fCompanyID,"fmaterielid":FMaterielID,"fyearperiod":FYearPeriod,"fweight":fWeight},
		success: function (data) {
			result = JSON.parse(data)[0];
		}
	});
	if(result==null){
		result=new Object();
		//销售方式
 	 	result.fsalemodeid=1;
	 	//标准体重
 	 	result.fstandardweight=0;
		//起始比较符ID
 	 	result.fbeginoperatorid=9;
		//起始体重
 	 	result.fbeginweight=0;
		//截至比较符ID
 	 	result.fendoperatorid=10;
		//截至体重
 	 	result.fendweight=0;
		//单价
 	 	result.finnerprice=0;
	 	//加价
 	 	result.finneraddprice=0;
	 	//单价
 	 	result.fouterprice=0;
	 	//加价
 	 	result.fouteraddprice=0;
	}
	
	return result;
}

 
/**
 * 根据当前年查询年的下拉框
 * @param controlName        控件名称
 * @param defaultValue    	 默认值
 * @param conditionValue     过滤条件公司ID 
 * @param callbackFuc     	 回调函数
 */
function SetComboxYearSelect(controlName,defaultValue,conditionValue,callbackFuc){
	$.ajax({
        type: "POST",
        data: {"companyid":conditionValue},
        url: "../base/WeekSchedule/GetAllYearList", 
        success: function (data) {
        	var test= JSON.parse(data);
        	var allselect = "";
        	var columns=new Array(); 
        	for ( var p in test ){ 
        		var result =new Object();
        		result.id=test[p].fyear;
            	result.text=test[p].fyear;
            	allselect += test[p].fyear + ","; 
            	columns.push(result);
        	}  
            $('#'+controlName).combotree({    
        		data:columns,   
			    onLoadSuccess:function(){ 
			    	if(defaultValue!="" && defaultValue != null){
			    		setTimeout(function(){ 
			    			$('#'+controlName).combotree('setValue',defaultValue);
	    					if(callbackFuc!=null){
	    						callbackFuc();
	    					}
			    		}, 300);
			    	}else{  
		    			if(columns.length>0){
		    				setTimeout(function () {  
		    					var allselectData=allselect.split(',');
		    					$('#'+controlName).combotree("setValue",allselectData[0]);
		    					if(callbackFuc!=null){
		    						callbackFuc();
		    					}
		    				}, 300);
		    			} 
			    	}
			    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

//通过仓库ID获得所有的圈舍信息
function GetColonyHouseNameByDepotID(fdepotid){
	var result="";
	$.ajax({
        type: "POST",
        url:"../base/ColonyHouse/GetColonyHouseNameByDepotID",
        async:false,
        data:{"fdepotid":fdepotid},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}

//通过圈舍ID和出库日期获取批次
function GetBatchInfoByColonyHouse(fcolonyhouseid,fdate){
	var result="";
	$.ajax({
        type: "POST",
        url:"../proc/ChickenHistoryInfo/GetBatchInfoByColonyHouse",
        async:false,
        data:{"fcolonyhouseid":fcolonyhouseid,"fdate":fdate},
        success: function (data) {
        	result = JSON.parse(data);
        	if(result.length==0){
        		result.unshift({ "id": "-1" ,"name":"　　"});
        	}
        }
	});
	return result;
}

/**
 * 根据用户获取用户管理组织和用户查询部门
 * @param controlName  控件名称
 * @param ismultipleSelect 是否可以复选
 * @param fparentid  上级组织ID
 * @param hasEmptyOptioin  是否有空选项
 * @param hasDefaultValue  是否有默认值
 * @param defaultValue 默认值
 * @param callbackFuc 回调函数
 */
function SetComboxUserManageForDept(controlName,ismultipleSelect,fparentid,hasEmptyOptioin,hasDefaultValue,defaultValue,callbackFuc){
	var url = "../util/UserManage/GetUserManageDeptment"; 
	$.ajax({
        type: "POST",
        url:url,
        async:false,
        data:{"fparentid":fparentid},
        success: function (data) { 
        	var test= JSON.parse(data);
        	var columns=new Array();
        	var allselect = "";
        	for ( var p in test ){ 
        		var result =new Object();
        		result.id=test[p].forganizationid;
            	result.text=test[p].forganizationshortname;
            	allselect += test[p].forganizationid + ",";
            	columns.push(result);
        	} 
        	if(hasEmptyOptioin){
        		if(ismultipleSelect){
        			var result =new Object();
        			result.id="-11";
        			result.text="全部";
        			allselect += "-11,";
        			result.children = columns; 
        			columns=new Array();
        			columns.push(result);
        		}else{
        			columns.unshift({ "id": "" ,"name":"全部"}); 
        		} 
        	} 
        	allselect = allselect.substring(0, allselect.length-1); 
        	$('#'+controlName).combotree({    
        		data:columns,  
			    multiple:ismultipleSelect,
			    onLoadSuccess:function(){ 
			    	if(hasDefaultValue && defaultValue!=0 && defaultValue!=""){
			    		setTimeout(function () {
			    			if(ismultipleSelect){ 
			    				var defaultData=defaultValue.split(','); 
			    				$('#'+controlName).combotree('setValues',defaultData);
			    			}else{ 
			    				$('#'+controlName).combotree('setValue',defaultValue);
			    			}
	    					if(callbackFuc!=null){
	    						callbackFuc();
	    					}
			    		}, 300);
			    	}else{  
		    			if(columns.length>0){ 
		    				setTimeout(function () {  
		    					var allselectData=allselect.split(',');
		    					$('#'+controlName).combotree("setValues",allselectData);
		    					if(callbackFuc!=null){
		    						callbackFuc();
		    					}
		    				}, 300);
		    			} 
			    	} 
			    }
        	});  
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        	$.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
        }
	});
}
//通过供应商ID获得对应的客户信息
function GetCustomerInfto(fsupplyid){
	var CustomerInfto="";
	$.ajax({
        type: "POST",
        url:"../util/common/GetCustomerInfto",
        async:false,
        data:{"fproviderid":fsupplyid},
        success: function (data) { 
        	var result = JSON.parse(data);   
        	if(result != null){
        		CustomerInfto = result[0];
        	} 
        }
	});
    return CustomerInfto;
}
//通过客户ID获得对应的供应商信息
function GetSupplyInfto(fcustomerid){
	var SupplyInfto="";
	$.ajax({
        type: "POST",
        url:"../util/common/GetSupplyInfto",
        async:false,
        data:{"fcustomerid":fcustomerid},
        success: function (data) { 
        	var result = JSON.parse(data);   
        	if(result != null){
        		SupplyInfto = result[0];
        	} 
        }
	});
	return SupplyInfto;
}

//判断数据库是否存在当前输入的表
function CheckExistTable(tablename){
	var IsExist=false;
	$.ajax({
        type: "POST",
        url:"../util/common/CheckExistTable",
        async:false,
        data:{"tablename":tablename},
        success: function (data) { 
        	var result = JSON.parse(data);  
        	
        	if(result != null && result !=""){
        		IsExist = true;
        	} 
        }
	});
	
	return IsExist;
}

/**
 * 
 * @param controlName 控件名称
 * @param tableName 表名
 * @param key 表字段
 * @param name 显示名称
 * @returns {String} 
 */
function getMaterielByMaterielType(fmaterieltypeid){ 
	var result="";
	$.ajax({
        type: "POST",
        url:"../base/Materiel/GetMaterielByMaterielType",
        async:false,
        data:{"fmaterieltypeid":fmaterieltypeid},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}


/**
 * 周采购计划
 * @param FBillTypeID 单据类别
 * @param FWeekID 周次
 * @param FAccountUnitID 核算单位
 * @param FCurrentId 当前ID
 * @returns {Boolean}  
 */
function IsExistWeekSupplyPurchasePlan(FBillTypeID,FWeekID,FAccountUnitID,FCurrentId){ 
	var result=false;
	$.ajax({
        type: "POST",
        url:"../supply/PurchasePlan/IsExistWeekSupplyPurchasePlan",
        async:false,
        data:{"FBillTypeID":FBillTypeID,"FWeekID":FWeekID,"FAccountUnitID":FAccountUnitID,"FCurrentId":FCurrentId},
        success: function (data) {
        	if(Number(data)>0){
        		result=true;
        	}
        }
	});
	return result;
}

/**
 * 月采购计划
 * @param FBillTypeID 单据类别
 * @param FYearPeriod 年月 
 * @param FAccountUnitID核算单位
 * @param FCurrentId 当前ID
 * @returns {String}
 */
function IsExistMonthSupplyPurchasePlan(FBillTypeID,FYearPeriod,FAccountUnitID,FCurrentId){ 
	var result=false;
	$.ajax({
        type: "POST",
        url:"../supply/PurchasePlan/IsExistMonthSupplyPurchasePlan",
        async:false,
        data:{"FBillTypeID":FBillTypeID,"FYearPeriod":FYearPeriod,"FAccountUnitID":FAccountUnitID,"FCurrentId":FCurrentId},
        success: function (data) {
        	if(Number(data)>0){
        		result=true;
        	}
        }
	});
	return result;
}

/**
 *获取物料价格区域 
 * @param fmaterielid 物料ID
 * @returns
 */
function GetMaterielPriceProvider(fmaterielid,fcompanyid,faccountunitid){ 
	var object;
	$.ajax({
        type: "POST",
        url:"../supply/MaterielPrice/GetMaterielPriceProvider",
        async:false,
        data:{"fmaterielid":fmaterielid,"fcompanyid":fcompanyid,"faccountunitid":faccountunitid},
        success: function (data) {
        	object= JSON.parse(data);
        }
	});
	return object;
}

/**
 *获取订单收货地址
 * @param faccountunitid 核算单位ID
 * @returns
 */
function GetDeliveryInfobyAccountUnit(faccountunitid){ 
	var object;
	$.ajax({
        type: "POST",
        url:"../common/DeliveryInfo/GetCommonDeliveryInfo",
        async:false,
        data:{"faccountunitid":faccountunitid},
        success: function (data) {
        	object= JSON.parse(data)[0];
        }
	});
	return object;
}

/**
 *获取订单发票
 * @param forganizationid 核算单位ID
 * @returns
 */
function GetCommonOrganizationFinanceInfo(forganizationid){ 
	var object;
	$.ajax({
		type: "POST",
		url:"../common/OrganizationFinance/GetCommonOrganizationFinanceInfo",
		async:false,
		data:{"forganizationid":forganizationid},
		success: function (data) {
			object= JSON.parse(data)[0];
		}
	});
	return object;
}

/**
 * 根据核算单位获取部门
 * @param controlName 控件名称
 * @param faccountid  核算单位ID
 * @param iscludeFaccount 是否包含自己的核算单位 0：不包含，1：包含
 * @param hasEmptyOptioin 是否有空值
 * @param hasDefaultValue 是否有默认值
 * @param defaultValue   默认值
 */
function GetOrgChildForCombox(controlName,faccountid,iscludeFaccount,hasEmptyOptioin,hasDefaultValue,defaultValue){
	url="../util/common/GetSysOrgChildForCombox";
	$.ajax({
	    type: "POST",
	    url:url,
	    async:false,
	    data:{"faccountid":faccountid,"iscludeFaccount":iscludeFaccount},
	    success: function (data1) {
	    	var test= JSON.parse(data1);
	    	if(hasEmptyOptioin){
	    		test.unshift({ "id": "" ,"name":"全部"});
	    	}
	        $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				$('#'+controlName).combobox("setValue",test[0].id);
				    			}
				        	}
				    	}
				    }
			}); 
	   },
	   error: function(XMLHttpRequest, textStatus, errorThrown) {
	       $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
	   }
	 });
}

/**
 * 根据核算单位获取部门
 * @param faccountid
 * @param iscludeFaccount 1:包含核算单位，0：不包含核算单位（只有部门）
 * @returns {String}
 */
function GetOrgChildGridForCombox(faccountid,iscludeFaccount){
	var result="";
	$.ajax({
        type: "POST",
        url:"../util/common/GetSysOrgChildForCombox",
        async:false,
        data:{"faccountid":faccountid,"iscludeFaccount":iscludeFaccount},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}

/**
 * 获取批次号
 * @param FCompanyID 公司ID
 * @param FAccountUnitID 核算单位ID
 * @param FDeptID  部门ID
 * @param FColonyHouseID 圈舍ID
 * @param FMonoidID   猪只类群ID
 * @param FFreeingStageID  猪只状态
 * @param FBeginDate 开始时间
 * @param FMender 修改人
 * @returns
 */
function GetCurrentBatchInfoForFarrow(FCompanyID,FAccountUnitID,FDeptID,FColonyHouseID,FMonoidID,FFreeingStageID,FBeginDate,FMender){
	var resultValue;
	var parameter={"FCompanyID":FCompanyID,
    		"FAccountUnitID":FAccountUnitID,
    		"FDeptID":FDeptID,
    		"FColonyHouseID":FColonyHouseID,
    		"FMonoidID":FMonoidID,
    		"FFreeingStageID":FFreeingStageID,
    		"FBeginDate":FBeginDate,
    		"FMender":FMender};
	$.ajax({
        type: "POST",
        url:"../util/common/GetCurrentBatchInfoForFarrow",
        async:false,
        data:parameter,
        success: function (result) {
        	resultValue = JSON.parse(result);
        }
	});
	return resultValue;
}

/**
 * 获取所有组织
 */
function GetAllOrg(){
	var resultValue;
	$.ajax({
        type: "POST",
        url:"../util/common/GetAllOrg",
        async:false,
        success: function (result) {
        	resultValue = JSON.parse(result);
        }
	});
	return resultValue;
}

/**
 * 根据日期和圈舍查询猪只类群集合
 * @param fbegindate				开始日期
 * @param fenddate					结束日期
 * @param fcolonyhouse  			圈舍
 * @returns {String}
 */
function GetMonoidByColonyHouse(fbegindate,fenddate,fcolonyhouse){
	var result="";
	$.ajax({
        type: "POST",
        url:"../util/common/GetMonoidByColonyHouse",
        async:false,
        data:{"fbegindate":fbegindate,"fenddate":fenddate,"fcolonyhouse":fcolonyhouse},
        success: function (data) {
        	result = JSON.parse(data);
        }
	});
	return result;
}
/**
 * 根据当前日期和圈舍查询猪只类群集合
 * @param fcolonyhouse  			圈舍
 * @returns {String}
 */
function GetMonoidByColonyHouseCurrentDate(fcolonyhouse){
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/GetMonoidByColonyHouseCurrentDate",
		async:false,
		data:{"fcolonyhouse":fcolonyhouse},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}

/**
 * 
 * @param controlName  控件名称
 * @param forgtypeids  组织类型
 * //http://www.cnblogs.com/scy251147/p/3904870.html				    			
 */
function SetAllComboxUserManage(controlName,forgtypeids){
	$.ajax({
        type: "POST",
        url: "../util/UserManage/GetUserManageOrgList",
        async:false,
        data:{"Forgtypeids":forgtypeids},
        success: function (data) {
        	var accounttest= JSON.parse(data); 
        	var accountcolumns=new Array();
        	var allselectaccount='';
        	for(var p in accounttest){ 
        		var result =new Object();
        		result.id=accounttest[p].forganizationid;
            	result.text=accounttest[p].forganizationshortname;
            	accountcolumns.push(result);
            	allselectaccount += accounttest[p].forganizationid + ",";
        	} 
        	var result =new Object();
    		result.id="-11";
    		result.text="全部";
    		allselectaccount += "-11,";
    		result.children = accountcolumns; 
    		accountcolumns=new Array();
    		accountcolumns.push(result);
    		allselectaccount = allselectaccount.substring(0, allselectaccount.length-1);
    		$('#'+controlName).combotree({    
    			data:accountcolumns,    
    			multiple:true,
    			onLoadSuccess:function(){
    				var allselectaccountData=allselectaccount.split(',');
    				$('#'+controlName).combotree('setValues',allselectaccountData);
    			}
    		});
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

/**
 *@param ftypeid 
 * @returns {String}
 */
function GetSupplyProviderByType(ftypeid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../base/SupplyProvider/GetSupplyProviderTypeInfo",
		async:false,
		data:{"ftypeid":ftypeid},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}

/**
 * 根据核算单位选择圈舍
 * @param	controlName 	控件名称
 * @param	defaultPar 	 	核算单位ID
 * @param 	hasEmptyOptioin 是否有空选项
 * @param 	defaultValue 	默认值
 * @param   callbackFuc		回调函数
 */
function SetColonyHouseComboxItemByAccountID(controlName,defaultPar,hasEmptyOptioin,defaultValue,callbackFuc){
	$.ajax({
        type : "POST",
        url : "../base/ColonyHouse/GetColonyHouseListByAccountID?forgid="+defaultPar,
        async:false,
        success: function (data) {
        	var test= JSON.parse(data);
        	var defaultValueFlag = false;
        	var columns=new Array(); 
    		var result =new Object();
        	if(hasEmptyOptioin){			//添加空选项
        		result.id="-1";
            	result.name="　";
            	columns.push(result); 
        	}     
        	for(var p in test){ 
        		if(test[p].fcolonyhouse != ''){ 		//去掉名字为空的数据
	        		var result =new Object(); 
	        		result.id=test[p].fcolonyhouseid;
	            	result.name=test[p].fcolonyhouse;
	            	columns.push(result); 
	            	if(defaultValue == test[p].fcolonyhouseid){
	            		defaultValueFlag = true;
	            	}
        		}
        	}  
            $('#'+controlName).combobox({    
			    data:columns,
			    valueField:'id',
			    textField:'name', 
			    onLoadSuccess:function(){
	    			if(columns.length>0){ 
	    				if(defaultValue!=0 && defaultValue!="" && defaultValueFlag){ 
	    					$('#'+controlName).combobox("setValue",defaultValue);
	    				}else{
	    					$('#'+controlName).combobox("setValue",columns[0].id);
	    				}
	    			}
			    }
			});  
        },
       	error: function(XMLHttpRequest, textStatus, errorThrown) {
       		$.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
   		}
	});
}
/**
 * 获取下拉类表数据
 * @param controlName 控件名称
 * @param hasEmptyOptioin 是否有空选项
 * @param hasDefaultValue 是否有默认值
 * @param defaultValue 默认值
 * @param editable 是否可以编辑
 * @param tableName 表名称
 * @param key 表字段
 * @param name 显示名称
 */
function SetComboxDataHaveMethod(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue,editable,tableName,key,name,sqlCondition,callbackFuc){
	$.ajax({
        type: "POST",
        url:"../util/common/getcbodataList",
        async:false,
        data:{"tableName":tableName,"key":key,"name":name,"sqlCondition":sqlCondition},
        success: function (data) {
        	var test= JSON.parse(data);
        	if(hasEmptyOptioin){
        		test.unshift({ "id": "-1" ,"name":"　　"});
        	}
            $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    editable:editable ,
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				$('#'+controlName).combobox("setValue",test[0].id);
				    			}
				        	}
				    	}
				    	if(callbackFuc!=null){
    						callbackFuc();
    					}
				    }
			});  
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

//按照类群或者品种获取鸡群物料
function GetMaterielForChicken(controlName,hasEmptyOptioin,hasDefaultValue,defaultValue,parameter){
	$.ajax({
        type: "POST",
        url:"../base/MaterielForChicken/getMaterielForChicken",
        async:false,
        data:parameter,
        success: function (data1) {
        	var test= JSON.parse(data1);
        	if(hasEmptyOptioin){
        		test.unshift({ "id": "" ,"name":"全部"});
        	}
            $('#'+controlName).combobox({    
				    data:test,    
				    valueField:'id',    
				    textField:'name', 
				    onLoadSuccess:function(){
				    	if(hasDefaultValue && defaultValue!=0){
				    		$('#'+controlName).combobox("setValue",defaultValue);
				    	}
				    	else 
				    	{
				    		if(!hasEmptyOptioin){
				    			if(test.length>0){
				    				$('#'+controlName).combobox("setValue",test[0].id);
				    			}
				        	}
				    	}
				    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

//按照类群或者品种获取鸡群物料
function GetMaterielForChickenSingleData(controlHiddenId,controlName,parameter){
	$.ajax({
        type: "POST",
        url:"../base/MaterielForChicken/getMaterielForChicken",
        async:false,
        data:parameter,
        success: function (data1) {
        	var test= JSON.parse(data1);
        	if(test.length>0){
        		$("#"+controlHiddenId).val(test[0].id);
        		$("#"+controlName).val(test[0].name);
        	}else{
        		$("#"+controlHiddenId).val("");
        		$("#"+controlName).val("");
        		$.messager.alert('系统提示', "所选择的品种和类群没有对应物料", 'error');
        	}
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}
//根据类群和品种查询鸡群物料信息
function GetMaterielForChickenData(fmonoid,fcultivar){
	var result="";
	$.ajax({
		type: "POST",
		url: "../base/MaterielForChicken/getMaterielForChicken",
		async:false,
		data:{"fmonoidid":fmonoid,"fcultivarid":fcultivar},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}


/**
 * 多选下拉列表
 * @param controlName  控件名称
 * @param faccountunitid 核算单位ID
 * @param fdepottypeid   仓库类型ID
 * @param defaultValue 默认值
 * //http://www.cnblogs.com/scy251147/p/3904870.html				    			
 */
function SetFVDepot(controlName,faccountunitid,fdepottypeid,defaultValue,callbackFuc){
	var url = "../base/DepotVirtual/GetDepotVirtualListByCon";
	$.ajax({
        type: "POST",
        url: url,
        async:false,
        data:{"faccountunitid":faccountunitid,"fdepottypeid":fdepottypeid},
        success: function (data) {
        	var test= JSON.parse(data); 
        	var columns=new Array(); 
        	var flag = false;
        	for(var p in test){ 
        		var result =new Object();
        		if(test[p].fvdepotid==defaultValue){
        			flag = true;
        		}
        		result.id=test[p].fvdepotid;
            	result.text=test[p].fvdepotname;
            	columns.push(result); 
        	} 
            $('#'+controlName).combobox({    
        		data:columns, 
			    valueField:'id',    
			    textField:'text', 
			    multiple:false,
			    onLoadSuccess:function(){ 
		    		if(defaultValue!=null && defaultValue!='' && flag){ 
	    				setTimeout(function () { 
	    					$('#'+controlName).combobox('setValue',defaultValue);
	    					//回调函数
	    					if(callbackFuc!=null){
	    						callbackFuc();
	    					}
	    				}, 300);
		    		}else if(columns.length>0){ 
		    			setTimeout(function () {
    						$('#'+controlName).combobox('setValue',columns[0].id);
    						//回调函数
	    					if(callbackFuc!=null){
	    						callbackFuc();
	    					}
    					}, 300);
		    		} 
			    }
			}); 
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
}

/**通过采购分类获取对应的仓库信息
 *@param fpurchaseid 
 * @returns
 */
function GetDepotInfoByPurchase(fpurchaseid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../base/ColonyHouse/GetDepotInfoByPurchase",
		async:false,
		data:{"fpurchaseid":fpurchaseid},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}

/**通过指标分类ID查询标准指标分类信息
 *@param fcategoryid 
 * @returns
 */
function GetIndexCategoryInfoByFCategoryID(fcategoryid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../proc/IndexCategory/GetIndexCategoryInfo",
		async:false,
		data:{"fcategoryid":fcategoryid},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}

/**
 * 订单表供应商
 *@param ftypeid 
 * @returns {String}
 */
function GetSupplyProvider(fbilltypeid,tablename){
	var result="";
	$.ajax({
		type: "POST",
		url:"../util/common/selectFprovider",
		async:false,
		data:{"fbilltypeid":fbilltypeid,"tablename":tablename},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}
/**
 * 从采食量标准导入
 *@param ftypeid 
 * @returns {String}
 */
function GetFromFoodsStandardInfo(fcultivarid){
	var result="";
	$.ajax({
		type: "POST",
		url:"../proc/FoodsStandard/GetFoodsStandardList",
		async:false,
		data:{"fcultivarid":fcultivarid},
		success: function (data) {
			result = JSON.parse(data);
		}
	});
	return result;
}