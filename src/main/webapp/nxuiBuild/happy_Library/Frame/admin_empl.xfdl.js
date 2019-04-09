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
                this.set_name("adminEmpl");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("gainsboro");

            
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">admin/bookList.do</Col><Col id=\"svcid\">selectBookList</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsBookList=dsBookList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">selectEmplList</Col><Col id=\"sController\">admin/emplList.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"bAsync\">true</Col><Col id=\"args\"/><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"outds\">dsEmplList=dsEmplList</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"EmplNo\" type=\"STRING\" size=\"256\"/><Column id=\"emplId\" type=\"STRING\" size=\"256\"/><Column id=\"emplSalary\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmplList", this);
            obj._setContents("<ColumnInfo><Column id=\"emplNo\" type=\"STRING\" size=\"256\"/><Column id=\"emplId\" type=\"STRING\" size=\"256\"/><Column id=\"emplNm\" type=\"STRING\" size=\"256\"/><Column id=\"emplPhone\" type=\"STRING\" size=\"256\"/><Column id=\"emplAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emplBirth\" type=\"STRING\" size=\"256\"/><Column id=\"emplGender\" type=\"STRING\" size=\"256\"/><Column id=\"empldate\" type=\"STRING\" size=\"256\"/><Column id=\"emplImg\" type=\"STRING\" size=\"256\"/><Column id=\"emplSalary\" type=\"STRING\" size=\"256\"/><Column id=\"emplMarried\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button08", "absolute", "30.96%", "35", null, "62", "57.03%", null, this);
            obj.set_taborder("17");
            obj.set_text("직원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "89.84%", "118", null, "26", "3.91%", null, this);
            obj.set_taborder("20");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "57.13%", "662", null, "26", "36.62%", null, this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "88.87%", "662", null, "26", "4.88%", null, this);
            obj.set_taborder("22");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "80.47%", "662", null, "26", "13.28%", null, this);
            obj.set_taborder("23");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "10.45%", "253", null, "131", "59.57%", null, this);
            obj.set_taborder("24");
            obj.set_text("직원리스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "16.89%", "35", null, "62", "71.09%", null, this);
            obj.set_taborder("25");
            obj.set_text("회원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "3.32%", "34", null, "64", "85.35%", null, this);
            obj.set_taborder("26");
            obj.set_text("도서");
            obj.style.set_image("URL('theme://images/ico_treeitem.png')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "81.35%", "307", null, "175", "3.81%", null, this);
            obj.set_taborder("27");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "81.54%", "497", null, "37", "4.88%", null, this);
            obj.set_taborder("28");
            obj.getSetter("retry").set("0");
            obj.style.set_buttontext("불러오기");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "63.18%", "414", null, "24", "22.75%", null, this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "63.18%", "370", null, "24", "22.75%", null, this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "57.03%", "370", null, "22", "36.43%", null, this);
            obj.set_taborder("34");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85.16%", "274", null, "22", "7.23%", null, this);
            obj.set_taborder("35");
            obj.set_text("직원이미지");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "63.28%", "504", null, "22", "29.88%", null, this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "57.03%", "458", null, "15", "36.43%", null, this);
            obj.set_taborder("37");
            obj.set_text("입사일");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "57.03%", "412", null, "22", "36.43%", null, this);
            obj.set_taborder("38");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "57.03%", "260", null, "22", "36.43%", null, this);
            obj.set_taborder("39");
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "57.03%", "284", null, "24", "22.75%", null, this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "57.03%", "333", null, "22", "35.64%", null, this);
            obj.set_taborder("42");
            obj.set_text("담당구역");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "57.03%", "194", null, "22", "36.43%", null, this);
            obj.set_taborder("43");
            obj.set_text("직원번호");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "57.03%", "232", null, "24", "22.75%", null, this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "57.03%", "496", null, "15", "36.72%", null, this);
            obj.set_taborder("45");
            obj.set_text("결혼여부");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "65.63%", "330", null, "21", "22.75%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_text("1층A구역");

            obj = new Radio("Radio00", "absolute", "63.96%", "493", null, "26", "22.36%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_innerdataset("@ds_radioform");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_direction("vertical");

            obj = new Static("Static12", "absolute", "57.03%", "536", null, "15", "36.72%", null, this);
            obj.set_taborder("49");
            obj.set_text("월급");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "63.18%", "528", null, "24", "23.14%", null, this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "9.38%", "111", null, "24", "79.98%", null, this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "55.47%", "176", null, "1", "3.13%", null, this);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "55.47%", "639", null, "1", "2.34%", null, this);
            obj.set_taborder("55");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "29.69%", "647", null, "41", "51.56%", null, this);
            obj.set_taborder("56");
            obj.set_text("조회결과  0 건");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "3.13%", "177", null, "466", "46.48%", null, this);
            obj.set_taborder("57");
            obj.set_binddataset("dsEmplList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"emplNo\"/><Cell col=\"1\" disptype=\"normal\" text=\"emplId\"/><Cell col=\"2\" disptype=\"normal\" text=\"emplNm\"/><Cell col=\"3\" disptype=\"normal\" text=\"emplPhone\"/><Cell col=\"4\" disptype=\"normal\" text=\"emplAddr\"/><Cell col=\"5\" disptype=\"normal\" text=\"emplBirth\"/><Cell col=\"6\" disptype=\"normal\" text=\"emplGender\"/><Cell col=\"7\" disptype=\"normal\" text=\"empldate\"/><Cell col=\"8\" disptype=\"normal\" text=\"emplImg\"/><Cell col=\"9\" disptype=\"normal\" text=\"emplSalary\"/><Cell col=\"10\" disptype=\"normal\" text=\"emplMarried\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:emplNo\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:emplId\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:emplNm\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:emplPhone\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:emplAddr\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:emplBirth\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:emplGender\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:empldate\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:emplImg\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:emplSalary\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:emplMarried\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "3.32%", "110", null, "26", "88.87%", null, this);
            obj.set_taborder("58");
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "3.32%", "144", null, "26", "88.87%", null, this);
            obj.set_taborder("59");
            obj.set_text("담당구역");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "9.38%", "145", null, "24", "79.79%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_text("Combo02");

            obj = new Static("Static17", "absolute", "22.85%", "110", null, "26", "69.34%", null, this);
            obj.set_taborder("61");
            obj.set_text("입사일");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "52.83%", "112", null, "56", "40.33%", null, this);
            obj.set_taborder("65");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "28.42%", "114", null, "22", "60.94%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");

            obj = new Static("Static18", "absolute", "405", "116", "19", "19", null, null, this);
            obj.set_taborder("67");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "40.92%", "114", null, "22", "48.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("69");

            obj = new Static("Static19", "absolute", "22.85%", "142", null, "26", "69.34%", null, this);
            obj.set_taborder("70");
            obj.set_text("직원번호");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "28.42%", "143", null, "24", "60.94%", null, this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "63.28%", "452", null, "25", "22.75%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("72");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("gainsboro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsEmplList","emplNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit03","value","dsEmplList","emplNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit01","value","dsEmplList","emplAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit02","value","dsEmplList","emplPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Calendar01","value","dsEmplList","empldate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit07","value","dsEmplList","emplSalary");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("admin_empl.xfdl", "Lib::Comm.xjs");
        this.registerScript("admin_empl.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Practice::admin_book.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.go("Practice::admin_user.xfdl");
        }

        this.Button08_onclick = function(obj,e)
        {
        	this.go("Practice::admin_empl.xfdl");
        }

        

        // 페이지 로드했을때 리스트 출력
        this.adminEmpl_onload = function(obj,e)
        {
        	this.gfn_serviceCall("selectEmplList"); 
        }

        
        // 검색버튼 클릭시 검색어 세팅

        this.Button07_onclick = function(obj,e)
        {
        	this.dsSchMap.setColumn(this.dsSchMap.rowposition , "EmplNo" );
        	this.dsSchMap.setColumn(this.dsSchMap.rowposition , "bookNm" , this.Edit05.value);
        	this.gfn_serviceCall("selectEmplList"); 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.adminEmpl_onload, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static07_onclick, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Static12.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static15_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static15_onclick, this);
            this.Static17.addEventHandler("onclick", this.Static15_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Static19.addEventHandler("onclick", this.Static15_onclick, this);

        };

        this.loadIncludeScript("admin_empl.xfdl", true);

       
    };
}
)();
