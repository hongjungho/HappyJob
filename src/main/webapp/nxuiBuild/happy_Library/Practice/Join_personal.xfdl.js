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
                this.set_name("Join_personal");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">1999 </Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">1998</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">1997</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">이메일 도메인 선택</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">naver.com</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">daum.net</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">gmail.com</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">lycos.co.kr</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">nate.com</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">직접입력</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">남자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_agree", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">동의함</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tel", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">SK</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">KT</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">LG</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">알뜰폰</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tel1", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">010</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">011</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">016</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">017</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "80", "0", null, "1062", "-80", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "200", "29", null, "39", "249", null, this);
            obj.set_taborder("1");
            obj.set_text("회원가입");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "200", "70", "650", "103", null, null, this);
            obj.set_taborder("2");
            obj.set_text("허위로 작성된 가입정보일 경우 임의로 삭제처리될 수 있으니 주의해 주세요. \r\n  \r\n대출증번호를 입력하신 회원은 온라인서비스(이용자서비스,예약대출) 등을 이용하실수 있습니다.  \r\n\r\n* 는 필수 입력 항목입니다.");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "200", "580", null, "39", "564", null, this);
            obj.set_taborder("4");
            obj.set_text("고객정보동의(CRM)");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "200", "616", "652", "3", null, null, this);
            obj.set_taborder("5");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "200", "629", "652", "51", null, null, this);
            obj.set_taborder("6");
            obj.set_text("우리 페이지에서는 맞춤형 정보를 빠르게 전달해 드리고자 다음과 같이 고객 정보수집 동의를 구하고자 합니다. \r\n동의하신 고객정보는 시정홍보, 고객만족도조사, 설문조사 등에만 활용하고 일체 타 업무목적으로는 활용하지 \r\n않음을 약속드립니다.");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("2 solid #ffffffff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "200", "678", null, "178", "11.04%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #ffffffff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "11", "15", null, "22", "23.41%", null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("1. 개인정보의 수집 및 이용 목적 : ");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "245", "15", null, "22", "29", null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("고객만족도조사, 설문조사 활용");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "11", "37", null, "22", "23.41%", null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("2. 수집하는 개인정보의 활용 :");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "11", "59", null, "22", "373", null, this.Div02);
            obj.set_taborder("19");
            obj.set_text("- 필수정보 : 아이디, 생년월일, 성별, 휴대전화번호");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "11", "81", null, "22", "373", null, this.Div02);
            obj.set_taborder("20");
            obj.set_text("- 선택정보 : 대출증번호, 연락처, 이메일");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "11", "103", null, "22", "59.1%", null, this.Div02);
            obj.set_taborder("21");
            obj.set_text("3. 개인정보의 보유 및 이용기간 :");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "245", "103", null, "22", "263", null, this.Div02);
            obj.set_taborder("22");
            obj.set_text("5년");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "11", "125", null, "43", "2", null, this.Div02);
            obj.set_taborder("23");
            obj.set_text("4. 귀하는 개인정보 수집ㆍ이용에 동의하지 않으실 수 있으나 동의하지 않을 경우 회원가입이 불가능합니다. \r\n그리고 필수정보는 반드시 입력해야 하며, 선택정보는 입력하지 않으실 수 있으나 무인예약 신청등의 \r\n서비스가 제한될 수 있음을 알려드립니다.");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "200", "857", "652", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text(" ▷ 위와 같은 개인정보를 수집ㆍ이용하는데 동의하십니까?");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("2 solid #ffffffff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "200", "898", "652", "27", null, null, this);
            obj.set_taborder("9");
            obj.style.set_border("1 solid #000000ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", null, "25", "504", null, this.Div03);
            obj.set_taborder("4");
            obj.set_text("선택사항");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("1 solid #000000ff");
            obj.style.set_align("center middle");
            this.Div03.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "210", "3", null, "20", "16", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_rowcount("1");
            obj.set_innerdataset("ds_agree");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_index("-1");

            obj = new Div("Div01", "absolute", "200", "195", "652", "362", null, null, this);
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
            obj.set_text("생년월일");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "270", "150", "30", null, null, this.Div01);
            obj.set_taborder("67");
            obj.set_text("연락처");
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
            obj = new Div("Div02", "absolute", "150", "30", "500", "60", null, null, this.Div01);
            obj.set_taborder("71");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "2", "4", null, "20", "60.95%", null, this.Div01.Div02);
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
            obj = new Div("Div04", "absolute", "150", "150", "500", "60", null, null, this.Div01);
            obj.set_taborder("72");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div04);
            obj.set_taborder("4");
            this.Div01.Div04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div01.Div04);
            obj.set_taborder("5");
            obj.set_text("※ 영문소문자, 숫자, 특수문자 조합으로 최소 10자리이상");
            this.Div01.Div04.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "150", "210", "500", "30", null, null, this.Div01);
            obj.set_taborder("73");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div05);
            obj.set_taborder("0");
            this.Div01.Div05.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "150", "270", "500", "30", null, null, this.Div01);
            obj.set_taborder("75");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div01.Div07);
            obj.set_taborder("0");
            this.Div01.Div07.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "150", "90", "500", "60", null, null, this.Div01);
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
            obj = new Static("Static11", "absolute", "5.23%", "245", null, "19", "78%", null, this.Div01);
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
            obj = new Div("Div08", "absolute", "150", "300", "500", "30", null, null, this.Div01);
            obj.set_taborder("81");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("cmb_tel", "absolute", "0.6%", "5", null, "20", "86.14%", null, this.Div01.Div08);
            this.Div01.Div08.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_displayrowcount("5");
            obj.set_index("-1");
            obj = new Combo("cmb_tel1", "absolute", "100", "5", null, "20", "69.28%", null, this.Div01.Div08);
            this.Div01.Div08.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_tel1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "30.72%", "4", null, "22", "65.46%", null, this.Div01.Div08);
            obj.set_taborder("3");
            obj.set_text(" -");
            this.Div01.Div08.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "169", "4", null, "20", "281", null, this.Div01.Div08);
            obj.set_taborder("4");
            this.Div01.Div08.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "43.78%", "4", null, "22", "52.41%", null, this.Div01.Div08);
            obj.set_taborder("5");
            obj.set_text(" -");
            this.Div01.Div08.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "233", "4", null, "20", "217", null, this.Div01.Div08);
            obj.set_taborder("6");
            this.Div01.Div08.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "150", "330", "500", "30", null, null, this.Div01);
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
            obj = new Static("Static13", "absolute", "150", "0", "500", "30", null, null, this.Div01);
            obj.set_taborder("83");
            obj.style.set_border("1 solid #339966ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "153", "3", null, "23", "48.15%", null, this.Div01);
            obj.set_taborder("84");
            this.Div01.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "150", "240", null, "30", "0", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("85");
            obj.style.set_border("1 solid #339966ff");

            obj = new Button("Button02", "absolute", "438", "968", "75", "33", null, null, this);
            obj.set_taborder("13");
            obj.set_text("확인");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "548", "968", "75", "33", null, null, this);
            obj.set_taborder("14");
            obj.set_text("취소");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 178, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #ffffffff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 703, 27, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_border("1 solid #000000ff");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

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
            obj = new Layout("default", "", 500, 60, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("71");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 60, this.Div01.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("72");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 30, this.Div01.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 30, this.Div01.Div07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("75");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 60, this.Div01.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("76");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 30, this.Div01.Div08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div01.Div08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 30, this.Div01.Div09,
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
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Div01.Div08.cmb_tel","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.Div08.cmb_tel1","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.Div09.Edit01","value","ds_email","");
            this.addChild(obj.name, obj);
            obj.bind();

            
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
            this.Static04.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.Div02.Static02.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div02.Static05.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div02.Static07.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Static05.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.Div03.Radio00.addEventHandler("onitemclick", this.Div02_Radio00_onitemclick, this);
            this.Div01.Static01.addEventHandler("onclick", this.Div00_Div00_Static01_onclick, this);
            this.Div01.Static05.addEventHandler("onclick", this.Div00_Div00_Static05_onclick, this);
            this.Div01.Div08.cmb_tel.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div01.Div08.cmb_tel1.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div01.Div08.Static01.addEventHandler("onclick", this.Div01_Div08_Static01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Button03.addEventHandler("onclick", this.Div00_Button01_onclick, this);

        };

        this.loadIncludeScript("Join_personal.xfdl", true);

       
    };
}
)();
