package com.philips.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.philips.service.FileService;

@Controller
@RequestMapping(value="api")
public class DataUploadController {
	@Autowired FileService fileService;
	
	@RequestMapping(value="/file/upload", method = RequestMethod.POST)
    @ResponseBody
    public String getData(
    		@RequestParam(value = "file", required = true) MultipartFile file,
    		HttpServletRequest request
    		) {
        return fileService.getData(file);
    }
}
