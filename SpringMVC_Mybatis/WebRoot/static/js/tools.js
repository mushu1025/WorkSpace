/*
获取当前日期
根据传递的日期时间格式 格式化当前时间
*/
Date.prototype.Format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

var varcharOperatorData = new Array();
varcharOperatorData.push({ "id": "in" ,"text":"包含"});
varcharOperatorData.push({ "id": "=" ,"text":"等于"});
varcharOperatorData.push({ "id": ">" ,"text":"大于"});
varcharOperatorData.push({ "id": ">=" ,"text":"大于等于"});
varcharOperatorData.push({ "id": "<" ,"text":"小于"});
varcharOperatorData.push({ "id": "<=" ,"text":"小于等于"});
varcharOperatorData.push({ "id": "<>" ,"text":"不等于"});

var operatorData = new Array(); 
operatorData.push({ "id": "=" ,"text":"等于"});
operatorData.push({ "id": ">" ,"text":"大于"});
operatorData.push({ "id": ">=" ,"text":"大于等于"});
operatorData.push({ "id": "<" ,"text":"小于"});
operatorData.push({ "id": "<=" ,"text":"小于等于"});
operatorData.push({ "id": "<>" ,"text":"不等于"});

//取得日期是周几
//参照：http://zhidao.baidu.com/link?url=Wfn56Q_6O70cL7tVMxT-KmAjOXoCTMWuEAgPTbX5QqkVOLkAG76Y9mQIBglew3gwSQezrqHIIB9RUSG1S-Fx1UY2wuDcWWMgUzXn9e8_YTS
Date.prototype.GetWeekDay = function () {
	//var week = "周" + "日一二三四五六".split("")[new Date().getDay()];
    return Number("0123456".split("")[this.getDay()]);
}; 


// 得到日期年月日等加数字后的日期   http://www.cnblogs.com/cuixiping/archive/2008/11/16/1334510.html dateAdd 方法
Date.prototype.dateAdd = function(interval,number) 
{ 
    var d = this; 
    var k={'y':'FullYear', 'q':'Month', 'm':'Month', 'w':'Date', 'd':'Date', 'h':'Hours', 'n':'Minutes', 's':'Seconds', 'ms':'MilliSeconds'}; 
    var n={'q':3, 'w':7}; 
    eval('d.set'+k[interval]+'(d.get'+k[interval]+'()+'+((n[interval]||1)*number)+')'); 
    return d; 
}; 

// 计算两日期相差的日期年月日等      http://www.cnblogs.com/cuixiping/archive/2008/11/16/1334510.html
Date.prototype.dateDiff = function(interval,objDate2) 
{ 
    var d=this, i={}, t=d.getTime(), t2=objDate2.getTime(); 
    i['y']=objDate2.getFullYear()-d.getFullYear(); 
    i['q']=i['y']*4+Math.floor(objDate2.getMonth()/4)-Math.floor(d.getMonth()/4); 
    i['m']=i['y']*12+objDate2.getMonth()-d.getMonth(); 
    i['ms']=objDate2.getTime()-d.getTime(); 
    i['w']=Math.floor((t2+345600000)/(604800000))-Math.floor((t+345600000)/(604800000)); 
    i['d']=Math.floor(t2/86400000)-Math.floor(t/86400000); 
    i['h']=Math.floor(t2/3600000)-Math.floor(t/3600000); 
    i['n']=Math.floor(t2/60000)-Math.floor(t/60000); 
    i['s']=Math.floor(t2/1000)-Math.floor(t/1000); 
    return i[interval]; 
};

//日期格式化
function formattime(value) {
	if (value == undefined) {
		return "";
	}
	var d=new Date(value);
	
	var year=d.getFullYear();     
    var month=d.getMonth()+1;     
    var date=d.getDate();     
    var hour=d.getHours();     
    var minute=d.getMinutes();     
    var second=d.getSeconds();     
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;     
}

//日期格式化
function DateTimeStamp2String(time){
	if(time != null && $.trim(time.toString())!=""){
	    var datetime = new Date();
	    datetime.setTime(time);
	    var year = datetime.getFullYear();
	    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
	    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
	    return year + "-" + month + "-" + date+" "+hour+":"+minute;
	}else{
		return "";
	}
}

//日期格式化
function DateTimeStamptoYMD(time){
	//alert("timetype:"+$.type(time));
	/*var arys = time.toString().split("-");
    if (arys.length == 3) {
    	alert("arys.length:"+arys.length);
        var d = new Date(arys[0], arys[1], arys[2]);
        return d.getTime();
    }
    else{
		var datetime = new Date();
		datetime.setTime(time);
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
		var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		//alert(year + "-" + month + "-" + date);
		return year + "-" + month + "-" + date;
    }*/
	if(time==null || $.trim(time.toString())=="")
	{
		return "";
	}
    
	var arys = time.toString().split("-");
    if (arys.length == 3) {
    	return time.toString();
    }
    else{ 
    	 var datetime = new Date();
		datetime.setTime(time);
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
		var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		//alert(year + "-" + month + "-" + date);
		return year + "-" + month + "-" + date;
    	
    }
   
}

//日期格式化YYYY-MM
function DateTimeStamptoYM(time){
	if(time==null || $.trim(time.toString())=="")
	{
		return "";
	}
    
	var arys = time.toString().split("-");
    if (arys.length == 3) {
    	return time.toString();
    }
    else{ 
    	 var datetime = new Date();
		datetime.setTime(time);
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
		var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		//alert(year + "-" + month + "-" + date);
		return year + "-" + month;
    }
}
//日期格式化 
function DateTimeStamp3String(controlName){
	//http://www.cnblogs.com/sanshi/archive/2009/08/28/1555717.html
	if($("#"+controlName).val().indexOf("CST")==-1){
		 $("#"+controlName).val(DateTimeStamp2String(new Date(Date.parse($("#"+controlName).val()))));
	} 
	else{
		var DateTime =new Date($("#"+controlName).val());
		DateTime=DateTime.dateAdd("h",-14);
		$("#"+controlName).val(DateTime.Format("yyyy-MM-dd hh:mm"));
	}
}

//日期格式化 
function DateTimeStampYMD(controlName){
	//http://www.cnblogs.com/sanshi/archive/2009/08/28/1555717.html
	if($("#"+controlName).val().indexOf("CST")==-1){
		 $("#"+controlName).val(DateTimeStamp2String(new Date(Date.parse($("#"+controlName).val()))));
	} 
	else{
		var DateTime =new Date($("#"+controlName).val());
		DateTime=DateTime.dateAdd("h",-14);
		$("#"+controlName).val(DateTime.Format("yyyy-MM-dd"));
	}
}

//checkBox 根据值选中
function SetCheckBoxValue(controlName,value){
	//值判断1:选中0：不选中
	if (value=="1"){
//	      $("#"+controlName).attr("checked","true");
		$("#"+controlName).prop("checked",true);
	}
	else{
		$("#"+controlName).removeAttr("checked");
	} 
}

/**
 * 两个时间差方法
 * @param day1 开始时间
 * @param day2 结束时间
 * @returns
 */
function CalcDate(day1, day2){
    var y1, y2, y3, m1, m2, m3, d1, d2, d3, h1, h2, h3, _m1, _m2, _m3, s1, s2, s3;
    var reg = /年|月|日 |\/|:| /;
    //dayinfo -  用正则分割
    var DI1 = day1.split(reg);
    var DI2 = day2.split(reg);

    var date1 = new Date(DI1[0], DI1[1], DI1[2], DI1[3], DI1[4], DI1[5]);
    var date2 = new Date(DI2[0], DI2[1], DI2[2], DI2[3], DI2[4], DI2[5]);
    //用距标准时间差来获取相距时间
    var minsec = Date.parse(date1) - Date.parse(date2);
    var second = minsec / 1000 ; //factor: second / minute / hour / day
    var minute= minsec/1000/ 60 ;
    var hour= minsec/1000/ 60 / 60;
    var day =minsec/1000/ 60 / 60 / 24;
    return day;
}

/**
 * 两个时间差方法
 * @param timeDifference 时间差
 * @returns 返回天数
 */
function CalcTimeDifference(timeDifference){
	var second = timeDifference / 1000 ;
    var minute= timeDifference/1000/ 60 ;
    var hour= timeDifference/1000/ 60 / 60;
    var day =timeDifference/1000/ 60 / 60 / 24;
    return day;
}

//取得系統時間 yyyy-MM-dd hh:mm
function  GetSystemDateTime()
{
	return new Date().Format("yyyy-MM-dd hh:mm");
}

//取得上个月时间 yyyy-MM
function GetFinanceDate(){
	var datetime=new Date;
	if(datetime.getDate()<25){
		datetime.setMonth(datetime.getMonth() - 1);
	}
   	return  DateTimeStamptoYM(datetime);
}

//取得系統時間 yyyy-MM-dd
function  GetSystemDate()
{
	return new Date().Format("yyyy-MM-dd");
}

//取得系統年月yyyy-MM
function  GetSystemYearMonth()
{
	return new Date().Format("yyyy-MM");
}

function  GetSystemYearUpMonth()
{
	return new Date().Format("yyyy-MM");
}

//取得系統年 yyyy
function  GetSystemYear()
{
	return new Date().Format("yyyy");
}


//Grid中是否包含重复数据
function IsGridContainData(controlName,colName,iputdata)
{
	var isIsContain=false;
	var rows=$('#'+controlName).datagrid('getRows');
	$.each(rows,function(n,row) {
		for(rowName in row){
			if(rowName==colName && row[rowName]==iputdata){
				isIsContain=true;
			}
		}
	});
	return isIsContain;
}


//Grid中是否包含重复数据
function IsGridContainData2(controlName,colName1,iputdata1,colName2,iputdata2)
{
	var isIsContain1=false;
	var isIsContain=false;
	var rows=$('#'+controlName).datagrid('getRows');
	$.each(rows,function(n,row) {
		for(rowName in row)
		{
			if(rowName==colName1 && row[rowName]==iputdata1)
			{
				isIsContain1=true;
			}
			
			if(rowName==colName2 && row[rowName]==iputdata2 && isIsContain1)
			{
				isIsContain=true;
				break;
			}
		}
		isIsContain1=false;
	});
	return isIsContain;
}


