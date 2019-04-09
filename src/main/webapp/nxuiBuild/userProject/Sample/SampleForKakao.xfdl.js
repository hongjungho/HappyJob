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
                this.set_name("SampleForKakao");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "1.95%", "112", null, "157", "71.09%", null, this);
            obj.set_taborder("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_webAddress", "absolute", "0", "30", "187", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("카카오로그인");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.95%", "288", null, "36", "80.47%", null, this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "36.33%", "152", null, "44", "34.38%", null, this);
            obj.set_taborder("4");
            obj.style.set_image("URL('Images::Pictures/kakao_account_login_btn_medium_wide.png')");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01", "absolute", "67.48%", "141", null, "65", "20.41%", null, this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "40.14%", "237", null, "39", "41.02%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "60.25%", "242", null, "25", "28.42%", null, this);
            obj.set_taborder("7");
            obj.set_text("님 안녕하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "40.14%", "304", null, "25", "43.75%", null, this);
            obj.set_taborder("8");
            obj.set_text("현재 계정 검증여부 ");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "53.32%", "299", null, "34", "32.42%", null, this);
            obj.set_taborder("9");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("SampleForKakao.xfdl", function(exports) {

        
        this.SampleForKakao_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url("http://localhost:8080/crudexample/eogvframework/com/kakaologin.do"); 
        }

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	//var objWebForm	= this.WebBrowser00.getProperty("document").getProperty("title");
        	
        	//this.Static00.set_text(objWebForm+"님 환영합니다.");
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.WebBrowser01.set_url("http://localhost:8080/crudexample/eogvframework/com/kakaologinForm.do"); 
        }

        this.WebBrowser01_onusernotify = function(obj,e)
        {
        	var objWebForm	= this.WebBrowser01.getProperty("document").getProperty("title");
        	
        	var objArray = new Array();

        	objArray = objWebForm.split("_",2);
        	
        	this.Edit00.set_value(objArray[0]);

        	this.Button01.set_text(objArray[1]); 
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SampleForKakao_onload, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.WebBrowser01.addEventHandler("onusernotify", this.WebBrowser01_onusernotify, this);

        };

        this.loadIncludeScript("SampleForKakao.xfdl", true);

       
    };
}
)();
