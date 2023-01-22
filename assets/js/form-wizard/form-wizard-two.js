"use strict";
function testAnim() {
    $('#animation-box').removeClass().addClass('fadeOutLeft animated ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).addClass('d-none');
        setProgressBar(current++)
    });
    $('#animation2-box').removeClass('d-none');
    $('.prevBtn').removeClass('d-none');
};
var animate_custom = {
    init: function() {
        $('.js-triggeraNimation').click(function(e){
            e.preventDefault();
            var anim = $('.js-animations').val();
            testAnim(anim);
        });
        $('.js-animations').change(function(){
            var anim = $(this).val();
            testAnim(anim);
        });
    }
};
(function($) {
    "use strict";
    animate_custom.init()
})(jQuery);
var current=1;
var steps = $(".animation-box").length;
function setProgressBar(curStep){
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
              .css("width",percent+"%")   
        }