package com.philips.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {
	public String getData(MultipartFile file);
}
