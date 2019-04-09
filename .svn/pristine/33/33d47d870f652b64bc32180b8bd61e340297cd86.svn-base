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
                this.set_name("sidemenu");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,200,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_libMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"sidename\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sidename\">정보수정</Col><Col id=\"value\">0</Col></Row><Row><Col id=\"sidename\">대출현황</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"sidename\">연체건수</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"sidename\">예약현황</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"sidename\">제재건수</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMypageMap", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userNo\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/selectMypageList.do</Col><Col id=\"svcid\">selectMypageList</Col><Col id=\"inds\">dsMypageMap=dsMypageMap</Col><Col id=\"outds\">dsUserInfo=dsUserInfo</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "200", "86", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#339966ff");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0%", "86", "200", "122", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_libMenu");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:sidename\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 200, 86, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#339966ff");
            		p.style.set_color("white");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 200, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00","text","gds_libmenu","menuName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Mypageside.xfdl", "Lib::Comm.xjs");
        this.registerScript("Mypageside.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        
        // 페이지 온로드 후
        this.fn_onload = function(obj,e)
        {
        	var no = application.gds_UserInfo.getColumn(0,"userNo")
        	this.dsMypageMap.setColumn(0,"userNo",no);
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

        

        

        

        
        this.fn_changeMenu = function(obj,e)
        {
        	this.changeMenu();
        }

        
        this.changeMenu = function(){
        	// 선택된 셀의 행의 번호
        	var cell = this.Grid00.currentrow
        	
        	if(cell==0){
        	
        	
        	application.gds_UserInfo.assign(this.dsUserInfo);
        	
        	
        	var sURL = "Practice::Update_persnal.xfdl";
        	this.gfn_main(sURL);
        	}
        	
        	else if(cell==1){
        	var sURL = "Practice::UserBorrow.xfdl";
        	this.gfn_main(sURL);
        	}
        	
        	else if(cell==2){
        	var sURL = "Practice::UserOverdue.xfdl";
        	this.gfn_main(sURL);
        	}
        	
        	else if(cell==3){
        	var sURL = "Practice::UserReservation.xfdl";
        	this.gfn_main(sURL);
        	}
        	
        	else if(cell==4){
        	var sURL = "Practice::UserSanctions.xfdl";
        	this.gfn_main(sURL);
        	}
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.fn_changeMenu, this);

        };

        this.loadIncludeScript("Mypageside.xfdl", true);

       
    };
}
)();
