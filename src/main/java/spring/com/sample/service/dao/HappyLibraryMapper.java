package spring.com.sample.service.dao;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("happyLibraryMapper") 
public class HappyLibraryMapper extends EgovAbstractMapper{

	private Logger log = LoggerFactory.getLogger(HappyLibraryMapper.class);

	public List<Map<String, Object>> staticMypage(Map<String, Object> dsMypageMap) {
		// TODO Auto-generated method stub
		return selectList("staticMypage",dsMypageMap);
	}
		
	

	public List<Map<String, Object>> selectMypageList(Map<String, Object> dsMypageMap)  throws Exception {
		// TODO Auto-generated method stub
System.out.println("1212121121212212121");
		
		return selectList("selectMypageList",dsMypageMap);
	}

	public void insertUserInfo(Map<String, Object>  dtaMap) throws Exception {
		insert("insertUserInfo", dtaMap);
	}

	public void updateUserInfo(Map<String, Object> dtaMap) throws Exception {

		System.out.println("DAOImplsave");
		System.out.println("DAOImplsave");
		System.out.println("DAOImplsave");
		System.out.println("DAOImplsave");
		update("updateUserInfo", dtaMap);
		
	}

	public void deleteUserInfo(Map<String, Object> dtaMap) throws Exception {
		delete("deleteUserInfo", dtaMap);
		
	}

	public List<Map<String, Object>> selectBorrowList(Map<String, Object> dsBrSchMap) {
		// TODO Auto-generated method stub

		return selectList("selectBorrowList",dsBrSchMap);
	}

	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap) {
		// TODO Auto-generated method stub
		
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		System.out.println("DAOIMPLCOMM");
		return selectList("selectCmmnCdCbo", schMap);
	}

	public List<Map<String, Object>> selectOverdueList(Map<String, Object> dsOvSchMap) {
		// TODO Auto-generated method stub
		return selectList("selectOverdueList",dsOvSchMap);
	}



	public List<Map<String, Object>> selectResList(Map<String, Object> dsResSchMap) {
		// TODO Auto-generated method stub
		return selectList("selectResList",dsResSchMap);
	}



	public List<Map<String, Object>> selectSanList(Map<String, Object> dsSanSchMap) {
		// TODO Auto-generated method stub
		return selectList("selectSanList",dsSanSchMap);
	}



	public List<Map<String, Object>> CboSanList() {
		// TODO Auto-generated method stub
		return selectList("CboSanList");
	}

	
}
