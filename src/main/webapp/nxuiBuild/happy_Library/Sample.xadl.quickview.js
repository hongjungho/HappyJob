(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "svcurl", "JSP", "http://localhost:8080/crudexample/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "nexacro14lib.component", "file", "./nexacro14lib/component/", "session", null, "", "", "0");
            this._addService("default_typedef.xml", "nexacro14lib.framework", "file", "./nexacro14lib/framework/", "session", null, "", "", "0");
            this._addService("default_typedef.xml", "nexacro14lib.resources", "file", "./nexacro14lib/resources/", "session", null, "", "", "0");
            this._addService("default_typedef.xml", "Css", "file", "./Css/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "Lib", "js", "./Lib/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "Frame", "form", "./Frame/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "IjectJS", "file", "./nexacro14lib/component/IjectJS/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "Sample", "form", "./Sample/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "Practice", "form", "./Practice/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "Images", "file", "./Images/", "", null, "", "", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable

            // global image
            this._addImage("kakao_account_login_btn_medium_wide", "Images/Pictures/kakao_account_login_btn_medium_wide.png");

            // global dataset
            var obj = null;
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">SAMPLE</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120831000000000</Col><Col id=\"UPDATE_USER\">admin</Col></Row><Row><Col id=\"MENU_NAME\">샘플및기능</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1001</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">Sample_01.xfdl</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col></Row><Row><Col id=\"MENU_NAME\">샘플</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">Sample</Col><Col id=\"PAGE_URL\">Sample::SampleCrud.xfdl</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1012</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">SampleCrud.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">test</Col><Col id=\"MENU_SEQ\">3</Col><Col id=\"MENU_OPTP\">Test</Col><Col id=\"PAGE_URL\">Practice::test001.xfdl</Col><Col id=\"MENU_TOP\">1002</Col><Col id=\"MENU_ID\">1013</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">test001.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_UserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"authorCd\" type=\"STRING\" size=\"256\"/><Column id=\"userBirth\" type=\"STRING\" size=\"256\"/><Column id=\"userGender\" type=\"STRING\" size=\"256\"/><Column id=\"brrCdnum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"domain\" type=\"STRING\" size=\"256\"/><Column id=\"userEmail\" type=\"STRING\" size=\"256\"/><Column id=\"domaincode\" type=\"STRING\" size=\"256\"/><Column id=\"userPwd\" type=\"STRING\" size=\"256\"/><Column id=\"userIspwd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userNo\">1</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_bookInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bookNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Sample");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("default.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1024", "768", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_showcascadestatustext("false");
            mainframe.set_showcascadetitletext("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            this.addChild(obj.name, obj);
            this.frame = obj;
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj = null;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.addIncludeScript("Sample.xadl", "Lib::Comm.xjs");
        this.registerScript("Sample.xadl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("Lib::Comm.xjs", null, exports); }	//include "Lib::Comm.xjs";

        this.fn_test = function(obj,e)
        {
        	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2.set_visible(false);
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_left(0);	
        	application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3.set_width(1024);	
        	var sURL = "Practice::Main.xfdl";
            this.gfn_main(sURL);
        }
        
        });


        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("default.xtheme");


        this.loadIncludeScript("Sample.xadl", true);
    };
}
)();
