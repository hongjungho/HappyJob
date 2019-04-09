package spring.com.happybook.service.dao;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("HappyLibraryMapper") 
public class HappyLibraryMapper extends EgovAbstractMapper{

	private Logger log = LoggerFactory.getLogger(HappyLibraryMapper.class);

	public List<Map<String, Object>> selectSampleSubjectList() {
		
		return selectList("selectNewBk");
	}

	public List<Map<String, Object>> selectBookList(Map<String, Object> dsSchMap) {
		return selectList("selectBookList",dsSchMap);
	}

	public List<Map<String, Object>> selectUserList(Map<String, Object> dsSchMap) {
		
		return selectList("selectUserList",dsSchMap);
	}
	
	public void deleteUser(Map<String, Object> dsSchMap) {
		delete("deleteUser", dsSchMap);
	}
	
	public List<Map<String, Object>> selectEmplList(Map<String, Object> dsSchMap) {
		return selectList("selectEmplList",dsSchMap);
	}

	public void insertEmpl(Map<String, Object> requstMap) {
		insert("insertEmpl",requstMap);
	}

	public void deleteEmpl(Map<String, Object> requstMap) {
		delete("deleteEmpl",requstMap);
	}

	public void updateEmpl(Map<String, Object> requstMap) {
		update("updateEmpl",requstMap);
		
	}

	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap) {
		return selectList("selectCdCboList", schMap);
	}

	public void insertBook(Map<String, Object> requstMap) {
		insert("insertBook",requstMap);
	}

	public void deleteBook(Map<String, Object> requstMap) {
		
		delete("deleteBook",requstMap);
	}

	public void updateBook(Map<String, Object> requstMap) {
		update("updateBook",requstMap);
		
	}

	public List<Map<String, Object>> selectTotalCate() {
		
		return selectList("selectTotalCate");
	}

	public List<Map<String, Object>> selectTotalGender() {

		return selectList("selectTotalGender");
	}

	public List<Map<String, Object>> selectComList() {
		return selectList("selectComList");
	}

	public void insertCommd(Map<String, Object> requstMap) {
		insert("insertCommd", requstMap);
		
	}

	public void deleteCommd(Map<String, Object> requstMap) {
		delete("deleteCommd", requstMap);
		
	}

	public void updateCommd(Map<String, Object> requstMap) {
		update("updateCommd", requstMap);
		
	}
	
	
	
	
}
