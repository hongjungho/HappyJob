﻿(function()
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
                this.set_name("Aplyu0001");
                this.set_titletext("교육신청(사용자)");
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

            obj = new Button("btn_Seach", "absolute", "462", "573", "45", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_text("신청");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "51", "180", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("수강신청");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "75", "1014", "113", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #34495eff");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "5", "4", "125", "22", null, null, this.Div00);
            obj.set_taborder("18");
            obj.set_text("교육커리큘럼명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "30", "125", "22", null, null, this.Div00);
            obj.set_taborder("19");
            obj.set_text("교육강사명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "5", "57", "125", "22", null, null, this.Div00);
            obj.set_taborder("20");
            obj.set_text("교육장소");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "412", "4", "125", "22", null, null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("교육일정");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "5", "82", "125", "22", null, null, this.Div00);
            obj.set_taborder("36");
            obj.set_text("교육담당자");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "117", "5", "120", "21", null, null, this.Div00);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "117", "30", "120", "21", null, null, this.Div00);
            obj.set_taborder("38");
            obj.set_text("가나다라마바사");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "117", "56", "120", "21", null, null, this.Div00);
            obj.set_taborder("39");
            obj.set_text("가나다라마바사");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "117", "82", "120", "21", null, null, this.Div00);
            obj.set_taborder("40");
            obj.set_text("가나다라마바사");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "479", "5", "120", "21", null, null, this.Div00);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "215", "180", "20", null, null, this);
            obj.set_taborder("16");
            obj.set_text("신청사항");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "241", "470", "225", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #34495eff");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "5", "9", "125", "22", null, null, this.Div01);
            obj.set_taborder("42");
            obj.set_text("회사명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "39", "125", "22", null, null, this.Div01);
            obj.set_taborder("43");
            obj.set_text("성명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "5", "70", "125", "22", null, null, this.Div01);
            obj.set_taborder("44");
            obj.set_text("생년월일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "5", "99", "125", "22", null, null, this.Div01);
            obj.set_taborder("46");
            obj.set_text("성별");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "117", "10", "120", "21", null, null, this.Div01);
            obj.set_taborder("47");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "117", "39", "120", "21", null, null, this.Div01);
            obj.set_taborder("48");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "117", "69", "120", "21", null, null, this.Div01);
            obj.set_taborder("49");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "117", "99", "120", "21", null, null, this.Div01);
            obj.set_taborder("50");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "5", "130", "125", "22", null, null, this.Div01);
            obj.set_taborder("51");
            obj.set_text("이메일");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "117", "130", "120", "21", null, null, this.Div01);
            obj.set_taborder("52");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "5", "161", "125", "22", null, null, this.Div01);
            obj.set_taborder("53");
            obj.set_text("연락처");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "117", "161", "120", "21", null, null, this.Div01);
            obj.set_taborder("54");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "5", "191", "125", "22", null, null, this.Div01);
            obj.set_taborder("55");
            obj.set_text("결제방식");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "117", "191", "120", "21", null, null, this.Div01);
            obj.set_taborder("56");
            obj.set_text("가나다라마바사");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "488", "241", "526", "225", null, null, this);
            obj.set_taborder("18");
            obj.set_wordwrap("char");
            obj.set_value("교육주의사항");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Seach00", "absolute", "513", "573", "45", "23", null, null, this);
            obj.set_taborder("19");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "452", "542", "120", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("신청하시겠습니까?");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1014, 113, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #34495eff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 470, 225, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #34495eff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("교육신청(사용자)");

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

        this.loadIncludeScript("Aplyu0001.xfdl", true);

       
    };
}
)();
