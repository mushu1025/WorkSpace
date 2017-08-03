package com.mike.sys.component;

import java.util.ArrayList;

/**
 * 
 * 项目名称：ChickenMis 
 * 类名�? AbstractTreeModel.java
 * 类描�? 加载树基�? * 类型: JAVA�? * �?��修改时间:2015-7-26 下午10:50:43
 * 作�?�?沙敏
 * @since  2015-7-26
 * @version 
 *
 */
public abstract class AbstractTreeModel extends ArrayList<TreeNode> {

    /**
	 * @字段 serialVersionUID : 
	 */
	private static final long serialVersionUID = 1L;
	
	private TreeNode root;

    protected void wrapRoot() {
        if (getRoot() != null) {
            TreeNode root = getRoot();
            root.getChildren().addAll(this);
            this.clear();
            this.add(root);
            root = null;
        }
    }

    public TreeNode getRoot() {
        return root;
    }

    public void setRoot(TreeNode root) {
        this.root = root;
    }


}