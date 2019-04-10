package spring.com.happybook.service;

import java.util.List;
import java.util.Map;

public interface LoginService {

	public List<Map<String, Object>> selectUserList1(Map<String, Object> schMap) throws Exception;
	public List<Map<String, Object>> findIdUserList(Map<String, Object> schMap) throws Exception;
	public List<Map<String, Object>> findIdUserList2(Map<String, Object> schMap) throws Exception;
	public List<Map<String, Object>> findIdUserList3(Map<String, Object> schMap) throws Exception;
	public List<Map<String, Object>> findPwdUserList(Map<String, Object> schMap) throws Exception;
	//좌석예약확인
	public List<Map<String, Object>> selectSeatList(Map<String, Object> schMap) throws Exception;
	

/*
	public void saveUserList(List<Map<String, Object> > egovdsList) throws Exception;*/

	//public List<Map<String, Object>> checkId(Map<String, Object> dsSchMap) throws Exception;
	
	//////////////////////JOIN
	public void saveUserListForm(List<Map<String, Object> > egovdsList) throws Exception;

	//////////////////////SEAT
	public void saveReserveListForm(List<Map<String, Object> > egovdsList) throws Exception;
	
	
	///////////////////////////////////////////////////
	public List<Map<String, Object>> selectCheckList(Map<String, Object> schMap) throws Exception;
	
	
}