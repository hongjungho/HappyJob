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
                this.set_name("leftMenuFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,240,668);
            }
            this.style.set_background("aquamarine");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_menu", "absolute", "3.33%", "9", null, "651", "3.75%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"179\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"menuNm\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" text=\"bind:menuNm\" treestartlevel=\"1\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 240, 668, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("aquamarine");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("leftMenuFrame.xfdl", function(exports) {

           //1. 정의 : Grid에서 menu douclick시 화면 조회 script개발

        //메뉴클릭 시 > 업무화면 open
        this.grd_menu_oncelldblclick = function(obj,e)
        {
         var nChildCnt = obj.getTreeChildCount(e.row);
         if (nChildCnt == 0){
          var sMenuId = application.gds_menu.getColumn(e.row, "menuId");
          application.afn_menuOpen(sMenuId);
         }
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_menu.addEventHandler("oncelldblclick", this.grd_menu_oncelldblclick, this);

        };

        this.loadIncludeScript("leftMenuFrame.xfdl", true);

       
    };
}
)();
