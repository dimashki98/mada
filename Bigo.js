$(document).ready(function () {
    var allowReload = false; // منع إعادة التحميل افتراضيًا

    // اتصال Socket.IO (تأكد من أن الخادم معد بشكل صحيح)
    var socket = io();

    // تسجيل الخروج
    window.logout = function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم تسجيل الخروج.");
        location.href = "/logout"; // توجيه المستخدم إلى صفحة تسجيل الخروج
    };

    // عند الضغط على زر الطرد أو الحظر
    $(document).on("click", ".uban, .ukick", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم تنفيذ إجراء الطرد أو الحظر.");
    });

    // استلام إشعار الطرد من الخادم
    socket.on("kick", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم طردك من الموقع.");
        location.href = "/kicked"; // توجيه المستخدم إلى صفحة الطرد (يمكنك تخصيص الرابط)
    });

    // استلام إشعار الحظر من الخادم
    socket.on("ban", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم حظرك من الموقع.");
        location.href = "/banned"; // توجيه المستخدم إلى صفحة الحظر (يمكنك تخصيص الرابط)
    });

    // منع إعادة التحميل في الحالات العادية فقط
    $(window).on("beforeunload", function (event) {
        if (!allowReload) {
            event.preventDefault();
            event.returnValue = ""; // منع التحميل
            console.log("تم منع إعادة تحميل الصفحة.");
        }
    });
});
