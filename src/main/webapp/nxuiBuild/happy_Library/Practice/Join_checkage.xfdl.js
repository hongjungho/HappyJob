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
                this.set_name("Join");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "0", null, null, "1.76%", "-238", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "200", "29", null, "39", "70.9%", null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("회원가입");
            obj.style.set_color("#339966ff");
            obj.style.set_font("bold 16 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "136", "130", "819", "274", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            obj.style.set_font("bold 11 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "0", "0", null, null, this.Div00.Div02);
            obj.set_taborder("17");
            obj.set_text("이용약관");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("adult_join", "absolute", "106", "14", "223", "250", null, null, this.Div00.Div02);
            obj.set_taborder("18");
            obj.style.set_image("URL('theme://images/어린이회원가입.png')");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("foreign_join00", "absolute", "513", "14", "200", "250", null, null, this.Div00.Div02);
            obj.set_taborder("19");
            obj.style.set_image("URL('theme://images/외국인.png')");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("kids_join01", "absolute", "308", "14", "200", "250", null, null, this.Div00.Div02);
            obj.set_taborder("20");
            obj.style.set_image("URL('theme://images/일반회원가입.png')");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #ffffffff");
            this.Div00.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 596, 274, this.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");
            		p.style.set_font("bold 11 Dotum");

            	}
            );
            this.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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
        this.registerScript("Join_checkage.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : UserProject
        * BUSINESS    : UserProject-교육용
        * FILE NAME   : Login.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 회원가입 화면
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.Join_onload = function(obj,e)
        {
        	//if(nexacro.Browser == "Runtime") this.Div.btn_close.set_visible(true);
        	Iject.formOnload(obj);			//폼 초기화 : 필요시 구현
        }

        this.Div00_Div02_adult_join_onclick = function(obj,e)
        {
        	this.go("Practice::Join_agree.xfdl");
        }

        this.Div00_Div02_kids_join00_onclick = function(obj,e)
        {
        	this.go("Practice::Join_agree.xfdl");
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Div02.adult_join.addEventHandler("onclick", this.Div00_Div02_adult_join_onclick, this);
            this.Div00.Div02.foreign_join00.addEventHandler("onclick", this.Div00_Div02_kids_join00_onclick, this);
            this.Div00.Div02.kids_join01.addEventHandler("onclick", this.Div00_Div02_kids_join00_onclick, this);

        };

        this.loadIncludeScript("Join_checkage.xfdl", true);

       
    };
}
)();
