package spring.com.happybook.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import spring.com.happybook.service.LoginService;
import spring.com.happybook.service.dao.LoginMapper;
import spring.nexacro.data.DataSetRowTypeAccessor;

@Service("LoginService")
public class LoginServiceImpl extends EgovAbstractServiceImpl implements LoginService {

	@Resource(name = "LoginMapper")
    private LoginMapper loginMapper;

	
	@Override
	public List<Map<String, Object>> selectUserList1(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.selectUserList1(schMap);
	}
	@Override
	public List<Map<String, Object>> findIdUserList(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.findIdUserList(schMap);
	}
	@Override
	public List<Map<String, Object>> findIdUserList2(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.findIdUserList2(schMap);
	}
	@Override
	public List<Map<String, Object>> findIdUserList3(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.findIdUserList3(schMap);
	}
	@Override
	public List<Map<String, Object>> findPwdUserList(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.findPwdUserList(schMap);
	}
	//좌석예약확인
	@Override
	public List<Map<String, Object>> selectSeatList(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.selectSeatList(schMap);
	}
	
	/////////////////////////JOIN
	@Override
	public void saveUserListForm(List<Map<String, Object>> dtaMapList) throws Exception{
			
			//공통컬럼셋팅-리스트 전체
			//EgovKordiHis.setRgstCol(dtaMapList);
			
			for (Map<String, Object>  dtaMap : dtaMapList) {
				
				int rowType = Integer.parseInt(String.valueOf(dtaMap.get(DataSetRowTypeAccessor.NAME))) ;
				
				if(rowType == DataSet.ROW_TYPE_INSERTED){
					loginMapper.saveUserList1( dtaMap);
				}/*else if(rowType  == DataSet.ROW_TYPE_UPDATED){
					joinMapper.updateUserList( dtaMap);
				}else if(rowType == DataSet.ROW_TYPE_DELETED){
					joinMapper.deleteUserList( dtaMap);
				}	*/
				
			}
		}
	/////////////////////////Reserve
	@Override
	public void saveReserveListForm(List<Map<String, Object>> dtaMapList) throws Exception{
			
			//공통컬럼셋팅-리스트 전체
			//EgovKordiHis.setRgstCol(dtaMapList);
			
			for (Map<String, Object>  dtaMap : dtaMapList) {
				
				int rowType = Integer.parseInt(String.valueOf(dtaMap.get(DataSetRowTypeAccessor.NAME))) ;
				
				if(rowType == DataSet.ROW_TYPE_INSERTED){
					loginMapper.insertReserveList( dtaMap);
				}/*else if(rowType  == DataSet.ROW_TYPE_UPDATED){
					joinMapper.updateUserList( dtaMap);
				}else if(rowType == DataSet.ROW_TYPE_DELETED){
					joinMapper.deleteUserList( dtaMap);
				}	*/
				
			}
		}

	///////////////////////////////////////////////////////////

	@Override
	public List<Map<String, Object>> selectCheckList(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		
		return loginMapper.selectCheckList(schMap);
	}
	
	/*
	@Override
	public void saveUserList(List<Map<String, Object>> dtaMapList) throws Exception{
			
			//공통컬럼셋팅-리스트 전체
			//EgovKordiHis.setRgstCol(dtaMapList);
			
			for (Map<String, Object>  dtaMap : dtaMapList) {
				
				int rowType = Integer.parseInt(String.valueOf(dtaMap.get(DataSetRowTypeAccessor.NAME))) ;
				
				if(rowType == DataSet.ROW_TYPE_INSERTED){
					loginMapper.saveUserList1( dtaMap);
				}else if(rowType  == DataSet.ROW_TYPE_UPDATED){
					joinMapper.updateUserList( dtaMap);
				}else if(rowType == DataSet.ROW_TYPE_DELETED){
					joinMapper.deleteUserList( dtaMap);
				}	
			}
		}*/

/*	@Override
	public List<Map<String, Object>> checkId(Map<String, Object> dsSchMap) throws Exception {
		// TODO Auto-generated method stub
		return loginMapper.checkId(dsSchMap);
	}*/
	
}