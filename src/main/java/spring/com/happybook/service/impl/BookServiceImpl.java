package spring.com.happybook.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import spring.com.happybook.service.BookService;
import spring.com.happybook.service.dao.BookMapper;

@Service("bookService")
public class BookServiceImpl extends EgovAbstractServiceImpl implements BookService{

	@Resource(name = "bookMapper")
	private BookMapper bookMapper;

	@Override
	public List<Map<String, Object>> getList(Map<String, Object> dsSearch) throws Exception{
		return bookMapper.getList(dsSearch);
	}


	@Override
	public List<Map<String, Object>> getBookByTitle(Map<String, Object> dsArgs) throws Exception {
		return bookMapper.getBookByTitle(dsArgs);
	}
	
	@Override
	public void regBook(Map<String, Object> dsBooks) throws Exception {
		bookMapper.regBook(dsBooks);
	}


	@Override
	public void rent(Map<String, Object> dsRent) throws Exception {
		bookMapper.rent(dsRent);
	}

}
