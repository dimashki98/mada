$(document).ready(function () {
    var allowReload = false; // متغير لمنع إعادة التحميل بشكل افتراضي

    // السماح بإعادة التحميل عند الضغط على أزرار الخروج أو الحظر أو الطرد
    $(document).on("click", ".label-danger, .uban, .ukick", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم السماح بإعادة التحميل بسبب زر معين (خروج/طرد/حظر).");
    });

    // منع إعادة التحميل في جميع الحالات الأخرى
    $(window).on("beforeunload", function (event) {
        if (!allowReload) {
            event.preventDefault();
            event.returnValue = ""; // لضمان منع التحميل في المتصفحات الحديثة
            console.log("تم منع إعادة تحميل الصفحة.");
        }
    });

    // إعادة ضبط الحالة بعد المغادرة
    $(window).on("unload", function () {
        allowReload = false; // إعادة ضبط المتغير لمنع إعادة التحميل في المستقبل
    });
});
