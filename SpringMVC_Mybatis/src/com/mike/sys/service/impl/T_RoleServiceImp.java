package com.mike.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.mike.sys.dao.T_RoleMapper;
import com.mike.sys.model.T_RoleModel;
import com.mike.sys.pojo.T_Role;
import com.mike.sys.service.T_RoleService;
@Service("T_RoleService")
public class T_RoleServiceImp implements T_RoleService{
	
	@Autowired
	private T_RoleMapper roleMapper;
	
	public Boolean DeleteRoleInfo(String froleids) {
		List<T_Role> list = JSON.parseArray(froleids, T_Role.class);
		for(T_Role role:list){
			roleMapper.deleteByPrimaryKey(role.getFroleid());
		}
		return true;
	}

	public int AddRoleInfo(T_Role record) {
		return roleMapper.insertSelective(record);
	}

	public T_Role GetRoleInfo(Integer froleid) {
		return roleMapper.selectByPrimaryKey(froleid);
	}

	public List<T_Role> GetRoleList(T_RoleModel roleModel) {
		int rowNum = roleMapper.queryByCount(roleModel);
		roleModel.getPager().setRowCount(rowNum);
		return roleMapper.selectAll(roleModel);
	}

	public int EditRoleInfo(T_Role record) {
		return roleMapper.updateByPrimaryKeySelective(record);
	}

	public List<T_Role> GetRoleTree() {
		return roleMapper.selectRoleTree();
	}

}
