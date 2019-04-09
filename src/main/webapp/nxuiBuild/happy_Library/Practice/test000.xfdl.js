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
                this.set_name("test000");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edit_hello", "absolute", "5.57%", "20", null, "47", "79%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "23.83%", "20", null, "47", "58.69%", null, this);
            obj.set_taborder("1");
            obj.set_text("hello");
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
            obj = new BindItem("item1","edit_hello","value","dsBooks","bookNm");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("test000.xfdl", function(exports) {

        this.btn_onclick = function(obj,e)
        {
        	alert("누름");
        	
        }

        
        this.form_onload = function(obj,e)
        {
        	trace(this.lookup.dsBooks);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edit_hello.addEventHandler("oneditclick", this.edit_hello_oneditclick, this);
            this.Button00.addEventHandler("onclick", this.btn_onclick, this);

        };

        this.loadIncludeScript("test000.xfdl", true);

       
    };
}
)();
