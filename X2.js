$(window).on('beforeunload', function() {
    return "هل أنت متأكد أنك تريد مغادرة الصفحة؟";
});
setInterval(function () {
    $(".ovr").css({
        "opacity": "0", // يخفي العنصر بصريًا
        "pointer-events": "none" // يسمح بالتفاعل مع العناصر خلفه
    });
}, 1000); // يتحقق كل ثانية ويخفي العنصر إن وجد
