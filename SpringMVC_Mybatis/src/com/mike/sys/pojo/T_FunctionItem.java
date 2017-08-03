package com.mike.sys.pojo;

import java.util.Date;

public class T_FunctionItem {
    private Integer fitemid;

    private String fitemname;

    private Integer fparentid;

    private String furl;

    private Integer functiontype;

    private String iconcls;

    private String fmodifier;

    private Date fmodifytime;

    public Integer getFitemid() {
        return fitemid;
    }

    public void setFitemid(Integer fitemid) {
        this.fitemid = fitemid;
    }

    public String getFitemname() {
        return fitemname;
    }

    public void setFitemname(String fitemname) {
        this.fitemname = fitemname == null ? null : fitemname.trim();
    }

    public Integer getFparentid() {
        return fparentid;
    }

    public void setFparentid(Integer fparentid) {
        this.fparentid = fparentid;
    }

    public String getFurl() {
        return furl;
    }

    public void setFurl(String furl) {
        this.furl = furl == null ? null : furl.trim();
    }

    public Integer getFunctiontype() {
        return functiontype;
    }

    public void setFunctiontype(Integer functiontype) {
        this.functiontype = functiontype;
    }

    public String getIconcls() {
        return iconcls;
    }

    public void setIconcls(String iconcls) {
        this.iconcls = iconcls == null ? null : iconcls.trim();
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