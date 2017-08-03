package com.mike.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mike.sys.dao.UserMapper;
import com.mike.sys.model.UserModel;
import com.mike.sys.pojo.FunctionTreeEntity;
import com.mike.sys.pojo.User;
import com.mike.sys.service.UserService;

@Service("itemsService")
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper userMapper;
	
	public User findUserById(int id) throws Exception {
		return userMapper.findUserById(id);
	}

	public List<User> findUserList() throws Exception {
		return userMapper.findUserList();
	}

	public List<FunctionTreeEntity> findFunctionMenu() throws Exception {
		return userMapper.findFunctionMenu();
	}

	public User findUserByName(String userName) throws Exception {
		return userMapper.findUserByName(userName);
	}

	public void ModifyPassword(User user) throws Exception {
		userMapper.ModifyPassword(user);
		
	}

	public FunctionTreeEntity findFunctionMenuByID(int id) {
		return userMapper.findFunctionMenuByID(id);
	}

	public List<User> GetUserList(UserModel userModel) throws Exception {
		int rowNum = userMapper.queryByCount(userModel);
		userModel.getPager().setRowCount(rowNum);
		return this.userMapper.selectAll(userModel);
	}

}