//Grid中是否包含重复数据
function IsGridContainData3(controlName,colName1,iputdata1,colName2,iputdata2,colName3,iputdata3)
{
	var isIsContain=false;
	var rows=$('#'+controlName).datagrid('getRows');
	$.each(rows,function(n,row) {
		if(row[colName1]==iputdata1 && row[colName2]==iputdata2 &&  row[colName3]==iputdata3){
			isIsContain=true;
		}
	});
	return isIsContain;
}


//Grid中是否包含重复数据
function IsGridContainDataWithoutSesf1(controlName,index,colName1,iputdata1)
{
	var isIsContain=false;
	var rows=$('#'+controlName).datagrid('getRows');
	$.each(rows,function(n,row) {
		if(index!=n){
			if(row[colName1]==iputdata1){
				isIsContain=true;
			}
		}
	});
	return isIsContain;
}

//Grid中是否包含重复数据
function IsGridContainDataWithoutSesf3(controlName,index,colName1,iputdata1,colName2,iputdata2,colName3,iputdata3)
{
	var isIsContain=false;
	var rows=$('#'+controlName).datagrid('getRows');
	$.each(rows,function(n,row) {
		if(index!=n){
			if(row[colName1]==iputdata1 && row[colName2]==iputdata2 &&  row[colName3]==iputdata3){
				isIsContain=true;
			}
		}
	});
	return isIsContain;
}


//设定菜单功能操作功能
function SetUserAppOperation(fApplicationID)
{
	//'<a  onclick="return Query()"     href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-query">检索</a>'
	//'<a  onclick="return Add()"       href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-add">新增</a>' 
	//'<a  onclick="return Save()"      href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-save">保存</a>' 
	//'<a  onclick="return Delete()"    href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="icon-delete">删除</a>'
	var operationSource='<a id="idReplace" onclick="return functionReplace"     href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconcls="iconReplace">textReplace</a>';
	var operationString="";
	$.ajax({
        type: "POST",
        url:"../sys/Application/GetUserAppOperation",
        data:{"fapplicationid":fApplicationID},
        async:false,
        success: function (result) {
        	var data = JSON.parse(result);
        	$.each(data,function(n, value) {
        		var operationData="";
        		operationData=operationSource.replace("functionReplace",value.frassemblymame);
        		operationData=operationData.replace("idReplace",value.fresourcesname);
        		operationData=operationData.replace("iconReplace",value.fresourcesname);
        		operationData=operationData.replace("textReplace",value.foperationname);
				//操作字符串
        		operationString=operationString+operationData;
        	});
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           $.messager.alert('系统提示', "请联系管理员，系统错误。", 'error');
       }
	 });
	 $("#divopreation").append(operationString);
	 //画面重新渲染
	 $.parser.parse();
}
//--------------------------------一般公共检索条件--------------------------------------
var _CommonConditionOptions;

//组织是否显示           IsShowOrg     
var _IsShowOrg=false;
//组织数据参数    orgDateField         
var _orgDateField="";
//部门是否显示           IsShowDept     
var _IsShowDept=false;
//部门数据字段    DeptDateField         
var _DeptDateField="";
//部门默认值   deptDataPar
var _DeptDataPar="";
//日期是否显示           IsShowDate     
var _IsShowDate=false;
//日期参数名称     conditionDateField  
var _conditionDateField="";
//财务年月是否显示   isShowAccountDate
var _isShowAccountDate=false;   
//财务年月数据参数    accountDateField
var _accountDateField=""; 
/**
 * 一般检索控件
 * @param 组织是否显示       isShowOrg
 * @param 组织类型          orgType
 * @param 组织数据参数       orgDateField
 * @param 组织默认数据       orgDatePar
 * @param 部门是否显示       isShowDept
 * @param 部门数据参数       deptDataField
 * @param 部门默认数据       deptDataPar
 * @param 日期是否          isShowDate
 * @param 独立日期是否独立     isShowSingleDate
 * @param 周次是否          isShowWeek
 * @param 周次开始日期        weekBeginDataField
 * @param 周次结束日期        weekEndDataField
 * @param 日期显示名称        conditionDateName
 * @param 日期参数名称        conditionDateField
 * @param 财务年月是否显示     isShowAccountDate
 * @param 财务年月独立          isShowSingleAccountDate
 * @param 财务年月数据参数     accountDateField
 * 
 */
//function  SetCommonCondition(isShowOrg,orgType,orgDateField,orgDatePar,isShowDate,conditionDateShowName,conditionDateField,IsShowAccountDate,accountDateField,callbackFuc)
//function  SetCommonCondition(isShowOrg,orgType,orgDateField,orgDatePar,isShowDate,conditionDateShowName,conditionDateField,IsShowAccountDate,accountDateField,callbackFuc)
function  SetCommonCondition(options,callbackFuc)
{
	/*//组织是否显示           IsShowOrg     
	_IsShowOrg=isShowOrg;
	//组织数据参数    orgDateField         
	_orgDateField=orgDateField;
	//日期是否显示               
	_IsShowDate=isShowDate;
	//日期参数名称     conditionDateField  
	_conditionDateField=conditionDateField;
	//财务年月是否显示   isShowAccountDate
	_isShowAccountDate=IsShowAccountDate;   
	//财务年月数据参数    accountDateField
	_accountDateField=accountDateField; */
	
	
	_CommonConditionOptions=options;
	
	/*//组织是否显示           IsShowOrg     
	_IsShowOrg=options.isShowOrg;
	//组织数据参数    orgDateField         
	_orgDateField=options.orgDateField;
	//部门是否显示           IsShowDept     
	_IsShowDept=options.isShowDept;
	//部门数据参数    DeptDateField         
	_DeptDateField=options.deptDataField;
	//部门数据参数    deptDataPar         
	_DeptDataPar=options.deptDataPar;
	//日期是否显示               
	_IsShowDate=options.isShowDate;
	//日期参数名称     conditionDateField  
	_conditionDateField=options.conditionDateField;
	//财务年月是否显示   isShowAccountDate
	_isShowAccountDate=options.IsShowAccountDate;   
	//财务年月数据参数    accountDateField
	_accountDateField=options.accountDateField; */
	
	//组织检索
	var conditionOrg ='<div class="condition_div" >'+
				'	<div class="conditionText" >conditionOrgShowName:</div>'+
				'	<div class="conditionInput">'+
				'		<select id="cboUserManageOrg" name="cboUserManageOrg" class="easyui-combobox" style="width: 200px;"></select>'+
				'	</div>'+
					'  </div>'; 
	// 组织是否显示        IsShowOrg 核算单位:
	if(_CommonConditionOptions.isShowOrg){
		if(_CommonConditionOptions.conditionOrgShowName){
			$("#condition").append(conditionOrg.replace("conditionOrgShowName",_CommonConditionOptions.conditionOrgShowName));
		}else{
			$("#condition").append(conditionOrg.replace("conditionOrgShowName","核算单位"));
		}
	}			
		
	//检索日期
	var conditionDate=' <div class="condition_div"> '+
				'	<div class="conditionText">conditionDateShowName:</div>'+
				'	<div class="conditionInput">'+
				'		<input id="txtBillDateFrom" name="txtBillDateFrom" dataType="date" value="BillDateFromValue" style="width: 100px;"　type="text" class="easyui-datebox" autocomplete="off"/>'+
				'	</div>'+
				'	<div class="conditionText">至</div>'+
				'	<div class="conditionInput">'+
				'		<input id="txtBillDateTo" name="txtBillDateTo" dataType="date" value="BillDateToValue" style="width: 100px;"　type="text" class="easyui-datebox" autocomplete="off" />'+
				'	</div>'+
				'</div>';
	if(_CommonConditionOptions.isShowDate){
		var conditionDateStr=conditionDate;
		conditionDateStr=conditionDateStr.replace("conditionDateShowName",_CommonConditionOptions.conditionDateShowName);
		//$("#condition").append(conditionDate.replace("conditionDateShowName",_CommonConditionOptions.conditionDateShowName));
		//检索开始日期
		if(_CommonConditionOptions.BillDateFromValue){
			conditionDateStr=conditionDateStr.replace("BillDateFromValue",_CommonConditionOptions.BillDateFromValue);
		}
		//检索结束日期
		if(_CommonConditionOptions.BillDateToValue){
			conditionDateStr=conditionDateStr.replace("BillDateToValue",_CommonConditionOptions.BillDateToValue);
		}
		$("#condition").append(conditionDateStr);
	}
	
	//检索日期
	var conditionSingleDate=' <div class="condition_div"> '+
				'	<div class="conditionText">conditionDateShowName:</div>'+
				'	<div class="conditionInput">'+
				'		<input id="txtBillDate" name="txtBillDate" dataType="date" value="controlValue" style="width: 100px;"　type="text" class="easyui-datebox" autocomplete="off"/>'+
				'	</div>'+
				'</div>';
	if(_CommonConditionOptions.isShowSingleDate){
		$("#condition").append(conditionSingleDate.replace("conditionDateShowName",_CommonConditionOptions.conditionDateShowName));
	}
	
	
	//财务年月
	var conditionAccountDate='<div class="condition_div">'+
					'  <div class="conditionText">年月:</div>'+
					'  <div class="conditionInput">'+
					'   	<select id="cboYearMonthFrom" name="cboYearMonthFrom" class="easyui-combobox" style="width: 80px;"></select>'+
					'  </div>'+
					'  <div class="conditionText">至</div>'+
					'  <div class="conditionInput">'+
					'   	<select id="cboYearMonthTo" name="cboYearMonthTo" class="easyui-combobox" style="width: 80px;"></select>'+  
					'</div>'+
					'</div>';
	//财务年月是否显示
	if(_CommonConditionOptions.isShowAccountDate){
		$("#condition").append(conditionAccountDate);
	}
	
	//显示周次开始+结束   isShowWeek
	var conditionWeek='<div class="condition_div">'+
	'  <div class="conditionText">周次:</div>'+
	'  <div class="conditionInput">'+
	'   	<select id="cboSearchWeekFrom" name="cboSearchWeekFrom" class="easyui-combobox" style="width: 240px;"></select>'+
	'  </div>'+
	'  <div class="conditionText">至</div>'+
	'  <div class="conditionInput">'+
	'   	<select id="cboSearchWeekTo" name="cboSearchWeekTo" class="easyui-combobox" style="width: 240px;"></select>'+  
	'</div>'+
	'</div>';
	//财务年月是否显示
	if(_CommonConditionOptions.isShowWeek){
		$("#condition").append(conditionWeek);
	}
	
	//财务日期单个数值
	var conditionSingleAccountDate='<div class="condition_div">'+
	'  <div class="conditionText">年月:</div>'+
	'  <div class="conditionInput">'+
	'   	<select id="cboYearMonth" name="cboYearMonth" class="easyui-combobox" style="width: 80px;"></select>'+
	'  </div>'+
	'</div>';
	//财务年月是否显示
	if(_CommonConditionOptions.isShowSingleAccountDate){
		$("#condition").append(conditionSingleAccountDate);
	}
	
	
	
	
	//制单人
	var conditionCreater =' <div class="condition_div"> '+
				'	<div class="conditionText">制单人:</div>'+
				'	<div class="conditionInput">'+
				'		<input id="txtSearchCreater" name="txtSearchCreater" dataType="text" value="" style="width: 100px;"　type="text"  autocomplete="off"/>'+
				'	</div>'+
				'</div>';
	if(_CommonConditionOptions.isShowCreater){
		$("#condition").append(conditionCreater);
	}
	
	//耳标号
	var conditionEarTagNumber =' <div class="condition_div"> '+
	'	<div class="conditionText">耳标号:</div>'+
	'	<div class="conditionInput">'+
	'		<input id="txtSearchEarTagNumber" name="txtSearchEarTagNumber" dataType="text" value="" style="width: 400px;"　type="text"  autocomplete="off"/>'+
	'	</div>'+
	'</div>';
	if(_CommonConditionOptions.isShowEarTagNumber){
		$("#condition").append(conditionEarTagNumber);
	}
	
	
	//画面重新渲染
	$.parser.parse();	
	
	
	
	if(_CommonConditionOptions.isShowCreater){
		//制单人设定
		$("#txtSearchCreater").val(parent.document.getElementById("AppUserInfo.Fusername").value);
	} 
	//财务年月是否显示
	if(!_CommonConditionOptions.isShowSingleAccountDate && _CommonConditionOptions.isShowAccountDate && _CommonConditionOptions.isShowOrg ){
		SetComboxItemByType("cboYearMonthFrom","SysAccountDate",false,false,false,function(){
			SetComboxItemByType("cboYearMonthTo","SysAccountDate",false,false,false,function(){
				SetComboxUserManage("cboUserManageOrg",false,_CommonConditionOptions.orgType,null,function(){
					callbackFuc();
				});
			});
		});
	}else if(_CommonConditionOptions.isShowWeek && _CommonConditionOptions.isShowOrg ){
		//当前周次
		var currentWeekID=getCurrentWeekID(GetSystemDate());
		SetComboxItemByType("cboSearchWeekFrom","SysWeekData",false,true,currentWeekID,function(){
			SetComboxItemByType("cboSearchWeekTo","SysWeekData",false,true,currentWeekID,function(){
				SetComboxUserManage("cboUserManageOrg",false,_CommonConditionOptions.orgType,null,function(){
					callbackFuc();
				});
			});
		});
	}else if(!_CommonConditionOptions.isShowSingleAccountDate && !_CommonConditionOptions.isShowAccountDate && _CommonConditionOptions.isShowOrg){
		SetComboxUserManage("cboUserManageOrg",false,_CommonConditionOptions.orgType,null,function(){
			callbackFuc();
		});
	}else if(!_CommonConditionOptions.isShowSingleAccountDate && _CommonConditionOptions.isShowAccountDate && !_CommonConditionOptions.isShowOrg){
		SetComboxItemByType("cboYearMonthFrom","SysAccountDate",false,false,false,function(){
			SetComboxItemByType("cboYearMonthTo","SysAccountDate",false,false,false,function(){
				callbackFuc();
			});
		});
	}else if(_CommonConditionOptions.isShowSingleAccountDate && _CommonConditionOptions.isShowOrg ){
		SetComboxItemByType("cboYearMonth","SysAccountDate",false,false,false,function(){	
			SetComboxUserManage("cboUserManageOrg",false,_CommonConditionOptions.orgType,null,function(){
				callbackFuc();
			});
		});
	}else {
		callbackFuc();
	}
}

