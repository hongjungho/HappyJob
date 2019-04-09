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
            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userId\">admin</Col><Col id=\"userNm\">관리자</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">SAMPLE</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120831000000000</Col><Col id=\"UPDATE_USER\">admin</Col></Row><Row><Col id=\"MENU_NAME\">샘플및기능</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1001</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">Sample_01.xfdl</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col></Row><Row><Col id=\"MENU_NAME\">샘플</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">Sample</Col><Col id=\"PAGE_URL\">Sample::SampleCrud.xfdl</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1012</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">SampleCrud.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">test</Col><Col id=\"MENU_SEQ\">3</Col><Col id=\"MENU_OPTP\">Test</Col><Col id=\"PAGE_URL\">Practice::test001.xfdl</Col><Col id=\"MENU_TOP\">1002</Col><Col id=\"MENU_ID\">1013</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">test001.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("FarmerMDIFrame");
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
            var frame0 = new VFrameSet("vStartFrameSet", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("*,0");

            
            var frame1 = new ChildFrame("loginFrame", "absolute", null, null, null, null, null, null, "Practice::login.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.set_formurl("Practice::login.xfdl");
            var frame2 = new VFrameSet("vMainFrameSet", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_separatesize("50,*,50");

            
            var frame3 = new ChildFrame("topFrame", "absolute", null, null, null, null, null, null, "Frame::TopFrameLib.xfdl", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Frame::TopFrameLib.xfdl");
            frame3.set_showtitlebar("false");
            frame3.set_dragmovetype("none");
            var frame4 = new HFrameSet("hMiddleFrameSet", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame4.name, frame4);
            frame4.set_separatesize("240,*");

            
            var frame5 = new ChildFrame("menuFrame", "absolute", null, null, null, null, null, null, "frame::leftMenuFrame.xfdl", frame4);
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("frame::leftMenuFrame.xfdl");
            frame5.set_showtitlebar("false");
            frame5.set_dragmovetype("none");
            var frame6 = new VFrameSet("vWorkFrameSet", "absolute", null, null, null, null, null, null, frame4);
            frame4.addChild(frame6.name, frame6);
            frame6.set_separatesize("60,*");

            
            var frame7 = new ChildFrame("tabFrame", "absolute", null, null, null, null, null, null, "Frame::TopFrameLib.xfdl", frame6);
            frame6.addChild(frame7.name, frame7);
            frame7.set_showtitlebar("false");
            frame7.set_dragmovetype("none");
            frame7.set_formurl("Frame::TopFrameLib.xfdl");
            var frame8 = new FrameSet("mdiFrameSet", "absolute", null, null, null, null, null, null, frame6);
            frame6.addChild(frame8.name, frame8);

            
            var frame9 = new ChildFrame("bottomFrame", "absolute", null, null, null, null, null, null, "frame::bottomFrame.xfdl", frame2);
            frame2.addChild(frame9.name, frame9);
            frame9.set_formurl("frame::bottomFrame.xfdl");
            frame9.set_showtitlebar("false");
            frame9.set_dragmovetype("none");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onloadingglobalvariables", this.application_onloadingglobalvariables, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("FarmerMEIFrame.xadl", function(exports) {

          //login frame을 0 으로 하고 업무 frame(vMainFrameSet)을 보여줌
         this.afn_loginPass = function()
        {
         application.mainframe.vStartFrameSet.set_separatesize("0,*");
        }
        
        });


        this.checkLicense("");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("default.xtheme");


        this.loadIncludeScript("FarmerMEIFrame.xadl", true);
    };
}
)();
