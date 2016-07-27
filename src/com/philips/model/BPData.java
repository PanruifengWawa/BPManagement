package com.philips.model;

import java.util.HashMap;
import java.util.List;

public class BPData {
	private Integer userId;
	private List<HashMap<String,Object>> nickname;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public List<HashMap<String, Object>> getNickname() {
		return nickname;
	}
	public void setNickname(List<HashMap<String, Object>> nickname) {
		this.nickname = nickname;
	} 
	
	
}