//验证公共操作错误
function  CheckCommonCondition(){	
	// 组织是否显示        IsShowOrg
	if(_CommonConditionOptions.isShowOrg){
		if($("#cboUserManageOrg").combobox("getValues")==""){
			$.messager.alert('警告', '请选择组织。', 'warning');
			return false;;
		}
	}
	return true;
}

//取得公共检索的SQ文
function  GetCommonConditionWhere(){
	var commonConditionWhere="";
	// 组织
	if(_CommonConditionOptions.isShowOrg){
		if($("#cboUserManageOrg").combobox("getValues")==""){
			return false;
		}else{
			commonConditionWhere=commonConditionWhere+" AND "+_CommonConditionOptions.orgDateField+" IN ("+ $("#cboUserManageOrg").combobox("getValues") +")";
		}
	}
	if(_CommonConditionOptions.isShowDate){
		// 检索日期  conditionDateField
		commonConditionWhere=commonConditionWhere+" AND CONVERT(VARCHAR(10),"+ _CommonConditionOptions.conditionDateField+",23) >= '"+ $("#txtBillDateFrom").datebox('getValue') +"'";
		commonConditionWhere=commonConditionWhere+" AND CONVERT(VARCHAR(10),"+ _CommonConditionOptions.conditionDateField+",23) <= '"+ $("#txtBillDateTo").datebox('getValue') +"'";		
	}
	//财务年月取得
	if(_CommonConditionOptions.isShowAccountDate){
		commonConditionWhere=commonConditionWhere+" AND "+ _CommonConditionOptions.accountDateField+" >= '"+ $("#cboYearMonthFrom").combobox("getValue") +"'";
		commonConditionWhere=commonConditionWhere+" AND "+ _CommonConditionOptions.accountDateField+" <= '"+ $("#cboYearMonthTo").combobox("getValue") +"'";
	}	
	
	//年月单个数值  _CommonConditionOptions.isShowSingleAccountDate
	if(_CommonConditionOptions.isShowSingleAccountDate){
		commonConditionWhere=commonConditionWhere+" AND "+ _CommonConditionOptions.accountDateField+" = '"+ $("#cboYearMonth").combobox("getValue") +"'";
	}	
	
	//日期单个数值  _CommonConditionOptions.isShowSingleDate
	if(_CommonConditionOptions.isShowSingleDate){
		commonConditionWhere=commonConditionWhere+" AND "+ _CommonConditionOptions.accountDateField+" = '"+ $("#txtBillDate").datebox("getValue") +"'";
		
	}
	
	//制单人取得
	if(_CommonConditionOptions.isShowCreater){
		commonConditionWhere=commonConditionWhere+" AND FCreater  LIKE '%"+ $("#txtSearchCreater").val() +"%'";
	}
	//周次 isShowWeek
	// * @param 周次开始日期        weekBeginDataField
	//* @param 周次结束日期        weekEndDataField
	if(_CommonConditionOptions.isShowWeek){
		var searchWeekDateFrom=$("#cboSearchWeekFrom").combobox("getText");
		var searchWeekDateTo=$("#cboSearchWeekTo").combobox("getText");
		
		
		
		
		// 检索日期  conditionDateField
		commonConditionWhere=commonConditionWhere+" AND CONVERT(VARCHAR(10),"+ _CommonConditionOptions.weekBeginDataField+",23) >= '"+ searchWeekDateFrom.substring(8,18) +"'";
		commonConditionWhere=commonConditionWhere+" AND CONVERT(VARCHAR(10),"+ _CommonConditionOptions.weekEndDataField+",23) <= '"+ searchWeekDateTo.substring(21,31) +"'";		
	}
	
	//耳标号
	if(_CommonConditionOptions.isShowEarTagNumber){
		var  EarTagNumber=$("#txtSearchEarTagNumber").val();
		if(EarTagNumber!=""){
			EarTagNumber=EarTagNumber.replaceAll("，", ",");
			EarTagNumber=EarTagNumber.replaceAll("，", ",");
			EarTagNumber=EarTagNumber.replaceAll(" ", ",");
			var sqlEarTagNumberArray = EarTagNumber.split(",");
			var sqlEarTagNumber="";
			$.each(sqlEarTagNumberArray,function(n,value){
				if(sqlEarTagNumber==""){
					sqlEarTagNumber=" FEarTagNumber LIKE '%"+value+"%'";
				}else{
					sqlEarTagNumber=sqlEarTagNumber+" OR FEarTagNumber LIKE '%"+value+"%'";
				}
			});
			commonConditionWhere=commonConditionWhere+" AND ("+sqlEarTagNumber+")";
		}
	}
	return commonConditionWhere;
}

//取得日期
function  GetFDate()
{

	return $("#txtBillDate").datebox("getValue");
}
//取得核算单位
function  GetFAccountUnit()
{

	return $("#cboUserManageOrg").combobox("getValues");
}


String.prototype.replaceAll = function(s1,s2) { 
    return this.replace(new RegExp(s1,"gm"),s2); 
}

//--------------------------------一般公共检索条件--------------------------------------



