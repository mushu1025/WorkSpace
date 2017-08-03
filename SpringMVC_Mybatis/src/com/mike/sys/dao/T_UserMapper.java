package com.mike.sys.dao;

import java.util.List;
import com.mike.sys.model.T_UserModel;
import com.mike.sys.pojo.T_User;

public interface T_UserMapper {
	
	int queryByCount(T_UserModel userModel);
	
	List<T_User> selectAll(T_UserModel userModel);

    int deleteUserList(T_User user);

    int insert(T_User record);

    int insertSelective(T_User record);

    T_User selectByPrimaryKey(Long fuserid);
    
    T_User findUserByName(String userName);
    
    List<T_User> findUserList();

    int updateByPrimaryKeySelective(T_User record);

    int updateByPrimaryKey(T_User record);
    
    int ModifyPassword(T_User record);
}