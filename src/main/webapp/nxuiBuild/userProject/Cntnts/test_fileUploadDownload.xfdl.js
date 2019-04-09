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
                this.set_name("WebEditorTest");
                this.set_titletext("파일업로드");
                this._setFormPosition(0,0,1005,690);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_File", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_File00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_File01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STRE_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORIGN_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new FileUpload("FileUpload01", "absolute", "38", "20", "461", "20", null, null, this);
            obj.getSetter("innerdataset").set("@dsFilePath");
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.style.set_buttonsize("100");
            obj.style.set_buttonpadding("0 0 0 10");
            obj.style.set_buttontext("멀티파일선택");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_align("center middle");
            obj.set_multiselect("true");
            obj.set_itemcount("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "496", "240", "75", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text("item 추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "622", "144", "69", "36", null, null, this);
            obj.set_taborder("16");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "29", "60", "577", "124", null, null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_File");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"FILE_PATH\"/><Cell col=\"1\" disptype=\"normal\" text=\"FILE_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"FILE_SIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"FILE_SAVENM\"/><Cell col=\"4\" disptype=\"normal\" text=\"FILE_TYPE\"/><Cell col=\"5\" disptype=\"normal\" text=\"NUM\"/><Cell col=\"6\" disptype=\"normal\" text=\"CHK\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:FILE_PATH\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:FILE_SAVENM\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:FILE_TYPE\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:NUM\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "216", "884", "2", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", "43", "280", "427", "210", null, null, this);
            obj.set_taborder("19");
            obj.set_multiselect("false");
            obj.getSetter("retry").set("0");
            obj.style.set_buttonsize("100");
            obj.style.set_buttonpadding("0 0 0 10");
            obj.style.set_buttontext("싱글파일선택");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_align("center middle");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "592", "240", "75", "30", null, null, this);
            obj.set_taborder("20");
            obj.set_text("item 삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "984", "279", "661", "241", null, null, this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_File00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"FILE_PATH\"/><Cell col=\"1\" disptype=\"normal\" text=\"FILE_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"FILE_SIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"FILE_SAVENM\"/><Cell col=\"4\" disptype=\"normal\" text=\"FILE_TYPE\"/><Cell col=\"5\" disptype=\"normal\" text=\"NUM\"/><Cell col=\"6\" disptype=\"normal\" text=\"CHK\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:FILE_PATH\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:FILE_SAVENM\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:FILE_TYPE\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:NUM\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "395", "234", "71", "36", null, null, this);
            obj.set_taborder("22");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "68.46%", "236", null, "44", "20.5%", null, this);
            obj.set_taborder("23");
            obj.set_text("FileDownload");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "712", "162", "100", "40", null, null, this);
            obj.set_taborder("24");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload01", "absolute", "696", "69", "100", "40", null, null, this);
            obj.set_taborder("25");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "4.78%", "321", null, "204", "6.67%", null, this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_File01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"133\"/><Column size=\"140\"/><Column size=\"182\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"STRE_FILE_PATH\"/><Cell col=\"1\" text=\"ORIGN_FILE_NM\"/><Cell col=\"2\" text=\"FILE_SIZE\"/><Cell col=\"3\" text=\"STRE_FILE_NM\"/><Cell col=\"4\" text=\"FILE_EXT\"/><Cell col=\"5\" text=\"NUM\"/><Cell col=\"6\" text=\"CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:STRE_FILE_PATH\"/><Cell col=\"1\" text=\"bind:ORIGN_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" text=\"bind:STRE_FILE_NM\"/><Cell col=\"4\" text=\"bind:FILE_EXT\"/><Cell col=\"5\" text=\"bind:NUM\"/><Cell col=\"6\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1005, 690, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WebEditorTest");
            		p.set_titletext("파일업로드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("test_fileUploadDownload.xfdl", function(exports) {
        this.FileUpload00_onitemchanged = function(obj,e)
        {
            var sFileName;
        	var sFilePath;
        	
        	if(obj.multiselect)
            {		
        	    var sFullData = e.newvalue;
        		var aFilePath = sFullData.split(",");
        		this.ds_File.clearData();
        	}
        	
        	for(var i=0; i<aFilePath.length; i++)
        	{
        		sFilePath = aFilePath[i];
        		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		sFileName = sFilePath.substr(dirExpt);
        		
        		this.ds_File.addRow();
        		
        		this.ds_File.setColumn(i, "FILE_PATH", sFilePath);
        		this.ds_File.setColumn(i, "FILE_NAME", sFileName);
        		this.ds_File.setColumn(i, "NUM", i+1);
        		this.ds_File.setColumn(i, "CHK",1);	
        	}
        }

        //멀티업로드
        this.Button00_onclick = function(obj,e)
        {
            var strUrl  = "http://localhost:8080/base/upload.do?path=C:/uploadDir";
            var upSu = this.FileUpload02.upload(strUrl);
            this.alert(upSu);  
        }

        this.FileUpload02_onitemchanged = function(obj,e)
        {
        	
        	var sFilePath = e.newvalue;

        	//sFilePath = aFilePath[i];
        	var dirExpt = sFilePath.lastIndexOf("\\")+1;
        	var sFileName = sFilePath.substr(dirExpt);
        	trace(sFileName);
        	var nRow = this.ds_File00.addRow();
        	
        	this.ds_File00.setColumn(nRow, "FILE_PATH", sFilePath);
        	this.ds_File00.setColumn(nRow, "FILE_NAME", sFileName);
        	
        }

        //추가
        this.Button04_onclick = function(obj,e)
        {
        	this.FileUpload02.appendItem();
        }

        //삭제
        this.Button01_onclick = function(obj,e)
        {
        	var nRow = this.ds_File00.rowposition;
        	this.FileUpload02.deleteItem(nRow);	
        	this.ds_File00.deleteRow(nRow);
        }

        //싱글업로드
        this.Button02_onclick = function(obj,e)
        {
            var strUrl  = "http://localhost:8080/base/upload.do?path=C:/uploadDir";
            var upSu = this.FileUpload02.upload(strUrl);
            this.alert(upSu);	
        }

        this.FileDownload00_onclick = function(obj,e)
        {
        	var strFileName = this.ds_File00.getColumn(0, "FILE_NAME");
        	
        	this.FileDownload00.set_downloadurl("http://localhost:8080/base/download.do");
        	var bSucc = this.FileDownload00.download();	
        }

        
        this.FileUpload02_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace(e.errorcode);
        	trace(e.errormsg);
        }

        
        this.FileUpload02_onsuccess = function(obj,e)
        {
          
            this.alert("성공");
           /* 
        	trace(e);
        	for(a in e)
        	{
        		trace(a + ">>> : " + e[a]);
        	}
        	//trace("FileUpload00_onload");
        	if( e.datasets == null )
        	{
        		this.alert("업로드 실패");
        	} else {
        		this.alert("업로드 성공");
        		trace(e.datasets[0].saveXML());
        */		
        		

        	if( e.datasets == null ){
        		this.alert("Upload error");
        	}else{
        		this.alert("Upload success");

        		// After file uploading sucess , saving file name into DataSet after receiving from output Dataset

        		this.ds_uploadresult.copyData(e.datasets[0]);
        		
        		for(var i=0; i<this.ds_uploadresult.rowcount; i++){
        			this.ds_File.setColumn(i,"FILE_PATH",this.ds_uploadresult.getColumn(i,"filePath"));
        			this.ds_File.setColumn(i,"FILE_SAVENM",this.ds_uploadresult.getColumn(i,"fileReName"));
        			this.ds_File.setColumn(i,"FILE_SIZE",this.ds_uploadresult.getColumn(i,"fileSize"));
        			this.ds_File.setColumn(i,"FILE_TYPE",this.ds_uploadresult.getColumn(i,"fileType"));
        		}
        	}
        	

        //		업로드 성공 후 받은 데이터셋에서 해당 파일의 파일명을 데이터셋에 저장.
        //        this.alert(e.datasets[0].getColumn(0,"FILE_EXT"));
        		//this.ds_uploadresult.setColumn(0,"fileName",e.datasets[0].getColumn(0,"fileName"));
        		//this.Ds_Del.setColumn(0,"FileNm",e.datasets[0].getColumn(0,"fileName"));
        		
        //		FileDown컴포넌트를 클릭시 다운로드 되도록 셋팅.
        /*
        		this.FileDownload00.set_text(e.datasets[0].getColumn(0,"fileName"));
        		this.FileDownload00.downloadfilename = e.datasets[0].getColumn(0,"fileName");
        		this.FileDownload00.set_downloadurl("http://127.0.0.1/fileDownload.jsp?file="+e.datasets[0].getColumn(0,"fileName"));	
        		this.ds_uploadresult.copyData(e.datasets[0]);
        */
        }
        function fn_callback(svcID,nCD ,sMSG)
        {
        	if (nCD < 0 )
        	{
        		alert("실패");
        		return;
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.WebEditorTest_onload, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload01_onerror, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.FileUpload02_onitemchanged, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload02_onerror, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload02_onsuccess, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.FileDownload00.addEventHandler("onclick", this.FileDownload00_onclick, this);
            this.FileDownload01.addEventHandler("onclick", this.FileDownload01_onclick, this);

        };

        this.loadIncludeScript("test_fileUploadDownload.xfdl", true);

       
    };
}
)();