//--------------------------------BEGIN报表公共检索控件BEGIN--------------------------------------
var _Reportoptions;
/**
* 一般检索控件
* @param 组织是否显示       isShowOrg
* @param 组织类型          orgType
* @param 组织数据参数       orgDateField
* @param 组织默认数据       orgDatePar
* 
* @param 部门是否显示       isShowDept
* @param 部门数据参数       deptDataField
* @param 部门默认数据       deptDataPar

* @param 日期是否          isShowDate
* @param 日期显示名称       conditionDateName
* @param 日期参数名称       conditionDateField
* @param 财务年月是否显示     isShowAccountDate
* @param 财务年月数据参数     accountDateField
* 
*/
//function  SetReportCondition(isShowOrg,orgType,orgDateField,orgDatePar,isShowDate,conditionDateShowName,conditionDateField,IsShowAccountDate,accountDateField,callbackFuc)
//function  SetCommonCondition(isShowOrg,orgType,orgDateField,orgDatePar,isShowDate,conditionDateShowName,conditionDateField,IsShowAccountDate,accountDateField,callbackFuc)
function  SetReportCondition(options,callbackFuc)
{
	_Reportoptions=options;
	
	//组织检索
	var conditionOrg ='<div class="condition_div" >'+
				'	<div class="conditionText" >核算单位:</div>'+
				'	<div class="conditionInput">'+
				'		<select id="cboUserManageOrg" name="cboUserManageOrg" class="easyui-combobox" style="width: 200px;"></select>'+
				'	</div>'+
					'  </div>'; 
	// 组织是否显示        IsShowOrg
	$("#condition").append(conditionOrg);
	
		
	//检索日期
	var conditionDate=' <div class="condition_div"> '+
				'	<div class="conditionText">业务日期:</div>'+
				'	<div class="conditionInput">'+
				'		<input id="txtBillDateFrom" name="txtBillDateFrom" dataType="date" value="controlValue" style="width: 100px;"　type="text" class="easyui-datebox" autocomplete="off"/>'+
				'	</div>'+
				'	<div class="conditionText">至</div>'+
				'	<div class="conditionInput">'+
				'		<input id="txtBillDateTo" name="txtBillDateTo" dataType="date" value="controlValue" style="width: 100px;"　type="text" class="easyui-datebox" autocomplete="off" />'+
				'	</div>'+
				'</div>';
	$("#condition").append(conditionDate);

	
	
	//报表类型  1：公司 2：核算单位 3：部门 4：圈舍
	var conditionSumType=' <div class="condition_div"> '+
						'	<div class="conditionText">汇总方式:</div>'+
						'	<div class="conditionInput">'+
						'<input type="radio" name="FSumType" value="1" />公司'+
						'	</div>'+
						'	<div class="conditionInput">'+
						'<input type="radio" name="FSumType" value="2"  checked="checked" />基地'+
						'	</div>'+
						'	<div class="conditionInput">'+
						'<input type="radio" name="FSumType" value="3" />工段'+
						'	</div>'+
						'	<div class="conditionInput">'+
						'<input type="radio" name="FSumType" value="4" />圈舍'+
						'	</div>'+
						'	</div>';
	$("#condition").append(conditionSumType);
	
	//画面重新渲染
	$.parser.parse();	
	
	
	SetComboxUserManage("cboUserManageOrg",true,ShareOrgType.FOrganizationTypeAccount,options.orgDatePar,function(){
		callbackFuc();
	});
}

//验证公共操作错误
function  CheckReportCondition(){	
	// 组织是否显示        IsShowOrg
	/*if(_IsShowOrg){
		if($("#cboUserManageOrg").combobox("getValues")==""){
			$.messager.alert('警告', '请选择组织。', 'warning');
			return false;;
		}
	}*/
	return true;
}

//取得公共检索的SQ文
//取得组织信息
function  GetReportConditionOrg()
{
	return $("#cboUserManageOrg").combobox("getValues");
}

function GetReportConditionOrgName(){
	return $("#cboUserManageOrg").combobox("getText");
}

//取得开始日期
function  GetReportBeginDate()
{
	return $("#txtBillDateFrom").datebox('getValue');
}

//取得结束日期
function  GetReportEndDate()
{
	return $("#txtBillDateTo").datebox('getValue');
}


//取得合计类型
function  GetReportSumType()
{
	return $("input[name='FSumType']:checked").val(); ;
}

/*function  GetCommonConditionWhere(){
	var commonConditionWhere="";
	// 组织
	if(_IsShowOrg){
		if($("#cboUserManageOrg").combobox("getValues")==""){
			return false;
		}else{
			commonConditionWhere=commonConditionWhere+" AND "+_orgDateField+" IN ("+ $("#cboUserManageOrg").combobox("getValues") +")";
		}
	}
	if(_IsShowDate){
		// 检索日期  conditionDateField
		commonConditionWhere=commonConditionWhere+" AND CONVERT(VARCHAR(10),"+ _conditionDateField+",23) >= '"+ $("#txtBillDateFrom").datebox('getValue') +"'";
		commonConditionWhere=commonConditionWhere+" AND CONVERT(VARCHAR(10),"+ _conditionDateField+",23) <= '"+ $("#txtBillDateTo").datebox('getValue') +"'";		
	}
	//财务年月取得
	if(_isShowAccountDate){
		commonConditionWhere=commonConditionWhere+" AND "+ _accountDateField+" >= '"+ $("#cboYearMonthFrom").combobox("getValue") +"'";
		commonConditionWhere=commonConditionWhere+" AND "+ _accountDateField+" <= '"+ $("#cboYearMonthTo").combobox("getValue") +"'";
	}	
	return commonConditionWhere;
}
*/


//--------------------------------END报表公共检索控件END--------------------------------------


//-----------------------------------easyui datagrid 列表头过滤
/**  http://blog.csdn.net/leijuly/article/details/25982271
 * @author 孙宇
 * 
 * @requires jQuery,EasyUI
 * 
 * 为datagrid、treegrid增加表头菜单，用于显示或隐藏列，注意：冻结列不在此菜单中
 */
/*var createGridHeaderContextMenu = function(e, field) {
	e.preventDefault();
	var grid = $(this); grid本身 
	var headerContextMenu = this.headerContextMenu; grid上的列头菜单对象 
	var okCls = 'tree-checkbox1';//选中
	var emptyCls = 'tree-checkbox0';//取消
	if (!headerContextMenu) {
		var tmenu = $('<div style="width:100px;"></div>').appendTo('body');
		var fields = grid.datagrid('getColumnFields');
		for ( var i = 0; i < fields.length; i++) {
			var fildOption = grid.datagrid('getColumnOption', fields[i]);
			if (!fildOption.hidden) {
				$('<div iconCls="'+okCls+'" field="' + fields[i] + '"/>').html(fildOption.title).appendTo(tmenu);
			} else {
				$('<div iconCls="'+emptyCls+'" field="' + fields[i] + '"/>').html(fildOption.title).appendTo(tmenu);
			}
		}
		headerContextMenu = this.headerContextMenu = tmenu.menu({
			onClick : function(item) {
				var field = $(item.target).attr('field');
				if (item.iconCls == okCls) {
					grid.datagrid('hideColumn', field);
					$(this).menu('setIcon', {
						target : item.target,
						iconCls : emptyCls
					});
				} else {
					grid.datagrid('showColumn', field);
					$(this).menu('setIcon', {
						target : item.target,
						iconCls : okCls
					});
				}
			}
		});
	}
	headerContextMenu.menu('show', {
		left : e.pageX,
		top : e.pageY
	});
};
$.fn.datagrid.defaults.onHeaderContextMenu = createGridHeaderContextMenu;*/
//-----------------------------------easyui datagrid 列表头过滤



//EasyUI Datagrid日期控件扩展
$.extend($.fn.datagrid.defaults.editors, {
	  datebox : {
	    init : function(container, options) {
	      var input = $('<input type="text">').appendTo(container);
	      input.datebox(options);
	      return input;
	    },
	    destroy : function(target) {
	      $(target).datebox('destroy');
	    },
	    getValue : function(target) {
	      //获得旧值
	      //alert("getValue:"+$(target).datebox('getValue'));
	      return $(target).datebox('getValue');
	    },
	    setValue : function(target, value) {
	        //console.info(formatDatebox(value));
	    	//alert("setValue:"+value +"setFormatValue:" +DateTimeStamptoYMD(value));
	      $(target).datebox('setValue', DateTimeStamptoYMD(value));//设置新值的日期格式
	    },
	    resize : function(target, width) {
	      $(target).datebox('resize', width);
	    }
	  }
	 /* ,HeNumberBox: {    
	        init: function(container, options){    
	        	var input; 
	        	alert("options.maxlength:"+options.maxlength);
	        	if(options.maxlength)
	        	{
	        		var dataoptions="";
	        		if(options.required){
	        			dataoptions="required:true";
	        		}
	        		if(options.validType){
	        			if(dataoptions==""){
	        				dataoptions="validType:"+options.validType;
	        			}
	        			else{
	        				dataoptions=dataoptions+",validType:"+options.validType;
	        			}
	        		}
	        		input = $('<input type="text" class="datagrid-editable-input" data-options="'+dataoptions+'" maxlength='+ options.maxlength +'>').appendTo(container);
	        	}
	        	else
	        	{
	        		var dataoptions="";
	        		if(options.required){
	        			dataoptions="required:true";
	        		}
	        		if(options.validType){
	        			if(dataoptions==""){
	        				dataoptions="validType:"+options.validType;
	        			}
	        			else{
	        				dataoptions=dataoptions+",validType:"+options.validType;
	        			}
	        		}
	        		if(options.validType){
	        			if(dataoptions==""){
	        				dataoptions="validType:"+options.validType;
	        			}
	        			else{
	        				dataoptions=dataoptions+",validType:"+options.validType;
	        			}
	        		}
	        		input = $('<input type="text" class="datagrid-editable-input" data-options="'+dataoptions+'">').appendTo(container);
	        	}
	            return input;    
	        },    
	        getValue: function(target){    
	            return $(target).val();    
	        },    
	        setValue: function(target, value){    
	            $(target).val(value);    
	        },    
	        resize: function(target, width){    
	            var input = $(target);    
	            if ($.boxModel == true){    
	                input.width(width - (input.outerWidth() - input.width()));    
	            } else {    
	                input.width(width);    
	            }    
	        }    
	    } */
	}); 
