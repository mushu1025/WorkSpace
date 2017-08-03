package com.mike.sys.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mike.sys.component.EasyDataTableModel;
import com.mike.sys.component.EasyTreeModel;
import com.mike.sys.component.TreeNode;
import com.mike.sys.model.T_RoleModel;
import com.mike.sys.pojo.T_Role;
import com.mike.sys.service.T_RoleService;

@Controller
public class RoleController {
	private static Logger logger = Logger.getLogger(UserController.class);
	@Autowired
	private T_RoleService roleService;
	@RequestMapping(value = "/sys/Role/GetRoleTree")
	@ResponseBody
	public EasyTreeModel<T_Role> GetRoleTree() throws Exception {
		EasyTreeModel<T_Role> treeModel = new EasyTreeModel<T_Role>() {
			/**
			 * @字段 serialVersionUID : 
			 */
			private static final long serialVersionUID = -4509373470273140729L;
			@Override
			public List<T_Role> load(String parentId) throws Exception {
				return roleService.GetRoleTree();
			}
			@Override
			public TreeNode model2Node(T_Role role) {
				TreeNode treeNode = new TreeNode();
				treeNode.setId(String.valueOf(role.getFroleid()));
				treeNode.setText(role.getFrolename());
				return treeNode;
			}
		};
		treeModel.generate("froleid", "fparentid");
		return treeModel;
	}
	
	
	
	@RequestMapping(value = "/sys/Role/GetRoleList")
    @ResponseBody
    public EasyDataTableModel<T_Role> GetRoleList(final HttpServletRequest req, Model model) throws Exception {
    	EasyDataTableModel<T_Role> TableModel =new EasyDataTableModel<T_Role>(req) {		
    		 @Override
             public List<T_Role> fechData(int page, int size, String sort, String order) throws Exception {
  				T_RoleModel roleModel = new T_RoleModel();
				// 设置查询参数
				int fparentId = Integer.parseInt(req.getParameter("fparentId").trim());
				if (!"".equals(fparentId))
					roleModel.setFparentid(fparentId);
 				//设置分页参数
  				roleModel.setPage(page);
  				roleModel.setRows(size);
  				roleModel.setSort(sort);
  				roleModel.setOrder(order);
 				//执行查询
            	List<T_Role> Detail = roleService.GetRoleList(roleModel);
				//设置总行数
				setTotal(roleModel.getPager().getRowCount());
            	return Detail ;
             }
    	};
        return TableModel;
    }
	
	
	
	
}
