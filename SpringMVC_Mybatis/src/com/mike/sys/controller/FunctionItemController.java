package com.mike.sys.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.mike.sys.component.EasyTreeModel;
import com.mike.sys.component.TreeNode;
import com.mike.sys.pojo.T_FunctionItem;
import com.mike.sys.service.T_FunctionItemService;

@Controller
public class FunctionItemController {
	@Autowired
	private T_FunctionItemService functionItemService;
	/**
	 * 获取检测项目树
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/sys/function/getfunctionTree")
	@ResponseBody
	public EasyTreeModel<T_FunctionItem> GetFunctionItemTree() throws Exception {
		EasyTreeModel<T_FunctionItem> treeModel = new EasyTreeModel<T_FunctionItem>() {
			/**
			 * @字段 serialVersionUID :
			 */
			private static final long serialVersionUID = -2513810628697516539L;
			
			@Override
			public List<T_FunctionItem> load(String fitemid) throws Exception {
				return functionItemService.GetFunctionItemTree();
			}
			
			@Override
			public TreeNode model2Node(T_FunctionItem functionmenu) {
				TreeNode treeNode = new TreeNode();
				treeNode.setId(String.valueOf(functionmenu.getFitemid()));
				treeNode.setText(functionmenu.getFitemname());
				treeNode.getAttributes().put("url", functionmenu.getFurl());
				treeNode.setIconCls(functionmenu.getIconcls());
				return treeNode;
			}
		};
		treeModel.generate("fitemid", "fparentid");
		return treeModel;
	}
	
	/**
	 * 获取按钮树
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/sys/function/getfunctionBottonTree")
	@ResponseBody
	public EasyTreeModel<T_FunctionItem> GetFunctionBottonTree() throws Exception {
		EasyTreeModel<T_FunctionItem> treeModel = new EasyTreeModel<T_FunctionItem>() {
			/**
			 * @字段 serialVersionUID :
			 */
			private static final long serialVersionUID = -2513810628697516539L;
			
			@Override
			public List<T_FunctionItem> load(String fitemid) throws Exception {
				return functionItemService.GetFunctionItemBotton();
			}
			
			@Override
			public TreeNode model2Node(T_FunctionItem functionmenu) {
				TreeNode treeNode = new TreeNode();
				treeNode.setId(String.valueOf(functionmenu.getFitemid()));
				treeNode.setText(functionmenu.getFitemname());
				treeNode.getAttributes().put("url", functionmenu.getFurl());
				treeNode.setIconCls(functionmenu.getIconcls());
				return treeNode;
			}
		};
		treeModel.generate("fitemid", "fparentid");
		return treeModel;
	}
	
	/**
	 * 
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = "/sys/getfunctionmenubyid")
	public void Getfunctionmenu(HttpServletRequest request,HttpServletResponse response)
			throws Exception {
		
		int id = Integer.parseInt(request.getParameter("ID"));
		T_FunctionItem functionItem = functionItemService.GetFunctionItemInfo(id);
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(JSON.toJSONString(functionItem));
		response.getWriter().flush();
		response.getWriter().close();
	}
	
	
	
	
	
}
