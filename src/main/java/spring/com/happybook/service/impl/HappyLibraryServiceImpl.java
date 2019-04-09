package spring.com.happybook.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import spring.com.happybook.service.HappyLibraryService;
import spring.com.happybook.service.dao.HappyLibraryMapper;
import spring.nexacro.data.DataSetRowTypeAccessor;

@Service("HappyLibraryService")
public class HappyLibraryServiceImpl extends EgovAbstractServiceImpl implements HappyLibraryService {

	@Resource(name = "HappyLibraryMapper")
    private HappyLibraryMapper happyLibraryMapper;
	
	@Override
	public List<Map<String, Object>> selectBookList(Map<String, Object> dsSchMap) throws Exception {
		// TODO Auto-generated method stub
		return happyLibraryMapper.selectBookList(dsSchMap);
	}

	@Override
	public List<Map<String, Object>> selectEmplList(Map<String, Object> dsSchMap) throws Exception  {
		
		return happyLibraryMapper.selectEmplList(dsSchMap);
	}

	@Override
	public List<Map<String, Object>> selectUserList(Map<String, Object> dsSchMap) throws Exception {
		return happyLibraryMapper.selectUserList(dsSchMap);
	}

	@Override
	public void deleteUser(Map<String, Object> dsSchMap)  throws Exception{
		 happyLibraryMapper.deleteUser(dsSchMap);
		
	}

	

	@Override
	public void saveEmplList(List<Map<String, Object>> emplListMap)  throws Exception{
				// SERVICE 나누기
		
				for ( Map<String,Object> requstMap : emplListMap) {
					
					int rowType = Integer.parseInt(String.valueOf(requstMap.get(DataSetRowTypeAccessor.NAME)));
					
					if( rowType == DataSet.ROW_TYPE_INSERTED ) {
						
						happyLibraryMapper.insertEmpl(requstMap);
					} else if( rowType == DataSet.ROW_TYPE_DELETED ) {
						happyLibraryMapper.deleteEmpl(requstMap);
					} else if( rowType == DataSet.ROW_TYPE_UPDATED) {
						
						happyLibraryMapper.updateEmpl(requstMap);
					}
							
				}
		
	}

	@Override
	public List<Map<String, Object>> selectCmmnCdCboList(Map<String, Object> schMap) throws Exception {
	
		
		return happyLibraryMapper.selectCmmnCdCboList(schMap);
	}

	@Override
	public void saveBookList(List<Map<String, Object>> bookListMap) {
		for ( Map<String,Object> requstMap : bookListMap) {
			
			int rowType = Integer.parseInt(String.valueOf(requstMap.get(DataSetRowTypeAccessor.NAME)));
			
			if( rowType == DataSet.ROW_TYPE_INSERTED ) {
				
				happyLibraryMapper.insertBook(requstMap);
			} else if( rowType == DataSet.ROW_TYPE_DELETED ) {
				happyLibraryMapper.deleteBook(requstMap);
			} else if( rowType == DataSet.ROW_TYPE_UPDATED) {
				
				happyLibraryMapper.updateBook(requstMap);
			}
					
		}
		
	}

	@Override
	public List<Map<String, Object>> selectTotalCate() {
		
		return happyLibraryMapper.selectTotalCate();
	}

	@Override
	public List<Map<String, Object>> selectTotalGender() {
		
		return happyLibraryMapper.selectTotalGender();
	}

	@Override
	public List<Map<String, Object>> selectComList() {
		// TODO Auto-generated method stub
		return happyLibraryMapper.selectComList();
	}

	@Override
	public void saveTotal1(List<Map<String, Object>> dsSchMap) {
for ( Map<String,Object> requstMap : dsSchMap) {
			
			int rowType = Integer.parseInt(String.valueOf(requstMap.get(DataSetRowTypeAccessor.NAME)));
			
			if( rowType == DataSet.ROW_TYPE_INSERTED ) {
				happyLibraryMapper.insertCommd(requstMap);
			} else if( rowType == DataSet.ROW_TYPE_DELETED ) {
				happyLibraryMapper.deleteCommd(requstMap);
			} else if( rowType == DataSet.ROW_TYPE_UPDATED) {
				
				happyLibraryMapper.updateCommd(requstMap);
			}
					
		}
		
	}
	




}
