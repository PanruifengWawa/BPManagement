package com.philips.serviceImpl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.philips.model.BPData;
import com.philips.service.FileService;


@Service("fileService")
public class FileServiceImpl implements FileService {

	@Override
	public BPData getData(MultipartFile file) {
		// TODO Auto-generated method stub
		BPData bpData = new BPData();
		List<HashMap<String,Object>> bpList = new ArrayList<HashMap<String,Object>>();
		try{
            InputStreamReader reader = new InputStreamReader(file.getInputStream(), "UTF-8");

            BufferedReader br = new BufferedReader(reader);
            String str = null;
            int type = 0;
            while((str = br.readLine())!=null) {
            	str = str.replaceAll("\"", "");
            	if (str.contains("PATIENT NAME") && str.contains("SEX") && str.contains("AGE")) {
					type = 1;
					continue;
				} else if (str.contains("SLEEP TIME") &&  str.contains("WAKE TIME")) {
					type = 2;
					continue;
				} else if (str.contains("DATE") &&  str.contains("TIME") && str.contains("SYS(O)") &&  str.contains("DIA(O)")) {
					type =3;
					continue;
				}
            	String[] temp = str.split(",");
            	switch (type) {
				case 1:
					Integer userId = null;
					try {
						userId = Integer.parseInt(temp[0]);
					} catch (Exception e) {
						// TODO: handle exception
						e.printStackTrace();
					}
					bpData.setUserCode(userId);
					break;
				case 2:
					break;
				case 3:
					String[] cols = {"date","time","sys","dia","pul","map","err","exc"}; 
					HashMap<String, Object> map = new HashMap<String,Object>();
					for (int i = 0; i < cols.length; i++) {
						map.put(cols[i], null);
					}
					for (int i = 0; i < temp.length && i < cols.length; i++) {
						switch (i) {
						case 0:
							String date = temp[i];
							date = date.replaceAll("/", "-");
							if (!date.equals("")) {
								map.put(cols[i], date);
							}
							
							break;
						case 1:
							String time = temp[i];
							if (!time.equals("")) {
								map.put(cols[i], time);
							}
							
							break;
						case 2: case 3: case 4: case 5:
							Integer intData = null;
							try {
								intData = Integer.parseInt(temp[i]);
							} catch (Exception e) {
								// TODO: handle exception
								e.printStackTrace();
							}
							map.put(cols[i], intData);
							break;
						case 6:
							String err = temp[i];
							if (!err.equals("")) {
								map.put(cols[i], err);
							}
							
							break;
						case 7:
							String boolValue = temp[i].toLowerCase();
							if (!boolValue.equals("")) {
								map.put(cols[i], new Boolean(boolValue));
							}
							
							break;

						default:
							break;
						}
					}
					bpList.add(map);
					
					break;
				default:
					break;
				}
            	
            }

            br.close();
            reader.close();
            bpData.setRecords(bpList);
       }catch(Exception e) {
           e.printStackTrace();  
       }
		
		return bpData;
	}

}
