package com.mike.sys.dao;

import java.util.List;

import com.mike.sys.model.UserModel;
import com.mike.sys.pojo.FunctionTreeEntity;
import com.mike.sys.pojo.User;

public interface UserMapper {
	
	User findUserById(int id)throws Exception;
	
	List<User> findUserList()throws Exception;
	
	List<FunctionTreeEntity> findFunctionMenu() throws Exception;
	
	User findUserByName(String name) throws Exception;
	
	void ModifyPassword(User user) throws Exception;
	
	FunctionTreeEntity findFunctionMenuByID(int id);
	
	List<User> selectAll(UserModel userModel);

	int queryByCount(UserModel userModel);
}
