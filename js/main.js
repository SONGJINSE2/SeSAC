var target;
let $date = document.querySelector('#date');

$("td").on("click", function( obj ){
    target = obj.currentTarget; // 현재 선택한 태그 target 변수에 담기 지금, td가 console.log로 나온다.
    /*$("#date").val( $(obj.currentTarget).text());*/
    $date.value = target.innerText;
});
function writeSchedule(){               
    var content = $("#content").val();
    $(target).append("<span>" + content + "</span>");
}

