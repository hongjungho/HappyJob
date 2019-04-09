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
            this.style.set_border("0 none #339966ff");
            this.style.set_color("#339966ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "100%", "0%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#339966ff");
            obj.style.set_border("0 none #339966ff");
            obj.style.set_color("#80ff00ff");
            this.addChild(obj.name, obj);
            obj = new Button("recomBK", "absolute", "120", "0", "150", "50", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("추천 도서");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 14 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("SBK", "absolute", "27.34%", "0", "150", "50", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("일반 도서 검색");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 14 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("SEBK", "absolute", "42.97%", "0", "150", "50", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("전자 도서 검색");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 14 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("MyPage", "absolute", "58.59%", "0", "150", "50", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("마이페이지");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 14 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("ADPage", "absolute", null, "0%", "150", "50", "11.13%", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("관리자페이지");
            obj.style.set_background("#339966ff");
            obj.style.set_border("1 solid #339966ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 14 Dotum");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#339966ff");
            		p.style.set_border("0 none #339966ff");
            		p.style.set_color("#80ff00ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("antiquewhite");
            		p.style.set_border("0 none #339966ff");
            		p.style.set_color("#339966ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MenuBar.xfdl", "Lib::Comm.xjs");
        this.registerScript("MenuBar.xfdl", function(exports) {
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

        this.Div00_recomBK_onclick = function(obj,e)
        {
        	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(true);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(200);	
        	var sURL = "Practice::Main.xfdl";
            this.gfn_main(sURL);
        	var sURL = "Frame::LeftFrame.xfdl";
            this.gfn_left(sURL);
        }

        this.Div00_SBK_onclick = function(obj,e)
        {
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	var sURL = "Practice::BookSearch.xfdl";
            this.gfn_main(sURL);
        	var sURL = "Frame::LeftFrame_1.xfdl";
            this.gfn_left(sURL);
        	
        }

        
        this.Div00_SEBK_onclick = function(obj,e)
        {
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(true);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(200);	
        	var sURL = "Practice::SearchE.xfdl";
            this.gfn_main(sURL);
        	var sURL = "Frame::LeftFrame_2.xfdl";
            this.gfn_left(sURL);
        }

        this.Div00_MyPage_onclick = function(obj,e)
        {
        	// 사이드메뉴바 visible
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(true);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(200);  

        	// 메인프레임 이동 경로
        	var sURL = "Practice::Mypage.xfdl";
        	this.gfn_main(sURL);
        	
        	//사이드메뉴바 이동
        	var sURL = "Practice::Mypageside.xfdl";
        	this.gfn_left(sURL);
        	
        }

        this.Div00_ADPage_onclick = function(obj,e)
        {
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	var sURL = "Practice::admin_book.xfdl";
            this.gfn_main(sURL);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.TopFrameLib_onload, this);
            this.Div00.recomBK.addEventHandler("onclick", this.Div00_recomBK_onclick, this);
            this.Div00.SBK.addEventHandler("onclick", this.Div00_SBK_onclick, this);
            this.Div00.SEBK.addEventHandler("onclick", this.Div00_SEBK_onclick, this);
            this.Div00.MyPage.addEventHandler("onclick", this.Div00_MyPage_onclick, this);
            this.Div00.ADPage.addEventHandler("onclick", this.Div00_ADPage_onclick, this);

        };

        this.loadIncludeScript("MenuBar.xfdl", true);

       
    };
}
)();
