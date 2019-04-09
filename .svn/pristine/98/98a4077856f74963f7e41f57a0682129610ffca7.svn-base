//XJS=CommFrame.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /**********************************************************************************
         * Function Name: gfn_openPopup
         * Description  : 팝업 오픈 실행 함수
         * Arguments    : sPopupId		( Popup Form의 ID )
         *				: sUrl 		( Popup Form  URL )
         *				: oArg 		( Popup Form으로 전달될 Argument )
         *				: sOption 	( Popup Form Left Position )
         *				: sPopupCallback 		( Popup Form Top Position )
         * Return       : Boolean
         **********************************************************************************/
         this.gfn_openPopup = function (sPopupId,sUrl,oArg,sOption,sPopupCallback)
        {
         
          
           
        	var nLeft = -1;
        	var nTop = -1;
        	var nWidth = -1;
        	var nHeight = -1;
        	var bShowTitle = false;	
        	var bShowStatus = false;	
        	var bModeless = false;
        	var bLayered = true;
        	var nOpacity = 100;
        	var bAutoSize = false;
        	var bResizable = false;
        	var sTitleText = "";
        	
        	
        	var aVal = sOption.split(",");	
        	for (var i=0; i<aVal.length; i++) 
        	{	
        		var aVal2 = aVal[i].trim().split("=");
        		switch (aVal2[0]) 
        		{
        			case "top":				
        				nTop = parseInt(aVal2[1]);
        				break;
        			case "left":
        				nLeft = parseInt(aVal2[1]);
        				break;
        			case "width":
        				nWidth = parseInt(aVal2[1]);
        				break;
        			case "height":
        				nHeight = parseInt(aVal2[1]);
        				break;
        			case "title":
        				bShowTitle = aVal2[1];
        				break;	
        			case "titletext":
        				sTitleText = aVal2[1];
        				break;							
        			case "status":
        				bShowStatus = aVal2[1];
        				break;		
        			case "modeless":
        				bModeless = aVal2[1];
        				break;
        			case "layered":
        				bLayered = aVal2[1];
        				break;
        			case "opacity":
        				nOpacity = aVal2[1];
        				break;
        			case "autosize":
        				bAutoSize = aVal2[1];
        				break;
        			case "resizable":
        				bResizable = aVal2[1];
        				break;
        		}			
        	}	
        	
        	var sOpenalign = "";
        	
        	sTitleText = "";

        	if (nLeft == -1 && nTop == -1) 
        	{		
        		sOpenalign = "center middle";
        		nLeft   =  (application.mainframe.width / 2) - Math.round(nWidth / 2);
        		nTop    = (application.mainframe.height / 2) - Math.round(nHeight / 2) ;		
        	}
        	
        	if (nWidth == -1 && nHeight == -1) 
        	{		
        		bAutoSize = true;
        	}
        	
        	var objParentFrame = this.getOwnerFrame(); 
        	if(bModeless == "true")
        	{
        		var sOpenStyle= "showtitlebar=true showstatusbar=true autosize=false resizable=true";
        		application.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight,this);
        	}
        	else
        	{
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId,"absolute", nLeft, nTop, nWidth, nHeight, null, null, sUrl);
        		
        		newChild.set_dragmovetype("all");
        		newChild.set_showtitlebar(bShowTitle);
        		newChild.set_autosize(bAutoSize);
        		newChild.set_resizable(bResizable);
        		newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);
        		newChild.set_openalign(sOpenalign);
        		newChild.set_layered(bLayered);
        		newChild.showModal(objParentFrame, oArg, this,sPopupCallback,true);
        		newChild.style.set_opacity(nOpacity);

        	}
        }

        
        /**********************************************************************************
        * Function Name: gfn_getPopupOption
        * Description  : 팝업 오픈 option 
        * Arguments    : 팝업 WIDTH, 팝업HEIGHT, 모달여부
        * Return       : 팝업 오픈 옵션
        **********************************************************************************/
        this.gfn_getPopupOption = function(width,height,isModal){
         
        	var top = this.gfn_calcPopupOpenTop(height);
        	var left = this.gfn_calcPopupOpenLeft(width);
        	var option = "top="+top+",left="+left+",width="+width+",height="+height+",modeless="; 
        	if(isModal){
        		option += "false";
        	}else{
        		option += "true";
        	}
        	return option;
        	
        }

        /**********************************************************************************
        * Function Name: gfn_calcPopupOpenTop
        * Description  : 팝업 오픈 top 좌표
        * Arguments    : 팝업  HEIGHT
        * Return       : 오픈오픈 TOP 좌표
        **********************************************************************************/
        this.gfn_calcPopupOpenTop = function(popupHeight){
        	if(application.mainframe.VFrameSet == undefined){
        		return 100;
        	}
        	
        	var frameHeight = parseInt(application.mainframe.VFrameSet.getOffsetHeight());
        	return nexacro.round((frameHeight / 2)-(parseInt(popupHeight)/2));
        }

        /**********************************************************************************
        * Function Name: gfn_calcPopupOpenLeft
        * Description  : 팝업 오픈 left 좌표
        * Arguments    : 팝업 WIDTH
        * Return       : 오픈오픈 LEFT 좌표
        **********************************************************************************/
        this.gfn_calcPopupOpenLeft = function(popupWidth){
        	if(application.mainframe.VFrameSet == undefined){
        		return 100;
        	}
        	var frameWidth = parseInt(application.mainframe.VFrameSet.getOffsetWidth());	
        	return nexacro.round((frameWidth / 2)-(parseInt(popupWidth)/2));
        }
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
