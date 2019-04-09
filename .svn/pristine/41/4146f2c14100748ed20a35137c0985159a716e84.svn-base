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
                this.set_name("mainTest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "11.23%", "68", null, "207", "53.91%", null, this);
            obj.set_taborder("0");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10.55%", "312", null, "60", "77.73%", null, this);
            obj.set_taborder("1");
            obj.set_text("Test1111");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "19.73%", "338", null, "60", "68.55%", null, this);
            obj.set_taborder("2");
            obj.set_text("test222222");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "30.96%", "97", null, "225", "11.72%", null, this);
            obj.set_taborder("3");
            obj.set_text("ddsadasd");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "30.37%", "268", null, "118", "57.13%", null, this);
            obj.set_taborder("4");
            obj.set_text("retest");
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
        this.registerScript("mainTest.xfdl", function(exports) {

        this.Static03_onclick = function(obj,e)
        {
        	
        }

        this.Static04_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);

        };

        this.loadIncludeScript("mainTest.xfdl", true);

       
    };
}
)();
