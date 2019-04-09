//XJS=CommUtil.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /**********************************************************************************
        * CommUtil(공통 유틸)
        **********************************************************************************
        **********************************************************************************
        * Function List 
        **********************************************************************************
        * gfn_TodayTime               : 해당 PC의 오늘 날짜+시간를 가져온다.

        /*******************************************************************************
         * Function Name: gfn_TodayTime
         * Description  : 해당 PC의 오늘 날짜+시간를 가져온다.
         * Arguments    : None
         * return       : string
         ******************************************************************************/
        this.gfn_todayTime = function ()
        {
        	var strToday = "";
        	var objDate = new Date();

        	var strToday = objDate.getFullYear() + "";
        	strToday += this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	strToday += this.gfn_right("0" + objDate.getDate(), 2);
        	strToday += this.gfn_right("0" + objDate.getHours(), 2);
        	strToday += this.gfn_right("0" + objDate.getMinutes(), 2);
        	strToday += this.gfn_right("0" + objDate.getSeconds(), 2);

        	return strToday;
        }

        
        /*******************************************************************************
         * Function Name: gfn_Today
         * Description  : 해당 PC의 오늘 날짜를 가져온다.
         * Arguments    : None
         * Return       :  string
         ******************************************************************************/
        this.gfn_today = function ()
        {
        	var strToday = "";
        	var objDate = new Date();

        	var strToday = objDate.getFullYear() + "";
        	strToday += this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	strToday += this.gfn_right("0" + objDate.getDate(), 2);

        	return strToday;
        }

        

        /**********************************************************************************
         * Function Name: gfn_right
         * Description  : 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         * Arguments    : val   (오른부분을 얻어올 원본 문자열)
         *                nSize (얻어올 크기. [Default Value = 0])
         * Return       : String
         **********************************************************************************/
        this.gfn_right = function (val,nSize)
        {
        	var nStart = this.gfn_toString(val).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = val.substring(nStart, nEnd);

        	return rtnVal;
        }

        /**********************************************************************************
         * Function Name: gfn_Left
         * Description  : 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
         * Arguments    : val (외쪽부분을 얻어올 원본 문자열)
         *                     nSize (얻어올 크기. [Default Value = 0])
         * return       : String, 오른쪽 부분이 얻어진 문자열.
         **********************************************************************************/
        this.gfn_left = function (val,nSize)
        {
        	return this.gfn_toString(val).substr(0, nSize);
        }

        /*******************************************************************************
         * Function Name: gfn_toString
         * Description  : 입력값을 String으로 변경한다.
         * Arguments    : val
         * Return       : String
         *******************************************************************************/
        this.gfn_toString = function (val)
        {
        	if (this.gfn_isNull(val)) 
        	{
        		return new String();
        	}
        	return new String(val);
        }

        /*******************************************************************************
         * Function Name: gfn_isEmpty
         * Description  : 입력값이 존재하는지 여부 체크.
         * Arguments    : val : 입력값
         * Return       : Boolean
         *******************************************************************************/
        this.gfn_isEmpty = function (val)
        {
        //     var rtnVal = (this.gfn_isNull(val)) ? "" : val;
        // 	return rtnVal;
        	var sVal = new String(val);
        	if(val == null || sVal.trim().length <= 0 || escape(val) == "undefined"){
        		return true;
        	}else{
        		return false;
        	}	
        }

        /*******************************************************************************
         * Function Name: gfn_isNull
         * Description  : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments    : val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return       : Boolean,  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         이외의 경우 = false
         ******************************************************************************/
        this.gfn_isNull = function (val)
        {
        	if (Eco.isEmpty(val) || new String(val).valueOf() == "undefined" || new String(val).valueOf() == undefined ) 
        	{
        		return true;
        	}
        	if (val == null) 
        	{
        		return true;
        	}
        	if (("x" + val == "xNaN") && ((new String(val.length).valueOf() == "undefined") || (new String(val.length).valueOf() == undefined))) 
        	{
        		return true;
        	}
        	if (val.length == 0) 
        	{
        		return true;
        	}

        	return false;
        }
        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
