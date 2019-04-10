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
                this.set_name("HTMLViewerSample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_autofittype", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">none</Col></Row><Row><Col id=\"Column0\">width</Col></Row><Row><Col id=\"Column0\">height</Col></Row><Row><Col id=\"Column0\">both</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_scrollbars", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">none</Col></Row><Row><Col id=\"Column0\">autovert</Col></Row><Row><Col id=\"Column0\">autohorz</Col></Row><Row><Col id=\"Column0\">autoboth</Col></Row><Row><Col id=\"Column0\">fixedvert</Col></Row><Row><Col id=\"Column0\">fixedhorz</Col></Row><Row><Col id=\"Column0\">fixedboth</Col></Row><Row><Col id=\"Column0\">alwaysvert</Col></Row><Row><Col id=\"Column0\">alwayshorz</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sample", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"html\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"html\">&lt;div style=&quot;width:300px; background: yellow; font-family: verdana; font-weight: bold; font-size:10pt;&quot;&gt;HTMLViewer Component !!&lt;/div&gt;</Col></Row><Row><Col id=\"html\">&lt;div style=&quot;width:300px; background: green; font-family: verdana; font-weight: bold; font-size:12pt;&quot;&gt;HTMLViewer Component !!&lt;/div&gt;</Col></Row><Row><Col id=\"html\">&lt;div style=&quot;width:300px; background: orange; font-family: verdana; font-weight: bold; font-size:14pt;&quot;&gt;HTMLViewer Component !!&lt;/div&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new HTMLViewer("HTMLViewer00", "absolute", "54", "43", "200", "200", null, null, this);
            obj.style.set_border("1px solid red");
            obj.style.set_padding("5 5 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "13", "72", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("scrollbars");
            obj.style.set_font("bold antialias 9 Verdana, malgun gothic");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "82", "11", "102", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("autoboth");
            obj.set_text("autoboth");
            obj.set_displaynulltext("scrollbars");
            obj.set_innerdataset("@ds_scrollbars");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_index("3");

            obj = new Static("Static01", "absolute", "200", "13", "80", "15", null, null, this);
            obj.set_taborder("3");
            obj.set_text("autofittype");
            obj.style.set_font("bold antialias 9 Verdana, malgun gothic");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "287", "10", "287", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_columncount("4");
            obj.set_innerdataset("@ds_autofittype");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_value("none");
            obj.set_index("0");

            obj = new Button("Button00", "absolute", "579", "8", "88", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_text("test 1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "675", "8", "88", "26", null, null, this);
            obj.set_taborder("6");
            obj.set_text("test 2");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "472", "47", "393", "195", null, null, this);
            obj.set_taborder("7");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new HTMLViewer("HTMLViewer01", "absolute", "472", "392", "200", "200", null, null, this);
            obj.style.set_border("1px solid blue");
            obj.style.set_padding("5 5 5 5");
            obj.set_autofittype("both");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "474", "264", "390", "111", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_sample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"261\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Data binding\"/></Band><Band id=\"body\"><Cell text=\"bind:html\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HTMLViewerSample");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","HTMLViewer01","html","ds_sample","html");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("HTMLViewerSample.xfdl", function(exports) {

        this.HTMLViewerSample_onload = function(obj,e)
        {	
        	this.HTMLViewer00.set_scrollbars(this.Combo00.value);
        	this.HTMLViewer00.set_autofittype(this.Radio00.value);
        }

        this.HTMLViewer00_onloadcompleted = function(obj,e)
        {
        	trace("HTMLViewer00_onloadcompleted==>"+e.html);
        }

        this.HTMLViewer00_onsize = function(obj,e)
        {
        	trace("HTMLViewer00_onsize==>"+ e.cx + " : " + e.cy);
        }

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.HTMLViewer00.set_scrollbars(e.postvalue);
        }

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.HTMLViewer00.set_autofittype(e.postvalue);
        }

        this.Button00_onclick = function(obj,e)
        {
        	var html = '<img src="http://www.playnexacro.com/image/frame/logo_top.png"><br><br>';
        		html += '<div style="width:300px; background: yellow; font-family: verdana; font-weight: bold; font-size:10pt;">HTMLViewer Component !!</div>';

        	this.HTMLViewer00.set_html(html);
        	this.TextArea00.set_value(html);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var html = '<img src="http://lorempixel.com/200/200/"><br><br><img src="http://lorempixel.com/300/300/">';
        	
        	this.HTMLViewer00.set_html(html);
        	this.TextArea00.set_value(html);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HTMLViewerSample_onload, this);
            this.HTMLViewer00.addEventHandler("onloadcompleted", this.HTMLViewer00_onloadcompleted, this);
            this.HTMLViewer00.addEventHandler("onsize", this.HTMLViewer00_onsize, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Radio00.addEventHandler("onitemchanged", this.Radio00_onitemchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("HTMLViewerSample.xfdl", true);

       
    };
}
)();