//Grid回车事件
function onDataGridKeyDown(eds)
{
	 	var isFirstFocus=true;
		function numberKeyDown(e,ed) {
		var key = e.which;
 	    if (13 == key){
		 	if(isFirstFocus)
		 	{
		 		isFirstFocus=false;
		 		return false;
		 	}
		 	$.each(eds,function(j, edDetail){
	 			if(edDetail.field==ed.field){
	 				isFirstFocus=true;
					if(eds[j+1].type=="combobox")
					{
						$(eds[j+1].target).combobox().next('span').find('input').focus();
						$(eds[j+1].target).combobox().next('span').find('input').select();
					}
					if(eds[j+1].type=="validatebox")
					{
						$(eds[j+1].target).focus();
						$(eds[j+1].target).select();
					}
					if(eds[j+1].type=="numberbox")
					{
						isFirstFocus=true;
						$(eds[j+1].target).numberbox().next('span').find('input').focus();
						$(eds[j+1].target).numberbox().next('span').find('input').select();
						$(eds[j+1].target).next("span").find('input').keyup(function (e) {
							numberKeyDown(e,eds[j+1]);
							isFirstFocus=false;
						});
						return false;
					}
					if(eds[j+1].type=="datebox")
					{
						$(eds[j+1].target).datebox().next('span').find('input').focus();
						$(eds[j+1].target).datebox().next('span').find('input').select();
						$(eds[j+1].target).datebox('setValue', DateTimeStamptoYMD($('#dg_control').datagrid('getRows')[editIndex][eds[j+1].field]));//设置新值的日期格式
						$(eds[j+1].target).datebox('showPanel');
					}
				}
			}); 
		 }
		 return false;
   }
 
   //-----------------------Grid相关操作---------------------------------
	//var ClickNumbers=0;
		
	//取得数据源下一个数值
	   function GetNextValue(dataList,currentValue){
	   	  var currentIndex=0;
	   	  var nextValue;
	   	  $.each(dataList,function(n, row) {  
	   		   if(currentValue==""
	   		      || currentValue==null){
	   		   		nextValue=row.id;
	   		   		return false;
	   		   }
	   		   else{
	   		   		if(row.id==currentValue){
	   		   			
	   		   			if(n+1==dataList.length){
		   		   			nextValue=dataList[0].id;
		   		   			return false;
	   		   			}
	   		   			else
	   		   			{
	   		   				nextValue=dataList[n+1].id;
	   		   				return false;
	   		   			}
	   		   		}
	   		   }
	   	  });
	   	  return 	nextValue;
	   }

	$.each(eds,function(n, ed) {
		if(ed.type=="combobox"){
				var dataCbo=$(ed.target).combobox("getData");
				var valueCbo=$(ed.target).combobox("getValue");
				$(ed.target).combobox({
		 		keyHandler: {
					down: function(){
						 $(ed.target).combobox("showPanel");
						 $(ed.target).combobox('setValue',GetNextValue(dataCbo,$(ed.target).combobox('getValue')));
					}, 
					enter: function(){
						//ClickNumbers=ClickNumbers+1;
						//$("#fremark").val("enter"+ClickNumbers+"ed.field:"+ed.field+"eds length:"+eds.length);
						$.each(eds,function(m, edDetail){
							if(edDetail.field==ed.field){
								try{
									$(ed.target).combobox("hidePanel");	
								}
								catch(e)
								{}
								if(eds[m+1].type=="combobox")
								{
									$(eds[m+1].target).combobox().next('span').find('input').focus();
									$(eds[m+1].target).combobox().next('span').find('input').select();
								}
								if(eds[m+1].type=="validatebox")
								{
									$(eds[m+1].target).focus();
									$(eds[m+1].target).select();
								}
								if(eds[m+1].type=="numberbox")
								{
									$(eds[m+1].target).numberbox().next('span').find('input').focus();
									$(eds[m+1].target).numberbox().next('span').find('input').select();
									$(eds[m+1].target).next("span").find('input').keyup(function (e) {
										numberKeyDown(e,eds[m+1]);
									});
									return false;
								}
								if(eds[m+1].type=="datebox")
								{
									$(eds[m+1].target).datebox().next('span').find('input').focus();
									$(eds[m+1].target).datebox().next('span').find('input').select();
								}
							}
						});
						return false;
					}
				},
				onLoadSuccess:function(){
					$(ed.target).combobox('setValue',valueCbo);
				}
      		});	
			}
			if(ed.type=="validatebox"){
				$(ed.target).on("keydown",function(e){
					  var key = e.which;
		          if (13 == key){
		          if(ed.target==eds[eds.length-1].target){
				  	   if(($('#dg_control').datagrid("getRows").length-1)>=(editIndex+1))
				  	   {
				  	   		//$('#dg_control').datagrid('endEdit', editIndex);
			  	 		 	//下一行选择
			  	  			onClickRow(editIndex+1);
			  	  	   }
				   }
		          	//需要逻辑判断
					$.each(eds,function(m, edDetail){
						if(edDetail.field==ed.field){
							if(eds[m+1].type=="combobox")
							{
								$(eds[m+1].target).combobox().next('span').find('input').focus();
								$(eds[m+1].target).combobox().next('span').find('input').select();
							}
							if(eds[m+1].type=="validatebox")
							{
								$(eds[m+1].target).focus();
								$(eds[m+1].target).select();
							}
							if(eds[m+1].type=="numberbox")
							{
								$(eds[m+1].target).numberbox().next('span').find('input').focus();
								$(eds[m+1].target).numberbox().next('span').find('input').select();
								$(eds[m+1].target).next("span").find('input').keyup(function (e) {
									numberKeyDown(e,eds[m+1]);
								});
								return false;
							}
							if(eds[m+1].type=="datebox")
							{
								$(eds[m+1].target).datebox().next('span').find('input').focus();
								$(eds[m+1].target).datebox().next('span').find('input').select();
							}
						}		
					});
					return false;	
		          } 	
		    }) ;
			}
		    if(ed.type=="datebox"){
				$(ed.target).datebox({
			 		keyHandler: {
		 			up: function(){
		 				 var currentDate=new Date($(ed.target).datebox('getValue'));
						 currentDate.dateAdd("d",-7);
						 $(ed.target).datebox('setValue', DateTimeStamptoYMD(currentDate));
					}, 
		 			down: function(){
		 				var currentDate=new Date($(ed.target).datebox('getValue'));
						currentDate.dateAdd("d",7);	
						$(ed.target).datebox('setValue', DateTimeStamptoYMD(currentDate));
		 			},
					left: function(){
						 var currentDate=new Date($(ed.target).datebox('getValue'));
						 currentDate.dateAdd("d",-1);
						 $(ed.target).datebox('setValue', DateTimeStamptoYMD(currentDate));
					}, 
					right: function(){
						 var currentDate=new Date($(ed.target).datebox('getValue'));
						 currentDate.dateAdd("d",1);
						 $(ed.target).datebox('setValue', DateTimeStamptoYMD(currentDate));
					}, 
					enter: function(){
						try{
							$(ed.target).datebox("hidePanel");
						}
						catch(e){
						}
						$.each(eds,function(m, edDetail){
							if(edDetail.field==ed.field){
								if(eds[m+1].type=="combobox")
								{
									$(eds[m+1].target).combobox().next('span').find('input').focus();
									$(eds[m+1].target).combobox().next('span').find('input').select();
								}
								if(eds[m+1].type=="validatebox")
								{
									$(eds[m+1].target).focus();
									$(eds[m+1].target).select();
								}
								if(eds[m+1].type=="numberbox")
								{
									$(eds[n+1].target).numberbox().next('span').find('input').focus();
									$(eds[n+1].target).numberbox().next('span').find('input').select();
									$(eds[m+1].target).next("span").find('input').keyup(function (e) {
										numberKeyDown(e,eds[m+1]);
									});
									return false;
								}
								if(eds[m+1].type=="datebox")
								{
									$(eds[m+1].target).datebox().next('span').find('input').focus();
									$(eds[m+1].target).datebox().next('span').find('input').select();
								}
							};		
						});
					}
				}
      		});	
      		
      		$(ed.target).datebox('setValue', DateTimeStamptoYMD($('#dg_control').datagrid('getRows')[editIndex][ed.field]));//设置新值的日期格式
			} 
		});
		
		if(eds.length>0 && eds[0])
		{
			if(eds[0].type=="combobox")
			{
				$(eds[0].target).combobox().next('span').find('input').focus();
				$(eds[0].target).combobox().next('span').find('input').select();
			}
			if(eds[0].type=="validatebox")
			{
				$(eds[0].target).focus();
				$(eds[0].target).select();
			}
			if(eds[0].type=="numberbox")
			{
				$(eds[0].target).numberbox().next('span').find('input').focus();
				$(eds[0].target).numberbox().next('span').find('input').select();
				$(eds[0].target).next("span").find('input').keyup(function (e) {
					numberKeyDown(e,eds[0]);
					isFirstFocus=false;
				});
			}
			if(eds[0].type=="datebox")
			{
				$(eds[0].target).datebox().next('span').find('input').focus();
				$(eds[0].target).datebox().next('span').find('input').select();
			}
		}
}

/**
 * 获取单据编码规则
 * @param FBillTypeID 单据类型
 * @param FOrganizationID 组织机构ID
 */
function GetBillNumber(FBillTypeID,FOrganizationID){
	var billNumber="";
	billNumber=DateTimeStamptoYMD(new Date);
	$.ajax({
        type: "POST",
        url:"../util/common/getBillNumber",
        async:false,
        data:{"forgid":FBillTypeID,"fbilltypeid":FOrganizationID},
        success: function (data) {
        	billNumber=data; 
        	if(data==""){
        		billNumber="A1-15-01-01-10";
    		}
        }
    });
	return billNumber;
}

/**
 * 获取繁殖批次
 * @param fOrgID 组织ID
 * @param fBatchTypeID 批次类型ID
 */
function GetBatchNumber (fOrgID,fBatchTypeID){
	var batchNumber="";
	$.ajax({
        type: "POST",
        url:"../util/common/getBatchNumber",
        async:false,
        data:{"forgid":fOrgID,"fbatchtypeid":fBatchTypeID},
        success: function (data) {
        	batchNumber=data;
        	if(data==""){
        		batchNumber="A1-15-01-01-10";
    		}
        }
    }); 
	return batchNumber;
}


/*

Get the rightmost substring, of the specified length,

from a String object.

*/
String.prototype.right = function (length_)
{
     var _from = this.length - length_;
     if (_from < 0) _from = 0;
     return this.substring(this.length - length_, this.length);
};

