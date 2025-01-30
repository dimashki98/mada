$(document).ready(function () {  
    let lastNotification = ""; // لتخزين آخر إشعار ظهر  

    const checkForNotifications = setInterval(function () {  
        $('div.break.fl').each(function () {  
            const text = $(this).text().trim();  

            if (text !== lastNotification && (  
                text.includes('حصلت على إعجاب') ||  
                text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋') ||  
                text.includes('❤️ أنـا أحٍـبَڪ') ||  
                text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو') ||  
                text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')  
            )) {  
                lastNotification = text; // تحديث الإشعار الحالي  
                startEmojiEffect(text);  
            }  
        });  
    }, 1000); // التحقق كل ثانية  

    function startEmojiEffect(text) {  
        let emoji = '';  

        if (text.includes('حصلت على إعجاب')) emoji = '❤️';  
        else if (text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋')) emoji = '💋';  
        else if (text.includes('❤️ أنـا أحٍـبَڪ')) emoji = '😍';  
        else if (text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو')) emoji = '💦';  
        else if (text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')) emoji = '🤣';  

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
                    'font-size': '80px',  // تحديد حجم الإيموجي هنا
                    'color': 'red',  
                    'position': 'fixed',  
                    'top': '0',  
                    'z-index': '9999',  
                    'transform': 'scale(3)'  // التأكد من زيادة الحجم بشكل كبير باستخدام scale
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
                font-size: 80px;  /* حجم الإيموجي */
                color: red;  
                position: fixed;  
                top: 0;  
                z-index: 9999;  
                animation: fall linear infinite;  
            }  
        `)  
        .appendTo('head');  
});
