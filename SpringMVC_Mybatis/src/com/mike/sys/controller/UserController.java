package com.mike.sys.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mike.sys.component.EasyDataTableModel;
import com.mike.sys.model.T_UserModel;
import com.mike.sys.pojo.T_User;
import com.mike.sys.service.T_UserService;
import com.mike.sys.service.sysService;
  
@Controller
public class UserController {
	private static Logger logger = Logger.getLogger(UserController.class);
	@Autowired
	private T_UserService userService;
	@Autowired
	private sysService sysservice;
	/**
	 * ��ȡ�û���
	 * @param request
	 * @param response
	 * @param session
	 * @throws Exception
	 */
	@RequestMapping("/getUserName")
	public void getUserName(HttpServletRequest request,HttpServletResponse response,HttpSession session) throws Exception {

		String username = session.getAttribute("username").toString();
		JSONObject jsonOject=new JSONObject();
		jsonOject.put("username", username);
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json;charset=utf-8");
		response.getWriter().write(jsonOject.toString());
	}
	
	
	/**
	 * ��ת����ʼҳ��
	 * @param request
	 * @param model
	 * @param session
	 * @return
	 * @throws ServletException
	 * @throws IOException
	 */
	@RequestMapping(value = "/index/index")
	protected String Openindex(HttpServletRequest request, Model model,HttpSession session)throws ServletException, IOException {
		T_User user=new T_User();
		String username = session.getAttribute("username").toString();
		user.setFusername(username);
		model.addAttribute("user", user);
		//�趨�޸���
		return "index";
	}
	
	
	/**
	 * �޸�����
	 * @param oldPassword
	 * @param newPassword
	 * @param res
	 * @throws Exception
	 */
	@RequestMapping(value = "/sys/User/ModifyPwd")
	public void modifyPwd(String oldPassword, String newPassword, HttpServletResponse res,HttpSession  session)
			throws Exception {
		
		String username = (String) session.getAttribute("username");
		T_User user = userService.GetUserByName(username);
		String password=user.getFpassword();
		JSONObject jsonObject = new JSONObject();
		if (!oldPassword.equals("") && !newPassword.equals("")) {
			// ��֤������
			if (password.equals(oldPassword)) {
				T_User userInfo=new T_User();
				userInfo.setFuserid(user.getFuserid());
				userInfo.setFpassword(newPassword);
				userService.ModifyPassword(userInfo);
				jsonObject.put("result", "success");
				jsonObject.put("data", "�޸�����ɹ�");
			} else {
				jsonObject.put("result", "fail");
				jsonObject.put("data", "�޸�����ʧ�ܣ����������");
			}
		}
		res.setCharacterEncoding("UTF-8");
		res.getWriter().write(jsonObject.toString());
		res.getWriter().flush();
		res.getWriter().close();
	}
	
	
	/**
	 * ��ȡ�û��б�
	 * @param req
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/sys/GetUserList")
	@ResponseBody
	public EasyDataTableModel<T_User> GetImmunePartList(
			final HttpServletRequest req, Model model) throws Exception {
		EasyDataTableModel<T_User> TableModel = new EasyDataTableModel<T_User>(
				req) {
			@Override
			public List<T_User> fechData(int page, int size,
					String sort, String order) throws Exception {
				T_UserModel userModel = new T_UserModel();
				// ���÷�ҳ����
				userModel.setPage(page);
				userModel.setRows(size);
				userModel.setSort(sort);
				userModel.setOrder(order);
				// ִ�в�ѯ
				List<T_User> Detail = userService.GetUserList(userModel);
				// ����������
				setTotal(userModel.getPager().getRowCount());
				return Detail;
			}
		};
		return TableModel;
	}
	
	/**
	 * �û�������תҳ��
	 * @param req
	 * @param model
	 * @return
	 * @throws ServletException
	 * @throws IOException
	 */
	@RequestMapping(value = "/base/User/UserAdd")
	public String AddUserInfo(HttpServletRequest req, Model model,HttpSession session)
			throws ServletException, IOException {
		String username = session.getAttribute("username").toString();
		T_User user = new T_User();
		user.setFmodifier(username);
		user.setFmodifytime(new Date());
		model.addAttribute("UserInfo", user);
		return "/base/frmBaseUserAdd";
	}
	
	/**
	 * �û��༭��תҳ��
	 * @param req
	 * @param model
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/base/User/UserEdit")
	public String UserEdit(HttpServletRequest req, Model model,HttpSession session)
			throws Exception {
		String userid = req.getParameter("fuserid");
		long fuserid = Long.parseLong(userid);
		T_User userInfo = userService.GetUserById(fuserid);
		model.addAttribute("UserInfo", userInfo);
		return "/base/frmBaseUserAdd";
	}
	
	
	/**
	 * �����û�      
	 * @param disease
	 * @param res
	 * @throws Exception
	 */
	@RequestMapping(value = "/base/User/AddUserInfo")
	protected void insertUserInfo(
			@ModelAttribute("User") T_User user,
			HttpServletResponse res,HttpSession session) throws Exception{
		int userid = sysservice.getSystemCurrentId("T_User");
		String username = session.getAttribute("username").toString();
		user.setFuserid(userid);
		user.setFmodifier(username);
		user.setFmodifytime(new Date());
		JSONObject jsonObject = new JSONObject();
		try {
			if (userService.AddUserInfo(user)==1) {
				jsonObject.put("ID", "OK");
			} else {
				jsonObject.put("ID", "Cancel");
			}
		} catch (Exception e) {
			logger.error("�����û�������Ϣ����" + e.getMessage());
		}
		res.setCharacterEncoding("UTF-8");
		res.getWriter().write(jsonObject.toString());
		res.getWriter().flush();
		res.getWriter().close();
	}
	
	/**
	 * �޸��û�
	 * @param user
	 * @param res
	 * @param session
	 * @throws Exception
	 */
	@RequestMapping(value = "/base/User/EditeUserInfo")
	protected void EditeUserInfo(
			@ModelAttribute("User") T_User user,
			HttpServletResponse res,HttpSession session) throws Exception{
		String username = session.getAttribute("username").toString();
		user.setFmodifier(username);
		user.setFmodifytime(new Date());
		JSONObject jsonObject = new JSONObject();
		try {
			if (userService.EditUserInfo(user)==1) {
				jsonObject.put("ID", "OK");
			} else {
				jsonObject.put("ID", "Cancel");
			}
		} catch (Exception e) {
			logger.error("�޸��û�������Ϣ����" + e.getMessage());
		}
		res.setCharacterEncoding("UTF-8");
		res.getWriter().write(jsonObject.toString());
		res.getWriter().flush();
		res.getWriter().close();
	}
	
	@RequestMapping(value = "/base/User/DeleteUser")
	public void Delete(HttpServletRequest req, HttpServletResponse res)
			throws Exception {
		String fuserids = req.getParameter("fuserids");
		JSONObject jsonObject = new JSONObject();
		if (userService.deleteByPrimaryKey(fuserids))
			jsonObject.put("ID", "OK");
		else
			jsonObject.put("ID", "Cancel");
		res.setCharacterEncoding("UTF-8");
		res.getWriter().write(jsonObject.toString());
		res.getWriter().flush();
		res.getWriter().close();
	}
}
