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
                this.set_name("pie");
                this.set_titletext("pie");
                this._setFormPosition(0,0,1024,723);
            }
            this.style.set_background("gainsboro");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"svcid\" type=\"STRING\" size=\"256\"/><Column id=\"sController\" type=\"STRING\" size=\"256\"/><Column id=\"inds\" type=\"STRING\" size=\"256\"/><Column id=\"outds\" type=\"STRING\" size=\"256\"/><Column id=\"args\" type=\"STRING\" size=\"256\"/><Column id=\"bAsync\" type=\"STRING\" size=\"512\"/><Column id=\"nDataType\" type=\"STRING\" size=\"256\"/><Column id=\"bCompress\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svcid\">selectTotalCate</Col><Col id=\"sController\">admin/selectTotalCate.do</Col><Col id=\"inds\"/><Col id=\"bAsync\">true</Col><Col id=\"args\"/><Col id=\"nDataType\">0</Col><Col id=\"bCompress\">false</Col><Col id=\"outds\">dsTotal=dsTotal dsTotal2=dsTotal2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotal2", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new EcoChart("ecochart", "absolute", "264", "69", null, "323", "269", null, this);
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 15 15");
            this.addChild(obj.name, obj);

            obj = new Static("st_male", "absolute", null, "37", "111", "20", "198", null, this);
            obj.set_taborder("18");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_female", "absolute", null, "37", "94", "20", "29", null, this);
            obj.set_taborder("19");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "fixed", "6.15%", "9.96%", null, "24.9%", "76.56%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsTotal");
            obj.style.set_color("black");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리\"/><Cell col=\"1\" text=\"합계\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:category\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new EcoChart("ecochart2", "absolute", "264", "413", null, "323", "269", null, this);
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 15 15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "fixed", "6.15%", "61.96%", null, "8.58%", "76.56%", null, this);
            obj.set_taborder("24");
            obj.set_binddataset("dsTotal2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성별\"/><Cell col=\"1\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:category\"/><Cell col=\"1\" text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "30.86%", "19", null, "77", "30.86%", null, this);
            obj.set_taborder("25");
            obj.set_text("도서 통계");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 18 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30.08%", "357", null, "77", "31.64%", null, this);
            obj.set_taborder("26");
            obj.set_text("회원 성별 통계");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 18 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 723, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("EcoChartSample");
            		p.set_titletext("pie");
            		p.style.set_background("gainsboro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("admin_main.xfdl", "Lib::Comm.xjs");
        this.registerScript("admin_main.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";
        var chart;
        var chart2;

        

        this.pie_onload = function(obj,e)
        {	
        	this.gfn_serviceCall("selectTotalCate");
        	
        	
        }
        this.lfn_cmmCallback = function(svcId,errorcode,errormsg){
        	
        	
        	if(errorcode < 0)
        	{
        	   Iject.alert(errormsg,"오류");			
        	   return;
        	} 
        	else{ 
        			this.drawChart2();
        			this.drawChart();
        			
        	}
        }

        
        this.drawChart = function()
        {
        	if (!chart)
        	{	
        		var config = {
        			"type": "Pie",
        			"chart": {
        				"id": "pie chart",
        				"bindDataset": "dsTotal",
        				"bindCategory": "category",
        				"bindValue": "value",
        				"colors": "color20",
        				"plotHoverable": true,
        				"radius": 1,
        				"borderWidth": 2,
        				"labelRadius": 0.7,
        				"labelFontSize": 8,
        				"labelColor": "black",
        				"labelFontType": "bold",
        				"labelWordwrap": true,
        				"labelMaxWidth": 100
        			},
        			"legend": {
        				"align": "center",
        				"labelFontSize": 8,
        				"switchable": false
        			},
        			"tooltip": {
        				"text": "[%x] [%y]%",
        				"fontType": "normal",
        				"fontSize": 10
        			}
        		};
        	
        		this.ecochart.set_config(config);
        	}
        	
        	chart = this.ecochart.getChart();
        	
        	this.ecochart.draw();

        }

        this.drawChart2 = function()
        {
        	if (!chart2)
        	{	
        		var config = {
        			"type": "Pie",
        			"chart": {
        				"id": "pie chart2",
        				"bindDataset": "dsTotal2",
        				"bindCategory": "category",
        				"bindValue": "value",
        				"colors": "color20",
        				"plotHoverable": true,
        				"radius": 1,
        				"borderWidth": 2,
        				"labelRadius": 0.7,
        				"labelFontSize": 8,
        				"labelColor": "black",
        				"labelFontType": "bold",
        				"labelWordwrap": true,
        				"labelMaxWidth": 100
        			},
        			"legend": {
        				"align": "center",
        				"labelFontSize": 8,
        				"switchable": false
        			},
        			"tooltip": {
        				"text": "[%x] [%y]%",
        				"fontType": "normal",
        				"fontSize": 10
        			}
        		};
        	
        		this.ecochart2.set_config(config);
        	}
        	
        	chart2 = this.ecochart2.getChart();
        	
        	this.ecochart2.draw();
        }

        

        

        
        this.Button00_onclick = function(obj,e)
        {
        	this.drawChart();
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.drawChart2();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pie_onload, this);

        };

        this.loadIncludeScript("admin_main.xfdl", true);

       
    };
}
)();
