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
                this.set_name("LoginC");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("login", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\"/><Col id=\"PWD\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("loginresult", this);
            obj._setContents("<ColumnInfo><Column id=\"resultlogin\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"resultlogin\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">loginMem</Col><Col id=\"sController\">HappyCoffe/loginMem.do</Col><Col id=\"inds\">Login=login</Col><Col id=\"outds\">loginresult=Result</Col><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div", "absolute", "19.73%", "0", null, null, "16.31%", "2", this);
            obj.set_taborder("0");
            obj.style.set_background("#2c3e50ff");
            obj.style.set_color("#45596dff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "199", "205", "208", "35", null, null, this.Div);
            obj.set_taborder("10");
            obj.set_value("Admin");
            obj.set_cssclass("WF_edt_Login");
            this.Div.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "199", "245", "208", "35", null, null, this.Div);
            obj.set_taborder("11");
            obj.set_value("●●●●●●●●");
            obj.set_displaynulltext("●●●●●●●●");
            obj.set_cssclass("WF_msk_Login");
            this.Div.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "421", "205", "89", "75", null, null, this.Div);
            obj.set_taborder("12");
            obj.set_text("Login");
            obj.set_cssclass("WF_btn_Login");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "155", "217", "41", "62", null, null, this.Div);
            obj.set_taborder("13");
            obj.style.set_background("transparent URL('Images::Class/WF_img_IDPW.png') left top");
            this.Div.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "206", "291", "208", "29", null, null, this.Div);
            obj.set_taborder("14");
            obj.set_text("ID/Password Save");
            obj.set_cssclass("WF_chk_Login");
            this.Div.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "37.71%", "69", null, "103", "38.02%", null, this.Div);
            obj.set_taborder("16");
            obj.style.set_background("#ffffffff URL('Images/Class/Coffee.png')");
            this.Div.addChild(obj.name, obj);
            obj = new Button("IdFind", "absolute", "183", "325", "150", "35", null, null, this.Div);
            obj.set_taborder("17");
            obj.set_text("아이디 찾기");
            obj.style.set_background("#45596dff");
            obj.style.set_color("#ffffffff");
            this.Div.addChild(obj.name, obj);
            obj = new Button("btn_login01", "absolute", "336", "325", "150", "35", null, null, this.Div);
            obj.set_taborder("18");
            obj.set_text("비밀번호 찾기");
            obj.style.set_background("#45596dff");
            this.Div.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div.Edit00","value","login","ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div.MaskEdit00","value","login","PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LoginC.xfdl", "Lib::Comm.xjs");
        this.addIncludeScript("LoginC.xfdl", "HappyCJS::menu.xjs");
        this.registerScript("LoginC.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("HappyCJS::menu.xjs", null, exports); }	//include "HappyCJS::menu.xjs";

        //공통 콜백
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
        	//this.alert(svcId);
        	
        	if(errorcode < 0) {
        	
        	   //Iject.alert(errormsg,"오류");			
        	   return;
        	}else{
        		var resultlogin = this.loginresult.getColumn(0, "resultlogin");
        		
        		if(resultlogin == "-1"){
        	
        			 
        			 this.alert("회원정보가 없습니다.");
        		} else if (resultlogin == "0") { 
        			this.alert("비밀번호를 확인해주세요.");
        		} else {
        			this.alert("로그인되었습니다.");
        			//this.gfn_alertMsg(this.Msg_Inf_0004);
        			 
        			//콜백정의
        			//Iject.alert(errormsg,"알림");
        			var sURL = "HappyCoffe::MainContents.xfdl";
        			this.gfn_main(sURL);
        		}
        	}
        }

        this.Div_btn_login_onclick = function(obj,e) {

        	this.gfn_serviceCall("loginMem");
        	application.gds_userInfo.setColumn(0,"userId",this.login.getColumn(0,"ID"));
        	application.gds_userInfo.setColumn(0,"userPWD",this.login.getColumn(0,"PWD"));
        	
        //	alert(application.gds_userInfo.getColumn(0,"userId") + "+++++");
        //	alert(application.gds_userInfo.setColumn(0,"userId") + "++222+++");

        }

        this.Div_IdFind_onclick = function(obj,e)
        {
        	var sURL = "HappyCoffe::Find_ID.xfdl";
        	this.gfn_main(sURL);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div.Edit00.addEventHandler("oneditclick", this.Div_Edit00_oneditclick, this);
            this.Div.btn_login.addEventHandler("onclick", this.Div_btn_login_onclick, this);
            this.Div.IdFind.addEventHandler("onclick", this.Div_IdFind_onclick, this);
            this.Div.btn_login01.addEventHandler("onclick", this.Div_btn_login_onclick, this);

        };

        this.loadIncludeScript("LoginC.xfdl", true);

       
    };
}
)();
