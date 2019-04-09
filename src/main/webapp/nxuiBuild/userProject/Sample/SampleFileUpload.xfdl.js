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
                this.set_name("SampleFileUpload");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,716,614);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsfileList", this);
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "8", "24", "277", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Sample 파일/업로드 다운로드");
            obj.set_cssclass("WF_sta_Title");
            obj.style.set_font("antialias bold 10 Meriyo UI, malgun gothic, Helvetica, Droid Sans");
            obj.getSetter("class").set("sta_WA_subtitle");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "1.76%", "102", null, "37", "66.99%", null, this);
            obj.set_taborder("1");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "2.23%", "64", null, "18", "71.65%", null, this);
            obj.set_taborder("2");
            obj.set_text("단건 업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "2.05%", "154", null, "37", "87.5%", null, this);
            obj.set_taborder("3");
            obj.set_text("단건업로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "39.11%", "62", null, "18", "34.78%", null, this);
            obj.set_taborder("4");
            obj.set_text("단건 다운로드");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "38.97%", "96", null, "28", "18.85%", null, this);
            obj.set_taborder("5");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "39.39%", "146", null, "29", "45.95%", null, this);
            obj.set_taborder("6");
            obj.set_text("단건 다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.51%", "216", null, "91", "55.31%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsfileList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"fileName\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:fileName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 716, 614, this,
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
        this.registerScript("SampleFileUpload.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	var strUrl = "http://localhost:8080/crudexample/sample/fileUpload.do";
        	var bSucc = this.FileUpload00.upload(strUrl);	
        	
        	
        	
        }

        

        
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	
        	this.alert("파일 업로드 성공");
        	this.dsfileList.copyData(e.datasets[0]);

        }

        

        this.FileUpload00_onerror = function(obj,e)
        {
        	this.alert("다시 시도해 주시기 바랍니다.");
        }

        this.Button01_onclick = function(obj,e)
        {
        	var strFileName = this.dsfileList.getColumn(0,"fileName");
        	
        	this.FileDownload00.set_text(strFileName);
            this.FileDownload00.downloadfilename = strFileName;
        	this.FileDownload00.set_downloadurl("http://localhost:8080/crudexample/sample/fileDownload.do?file="+strFileName);
        	var bSucc = this.FileDownload00.download();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("SampleFileUpload.xfdl", true);

       
    };
}
)();
