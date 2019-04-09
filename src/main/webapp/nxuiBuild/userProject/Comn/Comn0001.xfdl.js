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
                this.set_name("Comn0001");
                this.set_titletext("공통코드마스터관리");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, "12", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "37", null, "12", "0.1%", null, this);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Seach", "absolute", null, "12", "45", "23", "260", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert", "absolute", null, "12", "45", "23", "210", null, this);
            obj.set_taborder("3");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete", "absolute", null, "12", "45", "23", "160", null, this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", null, "12", "45", "23", "110", null, this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset", "absolute", null, "12", "45", "23", "60", null, this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel", "absolute", null, "12", "45", "23", "10", null, this);
            obj.set_taborder("7");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "49", null, "31", "0", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA_sta_BG");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "80", null, "12", "0.2%", null, this);
            obj.set_taborder("9");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "5", "54", "93", "22", null, null, this);
            obj.set_taborder("10");
            obj.set_text("공통코드명");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BsnsNo", "absolute", "102", "54", "251", "20", null, null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "379", "52", "72", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사용유무");
            obj.style.set_font("antialias bold 10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_BsnsGb", "absolute", "456", "54", "158", "20", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_BsnsGb_innerdataset = new Dataset("cbo_BsnsGb_innerdataset", this.cbo_BsnsGb);
            cbo_BsnsGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cbo_BsnsGb_innerdataset);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static26", "absolute", "0", "102", "180", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("공통코드 마스터 내역");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "121", null, "12", "0.49%", null, this);
            obj.set_taborder("15");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2", "133", null, "197", "6", null, this);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"116\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"126\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"사업과제번호\"/><Cell col=\"2\" text=\"연구책임자\"/><Cell col=\"3\" text=\"지원기관명\"/><Cell col=\"4\" text=\"지원기관사업명\"/><Cell col=\"5\" text=\"과제명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통코드마스터관리");

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

        };

        this.loadIncludeScript("Comn0001.xfdl", true);

       
    };
}
)();
