package com.mike.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mike.sys.dao.T_FunctionItemMapper;
import com.mike.sys.pojo.T_FunctionItem;
import com.mike.sys.service.T_FunctionItemService;

@Service("FunctionItemService")
public class T_FunctionItemServiceImpl implements T_FunctionItemService{
	@Autowired
	private T_FunctionItemMapper functionItemService;

	public int deleteByPrimaryKey(int fitemid) {
		return functionItemService.deleteByPrimaryKey(fitemid);
	}

	public int addFunctionItem(T_FunctionItem record) {
		return functionItemService.insertSelective(record);
	}

	public T_FunctionItem GetFunctionItemInfo(int fitemid) {
		return functionItemService.selectByPrimaryKey(fitemid);
	}

	public int EditFunctionItem(T_FunctionItem record) {
		return functionItemService.updateByPrimaryKeySelective(record);
	}

	public List<T_FunctionItem> GetFunctionItemTree() {
		return functionItemService.findFunctionItemTree();
	}

	public List<T_FunctionItem> GetFunctionItemBotton() {
		return functionItemService.findFunctionItemBotton();
	}

}
