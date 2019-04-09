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
                this.set_name("Rent");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,800);
            }
            this.style.set_color("black");
            this.style.set_font("10 verdana");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBook", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"bookRegdate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"256\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">getList</Col><Col id=\"sController\">book/getList.do</Col><Col id=\"inds\">dsSearch=dsSearch</Col><Col id=\"outds\">dsBooks=dsBooks</Col><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row><Row><Col id=\"svcid\">regBook</Col><Col id=\"sController\">book/regBook.do</Col><Col id=\"inds\">dsBooks=dsBooks</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row><Row><Col id=\"svcid\">getBookByTitle</Col><Col id=\"sController\">book/getBookByTitle.do</Col><Col id=\"inds\">dsArgs=dsArgs</Col><Col id=\"outds\">dsBook=dsBook</Col><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row><Row><Col id=\"svcid\">rent</Col><Col id=\"sController\">book/rent.do</Col><Col id=\"inds\">dsRent=dsRent</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsArgs", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNm\" type=\"STRING\" size=\"256\"/><Column id=\"bookWriter\" type=\"STRING\" size=\"256\"/><Column id=\"bookPub\" type=\"STRING\" size=\"256\"/><Column id=\"serviceStart\" type=\"STRING\" size=\"256\"/><Column id=\"serviceEnd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bookNm\"/><Col id=\"bookWriter\"/><Col id=\"bookPub\"/><Col id=\"serviceStart\"/><Col id=\"serviceEnd\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRent", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceNo\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/><Column id=\"serviceCd\" type=\"STRING\" size=\"256\"/><Column id=\"serviceStart\" type=\"STRING\" size=\"256\"/><Column id=\"serviceEnd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_book", "absolute", "5%", "62", null, "109", "62.33%", null, this);
            obj.set_taborder("0");
            obj.set_text("img_book");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_title", "absolute", "40.83%", "62", null, "27", "5.5%", null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_writer", "absolute", "40.83%", "102", null, "27", "5.5%", null, this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_publisher", "absolute", "40.83%", "142", null, "27", "5.5%", null, this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_stock", "absolute", "4.83%", "398", null, "322", "4.83%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsBook");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"112\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"selectcolor:gray;controlcolor:gray;\" combodisplay=\"display\"/><Cell col=\"1\" text=\"bind:bookNo\"/><Cell col=\"2\" text=\"bind:bookNm\"/><Cell col=\"3\" text=\"bind:bookRegdate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from", "absolute", "4.33%", "193", null, "36", "5.33%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_displaynulltext("원하는 대출일자를 선택해주세요.");
            obj.style.set_displaynulltextcolor("#00000080");

            obj = new Calendar("cal_to", "absolute", "4.33%", "254", null, "36", "5.33%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_displaynulltext("원하는 반납일자를 선택해주세요.");
            obj.style.set_displaynulltextcolor("#00000080");

            obj = new Button("btn_rent_search", "absolute", "69.83%", "311", null, "31", "5.33%", null, this);
            obj.set_taborder("7");
            obj.set_text("대여 가능 도서 검색");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total", "absolute", "8.83%", "313", null, "39", "70.67%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rent_confirm", "absolute", "41.33%", "738", null, "32", "41.17%", null, this);
            obj.set_taborder("9");
            obj.set_text("선택");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("stc_header", "absolute", "0%", "0", null, "43", "0%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("#339966ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 20 verdana");
            obj.set_text("   대여 도서 검색");
            this.addChild(obj.name, obj);

            obj = new Static("stc_grd_info", "absolute", "5.17%", "364", null, "29", "5%", null, this);
            obj.set_taborder("11");
            obj.set_text("        도서번호     |       도서명      |       등록일자");
            obj.style.set_background("#339966ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 10 10  righttop leftbottom");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_color("black");
            		p.style.set_font("10 verdana");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edit_title","value","dsBooks","bookNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edit_writer","value","dsBooks","bookWriter");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edit_publisher","value","dsBooks","bookPub");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Rent.xfdl", "Lib::Comm.xjs");
        this.registerScript("Rent.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs"

        this.selected = this.opener.grd_books.getSelectedRows();
        this.selBook = this.opener.dsBooks.getColumn(this.selected,"bookNm");
        this.selWriter = this.opener.dsBooks.getColumn(this.selected,"bookWriter");
        this.selRegdate = this.opener.dsBooks.getColumn(this.selected,"bookRegdate");
        this.selBookPub = this.opener.dsBooks.getColumn(this.selected,"bookPub");

        
        this.form_onload = function(obj,e)
        {
        	trace("form_rent");
        }

        this.fn_callback = function(){
        	this.total = this.dsBook.getRowCount();
        	this.stc_total.set_text(this.total + " 권 대여 가능");
        }

        this.cal_to_onchanged = function(obj,e)
        {
        	var startDate = this.cal_from.value;
        	var endDate = this.cal_to.value;
        	if(startDate > endDate){
        		alert("반납일자를 확인해주세요.");
        		return this.cal_to.set_value(startDate);
        	}
        }

        this.cal_from_onchanged = function(obj,e)
        {
        	var today = new Date();
        	var year = today.getFullYear();
        	var month = today.getMonth() + 1;
        	if(month < 10){
        		month = "0"+ month;
        	}
        	var date = today.getDate();
        	if(date < 10){
        		date = "0"+date;
        	}
        	today = year + month + date;

        	if(obj.value < today){
        		alert("대출일자를 확인해주세요.");
        	}
        }

        
        this.fn_rent_callback = function(){
        	
        	this.btn_rent_search_onclick();
        	trace("available books searched");
        	
        }

        
        this.btn_rent_search_onclick = function(obj,e)
        {
        	var startDate = this.cal_from.value;
        	var endDate = this.cal_to.value;
        	trace(startDate);
        	trace(endDate);
        	
        	if(startDate != null && endDate != null){

        		this.dsArgs.setColumn(0, "bookNm", this.selBook);
        		this.dsArgs.setColumn(0, "bookWriter", this.selWriter);
        		this.dsArgs.setColumn(0, "bookPub", this.selBookPub);
        		this.dsArgs.setColumn(0, "serviceStart", startDate);
        		this.dsArgs.setColumn(0, "serviceEnd", endDate);
        		
        		this.gfn_serviceCall("getBookByTitle");
        	} else{
        		alert("날짜를 확인해주세요.");
        		return false;
        	}
        }

        this.btn_rent_confirm_onclick = function(obj,e)
        {
        	var startDate = this.cal_from.value;
        	var endDate = this.cal_to.value;
        	var selRow = this.grd_stock.getSelectedRows();
        	var bookNo = this.dsBook.getColumn(selRow, "bookNo");
        	
        	if(startDate != null && endDate != null && selRow != null){
        	
        		this.dsRent.setColumn(0, "userNo", 1);
        		this.dsRent.setColumn(0, "bookNo", bookNo);
        		this.dsRent.setColumn(0, "serviceCd", 01);
        		this.dsRent.setColumn(0, "serviceStart", startDate);
        		this.dsRent.setColumn(0, "serviceEnd", endDate);
        		
        		this.gfn_serviceCall("rent");
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.cal_from.addEventHandler("onchanged", this.cal_from_onchanged, this);
            this.cal_to.addEventHandler("onchanged", this.cal_to_onchanged, this);
            this.btn_rent_search.addEventHandler("onclick", this.btn_rent_search_onclick, this);
            this.btn_rent_confirm.addEventHandler("onclick", this.btn_rent_confirm_onclick, this);

        };

        this.loadIncludeScript("Rent.xfdl", true);

       
    };
}
)();
