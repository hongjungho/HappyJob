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

	public List<Map<String, Object>> selectloginUser() {
		
		return selectList("selectUserList");
	}
	
	
	
	
}