/*
格式化千位符
*/
function isString(num) {
    return Object.prototype.toString.apply(num) == '[object String]';
}
function fmoney(s, n){
	if (typeof(s) == "undefined")
	{
		s=" ";
	}
	if(s==null){return "";}
	if(s==" "){ return ""; };
	
	s=Number(s).toFixed(n);
    n = n > 0 && n <= 20 ? n : 2;   
    
    if(isString(s)) {
        s = s * 1;
    }
    s = parseFloat((s + "")).toFixed(n) + ""; 

    var l = s.split(".")[0].split(""),   
        r = s.split(".")[1];  
        
	t = "";   
	var j=1;
	//for(i = 0; i < l.length; i ++ ){   
	for(i = l.length-1; i >=0; i-- ){   
	  //alert("l[i]:"+l[i]);
	   //t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
	  if(j % 3 == 0 && j != l.length){
		  t=","+l[i]+t;
	  } else {
		t=l[i]+t;
	  }
	  j=j+1;
	  //t += ((j + 1) % 3 == 0 && (j + 1) != l.length ? "," : "")+l[i];   
	}    
   return t.split("").join("") + "." + r;   
} 

/**
 * DataGrid合并单元格
 * @Demo $(this).datagrid("autoMergeCells");
 * @参照：http://www.cnblogs.com/shenyixin/p/3927688.html
 */
$.extend($.fn.datagrid.methods, {
     autoMergeCells : function (jq, fields) {
    	//return false;
		return jq.each(function () {
            var target = $(this);
            if (!fields) {
                fields = target.datagrid("getColumnFields");
                var fields2 = target.datagrid("getColumnFields",true);
                $.each(fields2,function(n, value) {
                	fields.push(value);
				});
            }
            var rows = target.datagrid("getRows");
            var i = 0,
            j = 0,
            temp = {};
            for (i; i < rows.length; i++) {
                var row = rows[i];
                j = 0;
                for (j; j < fields.length; j++) {
                    var field = fields[j];
                    var tf = temp[field];
                    if (!tf) {
                        tf = temp[field] = {};
                        tf[row[field]] = [i];
                    } else {
                        var tfv = tf[row[field]];
                        if (tfv) {
                            tfv.push(i);
                        } else {
                            tfv = tf[row[field]] = [i];
                        }
                    }
                }
            }
            $.each(temp, function (field, colunm) {
                $.each(colunm, function () {
                    var group = this;
                    
                    if (group.length > 1) {
                        var before,
                        after,
                        megerIndex = group[0];
                        for (var i = 0; i < group.length; i++) {
                            before = group[i];
                            after = group[i + 1];
                            if (after && (after - before) == 1) {
                                continue;
                            }
                            var rowspan = before - megerIndex + 1;
                            if (rowspan > 1) {
                                target.datagrid('mergeCells', {
                                    index : megerIndex,
                                    field : field,
                                    rowspan : rowspan
                                });
                            }
                            if (after && (after - before) != 1) {
                                megerIndex = after;
                            }
                        }
                    }
                });
            });
        });
    }
});

//扩充datagrid页面合计
//http://dudongliupin.blog.163.com/blog/static/1835373282015325281011/
$.extend($.fn.datagrid.methods,
	    {
	        statistics: function (jq,param) {
	        	var rows = $(jq).datagrid("getRows");
	        	var footer = new Array();
	        	var footerData={};
				footerData[param.totalfield]="合计("+rows.length+")";
				$.each(param.sumfields,function(n, value) {
					footerData[value]=0;
				});
				
				$.each(rows,function(n, e) {
					$.each(param.sumfields,function(n, value) {
						if(e[value]!=undefined){
							footerData[value]=(Number(footerData[value])+Number(e[value])).toFixed(2).toString();
						}
					});
				});
				
				
				
				var fields= $(jq).datagrid("getColumnFields");
				var fields2 = $(jq).datagrid("getColumnFields",true);
			    $.each(fields2,function(n, value) {
                	fields.push(value);
				});
               
			    $.each(fields,function(n, value) {
            	    if(footerData[value]==undefined){
            	    	footerData[value]=" ";
					}
				});
              
				//alert(JSON.stringify(footerData));
				
				footer.push(footerData);
	        	$(jq).datagrid('reloadFooter', footer);
	        }
	    });

//扩展Datagrid列拖动
$.extend($.fn.datagrid.methods,{
	columnMoving: function(jq){
		return jq.each(function(){
			var target = this;
			var cells = $(this).datagrid('getPanel').find('div.datagrid-header td[field]');
			cells.draggable({
				revert:true,
				cursor:'pointer',
				edge:5,
				proxy:function(source){
					var p = $('<div class="tree-node-proxy tree-dnd-no" style="position:absolute;border:1px solid #ff0000"/>').appendTo('body');
					p.html($(source).text());
					p.hide();
					return p;
				},
				onBeforeDrag:function(e){
					e.data.startLeft = $(this).offset().left;
					e.data.startTop = $(this).offset().top;
				},
				onStartDrag: function(){
					$(this).draggable('proxy').css({
						left:-10000,
						top:-10000
					});
				},
				onDrag:function(e){
					$(this).draggable('proxy').show().css({
						left:e.pageX+15,
						top:e.pageY+15
					});
					return false;
				}
			}).droppable({
				accept:'td[field]',
				onDragOver:function(e,source){
					$(source).draggable('proxy').removeClass('tree-dnd-no').addClass('tree-dnd-yes');
					$(this).css('border-left','1px solid #ff0000');
				},
				onDragLeave:function(e,source){
					$(source).draggable('proxy').removeClass('tree-dnd-yes').addClass('tree-dnd-no');
					$(this).css('border-left',0);
				},
				onDrop:function(e,source){
					$(this).css('border-left',0);
					var fromField = $(source).attr('field');
					var toField = $(this).attr('field');
					setTimeout(function(){
						moveField(fromField,toField);
						$(target).datagrid();
						$(target).datagrid('columnMoving');
					},0);
				}
			});
			
			// move field to another location
			function moveField(from,to){
				var columns = $(target).datagrid('options').columns;
				var cc = columns[0];
				var c = _remove(from);
				if (c){
					_insert(to,c);
				}
				
				function _remove(field){
					for(var i=0; i<cc.length; i++){
						if (cc[i].field == field){
							var c = cc[i];
							cc.splice(i,1);
							return c;
						}
					}
					return null;
				}
				function _insert(field,c){
					var newcc = [];
					for(var i=0; i<cc.length; i++){
						if (cc[i].field == field){
							newcc.push(c);
						}
						newcc.push(cc[i]);
					}
					columns[0] = newcc;
				}
			}
		});
	}
});

//Grid支持鼠标上下键
$.extend($.fn.datagrid.methods, {
	keyCtr : function (jq) {
		return jq.each(function () {
			var grid = $(this);
			grid.datagrid('getPanel').panel('panel').attr('tabindex', 1).bind('keydown', function (e) {
				switch (e.keyCode) {
				case 38: // up
					var selected = grid.datagrid('getSelected');
					if (selected) {
						var index = grid.datagrid('getRowIndex', selected);
						grid.datagrid('selectRow', index - 1);
					} else {
						var rows = grid.datagrid('getRows');
						grid.datagrid('selectRow', rows.length - 1);
					}
					break;
				case 40: // down
					var selected = grid.datagrid('getSelected');
					if (selected) {
						var index = grid.datagrid('getRowIndex', selected);
						grid.datagrid('selectRow', index + 1);
					} else {
						grid.datagrid('selectRow', 0);
					}
					break;
				}
			});
		});
	}
});



//easyui dialog 扩展load
//加载等待效果
function BeginLoader(vtitle,vheight,vwidth)
{
	$("<div><div class='panel-loading'>Loading...</div> </div>").dialog({
		id : "dialoader",
		title : vtitle,
		height : vheight,
		width : vwidth,
		closable:false,
		draggable:false,
		modal : true});
}

//关闭等待效果
function EndLoader()
{
	// 销毁Loader dialog对象
	$("#dialoader").dialog('destroy');
}

//加载等待效果
function BeginOperationLoader()
{
	$("<div><div class='panel-loading'>业务处理中。。。，请耐心等待。</div> </div>").dialog({
		id : "diaOperationloader",
		title : "鸡场管理信息系统",
		height : 200,
		width : 300,
		closable:false,
		draggable:false,
		modal : true});
}

//关闭等待效果
function EndOperationLoader()
{
	// 销毁Loader dialog对象
	$("#diaOperationloader").dialog('destroy');
}

//函数是否存在
function isExitsFunction(funcName) {
    try {
        if (typeof(eval(funcName)) == "function") {
            return true;
        }
    } catch(e) {}
    return false;
}

//只能输入数字
function OnlyInputNum() {
	if (event.keyCode < "0".charCodeAt() || event.keyCode > "9".charCodeAt()) {
		 event.returnValue = false;
    }
}


//EasyUI Datagrid日期控件扩展
$.extend($.fn.datagrid.defaults.editors, {
	  datebox : {
	    init : function(container, options) {
	      var input = $('<input type="text">').appendTo(container);
	      input.datebox(options);
	      return input;
	    },
	    destroy : function(target) {
	      $(target).datebox('destroy');
	    },
	    getValue : function(target) {
	      //获得旧值
	      //alert("getValue:"+$(target).datebox('getValue'));
	      return $(target).datebox('getValue');
	    },
	    setValue : function(target, value) {
	        //console.info(formatDatebox(value));
	    	//alert("setValue:"+value +"setFormatValue:" +DateTimeStamptoYMD(value));
	      $(target).datebox('setValue', DateTimeStamptoYMD(value));//设置新值的日期格式
	    },
	    resize : function(target, width) {
	      $(target).datebox('resize', width);
	    }
	  }
	 /* ,HeNumberBox: {    
	        init: function(container, options){    
	        	var input; 
	        	alert("options.maxlength:"+options.maxlength);
	        	if(options.maxlength)
	        	{
	        		var dataoptions="";
	        		if(options.required){
	        			dataoptions="required:true";
	        		}
	        		if(options.validType){
	        			if(dataoptions==""){
	        				dataoptions="validType:"+options.validType;
	        			}
	        			else{
	        				dataoptions=dataoptions+",validType:"+options.validType;
	        			}
	        		}
	        		input = $('<input type="text" class="datagrid-editable-input" data-options="'+dataoptions+'" maxlength='+ options.maxlength +'>').appendTo(container);
	        	}
	        	else
	        	{
	        		var dataoptions="";
	        		if(options.required){
	        			dataoptions="required:true";
	        		}
	        		if(options.validType){
	        			if(dataoptions==""){
	        				dataoptions="validType:"+options.validType;
	        			}
	        			else{
	        				dataoptions=dataoptions+",validType:"+options.validType;
	        			}
	        		}
	        		if(options.validType){
	        			if(dataoptions==""){
	        				dataoptions="validType:"+options.validType;
	        			}
	        			else{
	        				dataoptions=dataoptions+",validType:"+options.validType;
	        			}
	        		}
	        		input = $('<input type="text" class="datagrid-editable-input" data-options="'+dataoptions+'">').appendTo(container);
	        	}
	            return input;    
	        },    
	        getValue: function(target){    
	            return $(target).val();    
	        },    
	        setValue: function(target, value){    
	            $(target).val(value);    
	        },    
	        resize: function(target, width){    
	            var input = $(target);    
	            if ($.boxModel == true){    
	                input.width(width - (input.outerWidth() - input.width()));    
	            } else {    
	                input.width(width);    
	            }    
	        }    
	    } */
	}); 

