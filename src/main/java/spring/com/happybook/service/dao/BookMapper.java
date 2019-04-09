package spring.com.happybook.service.dao;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("bookMapper")
public class BookMapper extends EgovAbstractMapper{
	
	private Logger log = LoggerFactory.getLogger(BookMapper.class);
	
	public List<Map<String, Object>> getList (Map<String, Object> dsSearch) throws Exception{
		
		return selectList("getList", dsSearch);
	}
	
	public List<Map<String, Object>> getBookByTitle(Map<String, Object> dsArgs) throws Exception
	{
		return selectList("getBookByTitle", dsArgs);
	}
	
	public void rent(Map<String, Object> dsRent) throws Exception{
		insert("brrBook", dsRent);
	}
	
	public void regBook(Map<String, Object> dsBooks) throws Exception{
		insert("regBook", dsBooks);
	}
	
}
