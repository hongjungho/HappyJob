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
                this.set_name("SampleCrud");
                this.set_titletext("사업연구과제");
                this._setFormPosition(0,0,1024,706);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"bplcGb\" type=\"STRING\" size=\"256\"/><Column id=\"pjTaskNo\" type=\"STRING\" size=\"256\"/><Column id=\"spntNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">sample/selectSubjectList.do</Col><Col id=\"svcid\">selectSubjectList</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsSubjectList=dsSubjectList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"sController\">sample/saveSubjectList.do</Col><Col id=\"svcid\">saveSubjectList</Col><Col id=\"inds\">dsSubjectList=dsSubjectList:U</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSubjectList", this);
            obj._setContents("<ColumnInfo><Column id=\"pjTaskNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcGb\" type=\"STRING\" size=\"256\"/><Column id=\"frstCntrctDt\" type=\"STRING\" size=\"256\"/><Column id=\"spntMiryfc\" type=\"STRING\" size=\"256\"/><Column id=\"spntNm\" type=\"STRING\" size=\"256\"/><Column id=\"spntBsnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsrchTaskCharct\" type=\"STRING\" size=\"256\"/><Column id=\"taskEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsrchRspnber\" type=\"STRING\" size=\"256\"/><Column id=\"spntTaskNo\" type=\"STRING\" size=\"256\"/><Column id=\"taskBgnde\" type=\"STRING\" size=\"256\"/><Column id=\"taskEndde\" type=\"STRING\" size=\"256\"/><Column id=\"sprmnyKnd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrchYycnt\" type=\"STRING\" size=\"256\"/><Column id=\"indrctLev\" type=\"STRING\" size=\"256\"/><Column id=\"taskRsrcct\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Indrct", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">true</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, "12", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.style.set_background("#ff000033");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "107", null, "12", "0.2%", null, this);
            obj.set_taborder("1");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "120", "138", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("사업과제 목록");
            obj.set_cssclass("WF_sta_Title");
            obj.getSetter("class").set("sta_WA_subtitle");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "49", null, "58", "0", null, this);
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

            obj = new Static("Static03", "absolute", "0%", "139", null, "12", "0.49%", null, this);
            obj.set_taborder("11");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "3", "52", "72", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사업장구분");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_BsnsGb", "absolute", "80", "54", "158", "20", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_BsnsGb_innerdataset = new Dataset("cbo_BsnsGb_innerdataset", this.cbo_BsnsGb);
            cbo_BsnsGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cbo_BsnsGb_innerdataset);
            obj.set_taborder("13");
            obj.set_codecolumn("datacolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static04", "absolute", "251", "54", "93", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사업과제번호");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BsnsNo", "absolute", "348", "54", "251", "20", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "619", "54", "93", "22", null, null, this);
            obj.set_taborder("16");
            obj.set_text("지원기관명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SpntNm", "absolute", "716", "54", "251", "20", null, null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "3", "81", "72", "22", null, null, this);
            obj.set_taborder("18");
            obj.set_text("연구책임자");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BsnsNo00", "absolute", "80", "80", "132", "20", null, null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "214", "80", "25", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("WFSA_btn_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "252", "81", "72", "22", null, null, this);
            obj.set_taborder("21");
            obj.set_text("연구기간");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "347", "82", "117", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");

            obj = new Static("Static08", "absolute", "470", "82", "14", "18", null, null, this);
            obj.set_taborder("23");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "482", "82", "117", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");

            obj = new Grid("Grid00", "absolute", "2", "154", null, "197", "6", null, this);
            obj.set_taborder("25");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSubjectList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"116\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"126\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"사업과제번호\"/><Cell col=\"2\" text=\"연구책임자\"/><Cell col=\"3\" text=\"지원기관명\"/><Cell col=\"4\" text=\"지원기관사업명\"/><Cell col=\"5\" displaytype=\"normal\" text=\"간접비징수\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"expr:comp.parent.fn_status(currow, this.col)\"/><Cell col=\"1\" text=\"bind:pjTaskNo\"/><Cell col=\"2\" text=\"bind:rsrchRspnber\"/><Cell col=\"3\" text=\"bind:spntNm\"/><Cell col=\"4\" text=\"bind:spntBsnsNm\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:indrctLev\" combodataset=\"ds_Indrct\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "2", "368", "172", "18", null, null, this);
            obj.set_taborder("26");
            obj.set_text("상세내용");
            obj.set_cssclass("WF_sta_TitleSub");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0%", "395", null, "35", "0%", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "6", "402", "149", "22", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            obj.set_text("<fc v='red'>*</fc>사업과제번호");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "156", "402", "270", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_value("사업과제번호");
            obj.set_cssclass("input_must");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0%", "432", null, "35", "0%", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "432", "402", "150", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_text("<fc v='red'>*</fc>사업장구분");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "6", "438", "149", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_text("<fc v='red'>*</fc>최초계약일자");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "157", "438", "169", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_cssclass("input_must");
            obj.set_value("null");

            obj = new Static("Static13", "absolute", "0%", "469", null, "35", "0%", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "6", "476", "149", "22", null, null, this);
            obj.set_taborder("36");
            obj.set_text("지원기관부처");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "156", "476", "170", "22", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "434", "476", "149", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_text("지원기관");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "584", "476", "170", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "759", "477", "24", "20", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("WFSA_btn_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0%", "506", null, "35", "0%", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "6", "512", "150", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_text("지원기관사업명");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "432", "513", "150", "22", null, null, this);
            obj.set_taborder("44");
            obj.set_text("<fc v='red'>*</fc>연구과제성격");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "584", "513", "269", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_cssclass("input_must");

            obj = new Static("Static20", "absolute", "0%", "543", null, "35", "0%", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0%", "581", null, "35", "-0.1%", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "6", "551", "149", "22", null, null, this);
            obj.set_taborder("48");
            obj.set_text("과제영문명");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "156", "551", "170", "22", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "434", "551", "149", "22", null, null, this);
            obj.set_taborder("50");
            obj.set_text("<fc v='red'>*</fc>연구책임자");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "584", "551", "170", "22", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "759", "552", "24", "20", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("WFSA_btn_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "6", "589", "149", "22", null, null, this);
            obj.set_taborder("53");
            obj.set_text("지원기관과제번호");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "156", "589", "170", "22", null, null, this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "434", "588", "149", "22", null, null, this);
            obj.set_taborder("55");
            obj.set_text("<fc v='red'>*</fc>총연구기간");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03", "absolute", "584", "587", "169", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_cssclass("input_must");
            obj.set_value("null");

            obj = new Static("Static30", "absolute", "759", "589", "14", "18", null, null, this);
            obj.set_taborder("57");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04", "absolute", "776", "587", "169", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_cssclass("input_must");
            obj.set_value("null");

            obj = new Static("Static31", "absolute", "0%", "619", null, "35", "0%", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "6", "626", "150", "22", null, null, this);
            obj.set_taborder("60");
            obj.set_text("<fc v='red'>*</fc>지원금종류");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03", "absolute", "158", "626", "269", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_cssclass("input_must");

            obj = new Static("Static33", "absolute", "433", "626", "149", "22", null, null, this);
            obj.set_taborder("62");
            obj.set_text("<fc v='red'>*</fc>연구년수");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "583", "626", "170", "22", null, null, this);
            obj.set_taborder("63");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0%", "657", null, "35", "0%", null, this);
            obj.set_taborder("64");
            obj.set_cssclass("WF_sta_BarUnder");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "6", "665", "150", "22", null, null, this);
            obj.set_taborder("65");
            obj.set_text("간접비징수");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "161", "665", "24", "22", null, null, this);
            obj.set_taborder("66");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "433", "665", "149", "22", null, null, this);
            obj.set_taborder("67");
            obj.set_text("총연구비");
            obj.set_cssclass("basic_sta_block");
            obj.getSetter("class").set("sta_WADA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0%", "353", null, "12", "0.39%", null, this);
            obj.set_taborder("69");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "0%", "385", null, "12", "0.39%", null, this);
            obj.set_taborder("70");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0%", "693", null, "12", "0.1%", null, this);
            obj.set_taborder("71");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "156", "514", "270", "22", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("input_must");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bspnGb_sel", "absolute", "584", "402", "269", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_cssclass("input_must");

            obj = new MaskEdit("MaskEdit00", "absolute", "583", "667", "170", "20", null, null, this);
            obj.set_taborder("74");
            obj.set_cssclass("input_must");
            obj.set_mask("###,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "760", "665", null, "22", "22.66%", null, this);
            obj.set_taborder("75");
            obj.set_text("원");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 706, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사업연구과제");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","cbo_bspnGb_sel","value","dsSubjectList","bplcGb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cbo_BsnsGb","value","dsSchMap","bplcGb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_SpntNm","value","dsSchMap","spntNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit00","value","dsSubjectList","pjTaskNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Calendar02","value","dsSubjectList","frstCntrctDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit06","value","dsSubjectList","spntMiryfc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit01","value","dsSubjectList","spntNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit08","value","dsSubjectList","spntBsnsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Combo02","value","dsSubjectList","rsrchTaskCharct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit02","value","dsSubjectList","taskEngNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","CheckBox00","value","dsSubjectList","indrctLev");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Edit03","value","dsSubjectList","rsrchRspnber");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Edit04","value","dsSubjectList","spntTaskNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Calendar03","value","dsSubjectList","taskBgnde");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Calendar04","value","dsSubjectList","taskEndde");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Combo03","value","dsSubjectList","sprmnyKnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Edit05","value","dsSubjectList","rsrchYycnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","MaskEdit00","value","dsSubjectList","taskRsrcct");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SampleCrud.xfdl", "Lib::Comm.xjs");
        this.registerScript("SampleCrud.xfdl", function(exports) {
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

        
        //공통 콜백
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
         
        	//this.alert(svcId);
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");			
        	   return;
        	}else{
        		if(svcId == "saveSubjectList"){
        			
        			this.alert("저장되었습니다.");
        			//this.gfn_alertMsg(this.Msg_Inf_0004);		
        			this.gfn_serviceCall("selectSubjectList");
        		}
        		//콜백정의	
        		//Iject.alert(errormsg,"알림");	
        	}
        }

        
        /**********************************************************************
        * User Function
        ***********************************************************************/
        //검색영역 세팅
        this.lfn_settingSearchBar = function(){

        	
        	var cdParam = new Array();
        	
        	//캠퍼스조회	
        	cdParam[0]  = ["CBO",  "A01", "cbo_BsnsGb", 0, "ALL"];
        	cdParam[1]  = ["CBO",  "A01", "cbo_bspnGb_sel", 0, "SEL"];
        	cdParam[2]  = ["CBO",  "B01", "Combo03", 0, "SEL"];
        	cdParam[3]  = ["CBO",  "B02", "Combo02", 0, "SEL"];
        	this.gfn_getCboComplexCmmnCd(this.name, cdParam);
        	this.cbo_BsnsGb.index = 0;
        	this.dsSchMap.setColumn(0,'pjTaskNo',"");

        }

        
        //조회버튼
        this.btn_Seach_onclick = function(obj,e)
        {
        	this.lfn_searchList();
        }

        
        //사업번호 키보드 입력시
        this.edt_BsnsNo_onkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.btn_Seach_onclick();
        	}
        }

        
        //신규추가
        this.btn_Insert_onclick = function(obj,e)
        {
        	this.dsSubjectList.addRow();
        	this.cbo_bspnGb_sel.set_value("");
        	this.Combo03.set_value("");
        	this.dsSubjectList.setColumn(this.dsSubjectList.rowposition,"frstCntrctDt",this.gfn_today());
        	this.dsSubjectList.setColumn(this.dsSubjectList.rowposition,"taskBgnde",this.gfn_today());
        	this.dsSubjectList.setColumn(this.dsSubjectList.rowposition,"taskEndde",this.gfn_today());
        	this.dsSubjectList.setColumn(this.dsSubjectList.rowposition,"taskEngNm","");
        	this.dsSubjectList.setColumn(this.dsSubjectList.rowposition,"sprmnyKnd","");
        	
        	
        }

        
        //삭제
        this.btn_Delete_onclick = function(obj,e)
        {
        	if(this.dsSubjectList.getRowCount() <= 0){
        		//this.gfn_alertMsg(this.Msg_Inf_0001);
        		this.alert("삭제할 대상이 없습니다.");
        		return false;
        	}
        	
        	this.dsSubjectList.deleteRow(this.dsSubjectList.rowposition);
        	
        	//var row = this.dsSubjectList.getRowType(this.dsSubjectList.rowposition);
        	
        	//this.dsSubjectList.deleteRow(row);
        }

        

        //저장하기
        this.btn_Save_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        	//if(this.gfn_confrmMsg(this.Msg_Inf_0003)){
        		//trace(this.dsTaskList.saveXML("A"));
        		this.gfn_serviceCall("saveSubjectList");
        	}
        }

        

        this.lfn_searchList = function(){
        	this.gfn_serviceCall("selectSubjectList"); //사업과제 목록 조회
        }

        
        this.fn_status = function(row,col)
        {

        	//trace(this.dsTaskList.getRowType(row));
        	
        	if(this.dsSubjectList.getRowType(row) == "2"){
        		return "신규";
        	}else if(this.dsSubjectList.getRowType(row) == "4"){
        		return "수정";
        	}
        	
        }

        

        

        

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.alert(e.postvalue);
        }

        
        //연구책임자 팝업
        this.Button02_onclick = function(obj,e)
        {
        	//팝업 파라미터에 담길 값 호출
        	this.dsSchMap.setColumn(0,"searchYn","Y");	 
        	
        	//팝업 파라미터(데이터셋)
        	var args = {dsSchMap:this.dsSchMap};
        	
        	//팝업호출(팝업생성id , 팝업이 될 화면 , 파라미터 , 팝업사이즈 , 팝업콜백)
        	this.gfn_openPopup("samplePopUp01", "Sample::SampleCrud_P1.xfdl",args,this.gfn_getPopupOption(785,627, true),"this.popupRtn");//팝업호출
        }

        
        //팝업콜백
        this.popupRtn = function(sName,sAge){
        	
        	this.dsSubjectList.setColumn(this.dsSubjectList.rowposition,"rsrchRspnber",sName);
        	
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	this.alert("지원되지 않는 항목입니다.");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SampleCrud_onload, this);
            this.btn_Seach.addEventHandler("onclick", this.btn_Seach_onclick, this);
            this.btn_Insert.addEventHandler("onclick", this.btn_Insert_onclick, this);
            this.btn_Delete.addEventHandler("onclick", this.btn_Delete_onclick, this);
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.cbo_BsnsGb.addEventHandler("onitemchanged", this.cbo_BsnsGb_onitemchanged, this);
            this.edt_BsnsNo.addEventHandler("onkeyup", this.edt_BsnsNo_onkeyup, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("SampleCrud.xfdl", true);

       
    };
}
)();
