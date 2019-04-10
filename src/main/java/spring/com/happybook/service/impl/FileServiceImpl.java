package spring.com.happybook.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import spring.com.happybook.service.FileService;
import spring.com.happybook.service.dao.FileMapper;

@Service("fileService")
public class FileServiceImpl extends EgovAbstractServiceImpl implements FileService{
	
	private Logger log = LoggerFactory.getLogger(FileService.class);

	@Resource(name="fileMapper")
	private FileMapper fileMapper;
	
	@Override
	public void fileUpload(Map<String, Object> dsFiles) throws Exception {
			fileMapper.fileUpload(dsFiles);
	}
	
	
	

}
