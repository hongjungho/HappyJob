package spring.com.happybook.service;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;


//로그인 관련 메소드 이름을 제공하는 [서비스 인터페이스] 선언.
public interface LoginService {
	//***********************************************
	//[로그인 아이디,암호 존재 개수] 검색하는 메소드 선언
	//***********************************************
	int getUserCnt( List<Map<String,String>> user_id_pwd);

	List<Map<String, String>> user_id_pwd();

}
