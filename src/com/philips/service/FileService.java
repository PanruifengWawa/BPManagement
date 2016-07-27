package com.philips.service;

import org.springframework.web.multipart.MultipartFile;

import com.philips.model.BPData;

public interface FileService {
	public BPData getData(MultipartFile file);
}
