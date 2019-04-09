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
                this.set_name("BookReg");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBooks", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"bookWriter\" type=\"STRING\" size=\"256\"/><Column id=\"bookPub\" type=\"STRING\" size=\"256\"/><Column id=\"bookDate\" type=\"STRING\" size=\"256\"/><Column id=\"divCd\" type=\"STRING\" size=\"256\"/><Column id=\"classCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookIsbn\" type=\"STRING\" size=\"256\"/><Column id=\"bookRegdate\" type=\"STRING\" size=\"256\"/><Column id=\"bookSum\" type=\"STRING\" size=\"256\"/><Column id=\"placeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bookImg\" type=\"STRING\" size=\"256\"/><Column id=\"sBookImg\" type=\"STRING\" size=\"256\"/><Column id=\"bookIdx\" type=\"STRING\" size=\"256\"/><Column id=\"bookCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"256\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">getList</Col><Col id=\"sController\">book/getList.do</Col><Col id=\"inds\">dsSearch=dsSearch</Col><Col id=\"outds\">dsBooks=dsBooks</Col><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row><Row><Col id=\"svcid\">regBook</Col><Col id=\"sController\">book/regBook.do</Col><Col id=\"inds\">dsBooks=dsBooks</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">종이책</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">전자책</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPlace", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">1층</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">2층</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"value\">3층</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"value\">4층</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"value\">5층</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"value\">6층</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">총류</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">철학</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">종교</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">사회과학</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">자연과학</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">기술과학</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">예술</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">언어</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"value\">문학</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"value\">역사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stt_bookdetail_top", "absolute", "0%", "0", null, "71", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("     도서 등록");
            obj.style.set_background("#339966ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 20 휴먼매직체");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("book_img", "absolute", "3%", "95", null, "337", "57.67%", null, this);
            obj.set_taborder("1");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "44.5%", "142", "332", "2", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_title", "absolute", "44.5%", "102", null, "34", "30.67%", null, this);
            obj.set_taborder("3");
            obj.set_displaynulltext("도서명");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_writer", "absolute", "44.5%", "158", null, "34", "30.33%", null, this);
            obj.set_taborder("4");
            obj.set_displaynulltext("작가");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_pub", "absolute", "71.17%", "158", null, "34", "3.67%", null, this);
            obj.set_taborder("5");
            obj.set_displaynulltext("출판사");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_bookdate", "absolute", "44.67%", "200", null, "34", "30.17%", null, this);
            obj.set_taborder("6");
            obj.set_displaynulltext("출판일");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_isbn", "absolute", "71.33%", "200", null, "34", "3.5%", null, this);
            obj.set_taborder("7");
            obj.set_displaynulltext("ISBN");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_idx", "absolute", "45%", "294", null, "138", "3.67%", null, this);
            obj.set_taborder("10");
            obj.set_displaynulltext("목차");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_sum", "absolute", "3.17%", "444", null, "284", "3.5%", null, this);
            obj.set_taborder("11");
            obj.set_displaynulltext("줄거리");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg", "absolute", "43%", "738", null, "35", "40.17%", null, this);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_place", "absolute", "44.67%", "246", null, "34", "30%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_displaynulltext("위치");
            obj.set_innerdataset("@dsPlace");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("cmb_class", "absolute", "71.33%", "245", null, "34", "3.33%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_displaynulltext("분류");
            obj.set_innerdataset("@dsCategory");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("cmb_ebook", "absolute", "70.67%", "101", null, "34", "3.5%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_displaynulltext("전자책");
            obj.set_innerdataset("@dsEbook");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edit_title","value","dsBooks","bookNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmb_ebook","value","dsBooks","divCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edit_writer","value","dsBooks","bookWriter");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edit_pub","value","dsBooks","bookPub");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edit_bookdate","value","dsBooks","bookDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edit_isbn","value","dsBooks","bookIsbn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmb_place","value","dsBooks","placeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmb_class","value","dsBooks","classCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","ta_idx","value","dsBooks","bookIdx");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","ta_sum","value","dsBooks","bookSum");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("BookReg.xfdl", "Lib::Comm.xjs");
        this.registerScript("BookReg.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs"

        this.btn_reg_onclick = function(obj,e)
        {
        	this.gfn_serviceCall("regBook");
        }

        this.form_onload = function(obj,e)
        {	
        	this.dsBooks.addRow();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_reg.addEventHandler("onclick", this.btn_reg_onclick, this);

        };

        this.loadIncludeScript("BookReg.xfdl", true);

       
    };
}
)();
