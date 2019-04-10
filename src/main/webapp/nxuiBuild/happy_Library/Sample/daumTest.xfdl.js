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
                this.set_name("daumTest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,867,181);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAddr", this);
            obj._setContents("<ColumnInfo><Column id=\"postcode\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "0%", "0", null, "110", "0.23%", null, this);
            obj.set_taborder("0");
            obj.set_url("http://localhost:8080/crudexample/nxuiBuild/happy_Library/Practice/daumTest.jsp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "1.96%", "122", null, "38", "81.89%", null, this);
            obj.set_taborder("1");
            obj.set_text("주소입력");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 867, 181, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","WebBrowser00","","Dataset00","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("daumTest.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	  var _doc = this.WebBrowser00.getProperty("document");
           
            var dom1 = _doc.callMethod("getElementById", "sample6_postcode");
            var dom2 = _doc.callMethod("getElementById", "sample6_address");
            var dom3 = _doc.callMethod("getElementById", "sample6_detailAddress");
            var dom4 = _doc.callMethod("getElementById", "sample6_extraAddress");

            var str1 = dom1.getProperty("value");
            var str2 = dom2.getProperty("value");
            var str3 = dom3.getProperty("value");
            var str4 = dom4.getProperty("value");
            
            
            var fullAddr = "(" + str1 + ") " + str2 + str3 + str4
            alert(fullAddr)
            
            
            
            this.opener.Div01.Div07.roadAddrPart1.set_value(fullAddr)
            this.close();
            
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_load, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("daumTest.xfdl", true);

       
    };
}
)();
