package com.mike.sys.component; 

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {
	/**
	 * 通过两个日期获得量日期的�?��的日�?
	 * @param request
	 * @param response
	 * @param sessions
	 */
	public static String ParseDate(Date startDate, Date endDate){
		String dataStr = "";
		Calendar startCalendar = Calendar.getInstance();
        Calendar endCalendar = Calendar.getInstance();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-DD"); 
        startCalendar.setTime(startDate); 
        endCalendar.setTime(endDate);
        endCalendar.add(Calendar.DAY_OF_MONTH, 1);
        while(true){
            if(startCalendar.getTimeInMillis() < endCalendar.getTimeInMillis()){
            	dataStr += "," + String.valueOf(df.format(startCalendar.getTime()));
	        }else{
	            break;
	        }
            startCalendar.add(Calendar.DAY_OF_MONTH, 1);
        }
    	return dataStr.substring(1);
	}
}
