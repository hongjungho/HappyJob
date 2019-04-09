package spring.com.happybook.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import spring.com.happybook.service.HappyLibraryService;
import spring.com.happybook.service.LoginService;
import spring.nexacro.data.NexacroResult;

@Controller
public class LoginController {

	@RequestMapping(value = "/practice/loginForm.do")
	 public void selectUserList() throws Exception {
		
		System.out.println("컨트롤러");
		

//			 넥사크로로 전달 해줄 객체
//			NexacroResult result = new NexacroResult();
//			 
//			List<Map<String,String>> dsUser = LoginService.user_id_pwd();
//
//			result.addDataSet("dsUser", dsUser);
			
			
//			return result;
	}
	
	/*@RequestMapping("/loginCheck.do")
	public ModelAndView loginCheck(NexacroMapDTO xpDto, HttpServletRequest request) throws Exception {
	     
	    Log logger = LogFactory.getLog(this.getClass());   
	    ModelAndView mav = new ModelAndView("nexacroMapView");
	 
	    try {
	        Map <String, Object> inVar            = xpDto.getInVariableMap();
	        Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
	         
	        String sUserId = (String)inVar.get("V_USER_ID");
	        String sPswd = (String)inVar.get("V_USER_PWD");
	         
	        if(("").equals(sUserId)){
	            mav.addObject(NexacroConstant.ERROR_CODE, "-1");
	            mav.addObject(NexacroConstant.ERROR_MSG, "ERROR");
	            return mav;
	        }
	         
	        if(("").equals(sPswd)){
	            mav.addObject(NexacroConstant.ERROR_CODE, "-1");
	            mav.addObject(NexacroConstant.ERROR_MSG, "ERROR");
	            return mav;
	        }
	         
	        User user = new User();
	        user.setUser_id(sUserId);
	        user.setPswd(sPswd);
	         
	        logger.debug("LogInOutController::loginCheck ...." + sUserId + " : " + sPswd);
	         
	        logInOutService.loginCheck(mav, user, request, outDataset);
	 
	        mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
	        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME,     xpDto.getOutDataSetMap());
	         
	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "");
	     
	    } catch ( Exception e ) {
	        e.printStackTrace();
	    }
	    return mav;    
	}*/
}