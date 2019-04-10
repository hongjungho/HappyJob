package spring.com.happybook.service.dao;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("LoginMapper") 
public class LoginMapper extends EgovAbstractMapper{

	private Logger log = LoggerFactory.getLogger(LoginMapper.class);

	public List<Map<String, Object>> selectUserList1(Map<String, Object>  schMap) throws Exception {
		
		return selectList("selectUserList1", schMap);
	}

	public List<Map<String, Object>> findIdUserList(Map<String, Object>  schMap) throws Exception {
		
		return selectList("findIdUserList", schMap);
	}
	public List<Map<String, Object>> findIdUserList2(Map<String, Object>  schMap) throws Exception {
		
		return selectList("findIdUserList2", schMap);
	}
	public List<Map<String, Object>> findIdUserList3(Map<String, Object>  schMap) throws Exception {
		
		return selectList("findIdUserList3", schMap);
	}
	public List<Map<String, Object>> findPwdUserList(Map<String, Object>  schMap) throws Exception {
		
		return selectList("findPwdUserList", schMap);
	}
	//좌석예약확인
	public List<Map<String, Object>> selectSeatList(Map<String, Object>  schMap) throws Exception {
		
		return selectList("selectSeatList", schMap);
	}
	
	///////////////////////////////////JOIN
	public void saveUserList1(Map<String, Object>  dtaMap) throws Exception {
		insert("saveUserList1", dtaMap);
	}
	///////////////////////////////////SEAT
	public void insertReserveList(Map<String, Object>  dtaMap) throws Exception {
		insert("insertReserveList", dtaMap);
	}
	
/*	public void saveUserList1(Map<String, Object>  dtaMap) throws Exception {
		insert("saveUserList1", dtaMap);
	}*/

/*	public List<Map<String, Object>> checkId(Map<String, Object> dsSchMap) {
		// TODO Auto-generated method stub
		return selectList("checkId", dsSchMap);
	}*/
	
	////////////////////////////////////////////////
public List<Map<String, Object>> selectCheckList(Map<String, Object>  schMap) throws Exception {
		
		return selectList("selectCheckList", schMap);
	}
}