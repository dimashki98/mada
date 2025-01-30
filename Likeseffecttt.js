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
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                let confetti = $("<div class='confetti'>" + emoji + "</div>");
                $("body").append(confetti);

                let leftPosition = Math.random() * 100 + 'vw';
                let animationDuration = Math.random() * 3 + 2 + 's'; // السرعة الطبيعية

                confetti.css({
                    'left': leftPosition,
                    'animation-duration': animationDuration,
                    'animation-timing-function': 'linear',
                    'animation-name': 'fall',
                    'font-size': '48px', // تكبير الإيموجي
                    'color': 'red',
                    'position': 'fixed',
                    'top': '0',
                    'z-index': '9999'
                });

                setTimeout(() => {
                    confetti.fadeOut(300, function () {
                        $(this).remove();
                    });
                }, 1000); // حذف العنصر بعد ثانية واحدة من ظهوره
            }, i * 100);
        }
    }

    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 1; }
            }
            .confetti {
                font-size: 48px; /* تكبير حجم الإيموجي */
                color: red;
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear;
            }
        `)
        .appendTo('head');
});
