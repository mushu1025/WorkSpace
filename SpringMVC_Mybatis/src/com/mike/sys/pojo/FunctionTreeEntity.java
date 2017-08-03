package com.mike.sys.pojo;

import java.io.Serializable;

public class FunctionTreeEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	protected Integer id;
	protected Integer fparentid;
	protected String name;
	protected String url;
	protected String iconCls;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getFparentid() {
		return fparentid;
	}
	public void setFparentid(Integer fparentid) {
		this.fparentid = fparentid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
}
