package com.mike.sys.service;

import java.util.List;

import com.mike.sys.model.T_UserModel;
import com.mike.sys.pojo.T_User;

public interface T_UserService {
	
	public Boolean deleteByPrimaryKey(String fuserid)throws Exception;

	public int AddUserInfo(T_User record)throws Exception;

	public T_User GetUserById(Long fuserid)throws Exception;
    
	public T_User GetUserByName(String userName)throws Exception;
	
	public List<T_User> GetUserList()throws Exception;

	public int EditUserInfo(T_User record)throws Exception;
	
	public int ModifyPassword(T_User record)throws Exception;
	
	public List<T_User> GetUserList(T_UserModel userModel) throws Exception;
}
