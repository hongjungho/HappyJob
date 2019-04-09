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
                this.set_name("Aplyu0002");
                this.set_titletext("교육별 수강생 내역");
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

            obj = new Button("btn_Seach", "absolute", null, "12", "45", "23", "60", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel", "absolute", null, "12", "45", "23", "10", null, this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "54", "180", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("교육목록");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "73", null, "12", "0.49%", null, this);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2", "85", null, "279", "6", null, this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"174\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"교육명\"/><Cell col=\"1\" text=\"교육기관\"/><Cell col=\"2\" text=\"신청일시\"/><Cell col=\"3\" text=\"취소일시\"/><Cell col=\"4\" text=\"결제여부\"/><Cell col=\"5\" text=\"결제일시\"/><Cell col=\"6\" text=\"수업등록상태코드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "2", "405", null, null, "6", "20", this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"113\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"158\"/><Column size=\"40\"/><Column size=\"136\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"학생일련번호\"/><Cell col=\"1\" text=\"학생명\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"신청일시\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"IT경력시작년도\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "374", "180", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("수강생 목록");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "393", null, "12", "0.49%", null, this);
            obj.set_taborder("9");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_background("#ff000033");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("교육별 수강생 내역");

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

        this.loadIncludeScript("Stult0001.xfdl", true);

       
    };
}
)();
