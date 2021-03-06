package spring.com.sample.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.codec.Base64;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

import egovframework.rte.fdl.cryptography.EgovCryptoService;
import egovframework.rte.fdl.cryptography.EgovPasswordEncoder;
import egovframework.rte.fdl.cryptography.impl.EgovARIACryptoServiceImpl;
import spring.com.sample.service.HappyLibraryService;
import spring.nexacro.annotation.ParamDataSet;
import spring.nexacro.data.NexacroResult;

import java.io.BufferedReader;
//ADSReceiver 클래스의 receiveAddr()함수를 호출하여, 데이터를 요청합니다.
//receiveAddr()함수에 사용되는 입력파라미터는 app_key, date_gb, cntc_cd, retry_in, req_date_from, req_date_to입니다.
//결과 데이터는 ReceiveDatas 객체로 반환되며, 이를 getReceiveDatas(int order)를 통해서 정렬하여 ArrayList 타입으로 반환합니다.
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Properties;

@Controller
public class HappyLibraryController {
	

	private Logger log = LoggerFactory.getLogger(HappyLibraryController.class);
	
	@Resource(name ="happyLibraryService")
	private HappyLibraryService happyLibraryService;
	

	//사용자 통계----------------------------------------------------------------------------------------------------------
	@RequestMapping(value = "/practice/staticMypage.do")
	 public NexacroResult staticMypage(@ParamDataSet(name = "dsMypageMap", required = false) Map<String, Object> dsMypageMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();
  

			log.debug("eee");
			
			

			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			List<Map<String,Object>> dsCntNum = happyLibraryService.staticMypage(dsMypageMap);

			result.addDataSet("dsCntNum", dsCntNum);
			
			return result;
	}
	
		
	
	
	
	//사용자 정보조회----------------------------------------------------------------------------------------------------------
	@RequestMapping(value = "/practice/selectMypageList.do")
	 public NexacroResult selectMypageList(@ParamDataSet(name = "dsMypageMap", required = false) Map<String, Object> dsMypageMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();
  

			log.debug("eee");
			
			

			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			
			List<Map<String,Object>> dsUserInfo = happyLibraryService.selectMypageList(dsMypageMap);

			result.addDataSet("dsUserInfo", dsUserInfo);
			System.out.println(dsUserInfo.get(0).get("userNo"));
			
			return result;
	}
	
	
	
	
	
	
	//사용자 정보수정-----------------------------------------------------------------------------------------------------------
	@RequestMapping(value = "/practice/saveUserInfo.do")
	public NexacroResult saveUserInfo(@ParamDataSet(name = "dsUserInfo", required = false) List<Map<String, Object>> egovdsList)throws Exception{
		
		System.out.println("savecontroller");
		System.out.println("savecontroller");
		System.out.println("savecontroller");
		System.out.println("savecontroller");
		System.out.println("savecontroller");
		
		NexacroResult result = new NexacroResult();
	    
		// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		
		happyLibraryService.saveUserInfo(egovdsList);
		
	

		resVarList.add("ErrorCode", 200);
		//resVarList.add("ErrorMsg", msg);


		resData.setVariableList(resVarList);
		result.setPlatformData(resData);

		return result;
	} 
	
	
	
	
	//사용자 대출조회-----------------------------------------------------------------------------------------------------------
	
	@RequestMapping(value = "/practice/selectBorrowList.do")
	 public NexacroResult selectBorrowList(@ParamDataSet(name = "dsBrSchMap", required = false) Map<String, Object> dsBrSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();
 

			log.debug("eee");
			
			

			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			System.out.println("selectcontroller");
			List<Map<String,Object>> dsUserBr = happyLibraryService.selectBorrowList(dsBrSchMap);

			result.addDataSet("dsUserBr", dsUserBr);
			
			return result;
	}
	
	
	
	
	//공통코드
	 @RequestMapping(value = "/practice/selectCdCboList.do")
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
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

		//사용자 연체조회-----------------------------------------------------------------------------------------------------------
		
		@RequestMapping(value = "/practice/selectOverdueList.do")
		 public NexacroResult selectOverdueList(@ParamDataSet(name = "dsOvSchMap", required = false) Map<String, Object> dsOvSchMap) throws Exception {

				// 넥사크로로 전달 해줄 객체
				NexacroResult result = new NexacroResult();
	 

				log.debug("eee");
				
				

				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				List<Map<String,Object>> dsUserOv = happyLibraryService.selectOverdueList(dsOvSchMap);

				result.addDataSet("dsUserOv", dsUserOv);
				
				return result;
		}
		

