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
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_pwd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/loginForm.do</Col><Col id=\"svcid\">loginForm</Col><Col id=\"inds\"/><Col id=\"outds\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"user_no\" type=\"INT\" size=\"3\"/><Column id=\"user_name\" type=\"STRING\" size=\"10\"/><Column id=\"user_pwd\" type=\"STRING\" size=\"30\"/><Column id=\"user_ispwd\" type=\"STRING\" size=\"10\"/><Column id=\"user_phone\" type=\"STRING\" size=\"10\"/><Column id=\"user_isphone\" type=\"INT\" size=\"11\"/><Column id=\"author_cd\" type=\"STRING\" size=\"5\"/><Column id=\"brr_cdnum\" type=\"STRING\" size=\"10\"/><Column id=\"user_addr\" type=\"STRING\" size=\"50\"/><Column id=\"user_birth\" type=\"STRING\" size=\"10\"/><Column id=\"user_gender\" type=\"STRING\" size=\"1\"/><Column id=\"user_email\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div", "absolute", "0%", "-8", null, null, "0%", "8", this);
            obj.set_taborder("0");
            obj.style.set_background("white");
            obj.style.set_color("#45596dff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "100", "160", "652", "16", null, null, this.Div);
            obj.set_taborder("0");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "200", "101", null, "51", "594", null, this.Div);
            obj.set_taborder("6");
            obj.set_text("로그인");
            obj.style.set_color("black");
            obj.style.set_font("bold 20 Dotum");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "200", "479", "599", "35", null, null, this.Div);
            obj.set_taborder("7");
            obj.set_text("●  개인정보를 관리할 수 있습니다.");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "200", "514", "599", "35", null, null, this.Div);
            obj.set_taborder("8");
            obj.set_text("●  대출상황 조회 및 대출연장을 하실 수 있습니다");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "200", "550", "599", "35", null, null, this.Div);
            obj.set_taborder("9");
            obj.set_text("●  개인공지 및 각종 서비스 신청현황을 확인할 수 있습니다.");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00", "fixed", "200", "157", "600", "300", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.style.set_border("3 solid #80ff00ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "50", "27", null, "16", "491", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("11 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "50", "50", "500", "34", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_cssclass("WF_edt_Login");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "50", "108", null, "16", "474", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("11 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit_pwd", "absolute", "50", "132", "500", "34", null, null, this.Div00);
            obj.set_taborder("2");
            obj.getSetter("vlaue").set("●●●●●●●●●");
            obj.set_displaynulltext("●●●●●●●●");
            obj.set_cssclass("WF_msk_Login");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "119", "228", "69", "34", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("로그인");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_background("#ff6600ff");
            obj.style.set_border("1 solid #ff6600ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_Join", "absolute", "209", "228", "69", "34", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("회원가입");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_color("#808080ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_FindID", "absolute", "300", "228", "69", "34", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("아이디찾기");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_color("#808080ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_FindPWD", "absolute", "390", "227", "89", "34", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("비밀번호찾기");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_color("#808080ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "50", "179", "182", "28", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("아이디 비밀번호 저장");
            obj.set_cssclass("WF_chk_Login");
            this.Div00.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox01", "absolute", "218", "179", "182", "28", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("비밀번호 보이기");
            obj.set_cssclass("WF_chk_Login");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 480, 390, this.Div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("white");
            		p.style.set_color("#45596dff");
            		p.set_scrollbars("none");

            	}
            );
            this.Div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 613, 371, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");
            		p.style.set_border("3 solid #80ff00ff");

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
            obj = new BindItem("item0","Div00.Edit00","value","dsUser","user_id");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Edit_pwd","value","dsUser","user_pwd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("login.xfdl", "Lib::Comm.xjs");
        this.registerScript("login.xfdl", function(exports) {
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

        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.Login_onload = function(obj,e)
        {
        	Iject.formOnload(obj);			//폼 초기화 : 필요시 구현
        	
        	//this.lfn_settingSearchBar(); 	//검색영역 세팅
        	//if(nexacro.Browser == "Runtime") this.Div.btn_close.set_visible(true);
        }

        
        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        // //로그인 버튼 event/*
        this.Div_btn_login_onclick = function(obj,e)
        {
        	/*var objLoginId = this.txt_Id;
            var objLoginPw = this.txt_Pwd;     
            alert("아이디 / " + objLoginId.value);
            this.trLogin(this,"login",objLoginId.value,objLoginPw.value);*/
        	var sName = this.Div00.Edit00.value;
        	var sName1 = this.Div00.Edit_pwd.value;
        	if (sName == null){
        		alert("아이디를 입력하세요.");
        	}
        	else if (sName1 == null){
        		alert("비밀번호를 입력하세요.");
        	}
        	else {
        		this.gfn_serviceCall("loginForm");
        		this.fn_test();
        	}
        }

        //회원가입버튼 event
        this.Div_btn_join_onclick = function(obj,e)
        {
        	var sURL = "Practice::Join_checkage.xfdl";
            this.gfn_main(sURL);
        	
        }

        //암호 보이기 event
        this.Div00_CheckBox01_onclick = function(obj,e)
        {	
        	var sValue = this.Div00.CheckBox01.value;
        	if (sValue == true){
        		this.Div00.Edit_pwd.set_password("false");
        	}
        	else {
        		this.Div00.Edit_pwd.set_password("true");
        	}
        }

        //아이디 저장 이벤트

        
        //아이디 찾기 버튼 event
        this.Div00_btn_FindID_onclick = function(obj,e)
        {
        	var sURL = "Practice::find_ID.xfdl";
            this.gfn_main(sURL);
        }

        //비밀번호 찾기 버튼 event
        this.Div00_btn_FindPWD_onclick = function(obj,e)
        {
        	var sURL = "Practice::find_PWD.xfdl";
            this.gfn_main(sURL);
        }

        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        //로그인시 메인화면으로 가는 함수.
        this.fn_test = function(obj,e)
        {
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_width(1024);	
        	var sURL = "Practice::Main.xfdl";
            this.gfn_main(sURL);
        } 

        
        /**
        * Login service
        * @param {string} id
        * @param {string} pw
        * @return {string] 변형문자열
        * @example
        * @memberOf Ex.core
        */
        /*
        //로그인시 로그인 가능함수 확인
        this.trLogin = function(obj, sSvcId, id, pwd)       
        {
            var sSvcID          = sSvcId;
            var sController     = "loginController.do";
            var sInDatasets     = "";
            var sOutDatasets    = "Dataset00=gds_userInfo gds_menu=gds_menu gds_message=gds_message gds_gridInfo=gds_gridInfo gds_config=gds_config gds_task=gds_task";
            var sArgs = "";
         
            sArgs += this.setParam("V_USER_ID",id);
            sArgs += this.setParam("V_USER_PWD",pwd);
         
            this.tran(obj, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "received");
        }
        	//null값일경우
        this.isNull = function(value)
        {
            return value === null;
        }
        	//정의되지 않은 값일 경우
        this.isUndefined = function(value)
        {
            return value === undefined;
        }
         */
        /**
         * 공백으로치환 
         * @param {string} 체크할  파리미터명
         * @return {string} 공백으로 치환값
         * @example
         *    trace(Eco.isEmpty("")); (output) ""
         * @memberOf Ex.util
         */  
           /*
        this.isReplaceEmpty = function(strArg)
        {
              if( this.isNull(strArg) || this.isUndefined(strArg)) return "";
               else
               return strArg;
        },
         
        this.setParam = function (p_name, p_value)
        {           
            return p_name + "="+this.isReplaceEmpty(p_value)+ " ";
        }
         
        this.tran = function(obj, svcID, sController, inDatasets, outDatasets, argument, callbackFunc)
        {
            // Service ID Merge
            var strSvcID = {id:svcID, callbackFunc:callbackFunc, outDatasets:outDatasets};
            var strURL = "http://localhost/" + sController;
            var strInDatasets = inDatasets;
            var strOutDatasets = outDatasets;
            var strArgument = argument;
            var strCallbackFunc = callbackFunc;
            var m_output = outDatasets;
         
         
            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, true, false);
        }
         
        this.received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(this.Dataset00.rowcount + " numbers of data have been found.");
                  trace(this.Dataset00.rowcount + " numbers of data have been found.");
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }

        
        */

               
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Login_onload, this);
            this.Div.Static00.addEventHandler("onclick", this.Div_Static00_onclick, this);
            this.Div.Static02.addEventHandler("onclick", this.Div_Static02_onclick, this);
            this.Div.Static03.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div.Static04.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div.Static05.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.Static03.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.Edit00.addEventHandler("oneditclick", this.Div00_Edit00_oneditclick, this);
            this.Div00.Static04.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.btn_login.addEventHandler("onclick", this.Div_btn_login_onclick, this);
            this.Div00.btn_Join.addEventHandler("onclick", this.Div_btn_join_onclick, this);
            this.Div00.btn_FindID.addEventHandler("onclick", this.Div00_btn_FindID_onclick, this);
            this.Div00.btn_FindPWD.addEventHandler("onclick", this.Div00_btn_FindPWD_onclick, this);
            this.Div00.CheckBox01.addEventHandler("onclick", this.Div00_CheckBox01_onclick, this);

        };

        this.loadIncludeScript("login.xfdl", true);

       
    };
}
)();
