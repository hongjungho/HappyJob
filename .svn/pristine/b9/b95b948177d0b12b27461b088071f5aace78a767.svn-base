package spring.com.sample.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.codec.Base64;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

import egovframework.rte.fdl.cryptography.EgovCryptoService;
import egovframework.rte.fdl.cryptography.EgovPasswordEncoder;
import egovframework.rte.fdl.cryptography.impl.EgovARIACryptoServiceImpl;
import spring.com.sample.service.Sample001Service;
import spring.nexacro.annotation.ParamDataSet;
import spring.nexacro.data.NexacroResult;

@Controller
public class Sample001Controller {

	private Logger log = LoggerFactory.getLogger(Sample001Controller.class);
	
	@Resource(name ="sample001Service")
	private Sample001Service sample001Service;
	
	
	@RequestMapping(value = "/sample/selectSubjectList.do")
	 public NexacroResult selectSampleSubjectList(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();
  



			log.debug("eee");


			List<Map<String,Object>> dsSubjectList = sample001Service.selectSampleSubjectList(dsSchMap);

			result.addDataSet("dsSubjectList", dsSubjectList);
			
			
			return result;
	}
	//--------------
	@RequestMapping(value = "/practice/testSearchList.do")
	 public NexacroResult testSearchList(@ParamDataSet(name = "dsemlpID", required = false) Map<String, Object> dsemlpID) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();
			
			log.debug("12345");
			
			System.out.println("Controller");
			System.out.println("Controller");
			System.out.println("Controller");
			System.out.println("Controller");
			System.out.println("Controller");

			System.out.println(dsemlpID.get("SCH_TEXT"));
			System.out.println(dsemlpID.get("SCH_DEPT"));
			System.out.println(dsemlpID.get("COL_ORDER"));
			System.out.println(dsemlpID.get("HIRE_START"));
			System.out.println(dsemlpID.get("HIRE_END"));
			





			List<Map<String,Object>> dsEmployees = sample001Service.testSearchList(dsemlpID);
			
			result.addDataSet("dsEmployees", dsEmployees);
			
			System.out.println("Return?????");
			System.out.println("Return?????");
			System.out.println("Return?????");
			System.out.println("Return?????");
			
			return result;
	}
	
	//--------------
	
	
	
	
	
	
	/**
	  * 샘플 저장
	  * @param reqMap
	  * @return
	  * @throws Exception
	  */
	 
	  @RequestMapping(value = "/sample/saveSubjectList.do")
		public NexacroResult saveSubjectList(@ParamDataSet(name = "dsSubjectList", required = false) List<Map<String, Object>> egovdsList)throws Exception{
			
		
			NexacroResult result = new NexacroResult();
		    
			// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
			PlatformData resData = new PlatformData();
			VariableList resVarList = resData.getVariableList();
			
			sample001Service.saveSubjectList(egovdsList);
			
		

			resVarList.add("ErrorCode", 200);
			//resVarList.add("ErrorMsg", msg);


			resData.setVariableList(resVarList);
			result.setPlatformData(resData);

			return result;
		} 
	  
	  
	  //-------------------------------------------------------
	  @RequestMapping(value = "/practice/testSaveList.do")
		public NexacroResult testSaveList(@ParamDataSet(name = "dsEmployees", required = false) List<Map<String, Object>> egovdsList)throws Exception{
			
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
			NexacroResult result = new NexacroResult();
		    
			// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
			PlatformData resData = new PlatformData();
			VariableList resVarList = resData.getVariableList();
			
			sample001Service.testSaveList(egovdsList);
			
		

			resVarList.add("ErrorCode", 200);
			//resVarList.add("ErrorMsg", msg);


			resData.setVariableList(resVarList);
			result.setPlatformData(resData);

			return result;
		} 
	  
	  
	  //-------------------------------------------------------
	
	 @RequestMapping(value = "/sample/selectCdCboList.do")
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
						List<Map<String, Object>> dtaList = sample001Service.selectCmmnCdCboList(schMap);
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
