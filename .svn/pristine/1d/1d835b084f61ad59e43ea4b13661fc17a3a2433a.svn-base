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
                this.set_name("SampleForEncryption");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">sample/makePasswordHash.do</Col><Col id=\"svcid\">makePasswordHash</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsTaskList=dsTaskList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">makeAriaEncryption</Col><Col id=\"sController\">sample/makeAriaEncryption.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsTaskList=dsTaskList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">makeAriaDecryption</Col><Col id=\"sController\">sample/makeAriaDecryption.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsTaskList=dsTaskList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">saveAriaEncryption</Col><Col id=\"sController\">sample/saveAriaEncryption.do</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"inds\">dsEncryption=dsEncryption:U</Col></Row><Row><Col id=\"svcid\">selectAriaDecryption</Col><Col id=\"sController\">sample/selectAriaDecryption.do</Col><Col id=\"outds\">dsEncryption=dsEncryption</Col><Col id=\"args\"/><Col id=\"inds\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"AriaEncryption\" type=\"STRING\" size=\"256\"/><Column id=\"AriaDecryption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AriaEncryption\"/><Col id=\"AriaDecryption\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaskList", this);
            obj._setContents("<ColumnInfo><Column id=\"encryptionResult\" type=\"STRING\" size=\"256\"/><Column id=\"decryptionResult\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEncryption", this);
            obj._setContents("<ColumnInfo><Column id=\"sample1\" type=\"STRING\" size=\"256\"/><Column id=\"sample2\" type=\"STRING\" size=\"256\"/><Column id=\"sample3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "8", "24", "170", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_text("ARIA 암호화 / 복호화");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.66%", "87", null, "27", "87.3%", null, this);
            obj.set_taborder("1");
            obj.set_text("암호화:");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "11.62%", "82", null, "45", "75.49%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "26.37%", "82", null, "45", "65.33%", null, this);
            obj.set_taborder("3");
            obj.set_text("변경");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "37.6%", "82", null, "51", "37.11%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1.66%", "155", null, "27", "87.3%", null, this);
            obj.set_taborder("5");
            obj.set_text("복호화");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "11.62%", "146", null, "45", "75.49%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "26.37%", "146", null, "45", "65.33%", null, this);
            obj.set_taborder("7");
            obj.set_text("변경");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "37.6%", "146", null, "51", "37.11%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "8", "236", "215", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("ARIA DB 암호화 / 복호화");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.66%", "276", null, "160", "37.5%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsEncryption");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"sample1\"/><Cell col=\"1\" disptype=\"normal\" text=\"sample2\"/><Cell col=\"2\" disptype=\"normal\" text=\"sample3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:sample1\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:sample2\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:sample3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "41.41%", "461", null, "24", "52.34%", null, this);
            obj.set_taborder("11");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "48.83%", "461", null, "24", "44.92%", null, this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "56.25%", "461", null, "24", "37.5%", null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2.83%", "525", null, "22", "89.55%", null, this);
            obj.set_taborder("14");
            obj.set_text("sample1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "10.74%", "527", null, "23", "76.17%", null, this);
            obj.set_taborder("15");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "2.83%", "570", null, "22", "89.55%", null, this);
            obj.set_taborder("16");
            obj.set_text("sample2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "10.94%", "565", null, "23", "75.98%", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2.83%", "608", null, "22", "89.55%", null, this);
            obj.set_taborder("18");
            obj.set_text("sample3");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "11.04%", "613", null, "79", "66.6%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "34.38%", "460", null, "24", "59.38%", null, this);
            obj.set_taborder("20");
            obj.set_text("조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsSchMap","AriaEncryption");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit01","value","dsTaskList","encryptionResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit03","value","dsTaskList","decryptionResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit02","value","dsSchMap","AriaDecryption");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit04","value","dsEncryption","sample1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit05","value","dsEncryption","sample2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","TextArea00","value","dsEncryption","sample3");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SampleForEncryption.xfdl", "Lib::Comm.xjs");
        this.registerScript("SampleForEncryption.xfdl", function(exports) {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 
        * BUSINESS    : 샘플DB암복호화-교육용
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

        //Aria 알고리즘을 활용한 암호화 처리
        this.Button00_onclick = function(obj,e)
        {
        	this.gfn_serviceCall("makeAriaEncryption"); //
        }

        //Aria 알고리즘을 활용한 복호화 처리
        this.Button01_onclick = function(obj,e)
        {
        	this.gfn_serviceCall("makeAriaDecryption"); //
        }

        //ROW 추가
        this.Button02_onclick = function(obj,e)
        {
        	this.dsEncryption.addRow();
        }

        //ROW 삭제
        this.Button03_onclick = function(obj,e)
        {
        	this.dsEncryption.deleteRow(this.this.dsEncryption.rowposition);
        }

        //저장
        this.Button04_onclick = function(obj,e)
        {
        	this.gfn_serviceCall("saveAriaEncryption"); //
        }

        //조회
        this.Button05_onclick = function(obj,e)
        {
        	this.gfn_serviceCall("selectAriaDecryption"); //
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);

        };

        this.loadIncludeScript("SampleForEncryption.xfdl", true);

       
    };
}
)();
