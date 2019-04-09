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
                this.set_name("SampleCrud_P1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,449,478);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchList", this);
            obj._setContents("<ColumnInfo><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"position\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">홍길동</Col><Col id=\"age\">42</Col><Col id=\"department\">정보팀</Col><Col id=\"position\">박사</Col></Row><Row><Col id=\"department\">연구1팀</Col><Col id=\"name\">최부석</Col><Col id=\"age\">44</Col><Col id=\"position\">책임연구원</Col></Row><Row><Col id=\"department\">연구2팀</Col><Col id=\"name\">황석규</Col><Col id=\"age\">51</Col><Col id=\"position\">사업총괄</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSchMap", this);
            obj._setContents("<ColumnInfo><Column id=\"searchYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "1.56%", "56", null, "223", "3.12%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_SearchList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"department\"/><Cell col=\"1\" disptype=\"normal\" text=\"name\"/><Cell col=\"2\" disptype=\"normal\" text=\"age\"/><Cell col=\"3\" disptype=\"normal\" text=\"position\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:department\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:age\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:position\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "40.98%", "308", null, "28", "42.54%", null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "11", "14", "205", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("연구책임자 목록");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 449, 478, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SampleCrud_P1.xfdl", "Lib::Comm.xjs");
        this.registerScript("SampleCrud_P1.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        //닫기
        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        }

        //화면초기호출
        this.Sample0002_P1_onload = function(obj,e)
        {
        	//부모창 값을 팝업창 데이터셋에 옮김
        	this.gfn_initDsCopy(this.parent.dsSchMap,this.dsSchMap,"append");
        	
        }

        
        //그리드 더블클릭시 발생하는 이벤트
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var row = e.row;
        	
        	var sNm = this.ds_SearchList.getColumn(row, "name");
        	var sAge = this.ds_SearchList.getColumn(row, "age");
        	
        	//부모창 콜백에 파라미터 넘김	
        	this.opener.popupRtn(sNm,sAge);
        	
        	//닫기 	
        	this.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("SampleCrud_P1.xfdl", true);

       
    };
}
)();
