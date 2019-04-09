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
                this.set_name("Update_persnal");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,797);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">이메일 도메인 선택</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">naver.com</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">daum.net</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">gmail.com</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">lycos.co.kr</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">nate.com</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">직접입력</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"value\">남자</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"value\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMypageMap", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"authorityCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/selectMypageList.do</Col><Col id=\"svcid\">selectMypageList</Col><Col id=\"inds\">dsMypageMap=dsMypageMap</Col><Col id=\"outds\">dsUserInfo=dsUserInfo</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">saveUserInfo</Col><Col id=\"sController\">practice/saveUserInfo.do</Col><Col id=\"inds\">dsUserInfo=dsUserInfo:U</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"authorCd\" type=\"STRING\" size=\"256\"/><Column id=\"userBirth\" type=\"STRING\" size=\"256\"/><Column id=\"userGender\" type=\"STRING\" size=\"256\"/><Column id=\"brrCdnum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"domain\" type=\"STRING\" size=\"256\"/><Column id=\"userEmail\" type=\"STRING\" size=\"256\"/><Column id=\"domaincode\" type=\"STRING\" size=\"256\"/><Column id=\"userPwd\" type=\"STRING\" size=\"256\"/><Column id=\"userIspwd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "798", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11.52%", "29", null, "39", "70.9%", null, this);
            obj.set_taborder("1");
            obj.set_text("정보수정");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15.04%", "70", "702", "103", null, null, this);
            obj.set_taborder("2");
            obj.set_text("허위로 작성된 가입정보일 경우 임의로 삭제처리될 수 있으니 주의해 주세요. \r\n  \r\n대출증번호를 입력하신 회원은 온라인서비스(이용자서비스,예약대출) 등을 이용하실수 있습니다.  \r\n\r\n* 는 필수 입력 항목입니다.");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "41.11%", "592", null, "33", "51.56%", null, this);
            obj.set_taborder("10");
            obj.set_text("수정");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "51.86%", "592", null, "33", "40.82%", null, this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "15.04%", "195", "702", "362", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #339966ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "0", "150", "30", null, null, this.Div01);
            obj.set_taborder("61");
            obj.set_text("이름(실명)");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "30", "150", "60", null, null, this.Div01);
            obj.set_taborder("62");
            obj.set_text("아이디");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0%", "90", "150", "60", null, null, this.Div01);
            obj.set_taborder("63");
            obj.set_text("대출증번호");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "150", "150", "60", null, null, this.Div01);
            obj.set_taborder("64");
            obj.set_text("비밀번호");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "210", "150", "30", null, null, this.Div01);
            obj.set_taborder("65");
            obj.set_text("비밀번호확인");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "240", "150", "30", null, null, this.Div01);
            obj.set_taborder("66");
            obj.set_text("생년월일/성별");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "270", "150", "30", null, null, this.Div01);
            obj.set_taborder("67");
            obj.set_text("주소");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "300", "150", "30", null, null, this.Div01);
            obj.set_taborder("68");
            obj.set_text("휴대전화번호");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "330", "150", "30", null, null, this.Div01);
            obj.set_taborder("69");
            obj.set_text("이메일");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "4%", "22", null, "47", "89.29%", null, this.Div01);
            obj.set_taborder("70");
            obj.set_text("Div00");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "29.79%", "28", null, "19", "46.81%", null, this.Div01.Div00);
            obj.set_taborder("0");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div01.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "21.43%", "30", "550", "60", null, null, this.Div01);
            obj.set_taborder("71");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div02);
            obj.set_taborder("6");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "40.15%", "4", null, "24", "35.04%", null, this.Div01.Div02);
            obj.set_taborder("7");
            obj.set_text("아이디 중복 확인");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div01.Div02);
            obj.set_taborder("8");
            obj.set_text("(영문소문자, 숫자 조합 최소 5자 이상 최대 12자 이하입니다.)");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "21.43%", "150", "550", "60", null, null, this.Div01);
            obj.set_taborder("72");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div04);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_password("true");
            this.Div01.Div04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div01.Div04);
            obj.set_taborder("5");
            obj.set_text("※ 영문소문자, 숫자, 특수문자 조합으로 최소 10자리이상");
            this.Div01.Div04.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "21.43%", "210", "550", "30", null, null, this.Div01);
            obj.set_taborder("73");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div05);
            obj.set_taborder("0");
            obj.set_tabstop("true");
            obj.set_password("true");
            this.Div01.Div05.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "21.43%", "240", "550", "30", null, null, this.Div01);
            obj.set_taborder("74");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("cmb_year02", "absolute", "64.6%", "4", null, "20", "24.82%", null, this.Div01.Div06);
            this.Div01.Div06.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@ds_gender");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_displayrowcount("5");
            obj.set_index("-1");
            obj = new Calendar("Calendar00", "absolute", "11.86%", "3", null, "22", "49.64%", null, this.Div01.Div06);
            this.Div01.Div06.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd");
            obj = new Div("Div07", "absolute", "21.43%", "270", "550", "30", null, null, this.Div01);
            obj.set_taborder("75");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div07);
            obj.set_taborder("0");
            this.Div01.Div07.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "21.43%", "90", "550", "60", null, null, this.Div01);
            obj.set_taborder("76");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div03);
            obj.set_taborder("9");
            this.Div01.Div03.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "40.15%", "4", null, "24", "35.04%", null, this.Div01.Div03);
            obj.set_taborder("10");
            obj.set_text("대출증번호 확인");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div01.Div03);
            obj.set_taborder("11");
            obj.set_text("(무인예약 신청을 이용하려면 반드시 입력하세요.)");
            this.Div01.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "5%", "170", null, "19", "71.71%", null, this.Div01);
            obj.set_taborder("77");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "3.29%", "215", null, "19", "73.43%", null, this.Div01);
            obj.set_taborder("78");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "2.71%", "245", null, "19", "74%", null, this.Div01);
            obj.set_taborder("79");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "3.29%", "305", null, "19", "73.43%", null, this.Div01);
            obj.set_taborder("80");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "21.43%", "300", "550", "30", null, null, this.Div01);
            obj.set_taborder("81");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div08);
            obj.set_taborder("0");
            this.Div01.Div08.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "21.43%", "330", "550", "30", null, null, this.Div01);
            obj.set_taborder("82");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "78.47%", null, this.Div01.Div09);
            obj.set_taborder("12");
            this.Div01.Div09.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "25.73%", "4", null, "20", "53.28%", null, this.Div01.Div09);
            obj.set_taborder("13");
            this.Div01.Div09.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "22.08%", "5", null, "19", "73.91%", null, this.Div01.Div09);
            obj.set_taborder("14");
            obj.set_text("@");
            obj.style.set_font("12 Dotum");
            this.Div01.Div09.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "47.99%", "5", null, "19", "25.73%", null, this.Div01.Div09);
            this.Div01.Div09.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_value("1");
            obj.set_text("이메일 도메인 선택");
            obj.set_innerdataset("@ds_email");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_displayrowcount("5");
            obj.set_index("0");
            obj = new Static("Static13", "absolute", "21.43%", "0", "550", "30", null, null, this.Div01);
            obj.set_taborder("83");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "22%", "3", null, "23", "49.86%", null, this.Div01);
            obj.set_taborder("84");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "21.43%", "246", null, "21", "68.86%", null, this.Div01);
            obj.set_taborder("85");
            obj.set_text("생년월일");
            obj.style.set_align("center middle");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "63%", "245", null, "21", "27.29%", null, this.Div01);
            obj.set_taborder("86");
            obj.set_text("성별");
            obj.style.set_align("center middle");
            this.Div01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 47, this.Div01.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("70");
            		p.set_text("Div00");

            	}
            );
            this.Div01.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 60, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("71");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 60, this.Div01.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("72");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div01.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div01.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("74");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div01.Div07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("75");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 60, this.Div01.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("76");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div01.Div08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div01.Div09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("82");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 702, 365, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 797, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Div01.Edit00","value","dsUserInfo","userNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.Div02.Edit00","value","dsUserInfo","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.Div03.Edit00","value","dsUserInfo","brrCdnum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div01.Div08.Edit00","value","dsUserInfo","userPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div01.Div09.Edit00","value","dsUserInfo","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div01.Div06.cmb_year02","value","dsUserInfo","userGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.Div07.Edit00","value","dsUserInfo","userAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div01.Div06.Calendar00","value","dsUserInfo","userBirth");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.Div09.Combo00","value","dsUserInfo","domaincode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div01.Div09.Edit01","value","dsUserInfo","domain");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div01.Div04.Edit00","value","dsUserInfo","userPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div01.Div05.Edit00","value","dsUserInfo","userIspwd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Update_persnal.xfdl", "Lib::Comm.xjs");
        this.registerScript("Update_persnal.xfdl", function(exports) {
        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/

        this.fn_onload = function(obj,e)
        {
        	
        	this.dsUserInfo.assign(application.gds_UserInfo);
        }

        

        

        // 이메일 온체인지이벤트
        this.Div01_Div09_Combo00_onitemchanged = function(obj,e)
        {
        	var a = obj.value
        	var b = obj.text
        	
        	if(a!="7"){
        		this.Div01.Div09.Edit01.set_readonly(true);
        	}
        	if(a=="7"){
        		this.Div01.Div09.Edit01.set_readonly(false);
        	}
        	
        	this.fn_insertDomain(a,b);
        	
        }

        // 이메일 온체인지 함수
        this.fn_insertDomain = function(a,b){
        	if(a=="1" || a=="7"){
        		this.Div01.Div09.Edit01.set_value('');
        	}
        	else{
        	this.Div01.Div09.Edit01.set_value(b);
        	}
        }

        // 수정버튼
        this.Button00_onclick = function(obj,e)
        {
        	// 비밀번호 확인 로직
        	var pwd = this.Div01.Div04.Edit00.value;
        	var isPwd = this.Div01.Div05.Edit00.value;
        	
        	this.dsUserInfo.setColumn(0,"userPwd",pwd)
        	this.dsUserInfo.setColumn(0,"userIspwd",isPwd)
        	
        	
        	// 유효비밀번호인지 확인
        	if(pwd==null){
        		alert("비밀번호 입력 요망(when null)");
        		this.Div01.Div04.Edit00.setFocus;
        		return;
        	}
        	if(pwd!=null){
        		if(pwd.split(" ").join("")==""){
        			alert("비밀번호 입력 요망");
        			this.Div01.Div04.Edit00.set_value('');
        			return;
        		}
        		
        		// 일치불일치확인
        		if(pwd!=isPwd){
        			alert("비번확인요망")
        			this.Div01.Div05.Edit00.set_value('');		
        			this.Div01.Div04.Edit00.set_value('');
        			return;
        		}
        	}
        	// 일치시
        	if(this.confirm("저장하시겠습니까?")){
        	this.gfn_serviceCall("saveUserInfo");
        	
        	
        	var sURL = "Practice::MyPage.xfdl";
        	this.gfn_main(sURL);
        	}
        	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Div01.Static01.addEventHandler("onclick", this.Div00_Div00_Static01_onclick, this);
            this.Div01.Static05.addEventHandler("onclick", this.Div00_Div00_Static05_onclick, this);
            this.Div01.Div06.cmb_year02.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div01.Div09.Combo00.addEventHandler("onitemchanged", this.Div01_Div09_Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("Update_persnal.xfdl", true);

       
    };
}
)();
