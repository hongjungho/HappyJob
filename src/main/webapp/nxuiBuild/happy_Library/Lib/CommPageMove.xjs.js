﻿//XJS=CommPageMove.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        this.gfn_main = function(sURL)
        {
        	// mainFrame 주소
        	var oCF1 = application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame3;
        	
        	oCF1.set_formurl(sURL);
        }

        this.gfn_left = function(sURL)
        {
           var oLF = application.mainframe.VFrameSet0.VFrameSet1.HFrameSet0.ChildFrame2;
           oLF.set_formurl(sURL);
        }

        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
