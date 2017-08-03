package com.mike.sys.dao;

import java.util.List;

import com.mike.sys.pojo.M_user_item;
import com.mike.sys.pojo.RoleItem;

public interface M_user_itemMapper {
    int deleteByPrimaryKey(Integer mid);

    int insertSelective(M_user_item record);

    M_user_item selectByPrimaryKey(Integer mid);
    
    List<RoleItem> selectByType(RoleItem roleitem);

    int updateByPrimaryKeySelective(M_user_item record);

}