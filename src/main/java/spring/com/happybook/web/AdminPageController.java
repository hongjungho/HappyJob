package spring.com.happybook.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

import spring.com.happybook.service.HappyLibraryService;
import spring.nexacro.annotation.ParamDataSet;
import spring.nexacro.data.NexacroResult;

@Controller
public class AdminPageController {

	private Logger log = LoggerFactory.getLogger(AdminPageController.class);

	@Resource(name ="HappyLibraryService")
	private HappyLibraryService happyLibraryService;


	// 도서 all 조회
	@RequestMapping(value = "/admin/bookList.do")
	public NexacroResult selectBookList(@ParamDataSet(name = "dsSchMap", required = false) 
	Map<String, Object> dsSchMap ) throws Exception {

		NexacroResult result = new NexacroResult();

		List<Map<String,Object>> dsBookList = happyLibraryService.selectBookList(dsSchMap);

		result.addDataSet("dsBookList", dsBookList);


		return result;
	}
	
	@RequestMapping("/admin/saveBookList.do")
	public NexacroResult saveBookList(@ParamDataSet(name="dsBookList" , required =false) 
	List<Map<String, Object>> bookListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		happyLibraryService.saveBookList(bookListMap);
		
		resData.setVariableList(resVarList);

		result.setPlatformData(resData);

		
		return result;
	}
	// 직원 all 조회
	@RequestMapping("/admin/emplList.do")
	public NexacroResult selectEmplList( @ParamDataSet(name="dsSchMap" , required =false) 
	Map<String, Object> dsSchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsEmplList=  happyLibraryService.selectEmplList(dsSchMap);
		result.addDataSet("dsEmplList", dsEmplList);
		return result;
	}
	// 직원 all 조회
	@RequestMapping("/admin/saveEmplList.do")
	public NexacroResult saveEmplList( @ParamDataSet(name="dsEmplList" , required =false) 
	List<Map<String, Object>> emplListMap) throws Exception {
		NexacroResult result = new NexacroResult();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		happyLibraryService.saveEmplList(emplListMap);
		

		resData.setVariableList(resVarList);

		result.setPlatformData(resData);

		return result;
	}

	// 유저 all 조회
	@RequestMapping("/admin/userList.do")
	public NexacroResult selectUserList( @ParamDataSet(name="dsSchMap" , required =false) 
	Map<String, Object> dsSchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsUserList=  happyLibraryService.selectUserList(dsSchMap);
		result.addDataSet("dsUserList", dsUserList);
		return result;
	}
	//유저 삭제
	@RequestMapping("/admin/userDelete.do")
	public NexacroResult deleteUser( @ParamDataSet(name="dsSchMap" , required =false) 
	Map<String, Object> dsSchMap) throws Exception {
		NexacroResult result =  new NexacroResult();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();

		happyLibraryService.deleteUser(dsSchMap);

		resData.setVariableList(resVarList);
		result.setPlatformData(resData);

		return result;
	}	
	// 토탈 chart
	@RequestMapping("/admin/selectTotalCate.do")
	public NexacroResult selectTotalCate() throws Exception{
		NexacroResult result = new NexacroResult();
		List<Map<String,Object>> dsTotal = happyLibraryService.selectTotalCate();
		List<Map<String,Object>> dsTotal2 = happyLibraryService.selectTotalGender();
		result.addDataSet("dsTotal",dsTotal);
		result.addDataSet("dsTotal2",dsTotal2);
		
		return result;
	}
	
	//-------------- 공통코드 CRUD----------
	
	@RequestMapping("/admin/selectComList.do")
	public NexacroResult selectComList() throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map<String,Object>> dsTotal = happyLibraryService.selectComList();
		result.addDataSet("dsTotal",dsTotal);
		result.addDataSet("dsTotal2",dsTotal);
		
		return result;
	}
	
	@RequestMapping("/admin/saveTotal1.do")
	public NexacroResult saveTotal1(@ParamDataSet(name="dsTotal" , required =false) 
	List<Map<String, Object>> dsSchMap ) throws Exception {
		NexacroResult result = new NexacroResult();
		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		
		happyLibraryService.saveTotal1(dsSchMap);

		resData.setVariableList(resVarList);
		result.setPlatformData(resData);
		return result;
		
	}
	
	// ----------------END----------------
	@RequestMapping("/admin/selectCdCboList.do")
	public NexacroResult selectCmmnCdCboList(@ParamDataSet(name = "dsCmmInParam", required = false) Map<String, Object> schMap)throws Exception{

		NexacroResult result = new NexacroResult();
		
		log.debug("=========con====");
		
		if(schMap != null && StringUtils.isNotBlank(String.valueOf(schMap.get("lrgClsfCdArrStr")))){
			String[] lrgClsfCdArr  = StringUtils.split(String.valueOf(schMap.get("lrgClsfCdArrStr")), ",");
			String[] outDsArr      = StringUtils.split(String.valueOf(schMap.get("outDsArrStr")), ",");
			String[] selTypeArrStr = StringUtils.split(String.valueOf(schMap.get("selTypeArrStr")), ",");

	
			for(int i=0;i<lrgClsfCdArr.length;i++){
				if(StringUtils.isNotBlank(StringUtils.trim(lrgClsfCdArr[i]))){
					schMap.put("lrgClsfCd", lrgClsfCdArr[i]);
					List<Map<String, Object>> dtaList = happyLibraryService.selectCmmnCdCboList(schMap);
					result.addDataSet(new String(outDsArr[i]), setMakeSelDef(selTypeArrStr[i], dtaList));
				}
			}
			
			
		}
		
		return result;
		
 }
 
 private List<Map<String, Object>> setMakeSelDef(String selType, List<Map<String, Object>> rstList){
		return setMakeSelDef(selType, rstList, "cdId", "cdNm");
 }
 
 private List<Map<String, Object>> setMakeSelDef(String selType, List<Map<String, Object>> rstList, String cdColNm, String cdNmColNm){

		if(rstList == null){
			rstList = new ArrayList<Map<String, Object>>();
		}

		Map<String, Object> defMap = new HashMap<String, Object>();

		
		boolean isRowAdd = false;
		
		if(StringUtils.equals("SEL", selType)){
			isRowAdd = true;
			defMap.put(cdColNm, "");
			defMap.put(cdNmColNm, "선택");

		}else if(StringUtils.equals("ALL", selType)){
			isRowAdd = true;
			defMap.put(cdColNm, "");
			defMap.put(cdNmColNm, "전체");
		}else if(StringUtils.equals("CUS", selType)){
			isRowAdd = true;
			defMap.put(cdNmColNm, "직접입력");
		}else if(StringUtils.equals("BLANK", selType)){
			isRowAdd = true;
			defMap.put(cdColNm, "");
			defMap.put(cdNmColNm, "");
		}
		
		if(isRowAdd){
			if(StringUtils.equals("cdNm", cdColNm)){
				defMap.put("cdId", "");
			}else{
				defMap.put(cdColNm, "");				
			}			
			rstList.add(0, defMap);
		}
		
		return rstList;
		
	}





}
