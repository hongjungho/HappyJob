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
                this.set_name("Aplyh0001");
                this.set_titletext("교육신청내역");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, "12", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "37", null, "12", "0.1%", null, this);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Seach", "absolute", null, "12", "45", "23", "160", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset", "absolute", null, "12", "45", "23", "60", null, this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel", "absolute", null, "12", "45", "23", "10", null, this);
            obj.set_taborder("7");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "49", null, "31", "0", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA_sta_BG");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "80", null, "12", "0.2%", null, this);
            obj.set_taborder("9");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "5", "54", "125", "22", null, null, this);
            obj.set_taborder("10");
            obj.set_text("교육커리큘럼");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BsnsNo", "absolute", "100", "54", "195", "20", null, null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "102", "180", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("수강신청관리");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "121", null, "12", "0.49%", null, this);
            obj.set_taborder("15");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2", "133", null, "159", "6", null, this);
            obj.set_taborder("16");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"195\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"교육커리큘럼명\"/><Cell col=\"3\" text=\"교육시작일\"/><Cell col=\"4\" text=\"교육종료일\"/><Cell col=\"5\" text=\"교육장\"/><Cell col=\"6\" text=\"강사\"/><Cell col=\"7\" text=\"교육신청일\"/><Cell col=\"8\" text=\"교육종료일\"/><Cell col=\"9\" text=\"교육정원\"/><Cell col=\"10\" text=\"온라인신청\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "351", "54", "125", "22", null, null, this);
            obj.set_taborder("18");
            obj.set_text("교육신청일자");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "297", "54", "42", "20", null, null, this);
            obj.set_taborder("19");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "445", "54", "118", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");

            obj = new Calendar("Calendar01", "absolute", "710", "54", "120", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");

            obj = new Static("Static06", "absolute", "570", "54", "29", "22", null, null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "585", "54", "125", "22", null, null, this);
            obj.set_taborder("23");
            obj.set_text("교육신청종료일자");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Seach00", "absolute", null, "12", "45", "23", "110", null, this);
            obj.set_taborder("24");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0%", "335", null, "12", "0.49%", null, this);
            obj.set_taborder("25");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "316", "180", "20", null, null, this);
            obj.set_taborder("26");
            obj.set_text("교육신청내역");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "347", null, "89", "10", null, this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #34495eff");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "5", "4", "125", "22", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("교육커리큘럼명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "30", "125", "22", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("교육강사명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "5", "57", "125", "22", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("온라인가능여부");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "340", "4", "125", "22", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("교육시작일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "340", "30", "125", "22", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("신청가능일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "532", "30", "125", "22", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("신청종료일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "532", "4", "125", "22", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("교육종료일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "721", "30", "125", "22", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("교육정원");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "721", "4", "125", "22", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("교육장");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "119", "59", "151", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            obj.set_index("-1");
            obj = new Edit("Edit00", "absolute", "119", "6", "212", "21", null, null, this.Div00);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "119", "32", "212", "21", null, null, this.Div00);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "785", "32", "217", "21", null, null, this.Div00);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "785", "6", "217", "21", null, null, this.Div00);
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "417", "6", "103", "20", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj = new Calendar("Calendar01", "absolute", "604", "6", "103", "20", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj = new Calendar("Calendar02", "absolute", "417", "32", "103", "20", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj = new Calendar("Calendar03", "absolute", "604", "32", "103", "20", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("17");

            obj = new Static("Static10", "absolute", "0", "454", "180", "20", null, null, this);
            obj.set_taborder("28");
            obj.set_text("교육신청 수강생 내역");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0%", "473", null, "12", "0.68%", null, this);
            obj.set_taborder("29");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "2", "485", null, "159", "6", null, this);
            obj.set_taborder("30");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"142\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"53\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"40\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"회사\"/><Cell col=\"3\" text=\"학생일련번호\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"이메일\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"교육신청일\"/><Cell col=\"10\" text=\"교육취소일\"/><Cell col=\"11\" text=\"결제\"/><Cell col=\"12\" text=\"결제일자\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "659", null, "89", "10", null, this);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #34495eff");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "5", "4", "125", "22", null, null, this.Div01);
            obj.set_taborder("18");
            obj.set_text("회사명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "30", "125", "22", null, null, this.Div01);
            obj.set_taborder("19");
            obj.set_text("생년월일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "5", "57", "125", "22", null, null, this.Div01);
            obj.set_taborder("20");
            obj.set_text("교육신청일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "316", "4", "125", "22", null, null, this.Div01);
            obj.set_taborder("21");
            obj.set_text("학생일련번호");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "316", "30", "125", "22", null, null, this.Div01);
            obj.set_taborder("22");
            obj.set_text("이메일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "550", "30", "125", "22", null, null, this.Div01);
            obj.set_taborder("23");
            obj.set_text("연락처");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "550", "4", "125", "22", null, null, this.Div01);
            obj.set_taborder("24");
            obj.set_text("성명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "737", "4", "125", "22", null, null, this.Div01);
            obj.set_taborder("26");
            obj.set_text("성별");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "439", "59", "103", "21", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_text("Combo00");
            obj = new Edit("Edit00", "absolute", "81", "6", "212", "21", null, null, this.Div01);
            obj.set_taborder("28");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "409", "6", "132", "21", null, null, this.Div01);
            obj.set_taborder("29");
            this.Div01.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "81", "32", "103", "20", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj = new Calendar("Calendar01", "absolute", "616", "57", "103", "20", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj = new Calendar("Calendar02", "absolute", "81", "58", "103", "20", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj = new Calendar("Calendar03", "absolute", "284", "58", "103", "20", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj = new Static("Static08", "absolute", "204", "57", "125", "22", null, null, this.Div01);
            obj.set_taborder("36");
            obj.set_text("교육취소일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "404", "57", "125", "22", null, null, this.Div01);
            obj.set_taborder("37");
            obj.set_text("결제");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "550", "57", "125", "22", null, null, this.Div01);
            obj.set_taborder("38");
            obj.set_text("결제일자");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "616", "6", "108", "21", null, null, this.Div01);
            obj.set_taborder("39");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "409", "32", "132", "21", null, null, this.Div01);
            obj.set_taborder("40");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "616", "32", "149", "21", null, null, this.Div01);
            obj.set_taborder("41");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "830", "59", "139", "21", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_text("Combo00");
            obj = new Static("Static06", "absolute", "737", "57", "125", "22", null, null, this.Div01);
            obj.set_taborder("43");
            obj.set_text("교육신청상태");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "775", "5", "136", "21", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div01.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 89, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #34495eff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 89, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #34495eff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("교육신청내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Aplyh0001.xfdl", true);

       
    };
}
)();
