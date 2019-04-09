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
                this.set_name("SampleForAddress");
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

            obj = new Static("sta_webAddress", "absolute", "0", "30", "187", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("주소검색(샘플)");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "1.95%", "112", null, "86", "62.5%", null, this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "1.95%", "64", null, "32", "86.43%", null, this);
            obj.set_taborder("3");
            obj.set_text("주소검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "41.02%", "120", null, "29", "47.95%", null, this);
            obj.set_taborder("4");
            obj.set_text("우편번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_zoneCode", "absolute", "48.44%", "115", null, "34", "29.59%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "41.02%", "168", null, "29", "47.95%", null, this);
            obj.set_taborder("6");
            obj.set_text("기본주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address", "absolute", "48.44%", "163", null, "34", "16.89%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SampleForAddress.xfdl", "Lib::Comm.xjs");
        this.registerScript("SampleForAddress.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 
        * BUSINESS    : 샘플주소검색-교육용
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

        this.SampleForAddress_onload = function(obj,e)
        {
        	
        }

        //주소검색 버튼 클릭시 이벤트
        this.Button00_onclick = function(obj,e)
        {
        	this.WebBrowser00.set_url("http://localhost:8080/crudexample/eogvframework/com/jusoSearch.do"); 
        }

        
        //웹 페이지에서 값 변동시 메인창으로 알리기 위한 이벤트
        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	
        	var objWebForm	= this.WebBrowser00.getProperty("document").getProperty("title");
        	
        	if(objWebForm == "주소검색"){
        		return "";
        	}
        	
        	var objArray = new Array();

        	objArray = objWebForm.split("_",2);
        	
        	this.edt_zoneCode.set_value(objArray[0]);
        	this.edt_address.set_value(objArray[1]);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SampleForAddress_onload, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("SampleForAddress.xfdl", true);

       
    };
}
)();
