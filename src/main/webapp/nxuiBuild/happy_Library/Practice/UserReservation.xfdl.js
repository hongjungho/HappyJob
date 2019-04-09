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
                this.set_name("UserReservation");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsgridrow", this);
            obj._setContents("<ColumnInfo><Column id=\"showRow\" type=\"STRING\" size=\"256\"/><Column id=\"showRowCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"showRow\">10</Col><Col id=\"showRowCode\">10</Col></Row><Row><Col id=\"showRow\">15</Col><Col id=\"showRowCode\">15</Col></Row><Row><Col id=\"showRow\">20</Col><Col id=\"showRowCode\">20</Col></Row><Row><Col id=\"showRow\">25</Col><Col id=\"showRowCode\">25</Col></Row><Row><Col id=\"showRow\">30</Col><Col id=\"showRowCode\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCommCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"commCbo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/selectResList.do</Col><Col id=\"svcid\">selectResList</Col><Col id=\"inds\">dsResSchMap=dsResSchMap</Col><Col id=\"outds\">dsUserRes=dsUserRes</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"brrStr\" type=\"STRING\" size=\"256\"/><Column id=\"brrEnd\" type=\"STRING\" size=\"256\"/><Column id=\"clCd\" type=\"STRING\" size=\"256\"/><Column id=\"divCd\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"pub\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserRes", this);
            obj._setContents("<ColumnInfo><Column id=\"bookIsbn\" type=\"STRING\" size=\"256\"/><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"divCd\" type=\"STRING\" size=\"256\"/><Column id=\"classCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookPub\" type=\"STRING\" size=\"256\"/><Column id=\"bookWriter\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"bookRevBrr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00", "absolute", "4.79%", "24", null, "180", "11.23%", null, this);
            obj.set_text("예약도서검색");
            obj.set_taborder("0");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("18 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5.57%", "304", null, "383", "10.94%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserRes");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ISBN\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"도서분류\"/><Cell col=\"3\" text=\"도서구분\"/><Cell col=\"4\" text=\"출판사\"/><Cell col=\"5\" text=\"저자\"/><Cell col=\"6\" text=\"대출가능일\"/><Cell col=\"7\" text=\"예약순위\"/></Band><Band id=\"body\"><Cell text=\"bind:bookIsbn\"/><Cell col=\"1\" text=\"bind:bookNm\"/><Cell col=\"2\" text=\"bind:divCd\"/><Cell col=\"3\" text=\"bind:classCd\"/><Cell col=\"4\" text=\"bind:bookPub\"/><Cell col=\"5\" text=\"bind:bookWriter\"/><Cell col=\"6\" text=\"bind:bookRevBrr\"/><Cell col=\"7\" text=\"bind:rank\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "78.42%", "257", null, "28", "10.94%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            obj.set_innerdataset("dsgridrow");
            obj.set_codecolumn("showRowCode");
            obj.set_datacolumn("showRow");

            obj = new Static("Static00", "absolute", "39.06%", "254", null, "26", "45.51%", null, this);
            obj.set_taborder("3");
            obj.set_text("예약도서목록");
            obj.style.set_align("center middle");
            obj.style.set_font("16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "53.91%", "108", null, "30", "40.63%", null, this);
            obj.set_taborder("7");
            obj.set_text("키워드 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "59.86%", "110", null, "26", "13.28%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bkclass", "absolute", "58.11%", "63", null, "30", "32.03%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");

            obj = new Static("Static04", "absolute", "52.05%", "62", null, "30", "42.48%", null, this);
            obj.set_taborder("11");
            obj.set_text("도서구분 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bkdiv", "absolute", "76.86%", "63", null, "30", "13.28%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");

            obj = new Static("Static05", "absolute", "70.02%", "62", null, "30", "24.51%", null, this);
            obj.set_taborder("13");
            obj.set_text("도서분류 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9.28%", "108", null, "30", "85.25%", null, this);
            obj.set_taborder("17");
            obj.set_text("저자 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "14.55%", "110", null, "26", "72.66%", null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "34.08%", "110", null, "26", "52.34%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "28.81%", "108", null, "30", "65.72%", null, this);
            obj.set_taborder("20");
            obj.set_text("출판사 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "7.42%", "63", null, "30", "85.55%", null, this);
            obj.set_taborder("23");
            obj.set_text("대출가능일 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "14.55%", "64", null, "28", "71.09%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsResSchMap");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static02", "absolute", "29.59%", "64", null, "27", "67.19%", null, this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "33.3%", "64", null, "28", "52.34%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Button("Button00", "absolute", "35.16%", "160", null, "22", "52.34%", null, this);
            obj.set_taborder("27");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "49.61%", "160", null, "22", "42.97%", null, this);
            obj.set_taborder("28");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","dsgridrow","showRow");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_bkclass","value","dsResSchMap","clCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cbo_bkdiv","value","dsResSchMap","divCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit01","value","dsResSchMap","writer");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit02","value","dsResSchMap","pub");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit00","value","dsResSchMap","keyword");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Calendar00","value","dsResSchMap","brrStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Calendar01","value","dsResSchMap","brrEnd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("UserReservation.xfdl", "Lib::Comm.xjs");
        this.registerScript("UserReservation.xfdl", function(exports) {

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        this.fn_onload = function(obj,e)
        {
        	// 회원번호 받아옴
        	var no = application.gds_UserInfo.getColumn(0,"userNo");
        	
        	this.dsResSchMap.setColumn(0,"userNo",no);
        	
        	//회원연체도서검색
        	this.lfn_searchList();
        	//공통코드 세팅
        	this.lfn_settingSearchBar(); 	
        }

        
        // 조회함수
        this.lfn_searchList = function(){
        	// 연체도서검색
        	this.gfn_serviceCall("selectResList"); 
        }

        
        //공통코드 세팅
        this.lfn_settingSearchBar = function(){

        	
        	var cdParam = new Array();
        	
        	//캠퍼스조회	
        	cdParam[0]  = ["CBO",  "A02", "cbo_bkdiv", 0, "ALL"];
        	cdParam[1]  = ["CBO",  "A01", "cbo_bkclass", 0, "ALL"];
        	this.gfn_getCboComplexCmmnCd1(this.name, cdParam);
        	this.cbo_bkdiv.index = 0;
        	this.cbo_bkclass.index = 0;
        	this.dsCommCbo.setColumn(0,'commCbo',"");

        }

        

        //공통 콜백
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
         
        	//this.alert(svcId);
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");
        	   return;
        	}
        		//콜백정의	
        		//Iject.alert(errormsg,"알림");	
        	
        }

        // 조회버튼 클릭
        this.fn_ressch = function(obj,e)
        {
        	this.lfn_searchList();
        }

        this.fn_reset = function(obj,e)
        {
        	this.reload();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.cbo_bkclass.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Button00.addEventHandler("onclick", this.fn_ressch, this);
            this.Button01.addEventHandler("onclick", this.fn_reset, this);

        };

        this.loadIncludeScript("UserReservation.xfdl", true);

       
    };
}
)();
