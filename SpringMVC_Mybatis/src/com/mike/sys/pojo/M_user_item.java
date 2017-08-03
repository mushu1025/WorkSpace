package com.mike.sys.pojo;

import java.util.Date;

public class M_user_item {
    private Integer mid;

    private Integer froleid;

    private Integer fitemid;

    private String fmodifier;

    private Date fmodifytime;

    public Integer getMid() {
        return mid;
    }

    public void setMid(Integer mid) {
        this.mid = mid;
    }

    public Integer getFroleid() {
        return froleid;
    }

    public void setFroleid(Integer froleid) {
        this.froleid = froleid;
    }

    public Integer getFitemid() {
        return fitemid;
    }

    public void setFitemid(Integer fitemid) {
        this.fitemid = fitemid;
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