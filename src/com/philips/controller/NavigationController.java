package com.philips.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NavigationController {
	@RequestMapping(value="/login")
    public String loginPage(){
        return "/login";
	}
	
	@RequestMapping(value="/index")
    public String mainPage(){
        return "/index";
	}
	
	@RequestMapping(value="/welcome")
    public String welcomePage(){
        return "/welcome";
	}
	
	@RequestMapping(value="/data_list")
    public String dataListPage(){
        return "/data-list";
	}
	
	@RequestMapping(value="/data_upload")
    public String dataUploadPage(){
        return "/data-upload";
	}
	@RequestMapping(value="/admin_pwd_change")
    public String adminPWDChangePage(){
        return "/admin-pwd-change";
	}

}
