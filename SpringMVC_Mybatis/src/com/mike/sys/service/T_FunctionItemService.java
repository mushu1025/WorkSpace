package com.mike.sys.service;

import java.util.List;

import com.mike.sys.pojo.T_FunctionItem;

public interface T_FunctionItemService {
	
	public int deleteByPrimaryKey(int fitemid);

	public int addFunctionItem(T_FunctionItem record);

	public T_FunctionItem GetFunctionItemInfo(int fitemid);

	public int EditFunctionItem(T_FunctionItem record);
	
	public List<T_FunctionItem> GetFunctionItemTree();
	
	public List<T_FunctionItem> GetFunctionItemBotton();

}
