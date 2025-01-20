$(document).ready(function () {
    var allowReload = false; // افتراضياً، لا يُسمح بإعادة التحميل.

    // اتصال Socket.IO
    var socket = io();

    // تسجيل الخروج
    window.logout = function () {
        allowReload = true; // السماح بإعادة التحميل
        location.href = "/logout"; // توجيه المستخدم إلى صفحة تسجيل الخروج
    };

    // استماع لحدث الطرد من الخادم
    socket.on("kick", function () {
        allowReload = true; // السماح بإعادة التحميل
        location.href = "/kicked"; // توجيه المستخدم إلى صفحة الطرد
    });

    // استماع لحدث الحظر من الخادم
    socket.on("ban", function () {
        allowReload = true; // السماح بإعادة التحميل
        location.href = "/banned"; // توجيه المستخدم إلى صفحة الحظر
    });

    // عند الضغط على أزرار الطرد أو الحظر
    $(document).on("click", ".uban, .ukick", function () {
        allowReload = true; // السماح بإعادة التحميل عند تنفيذ الطرد أو الحظر
    });

    // منع إعادة التحميل في الحالات الأخرى
    $(window).on("beforeunload", function (event) {
        if (!allowReload) {
            event.preventDefault();
            event.returnValue = ""; // منع إعادة التحميل
        }
    });
});
