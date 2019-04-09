﻿//XJS=CommService.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /**********************************************************************************
        * Function List 
        **********************************************************************************
        * gfn_getCboComplexCmmnCd              : 공통코드콤보조회
        * gfn_right                            : 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.

        /**********************************************************************************
        * Function     : this.gfn_getCboComplexCmmnCd
        * Function Name: 공통코드콤보조회
        * Description  : 콤보박스, 그리드 콤보박스 dataset 설정
        * Arguments    : formNm   : 폼명
                         param    : 설정용 배열
        *                   ㄴ param[0] : 구분(CBO-COMBO OR GCBO-GRID)
        *                   ㄴ param[1] : 대상객체
        *                   ㄴ param[2] : 그리드일경우 CELL INDEX(COMBO는 -1)
        *                   ㄴ param[3] : 콤보유형(ALL, SEL, "")
        *			     callBack : 콜백
        * Return       : void
        **********************************************************************************/
        this.gCdParam;
        this.gOutDsArr;
         
        this.gfn_getCboComplexCmmnCd = function(formNm,cdParam,callBack){

        	gCdParam = new Array(); 
        	gCdParam = cdParam;
        	
        	//IN DS 생성
        	var dsCmmInParam = this.gfn_getCmmnCdParamDs();
        	
        	var nDsInRow = dsCmmInParam.addRow();	
        	var tmpListArr = new Array();
        	var selTypeArr = new Array();
        	var objArr     = new Array();
        	var cdCnt = 0;
        		
        	for(var i=0;i<cdParam.length;i++){
        		if(!Eco.isEmpty(cdParam[i][1])){
        			tmpListArr[cdCnt]=cdParam[i][1];
        			cdCnt++;
        		}
        	}
        	
        	
        	dsCmmInParam.setColumn(nDsInRow, "paramArrStr1", callBack);
        	dsCmmInParam.setColumn(nDsInRow, "lrgClsfCdArrStr", tmpListArr.join(","));	

        	//outDs 생성
        	var tmpOutDsNmArr = new Array();//out code ds nm arr
        	gOutDsArr = new Array();	
        	var tmpOutDsArrStr = "";
        	for(var i=0;i<cdParam.length;i++){
        		if(!Eco.isEmpty(cdParam[i][1])){
        			//tmpOutDsNmArr[i] = "dsOutCmmnCd_"+formNm+"_"+i+"_VO";
        			tmpOutDsNmArr[i] = "dsOutCmmnCd_"+formNm+"_"+i+"_"+this.gfn_todayTime()+"_VO"

        			gOutDsArr[i] = new Dataset(tmpOutDsNmArr[i]); 
        			gOutDsArr[i].name=tmpOutDsNmArr[i];
        			gOutDsArr[i].addColumn("cdId", "STRING", 10);
        			gOutDsArr[i].addColumn("cdNm", "STRING", 256);
        			if(i > 0){
        				tmpOutDsArrStr += " ";
        			}
        			tmpOutDsArrStr += (tmpOutDsNmArr[i]+"="+tmpOutDsNmArr[i]);
        			this.addChild(tmpOutDsNmArr[i], gOutDsArr[i]);
        		}
        		
        		selTypeArr[i]=cdParam[i][4];
        		if(selTypeArr[i] == ""){
        			selTypeArr[i] = "N/A";
        		}
        		objArr[i]=cdParam[i][2];
        	}
        	
        	dsCmmInParam.setColumn(nDsInRow, "outDsArrStr", tmpOutDsNmArr.join(","));
        	dsCmmInParam.setColumn(nDsInRow, "selTypeArrStr", selTypeArr.join(","));
        	dsCmmInParam.setColumn(nDsInRow, "objArrStr", objArr.join(","));
        	
        	if(Eco.isEmpty(this.objects["dsCmmInParam"])){		
        		this.addChild("dsCmmInParam", dsCmmInParam);
        	}
        	
        	for ( i = 0 ; i < cdParam.length ; i ++ )
        	{	
        		if(!Eco.isEmpty(cdParam[i])){		
        			if(cdParam[i][0] == "CBO" || cdParam[i][0] == "RDO"){
        				//COMBO
        				//alert(cdParam[i][0]);
        				//alert(this.name);
        				var obj = Eco.XComp.getCompByPathName(cdParam[i][2], this);
        				
        				obj.set_innerdataset(gOutDsArr[i]);			
        				obj.set_codecolumn("cdId");
        				obj.set_datacolumn("cdNm");					
        			}else if(cdParam[i][0] == "GCBO"){
        				//GRID
        				
        				var obj = Eco.XComp.getCompByPathName(cdParam[i][2], this);
        				//cdParam[i][2].setCellProperty("body",cdParam[i][3],"displaytype","combo");
        				//cdParam[i][2].setCellProperty("body",cdParam[i][3],"edittype","combo");
        				obj.setCellProperty("body",cdParam[i][3],"combodataset",tmpOutDsNmArr[i]);
        				obj.setCellProperty("body",cdParam[i][3],"combocodecol","cdId");
        				obj.setCellProperty("body",cdParam[i][3],"combodatacol","cdNm");							
        			}
        		}
        	}

        	//dsService 임시 생성
        	var tmpDsService = this.gfn_createDsService();
        	var nDsSrvRow = tmpDsService.addRow();	
        	
        	tmpDsService.setColumn(nDsSrvRow, "svcid", "selectCdCboList");
        	tmpDsService.setColumn(nDsSrvRow, "sController", "sample/selectCdCboList.do");
        	tmpDsService.setColumn(nDsSrvRow, "inds", "dsCmmInParam=dsCmmInParam");
        	tmpDsService.setColumn(nDsSrvRow, "outds", "dsCmmInParam=dsCmmInParam "+tmpOutDsArrStr);
        	tmpDsService.setColumn(nDsSrvRow, "args", "");
        	tmpDsService.setColumn(nDsSrvRow, "bAsync", true);
        	tmpDsService.setColumn(nDsSrvRow, "nDataType", 0);
        	tmpDsService.setColumn(nDsSrvRow, "bCompress", false);
        	
        	//trace(tmpDsService.saveXML());
        	//svc call	
        	this.gfn_serviceCallByCDDsSrvId("selectCdCboList",tmpDsService, "gfn_callBackCmm");
        	
        	
        }

        /**********************************************************************************
        * Function     : this.gfn_getCmmnCdParamDs
        * Function Name: 공통업무 inDataset 생성
        * Description  : 공통업무용 in dataset 생성 
        * Arguments    : void
        * Return       : void
        **********************************************************************************/
        this.gfn_getCmmnCdParamDs = function(){
        	//inDs 생성
        	var dsCmmInParam;
        	if(!Eco.isEmpty(this.objects["dsCmmInParam"])){
        		dsCmmInParam = this.objects["dsCmmInParam"];
        		dsCmmInParam.clearData();
        	}else{
        		dsCmmInParam = new Dataset("dsCmmInParam");		
        		dsCmmInParam.name = "dsCmmInParam";
        		dsCmmInParam.addColumn("cdIdArrStr"      , "STRING", 1024);
        		dsCmmInParam.addColumn("lrgClsfCdArrStr" , "STRING", 1024);
        		dsCmmInParam.addColumn("outDsArrStr"     , "STRING", 1024);
        		dsCmmInParam.addColumn("objArrStr"       , "STRING", 1024);
        		dsCmmInParam.addColumn("selTypeArrStr"   , "STRING", 1024);
        		dsCmmInParam.addColumn("paramArrStr1"    , "STRING", 1024);
        		dsCmmInParam.addColumn("paramArrStr2"    , "STRING", 1024);
        		dsCmmInParam.addColumn("paramArrStr3"    , "STRING", 1024);
        	}
        	
        	return dsCmmInParam;
        }

        
        /**********************************************************************************
        * Function Name: 공통 SERVICE CALL FN
        * Description  : 업무화면의 dsService dataset 가져와서 CONTROLLER METHOD 호출
        * Arguments    : svcid, dsService dataset, callback function, isSessionChk
        * Return       : N/A
        **********************************************************************************/
        this.gfn_serviceCallByCDDsSrvId = function(svcid,dsService,callback){
        	
        	
        	var row = dsService.findRow("svcid",svcid);
        	
        	
        	var inDsInf = dsService.getColumn(row,  "inds");
        	var svcId = dsService.getColumn(row,  "svcid");
        	var sController = dsService.getColumn(row,  "sController");
        	
        	if(!this.gfn_isNull(inDsInf) && inDsInf.toString().trim() != "dsCmmInParam=dsCmmInParam" 
        		&& inDsInf.toString().trim() != "dsCmmAdministzone=dsCmmAdministzone"
        		//&& inDsInf.toString().trim() != "dsUsrIn=dsUsrIn"  
        		&& application.gdsCurrMnuInfo.getRowCount() > 0
        		&& svcId != "selectBusMainInf"
        		&& sController.indexOf(".pot.web.") == -1){
        		//alert(sController);
        		
        		var inDsArr1 = inDsInf.split(" ");		
        		if(inDsArr1.length > 0){
        			for(var i=0;i<inDsArr1.length;i++){
        				var inDsArr2=inDsArr1[i].split("=");
        				if(inDsArr2.length > 0){
        					var tDsNm = inDsArr2[0].toString().trim();
        					
        					if(tDsNm.indexOf("dsCmm") > -1){
        						continue;
        					}
        					
        					var dsObj  = Eco.XComp.getCompByPathName(tDsNm, this);
        					if(!this.gfn_isNull(dsObj)){
        						if(dsObj.getRowCount() > 0){
        							
        							dsObj = this.gfn_initCmmnEncParamCol(dsObj);
        							dsObj.set_updatecontrol(false);
        							var cmmnEncParamColStr ="stId="+application.gdsCurrMnuInfo.getColumn(0, "siteId");
        							 cmmnEncParamColStr+=" encParamSplit menuId="+application.gdsCurrMnuInfo.getColumn(0, "mnuId");
        							 cmmnEncParamColStr+=" encParamSplit qryCnts="+application.gdsCurrMnuInfo.getColumn(0, "mnuNm");
        							 cmmnEncParamColStr+=" encParamSplit etcInf=action : "+sController+" ";

        							if("divBody" == this.name){ 
        								cmmnEncParamColStr+=" encParamSplit scrnUrl="+this.url;
        							}else{ 
        								cmmnEncParamColStr+=" encParamSplit scrnUrl="+this.name+".xfdl";
        							}							 
        							 
        							dsObj.setColumn(0, "cmmnEncParamCol",cmmnEncParamColStr);
        							
        							dsObj.set_updatecontrol(true);
        							//alert(dsObj.saveXML());
        						}
        					}
        				}
        			}
        		}else{
        			var inDsArr2=inDsArr1[0].split("=");
        			if(inDsArr2.length > 0){
        				var tDsNm = inDsArr2[0].toString().trim();
        				if(tDsNm.indexOf("dsCmm") == -1){
        					var dsObj  = Eco.XComp.getCompByPathName(tDsNm, this);
        					if(!this.gfn_isNull(dsObj)){
        						if(dsObj.getRowCount() > 0){				
        							dsObj = this.gfn_initCmmnEncParamCol(dsObj);
        							dsObj.set_updatecontrol(false);
        							var cmmnEncParamColStr ="stId="+application.gdsCurrMnuInfo.getColumn(0, "siteId");
        							 cmmnEncParamColStr+=" encParamSplit menuId="+application.gdsCurrMnuInfo.getColumn(0, "mnuId");
        							 cmmnEncParamColStr+=" encParamSplit qryCnts="+application.gdsCurrMnuInfo.getColumn(0, "mnuNm");
        							 cmmnEncParamColStr+=" encParamSplit etcInf=action : "+sController+" ";

        							if("divBody" == this.name){ 
        								cmmnEncParamColStr+=" encParamSplit scrnUrl="+this.url;
        							}else{ 
        								cmmnEncParamColStr+=" encParamSplit scrnUrl="+this.name+".xfdl";
        							}							 
        							 
        							dsObj.setColumn(0, "cmmnEncParamCol",cmmnEncParamColStr);
        							
        							dsObj.set_updatecontrol(true);
        							//alert(dsObj.saveXML());						
        						}
        					}
        				}
        			}
        		}
        	}
        	
        	var oDatas =  {
        			  svcid : dsService.getColumn(row,  "svcid"),
        			  sController : dsService.getColumn(row,  "sController"),  
        			  inds :[dsService.getColumn(row,  "inds")],
        			  outds :[dsService.getColumn(row,  "outds")],			     
        			  args  : [dsService.getColumn(row,  "args")],	
        			  bAsync : dsService.getColumn(row,  "bAsync"),    // 비동기여부 (true : async  false: sync)
        			  nDataType : dsService.getColumn(row,  "nDataType"),   // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
        			  bCompress :dsService.getColumn(row,  "bCompress"),	 //			  

        			}; 
        			
        	//trace(oDatas);
        			
            //공통 transaction 함수 호츨   
        	Iject.transaction(this,oDatas, callback);

        }

        
        /**********************************************************************************
        * Function Name: dsService 생성
        * Description  : dsService 존재시 기생성 DS 반환 or 없으면 dsService생성
        * Arguments    : N/A
        * Return       : dataset
        **********************************************************************************/
        this.gfn_createDsService = function(){
        	if(!Eco.isEmpty(this.objects["tmpDsService"])){
        		return this.objects["tmpDsService"];
        	}else{		
        		var tmpDsService = new Dataset("tmpDsService");	
        		tmpDsService.addColumn("svcid", "STRING", 256);
        		tmpDsService.addColumn("sController", "STRING", 256);
        		tmpDsService.addColumn("inds", "STRING", 256);
        		tmpDsService.addColumn("outds", "STRING", 256);
        		tmpDsService.addColumn("args", "STRING", 512);
        		tmpDsService.addColumn("bAsync", "STRING", 256);
        		tmpDsService.addColumn("nDataType", "STRING", 256);
        		tmpDsService.addColumn("bCompress", "STRING", 256); 
        		return tmpDsService;
        	}
        }

        /**********************************************************************************
        * Function Name: 공통 SERVICE CALL FN
        * Description  : 업무화면의 dsService dataset 가져와서 CONTROLLER METHOD 호출
                         세션체크
        * Arguments    : svcid
        * Return       : N/A
        **********************************************************************************/
        this.gfn_serviceCall = function(svcid){
        	// serviceCall 들어오는이름
        	// alert(svcid)
        	this.gfn_serviceCallByDsSrvId(svcid, this.dsService, "gfn_cmmCallback");
        }

        /**********************************************************************************
        * Function Name: 공통 SERVICE CALL FN
        * Description  : 업무화면의 dsService dataset 가져와서 CONTROLLER METHOD 호출
        * Arguments    : svcid, dsService dataset, callback function, isSessionChk
        * Return       : N/A
        **********************************************************************************/
        this.gfn_serviceCallByDsSrvId = function(svcid,dsService,callback){
        	
        	var row = dsService.findRow("svcid",svcid);
        		
        	var argsTmp = dsService.getColumn(row,  "args");
        	var isSessionParam = false;
        	
        	if(this.gfn_isNull(dsService.getColumn(row,  "args"))){
        		dsService.setColumn(row,"args","");
        	}
        	
        	var oDatas =  {
        			  svcid : dsService.getColumn(row,  "svcid"),
        			  sController : dsService.getColumn(row,  "sController"),  
        			  inds :[dsService.getColumn(row,  "inds")],
        			  outds :[dsService.getColumn(row,  "outds")],			     
        			  args  : [dsService.getColumn(row,  "args")],	
        			  bAsync : dsService.getColumn(row,  "bAsync"),    // 비동기여부 (true : async  false: sync)
        			  nDataType : dsService.getColumn(row,  "nDataType"),   // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
        			  bCompress :dsService.getColumn(row,  "bCompress"),	 //			  

        			}; 
        			
        	
        		
            //공통 transaction 함수 호츨   
        	Iject.transaction(this,oDatas, callback);	
        	
        }

        this.Comm_transactionCallback = function(svcid,errCd,errMsg){
        //this.gfn_cmmCallback = function(svcid, errCd, errMsg){
        	//this.gfn_trace("gfn_cmmCallback : " + svcid + " / " + errCd +" / " + errMsg );
        	//trace("gfn_cmmCallback : " + svcid + " / " + errCd +" / " + errMsg );
        	if(errCd < 0){
        	
        	this.alert('조회결과가 없습니다');
        	}else{
        		this.lfn_cmmCallback(svcid, errCd, errMsg);	
        	}
        }
        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
