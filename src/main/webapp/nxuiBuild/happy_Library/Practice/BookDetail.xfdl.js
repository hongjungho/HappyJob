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
                this.set_name("BookDetail");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,800);
            }
            this.style.setStyleValue("color", "focused", "black");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_bookdetail", "absolute", "0%", "88", null, "692", "0.17%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("img_book_cover", "absolute", "4.34%", "7", null, "337", "56.26%", null, this.div_bookdetail);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Edit("edit_title", "absolute", "44.07%", "8", null, "54", "2.34%", null, this.div_bookdetail);
            obj.set_taborder("1");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 20 Dotum");
            obj.set_readonly("true");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Edit("edit_writer", "absolute", "45.91%", "65", "97", "20", null, null, this.div_bookdetail);
            obj.set_taborder("2");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.set_readonly("true");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Edit("edit_publisher", "absolute", "64.94%", "65", "107", "20", null, null, this.div_bookdetail);
            obj.set_taborder("3");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.set_readonly("true");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "94.99%", "64", "24", "23", null, null, this.div_bookdetail);
            obj.set_taborder("6");
            obj.set_text("출간");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "44.57%", "54", "332", "2", null, null, this.div_bookdetail);
            obj.set_taborder("7");
            obj.style.set_background("gray");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "72.29%", "140", null, "20", "20.03%", null, this.div_bookdetail);
            obj.set_taborder("8");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "77.96%", "140", null, "20", "10.35%", null, this.div_bookdetail);
            obj.set_taborder("9");
            obj.set_text("에 위치");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new TextArea("ta_index", "absolute", "48.41%", "200", null, "142", "4.17%", null, this.div_bookdetail);
            obj.set_taborder("12");
            obj.set_wordwrap("char");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080");
            obj.set_readonly("true");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new TextArea("ta_synopsis", "absolute", "4.34%", "386", null, "279", "2.17%", null, this.div_bookdetail);
            obj.set_taborder("13");
            obj.set_wordwrap("char");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "6.01%", "340", null, "60", "73.96%", null, this.div_bookdetail);
            obj.set_taborder("15");
            obj.set_text("줄거리 및 내용");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("stt_index", "absolute", "48.91%", "152", null, "60", "31.05%", null, this.div_bookdetail);
            obj.set_taborder("16");
            obj.set_text("목차");
            obj.style.set_font("bold 12 Dotum");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Button("btn_rent", "absolute", "86.48%", "94", null, "32", "1.5%", null, this.div_bookdetail);
            obj.set_taborder("18");
            obj.set_text("대여 신청");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "49.58%", "99", "48", "23", null, null, this.div_bookdetail);
            obj.set_taborder("20");
            obj.set_text("분류");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "49.58%", "138", "48", "23", null, null, this.div_bookdetail);
            obj.set_taborder("21");
            obj.set_text("ISBN");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "55.93%", "101", null, "20", "33.72%", null, this.div_bookdetail);
            this.div_bookdetail.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.style.set_itembackground("transparent");
            obj.style.set_itemborder("1 none #808080ff");
            obj.style.set_buttonsize("0");
            obj.style.set_displaynulltextcolor("black");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_innerdataset("@dsCategory");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_readonly("true");
            obj = new Edit("Edit01", "absolute", "56.09%", "140", null, "20", "28.55%", null, this.div_bookdetail);
            obj.set_taborder("23");
            obj.style.set_selectcolor("black");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.set_readonly("true");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "80.63%", "65", "80", "20", null, null, this.div_bookdetail);
            obj.set_taborder("24");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #808080");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "58.6%", "65", null, "20", "33.72%", null, this.div_bookdetail);
            obj.set_taborder("25");
            obj.set_text("저");
            this.div_bookdetail.addChild(obj.name, obj);
            obj = new CheckBox("chk_ebook", "absolute", "71.62%", "102", null, "20", "15.86%", null, this.div_bookdetail);
            obj.set_taborder("26");
            obj.set_text("ebook");
            this.div_bookdetail.addChild(obj.name, obj);

            obj = new Static("stt_bookdetail_top", "absolute", "0%", "0", null, "71", "0%", null, this);
            obj.set_taborder("1");
            obj.set_text("     도서 상세 페이지");
            obj.style.set_background("#339966ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 20 휴먼매직체");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 692, this.div_bookdetail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_bookdetail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.setStyleValue("color", "focused", "black");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_bookdetail.edit_title","value","dsBooks","bookNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_bookdetail.edit_writer","value","dsBooks","bookWriter");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_bookdetail.edit_publisher","value","dsBooks","bookPub");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_bookdetail.Edit02","value","dsBooks","bookDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_bookdetail.Combo00","value","dsBooks","classCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_bookdetail.Edit01","value","dsBooks","bookIsbn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_bookdetail.Edit00","value","dsBooks","placeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_bookdetail.ta_index","value","dsBooks","bookIdx");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_bookdetail.ta_synopsis","value","dsBooks","bookSum");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BookDetail.xfdl", function(exports) {
        this.div_bookdetail_btn_rent_onclick = function(obj,e)
        {
        	application.open("rent", "Practice::Rent.xfdl", this.getOwnerFrame(), {mode:"modeless", ds:this.dsBooks}, "showtitlebar=true showstatusbar=false", 400, 200);
        }

        this.form_onload = function(obj,e)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_bookdetail.edit_title.addEventHandler("oneditclick", this.div_bookdetail_edit_title_oneditclick, this);
            this.div_bookdetail.btn_rent.addEventHandler("onclick", this.div_bookdetail_btn_rent_onclick, this);

        };
        this.loadCss("Css::book_style.css");

        this.loadIncludeScript("BookDetail.xfdl", true);

       
    };
}
)();
