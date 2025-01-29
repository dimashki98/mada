$(document).ready(function () {
    // تابع لمراقبة العناصر المضافة في الصفحة
    const checkForNotifications = setInterval(function () {
        // البحث عن العناصر التي تحتوي على النصوص المحددة
        $('div.break.fl').each(function () {
            const text = $(this).text();

            // إذا كان النص يحتوي على "حصلت على إعجاب"، يتم تنفيذ التأثير الخاص بالإعجاب
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
    }, 1000); // التحقق كل ثانية

    // دالة لتشغيل التأثير بناءً على الإيموجي
    function launchEmojiEffect(emoji) {
        for (let i = 0; i < 50; i++) {
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
                    'font-size': '24px',
                    'color': 'red',  // يمكن تخصيص اللون حسب الحاجة
                    'position': 'fixed',
                    'top': '0',
                    'z-index': '9999'
                });

                setTimeout(() => {
                    confetti.remove();
                }, parseFloat(animationDuration) * 1000);
            }, i * 100);
        }
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
                font-size: 24px; /* حجم الإيموجي */
                color: red;      /* لون الإيموجي */
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear infinite;
            }
        `)
        .appendTo('head');
});
