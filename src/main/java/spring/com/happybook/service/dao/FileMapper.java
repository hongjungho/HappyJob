package spring.com.happybook.service.dao;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("fileMapper")
public class FileMapper extends EgovAbstractMapper {
	
	private Logger log = LoggerFactory.getLogger(FileMapper.class);
	
	public void fileUpload(Map<String, Object> dsFiles) throws Exception{
		insert("fileUpload", dsFiles);
	}
	
}
