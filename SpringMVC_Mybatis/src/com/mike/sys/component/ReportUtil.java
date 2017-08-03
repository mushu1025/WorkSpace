package com.mike.sys.component;
//package com.henghe.chickenmis.component;
//
//import java.io.File;
//import java.io.ObjectOutputStream;
//import java.text.DecimalFormat;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Calendar;
//import java.util.Date;
//import java.util.List;
//import java.util.Map;
//
//import javax.servlet.ServletOutputStream;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.apache.poi.hssf.record.formula.functions.T;
//import org.apache.shiro.SecurityUtils;
//import org.apache.shiro.subject.Subject;
//
//import net.sf.jasperreports.engine.JRException;
//import net.sf.jasperreports.engine.JRExporterParameter;
//import net.sf.jasperreports.engine.JRRuntimeException;
//import net.sf.jasperreports.engine.JasperFillManager;
//import net.sf.jasperreports.engine.JasperPrint;
//import net.sf.jasperreports.engine.JasperPrintManager;
//import net.sf.jasperreports.engine.JasperReport;
//import net.sf.jasperreports.engine.export.JExcelApiExporter;
//import net.sf.jasperreports.engine.export.JRHtmlExporter;
//import net.sf.jasperreports.engine.export.JRHtmlExporterParameter;
//import net.sf.jasperreports.engine.export.JRPdfExporter;
//import net.sf.jasperreports.engine.export.JRXlsAbstractExporterParameter;
//import net.sf.jasperreports.engine.util.FileBufferedOutputStream;
//import net.sf.jasperreports.engine.util.JRLoader;
//import net.sf.jasperreports.j2ee.servlets.BaseHttpServlet;
//
//import com.henghe.chickenmis.supply.pojo.V_SupplyFodderProgress;
//import com.henghe.chickenmis.sys.realm.UserRealm;
//
//public class ReportUtil {
//	
//	/**
//	 * 构�?函数
//	 * @param request
//	 * @param response
//	 * @param sessions
//	 */
//	public ReportUtil(HttpServletRequest request,HttpServletResponse response,HttpSession sessions){
//		req=request;
//		res=response;
//		session=sessions;
//		Subject subject = SecurityUtils.getSubject();
//		UserRealm.Principal user = (UserRealm.Principal)subject.getPrincipal();
//    	session.setAttribute("loginUserName", user.getFusername());
//	}
//	private HttpServletRequest req ;
//	private HttpServletResponse res;
//	private HttpSession session;
//	
//	/**
//	 * 打印报表方法
//	 * @param ReportUrlAndname 报表路径和名�?
//	 * @param listDataSource   数据�?
//	 * @param hashParmeters    参数
//	 * @throws Exception       异常
//	 */
//	public  void printReport(String ReportUrlAndname,List<?> listDataSource,Map hashParmeters) throws Exception{
//	        /* InputStream reportStream=null;
//	        try {
//	            //报表变异jasper文件的文件流
//	            reportStream=new FileInputStream(URLDecoder.decode(ReportUrlAndname, "UTF-8"));
//	            JasperPrint jasperPrint = JasperFillManager.fillReport(reportStream, hashParmeters,new ReportDataSource(listDataSource));
//
//	            //设置成打印横�?
//	            jasperPrint.setOrientation(OrientationEnum.LANDSCAPE);
//
//	           //获取打印服务
//	            PrintService printService = null;
//	            if (printerName.equals("default")) {
//	                printService = PrintServiceLookup.lookupDefaultPrintService();
//	            } else {
//	                PrintService[] printlist = PrintServiceLookup.lookupPrintServices(null, null);
//	                //printService=printlist[0];
//	                for (int i = 0; i < printlist.length; i++) {
//	                    if (printerName.equals(printlist[i].getName())) {
//	                        printService = printlist[i];
//	                        break;
//	                    }
//	                }
//	            }
//	            JRAbstractExporter je = new JRAbstractExporter() {
//				};
//				};
//	            je.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);*/
//			hashParmeters.put("createuser",session.getAttribute("loginUserName"));
//			//实例化报表控�?
//			JasperPrint jasperPrint = (JasperPrint)session.getAttribute(BaseHttpServlet.DEFAULT_JASPER_PRINT_SESSION_ATTRIBUTE);
//			//报表名称路径
//			String ctxpath = req.getSession().getServletContext().getRealPath(ReportUrlAndname);
//			File reportFile = new File(ctxpath);
//			if (!reportFile.exists()){
//					throw new JRRuntimeException("File preson.jasper not found. The report design must be compiled first.");
//			}
//			JasperReport jasperReport = (JasperReport)JRLoader.loadObject(reportFile);
//			jasperPrint = JasperFillManager.fillReport(jasperReport, hashParmeters,new ReportDataSource(listDataSource));
//			session.setAttribute(BaseHttpServlet.DEFAULT_JASPER_PRINT_SESSION_ATTRIBUTE, jasperPrint);
//			JasperPrintManager.printReport(jasperPrint, true);
//			res.setContentType("application/octet-stream");
//			ServletOutputStream ouputStream = res.getOutputStream();
//			ObjectOutputStream oos = new ObjectOutputStream(ouputStream);
//			oos.writeObject(jasperPrint);
//			oos.flush();
//			oos.close();
//			ouputStream.flush();
//			ouputStream.close();
//	}
//	
//	
//	
//	/**
//	 * 预览报表
//	 * @param ReportUrlAndName 报表路径和名�?
//	 * @param listDataSource   数据�?
//	 * @param hashParmeters    其他参数设置
//	 * @return
//	 * @throws Exception
//	 */
//	public StringBuffer previewReport(String ReportUrlAndName,List<?> listDataSource,Map hashParmeters) throws Exception{
//		hashParmeters.put("createuser",session.getAttribute("loginUserName"));
//		StringBuffer sbuffer =new StringBuffer();
//		//实例化报表控�?
//		JasperPrint jasperPrint = (JasperPrint)session.getAttribute(BaseHttpServlet.DEFAULT_JASPER_PRINT_SESSION_ATTRIBUTE);
//		//报表名称路径
//		String ctxpath = req.getSession().getServletContext().getRealPath(ReportUrlAndName);
//		File reportFile = new File(ctxpath);
//		if (!reportFile.exists()){
//				throw new JRRuntimeException("File preson.jasper not found. The report design must be compiled first.");
//		}
//		//加载报表对象
//		JasperReport jasperReport = (JasperReport)JRLoader.loadObject(reportFile);
//		jasperPrint = JasperFillManager.fillReport(jasperReport, hashParmeters,new ReportDataSource(listDataSource));
//		session.setAttribute(BaseHttpServlet.DEFAULT_JASPER_PRINT_SESSION_ATTRIBUTE, jasperPrint);
//		//报表转换生成HTML
//		JRHtmlExporter exporter = new JRHtmlExporter();
//		exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
//		exporter.setParameter(JRExporterParameter.OUTPUT_STRING_BUFFER, sbuffer);
//		exporter.setParameter(JRHtmlExporterParameter.IMAGES_URI, "../image?image=");
//		exporter.setParameter(JRExporterParameter.PAGE_INDEX, 0);
//		exporter.setParameter(JRHtmlExporterParameter.HTML_HEADER, "");
//		exporter.setParameter(JRHtmlExporterParameter.BETWEEN_PAGES_HTML, "");
//		exporter.setParameter(JRHtmlExporterParameter.HTML_FOOTER, "");
//		exporter.exportReport();
//		return sbuffer;
//	}
//	
//	/**
//	 * 报表导出Excel 文件
//	 * @param ReportUrlAndName 报表文件路劲和名�?
//	 * @param listDataSource   数据�?
//	 * @param hashParmeters    其他参数设置
// 	 * @param createExcelName  创建的Excel 名称
//	 * @throws Exception
//	 */
//	public void exportExcel(String ReportUrlAndName,List<?> listDataSource,Map hashParmeters,String createExcelName)throws Exception{
//		hashParmeters.put("createuser",session.getAttribute("loginUserName"));
//		FileBufferedOutputStream fbos = new FileBufferedOutputStream();
//		//报表名称路径
//		String ctxpath = req.getSession().getServletContext().getRealPath(ReportUrlAndName);
//		File reportFile = new File(ctxpath);
//		if (!reportFile.exists()){
//			throw new JRRuntimeException("File preson.jasper not found. The report design must be compiled first.");
//		}
//		JasperReport jasperReport = (JasperReport) JRLoader.loadObject(reportFile);
//		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, hashParmeters,new ReportDataSource(listDataSource));
//		if(jasperPrint!=null){
////			JRXlsAbstractExporter exporter = new JRXlsExporter();
//			JExcelApiExporter exporter = new JExcelApiExporter();
//			exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, fbos);
//			exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
//			exporter.setParameter(JRXlsAbstractExporterParameter.IS_ONE_PAGE_PER_SHEET, Boolean.FALSE);
//			exporter.setParameter(JRXlsAbstractExporterParameter.IS_WHITE_PAGE_BACKGROUND, Boolean.FALSE);
////			exporter.exportReport();
//			try {
//				exporter.exportReport();
//				fbos.close();
//				if (fbos.size() > 0) {
//					SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
//					res.setCharacterEncoding("UTF-8");
//					res.setContentType("application/xls");
//					res.setHeader("Content-Disposition", "inline; filename=\""+createExcelName);
//					res.setContentLength(fbos.size());
//					ServletOutputStream ouputStream = res.getOutputStream();
//					try {
//						fbos.writeData(ouputStream);
//						fbos.dispose();
//						ouputStream.flush();
//					} finally {
//						if (null != ouputStream) {
//							ouputStream.close();
//						}
//					}
//				}
//			} catch (JRException e1) {
//				e1.printStackTrace();
//			}finally{
//				if(null !=fbos){
//					fbos.close();
//					fbos.dispose();
//				}
//			}
//		}
//	}
//	
//	//产生随机�?
//	public static int getRandom() {
//		int number = 0;
//		while (true) {
//			number = (int) (Math.random() * 1000);
//			if (number >= 100 && number < 1000) {
//				break;
//			}
//		}
//		return number;
//	} 
//	
//	//设置千分位并保留小数位数
//	public static String fmtMicrometer(String text) 
//	   { 
//		
//		   DecimalFormat df = null; 
//		 	
//	       if(text.indexOf(".") > 0) 
//	       { 
//	           if(text.length() - text.indexOf(".")-1 == 0) 
//	           { 
//	                df = new DecimalFormat("###,##0."); 
//	           }else if(text.length() - text.indexOf(".")-1 == 1) 
//	           { 
//	                df = new DecimalFormat("###,##0.0"); 
//	           }else 
//	           { 
//	                df = new DecimalFormat("###,##0.00"); 
//	            } 
//	       }else  
//	       { 
//	           df = new DecimalFormat("###,##0"); 
//	       } 
//	       Double number=0.00;
//	       try { 
//				   number=Double.parseDouble(text);
//		       } catch (Exception e) { 
//		    	   number = 0.00; 
//		       } 
//	       
//	       return df.format(number); 
//	    } 
//     //判断某个字符出现次数
//	public static int shownum(String str)
//	{
//		   int x=0;  
//		   String getstr="";
//	          for(int i=0;i<=str.length()-1;i++) {  
//	              getstr=str.substring(i,i+1);  
//	              if(getstr.equals("\\")){  
//	                  x++;  
//	              }  
//	          }  
//	      return x;
//	}
//	/** 
//	*字符串的日期格式的计�?(相差天数)
//	*/  
//	 public static int daysBetween(String smdate,String bdate) throws ParseException{  
//	        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");  
//	        Calendar cal = Calendar.getInstance();    
//	        cal.setTime(sdf.parse(smdate));    
//	        long time1 = cal.getTimeInMillis();                 
//	        cal.setTime(sdf.parse(bdate));    
//	        long time2 = cal.getTimeInMillis();         
//	        long between_days=(time2-time1)/(1000*3600*24); 
//	       return Integer.parseInt(String.valueOf(between_days));     
//	    }  
//	 
//	    public static List<String> alldaysBetween(String smdate,String bdate) throws ParseException {  
//	    	List<String> list = new ArrayList<String>();
//	    	 SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd"); 
//	    	 
//		        Calendar cal = Calendar.getInstance();    
//		        cal.setTime(sdf.parse(smdate));    
//		        long time1 = cal.getTimeInMillis();                 
//		        cal.setTime(sdf.parse(bdate));    
//		        long time2 = cal.getTimeInMillis();  
//		        long oneDay = 1000 * 60 * 60 * 24l;  
//	      
//	        Long time = time1;	       
//	        while (time <= time2) {  
//	            Date d = new Date(time);	            
//	            String s=sdf.format(d);	 
//	            list.add(s);	            
//	            time += oneDay;  
//	        }  	        
//	        return list;
//	    }  
//	 
//	
//	/**
//	 * 报表导出PDF文件
//	 * @param ReportUrlAndName 报表路径和名�?
//	 * @param listDataSource   数据�?
//	 * @param hashParmeters    参数
//	 * @param createExcelName  
//	 */
//	public void exportPDF(String reportUrlAndName,List<?> listDataSource,Map hashParmeters) throws Exception{
//		//报表名称路径
//		String ctxpath = req.getSession().getServletContext().getRealPath(reportUrlAndName);
//		File reportFile = new File(ctxpath);
//		if (!reportFile.exists()){
//			throw new JRRuntimeException("File preson.jasper not found. The report design must be compiled first.");
//		}
//		//加载报表文件
//		JasperReport jasperReport = (JasperReport) JRLoader.loadObject(reportFile);
//		//报表填充对象
//		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, hashParmeters,new ReportDataSource(listDataSource));
//		if (null != jasperPrint) {
//			FileBufferedOutputStream fbos = new FileBufferedOutputStream();
//			JRPdfExporter exporter = new JRPdfExporter();
//			exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, fbos);
//			exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
//			try {
//				exporter.exportReport();
//				fbos.close();
//				if (fbos.size() > 0) {
//					res.setCharacterEncoding("UTF-8");
//					res.setContentType("application/pdf");
//					res.setContentLength(fbos.size());
//					ServletOutputStream ouputStream = res.getOutputStream();
//					try {
//						fbos.writeData(ouputStream);
//						fbos.dispose();
//						ouputStream.flush();
//					} finally {
//						if (null != ouputStream) {
//							ouputStream.close();
//						}
//					}
//				}
//			} catch (JRException e1) {
//				e1.printStackTrace();
//			}finally{
//				if(null !=fbos){
//					fbos.close();
//					fbos.dispose();
//				}
//			}
//		}
//	}
//}
