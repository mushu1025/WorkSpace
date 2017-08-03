package com.mike.sys.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mike.sys.dao.sysMapper;
import com.mike.sys.service.sysService;
@Service("sysService")
public class sysServiceImp implements sysService{
	@Autowired
	private sysMapper sysmapper;
	
	public int getSystemCurrentId(String keyname) throws Exception {
		return sysmapper.getSystemCurrentId(keyname);
	}

}
