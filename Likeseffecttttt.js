$(document).ready(function () {
    let effectRunning = false; // متغير لمنع تشغيل التأثير مرتين متتاليتين

    // تابع لمراقبة العناصر المضافة في الصفحة
    const checkForNotifications = setInterval(function () {
        if (effectRunning) return; // إذا كان التأثير يعمل، لا تشغل الكود مرة أخرى

        $('div.break.fl').each(function () {
            const text = $(this).text();

            if (text.includes('حصلت على إعجاب')) {
                launchEmojiEffect('❤️');
            } else if (text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋')) {
                launchEmojiEffect('💋');
            } else if (text.includes('❤️ أنـا أحٍـبَڪ')) {
                launchEmojiEffect('😍');
            } else if (text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو')) {
                launchEmojiEffect('💦');
            } else if (text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')) {
                launchEmojiEffect('🤣');
            }
        });
    }, 1000);

    function launchEmojiEffect(emoji) {
        effectRunning = true; // تحديد أن التأثير قيد التشغيل

        // إنشاء 50 إيموجي دفعة واحدة
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                let confetti = $("<div class='confetti'>" + emoji + "</div>");
                $("body").append(confetti);

                let leftPosition = Math.random() * 100 + 'vw';

                confetti.css({
                    'left': leftPosition,
                    'animation-duration': '2s', // مدة السقوط
                    'animation-timing-function': 'linear',
                    'animation-name': 'fall',
                    'font-size': '80px', // تكبير الإيموجي أكثر
                    'color': 'red',
                    'position': 'fixed',
                    'top': '0',
                    'z-index': '9999'
                });
            }, i * 50);
        }

        // إيقاف التأثير بالكامل بعد ثانيتين
        setTimeout(() => {
            $(".confetti").remove();
            effectRunning = false; // السماح بتشغيل التأثير مجددًا عند ظهور إشعار جديد
        }, 2000);
    }

    // إضافة أنيميشن السقوط
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 1; }
            }
            .confetti {
                font-size: 80px; /* تكبير الإيموجي أكثر */
                color: red;
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear;
            }
        `)
        .appendTo('head');
});
