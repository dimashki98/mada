$(document).ready(function () {
    // تابع لمراقبة العناصر المضافة في الصفحة
    const checkForNotifications = setInterval(function () {
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
        // مسح التأثير السابق (إذا كان هناك تأثير نشط)
        $(".confetti").remove();

        // إنشاء 50 إيموجي تسقط في نفس الوقت
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
                    'font-size': '60px', // تكبير الإيموجي
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
        }, 2000);
    }

    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 1; }
            }
            .confetti {
                font-size: 60px; /* تكبير حجم الإيموجي */
                color: red;
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear;
            }
        `)
        .appendTo('head');
});
