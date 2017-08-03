package com.mike.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.mike.sys.dao.T_UserMapper;
import com.mike.sys.model.T_UserModel;
import com.mike.sys.pojo.T_User;
import com.mike.sys.service.T_UserService;

@Service("UserService")
public class T_UserServiceImp implements T_UserService{
	@Autowired
	private T_UserMapper userMapper;
	
	public Boolean deleteByPrimaryKey(String fuserids) {
		List<T_User> list=JSON.parseArray(fuserids, T_User.class);
		for(T_User user:list){
			userMapper.deleteUserList(user);
		}
		return true;
	}

	public int AddUserInfo(T_User record) {
		return userMapper.insertSelective(record);
	}

	public T_User GetUserById(Long fuserid) {
		return userMapper.selectByPrimaryKey(fuserid);
	}

	public T_User GetUserByName(String userName) {
		return userMapper.findUserByName(userName);
	}

	public List<T_User> GetUserList() {
		return userMapper.findUserList();
	}

	public int EditUserInfo(T_User record) {
		return userMapper.updateByPrimaryKeySelective(record);
	}

	public int ModifyPassword(T_User record) {
		return userMapper.ModifyPassword(record);
	}

	public List<T_User> GetUserList(T_UserModel userModel) throws Exception {
		int rowNum = userMapper.queryByCount(userModel);
		userModel.getPager().setRowCount(rowNum);
		return this.userMapper.selectAll(userModel);
	}

		
}
