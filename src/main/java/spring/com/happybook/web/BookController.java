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

import spring.com.happybook.service.BookService;
import spring.nexacro.annotation.ParamDataSet;
import spring.nexacro.data.NexacroResult;

@Controller("bookController")
public class BookController {
	
	private Logger log = LoggerFactory.getLogger(BookController.class);
	
	@Resource(name = "bookService")
	private BookService bookService;
	
	@RequestMapping("/book/getList.do")
	public NexacroResult getList(@ParamDataSet(name="dsSearch", required=false)Map<String, Object> dsSearch) throws Exception{
		
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsBooks = bookService.getList(dsSearch);
		result.addDataSet("dsBooks", dsBooks);
		return result;
	}
	
	@RequestMapping("/book/getBookByTitle.do")
	public NexacroResult getBookByTitle(@ParamDataSet(name="dsArgs", required=false)Map<String, Object> dsArgs) throws Exception{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsBook = bookService.getBookByTitle(dsArgs);
		result.addDataSet("dsBook", dsBook);
		return result;
	}
	
	@RequestMapping("/book/rent.do")
	public NexacroResult rent(@ParamDataSet(name="dsRent", required=false)Map<String, Object> dsRent) throws Exception{
		
		NexacroResult result = new NexacroResult();
		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		
		bookService.rent(dsRent);
		
		resVarList.add("ErrorCode", 200);
		
		resData.setVariableList(resVarList);
		result.setPlatformData(resData);
		
		return result;
		
	}

	@RequestMapping("/book/regBook.do")
	public NexacroResult regBook(@ParamDataSet(name="dsBooks", required=false)Map<String, Object> dsBooks) throws Exception{
		
		NexacroResult result = new NexacroResult();
		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		
		bookService.regBook(dsBooks);

		resVarList.add("ErrorCode", 200);

		resData.setVariableList(resVarList);
		result.setPlatformData(resData);

		return result;
	}
	
}
