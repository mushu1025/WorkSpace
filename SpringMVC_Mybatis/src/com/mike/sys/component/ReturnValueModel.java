package com.mike.sys.component;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;

public class ReturnValueModel{
	
	//返回错误消息
	public String ReturnValueErr(Exception ex)
	{
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("returnvalue", 0);
		jsonOject.put("messageType", "error");
		jsonOject.put("message", ex.getMessage());
		return jsonOject.toString();
		/*ReturnValueModel returnValue=new ReturnValueModel();
		returnValue.returnvalue=0;
		returnValue.messageType="error";
		returnValue.message=ex.getMessage();
		return returnValue;*/
	}
	
	//返回成功
	public String ReturnValueSucess(String message)
	{
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("returnvalue", 1);
		jsonOject.put("messageType", "info");
		jsonOject.put("message", message);
		return jsonOject.toString();
		
		/*ReturnValueModel returnValue=new ReturnValueModel();
		returnValue.returnvalue=1;
		returnValue.messageType="info";
		returnValue.message=message;
		return returnValue;*/
	}
	
	//返回成功
	public String ReturnValueSucess(String message, String ID){
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("returnvalue", 1);
		jsonOject.put("messageType", "info");
		jsonOject.put("ID", ID);
		jsonOject.put("message", message);
		return jsonOject.toString();
		
		/*ReturnValueModel returnValue=new ReturnValueModel();
		returnValue.returnvalue=1;
		returnValue.messageType="info";
		returnValue.message=message;
		return returnValue;*/
	}
	
	//返回成功
	public String ReturnValueSucess(String message,HashMap<String, String> returnValue){
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("returnvalue", 1);
		jsonOject.put("messageType", "info");
		
		for (Map.Entry<String, String> m : returnValue.entrySet()) {
			 jsonOject.put(m.getKey(), m.getValue());
	    }
		jsonOject.put("message", message);
		return jsonOject.toString();
		
		/*ReturnValueModel returnValue=new ReturnValueModel();
		returnValue.returnvalue=1;
		returnValue.messageType="info";
		returnValue.message=message;
		return returnValue;*/
	}
	
	//返回警告
	public String ReturnValueFailed(String message)
	{
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("returnvalue", 0);
		jsonOject.put("messageType", "error");
		jsonOject.put("message", message);
		return jsonOject.toString();
		/*ReturnValueModel returnValue=new ReturnValueModel();
		returnValue.returnvalue=0;
		returnValue.messageType="info";
		returnValue.message=message;
		return returnValue;*/
	}
	
	//1:成功 0:失败
    private Integer returnvalue;

    //消息类型(info error warning)
    private String messageType;

    
    //成功或�?失败消息
    private String message;

    
    public String getMessageType() {
		return messageType;
	}

	public void setMessageType(String messageType) {
		this.messageType = messageType;
	}
    
    public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Integer getReturnvalue() {
		return returnvalue;
	}

	public void setReturnvalue(Integer returnvalue) {
		this.returnvalue = returnvalue;
	}
}
