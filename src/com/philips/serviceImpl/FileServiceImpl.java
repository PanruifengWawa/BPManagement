package com.philips.serviceImpl;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.philips.service.FileService;

@Service("fileService")
public class FileServiceImpl implements FileService {

	@Override
	public String getData(MultipartFile file) {
		// TODO Auto-generated method stub
		String content = "";
		try{
            InputStreamReader reader = new InputStreamReader(file.getInputStream(), "UTF-8");

            BufferedReader br = new BufferedReader(reader);
            String str = null;
            while((str = br.readLine())!=null) {
            	content = content + str + "\r\n";
            }

            br.close();
            reader.close();
       }catch(Exception e) {
           e.printStackTrace();
           return null;
       }
		return content;
	}

}
