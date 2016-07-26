package com.philips.service;

import javax.servlet.http.HttpServletRequest;

public interface WelcomeService {
	String getWelcomeInfo(HttpServletRequest request);
	void setWelcomeInfo(HttpServletRequest request);

}
