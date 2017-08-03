package com.mike.sys.service;

import java.util.List;

import com.mike.sys.model.T_RoleModel;
import com.mike.sys.pojo.T_Role;

public interface T_RoleService {
    public Boolean DeleteRoleInfo(String froleids);

    public int AddRoleInfo(T_Role record);

    public T_Role GetRoleInfo(Integer froleid);
    
    public List<T_Role> GetRoleTree();
    
    public List<T_Role> GetRoleList(T_RoleModel roleModel);

    public int EditRoleInfo(T_Role record);
}