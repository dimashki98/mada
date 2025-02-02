$(document).ready(function () {
    let lastNotification = ""; // لتخزين آخر إشعار ظهر  
    let effectActive = true;  // متغير لتفعيل أو تعطيل التأثيرات

    // التحقق من الإشعارات بشكل دوري
    const checkForNotifications = setInterval(function () {
        if (!effectActive) return; // إذا كانت التأثيرات غير مفعلة، لا نكمل التحقق

        $('div.break.fl').each(function () {
            const text = $(this).text().trim();

            // تعديل المطابقة هنا
            if (text !== lastNotification && (
                text.indexOf('حصلت على إعجاب') !== -1 ||
                text.indexOf('💋 أأأمـمـمـمـمـمـوأأاااحـح 💋') !== -1 ||
                text.indexOf('❤️ أنـا أحٍـبَڪ') !== -1 ||
                text.indexOf('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو') !== -1 ||
                text.indexOf('ههههههههههههههههههههههههههههههههههههههههههههههههه') !== -1
            )) {
                lastNotification = text; // تحديث الإشعار الحالي
                startEmojiEffect(text);  // تشغيل التأثير
            }
        });
    }, 1000); // التحقق كل ثانية

    function startEmojiEffect(text) {
        let emoji = '';

        if (text.indexOf('حصلت على إعجاب') !== -1) emoji = '❤️';
        else if (text.indexOf('💋 أأأمـمـمـمـمـمـوأأاااحـح 💋') !== -1) emoji = '💋';
        else if (text.indexOf('❤️ أنـا أحٍـبَڪ') !== -1) emoji = '😍';
        else if (text.indexOf('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو') !== -1) emoji = '💦';
        else if (text.indexOf('ههههههههههههههههههههههههههههههههههههههههههههههههه') !== -1) emoji = '🤣';

        for (let i = 0; i < 25; i++) {  // تغيير العدد إلى 25
            setTimeout(() => {
                let confetti = $("<div class='confetti'>" + emoji + "</div>");
                $("body").append(confetti);

                let leftPosition = Math.random() * 100 + 'vw';
                let animationDuration = Math.random() * 3 + 2 + 's';

                confetti.css({
                    'left': leftPosition,
                    'animation-duration': animationDuration,
                    'animation-timing-function': 'linear',
                    'animation-name': 'fall',
                    'font-size': '80px',
                    'color': 'red',
                    'position': 'fixed',
                    'top': '0',
                    'z-index': '9999',
                    'transform': 'scale(3)'
                });

                setTimeout(() => {
                    confetti.remove();
                }, parseFloat(animationDuration) * 1000);
            }, i * 100);
        }

        // إيقاف التأثير بعد ثانيتين
        setTimeout(() => {
            $(".confetti").remove(); // إزالة جميع الإيموجيات
        }, 2000);
    }

    // إضافة تأثير CSS للأشياء المتساقطة
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
            .confetti {
                font-size: 80px;
                color: red;
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear infinite;
            }
        `)
        .appendTo('head');

    // إضافة زر لتفعيل/تعطيل التأثيرات
    const toggleButton = $('<button>إيقاف التأثيرات</button>')
        .addClass('label tc border btn label-info fl')
        .css({
            'background-color': 'ghostwhite',
            'color': 'black',
            'margin': '1px 4px',
            'padding': '6px',
            'width': '98%'
        })
        .click(function () {
            effectActive = !effectActive; // تبديل الحالة
            if (effectActive) {
                $(this).text('إيقاف التأثيرات');  // تعديل النص
                alert('تم تفعيل التأثيرات');
            } else {
                $(this).text('تشغيل التأثيرات');  // تعديل النص
                alert('تم إيقاف التأثيرات');
            }
        });

    // إضافة الزر إلى العنصر الموجود
    $('#newoption .not_geri').append(toggleButton);
});
