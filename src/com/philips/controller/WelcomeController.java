package com.philips.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.philips.service.WelcomeService;

@Controller
@RequestMapping(value="api")
public class WelcomeController {
	
	@Autowired
	WelcomeService welcomeService;
	
	@RequestMapping(value="/getInfo", method = RequestMethod.GET)
    @ResponseBody
    public String getInfo(
    		HttpServletRequest request
    		) {
        return welcomeService.getWelcomeInfo(request);
    }
	
	@RequestMapping(value="/setInfo", method = RequestMethod.GET)
    @ResponseBody
    public void setInfo(
    		HttpServletRequest request
    		) {
        welcomeService.setWelcomeInfo(request);
    }

}
