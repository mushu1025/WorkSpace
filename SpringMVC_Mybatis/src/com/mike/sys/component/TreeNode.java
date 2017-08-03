package com.mike.sys.component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 
 * 项目名称：ChickenMis 
 * 类名�? TreeNode.java
 * 类描�? 
 * 类型: JAVA�? * �?��修改时间:2015-7-26 下午10:53:21
 * 作�?�?沙敏
 * @since  2015-7-26
 * @version 
 *
 */
public class TreeNode {
    private String id;
    private String text;
    private String iconCls = "";
    private boolean checked;
    private String state;
    private String isDetail ="";  //系统应用管理中在树节点添加是否明细，判断能否添加下级应用
    private String treePath="";
    private final List<TreeNode> children = new ArrayList<TreeNode>();
    private final Map<String,Object> attributes = new HashMap<String, Object>();
    
    
    public String getTreePath() {
		return treePath;
	}

	public void setTreePath(String treePath) {
		this.treePath = treePath;
	}

	public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getIsDetail() {
        return isDetail;
    }

    public void setIsDetail(String isDetail) {
        this.isDetail = isDetail;
    }

    public String getIconCls() {
        return iconCls;
    }

    public void setIconCls(String iconCls) {
        this.iconCls = iconCls;
    }
    
    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public List<TreeNode> getChildren() {
        return children;
    }


    public Map<String, Object> getAttributes() {
        return attributes;
    }
}
