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
                this.set_name("Course0001");
                this.set_titletext("교육과목내역");
                this.set_name("ECLST0001");
                this._setFormPosition(0,0,1024,706);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, "12", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.style.set_background("#ff000033");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "76", null, "12", "0.2%", null, this);
            obj.set_taborder("1");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "92", "112", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("교육과목 목록");
            obj.set_cssclass("WF_sta_Title");
            obj.getSetter("class").set("sta_WA_subtitle");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "49", null, "29", "0", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA_sta_BG");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Seach", "absolute", null, "12", "45", "23", "260", null, this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert", "absolute", null, "12", "45", "23", "210", null, this);
            obj.set_taborder("5");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete", "absolute", null, "12", "45", "23", "160", null, this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", null, "12", "45", "23", "110", null, this);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "37", null, "12", "0.1%", null, this);
            obj.set_taborder("8");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset", "absolute", null, "12", "45", "23", "60", null, this);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel", "absolute", null, "12", "45", "23", "10", null, this);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "111", null, "12", "0.49%", null, this);
            obj.set_taborder("11");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "3", "52", "101", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("교과목일련번호");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BsnsNo", "absolute", "536", "53", "251", "20", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SpntNm", "absolute", "128", "53", "251", "20", null, null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2", "126", null, "197", "6", null, this);
            obj.set_taborder("25");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"85\"/><Column size=\"133\"/><Column size=\"111\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"교과목일련번호\"/><Cell col=\"1\" text=\"교육과목명\"/><Cell col=\"2\" text=\"교과목교육시간\"/><Cell col=\"3\" text=\"교과목목표\"/><Cell col=\"4\" text=\"교과목내용\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "2", "340", "172", "18", null, null, this);
            obj.set_taborder("26");
            obj.set_text("상세내용");
            obj.set_cssclass("WF_sta_TitleSub");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0%", "367", null, "35", "0.1%", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "6", "374", "149", "22", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            obj.set_text("<fc v='red'>*</fc>NCS구분");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "432", "374", "150", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_text("교과목기대효과");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0%", "441", null, "35", "0.1%", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "6", "448", "149", "22", null, null, this);
            obj.set_taborder("36");
            obj.set_text("NCS능력단위명");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "434", "448", "149", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_text("수행준거");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "584", "448", "170", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0%", "478", null, "35", "0.1%", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "6", "484", "150", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_text("교과목교육시간");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "432", "485", "150", "22", null, null, this);
            obj.set_taborder("44");
            obj.set_text("선수과목");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0%", "515", null, "35", "0.1%", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0%", "553", null, "35", "0.1%", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "6", "523", "149", "22", null, null, this);
            obj.set_taborder("48");
            obj.set_text("<fc v='red'>*</fc>교과목사용여부");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "434", "523", "149", "22", null, null, this);
            obj.set_taborder("50");
            obj.set_text("<fc v='red'>*</fc>등록일시");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "584", "560", "170", "22", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "6", "561", "149", "22", null, null, this);
            obj.set_taborder("53");
            obj.set_text("교과목목표");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "156", "561", "170", "22", null, null, this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "434", "560", "149", "22", null, null, this);
            obj.set_taborder("55");
            obj.set_text("<fc v='red'>*</fc>등록자사번");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03", "absolute", "585", "523", "169", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_cssclass("input_must");
            obj.set_value("null");

            obj = new Static("Static31", "absolute", "0%", "591", null, "35", "0.1%", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "6", "598", "150", "22", null, null, this);
            obj.set_taborder("60");
            obj.set_text("교과목내용");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "433", "598", "149", "22", null, null, this);
            obj.set_taborder("62");
            obj.set_text("수정일시");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0%", "629", null, "35", "0.1%", null, this);
            obj.set_taborder("64");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "6", "637", "150", "22", null, null, this);
            obj.set_taborder("65");
            obj.set_text("세부교육훈련내용");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "161", "637", "24", "22", null, null, this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "433", "637", "149", "22", null, null, this);
            obj.set_taborder("67");
            obj.set_text("수정자사번");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0%", "325", null, "12", "0.39%", null, this);
            obj.set_taborder("69");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "0%", "357", null, "12", "0.39%", null, this);
            obj.set_taborder("70");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0%", "665", null, "12", "0.2%", null, this);
            obj.set_taborder("71");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "439", "53", "93", "22", null, null, this);
            obj.set_taborder("72");
            obj.set_text("교육과목명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "585", "636", "170", "22", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "158", "374", "269", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("76");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("idx");
            obj.set_datacolumn("contents");
            obj.set_cssclass("input_must");

            obj = new Static("Static11", "absolute", "0%", "404", null, "35", "0.39%", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("WF_sta_BarUnder");
            obj.style.set_background("#9ea4ad80");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "434", "411", "149", "22", null, null, this);
            obj.set_taborder("79");
            obj.set_text("비고");
            obj.set_usedecorate("true");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "5", "410", "149", "22", null, null, this);
            obj.set_taborder("80");
            obj.set_text("<fc v='red'>*</fc>NCS능력단위코드");
            obj.set_usedecorate("true");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "156", "447", "270", "22", null, null, this);
            obj.set_taborder("81");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04", "absolute", "158", "483", "269", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("82");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("idx");
            obj.set_datacolumn("contents");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");

            obj = new Edit("Edit10", "absolute", "157", "411", "170", "22", null, null, this);
            obj.set_taborder("83");
            obj.set_value("01000000000");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05", "absolute", "158", "522", "269", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("idx");
            obj.set_datacolumn("contents");
            obj.set_cssclass("input_must");

            obj = new Edit("Edit00", "absolute", "586", "484", "170", "22", null, null, this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "586", "412", "267", "22", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "586", "374", "267", "22", null, null, this);
            obj.set_taborder("87");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "156", "598", "270", "22", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "156", "636", "270", "22", null, null, this);
            obj.set_taborder("89");
            obj.set_cssclass("input_must");
            obj.style.set_border("2 none #f79a00ff");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "585", "598", "169", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_cssclass("input_must");
            obj.set_value("null");
            obj.style.set_border("2 none #f79a00ff");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 706, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("교육과목내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Course0001.xfdl", "Lib::Comm.xjs");
        this.registerScript("Course0001.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 
        * BUSINESS    : 샘플화면-교육용
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.SampleCrud_onload = function(obj,e)
        {
        	Iject.formOnload(obj);			//폼 초기화 : 필요시 구현
        	
        	this.lfn_settingSearchBar(); 	//검색영역 세팅
        }

        
        /**********************************************************************
        * User Function
        ***********************************************************************/
        //검색영역 세팅
        this.lfn_settingSearchBar = function(){

        	
        	var cdParam = new Array();
        	
        	//캠퍼스조회	
        	cdParam[0]  = ["CBO",  "A001", "cbo_BsnsGb", 0, "ALL"];
        	
        	this.gfn_getCboComplexCmmnCd(this.name, cdParam);
        	this.cbo_BsnsGb.index = 0;
        	//this.dsSchMap.setColumn(0,'taskNm',"");

        }

        this.Static04_onclick = function(obj,e)
        {
        	
        }

        this.Static10_onclick = function(obj,e)
        {
        	
        }

        this.Static32_onclick = function(obj,e)
        {
        	
        }

        this.Static11_onclick = function(obj,e)
        {
        	
        }

        this.Edit02_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SampleCrud_onload, this);
            this.Static10.addEventHandler("onclick", this.Static10_onclick, this);
            this.Static32.addEventHandler("onclick", this.Static32_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static11_onclick, this);

        };

        this.loadIncludeScript("Course0001.xfdl", true);

       
    };
}
)();
