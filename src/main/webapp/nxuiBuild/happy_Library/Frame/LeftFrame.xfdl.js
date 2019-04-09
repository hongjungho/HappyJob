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
                this.set_name("LeftFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,200,958);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_left", "absolute", "0", "0", "200", null, null, "0", this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "173", "230", "42", null, null, this.div_left);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.set_cssclass("WF_div_Left");
            this.div_left.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "6", "181", "146", "24", null, null, this.div_left);
            obj.set_taborder("2");
            obj.set_text("Menu");
            obj.set_cssclass("font_15ptbold_White");
            this.div_left.addChild(obj.name, obj);
            obj = new Grid("grd_tree", "absolute", "-1", "215", "231", null, null, "1", this.div_left);
            obj.set_cssclass("grd_LF_Tree");
            obj.set_taborder("3");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.style.set_background("transparent");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/></Columns><Rows><Row size=\"37\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"align: ;padding:EXPR(lev=='1'?&quot;0 0 0 -5&quot;:&quot;&quot;);background:EXPR(lev=='1'?&quot;URL('img::grd_LF_TreeBg2.png') stretch 15,15&quot;:&quot;&quot;);background2:EXPR(lev=='1'?&quot;URL('img::grd_LF_TreeBg2.png') stretch 15,15&quot;:&quot;&quot;);color:EXPR(lev=='1'?&quot;#8192aaff&quot;:&quot;&quot;);color2:EXPR(lev=='1'?&quot;#8192aaff&quot;:&quot;&quot;);font:EXPR(lev=='1'?&quot;9 Gulim&quot;:&quot;&quot;);selectbackground:EXPR(lev=='1'?&quot;URL('img::grd_LF_TreeBg_O.png') stretch 15,15&quot;:&quot;&quot;);selectfont:EXPR(lev=='1'?&quot;9 Gulim&quot;:&quot;&quot;);\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\" tooltiptext=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.div_left.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "0", "0", "200", "215", null, null, this.div_left);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.style.set_background("#339966ff");
            this.div_left.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 200, 215, this.div_left.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div01");
            		p.style.set_background("#339966ff");

            	}
            );
            this.div_left.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 200, 0, this.div_left,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.div_left.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 200, 958, this,
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
        this.addIncludeScript("LeftFrame.xfdl", "Lib::Comm.xjs");
        this.registerScript("LeftFrame.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        this.LeftFrame_onload = function(obj,e)
        {
        	this.ds_menu.assign(application.gds_menu);
        }

        
        this.Static00_onclick = function(obj,e)
        {
        	
        }

        this.fn_treeClick = function(obj,e)
        {
        	var oObj = {
                  ds    : this.ds_menu,   // 메뉴 dataset 
                  nRow  : e.row,          // 선택된 
                  oArgs : []              //넘길 argument
            };
            
            Iject.Mdi.call(this,oObj);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LeftFrame_onload, this);
            this.div_left.grd_tree.addEventHandler("oncellclick", this.fn_treeClick, this);

        };

        this.loadIncludeScript("LeftFrame.xfdl", true);

       
    };
}
)();
