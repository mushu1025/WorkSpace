//画面是否返回
var _dialogOk=false;
// 关闭画面
function CloseWin(vid) { 
	//画面关闭
	$("#" + vid).dialog('destroy'); // 销毁dialog对象
}

// 关闭画面
function CloseWinDialog(){
	//画面关闭
	$("#" + dialogName).dialog('destroy'); // 销毁dialog对象
}


/**
 * 显示圈舍信息
 * @param dataPar 获取
 * @param fOrganizationID 组织ID
 * @param singleSelect 是否单选
 * @param SelectData   选中数据
 */
function ShowColonyHouse(dataPar,fOrganizationID,singleSelect,SelectData){
	singleSelectOption=singleSelect;
	var url;
	if(dataPar == "ColonyHouse"){  //根据部门选择职员 
		url = "../util/getColonyCommonHouseList?forganizationid="+fOrganizationID;
	}
	$("<div/>").dialog({
		id : "SelectColonyHouse",
		href : "../jsp/common/frmCommonColonyHouseSelect.jsp",
		title : "选择圈舍",
		height : 400,
		width : 650,
		modal : true,
		onLoad: function () {
			returnJsonData="";
			GetColonyHouse(singleSelect,url);
        },
		onClose : function() {
			CloseWin('SelectColonyHouse');
		},
		onDestroy: function() {
			SelectData(returnJsonData);
		},
		onMove:function(left,top){
			if($('#SelectColonyHouse').panel('options').top<0){
				$('#SelectColonyHouse').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 获取圈舍列表
 * @param fOrganizationID 组织ID 
 * @param singleSelect    是否单选
 * @param url			 请求URL
 */
function GetColonyHouse(singleSelect,url){
	$("#dg_colonyHouse").datagrid({       //初始化datagrid
        striped: true,
        rownumbers: true,
        pagination: false,
        pageSize: 10,
        method:'post',
        autoRowHeight: false,
        fit:true,
        fitColumns:true,
        collapsible:false,
        singleSelect:singleSelect,
        sortOrder: 'DESC',
        url:url,
        columns : [[{
			field : "ck",
			checkbox : true,
			width : 15
		}, {
			field : "fcolonyhouseid",
			width : 80,
			align : "center",
			hidden : true,
			sortable : true,
			title : "圈舍ID"
		}, {
			field : "fcolonyhousetypeid",
			width : 15,
			align : "center",
			hidden : true,
			sortable : true,
			title : "圈舍类型ID"
		}, {
			field : "fcolonyhousecode",
			width : 50,
			align : "center",
			sortable : true,
			hidden : true,
			title : "圈舍编码"
		}, {
			field : "fcolonyhouse",
			width : 50,
			align : "left",
			sortable : true,
			title : "圈舍"
		}, {
			field : "forgid",
			width : 80,
			align : "left",
			sortable : true,
			hidden : true,
			title : "组织ID"
		}, {
			field : "fstatus",
			width : 120,
			align : "left",
			sortable : true,
			hidden : true,
			title : "状态"
		}, {
			field : "fsysmark",
			width : 60,
			align : "center",
			sortable : true,
			hidden : true,
			title : "预定于"
		}, {
			field : "fmender",
			width : 60,
			align : "center",
			sortable : true,
			hidden : true,
			title : "修改人"
		},
		 {
			field : "fcolonyhousetype",
			width : 60,
			align : "center",
			sortable : true,
			hidden : true,
			title : "圈舍类型"
		},
		 {
			field : "forganizationshortname",
			width : 60,
			align : "center",
			sortable : true,
			hidden : true,
			title : "核算单位简称"
		}
	]]
    });
}

/**
 * 选择圈舍信息
 * @returns JSON
 */
function ChooseColonyHouse(){ 
	var selRows; 
	if(singleSelectOption){ 
		selRows= $('#dg_colonyHouse').datagrid("getSelected");
	}else{
		selRows= $('#dg_colonyHouse').datagrid("getChecked");
	}
	if(selRows.length==0){
		$.messager.alert("提示", "请选择需要添加的信息！", "warning");
		return false;
	}   
	//返回数据
	returnJsonData=JSON.stringify(selRows);
	// 关闭画面
	CloseWin('SelectColonyHouse');
}

/**
 * 显示职员信息
 * @param dataPar 获取
 * @param fOrganizationID
 * @param singleSelect
 * @param SelectData
 */
function ShowMaterielSelect(singleSelect,SelectData){
	//singleSelectOption=singleSelect;
	
	//系统操作项
	$("<div/>").dialog({
		id : "SelectMaterielSelect",
		href : "../jsp/common/frmCommonMaterielSelect.jsp",
		title : "物料选择",
		height : 550,
		width : 850,
		modal : true,
		maximizable:true,
		maximized:true,
		onLoad: function () {
			returnJsonData="";
			//GetSysEmployee();
        },
		onClose : function() {
			CloseWin('SelectMaterielSelect');
		},
		onDestroy: function() {
			//SelectData(returnJsonData);
		},
		onMove:function(left,top){
			if($('#SelectMaterielSelect').panel('options').top<0){
				$('#SelectMaterielSelect').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
		,onMaximize:function(){    
			if(isExitsFunction("SetResize"))
			{
				SetResize(); 
			}
		},
		onRestore:function(){    
			if(isExitsFunction("SetResize"))
			{
				SetResize(); 
			}
		},
		onResize:function(){   
			if(isExitsFunction("SetResize"))
			{
				SetResize(); 
			}
		}
	});
}

/**
 * 显示职员信息
 * @param dataPar 获取
 * @param fOrganizationID
 * @param singleSelect
 * @param SelectData
 */
function ShowSysEmployee(dataPar,fOrganizationID,singleSelect,SelectData){
	singleSelectOption=singleSelect;
	var url;
	if(dataPar == "deptEmployee"){  //根据部门选择职员 
		url = "../sys/Employee/getDataListForChild?forganizationid="+fOrganizationID;
	}
	if(dataPar == "colonyHouseEmployee"){  //根据圈舍选择职员
		url = "../sys/Employee/GetEmpListByColonyHouseId?fcolonyhouseid="+fOrganizationID;
	}
	//系统操作项
	$("<div/>").dialog({
		id : "SelectSysEmployee",
		href : "../jsp/common/frmCommonSelectSysEmployee.jsp",
		title : "选择职员",
		height : 400,
		width : 650,
		modal : true,
		onLoad: function () {
			returnJsonData="";
			GetSysEmployee(fOrganizationID,singleSelect,url);
        },
		onClose : function() {
			CloseWin('SelectSysEmployee');
		},
		onDestroy: function() {
			SelectData(returnJsonData);
		},
		onMove:function(left,top){
			if($('#SelectSysEmployee').panel('options').top<0){
				$('#SelectSysEmployee').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 获取职员列表
 * @param fOrganizationID 组织ID
 * @param singleSelect 是否多选
 */ 
function GetSysEmployee(fOrganizationID,singleSelect,url){
	$("#dg_sysEmployee").datagrid({       //初始化datagrid
        striped: true,
        rownumbers: true,
        pagination: false,
        pageSize: 10,
        method:'post',
        autoRowHeight: false,
        fit:true,
        fitColumns:true,
        collapsible:false,
        singleSelect:singleSelect,
        sortOrder: 'DESC',
        url:url,
        columns : [[{
			field : "ck",
			checkbox : true,
			width : 15
		}, {
			field : "femployeeid",
			width : 80,
			align : "center",
			hidden : true,
			sortable : true,
			title : "职员ID"
		}, {
			field : "fpositionid",
			width : 15,
			align : "center",
			hidden : true,
			sortable : true,
			title : "岗位编码"
		}, {
			field : "femployeenumber",
			width : 50,
			align : "center",
			sortable : true,
			title : "职员编码"
		}, {
			field : "femployeename",
			width : 50,
			align : "left",
			sortable : true,
			title : "职员姓名"
		}, {
			field : "femployeefullname",
			width : 80,
			align : "left",
			sortable : true,
			title : "职员姓名全称"
		}, {
			field : "fhomeaddress",
			width : 120,
			align : "left",
			sortable : true,
			title : "家庭住址"
		}, {
			field : "fhometel",
			width : 60,
			align : "center",
			sortable : true,
			title : "家庭电话"
		}, {
			field : "fofficetel",
			width : 60,
			align : "center",
			sortable : true,
			title : "办公室电话"
		},
	]]
    });
}

/**
 * 选择职员信息
 * @returns {Boolean}
 */
function SelectSysEmployee(){ 
	var selRows; 
	if(singleSelectOption){ 
		selRows= $('#dg_sysEmployee').datagrid("getSelected");
	}else{
		selRows= $('#dg_sysEmployee').datagrid("getChecked");
	}
	if(selRows.length==0){
		$.messager.alert("提示", "请选择需要添加的信息！", "warning");
		return false;
	}   
	//返回数据
	returnJsonData=JSON.stringify(selRows);
	// 关闭画面
	CloseWin('SelectSysEmployee');
}


/**
 * 选择系统操作项
 * @returns {Boolean}
 */
function ChooseSelectGrid(){
	var selRows;
	if(singleSelectOption){
		selRows= $('#dg_gridData').datagrid("getChecked");
	}else{
		selRows=$("#dg_gridData").datagrid("getSelected");
	}
	if(selRows.length==0){
		$.messager.alert("提示", "请选择需要添加的信息！", "warning");
		return false;
	}  
	//返回数据
	returnJsonData=JSON.stringify(selRows);
	// 关闭画面
	CloseWinDialog();
}
/**
 * 
 * @param optionName    标识，用以区分不同的选择Tree
 * @param singleSelect  是否是checkbox多选
 * @param dataPar       父页面列表data，用以子页面的选中情况
 * @param returnData    返回数据 
 */
function showChildGrid(optionName,singleSelect,dataPar,returnData){
	var accessURL;
	var titleName;
	singleSelectOption=singleSelect;
	dialogName = optionName;
	//系统操作项
	if(optionName=="AllOperationList"){
		accessURL="../sys/Operation/GetOperationData"; 
		titleName="应用项选择";
	} 
	//供应商类型信息
	if(optionName=="ProviderType"){
		accessURL="../base/ProviderType/GetAllProviderTypeList"; 
		titleName="供应商类型信息选择";
	}
	$("<div/>").dialog({
		id : optionName,
		href : "../jsp/common/frmCommonShowChildGrid.jsp",
		title : titleName,
		height : 400,
		width : 650,
		modal : true,
		onLoad: function () {
			returnJsonData="";
			if(optionName=="ProviderType"){
				GetGridProviderTypeData(accessURL,singleSelect,dataPar);
			}else{
				GetGridData(accessURL,singleSelect,dataPar);				
			}
        },
		onClose : function() {
			CloseWinDialog();
		},
		onDestroy: function() {
			returnData(returnJsonData);
		},
		onMove:function(left,top){
			if($('#'+optionName).panel('options').top<0){
				$('#'+optionName).dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 获取Grid 数据
 * @param accessURL 访问的URL
 * @param singleSelect 是否多选
 * @param dataPar 父画面传递值
 */
function GetGridProviderTypeData(accessURL,singleSelect,dataPar){
	$("#dg_gridData").datagrid({       //初始化datagrid
        striped: true,
        rownumbers: true,
        pagination: false,
        pageSize: 10,
        method:'get',
        autoRowHeight: false,
        fit:true,
        fitColumns:true,
        collapsible:false,
        SelectOnCheck:singleSelect,
        sortOrder: 'DESC',
        url:accessURL,
        columns: [[
            {field:'ck',checkbox:singleSelect, width:80},
            { field: 'ftypeid', title: '操作ID',hidden:true,width: 100, align: 'center' },       
            { field: 'ftypecode', title: '供应商类型编码', width: 100, align: 'center' },
            { field: 'ftypename', title: '供应商类型名称', width: 180, align: 'center' },
            { field: 'fcreater', title: '建立人', width: 80, align: 'center' },
            { field: 'fcreatetime', title: '建立时间', width: 150, align: 'center' }
            ]],
            onLoadSuccess:function (){
            	/*if(singleSelect==true && dataPar!=null){
            		$(dataPar).each(function(i, obj){
                       $("#dg_gridData").datagrid("checkRow",0);
                    });
            	}*/
            }
    });
}

/**
 * 获取Grid 数据
 * @param accessURL 访问的URL
 * @param singleSelect 是否多选
 * @param dataPar 父画面传递值
 */
function GetGridData(accessURL,singleSelect,dataPar){
	$("#dg_gridData").datagrid({       //初始化datagrid
        striped: true,
        rownumbers: true,
        pagination: false,
        pageSize: 10,
        method:'get',
        autoRowHeight: false,
        fit:true,
        fitColumns:true,
        collapsible:false,
        SelectOnCheck:singleSelect,
        sortOrder: 'DESC',
        url:accessURL,
        columns: [[
            {field:'ck',checkbox:singleSelect, width:80},
            { field: 'foperationid', title: '操作ID', hidden:true,width: 100, align: 'center' },       
            { field: 'foperationname', title: '操作名称', width: 100, align: 'center' },
            { field: 'foperationcontent', title: '操作内容', width: 180, align: 'center' },
            { field: 'fresourcesname', title: '资源名', width: 80, align: 'center' },
            { field: 'frassemblymame', title: '资源程序或包名', width: 150, align: 'center' }
            ]],
            onLoadSuccess:function (){
            	/*if(singleSelect==true && dataPar!=null){
            		$(dataPar).each(function(i, obj){
                       $("#dg_gridData").datagrid("checkRow",0);
                    });
            	}*/
            }
    });
}

var returnJsonData="";
var singleSelectOption;
var dialogName;

/**
 * 
 * @param optionName    标识，用以区分不同的选择Tree
 * @param singleSelect  是否是checkbox多选
 * @param dataPar       父页面列表data，用以子页面的选中情况
 * @param returnData    返回数据 
 */
function showChildTree(optionName,singleSelect,dataPar,fOrgzationTypeId,returnData){
	var titleName="";
	var accessURL="";
	var hrefJsp="../jsp/common/frmCommonShowChildTree.jsp";
	singleSelectOption=singleSelect;
	dialogName = optionName;
 	if(optionName=="SysRolePositionSelect"){
		titleName="选择普通岗位";
		accessURL="../sys/Position/GetPositionTree";
	}
 	//工作流用选择岗位
 	if(optionName=="WfRolePositionSelect"){
 		accessURL="../../sys/Position/GetPositionTree";
 		titleName="选择岗位";
 		hrefJsp="../../jsp/common/frmCommonShowChildTree.jsp";
 	}
 	//工作流用选择角色
 	if(optionName=="WfRole"){
 		accessURL="../../sys/Role/GetRoleTree";
 		titleName="选择角色";
 		hrefJsp="../../jsp/common/frmCommonShowChildTree.jsp";
 	}
 	if(optionName=="SysRole"){
 		accessURL="../sys/Role/GetRoleTree";
 		titleName="选择角色";
 	}
 	if(optionName=="SysOrganizationSelect"){
		titleName="选择组织类型";
		accessURL="../sys/OrganizationType/GetOrganizationTypeTree";
	}
 	if(optionName=="SysPositionOrganizationSelect"){
		titleName="选择组织";
		accessURL="../sys/Organization/GetOrganizationTree";
	} 
 	if(optionName=="SysRolePositionStandardSelect"){
		titleName="选择标准岗位";
		accessURL="../sys/PositionStandard/GetPositionStandardTree";
	}
	if(optionName=="SysPositionImportSelect"){
		titleName="引用标准岗位";
		accessURL="../sys/PositionStandard/CitePositionStandardTree";
	}
	if(optionName=="UserRetrieveOrgChild"){
		titleName="查询权限内的组织树";
		accessURL="../util/UserManage/GetUserManageOrgChildTree";
	}
	if(optionName=="UserManageOrgChild"){
		titleName="管理权限内的组织树";
		accessURL="../util/UserManage/GetUserManageOrgChildTree";
	}
	//系统菜单
	if(optionName=="Application"){
		accessURL="../sys/Application/GetApplicationNoLeafTree"; 
		titleName="系统菜单";
	}
	$("<div/>").dialog({
		id : optionName,
		href : hrefJsp,
		title : titleName,
		//height : 290,
		height : 400,
		width : 320,
		modal : true,
		onLoad: function () {
			returnJsonData=""; 
			if(fOrgzationTypeId!=null){
				GetTreeDataForPar(accessURL,singleSelect,dataPar,fOrgzationTypeId);
			}else{
				GetTreeData(accessURL,singleSelect,dataPar);
			}
        },
		onClose : function() {
			CloseWinDialog();
		},
		onDestroy: function() {
			returnData(returnJsonData);
		},
		onMove:function(left,top){
			if($('#'+optionName).panel('options').top<0){
				$('#'+optionName).dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 获取树节点数据
 * @param url 请求访问地址
 * @param singleSelect 是否是多选
 * @param dataPar 父画面传过来的数据
 */
function GetTreeDataForPar(url,singleSelect,dataPar,fOrgzationTypeId){
	 var param = {"fOrgzationTypeId":fOrgzationTypeId};
	 //url=url+"?fOrgzationTypeId="+fOrgzationTypeId;
	 //alert(url);
	$("#tree_Data").tree({
		method : "post",
		animate : true,
		queryParams: param,
		url : url,
		checkbox:singleSelect,
		cascadeCheck:false,
		async:true,
		onLoadSuccess : function () { 
			//展开所有节点
			//$('#tree_Data').tree('expandAll');
			var root=$("#tree_Data").tree("getRoot");
			if(root!==null){
				$('#tree_Data').tree('expand',root.target);
				$(root.target).next().children().children("div.tree-node").each(function(){   
			        $('#tree_Data').tree('expand',this);
			    });
			}
			if(singleSelect==true && dataPar!=null){
				$(dataPar).each(function(i, obj){
                    var node = $("#tree_Data").tree("find",obj.fpositionid);
                    if(node){
                        $("#tree_Data").tree('check',node.target);
                    }
                });
			}
		}
	});
}

/**
 * 获取树节点数据
 * @param url 请求访问地址
 * @param singleSelect 是否是多选
 * @param dataPar 父画面传过来的数据
 */
function GetTreeData(url,singleSelect,dataPar){
	$("#tree_Data").tree({
		method : "get",
		animate : true,
		url : url,
		checkbox:singleSelect,
		cascadeCheck:false,
		//onlyLeafCheck:false,
		async:true,
		onLoadSuccess : function () { 
			//展开所有节点
			//$('#tree_Data').tree('expandAll');
			var root=$("#tree_Data").tree("getRoot");
			if(root!==null){
				$('#tree_Data').tree('expand',root.target);
				$(root.target).next().children().children("div.tree-node").each(function(){   
			        $('#tree_Data').tree('expand',this);
			    });
			}
			if(singleSelect==true && dataPar!=null){
				$(dataPar).each(function(i, obj){
                    var node = $("#tree_Data").tree("find",obj.fpositionid);
                    if(node){
                        $("#tree_Data").tree('check',node.target);
                    }
                });
			}
		}
	});
}

//选择按钮事件
function ChooseSelect(){ 
	var nodes;
	if(singleSelectOption==true){  
		nodes = $("#tree_Data").tree("getChecked"); 
	}else{
		nodes = $("#tree_Data").tree("getSelected");
	}
	if(nodes.length<0){
		$.messager.alert("提示", "请选择需要添加的信息！", "warning");
		return false;
	}  
	//返回数据
	returnJsonData=JSON.stringify(nodes);
	// 关闭画面
	CloseWinDialog();
}

//是否存在指定函数 

//打开窗口画面
function openDialog(vid, vhref, vtitle, vheight, vwidth, vmaxsizeflag, callbackClose) {
	$("<div/>").dialog({
		id : vid,
		href : vhref,
		title : vtitle,
		height : vheight,
		width : vwidth,
		maximizable:true,
		maximized:vmaxsizeflag,
		modal : true,
		onLoad: function () { 

		},
		onClose : function() {
			CloseWin(vid);
		},
		onDestroy: function() { 
			callbackClose();
		},
		onMove:function(left,top){
			if($('#'+vid).panel('options').top<0){
				$('#'+vid).dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
		,onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
			try{
				if(isExitsFunction("SetResize"))
				{
					SetResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
			try{
				if(isExitsFunction("SetResize"))
				{
					SetResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
			try{
				if(isExitsFunction("SetResize"))
				{
					SetResize(); 
				}	
			}catch(e){
				
			}
		}
	});
}

function openSowDialog(vid, vhref, vtitle, vheight, vwidth, vjson,callbackClose) {
	sowBaseInfo = vjson;
	$("<div/>").dialog({
		id : vid,
		href : vhref,
		title : vtitle,
		height : vheight,
		width : vwidth,
		maximizable:true,
		maximized:true,
		modal : true,
		onLoad: function () { 
			sowBaseInfo=""; 
        },
		onClose : function() {
			CloseWin(vid);
		},
		onDestroy: function() {
			callbackClose();
		},
		onMove:function(left,top){
			if($('#'+vid).panel('options').top<0){
				$('#'+vid).dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
		,onMaximize:function(){    
			/*if(isExitsFunction("SetPigResize"))
			{
				SetPigResize(); 
			}*/
			
			if(isExitsFunction("SetResize"))
			{
				SetResize(); 
			}
		},
		onRestore:function(){    
			/*if(isExitsFunction("SetPigResize"))
			{
				SetPigResize(); 
			}*/
			
			if(isExitsFunction("SetResize"))
			{
				SetResize(); 
			}
		},
		onResize:function(){   
			/*if(isExitsFunction("SetPigResize"))
			{
				SetPigResize(); 
			}*/
			
			if(isExitsFunction("SetResize"))
			{
				SetResize(); 
			}
		}
		
	});
}
var sowBaseInfo = "";
var _conditionwhere="";
var _conditionwhereJson;
var _dataParJson;
var _fobjectname="";
/**
 * 相关业务画面共通检索小画面
 * @param fobjectname  画面ID 
 * @param vtitle 画面标题
 * @param vheight 高度
 * @param vwidth 宽度
 * @param dataPar 父画面传过来的数据
 * @param callbackClose 回调函数
 * 
 */
function openSearchCoditionDialog(fobjectname, vtitle, vheight, vwidth,dataParJson,callbackReturnData) {
	_dialogOk=false;
	_dataParJson=dataParJson;
	_fobjectname=fobjectname;
	//var vhref="../jsp/common/frmCommonCondition.jsp";	
	var vhref="../util/CommonCondition";	
	$("<div/>").dialog({
		id : fobjectname,
		href : vhref,
		title : vtitle,
		height : vheight,
		width : vwidth,
		modal : true,
		onOpen: function () {
			//alert("assasa");
			//alert($("#tbCondition").html());
        },
		onClose : function() {
			CloseWin(fobjectname);
		},
		onDestroy: function() {
			if(_dialogOk)
			{
				callbackReturnData(_conditionwhere,_conditionwhereJson);
			}
		},
		onMove:function(left,top){
			if($('#'+fobjectname).panel('options').top<0){
				$('#'+fobjectname).dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}


//返回种猪Json数据
var _SowBaseInfoJson;
var _orgID;
/**
 * 选择种猪管理画面
 * @param orgID    组织ID
 * @param orgType  组织类型 
 * @param Monoid   猪只类群
 * @param BoarStatus 种猪状态
 * @param FreeingStage 饲养阶段
 * @param PigStatus 猪只状态
 * @param dataPar 父画面传过来的数据
 * @param dataPar 应用ID 
 * @param callbackClose 回调函数
 * 
 * 
 * 
 */
function openCommonSowBaseInfoDialog(orgID,orgType,Monoid,BoarStatus,FreeingStage,PigStatus,dataParJson,applicationID,callbackReturnData) {
	_orgID=orgID;
	_monoid=Monoid;
	_boarStatus=BoarStatus;
	_freeingStage=FreeingStage;
	_pigStatus=PigStatus;
	_applicationID=applicationID;
	_dialogOk=false;
	var vhref="../util/OpenCommonSowBaseInfoSelect";	
	$("<div/>").dialog({
		id : "CommonSowBaseInfoDialog",
		href : vhref,
		title : '种猪选择',
		height : 500,
		width : 1200,
		maximized:true,
		//maximizable:true,
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonSowBaseInfoDialog");
		},
		onDestroy: function() {
			if(_dialogOk)
			{
				callbackReturnData(_SowBaseInfoJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSowBaseInfoDialog').panel('options').top<0){
				$('#CommonSowBaseInfoDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
} 

var _SowWashOutPlanJson;

/**
 * 淘汰计划
 * @param orgID
 * @param orgName
 * @param dataParJson
 * @param callbackSowReturnData
 * 
 */
function openCommonSowWashOutPlanDialog(orgID,orgName,dataParJson,callbackSowReturnData) {
	_orgID=orgID;
	_orgName=orgName;
	_dialogOk=false;
	var vhref="../util/OpenCommonSowWashOutPlanSelect";
	$("<div/>").dialog({
		id : "CommonSowWashOutPlanDialog",
		href : vhref,
		title : '淘汰计划选择',
		height : 500,
		width : 1200,
		maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function () {
		try{
			if(isExitsFunction("SetWashOutResize")){
				SetWashOutResize(); 
			}	
		}catch(e){
			
		}
			
		},
		onClose : function() {
			CloseWin("CommonSowWashOutPlanDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				alert(_SowWashOutPlanJson);
				callbackSowReturnData(_SowWashOutPlanJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSowWashOutPlanDialog').panel('options').top<0){
				$('#CommonSowWashOutPlanDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetWashOutResize"))
				{
					SetWashOutResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetWashOutResize"))
				{
					SetWashOutResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetWashOutResize"))
				{
					SetWashOutResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}

var _WVPigJson;
/**
 * 打开选择种猪入库单画面
 * @param orgID
 * @param orgName
 * @param dataParJson
 * @param callbackSowReturnData
 */
function openCommonWVPigDialog(orgID,orgName,dataParJson,callbackSowReturnData) {
	_orgID=orgID;
	_orgName=orgName;
	_dialogOk=false;
	var vhref="../util/OpenCommonWVPigSelect";
	$("<div/>").dialog({
		id : "CommonWVPigDialog",
		href : vhref,
		title : '种猪入库单选择',
		height : 500,
		width : 1200,
		maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function () {
		try{
			if(isExitsFunction("SetWVPigResize")){
				SetWVPigResize(); 
			}	
		}catch(e){
			
		}
			
		},
		onClose : function() {
			CloseWin("CommonWVPigDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				callbackSowReturnData(_WVPigJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonWVPigDialog').panel('options').top<0){
				$('#CommonWVPigDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetWVPigResize"))
				{
					SetWVPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetWVPigResize"))
				{
					SetWVPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetWVPigResize"))
				{
					SetWVPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}

var _HealthCareItemJson;
var _HealthCareItemDetilJson;
function OpenCommonHealthCareItemSelect(dataParJson,callbackSowReturnData) {
	_dialogOk=false;
	var vhref="../util/OpenCommonHealthCareItemSelect";	
	$("<div/>").dialog({
		id : "CommonHealthCareItemDialog",
		href : vhref,
		title : '保健项目选择',
		height : 640,
		width : 840,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonHealthCareItemDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_HealthCareItemJson,_HealthCareItemDetilJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonHealthCareItemDialog').panel('options').top<0){
				$('#CommonHealthCareItemDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}


/**
 * 周采购计划共同画面
 */
var _PurchasePlanBriefJson;
function OpenCommonPurchasePlanBriefSelect(companyID,companyName,billtypeid,weekid,providerid,callbackSowReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	_billtypeid=billtypeid;
	_weekid=weekid;
	_providerid=providerid;
	
	var vhref="../util/OpenCommonPurchasePlanBriefSelect";	
	$("<div/>").dialog({
		id : "CommonPurchasePlanBriefDialog",
		href : vhref,
		title : '采购计划选择',
		height :500,
		width : 1200,
		maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetPurchasePlanResize")){
					SetPurchasePlanResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function(){
			CloseWin("CommonPurchasePlanBriefDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_PurchasePlanBriefJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonPurchasePlanBriefDialog').panel('options').top<0){
				$('#CommonPurchasePlanBriefDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPurchasePlanResize"))
				{
					SetPurchasePlanResize(); 
				}	
			}catch(e){
				
			}
		},
		
		onRestore:function(){   
			try{
				if(isExitsFunction("SetPurchasePlanResize"))
				{
					SetPurchasePlanResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPurchasePlanResize"))
				{
					SetPurchasePlanResize(); 
				}		
			}catch(e){
				
			}
		}
		
		
	});
}

/**
 * 选择应付账龄共同画面
 */
var _BalanceAgeJson;
function OpenCommonBalanceAgeSelect(companyID,companyName,callbackSowReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	var vhref="../util/OpenCommonBalanceAgeSelect";	
	$("<div/>").dialog({
		id : "CommonBalanceAgeDialog",
		href : vhref,
		title : '应付账龄选择',
		height :500,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetBalanceAgeResize")){
					SetBalanceAgeResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonBalanceAgeDialog");
		},
		onDestroy: function() { 
			if(_dialogOk){
				callbackSowReturnData(_BalanceAgeJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonBalanceAgeDialog').panel('options').top<0){
				$('#CommonBalanceAgeDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetBalanceAgeResize"))
				{
					SetBalanceAgeResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetBalanceAgeResize"))
				{
					SetBalanceAgeResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetBalanceAgeResize"))
				{
					SetBalanceAgeResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}

/**
 * 选择承运商
 * @param companyID
 * @param companyName
 * @param callbackReturnData
 */
var _CarrierJson;
function OpenCommonCarrierSelect(companyID,companyName,callbackSowReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	var vhref="../util/OpenCommonCarrierSelect";	
	$("<div/>").dialog({
		id : "CommonCarrierDialog",
		href : vhref,
		title : '承运商选择',
		height :500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonCarrierDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_CarrierJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonCarrierDialog').panel('options').top<0){
				$('#CommonCarrierDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		}
	});
}

/**
 * 
 */
var _FvehicleJson;
function OpenCommonFvehicleSelect(fcarrierid,fcarrier,callbackSowReturnData) {
	_dialogOk=false;
	_fcarrierid=fcarrierid;
	_fcarrier=fcarrier;
	var vhref="../util/GetFFVehicle";	
	$("<div/>").dialog({
		id : "CommonFvehicleDialog",
		href : vhref,
		title : '车号选择',
		height :450,
		width : 720,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonFvehicleDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_FvehicleJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonFvehicleDialog').panel('options').top<0){
				$('#CommonFvehicleDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		}
	});
}

/**
 * 选择成本项目明细
 */
var _SowCostDetailJson;
function openCommonSowCostDetailDialog(callbackSowReturnData) {
	_dialogOk=false;
	var vhref="../util/openCommonSowCostDetailSelect";	
	$("<div/>").dialog({
		id : "CommonSowCostDetaiDialog",
		href : vhref,
		title : '成本项目明细选择',
		height :500,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetCostDetailResize")){
					SetCostDetailResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function(){
			CloseWin("CommonSowCostDetaiDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_SowCostDetailJson);
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetCostDetailResize"))
				{
					SetCostDetailResize(); 
				}	
			}catch(e){
				
			}
		},
		onMove:function(left,top){
			if($('#CommonSowCostDetaiDialog').panel('options').top<0){
				$('#CommonSowCostDetaiDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetCostDetailResize"))
				{
					SetCostDetailResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetCostDetailResize"))
				{
					SetCostDetailResize(); 
				}		
			}catch(e){
				
			}
		}
		
	});
}

var _HealthCareProgJson;
var _HealthCareProgDetilJson;
function OpenCommonHealthCareProgSelect(accountunitid,accountunitname,dataParJson,callbackSowReturnData) {
	_dialogOk=false;
	_accountunitid=accountunitid;
	_accountunitname=accountunitname;
	var vhref="../util/OpenCommonHealthCareProgSelect";	
	$("<div/>").dialog({
		id : "CommonHealthCareProgDialog",
		href : vhref,
		title : '保健程序选择',
		height : 600,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonHealthCareProgDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_HealthCareProgJson,_HealthCareProgDetilJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonHealthCareProgDialog').panel('options').top<0){
				$('#CommonHealthCareProgDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
var _HealthCarePlanJson;
var _HealthCarePlanDetilJson;
function OpenCommonHealthCarePlanSelect(accountunitid,accountunitname,dataParJson,callbackSowReturnData) {
	_dialogOk=false;
	_accountunitid=accountunitid;
	_accountunitname=accountunitname;
	var vhref="../util/OpenCommonHealthCarePlanSelect";	
	$("<div/>").dialog({
		id : "CommonHealthCarePlanDialog",
		href : vhref,
		title : '保健计划选择',
		height : 600,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonHealthCarePlanDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_HealthCarePlanJson,_HealthCarePlanDetilJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonHealthCarePlanDialog').panel('options').top<0){
				$('#CommonHealthCarePlanDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

var _ImmunePlanJson;
function OpenCommonImmunePlanSelect(dataParJson,callbackSowReturnData) {
	_dialogOk=false;
	var vhref="../util/OpenCommonImmunePlanSelect";	
	$("<div/>").dialog({
		id : "CommonImmunePlanDialog",
		href : vhref,
		title : '免疫计划选择',
		height : 540,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonImmunePlanDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_ImmunePlanJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonImmunePlanDialog').panel('options').top<0){
				$('#CommonImmunePlanDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
/**
 * 检测项目
 */

var _CheckItemJson;
function OpenCommonCheckItemSelect(dataParJson,callbackSowReturnData) {
	_dialogOk=false;
	var vhref="../util/OpenCommonCheckItemSelect";	
	$("<div/>").dialog({
		id : "CommonCheckItemDialog",
		href : vhref,
		title : '检测项目选择',
		height : 450,
		width : 500,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonCheckItemDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_CheckItemJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonCheckItemDialog').panel('options').top<0){
				$('#CommonCheckItemDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
/**
 * 检测方法
 */

var _CheckMethodJson;
function OpenCommonCheckMethodSelect(dataParJson,callbackSowReturnData) {
	_dialogOk=false;
	var vhref="../util/OpenCommonCheckMethodSelect";	
	$("<div/>").dialog({
		id : "CommonCheckMethodDialog",
		href : vhref,
		title : '检测方法选择',
		height : 540,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonCheckMethodDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_CheckMethodJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonCheckMethodDialog').panel('options').top<0){
				$('#CommonCheckMethodDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 
 * @param orgID		核算单位
 * @param optionName		标识
 * @param titleName		标题名称
 * @param dataParJson
 * @param callbackSowReturnData		回调函数
 */
var _ProgJson;
function OpenCommonProgSelect(orgID,orgName,callbackSowReturnData) {
	_dialogOk=false;
	_orgID=orgID;
	_orgName=orgName;
	
	$("<div/>").dialog({
		id : "CommonProgDialog",
		href : "../util/OpenCommonImmuneProgSelect",
		title : "选择免疫程序",
		height : 500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonProgDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_ProgJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonProgDialog').panel('options').top<0){
				$('#CommonProgDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
/**
 * 
 * @param orgID		核算单位
 * @param optionName		标识
 * @param titleName		标题名称
 * @param dataParJson
 * @param callbackSowReturnData		回调函数
 */
var _ProgJson;
function OpenCommonPlanSelect(orgID,orgName,callbackSowReturnData) {
	_dialogOk=false;
	_orgID=orgID;
	_orgName=orgName;
	
	$("<div/>").dialog({
		id : "CommonPlanDialog",
		href : "../util/OpenCommonImmunePlanSelect",
		title : "选择免疫计划",
		height : 500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonPlanDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackSowReturnData(_ImmunePlanJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonPlanDialog').panel('options').top<0){
				$('#CommonPlanDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		}
	});
}



var _PriceBillJson;
/**
 * 选择价格调整单
 * @param companyID
 * @param companyName
 * @param dateJson
 * @param optionName
 * @param titleName
 * @param callbackReturnData
 */
function OpenCommonPriceBillSelect(companyID,companyName,dataStart,dataEnd,yearMonth,callbackReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	_dataStart=dataStart;
	_dataEnd=dataEnd;
	_yearMonth=yearMonth;
	var vhref="../util/OpenCommonPriceBillSelect";	
	
	$("<div/>").dialog({
		id : "CommonPriceBillDialog",
		href : vhref,
		title : "选择价格调整单",
		height : 500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonPriceBillDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_PriceBillJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonPriceBillDialog').panel('options').top<0){
				$('#CommonPriceBillDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

var _MedicinalOrderJson;

var _OrderDetailOptions;


/**
 * 选择药品采购订单
 * @param companyID
 * @param companyName
 * @param faccountunitid
 * @param faccountunitname
 * @param fproviderid
 * @param fprovidershortname
 * @param billtypeid
 * @param businesstype 如果1：公司=公司 and  单据类型=对应单据类型（药品） and （订单数量-到货数量）>0  如果 
 * 						  2: 明细的核算单位=选择核算单位 and  供应商=选择供应商 and 单据类型=饲料 and (订单数量-入库数量)>0 
 * 						  3: 公司 and 供应商 and 单据类型
 * @param callbackReturnData
 */
function OpenCommonOrderDetailSelect(companyID,companyName,faccountunitid,faccountunitname,fproviderid,fprovidershortname,billtypeid,businesstype,callbackReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	_accountunitID=faccountunitid;
	_accountunitName=faccountunitname;
	_providerID=fproviderid;
	_providershortName=fprovidershortname;
	_businesstype=businesstype;
	_billtypeid=billtypeid;
	
 	var vhref="../util/OpenCommonMedicinalOrderSelect";	
	
	$("<div/>").dialog({
		id : "CommonMedicinalOrderDialog",
		href : vhref,
		title : "选择采购订单",
		height : 500,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetMaterielOederResize")){
					SetMaterielOederResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function(){
			CloseWin("CommonMedicinalOrderDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_MedicinalOrderJson,_cboDepotJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonMedicinalOrderDialog').panel('options').top<0){
				$('#CommonMedicinalOrderDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetMaterielOederResize"))
				{
					SetMaterielOederResize(); 
				}	
			}catch(e){
				
			}
		},
		
		onResize:function(){ 
			try{
				if(isExitsFunction("SetMaterielOederResize"))
				{
					SetMaterielOederResize(); 
				}		
			}catch(e){
				
			}
		}
	
	
	});
}
var _WVBriefDetailJson;

/**
 * 选择入库单
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param providerId  供应商ID
 * @param providerName 供应商
 * @param wvcode   入库单编码
 * @param callbackReturnData
 */
function OpenCommonWVBriefDetailSelect(OrgID,OrgName,providerId,providerName,wvcode,fbilltypeid,callbackReturnData) {
	_dialogOk=false;
	_OrgID=OrgID;
	_OrgName=OrgName;
	_providerId=providerId;
	_providerName=providerName;
	_wvcode=wvcode;
	_billtypeid=fbilltypeid;
	var vhref="../util/OpenCommonWVBriefDetailSelect";	
	
	$("<div/>").dialog({
		id : "CommonWVBriefDetailDialog",
		href : vhref,
		title : "入库单选择",
		height : 500,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetBriefDetailResize")){
					SetBriefDetailResize(); 
				}	
			}catch(e){
				
			}
			
		},
		onClose : function(){
			CloseWin("CommonWVBriefDetailDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_WVBriefDetailJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonWVBriefDetailDialog').panel('options').top<0){
				$('#CommonWVBriefDetailDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetBriefDetailResize"))
				{
					SetBriefDetailResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetBriefDetailResize"))
				{
					SetBriefDetailResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetBriefDetailResize"))
				{
					SetBriefDetailResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}

var _WVBriefDetailListJson;

/**
 * 选择承运商入库单
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param providerId  供应商ID
 * @param providerName 供应商
 * @param wvcode   入库单编码
 * @param callbackReturnData
 */
function OpenCommonWVBriefDetailListSelect(OrgID,OrgName,providerId,providerName,wvcode,callbackReturnData) {
	_dialogOk=false;
	_OrgID=OrgID;
	_OrgName=OrgName;
	_providerId=providerId;
	_providerName=providerName;
	_wvcode=wvcode;
	var vhref="../util/OpenCommonWVBriefDetailListSelect";	
	
	$("<div/>").dialog({
		id : "CommonWVBriefDetailListDialog",
		href : vhref,
		title : "承运商入库单选择",
		height : 500,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetCreirResize")){
					SetCreirResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function(){
			CloseWin("CommonWVBriefDetailListDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData( _WVBriefDetailListJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonWVBriefDetailListDialog').panel('options').top<0){
				$('#CommonWVBriefDetailListDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetCreirResize"))
				{
					SetCreirResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetCreirResize"))
				{
					SetCreirResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetCreirResize"))
				{
					SetCreirResize(); 
				}		
			}catch(e){
				
			}
		}
		
		
	});
}

var _WVPigBriefDetailJson;

/**
 * 选择入库单
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param providerId  供应商ID
 * @param providerName 供应商
 * @param fbilltypeid   入库单编码
 * @param callbackReturnData
 */
function OpenCommonWVPigBriefDetailSelect(OrgID,OrgName,Providerid,ProviderShortName,billtypeid,callbackReturnData) {
	_dialogOk=false;
	_OrgID=OrgID;
	_OrgName=OrgName;
	_providerid=Providerid;
	_providershortname=ProviderShortName;
	_billtypeid=billtypeid;
	var vhref="../util/OpenCommonWVPigBriefDetailSelect";	
	
	$("<div/>").dialog({
		id : "CommonWVPigBriefDetailDialog",
		href : vhref,
		title : "选择猪只入库单",
		height : 500,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetPigResize")){
					SetPigResize(); 
				}	
			}catch(e){
				
			}
			
		},
		onClose : function(){
			CloseWin("CommonWVPigBriefDetailDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_WVPigBriefDetailJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonWVPigBriefDetailDialog').panel('options').top<0){
				$('#CommonWVPigBriefDetailDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}	
		
		
	});
}
var _DVBriefDetailJson;
/**
 * 选择销售出库库单
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param customerid  客户ID
 * @param customershortname  客户名称
 * @param dvCode   出库单编码
 * @param typeid   如果是0：核算单位，单据类型，客户简称。如果是1：核算单位。
 * @param callbackReturnData
 */
function OpenCommonDVBriefDetailSelect(OrgID,OrgName,customerid,customershortname,dvCode,DVbilltype,typeid,callbackReturnData) {
	_dialogOk=false;
	_OrgID=OrgID;
	_OrgName=OrgName;
	_customerid=customerid;
	_customershortname=customershortname;
	_dvCode=dvCode;
	_DVbillType=DVbilltype;
	_typeID=typeid;
	var vhref="../util/OpenCommonDVBriefDetailSelect";	
	
	$("<div/>").dialog({
		id : "CommonDVBriefDetailDialog",
		href : vhref,
		title : "选择销售出库单",
		height : 500,
		width : 1200,
		modal : true,
		maximizable:true,
		maximized:true,	
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonDVBriefDetailDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_DVBriefDetailJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonDVBriefDetailDialog').panel('options').top<0){
				$('#CommonDVBriefDetailDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
var _DVBriefJson;
/**
 * 选择销售出库库单
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param customerid  客户ID
 * @param customershortname  客户名称
 * @param dvCode   出库单编码
 * @param typeid   如果是0：核算单位，单据类型，客户简称。如果是1：核算单位。
 * @param callbackReturnData
 */
function OpenCommonDVBriefSelect(OrgID,OrgName,customerid,customershortname,callbackReturnData) {
	_dialogOk=false;
	_OrgID=OrgID;
	_OrgName=OrgName;
	_customerid=customerid;
	_customershortname=customershortname;
	var vhref="../util/OpenCommonDVBriefSelect";
	$("<div/>").dialog({
		id : "CommonDVBriefDialog",
		href : vhref,
		title : "选择销售出库单",
		height : 500,
		width : 1200,
		modal : true,
		maximizable:true,
		maximized:true,	
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonDVBriefDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_DVBriefJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonDVBriefDialog').panel('options').top<0){
				$('#CommonDVBriefDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
var _SaleGradeDVBriefDetailJson;
/**
 * 选择销售等级销售出库库单
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param customerid  客户ID
 * @param customershortname  客户名称
 * @param dvCode   出库单编码
 * @param typeid   如果是0：核算单位，单据类型，客户简称。如果是1：核算单位。
 * @param callbackReturnData
 */
function OpenCommonSaleGradeDVBriefDetailSelect(fcustomerid,callbackReturnData) {
	_dialogOk=false;
	_fcustomerid=fcustomerid;
	var vhref="../util/OpenCommonSaleGradeDVBriefDetailSelect";	
	$("<div/>").dialog({
		id : "CommonSaleGradeDVBriefDetailDialog",
		href : vhref,
		title : "销售等级出库单",
		height : 500,
		width : 1200,
		modal : true,
		maximizable:true,
		maximized:true,	
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonSaleGradeDVBriefDetailDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_SaleGradeDVBriefDetailJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSaleGradeDVBriefDetailDialog').panel('options').top<0){
				$('#CommonSaleGradeDVBriefDetailDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

var _FPrescriptioncodeJson;
/**
 * 选择处方编码
 * @param fprescriptionid 处方ID
 * @param callbackReturnData
 */
function OpenCommonFPrescriptioncodeSelect(faccountunitid,faccountunitshortname,callbackReturnData) {
	_dialogOk=false;
	_faccountunitid=faccountunitid;
	_faccountunitshortname=faccountunitshortname;
	var vhref="../util/OpenCommonFPrescriptioncodeSelect";	
	$("<div/>").dialog({
		id : "CommonFPrescriptioncodeDialog",
		href : vhref,
		title : "处方编码选择",
		height : 500,
		width : 1200,
		modal : true,
		maximizable:true,
		maximized:true,	
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonFPrescriptioncodeDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_FPrescriptioncodeJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonFPrescriptioncodeDialog').panel('options').top<0){
				$('#CommonFPrescriptioncodeDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
var _SemenAccountDetailJson;
/**
 * 选择精液库存账
 * @param OrgID     核算单位ID
 * @param OrgName  核算单位名称
 * @param customerid  客户ID
 * @param customershortname  客户名称
 * @param 
 * @param callbackReturnData
 */
function OpenCommonSemenAccountDetailSelect(OrgID,OrgName,callbackReturnData) {
	_dialogOk=false;
	_OrgID=OrgID;
	_OrgName=OrgName;
	var vhref="../util/OpenCommonSemenAccountDetailSelect";	
	
	$("<div/>").dialog({
		id : "CommonSemenAccountDetailDialog",
		href : vhref,
		title : "选择精液库存账",
		height : 550,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetSemenResize")){
					SetSemenResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function(){
			CloseWin("CommonSemenAccountDetailDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_SemenAccountDetailJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSemenAccountDetailDialog').panel('options').top<0){
				$('#CommonSemenAccountDetailDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetSemenResize"))
				{
					SetSemenResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetSemenResize"))
				{
					SetSemenResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetSemenResize"))
				{
					SetSemenResize(); 
				}		
			}catch(e){
				
			}
		}	
	
	
	});
}
var _ProviderJson;
var _isSingleSelect;
/**
 * 选择供应商
 * @param companyID
 * @param companyName
 * @param dateJson
 * @param optionName
 * @param titleName
 * @param callbackReturnData
 */
function OpenCommonProviderSelect(companyID,companyName,isSingleSelect,callbackReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	_isSingleSelect=isSingleSelect;
	var vhref="../util/OpenCommonProviderSelect";	
	
	$("<div/>").dialog({
		id : "CommonProviderDialog",
		href : vhref,
		title : "选择供应商",
		height :550,
		width : 1200,
		maximizable:false,
		maximized:true,	
		minimizable:false,
		modal : true,		
		onOpen: function(){
			
		},
		onClose : function(){
			CloseWin("CommonProviderDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_ProviderJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonProviderDialog').panel('options').top<0){
				$('#CommonProviderDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetProviderResize"))
				{
					SetProviderResize(); 
				}	
			}catch(e){
				
			}

		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetProviderResize"))
				{
					SetProviderResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetProviderResize"))
				{
					SetProviderResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}
var _CustomerJson;

var _DepotJson;
function OpenCommonDepotSelect(accountid, accoundname,isSingleSelect, callbackReturnData) {
	_dialogOk=false;
	_accountid=accountid;
	_accoundname=accoundname;
	_isSingleSelect=isSingleSelect;
	var vhref="../util/OpenCommonDepotSelect";	
	
	$("<div/>").dialog({
		id : "CommonDepotDialog",
		href : vhref,
		title : "选择仓库",
		height :500,
		width : 1200,
		maximizable:false,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonDepotDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_DepotJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonDepotDialog').panel('options').top<0){
				$('#CommonDepotDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}


/**
 * 选择对象
 * @param callbackReturnData
 */
var _SelectObjectJson;
function OpenCommonObjectDescriptSelect(parameter,callbackReturnData) {
	_dialogOk=false;
	var vhref="../OpenCommonObjectDescriptSelect?parameter="+parameter;
	$("<div/>").dialog({
		id : "CommonObjectDescriptDialog",
		href : vhref,
		title : "选择对象",
		height :550,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonObjectDescriptDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_SelectObjectJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonObjectDescriptDialog').panel('options').top<0){
				$('#CommonObjectDescriptDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
/**
 * 选择客户
 * @param companyID
 * @param companyName
 * @param dateJson
 * @param optionName
 * @param titleName
 * @param callbackReturnData
 */
function OpenCommonCustomerSelect(companyID,companyName,callbackReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	var vhref="../util/OpenCommonCustomerSelect";	
	
	$("<div/>").dialog({
		id : "CommonCustomerDialog",
		href : vhref,
		title : "选择客户",
		height :550,
		width : 1200,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function(){
			try{
				if(isExitsFunction("SetCustomerResize")){
					SetCustomerResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function(){
			CloseWin("CommonCustomerDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_CustomerJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonCustomerDialog').panel('options').top<0){
				$('#CommonCustomerDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetCustomerResize"))
				{
					SetCustomerResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetCustomerResize"))
				{
					SetCustomerResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetCustomerResize"))
				{
					SetCustomerResize(); 
				}		
			}catch(e){
				
			}
		}
		
	});
}

var _MonthJson;
/**
 * 选择年月
 * @param companyID
 * @param companyName
 * @param dateJson
 * @param optionName
 * @param titleName
 * @param callbackReturnData
 */
function OpenCommonMonthSelect(companyID,companyName,callbackReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	var vhref="../util/OpenCommonMonthSelect";	
	
	$("<div/>").dialog({
		id : "CommonMonthDialog",
		href : vhref,
		title : "选择年月",
		height :500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonMonthDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_MonthJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonMonthDialog').panel('options').top<0){
				$('#CommonMonthDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

var _PrescriptionJson;
/**
 * 选择处方笺
 * @param AccountUnitID
 * @param AccountName
 * @param dateJson
 * @param optionName
 * @param titleName
 * @param callbackReturnData
 */
function OpenCommonPrescriptionSelect(AccountUnitID,AccountName,callbackReturnData) {
	_dialogOk=false;
	_AccountUnitID=AccountUnitID;
	_AccountName=AccountName;
	var vhref="../util/OpenCommonPrescriptionSelect";	
	
	$("<div/>").dialog({
		id : "CommonPrescriptionDialog",
		href : vhref,
		title : "选择处方笺",
		height :500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonPrescriptionDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_PrescriptionJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonPrescriptionDialog').panel('options').top<0){
				$('#CommonPrescriptionDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
var _DeliveryJson;
/**
 * 选择收货信息
 * @param companyID
 * @param companyName
 * @param dateJson
 * @param optionName
 * @param titleName
 * @param callbackReturnData
 */
function OpenCommonDeliverySelect(companyID,companyName,callbackReturnData) {
	_dialogOk=false;
	_companyID=companyID;
	_companyName=companyName;
	var vhref="../util/OpenCommonDeliverySelect";	
	
	$("<div/>").dialog({
		id : "CommonDeliveryDialog",
		href : vhref,
		title : "选择收货信息",
		height :500,
		width : 1200,
		maximized:false,
		modal : true,
		onOpen: function(){
		},
		onClose : function(){
			CloseWin("CommonDeliveryDialog");
		},
		onDestroy: function(){
			if(_dialogOk){
				callbackReturnData(_DeliveryInfoJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonDeliveryDialog').panel('options').top<0){
				$('#CommonDeliveryDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		}
	});
}
var _MaterielInfoJson;
var _isaccountEdite=false;
/**
* 物料选择画面
* @param faccountid 核算单位
* @param materielType 物料分类
* @param callbackClose 回调函数
* 
*/
function openCommonMaterielDialog(faccountid,materielType,callbackReturnData,isaccountEdite) { 
	_account = faccountid;
	_materielType = materielType;
	_isaccountEdite=isaccountEdite;
	_dialogOk=false;
	var vhref="../util/OpenCommonMaterielSelect";	
	$("<div/>").dialog({
		id : "CommonMaterielDialog",
		href : vhref,
		title : '物料选择',
		height : 500,
		width : 1200,
		maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function () {
	
		},
		onClose : function() {
			CloseWin("CommonMaterielDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				callbackReturnData(_MaterielInfoJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonMaterielDialog').panel('options').top<0){
				$('#CommonMaterielDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},onMaximize:function(){    
			try{
				if(isExitsFunction("SetMaterielResize"))
				{
					SetMaterielResize(); 
				}
			}
			catch(e){
				
			}
			
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetMaterielResize"))
				{
					SetMaterielResize(); 
				}
			}
			catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetMaterielResize"))
				{
					SetMaterielResize(); 
				}
			}
			catch(e){
				
			}
		}
	});
} 
var _SingleMaterielInfoJson;
var _isaccountEdite=false;
/**
 * 物料选择画面
 * @param faccountid 核算单位
 * @param materielType 物料分类
 * @param callbackClose 回调函数
 * 
 */
function openCommonSingleMaterielDialog(faccountid,materielType,callbackReturnData,isaccountEdite,haveAccount,singleSelect) { 
	_account = faccountid;
	_materielType = materielType;
	_isaccountEdite=isaccountEdite;
	_haveAccount=haveAccount;
	_singleSelect=singleSelect;
	_dialogOk=false;
	var vhref="../util/OpenCommonSingleMaterielSelect";	
	$("<div/>").dialog({
		id : "CommonSingleMaterielDialog",
		href : vhref,
		title : '物料选择',
		height : 500,
		width : 1200,
		maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function () {
			
		},
		onClose : function() {
			CloseWin("CommonSingleMaterielDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				callbackReturnData(_SingleMaterielInfoJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSingleMaterielDialog').panel('options').top<0){
				$('#CommonSingleMaterielDialog').dialog('move',{      
					left:left,      
					top:0      
				});  
			}
		},onMaximize:function(){    
			try{
				if(isExitsFunction("SetMaterielResize"))
				{
					SetMaterielResize(); 
				}
			}
			catch(e){
				
			}
			
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetMaterielResize"))
				{
					SetMaterielResize(); 
				}
			}
			catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetMaterielResize"))
				{
					SetMaterielResize(); 
				}
			}
			catch(e){
				
			}
		}
	});
} 


//返回种猪Json数据
var _BatchInfoJson; 
/**
* 选择商品猪批次画面
* @param orgID    组织ID
* @param orgType  组织类型 
* @param Monoid   猪只类群 
* @param FreeingStage 饲养阶段
* @param PigStatus 猪只状态
* @param dataPar 父画面传过来的数据
* @param callbackClose 回调函数
* 
*/
function openCommonBatchInfoDialog(orgID,orgType,Monoid,FreeingStage,PigStatus,dataParJson,callbackReturnData) {
	_orgID=orgID;
	_monoid=Monoid; 
	_freeingStage=FreeingStage;
	_pigStatus=PigStatus;
	_dialogOk=false;
	var vhref="../util/OpenCommonBatchInfoSelect";	
	$("<div/>").dialog({
		id : "CommonBatchInfoDialog",
		href : vhref,
		title : '批次选择',
		height : 500,
		width : 1250,
		maximizable:true,
		maximized:true,	
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonBatchInfoDialog");
		},
		onDestroy: function() {
			if(_dialogOk)
			{
				callbackReturnData(_BatchInfoJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonBatchInfoDialog').panel('options').top<0){
				$('#CommonBatchInfoDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}



//返回种猪Json数据
var _BaseUnitJson; 
/**
* 选择商品猪批次画面  
* @param callbackClose 回调函数
* 
*/
function openCommonBaseUnitDialog(callbackReturnData) { 
	_dialogOk=false;
	var vhref="../util/OpenCommonBastUnitSelect";	
	$("<div/>").dialog({
		id : "CommonBaseUnitDialog",
		href : vhref,
		title : '计量单位选择',
		height : 500,
		width : 1050,
		//maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function () {
	
		},
		onClose : function() {
			CloseWin("CommonBaseUnitDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				callbackReturnData(_BaseUnitJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonBaseUnitDialog').panel('options').top<0){
				$('#CommonBaseUnitDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
//function ReturnCloseWin(vid/* 窗口ID */, vrsttype/* 控件类型 */, vrstid/* 返回值控件ID */, vrst/* 返回的值 */) {
//	CloseWin(vid);
//	alert(vrst);
//}

// 关闭画面，并将返回值传入指定ID的控件
/*function ReturnCloseWin(vid 窗口ID , vrsttype 控件类型 , vrstid 返回值控件ID , vrst 返回的值 ) {
	if (vrstid != "") {
		switch (vrsttype)
		{
		case "textbox":
			$("#" + vrstid).val(vrst);
			break;
		case "datagrid":
			for(var key in vrst){ //第一层循环取到各个list 
				$("#" + vrstid).datagrid('appendRow',vrst[key]);
				} 
			break;
		default :
			break;
		}
	};
	CloseWin(vid);
}*/



$.modalDialog = function(options) {
	if ($.modalDialog.handler == undefined) {// 避免重复弹出
		var opts = $.extend({
			title : '',
			width : 840,
			height : 680,
			modal : true,
			onClose : function() {
				$.modalDialog.handler = undefined;
				$(this).dialog('destroy');
			},
			onOpen : function() {
			}
		}, options);
		opts.modal = true;// 强制此dialog为模式化，无视传递过来的modal参数
		return $.modalDialog.handler = $('<div/>').dialog(opts);
	}
};

/**
 * 拿到控件的值
 * @param controlName   控件名称
 * @param controlType   控件类型 combogrid,combotree
 */
function GetcboItemValue(controlName,controlType){
	var controlIDs = "";
	var controlID;
	if(controlType == "combogrid"){
		controlID = $('#'+controlName).combogrid("getValues");
	}
	if(controlType == "combotree"){
		controlID = $('#'+controlName).combotree("getValues");
	}  
	//判断获得的值是单数
	var controlArr = controlID.toString().split(",");
	if(controlArr.length>0){
		for(var i=0; i<controlArr.length; i++){
			controlIDs += controlArr[i]+",";
		}
	}else{
		controlIDs = controlID;
	} 
	controlIDs = controlIDs.substring(0,controlIDs.length-1);
	return controlIDs; 
}


/**
 * 种猪档案批次选择
 * @param fOrgID	 核算单位ID
 * @param fDepID 	 部门ID
 * @param singleSelect	 是否多选
 * @param SelectData	回调函数
 */

function ShowBatchBaseInfo(fOrgID, fDepID, singleSelect, SelectData){
	//系统操作项
	$("<div/>").dialog({
		id : "SelectProcBatchBaseInfo",
		href : "../jsp/common/frmCommonSelectProcBatchBaseInfo.jsp",
		title : "选择档案批次",
		height : 400,
		width : 650,
		modal : true,
		onLoad: function () { 
			returnJsonData=""; 
			GetProcBatchBase(fOrgID,fDepID,singleSelect);
        },
		onClose : function() { 
			CloseWin('SelectProcBatchBaseInfo');
		},
		onDestroy: function() { 
			SelectData(returnJsonData);
		},
		onMove:function(left,top){
			if($('#SelectProcBatchBaseInfo').panel('options').top<0){
				$('#SelectProcBatchBaseInfo').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 获取职员列表
 * @param fOrgID 核算单位ID
 * @param fDepID 部门ID
 * @param singleSelect 是否多选
 */ 
function GetProcBatchBase(fOrgID,fDepID,singleSelect){
	$("#dg_procBatch").datagrid({       //初始化datagrid
        striped: true,
        rownumbers: true,
        pagination: false,
        pageSize: 10,
        method:'post',
        autoRowHeight: false,
        fit:true,
        fitColumns:true,
        collapsible:false,
        SelectOnCheck:singleSelect,
        sortOrder: 'DESC',
        url:"../proc/BatchBaseInfo/GetBatchCommonBaseInfoList?forgid="+fOrgID+"&fdepid="+fDepID,
        columns : [[
            { field : "ck", checkbox : true, width : 15 }, 
            { field : "fbatchbaseinfoid", width : 80, align : "center", hidden : true, sortable : true, title : "批次档案ID"}, 
            { field : "fbatchnumber", width : 15, align : "center", hidden : false, sortable : true, title : "批次号"}
        ]]
    });
}

/**
 * 选择批次档案信息
 * @returns {Boolean}
 */
function SelectBatchBaseInfo(){  
	var selRows; 
	if(singleSelectOption){
		selRows= $('#dg_procBatch').datagrid("getChecked");
	}else{
		selRows= $('#dg_procBatch').datagrid("getSelected");
	}
	if(selRows.length==0){
		$.messager.alert("提示", "请选择需要添加的信息！", "warning");
		return false;
	}   
	//返回数据
	returnJsonData=JSON.stringify(selRows); 
	// 关闭画面
	CloseWin('SelectProcBatchBaseInfo');
}
 

var _AccountJson;
/**
 * 选择核算单位画面
 * @param companyID     核算单位ID
 * @param callbackClose 回调函数
 * 
 */
function openCommonAccountDialog(companyID,callbackReturnData) {
	_dialogOk=false;
	var vhref="../util/OpenCommonAccountSelect";	
	$("<div/>").dialog({
		id : "CommonAccountDialog",
		href : vhref,
		title : '核算单位选择',
		height : 500,
		width : 600,
		//maximized:true,
		maximizable:true,
		modal : true,
		onOpen: function () {
	
		},
		onClose : function() {
			CloseWin("CommonAccountDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				callbackReturnData(_AccountJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonAccountDialog').panel('options').top<0){
				$('#CommonAccountDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
} 

var _companyID;
var _companyName;
var _dataStart;
var _dataEnd;
var _SupplyFreightPriceJson;
/**
 * 选择核算单位画面
 * @param companyID      核算单位ID
 * @param dataStart      开始时间
 * @param dataEnd        结束时间
 * @param callbackClose  回调函数
 * 
 */
function openCommonSupplyFreightPriceDialog(companyID,companyName,dataStart,dataEnd,callbackReturnData) {
	_companyID = companyID;
	_companyName = companyName;
	_dataStart = dataStart;
	_dataEnd = dataEnd;
	_dialogOk=false;
	var vhref="../util/OpenCommonSupplyFreightPriceSelect";	
	$("<div/>").dialog({
		id : "CommonSupplyFreightPriceDialog",
		href : vhref,
		title : '运输价格目录选择',
		height : 500,
		width : 1200, 
		maximizable:true,
		modal : true,
		onOpen: function () {
	
		},
		onClose : function() {
			CloseWin("CommonSupplyFreightPriceDialog");
		},
		onDestroy: function() {
			if(_dialogOk){
				callbackReturnData(_AccountJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSupplyFreightPriceDialog').panel('options').top<0){
				$('#CommonSupplyFreightPriceDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}
 
var _billTypeID;
var _deptID;
var _SelectWeekJson;
/**
 * 选择周次
 * @param companyID      核算单位ID
 * @param dataStart      开始时间
 * @param dataEnd        结束时间
 * @param callbackClose  回调函数
 * 
 */
function openCommonSelectWeekScheduleDialog(billtypeid, companyid, companyName, deptid, callbackReturnData) { 
	_billTypeID = billtypeid;
	_deptID = deptid;
	_companyID = companyid;
	_companyName = companyName;
	_dialogOk=false;
	var vhref="../util/OpenCommonWeekScheduleSelect";	
	$("<div/>").dialog({
		id : "CommonSelectWeekScheduleDialog",
		href : vhref,
		title : '周次选择',
		height : 500,
		width : 800, 
		maximizable:false,
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonSelectWeekScheduleDialog");
		},
		onDestroy: function() { 
			if(_dialogOk){
				callbackReturnData(_SelectWeekJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSelectWeekScheduleDialog').panel('options').top<0){
				$('#CommonSelectWeekScheduleDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
} 
/**
 * 显示复制行页面
 */
function ShowCopyDialog(currentIndex,copyStartRow,copyEndRow,gridColumns,callbackReturnData){
	currnetRowIndex=currentIndex;
	_currentGridColumns=gridColumns;
	//系统操作项
	$("<div/>").dialog({
		id : "frmCommonCopyValue",
		href : "../jsp/common/frmCommonCopyValue.jsp",
		title : "复制行数据",
		height : 200,
		width : 336,
		modal : true,
		onLoad: function () {
			$("#currentrow").val(currnetRowIndex);
			$("#copyStartRow").val(copyStartRow);
			$("#copyEndRow").val(copyEndRow);
        },
		onClose : function() {
			CloseWin('frmCommonCopyValue');
		},
		onDestroy: function() {
			callbackReturnData(copyreturnValue);
		},
		onMove:function(left,top){
			if($('#frmCommonCopyValue').panel('options').top<0){
				$('#frmCommonCopyValue').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

//复制行确认
function Sure() {
	var currentrow=$("#currentrow").val();
	var copyStartRow=$("#copyStartRow").val();
	var copyEndRow=$("#copyEndRow").val();
	if(parseInt(copyStartRow)<parseInt(currentrow)){
		$.messager.alert("系统提示", "复制开始行必须大于选择行","warning");
		return false;
	}
	if(parseInt(copyEndRow)<parseInt(copyStartRow)){
		$.messager.alert("系统提示", "结束行不能小于开始行","warning");
		return false;
	}
	copyreturnValue.startRow=copyStartRow;
	copyreturnValue.endRow=copyEndRow;
	copyreturnValue.currentColumn=$("#cboColumns").combobox("getValue");
	CloseWin("frmCommonCopyValue");
} 

var _isEarNumberDialogShow=false;
var _totalPig=0;
/**
 * 显示复制行页面
 */
function ShowProductionEarNumberDialog(copyEndRow,gridColumns,callbackReturnData){
	//currnetRowIndex=currentIndex;
	_currentGridColumns=gridColumns;
	_isEarNumberDialogShow=false;
	_totalPig=copyEndRow;
	//系统操作项
	$("<div/>").dialog({
		id : "frmCommonEarNumber",
		href : "../jsp/common/frmCommonProductionEarNumber.jsp",
		title : "耳缺号生成",
		height : 350,
		width : 336,
		modal : true,
		closable:false,
		onLoad: function () {
			copyreturnValue={},
			$("#copyStartRow").val("1");
			$("#copyEndRow").val(copyEndRow);
			$("#copyfleftnipplecount").val("7");
			$("#copyfrightnipplecount").val("7");
			//$("#fdiveinindate").val(DateTimeStamptoYMD(GetSystemDate()));
        },
		onClose : function() {
			CloseWin('frmCommonEarNumber');
		},
		onDestroy: function() {
			if(_isEarNumberDialogShow){
				callbackReturnData(copyreturnValue);
			}
		},
		onMove:function(left,top){
			if($('#frmCommonEarNumber').panel('options').top<0){
				$('#frmCommonEarNumber').dialog('move',{
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

/**
 * 显示设置总重量
 */
var _totlaWeight;
function ShowSetTotalWeightDialog(callbackReturnData){
	_isEarNumberDialogShow=false;
	//系统操作项
	$("<div/>").dialog({
		id : "frmCommonTotalWeight",
		href : "../jsp/common/frmCommonSetTotalWeight.jsp",
		title : "总重量设置",
		height : 180,
		width : 336,
		modal : true,
		closable:false,
		onLoad: function () {
			_totlaWeight="";
        },
		onClose : function() {
			CloseWin('frmCommonTotalWeight');
		},
		onDestroy: function() {
			if(_isEarNumberDialogShow){
				callbackReturnData(copyreturnValue);
			}
		},
		onMove:function(left,top){
			if($('#frmCommonTotalWeight').panel('options').top<0){
				$('#frmCommonTotalWeight').dialog('move',{
	                    left:left,      
	                    top:0      
	              });  
			}
		}
	});
}

function SureWeight(){
	copyreturnValue.totalWeight=$("#totalWeight").val();
	_isEarNumberDialogShow=true;
	CloseWin("frmCommonTotalWeight");
	}

//复制行确认
function SureEarNumber() {
	var currentrow=$("#currentrow").val();
	var copyStartRow=$("#copyStartRow").val();
	var copyEndRow=$("#copyEndRow").val();
	var copyfleftnipplecount=$("#copyfleftnipplecount").val();
	var copyfrightnipplecount=$("#copyfrightnipplecount").val();
	var isProcductCode;
	if($("#isProcductCode").prop("checked")){
		isProcductCode="1";
	}else{
		isProcductCode="0";
	}
	if(parseInt(_totalPig)<parseInt(copyEndRow)){
		$.messager.alert("系统提示", "总数量不能大于活仔数量","warning");
		return false;
	}
	if(parseInt(copyEndRow)<0){
		$.messager.alert("系统提示", "总头数要大于0","warning");
		return false;
	}
	copyreturnValue.startRow=copyStartRow;
	copyreturnValue.endRow=copyEndRow;
	copyreturnValue.prefix=currentrow;
	copyreturnValue.isProcductCode=isProcductCode;
	copyreturnValue.fleftnipplecount=copyfleftnipplecount;
	copyreturnValue.frightnipplecount=copyfrightnipplecount;
	copyreturnValue.fcultivar=$("#cboColumns").combobox("getValue");
	copyreturnValue.fcultivarCode=$("#cboColumns").combobox("getText");
	copyreturnValue.fdiveinindate=$("#fdiveinindate").datebox('getValue');
	
	//copyreturnValue.currentColumn=_currentGridColumns;
	_isEarNumberDialogShow=true;
	CloseWin("frmCommonEarNumber");
} 

var currnetRowIndex;
var _currentGridColumns;
var copyreturnValue={};


var _accountID;  
/**
 * 选择周次
 * @param companyID      核算单位ID
 * @param dataStart      开始时间
 * @param dataEnd        结束时间
 * @param callbackClose  回调函数
 * 
 */
function openCommonCopyPurchasePlanDialog(companyid, accountid, billtypeid, plantypeid, callbackReturnData) { 
	_companyID = companyid;
	_accountID = accountid;
	_billTypeID = billtypeid;
	_planTypeID = plantypeid;
	_dialogOk=false;
	var vhref="../util/OpenCopyPurchasePlanSelect";	
	$("<div/>").dialog({
		id : "CommonCopyPurchasePlanDialog",
		href : vhref,
		title : '复制计划',
		height : 500,
		width : 800, 
		maximizable:true,
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonCopyPurchasePlanDialog");
		},
		onDestroy: function() { 
			if(_dialogOk){
				callbackReturnData(_SelectWeekJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonCopyPurchasePlanDialog').panel('options').top<0){
				$('#CommonCopyPurchasePlanDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
} 
 
/**
 * 选择月采购计划
 * @param companyID      公司ID
 * @param companyname    公司name 
 * @param callbackClose  回调函数
 * 
 */
function OpenCommonPayPlanSelect(accountid, accoundname, callbackReturnData) { 
	_accountID = accountid; 
	_accoundName = accoundname;
	_dialogOk=false;
	var vhref="../util/OpenPayPlanSelect";	
	$("<div/>").dialog({
		id : "CommonPayPlanDialog",
		href : vhref,
		title : '选择月付款计划',
		height : 500,
		width : 800, 
		maximizable:true,
		maximized:true,		
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonPayPlanDialog");
		},
		onDestroy: function() { 
			if(_dialogOk){
				callbackReturnData(_SelectWeekJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonPayPlanDialog').panel('options').top<0){
				$('#CommonPayPlanDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
} 

var _accountName;
/**
 * 选择供应商余额
 * @param companyID      公司ID
 * @param companyname    公司name 
 * @param companyID      公司ID
 * @param companyname    公司name 
 * @param callbackClose  回调函数
 * 
 */
function OpenCommonBalanceSelect(companyid, companyname, accountunitid, accountunitshortname, callbackReturnData) { 
	_companyID = companyid; 
	_companyName = companyname;
	_accountID = accountunitid;
	_accountName = accountunitshortname;
	_dialogOk=false;
	var vhref="../util/OpenBalanceSelect";	
	$("<div/>").dialog({
		id : "CommonSupplyBalanceDialog",
		href : vhref,
		title : '选择供应商余额',
		height : 500,
		width : 800, 
		maximizable:true,
		modal : true,
		onOpen: function () {
			try{
				if(isExitsFunction("SetPigResize")){
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onClose : function() {
			CloseWin("CommonSupplyBalanceDialog");
		},
		onDestroy: function() { 
			if(_dialogOk){
				callbackReturnData(_SelectWeekJson);
			}
		},
		onMove:function(left,top){
			if($('#CommonSupplyBalanceDialog').panel('options').top<0){
				$('#CommonSupplyBalanceDialog').dialog('move',{      
	                    left:left,      
	                    top:0      
	              });  
			}
		},
		onMaximize:function(){  
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onRestore:function(){    
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}	
			}catch(e){
				
			}
		},
		onResize:function(){   
			try{
				if(isExitsFunction("SetPigResize"))
				{
					SetPigResize(); 
				}		
			}catch(e){
				
			}
		}
	});
}
	/**
	 * 药品到货验收画面
	 */
	var _DrugArrivalJson;
	function OpenCommonDrugArrivalDialog(fproviderid,fprovidershortname,faccountunitid,faccountname,callbackSowReturnData) {
		_dialogOk=false;
		_companyID=fproviderid;
		_companyName=fprovidershortname;
		_accountID=faccountunitid;
		_accountName=faccountname;
		var vhref="../util/OpenCommonDrugArrivalSelect";	
		$("<div/>").dialog({
			id : "CommonDrugArrivalDialog",
			href : vhref,
			title : '药品到货选择',
			height :500,
			width : 1200,
			maximizable:true,
			maximized:true,	
			modal : true,
			onOpen: function(){
				try{
					if(isExitsFunction("SetDrugResize")){
						SetDrugResize(); 
					}	
				}catch(e){
					
				}
			},
			onClose : function(){
				CloseWin("CommonDrugArrivalDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_DrugArrivalJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonDrugArrivalDialog').panel('options').top<0){
					$('#CommonDrugArrivalDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			},
			onMaximize:function(){  
				try{
					if(isExitsFunction("SetDrugResize"))
					{
						SetDrugResize(); 
					}	
				}catch(e){
					
				}
			},
			onRestore:function(){    
				try{
					if(isExitsFunction("SetDrugResize"))
					{
						SetDrugResize(); 
					}	
				}catch(e){
					
				}
			},
			onResize:function(){   
				try{
					if(isExitsFunction("SetDrugResize"))
					{
						SetDrugResize(); 
					}		
				}catch(e){
					
				}
			}
		});
	}

	/**
	 * 销售出库单选择画面
	 */
	var _salDVJson;
	function OpenCommonSalDVDialog(companyid,companyname,billtypeid,callbackSowReturnData) {
		_dialogOk=false;
		_companyID=companyid;
		_companyName=companyname;
		_billType=billtypeid;
		var vhref="../util/OpenCommonSalDVSelect";	
		$("<div/>").dialog({
			id : "CommonSalDVDialog",
			href : vhref,
			title : '销售出库单选择',
			height :500,
			width : 1200,
			maximized:false,
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonSalDVDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_salDVJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonSalDVDialog').panel('options').top<0){
					$('#CommonSalDVDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	
	var _yearPeriod;
	/**
	 * 材料明细账画面
	 * @param	faccountunitid 核算单位
	 * @param	faccountunitshortname 核算单位name
	 * @param   fyearperiod  年月
	 * @param	materielType 采购分类
	 * @param	depotType    仓库类型
	 * @param	callbackSowReturnData 回调函数
	 */
	var _MaterielAccountJson;
	function OpenCommonMaterielAccountDialog(faccountunitid,faccountunitshortname,fyearperiod,materielType,depotType,callbackSowReturnData) {
		_dialogOk=false;
		_accountunitID=faccountunitid;
		_accountunitshortName=faccountunitshortname;
		_materielType=materielType;
		_yearPeriod=fyearperiod;
		_depotType = depotType;
		var vhref="../util/OpenCommonMaterielAccountSelect";	
		$("<div/>").dialog({
			id : "CommonMaterielAccountDialog",
			href : vhref,
			title : '材料明细账选择',
			height :500,
			width : 1200,
			maximizable:true,
			maximized:true,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonMaterielAccountDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_MaterielAccountJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonMaterielAccountDialog').panel('options').top<0){
					$('#CommonMaterielAccountDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}

	
	/**
	 * 复制画面
	 * @FCompanyID BIGINT,
	 * @FSourceYearPeriod VARCHAR(7),
	 * @FTargetYearPeriod VARCHAR(7),
	 * @FUserName VARCHAR(255)
	 */
	function OpenCommonCopySalePricePolicy() {
		_dialogOk=false;
		var vhref="../util/OpenCommonCopySalePricePolicySelect";	
		$("<div/>").dialog({
			id : "CommonCopySalePricePolicy",
			href : vhref,
			title : '复制',
			height :200,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonCopySalePricePolicy");
			},
			onDestroy: function(){
				/*if(_dialogOk){
					callbackSowReturnData(_MaterielAccountJson);
				}*/
			},
			onMove:function(left,top){
				if($('#CommonCopySalePricePolicy').panel('options').top<0){
					$('#CommonCopySalePricePolicy').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}

	/**
	 * 复制饲料周采购计划
	 * @param accountname  核算单位
	 */ 
	function ShowCopyWeekFodderPlanDialog(billtypeid,companyid,companyshortname,deptid,accountid,accountname,callbackReturnData){
		_isWeekFodderDialogShow=false;
		//系统操作项
		$("<div/>").dialog({
			id : "frmCommonCopyWeekFodderPlan",
			href : "../jsp/common/frmCommonCopyWeekFodderPlan.jsp",
			title : "复制",
			height : 250,
			width : 500,
			modal : true,
			closable:false,
			onLoad: function () {
				$("#billtypeid").val(billtypeid);
				$("#companyid").val(companyid);
				$("#companyshortname").val(companyshortname);
				$("#deptid").val(deptid);
				$("#accountid").val(accountid);
				$("#accountname").val(accountname);
	        },
			onClose : function() {
				CloseWin('frmCommonCopyWeekFodderPlan');
			},
			onDestroy: function() {
				if(_isWeekFodderDialogShow){
					callbackReturnData(copyreturnValue);
				}
			},
			onMove:function(left,top){
				if($('#frmCommonCopyWeekFodderPlan').panel('options').top<0){
					$('#frmCommonCopyWeekFodderPlan').dialog('move',{
		                    left:left,      
		                    top:0      
		              });  
				}
			}
		});
	}
	
	/**
	 * 复制月采购计划
	 * @param accountname  核算单位
	 */ 
	function ShowCopyMonthPlanDialog(billtypeid,companyid,companyshortname,deptid,accountid,accountname,callbackReturnData){
		_isMonthPlanDialogShow=false;
		//系统操作项
		$("<div/>").dialog({
			id : "frmCommonCopyMonthPlan",
			href : "../jsp/common/frmCommonCopyMonthPlan.jsp",
			title : "复制",
			height : 200,
			width : 310,
			modal : true,
			closable:false,
			onLoad: function () {
				$("#billtypeid").val(billtypeid);
				$("#companyid").val(companyid);
				$("#companyshortname").val(companyshortname);
				$("#deptid").val(deptid);
				$("#accountid").val(accountid);
				$("#accountname").val(accountname);
	        },
			onClose : function() {
				CloseWin('frmCommonCopyMonthPlan');
			},
			onDestroy: function() {
				if(_isMonthPlanDialogShow){
					callbackReturnData(copyreturnValue);
				}
			},
			onMove:function(left,top){
				if($('#frmCommonCopyMonthPlan').panel('options').top<0){
					$('#frmCommonCopyMonthPlan').dialog('move',{
		                    left:left,      
		                    top:0      
		              });  
				}
			}
		});
	}
	
	
	/**
	 * 成本项目选择画面
	 */
	var _CostItemJson;
	function OpenCommonCostItemDialog(callbackSowReturnData) {
		_dialogOk=false;
		var vhref="../util/OpenCommonCostItemSelect";	
		$("<div/>").dialog({
			id : "CommonCostItemDialog",
			href : vhref,
			title : '成本项目选择',
			height :500,
			width : 1200,
			maximized:true,
			maximizable:true,
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonCostItemDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_CostItemJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonCostItemDialog').panel('options').top<0){
					$('#CommonCostItemDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}

var _SymptomJson;
	/**
	 * 选择疾病症状
	 * @param companyID
	 * @param companyName
	 * @param dateJson
	 * @param optionName
	 * @param titleName
	 * @param callbackReturnData
	 */
	function OpenCommonSymptomSelect(companyID,companyName,isSingleSelect,callbackReturnData) {
		_dialogOk=false;
		//_companyID=companyID;
		//_companyName=companyName;
		_isSingleSelect=isSingleSelect;
		var vhref="../util/OpenCommonSymptomSelect";	
		$("<div/>").dialog({
			id : "CommonSymptomDialog",
			href : vhref,
			title : "选择疾病症状",
			height :550,
			width : 1200,
			maximizable:false,
			maximized:true,	
			minimizable:false,
			modal : true,		
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonSymptomDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackReturnData(_SymptomJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonSymptomDialog').panel('options').top<0){
					$('#CommonSymptomDialog').dialog('move',{      
		                    left:left,      
		                    top:0      
		              });  
				}
			},
			onMaximize:function(){  
				try{
					if(isExitsFunction("SetSymptomResize")){
						SetSymptomResize(); 
					}	
				}catch(e){
				}
			},
			onRestore:function(){    
				try{
					if(isExitsFunction("SetSymptomResize")){
						SetSymptomResize(); 
					}	
				}catch(e){
				}
			},
			onResize:function(){   
				try{
					if(isExitsFunction("SetSymptomResize")){
						SetSymptomResize(); 
					}		
				}catch(e){
				}
			}
		});
	}
	
	var _ImportJson;
	/**
	 * 导入excel--引种记录
	 * @param companyID
	 * @param companyName
	 * @param dateJson
	 * @param optionName
	 * @param titleName
	 * @param callbackReturnData
	 */
	function openImportExcelDialog(callbackReturnData) {
		_dialogOk=false;  
		var vhref="../proc/LeadSowRocord/ImportSowBaseInfo";	
		$("<div/>").dialog({
			id : "frmProcSowBaseInfoImport",
			href : vhref,
			title : "引种数据导入",
			height :120,
			width : 900,
			maximizable:false,
			maximized:false,	
			minimizable:false,
			modal : true,		
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("frmProcSowBaseInfoImport");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackReturnData(_ImportJson);
				}
			},
			onMove:function(left,top){
				if($('#frmProcSowBaseInfoImport').panel('options').top<0){
					$('#frmProcSowBaseInfoImport').dialog('move',{      
		                    left:left,      
		                    top:0      
		              });  
				}
			} 
		});
	}
	
	var chickenBatch;
	/**
	 * 显示鸡舍，批次小画面
	 * @param accountid 核算单位ID
	 * @param accountname 核算单位
	 * @param 
	 */ 
	function ShowChickenBatchSelectDialog(accountid,accountname,singleSelect,callbackReturnData){
		_accountID = accountid;
		_accountName = accountname;
		_isSingleSelect = singleSelect;
		_ChickenBatchSelect = false;
		var vhref="../util/OpeChickenBatchSelect";
		//系统操作项
		$("<div/>").dialog({
			id : "frmChickenBatchSelect",
			//href : "../jsp/common/frmCommonSetMonoid.jsp",
			href : vhref,
			title : "选择鸡群信息",
			height : 500,
			width : 1036,
			modal : true,
			closable:false,
			onLoad: function () {
				chickenBatch="";
	        },
			onClose : function() {
				CloseWin('frmChickenBatchSelect');
			},
			onDestroy: function() {
				if(_ChickenBatchSelect){
					callbackReturnData(chickenBatch);
				}
			},
			onMove:function(left,top){
				if($('#frmChickenBatchSelect').panel('options').top<0){
					$('#frmChickenBatchSelect').dialog('move',{
		                    left:left,      
		                    top:0      
		              });  
				}
			}
		});
	}	
	var eggAccount;
	/**
	 * 显示鸡蛋库存帐
	 * @param faccountunitid 核算单位ID
	 * @param fdepotid 仓库
	 * @param singleSelect 是否单选
	 */ 
	function ShowEggAccountDialog(faccountunitid,singleSelect,callbackReturnData){
		_accountunitid = faccountunitid;
		_isSingleSelect = singleSelect;
		_dialogOk=false;
		var vhref="../util/OpeEggAccountSelect";
		//系统操作项
		$("<div/>").dialog({
			id : "frmEggAccountSelect",
			href : vhref,
			title : "选择鸡蛋库存帐",
			height : 500,
			width : 1036,
			modal : true,
			closable:false,
			onLoad: function () {
				chickenBatch="";
			},
			onClose : function() {
				CloseWin('frmEggAccountSelect');
			},
			onDestroy: function() {
				if(_dialogOk){
					callbackReturnData(eggAccount);
				}
			},
			onMove:function(left,top){
				if($('#frmEggAccountSelect').panel('options').top<0){
					$('#frmEggAccountSelect').dialog('move',{
						left:left,      
						top:0      
					});  
				}
			}
		});
	}	
	
	//返回鸡群Json数据
	var _ChickenBaseInfoJson;
	/**
	 * 选择种猪管理画面
	 * @param orgID    组织ID
	 * @param orgName  组织
	 * @param callbackClose 回调函数 
	 */
	function openCommonChickenBaseInfoDialog(orgID,orgName,callbackReturnData) {
		_orgID=orgID;
		_orgName=orgName;
		_dialogOk=false;
		var vhref="../util/OpenCommonChickenBaseInfoSelect";	
		$("<div/>").dialog({
			id : "CommonChickenBaseInfoDialog",
			href : vhref,
			title : '鸡群选择',
			height : 500,
			width : 1200,
			maximized:true, 
			modal : true,
			onOpen: function () {
				try{
					if(isExitsFunction("SetChickenResize")){
						SetPigResize(); 
					}	
				}catch(e){
				}
			},
			onClose : function() {
				CloseWin("CommonChickenBaseInfoDialog");
			},
			onDestroy: function() {
				if(_dialogOk){
					callbackReturnData(_ChickenBaseInfoJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonChickenBaseInfoDialog').panel('options').top<0){
					$('#CommonChickenBaseInfoDialog').dialog('move',{      
		                    left:left,      
		                    top:0      
		              });  
				}
			},
			onMaximize:function(){  
				try{
					if(isExitsFunction("SetChickenResize")){
						SetPigResize(); 
					}	
				}catch(e){
				}
			},
			onRestore:function(){    
				try{
					if(isExitsFunction("SetChickenResize")){
						SetPigResize(); 
					}	
				}catch(e){
				}
			},
			onResize:function(){   
				try{
					if(isExitsFunction("SetChickenResize")){
						SetPigResize(); 
					}		
				}catch(e){
				}
			}
		});
	}	
	
	
	/**
	 * 选择周龄
	 */
	var _WeekAge;
	function OpenCommonWeekAgeDialog(callbackSowReturnData) {
		_dialogOk=false;
		var vhref="../util/OpenCommonWeekAgeSelect";	
		$("<div/>").dialog({
			id : "CommonWeekAgeDialog",
			href : vhref,
			title : '批量新增周龄',
			height :200,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonWeekAgeDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_WeekAge);
				}
			},
			onMove:function(left,top){
				if($('#CommonWeekAgeDialog').panel('options').top<0){
					$('#CommonWeekAgeDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	/**
	 * 新增周龄
	 */
	var _AddWeekAge;
	function OpenCommonAddWeekAgeDialog(datagridID,callbackSowReturnData) {
		_dialogOk=false;
		_datagridID=datagridID;
		var vhref="../util/OpenCommonAddWeekAgeSelect";	
		$("<div/>").dialog({
			id : "CommonAddWeekAgeDialog",
			href : vhref,
			title : '新增周龄',
			height :200,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonAddWeekAgeDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_AddWeekAge);
				}
			},
			onMove:function(left,top){
				if($('#CommonAddWeekAgeDialog').panel('options').top<0){
					$('#CommonAddWeekAgeDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	
	/**
	 * 复制体重
	 */
	var _weight; 
	var _beginweekAge; 
	var _endweekAge;
	function OpenCommoncopyWeightDialog(callbackSowReturnData) {
		_dialogOk=false;
		var vhref="../util/OpenCommoncopyWeightSelect";	
		$("<div/>").dialog({
			id : "CommoncopyWeightDialog",
			href : vhref,
			title : '复制体重',
			height :300,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommoncopyWeightDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_weight,_beginweekAge,_endweekAge);
				}
			},
			onMove:function(left,top){
				if($('#CommoncopyWeightDialog').panel('options').top<0){
					$('#CommoncopyWeightDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	/**
	 * 复制采食量
	 */
	var _foodsAmount; 
	var _beginweekAge; 
	var _endweekAge;
	var _foodsType;
	var _fmaterielid;
	var _fmaterielname;
	function OpenCommoncopyFoodsAmountDialog(callbackSowReturnData) {
		_dialogOk=false;
		var vhref="../util/OpenCommoncopyFoodsAmountSelect";	
		$("<div/>").dialog({
			id : "CommoncopyFoodsAmountDialog",
			href : vhref,
			title : '复制采食量',
			height :300,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommoncopyFoodsAmountDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_foodsType,_foodsAmount,_beginweekAge,_endweekAge,_fmaterielid,_fmaterielname);
				}
			},
			onMove:function(left,top){
				if($('#CommoncopyFoodsAmountDialog').panel('options').top<0){
					$('#CommoncopyFoodsAmountDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	/**
	 * 复制标准环境数据
	 */
	var _TemperatureStandard; 
	var _HumidityStandard; 
	var _LightIntensityStandard;
	var _LIghtTimeStandard;
	var _beginweekAge; 
	var _endweekAge;
	function OpenCommoncopyEnvironmentStandardDialog(callbackSowReturnData) {
		_dialogOk=false;
		var vhref="../util/OpenCommoncopyEnvironmentStandardSelect";	
		$("<div/>").dialog({
			id : "CommoncopyEnvironmentStandardDialog",
			href : vhref,
			title : '复制标准环境数据',
			height :300,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommoncopyEnvironmentStandardDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_TemperatureStandard,_HumidityStandard,_LightIntensityStandard,_LIghtTimeStandard,_beginweekAge,_endweekAge);
				}
			},
			onMove:function(left,top){
				if($('#CommoncopyEnvironmentStandardDialog').panel('options').top<0){
					$('#CommoncopyEnvironmentStandardDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	/**
	 * 复制产蛋率
	 */
	var _EggRate; 
	var _beginweekAge; 
	var _endweekAge;
	function OpenCommoncopyEggRateDialog(callbackSowReturnData) {
		_dialogOk=false;
		var vhref="../util/OpenCommoncopyEggRateSelect";	
		$("<div/>").dialog({
			id : "CommoncopyEggRateDialog",
			href : vhref,
			title : '复制产蛋率',
			height :300,
			width : 350,
			maximizable:true,
			maximized:false,	
			modal : true,
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommoncopyEggRateDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackSowReturnData(_EggRate,_beginweekAge,_endweekAge);
				}
			},
			onMove:function(left,top){
				if($('#CommoncopyEggRateDialog').panel('options').top<0){
					$('#CommoncopyEggRateDialog').dialog('move',{      
						left:left,      
						top:0      
					});  
				}
			}
		});
	}
	/**
	 * 选择处方编码
	 * @param fprescriptionid 处方ID
	 * @param callbackReturnData
	 */
	var _PrescriptioncodeJson;
	function OpenCommonPrescriptioncodeSelect(faccountunitid,faccountunitshortname,callbackReturnData) {
		_dialogOk=false;
		_faccountunitid=faccountunitid;
		_faccountunitshortname=faccountunitshortname;
		var vhref="../util/OpenCommonPrescriptioncodeSelect";	
		$("<div/>").dialog({
			id : "CommonPrescriptioncodeDialog",
			href : vhref,
			title : "处方编码选择",
			height : 500,
			width : 1200,
			modal : true,
			maximizable:true,
			maximized:true,	
			onOpen: function(){
			},
			onClose : function(){
				CloseWin("CommonPrescriptioncodeDialog");
			},
			onDestroy: function(){
				if(_dialogOk){
					callbackReturnData(_PrescriptioncodeJson);
				}
			},
			onMove:function(left,top){
				if($('#CommonPrescriptioncodeDialog').panel('options').top<0){
					$('#CommonPrescriptioncodeDialog').dialog('move',{      
		                    left:left,      
		                    top:0      
		              });  
				}
			}
		});
	}
	