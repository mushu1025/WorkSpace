package com.mike.sys.component;

/**
 * 
 * 项目名称：PigMis 
 * 类名�? Pager.java
 * 类描�? 分页�?��
 * 类型: JAVA�?
 * �?��修改时间:2015-7-30 下午10:17:57
 * 作�?�?沙敏
 * @since  2015-7-30
 * @version 
 *
 */
public class Pager {

	private int pageId = 1; // 当前�?
	private int rowCount = 0; // 总行�?
	private int pageSize = 10; // 页大�?
	private int pageCount = 0; // 总页�?
	private int pageOffset = 0;// 当前页起始记�?
	private int pageTail = 0;// 当前页到达的记录
	private String orderField;
	private boolean orderDirection;
	private String isShowCurrentTotal;//默认不显示，1：显示当前页小计

	// 页面显示分页按钮个数
	private int length = 6;
	// �?��分页数字
	private int startIndex = 0;
	// 结束分页数字
	private int endIndex = 0;

	private int[] indexs;

	public String getIsShowCurrentTotal() {
		return isShowCurrentTotal;
	}

	public void setIsShowCurrentTotal(String isShowCurrentTotal) {
		this.isShowCurrentTotal = isShowCurrentTotal;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int[] getIndexs() {
		int len = getEndIndex() - getStartIndex() + 1;
		indexs = new int[len];
		for (int i = 0; i < len; i++) {
			indexs[i] = (getStartIndex() + i);
		}
		return indexs;
	}

	public void setIndexs(int[] indexs) {
		this.indexs = indexs;
	}

	public int getStartIndex() {
		startIndex = pageId - (length / 2);
		if (startIndex < 1) {
			startIndex = 1;
		}
		return startIndex;
	}

	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
	}

	public int getEndIndex() {
		if (getStartIndex() < 1) {
			setStartIndex(1);
		}
		endIndex = (getStartIndex() + length) <= getPageCount() ? (getStartIndex() + length)
				: getPageCount();
		return endIndex;
	}

	public void setEndIndex(int endIndex) {
		this.endIndex = endIndex;
	}

	public Pager() {
		this.orderDirection = true;
	}

	protected void doPage() {
		this.isShowCurrentTotal=this.getIsShowCurrentTotal();
		this.pageCount = this.rowCount / this.pageSize + 1;
		// 如果模板==0，且总数大于1，则减一
		if ((this.rowCount % this.pageSize == 0) && pageCount > 1)
			this.pageCount--;

		// 算法
		this.pageOffset = (this.pageId - 1) * this.pageSize + 1;
		this.pageTail = this.pageOffset + this.pageSize - 1;
		if (this.pageTail > this.rowCount)
			this.pageTail = this.rowCount;
	}

	public String getOrderCondition() {
		String condition = "";
		if (this.orderField != null && this.orderField.length() != 0) {
			condition = " order by " + orderField
					+ (orderDirection ? " " : " desc ");
		}
		return condition;
	}

	public String getMysqlQueryCondition() {
		String condition = "";
		condition = " limit " + pageOffset + "," + pageSize;
		return condition;
	}
	
	public String getOracleQueryCondition() {
		String condition = "";
		condition = " num between " + pageOffset + " and " + pageTail;
		return condition;
	}

	public void setOrderDirection(boolean orderDirection) {
		this.orderDirection = orderDirection;
	}

	public boolean isOrderDirection() {
		return orderDirection;
	}

	public void setOrderField(String orderField) {
		this.orderField = orderField;
	}

	public String getOrderField() {
		return orderField;
	}

	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}

	public int getPageCount() {
		return pageCount;
	}

	public void setPageId(int pageId) {
		this.pageId = pageId;
	}

	public int getPageId() {
		return pageId;
	}

	public void setPageOffset(int pageOffset) {
		this.pageOffset = pageOffset;
	}

	public int getPageOffset() {
		return pageOffset;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageTail(int pageTail) {
		this.pageTail = pageTail;
	}

	public int getPageTail() {
		return pageTail;
	}

	public void setRowCount(int rowCount) {
		this.rowCount = rowCount;
		this.doPage();
	}

	public int getRowCount() {
		return rowCount;
	}

}