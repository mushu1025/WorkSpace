package com.mike.sys.service;

import java.util.List;

import com.mike.sys.pojo.M_user_item;
import com.mike.sys.pojo.RoleItem;

public interface M_user_itemService {
    int deleteByPrimaryKey(Integer mid);

    int insertSelective(M_user_item record);

    M_user_item selectByPrimaryKey(Integer mid);

    int updateByPrimaryKeySelective(M_user_item record);
    
    List<RoleItem> GetByType(RoleItem roleitem);

}