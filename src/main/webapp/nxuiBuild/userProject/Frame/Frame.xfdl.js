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
                this.set_name("Frame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1280,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "230", null, null, "2", this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("Frame::LeftFrame.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "230", "0", "1050", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_url("Frame::TopFrame.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1280, 768, this,
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
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Frame::LeftFrame.xfdl");
            this._addPreloadList("fdl", "Frame::TopFrame.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Frame.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
