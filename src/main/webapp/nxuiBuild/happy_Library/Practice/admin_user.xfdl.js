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
                this.set_name("admin_user");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("gainsboro");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"authorCd\" type=\"STRING\" size=\"256\"/><Column id=\"brrCdnum\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"userBirth\" type=\"STRING\" size=\"256\"/><Column id=\"userGender\" type=\"STRING\" size=\"256\"/><Column id=\"userEmail\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sController\">admin/bookList.do</Col><Col id=\"svcid\">selectBookList</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsBookList=dsBookList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">selectEmplList</Col><Col id=\"sController\">admin/emplList.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"bAsync\">true</Col><Col id=\"args\"/><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"outds\">dsEmplList=dsEmplList</Col></Row><Row><Col id=\"svcid\">selectUserList</Col><Col id=\"sController\">admin/userList.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"outds\">dsUserList=dsUserList</Col><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"args\"/></Row><Row><Col id=\"svcid\">deleteUser</Col><Col id=\"sController\">admin/userDelete.do</Col><Col id=\"inds\">dsSchMap=dsSchMap</Col><Col id=\"args\"/><Col id=\"outds\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"selectCode\" type=\"STRING\" size=\"256\"/><Column id=\"selectVal\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"selectCode\">1</Col><Col id=\"selectVal\">회원명</Col></Row><Row><Col id=\"selectCode\">2</Col><Col id=\"selectVal\">회원아이디</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "56.64%", "284", null, "22", "36.43%", null, this);
            obj.set_taborder("2");
            obj.set_text("회원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "56.64%", "572", null, "22", "35.64%", null, this);
            obj.set_taborder("4");
            obj.set_text("회원 주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "56.64%", "344", null, "22", "37.6%", null, this);
            obj.set_taborder("8");
            obj.set_text("아이디");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "63.28%", "552", null, "22", "29.88%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "3.32%", "34", null, "64", "85.35%", null, this);
            obj.set_taborder("28");
            obj.set_text("도서");
            obj.style.set_image("URL('theme://images/ico_treeitem.png')");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "16.89%", "35", null, "62", "71.09%", null, this);
            obj.set_taborder("29");
            obj.set_text("회원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "12.11%", "128", null, "24", "71.88%", null, this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "27.93%", "127", null, "25", "66.89%", null, this);
            obj.set_taborder("39");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "30.96%", "35", null, "62", "57.03%", null, this);
            obj.set_taborder("40");
            obj.set_text("직원");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "56.64%", "600", null, "24", "17.97%", null, this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "64.45%", "284", null, "24", "17.97%", null, this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "56.64%", "224", null, "22", "36.72%", null, this);
            obj.set_taborder("43");
            obj.set_text("회원번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "56.64%", "404", null, "22", "34.38%", null, this);
            obj.set_taborder("44");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "56.64%", "496", null, "22", "35.94%", null, this);
            obj.set_taborder("45");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "64.45%", "343", null, "24", "17.97%", null, this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "56.64%", "524", null, "24", "17.97%", null, this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "64.45%", "223", null, "24", "17.97%", null, this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "3.03%", "128", null, "24", "87.7%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("selectCode");
            obj.set_datacolumn("selectVal");
            obj.set_displayrowcount("-1");
            obj.set_value("1");
            obj.set_text("회원명");
            obj.set_index("0");

            obj = new Static("Static05", "absolute", "55.47%", "176", null, "1", "3.13%", null, this);
            obj.set_taborder("52");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "55.47%", "639", null, "1", "2.34%", null, this);
            obj.set_taborder("53");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "29.69%", "647", null, "41", "51.56%", null, this);
            obj.set_taborder("54");
            obj.set_text("조회결과  0 건");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "57.13%", "662", null, "26", "36.62%", null, this);
            obj.set_taborder("58");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "3.13%", "180", null, "510", "49.8%", null, this);
            obj.set_taborder("59");
            obj.set_binddataset("dsUserList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"73\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"117\"/><Column size=\"132\"/><Column size=\"94\"/><Column size=\"112\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회원번호\"/><Cell col=\"1\" text=\"회원이름\"/><Cell col=\"2\" text=\"회원 ID\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"userEmail\"/><Cell col=\"5\" text=\"성별코드\"/><Cell col=\"6\" text=\"생년월일\"/></Band><Band id=\"body\"><Cell text=\"bind:userNo\"/><Cell col=\"1\" text=\"bind:userNm\"/><Cell col=\"2\" text=\"bind:userId\"/><Cell col=\"3\" text=\"bind:userPhone\"/><Cell col=\"4\" text=\"bind:userEmail\"/><Cell col=\"5\" text=\"bind:userGender\"/><Cell col=\"6\" text=\"bind:userBirth\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "56.64%", "460", null, "22", "34.38%", null, this);
            obj.set_taborder("60");
            obj.set_text("대출증번호");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "64.45%", "459", null, "24", "17.97%", null, this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "64.45%", "403", null, "26", "18.16%", null, this);
            obj.set_taborder("62");
            obj.set_maskchar("_");
            obj.set_mask("###-####-####");
            obj.set_type("string");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "44.82%", "36", null, "62", "43.16%", null, this);
            obj.set_taborder("63");
            obj.style.set_image("URL('theme://images/img_grip.png')");
            obj.set_text("공통분류관리");
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
            obj = new BindItem("item0","Edit03","value","dsUserList","userNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit07","value","dsUserList","userNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit00","value","dsUserList","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit04","value","dsUserList","brrCdnum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit02","value","dsUserList","userEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit06","value","dsUserList","userAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","MaskEdit00","value","dsUserList","userPhone");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("admin_user.xfdl", "Lib::Comm.xjs");
        this.registerScript("admin_user.xfdl", function(exports) {
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

        
        // 페이지 로드

        this.admin_user_onload = function(obj,e){

        	this.gfn_serviceCall("selectUserList"); 
        	
        	

        }

        this.Button07_onclick = function(obj,e)
        {	

        	if(this.Combo00.value == 1){
        		
        		this.dsSchMap.setColumn(0,"userNm",this.Edit05.value);

        	}else if (this.Combo00.value == 2) {
        		this.dsSchMap.setColumn(0,"userId",this.Edit05.value);
        	}
        	this.gfn_serviceCall("selectUserList");
        	
        }

        //삭제
        this.Button04_onclick = function(obj,e)
        {
        	if(this.confirm("정말 삭제하시겠습니까?")){
        		this.dsSchMap.setColumn(0,"userNo",this.Edit03.value);
        		this.gfn_serviceCall("deleteUser");
        	}
        	
        	
        	
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.admin_user_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static01_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button08_onclick, this);

        };

        this.loadIncludeScript("admin_user.xfdl", true);

       
    };
}
)();
