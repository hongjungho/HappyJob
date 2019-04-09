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
                this.set_name("TopFrameLib");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,50);
            }
            this.style.set_background("antiquewhite");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "0%", "0", null, "75", "-8.4%", null, this);
            obj.set_taborder("0");
            obj.set_image("URL('theme://Bottom.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("antiquewhite");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("BottomFrameLib.xfdl", "Lib::Comm.xjs");
        this.registerScript("BottomFrameLib.xfdl", function(exports) {
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
        this.TopFrameLib_onload = function(obj,e)
        {
        	
        }

        /*===============================================================================
        * Component 관련 Script
        *=============================================================================*/

        //로그인 버튼 클릭시
        this.btn_login_onclick = function(obj,e)
        { 
        	var sURL = "Practice::login.xfdl";
            this.gfn_main(sURL);
        	//this.go("Practice::login.xfdl");
        	//this.set_url("Practice::login.xfdl");
        	//this.WorkFrame.set_url("Practice::login.xfdl");
        }

        //아이디/비번찾기 클릭시

        this.btn_findID_onclick = function(obj,e)
        {
        	var sURL = "Practice::find_ID.xfdl";
            this.gfn_main(sURL);
        }

        
        //로그아웃
        this.btn_logout_onclick = function(obj,e)
        {
        	Iject.logout();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.TopFrameLib_onload, this);

        };

        this.loadIncludeScript("BottomFrameLib.xfdl", true);

       
    };
}
)();
