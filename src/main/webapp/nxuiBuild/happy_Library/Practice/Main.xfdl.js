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
                this.set_name("Main");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">저자</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">서명</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">출판사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "3", "1024", "847", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "57", "125", "657", "219", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_image("URL('E:/Saved Pictures/주석 2019-03-18 180633.jpg')");
            obj.set_repeatcount("-1");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "57", "73", "902", "50", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.style.set_border("2 solid #339966ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "0.67%", "3", null, "40", "76.28%", null, this.Div00.Div01);
            this.Div00.Div01.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("전체");
            obj.set_innerdataset("@ds_search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Edit("Edit00", "absolute", "23.72%", "3", null, "40", "8.69%", null, this.Div00.Div01);
            obj.set_taborder("1");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Button("Search", "absolute", "91.31%", "3", null, "40", "0.78%", null, this.Div00.Div01);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer02", "absolute", "5.76%", "364", null, "204", "6.25%", null, this.Div00);
            obj.set_taborder("6");
            obj.set_image("URL('theme://main bot.png')");
            obj.set_repeatcount("0");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer03", "absolute", "0%", "761", null, "84", "0.2%", null, this.Div00);
            obj.set_taborder("7");
            obj.set_image("URL('theme://images/Bottom.png')");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "9.47%", "370", null, "38", "77.15%", null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("신작자료");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 14 Dotum,Arial Black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "41.31%", "370", null, "38", "42.38%", null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("연령대별 인기도서");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 14 Dotum,Arial Black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "60.84%", "370", null, "38", "25.78%", null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("성별 인기도서");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 14 Dotum,Arial Black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "76.17%", "370", null, "38", "10.45%", null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("사서추천자료");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 14 Dotum,Arial Black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "22.56%", "370", null, "38", "61.13%", null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("지난달 인기도서");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 14 Dotum,Arial Black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "82.23%", "171", null, "42", "8.3%", null, this.Div00);
            obj.set_taborder("13");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "68.55%", "125", null, "221", "6.45%", null, this.Div00);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.style.set_color("#333333ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "21", "9", null, "97", "130", null, this.Div00.Div02);
            obj.set_taborder("4");
            obj.style.set_image("URL('theme://주석 2019-03-18 180259.jpg')");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "140", "9", null, "97", "11", null, this.Div00.Div02);
            obj.set_taborder("5");
            obj.style.set_image("URL('theme://주석 2019-03-18 180338.jpg')");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "21", "115", null, "97", "130", null, this.Div00.Div02);
            obj.set_taborder("6");
            obj.style.set_image("URL('theme://주석 2019-03-18 180355.jpg')");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "141", "115", null, "97", "10", null, this.Div00.Div02);
            obj.set_taborder("7");
            obj.style.set_image("URL('theme://주석 2019-03-18 180412.jpg')");
            obj.style.set_border("1 solid #339966ff");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer01", "absolute", "8.2%", "549", null, "174", "7.91%", null, this.Div00);
            obj.set_taborder("15");
            obj.set_image("URL('theme://bookplus.png')");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 902, 50, this.Div00.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div01");
            		p.style.set_border("2 solid #339966ff");

            	}
            );
            this.Div00.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 256, 279, this.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.style.set_color("#333333ff");

            	}
            );
            this.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 847, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");
            		p.set_dragscrolltype("both");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 768, this,
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
            this.Div00.ImageViewer00.addEventHandler("onclick", this.Div00_ImageViewer00_onclick, this);
            this.Div00.Div02.Button03.addEventHandler("onclick", this.Div00_Div02_Button03_onclick, this);

        };

        this.loadIncludeScript("Main.xfdl", true);

       
    };
}
)();
