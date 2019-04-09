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
                this.set_name("test001");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("#ffffffff");
            this.style.set_color("white");
            this.style.set_font("antialias 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">부서1</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">부서2</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">부서3</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">부서4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">1등</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">2등</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">3등</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">4등</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">M</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">W</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmployees", this);
            obj._setContents("<ColumnInfo><Column id=\"emplId\" type=\"STRING\" size=\"256\"/><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"married\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"emplMemo\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsemlpID", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_START\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">practice/testSearchList.do</Col><Col id=\"svcid\">testSearchList</Col><Col id=\"inds\">dsemlpID=dsemlpID</Col><Col id=\"outds\">dsEmployees=dsEmployees</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">testSaveList</Col><Col id=\"sController\">practice/testSaveList.do</Col><Col id=\"inds\">dsEmployees=dsEmployees:U</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"outds\"/><Col id=\"args\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "41.6%", "36", null, "22", "48.34%", null, this);
            obj.set_taborder("2");
            obj.set_text("search");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "54.88%", "36", null, "22", "35.06%", null, this);
            obj.set_taborder("4");
            obj.set_text("add");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "68.16%", "36", null, "22", "21.78%", null, this);
            obj.set_taborder("5");
            obj.set_text("delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "81.45%", "36", null, "22", "8.5%", null, this);
            obj.set_taborder("6");
            obj.set_text("save");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "5.18%", "339", null, "373", "9.38%", null, this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.63%", "12", null, "23", "88.8%", null, this.Div00);
            obj.set_taborder("19");
            obj.set_text("name");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1.63%", "50", null, "23", "88.8%", null, this.Div00);
            obj.set_taborder("20");
            obj.set_text("empl");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "46.09%", "238", null, "23", "44.35%", null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("date of hire");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "1.63%", "88", null, "23", "88.8%", null, this.Div00);
            obj.set_taborder("22");
            obj.set_text("department");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "1.63%", "126", null, "23", "88.8%", null, this.Div00);
            obj.set_taborder("23");
            obj.set_text("position");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1.63%", "225", null, "23", "88.8%", null, this.Div00);
            obj.set_taborder("24");
            obj.set_text("gender");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "1.63%", "265", null, "23", "88.8%", null, this.Div00);
            obj.set_taborder("25");
            obj.set_text("married");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "46.09%", "56", null, "23", "44.35%", null, this.Div00);
            obj.set_taborder("26");
            obj.set_text("notes");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "46.09%", "12", null, "23", "44.35%", null, this.Div00);
            obj.set_taborder("27");
            obj.set_text("email");
            obj.style.set_background("darkgray");
            obj.style.set_color("blue");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "58.37%", "12", null, "25", "26.85%", null, this.Div00);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "58.37%", "55", null, "135", "16.3%", null, this.Div00);
            obj.set_taborder("30");
            this.Div00.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "13.37%", "50", null, "22", "72.28%", null, this.Div00);
            obj.set_taborder("31");
            obj.set_type("string");
            obj.set_readonly("false");
            obj.set_mask("AA-###");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "13.37%", "94", null, "19", "72.17%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj = new Radio("Radio00", "absolute", "13.26%", "227", null, "26", "60.54%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_columncount("2");
            obj.set_innerdataset("@ds_gender");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj = new ListBox("ListBox00", "absolute", "13.26%", "128", null, "82", "72.5%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_innerdataset("@ds_rank");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj = new CheckBox("CheckBox00", "absolute", "13.15%", "266", null, "28", "75.76%", null, this.Div00);
            obj.set_taborder("35");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "57.93%", "238", null, "33", "15.76%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_value("null");
            obj = new Edit("Edit00", "absolute", "13.14%", "12", null, "25", "72.11%", null, this.Div00);
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "45.12%", "642", null, "54", "11.72%", null, this);
            obj.set_taborder("13");
            obj.set_text("ImageViewer00");
            obj.set_image("URL('kakao_account_login_btn_medium_wide')");
            obj.style.set_background("transparent");
            obj.style.set_color("transparent");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.64%", "109", null, "186", "7.32%", null, this);
            obj.set_taborder("14");
            obj.set_binddataset("dsEmployees");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"153\"/><Column size=\"153\"/><Column size=\"153\"/><Column size=\"153\"/><Column size=\"153\"/><Column size=\"153\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Employee ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Married\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:fullName\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:emplId\" mask=\"AA-###\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:deptId\" combodataset=\"ds_dept\" combocodecol=\"CODE\" combodatacol=\"VALUE\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:rank\" combodataset=\"ds_rank\" combocodecol=\"CODE\" combodatacol=\"VALUE\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:married\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "41.6%", "72", null, "22", "48.34%", null, this);
            obj.set_taborder("15");
            obj.set_text("검색결과초기화");
            this.addChild(obj.name, obj);

            obj = new Edit("sch_box", "absolute", "25%", "32", null, "25", "60.74%", null, this);
            obj.set_taborder("16");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17.97%", "32", null, "26", "75.88%", null, this);
            obj.set_taborder("17");
            obj.set_text("이름검색");
            obj.style.set_background("#8b8b8bff");
            obj.style.set_border("1 solid #646464ff");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17.97%", "68", null, "26", "75.88%", null, this);
            obj.set_taborder("18");
            obj.set_text("부서검색");
            obj.style.set_background("#8b8b8bff");
            obj.style.set_border("1 solid #646464ff");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("schDept", "absolute", "25.29%", "68", null, "26", "60.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_index("-1");

            obj = new Calendar("hire_Start", "absolute", "60.84%", "72", null, "22", "25.98%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");

            obj = new Calendar("hire_End", "absolute", "78.32%", "72", null, "22", "8.5%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");

            obj = new Static("Static03", "absolute", "74.61%", "78", null, "14", "22.27%", null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "53.42%", "72", null, "22", "40.43%", null, this);
            obj.set_taborder("23");
            obj.set_text("hiredate");
            obj.style.set_background("#7f8c9aff");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2.05%", "41", null, "43", "83.59%", null, this);
            obj.set_taborder("24");
            obj.set_text("Employee Management");
            obj.style.set_background("#8b8b8bff");
            obj.style.set_border("1 solid #646464ff");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 920, 299, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("#ffffffff");
            		p.style.set_color("white");
            		p.style.set_font("antialias 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.Edit00","value","dsEmployees","fullName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.MaskEdit00","value","dsEmployees","emplId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Edit02","value","dsEmployees","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.CheckBox00","value","dsEmployees","married");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.Combo00","value","dsEmployees","deptId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.TextArea00","value","dsEmployees","emplMemo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.Calendar00","value","dsEmployees","hireDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.ListBox00","value","dsEmployees","rank");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.Radio00","value","dsEmployees","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","sch_box","value","dsemlpID","SCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","schDept","value","dsemlpID","SCH_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("test001.xfdl", "Lib::Comm.xjs");
        this.registerScript("test001.xfdl", function(exports) {
        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        

        
        this.ImageViewer00_onclick = function(obj,e)
        {
        	alert("이미지클릭");
        }

        this.Div00_Edit02_ontextchanged = function(obj,e)
        {
        	//alert("Edit_email OnChanged");
        }

        
        this.ds_employees_oncolumnchanged = function(obj,e)
        {
        	//alert("ds_employees oncolumnchanged");
        }

        
        this.ds_employees_cancolumnchange = function(obj,e)
        {
        		if (e.columnid == "EMAIL")
        	{
        		if (e.newvalue.length > 0 
        		 && e.newvalue.indexOf("@") < 0)
        		{
        			alert("email에는 @가 반드시 입력되어야 합니다.");
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	}
        	else if (e.columnid == "FULL_NAME")
        	{
        		if (e.newvalue.length == 0)
        		{
        			alert("성명은 반드시 입력하세요");
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	}	
        }

        

        // 엔터서치
        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        

        

        // 조회
        this.fn_search = function(obj,e)
        {
        	
        	this.lfn_searchList();
        }

        // 조회함수
        this.lfn_searchList = function(){
        	this.gfn_serviceCall("testSearchList"); //테스트페이지 검색
        }

        
        //추가
        this.fn_add = function(obj,e)
        {
        	this.dsEmployees.addRow();
        }

        //삭제
        this.fn_delete = function(obj,e)
        {
        	this.dsEmployees.deleteRow(this.dsEmployees.rowposition);
        }

        

        //저장하기
        this.btn_Save_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        		this.gfn_serviceCall("testSaveList");
        	}
        }

        // 초기화 함수
        this.fn_reset = function(obj,e)
        {
        	// Edit검색
        	var sch_box = this.sch_box.set_value('');
        	
        	// Calendar 검색
        	var hire_start = this.hire_Start.set_value(null);
        	this.dsemlpID.setColumn(0,"HIRE_START",hire_start)
        	var hire_end = this.hire_End.set_value(null);
        	this.dsemlpID.setColumn(0,"HIRE_END",hire_end)
        	
        	// 조회함수호출
        	this.lfn_searchList();
        	
        }

        

        this.fn_cellAlign = function(obj,e)
        {
        	var cell = e.cell
        	if(cell==1){
        		if(this.dsemlpID.getColumn(0,"COL_ORDER")=="FULL_NAME ASC"){
        			this.dsemlpID.setColumn(0,"COL_ORDER","FULL_NAME DESC")
        			this.lfn_searchList();
        			return;
        		}
        		else{
        			this.dsemlpID.setColumn(0,"COL_ORDER","FULL_NAME ASC")
        			this.lfn_searchList();
        			return;
        		}
        	}
        	else if(cell==2){
        		if(this.dsemlpID.getColumn(0,"COL_ORDER")=="EMPL_ID ASC"){
        			this.dsemlpID.setColumn(0,"COL_ORDER","EMPL_ID DESC")
        			this.lfn_searchList();
        			return;
        		}
        		else{
        			this.dsemlpID.setColumn(0,"COL_ORDER","EMPL_ID ASC")
        			this.lfn_searchList();
        			return;
        		}
        	}
        	else if(cell==3){
        		if(this.dsemlpID.getColumn(0,"COL_ORDER")=="DEPT_ID ASC"){
        			this.dsemlpID.setColumn(0,"COL_ORDER","DEPT_ID DESC")
        			this.lfn_searchList();
        			return;
        		}
        		else{
        			this.dsemlpID.setColumn(0,"COL_ORDER","DEPT_ID ASC")
        			this.lfn_searchList();
        			return;
        		}
        	}
        	else if(cell==4){
        		if(this.dsemlpID.getColumn(0,"COL_ORDER")=="RANK ASC"){
        			this.dsemlpID.setColumn(0,"COL_ORDER","RANK DESC")
        			this.lfn_searchList();
        			return;
        		}
        		else{
        			this.dsemlpID.setColumn(0,"COL_ORDER","RANK ASC")
        			this.lfn_searchList();
        			return;
        		}
        	}
        	
        	
        	
        }

        this.fn_hireStart = function(obj,e)
        {
        	var hireStart = obj.value
        	this.dsemlpID.setColumn(0,"HIRE_START",hireStart)
        	this.lfn_searchList();
        }

        this.fn_hireEnd = function(obj,e)
        {
        	var hireEnd = obj.value
        	this.dsemlpID.setColumn(0,"HIRE_END",hireEnd)
        	this.lfn_searchList();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEmployees.addEventHandler("oncolumnchanged", this.ds_employees_oncolumnchanged, this);
            this.dsEmployees.addEventHandler("cancolumnchange", this.ds_employees_cancolumnchange, this);
            this.addEventHandler("onload", this.test001_onload, this);
            this.Button00.addEventHandler("onclick", this.fn_search, this);
            this.Button02.addEventHandler("onclick", this.fn_add, this);
            this.Button03.addEventHandler("onclick", this.fn_delete, this);
            this.Button04.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.Div00.Static06.addEventHandler("onclick", this.Div00_Static06_onclick, this);
            this.Div00.Edit02.addEventHandler("ontextchanged", this.Div00_Edit02_ontextchanged, this);
            this.Div00.Combo00.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.Div00.Radio00.addEventHandler("onitemclick", this.Div00_Radio00_onitemclick, this);
            this.Div00.ListBox00.addEventHandler("onitemclick", this.Div00_ListBox00_onitemclick, this);
            this.Div00.CheckBox00.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.Div00.Calendar00.addEventHandler("oneditclick", this.Div00_Calendar00_oneditclick, this);
            this.Div00.Edit00.addEventHandler("oneditclick", this.Div00_Edit00_oneditclick, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Grid00.addEventHandler("onheadclick", this.fn_cellAlign, this);
            this.Button01.addEventHandler("onclick", this.fn_reset, this);
            this.sch_box.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.sch_box.addEventHandler("onkeyup", this.searchEnter, this);
            this.hire_Start.addEventHandler("onchanged", this.fn_hireStart, this);
            this.hire_End.addEventHandler("onchanged", this.fn_hireEnd, this);

        };

        this.loadIncludeScript("test001.xfdl", true);

       
    };
}
)();
