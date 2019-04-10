(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("adminUser");
                this.set_titletext("New Form");
                this.set_name("adminUser");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("gainsboro");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBookList", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"bookWriter\" type=\"STRING\" size=\"256\"/><Column id=\"bookPub\" type=\"STRING\" size=\"256\"/><Column id=\"bookdate\" type=\"STRING\" size=\"256\"/><Column id=\"divCd\" type=\"STRING\" size=\"256\"/><Column id=\"classCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookIsbn\" type=\"STRING\" size=\"256\"/><Column id=\"bookregdate\" type=\"STRING\" size=\"256\"/><Column id=\"bookSum\" type=\"STRING\" size=\"256\"/><Column id=\"placeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookImg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">admin/bookList.do</Col><Col id=\"svcid\">selectBookList</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsBookList=dsBookList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">saveBookList</Col><Col id=\"sController\">admin/saveBookList.do</Col><Col id=\"inds\">dsBookList=dsBookList:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"collectioncd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "57.03%", "194", null, "22", "36.43%", null, this);
            obj.set_taborder("2");
            obj.set_text("도서번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "57.03%", "278", null, "22", "35.64%", null, this);
            obj.set_taborder("4");
            obj.set_text("도서분류");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "57.03%", "338", null, "22", "35.64%", null, this);
            obj.set_taborder("6");
            obj.set_text("카테고리");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "57.03%", "252", null, "24", "24.22%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "57.03%", "228", null, "22", "36.43%", null, this);
            obj.set_taborder("8");
            obj.set_text("도서제목");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "56.93%", "424", null, "22", "36.52%", null, this);
            obj.set_taborder("10");
            obj.set_text("출판사");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "57.03%", "520", null, "15", "36.43%", null, this);
            obj.set_taborder("12");
            obj.set_text("줄거리");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "63.28%", "512", null, "22", "29.88%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85.16%", "210", null, "22", "8.01%", null, this);
            obj.set_taborder("15");
            obj.set_text("도서이미지");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "57.03%", "378", null, "22", "36.43%", null, this);
            obj.set_taborder("16");
            obj.set_text("저자");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "64.06%", "338", null, "21", "24.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");

            obj = new Edit("Edit01", "absolute", "61.62%", "378", null, "24", "24.32%", null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "61.62%", "422", null, "24", "24.32%", null, this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "57.03%", "544", null, "70", "4.69%", null, this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "81.54%", "433", null, "37", "4.88%", null, this);
            obj.set_taborder("25");
            obj.getSetter("retry").set("0");
            obj.style.set_buttontext("불러오기");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "81.35%", "243", null, "175", "3.81%", null, this);
            obj.set_taborder("26");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "3.32%", "34", null, "64", "85.35%", null, this);
            obj.set_taborder("28");
            obj.set_text("도서");
            obj.style.set_image("URL('theme://images/ico_treeitem.png')");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "16.89%", "35", null, "62", "71.09%", null, this);
            obj.set_taborder("29");
            obj.set_text("회원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "66.5%", "654", null, "26", "27.25%", null, this);
            obj.set_taborder("33");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "88.87%", "654", null, "26", "4.88%", null, this);
            obj.set_taborder("34");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "81.54%", "654", null, "26", "12.21%", null, this);
            obj.set_taborder("35");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "74.22%", "654", null, "26", "19.53%", null, this);
            obj.set_taborder("36");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "2.73%", "128", null, "24", "75.78%", null, this);
            obj.set_taborder("38");
            obj.set_displaynulltext("도서명으로 검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "19.04%", "128", null, "25", "75.78%", null, this);
            obj.set_taborder("39");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "30.96%", "35", null, "62", "57.03%", null, this);
            obj.set_taborder("40");
            obj.set_text("직원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "61.62%", "472", null, "24", "24.32%", null, this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "56.93%", "474", null, "22", "36.52%", null, this);
            obj.set_taborder("42");
            obj.set_text("ISBN");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "76.56%", "474", null, "22", "16.89%", null, this);
            obj.set_taborder("44");
            obj.set_text("발행일");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "55.47%", "176", null, "1", "3.13%", null, this);
            obj.set_taborder("45");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "55.47%", "639", null, "1", "2.34%", null, this);
            obj.set_taborder("46");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.64%", "169", null, "485", "47.36%", null, this);
            obj.set_taborder("48");
            obj.set_binddataset("dsBookList");
            obj.set_selectchangetype("down");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"112\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서번호\"/><Cell col=\"1\" text=\"도서이름\"/><Cell col=\"2\" text=\"책등록일\"/><Cell col=\"3\" text=\"구분코드\"/><Cell col=\"4\" text=\"분류코드\"/><Cell col=\"5\" text=\"bookIsbn\"/></Band><Band id=\"body\"><Cell text=\"bind:bookNo\"/><Cell col=\"1\" text=\"bind:bookNm\"/><Cell col=\"2\" text=\"bind:bookdate\"/><Cell col=\"3\" text=\"bind:divCd\"/><Cell col=\"4\" text=\"bind:classCd\"/><Cell col=\"5\" text=\"bind:bookIsbn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "81.74%", "474", null, "22", "4.49%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("49");

            obj = new Radio("Radio00", "absolute", "57.03%", "305", null, "26", "22.85%", null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">일반도서</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">전자도서</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");

            obj = new Static("Static06", "absolute", "29.69%", "647", null, "41", "62.01%", null, this);
            obj.set_taborder("51");
            obj.set_text("조회결과  ");
            obj.style.set_font("9 Dotum,Arial Black,Perpetua Titling MT");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "35.45%", "642", null, "47", "59.57%", null, this);
            obj.set_taborder("52");
            obj.style.set_font("9 Dotum,Arial Black,Perpetua Titling MT");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "37.5%", "656", null, "25", "58.4%", null, this);
            obj.set_taborder("53");
            obj.set_text("건");
            obj.style.set_font("9 Dotum,Arial Black,Perpetua Titling MT");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "64.06%", "190", null, "30", "31.05%", null, this);
            obj.set_taborder("54");
            obj.set_text("Static09");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "44.82%", "36", null, "62", "43.16%", null, this);
            obj.set_taborder("55");
            obj.set_text("공통분류관리");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("gainsboro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","Edit03","value","dsBookList","bookNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit01","value","dsBookList","bookWriter");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit02","value","dsBookList","bookPub");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit06","value","dsBookList","bookIsbn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","TextArea00","value","dsBookList","bookSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Calendar00","value","dsBookList","bookregdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Radio00","value","dsBookList","divCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Combo00","value","dsBookList","classCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Static09","text","dsBookList","bookNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("admin_book.xfdl", "Lib::Comm.xjs");
        this.addIncludeScript("admin_book.xfdl", "Lib::CommCboCode.xjs");
        this.registerScript("admin_book.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::CommCboCode.xjs", null, exports); }	//include "Lib::CommCboCode.xjs";
        // 그리드안에 컬럼을 눌렀을떄 id값 가져오는 function
        this.getBindColumnIDByIndex = function(grid,index) 
        {
          var text = "";
          var columnid = null;
          var subCell = grid.getCellProperty("body", index, "subcell");
          if ( subCell > 0 )
          {
            text = grid.getSubCellProperty("body", index, 0, "text");
          }
          else
          {
            text = grid.getCellProperty("body", index, "text");
          }
          
          if ( text && text.length > 0 )
          {
            if ( text.search(/^bind:/) > -1 ) 
            {
              columnid = text.replace(/^bind:/, "");
            }  
            else if ( text.search(/^BIND\(/) > -1 ) 
            {  
              columnid = text.replace(/^BIND\(/, "");
              columnid = columnid.substr(0, columnid.length-1);
            } 
          }
          
         
          
          return columnid;
        }
        //그리드 클릭시 사용하는 공통함수 

        
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);
        	/*
        	if(columnId= "bookNo") {
        	this.dsSchMap.setColumn(0,"collectioncd",bookNo);
        	}
        	*/
        	
        }

        
        //공통코드 리스트 불려오기
        this.lfn_settingSearchBar = function(){

        	
        	var cdParam = new Array();
        	
        	
        	cdParam[0]  = ["CBO",  "A01", "Combo00", 0, "SEL"];
        	
        	
        	this.gfn_getCboComplexCmmnCd3(this.name, cdParam);
        	this.Combo00.index = 0;
        	
        	

        }
        //콜백
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
        	
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");			
        	   return;
        	} 
        	else{ 
        		if(svcId.svcId == "saveBookList"){
        			alert("저장완료");
        			this.gfn_serviceCall("selectBookList"); 
        		}
        	
        		this.Static21.set_text(this.dsBookList.getRowCount());
        	}
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.go("Practice::admin_book.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.go("Practice::admin_user.xfdl");
        }

        this.Button08_onclick = function(obj,e)
        {
        	this.go("Practice::admin_empl.xfdl");
        }

        
        // 화면구성시 list 출력

        this.adminUser_onload = function(obj,e)
        {
        	this.gfn_serviceCall("selectBookList"); 
        	this.lfn_settingSearchBar();
        }

        

        

        // 검색버튼 눌렀을떄 검색어를 dsSchMap에 addColumn해주고 서비스호출
        this.Button07_onclick = function(obj,e)
        {
        	
        	this.dsSchMap.setColumn(0 , "bookNm" , this.Edit05.value);
        	this.gfn_serviceCall("selectBookList");

        }

        
        // 변경사항 저장 

        

        this.Button02_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        		this.gfn_serviceCall("saveBookList");
        	}
        }

        this.Button04_onclick = function(obj,e)
        {
        	if(this.dsBookList.getRowCount() <= 0){
        		
        		this.alert("삭제할 대상이 없습니다.");
        		return false;
        	}
        	
        	this.dsBookList.deleteRow(this.dsBookList.rowposition);
        }

        this.Button05_onclick = function(obj,e)
        {
        	this.dsBookList.addRow();

        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.adminUser_onload, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static07_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Edit05.addEventHandler("oneditclick", this.Edit05_oneditclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Calendar00.addEventHandler("oneditclick", this.Calendar00_oneditclick, this);
            this.Static06.addEventHandler("onclick", this.Static14_onclick, this);
            this.Static21.addEventHandler("onclick", this.Static21_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button08_onclick, this);

        };

        this.loadIncludeScript("admin_book.xfdl", true);

       
    };
}
)();
