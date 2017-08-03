package com.mike.sys.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.mike.sys.pojo.M_user_item;
import com.mike.sys.pojo.RoleItem;
import com.mike.sys.pojo.T_FunctionItem;
import com.mike.sys.service.M_user_itemService;

@Controller
public class M_user_itemControll {
	@Autowired
	private M_user_itemService m_user_itemService;
	
	@RequestMapping(value = "/sys/getfunctionmenubytype")
	public void GetfunctionByType(HttpServletRequest request,HttpServletResponse response)
			throws Exception {
		RoleItem roleitem=new RoleItem();
		int froleId = Integer.parseInt(request.getParameter("ID"));
		roleitem.setFroleId(froleId);
		roleitem.setFunctionType(0);
		List<RoleItem> m_user_item = m_user_itemService.GetByType(roleitem);
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(JSON.toJSONString(m_user_item));
		response.getWriter().flush();
		response.getWriter().close();
	}
	
	@RequestMapping(value = "/sys/getfunctionbottonbytype")
	public void GetfunctionBottonByType(HttpServletRequest request,HttpServletResponse response)
			throws Exception {
		RoleItem roleitem=new RoleItem();
		int froleId = Integer.parseInt(request.getParameter("ID"));
		roleitem.setFroleId(froleId);
		roleitem.setFunctionType(1);
		List<RoleItem> m_user_item = m_user_itemService.GetByType(roleitem);
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(JSON.toJSONString(m_user_item));
		response.getWriter().flush();
		response.getWriter().close();
	}
}
