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
                this.set_name("Login");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,480,390);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div", "absolute", "0%", "0", null, null, "0%", "0", this);
            obj.set_taborder("0");
            obj.style.set_background("#2c3e50ff");
            obj.style.set_color("#45596dff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "94", "171", "320", "16", null, null, this.Div);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('Images::Class/WF_img_Line_V.png') left top");
            this.Div.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "119", "205", "216", "35", null, null, this.Div);
            obj.set_taborder("1");
            obj.set_value("Admin");
            obj.set_cssclass("WF_edt_Login");
            this.Div.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "119", "245", "216", "35", null, null, this.Div);
            obj.set_taborder("2");
            obj.set_value("●●●●●●●●");
            obj.set_displaynulltext("●●●●●●●●");
            obj.set_cssclass("WF_msk_Login");
            this.Div.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "341", "205", "79", "75", null, null, this.Div);
            obj.set_taborder("3");
            obj.set_text("Login");
            obj.set_cssclass("WF_btn_Login");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "75", "217", "37", "62", null, null, this.Div);
            obj.set_taborder("4");
            obj.style.set_background("transparent URL('Images::Class/WF_img_IDPW.png') left top");
            this.Div.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "126", "291", "182", "29", null, null, this.Div);
            obj.set_taborder("5");
            obj.set_text("ID/Password Save");
            obj.set_cssclass("WF_chk_Login");
            this.Div.addChild(obj.name, obj);
            obj = new Button("btn_close", "absolute", "91.63%", "10", null, "18", "1.67%", null, this.Div);
            obj.set_taborder("6");
            obj.set_text("X");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "69", "64", "370", "95", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('Images::Class/Login_logo2.png') left top");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#2c3e50ff");
            		p.style.set_color("#45596dff");
            		p.set_scrollbars("none");

            	}
            );
            this.Div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 480, 390, this,
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
        this.registerScript("Login.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : UserProject
        * BUSINESS    : UserProject-교육용
        * FILE NAME   : Login.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 로그인 화면
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
        this.Login_onload = function(obj,e)
        {
        	if(nexacro.Browser == "Runtime") this.Div.btn_close.set_visible(true);
        }

        /***********************************************************************************
        * Component Event
        ***********************************************************************************/

        //닫기버튼 event
        this.Div_Button01_onclick = function(obj,e)
        {
        	application.exit();
        }

        //로그인버튼 event
        this.Div_btn_login_onclick = function(obj,e)
        {
        	this.fn_login();
        }
        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        //로그인 
        this.fn_login = function()
        {
        	
             //application.gds_userInfo.setColumn(0,"USER_ID",this.div_login.txt_userId.value);
         	 //application.gds_userInfo.setColumn(0,"USER_NM","사용자");
        	
        	
        	if(nexacro.Browser == "Runtime")
        	{
        		var oArgs = "close";
            	Iject.popClose(this,oArgs);

        	}
        	else
        	{
        	    Iject.setSeprateFrame();	//로그인 처리후 메인 프레임 세팅
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Login_onload, this);
            this.Div.btn_login.addEventHandler("onclick", this.Div_btn_login_onclick, this);
            this.Div.btn_close.addEventHandler("onclick", this.Div_Button01_onclick, this);

        };

        this.loadIncludeScript("Login.xfdl", true);

       
    };
}
)();
