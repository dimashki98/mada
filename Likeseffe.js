$(document).ready(function () {
    // تابع لمراقبة العناصر المضافة في الصفحة
    const checkForLikeNotification = setInterval(function () {
        // العثور على العنصر الذي يحتوي على نص "حصلت على إعجاب"
        $('div.break.fl').each(function() {
            if ($(this).text().includes('حصلت على إعجاب')) {
                // تشغيل تأثير القلوب المتساقطة
                launchConfetti();
            }
        });
    }, 1000); // التحقق كل ثانية

    // دالة لتشغيل تأثير القلوب المتساقطة
    function launchConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                let confetti = $("<div class='confetti'>❤️</div>");
                $("body").append(confetti);

                let leftPosition = Math.random() * 100 + 'vw';
                let animationDuration = Math.random() * 3 + 2 + 's';

                confetti.css({
                    'left': leftPosition,
                    'animation-duration': animationDuration,
                    'animation-timing-function': 'linear',
                    'animation-name': 'fall',
                    'font-size': '24px',  // حجم القلب
                    'color': 'red',        // لون القلب
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

    // إضافة تأثير CSS للقلوب المتساقطة
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
            .confetti {
                font-size: 24px; /* حجم القلب */
                color: red;      /* لون القلب */
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear infinite;
            }
        `)
        .appendTo('head');
});
