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
                this.set_name("BookSearch");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1620,1144);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"256\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">getList</Col><Col id=\"sController\">book/getList.do</Col><Col id=\"inds\">dsSearch=dsSearch</Col><Col id=\"outds\">dsBooks=dsBooks</Col><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row><Row><Col id=\"svcid\">regBook</Col><Col id=\"sController\">book/regBook.do</Col><Col id=\"inds\">dsBooks=dsBooks</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBooks", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"bookWriter\" type=\"STRING\" size=\"256\"/><Column id=\"bookPub\" type=\"STRING\" size=\"256\"/><Column id=\"bookDate\" type=\"STRING\" size=\"256\"/><Column id=\"divCd\" type=\"STRING\" size=\"256\"/><Column id=\"classCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookIsbn\" type=\"STRING\" size=\"256\"/><Column id=\"bookRegdate\" type=\"STRING\" size=\"256\"/><Column id=\"bookSum\" type=\"STRING\" size=\"256\"/><Column id=\"placeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookImg\" type=\"STRING\" size=\"256\"/><Column id=\"sBookImg\" type=\"STRING\" size=\"256\"/><Column id=\"bookIdx\" type=\"STRING\" size=\"256\"/><Column id=\"bookCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">종이책</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">전자책</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">title</Col><Col id=\"value\">도서명</Col></Row><Row><Col id=\"code\">writer</Col><Col id=\"value\">작가명</Col></Row><Row><Col id=\"code\">both</Col><Col id=\"value\">통합</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">총류</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">철학</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">종교</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">사회과학</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">자연과학</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">기술과학</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">예술</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">언어</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"value\">문학</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"value\">역사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPlace", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">1층</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">2층</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"value\">3층</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"value\">4층</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"value\">5층</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"value\">6층</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edit_search", "absolute", "10.93%", "32", null, "40", "61.6%", null, this);
            obj.set_taborder("0");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_font("14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "38.15%", "32", null, "40", "50.83%", null, this);
            obj.set_taborder("1");
            obj.set_text("Search");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("15 Aharoni");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_books", "absolute", "2.47%", "152", null, "875", "50.8%", null, this);
            obj.set_taborder("2");
            obj.style.set_line("1 none #808080ff");
            obj.style.set_selectline("1 none #808080ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.setStyleValue("background", "disabled", "white");
            obj.style.setStyleValue("border", "disabled", "1 none white");
            obj.style.setStyleValue("color", "disabled", "slategray");
            obj.style.setStyleValue("font", "disabled", "10 Book Antiqua");
            obj.style.setStyleValue("shadow", "disabled", "outer 0,0 0 white");
            obj.style.setStyleValue("gradation", "disabled", "none 0,0 white 100,100 black");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_binddataset("dsBooks");
            obj.set_selecttype("row");
            obj.set_scrollbars("autovert");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"175\"/></Columns><Rows><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"5\"/></Rows><Band id=\"body\"><Cell rowspan=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:#71b894ff;selectline:1 none #808080ff ;\"/><Cell col=\"1\" rowspan=\"4\" displaytype=\"image\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"C:\\project\\eGovFrameDev-3.6.0-32bit\\workspace\\happylib\\src\\main\\nxui\\Images\\Pictures\\s_photo1.png\" imagestretch=\"fit\"/><Cell col=\"2\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"도서\"/><Cell col=\"3\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 12 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:bookNm\"/><Cell col=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"분류\"/><Cell col=\"5\" displaytype=\"combo\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:classCd\" combodataset=\"dsCategory\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"1\" col=\"2\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"작가\"/><Cell row=\"1\" col=\"3\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:bookWriter\"/><Cell row=\"1\" col=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"ISBN\"/><Cell row=\"1\" col=\"5\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:bookIsbn\"/><Cell row=\"2\" col=\"2\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"출판\"/><Cell row=\"2\" col=\"3\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:bookPub\"/><Cell row=\"2\" col=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"전자책\"/><Cell row=\"2\" col=\"5\" displaytype=\"combo\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:divCd\" combodataset=\"dsEbook\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"3\" col=\"2\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"발간\"/><Cell row=\"3\" col=\"3\" displaytype=\"normal\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:bookDate\"/><Cell row=\"3\" col=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"대여\"/><Cell row=\"3\" col=\"5\" displaytype=\"normal\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;color:#39393cff;color2:#39393cff;font:bold 9 arial;selectbackground:#71b894ff;selectcolor:black;selectline:1 none #808080ff ;controlcolor:black;\" text=\"bind:bookCount\" expr=\"expr:bookCount + &quot;권 보유 중&quot;\"/><Cell row=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:transparent;selectline:1 none #808080ff ;\"/><Cell row=\"4\" col=\"1\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:transparent;selectline:1 none #808080ff ;controlcolor:#339966ff;\"/><Cell row=\"4\" col=\"2\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:transparent;selectline:1 none #808080ff ;controlcolor:#339966ff;\"/><Cell row=\"4\" col=\"3\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:transparent;selectline:1 none #808080ff ;controlcolor:#339966ff;\"/><Cell row=\"4\" col=\"4\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:transparent;selectline:1 none #808080ff ;controlcolor:#339966ff;\"/><Cell row=\"4\" col=\"5\" style=\"line:1 none #808080ff ;background:transparent;background2:transparent;selectbackground:transparent;selectline:1 none #808080ff ;controlcolor:#339966ff;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "2.47%", "109", null, "12", "50.8%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#339966ff");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00", "absolute", "2.47%", "114", null, "33", "50.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.style.set_background("#339966ff");
            obj.style.set_opacity("70");

            obj = new Static("Static01", "absolute", "5.12%", "147", null, "1", "50.77%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("#339966ff");
            obj.style.set_opacity("90");
            this.addChild(obj.name, obj);

            obj = new Static("stt_top3", "absolute", "3.33%", "87", null, "18", "96.17%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("#339966ff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_search_option", "absolute", "2.59%", "32", null, "40", "89.07%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.style.set_itembackground("transparent");
            obj.style.set_itemcolor("gray");
            obj.style.set_itemgradation("none 0,0 white 100,100 black");
            obj.style.set_itemborder("1 none #808080ff");
            obj.style.set_buttonsize("20");
            obj.style.set_displaynulltextcolor("lavender");
            obj.style.set_background("transparent");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_align("center middle");
            obj.style.set_font("12 arial");
            obj.style.set_cursor("pointer");
            obj.set_displaynulltext("검색조건");
            obj.set_innerdataset("@dsType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("Static04", "absolute", "5%", "87", "60", "20", null, null, this);
            obj.set_taborder("12");
            obj.set_text("검색옵션");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "11.31%", "87", "60", "20", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "14.88%", "87", "60", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("검색 결과");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "29.23%", "87", "20", "20", null, null, this);
            obj.set_taborder("16");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_total", "absolute", "23.15%", "87", "40", "20", null, null, this);
            obj.set_taborder("17");
            obj.style.set_selectcolor("black");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.set_displaynulltext("null");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "fixed", "2.47%", "1037", null, "60", "51.17%", null, this);
            obj.set_taborder("18");
            obj.set_text("div_page");
            this.addChild(obj.name, obj);
            obj = new Static("stc_no1", "fixed", "28.95%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("14");
            obj.set_text("1");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no2", "fixed", "32.91%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("15");
            obj.set_text("2");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no3", "fixed", "36.86%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("16");
            obj.set_text("3");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no4", "fixed", "40.82%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("17");
            obj.set_text("4");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no5", "fixed", "45.06%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("18");
            obj.set_text("5");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no6", "fixed", "49.01%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("19");
            obj.set_text("6");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no7", "fixed", "52.97%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("20");
            obj.set_text("7");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no8", "fixed", "56.92%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("21");
            obj.set_text("8");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no9", "fixed", "61.02%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("22");
            obj.set_text("9");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_no10", "fixed", "64.97%", "20", "20", "20", null, null, this.div_page);
            obj.set_taborder("23");
            obj.set_text("10");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("btn_next", "fixed", "72.46%", "20", "40", "20", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("next");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("btn_prev", "fixed", "20.76%", "20", "40", "20", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("prev");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "75.74%", "248", "392", "5", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("book_cover", "absolute", "54.63%", "28", null, "366", "26.36%", null, this);
            obj.set_taborder("22");
            obj.set_image("URL('C:/project/eGovFrameDev-3.6.0-32bit/workspace/happylib/src/main/nxui/Images/Pictures/photo1.png')");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title", "absolute", "75.93%", "145", null, "83", "4.88%", null, this);
            obj.set_taborder("23");
            obj.set_text("제목");
            obj.style.set_font("bold 20 vernada");
            this.addChild(obj.name, obj);

            obj = new Static("stc_writer", "absolute", "76.79%", "270", null, "37", "16%", null, this);
            obj.set_taborder("24");
            obj.set_text("writer");
            obj.style.set_font("12 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pub", "absolute", "76.79%", "330", null, "37", "16%", null, this);
            obj.set_taborder("25");
            obj.set_text("pub");
            obj.style.set_font("12 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bookdate", "absolute", "76.79%", "390", null, "37", "16%", null, this);
            obj.set_taborder("26");
            obj.set_text("bookdate");
            obj.style.set_font("12 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_isbn", "absolute", "86.42%", "330", null, "37", "7%", null, this);
            obj.set_taborder("27");
            obj.set_text("isbn");
            obj.style.set_font("12 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_place", "absolute", "86.42%", "390", null, "37", "7%", null, this);
            obj.set_taborder("28");
            obj.set_text("place");
            obj.style.set_font("12 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_class", "absolute", "86.42%", "270", null, "37", "7%", null, this);
            obj.set_taborder("29");
            obj.set_text("class");
            obj.style.set_font("12 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_idx", "absolute", "75.93%", "437", null, "169", "5.12%", null, this);
            obj.set_taborder("30");
            obj.set_text("idx");
            obj.style.set_align("left top");
            obj.style.set_font("12 vernada");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rent", "absolute", "56.3%", "440", null, "35", "36.23%", null, this);
            obj.set_taborder("31");
            obj.set_text("대여 신청");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "54.63%", "648", null, "278", "5.19%", null, this);
            obj.set_taborder("33");
            obj.set_text("Static08");
            obj.style.set_align("left top");
            obj.style.set_font("12 vernada");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "51.79%", "-5", null, "1149", "48.09%", null, this);
            obj.set_taborder("34");
            obj.set_text("Static09");
            obj.style.set_background("#339966ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rent_ebook", "absolute", "64.51%", "440", null, "35", "28.02%", null, this);
            obj.set_taborder("35");
            obj.set_text("ebook 대여 신청");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("div_page");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1620, 1144, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","combo_search_option","value","dsSearch","type");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edit_search","value","dsSearch","keyword");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","stc_title","text","dsBooks","bookNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","stc_writer","text","dsBooks","bookWriter");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","stc_pub","text","dsBooks","bookPub");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","stc_bookdate","text","dsBooks","bookDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","stc_class","text","dsBooks","classCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","stc_isbn","text","dsBooks","bookIsbn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","stc_place","text","dsBooks","placeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","stc_idx","text","dsBooks","bookIdx");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Static08","text","dsBooks","bookSum");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("BookSearch.xfdl", "Lib::Comm.xjs");
        this.registerScript("BookSearch.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs"

        this.total = 0;
        this.startPage = 1;
        this.endPage = 0;
        this.loadPage = 1;
        this.next = false;
        this.prev = false;

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.combo_search_option.value == null){
        		alert("Please select search type.");
        		return;
        	}
        	
        	if(this.edit_search.value == null){
        		alert("Please type your keyword into the search bar.");
        	}
        	
        		trace(this.dsSearch.getColumn(0, "keyword"));
        		this.gfn_serviceCall("getList");
        }

        this.frm_book_search_onload = function(obj,e){
        	this.gfn_serviceCall("getList");
        }

        this.lfn_get_pages = function(){

        	this.dsBooks.filter("");
        	this.total = this.dsBooks.getRowCount();
        	this.edit_total.set_value(this.total);
        	trace("total: " + this.total);
        	
        	this.endPage = Math.ceil(this.loadPage / 10.0) * 10;
        	trace(this.endPage);
        	this.startPage = this.endPage - 9;
        	
        	if((this.endPage * 10) >= this.total){
        		this.endPage = Math.ceil(this.total / 10);
        	}
        	
        	trace("endPage: " + this.endPage);
        	
        	if(this.startPage != 1){
        		this.prev = true;
        	} else {
        		this.prev = false;
        	}
        	
        	
        	if(this.endPage * 10 < this.total){
        		this.next = true;
        	} else {
        		this.next = false;
        	}
        	
        	
        	if(this.prev){
        		this.div_page.btn_prev.set_visible(true);
        		trace("prev button on");
        		this.div_page.btn_prev.addEventHandler("onclick", this.div_page_btn_prev_onclick, this);
        	} else {
        		this.div_page.btn_prev.set_visible(false);
        		trace("prev button off");
        	}
        	
        	for(var i = 1; i <= 10; i++){
        	
        		if(i <= this.endPage){
        			this.div_page.components["stc_no"+i].set_visible(true);
        			this.div_page.components["stc_no"+i].set_text((this.startPage-1) + i);
        			this.div_page.components["stc_no"+i].addEventHandler("onclick", this.fn_idx_btn_onclick, this);		
        		}
        		
        		if(i + (this.startPage-1) > this.endPage){
        			this.div_page.components["stc_no"+i].set_visible(false);
        		}
        	}
        	
        	if(this.next){
        		this.div_page.btn_next.set_visible(true);
        		trace("next button on");
        		this.div_page.btn_next.addEventHandler("onclick", this.div_page_btn_next_onclick, this);
        	} else {
        		this.div_page.btn_next.set_visible(false);
        		trace("next button off");
        	}
        	
        	this.dsBooks.filter("currow >= " + (this.loadPage-1) * 10 + " && currow <" + this.loadPage * 10);
        	// currow >= 0 && currow <= 10
        	this.fn_setStyle();
        	this.div_page.stc_no1.style.set_color("red");
        }

        this.fn_idx_btn_onclick = function(obj,e){
        	this.fn_setStyle();
        	obj.style.set_color("red");
        	var page = new Number(obj.text);
        	this.dsBooks.filter("currow >=" +(page-1) * 10+ "&& currow <" + (page * 10));
        	
        }

        this.fn_setStyle = function(obj,e){

        	trace("fn_setStyle()");
        	for(var i = 1; i <= 10; i++){
        		this.div_page.components["stc_no"+i].style.set_color("green");
        	}
        	this.div_page.components["btn_prev"].style.set_color("green");
        	this.div_page.components["btn_next"].style.set_color("green");

        }

        
        this.div_page_btn_next_onclick = function(obj,e)
        {
        	trace("next button clicked");
        	this.loadPage = this.endPage + 1;
        	this.lfn_get_pages();
        	trace(this.loadPage);
        }

        this.div_page_btn_prev_onclick = function(obj,e)
        {
        	trace("prev button clicked");
        	this.loadPage = this.startPage -1;
        	this.lfn_get_pages();
        	trace(this.loadPage);
        }

        
        this.combo_onchange = function(obj,e)
        {
        	this.Edit00.set_value(obj.text);
        }

        this.edit_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_search_onclick();
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Practice::test000.xfdl");
        }

        
        this.btn_rent_onclick = function(obj,e)
        {
        	application.open("rent", "Practice::Rent.xfdl", this.getOwnerFrame(), {mode:"modeless", ds:this.dsBooks}, "showtitlebar=true showstatusbar=false", 400, 200);
        }

        this.grd_books_oncellclick = function(obj,e)
        {
        	var selRow = obj.getSelectedRows();
        	var selCol = this.dsBooks.getColumn(selRow, "divCd");
        	trace(selCol);
        	if(selCol != "02"){
        		this.btn_rent_ebook.set_enable(false);
        	}
        	
        }

        this.btn_rent_ebook_onclick = function(obj,e)
        {
        	alert("ebook 대여 신청");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frm_book_search_onload, this);
            this.edit_search.addEventHandler("onkeydown", this.edit_search_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_books.addEventHandler("oncellclick", this.grd_books_oncellclick, this);
            this.combo_search_option.addEventHandler("onitemchanged", this.combo_onchange, this);
            this.div_page.btn_next.addEventHandler("onclick", this.div_page_btn_next_onclick, this);
            this.div_page.btn_prev.addEventHandler("onclick", this.div_page_btn_prev_onclick, this);
            this.btn_rent.addEventHandler("onclick", this.btn_rent_onclick, this);
            this.btn_rent_ebook.addEventHandler("onclick", this.btn_rent_ebook_onclick, this);

        };
        this.loadCss("Css::book_style.css");

        this.loadIncludeScript("BookSearch.xfdl", true);

       
    };
}
)();