		//사용자 예약조회-----------------------------------------------------------------------------------------------------------
		
		@RequestMapping(value = "/practice/selectResList.do")
		 public NexacroResult selectResList(@ParamDataSet(name = "dsResSchMap", required = false) Map<String, Object> dsResSchMap) throws Exception {

				// 넥사크로로 전달 해줄 객체
				NexacroResult result = new NexacroResult();
	 

				log.debug("eee");
				
				

				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				List<Map<String,Object>> dsUserRes = happyLibraryService.selectResList(dsResSchMap);

				result.addDataSet("dsUserRes", dsUserRes);
				
				return result;
		}
		
	//사용자 재제조회-----------------------------------------------------------------------------------------------------------
		
		@RequestMapping(value = "/practice/selectSanList.do")
		 public NexacroResult selectSanList(@ParamDataSet(name = "dsSanSchMap", required = false) Map<String, Object> dsSanSchMap) throws Exception {

				// 넥사크로로 전달 해줄 객체
				NexacroResult result = new NexacroResult();
	 

				log.debug("eee");
				
				

				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				List<Map<String,Object>> dsUserSan = happyLibraryService.selectSanList(dsSanSchMap);

				result.addDataSet("dsUserSan", dsUserSan);
				
				return result;
		}
	 
		
	//사용자 재제조회-----------------------------------------------------------------------------------------------------------
		
		@RequestMapping(value = "/practice/CboSanList.do")
		 public NexacroResult CboSanList() throws Exception {

				// 넥사크로로 전달 해줄 객체
				NexacroResult result = new NexacroResult();
	 

				log.debug("eee");
				
				

				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				System.out.println("selectcontroller");
				List<Map<String,Object>> dsSanList = happyLibraryService.CboSanList();

				result.addDataSet("dsSanList", dsSanList);
				
				return result;
		}
	
		
		//사용자 대출도서 상세-----------------------------------------------------------------------------------------------------------
			
			@RequestMapping(value = "/practice/getBookDt.do")
			 public NexacroResult getBookDt(@ParamDataSet(name = "dsBkSchMap", required = false) Map<String, Object> dsBkSchMap) throws Exception {

					// 넥사크로로 전달 해줄 객체
					NexacroResult result = new NexacroResult();
		 

					log.debug("eee");
					
					List<Map<String,Object>> dsBkDt = happyLibraryService.getBookDt(dsBkSchMap);

					result.addDataSet("dsBkDt", dsBkDt);
					
					return result;
			}
		
			
			
			//사용자 대출도서 연장전 대출확인-----------------------------------------------------------------------------------------------------------
				
				@RequestMapping(value = "/practice/checkRes.do")
				 public NexacroResult checkRes(@ParamDataSet(name = "dsBkSchMap", required = false) Map<String, Object> dsBkSchMap) throws Exception {
						System.out.println("123123123123");
						// 넥사크로로 전달 해줄 객체
						NexacroResult result = new NexacroResult();
			 

						log.debug("eee");
						
						List<Map<String,Object>> dsTmp = happyLibraryService.checkRes(dsBkSchMap);
						
						result.addDataSet("dsTmp",dsTmp);

					
						return result;
						
				}
				
			//사용자 대출도서 연장 -----------------------------------------------------------------------------------------------------------
				
				@RequestMapping(value = "/practice/extendBr.do")
				public NexacroResult extendBr(@ParamDataSet(name = "dsBkDt", required = false) List<Map<String, Object>> egovdsList)throws Exception{
					
					System.out.println("savecontroller");
					System.out.println("savecontroller");
					System.out.println("savecontroller"); 
					System.out.println("savecontroller");
					System.out.println("savecontroller");
					
					NexacroResult result = new NexacroResult();
				    
					// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
					PlatformData resData = new PlatformData();
					VariableList resVarList = resData.getVariableList();
					
					happyLibraryService.extendBk(egovdsList);
					
				

					resVarList.add("ErrorCode", 200);
					//resVarList.add("ErrorMsg", msg);


					resData.setVariableList(resVarList);
					result.setPlatformData(resData);

					return result;
				} 
				
				
	
	
		
}
