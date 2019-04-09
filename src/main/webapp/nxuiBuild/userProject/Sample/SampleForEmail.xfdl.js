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
                this.set_name("SampleForEmail");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_email", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"toAddr\" type=\"STRING\" size=\"256\"/><Column id=\"subject\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">saveEmail</Col><Col id=\"sController\">sample/sendEmail.do</Col><Col id=\"outds\">ds_email=ds_email</Col><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"inds\">ds_email=ds_email:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "8", "24", "170", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Sample 이메일 발송");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "2.34%", "122", null, "27", "86.62%", null, this);
            obj.set_taborder("1");
            obj.set_text("받는사람(to):");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "12.5%", "120", null, "29", "57.03%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2.34%", "245", null, "27", "86.62%", null, this);
            obj.set_taborder("3");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "2.25%", "281", null, "175", "57.42%", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("fixedvert");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "35.16%", "47", null, "24", "57.81%", null, this);
            obj.set_taborder("5");
            obj.set_text("발송");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "2.25%", "176", null, "27", "90.14%", null, this);
            obj.set_taborder("6");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "12.5%", "176", null, "29", "57.03%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_email","toAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit01","value","ds_email","subject");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","TextArea00","value","ds_email","content");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SampleForEmail.xfdl", "Lib::Comm.xjs");
        this.registerScript("SampleForEmail.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 
        * BUSINESS    : 샘플이메일-교육용
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 
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

        

        this.SampleForEmail_onload = function(obj,e)
        {
        	this.ds_email.clearData();
        	this.ds_email.addRow();
        }

        //공통 콜백
        this.TestValue = ""; 
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
        	
        	this.alert(this.TestValue);
        }

        //메일 예제 발송
        this.Button00_onclick = function(obj,e)
        {
        	this.gfn_serviceCall("saveEmail"); 
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SampleForEmail_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("SampleForEmail.xfdl", true);

       
    };
}
)();
