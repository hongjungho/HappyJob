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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">selectEmplList</Col><Col id=\"sController\">admin/emplList.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"bAsync\">true</Col><Col id=\"args\"/><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"outds\">dsEmplList=dsEmplList</Col></Row><Row><Col id=\"svcid\">saveEmplList</Col><Col id=\"sController\">admin/saveEmplList.do</Col><Col id=\"inds\">dsEmplList=dsEmplList:U</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"emplNo\" type=\"STRING\" size=\"256\"/><Column id=\"emplNm\" type=\"STRING\" size=\"256\"/><Column id=\"emplStartdate\" type=\"STRING\" size=\"256\"/><Column id=\"emplEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"emplTaskCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmplList", this);
            obj._setContents("<ColumnInfo><Column id=\"emplNo\" type=\"STRING\" size=\"256\"/><Column id=\"emplNm\" type=\"STRING\" size=\"256\"/><Column id=\"emplPhone\" type=\"STRING\" size=\"256\"/><Column id=\"emplAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emplBirth\" type=\"STRING\" size=\"256\"/><Column id=\"emplGender\" type=\"STRING\" size=\"256\"/><Column id=\"empldate\" type=\"STRING\" size=\"256\"/><Column id=\"emplImg\" type=\"STRING\" size=\"256\"/><Column id=\"emplSalary\" type=\"STRING\" size=\"256\"/><Column id=\"emplMarried\" type=\"STRING\" size=\"256\"/><Column id=\"emplTaskCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button08", "absolute", "30.96%", "35", null, "62", "57.03%", null, this);
            obj.set_taborder("17");
            obj.set_text("직원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Button("createButton", "absolute", "73.44%", "630", null, "26", "20.31%", null, this);
            obj.set_taborder("20");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("deletebutton", "absolute", "81.25%", "630", null, "26", "12.5%", null, this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("cancleButton", "absolute", "88.87%", "630", null, "26", "4.88%", null, this);
            obj.set_taborder("22");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("saveButton", "absolute", "64.84%", "630", null, "26", "28.91%", null, this);
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

            obj = new ImageViewer("ImageViewer00", "absolute", "81.35%", "299", null, "175", "3.81%", null, this);
            obj.set_taborder("27");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "81.54%", "489", null, "37", "4.88%", null, this);
            obj.set_taborder("28");
            obj.getSetter("retry").set("0");
            obj.style.set_buttontext("불러오기");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "63.18%", "362", null, "24", "22.75%", null, this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "57.03%", "362", null, "22", "36.43%", null, this);
            obj.set_taborder("34");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85.16%", "266", null, "22", "7.23%", null, this);
            obj.set_taborder("35");
            obj.set_text("직원이미지");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "63.28%", "496", null, "22", "29.88%", null, this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "57.03%", "450", null, "15", "36.43%", null, this);
            obj.set_taborder("37");
            obj.set_text("입사일");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "57.03%", "404", null, "22", "36.43%", null, this);
            obj.set_taborder("38");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "57.03%", "252", null, "22", "36.43%", null, this);
            obj.set_taborder("39");
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "57.03%", "325", null, "22", "35.64%", null, this);
            obj.set_taborder("42");
            obj.set_text("담당구역");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "57.03%", "218", null, "22", "36.43%", null, this);
            obj.set_taborder("43");
            obj.set_text("직원번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "57.03%", "528", null, "15", "36.72%", null, this);
            obj.set_taborder("45");
            obj.set_text("결혼여부");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "65.63%", "322", null, "21", "22.75%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_index("-1");

            obj = new Static("Static12", "absolute", "77.34%", "568", null, "15", "16.41%", null, this);
            obj.set_taborder("49");
            obj.set_text("월급");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "35.16%", "127", null, "24", "54.2%", null, this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "55.47%", "200", null, "1", "3.13%", null, this);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "55.47%", "607", null, "1", "2.34%", null, this);
            obj.set_taborder("55");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "29.69%", "647", null, "41", "62.01%", null, this);
            obj.set_taborder("56");
            obj.set_text("조회결과  ");
            obj.style.set_font("9 Dotum,Arial Black,Perpetua Titling MT");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "3.13%", "177", null, "466", "46.48%", null, this);
            obj.set_taborder("57");
            obj.set_binddataset("dsEmplList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"103\"/><Column size=\"132\"/><Column size=\"122\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직원번호\"/><Cell col=\"1\" text=\"직원이름\"/><Cell col=\"2\" text=\"입사일\"/><Cell col=\"3\" text=\"월급\"/><Cell col=\"4\" text=\"작업코드\"/></Band><Band id=\"body\"><Cell text=\"bind:emplNo\"/><Cell col=\"1\" text=\"bind:emplNm\"/><Cell col=\"2\" text=\"bind:empldate\"/><Cell col=\"3\" text=\"bind:emplSalary\"/><Cell col=\"4\" text=\"bind:emplTaskCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "29.1%", "126", null, "26", "63.09%", null, this);
            obj.set_taborder("58");
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "8.79%", "128", null, "26", "83.4%", null, this);
            obj.set_taborder("59");
            obj.set_text("담당구역");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "14.84%", "129", null, "24", "74.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_index("-1");

            obj = new Static("Static17", "absolute", "49.41%", "126", null, "26", "42.77%", null, this);
            obj.set_taborder("61");
            obj.set_text("입사일");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "82.03%", "110", null, "56", "11.13%", null, this);
            obj.set_taborder("65");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "54.2%", "130", null, "22", "35.16%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");

            obj = new Static("Static18", "absolute", "669", "132", "19", "19", null, null, this);
            obj.set_taborder("67");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "66.7%", "130", null, "22", "22.66%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("69");

            obj = new Calendar("Calendar01", "absolute", "63.28%", "444", null, "25", "22.75%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("72");

            obj = new MaskEdit("MaskEdit00", "absolute", "81.84%", "560", null, "25", "3.91%", null, this);
            obj.set_taborder("73");
            obj.set_mask("###,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "63.28%", "402", null, "26", "22.75%", null, this);
            obj.set_taborder("74");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "64.06%", "208", null, "42", "26.27%", null, this);
            obj.set_taborder("75");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "57.03%", "568", null, "15", "36.72%", null, this);
            obj.set_taborder("76");
            obj.set_text("성별");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "57.03%", "490", null, "15", "36.43%", null, this);
            obj.set_taborder("78");
            obj.set_text("생년월일");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "63.18%", "482", null, "24", "22.75%", null, this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "63.96%", "525", null, "26", "22.36%", null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">기혼</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미혼</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("80");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Radio("Radio01", "absolute", "63.96%", "565", null, "26", "22.36%", null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("81");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static21", "absolute", "35.45%", "642", null, "47", "59.57%", null, this);
            obj.set_taborder("82");
            obj.style.set_font("9 Dotum,Arial Black,Perpetua Titling MT");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "37.5%", "656", null, "25", "58.4%", null, this);
            obj.set_taborder("83");
            obj.set_text("건");
            obj.style.set_font("9 Dotum,Arial Black,Perpetua Titling MT");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "57.03%", "276", null, "24", "22.75%", null, this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "85.25%", "512", null, "20", "7.81%", null, this);
            obj.set_taborder("85");
            obj.set_text("이미지 저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "44.82%", "36", null, "62", "43.16%", null, this);
            obj.set_taborder("86");
            obj.set_text("공통분류관리");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);


            
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
            obj = new BindItem("item1","Edit03","value","dsEmplList","emplNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit01","value","dsEmplList","emplAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Calendar01","value","dsEmplList","empldate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","MaskEdit01","value","dsEmplList","emplPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","MaskEdit00","value","dsEmplList","emplSalary");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Static02","text","dsEmplList","emplNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Calendar02","value","dsSchMap","emplEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Calendar00","value","dsSchMap","emplStartdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Edit05","value","dsSchMap","emplNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit00","value","dsEmplList","emplBirth");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Radio00","value","dsEmplList","emplMarried");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Radio01","value","dsEmplList","emplGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("","","","","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Combo01","value","dsEmplList","emplTaskCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Combo02","value","dsSchMap","emplTaskCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","FileUpload00","uploadurl","dsEmplList","emplImg");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("admin_empl.xfdl", "Lib::Comm.xjs");
        this.addIncludeScript("admin_empl.xfdl", "Lib::CommCboCode.xjs");
        this.registerScript("admin_empl.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::CommCboCode.xjs", null, exports); }	//include "Lib::CommCboCode.xjs";

        // 콤보 리스트 셋팅
        this.lfn_settingSearchBar = function(){

        	
        	var cdParam = new Array();
        	
        	
        	cdParam[0]  = ["CBO",  "P01", "Combo02", 0, "ALL"];
        	cdParam[1]  = ["CBO",  "P01", "Combo01", 0, "SEL"];
        	
        	this.gfn_getCboComplexCmmnCd3(this.name, cdParam);
        	this.Combo02.index = 0;
        	
        	

        }

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Practice::admin_book.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.go("Practice::admin_user.xfdl");
        }

        
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
        	
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");			
        	   return;
        	} 
        	else{ 
        		if(svcId.svcId == "saveEmplList"){
        			alert("저장완료");
        			this.gfn_serviceCall("selectEmplList"); 
        		}
        	
        		this.Static21.set_text(this.dsEmplList.getRowCount());
        	}
        }

        // SELECT LIST EMPLOYEE
        this.adminEmpl_onload = function(obj,e)

        {
        	this.lfn_settingSearchBar();
        	this.gfn_serviceCall("selectEmplList"); 

        }

        
        // 조건검색

        this.Button07_onclick = function(obj,e)
        {	
        	this.gfn_serviceCall("selectEmplList"); 
        }

        // INSERT
        this.createButton_onclick = function(obj,e)
        {
        	this.dsEmplList.addRow();
        	this.dsEmplList.setColumn(this.dsEmplList.rowposition,"emplImg"," ");
        }

        // DELETE
        this.deletebutton_onclick = function(obj,e)
        {
        	if(this.dsEmplList.getRowCount() <= 0){
        		
        		this.alert("삭제할 대상이 없습니다.");
        		return false;
        	}
        	
        	this.dsEmplList.deleteRow(this.dsEmplList.rowposition);
        	
        	
        }

        // 변경사항 저장 

        this.saveButton_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        		this.gfn_serviceCall("saveEmplList");
        	}
        }

        

        

        this.btn_input0_onclick = function(obj,e)
        {
            var nArow = -1;
        	for (var i = 0; i < this.fup_input.getItemCount(false); i++)
        	{
        		if (this.fup_input.hasValue(i))
        		{
        			nArow = this.ds_data.addRow();
        			this.ds_data.setColumn(nArow , "COL0", this.fup_input.getValue(i));        		
        		}
        	}

        	var sUrl  = "SvcJsp::fileUpload.jsp?PATH=upload";
        	var bSucc = this.fup_input.upload(sUrl);
        }

        

        

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.adminEmpl_onload, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.createButton.addEventHandler("onclick", this.createButton_onclick, this);
            this.deletebutton.addEventHandler("onclick", this.deletebutton_onclick, this);
            this.saveButton.addEventHandler("onclick", this.saveButton_onclick, this);
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
            this.Edit05.addEventHandler("oneditclick", this.Edit05_oneditclick, this);
            this.Static14.addEventHandler("onclick", this.Static14_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static15_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static15_onclick, this);
            this.Static17.addEventHandler("onclick", this.Static15_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Calendar00.addEventHandler("oneditclick", this.Calendar00_oneditclick, this);
            this.Calendar02.addEventHandler("oneditclick", this.Calendar02_oneditclick, this);
            this.Static19.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static20.addEventHandler("onclick", this.Static07_onclick, this);
            this.Radio01.addEventHandler("onitemclick", this.Radio01_onitemclick, this);
            this.Button03.addEventHandler("onclick", this.Button08_onclick, this);

        };

        this.loadIncludeScript("admin_empl.xfdl", true);

       
    };
}
)();
