package com.mike.sys.model;

import java.util.Date;

import com.mike.sys.component.BaseModel;

public class T_UserModel extends BaseModel{
	private Integer fuserid;

    private Integer fstraffid;

    private String fusername;

    private String fpassword;

    private Integer froleid;

    private String fmodifier;

    private Date fmodifytime;

	public Integer getFuserid() {
		return fuserid;
	}

	public void setFuserid(Integer fuserid) {
		this.fuserid = fuserid;
	}

	public Integer getFstraffid() {
		return fstraffid;
	}

	public void setFstraffid(Integer fstraffid) {
		this.fstraffid = fstraffid;
	}

	public String getFusername() {
		return fusername;
	}

	public void setFusername(String fusername) {
		this.fusername = fusername;
	}

	public String getFpassword() {
		return fpassword;
	}

	public void setFpassword(String fpassword) {
		this.fpassword = fpassword;
	}

	public Integer getFroleid() {
		return froleid;
	}

	public void setFroleid(Integer froleid) {
		this.froleid = froleid;
	}

	public String getFmodifier() {
		return fmodifier;
	}

	public void setFmodifier(String fmodifier) {
		this.fmodifier = fmodifier;
	}

	public Date getFmodifytime() {
		return fmodifytime;
	}

	public void setFmodifytime(Date fmodifytime) {
		this.fmodifytime = fmodifytime;
	}

}
