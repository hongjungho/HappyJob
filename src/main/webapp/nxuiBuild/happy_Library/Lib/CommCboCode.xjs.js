﻿//XJS=CommCboCode.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
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
         
        this.gfn_getCboComplexCmmnCd1 = function(formNm,cdParam,callBack){

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
        	tmpDsService.setColumn(nDsSrvRow, "sController", "practice/selectCdCboList.do");
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
        this.gfn_getCmmnCdParamDs2 = function(){
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
         
        this.gfn_getCboComplexCmmnCd3 = function(formNm,cdParam,callBack){

        	gCdParam = new Array(); 
        	gCdParam = cdParam;
        	
        	//IN DS 생성
        	var dsCmmInParam = this.gfn_getCmmnCdParamDs3();
        	
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
        	tmpDsService.setColumn(nDsSrvRow, "sController", "admin/selectCdCboList.do");
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
        this.gfn_getCmmnCdParamDs3 = function(){
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

        
        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
