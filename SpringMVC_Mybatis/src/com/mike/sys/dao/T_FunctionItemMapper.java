package com.mike.sys.dao;

import java.util.List;

import com.mike.sys.pojo.T_FunctionItem;

public interface T_FunctionItemMapper {
    int deleteByPrimaryKey(int fitemid);

    int insertSelective(T_FunctionItem record);

    T_FunctionItem selectByPrimaryKey(int fitemid);
    
    List<T_FunctionItem> findFunctionItemTree();
    
    List<T_FunctionItem> findFunctionItemBotton();

    int updateByPrimaryKeySelective(T_FunctionItem record);
}