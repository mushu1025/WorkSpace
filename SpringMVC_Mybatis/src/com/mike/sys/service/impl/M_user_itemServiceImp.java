package com.mike.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mike.sys.dao.M_user_itemMapper;
import com.mike.sys.pojo.M_user_item;
import com.mike.sys.pojo.RoleItem;
import com.mike.sys.service.M_user_itemService;
@Service("M_user_itemService")
public class M_user_itemServiceImp implements M_user_itemService{
	@Autowired
	private M_user_itemMapper m_user_itemMapper;

	public int deleteByPrimaryKey(Integer mid) {
		return 0;
	}

	public int insertSelective(M_user_item record) {
		return 0;
	}

	public M_user_item selectByPrimaryKey(Integer mid) {
		return m_user_itemMapper.selectByPrimaryKey(mid);
	}

	public int updateByPrimaryKeySelective(M_user_item record) {
		return m_user_itemMapper.updateByPrimaryKeySelective(record);
	}

	public List<RoleItem> GetByType(RoleItem roleitem) {
		return m_user_itemMapper.selectByType(roleitem);
	}
	
}
