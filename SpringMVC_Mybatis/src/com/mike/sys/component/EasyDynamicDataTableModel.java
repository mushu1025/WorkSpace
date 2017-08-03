package com.mike.sys.component;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * 
 * 项目名称：ChickenMis 
 * 类名�? EasyDynamicDataTableModel.java
 * 类描�? 动�?加载列和数据的表格类
 * 类型: JAVA�? * �?��修改时间:2015-8-2 上午10:52:59
 * 作�?�?张洪�? * @since  2015-8-2
 * @version 
 *
 */
public abstract class EasyDynamicDataTableModel<C, R> {

    private long total;
    
    private List<C> columns;

    private List<R> rows;

    private HttpServletRequest req;

    protected EasyDynamicDataTableModel() {
    }

    protected EasyDynamicDataTableModel(HttpServletRequest req) {
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
    public List<R> fechData(int page, int size, String sort, String order) throws Exception {
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
    public List<R> fechData(int page, int size) throws Exception {
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
    public List<R> fechData() throws Exception {
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
                    this.total = rows.size();
                }
            }

            if(rows == null){
                rows = new ArrayList<R>();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
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

    public List<R> getRows() {
        if (rows == null) {
            buildData();
        }
        return rows;
    }

    public void setRows(List<R> rows) {
        this.rows = rows;
    }

    public List<C> getColumns() {
    	if (columns == null) {
    		columns = new ArrayList<C>();
    	}
        return columns;
    }

    public void setColumns(List<C> columns) {
        this.columns = columns;
    }
}
