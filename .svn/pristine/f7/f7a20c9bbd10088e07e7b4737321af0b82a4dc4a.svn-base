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
            obj = new Div("Div01", "absolute", "0", null, "1024", "894", null, "-126", this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("Practice::Main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "1024", "52", null, null, this);
            obj.set_taborder("1");
            obj.set_url("Frame::TopFrameLib.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "52", "1024", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div03");
            obj.set_url("Frame::MenuBar.xfdl");
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
            this._addPreloadList("fdl", "Practice::Main.xfdl");
            this._addPreloadList("fdl", "Frame::TopFrameLib.xfdl");
            this._addPreloadList("fdl", "Frame::MenuBar.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("FrameTest.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
