package spring.com.sample.service.impl;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.security.crypto.codec.Base64;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.cryptography.EgovCryptoService;
import spring.com.sample.service.HappyLibraryService;
import spring.com.sample.service.dao.HappyLibraryMapper;
import spring.nexacro.data.DataSetRowTypeAccessor;

@Service("happyLibraryService")
public class HappyLibraryServiceImpl extends EgovAbstractServiceImpl implements HappyLibraryService {
	
	

	@Override
	public List<Map<String, Object>> staticMypage(Map<String, Object> dsMypageMap) throws Exception {
		// TODO Auto-generated method stub
		return happyLibraryMapper.staticMypage(dsMypageMap);
	}

	
	
	@Resource(name = "happyLibraryMapper")
    private HappyLibraryMapper happyLibraryMapper;

	@Override
	public List<Map<String, Object>> selectMypageList(Map<String, Object> dsMypageMap) throws Exception  {
		// TODO Auto-generated method stub
		
		return happyLibraryMapper.selectMypageList(dsMypageMap);
	}

	@Override
	public void saveUserInfo(List<Map<String, Object>> dtaMapList) throws Exception {
		// TODO Auto-generated method stub
		
		for (Map<String, Object>  dtaMap : dtaMapList) {			
			int rowType = Integer.parseInt(String.valueOf(dtaMap.get(DataSetRowTypeAccessor.NAME))) ;
			
			if(rowType  == DataSet.ROW_TYPE_UPDATED){
				happyLibraryMapper.updateUserInfo(dtaMap);
			}else if(rowType == DataSet.ROW_TYPE_DELETED){
				happyLibraryMapper.deleteUserInfo(dtaMap);
			}	
		}
	}

	@Override
	public List<Map<String, Object>> selectBorrowList(Map<String, Object> dsBrSchMap) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("ServieceImpl");
		System.out.println("ServieceImpl");
		System.out.println("ServieceImpl");
		System.out.println("ServieceImpl");
		return happyLibraryMapper.selectBorrowList(dsBrSchMap);
	}

	@Override
	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap) throws Exception {

			return happyLibraryMapper.selectCmmnCdCboList(schMap);


	}

	@Override
	public List<Map<String, Object>> selectOverdueList(Map<String, Object> dsOvSchMap) throws Exception {
		// TODO Auto-generated method stub
		return happyLibraryMapper.selectOverdueList(dsOvSchMap);
	}

	@Override
	public List<Map<String, Object>> selectResList(Map<String, Object> dsResSchMap) throws Exception {
		// TODO Auto-generated method stub
		return happyLibraryMapper.selectResList(dsResSchMap);
	}

	@Override
	public List<Map<String, Object>> selectSanList(Map<String, Object> dsSanSchMap) throws Exception {
		// TODO Auto-generated method stub
		return happyLibraryMapper.selectSanList(dsSanSchMap);
	}

	@Override
	public List<Map<String, Object>> CboSanList() {
		// TODO Auto-generated method stub
		return happyLibraryMapper.CboSanList();
	}



}
