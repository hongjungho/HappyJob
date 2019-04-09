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
                this.set_name("WorkFrame");
                this._setFormPosition(0,0,784,608);
            }
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "20", "818", null, null, this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.style.set_background("#74cfdcff");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1063", "-1", "33", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("h16");
            obj.set_visible("false");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "939", "33", "22", null, null, this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Div("div_Work", "absolute", "20", "52", null, null, "10", "0", this);
            obj.set_taborder("5");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "98.48%", "0", null, "818", "0%", null, this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2%", "1008", null, "20", "1.43%", null, this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "2.55%", "0", null, "606", "1.4%", null, this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("이달의 추천도서");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("tabpage3");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("tabpage4");
            this.Tab00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 754, 556, this.div_Work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_Work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 613, 260, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("이달의 추천도서");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 613, 260, this.Tab00.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage4");

            	}
            );
            this.Tab00.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 784, 608, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WorkFrame");
            		p.style.set_background("white");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("workMain.xfdl", "Lib::Comm.xjs");
        this.registerScript("workMain.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 
        * BUSINESS    : 넥사크로플랫폼 
        * FILE NAME   : WorkFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : WorkFrame
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

        
        this.fv_param;
        this.fv_menuId;
        this.fn_onload = function(obj,e)
        {
         var sBizUrl    = this.getOwnerFrame().biz_url;
         var sMenuNm    = this.getOwnerFrame().biz_menuText;
         this.fv_menuId = this.getOwnerFrame().biz_menuId;
         this.fv_param  = this.getOwnerFrame().biz_param;
         
         this.div_work.set_url(sBizUrl);
         //this.setZoom(80);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.addEventHandler("onactivate", this.workFrame_onactivate, this);
            this.addEventHandler("onclose", this.workFrame_onclose, this);
            this.addEventHandler("onsize", this.WorkFrame_onsize, this);

        };

        this.loadIncludeScript("workMain.xfdl", true);

       
    };
}
)();
