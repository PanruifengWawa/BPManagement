package com.philips.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NavigationController {
	@RequestMapping(value="/index")
    public String mainPage(){
        return "/index";
	}

}