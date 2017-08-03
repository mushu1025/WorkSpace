package com.mike.sys.component;

import java.io.IOException;
import java.util.Properties;
 

public class SystemConfig {
	private  static Properties p=null;
	
	private SystemConfig(){
		try {
			p = ResourcesUtil.getResourceAsProperties("excel.properties");
		}catch(IOException ex){
			ex.printStackTrace();
		}
		
	}
	
	public static SystemConfig getInstance(){
		return new SystemConfig();
	}

	public String getProperty(String key){
		return p.getProperty(key);
	} 
}
