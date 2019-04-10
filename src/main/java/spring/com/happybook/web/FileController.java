package spring.com.happybook.web;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

import spring.com.happybook.service.FileService;
import spring.nexacro.annotation.ParamDataSet;
import spring.nexacro.data.NexacroResult;

@Controller("fileController")
public class FileController {
	
	@Resource(name="fileService")
	private FileService fileService;
	

	public NexacroResult fileUpload(@ParamDataSet(name="dsFiles")Map<String, Object> dsFiles) throws Exception{

		NexacroResult result = new NexacroResult();
		PlatformData platformData = new PlatformData();
		VariableList variableList = platformData.getVariableList();
		
		
		fileService.fileUpload(dsFiles);
		
		variableList.add("ErrorCode", 200);
		
		platformData.setVariableList(variableList);
		result.setPlatformData(platformData);
		
		return result;
		
	}
}
