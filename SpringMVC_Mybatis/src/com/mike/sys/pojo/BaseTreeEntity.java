package com.mike.sys.pojo;

import java.io.Serializable;

public class BaseTreeEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	protected Integer id;
	protected Integer fparentid;
	protected String name;
	protected String tdatatype;
	
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
	public String getTdatatype() {
		return tdatatype;
	}
	public void setTdatatype(String tdatatype) {
		this.tdatatype = tdatatype;
	}
	
}
