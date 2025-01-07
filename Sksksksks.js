$(document).ready(function() {
    function applyStyles() {
        // التحقق من أن الغرفة النشطة هي nlgt6ll2rn
        if ($(".room.active").attr("data-id") === "nlgt6ll2rn") {
            if (!$("#custom-style").length) { // تجنب التكرار
                $("<style id='custom-style'>\
                .nosel.d-flex .label-primary, \
                .nosel.d-flex .corner.fa.fa-user.label.uc.fa-microphone.label-danger {\
                background-color: transparent !important;\
                letter-spacing: 1px;\
                -webkit-text-fill-color: #ffd6b5;\
                padding: 0px !important;\
                border-radius: 50px !important;\
                margin-left: 20px !important;\
                margin-top: 30px !important;\
                }\
                .nosel.d-flex img.fl {\
                margin-left: 90px !important;\
                margin-top: 30px !important;\
                }\
                .nosel.d-flex.bord {border-inline: 4px solid #fafbfc !important;}\
                .nosel.d-flex {\
                margin-bottom: 3px !important;\
                margin-top: 2px !important;\
                border-radius: 4px;\
                border: 1px solid #fff;\
                display: inline-block;\
                background-image: url(https://up6.cc/2024/05/171606514025151.gif);\
                background-size: 100%;\
                padding: 5px !important;\
                border-radius: 0px 15px 0px 15px !important;\
                }\
                .nosel.d-flex .dots.mini.u-msg {\
                margin-bottom: 0px !important;\
                margin-top: 30px !important;\
                text-align: right!important;\
                margin-left: 90px !important;\
                font-size: 1px !important;\
                -webkit-text-fill-color: transparent !important;\
                }\
                .nosel.d-flex .fitimg.u-pic.borderg {\
                height: 0px !important;\
                width: 0px !important;\
                padding: 5px !important;\
                background-color: transparent !important;\
                border: 2px solid transparent !important;\
                }\
                .nosel.d-flex .u-topic.dots {\
                text-transform: uppercase;\
                -webkit-text-fill-color: transparent;\
                animation: textclip 2s linear infinite;\
                display: inline-block;\
                font-size: 20px !important;\
                font-style: normal;\
                font-family: sans-serif;\
                color: transparent !important;\
                background-size: 100% 100%;\
                margin-top: -11% !important;\
                }\
                @keyframes textclip {to {background-position: 200% center;}}\
                </style>").appendTo("head");
            }
        } else {
            $("#custom-style").remove(); // إزالة التنسيق إذا غيّر المستخدم الغرفة
        }
    }

    // تنفيذ الفحص عند تحميل الصفحة
    applyStyles();

    // مراقبة تغييرات الغرفة كل ثانية
    setInterval(applyStyles, 1000);
});
