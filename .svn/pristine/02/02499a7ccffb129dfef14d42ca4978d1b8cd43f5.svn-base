package spring.com.sample.service.dao;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("sample001Mapper") 
public class Sample001Mapper extends EgovAbstractMapper{

	private Logger log = LoggerFactory.getLogger(Sample001Mapper.class);
	
	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap)throws Exception{
		
		log.debug("==========deb====");
		return selectList("selectCmmnCdCboList", schMap);
		
	}
	
	public List<Map<String, Object>> selectSampleSubjectList(Map<String, Object>  schMap) throws Exception {
		
		return selectList("selectSampleSubjectList", schMap);
	}
	//---------------------------------------------------------------------------------------------------
	public List<Map<String, Object>> testSearchList(Map<String, Object> dsemlpID) {
		// TODO Auto-generated method stub
		System.out.println("DAOIMPLE");
		System.out.println("DAOIMPLE");
		System.out.println("DAOIMPLE");
		System.out.println("DAOIMPLE");
		System.out.println("DAOIMPLE");
		return selectList("testSearchList", dsemlpID);
	}
	
	//-----------------------------------------------------------------------------------------------------	
	
	
	public void insertSubjectList(Map<String, Object>  dtaMap) throws Exception {
		insert("insertSubjectList", dtaMap);
	}
	
	public void updateSubjectList(Map<String, Object>  dtaMap) throws Exception {
		update("updateSubjectList", dtaMap);
	}
	
	public void deleteSubjectList(Map<String, Object>  dtaMap) throws Exception {
		delete("deleteSubjectList", dtaMap);
	}


	//---------------------------
	public void insertTestList(Map<String, Object>  dtaMap) throws Exception {
		System.out.println("ccccccccccccccccccccccccccccccc");
		System.out.println("ccccccccccccccccccccccccccccccc");
		System.out.println("ccccccccccccccccccccccccccccccc");
		System.out.println("ccccccccccccccccccccccccccccccc");
		System.out.println("ccccccccccccccccccccccccccccccc");
		insert("insertTestList", dtaMap);
	}
	
	public void updateTestList(Map<String, Object>  dtaMap) throws Exception {
		update("updateTestList", dtaMap);
	}
	
	public void deleteTestList(Map<String, Object>  dtaMap) throws Exception {
		delete("deleteTestList", dtaMap);
	}
	
	
	
}
