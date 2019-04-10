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
                this.set_name("Mypage");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,930);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCntNum", this);
            obj._setContents("<ColumnInfo><Column id=\"brNum\" type=\"STRING\" size=\"256\"/><Column id=\"arrNum\" type=\"STRING\" size=\"256\"/><Column id=\"resNum\" type=\"STRING\" size=\"256\"/><Column id=\"sanNum\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"brNum\">1</Col><Col id=\"arrNum\">2</Col><Col id=\"resNum\">3</Col><Col id=\"sanNum\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMypageMap", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userNo\">1</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/selectMypageList.do</Col><Col id=\"svcid\">selectMypageList</Col><Col id=\"inds\">dsMypageMap=dsMypageMap</Col><Col id=\"outds\">dsUserInfo=dsUserInfo</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">saveUserInfo</Col><Col id=\"sController\">practice/saveUserInfo.do</Col><Col id=\"inds\">dsUserInfo=dsUserInfo:U</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"authorCd\" type=\"STRING\" size=\"256\"/><Column id=\"userBirth\" type=\"STRING\" size=\"256\"/><Column id=\"userGender\" type=\"STRING\" size=\"256\"/><Column id=\"brrCdnum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"domain\" type=\"STRING\" size=\"256\"/><Column id=\"userEmail\" type=\"STRING\" size=\"256\"/><Column id=\"domaincode\" type=\"STRING\" size=\"256\"/><Column id=\"userPwd\" type=\"STRING\" size=\"256\"/><Column id=\"userIspwd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserDel", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"userEmail\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00", "absolute", "5.27%", "91", null, "423", "10.55%", null, this);
            obj.set_text("My Page");
            obj.set_taborder("7");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_color("#339966ff");
            obj.style.set_font("18 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "5.27%", "552", null, "141", "10.84%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("transparent");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "7.81%", "654", null, "34", "48.24%", null, this);
            obj.set_taborder("3");
            obj.set_text("＊타 사이트와는 다른 비밀번호를 사용하고, 비밀번호는 주기적으로 변경해주세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "7.81%", "620", null, "34", "46.78%", null, this);
            obj.set_taborder("4");
            obj.set_text("＊개인정보보호를 위해 비밀번호를 타인과 공유하지 마세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "7.81%", "586", null, "34", "50.49%", null, this);
            obj.set_taborder("5");
            obj.set_text("＊개인정보보호를 위해 공유 PC에서는 반드시 사용 후 로그아웃을 확인하세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "7.81%", "552", null, "34", "49.02%", null, this);
            obj.set_taborder("6");
            obj.set_text("＊서비스의 원활한 이용을 위해 개인연락처는 최신정보를 유지해주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "5.57%", "135", null, "363", "10.84%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent");
            obj.style.set_font("9 맑은 고딕");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2.92%", "14", null, "42", "87.62%", null, this.Div00);
            obj.set_taborder("51");
            obj.set_text("이름(아이디)");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_align("center middle");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "2.92%", "73", null, "42", "87.62%", null, this.Div00);
            obj.set_taborder("52");
            obj.set_text("대출증번호");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_align("center middle");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.92%", "132", null, "42", "87.62%", null, this.Div00);
            obj.set_taborder("53");
            obj.set_text("전화번호");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_align("center middle");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2.92%", "191", null, "42", "87.62%", null, this.Div00);
            obj.set_taborder("54");
            obj.set_text("이메일");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_align("center middle");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "2.92%", "250", null, "42", "87.62%", null, this.Div00);
            obj.set_taborder("55");
            obj.set_text("주소");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_align("center middle");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "2.92%", "323", null, "23", "83.41%", null, this.Div00);
            obj.set_taborder("56");
            obj.set_text("개인정보수정");
            obj.style.set_font("9 맑은 고딕");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "47.2%", "35", null, "96", "32.01%", null, this.Div00);
            obj.set_taborder("57");
            obj.set_text("Div00");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.6%", "25", null, "42", "57.47%", null, this.Div00.Div00);
            obj.set_taborder("6");
            obj.set_text("대출건수");
            obj.style.set_align("center middle");
            obj.style.set_font("12 맑은 고딕");
            obj.style.set_cursor("hand");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "53.45%", "27", null, "33", "4.6%", null, this.Div00.Div00);
            obj.set_taborder("7");
            obj.set_text("건수Binding");
            obj.style.set_align("center middle");
            obj.style.set_font("20 맑은 고딕");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "47.2%", "155", null, "96", "32.01%", null, this.Div00);
            obj.set_taborder("58");
            obj.set_text("Div00");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.6%", "25", null, "42", "57.47%", null, this.Div00.Div01);
            obj.set_taborder("6");
            obj.set_text("예약건수");
            obj.style.set_align("center middle");
            obj.style.set_font("12 맑은 고딕");
            obj.style.set_cursor("hand");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "53.45%", "27", null, "33", "4.6%", null, this.Div00.Div01);
            obj.set_taborder("7");
            obj.set_text("건수Binding");
            obj.style.set_align("center middle");
            obj.style.set_font("20 맑은 고딕");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "71.26%", "155", null, "96", "7.94%", null, this.Div00);
            obj.set_taborder("59");
            obj.set_text("Div00");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.6%", "25", null, "42", "57.47%", null, this.Div00.Div02);
            obj.set_taborder("6");
            obj.set_text("재제건수");
            obj.style.set_align("center middle");
            obj.style.set_font("12 맑은 고딕");
            obj.style.set_cursor("hand");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "53.45%", "27", null, "33", "4.6%", null, this.Div00.Div02);
            obj.set_taborder("7");
            obj.set_text("건수Binding");
            obj.style.set_align("center middle");
            obj.style.set_font("20 맑은 고딕");
            this.Div00.Div02.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "71.26%", "35", null, "96", "7.94%", null, this.Div00);
            obj.set_taborder("60");
            obj.set_text("Div00");
            obj.style.set_background("#ccffccff");
            obj.style.set_border("2 solid #339966ff");
            obj.style.set_bordertype("round 10 10");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.6%", "25", null, "42", "57.47%", null, this.Div00.Div03);
            obj.set_taborder("6");
            obj.set_text("연체건수");
            obj.style.set_align("center middle");
            obj.style.set_font("12 맑은 고딕");
            obj.style.set_cursor("hand");
            this.Div00.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "53.45%", "27", null, "33", "4.6%", null, this.Div00.Div03);
            obj.set_taborder("7");
            obj.set_text("건수Binding");
            obj.style.set_align("center middle");
            obj.style.set_font("20 맑은 고딕");
            this.Div00.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "17.64%", "22", null, "31", "64.95%", null, this.Div00);
            obj.set_taborder("61");
            obj.set_text("Static05");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "17.64%", "80", null, "31", "64.95%", null, this.Div00);
            obj.set_taborder("62");
            obj.set_text("Static05");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "17.64%", "138", null, "31", "64.95%", null, this.Div00);
            obj.set_taborder("63");
            obj.set_text("Static05");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "17.64%", "196", null, "31", "64.95%", null, this.Div00);
            obj.set_taborder("64");
            obj.set_text("Static05");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "17.64%", "254", null, "31", "64.95%", null, this.Div00);
            obj.set_taborder("65");
            obj.set_text("Static05");
            obj.style.set_font("9 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "18.81%", "323", null, "23", "67.52%", null, this.Div00);
            obj.set_taborder("66");
            obj.set_text("회원탈퇴");
            obj.style.set_font("9 맑은 고딕");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 141, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("transparent");
            		p.style.set_border("2 solid #339966ff");
            		p.style.set_bordertype("round 10 10");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 96, this.Div00.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("57");
            		p.set_text("Div00");
            		p.style.set_background("#ccffccff");
            		p.style.set_border("2 solid #339966ff");
            		p.style.set_bordertype("round 10 10");
            		p.style.set_font("9 맑은 고딕");

            	}
            );
            this.Div00.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 96, this.Div00.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.set_text("Div00");
            		p.style.set_background("#ccffccff");
            		p.style.set_border("2 solid #339966ff");
            		p.style.set_bordertype("round 10 10");
            		p.style.set_font("9 맑은 고딕");

            	}
            );
            this.Div00.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 96, this.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("59");
            		p.set_text("Div00");
            		p.style.set_background("#ccffccff");
            		p.style.set_border("2 solid #339966ff");
            		p.style.set_bordertype("round 10 10");
            		p.style.set_font("9 맑은 고딕");

            	}
            );
            this.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 96, this.Div00.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("60");
            		p.set_text("Div00");
            		p.style.set_background("#ccffccff");
            		p.style.set_border("2 solid #339966ff");
            		p.style.set_bordertype("round 10 10");
            		p.style.set_font("9 맑은 고딕");

            	}
            );
            this.Div00.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 810, 392, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("transparent");
            		p.style.set_font("9 맑은 고딕");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 930, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.Div00.Static01","text","dsCntNum","brNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Div03.Static01","text","dsCntNum","arrNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Div01.Static01","text","dsCntNum","resNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Div02.Static01","text","dsCntNum","sanNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.Static05","text","dsUserInfo","userNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.Static07","text","dsUserInfo","brrCdnum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.Static08","text","dsUserInfo","userPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.Static09","text","dsUserInfo","userEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.Static10","text","dsUserInfo","userAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MyPage.xfdl", "Lib::Comm.xjs");
        this.registerScript("MyPage.xfdl", function(exports) {

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        // 페이지 온로드 후
        this.fn_onload = function(obj,e)
        {
        	this.lfn_searchList();
        }

        
        this.lfn_searchList = function(){
        	this.gfn_serviceCall("selectMypageList");
        }

        //공통 콜백
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
         
        	//this.alert(svcId);
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");			
        	   return;
        	}
        	/*
        	else{
        		if(svcId == "saveSubjectList"){
        			
        			this.alert("저장되었습니다.");
        			//this.gfn_alertMsg(this.Msg_Inf_0004);		
        			this.gfn_serviceCall("selectSubjectList");
        		}
        		//콜백정의	
        		//Iject.alert(errormsg,"알림");	
        	}
        	*/
        }

        

        //------------------------------------------------------
        //정보수정
        this.Div00_Button00_onclick = function(obj,e)
        {	
        	// form dataset을 global dataset으로 복사
        	application.gds_UserInfo.assign(this.dsUserInfo);
        	var sURL = "Practice::Update_persnal.xfdl";
        	this.gfn_main(sURL);
        }

        // 대출
        this.Div00_Div00_Static00_onclick = function(obj,e)
        {
        	application.gds_UserInfo.setColumn(0,"userNo",this.dsUserInfo.getColumn(0,"userNo"))
        	var sURL = "Practice::UserBorrow.xfdl";
        	this.gfn_main(sURL);
        }

        // 연체
        this.Div00_Div03_Static00_onclick = function(obj,e)
        {
        	var sURL = "Practice::UserOverdue.xfdl";
        	this.gfn_main(sURL);
        }
        // 예약
        this.Div00_Div01_Static00_onclick = function(obj,e)
        {
        	var sURL = "Practice::UserReservation.xfdl";
        	this.gfn_main(sURL);
        }

        
        // 제재
        this.Div00_Div02_Static00_onclick = function(obj,e)
        {
        	var sURL = "Practice::UserSanctions.xfdl";
        	this.gfn_main(sURL);
        }

        
        //회원탈퇴
        this.Div00_Button01_onclick = function(obj,e)
        {
        	var withdraw;
        	withdraw = this.confirm("정말로 탈퇴하시겟습니까?")
        	if(withdraw==true){
        		this.dsUserInfo.deleteRow(this.dsUserInfo.rowposition);
        		this.gfn_serviceCall("saveUserInfo");
        		application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        		application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        		var sURL = "Practice::login.xfdl"
        		this.gfn_main(sURL);
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.GroupBox00.addEventHandler("onlbuttondown", this.GroupBox00_onlbuttondown, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Div00.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Div00.Div00.Static00.addEventHandler("onclick", this.Div00_Div00_Static00_onclick, this);
            this.Div00.Div01.Static00.addEventHandler("onclick", this.Div00_Div01_Static00_onclick, this);
            this.Div00.Div02.Static00.addEventHandler("onclick", this.Div00_Div02_Static00_onclick, this);
            this.Div00.Div03.Static00.addEventHandler("onclick", this.Div00_Div03_Static00_onclick, this);
            this.Div00.Static05.addEventHandler("onclick", this.Div00_Static05_onclick, this);
            this.Div00.Button01.addEventHandler("onclick", this.Div00_Button01_onclick, this);

        };

        this.loadIncludeScript("MyPage.xfdl", true);

       
    };
}
)();
