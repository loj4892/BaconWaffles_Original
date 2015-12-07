$(document).ready(function() {

  // your jQuery code here...
    $("#btn1").click(function(){
        $('#tabs-1').show(1000);
        $('#home').hide(1000);
        $('#home').hide(1000);
        $('#tabs-3').hide(1000);
        $('#tabs-4').hide(1000);
        $('#tabs-5').hide(1000);
         $("#tabs-2").hide(1000);
    });

    $("#btn2").click(function(){
        $("#tabs-2").show(1000);
        $('#tabs-1').hide(1000);
        $('#home').hide(1000);
        $('#tabs-3').hide(1000);
        $('#tabs-4').hide(1000);
        $('#tabs-5').hide(1000);

    });
    $("#btn3").click(function(){
        $("#tabs-3").show(1000);
        $("#tabs-2").hide(1000);
        $('#tabs-1').hide(1000);
        $('#home').hide(1000);
        $('#tabs-4').hide(1000);
        $('#tabs-5').hide(1000);
    });
    $("#btn4").click(function(){
        $("#tabs-4").show(1000)
        $("#tabs-2").hide(1000);
        $('#tabs-1').hide(1000);
        $('#home').hide(1000);
        $('#tabs-3').hide(1000);
        $('#tabs-5').hide(1000);
    });
    $("#btn5").click(function(){
        $("#tabs-5").show(1000);
        $("#tabs-2").hide(1000);
        $('#tabs-1').hide(1000);
        $('#home').hide(1000);
        $('#tabs-3').hide(1000);
        $('#tabs-4').hide(1000);
        
    });
$('#arrow2').click(function(){
    for (var i = 1; i <= $('.wrapper').length; i++) { var index = i;
        if ($('#tabs-' + index).is(':visible')) {
            $('#tabs-' + index).slideToggle(500);
        if ( index === 1) {
             index = $('.wrapper').length;   
            }else {
                index--;
            }
           $('#tabs-' + index).slideToggle(500); 
            break;
        }
}
});
 $('#arrow1').click(function(){
    for (var i = 1; i <= $('.wrapper').length; i++) { var index = i;
        if ($('#tabs-' + index).is(':visible')) {
            $('#tabs-' + index).animate({ width:'toggle'},500).hide();
        if ( index === $('.wrapper').length) {
            index = 1;   
            }else {
                index++;
            }
           $('#tabs-' + index).animate({width:'toggle'},500);
            
            break;
        }
}
});  
});