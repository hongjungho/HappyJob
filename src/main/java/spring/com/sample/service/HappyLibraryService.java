package spring.com.sample.service;

import java.util.List;
import java.util.Map;

public interface HappyLibraryService {


	public List<Map<String, Object>> staticMypage(Map<String, Object> dsMypageMap) throws Exception;

	public List<Map<String, Object>> selectMypageList(Map<String, Object> dsMypageMap) throws Exception;

	public void saveUserInfo(List<Map<String, Object>> egovdsList) throws Exception;

	public List<Map<String, Object>> selectBorrowList(Map<String, Object> dsBrSchMap) throws Exception;

	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap) throws Exception;

	public List<Map<String, Object>> selectOverdueList(Map<String, Object> dsOvSchMap) throws Exception;

	public List<Map<String, Object>> selectResList(Map<String, Object> dsResSchMap) throws Exception;

	public List<Map<String, Object>> selectSanList(Map<String, Object> dsSanSchMap) throws Exception;

	public List<Map<String, Object>> CboSanList();



}
