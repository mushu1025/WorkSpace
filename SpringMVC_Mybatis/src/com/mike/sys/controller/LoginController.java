package com.mike.sys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSONObject;
import com.mike.sys.pojo.T_User;
import com.mike.sys.service.T_UserService;

@Controller
public class LoginController {
	@Autowired
	private T_UserService userService;
	/**
	 * µÇÂ¼
	 * @param session
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping("/login")
	public void login(HttpSession session,HttpServletRequest request,HttpServletResponse response)throws Exception{
		String message="fail";
		String orgpassword=null;
		int returnvalue=0;
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		if(username!=null&& !username.equals("")){
			T_User user = userService.GetUserByName(username);
			if(user!=null){
				session.setAttribute("username", username);
				orgpassword=user.getFpassword();
				if(orgpassword.equals(password)){
					returnvalue=1;
					message="sucessfully";
				}
			}
		}
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("returnvalue", returnvalue);
		jsonOject.put("messageType", message);
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json;charset=utf-8");
		response.getWriter().write(jsonOject.toString());
	}
	
	/**
	 * ÍË³ö
	 * @param request
	 * @param response
	 * @param session
	 * @throws Exception
	 */
	@RequestMapping("/logout")
	public void logout(HttpServletRequest request,HttpServletResponse response,HttpSession session) throws Exception {

		// Çå³ýsession
		session.invalidate();
		JSONObject jsonOject=new JSONObject();
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json;charset=utf-8");
		response.getWriter().write(jsonOject.toString());
	}
}
