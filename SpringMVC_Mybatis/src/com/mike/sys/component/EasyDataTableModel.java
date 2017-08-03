package com.mike.sys.component;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * 
 * 项目名称：ChickenMis 
 * 类名�? EasyDataTableModel.java
 * 类描�? 
 * 类型: JAVA�? * �?��修改时间:2015-7-26 下午10:52:01
 * 作�?�?沙敏
 * @since  2015-7-26
 * @version 
 *
 */
public abstract class EasyDataTableModel<T> {

    private long total;

    private List<T> rows;

    private HttpServletRequest req;
    
    private List<T> footer;

    protected EasyDataTableModel() {
    }

    protected EasyDataTableModel(HttpServletRequest req) {
        this.req = req;
    }

    /**
     * 
     * 分页加字段排�?     * 
     * @param page
     * @param size
     * @param sort
     * @param order
     * @return
     * @throws Exception
     * @变更记录 2015-7-26 下午10:52:21  沙敏 创建
     *
     */
    public List<T> fechData(int page, int size, String sort, String order) throws Exception {
        return fechData(page, size);
    }

    /**
     * 
     * 普�?分页方法
     * 
     * @param page
     * @param size
     * @return
     * @throws Exception
     * @变更记录 2015-7-26 下午10:52:32  沙敏 创建
     *
     */
    public List<T> fechData(int page, int size) throws Exception {
        return fechData();
    }

    /**
     * 
     * 不分页方�?     * 
     * @return
     * @throws Exception
     * @变更记录 2015-7-26 下午10:52:42  沙敏 创建
     *
     */
    public List<T> fechData() throws Exception {
        return null;
    }

    private void buildData() {
        try {
            if (req == null) {
                rows = fechData();
            } else {
                String page = req.getParameter("page");
                String size = req.getParameter("rows");
                String sort = req.getParameter("sort");
                String order = req.getParameter("order");
                if (page != null && size != null) {
                    rows = fechData(Integer.valueOf(page), Integer.valueOf(size), sort, order);
                    this.footer=getFooter();
                }
            }

            if(rows == null){
                rows = new ArrayList<T>();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public List<T> getFooter() {
		return footer;
	}

	public void setFooter(List<T> footer) {
		this.footer = footer;
	}
    public long getTotal() {
        if (total == 0) {
            buildData();
        }
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<T> getRows() {
        if (rows == null) {
            buildData();
        }
        return rows;
    }

    public void setRows(List<T> rows) {
        this.rows = rows;
    }
}
