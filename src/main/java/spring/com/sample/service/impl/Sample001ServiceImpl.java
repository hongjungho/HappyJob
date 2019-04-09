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
import spring.com.sample.service.Sample001Service;
import spring.com.sample.service.dao.Sample001Mapper;
import spring.nexacro.data.DataSetRowTypeAccessor;

@Service("sample001Service")
public class Sample001ServiceImpl extends EgovAbstractServiceImpl implements Sample001Service {

	@Resource(name = "sample001Mapper")
    private Sample001Mapper sample001Mapper;
	
	@Override
	public List<Map<String, Object>> selectSampleSubjectList(Map<String, Object> schMap) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("??????????????");
		
		System.out.println(schMap.get("campusGb"));
		System.out.println("??????????????");
		
		return sample001Mapper.selectSampleSubjectList(schMap);
	}
	
	//--------------
	@Override
	public List<Map<String, Object>> testSearchList(Map<String, Object> dsemlpID) {
		// TODO Auto-generated method stub
		
		System.out.println("ServiceImple");
		System.out.println("ServiceImple");
		System.out.println("ServiceImple");
		System.out.println("ServiceImple");
		System.out.println("ServiceImple");

		return sample001Mapper.testSearchList(dsemlpID);
	}
	
	//--------------
	
	
	public void saveSubjectList(List<Map<String, Object>> dtaMapList) throws Exception{
			
			
			
			//공통컬럼셋팅-리스트 전체
			//EgovKordiHis.setRgstCol(dtaMapList);
			
			for (Map<String, Object>  dtaMap : dtaMapList) {
				
				int rowType = Integer.parseInt(String.valueOf(dtaMap.get(DataSetRowTypeAccessor.NAME))) ;
				
				if(rowType == DataSet.ROW_TYPE_INSERTED){
					sample001Mapper.insertSubjectList( dtaMap);
				}else if(rowType  == DataSet.ROW_TYPE_UPDATED){
					sample001Mapper.updateSubjectList( dtaMap);
				}else if(rowType == DataSet.ROW_TYPE_DELETED){
					sample001Mapper.deleteSubjectList( dtaMap);
				}	
			}
		}

//-----------------------------------------------
	@Override
	public void testSaveList(List<Map<String, Object>> dtaMapList) throws Exception {
		// TODO Auto-generated method stub
		
		//공통컬럼셋팅-리스트 전체
		//EgovKordiHis.setRgstCol(dtaMapList);
		System.out.println(dtaMapList.size());
		System.out.println(dtaMapList.size());
		System.out.println(dtaMapList.size());
		System.out.println(dtaMapList.size());
		System.out.println("=====================================================");
		System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb00000000");
		System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb00000000");
		for (Map<String, Object>  dtaMap : dtaMapList) {
			System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111");
			int rowType = Integer.parseInt(String.valueOf(dtaMap.get(DataSetRowTypeAccessor.NAME))) ;
			System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222222222222");
			System.out.println(rowType);
			
			if(rowType == DataSet.ROW_TYPE_INSERTED){
				System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333333333333");
				sample001Mapper.insertTestList( dtaMap);
			}else if(rowType  == DataSet.ROW_TYPE_UPDATED){
				System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444");
				sample001Mapper.updateTestList( dtaMap);
			}else if(rowType == DataSet.ROW_TYPE_DELETED){
				System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555555555555555");
				sample001Mapper.deleteTestList( dtaMap);
			}	
		}
		
	}
	//-----------------------------------------------
	
	
	
	@Override
	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap) throws Exception {
		
		return sample001Mapper.selectCmmnCdCboList(schMap);
	}




}
