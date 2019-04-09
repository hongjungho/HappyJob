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
                this.set_name("test022");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_agree", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">동의함</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">이메일 도메인 선택</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">naver.com</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">daum.net</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">gmail.com</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">lycos.co.kr</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">nate.com</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">직접입력</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">남자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">1999 </Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">1998</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">1997</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "1067", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "15.04%", "187", "700", "375", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #339966ff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11.52%", "29", null, "39", "70.9%", null, this);
            obj.set_taborder("1");
            obj.set_text("회원가입");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15.04%", "70", "700", "103", null, null, this);
            obj.set_taborder("2");
            obj.set_text("허위로 작성된 가입정보일 경우 임의로 삭제처리될 수 있으니 주의해 주세요. \r\n  \r\n대출증번호를 입력하신 회원은 온라인서비스(이용자서비스,예약대출) 등을 이용하실수 있습니다.  \r\n\r\n* 는 필수 입력 항목입니다.");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15.14%", "580", null, "39", "67.29%", null, this);
            obj.set_taborder("3");
            obj.set_text("고객정보동의(CRM)");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15.04%", "616", "702", "3", null, null, this);
            obj.set_taborder("4");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "16.02%", "678", null, "178", "18.85%", null, this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #ffffffff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.65%", "15", null, "22", "59.1%", null, this.Div01);
            obj.set_taborder("8");
            obj.set_text("1. 개인정보의 수집 및 이용 목적 : ");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "34.59%", "15", null, "22", "37.14%", null, this.Div01);
            obj.set_taborder("9");
            obj.set_text("고객만족도조사, 설문조사 활용");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "1.65%", "37", null, "22", "59.1%", null, this.Div01);
            obj.set_taborder("10");
            obj.set_text("2. 수집하는 개인정보의 활용 :");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "1.65%", "59", null, "22", "52.63%", null, this.Div01);
            obj.set_taborder("11");
            obj.set_text("- 필수정보 : 아이디, 생년월일, 성별, 휴대전화번호");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "1.65%", "81", null, "22", "52.63%", null, this.Div01);
            obj.set_taborder("12");
            obj.set_text("- 선택정보 : 대출증번호, 연락처, 이메일");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1.65%", "103", null, "22", "59.1%", null, this.Div01);
            obj.set_taborder("13");
            obj.set_text("3. 개인정보의 보유 및 이용기간 :");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "34.59%", "103", null, "22", "37.14%", null, this.Div01);
            obj.set_taborder("14");
            obj.set_text("5년");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "1.65%", "125", null, "43", "0.3%", null, this.Div01);
            obj.set_taborder("15");
            obj.set_text("4. 귀하는 개인정보 수집ㆍ이용에 동의하지 않으실 수 있으나 동의하지 않을 경우 회원가입이 불가능합니다. \r\n그리고 필수정보는 반드시 입력해야 하며, 선택정보는 입력하지 않으실 수 있으나 무인예약 신청등의 서비스가 \r\n제한될 수 있음을 알려드립니다.");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15.04%", "629", "702", "51", null, null, this);
            obj.set_taborder("6");
            obj.set_text("우리 페이지에서는 맞춤형 정보를 빠르게 전달해 드리고자 다음과 같이 고객 정보수집 동의를 구하고자 합니다. \r\n동의하신 고객정보는 시정홍보, 고객만족도조사, 설문조사 등에만 활용하고 일체 타 업무목적으로는 활용하지 않음을 \r\n약속드립니다.");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("2 solid #ffffffff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15.04%", "857", "702", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text(" ▷ 위와 같은 개인정보를 수집ㆍ이용하는데 동의하십니까?");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("2 solid #ffffffff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "47.17%", "968", null, "33", "45.51%", null, this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "36.43%", "968", null, "33", "56.25%", null, this);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "15.14%", "898", "702", "27", null, null, this);
            obj.set_taborder("10");
            obj.style.set_border("1 solid #000000ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "0", null, "25", "72%", null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("선택사항");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("1 solid #000000ff");
            obj.style.set_align("center middle");
            this.Div02.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "38.29%", "3", null, "20", "16.43%", null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_rowcount("1");
            obj.set_innerdataset("@ds_agree");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 1067, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 178, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #ffffffff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 703, 27, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_border("1 solid #000000ff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

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
            this.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Static03.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Static02.addEventHandler("onclick", this.Div00_Static02_onclick, this);
            this.Div01.Static02.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div01.Static05.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div01.Static07.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Static04.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.Static05.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.Div02.Radio00.addEventHandler("onitemclick", this.Div02_Radio00_onitemclick, this);

        };

        this.loadIncludeScript("test022.xfdl", true);

       
    };
}
)();
