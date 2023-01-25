if (localStorage.getItem("color"))
    $("#color").attr("href", "../assets/css/" + localStorage.getItem("color") + ".css");
if (localStorage.getItem("dark"))
    $("body").attr("class", "dark-only");
$('<div class="answer-btn"> <div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"> <button class="btn btn-blck btn-toggle" id="c-pills-layouts-tab" data-bs-toggle="pill" href="#c-pills-layouts" role="tab" aria-controls="c-pills-layouts" aria-selected="true">Need Some help?</button> </div></div><div class="customizer-contain custom-height"> <div class="customizer-header"> <i class="bi bi-x-circle bi-close-icon"></i></i><h4>Did you mean?</h4> </div><div class="customizer-body custom-scrollbar px-2"><ul class="list-group list-group-flush answer-list"><li class="list-group-item "><h5>Answer 1</h5><p class="d-flex justify-content-between align-items-center">Cras justo odio<i class="bi bi-files"></i></p></li><li class="list-group-item"><h5>Answer 2</h5><p class="d-flex justify-content-between align-items-center">Cras justo odio<i class="bi bi-files"></i></p></li><li class="list-group-item "><h5>Answer 3</h5><p class="d-flex justify-content-between align-items-center">Cras justo odio<i class="bi bi-files"></i></p></li><li class="list-group-item"><h5>Answer 4</h5><p class="d-flex justify-content-between align-items-center">Cras justo odio<i class="bi bi-files"></i></p></li></ul><button class="btn btn-blck w-100"><i class="bi bi-arrow-counterclockwise"></i>Refresh</button></div></div>').appendTo($('body'));
(function (){})();

//live customizer js
$(document).ready(function () {
  
    $(".answer-btn #c-pills-home-tab, .answer-btn #c-pills-layouts-tab").click(function () {
        $(".customizer-contain").addClass("open");
        $(".answer-btn").addClass("open");
    });

    $(".close-customizer-btn").on('click', function () {
        $(".floated-customizer-panel").removeClass("active");
    });

    $(".customizer-contain .bi-close-icon").on('click', function () {
        $(".customizer-contain").removeClass("open");
        $(".answer-btn").removeClass("open");
    });

    $(".color-apply-btn").click(function(){
        location.reload(true);
    });

    
});