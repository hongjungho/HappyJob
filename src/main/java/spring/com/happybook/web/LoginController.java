package spring.com.happybook.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

import spring.com.happybook.service.LoginService;
import spring.nexacro.annotation.ParamDataSet;
import spring.nexacro.data.NexacroResult;

@Controller
public class LoginController {

	private Logger log = LoggerFactory.getLogger(LoginController.class);
	
	@Resource(name ="LoginService")
	private LoginService loginService;
	
	
	@RequestMapping(value = "/practice/selectUserList.do")
	 public NexacroResult selectUserList1(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsUserList = loginService.selectUserList1(dsSchMap);

			System.out.println("*********************************************");
			result.addDataSet("dsUserList", dsUserList);
			System.out.println(dsUserList);
			return result;
	}
	
	@RequestMapping(value = "/practice/findIdUserList.do")
	 public NexacroResult findIdUserList(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsUserList = loginService.findIdUserList(dsSchMap);

			System.out.println("*********************************************");
			result.addDataSet("dsUserList", dsUserList);
			System.out.println(dsUserList);
			return result;
	}
	@RequestMapping(value = "/practice/findIdUserList2.do")
	 public NexacroResult findIdUserList2(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsUserList = loginService.findIdUserList2(dsSchMap);

			System.out.println("*********************************************");
			result.addDataSet("dsUserList", dsUserList);
			System.out.println(dsUserList);
			return result;
	}
	@RequestMapping(value = "/practice/findIdUserList3.do")
	 public NexacroResult findIdUserList3(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsUserList = loginService.findIdUserList3(dsSchMap);

			System.out.println("*********************************************");
			result.addDataSet("dsUserList", dsUserList);
			System.out.println(dsUserList);
			return result;
	}
	@RequestMapping(value = "/practice/findPwdUserList.do")
	 public NexacroResult findPwdUserList(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsUserList = loginService.findPwdUserList(dsSchMap);

			System.out.println("*********************************************");
			result.addDataSet("dsUserList", dsUserList);
			System.out.println(dsUserList);
			return result;
	}
	//좌석예약확인
	@RequestMapping(value = "/practice/selectSeatList.do")
	 public NexacroResult selectSeatList(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsUserList = loginService.selectSeatList(dsSchMap);

			System.out.println("*********************************************");
			result.addDataSet("dsUserList", dsUserList);
			System.out.println(dsUserList);
			return result;
	}
	

	/*@RequestMapping(value = "/practice/saveUserList.do")
	
	public NexacroResult saveUserList(@ParamDataSet(name = "dsSchMap", required = false) List<Map<String, Object>> egovdsList)throws Exception{
	//dsSchMap
	
	NexacroResult result = new NexacroResult();

	// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
	PlatformData resData = new PlatformData();
	
	VariableList resVarList = resData.getVariableList();
	
	loginService.saveUserList(egovdsList);
	
	//resVarList.add("ErrorCode", 200);
	//resVarList.add("ErrorMsg", msg);
	
	resData.setVariableList(resVarList);
	result.setPlatformData(resData);
	
		return result;
	}
	*/
	////////////////////////////////////////////////////////////Join
	 @RequestMapping(value = "/practice/saveUserListForm.do")
		public NexacroResult saveUserListForm(@ParamDataSet(name = "dsSchMap", required = false) List<Map<String, Object>> egovdsList)throws Exception{
			
		
			NexacroResult result = new NexacroResult();
		    
			// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
			//PlatformData resData = new PlatformData();
			
			//VariableList resVarList = resData.getVariableList();
			
			loginService.saveUserListForm(egovdsList);

			//resVarList.add("ErrorCode", 200);
			//resVarList.add("ErrorMsg", msg);

			//resData.setVariableList(resVarList);
			//result.setPlatformData(resData);

			return result;
		} 
	////////////////////////////////////////////////////////////Reserve
	 @RequestMapping(value = "/practice/saveReserveListForm.do")
		public NexacroResult saveReserveListForm(@ParamDataSet(name = "dsSchMap", required = false) List<Map<String, Object>> egovdsList)throws Exception{
			
		
			NexacroResult result = new NexacroResult();
		    
			// 결과에 대한 콜백 메세지 처리 시 사용되는 객체
			//PlatformData resData = new PlatformData();
			
			//VariableList resVarList = resData.getVariableList();
			
			loginService.saveReserveListForm(egovdsList);

			//resVarList.add("ErrorCode", 200);
			//resVarList.add("ErrorMsg", msg);

			//resData.setVariableList(resVarList);
			//result.setPlatformData(resData);

			return result;
		} 
	  
	  
	
	//------------------------------------------------------
/*
		@RequestMapping(value = "/practice/selectCheckList.do")
		 public NexacroResult selectCheckList(@ParamDataSet(name = "dsTmp", required = false) Map<String, Object> dsTmp) throws Exception {

				// 넥사크로로 전달 해줄 객체
				NexacroResult result = new NexacroResult();

				log.debug("eee");
						

				List<Map<String,Object>> dsUserList = loginService.selectCheckList(dsTmp);
				
				result.addDataSet("dsUserList", dsUserList);
				System.out.println(dsUserList);
				return result;
		}*/
/*
	@RequestMapping(value = "/practice/checkId.do")
	 public NexacroResult checkId(@ParamDataSet(name = "dsSchMap", required = false) Map<String, Object> dsSchMap) throws Exception {

			// 넥사크로로 전달 해줄 객체
			NexacroResult result = new NexacroResult();

			log.debug("eee");
					

			List<Map<String,Object>> dsTmp = loginService.checkId(dsSchMap);
			
			System.out.println(dsTmp.size());
			System.out.println(dsTmp.size());
			System.out.println(dsTmp.size());
			System.out.println(dsTmp.size());
			System.out.println(dsTmp.size());
			System.out.println(dsTmp.size());
			System.out.println(dsTmp.size());
			
			
			result.addDataSet("dsTmp", dsTmp);
			
			return result;
	}*/
	  
}	