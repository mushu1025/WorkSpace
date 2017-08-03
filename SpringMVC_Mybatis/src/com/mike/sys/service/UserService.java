package com.mike.sys.service;

import java.util.List;

import com.mike.sys.model.UserModel;
import com.mike.sys.pojo.FunctionTreeEntity;
import com.mike.sys.pojo.User;

public interface UserService {
	public User findUserById(int id)throws Exception;
	
	public List<User> findUserList()throws Exception;
	
	public List<FunctionTreeEntity> findFunctionMenu() throws Exception;
	
	public User findUserByName(String userName) throws Exception;
	
	public void ModifyPassword(User user) throws Exception;
	
	public FunctionTreeEntity findFunctionMenuByID(int id);
	
	public List<User> GetUserList(UserModel userModel) throws Exception;
}
