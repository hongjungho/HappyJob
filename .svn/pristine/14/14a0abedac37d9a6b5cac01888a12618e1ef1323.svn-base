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
                this.set_name("Join");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">1999 </Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">1998</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">1997</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">남자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">이메일 도메인 선택</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">naver.com</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">daum.net</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">gmail.com</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">lycos.co.kr</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">nate.com</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">직접입력</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_agree", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">동의함</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, null, "0%", "-289", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "11.52%", "29", null, "39", "70.9%", null, this.Div00);
            obj.set_taborder("14");
            obj.set_text("회원가입");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "36.43%", "968", null, "33", "56.25%", null, this.Div00);
            obj.set_taborder("15");
            obj.set_text("확인");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "47.17%", "968", null, "33", "45.51%", null, this.Div00);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("bold 10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15.04%", "70", "702", "103", null, null, this.Div00);
            obj.set_taborder("17");
            obj.set_text("허위로 작성된 가입정보일 경우 임의로 삭제처리될 수 있으니 주의해 주세요. \r\n  \r\n대출증번호를 입력하신 회원은 온라인서비스(이용자서비스,예약대출) 등을 이용하실수 있습니다.  \r\n\r\n* 는 필수 입력 항목입니다.");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "15.04%", "195", "702", "362", null, null, this.Div00);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "0", "150", "30", null, null, this.Div00.Div00);
            obj.set_taborder("12");
            obj.set_text("이름(실명)");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "30", "150", "60", null, null, this.Div00.Div00);
            obj.set_taborder("13");
            obj.set_text("아이디");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0%", "90", "150", "60", null, null, this.Div00.Div00);
            obj.set_taborder("14");
            obj.set_text("대출증번호");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "150", "150", "60", null, null, this.Div00.Div00);
            obj.set_taborder("15");
            obj.set_text("비밀번호");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "210", "150", "30", null, null, this.Div00.Div00);
            obj.set_taborder("16");
            obj.set_text("비밀번호확인");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "240", "150", "30", null, null, this.Div00.Div00);
            obj.set_taborder("17");
            obj.set_text("생년월일/성별");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "270", "150", "30", null, null, this.Div00.Div00);
            obj.set_taborder("18");
            obj.set_text("연락처");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "300", "150", "30", null, null, this.Div00.Div00);
            obj.set_taborder("19");
            obj.set_text("휴대전화번호");
            obj.style.set_background("#ceffceff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "330", "150", "30", null, null, this.Div00.Div00);
            obj.set_taborder("20");
            obj.set_text("이메일");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "4.01%", "22", null, "47", "89.26%", null, this.Div00.Div00);
            obj.set_taborder("21");
            obj.set_text("Div00");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "29.79%", "28", null, "19", "46.81%", null, this.Div00.Div00.Div00);
            obj.set_taborder("0");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.Div00.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "21.49%", "0", "550", "30", null, null, this.Div00.Div00);
            obj.set_taborder("22");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("id", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div01);
            obj.set_taborder("0");
            this.Div00.Div00.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "21.49%", "30", "550", "60", null, null, this.Div00.Div00);
            obj.set_taborder("23");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div02);
            obj.set_taborder("0");
            this.Div00.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "40.15%", "4", null, "24", "35.04%", null, this.Div00.Div00.Div02);
            obj.set_taborder("1");
            obj.set_text("아이디 중복 확인");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div00.Div00.Div02);
            obj.set_taborder("2");
            obj.set_text("(영문소문자, 숫자 조합 최소 5자 이상 최대 12자 이하입니다.)");
            this.Div00.Div00.Div02.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "21.43%", "150", "550", "60", null, null, this.Div00.Div00);
            obj.set_taborder("25");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div04);
            obj.set_taborder("0");
            this.Div00.Div00.Div04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div00.Div00.Div04);
            obj.set_taborder("1");
            obj.set_text("※ 영문소문자, 숫자, 특수문자 조합으로 최소 10자리이상");
            this.Div00.Div00.Div04.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "21.43%", "210", "550", "30", null, null, this.Div00.Div00);
            obj.set_taborder("26");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div05);
            obj.set_taborder("0");
            this.Div00.Div00.Div05.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "21.43%", "240", "550", "30", null, null, this.Div00.Div00);
            obj.set_taborder("27");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Combo("cmb_year", "absolute", "0.55%", "5", null, "20", "86.13%", null, this.Div00.Div00.Div06);
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_year");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_displayrowcount("5");
            obj = new Static("Static00", "absolute", "14.42%", "4", null, "22", "80.47%", null, this.Div00.Div00.Div06);
            obj.set_taborder("2");
            obj.set_text("년");
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj = new Combo("cmb_year00", "absolute", "20.07%", "5", null, "20", "69.34%", null, this.Div00.Div00.Div06);
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_year");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Static("Static01", "absolute", "31.39%", "4", null, "22", "64.78%", null, this.Div00.Div00.Div06);
            obj.set_taborder("4");
            obj.set_text("월");
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj = new Combo("cmb_year01", "absolute", "36.13%", "5", null, "20", "53.28%", null, this.Div00.Div00.Div06);
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_year");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Static("Static02", "absolute", "47.45%", "4", null, "22", "48.72%", null, this.Div00.Div00.Div06);
            obj.set_taborder("6");
            obj.set_text("일");
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj = new Combo("cmb_year02", "absolute", "53.65%", "5", null, "20", "35.77%", null, this.Div00.Div00.Div06);
            this.Div00.Div00.Div06.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_gender");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_displayrowcount("5");
            obj.set_index("-1");
            obj = new Div("Div07", "absolute", "21.43%", "270", "550", "30", null, null, this.Div00.Div00);
            obj.set_taborder("28");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div07);
            obj.set_taborder("0");
            this.Div00.Div00.Div07.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "21.43%", "300", "550", "30", null, null, this.Div00.Div00);
            obj.set_taborder("29");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div08);
            obj.set_taborder("0");
            this.Div00.Div00.Div08.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "21.43%", "330", "550", "30", null, null, this.Div00.Div00);
            obj.set_taborder("30");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "78.47%", null, this.Div00.Div00.Div09);
            obj.set_taborder("0");
            this.Div00.Div00.Div09.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "25.73%", "4", null, "20", "53.28%", null, this.Div00.Div00.Div09);
            obj.set_taborder("1");
            this.Div00.Div00.Div09.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "22.08%", "5", null, "19", "73.91%", null, this.Div00.Div00.Div09);
            obj.set_taborder("2");
            obj.set_text("@");
            obj.style.set_font("12 Dotum");
            this.Div00.Div00.Div09.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "47.99%", "5", null, "19", "25.73%", null, this.Div00.Div00.Div09);
            this.Div00.Div00.Div09.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_text("이메일 도메인 선택");
            obj.set_innerdataset("@ds_email");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_value("1");
            obj.set_displayrowcount("5");
            obj.set_index("0");
            obj = new Div("Div03", "absolute", "21.43%", "90", "550", "60", null, null, this.Div00.Div00);
            obj.set_taborder("31");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "0.55%", "4", null, "20", "60.95%", null, this.Div00.Div00.Div03);
            obj.set_taborder("3");
            this.Div00.Div00.Div03.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "40.15%", "4", null, "24", "35.04%", null, this.Div00.Div00.Div03);
            obj.set_taborder("4");
            obj.set_text("대출증번호 확인");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div00.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "31", null, "22", "31.75%", null, this.Div00.Div00.Div03);
            obj.set_taborder("5");
            obj.set_text("(무인예약 신청을 이용하려면 반드시 입력하세요.)");
            this.Div00.Div00.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "5%", "170", null, "19", "71.71%", null, this.Div00.Div00);
            obj.set_taborder("32");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "3.29%", "215", null, "19", "73.43%", null, this.Div00.Div00);
            obj.set_taborder("33");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "2.71%", "245", null, "19", "74%", null, this.Div00.Div00);
            obj.set_taborder("34");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "3.29%", "305", null, "19", "73.43%", null, this.Div00.Div00);
            obj.set_taborder("35");
            obj.set_text("*");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15.04%", "616", "702", "3", null, null, this.Div00);
            obj.set_taborder("19");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15.14%", "580", null, "39", "67.29%", null, this.Div00);
            obj.set_taborder("20");
            obj.set_text("고객정보동의(CRM)");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 12 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15.04%", "629", "702", "51", null, null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("우리 페이지에서는 맞춤형 정보를 빠르게 전달해 드리고자 다음과 같이 고객 정보수집 동의를 구하고자 합니다. \r\n동의하신 고객정보는 시정홍보, 고객만족도조사, 설문조사 등에만 활용하고 일체 타 업무목적으로는 활용하지 않음을 \r\n약속드립니다.");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("2 solid #ffffffff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "16.02%", "678", null, "178", "18.85%", null, this.Div00);
            obj.set_taborder("22");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.7%", "15", null, "22", "59.13%", null, this.Div00.Div01);
            obj.set_taborder("0");
            obj.set_text("1. 개인정보의 수집 및 이용 목적 : ");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "34.52%", "15", null, "22", "37.15%", null, this.Div00.Div01);
            obj.set_taborder("1");
            obj.set_text("고객만족도조사, 설문조사 활용");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "1.7%", "37", null, "22", "59.13%", null, this.Div00.Div01);
            obj.set_taborder("2");
            obj.set_text("2. 수집하는 개인정보의 활용 :");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "1.7%", "59", null, "22", "52.63%", null, this.Div00.Div01);
            obj.set_taborder("3");
            obj.set_text("- 필수정보 : 아이디, 생년월일, 성별, 휴대전화번호");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "1.7%", "81", null, "22", "52.63%", null, this.Div00.Div01);
            obj.set_taborder("4");
            obj.set_text("- 선택정보 : 대출증번호, 연락처, 이메일");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1.7%", "103", null, "22", "59.13%", null, this.Div00.Div01);
            obj.set_taborder("5");
            obj.set_text("3. 개인정보의 보유 및 이용기간 :");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "34.52%", "103", null, "22", "37.15%", null, this.Div00.Div01);
            obj.set_taborder("6");
            obj.set_text("5년");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "1.7%", "125", null, "43", "0.31%", null, this.Div00.Div01);
            obj.set_taborder("7");
            obj.set_text("4. 귀하는 개인정보 수집ㆍ이용에 동의하지 않으실 수 있으나 동의하지 않을 경우 회원가입이 불가능합니다. \r\n그리고 필수정보는 반드시 입력해야 하며, 선택정보는 입력하지 않으실 수 있으나 무인예약 신청등의 서비스가 \r\n제한될 수 있음을 알려드립니다.");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15.04%", "857", "702", "29", null, null, this.Div00);
            obj.set_taborder("23");
            obj.set_text(" ▷ 위와 같은 개인정보를 수집ㆍ이용하는데 동의하십니까?");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("2 solid #ffffffff");
            obj.style.set_color("#000000ff");
            obj.style.set_font("10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "15.14%", "898", "702", "27", null, null, this.Div00);
            obj.set_taborder("24");
            obj.style.set_border("1 solid #000000ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "0", null, "25", "72%", null, this.Div00.Div02);
            obj.set_taborder("0");
            obj.set_text("선택사항");
            obj.style.set_background("#e6e6e6ff");
            obj.style.set_border("1 solid #000000ff");
            obj.style.set_align("center middle");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "38.29%", "3", null, "20", "16.43%", null, this.Div00.Div02);
            this.Div00.Div02.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_rowcount("1");
            obj.set_innerdataset("@ds_agree");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 47, this.Div00.Div00.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_text("Div00");

            	}
            );
            this.Div00.Div00.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div00.Div00.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 60, this.Div00.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("23");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 60, this.Div00.Div00.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div00.Div00.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div00.Div00.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div00.Div00.Div07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div00.Div00.Div08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 30, this.Div00.Div00.Div09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 60, this.Div00.Div00.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 702, 365, this.Div00.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #339966ff");

            	}
            );
            this.Div00.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 178, this.Div00.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #ffffffff");

            	}
            );
            this.Div00.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 703, 27, this.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.style.set_border("1 solid #000000ff");

            	}
            );
            this.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.Div00.Div06.cmb_year","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Div00.Div06.cmb_year00","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Div00.Div06.cmb_year01","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Join_inform_copy.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : UserProject
        * BUSINESS    : UserProject-교육용
        * FILE NAME   : Login.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 회원가입 화면
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.Join_onload = function(obj,e)
        {
        	//if(nexacro.Browser == "Runtime") this.Div.btn_close.set_visible(true);
        	Iject.formOnload(obj);			//폼 초기화 : 필요시 구현
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Div00.Static01.addEventHandler("onclick", this.Div00_Div00_Static01_onclick, this);
            this.Div00.Div00.Static05.addEventHandler("onclick", this.Div00_Div00_Static05_onclick, this);
            this.Div00.Div00.Div06.cmb_year.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div00.Div00.Div06.cmb_year00.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div00.Div00.Div06.cmb_year01.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div00.Div00.Div06.Static02.addEventHandler("onclick", this.Div00_Div00_Div06_Static02_onclick, this);
            this.Div00.Div00.Div06.cmb_year02.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div00.Static02.addEventHandler("onclick", this.Div00_Static02_onclick, this);
            this.Div00.Static03.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Static04.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.Div00.Div01.Static02.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div00.Div01.Static05.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div00.Div01.Static07.addEventHandler("onclick", this.Div00_Div01_Static02_onclick, this);
            this.Div00.Static05.addEventHandler("onclick", this.Div00_Static04_onclick, this);

        };

        this.loadIncludeScript("Join_inform_copy.xfdl", true);

       
    };
}
)();
