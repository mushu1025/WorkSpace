package com.mike.sys.pojo;

import java.util.Date;

public class T_Role {
    private Integer froleid;

    private String frolename;

    private Integer fparentid;

    private String functionitemids;

    private String fmodifier;

    private Date fmodifytime;

    public Integer getFroleid() {
        return froleid;
    }

    public void setFroleid(Integer froleid) {
        this.froleid = froleid;
    }

    public String getFrolename() {
        return frolename;
    }

    public void setFrolename(String frolename) {
        this.frolename = frolename == null ? null : frolename.trim();
    }

    public Integer getFparentid() {
        return fparentid;
    }

    public void setFparentid(Integer fparentid) {
        this.fparentid = fparentid;
    }

    public String getFunctionitemids() {
        return functionitemids;
    }

    public void setFunctionitemids(String functionitemids) {
        this.functionitemids = functionitemids == null ? null : functionitemids.trim();
    }

    public String getFmodifier() {
        return fmodifier;
    }

    public void setFmodifier(String fmodifier) {
        this.fmodifier = fmodifier == null ? null : fmodifier.trim();
    }

    public Date getFmodifytime() {
        return fmodifytime;
    }

    public void setFmodifytime(Date fmodifytime) {
        this.fmodifytime = fmodifytime;
    }
}