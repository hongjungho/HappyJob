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
                this.set_name("UserSanctions");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/selectSanList.do</Col><Col id=\"svcid\">selectSanList</Col><Col id=\"inds\">dsSanSchMap=dsSanSchMap</Col><Col id=\"outds\">dsUserSan=dsUserSan</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">CboSanList</Col><Col id=\"sController\">practice/CboSanList.do</Col><Col id=\"inds\"/><Col id=\"outds\">dsSanList=dsSanList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSanSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"sanCd\" type=\"STRING\" size=\"256\"/><Column id=\"sanStr\" type=\"STRING\" size=\"256\"/><Column id=\"sanEnd\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserSan", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"sanname\" type=\"STRING\" size=\"256\"/><Column id=\"sandate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCommCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"commCbo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSanList", this);
            obj._setContents("<ColumnInfo><Column id=\"sanCd\" type=\"STRING\" size=\"256\"/><Column id=\"sanName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00", "absolute", "4.79%", "24", null, "200", "11.23%", null, this);
            obj.set_text("재제현황검색");
            obj.set_taborder("0");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("18 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5.57%", "304", null, "383", "10.94%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserSan");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"542\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"재제명\"/><Cell col=\"2\" text=\"재제등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:rnum\"/><Cell col=\"1\" text=\"bind:sanname\"/><Cell col=\"2\" text=\"bind:sandate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "39.06%", "254", null, "26", "45.51%", null, this);
            obj.set_taborder("3");
            obj.set_text("재제현황목록");
            obj.style.set_align("center middle");
            obj.style.set_font("16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "6.15%", "140", null, "30", "88.38%", null, this);
            obj.set_taborder("7");
            obj.set_text("키워드 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "12.21%", "142", null, "26", "49.22%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "12.21%", "88", null, "28", "73.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");

            obj = new Calendar("Calendar03", "absolute", "30.96%", "88", null, "28", "54.69%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");

            obj = new Static("Static07", "absolute", "27.25%", "88", null, "27", "69.53%", null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "6.15%", "87", null, "30", "88.38%", null, this);
            obj.set_taborder("21");
            obj.set_text("제재날짜 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "48.34%", "87", null, "30", "44.63%", null, this);
            obj.set_taborder("23");
            obj.set_text("제재내용 : ");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "59.38%", "144", null, "22", "28.13%", null, this);
            obj.set_taborder("25");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "73.83%", "144", null, "22", "18.75%", null, this);
            obj.set_taborder("26");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sanNm", "absolute", "55.18%", "88", null, "28", "15.63%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@dsSanList");
            obj.set_codecolumn("sanCd");
            obj.set_datacolumn("sanName");
            obj.set_index("0");


            
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
            obj = new BindItem("item1","Calendar02","value","dsSanSchMap","sanStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Calendar03","value","dsSanSchMap","sanEnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit00","value","dsSanSchMap","keyword");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("UserSanctions.xfdl", "Lib::Comm.xjs");
        this.registerScript("UserSanctions.xfdl", function(exports) {

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        this.fn_onload = function(obj,e)
        {
        	// 회원번호 받아옴
        	var no = application.gds_UserInfo.getColumn(0,"userNo");
        	
        	this.dsSanSchMap.setColumn(0,"userNo",no);
        	
        	//회원재제목록검색
        	this.lfn_searchList();	
        	//회원재제목록검색
        	this.lfn_sanList();	
        }

        
        // 조회함수
        this.lfn_searchList = function(){
        	// 연체도서검색
        	this.gfn_serviceCall("selectSanList"); 
        }

        
        // 재제목록
        this.lfn_sanList = function(){
        	// 연체도서검색
        	this.gfn_serviceCall("CboSanList"); 
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

        

        
        this.cbo_sanNm_onitemchanged = function(obj,e)
        {
        	var cboVal = obj.value;
        	alert(cboVal);
        	this.dsSanSchMap.setColumn(0,"sanCd",cboVal)
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.Button00.addEventHandler("onclick", this.fn_ressch, this);
            this.Button01.addEventHandler("onclick", this.fn_reset, this);
            this.cbo_sanNm.addEventHandler("onitemchanged", this.cbo_sanNm_onitemchanged, this);

        };

        this.loadIncludeScript("UserSanctions.xfdl", true);

       
    };
}
)();
