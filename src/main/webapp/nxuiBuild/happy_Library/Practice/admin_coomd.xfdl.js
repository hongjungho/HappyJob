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
                this.set_name("coomd");
                this.set_titletext("coomd");
                this._setFormPosition(0,0,1024,723);
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">selectComList</Col><Col id=\"sController\">admin/selectComList.do</Col><Col id=\"inds\"/><Col id=\"bAsync\">true</Col><Col id=\"args\"/><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"outds\">dsTotal=dsTotal dsTotal2=dsTotal2</Col><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"svcid\">saveTotal1</Col><Col id=\"sController\">admin/saveTotal1.do</Col><Col id=\"inds\">dsTotal=dsTotal:U</Col><Col id=\"outds\"/><Col id=\"args\"/><Col id=\"bCompress\">false</Col><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"bAsync\">true</Col><Col id=\"nDataType\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"commCode\" type=\"STRING\" size=\"256\"/><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/><Column id=\"detailName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotal2", this);
            obj._setContents("<ColumnInfo><Column id=\"commCode\" type=\"STRING\" size=\"256\"/><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/><Column id=\"detailName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_male", "absolute", null, "37", "111", "20", "198", null, this);
            obj.set_taborder("18");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_female", "absolute", null, "37", "94", "20", "29", null, this);
            obj.set_taborder("19");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "26.37%", "107", null, "253", "55.47%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsTotal");
            obj.style.set_align("center middle");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"명칭\"/></Band><Band id=\"body\"><Cell text=\"bind:detailCode\"/><Cell col=\"1\" text=\"bind:detailName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "29.1%", "492", null, "212", "55.18%", null, this);
            obj.set_taborder("21");
            obj.set_binddataset("dsTotal2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"명칭\"/></Band><Band id=\"body\"><Cell text=\"bind:detailCode\"/><Cell col=\"1\" text=\"bind:detailName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "46.68%", "200", null, "35", "44.53%", null, this);
            obj.set_taborder("22");
            obj.set_text("명칭");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "50.68%", "200", null, "35", "37.6%", null, this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "57.81%", "264", null, "22", "37.79%", null, this);
            obj.set_taborder("25");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "47.17%", "264", null, "22", "48.44%", null, this);
            obj.set_taborder("26");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "52.54%", "264", null, "22", "43.07%", null, this);
            obj.set_taborder("27");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "50.68%", "144", null, "35", "37.6%", null, this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "46.68%", "144", null, "35", "44.53%", null, this);
            obj.set_taborder("29");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "50.68%", "568", null, "35", "37.6%", null, this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "57.81%", "632", null, "22", "37.79%", null, this);
            obj.set_taborder("31");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "47.17%", "632", null, "22", "48.44%", null, this);
            obj.set_taborder("32");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "52.54%", "632", null, "22", "43.07%", null, this);
            obj.set_taborder("33");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "50.68%", "512", null, "35", "37.6%", null, this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "46.68%", "512", null, "35", "44.53%", null, this);
            obj.set_taborder("35");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "46.68%", "568", null, "35", "44.53%", null, this);
            obj.set_taborder("36");
            obj.set_text("명칭");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "3.81%", "17", null, "77", "64.16%", null, this);
            obj.set_taborder("37");
            obj.set_text("분류 관리");
            obj.style.set_color("#000000ff");
            obj.style.set_font("bold 20 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 723, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("EcoChartSample");
            		p.set_titletext("coomd");
            		p.style.set_background("gainsboro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsTotal","detailName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit01","value","dsTotal","detailCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit02","value","dsTotal2","detailName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit03","value","dsTotal2","detailCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("admin_coomd.xfdl", "Lib::Comm.xjs");
        this.registerScript("admin_coomd.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
        	
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");			
        	   return;
        	} 
        	else{ 
        		trace("dd");
        		this.dsTotal.filter("commCode == 'A01'");
        		this.dsTotal2.filter("commCode == 'P01'");
        	}
        }

        

        this.coomd_onload = function(obj,e)
        {
        	//var abc = this.dsTotal.filter("commCode == 'P01'");
        	this.gfn_serviceCall("selectComList");
        	//this.Grid00.setBindDataset(abc);
        	//this.Grid00.setBindDataset(this.dsTotal.filter("commCode == 'P01'"));
        }

        

        

        this.Button02_onclick = function(obj,e)
        {
        	this.dsTotal.addRow();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.coomd_onload, this);
            this.Grid00.addEventHandler("cantreestatuschange", this.Grid00_cantreestatuschange, this);
            this.Edit00.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Edit01.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Edit02.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Edit03.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);

        };

        this.loadIncludeScript("admin_coomd.xfdl", true);

       
    };
}
)();