//根据含税单价计算含税金额，并且不含税金额，反算不含税单价
//FPrice,FPriceTax
//caculateType  0:含税计算不含税  1:不含税计算含税
//fTaxRateID  税率ID
//fPrice   caculateType为 0是含税单价   1:不含税单价
//fAmount  数量


//根据不含税单价计算含税金额，并且计算含税金额，反算含税单价
//fTaxRateID  税率ID
//fPrice   不含税单价
//fAmount  数量
function  GetMoneyInfoTax(fTaxRateID,fPrice,fAmount){
	var taxList;
	var currentTaxRate;
	var taxInfo={};
	//取得税率列表
	$.ajax({
		type: "POST",
		url:"../base/TaxRate/SelectTaxRateList",
		async:false,
		success: function (data) {
			taxList = JSON.parse(data);
		}
	});
	
	//取得当前税率相关信息
	 $.each(taxList,function(n, value) {
     	if(value.ftaxrateid==fTaxRateID){
     		currentTaxRate=value;
     	}
	 });
	 if(currentTaxRate!=null){
		//金额 FMoney
			var FMoney=(Number(fPrice)*Number(fAmount)).toFixed(2);
			//税率 
			var fTaxRate=(1+Number(currentTaxRate.ftaxrate)/100-Number(currentTaxRate.fnodeductiontaxrate)/100);
			//金额含税  FMoneyTax
			var FMoneyTax=Number(FMoney*fTaxRate).toFixed(2);
			
			taxInfo.FMoney=FMoney;
			taxInfo.FMoneyTax=FMoneyTax;
			if(fAmount!=0){
				taxInfo.FPriceTax=(Number((Number(fPrice)*Number(fAmount))*fTaxRate)/fAmount).toFixed(10);
			}else{
				taxInfo.FPriceTax=0;
			}
			
			taxInfo.fTaxRate=(Number(currentTaxRate.ftaxrate)-Number(currentTaxRate.fnodeductiontaxrate))/100;
	 }else{
			taxInfo.FMoney=0;
			taxInfo.FMoneyTax=0;
			taxInfo.FPriceTax=0;
			taxInfo.fTaxRate=0;
	 }
	return  taxInfo;
}

//根据含税单价计算含税金额，并且计算不含税金额，反算不含税单价
//fTaxRateID  税率ID
//fPriceTax   含税单价
//fAmount  数量
function  GetMoneyInfoNoTax(fTaxRateID,fPriceTax,fAmount){
	var taxList;
	var currentTaxRate;
	 var taxInfo={};
	//取得税率列表
	$.ajax({
		type: "POST",
		url:"../base/TaxRate/SelectTaxRateList",
		async:false,
		success: function (data) {
			taxList = JSON.parse(data);
		}
	});
	
	//取得当前税率相关信息
	 $.each(taxList,function(n, value) {
	   	if(value.ftaxrateid==fTaxRateID){
	   		currentTaxRate=value;
	   	}
	 });
	
	 if(currentTaxRate!=null){
		 	//金额含税  FMoneyTax
			var FMoneyTax=(Number(fPriceTax)*Number(fAmount)).toFixed(2);
			//税率 
			var fTaxRate=(1+Number(currentTaxRate.ftaxrate)/100-Number(currentTaxRate.fnodeductiontaxrate)/100);
			//金额 不含税  FMoney
			var FMoney=Number(FMoneyTax/fTaxRate).toFixed(2);
			taxInfo.FMoney=FMoney;
			taxInfo.FMoneyTax=FMoneyTax;
			if(fAmount!=0){
				taxInfo.FPrice=(((Number(fPriceTax)*Number(fAmount))/fTaxRate)/fAmount).toFixed(10);
			}else{
				taxInfo.FPrice=0;
			}
			taxInfo.fTaxRate=(Number(currentTaxRate.ftaxrate)-Number(currentTaxRate.fnodeductiontaxrate))/100;
	 }else{
			taxInfo.FMoney=0;
			taxInfo.FMoneyTax=0;
			taxInfo.FPrice=0;
			taxInfo.fTaxRate=0;	
		 
		 
	 }
     return  taxInfo;
}

//根据单价计算金额
//fPrice   单价
//fAmount  数量
function  GetMoneyInfo(fPrice,fAmount){
	//金额 FMoney
	var FMoney=(Number(fPrice)*Number(fAmount)).toFixed(2);
	var MoneyInfo={};
	MoneyInfo.FMoney=FMoney;
	return  FMoney;
}


//根据金额反计算单价
//fMoney   金额
//fAmount  数量
function  GetPriceInfo(fMoney,fAmount){
	return (Number(fMoney)/Number(fAmount)).toFixed(10);
}


/*FSaleModeID --销售方式
 *fAmount  --数量
FPrice     --销售价格
FAddPrice  --加价
FStandardWeight--标准体重
FWeight 重 量     
根据销售模式 +单价+加价+数量+标准体重+实际重量 计算 金额和加价金额
*/
function GetPigSaleMoney(fSaleModeID,fPrice,fAddPrice,fAmount,FStandardWeight,fWeight){
	var FMoney=0.0;
	var FAddMoney=0.0;
	var FSaleMoney=0.0;
	//按头销售
	if(fSaleModeID==1){
		FMoney=(Number(fPrice)*Number(fAmount)).toFixed(2);
		if(fAmount>0){
			if(Number(fWeight)>Number(FStandardWeight)){
				FAddMoney=((Number(fWeight)-Number(FStandardWeight))*Number(fAddPrice)).toFixed(2);
			}
		}
		FSaleMoney=Number(FMoney)+Number(FAddMoney);
	}else{ //按重量销售
		FMoney=(Number(fPrice)*Number(fWeight)).toFixed(2);
		FSaleMoney=FMoney;
	}
	var MoneyInfo={};
	MoneyInfo.FMoney=FMoney;
	MoneyInfo.FAddMoney=FAddMoney;
	MoneyInfo.FSaleMoney=FSaleMoney;
	return  MoneyInfo;
}


//四舍五入扩展方法
Number.prototype.toFixed=function (d) { 
    var s=this+""; 
    if(!d)d=0; 
    if(s.indexOf(".")==-1)s+="."; 
    s+=new Array(d+1).join("0"); 
    if(new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+(d+1)+"})?)\\d*$").test(s)){
        var s="0"+RegExp.$2,pm=RegExp.$1,a=RegExp.$3.length,b=true;
        if(a==d+2){
            a=s.match(/\d/g); 
            if(parseInt(a[a.length-1])>4){
                for(var i=a.length-2;i>=0;i--){
                    a[i]=parseInt(a[i])+1;
                    if(a[i]==10){
                        a[i]=0;
                        b=i!=1;
                    }else break;
                }
            }
            s=a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");

        }if(b)s=s.substr(1); 
        return (pm+s).replace(/\.$/,"");
    }return this+"";

};

function leftPad(num, n) {
	var zeroString="";
	for(var i=1;i<n;i++){
		zeroString=zeroString+'0';
	}	
	return (zeroString+num.toString()).right(n);
}

/**
 * 获得主键ID
 * @param tableName 表名
 */
function GetSystemID(tableName){
	var systemID="";
	$.ajax({
        type: "POST",
        url:"../util/common/GetSystemID",
        async:false,
        data:{"tableName":tableName},
        success: function (data) {
        	systemID=data; 
        }
    });
	return systemID;
}

/**
 * 取得JSON最后一条
 * @param fkeyName  fkeyValue 
 */
function  GetLastJsonData(jsonData,fkeyName,fkeyValue){
	alert("GetLastJsonData fkeyValue"+fkeyValue);
	var retValue="";
	$.each(jsonData,function(n,value){
		alert("value[fkeyName]:"+value[fkeyName]);
		
		if(value[fkeyName]==fkeyValue){
			retValue=value[fkeyName];
		}
	});
	alert("retValue:"+retValue);
	return retValue;
}


/**
 *根据供应商ID获取对应的核算单位 
 * @param fproviderid 供应商ID
 */
function GetProviderOrgID (fproviderid){
	var providerInfo="";
	$.ajax({
        type: "POST",
        url:"../base/SupplyProvider/GetSupplyProviderInfo",
        async:false,
        data:{"fproviderid":fproviderid},
        success: function (data) {
        	providerInfo=JSON.parse(data);
        }
    }); 
	return providerInfo.forgid;
}

/**
 *根据组织单位取得对应客户ID
 * @param forgid 组织ID
 */
function GetCustomerByFOrgID (forgid){
	var customerInfo="";
	$.ajax({
		type: "POST",
		url:"../base/SaleCustomer/GetSaleCustomerInfo",
		async:false,
		data:{"forgid":forgid},
		success: function (data) {
			customerInfo=JSON.parse(data);
		}
	}); 
		if(customerInfo==null){
			return "";
		}else{
			return customerInfo.fcustomerid;
		}
}

/**
 *判断客户是否是内部客户
 * @param fcustomerid 客户ID
 */
