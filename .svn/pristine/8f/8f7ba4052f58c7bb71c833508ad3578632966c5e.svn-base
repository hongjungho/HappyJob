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
                this.set_name("TopFrame");
                this._setFormPosition(0,0,1024,30);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftMenuOpen", "absolute", "0", "0", "34", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_LeftMenuOpen");
            this.addChild(obj.name, obj);

            obj = new Static("stNm", "absolute", null, "0", "157", "29", "152", null, this);
            obj.set_taborder("2");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_TF_Admin");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "0", "67", "29", "45", null, this);
            obj.set_taborder("3");
            obj.set_text("Log-out");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help", "absolute", null, "0", "45", "29", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("Help");
            obj.set_cssclass("btn_TF_Admin");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 30, this,
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
        this.addIncludeScript("TopFrame.xfdl", "Lib::Comm.xjs");
        this.registerScript("TopFrame.xfdl", function(exports) {
        /********************************************************************************
         * Name			: TopFrame.xfdl
         * Title		: 상단화면
         * Desc			: 사용자 , Log-out , 도움말 , 좌측 메뉴 버튼
         * 작성자		: 
         * 작성일		: 2018.01.20
         * 변경사항	: 
         *******************************************************************************/

        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        /*===============================================================================
        * Form 관련 Script
        *=============================================================================*/

        //form onload
        this.TopFrame_onload = function(obj,e)
        {
        	
        }

        /*===============================================================================
        * Component 관련 Script
        *=============================================================================*/

        //좌측메뉴 펼침 접힙 실행
        this.btn_leftMenuOpen_onclick = function(obj,e)
        {
        	Iject.Mdi.leftMenuAction(this,obj);
        }

        //로그아웃
        this.btn_logout_onclick = function(obj,e)
        {
        	Iject.logout();
        }

        this.fn_set = function()
        {

           this.stNm.set_text(Iject.$["usernm"] + " <b v='false'>님 환영합니다.</b>");
        }

        
        //도움말
        this.btn_help_onclick = function(obj,e)
        {
        	this.alert("도움말은 준비중 입니다.");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.TopFrame_onload, this);
            this.btn_leftMenuOpen.addEventHandler("onclick", this.btn_leftMenuOpen_onclick, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);
            this.btn_help.addEventHandler("onclick", this.btn_help_onclick, this);

        };

        this.loadIncludeScript("TopFrame.xfdl", true);

       
    };
}
)();
