// متغير لتحديد إذا كان تسجيل الخروج يتم
let isLoggingOut = false;

// عند الضغط على زر تسجيل الخروج، تحديد أن تسجيل الخروج يتم
$(document).on('click', 'label[onclick="logout();"]', function() {
    isLoggingOut = true;
});

// عرض رسالة التأكيد عند محاولة مغادرة الصفحة
$(window).on('beforeunload', function() {
    if (!isLoggingOut) {
        return "هل أنت متأكد أنك تريد مغادرة الصفحة؟";
    }
});