function isInnerCustomer(fcustomerid){
	var isInnerCustomer=false;
	$.ajax({
		type: "POST",
		url:"../base/SaleCustomer/GetSaleCustomerInfoMode",
		async:false,
		data:{"fcustomerid":fcustomerid},
		success: function (data) {
			customerInfo=JSON.parse(data);
		}
	}); 
		if(customerInfo==null){
			return false;
		}else{
			if(customerInfo.finnersign==1){
				return true;
			}else {
				return false;
				
			}
		}
}


/**
 *根据核算单位ID获取供应商信息 
 * @param forgid 核算单位ID
 */
function GetProviderByFOrgID (forgid){
	var providerInfo="";
	$.ajax({
		type: "POST",
		url:"../base/SupplyProvider/GetProviderByFOrgID",
		async:false,
		data:{"forgid":forgid},
		success: function (data) {
			providerInfo=JSON.parse(data);
		}
	}); 
	return providerInfo;
}


/**
 *获得反审核的数据ID 
 * @param selectRows 选中的JSON对象
 * @param id  需要过滤的字段名称
 */
function GetUnSubmitIds(selectRows,id){
	var returnids="";
	if(selectRows!=null && selectRows.length>0){
	    $.each(selectRows, function(n, value){
	    	for(var key in value){ 
	    		if(key==id){
	    			if(returnids.indexOf(value[key])==-1){	//提交审核了但是没有审核的记录可做反提交
	    				returnids += value[key]+",";
	    			}
	    		}
	    	}
	    });
	}
	return returnids;
}

/**
 *判断明细列表中是否有审核状态大于0的，如果有，返回true 
 * @param rows 选中的JSON对象
 */
function isAuditing(rows){
	var auditingFlag=false;
	if(rows!=null && rows.length>0){
	    $.each(rows, function(n, value){ 
    		if(value.fauditingstatus>0){
    			auditingFlag = true;
    		}
	    });
	}
	return auditingFlag;
}


/**
 *判断供应商是否是内部客户
 * @param fproviderid 供应商ID
 */
function isInnerProvider(fproviderid){ 
	var providerInfo;
	$.ajax({
		type: "POST",
		url:"../base/SupplyProvider/GetProviderInfoMode",
		async:false,
		data:{"fproviderid":fproviderid},
		success: function (data) {
			providerInfo=JSON.parse(data);
		}
	}); 
	if(providerInfo==null){
		return false;
	}else{
		if(providerInfo.finnersign==1){
			return true;
		}else {
			return false;
		}
	}
}

/**
 * 根据年月获得财务年月信息
 * @param fproviderid 供应商ID
 */
function getYearPeriodInfo(fyearperiod,fcompanyid){ 
	var yearPeriodInfo;
	$.ajax({
		type: "POST",
		url:"../sys/AccountDate/GetAccountDate",
		async:false,
		data:{"fyearperiod":fyearperiod,"fcompanyid":fcompanyid},
		success: function (data) {
			yearPeriodInfo=JSON.parse(data);
		}
	});
	return yearPeriodInfo;
}
/**
 * 根据当前日期，猪只类群获取存栏台账头数
 * @param fproviderid 供应商ID
 */
function getHeadagebyPigAccount(fmonoidid,faccountunitid,fcolonyhouseid){ 
	var SumHeadage;
	$.ajax({
		type: "POST",
		url:"../util/common/GetHeadagebyPigAccount",
		async:false,
		data:{"fmonoidid":fmonoidid,"faccountunitid":faccountunitid,"fcolonyhouseid":fcolonyhouseid},
		success: function (data) {
			SumHeadage=data;
		}
	});
	return SumHeadage;
}

function  SetQueryCondition(tableName,callbackFuc){
	//查询元素
	var queryCondition ='<div class="condition_div" >'+ 
				'	<div class="conditionInput">'+
				'		<select id="queryConditionSelect" name="queryConditionSelect" class="easyui-combobox" data-options="editable:false" style="width: 100px;"></select>'+
				'	</div>'+
				'</div>'; 
	//查询条件
	var queryConditionOperator ='<div class="condition_div" >'+ 
				'	<div class="conditionInput">'+
				'		<select id="conditionOperator" name="conditionOperator" class="easyui-combobox" data-options="editable:false" style="width: 80px;"></select>'+
				'	</div>'+
				'</div>'; 
					
	//查询值
	var queryConditionValue =' <div class="condition_div"> '+ 
				'	<div class="conditionInput">'+
				'		<input id="conditionValue" name="conditionValue" data-options="required:true" value="" style="width: 150px;"　type="text" autocomplete="off"/>'+
				'	</div>'+
				'</div>';					
	$("#queryCondition").append(queryCondition);
	$("#queryCondition").append(queryConditionOperator);
	$("#queryCondition").append(queryConditionValue);
	
	SetQueryConditionSelect("queryConditionSelect", tableName,function(){
		callbackFuc();
	});
}
	
function SetQueryConditionSelect(controlName, tableName, callbackFuc){
	$('#queryConditionSelect').combobox({
		onChange: function (newValue, oldValue){
			var newValueStr = newValue.split(",");
			var date; 
			if(newValueStr[1] == 'varchar'){
				date = varcharOperatorData;     	
			}else{
				date = operatorData;
			}
			$('#conditionOperator').combobox({    
				data:date,
			    valueField: 'id',    
	   			textField: 'text',				
				onLoadSuccess:function(){
					if(date.length>0){  
						setTimeout(function () { 
							$('#conditionOperator').combobox('setValue',date[0].id); 
						}, 300);
					} 
				}
			});
		}
	});	
	$.ajax({
        type : "POST",
        url : "../util/UserManage/getObjectPropertyList",
        async : false,
        data : {"fobjectname":tableName,"random":Math.random()},
        success: function (result) {
	        var test= JSON.parse(result);
        	var columns=new Array();
        	for (var p in test){ 
        		var result =new Object(); 
        		result.id=test[p].fpropertyname+","+test[p].fdatatype;
            	result.text=test[p].fdisplayname;
            	columns.push(result);
        	} 
        	$('#'+controlName).combobox({    
	    		data:columns,     
			    multiple:false,
			    valueField: 'id',    
    			textField: 'text',
			    onLoadSuccess:function(){
			    	if(columns.length>0){  
						setTimeout(function(){
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

function GetQueryCondition(){
	var queryConditionWhere = ""; 
	if($("#conditionValue").val()!=''){  
		var operator = $("#conditionOperator").combobox("getValue");
		//根据类型来区分，datetime和其他
		var dataType = $("#queryConditionSelect").combobox("getValue").split(",")[1];
		if(dataType == 'datetime'){
			queryConditionWhere = queryConditionWhere + " AND CONVERT(VARCHAR(10),"+ $("#queryConditionSelect").combobox("getValue").split(",")[0]+",23)";
		}else{
			queryConditionWhere = queryConditionWhere + " AND " + $("#queryConditionSelect").combobox("getValue").split(",")[0];
		}
		//拼符号
		queryConditionWhere = queryConditionWhere+" "+$("#conditionOperator").combobox("getValue");
		//查询的条件
		if(operator == 'in'){
			var splitStr = $("#conditionValue").val().replaceAll("，", ",").replaceAll(" ", ",").split(",");;
			queryConditionWhere = queryConditionWhere+" (";
			for(var i=0; i<splitStr.length; i++){
				queryConditionWhere = queryConditionWhere + "'"+ splitStr[i]+"',";
			}
			queryConditionWhere = queryConditionWhere.substring(0,queryConditionWhere.length-1) + ")";
		}else{
			queryConditionWhere = queryConditionWhere+" '"+$("#conditionValue").val()+"'";
		}
	}
	return queryConditionWhere;
}
function parseISO8601(dateStringInRange) {  
	var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,  
	date = new Date(NaN), month,  
	parts = isoExp.exec(dateStringInRange);  
  
	if(parts) {  
		month = +parts[2];  
		date.setFullYear(parts[1], month - 1, parts[3]);  
		if(month != date.getMonth() + 1) {  
			date.setTime(NaN);  
		}  
	}  
	return date;  
}


/**
 * 根据品种，采购分类选择物料
 * @param fcultivarid 品种ID
 * @param fpurchaseid 采购类型ID
 */
function GetMaterielByCultivar(fcultivarid,fpurchaseid){ 
	var materielInfo;
	$.ajax({
		type: "POST",
		url:"../util/common/GetMaterielByCultivar",
		async:false,
		data:{"fcultivarid":fcultivarid,"fpurchaseid":fpurchaseid},
		success: function (data) {
			materielInfo=JSON.parse(data);
		}
	});
	return materielInfo;
}

/**
 * 体重均匀度
 * @param dataRows	参与计算均匀度的行对象
 * @param field		参与计算巨晕对的行字段
 * @returns
 */
function getFuniformity(dataRows,field){
	var totalNum = 0;		//计算总重
	var totalSelect = "";	//重量
	var rowNum = dataRows.length; 	//总行数
	var avgNum = 0;
	if(dataRows!=null && dataRows.length>0){
	    $.each(dataRows, function(n, value){
	    	for(var key in value){ 
	    		if(key==field){
	    			totalNum += Number(value[key]);
	    			totalSelect += value[key]+",";
	    		}
	    	}
	    });
	}
	totalSelect = totalSelect.substring(0, totalSelect.length-1);
	var totalSelectArr = totalSelect.split(',');
	var avgWeight = (Number(totalNum)/Number(rowNum)).toFixed(2);
	$.each(totalSelectArr, function(n, value){
		if(Number(value) >= avgWeight*0.9 && Number(value)<= avgWeight*1.1){
			avgNum += 1;
		}
	});
	var result = (Number(avgNum)*100/Number(rowNum)).toFixed(2);
	return result;
}

//给数据源添加小计
function SetDataSourceGroup(dataSource,totalField){
	var sumData="0";
	$.each(dataSource,function(n, e) {
		if(e[totalField]!=undefined){
			sumData=(Number(sumData)+Number(e[totalField])).toString();
		}
	});
	 
	return fmoney(sumData,2);
}

//两个日期相差天数
function  DateDiff(date, newDate){
		var date1 = Date.parse(date); 
		var date2 = Date.parse(newDate); 
		var diffDays = (date1 - date2) / 3600 / 1000 / 24; 
		return  diffDays + 1;
  }

