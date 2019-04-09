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
            obj._setContents("<ColumnInfo><Column id=\"User_ID\" type=\"STRING\" size=\"256\"/><Column id=\"User_PWD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">Practice/loginForm.do</Col><Col id=\"svcid\">loginForm</Col><Col id=\"inds\">login=login</Col><Col id=\"outds\">dsresult_login=dsresult_login</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">joinForm</Col><Col id=\"sController\">Practice/joinForm.do</Col><Col id=\"inds\">dsuser=dsuser</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dspwd", this);
            obj._setContents("<ColumnInfo><Column id=\"pwd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pwd\">14123423412</Col></Row><Row><Col id=\"pwd\">3214214124</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tel1", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">010</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">011</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">016</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">017</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tel", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">SK</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">KT</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">LG</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">알뜰폰</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">1999 </Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">1998</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">1997</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div", "absolute", "0", "-8", null, null, "0%", "8", this);
            obj.set_taborder("0");
            obj.style.set_background("white");
            obj.style.set_color("#45596dff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "200", "160", "652", "16", null, null, this.Div);
            obj.set_taborder("0");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "200", "101", null, "51", "560", null, this.Div);
            obj.set_taborder("6");
            obj.set_text("아이디찾기");
            obj.style.set_color("black");
            obj.style.set_font("bold 20 Dotum");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "200", "479", "599", "35", null, null, this.Div);
            obj.set_taborder("7");
            obj.set_text("●  아이디 찾기를 진행할 이름, 생년월일, 핸드폰번호를 입력하세요");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "200", "514", "599", "35", null, null, this.Div);
            obj.set_taborder("8");
            obj.set_text("●  문의사항이 있으시면 관리자에게 연락주시기 바랍니다.");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00", "fixed", "200", "157", "600", "300", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.style.set_border("3 solid #80ff00ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "50", "17", null, "16", "461", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("* 이름");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("11 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "50", "40", "500", "34", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_cssclass("WF_edt_Login");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "50", "82", null, "16", "430", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("* 핸드폰번호");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("11 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("find_ID_ans", "absolute", "119", "228", "120", "34", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("유효아이디 확인");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_background("#ff6600ff");
            obj.style.set_border("1 solid #ff6600ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "50", "146", null, "16", "430", null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("* 생년월일");
            obj.style.set_color("#ff6600ff");
            obj.style.set_font("11 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_FindPWD", "absolute", "262", "227", "89", "34", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("비밀번호찾기");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_color("#808080ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_login1", "absolute", "374", "227", "89", "34", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("로그인 화면");
            obj.set_cssclass("WF_btn_Login");
            obj.style.set_color("#808080ff");
            obj.style.set_font("bold 9 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "50", "106", "500", "34", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("cmb_tel", "absolute", "0.6%", "6", null, "20", "86.14%", null, this.Div00.Div08);
            this.Div00.Div08.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_tel");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_displayrowcount("5");
            obj = new Combo("cmb_tel1", "absolute", "100", "6", null, "20", "69.28%", null, this.Div00.Div08);
            this.Div00.Div08.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_tel1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Static("Static01", "absolute", "30.72%", "4", null, "22", "65.46%", null, this.Div00.Div08);
            obj.set_taborder("15");
            obj.set_text(" -");
            this.Div00.Div08.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "169", "6", null, "20", "281", null, this.Div00.Div08);
            obj.set_taborder("16");
            this.Div00.Div08.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "43.78%", "4", null, "22", "52.41%", null, this.Div00.Div08);
            obj.set_taborder("17");
            obj.set_text(" -");
            this.Div00.Div08.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "233", "6", null, "20", "217", null, this.Div00.Div08);
            obj.set_taborder("18");
            this.Div00.Div08.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "50", "170", "500", "34", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("16");


            
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
            obj = new Layout("default", "", 500, 34, this.Div00.Div08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            	}
            );
            this.Div00.Div08.addLayout(obj.name, obj);

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
            obj = new BindItem("item3","Div00.Div08.cmb_tel","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.Div08.cmb_tel1","value","ds_year","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("find_ID.xfdl", "Lib::Comm.xjs");
        this.registerScript("find_ID.xfdl", function(exports) {
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
        	//Iject.formOnload(obj);			//폼 초기화 : 필요시 구현
        	
        	//this.lfn_settingSearchBar(); 	//검색영역 세팅
        	//if(nexacro.Browser == "Runtime") this.Div.btn_close.set_visible(true);
        }

        
        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        /*
        //닫기버튼 event
        this.Div_Button01_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	application.exit();
        }
        */

        //로그인 버튼
        this.Div00_btn_login1_onclick = function(obj,e)
        {
        	var sURL = "Practice::login.xfdl";
            this.gfn_main(sURL);
        }

        //비밀번호찾기버튼
        this.Div00_btn_FindPWD_onclick = function(obj,e)
        {
        	var sURL = "Practice::find_PWD.xfdl";
            this.gfn_main(sURL);
        }

        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        /*
        암호보이는 함수
        this.Div00_CheckBox01_onclick = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	
        	if(e.postvalue == 1) 
        	{
        		this.edit_password.set_password("false");
        	}
        	else
        	{
        		this.edit_password.set_password("true");
        	}
        }
        */

        //아이디찾기 버튼
        this.Div00_btn_find_ID_ans_onclick = function(obj,e)
        {
        	var sName = this.Div00.Edit00.value;
        	var sName1 = this.Div00.Div08.cmb_tel.value;
        	var sName2 = this.Div00.Div08.cmb_tel1.value;
        	var sName3 = this.Div00.Div08.Edit00.value;
        	var sName4 = this.Div00.Div08.Edit01.value;
        	var sName5 = this.Div00.Calendar00.value;
        	if (sName == null){
        		alert("이름을 입력하세요.");
        	}
        	else if (sName1 == null){
        		alert("통신사를 선택하세요.");
        	}
        	else if (sName2 == null){
        		alert("핸드폰 앞자리를 선택하세요.");
        	}
        	else if (sName3 == null || sName4 == null){
        		alert("핸드폰를 입력하세요.");
        	}
        	else if (sName5 == null){
        		alert("생년월일을 선택하세요.");
        	}
        	else {
        		var sURL = "Practice::find_ID_ans.xfdl";
        		this.gfn_main(sURL);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Login_onload, this);
            this.Div.Static00.addEventHandler("onclick", this.Div_Static00_onclick, this);
            this.Div.Static02.addEventHandler("onclick", this.Div_Static02_onclick, this);
            this.Div.Static03.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div.Static04.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.Static03.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.Edit00.addEventHandler("oneditclick", this.Div00_Edit00_oneditclick, this);
            this.Div00.Static04.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.find_ID_ans.addEventHandler("onclick", this.Div00_btn_find_ID_ans_onclick, this);
            this.Div00.Static00.addEventHandler("onclick", this.Div_Static03_onclick, this);
            this.Div00.btn_FindPWD.addEventHandler("onclick", this.Div00_btn_FindPWD_onclick, this);
            this.Div00.btn_login1.addEventHandler("onclick", this.Div00_btn_login1_onclick, this);
            this.Div00.Div08.cmb_tel.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div00.Div08.cmb_tel1.addEventHandler("onitemchanged", this.Div00_Div00_Div07_cmb_year_onitemchanged, this);
            this.Div00.Div08.Static01.addEventHandler("onclick", this.Div01_Div08_Static01_onclick, this);

        };

        this.loadIncludeScript("find_ID.xfdl", true);

       
    };
}
)();
