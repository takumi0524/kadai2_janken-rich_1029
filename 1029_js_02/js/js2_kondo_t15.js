//ピアノ曲

const error = "error"

$(".btn_kekka").click(function() {
    const str1 = $('input:radio[name="nation"]:checked').val();
    const str2 = $('input:radio[name="seikaku"]:checked').val();
    if (str1 == "1.ドイツ" && str2 == "1.文学"){
        window.open('/js2_kondo_t15_2.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "1.ドイツ" && str2 === "2.情熱"){
        window.open('/js2_kondo_t15_3.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "1.ドイツ" && str2 === "3.絵画"){
        window.open('/js2_kondo_t15_4.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "2.フランス" && str2 === "1.文学"){
        window.open('/js2_kondo_t15_5.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "2.フランス" && str2 === "2.情熱"){
        window.open('/js2_kondo_t15_6.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "2.フランス" && str2 === "3.絵画"){
        window.open('/js2_kondo_t15_7.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "3.ポーランド" && str2 === "1.文学"){
        window.open('/js2_kondo_t15_8.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "3.ポーランド" && str2 === "2.情熱"){
        window.open('/js2_kondo_t15_9.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else if (str1 === "3.ポーランド" && str2 === "3.絵画"){
        window.open('/js2_kondo_t15_10.html','_blank','width=800,height=800,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1,left='+(window.screen.width-500)/2+',top='+(window.screen.height-500)/2);
        return false;
    }else{
        console.log(error);  
    }});
