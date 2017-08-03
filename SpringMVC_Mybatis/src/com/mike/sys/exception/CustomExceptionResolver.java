package com.mike.sys.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <p>Title: CustomExceptionResolver</p>
 * <p>Description:全局异常处理�?</p>
 * <p>Company: www.itcast.com</p> 
 * @author	传智.燕青
 * @date	2015-4-14上午11:57:09
 * @version 1.0
 */
public class CustomExceptionResolver implements HandlerExceptionResolver {

	/**
	 * （非 Javadoc�?
	 * <p>Title: resolveException</p>
	 * <p>Description: </p>
	 * @param request
	 * @param response
	 * @param handler
	 * @param ex 系统 抛出的异�?
	 * @return
	 * @see org.springframework.web.servlet.HandlerExceptionResolver#resolveException(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, java.lang.Object, java.lang.Exception)
	 */
	public ModelAndView resolveException(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex) {
		
		CustomException customException = null;
		if(ex instanceof CustomException){
			customException = (CustomException)ex;
		}else{
			customException = new CustomException("未知错误");
		}
		
		//错误信息
		String message = customException.getMessage();
		
		
		ModelAndView modelAndView = new ModelAndView();
		
		//将错误信息传到页�?
		modelAndView.addObject("message", message);
		
		//指向错误页面
		modelAndView.setViewName("error");

		
		return modelAndView;
	}

}
