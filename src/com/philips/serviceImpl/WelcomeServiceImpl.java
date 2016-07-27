package com.philips.serviceImpl;

import java.io.File;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.philips.service.WelcomeService;
import com.philips.utils.FileOperationsUtil;

@Service("welcomeService")
public class WelcomeServiceImpl implements WelcomeService {

	@Override
	public String getWelcomeInfo(HttpServletRequest request) {
		// TODO Auto-generated method stub
		String filePath = request.getSession().getServletContext().getRealPath("/") + "welcome";
		String info = FileOperationsUtil.readFile(filePath + "/loginInfo");
		return info;
		
	}

	@Override
	public String setWelcomeInfo(HttpServletRequest request) {
		// TODO Auto-generated method stub
		String filePath = request.getSession().getServletContext().getRealPath("/") + "welcome";
		File fileDir = new File(filePath);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
		String info = FileOperationsUtil.readFile(filePath + "/loginInfo");
		if (info == null) {
			JSONObject newInfo = new JSONObject();
			try {
				newInfo.put("loginCount", 1);
				newInfo.put("lastLoginIP", request.getRemoteHost());
				
				newInfo.put("lastLoginDate", new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
				FileOperationsUtil.writeFile(filePath + "/loginInfo", newInfo.toString(), false);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			try {
				JSONObject newInfo = new JSONObject(info);
				newInfo.put("loginCount", newInfo.getInt("loginCount") + 1);
                newInfo.put("lastLoginIP", request.getRemoteHost());
				
				newInfo.put("lastLoginDate", new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
				
				
				FileOperationsUtil.writeFile(filePath + "/loginInfo", newInfo.toString(), false);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return "ok";
		
	}

}
