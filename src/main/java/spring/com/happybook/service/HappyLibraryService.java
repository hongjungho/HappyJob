package spring.com.happybook.service;

import java.util.List;
import java.util.Map;

public interface HappyLibraryService {


	public List<Map<String, Object>> selectBookList(Map<String, Object> dsSchMap) throws Exception;

	public List<Map<String, Object>> selectEmplList(Map<String, Object> dsSchMap) throws Exception;

	public List<Map<String, Object>> selectUserList(Map<String, Object> dsSchMap) throws Exception;

	public void deleteUser(Map<String, Object> dsSchMap) throws Exception;

	public void saveEmplList(List<Map<String, Object>> emplListMap) throws Exception;

	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap)throws Exception;

	public void saveBookList(List<Map<String, Object>> bookListMap);

	public List<Map<String, Object>> selectTotalCate();

	public List<Map<String, Object>> selectTotalGender();

	public List<Map<String, Object>> selectComList();

	public void saveTotal1(List<Map<String, Object>> dsSchMap);

	

	

}
