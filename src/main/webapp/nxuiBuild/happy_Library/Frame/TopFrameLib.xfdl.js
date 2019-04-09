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
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_findID", "absolute", null, "14", "152", "29", "110", null, this);
            obj.set_taborder("2");
            obj.set_text("아이디/비밀번호찾기");
            obj.set_cssclass("btn_TF_Logout");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login", "absolute", null, "14", "67", "29", "272", null, this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("btn_TF_Logout");
            obj.style.set_background("#ff9900ff");
            obj.style.set_border("1 solid #ff9900ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "14", "81", "29", "19", null, this);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_Logout");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Main", "absolute", "0", "0", "263", "52", null, null, this);
            obj.set_taborder("6");
            obj.style.set_image("URL('theme://images/icon.png')");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("white");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TopFrameLib.xfdl", "Lib::Comm.xjs");
        this.registerScript("TopFrameLib.xfdl", function(exports) {
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
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_width(1024);	
        	var sURL = "Practice::login.xfdl";
            this.gfn_main(sURL);
        	//this.go("Practice::login.xfdl");
        	//this.set_url("Practice::login.xfdl");
        	//this.WorkFrame.set_url("Practice::login.xfdl");
        }

        //아이디/비번찾기 클릭시
        this.btn_findID_onclick = function(obj,e)
        {
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_width(1024);	
        	var sURL = "Practice::find_ID.xfdl";
            this.gfn_main(sURL);
        }

        
        //로그아웃
        this.btn_logout_onclick = function(obj,e)
        {
        	Iject.logout();
        }
        /*
        this.Main_onclick = function(obj:Button, e:nexacro.ClickEventInfo)
        {
        	var sURL = "Practice::Main.xfdl";
            this.gfn_main(sURL);
        }*/

        //Home버튼클릭시
        this.Main_onclick = function(obj,e)
        {
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_width(1024);	
        	var sURL = "Practice::Main.xfdl";
            this.gfn_main(sURL);
        }

        /*
        //좌측메뉴 펼침 접힙 실행
        this.Main_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	Iject.Mdi.leftMenuAction(this,obj);
        }
        *//*
        this.Main_onchange =  function(obj:Button, e:nexacro.TabMouseEventInfo)
        {
        	application.av_mdiFrameSet[LeftFrame].form.close();
        }*/
        /*
        this.Main_onclose = function(obj:Button, e:nexacro.TabMouseEventInfo)
        {
        	var sURL = "Frame::LeftFrame.xfdl";
            this.gfn_main(sURL);
        }*/

        /*
        //page닫기 버튼 클릭 시 (page 삭제하고, 열려있는 화면 닫기)
        this.Main_onextrabuttonclick = function(obj:Tab, e:nexacro.TabMouseEventInfo)
        {
         var objPages = obj.tabpages;
         var sMenuId  = objPages[e.index].name;
         
         //1. MDI Close
         application.av_mdiFrameSet[sMenuId].form.close();
         
         //2. Page Close
         obj.removeTabpage(e.index);
         application.gv_activeMenuId = '';
         
         //3. openMenu Delete
         var nFindRow = application.gds_openMenu.findRow("menuId", sMenuId);
         application.gds_openMenu.deleteRow(nFindRow);
         if (application.gds_openMenu.rowcount <= 0){
          //intro 화면 open하기
         }
         */
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.TopFrameLib_onload, this);
            this.btn_findID.addEventHandler("onclick", this.btn_findID_onclick, this);
            this.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);
            this.Main.addEventHandler("onclick", this.Main_onclick, this);

        };

        this.loadIncludeScript("TopFrameLib.xfdl", true);

       
    };
}
)();
