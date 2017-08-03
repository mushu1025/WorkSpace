package com.mike.sys.dao;

import java.util.List;

import com.mike.sys.model.T_RoleModel;
import com.mike.sys.pojo.T_Role;

public interface T_RoleMapper {
    int deleteByPrimaryKey(Integer froleid);

    int insertSelective(T_Role record);

    T_Role selectByPrimaryKey(Integer froleid);
    
    List<T_Role> selectRoleTree();
    
    int queryByCount(T_RoleModel roleModel);
	
	List<T_Role> selectAll(T_RoleModel roleModel);

    int updateByPrimaryKeySelective(T_Role record);
}