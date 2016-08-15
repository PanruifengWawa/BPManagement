package com.philips.model;

import java.util.HashMap;
import java.util.List;

public class BPData {
	private Integer userCode;
	private List<HashMap<String,Object>> records;
	public Integer getUserCode() {
		return userCode;
	}
	public void setUserCode(Integer userCode) {
		this.userCode = userCode;
	}
	public List<HashMap<String, Object>> getRecords() {
		return records;
	}
	public void setRecords(List<HashMap<String, Object>> records) {
		this.records = records;
	}
	
	
	
}
